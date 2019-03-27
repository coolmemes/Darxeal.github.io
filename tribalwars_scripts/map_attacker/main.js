javascript:

//game objects used:
//- game_data
//- TWMap
//- CommandPopup

//TODO: add more languages
var language = {
    scriptName: "MapAttacker by Darxeal",
    clickOnMap: "(click on map)",
    source: "Source",
    target: "Target",
    commands: "Commands",
    arrival: "Arrival",
    departure: "Departure",
    departsIn: "Departs in",
    duration: "Duration",
    units: "Units",
    notFound: "Not found",
    delayed: "Delayed",
    sent: "Sent",
    error: "Error",
    runOnlyOnMapScreen: "Run the script only on the map screen."
}

UNIT_ASSET_URL = "https://dscs.innogamescdn.com/asset/233cdec1/graphic/unit/unit_";
DELETE_BUTTON_URL = "https://dscs.innogamescdn.com/asset/233cdec1/graphic/delete.png";
COMMAND_ICON_URL = "https://dscs.innogamescdn.com/asset/233cdec1/graphic/command/";

function loadUI() {

    var html = `
	<table class='vis'>
    <tr>
        <th colspan='3'>${language.scriptName}</th>
    </tr>
    <tr>
        <td>
            <table>
                <tr>
                    <td>${language.source}:</td>
                    <td>
                        <input type='text' id='source' style="width:42px;"> <span id="a_source">${language.clickOnMap}</span>
                    </td>
                </tr>
                <tr>
                    <td>${language.target}:</td>
                    <td><input type='text' id='target' style="width:42px;"> <span id="a_target">${language.clickOnMap}</span>
                    </td>
                </tr>
                <tr>
                    <td><select size="1" id="o_send" style='width:40px'>
                            <option>${language.arrival}</option>
                            <option>${language.departure}</option>
                        </select></td>
                    <td><input type='datetime-local' id='timepicker' style="width:190px;"></td>
                </tr>
            </table>
        </td>
        <td>
            <table>
                <tr>`;

    for (i = 0; i < units.length; i++) {
        html += `<th><img src='${UNIT_ASSET_URL}${units[i]}.png'></th>`;
    }

    html += "<tr>";
    for (i = 0; i < units.length; i++) {
        html += "<td><input type='number' style='width:40px' id='v_" + units[i] + "'></td>";
    }

    html += "</tr><tr>";
    for (i = 0; i < units.length; i++) {
        html += "<td><input type='checkbox' id='c_" + units[i] + "'></td>";
    }

    html += `
				</tr>
			</table>
		</td>
		<td>
			<table>
				<tr>
					<td><img src='${UNIT_ASSET_URL}snob.png'></td>
					<td> <input type='number' style='width:40px' id='v_train' min="0"></td>
				</tr>
				<tr>
					<td><img src='${UNIT_ASSET_URL}catapult.png'></td>
					<td> <select size="1" id="c_catapult_target" style='width:50px'>
							<option>Hlavní budova</option>
							<option>Kasárna</option>
							<option>Stáj</option>
							<option>Dílna</option>
							<option>Strážná věž</option>
							<option>Panský dvůr</option>
							<option>Kovárna</option>
							<option>Nádvoří</option>
							<option>Socha</option>
							<option>Tržiště</option>
							<option>Dřevorubec</option>
							<option>Lom na těbu hlíny</option>
							<option>železný důl</option>
							<option>Selský dvůr</option>
							<option>Skladiště</option>
							<option>Hradby</option>
						</select></td>
				</tr>
				<tr>
					<td><input id='add_u' type='button' value='u' onclick='addAttack(false)'
							class='attack btn btn-attack btn-target-action'></td>
					<td>
						<input id='add_p' type='button' value='p' onclick='addAttack(true)'
							class='support btn btn-support btn-target-action'></td>
				</tr>
			</table>
		</td>
		</tr>
	</table>`;

    content_value.children[0].outerHTML = html;
    timepicker.valueAsNumber = Timing.getCurrentServerTime() - timezoneDifference;
    map_legend.outerHTML = `
	<table id='attacks_table' class='vis'>
		<tr>
			<th colspan='3'>${language.commands}</th>
			<th>${language.units}</th>
			<th>${language.duration}</th>
			<th>${language.departure}</th>
			<th>${language.arrival}</th>
			<th colspan='2'>${language.departsIn}</th>
		</tr>
	</table>`;

    //start interval that updates command list timers
    setInterval(function () {
        for (i = 0; i < attacks.length; i++) if (attacks[i].countdown > 0) {
            attacks[i].countdown--;
            $("#a" + i).html(getTimeString(attacks[i].countdown));
        }
    }, 1000);

    //bind attack and support keys
    $(document).keypress(function (event) {
        if (!adding) {
            if (String.fromCharCode(event.which) == "u") addAttack(false);
            if (String.fromCharCode(event.which) == "p") addAttack(true);
        }
    });

    //overload the map onClick event
    TWMap.mapHandler.onClick = function (x, y) {
        var clickedVillage = TWMap.villages[x + "" + y];
        var isVillageOwnedByMe = clickedVillage.owner == game_data.player.id;
        updateSelectedVillage(x + "" + y, !isVillageOwnedByMe, false);
        return false;
    };

    //allow the user to paste in coordinates
    //TODO: improve
    $('#source').change(function () {
        x = source.value.split("|")[0];
        y = source.value.split("|")[1];
        updateSelectedVillage(x + "" + y, false);
    });
    $('#target').change(function () {
        x = target.value.split("|")[0],
            y = target.value.split("|")[1];
        updateSelectedVillage(x + "" + y, true);
    });

    //add our own canvas to the map
    //TODO: explain details
    map_whole.children[0].children[0].children[0].outerHTML +=
        "<canvas id='canvas_el' style='position: absolute; margin-left: 17px; z-index: 99; pointer-events: none;'></canvas>";

    canvas_el.width = map.offsetWidth;
    canvas_el.height = map.offsetHeight;

    //TODO: https://stackoverflow.com/a/42335949
    TWMap.mapHandler.onMovePixel = function (e, a) { this.busy || TWMap.positionMinimap(), TWMap.minimap_only || (e -= TWMap.map.bias, a -= TWMap.map.bias, TWMap.map_el_coordy.style.top = -a + "px", TWMap.map_el_coordx.style.left = -e + "px", TWMap.context.hide(), TWMap.home.updateDisplay(), redrawCanvas()) };
    TWMap.mapHandler.onResize = function (e, a) { TWMap.scaleMinimap(), canvas_el.width = e, canvas_el.height = a, TWMap.size = TWMap.map.coordByPixel(e, a, !1), TWMap.isDragResizing || TWMap.notifyMapSize(TWMap.isAutoSize) };
}


