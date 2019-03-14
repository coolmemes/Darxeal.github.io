javascript:
function loadUI() {
	html=`
	<table class='vis'>
	<tr><th colspan='3'>Tribal Wars Map Attack Bot by -2142-</th></tr>
	<tr>
	<td><table>
	<tr><td>Pùvod:</td><td><input type='text' id='source' style="width:42px;"> <span id="a_source">(klikni na mapì)</span></td></tr>
	<tr><td>Cíl:</td><td><input type='text' id='target' style="width:42px;"> <span id="a_target">(klikni na mapì)</span></td></tr>
	<tr><td><select size="1" id="o_send" style='width:40px'><option>Dopad:</option><option>Odchod:</option></select></td><td><input type='datetime-local' id='timepicker' style="width:190px;"></td></tr>
	</table></td><td><table>`;
	html+="<tr>";
	for(i=0;i<units.length;i++){html+="<th><img src='https://dscs.innogamescdn.com/8.86/33385/graphic/unit/unit_"+units[i]+".png'></th>";}
	html+="<tr>";
	for (i=0;i<units.length;i++) { html+="<td><input type='number' style='width:40px' id='v_"+units[i]+"'></td>"; }
	html+="</tr><tr>";
	for (i=0;i<units.length;i++) { html+="<td><input type='checkbox' id='c_"+units[i]+"'></td>"; }
	html+=`</tr>
	</table></td><td><table>
	<tr><td><img src='https://dscs.innogamescdn.com/8.86/33385/graphic/unit/unit_snob.png'></td><td> <input type='number' style='width:40px' id='v_train' min="0"></td></tr>
	<tr><td><img src='https://dscs.innogamescdn.com/8.86/33385/graphic/unit/unit_catapult.png'></td><td> <select size="1" id="c_catapult_target" style='width:50px'>
	<option>Hlavní budova</option><option>Kasárna</option><option>Stáj</option><option>Dílna</option><option>Strážní vìž</option><option>Panský dvùr</option><option>Kovárna</option><option>Nádvoøí</option><option>Socha</option><option>Tržištì</option><option>Døevorubec</option><option>Lom na tìžbu hlíny</option><option>Železný dùl</option><option>Selský dvùr</option><option>Skladištì</option><option>Hradby</option>
	</select></td></tr>
	<tr><td><input id='add_u' type='button' value='u' onclick='addAttack(false)' class='attack btn btn-attack btn-target-action'></td><td>
	<input id='add_p' type='button' value='p' onclick='addAttack(true)' class='support btn btn-support btn-target-action'></td></tr>
	</table></td></tr>
	</table>`;
	content_value.children[0].outerHTML=html;
	timepicker.valueAsNumber=Timing.getCurrentServerTime()+2*60*60*1000;
	attacks=[];
	map_legend.outerHTML="<table id='attacks_table' class='vis'><tr><th colspan='3'>Povely</th><th>Jednotky</th><th>Trvání</th><th>Odchod</th><th>Pøíchod</th><th colspan='2'>Odchod za</th></tr></table>";
	setInterval(function(){
		for(i=0;i<attacks.length;i++) if(attacks[i].cd>0){
			attacks[i].cd--;
			$("#a"+i).html(getTimeString(attacks[i].cd));
		}
	},1000);
	$(document).keypress(function(event){
		if(!adding){
			if(String.fromCharCode(event.which)=="u") addAttack(false);
			if(String.fromCharCode(event.which)=="p") addAttack(true);
		}
	});
	
	
	TWMap.mapHandler.onClick=function(x,y){
		updateVillage(x+""+y,!(TWMap.villages[x+""+y].owner==game_data.player.id),false);
		return false;
	};
	
	$('#source').change(function() {x=source.value.split("|")[0],y=source.value.split("|")[1];updateVillage(x+""+y,false);});
	$('#target').change(function() {x=target.value.split("|")[0],y=target.value.split("|")[1];updateVillage(x+""+y,true);});
	
	map_whole.children[0].children[0].children[0].outerHTML+="<canvas id='c' style='position:absolute;margin-left:17px;z-index:99;pointer-events:none;'></canvas>";
	c.width=map.offsetWidth;
	c.height=map.offsetHeight;
	TWMap.mapHandler.onMovePixel = function(e,a){this.busy || TWMap.positionMinimap(), TWMap.minimap_only || (e -= TWMap.map.bias, a -= TWMap.map.bias, TWMap.map_el_coordy.style.top = -a + "px", TWMap.map_el_coordx.style.left = -e + "px", TWMap.context.hide(), TWMap.home.updateDisplay(), redraw())};
	TWMap.mapHandler.onResize=function (e,a){TWMap.scaleMinimap(),c.width=e,c.height=a,TWMap.size=TWMap.map.coordByPixel(e,a,!1),TWMap.isDragResizing||TWMap.notifyMapSize(TWMap.isAutoSize)};
}
function redraw(){
	mx = TWMap.map.pos[0];
	my = TWMap.map.pos[1];
	ctx.clearRect(0,0,c.width,c.height);
	ctx.lineWidth=3;
	ctx.lineCap="round";
	for(i=0;i<attacks.length;i++){
		attack=attacks[i];
		if(attack.cd>0){
			ctx.beginPath();
			if(attack.support) ctx.strokeStyle = 'rgba(26,209,255,0.6)'; else ctx.strokeStyle = 'rgba(255,50,0,0.6)';
			x1=attack.sx*53 - mx + 26;
			y1=attack.sy*38 - my + 19;
			x2=attack.tx*53 - mx + 26;
			y2=attack.ty*38 - my + 19;
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.stroke();
			ctx.closePath();
		}
	}
	if (source.value && target.value) {
		ctx.beginPath();
		ctx.strokeStyle = 'rgba(255,255,255,0.7)';
		x1=source.value.substring(0,3)*53 - mx + 26;
		y1=source.value.substring(4,7)*38 - my + 19;
		x2=target.value.substring(0,3)*53 - mx + 26;
		y2=target.value.substring(4,7)*38 - my + 19;
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.stroke();
		ctx.closePath();
	}
}
function addAttack(support) {
	if(!source.value || !target.value) {alert("vypln puvod a cilovou vesnici");return false;}
	adding=true;
	add_u.disabled=true;
	add_p.disabled=true;
	attack={
		source: source.value.replace("|",""),
		target: target.value.replace("|",""),
		source_coords: source.value,
		target_coords: target.value,
		time: timepicker.valueAsNumber,
		units:{},
		train: v_train.value,
		support: support,
		catapult_target: c_catapult_target.selectedIndex,
		send: o_send.selectedIndex,
		max_units:{},
		sx: source.value.substring(0,3),
		sy: source.value.substring(4,7),
		tx: target.value.substring(0,3),
		ty: target.value.substring(4,7),
	};
	for (i=0;i<units.length;i++) { 
		if($("#c_"+units[i]).is(':checked'))
			attack.units[units[i]]="all";
		else 
			attack.units[units[i]]=$("#v_"+units[i]).val();
	}
	attack.source_id=TWMap.villages[attack.source].id;
	attack.target_id=TWMap.villages[attack.target].id;
	attack.source_name=TWMap.villages[attack.source].name;
	attack.target_name=TWMap.villages[attack.target].name;
	initAttackTimer(attack);
}
function initAttackTimer(attack){
	$.ajax({
		attack: attack,
		url: "/game.php?ajax=map_info&source="+attack.source_id+"&village="+attack.target_id,
		dataType: "json",
		type: "GET",
		success: function(e) {
			attack=this.attack;
			max_time=0;
			for (key in e[0].units){
				if (attack.units[key]){
					ta=e[0].units[key].time.split(":");
					traveltime = ta[0]*36e5+ta[1]*6e4+ta[2]*1e3;
					if(attack.support && attack.units["knight"]){
						if(key=="knight") {max_time=traveltime;attack.slowest_unit=key;}
					} else if(traveltime>max_time)
						{max_time=traveltime;attack.slowest_unit=key;}
				}
			}
			if (attack.send==1) duration=0; else duration=max_time;
			timeout = Math.floor(attack.time - Timing.getCurrentServerTime() - duration - 2550 - 2*60*60*1000);
			attack.cd=Math.floor(timeout/1000);
			attack.duration=getTimeString(Math.floor(max_time/1000));
			attack.id=attacks.push(attack)-1;
			if(attack.support) img="support"; else img="attack";
			units_html="";
			for (key in attack.units){
				if(attack.units[key]) units_html+="<img src='https://dscs.innogamescdn.com/8.86/33385/graphic/unit/unit_"+key+".png' title='"+attack.units[key]+"'>";
			}
			o=new Date(Timing.getCurrentServerTime()+timeout+2600);
			p=new Date(attack.time-2*60*60*1000);
			attacks_table.innerHTML+="<tr id='r"+attack.id+"'><td><img src='https://dscs.innogamescdn.com/8.86/33385/graphic/command/"+
			img+".png'> <img src='https://dscs.innogamescdn.com/8.86/33385/graphic/unit/unit_"+
			attack.slowest_unit+".png'><td><a href='javascript:updateVillage("+attack.source+",false);'>"+attack.source_name+"</a></td><td><a href='javascript:updateVillage("+attack.target+",true);'>"+attack.target_name+
			"</a></td><td>"+units_html+"</td><td>"+attack.duration+"</td><td>"+o.toString().substr(16, 8)+"</td><td>"+p.toString().substr(16, 8)+"</td><td id='a"+attack.id+"'>"+getTimeString(attack.cd)+
			"</td><td><a href='javascript:void(0);' onclick='removeAttack("+attack.id+")'><img src='https://dscs.innogamescdn.com/8.86/33385/graphic/delete.png'></a></td></tr>";
			
			timer=setTimeout(getUnits, timeout, attack);
			attacks[attack.id].timer=timer;
			redraw();
			adding=false;
			add_u.disabled=false;
			add_p.disabled=false;
		}
	});
}
function updateVillage(coords,t,center=true){
	x = coords.toString().substring(0,3);
	y = coords.toString().substring(3,6);
	if(t) target.value=x+"|"+y; else source.value=x+"|"+y;
	if(center) TWMap.map.centerPos(x,y);
	if(typeof TWMap.villages[coords]!="undefined") html="<a href='javascript:updateVillage("+coords+","+t+")'>"+TWMap.villages[coords].name.substring(0,20)+"</a>"; else html="Název nenalezen";
	if(t) a_target.innerHTML=html; else a_source.innerHTML=html;
	redraw();
	
}
function removeAttack(id) {
	clearTimeout(attacks[id].timer);
	attacks[id].cd=0;
	$("#r"+id)[0].outerHTML="";
	redraw();
}
function getUnits(attack){
	if(waiting){
		setTimeout(getUnits,5000,attack);
		console.log("attack delayed");
	}else{
		waiting=true;
		$.ajax({
			attack: attack,
			url: TWMap.urls.villagePopup.replace(/__village__/, attack.source_id),
			dataType: "json",
			type: "GET",
			success: function(e) {
				for (key in e[0].units){
					this.attack.max_units[key] = e[0].units[key].count.home;
				}
				attackVillage(this.attack);
			}
		});
	}
}
function attackVillage(attack) {
	console.log("attack sent");
	CommandPopup.openRallyPoint();
	setTimeout(function(attack){
		template_id.form.children[2].value = attack.source_id;
		inputx.value = attack.tx;
		inputy.value = attack.ty;
		console.log(attack);
		for (key in attack.units){
			if(attack.units[key]){
				if((attack.units[key]=="all")||(parseInt(attack.units[key])>parseInt(attack.max_units[key]))){
					$("#unit_input_"+key).val(attack.max_units[key]);
					}
				else
					$("#unit_input_"+key).val(attack.units[key]);
			}
		}
		setTimeout(function(attack){
			if (attack.support) target_support.click(); else target_attack.click();
			setTimeout(function(attack){
				if((attack.units["catapult"])&&(attack.max_units["catapult"]))
					place_confirm_catapult_target.children[0].children[0].children[0].children[1].children[0].selectedIndex=attack.catapult_target;
				if((attack.train>0)&&(attack.units["snob"])&&(attack.max_units["snob"]))
					for(i=0;i<attack.train;i++){troop_confirm_train.click();}
				setTimeout(function(attack){
					if(typeof troop_confirm_go == "object"){
						troop_confirm_go.click();
						$("#a"+attack.id).html("<span style='color:green;'>Odeslán</span>");
					}else{
						popup_box_popup_command.children[0].children[0].click();
						$("#a"+attack.id).html("<span style='color:red;'>Chyba</span>");
					}
					redraw();
					waiting=false;
				},500,attack);
			},500,attack);
		},1000,attack);
	},500,attack);

}
units=["spear","sword","axe","archer","spy","light","marcher","heavy","ram","catapult","knight","snob"];
if(window.location.href.indexOf("screen=map")!=-1) loadUI(); else alert("Script pouštìj jen v mapì"); 
ctx=c.getContext("2d");
var waiting=false;
var adding=false;