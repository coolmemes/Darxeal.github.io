javascript:
/* TribalWars AttackTimer by -2142- */
place_confirm_units.outerHTML+="<br><table class='vis'><tbody id='tb'><tr><th>AttackTimer by -2142-</th></tr><tr><td id='trow'>"+
"Dopad v <input type='datetime-local' id='wtf'><input type='button' value='Potvrdit' class='btn' onclick='run()'></td></tr></tbody></table>";
troop_confirm_go.style="display:none;";
duration=parseInt(date_arrival.children[0].dataset.duration);
twohours=2*60*60*1000;
wtf.valueAsNumber=Timing.getCurrentServerTime()+duration*1000+twohours;
function run() {
arrivalTime=wtf.valueAsNumber;
timeout=arrivalTime-Timing.getCurrentServerTime()-duration*1000-twohours+25;
trow.innerHTML="<span id='cdn'></span>";
d=new Date(arrivalTime-twohours);
tb.innerHTML+="<tr><td>Dopad v "+d.toLocaleTimeString()+":<span class='grey small'>"+zeropad(d.getMilliseconds(),3)+"</span></td></tr>";
cd=Math.floor(timeout/1000);
function zeropad(number, digits) {return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;}
function updatecd() {
hours=Math.floor(cd/3600);
mins=Math.floor(cd/60)-hours*60;
secs=cd-hours*3600-mins*60;
cdn.innerHTML="Odchod za "+hours+":"+zeropad(mins,2)+":"+zeropad(secs,2);
cd--; } updatecd();
itv=setInterval(updatecd,1000);
setTimeout(function(){
clearInterval(itv);
$("#troop_confirm_go").click();
},timeout);}