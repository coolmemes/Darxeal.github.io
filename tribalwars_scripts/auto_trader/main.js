$.getScript("https://darxeal.github.io/tribalwars_scripts/vue.js");
$(".graph").parent().load("https://darxeal.github.io/tribalwars_scripts/auto_trader/form.html");

function waitForVueToStart() {
    if (typeof Vue === "undefined") setTimeout(waitForVueToStart, 10); else main();
}

function main() {
    var app = new Vue({
        el: "#vueapp",
        data: {
            active: false,
            resources: ["wood", "stone", "iron"],
            activeResources: {
                wood: false,
                stone: false,
                iron: false
            },
            resourceMinimums: {
                wood: 0,
                stone: 0,
                iron: 0
            },
            completedExchanges: [],
            interval: null
        },
        methods: {
            image_src : function(image) {
                return image_base + image;
            },
            resource_image: function(resource) {
                return this.image_src('resources/' + resource + '_21x18.png');
            },
            /*
             * Fire an event on a DOM element.
             * Example: `eventFire("#someid", "click");`
             * 
             * I have to use this, because $().click() doesn't behave the same as
             * a mouse click. This does.
             */
            eventFire: function(selector, event) {
                var el = $(selector)[0];
                if (el.fireEvent) {
                    el.fireEvent('on' + event);
                } else {
                    var evObj = document.createEvent('Events');
                    evObj.initEvent(event, true, false);
                    el.dispatchEvent(evObj);
                }
            },
            addCompletedExchange: function(resource, amount, cost) {
                this.completedExchanges.push({
                    resource: resource,
                    amount: amount,
                    cost: cost,
                    time: new Date().toLocaleTimeString()
                });
            },
            interceptConfirmationDialogData: function(data) {
                this.addCompletedExchange(data.resource, data.amount, data.cost);
            },
            exchange: function(resource, amount) {
                $(".premium-exchange-input").val(''); // clear all other inputs
                $(`input[name='buy_${resource}']`).val(amount); // set resource amount

                var self = this;
                setTimeout(function() { // wait a few millis to let the input fill
                    $(".btn-premium-exchange-buy").click(); // click the exchange button

                    setTimeout(function() { // wait for the game ajax request
                        if ($(".btn-confirm-yes").length == 0) return; // if the confirm button doesn't exist, abort

                        self.eventFire(".btn-confirm-yes", "click"); // click the confirm button

                        setTimeout(function() { // wait a moment
                            // if there is a 'cancel' button, something went wrong
                            // and we need to click it
                            if ($(".btn-confirm-no").length > 0) {
                                self.eventFire(".btn-confirm-no", "click");
                                // self.completedExchanges.pop();
                            }
                        }, 500);

                    }, 500);
                }, 10);
            },
            /**
             * This runs when the 'Activate' button is pressed
             */
            activate: function() {
                // check if atleast one resource is active
                this.active = false;
                this.resources.forEach(key => {
                    if (this.activeResources[key]) this.active = true;
                });
                if (!this.active) return UI.ErrorMessage("Select atleast one resource.");

                // inject our data intercept function into the PremiumExchange object
                var old = PremiumExchange.showConfirmationDialog;
                var self = this;
                PremiumExchange.showConfirmationDialog = function(data) {
                    self.interceptConfirmationDialogData(data[0]);
                    old(data);
                };

                this.interval = setInterval(this.tick, 4000);
            },
            checkForExchangableResources: function() {
                for (let i = 0; i < 3; i++) {
                    var resource = this.resources[i];
                    var inStock = PremiumExchange.data.stock[resource];
                    var storable = game_data.village.storage_max - game_data.village[resource];
                    var minimum = this.resourceMinimums[resource];

                    if (this.activeResources[resource] && storable >= minimum && inStock >= minimum) {
                        this.exchange(resource, Math.min(storable, inStock));
                        break;
                    }
                }
            },
            tick: function() {
                PremiumExchange.loadData();
                setTimeout(this.checkForExchangableResources, 500);
            },
            stop: function() {
                this.active = false;
                clearInterval(this.interval);
            }
        }
    });
}

waitForVueToStart();