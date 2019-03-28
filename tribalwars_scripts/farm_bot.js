javascript:
	if (window.location.href.indexOf("screen=am_farm") != -1) {

		content_value.innerHTML = "<div id='mybox' class='vis'></div>" + content_value.innerHTML;
		mybox.innerHTML += `
		<h4>FarmBot by Darxeal</h4>
		<table style='width:100%'>
			<tr>
				<td>Interval (minutes)</td>
				<td><input id='i1' type='number' value='0'></td>
			</tr>
			<tr>
				<td>Max vesnic</td>
				<td><input id='i2' type='number' value='0'></td>
			</tr>
			<tr>
				<td colspan=2 align='center'><input type='button' onclick='run()' value='Start' class='btn'></td>
			</tr>
		</table>`;

		var sleep = 1000;
		var countdown = 0;
		var attacks = 0;
		if (!attacked_checkbox.checked) $("#attacked_checkbox").click();
		var template_id = Number(document.forms[0].action.split("&")[4].replace("template_id=", ""));
		var villages = [];
		var list = plunder_list.getElementsByTagName("tr");
		for (i = 0; i < list.length; i++) {
			if (list[i].id.substr(0, 3) == "vil") villages.push(list[i].id.replace("village_", ""));
		}
		villages.filter(Number);

		function run() {
			if ((interval = Number(i1.value)) > 0)
				if ((max_vesnic = Number(i2.value)) > 0) {
					mybox.innerHTML = `
					<h4>FarmBot by -2142-</h4>
					<table style='width:100%'>
						<tr>
							<td>Attacks sent: </td>
							<td id='totalattacks'>0</td>
						</tr>
						<tr>
							<td>Next wave: </td>
							<td id='next_wave'></td>
						</tr>
					</table>`;


					function attack() {
						i = 0;
						countdown = interval * 60;
						si = setInterval(function () {
							Accountmanager.farm.current_units.light = "99999";
							Accountmanager.farm.current_units.spy = "99999";
							Accountmanager.farm.sendUnits(this, villages[i], template_id);
							i++;
							attacks++;
							totalattacks.innerHTML = "<b>" + attacks + "</b>";
							if (i == villages.length) clearInterval(si);
							if (i == max_vesnic) clearInterval(si);
						}, sleep);
					}

					attack();
					main = setInterval(function () {
						attack();
					}, interval * 60 * 1000);

					function getzero(value) {
						if (value < 10) { return "0" + value.toString(); } else { return value; }
					}

					setInterval(function () {
						countdown--;
						next_wave.innerHTML = "<b>" + Math.floor(countdown / 60) + ":" + getzero(countdown - Math.floor(countdown / 60) * 60) + "</b>";
					}, 1000);

				}
		}
	} else { alert("Run the script in the Farming Assistant"); }