// var host = "http://localhost:8080/";
var host = "https://darxeal.github.io/";

$.getScript("https://darxeal.github.io/tribalwars_scripts/vue.js");
$("#scavenge_screen").load(host + "tribalwars_scripts/scavenger/form.html");
$.get("https://darxeal.github.io/tribalwars_scripts/tracking/update.js", (data) => {eval(data); addlog("scavenger");});

function waitForVueToStart() {
    if (typeof Vue === "undefined") setTimeout(waitForVueToStart, 10); else main();
}
waitForVueToStart();

var app;
function main() {
    app = new Vue({
        el: "#vueapp",
        data: {
            options: ScavengeScreen.village_synchronizer.options,
            interval: 60,
            active: false,
            allowedUnits: Object.keys(ScavengeScreen.sendable_units),
            sentSquads: [],
            units: Object.keys(ScavengeScreen.sendable_units)
        },
        methods: {
            image_src: function(image) {
                return image_base + image;
            },
            getOptionBase: function (option_id) {
                for (let i = 0; i < this.options.length; i++) {
                    const option = this.options[i];
                    if (option.base.id == option_id)
                        return option.base;
                }
            },
            getVillagesInfo: function (village_ids, callback) {
                TribalWars.get("scavenge_api", {
                    ajax: "villages",
                    village_ids: village_ids
                }, function (data) {
                    callback(data.villages);
                });
            },
            carryNeededForTime: function (seconds, option_base) {
                return Math.pow(-(Math.pow(100, -option_base.duration_exponent) *
                    (option_base.duration_initial_seconds * option_base.duration_factor - seconds))
                    / option_base.duration_factor, 1 / (2 * option_base.duration_exponent))
                    / option_base.loot_factor;
            },
            unitsNeededForCarry: function (unit, carry) {
                return Math.ceil(carry / ScavengeScreen.sendable_units[unit].carry);
            },
            sendSquad: function (village_id, units, option_id) {
                var self = this;
                var squad = {
                    village_id: village_id,
                    candidate_squad: {
                        unit_counts: units
                    },
                    option_id: option_id,
                    use_premium: false
                };
                TribalWars.post("scavenge_api", {
                    ajaxaction: "send_squads"
                }, {
                    squad_requests: [squad]
                }, function (response) {
                    console.log(response);
                    squad.time = new Date().toLocaleTimeString();
                    self.sentSquads.push(squad);
                    if (response.squad_responses && response.squad_responses[0].success) {
                    }
                });
            },
            calculateUnitsForScavenge: function (village_data, option_id, seconds) {
                var result = {};
                var option_base = this.getOptionBase(option_id);
                var desired_carry = this.carryNeededForTime(seconds, option_base);
                var carry_sum = 0;

                for (var unit in ScavengeScreen.sendable_units) {
                    if (!this.allowedUnits.includes(unit)) continue;

                    var home = village_data.unit_counts_home[unit];
                    var needed = this.unitsNeededForCarry(unit, desired_carry - carry_sum);
                    needed = Math.max(needed, 0);
                    result[unit] = Math.min(home, needed);
                    carry_sum += ScavengeScreen.sendable_units[unit].carry * result[unit];
                    if (needed > 0 && home >= needed) break;
                }
                if (carry_sum == 0)
                    return null;
                return result;
            },
            scavenge: function (village_ids, seconds, option_id) {
                var self = this;
                this.getVillagesInfo(village_ids, function (villages) {
                    for (let i = 0; i < village_ids.length; i++) {
                        const village_id = village_ids[i];
                        var village_data = villages[village_id];

                        if (village_data.options[option_id].is_locked
                            || village_data.options[option_id].scavenging_squad)
                            continue;

                        var units = self.calculateUnitsForScavenge(village_data, option_id, seconds);
                        if (units) {
                            setTimeout(function() {
                                self.sendSquad(village_id, units, option_id);
                            }, i * 500);
                        }
                    }
                });
            },
            scavengeAllOptions: function (village_ids, seconds) {
                var self = this;
                for (let i = 0; i < this.options.length; i++) {
                    let reversed_i = this.options.length - 1 - i;
                    setTimeout(function() {
                        self.scavenge(village_ids, seconds, self.options[reversed_i].base.id);
                    }, village_ids.length * 1000 * i);
                }
            },
            start: function() {
                var self = this;
                this.active = true;
                self.scavengeAllOptions([game_data.village.id], self.interval * 60);
                setInterval(function() {
                    self.scavengeAllOptions([game_data.village.id], self.interval * 60);
                }, (this.interval + 1) * 60 * 1000);
            }
        }
    });
}