//TODO: explain details
function redrawCanvas() {
    var mx = TWMap.map.pos[0];
    var my = TWMap.map.pos[1];
    ctx.clearRect(0, 0, canvas_el.width, canvas_el.height);
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    for (var i = 0; i < attacks.length; i++) {
        var attack = attacks[i];
        if (attack.countdown > 0) {
            ctx.beginPath();
            if (attack.support) ctx.strokeStyle = 'rgba(26,209,255,0.6)'; else ctx.strokeStyle = 'rgba(255,50,0,0.6)';
            var x1 = attack.sx * 53 - mx + 26;
            var y1 = attack.sy * 38 - my + 19;
            var x2 = attack.tx * 53 - mx + 26;
            var y2 = attack.ty * 38 - my + 19;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.closePath();
        }
    }
    if (source.value && target.value) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,0.7)';
        var x1 = source.value.substring(0, 3) * 53 - mx + 26;
        var y1 = source.value.substring(4, 7) * 38 - my + 19;
        var x2 = target.value.substring(0, 3) * 53 - mx + 26;
        var y2 = target.value.substring(4, 7) * 38 - my + 19;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    }
}


function addAttack(support) {

    if (!source.value) {
        $("#a_source").css("color", "red");
        return false;
    }
    if (!target.value) {
        $("#a_target").css("color", "red");
        return false;
    }

    adding = true;
    add_u.disabled = true;
    add_p.disabled = true;

    var attack = {
        source: source.value.replace("|", ""),
        target: target.value.replace("|", ""),
        source_coords: source.value,
        target_coords: target.value,
        time: timepicker.valueAsNumber,
        units: {},
        train: v_train.value,
        support: support,
        catapult_target: c_catapult_target.selectedIndex,
        send: o_send.selectedIndex,
        max_units: {},
        sx: source.value.substring(0, 3),
        sy: source.value.substring(4, 7),
        tx: target.value.substring(0, 3),
        ty: target.value.substring(4, 7),
    };

    //check how many of each unit should be sent
    for (var i = 0; i < units.length; i++) {

        //if all available units of that type should be sent
        if ($("#c_" + units[i]).is(':checked'))
            attack.units[units[i]] = "all";

        //or a specific number
        else
            attack.units[units[i]] = $("#v_" + units[i]).val();
    }

    attack.source_id = TWMap.villages[attack.source].id;
    attack.target_id = TWMap.villages[attack.target].id;
    attack.source_name = TWMap.villages[attack.source].name;
    attack.target_name = TWMap.villages[attack.target].name;

    initAttackTimer(attack);
}


