/*
    TribalWars AttackTimer by Darxeal
    https://github.com/Darxeal/tribal-wars-scripts
*/

// hide current "Send attack" button
troop_confirm_go.style = "display:none;";

// display the UI
place_confirm_units.outerHTML += `
    <br>
    <table class='vis'>
        <tbody id='tb'>
            <tr>
                <th>AttackTimer by Darxeal</th>
            </tr>
            <tr>
                <td id='first_row'>
                    Dopad v
                    <input type='datetime-local' id='datetime_input'>
                    <input type='button' value='Confirm' class='btn' onclick='confirmAttack()'>
                </td>
            </tr>
            <tr>
                <td id='second_row'></td>
            </tr>
        </tbody>
    </table>`;


    
// parse current attack duration
attackDuration = parseInt(date_arrival.children[0].dataset.duration) * 1000;
// all time variables are in milliseconds

timezoneDifference = new Date().getTimezoneOffset() * 60 * 1000;

// set the input time to the default attack arrival time
datetime_input.valueAsNumber = Timing.getCurrentServerTime() + attackDuration - timezoneDifference;

// called on Confirm click
function confirmAttack() {

    arrivalTime = datetime_input.valueAsNumber + timezoneDifference;
    timeout = arrivalTime - Timing.getCurrentServerTime() - attackDuration;

    
    //display time info
    d = new Date(arrivalTime);
    first_row.innerHTML = "Leaves in <span id='time_left'></span>";
    second_row.innerHTML += "Arrival in " + d.toLocaleTimeString() + ":<span class='grey small'>" + zeropad(d.getMilliseconds(), 3) + "</span>";
    
    
    //display timer
    secondsLeft = Math.floor(timeout / 1000);
    function update_timer() {
        hours = Math.floor(secondsLeft / 3600);
        minutes = Math.floor(secondsLeft / 60) - hours * 60;
        seconds = secondsLeft - hours * 3600 - minutes * 60;

        time_left.innerHTML = hours + ":" + zeropad(minutes, 2) + ":" + zeropad(seconds, 2);
        secondsLeft--;
    }
    update_timer();
    time_left_interval = setInterval(update_timer, 1000);


    //start timer
    setTimeout(function () {
        clearInterval(time_left_interval);
        $("#troop_confirm_go").click();
    }, timeout);
}

// zeropad(5, 3) -> '005'
function zeropad(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}