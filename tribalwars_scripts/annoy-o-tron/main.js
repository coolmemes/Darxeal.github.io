javascript:

$("#content_value").html(`
<table class="vis">
    <tr>
        <th>Annoy-o-Tron</th>
    </tr>
    <td>
        <img src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/b/b2/Annoyotron_full.jpg/400px-Annoyotron_full.jpg?version=7724bf667f441932bc609f49473f0377">
    </td>
    <td>
        <div><i>Skript pošle všechny jednotky ve vesnici, a po chvilce útok zruší. Takto pokračuje v náhodných intervalech dokud nezavřeš tuhle kartu.</i></div>
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
        <div id="error-message" style="color: red; visibility: hidden;"></div>
        <div><button id="btn-confirm" class="btn">Potvrdit</button></div>
    </td>
</table>
`);

$("#btn-confirm").click(function() {

    $("error-message").hide();

    var attack = {
        source_id: game_data.village.id,
        tx: $("#input-target").val().split("|")[0],
        ty: $("#input-target").val().split("|")[1],
        units: {}
    };

    var delay = Number($("#input-delay").val()) * 60 * 1000;
    var intervalMin = Number($("#input-interval-min").val()) * 60 * 1000;
    var intervalMax = Number($("#input-interval-max").val()) * 60 * 1000;
    var cancelTimeout = Number($("#input-cancel-timeout").val()) * 1000;

    var interval;
    
    var attackAndCancelFunction = function() {
        interval = Math.floor(Math.random() * (intervalMax - intervalMin + 1)) + intervalMin;
        attackVillage(attack);
        console.log("attack sent");
        setTimeout(cancelAttack, cancelTimeout);
    };  

    setTimeout(function() {
        attackAndCancelFunction();
        setInterval(attackAndCancelFunction, interval);
    }, delay);
});

function cancelAttack() {
    $.get("game.php", function(response) {
        var cancelURL = $(response).find(".command-cancel").attr("href");
        $.post(cancelURL);
        console.log("attack canceled");
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
                    data: formData,
                    success: function (response3) {
                        console.log(response3);
                    }
                });
            }
        });
    });
}