//TODO: split SEND/ARRIVAL commands, because we dont need to get the command duration for SEND commands
function initAttackTimer(attack) {
    $.ajax({
        attack: attack,
        url: "/game.php?ajax=map_info&source=" + attack.source_id + "&target=" + attack.target_id,
        dataType: "json",
        type: "GET",
        success: function (e) {
            var attack = this.attack;
            var max_time = 0;

            // find the slowest unit and its travel time
            for (var key in e[0].units) {

                if (attack.units[key]) {

                    var ta = e[0].units[key].time.split(":");
                    var traveltime = ta[0] * 36e5 + ta[1] * 6e4 + ta[2] * 1e3;

                    // travel time in a support command with a knight
                    if (attack.support && attack.units["knight"]) {

                        if (key == "knight") {
                            max_time = traveltime;
                            attack.slowest_unit = key;
                        }

                    } else if (traveltime > max_time) {
                        max_time = traveltime;
                        attack.slowest_unit = key;
                    }
                }
            }

            var duration = attack.send == 1 ? 0 : max_time;
            var timeout = Math.floor(attack.time - Timing.getCurrentServerTime() - duration - 2550 + timezoneDifference);

            attack.countdown = Math.floor(timeout / 1000);
            attack.duration = getTimeString(Math.floor(max_time / 1000));
            attack.id = attacks.push(attack) - 1;

            img = attack.support ? "support" : "attack";

            var units_html = "";
            for (var key in attack.units) {
                if (attack.units[key]) units_html += `<img src='${UNIT_ASSET_URL}${key}.png' title='${attack.units[key]}'>`;
            }

            var o = new Date(Timing.getCurrentServerTime() + timeout + 2600);
            var p = new Date(attack.time + timezoneDifference);

            attacks_table.innerHTML += `
                <tr id='r${attack.id}'>
                    <td>
                        <img src='${COMMAND_ICON_URL}${img}.png'>
                        <img src='${UNIT_ASSET_URL}${attack.slowest_unit}.png'>
                    </td>
                    <td>
                        <a href='javascript:updateSelectedVillage(${attack.source}, false);'>${attack.source_name}</a>
                    </td>
                    <td>
                        <a href='javascript:updateSelectedVillage(${attack.target}, true);'>${attack.target_name}</a>
                    </td>
                    <td>${units_html}</td>
                    <td>${attack.duration}</td>
                    <td>${o.toString().substr(16, 8)}</td>
                    <td>${p.toString().substr(16, 8)}</td>
                    <td id='a${attack.id}'>${getTimeString(attack.countdown)}</td>
                    <td>
                        <a href='javascript:void(0);' onclick='removeAttack(${attack.id})'>
                            <img src='${DELETE_BUTTON_URL}'>
                        </a>
                    </td>
                </tr>`;

            var timer = setTimeout(getUnits, timeout, attack);
            attacks[attack.id].timer = timer;

            redrawCanvas();

            adding = false;
            add_u.disabled = false;
            add_p.disabled = false;
        }
    });
}

