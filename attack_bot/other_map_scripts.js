function getPlayerVillages(playerid){
	i=0;
	villages = [];
	for (var key in TWMap.villages) {
		if (!TWMap.villages.hasOwnProperty(key)) continue;
		var ves = TWMap.villages[key];
		if (ves.owner == playerid) {
			villages[i]=key;
			i++;
		}
	}
	return villages;
}

function getPlayerId(name){
	for (var key in TWMap.players) {
		if(TWMap.players[key].name == name) return key;
	}
}
