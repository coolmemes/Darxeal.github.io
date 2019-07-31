javascript:

$("#content_value").load("https://darxeal.github.io/tribalwars_scripts/annoy-o-tron/form.html");

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