// set source or target selected village:
// display its name, center the map on it and redrawCanvas the canvas
function updateSelectedVillage(coords, isTarget, centerMap = true) {
    var x = coords.toString().substring(0, 3);
    var y = coords.toString().substring(3, 6);
    var villageNameHTML;

    if (typeof TWMap.villages[coords] != "undefined")
        villageNameHTML = "<a href='javascript:updateSelectedVillage(" + coords + "," + isTarget + ")'>" + TWMap.villages[coords].name.substring(0, 20) + "</a>";
    else
        villageNameHTML = language.notFound;

    if (isTarget) {
        target.value = x + "|" + y;
        a_target.innerHTML = villageNameHTML;
    } else {
        a_source.innerHTML = villageNameHTML;
        source.value = x + "|" + y;
    }

    if (centerMap)
        TWMap.map.centerPos(x, y);

    redrawCanvas();
}


function removeAttack(id) {
    clearTimeout(attacks[id].timer);
    attacks[id].countdown = 0;
    $("#r" + id)[0].outerHTML = "";
    redrawCanvas();
}


function getUnits(attack) {
    if (waiting) {
        setTimeout(getUnits, 5000, attack);
        $("#a" + attack.id).html(`<span style='color: yellow;'>${language.delayed}</span>`);
    } else {
        waiting = true;
        $.ajax({
            attack: attack,
            url: TWMap.urls.villagePopup.replace(/__village__/, attack.source_id),
            dataType: "json",
            type: "GET",
            success: function (e) {
                for (key in e[0].units) {
                    this.attack.max_units[key] = e[0].units[key].count.home;
                }
                attackVillage(this.attack);
            }
        });
    }
}


function attackVillage(attack) {
    CommandPopup.openRallyPoint();

    // fill in command options
    setTimeout(function (attack) {

        //set source and target villages
        template_id.form.children[2].value = attack.source_id;
        inputx.value = attack.tx;
        inputy.value = attack.ty;

        //set how much of each unit should be sent
        for (var key in attack.units) {
            if (attack.units[key]) {
                var shouldSendAll = attack.units[key] == "all";
                var notEnoughUnits = parseInt(attack.units[key]) > parseInt(attack.max_units[key]);

                if (shouldSendAll || notEnoughUnits)
                    $("#unit_input_" + key).val(attack.max_units[key]);
                else
                    $("#unit_input_" + key).val(attack.units[key]);
            }
        }

        // click the attack/support button
        setTimeout(function (attack) {
            if (attack.support) target_support.click(); else target_attack.click();

            // set catapult target and add snob trains
            setTimeout(function (attack) {

                // select catapult target
                if ((attack.units["catapult"]) && (attack.max_units["catapult"]))
                    place_confirm_catapult_target.children[0].children[0].children[0].children[1].children[0].selectedIndex = attack.catapult_target;

                // add snob trains
                if ((attack.train > 0) && (attack.units["snob"]) && (attack.max_units["snob"]))
                    for (i = 0; i < attack.train; i++)
                        troop_confirm_train.click();

                //finally confirm command
                setTimeout(function (attack) {

                    // click the button if it exists
                    if (typeof troop_confirm_go == "object") {
                        troop_confirm_go.click();
                        $("#a" + attack.id).html(`<span style='color:green;'>${language.sent}</span>`);

                    // if the confirm button doesnt exist, something went wrong
                    } else {
                        popup_box_popup_command.children[0].children[0].click();
                        $("#a" + attack.id).html(`<span style='color:red;'>${language.error}</span>`);
                    }

                    redrawCanvas();
                    waiting = false;

                }, 500, attack);
            }, 500, attack);
        }, 1000, attack);
    }, 500, attack);

}

var attacks = [];
var units = game_data.units;
if (units[units.length - 1] == "militia"){
    units.pop();
}
var timezoneDifference = new Date().getTimezoneOffset() * 60 * 1000;

if (window.location.href.indexOf("screen=map") != -1)
    loadUI();
else
    alert(language.runOnlyOnMapScreen);

ctx = canvas_el.getContext("2d");
var waiting = false;
var adding = false;