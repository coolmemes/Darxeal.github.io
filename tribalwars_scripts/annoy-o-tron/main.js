javascript:

function showErrorMessage(message) {
    $("#error-message").html(message);
    $("#error-message").show();
}

$("#content_value").html(`
<table class="vis">
<tr>
    <th colspan="2">Annoy-o-Tron</th>
</tr>
<td>
    <img src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/b/b2/Annoyotron_full.jpg/400px-Annoyotron_full.jpg?version=7724bf667f441932bc609f49473f0377">
</td>
<td id="annoy-content">
    <div><i>
        Skript pošle všechny jednotky z vesnice kterou máš teď aktivní, a po chvilce útok zruší.
        Takto pokračuje v náhodných intervalech dokud nezavřeš tuhle kartu.
        <b>Z této vesnice nesmí jít žádný jiný příkaz!</b>
    </i></div>
    <br>
    <table>
        <tr>
            <td>Cíl:</td>
            <td><input type="text" name="target" id="input-target" value="XXX|YYY"></td>
        </tr>
        <tr>
            <td>První útok se odešle za (minuty)</td>
            <td><input type="number" name="delay" id="input-delay" value="120"></td>
        </tr>
        <tr>
            <td>Minimální interval (minuty)</td>
            <td><input type="number" name="interval-min" id="input-interval-min" value="30"></td>
        </tr>
        <tr>
            <td>Maximální interval (minuty)</td>
            <td><input type="number" name="interval-max" id="input-interval-max" value="60"></td>
        </tr>
        <tr>
            <td>Útok zrušit po (sekundy)</td>
            <td><input type="number" name="cancel-timeout" id="input-cancel-timeout" value="3"></td>
        </tr>
    </table>
    <div id="error-message" style="color: red; display: none;"></div>
    <div><button id="btn-confirm" class="btn">Potvrdit</button></div>
</td>
</table>`);
    
$("#btn-confirm").click(function() {

    console.log("click");
    $("error-message").hide();

    var coords = $("#input-target").val().split("|");

    if (coords.length != 2)
        return showErrorMessage("Cíl je v nesprávném formátu.");

    var attack = {
        source_id: game_data.village.id,
        tx: coords[0],
        ty: coords[1],
        units: {}
    };

    var delay = Number($("#input-delay").val()) * 60 * 1000;
    var intervalMin = Number($("#input-interval-min").val()) * 60 * 1000;
    var intervalMax = Number($("#input-interval-max").val()) * 60 * 1000;
    var cancelTimeout = Number($("#input-cancel-timeout").val()) * 1000;

    if (delay <= 0 || intervalMin <= 0 || intervalMax <= 0 || cancelTimeout <= 0)
        return showErrorMessage("Hodnoty musí být větší než 0.");
    if (intervalMin > intervalMax)
        return showErrorMessage("Minimální interval nesmí být větší než maximální interval.");


    var interval;
    
    var attackAndCancelFunction = function() {
        interval = Math.floor(Math.random() * (intervalMax - intervalMin + 1)) + intervalMin;
        attackVillage(attack);
        $("#annoy-content").append("<div>Útok poslán.</div>");
        setTimeout(cancelAttack, cancelTimeout);
    };  

    setTimeout(function() {
        attackAndCancelFunction();
        setInterval(attackAndCancelFunction, interval);
    }, delay);

    $("#btn-confirm").attr("disabled", true);
});


function cancelAttack() {
    $.get("game.php", function(response) {
        var cancelURL = $(response).find(".command-cancel").attr("href");
        $.post(cancelURL);
        $("#annoy-content").append("<div>Útok zrušen.</div>");
    });
}

function attackVillage(attack) {

    // get number of units in this village from the Rally point 'units' screen
    $.get("game.php?village=" + attack.source_id + "&screen=place&mode=units", function(response){
        var $page = $(response);

        // set correct number of units
        for (var i = 0; i < game_data.units.length; i++) {
            var key = game_data.units[i];
            if (key != "militia")
                attack.units[key] = $page.find(".unit-item-" + key)[0].innerHTML;
        }

        // query parameters
        var formData = {
            player_id: game_data.player.id,
            source_village: attack.source_id,
            x: attack.tx,
            y: attack.ty,
            attack: 1
        };
        $.extend(formData, attack.units); // add unit numbers info

        // send command
        $.ajax({
            url: "game.php?village=" + attack.source_id + "&screen=place&ajax=confirm",
            type: "POST",
            dataType: "json",
            data: formData,
            success: function (response2) {
                
                // get some wierd but necessary value
                var $form = $("<div/>").html(response2.dialog).contents();
                formData["ch"] = $form.find("input[name='ch']").attr("value");
                
                // confirm command
                $.ajax({
                    url: "game.php?village=" + attack.source_id + "&screen=place&ajaxaction=popup_command&h=" + game_data.csrf,
                    type: "POST",
                    dataType: "json",
                    data: formData
                });
            }
        });
    });
}