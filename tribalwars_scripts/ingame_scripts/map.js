CommandPopup.openRallyPoint();

/**** game/ColorGroups.js_ ****/
var ColorGroups;
! function() {
    "use strict";
    ColorGroups = {
        TYPE_OWN: "own",
        TYPE_OTHER: "other",
        init: function(e) {
            this.color_picker.base_link = e, $(".colorgroup-own-activate").change(function() {
                var e = $(this),
                    o = e.closest(".colorgroup-own-entry").data("id");
                e.is(":checked") ? ColorGroups.Own.activateGroup(o) : ColorGroups.Own.deactivateGroup(o)
            }), $(".colorgroup-other-activate").change(function() {
                var e = $(this),
                    o = e.closest(".colorgroup-other-entry").data("id");
                e.is(":checked") ? ColorGroups.Other.activateGroup(o) : ColorGroups.Other.deactivateGroup(o)
            }), $(".colorgroup-own-delete").click(function(e) {
                e.preventDefault();
                var o = $(this).closest(".colorgroup-own-entry").data("id"),
                    a = function() {
                        ColorGroups.Own.deleteGroup(o)
                    };
                UI.addConfirmBox("Opravdu vymazat skupinu?", a)
            }), $(".colorgroup-other-delete").click(function(e) {
                e.preventDefault();
                var o = $(this).closest(".colorgroup-other-entry").data("id"),
                    a = function() {
                        ColorGroups.Other.deleteGroup(o)
                    };
                UI.addConfirmBox("Opravdu vymazat skupinu?", a)
            }), $(".colorgroup-own-entry").find(".color_picker_launcher").click(function(e) {
                e.preventDefault(), ColorGroups.color_picker.openPopup($(this), ColorGroups.TYPE_OWN)
            }), $(".colorgroup-other-entry").find(".color_picker_launcher").click(function(e) {
                e.preventDefault(), ColorGroups.color_picker.openPopup($(this), ColorGroups.TYPE_OTHER)
            })
        },
        color_picker: {
            base_link: null,
            r: 0,
            g: 0,
            b: 0,
            group_id: null,
            group_type: null,
            icon: null,
            openPopup: function(e, o) {
                var a = e.offset().left + 50,
                    r = e.offset().top - 100,
                    l = e.data("id"),
                    i = e.data("r"),
                    t = e.data("g"),
                    n = e.data("b"),
                    p = e.data("icon"),
                    c = e.data("t"),
                    u = this.base_link + "&r=" + i + "&g=" + t + "&b=" + n;
                c && (u += "&trans=" + c), this.r = i, this.g = t, this.b = n, this.group_id = l, this.group_type = o, this.icon = p, UI.AjaxPopup(null, "edit_color_popup", u, "Upravit barvu", this.handleReload, {
                    dataType: "html",
                    reload: !0
                }, !1, !1, a, r)
            },
            handleReload: function(e, o) {
                var a = ColorGroups.color_picker;
                $(o).html(e), $("#color_picker").show(), $("#color_group_id").val(a.group_id), $("#icon_url").val(a.icon), color_picker_choose(a.r, a.g, a.b, !0), $("#trans_color_input").attr("checked") && $("#color").css("background-color", "transparent"), a.group_type === ColorGroups.TYPE_OTHER ? ($("#icon_picker").hide(), $("#trans_color").hide(), $("#color_picker_submit").val("Uložit"), $("#editcolorform").submit(function(e) {
                    e.preventDefault(), ColorGroups.Other.changeColor(a.group_id, $("#color_picker_r").val(), $("#color_picker_g").val(), $("#color_picker_b").val()), $("#closelink_edit_color_popup").click()
                })) : ($("#color_picker_submit").val("Uložit"), $("#editcolorform").submit(function(e) {
                    e.preventDefault(), ColorGroups.Own.changeColor(a.group_id, parseInt($("#color_picker_r").val()), parseInt($("#color_picker_g").val()), parseInt($("#color_picker_b").val()), $("#icon_url").val(), $("#trans_color_input").is(":checked")), $("#closelink_edit_color_popup").click()
                }))
            }
        },
        Own: {
            groups: {},
            toggleCreation: function(e) {
                var o = $("#own_villages");
                o.toggle();
                var a = 0,
                    r = 0,
                    l = null;
                if (l = e.srcElement ? e.srcElement : e.target, $.cookie("popup_pos_own_villages")) {
                    var i = $.cookie("popup_pos_own_villages").split("x");
                    a = parseInt(i[0], 10), r = parseInt(i[1], 10)
                } else a = $(l).offset().left, r = $(l).offset().top - o.height() - 5;
                o.offset({
                    left: a,
                    top: r
                }), UI.Draggable(o)
            },
            activateGroup: function(e) {
                TribalWars.post("map", {
                    ajaxaction: "marker_active"
                }, {
                    group_id: e,
                    active: 1
                }, function(o) {
                    TWMap.legend.showHighlight(TWMap.legend.CATEGORY_OWN, e);
                    for (var a = ColorGroups.Own.groups[e].villages, r = 0; r < a.length; r++) TWMap.villageIcons.hasOwnProperty(a[r]) || (TWMap.villageIcons[a[r]] = {}), TWMap.villageIcons[a[r]]["group_" + e] = ColorGroups.Own.groups[e].marker;
                    TWMap.map.reload(!0)
                })
            },
            deactivateGroup: function(e) {
                TribalWars.post("map", {
                    ajaxaction: "marker_active"
                }, {
                    group_id: e,
                    active: 0
                }, function(o) {
                    TWMap.legend.hideHighlight(TWMap.legend.CATEGORY_OWN, e);
                    for (var a = ColorGroups.Own.groups[e].villages, r = 0; r < a.length; r++) delete TWMap.villageIcons[a[r]]["group_" + e];
                    TWMap.map.reload(!0)
                })
            },
            deleteGroup: function(e) {
                TribalWars.post("map", {
                    ajaxaction: "marker_delete"
                }, {
                    group_id: e
                }, function(o) {
                    $('.colorgroup-own-entry[data-id="' + e + '"]').remove(), TWMap.legend.removeHighlight(TWMap.legend.CATEGORY_OWN, e);
                    for (var a = ColorGroups.Own.groups[e].villages, r = 0; r < a.length; r++) delete TWMap.villageIcons[a[r]]["group_" + e];
                    TWMap.map.reload(!0), delete ColorGroups.Own.groups[e]
                })
            },
            changeColor: function(e, o, a, r, l, i) {
                TribalWars.post("map", {
                    ajaxaction: "marker_change"
                }, {
                    group_id: e,
                    r: o,
                    g: a,
                    b: r,
                    icon_url: l,
                    t: i
                }, function(t) {
                    TWMap.legend.updateHighlight(TWMap.legend.CATEGORY_OWN, e, t.group_name, i ? null : {
                        r: o,
                        g: a,
                        b: r
                    }, l);
                    var n = i ? "none" : "rgb(" + o + "," + a + "," + r + ")",
                        p = l ? '<img style="height:12px;width:12px;" src="' + escapeHtml(l, !0) + '">' : "",
                        c = $('.colorgroup-own-entry[data-id="' + e + '"]');
                    c.find(".marker").css("background-color", n).html(p), c.find(".color_picker_launcher").data("r", o).data("g", a).data("b", r).data("icon", l).data("t", i), ColorGroups.Own.groups[e].marker.c = n, ColorGroups.Own.groups[e].marker.img = l;
                    for (var u = ColorGroups.Own.groups[e].villages, s = 0; s < u.length; s++) TWMap.villageIcons[u[s]]["group_" + e] = ColorGroups.Own.groups[e].marker;
                    TWMap.map.reload(!0)
                })
            }
        },
        Other: {
            startCreation: function() {
                $("#new_group").show()
            },
            activateGroup: function(e) {
                TribalWars.post("map", {
                    ajaxaction: "colorgroup_active"
                }, {
                    group_id: e,
                    active: 1
                }, function(o) {
                    TWMap.legend.showHighlight(TWMap.legend.CATEGORY_OTHER, e), ColorGroups.Other.handleBigChange(o)
                })
            },
            deactivateGroup: function(e) {
                TribalWars.post("map", {
                    ajaxaction: "colorgroup_active"
                }, {
                    group_id: e,
                    active: 0
                }, function(o) {
                    TWMap.legend.hideHighlight(TWMap.legend.CATEGORY_OTHER, e), ColorGroups.Other.handleBigChange(o)
                })
            },
            deleteGroup: function(e) {
                TribalWars.post("map", {
                    ajaxaction: "colorgroup_delete"
                }, {
                    group_id: e
                }, function(o) {
                    $("#for_groups").find('.colorgroup-other-entry[data-id="' + e + '"]').remove(), TWMap.legend.removeHighlight(TWMap.legend.CATEGORY_OTHER, e), ColorGroups.Other.handleBigChange(o)
                })
            },
            changeColor: function(e, o, a, r) {
                TribalWars.post("map", {
                    ajaxaction: "colorgroup_change_color"
                }, {
                    group_id: e,
                    r: o,
                    g: a,
                    b: r
                }, function(l) {
                    TWMap.legend.updateHighlight(TWMap.legend.CATEGORY_OTHER, e, l.group_name, {
                        r: o,
                        g: a,
                        b: r
                    }), ColorGroups.Other.handleBigChange(l);
                    var i = $('.colorgroup-other-entry[data-id="' + e + '"]');
                    i.find(".marker").css("background-color", "rgb(" + o + "," + a + "," + r + ")"), i.find(".color_picker_launcher").data("r", o).data("g", a).data("b", r)
                })
            },
            handleBigChange: function(e) {
                MapHighlighter.alterAll(e.village_colors, e.player_colors, e.tribe_colors), MapHighlighter.colorAll(e.affected_villages, e.affected_players, e.affected_tribes), TWMap.minimap_cache_stamp++, TWMap.minimap.reload(!0)
            },
            editor: {
                ENTITY_TRIBE: "ally",
                ENTITY_PLAYER: "player",
                ENTITY_VILLAGE: "village",
                group_id: null,
                group_name: null,
                openPopup: function(e, o, a) {
                    var r = e.offset().left,
                        l = e.offset().top - 400;
                    this.group_id = o, this.group_name = unescapeHtml($("#groupname_" + o).html()), UI.AjaxPopup(null, "for_villages_popup", a, "Group info", this.handleReload, {
                        dataType: "html",
                        reload: !0
                    }, 290, 450, r, l)
                },
                handleReload: function(e, o) {
                    var a = ColorGroups.Other.editor;
                    $("#for_villages_popup_content").html(e), $("#for_group_id").val(a.group_id), $("#for_group_name").val(a.group_name), a.fetchGroupMembers(a.ENTITY_TRIBE), a.fetchGroupMembers(a.ENTITY_PLAYER), a.fetchGroupMembers(a.ENTITY_VILLAGE), $("#rename_group").click(function() {
                        a.renameGroup($("#for_group_name").val())
                    }), $("#add_new_tribe").click(function() {
                        a.addTribe($("#new_tribe").val())
                    }), $("#add_new_player").click(function() {
                        a.addPlayer($("#new_player").val())
                    }), $("#add_new_village").click(function() {
                        a.addVillage($("#add_village_x").val(), $("#add_village_y").val())
                    }), UI.init()
                },
                fetchGroupMembers: function(e) {
                    var o = this,
                        a = "",
                        r = null;
                    e === o.ENTITY_TRIBE && (a = "colorgroup_get_tribes", r = $("#tribes > tbody")), e === o.ENTITY_PLAYER && (a = "colorgroup_get_players", r = $("#players > tbody")), e === o.ENTITY_VILLAGE && (a = "colorgroup_get_villages", r = $("#villages > tbody")), TribalWars.post("map", {
                        ajaxaction: a
                    }, {
                        group_id: o.group_id
                    }, function(a) {
                        r.empty(), $(a).each(function(a, l) {
                            var i = $("<tr>"),
                                t = "",
                                n = escapeHtml(l.name);
                            e === o.ENTITY_TRIBE && (t = '<img src="' + l.ally_image + '" class="userimage-tiny"> ', n += " [" + escapeHtml(l.tag) + "]"), e === o.ENTITY_PLAYER && (t = '<img src="' + l.player_image + '" class="userimage-tiny"> ');
                            var p = $("<td>").html(t + n),
                                c = $("<a>").attr("href", "#").html("Vymazat ").click(function() {
                                    return o.removeMember(e, l.id), !1
                                }),
                                u = $("<td>").append(c);
                            i.append(p), i.append(u), r.append(i)
                        }), e === o.ENTITY_VILLAGE && (a.length > 0 ? $("#toggle_villages_link").show() : $("#toggle_villages_link").hide())
                    })
                },
                ajax_request: function(e, o, a, r) {
                    var l = ColorGroups.Other.editor,
                        i = $.extend({
                            group_id: l.group_id
                        }, o);
                    TribalWars.post("map", {
                        ajaxaction: "colorgroup_" + e
                    }, i, function(e) {
                        a === l.ENTITY_TRIBE && l.fetchGroupMembers(l.ENTITY_TRIBE), a === l.ENTITY_PLAYER && l.fetchGroupMembers(l.ENTITY_PLAYER), a === l.ENTITY_VILLAGE && (l.fetchGroupMembers(l.ENTITY_VILLAGE), $("#add_village_x").val(""), $("#add_village_y").val("")), "function" == typeof r && r(e)
                    })
                },
                toggleVillageList: function() {
                    $("#villages").slideToggle("fast")
                },
                renameGroup: function(e) {
                    var o = this;
                    o.ajax_request("rename", {
                        name: e
                    }, null, function(a) {
                        $("#groupname_" + o.group_id).html(escapeHtml(e)), TWMap.legend.updateHighlight(TWMap.legend.CATEGORY_OTHER, o.group_id, e, a.color), UI.SuccessMessage("Skupina byla úspěšně přejmenována")
                    })
                },
                addTribe: function(e) {
                    this.ajax_request("add_tribe", {
                        name: e
                    }, this.ENTITY_TRIBE, function(e) {
                        $("#new_tribe").val("").focus(), MapHighlighter.alterAlly(e.ally_id, e.color), MapHighlighter.colorAlly(e.ally_id), TWMap.minimap_cache_stamp++, TWMap.minimap.reload(!0), UI.SuccessMessage("Do skupiny byl přidán nový kmen")
                    })
                },
                removeTribe: function(e) {
                    this.ajax_request("del_tribe", {
                        id: e
                    }, this.ENTITY_TRIBE, function(o) {
                        MapHighlighter.alterAlly(e, o.color), MapHighlighter.colorAlly(e), TWMap.minimap_cache_stamp++, TWMap.minimap.reload(!0), UI.SuccessMessage("Kmen byl ze skupiny vymazán")
                    })
                },
                addPlayer: function(e) {
                    this.ajax_request("add_player", {
                        name: e
                    }, this.ENTITY_PLAYER, function(e) {
                        $("#new_player").val("").focus(), MapHighlighter.alterPlayer(e.player_id, e.color), MapHighlighter.colorPlayer(e.player_id), TWMap.minimap_cache_stamp++, TWMap.minimap.reload(!0), UI.SuccessMessage("Do skupiny byl přidán nový hráč")
                    })
                },
                removePlayer: function(e) {
                    this.ajax_request("del_player", {
                        id: e
                    }, this.ENTITY_PLAYER, function(o) {
                        MapHighlighter.alterPlayer(e, o.color), MapHighlighter.colorPlayer(e), TWMap.minimap_cache_stamp++, TWMap.minimap.reload(!0), UI.SuccessMessage("Hráč byl ze skupiny vymazán")
                    })
                },
                addVillage: function(e, o) {
                    this.ajax_request("add_village", {
                        x: e,
                        y: o
                    }, this.ENTITY_VILLAGE, function(e) {
                        $("#add_vilage_x").focus(), MapHighlighter.alterVillage(e.village_id, e.color), "undefined" != typeof TWMap.villageKey[e.village_id] && MapHighlighter.colorVillage(TWMap.villages[TWMap.villageKey[e.village_id]]), TWMap.minimap_cache_stamp++, TWMap.minimap.reload(!0), UI.SuccessMessage("Vesnice byla přidána do skupiny")
                    })
                },
                removeVillage: function(e) {
                    this.ajax_request("del_village", {
                        id: e
                    }, this.ENTITY_VILLAGE, function(o) {
                        MapHighlighter.alterVillage(e, o.color), "undefined" != typeof TWMap.villageKey[e] && MapHighlighter.colorVillage(TWMap.villages[TWMap.villageKey[e]]), TWMap.minimap_cache_stamp++, TWMap.minimap.reload(!0), UI.SuccessMessage("Vesnice byla ze skupiny vymazána")
                    })
                },
                removeMember: function(e, o) {
                    switch (e) {
                        case this.ENTITY_TRIBE:
                            this.removeTribe(o);
                            break;
                        case this.ENTITY_PLAYER:
                            this.removePlayer(o);
                            break;
                        case this.ENTITY_VILLAGE:
                            this.removeVillage(o);
                            break;
                        default:
                            return
                    }
                }
            }
        }
    }
}();

; /**** game/freemap.js ****/
function FreeMap(e, t, i, s, o) {
    var n = this;
    if (this.el = {}, this.el.root = e, this.el.container = document.createElement("div"), $(this.el.container).attr("style", "position: absolute; left:0px; top:0px; z-index:1; overflow:visible"), this.el.container.setAttribute("id", e.id + "_container"), e.appendChild(this.el.container), this.size = [$(e).width(), $(e).height()], this.scale = t, this.sectorSize = i, this.pos = [-1, -1], this.handler = s, s.onClick) {
        var r = this;
        $.browser.msie ? $(this.el.root).mousedown(function(e) {
            r._downEl = 2 == e.which ? 0 : 1
        }).mouseup(function(e) {
            return 1 != r._downEl || r._handleClick(e) ? (r._downEl = 0, !0) : (r._downEl = 2, !1)
        }).click(function(e) {
            if (2 == r._downEl) return !1
        }) : $(this.el.root).click(function(e) {
            return 2 == e.which || r._handleClick(e)
        })
    }
    return this._lastTopLeftSector = [0, 0], this._lastBottomRightSector = [0, 0], this._visibleSectors = {}, this._loadedSectors = {}, this.viewport = [0, 0, 0, 0], this.bias = o, this._handleClick = function(e) {
        if (this.mover && this.mover.moveDirty) return !1;
        var t = this.coordByEvent(e);
        return this.handler.(t[0], t[1], e)
    }, this.coordByPixel = function(e, t, i) {
        return i === !0 ? [e / this.scale[0], t / this.scale[1]] : [Math.floor(e / this.scale[0]), Math.floor(t / this.scale[1])]
    }, this.pixelByCoord = function(e, t) {
        return [e * this.scale[0], t * this.scale[1]]
    }, this.sectorByPixel = function(e, t) {
        return [Math.floor(e / this.scale[0] / this.sectorSize), Math.floor(t / this.scale[1] / this.sectorSize)]
    }, this.coordByEvent = function(e) {
        var t = $(this.el.root).offset(),
            i = [e.pageX - t.left + this.pos[0], e.pageY - t.top + this.pos[1]],
            s = Math.floor(i[0] / this.scale[0]),
            o = Math.floor(i[1] / this.scale[1]);
        return [s, o]
    }, this.centerPos = function(e, t, i) {
        var s = e * this.scale[0] - this.size[0] / 2 + this.scale[0] / 2,
            o = t * this.scale[1] - this.size[1] / 2 + this.scale[1] / 2;
        return i === !0 && (s -= s % this.scale[0], o -= o % this.scale[1]), this.(s, o)
    }, this.setPos = function(e, t) {
        return this.setPosPixel(e * this.scale[0], t * this.scale[1])
    }, this.setPosPixel = function(e, t) {
        if (e == this.pos[0] && t == this.pos[1]) return 0;
        if (isNaN(e) || isNaN(t)) return 0;
        var i = this.handler.scrollBound.x_min * this.scale[0],
            s = this.handler.scrollBound.x_max * this.scale[0] - this.size[0] + this.scale[0];
        e = Math.min(Math.max(e, i), s);
        var o = this.handler.scrollBound.y_min * this.scale[1],
            r = this.handler.scrollBound.y_max * this.scale[1] - this.size[1] + this.scale[1];
        t = Math.min(Math.max(t, o), r), this.pos[0] = e, this.pos[1] = t, this.handler.onMovePixel && this.handler.onMovePixel(e, t);
        var h = 0,
            a = [e + this.size[0], t + this.size[1]],
            l = this.sectorByPixel(e, t),
            d = this.sectorByPixel(a[0], a[1]);
        if (!compareCoord(this._lastTopLeftSector, l) || !compareCoord(this._lastBottomRightSector, d)) {
            for (var c = [], u = [], p = l[0]; p <= d[0]; p++)
                for (var v = l[1]; v <= d[1]; v++) {
                    var m = p + "_" + v,
                        _ = this._loadedSectors[m];
                    if (!_) {
                        _ = {
                            id: m,
                            visible: !1,
                            loaded: !0,
                            sx: p,
                            sy: v,
                            x: p * this.sectorSize,
                            y: v * this.sectorSize,
                            _elements: [],
                            _element_root: null,
                            _map: n,
                            appendElement: function(e, t, i) {
                                e.style.left = t * this._map.scale[0] + "px", e.style.top = i * this._map.scale[1] + "px", this._elements.push(e), void 0 === this.dom_fragment ? this._element_root.appendChild(e) : this.dom_fragment.appendChild(e)
                            },
                            spawn: function() {
                                this.visible || (this._map.el.container.appendChild(this._element_root), this.visible = !0)
                            },
                            despawn: function(e) {
                                this.visible && (this._map.el.container.removeChild(this._element_root), e === !0 && (this._element_root = null), this.visible = !1)
                            }
                        };
                        var g = document.createElement("div");
                        g.style.width = this.scale[0] * this.sectorSize + "px", g.style.height = this.scale[1] * this.sectorSize + "px", g.style.position = "absolute", g.style.left = p * this.sectorSize * this.scale[0] - this.bias + "px", g.style.top = v * this.sectorSize * this.scale[1] - this.bias + "px", _._element_root = g, _.spawn(), (!this.handler.scrollBound || _.x >= this.handler.scrollBound.x_min - this.sectorSize && _.y >= this.handler.scrollBound.y_min - this.sectorSize && _.x < this.handler.scrollBound.x_max && _.y < this.handler.scrollBound.y_max) && u.push(_)
                    }
                    c.push(_)
                }
            if (u.length)
                if (h = u.length, this.handler.loadSectors) this.handler.loadSectors(u);
                else
                    for (var f = 0; f < h; f++) this.handler.loadSector(u[f]);
            if (c.length) {
                this.handler.p && this.handler.preLoad(c.length);
                for (var w = {}, M = c.length, f = 0; f < M; f++) {
                    var _ = c[f];
                    _.loaded && _.spawn(), w[_.id] = _, this._loadedSectors[_.id] = _
                }
                for (var f in this._visibleSectors)
                    if (this._visibleSectors.hasOwnProperty(f)) {
                        var y = this._visibleSectors[f];
                        void 0 === w[y.id] && (y.despawn(), delete this._loadedSectors[f])
                    }
                this.handler.postLoad && this.handler.postLoad(), this._visibleSectors = w
            }
        }
        var x = this.getCenter();
        return this.lastCenterCoordPos && compareCoord(x, this.lastCenterCoordPos) || (this.handler.onMove && this.handler.onMove(x[0], x[1]), this.lastCenterCoordPos = x, this.recalcViewport()), e -= this.bias, t -= this.bias, this.el.container.style.left = -e + "px", this.el.container.style.top = -t + "px", h
    }, this.getCenter = function() {
        return this.coordByPixel(this.pos[0] + this.size[0] / 2, this.pos[1] + this.size[1] / 2)
    }, this.getLevelForVillagePoints = function(e) {
        for (var t = [300, 1e3, 3e3, 9e3, 11e3], i = 1, s = 0; s < t.length && !(e < t[s]); s++) i++;
        return i
    }, this.getViewportTileDimensions = function() {
        return {
            width: TWMap.map.size[0] / TWMap.map.scale[0],
            height: TWMap.map.size[1] / TWMap.map.scale[1]
        }
    }, this.getViewport = function() {
        return {
            top_left_tile: {
                coord_x: this.viewport[0],
                coord_y: this.viewport[1]
            },
            bottom_right_tile: {
                coord_x: this.viewport[2],
                coord_y: this.viewport[3]
            }
        }
    }, this.recalcViewport = function() {
        var e = this.pos[0],
            t = this.pos[1],
            i = this.coordByPixel(e, t),
            s = this.coordByPixel(e + this.size[0], t + this.size[1]);
        this.viewport = [i[0], i[1], s[0], s[1]]
    }, this.inViewport = function(e, t) {
        return e >= this.viewport[0] && t >= this.viewport[1] && e <= this.viewport[2] && t <= this.viewport[3]
    }, this.createMover = function(e) {
        this.mover = new FreeMapMover(this), this.mover.setSpeed(e)
    }, this.reload = function(e, t) {
        if (!t) {
            for (var i in this._loadedSectors)
                if (this._loadedSectors.hasOwnProperty(i)) {
                    var s = this._loadedSectors[i];
                    s.despawn(!0)
                }
            this._loadedSectors = {}
        }
        if (this._visibleSectors = {}, this.handler.onReload && this.handler.onReload(), e !== !1) {
            var o = this.pos[0],
                n = this.pos[1];
            this.pos = [0, 0], this.setPosPixel(o, n)
        }
    }, this._resizeElements = [], this._resizeTargetPosition = [], this.resize = function(e, t, i) {
        if ("undefined" == typeof e) {
            var s = $(this.el.root).parent();
            e = s.width(), t = s.height()
        }
        var o = [
                [],
                []
            ],
            n = this.getCenter();
        if (2 & i || (o[0].push(this.el.root), o[1].push(this.el.root)), this.handler.hasOwnProperty("getResizableElements")) {
            var r = this.handler.getResizableElements();
            o[0] = o[0].concat(r[0]), o[1] = o[1].concat(r[1])
        }
        this.size = [e, t], this.handler.hasOwnProperty("onResize") && this.handler.onResize(e, t), 1 & i ? ($(o[0]).animate({
            width: e + "px"
        }, {
            duration: 400,
            queue: !1
        }), $(o[1]).animate({
            height: t + "px"
        }, {
            duration: 400,
            queue: !1
        })) : ($(o[0]).width(e), $(o[1]).height(t)), 2 & i || (this.centerPos(n[0], n[1], !1), this.recalcViewport())
    }, this._lastResizeSize = 0, this.createResizer = function(e, t, i) {
        i = i || 1, $(this.el.root).resizable({
            grid: [i * this.scale[0], i * this.scale[1]],
            minWidth: e[0] * this.scale[0],
            maxWidth: t[0] * this.scale[0],
            minHeight: e[1] * this.scale[1],
            maxHeight: t[1] * this.scale[1],
            handles: "se",
            zIndex: 13,
            start: $.proxy(function(e, t) {
                this.handler.hasOwnProperty("onResizeBegin") && this.handler.onResizeBegin(), TWMap.busy = !0, this._resizeTargetPosition = this.getCenter()
            }, this),
            stop: $.proxy(function() {
                TWMap.busy = !1, this.centerPos(this._resizeTargetPosition[0], this._resizeTargetPosition[1], !1), this.handler.hasOwnProperty("onResizeEnd") && this.handler.onResizeEnd()
            }, this)
        }).resize($.proxy(function() {
            var e = $(this.el.root),
                t = 1e5 * e.width() + e.height();
            t != this._lastResizeSize && (this._lastResizeSize = t, this.resize(e.width(), e.height(), 2), this.pos = [0, 0], this.centerPos(this._resizeTargetPosition[0], this._resizeTargetPosition[1], !1), this.recalcViewport())
        }, n))
    }, this.effects = {
        beaconVillage: function(e, t) {
            if (TWMap.map.inViewport(e, t)) {
                var i = $('<div class="center_beacon"></div>'),
                    s = $('<div class="map_beacon_container"></div>'),
                    o = TWMap.map.getViewport().top_left_tile,
                    n = (e - o.coord_x + .5) * TWMap.tileSize[0],
                    r = (t - o.coord_y + .5) * TWMap.tileSize[1];
                s.css({
                    top: r + "px",
                    left: n + "px"
                }).append(i);
                var h = $("#special_effects_container");
                h.append(s), setTimeout(function() {
                    Modernizr.cssanimations && i.addClass("end"), setTimeout(function() {
                        s.remove()
                    }, 600)
                }, 100)
            }
        }
    }, !0
}

function FreeMapMover(e) {
    this.moveDirty = !1, this.allowDrag = !0, this.dragHandler = null, this.dragBeginHandler = null, this.dragEndHandler = null, this.dragBeginPosition = [], this.fixTouchEvent = function(e) {
        return e.changedTouches && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY, e.pageX = e.changedTouches[0].pageX, e.pageY = e.changedTouches[0].pageY), e
    }, this.handleMouseDown = function(e) {
        if (null != this.touchIdentifier) return e.preventDefault(), !1;
        if (e = this.fixTouchEvent(e), e.changedTouches && (this.touchIdentifier = e.changedTouches[0].identifier), this.containerPos = [-(parseInt(this._map.el.container.style.left) - this._map.bias), -(parseInt(this._map.el.container.style.top) - this._map.bias)], this.mousePos = [e.clientX, e.clientY], this.moveDirty = !1, this.crappy_browser ? (this._el.setCapture(), this._el.attachEvent("onmousemove", this._eventHandleMouseMove), this._el.attachEvent("onmouseup", this._eventHandleMouseUp), this._el.attachEvent("onlosecapture", this._eventHandleMouseUp)) : (window.addEventListener("touchmove", this._eventHandleMouseMove, !0), window.addEventListener("mousemove", this._eventHandleMouseMove, !0), window.addEventListener("touchend", this._eventHandleMouseUp, !0), window.addEventListener("mouseup", this._eventHandleMouseUp, !0), e.preventDefault()), this.useDragTimer !== !1) {
            var t = this;
            this.dragTimer = setInterval(function() {
                t.IEDragTimer()
            }, this.useDragTimer), this.dragBeginPosition = [e.clientX, e.clientY], this.lastMousePositionForTimer = [e.clientX, e.clientY]
        }
    }, this.handleMouseUp = function(e) {
        if (e.changedTouches && e.changedTouches[0].identifier != this.touchIdentifier) return !1;
        if (this.touchIdentifier = null, this.crappy_browser ? (this._el.releaseCapture(), this._el.detachEvent("onmousemove", this._eventHandleMouseMove), this._el.detachEvent("onmouseup", this._eventHandleMouseUp), this._el.detachEvent("onlosecapture", this._eventHandleMouseUp)) : (window.removeEventListener("touchmove", this._eventHandleMouseMove, !0), window.removeEventListener("mousemove", this._eventHandleMouseMove, !0), window.removeEventListener("touchend", this._eventHandleMouseMove, !0), window.removeEventListener("mouseup", this._eventHandleMouseUp, !0)), this.useDragTimer !== !1 && (clearInterval(this.dragTimer), this.dragTimer = void 0), this.moveDirty && (this.allowDrag && this._map.handler.hasOwnProperty("onDragEnd") ? this._map.handler.onDragEnd() : this.dragEndHandler && this.dragEndHandler()), !this.moveDirty && e.changedTouches && this._map.handler.onClick) {
            e = this.fixTouchEvent(e);
            var t = {};
            t.pageX = e.changedTouches[0].pageX, t.pageY = e.changedTouches[0].pageY;
            var i = this._map.coordByEvent(t);
            e.stopPropagation(), this._map.handler.(i[0], i[1])
        }
        return setTimeout(jQuery.proxy(function() {
            this.moveDirty = !1
        }, this), 50), e.returnValue = !1, e.preventDefault && e.preventDefault(), !1
    }, this.IEDragTimer = function() {
        var e = {
            clientX: this.lastMousePositionForTimer[0],
            clientY: this.lastMousePositionForTimer[1]
        };
        0 == e.clientX && 0 == e.clientY || this.handleMouseMove(e, !0)
    }, navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ? this.useDragTimer = 100 : $.browser.webkit | $.browser.safari ? this.useDragTimer = 40 : $.browser.mozilla ? this.useDragTimer = 40 : $.browser.msie ? this.useDragTimer = 60 : $.browser.opera ? this.useDragTimer = 30 : this.useDragTimer = 60, this.handleMouseMove = function(e, t) {
        if (e.changedTouches && e.changedTouches[0].identifier != this.touchIdentifier) return !1;
        if (e = this.fixTouchEvent(e), this.useDragTimer !== !1 && void 0 === t) return this.lastMousePositionForTimer = [e.clientX, e.clientY], !1;
        var i = [e.clientX - this.mousePos[0], e.clientY - this.mousePos[1]];
        this.mousePos = [e.clientX, e.clientY];
        var s = [this.containerPos[0] - i[0] * this._speed, this.containerPos[1] - i[1] * this._speed];
        if (this._map.handler.scrollBound) {
            var o = this._map.handler.scrollBound,
                n = this._map.coordByPixel(s[0], s[1], !0);
            n[0] < o.x_min && i[0] > 0 && (i[0] = 0), n[1] < o.y_min && i[1] > 0 && (i[1] = 0);
            var r = this._map.coordByPixel(s[0] + this._map.size[0], s[1] + this._map.size[1]);
            r[0] > o.x_max && i[0] < 0 && (i[0] = 0), r[1] > o.y_max && i[1] < 0 && (i[1] = 0)
        }
        return 0 == i[0] && 0 == i[1] || 0 != this.moveDirty || (this.allowDrag && this._map.handler.onDragBegin ? this._map.handler.onDragBegin() : this.dragBeginHandler && this.dragBeginHandler(), this.moveDirty = !0), this.allowDrag ? (this.containerPos[0] -= i[0] * this._speed, this.containerPos[1] -= i[1] * this._speed, this._map.setPosPixel(this.containerPos[0], this.containerPos[1]), !1) : (this.moveDirty && this.dragHandler && this.dragHandler(this.dragBeginPosition, this.mousePos, i), !1)
    }, this.setSpeed = function(e) {
        this._speed = e
    }, this.preventDrag = function(e, t, i) {
        e === !0 || e === !1 ? (this.allowDrag = !e, this.dragHandler = null, this.dragEndHandler = null, $(this._el).css("cursor", "move")) : (this.allowDrag = !1, this.dragHandler = e, this.dragBeginHandler = t, this.dragEndHandler = i, $(this._el).css("cursor", "default"))
    };
    var t = document.createElement("div");
    t.setAttribute("id", e.el.root.id + "_mover"), $(t).addClass("needsclick"), $(t).attr("style", 'position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 12; background-image: url("/graphic/map/empty.png"); cursor: move; -moz-user-select: none;'), this.crappy_browser = t.setCapture && t.detachEvent;
    var i = this;
    this._eventHandleMouseDown = function(e) {
        return i.handleMouseDown(e)
    }, this._eventHandleMouseMove = function(e) {
        return i.handleMouseMove(e)
    }, this._eventHandleMouseUp = function(e) {
        return i.handleMouseUp(e)
    }, this._speed = 1, this.crappy_browser ? t.attachEvent("onmousedown", this._eventHandleMouseDown) : (t.addEventListener("touchstart", this._eventHandleMouseDown, !0), t.addEventListener("mousedown", this._eventHandleMouseDown, !0)), this._map = e, this._el = t, e.el.mover = t, e.el.root.appendChild(t)
}

function compareCoord(e, t) {
    return e[0] == t[0] && e[1] == t[1]
}

; /**** game/twmap.js ****/
function TWMapStore(e, a) {
    var t, i, n = e,
        o = 1e3 * a,
        s = new Array(n);
    for (t = 0; t < n; t++)
        for (s[t] = new Array(n), i = 0; i < n; i++) s[t][i] = null;
    this.get = function(e, a) {
        var t = e / 20 % n,
            i = a / 20 % n,
            o = s[t][i],
            p = (new Date).getTime();
        return null === o || o[0] !== e || o[1] !== a ? null : o[2] < p ? (s[t][i] = null, null) : o[3]
    }, this.set = function(e, a, t) {
        var i = e / 20 % n,
            p = a / 20 % n,
            l = (new Date).getTime() + o,
            r = [e, a, l, t];
        s[i][p] = r
    }
}
var TWMap = {
    map: null,
    minimap: null,
    minimap_only: !1,
    minimap_highlight: 0,
    mobile: !1,
    fullscreen: !1,
    cachePopupContents: !1,
    minimap_cache_stamp: 0,
    mapSubSectorSize: 5,
    strings: {},
    urls: {},
    colors: {},
    classic_gfx: !1,
    old_map_gfx: !1,
    graphics: null,
    image_base: null,
    images: ["gras1.png", "gras2.png", "gras3.png", "gras4.png", "v1_left.png", "v1.png", "v2_left.png", "v2.png", "v3_left.png", "v3.png", "v4_left.png", "v4.png", "v5_left.png", "v5.png", "v6_left.png", "v6.png", "b1_left.png", "b1.png", "b2_left.png", "b2.png", "b3_left.png", "b3.png", "b4_left.png", "b4.png", "b5_left.png", "b5.png", "b6_left.png", "b6.png", "berg1.png", "berg2.png", "berg3.png", "berg4.png", "forest0000.png", "forest0001.png", "forest0010.png", "forest0011.png", "forest0100.png", "forest0101.png", "forest0110.png", "forest0111.png", "forest1000.png", "forest1001.png", "forest1010.png", "forest1011.png", "forest1100.png", "forest1101.png", "forest1110.png", "forest1111.png", "see.png", "event_xmas.png", "event_easter.png", "ghost.png", "event_merchant.png", "event_wizard.png", "event_easter2014.png", "event_fall2014.png"],
    ghost_village_tile: 51,
    images_secret_blue: [],
    images_secret_yellow: [],
    scriptMode: !1,
    warMode: !1,
    warModeGeneration: 0,
    villages: {},
    villageKey: {},
    players: {},
    allies: {},
    ghost: !1,
    playerColors: {},
    allyColors: {},
    villageColors: {},
    villageIcons: {},
    commandIcons: {},
    allyRelations: {},
    reservations: {},
    friends: {},
    targets: [],
    pos: [],
    size: [0, 0],
    isAutoSize: !1,
    minimap_offset: [0, 0],
    minimap_size: [0, 0],
    currentCon: null,
    currentVillage: null,
    scrollBound: {
        x_min: 0,
        x_max: 999,
        y_min: 0,
        y_max: 999
    },
    keys: {},
    ignore_villages: [],
    non_attackable_players: null,
    goFullscreen: function() {
        if (!TWMap.premium) return !1;
        var e = document.getElementById("map_wrap"),
            a = "fullscreenchange mozfullscreenchange webkitfullscreenchange";
        if (e.requestFullScreen) e.requestFullScreen();
        else if (e.mozRequestFullScreen) e.mozRequestFullScreen();
        else {
            if (!e.webkitRequestFullScreen) return !1;
            e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
        }
        $(document).bind(a, function() {
            var e = TWMap.size;
            TWMap.fullscreen = !0, TWMap.resize(0, !1), $("#map_popup").detach().appendTo("#map_wrap"), $("#minimap").detach().appendTo("#map_wrap"), $("#fullscreen").hide(), $(document).unbind(a).bind(a, function() {
                $("#map_popup").detach().appendTo($("body")), $("#minimap").detach().appendTo($("#minimap_cont")), $("#fullscreen").show(), TWMap.resize(e, !0), TWMap.fullscreen = !1, $(document).unbind(a)
            })
        })
    },
    showEmbeddedMap: function(e, a, t, i, n) {
        TWMap.minimap_only = !0, TWMap.tileSize = [53, 28], TWMap.topoKey = e, TWMap.minimap_highlight = n, TWMap.minimap_cache_stamp = a ? a : 0, TWMap.init(), TWMap.focus(t, i, !1)
    },
    storeSectorInformation: function(e) {
        var a;
        for (a = 0; a < e.length; a++) {
            var t = e[a],
                i = t.data,
                n = i.x,
                o = i.y;
            TWMap.storeVillage.set(n, o, t.data), t.tiles && TWMap.storeTiles.set(n, o, t.tiles), t.pmap && TWMap.storePolitical.set(n, o, t.pmap), t = null, i = null
        }
    },
    mapHandler: {
        _waitingSectors: {},
        onReceiveSectorInformation: function(e, a) {
            a || TWMap.storeSectorInformation(e);
            for (var t = 0; t < e.length; t++) {
                var i = e[t],
                    n = i.data,
                    o = n.x,
                    s = n.y,
                    p = this._waitingSectors[o + "_" + s];
                if (p) {
                    i.tiles && (p.tiles = i.tiles), i.pmap && (p.pmap = i.pmap), p.x = o, p.y = s, p.data = n;
                    var l = [];
                    for (var r in n.villages)
                        if (n.villages.hasOwnProperty(r)) {
                            r = parseInt(r);
                            for (var c in n.villages[r])
                                if (n.villages[r].hasOwnProperty(c)) {
                                    c = parseInt(c);
                                    var m = n.villages[r][c];
                                    if (0 === m[2] && (m[2] = TWMap.strings.barbarianVillage), $.inArray(m[0], TWMap.ignore_villages) == -1) {
                                        var u = 1e3 * (o + r) + s + c;
                                        TWMap.villageKey[m[0]] = u, TWMap.villages[u] = {
                                            id: m[0],
                                            img: m[1],
                                            name: m[2],
                                            points: m[3],
                                            owner: m[4],
                                            mood: m[5],
                                            bonus: m[6],
                                            event_special: m[7],
                                            xy: u
                                        }, l.push(m[0])
                                    }
                                }
                        }
                    TWMap.scriptMode && TWMap.popup.loadVillage(l.join(","));
                    for (var d in n.players)
                        if (n.players.hasOwnProperty(d)) {
                            var m = n.players[d];
                            TWMap.players[d] = {
                                name: m[0],
                                points: m[1],
                                ally: m[2],
                                newbie: m[3],
                                sleep: m[4],
                                image_id: m[5],
                                village_count_text: m[6]
                            }
                        }
                    for (var h in n.allies)
                        if (n.allies.hasOwnProperty(h)) {
                            var m = n.allies[h];
                            TWMap.allies[h] = {
                                name: m[0],
                                points: m[1],
                                tag: m[2],
                                image_id: m[3]
                            }
                        }
                    for (var _ = 0; _ < p.queue.length; _++) p.queue[_].loaded = !0, this.spawnSector(p, p.queue[_]);
                    delete this._waitingSectors[o + "_" + s]
                }
            }
        },
        getSectorIdByTile: function(e, a) {
            var t = e - e % 20,
                i = a - a % 20;
            return t + "_" + i
        },
        getSubsectorIdByTile: function(e, a) {
            var t = Math.floor(e / 5),
                i = Math.floor(a / 5);
            return t + "_" + i
        },
        loadSectors: function(e) {
            for (var a = [], t = 0; t < e.length; t++) {
                var i = e[t],
                    n = i.x - i.x % 20,
                    o = i.y - i.y % 20,
                    s = n + "_" + o,
                    p = this._waitingSectors[s];
                p ? p.queue.push(i) : (p = {
                    id: s,
                    x: n,
                    y: o,
                    tiles: null,
                    pmap: null,
                    data: null,
                    queue: [i]
                }, this._waitingSectors[s] = p, a.push(p))
            }
            if (!(a.length < 1)) {
                this._sector_request_queue = [];
                for (var t = 0; t < a.length; t++) {
                    var p = a[t];
                    p.tiles = TWMap.storeTiles.get(p.x, p.y), p.data = TWMap.storeVillage.get(p.x, p.y), TWMap.politicalMap.displayed ? p.pmap = TWMap.storePolitical.get(p.x, p.y) : p.pmap = [
                        [],
                        []
                    ], null !== p.data && null !== p.tiles && null !== p.pmap ? this.onReceiveSectorInformation([p], !0) : this._sector_request_queue.push(p)
                }
                if (this._sector_request_queue.length > 0) {
                    for (var l = "/map.php?v=2&e=" + (new Date).getTime(), t = 0; t < this._sector_request_queue.length; t++) {
                        var p = this._sector_request_queue[t],
                            r = 0;
                        null === p.tiles && (r += 1), null === p.pmap && (r += 2), l += "&" + p.id + "=" + r
                    }
                    $.ajax({
                        type: "GET",
                        url: l,
                        dataType: "json",
                        success: function(e) {
                            return TWMap.mapHandler.onReceiveSectorInformation(e, !1)
                        }
                    }), this._sector_request_queue = []
                }
            }
        },
        onMovePixel: function(e, a) {
            this.busy || TWMap.positionMinimap(), TWMap.minimap_only || (e -= TWMap.map.bias, a -= TWMap.map.bias, TWMap.map_el_coordy.style.top = -a + "px", TWMap.map_el_coordx.style.left = -e + "px", TWMap.context.hide(), TWMap.home.updateDisplay())
        },
        onMove: function(e, a) {
            if (TWMap.pos = [e, a], !TWMap.minimap_only) {
                for (var t = Math.min(1e3, a + 20), i = Math.max(0, a - 20); i < t; i++) TWMap._coord_el_y_active[i] || (TWMap._coord_el_y_active[i] = !0, TWMap.map_el_coordy.appendChild(TWMap._coord_el_y[i]));
                for (var n = Math.min(1e3, e + 20), o = Math.max(0, e - 20); o < n; o++) TWMap._coord_el_x_active[o] || (TWMap._coord_el_x_active[o] = !0, TWMap.map_el_coordx.appendChild(TWMap._coord_el_x[o]));
                TWMap.busy || (TWMap.busy = !0, TWMap.updateContinent(), TWMap.busy = !1)
            }
        },
        onDragBegin: function() {
            TWMap.popup.unregister()
        },
        onDragEnd: function() {
            TWMap.popup.register()
        },
        onClick: function(e, a, t) {
            var i = TWMap.villages[1e3 * e + a];
            if (i) {
                if (TWMap.warMode && Warplanner.admin) return Warplanner.onVillageClicked(i.id, e, a), !1;
                if (!TWMap.context.enabled) return (!t || $.browser.msie && ~~$.browser.version < 8) && (window.location.href = TWMap.urls.villageInfo.replace(/__village__/, i.id)), !0;
                TWMap.context.spawn(i, e, a)
            } else TWMap.context.hide();
            return !1
        },
        onReload: function() {
            this._waitingSectors = {}, TWMap.allies = {}, TWMap.villages = {}
        },
        _createBorder: function(e) {
            var a = document.createElement("div");
            return e ? a.className = "map_con_border" : a.className = "map_border", TWMap.night && !TWMap.classic_gfx && (a.className += "_night"), a.style.zIndex = "3", a.style.position = "absolute", a
        },
        spawnSector: function(e, a) {
            alert("Missing spawnSector function!")
        }
    },
    minimapHandler: {
        loadSector: function(e) {
            var a = document.createElement("img");
            a.style.position = "absolute", a.style.zIndex = "1";
            var t = "";
            game_data && game_data.village && (t = "&village_id=" + game_data.village.id);
            var i = TWMap.politicalMap.displayed && !TWMap.warMode ? TWMap.politicalMap.filter : 0,
                n = TWMap.church.displayed ? 1 : 0,
                o = TWMap.warMode ? 1 + TWMap.warModeGeneration : 0;
            a.setAttribute("src", "/page.php?page=topo_image&player_id=" + game_data.player.id + t + "&x=" + e.x + "&y=" + e.y + "&church=" + n + "&political=" + i + "&war=" + o + "&watchtower=" + (TribalWars._settings.map_show_watchtower ? 1 : 0) + "&key=" + TWMap.topoKey + "&cur=" + game_data.village.id + "&focus=" + TWMap.minimap_highlight + "&local_cache=" + TWMap.minimap_cache_stamp), e.appendElement(a, 0, 0);
            for (var s in TWMap.secrets)
                if (TWMap.secrets.hasOwnProperty(s)) {
                    var p = TWMap.secrets[s][0],
                        l = TWMap.secrets[s][1] - e.x,
                        r = TWMap.secrets[s][2] - e.y;
                    if (!(l < 0 || r < 0 || l >= TWMap.minimap.sectorSize || r >= TWMap.minimap.sectorSize)) {
                        var c = document.createElement("img");
                        c.style.position = "absolute", c.style.margin = "-5px 0px 0px 2px", c.style.zIndex = "2", c.setAttribute("src", TWMap.image_base + "/icons/flag_" + (1 == p ? "blue" : "yellow") + ".png"), e.appendElement(c, l, r)
                    }
                }
        },
        onMovePixel: function(e, a) {
            if (!TWMap.busy) {
                if (TWMap.busy = !0, TWMap.map) {
                    var t = e / TWMap.minimap.scale[0] + TWMap.minimap_offset[0],
                        i = a / TWMap.minimap.scale[1] + TWMap.minimap_offset[1];
                    TWMap.map.setPos(t, i), TWMap.home.updateDisplay()TWMap.home.updateDisplay()
                }
                TWMap.updateContinent(), TWMap.busy = !1
            }
        },
        onClick: function(e, a, t) {
            TWMap.focus(e, a)
        }
    },
    positionMinimap: function() {
        if (this.minimap) {
            var e = this.busy;
            this.busy = !0, this.minimap.setPos(this.map.pos[0] / this.map.scale[0] - this.minimap_offset[0], this.map.pos[1] / this.map.scale[1] - this.minimap_offset[1]), this.busy = e
        }
    },
    updateCommandIcon: function(e, a, t) {
        var i = this.mapHandler.getSubsectorIdByTile(e.x, e.y);
        if ("undefined" != typeof this.map._loadedSectors[i]) {
            "undefined" == typeof this.commandIcons[e.id] && (this.commandIcons[e.id] = []);
            var n = this.commandIcons[e.id];
            n = $.grep(n, function(e) {
                return e.img !== a
            }), t && n.push({
                img: a
            }), this.commandIcons[e.id] = n, $(this.map._loadedSectors[i]._element_root).find("[id*=map_cmdicons_" + e.id + "]").remove();
            for (var o = this.generateCommandIcons(e.id), s = e.x % 5, p = e.y % 5, l = 0; l < o.length; l++) this.map._loadedSectors[i].appendElement(o[l], s, p)
        }
    },
    generateCommandIcons: function(e) {
        var a = [];
        if (TWMap.commandIcons[e])
            for (var t = TWMap.commandIcons[e], i = (t.length, 2 * (Math.max(2, t.length) - 2)), n = 14 - i, o = 0; o < t.length; o++) {
                var s = document.createElement("img");
                s.style.position = "absolute", s.style.right = "0px", s.style.zIndex = "4", s.style.width = n + "px", s.style.height = n + "px", s.style.marginTop = "0px", s.style.marginLeft = 34 + 2 * i - o * (n + 5 - i) + "px", s.id = "map_cmdicons_" + e + "_" + o, s.src = TWMap.image_base + "/map/" + t[o].img + ".png", a.push(s)
            }
        return a
    },
    createVillageIcons: function(e) {
        if (TWMap.minimap_only) return [];
        var a = [];
        if (TWMap.secrets.hasOwnProperty(e.id)) {
            var t = 1 == TWMap.secrets[e.id][0] ? "blue" : "yellow",
                i = document.createElement("img");
            i.style.position = "absolute", i.style.top = "0px", i.style.left = "0px", i.style.width = "16px", i.style.height = "18px", i.style.marginLeft = "11px", i.style.zIndex = "3", i.src = TWMap.image_base + "/map/flag_" + t + ".png", a.push(i)
        }
        var n = 0;
        if (TWMap.villageIcons[e.id]) {
            var o = TWMap.villageIcons[e.id];
            for (var s in o)
                if (o.hasOwnProperty(s)) {
                    var p = o[s];
                    n++;
                    var i = document.createElement("img");
                    i.style.position = "absolute", i.style.top = "0px", i.style.left = "0px", i.style.width = "18px", i.style.height = "18px", i.style.zIndex = "4", i.style.marginTop = "18px", i.style.marginLeft = 20 * n - 20 + "px", i.id = "map_icons_" + e.id, i.style.backgroundColor = p.c, i.src = p.img ? p.img : TWMap.image_base + "/blank-16x22.png", a.push(i)
                }
        }
        if (TWMap.reservations.hasOwnProperty(e.id)) {
            n++;
            var i = document.createElement("img");
            i.style.position = "absolute", i.style.top = "0px", i.style.left = "0px", i.style.width = "18px", i.style.height = "18px", i.style.zIndex = "4", i.style.marginTop = "18px", i.style.marginLeft = 20 * n - 20 + "px", i.src = "/graphic/map/reserved_" + TWMap.reservations[e.id] + ".png", a.push(i)
        }
        var l = this.generateCommandIcons(e.id);
        if ($(l).each(function() {
                a.push(this)
            }), TWMap.warMode && Warplanner.data[e.id] && "D" !== Warplanner.data[e.id].type) {
            var i = document.createElement("img"),
                r = "A" === Warplanner.data[e.id].type ? "attack" : "fake";
            i.style.position = "absolute", i.style.zIndex = "10", i.style.marginTop = "4px", i.style.marginLeft = "11.5px", i.src = TWMap.image_base + "/icons/warplanner_" + r + ".png", a.push(i)
        }
        return a
    },
    createVillageDot: function(e) {
        var a = document.createElement("canvas");
        if (a.getContext) {
            a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", a.width = 18, a.height = 18, a.style.zIndex = "4", a.style.marginTop = "0px", a.style.marginLeft = "0px";
            var t = a.getContext("2d");
            return t.fillStyle = "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")", t.strokeStyle = "#000000", t.beginPath(), t.arc(5, 5, 3.3, 0, 2 * Math.PI, !1), t.fill(), t.stroke(), a
        }
        var i = document.createElement("img");
        return i.style.position = "absolute", i.style.left = "0px", i.style.top = "0px", i.style.width = "6px", i.style.height = "6px", i.style.zIndex = "4", i.style.marginTop = "3px", i.style.marginLeft = "0px", i.style.border = "0px", i.style.backgroundColor = "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")", i
    },
    updateContinent: function() {
        var e = TWMap.con.continentByXY(TWMap.pos[0], TWMap.pos[1]);
        e != TWMap.currentCon && ($("#continent_id").html(e), TWMap.currentCon = e)
    },
    getMinimapScrollBound: function() {
        var e = $.extend({}, this.scrollBound);
        return e.x_min -= this.minimap_offset[0], e.y_min -= this.minimap_offset[1], e.x_max += this.minimap_size[0] - this.minimap_offset[0] - this.size[0], e.y_max += this.minimap_size[1] - this.minimap_offset[1] - this.size[1], e
    },
    initMap: function() {
        alert("Missing initMap function!")
    },
    focus: function(e, a) {
        alert("Missing focus function!")
    },
    createSecretImageCache: function() {
        var e;
        for (e = 0; e < this.images.length; e++) {
            var a = this.images[e].match(/^([bv][0-9])((_left)?\.png)$/);
            null !== a && (this.images_secret_blue[e] = a[1] + "_blue" + a[2], this.images_secret_yellow[e] = a[1] + "_yellow" + a[2])
        }
    },
    init: function() {
        this.politicalMap.optionToggle = new MapToggleBox({
            id: "pmap_options"
        }), this.centerToggle = new MapToggleBox({
            id: "centercoords",
            url: this.urls.centerCoords
        }), this.storeVillage = new TWMapStore(3, 30), this.storePolitical = new TWMapStore(3, 600), this.storeTiles = new TWMapStore(6, 86400), this.sectorPrefech && (this.storeSectorInformation(this.sectorPrefech), this.sectorPrefech = null), this.createSecretImageCache(), this.initMap(), TWMap.premium && (document.body.requestFullScreen || document.body.mozRequestFullScreen || document.body.webkitRequestFullScreen) && $("#fullscreen").show(), this.strings.newbieProt = $("#newbieProt").val(), this.strings.barbarianVillage = $("#barbarianVillage").val(), this.strings.pointFormat = $("#pointFormat").val(), this.strings.villageFormat = $("#villageFormat").val(), this.strings.villageNotes = $("#villageNotes").val(), this.strings.changesSaved = $("#changesSaved").val(), this.strings.confirmCenterDelete = $("#confirmCenterDelete").val(), this.strings.troopsSent = $("#troopsSent").val(), TWMap.updateContinent(), this.context.init();
        var e = window.location.hash.match(/^#([0-9]+);([0-9]+)$/);
        TWMap.map && null !== e && setTimeout(function() {
            TWMap.map.centerPos(e[1], e[2])
        }, 100), setInterval(function() {
            var e = "#" + TWMap.pos[0] + ";" + TWMap.pos[1];
            TWMap.centerList.updateNewBoxes(), e != window.location.hash && window.location.replace(e)
        }, 200), TWMap.map && null != game_data.village.id ? (TWMap.home.init(), TWMap.old_map_gfx || TWMap.home_aura.init()) : TWMap.home.active = !1, Connection.registerObserver("map", this.synchronizer)
    },
    focusSubmit: function() {
        var e = ~~$("#mapx").val(),
            a = ~~$("#mapy").val();
        return this.focusUserSpecified(e, a), !1
    },
    focusUserSpecified: function(e, a) {
        return this.focus(e, a), TWMap.map && TWMap.map.effects.beaconVillage(e, a), !1
    },
    scrollBlock: function(e, a) {
        alert("scrollBlock function missing")
    },
    updateSizeSelect: function(e, a, t) {
        var i;
        if (e[0] == e[1] && (i = $(a).find('option[value="' + e[0] + '"]')) && i.length > 0) i.attr("selected", "selected"), $(t).hide();
        else {
            var n = e[0] + "x" + e[1];
            $(t).show().val(n).text(n).attr("selected", "selected")
        }
    },
    notifyMapSize: function(e, a) {
        var t = this.size.join("x"),
            i = this.minimap_size.join("x"),
            n = t + "-" + i;
        TWMap._lastNotifiedMapsize != n && (TWMap._lastNotifiedMapsize = n, this.updateSizeSelect(TWMap.size, "#map_chooser_select", "#current-map-size"), this.updateSizeSelect(TWMap.minimap_size, "#minimap_chooser_select", "#current-minimap-size"), mobile || TWMap.fullscreen ? e ? $.cookie("mobile_mapsize", 0, {
            expires: 7
        }) : $.cookie("mobile_mapsize", t, {
            expires: 7
        }) : $.ajax({
            url: this.urls.sizeSave,
            data: "map_size=" + t + "&minimap_size=" + i,
            type: "GET",
            success: function() {
                a && window.location.reload()
            }
        }))
    },
    scaleMinimap: function() {
        var e, a = [~~(this.minimap.size[0] / this.minimap.scale[0]), ~~(this.minimap.size[1] / this.minimap.scale[1])];
        e = this.map ? [~~(this.map.size[0] / this.map.scale[0]), ~~(this.map.size[1] / this.map.scale[1])] : [0, 0];
        var t = [~~((a[0] - e[0]) / 2), ~~((a[1] - e[1]) / 2)];
        this.minimap_offset = t, this.minimap_size = a;
        var i = document.getElementById("minimap_viewport"),
            n = e[0] * this.minimap.scale[0],
            o = e[1] * this.minimap.scale[1];
        i.style.width = n + "px", i.style.height = o + "px";
        var s = t[0] * this.minimap.scale[0],
            p = t[1] * this.minimap.scale[1];
        i.style.left = s + "px", i.style.top = p + "px"
    },
    tileDimensions: function(e) {
        return [Math.ceil(e.width() / this.tileSize[0]), Math.ceil(e.height() / this.tileSize[1])]
    },
    notifySavedChanges: function() {
        UI.SuccessMessage(TWMap.strings.changesSaved)
    },
    centerList: {
        enabled: !1,
        el_x: null,
        el_y: null,
        last_x: 0,
        last_y: 0,
        init: function() {
            if (this.enabled) {
                var e = $("#centerlist_new_tpl").clone().attr("id", "centerlist_new").css("padding-top", "7px").show();
                this.el_x = e.find("input[name=center_x]").attr("id", "center_new_x").val(""), this.el_y = e.find("input[name=center_y]").attr("id", "center_new_y").val(""), this.last_x = 0, this.last_y = 0, $("#centercoords > td").append(e), setTimeout(function() {
                    e.find("input[name=center_name]").focus()
                }, 20)
            }
        },
        updateNewBoxes: function() {
            var e = TWMap.pos[0],
                a = TWMap.pos[1];
            this.el_x && this.el_y && (this.el_x.is(":focus") || this.el_y.is(":focus") || this.last_x && this.el_x.val() != this.last_x || this.last_y && this.el_y.val() != this.last_y || (this.last_x = e, this.last_y = a, this.el_x.val(e), this.el_y.val(a)))
        },
        go: function(e) {
            var a = document.getElementById("center_" + e);
            if (!a) return !1;
            a = $(a);
            var t = a.data("x"),
                i = a.data("y");
            TWMap.focusUserSpecified(~~t, ~~i)
        },
        edit: function(e) {
            var a = $("#center_" + e),
                t = $("#centerlist_new_tpl").clone().attr("id", "centeredit_" + e);
            t.data("el", a).data("id", e).show();
            var i = t.find("input[name=center_x]").val(a.data("x"));
            t.find("input[name=center_y]").val(a.data("y")), t.find("input[name=center_name]").val(this.getName(e));
            a.after(t).detach(), i.focus()
        },
        del: function(e) {
            var a = function() {
                    TWMap.centerList.save(e, 0, 0, "", !0)
                },
                t = this.getName(e),
                i = TWMap.strings.confirmCenterDelete.replace(/%name%/, t),
                n = [{
                    text: "Potvrdit",
                    callback: a,
                    confirm: !0
                }];
            UI.ConfirmationBox(i, n)
        },
        submit: function(e) {
            e = $(e).parent(), e.find("input[type=submit]").attr("disabled", "disabled");
            var a = e.data("el"),
                t = e.data("id"),
                i = e.find("input[name=center_x]").val(),
                n = e.find("input[name=center_y]").val(),
                o = e.find("input[name=center_name]").val();
            return a && t ? (e.before(a).remove(), a.data("x", ~~i).data("y", ~~n), a.find(".center_coord").text("(" + i + "|" + n + ")"), this.setName(t, o), this.save(t, i, n, o, !1)) : this.save(-1, i, n, o, !0), !1
        },
        save: function(e, a, t, i, n) {
            $.post(TWMap.urls.centerSave, {
                id: e,
                x: a,
                y: t,
                name: i
            }, function(e) {
                n && $("#centercoords").html(e)
            }, "html")
        },
        getName: function(e) {
            return $("#center_" + e).find(".center_name").text()
        },
        setName: function(e, a) {
            $("#center_" + e).find(".center_name").text(a)
        }
    },
    CoordByXY: function(e) {
        return [~~(e / 1e3), e % 1e3]
    },
    popup: {
        enabled: !0,
        optionToggle: null,
        attackDots: ["", "/dots/green.png", "/dots/yellow.png", "/dots/red.png", "/dots/blue.png", "/dots/red_yellow.png", "/dots/red_blue.png"],
        attackMaxLoot: ["/max_loot/0.png", "/max_loot/1.png"],
        _px: 0,
        _py: 0,
        init: function() {
            this.enabled = !0, this.optionToggle = new MapToggleBox({
                id: "popup_options"
            }), $("#form_map_popup").find("input").change(function() {
                $.post(TWMap.urls.savePopup, $("#form_map_popup").serialize(), function() {
                    TWMap.notifySavedChanges()
                }), TWMap.popup.enabled && TWMap.popup.invalidateCache()
            }), this._cache = {}, this.el = $("#map_popup"), $(this.el).mousemove(function(e) {
                return TWMap.popup.handleMouseMove(e)
            }), this.register();
            var e = this;
            $(TWMap.map.el.root).mouseout(function() {
                e.hide()
            }), this._loadingText = $("#info_extra_info").find("td").html()
        },
        userImageURL: function(e) {
            var a = 1e3;
            return e < a ? TWMap.image_base + "avatar/thumb/" + e + ".jpg" : TWMap.image_base + "userimage/" + e + "_thumb"
        },
        invalidateCache: function() {
            this._cache = {}
        },
        invalidateVillage: function(e) {
            delete this._cache[e], this._currentVillage == e && this.loadVillage(e)
        },
        receivedPopupInformation: function(e) {
            if (e[0])
                for (var a = 0; void 0 !== e[a]; a++) this.receivedPopupInformationForSingleVillage(e[a]);
            else this.receivedPopupInformationForSingleVillage(e), this.calcPos()
        },
        receivedPopupInformationForSingleVillage: function(e) {
            var a = TWMap.villages[e.xy];
            if (a) {
                TWMap.scriptMode && (a.extra = e), this._cache[e.id] = e;
                var t = TWMap.CoordByXY(e.xy);
                this.displayForVillage(a, t[0], t[1]), TWMap.cachePopupContents || delete this._cache[e.id]
            }
        },
        popupOptionsSet: function() {
            var e = $("#popup_options").find("input[type=checkbox]"),
                a = !1;
            return e.each(function() {
                1 == $(this).is(":checked") && (a = !0)
            }), a
        },
        _isAwayFromContext: function(e, a) {
            if (TWMap.context._curFocus == -1) return !0;
            var t = TWMap.CoordByXY(TWMap.context._curFocus),
                i = [Math.abs(e - t[0]), Math.abs(a - t[1])];
            return i[0] >= 2 || i[1] >= 2
        },
        loadVillage: function(e) {
            $.ajax({
                url: TWMap.urls.villagePopup.replace(/__village__/, e),
                dataType: "json",
                type: "GET",
                success: function(e) {
                    return TWMap.popup.receivedPopupInformation(e)
                }
            }), this._cache[e] = "notanobject"
        },
        handleMouseMove: function(e) {
            if (this != TWMap.popup) return !1;
            var a = TWMap.map.coordByEvent(e),
                t = a[0],
                i = a[1],
                n = 1e3 * t + i,
                o = TWMap.villages[n];
            if (o && TWMap.map.inViewport(t, i) && this._isAwayFromContext(t, i)) {
                if (TWMap.context.hide(), "ghost" == o.special ? TWMap.map.el.root.href = TWMap.urls.ctx.mp_invite : TWMap.map.el.root.href = TWMap.urls.ctx.mp_info.replace(/__village__/, o.id), this._currentVillage = o.id, TWMap.map.el.mover && (TWMap.map.el.mover.style.cursor = "pointer"), !this.enabled) return !1;
                this._px = e.pageX, this._py = e.pageY, this._x != t || this._y != i ? (this.displayForVillage(o, t, i), this.el.fadeIn(50), this._is_visible = !0) : this.calcPos()
            } else {
                if (TWMap.map.el.mover) {
                    var s = TWMap.warMode ? "default" : "move";
                    TWMap.map.el.mover.style.cursor = s
                }
                this._is_visible && (TWMap.map.el.root.href = "#", this.hide())
            }
            this._x = t, this._y = i
        },
        displayForVillage: function(e, a, t) {
            if (this._currentVillage == e.id) {
                var i = TWMap.players[e.owner],
                    n = {
                        bonus: null,
                        name: e.name,
                        x: a,
                        y: t,
                        continent: TWMap.con.continentByXY(a, t),
                        points: e.points,
                        owner: null,
                        owner_image: null,
                        newbie: null,
                        ally: null,
                        ally_image: null,
                        extra: null,
                        special: null,
                        units: [],
                        units_display: {}
                    };
                if (e.hasOwnProperty("special") && (n.special = e.special), e.bonus && (n.bonus = {
                        text: e.bonus[0],
                        img: TWMap.image_base + e.bonus[1]
                    }), i) {
                    n.owner = i, i.newbie && e.owner != game_data.player.id && (n.owner.newbie_time = i.newbie), i.image_id && i.image_id > 0 && (n.owner_image = TWMap.popup.userImageURL(i.image_id));
                    var o = TWMap.allies[i.ally];
                    o && (n.ally = o, o.image_id && o.image_id > 0 && (n.ally_image = TWMap.popup.userImageURL(o.image_id)))
                }
                if (this.extraInfo && TWMap.popup.popupOptionsSet()) {
                    var s = this._cache[e.id];
                    if ("undefined" == typeof s) this.loadVillage(e.id), n.extra = !1;
                    else if ("object" == typeof s) {
                        var p = {
                            total: $("#map_popup_units").is(":checked"),
                            home: $("#map_popup_units_home").is(":checked"),
                            time: $("#map_popup_units_times").is(":checked")
                        };
                        if (n.units_display.count = !1, n.units_display.time = p.time && s.id != TWMap.currentVillage, p.total || p.home || p.time)
                            for (var l in s.units)
                                if (s.units.hasOwnProperty(l)) {
                                    var r = parseInt(s.units[l].count.home) + parseInt(s.units[l].count.foreign),
                                        c = p.total && 0 != r;
                                    if (c || p.time && s.units[l].time) {
                                        var m = "";
                                        c && (m = r, p.home && 0 != s.units[l].count.home && (m += '<br/><span class="unit_count_home">(' + s.units[l].count.home + ")</span>"), n.units_display.count = p.total), n.units.push({
                                            name: l,
                                            image: s.units[l].image,
                                            time: s.units[l].time,
                                            count: m
                                        })
                                    }
                                }
                        n.extra = s
                    }
                }
                $("#map_popup").html(jstpl("tpl_popup", n)), this.calcPos(), this.initTimers()
            }
        },
        calcPos: function() {
            var e = [this.el.width(), this.el.height()],
                a = [$(window).scrollLeft() + 3, $(window).scrollTop() + 3, $(window).scrollLeft() + $(window).width() - 3, $(window).scrollTop() + $(window).height() - 3];
            a[1] += $("#topContainer").height() + 3, a[3] -= $("#footer").height() - 3, this._py + 15 + e[1] < a[3] ? y = this._py + 15 : this._py - 15 - a[1] >= e[1] ? y = this._py - e[1] - 15 : y = this._py + 15, x = this._px + 15, x -= Math.max(0, x + e[0] - a[2]), x = Math.max(x, $(window).scrollLeft()), this.el.css("left", x + "px"), this.el.css("top", y + "px")
        },
        initTimers: function() {
            var e = this;
            $("span.map_info_timer").on("timer_end", function() {
                e.loadVillage(e._currentVillage)
            }), Timing.tickHandlers.timers.initTimers("map_info_timer")
        },
        invalidPos: function() {
            this.el.css("left", "-2000px").css("top", "-2000px")
        },
        register: function() {
            $(TWMap.map.el.root).mousemove(function(e) {
                return TWMap.popup.handleMouseMove(e)
            })
        },
        unregister: function() {
            $(TWMap.map.el.root).unbind("mousemove"), TWMap.map.el.mover && (TWMap.map.el.mover.style.cursor = "move"), this.hide()
        },
        hide: function() {
            this._is_visible && (this._currentVillage = 0, this.el.fadeOut(50), this._x = 0, this._y = 0, this._is_visible = !1)
        }
    },
    reload: function(e) {
        var a = TWMap.map.pos;
        e = e || !1, TWMap.map.reload(e), TWMap.minimap.reload(e), TWMap.map.pos = [0, 0], TWMap.minimap.pos = [0, 0], TWMap.map.setPosPixel(a[0], a[1])
    },
    politicalMap: {
        displayed: !1,
        filter: 1,
        optionToggle: null,
        toggle: function(e) {
            var a = $("#politicalmap").is(":checked"),
                t = ~~$("#pmap_options").find('input[name="pmap_filter"]:checked').val();
            $("#pmap_show_topo").is(":checked") && (t += 8), $("#pmap_show_map").is(":checked") && (t += 16), $.ajax({
                url: TWMap.urls.changeShowPolitical,
                data: {
                    topo_show_politicalmap: a,
                    topo_politicalmap_filter: t
                },
                type: "GET",
                success: function() {
                    TWMap.notifySavedChanges()
                }
            }), e && (a ? this.optionToggle.show() : this.optionToggle.hide()), (a != this.displayed || a && t != this.filter) && (this.displayed = a, this.filter = t, TWMap.reload())
        }
    },
    church: {
        displayed: !1,
        enabled: 1 != $.browser.msie,
        toggle: function() {
            this.displayed = $("#belief_radius").is(":checked"), $.ajax({
                url: TWMap.urls.changeShowBelief,
                data: {
                    topo_show_belief: this.displayed
                },
                type: "GET",
                success: function() {
                    TWMap.notifySavedChanges()
                }
            }), TWMap.reload()
        }
    },
    non_attackable_hide: {
        toggle: function() {
            var e = $("#non_attackable_hide").is(":checked");
            TribalWars.setSetting("map_casual_hide", e, function() {
                TWMap.reload(), TWMap.notifySavedChanges()
            })
        }
    },
    watchtower: {
        toggle: function() {
            var e = $("#show_watchtower").is(":checked");
            TribalWars.setSetting("map_show_watchtower", e, function() {
                TWMap.reload()
            })
        }
    },
    inline_send: {
        enabled: !1
    },
    con: {
        SEC_COUNT: 1,
        SUB_COUNT: 1,
        CON_COUNT: 1,
        continentByXY: function(e, a) {
            var t = Math.floor(e / (TWMap.con.SEC_COUNT * TWMap.con.SUB_COUNT)),
                i = Math.floor(a / (TWMap.con.SEC_COUNT * TWMap.con.SUB_COUNT));
            return t + i * TWMap.con.CON_COUNT
        }
    },
    context: {
        _curFocus: -1,
        _visible: !0,
        strings: {},
        _circlePos: [
            [-12, -12],
            [-12, -49],
            [20, -30],
            [20, 6],
            [-11, 25],
            [-44, 6],
            [-44, -30],
            [20, -30],
            [20, 6]
        ],
        _otherOrder: ["mp_info", "mp_lock", "mp_profile", "mp_msg", "mp_fav", "mp_res", "mp_att", "mp_farm_a", "mp_farm_b"],
        _ownOrder: ["mp_info", "mp_recruit", "mp_profile", "mp_overview", "mp_fav", "mp_res", "mp_att", "mp_farm_a", "mp_farm_b"],
        _showPremium: !1,
        init: function() {
            this.strings.villageFavoriteAdded = $("#villageFavoriteAdded").val(), this.strings.villageFavoriteRemoved = $("#villageFavoriteRemoved").val()
        },
        FATooltip: {
            init: function(e, a, t) {
                var i = $("#" + e),
                    n = i.data("minspeed"),
                    o = game_data.village.coord.split("|"),
                    s = this.distance(o[0], o[1], a, t),
                    p = this.calculateDuration(s, n);
                i.data("duration", p), this.bind(i)
            },
            bind: function(e) {
                e.bind("mouseover", function(a) {
                    "undefined" == typeof e.data("tooltip") && (UI.ToolTip(e, {
                        bodyHandler: TWMap.context.FATooltip.create
                    }), e.triggerHandler("mouseover"))
                })
            },
            create: function() {
                var e = $(this),
                    a = e.data("tooltip-tpl"),
                    t = e.data("duration");
                return a + TWMap.context.FATooltip.formatDuration(t)
            },
            distance: function(e, a, t, i) {
                var n = e - t,
                    o = a - i;
                return Math.sqrt(n * n + o * o)
            },
            calculateDuration: function(e, a) {
                return Math.round(e / a)
            },
            formatDuration: function(e) {
                var a = Math.floor(e / 3600),
                    t = Math.floor(e / 60) % 60;
                t < 10 && (t = "0" + t);
                var i = e % 60;
                i < 10 && (i = "0" + i);
                var n = a + ":" + t + ":" + i,
                    o = "<span style='line-height: 20px'>" + n + "</span><br />";
                return o
            }
        },
        spawn: function(e, a, t) {
            var i = 1e3 * a + t;
            if (i == this._curFocus) return "ghost" == e.special ? window.location.href = TWMap.urls.ctx.mp_invite : window.location.href = TWMap.urls.villageInfo.replace(/__village__/, e.id), !0;
            this.hide(), TWMap.popup.hide();
            var n = TWMap.map.pixelByCoord(a, t),
                o = TWMap.map.pos,
                s = [n[0] - o[0], n[1] - o[1]];
            s[0] += TWMap.tileSize[0] / 2, s[1] += TWMap.tileSize[1] / 2;
            var p = this,
                l = [],
                r = [];
            e.hasOwnProperty("special") ? "ghost" == e.special && (r = [null, null, "mp_invite", "mp_invite_hide"]) : r = e.owner == game_data.player.id ? this._ownOrder : this._otherOrder;
            var c = this._circlePos;
            $(r).each(function(i, n) {
                if (("0" != e.owner || "mp_profile" != n && "mp_msg" != n) && (p._showPremium || "mp_recruit" != n && "mp_fav" != n && "mp_lock" != n) && ("mp_farm_a" != n && "mp_farm_b" != n || !(!game_data.player.farm_manager || VillageContext.send_attack_disabled || e.owner > 0 || e.event_special > 0)) && (game_data.village.id != e.id || "mp_res" != n && "mp_att" != n) && (0 != game_data.player.ally || "mp_lock" != n) && (e.points || "mp_fav" != n && "mp_lock" != n) && (VillageContext.claim_enabled || "mp_lock" !== n) && ("mp_res" != n || 5 != parseInt(e.event_special)) && ("mp_msg" !== n || VillageContext.igm_enabled) && ("mp_att" != n || VillageContext.send_troops_enabled)) {
                    if ("mp_lock" == n && TWMap.reservations[e.id] && (n = "mp_unlock"), "mp_fav" == n && jQuery.inArray(parseInt(e.id), TWMap.targets) != -1 && (n = "mp_unfav"), "mp_farm_a" != n && "mp_farm_b" != n || TWMap.context.FATooltip.init(n, a, t), $("#" + n).css("left", s[0] + c[i][0] + "px").css("top", s[1] + c[i][1] + "px").stop().css("opacity", 0).show().fadeTo(120, 1), TWMap.urls.ctx[n]) {
                        var o = TWMap.urls.ctx[n].replace(/__village__/, e.id).replace(/__owner__/, e.owner).replace(/__source__/, game_data.village.id);
                        o.match(/json=1/) ? p.ajaxRegister(n, o) : $("#" + n)[0].href = o, mobile || ("mp_att" == n ? $("#" + n).off("click").on("click", function(a) {
                            return !(1 == a.which && !a.ctrlKey && !a.shiftKey) || (TWMap.inline_send.enabled ? (TWMap.actionHandlers.command.click(e.id), !1) : void 0)
                        }) : "mp_res" == n && $("#" + n).off("click").on("click", function(a) {
                            return !(1 == a.which && !a.ctrlKey && !a.shiftKey) || (TWMap.inline_send.enabled ? (TWMap.actionHandlers.market.click(e.id), !1) : void 0)
                        }))
                    }
                    l.push(n)
                }
            }), this._curFocus = i, this._visible = !0
        },
        ajaxRegister: function(e, a) {
            $("#" + e).unbind("click").click(function(t) {
                t.preventDefault();
                var i = (new Date).getTime();
                if (!(this._last && i - this._last < 900)) return this._last = i, TribalWars.get(a, null, function(a) {
                    TWMap.context.ajaxDone(e, a)
                }), !1
            })
        },
        ajaxDone: function(e, a) {
            this.hide();
            var t = TWMap.fullscreen ? $("#map_wrap") : null;
            switch (e) {
                case "mp_lock":
                case "mp_unlock":
                    if (!a.code) {
                        UI.ErrorMessage(a.error, null, t);
                        break
                    }
                    a.notice && UI.InfoMessage(a.notice, null, null, t), "mp_lock" === e ? TWMap.reservations[a.village] = "player" : delete TWMap.reservations[a.village], TWMap.popup.invalidateCache(), TWMap.reload();
                    break;
                case "mp_fav":
                case "mp_unfav":
                    if (!a.code) {
                        UI.ErrorMessage(a.error, null, t);
                        break
                    }
                    if ("mp_fav" == e) UI.SuccessMessage(this.strings.villageFavoriteAdded, null, t), TWMap.targets.push(a.id);
                    else {
                        UI.SuccessMessage(this.strings.villageFavoriteRemoved, null, t);
                        var i = jQuery.inArray(a.id, TWMap.targets);
                        i != -1 && (TWMap.targets[i] = 0)
                    }
                    break;
                case "mp_farm_a":
                case "mp_farm_b":
                    if (a.error) UI.ErrorMessage(a.error, null, t);
                    else if (a.success) {
                        if (TWMap.premium) {
                            if (TWMap.commandIcons[a.target_village]) {
                                var n = !1;
                                $.each(TWMap.commandIcons[a.target_village], function() {
                                    if ("attack" == this.img) return n = !0, !1
                                }), n || TWMap.commandIcons[a.target_village].push({
                                    img: "attack"
                                })
                            } else TWMap.commandIcons[a.target_village] = [{
                                img: "attack"
                            }];
                            TWMap.reload()
                        }
                        TWMap.popup.invalidateCache(), UI.InfoMessage(TWMap.strings.troopsSent, null, null, t)
                    }
                    break;
                case "mp_invite_hide":
                    document.location.reload()
            }
        },
        hide: function() {
            this._visible && ($(".mp").stop().fadeTo(300, 0, function() {
                TWMap.context._visible || $(".mp").hide()
            }), this._visible = !1, this._curFocus = -1)
        }
    },
    home: {
        active: !0,
        boundary: null,
        go_home: null,
        text: null,
        pointer: null,
        is_premium_account_hint_shown: !1,
        focus: function() {
            var e = game_data.village;
            TWMap.focusUserSpecified(e.x, e.y)
        },
        init: function() {
            this.active && (this.createDisplayComponents(), this.updateDisplay())
        },
        createDisplayComponents: function() {
            var e = $('<div id="map_go_home_boundary"></div>'),
                a = $('<div id="map_go_home"></div>'),
                t = $('<div id="map_go_home_circle"></div>');
            t.click(TWMap.home.focus);
            var i = $('<div id="map_go_home_text">home</div>');
            t.append(i);
            var n = $('<div id="map_go_home_pointer"></div>');
            a.append(n), a.append(t), e.append(a), $("#map_wrap").append(e), this.boundary = $("#map_go_home_boundary"), this.go_home = $("#map_go_home"), this.text = $("#map_go_home_text"), this.pointer = $("#map_go_home_pointer")
        },
        pointHome: function() {
            var e = game_data.village,
                a = TWMap.map.getCenter();
            a = {
                x: a[0],
                y: a[1]
            };
            var t = e.y - a.y,
                i = e.x - a.x,
                n = Math.atan2(t, i);
            this.pointer.css({
                transform: "rotate(" + n + "rad)"
            })
        },
        updateDistance: function() {
            var e = game_data.village,
                a = TWMap.map.getCenter();
            a = {
                x: a[0],
                y: a[1]
            };
            var t = Math.sqrt((e.x - a.x) * (e.x - a.x) + (e.y - a.y) * (e.y - a.y));
            this.text.text(Math.floor(t)), t >= 15 && t < 16 && this.advertisePremiumIfNeeded()
        },
        skirt: function() {
            var e = game_data.village,
                a = TWMap.map.getCenter();
            a = {
                x: a[0],
                y: a[1]
            };
            var t = {
                    x: e.x * TWMap.map.scale[0],
                    y: e.y * TWMap.map.scale[1]
                },
                i = {
                    x: TWMap.map.pos[0] + TWMap.map.size[0] / 2,
                    y: TWMap.map.pos[1] + TWMap.map.size[1] / 2
                },
                n = t.x - i.x,
                o = t.y - i.y,
                s = -Math.atan2(o, n);
            s < 0 && (s = 2 * Math.PI + s);
            var p = this.getTopRightCornerAngle(),
                l = "bottom";
            s < p || s >= 2 * Math.PI - p ? l = "right" : s <= Math.PI - p ? l = "top" : s <= Math.PI + p && (l = "left");
            var r = {
                    left: 0 + $("#map_coord_y_wrap").width(),
                    top: 0,
                    right: TWMap.map.size[0] - 50,
                    bottom: TWMap.map.size[1] - 50 - $("#map_coord_x_wrap").height()
                },
                c = r.left,
                m = r.top;
            switch (l) {
                case "left":
                    c = r.left;
                    break;
                case "right":
                    c = r.right;
                    break;
                case "bottom":
                    m = r.bottom;
                    break;
                case "top":
                default:
                    c = r.left
            }
            if ("right" == l || "left" == l) {
                var u = "right" == l ? 1 : -1;
                m = TWMap.map.size[1] / 2 - u * (Math.tan(s) * (TWMap.map.size[0] / 2)), m = Math.max(Math.min(m, r.bottom), r.top)
            }
            if ("top" == l || "bottom" == l) {
                var u = "top" == l ? 1 : -1,
                    c = TWMap.map.size[0] / 2 - u * (Math.tan(s + Math.PI / 2) * (TWMap.map.size[1] / 2));
                c = e.x < a.x ? Math.max(c, r.left) : Math.min(c, r.right)
            }
            this.go_home.css({
                left: c + "px",
                top: m + "px"
            })
        },
        updateDisplay: function() {
            if (this.active) {
                var e = game_data.village;
                if (TWMap.map.inViewport(e.x, e.y)) return void this.go_home.hide();
                this.go_home.show(), TWMap.home.updateDistance(), TWMap.home.pointHome(), TWMap.home.skirt()
            }
        },
        getTopRightCornerAngle: function() {
            var e = TWMap.map.size[0] / 2,
                a = TWMap.map.size[1] / 2;
            return Math.atan2(a, e)
        },
        advertisePremiumIfNeeded: function() {
            game_data.player.premium || this.is_premium_account_hint_shown || this.mobile || ($(".premium_account_hint").show().css({
                display: "inline-block"
            }), this.is_premium_account_hint_shown = !0)
        }
    },
    home_aura: {
        center_offsets: {
            1: {
                x: 0,
                y: 3
            },
            2: {
                x: 0,
                y: 0
            },
            3: {
                x: 0,
                y: 0
            },
            4: {
                x: 0,
                y: 0
            },
            5: {
                x: 0,
                y: 0
            },
            6: {
                x: 0,
                y: 0
            }
        },
        init: function() {
            var e = game_data.village,
                a = {
                    x: e.x * TWMap.map.scale[0],
                    y: e.y * TWMap.map.scale[1]
                },
                t = TWMap.map.getLevelForVillagePoints(e.points),
                i = this.center_offsets[t],
                n = 56,
                o = 62,
                s = document.createElement("div");
            $(s).css({
                position: "absolute",
                left: a.x - TWMap.map.bias - (n - TWMap.map.scale[0]) / 2 + i.x,
                top: a.y - TWMap.map.bias - (o - TWMap.map.scale[1]) / 2 + i.y,
                "z-index": 4,
                width: n,
                height: o,
                "background-image": "url(" + image_base + "/map/home.png)"
            }), TWMap.map.el.container.appendChild(s)
        }
    },
    getColorByPlayer: function(e, a, t) {
        return this.players[e] ? this.players[e].sleep ? TWMap.colors.sleep : t && TWMap.villageColors[t] && e != game_data.player.id ? TWMap.villageColors[t] : TWMap.playerColors[e] ? TWMap.playerColors[e] : e == game_data.player.id ? TWMap.colors.player : a && TWMap.allyColors[a] ? TWMap.allyColors[a] : game_data.player.ally > 0 && a == game_data.player.ally ? TWMap.colors.ally : TWMap.allyRelations[a] ? TWMap.colors[TWMap.allyRelations[a]] : TWMap.friends[e] ? TWMap.colors.friend : TWMap.colors.other : TWMap.colors.other
    },
    actionHandlers: {}
};
$(function() {
    "use strict";
    TWMap.synchronizer = {
        notify: function(e, a) {
            this.handlers.hasOwnProperty(e) && this.handlers[e](a)
        },
        handlers: {
            command_count: function(e) {
                if (!TWMap.map || !TWMap.premium) return !1;
                var a = e.count > 0;
                TWMap.updateCommandIcon(e.target_village, e.command_type, a), TWMap.popup.invalidateVillage(e.target_village.id)
            }
        }
    }
}()), TWMap.actionHandlers.command = {
    click: function(e) {
        CommandPopup.openRallyPoint({
            target: e
        })
    }
}, TWMap.actionHandlers.market = {
    click: function(e) {
        TribalWars.get("market", {
            ajax: "send",
            target: e
        }, function(e) {
            Dialog.show("popup_command", e.dialog), $("#market-send-form").on("submit", TWMap.actionHandlers.market.sendResources)
        })
    },
    sendResources: function() {
        var e = $(this).serializeArray();
        return TribalWars.post("market", {
            ajax: "confirm"
        }, e, function(e) {
            Dialog.show("map_market", e.dialog), $("#market-confirm-form").on("submit", TWMap.actionHandlers.market.confirmSendResources)
        }), !1
    },
    confirmSendResources: function() {
        var e = $(this).serializeArray();
        return TribalWars.post("market", {
            ajaxaction: "map_send"
        }, e, function(e) {
            Dialog.close(), UI.SuccessMessage(e.message)
        }), !1
    }
};

; /**** game/mapcanvas.js ****/
var MapCanvas = {
    box: 3,
    watchTowers: [],
    init: function() {
        var a;
        if (this.churchData)
            for (a = 0; a < this.churchData.length; a++) this.churchData[a][2] *= this.churchData[a][2]
    },
    createCanvas: function(a, t) {
        var e = document.createElement("canvas");
        if (!e || !e.getContext) return null;
        var r = TWMap.map.scale,
            i = TWMap.map.sectorSize;
        e.id = "map_canvas_" + a.x + "_" + a.y, e.className = "church_radius_display", e.width = r[0] * i, e.height = r[1] * i, e.style.position = "absolute", e.style.zIndex = "10", a.appendElement(e, 0, 0);
        var l, h = e.getContext("2d");
        if (h.save(), TribalWars._settings.map_show_watchtower)
            for (l = 0; l < this.watchTowers.length; l++) {
                var o = this.watchTowers[l][0],
                    n = this.watchTowers[l][1],
                    s = this.watchTowers[l][2];
                if (this.circleCollidesWithSector({
                        x: o + .5,
                        y: n + .5,
                        r: s
                    }, {
                        x: a.x,
                        y: a.y,
                        w: TWMap.map.sectorSize,
                        h: TWMap.map.sectorSize
                    })) {
                    var c = TWMap.map.pixelByCoord(o, n),
                        p = TWMap.map.pixelByCoord(a.x, a.y),
                        u = c[0] - p[0],
                        d = c[1] - p[1];
                    h.beginPath(), MapCanvas.ellipse(h, u + TWMap.tileSize[0] / 2, d + TWMap.tileSize[1] / 2, s * TWMap.map.scale[0], s * TWMap.map.scale[1], 0, 0, 2 * Math.PI, !1), h.fillStyle = "rgba(235, 38, 38, 0.1)", h.fill(), h.lineWidth = 1, h.strokeStyle = "#563f1e", h.stroke()
                }
            }
        var f = this.churchData,
            v = t.pmap[0],
            y = t.pmap[1],
            m = 20;
        v.length < 1 && (v = null);
        var M = e.offsetWidth / i,
            w = e.offsetHeight / i;
        h.scale(M / 37.75, w / 37.75);
        var T, g, W, S, x = TWMap.politicalMap.filter % 8,
            C = TWMap.warMode,
            B = !C && TWMap.politicalMap.displayed && 16 & TWMap.politicalMap.filter;
        for (C && (S = Warplanner.data), g = a.y - 1; g < a.y + i + 1; g++)
            for (T = a.x - 1; T < a.x + i + 1; T++) {
                if (C) {
                    var D = 1e3 * T + g;
                    if (S && TWMap.villages.hasOwnProperty(D)) {
                        var I = TWMap.villages[D].id;
                        if (S[I] && "D" !== S[I].type) {
                            W = [!1, !1, !1, !1, !0, !1, !1, !1, !1];
                            var b = Warplanner.getColorByPlayerId(S[I].player_id);
                            this.mapDrawCell(h, T - a.x, g - a.y, W, b, 19, 19, .6)
                        }
                    }
                }
                if (B) {
                    var _ = T - t.x + 1,
                        L = g - t.y + 1,
                        D = _ + L * (m + 2);
                    if (v && 0 !== v[D]) {
                        var P = _ - 1 + (L - 1) * (m + 2),
                            z = _ - 0 + (L - 1) * (m + 2),
                            G = _ + 1 + (L - 1) * (m + 2),
                            q = _ - 1 + L * (m + 2),
                            O = _ + 1 + L * (m + 2),
                            k = _ - 1 + (L + 1) * (m + 2),
                            E = _ - 0 + (L + 1) * (m + 2),
                            Q = _ + 1 + (L + 1) * (m + 2),
                            R = _ < 1,
                            H = _ >= m + 1,
                            N = L < 1,
                            j = L >= m + 1;
                        if (1 == x || v[D] == game_data.player.id) {
                            W = [R || N ? 0 : v[P], N ? 0 : v[z], H || N ? 0 : v[G], R ? 0 : v[q], v[D], H ? 0 : v[O], R || j ? 0 : v[k], j ? 0 : v[E], j || H ? 0 : v[Q]];
                            var b = [255, 0, 255],
                                A = v[D],
                                F = y[D];
                            b = TWMap.getColorByPlayer(A, F), this.mapDrawCell(h, T - a.x, g - a.y, W, b, 19, 19, .6)
                        }(1 == x || 2 == x || 4 != x && y[D] == game_data.player.ally) && (W = [R || N ? 0 : y[P], N ? 0 : y[z], H || N ? 0 : y[G], R ? 0 : y[q], y[D], H ? 0 : y[O], R || j ? 0 : y[k], j ? 0 : y[E], j || H ? 0 : y[Q]], this.mapDrawCell(h, T - a.x, g - a.y, W, [0, 0, 0], 5, 19, 1))
                    }
                }
                if (TWMap.church.displayed && f) {
                    for (W = [!1, !1, !1, !1, !1, !1, !1, !1, !1], l = 0; l < f.length; l++) {
                        var J = f[l][0],
                            K = f[l][1],
                            U = f[l][2];
                        W = [W[0] || this.churchInBound(T - 1, g - 1, J, K, U), W[1] || this.churchInBound(T, g - 1, J, K, U), W[2] || this.churchInBound(T + 1, g - 1, J, K, U), W[3] || this.churchInBound(T - 1, g, J, K, U), W[4] || this.churchInBound(T, g, J, K, U), W[5] || this.churchInBound(T + 1, g, J, K, U), W[6] || this.churchInBound(T - 1, g + 1, J, K, U), W[7] || this.churchInBound(T, g + 1, J, K, U), W[8] || this.churchInBound(T + 1, g + 1, J, K, U)]
                    }
                    this.mapDrawCell(h, T - a.x, g - a.y, W, [128, 128, 255], 19, 19, .5)
                }
            }
        return h.restore(), h = null, e = null, null
    },
    circleCollidesWithSector: function(a, t) {
        var e = Math.abs(a.x - t.x - t.w / 2),
            r = Math.abs(a.y - t.y - t.h / 2);
        if (e > t.w / 2 + a.r) return !1;
        if (r > t.h / 2 + a.r) return !1;
        if (e <= t.w / 2) return !0;
        if (r <= t.h / 2) return !0;
        var i = e - t.w / 2,
            l = r - t.h / 2;
        return i * i + l * l <= a.r * a.r
    },
    mapDrawCell: function(a, t, e, r, i, l, h, o) {
        0 !== r[4] && i && (t = 38 * (t + .5), e = 38 * (e + .5), a.save(), a.translate(t, e), this.mapDrawBorderLine(a, this.mapGetSectorLine(r[3] == r[4], r[0] == r[4], r[1] == r[4], h), l, i, o), a.restore(), a.save(), a.translate(t, e), a.rotate(.5 * Math.PI), this.mapDrawBorderLine(a, this.mapGetSectorLine(r[1] == r[4], r[2] == r[4], r[5] == r[4], h), l, i, o), a.restore(), a.save(), a.translate(t, e), a.rotate(Math.PI), this.mapDrawBorderLine(a, this.mapGetSectorLine(r[5] == r[4], r[8] == r[4], r[7] == r[4], h), l, i, o), a.restore(), a.save(), a.translate(t, e), a.rotate(1.5 * Math.PI), this.mapDrawBorderLine(a, this.mapGetSectorLine(r[7] == r[4], r[6] == r[4], r[3] == r[4], h), l, i, o), a.restore())
    },
    mapDrawBorderLine: function(a, t, e, r, i) {
        if (!(t.length < 1)) {
            for (var l, h, o, n, s, c, p, u, d, f, v, y, m, M, w, T, g, W = 2, S = [], x = 0; x < t.length - 2; x += 2) l = t[x], h = t[x + 1], o = t[x + 2], n = t[x + 3], s = o - l, c = n - h, p = s * s + c * c, u = Math.sqrt(p), S[x] = c / u, S[x + 1] = -s / u;
            var C = a.globalCompositeOperation,
                B = a.fillStyle;
            for (i || (a.fillStyle = "rgba(" + r[0] + "," + r[1] + "," + r[2] + ",.7)"); null != t[W + 4];) l = t[W], h = t[W + 1], o = t[W + 2], n = t[W + 3], w = S[W - 2], T = S[W - 1], v = S[W], y = S[W + 1], m = S[W + 2], M = S[W + 3], d = v, f = y, m += v, M += y, v += w, y += T, u = Math.sqrt(m * m + M * M), u > 0 && (m /= u, M /= u), u = Math.sqrt(v * v + y * y), u > 0 && (v /= u, y /= u), i && (g = a.createLinearGradient(l, h, l + d * e, h + f * e), g.addColorStop(0, "rgba(" + r[0] + "," + r[1] + "," + r[2] + "," + i + ")"), g.addColorStop(1, "rgba(" + r[0] + "," + r[1] + "," + r[2] + ",0)"), a.fillStyle = g), a.beginPath(), a.moveTo(l, h), a.lineTo(o, n), a.lineTo(o + m * e, n + M * e), a.lineTo(l + v * e, h + y * e), a.closePath(), a.fill(), W += 2;
            a.fillStyle = B, a.globalCompositeOperation = C
        }
    },
    mapGetSectorLine: function(a, t, e, r) {
        var i = [],
            l = 0,
            h = .9,
            o = 19;
        return a || e ? !a || e || t || (i[l++] = r, i[l++] = -r * h, i[l++] = 0, i[l++] = -r * h, i[l++] = -o, i[l++] = -r * h, i[l++] = 2 * -r, i[l++] = -r * h) : (i[l++] = r, i[l++] = -r * h, i[l++] = 0, i[l++] = -r * h, i[l++] = .1 * -r, i[l++] = -r * h, i[l++] = .35 * -r * h, i[l++] = .95 * -r * h, i[l++] = -r * Math.SQRT1_2 * h, i[l++] = -r * Math.SQRT1_2 * h, i[l++] = .95 * -r * h, i[l++] = .35 * -r * h, i[l++] = -r * h, i[l++] = .1 * -r, i[l++] = -r * h, i[l++] = 0, i[l++] = -r * h, i[l++] = r), a && !e && t && (i[l++] = r, i[l++] = -r * h, i[l++] = 0, i[l++] = -r * h, i[l++] = .2 * -r, i[l++] = -r * h, i[l++] = .6 * -r, i[l++] = -r, i[l++] = -o + .2 * r, i[l++] = -o - .2 * r, i[l++] = 2 * -r, i[l++] = 2.4 * -r), a || !e || t || (i[l++] = -r * h, i[l++] = 2 * -r, i[l++] = -r * h, i[l++] = -o, i[l++] = -r * h, i[l++] = 0, i[l++] = -r * h, i[l++] = r), !a && e && t && (i[l++] = 2.4 * -r, i[l++] = 2 * -r, i[l++] = -o - .2 * r, i[l++] = -o + .2 * r, i[l++] = -r, i[l++] = .6 * -r, i[l++] = -r * h, i[l++] = .2 * -r, i[l++] = -r * h, i[l++] = 0, i[l++] = -r * h, i[l++] = r), i
    },
    churchInBound: function(a, t, e, r, i) {
        var l = a - e,
            h = t - r;
        return l * l + h * h <= i
    },
    ellipse: function(a, t, e, r, i, l, h, o, n) {
        a.save(), a.translate(t, e), a.rotate(l), a.scale(r, i), a.arc(0, 0, 1, h, o, n), a.restore()
    }
};

; /**** game/boxtoggle.js ****/
function MapToggleBox(n) {
    function i() {
        var n = TWMap.image_base + "/icons/slide_" + (a ? "up" : "down") + ".png";
        w.attr("src", n)
    }

    function o() {
        null !== u.onShow && u.onShow(), a = !0, i(), r.show("fast")
    }

    function e() {
        null !== u.onHide && u.onHide(), a = !1, c = !1, i(), r.hide("fast")
    }

    function t() {
        return a ? s.hide() : s.show(), !1
    }

    function l(n) {
        c && (c = !1, r.html(n), o())
    }
    var u = $.extend({
        visible: !1,
        url: null,
        onShow: null,
        onHide: null
    }, n);
    n = u;
    var s = this,
        h = u.id,
        a = u.visible,
        c = !1,
        d = u.url,
        r = $(document.getElementById(h)),
        f = $("." + h + "_wrap"),
        w = $("." + h + "_toggler");
    this.show = function() {
        d ? (c = !0, $.ajax({
            url: d,
            dataType: "html",
            success: l
        })) : o()
    }, this.hide = function() {
        e()
    }, a || (f.hide(), r.hide()), w.click(t), i()
}

; /**** game/jstpl.js ****/
! function() {
    var t = {};
    this.jstpl_format = function(t, n) {
        for (var r = t, e = t.match(/%([^%]+)%/g), p = e.length, i = 0; i < p; i++) {
            var o = e[i].substring(1, e[i].length - 1);
            r = r.replace(new RegExp(e[i]), n[o])
        }
        return r
    }, this.jstpl = function n(r, e) {
        var p = /\W/.test(r) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + r.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t==(.*?)%>/g, "',jstpl_format($1,obj),'").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : t[r] = t[r] || n(document.getElementById(r).innerHTML);
        return e ? p(e) : p
    }
}();

; /**** game/TroopTemplates.js ****/
var TroopTemplates = {
    current: null,
    loadTemplate: null,
    deleteLink: null,
    currentTemplates: 0,
    maxTemplates: 2,
    init: function() {
        document.location.hash && (TroopTemplates.loadTemplate = document.location.hash.substring(1)), TroopTemplates.currentTemplates >= TroopTemplates.maxTemplates ? TroopTemplates.loadTemplate || (TroopTemplates.loadTemplate = !0) : TroopTemplates.selectCreate(), TroopTemplates.updateTemplateList(), mobile || $("#troop_template_list").css("height", $("#troop_template_units").height() + "px"), $("#template_create").click(TroopTemplates.selectCreate), $("#troop_template_units").find("form").submit(TroopTemplates.validate)
    },
    resetSelect: function(e) {
        e.find("option:first").attr("selected", "selected").parent("select")
    },
    useTemplate: function(e) {
        if ("object" == typeof e && (e = $(e).find("option:selected").val()), e) {
            var t = TroopTemplates.current[e];
            $.each(t, function(e, t) {
                var a = $("#unit_input_" + e);
                a.length && a.val(t)
            }), $("#template_id").val(e)
        }
        return !1
    },
    validate: function() {
        return $("#template_name").val().length < 1 ? (UI.ErrorMessage("Zadal si neplatnA� jmA�no A!ablony!"), !1) : $("#template_name").val().length > 50 ? (UI.ErrorMessage("NA!zev A!ablony je pA�A�liA! dlouhA1. (Max. 50 znakA�)"), !1) : "" != $("#template_name").val().trim() || (UI.ErrorMessage("NA!zev A!ablony musA� obsahovat alespoA^ jeden viditelnA1 znak."), !1)
    },
    updateTemplateList: function() {
        var e = $("#troop_template_list").find("ul"),
            t = 1;
        $.each(TroopTemplates.current, function(a, l) {
            l.sanitized_name = $("<a></a>").text(l.name).text(), l.display_name = "";
            for (var o = 0; o < l.sanitized_name.length; o++) l.display_name += l.sanitized_name.charAt(o) + "&shy;";
            var p = $('<li><a href="#' + l.id + '"></a></li>'),
                n = p.find("a");
            n.data("template-id", l.id), n.data("li-id", t), n.click(TroopTemplates.selectTemplate), n.html(l.display_name), e.append(p);
            var r = $('<img src="/graphic/delete_14.png" alt="" />').click(function(e) {
                e.stopPropagation(), document.location.replace(TroopTemplates.deleteLink + "&id=" + l.id)
            });
            n.prepend(r), l.id != TroopTemplates.loadTemplate && TroopTemplates.loadTemplate !== !0 || (TroopTemplates.selectTemplate.call(n), TroopTemplates.loadTemplate = 0), t++
        })
    },
    selectCreate: function(e) {
        if ("undefined" != typeof e && e.preventDefault(), TroopTemplates.currentTemplates >= TroopTemplates.maxTemplates) return UI.ErrorMessage("MaximA!lnA� po�?et A!ablon pro jednotky dosaA3en!"), !1;
        var t = mobile ? "number" : "text";
        $("#troop_template_units").find("input[type=" + t + "]").val(""), $("#template_id").val(0), $("#template_name").val(""), $("#template_button").val("VytvoA�it A!ablonu"), TroopTemplates.setSelected(0)
    },
    selectTemplate: function() {
        var e = $(this),
            t = e.data("template-id"),
            a = e.data("li-id"),
            l = TroopTemplates.current[t];
        TroopTemplates.setSelected(a), $("#template_id").val(l.id), $("#template_name").val(l.name), $("#template_button").val("PA�epracovat A!ablonu"), $.each(l, function(e, t) {
            var a = $("#unit_input_" + e);
            a.length && a.val(t)
        })
    },
    setSelected: function(e) {
        var t = $("#troop_template_list").find("li");
        t.removeClass("selected"), t.eq(e).addClass("selected")
    }
};

; /**** game/TargetSelection.js ****/
var TargetSelection;
! function() {
    "use strict";
    TargetSelection = function(e) {
        var t = this;
        this.$container = null, this.on_confirm_village = function(e) {}, this.request_id = 0, this.selected_index = null, this.num_villages = 0, this.page_limit = null, this.last_attacked = null, this.autocomplete_visible = !1, this.ie_compatibility_mode = !0, this.confirmed_village_data = !1, this.read_only = !1, this.clicked_button = "attack", this.autocomplete_wrapper = null, this.input_text_field = null, this.script_watcher = null, this.script_old_x = "", this.script_old_y = "", this.construct = function(e) {
            var i = $(e);
            this.$container = i, this.input_text_field = i.find("input[type=text]"), this.initAutoComplete(), this.changeSearchType.call(i.find("input[type=radio]:checked"), !1), this.page_limit = Math.min(Math.max(Math.round(($(window).height() - this.input_text_field.offset().top) / 50), 5), 10), this.setAutoCompleteWrapperPosition(), this.input_text_field.on("input", function() {
                t.ie_compatibility_mode = !1, t.fetchVillages()
            }).on("keyup", t.textFieldKeyUp).on("keydown", t.textFieldKeyDown).on("remove", t.destroy), i.find("input[type=radio]").on("change", this.changeSearchType), this.input_text_field.parents("form").on("submit", this.beforeSubmit), $(window).on("click", this.onWindowClick), i.find(".btn").on("click", function() {
                t.clicked_button = $(this).attr("name")
            });
            var l = i.data("on-choice");
            l && this.setConfirmHook(l)
        }, this.destroy = function() {
            clearInterval(t.script_watcher), $(window).off("click", t.onWindowClick), this.input_text_field = null
        }, this.onWindowClick = function() {
            t.autocomplete_visible && t.hideAutoCompleteWrapper()
        }, this.initAutoComplete = function() {
            this.$container.find(".target-input-autocomplete").autocomplete({
                minLength: 2,
                source: UI.AutoComplete.source
            }), this.input_text_field.on("autocompleteselect", function(e, i) {
                t.fetchVillages({
                    input: i.item.value
                })
            })
        }, this.initScriptCompatibility = function() {
            clearInterval(this.script_watcher), this.script_watcher = setInterval(this.checkForScriptChange, 100)
        }, this.checkForScriptChange = function() {
            var e = $("#inputx").val(),
                i = $("#inputy").val(),
                l = t.confirmed_village_data ? t.confirmed_village_data.x : "",
                a = t.confirmed_village_data ? t.confirmed_village_data.y : "";
            e && i && (e !== l || i !== a) && (clearInterval(t.script_watcher), t.setVillageByCoordinates(e, i, function() {
                $("#inputx").val(""), $("#inputy").val(""), t.initScriptCompatibility()
            }))
        }, this.setReadOnly = function() {
            this.read_only = !0
        }, this.setLastAttacked = function(e) {
            this.last_attacked = e, this.$container.find(".target-last-attacked").show().on("click", function(e) {
                e.preventDefault(), t.confirmVillage(t.getVillageDiv(t.last_attacked))
            })
        }, this.enableQuickButton = function(e, t) {
            $(".target-" + e).show().on("click", function(e) {
                TargetSelection.loadTargetsPopup(e, t)
            })
        }, this.setVillageByCoordinates = function(e, i, l) {
            this.fetchVillages({
                type: "coord",
                input: e + "|" + i
            }, function(e) {
                e.villages.length && t.confirmVillage(t.getVillageDiv(e.villages[0])), "function" == typeof l && l()
            })
        }, this.setVillageByData = function(e) {
            this.confirmVillage(t.getVillageDiv(e))
        }, this.beforeSubmit = function() {
            var e = $("#inputx"),
                i = $("#inputy"),
                l = t.$container.find(".target-input .village-item");
            if (l.length) {
                var a = l.data("village_data");
                e.val(a.x), i.val(a.y)
            }
            var n, o = t.$container.find("input[type=text]").val();
            return (n = o.match(/^([0-9]{1,3})\|([0-9]{1,3})$/)) && (e.val(n[1]), i.val(n[2])), !0
        }, this.changeSearchType = function(e) {
            var i, l = $(this),
                a = l.closest(".target-select").find("input[type=text]");
            switch (l.val()) {
                case "coord":
                    i = "123|456";
                    break;
                case "village_name":
                    i = "Zadej jmA�no vesnice";
                    break;
                case "player_name":
                    i = "Zadej jmA�no hrA!�?e"
            }
            a.attr("placeholder", i).data("search-type", l.val()), t.clearVillages(), "player_name" === l.val() ? (a.autocomplete("enable"), a.autocomplete("search")) : a.autocomplete("disable"), e !== !1 && a.focus()
        }, this.clearVillages = function() {
            this.hideAutoCompleteWrapper(), this.removeConfirmedVillage()
        }, this.fetchVillages = function(e, i) {
            var l = {
                ajax: "target_selection",
                input: this.$container.find("input[type=text]").val(),
                type: this.$container.find("input[type=radio]:checked").val(),
                request_id: ++this.request_id,
                limit: this.page_limit,
                offset: 0
            };
            l = $.extend(l, e), 0 !== l.input.length && ("undefined" == typeof i && (i = function(e) {
                t.handleVillagesData(e)
            }), TribalWars.get("api", l, i))
        }, this.handleVillagesData = function(e) {
            if (e.request_id === this.request_id) {
                var i = this.getAutoCompleteWrapper();
                if (this.hideAutoCompleteWrapper(), this.num_villages = e.villages.length + e.offset, 0 === e.offset ? (this.selected_index = null, i.empty()) : i.find(".village-more").remove(), 0 !== e.villages.length) {
                    if (this.showAutoCompleteWrapper(), $.each(e.villages, function(e, l) {
                            i.append(t.getVillageDiv(l))
                        }), e.more) {
                        var l = $('<div class="village-item village-more">Zobrazit vA�ce</div>').on("click", function(e) {
                            e.stopPropagation(), t.loadMoreVillages()
                        });
                        i.append(l)
                    }
                    this.setAutoCompleteWrapperPosition()
                }
            }
        }, this.showAutoCompleteWrapper = function() {
            this.getAutoCompleteWrapper().show(), this.autocomplete_visible = !0
        }, this.hideAutoCompleteWrapper = function() {
            "player_name" === this.$container.find(".input[type=radio]:checked").val() && this.input_text_field.autocomplete("enable"), this.getAutoCompleteWrapper().hide(), this.autocomplete_visible = !1
        }, this.getAutoCompleteWrapper = function() {
            return this.autocomplete_wrapper || (this.autocomplete_wrapper = $('<div class="target-select-autocomplete"></div>').appendTo("body")), this.autocomplete_wrapper
        }, this.setAutoCompleteWrapperPosition = function() {
            var e = this.getAutoCompleteWrapper(),
                t = this.$container.find(".target-input"),
                i = t.offset(),
                l = t.height();
            e.css("width", t.width() + 2 + "px"), e.css("max-height", 50 * this.page_limit + "px"), e.css("left", i.left);
            var a = e.height(),
                n = $(document).height() - i.top - l - $("#footer").height();
            a > n ? (e.css("top", i.top - a - 2 + "px"), e.css({
                "border-top-width": "1px",
                "border-bottom-width": "0px"
            })) : (e.css("top", i.top + l + 2 + "px"), e.css({
                "border-top-width": "0px",
                "border-bottom-width": "1px"
            }))
        }, this.setConfirmHook = function(e) {
            for (var t = e.split("."), i = t.pop(), l = window, a = 0; a < t.length; a++) l = l[t[a]];
            var n = l[i];
            if ("function" != typeof n) throw "non-existent function specified for TargetSelection on-choice";
            this.on_confirm_village = n
        }, this.confirmVillage = function(e) {
            this.removeConfirmedVillage(), this.getAutoCompleteWrapper().hide();
            var t = this.$container.find(".target-input");
            t.find("input").hide(), t.append(e), e.removeClass("village-selected"), this.confirmed_village_data = e.data("village_data"), this.updateURLForConfirmedVillage(), this.on_confirm_village(this.confirmed_village_data)
        }, this.removeConfirmedVillage = function() {
            var e = this.$container.find(".target-input");
            e.find(".village-item").length && (e.find("input").show().val("").focus(), e.find(".village-item").remove(), this.confirmed_village_data = !1, $("input[name=x], input[name=y]").val(""), this.updateURLForConfirmedVillage())
        }, this.getVillageDiv = function(e) {
            var i = $('<div class="village-item"><img class="village-delete" alt="" /><img class="village-picture" alt="" /><span class="village-name"></span><span class="village-info"></span><span class="village-distance"></span></div>').data("village_data", e);
            this.read_only || i.on("click", function(e) {
                e.stopPropagation(), $(this).parent().hasClass("target-select-autocomplete") ? t.confirmVillage(i) : t.removeConfirmedVillage()
            });
            var l = e.name;
            l.length > 18 && (l = l.substr(0, 18) + "&hellip;");
            var a = s("%1 (%2|%3)", l, e.x, e.y),
                n = e.player_name ? e.player_name : "BarbaA�i",
                o = "<strong>Majitel:</strong> " + n + " <strong>Body: </strong> " + e.points,
                r = Math.round(Math.sqrt(e.distance)),
                c = 1 === r ? s("%1 pole", r) : s("%1 polA�", r),
                h = "<strong>VzdA!lenost:</strong> " + c;
            return i.find(".village-picture").attr("src", e.image), i.find(".village-delete").attr("src", image_base + "/delete.png"), i.find(".village-name").html(a), i.find(".village-info").html(o), i.find(".village-distance").html(h), this.read_only && i.addClass("read-only"), i
        }, this.textFieldKeyUp = function(e) {
            t.ie_compatibility_mode && 38 !== e.keyCode && 40 !== e.keyCode && t.fetchVillages();
            var i = $(this),
                l = i.val();
            return "coord" === i.data("search-type") && (l = l.replace(/[,\.]/, "|"), l = l.replace(/[^[0-9\|]+/, ""), 3 === l.length && 8 !== e.keyCode && 46 !== e.keyCode && (l += "|"), l.indexOf("||") !== -1 && (l = l.replace(/(\|{2,})/, "|")), l.length > 7 && (l = l.substr(0, 7)), i.val(l)), !0
        }, this.textFieldKeyDown = function(e) {
            return 38 === e.keyCode ? (t.selectPrevVillage(), !1) : 40 === e.keyCode ? (t.selectNextVillage(), !1) : 13 !== e.keyCode || (t.confirmVillageAtIndex(t.selected_index), !1)
        }, this.selectNextVillage = function() {
            null === this.selected_index ? this.selectVillageAtIndex(0) : this.selected_index + 1 <= this.num_villages && this.selectVillageAtIndex(this.selected_index + 1)
        }, this.selectPrevVillage = function() {
            null !== this.selected_index && this.selected_index > 0 && this.selectVillageAtIndex(this.selected_index - 1)
        }, this.selectVillageAtIndex = function(e) {
            this.unselectSelectedVillage();
            var t = this.getAutoCompleteWrapper().find("div").eq(e);
            t.addClass("village-selected"), this.selected_index = e;
            var i = 41 * e,
                l = t.position().top,
                a = parseInt(t.parent().css("max-height"));
            l < 10 ? t.parent().scrollTop(i) : l > a - 40 && t.parent().scrollTop(i)
        }, this.unselectSelectedVillage = function() {
            this.getAutoCompleteWrapper().find("div.village-selected").removeClass("village-selected")
        }, this.confirmVillageAtIndex = function(e) {
            var t = this.getAutoCompleteWrapper().find("div").eq(e);
            t.length && (t.hasClass("village-more") ? (this.loadMoreVillages(), this.selectVillageAtIndex(e - 1)) : this.confirmVillage(t))
        }, this.updateURLForConfirmedVillage = function() {
            var e = this.confirmed_village_data ? this.confirmed_village_data : {
                    id: 0
                },
                t = document.location.href;
            "#" === t.substr(-1) && (t = t.substr(0, t.length - 1));
            var i = /target=([0-9]+)/;
            t.match(i) ? t = t.replace(i, "target=" + e.id) : t += "&target=" + e.id, Modernizr.history && history.replaceState({}, "", t)
        }, this.loadMoreVillages = function() {
            this.fetchVillages({
                offset: this.num_villages
            })
        }, this.construct(e)
    }, TargetSelection.loadTargetsPopup = function(e, t) {
        UI.AjaxPopup(e, "village_targets", t, "CA�le ", null, {
            reload: !0
        }, null, 400)
    }
}();

; /**** game/warplanner.js ****/
var Warplanner = {
    visible: !1,
    initPos: !1,
    filter: "",
    curFilter: [],
    curPlayer: 0,
    attackType: "A",
    admin: !1,
    locked: !1,
    lockTimer: 0,
    el: {
        root: null,
        list: null,
        search: null,
        select: null,
        map_mover: null,
        bb: null,
        bb_popup: null
    },
    urls: {},
    players: {},
    data: {},
    selectArea: [0, 0, 0, 0],
    init: function() {
        this.el.root = $("#warplanner"), this.el.list = $("#warplanner_players"), this.el.search = $("#warplanner_search"), this.el.map_mover = $("#map_mover"), this.el.select = this._createSelectionDiv(), this.el.bb = $("#warplanner_bb"), this.el.bb_popup = $("#warplanner_bb_popup"), this.el.bb_popup.draggable({
            containment: [0, 60]
        }), $("#warplanner_open").click(function() {
            return Warplanner.toggle(), !1
        }), $("#warplanner_genbb").click(function() {
            return Warplanner.createBB(0), !1
        }), $("#warplanner_players").click(jQuery.proxy(function(e) {
            for (var a, t = e.target, r = 0; t && r < 5 && !(a = jQuery.data(t, "pid")); r++) t = $(t).parent(), t = t[0];
            return !a || (setTimeout(jQuery.proxy(function() {
                this.el.list.find("td").removeClass("selected"), t = $(t), t.find("input[type=radio]").attr("checked", "checked"), t.find("td").addClass("selected"), this.selectPlayer(a)
            }, this), 0), e.target.className.match(/wp_col/) ? this.onClickColorDiv(e, a) : e.target.className.match(/wp_del/) ? this.clearAllForPlayer(a) : e.target.className.match(/wp_bb/) && this.createBB(a), !0)
        }, this));
        var e = jQuery.proxy(function() {
            this.filter = this.el.search.val(), this._fillPlayerList()
        }, this);
        this.el.search.change(e).keyup(e).keypress(jQuery.proxy(function(e) {
            return 13 != e.which || (1 == this.curFilter.length && (this.selectPlayer(this.curFilter[0]), this.el.search.val("")), e.preventDefault(), !1)
        }, this)), $("input[name=warplanner_type]").change(function() {
            Warplanner.attackType = this.value
        }), window.onbeforeunload = function() {
            if (Warplanner.locked === !0) return "Změny v plA!nova�?i Aotoku zatA�m nebyly uloA3eny."
        }, window.unload = window.onbeforeunload
    },
    _createSelectionDiv: function() {
        var e = $("<div/>");
        return e.css({
            height: "100%",
            width: "100%",
            "z-index": "10",
            "background-image": this.el.map_mover.css("background-image"),
            position: "absolute",
            left: "0px",
            top: "0px"
        }).attr("id", "warplanner_selection").hide(), e.insertAfter("#map_mover"), e
    },
    _scale: function() {
        this.el.width(window.innerWidth).height(window.innerHeight - 60).offset({
            top: 60,
            left: 0
        })
    },
    toggle: function() {
        this.visible = !$("#warplanner_enabled").is(":checked"), this.visible ? this.hide() : this.show()
    },
    show: function() {
        this.reload(function() {
            this.initPos || (this.initPos = !0, this.el.root.css("left", "5px").css("top", (window.pageYOffset || window.scrollY) + 60 + "px")), this.el.root.show(), this.el.search.focus(), this.visible = !0, this.admin && TWMap.map.mover.preventDrag(jQuery.proxy(function(e, a) {
                var t = [a[0] - e[0], a[1] - e[1]],
                    r = this.el.map_mover.offset();
                r.left -= $(window).scrollLeft(), r.top -= $(window).scrollTop(), e = [e[0] - r.left, e[1] - r.top], t[0] < 0 && (e[0] += t[0], t[0] = -t[0]), t[1] < 0 && (e[1] += t[1], t[1] = -t[1]), this.selectArea = [e[0], e[1], e[0] + t[0], e[1] + t[1]], this.el.select.height(t[1]).width(t[0]).css({
                    top: e[1] + "px",
                    left: e[0] + "px"
                })
            }, this), jQuery.proxy(function() {
                this.el.select.css({
                    height: "0px",
                    width: "0px"
                }).show()
            }, this), jQuery.proxy(function() {
                this.el.select.hide();
                var e, a;
                e = (this.selectArea[0] + TWMap.map.pos[0]) / TWMap.map.scale[0], a = (this.selectArea[1] + TWMap.map.pos[1]) / TWMap.map.scale[1];
                var t = [~~e, ~~a];
                e = (this.selectArea[2] + TWMap.map.pos[0]) / TWMap.map.scale[0], a = (this.selectArea[3] + TWMap.map.pos[1]) / TWMap.map.scale[1];
                var r = [~~e, ~~a];
                for (e = t[0]; e <= r[0]; e++)
                    for (a = t[1]; a <= r[1]; a++) {
                        var i = 1e3 * e + a,
                            l = TWMap.villages[i];
                        l && "ghost" != l.special && (this.data[l.id] && this.data[l.id].player_id === this.curPlayer && this.data[l.id].type === this.attackType ? this.data[l.id].type = "D" : (this.lock(!0), this.data[l.id] = {
                            player_id: this.curPlayer,
                            type: this.attackType
                        }))
                    }
                TWMap.reload(!1), $("#warplanner_enabled").attr("checked", "checked")
            }, this)), TWMap.warMode = !0, TWMap.reload(!1)
        })
    },
    hide: function() {
        var e = function() {
            Warplanner.el.root.hide(), Warplanner.visible = !1, Warplanner.admin && TWMap.map.mover.preventDrag(!1), TWMap.warMode = !1, TWMap.reload(!1), $("#warplanner_enabled").removeAttr("checked")
        };
        if (!Warplanner.locked) return void e();
        var a = "NeuloA3enA� změny budou ztraceny. Pokra�?ovat?",
            t = [{
                text: "Potvrdit",
                callback: e,
                confirm: !0
            }];
        UI.ConfirmationBox(a, t)
    },
    reload: function(e) {
        this.players = {}, $.ajax({
            url: this.urls.read,
            dataType: "json",
            success: jQuery.proxy(function(a) {
                if (a.code !== !0) return void UI.ErrorMessage("PA�i na�?A�tA!nA� plA!nova�?e Aotoku doA!lo k chybě.");
                for (var t in a.members)
                    if (a.members.hasOwnProperty(t)) {
                        var r = a.members[t];
                        this.addPlayer(r.name, t, r.color)
                    }
                for (var i in a.villages)
                    if (a.villages.hasOwnProperty(i)) {
                        var l = a.villages[i];
                        this.data[l.village_id] = {
                            player_id: ~~l.player_id,
                            type: l.type
                        }
                    }
                if (!this.players[this.curPlayer]) {
                    var s = 0;
                    for (var t in this.players)
                        if (this.players.hasOwnProperty(t)) {
                            s = t;
                            break
                        }
                    this.selectPlayer(s)
                }
                this._fillPlayerList(), jQuery.proxy(e, this)()
            }, this)
        })
    },
    createPlayerListLinks: function() {
        var e = $("<div/>").css("float", "right");
        if (this.admin) var a = $("<img/>").attr("src", TWMap.image_base + "/delete_small.png").addClass("wp_del");
        var t = $("<img/>").css("padding-left", "3px").attr("src", TWMap.image_base + "/forwarded.png").addClass("wp_bb");
        return e.append(a).append(t)
    },
    _fillPlayerList: function() {
        var e = $("#warplanner_players"),
            a = this.filter.toLowerCase();
        e.find("tr").remove(), this.curFilter = [];
        var t, r = document.createDocumentFragment(),
            i = this.createPlayerListLinks();
        for (t in this.players)
            if (this.players.hasOwnProperty(t)) {
                var l = this.players[t];
                if ("" === a || l.name.toLowerCase().indexOf(a) !== -1) {
                    var s = document.createElement("tr"),
                        o = $(s);
                    o.html(this.playerTpl), o.find(".wp_name").text(l.name).append(i.clone()), o.find(".wp_col").css("background-color", "rgb(" + l.color[0] + "," + l.color[1] + "," + l.color[2] + ")"), this.curPlayer === l.id && (o.find("td").addClass("selected"), o.find("input[type=radio]").attr("checked", "checked")), jQuery.data(s, "pid", l.id), this.curFilter.push(l.id), r.appendChild(s)
                }
            }
        e.append(r)
    },
    addPlayer: function(e, a, t) {
        a = ~~a, this.players[a] = {
            id: a,
            name: e,
            color: t
        }
    },
    selectPlayer: function(e) {
        e = ~~e;
        var a = this.players[e];
        return !!a && void(this.curPlayer = e)
    },
    getColorByPlayerId: function(e) {
        return this.players[e].color
    },
    onClickColorDiv: function(e, a) {
        var t = e.pageX,
            r = e.pageY,
            i = this.players[a];
        this.colorEditPlayer = a;
        var l = this.urls.colorPopup + "&r=" + i.color[0] + "&g=" + i.color[1] + "&b=" + i.color[2];
        UI.AjaxPopup(null, "warplanner_color_popup", l, "Vybrat barvu", jQuery.proxy(this.onColorLoaded, this), {
            dataType: "html",
            reload: !0
        }, 280, 200, t, r)
    },
    onColorLoaded: function(e) {
        $("#warplanner_color_popup_content").html(e);
        var a = this.players[this.colorEditPlayer].color;
        $("#color").css("background-color", "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")"), $("#color_picker_r").val(a[0]), $("#color_picker_g").val(a[1]), $("#color_picker_b").val(a[2]), $("#icon_picker").hide(), $("#color_picker").show(), $("#warplanner_color_popup_content").find("form").submit(jQuery.proxy(this.onColorSubmit, this))
    },
    onColorSubmit: function() {
        var e = $("#color_picker_r").val(),
            a = $("#color_picker_g").val(),
            t = $("#color_picker_b").val();
        return this.players[this.colorEditPlayer].color = [e, a, t], this.lock(!0), this._fillPlayerList(), TWMap.reload(!1), $("#warplanner_color_popup").toggle(), !1
    },
    createBB: function(e) {
        var a = {};
        for (var t in this.data)
            if (this.data.hasOwnProperty(t)) {
                var r = this.data[t].player_id,
                    i = this.data[t].type;
                0 != e && r != e || "D" !== i && (a.hasOwnProperty(r) || (a[r] = {
                    name: this.players[r].name,
                    village_ids: [],
                    types: []
                }), a[r].village_ids.push(t), a[r].types.push(i))
            }
        $.post(Warplanner.urls.genbb, {
            dat: a
        }, jQuery.proxy(function(e) {
            if (e.code === !0) {
                var a = e.bb;
                $.browser.msie && (a = a.replace(/\n/g, "<br/>")), this.el.bb_popup.show(), this.el.bb.html(a).focus()[0].select()
            } else UI.ErrorMessage(e.msg)
        }, this), "json")
    },
    onVillageClicked: function(e, a, t) {
        var r = 1e3 * a + t,
            i = TWMap.villages[r];
        if ("ghost" == i.special) return !1;
        if (this.data[e] && "D" !== this.data[e].type && this.data[e].player_id === this.curPlayer) {
            var l = this.attackType;
            this.data[e].type === l ? this.data[e].type = "A" === l ? "F" : "A" : this.data[e].type = "D"
        } else this.data[e] = {
            player_id: this.curPlayer,
            type: this.attackType
        };
        this.lock(!0), TWMap.reload(!1, !0)
    },
    clearAllForPlayer: function(e) {
        var a = !1;
        for (var t in this.data) this.data.hasOwnProperty(t) && "D" !== this.data[t].type && this.data[t].player_id === e && (a = !0, this.data[t].type = "D");
        a && (this.lock(!0), TWMap.reload(!1))
    },
    lock: function(e, a) {
        "pending" === this.locked || !a && this.locked === e || (this.locked = "pending", $.post(this.urls.lock, {
            lock: !0
        }, jQuery.proxy(function(a) {
            a.code === !0 ? this.setLocked(e) : (alert(a.msg), this.setLocked(!1))
        }, this), "json"))
    },
    setLocked: function(e) {
        this.locked = e, e ? (this.lockTimer || (this.lockTimer = setInterval(function() {
            Warplanner.lock(!0, !0)
        }, 6e4)), $("#warplanner_save").removeAttr("disabled")) : (this.lockTimer && (clearInterval(this.lockTimer), this.lockTimer = 0), $("#warplanner_save").attr("disabled", "disabled"))
    },
    save: function() {
        if (this.locked !== !0) return void UI.ErrorMessage("Změny momentA!lně nelze uloA3it.");
        var e = {};
        for (var a in this.data) this.data.hasOwnProperty(a) && (e[a] = {
            p: this.data[a].player_id,
            t: this.data[a].type
        });
        var t = {};
        for (var a in this.players) this.players.hasOwnProperty(a) && (t[a] = {
            c: this.players[a].color.join(",")
        });
        $.post(this.urls.save, {
            villages: e,
            players: t
        }, jQuery.proxy(function(e) {
            return e.code !== !0 ? void UI.ErrorMessage(e.msg) : (this.setLocked(!1), TWMap.notifySavedChanges(), TWMap.warModeGeneration++, void TWMap.reload(!1))
        }, this), "json")
    }
};

; /**** game/worldmap.js ****/
var Worldmap = {
    Data: {
        t: 0
    },
    init: function(e) {
        Worldmap.Data.t = e, $("#worldmap").draggable({
            stop: Worldmap.savePosition,
            containment: [0, 60]
        })
    },
    toggle: function() {
        switch ("undefined" == typeof toggle_value || 0 == toggle_value ? ("undefined" == typeof toggle_value && Worldmap.reload(), toggle_value = !0) : toggle_value = !1, toggle_value) {
            case !0:
                $("#worldmap").show();
                break;
            case !1:
                $("#worldmap").hide()
        }
    },
    reload: function() {
        var e = "&cut=true";
        $("#worldmap_settings").children(":checked").each(function() {
            switch ($(this).attr("name")) {
                case "worldmap_barbarian_toggle":
                    e += "&barbarian=true";
                    break;
                case "worldmap_ally_toggle":
                    e += "&ally=true";
                    break;
                case "worldmap_partner_toggle":
                    e += "&partner=true";
                    break;
                case "worldmap_nap_toggle":
                    e += "&nap=true";
                    break;
                case "worldmap_enemy_toggle":
                    e += "&enemy=true"
            }
        }), Worldmap.Data.t > 0 && (e = e + "&t=" + Worldmap.Data.t), Worldmap.loadMapImage(e)
    },
    loadMapImage: function(e) {
        $("#worldmap_body").hide(), $("#worldmap-throbber").show();
        var t = new Image;
        t.onload = function() {
            $("#worldmap-throbber").hide(), $("#secrets").css("left", (this.width - 1e3) / 2).css("top", (this.height - 1e3) / 2);
            var e = 500 - this.width / 2,
                t = 500 - this.height / 2;
            $("#worldmap_image > input").width(this.width).height(this.height).click(function(a) {
                var o = $(this).offset(),
                    r = a.offsetX ? a.offsetX : a.pageX - this.offsetLeft - o.left,
                    l = a.offsetY ? a.offsetY : a.pageY - this.offsetTop - o.top;
                return r += e, l += t, Worldmap.toggle(), TWMap.map.centerPos(r, l), !1
            }), $("#worldmap_body").width(this.width).height(this.height).css("background-image", "url(" + this.src + ")").show()
        }, t.src = "page.php?page=worldmap_image" + e
    },
    savePosition: function(e, t) {
        $.cookie("worldmap_left", $(this).css("left")), $.cookie("worldmap_top", $(this).css("top"))
    }
};

; /**** game/Market.js_ ****/
var Market = {
    Data: {
        Trader: {
            carry: 0,
            amount: 0,
            total: 0,
            capacity: null
        },
        Res: {
            wood: 0,
            stone: 0,
            iron: 0
        }
    },
    Memory: {
        freeCapacity: null,
        res: {
            wood: 0,
            stone: 0,
            iron: 0
        }
    },
    Set: {
        freeCapacitiy: function(e) {
            Market.Memory.freeCapacity = e
        },
        maxRes: function(e) {
            Market.Memory.res = e, Market.Data.Res.wood = e.wood, Market.Data.Res.stone = e.stone, Market.Data.Res.iron = e.iron
        }
    },
    init: function(e, t) {
        Market.Data = e, Market.Modes[t] && Market.Modes[t].init(), $("#unblocked_points_info").on("click", function() {
            Dialog.fetch("premium_blocked_logs", "premium", {
                ajax: "blocked_points"
            })
        })
    },
    getPremiumRate: function(e, t) {
        var a = e / t;
        return {
            resources: 0 === a ? 0 : a < 1 ? 1 : Math.floor(a),
            premium: 0 === a ? 0 : a < 1 ? Math.floor(1 / a) : 1
        }
    },
    Modes: {
        own_offer: {
            init: function() {
                Market.Modes.own_offer.initResSelectionHandling()
            },
            initResSelectionHandling: function() {
                $("#res_sell_wood, #res_sell_stone, #res_sell_iron").click(function() {
                    $("#res_sell_amount").select()
                }), $("#res_buy_wood, #res_buy_stone, #res_buy_iron").click(function() {
                    $("#res_buy_amount").select()
                })
            }
        },
        all_own_offer: {
            init: function() {
                $(".fillmax").click(function() {
                    return Market.Modes.all_own_offer.fillMax(this), !1
                }), $("a.market_accept_offer").click(function() {
                    Market.Modes.all_own_offer.submitOfferAcceptForm($(this))
                }), $("input.market_accept_offer").keydown(function(e) {
                    13 === e.keyCode && (e.preventDefault(), $(this).parent().find("a.market_accept_offer").click())
                })
            },
            acceptOffer: function(e, t) {
                TribalWars.post("market", {
                    ajaxaction: "accept_offer"
                }, {
                    id: e,
                    count: t
                }, function(t) {
                    var a = Market.Modes.all_own_offer;
                    t.hasOwnProperty("expired") ? (UI.ErrorMessage(t.expired), a.removeOfferDisplay()) : (UI.SuccessMessage("NabA�dka pA�ijata."), 0 === t.offers_remaining ? a.removeOfferDisplay(e) : a.updateOffer(e, t.offers_remaining), a.updateMerchants(t.merchants_available, t.merchants_total, t.merchant_carry))
                })
            },
            submitOfferAcceptForm: function(e) {
                var t = e.data("id"),
                    a = e.parent().find("input[name=count]").val();
                return this.acceptOffer(t, a), !1
            },
            removeOfferDisplay: function(e) {
                $offer_container = $("#offer_" + e);
                var t = $offer_container.data("village"),
                    a = $("#village_" + t),
                    r = a.data("offer-count") - 1;
                if (a.data("offer-count", r), mobile) $offer_container.next().remove(), $offer_container.prev().remove(), r < 1 && (a.next().remove(), a.remove());
                else {
                    a.attr("rowspan", parseInt(a.attr("rowspan")) - 1);
                    var o = $offer_container.next(".offer_container");
                    o[0] && o.data("village") === t && o.prepend(a.detach())
                }
                $offer_container.remove()
            },
            updateOffer: function(e, t) {
                $offer_container = $("#offer_" + e), $offer_container.data("count", t), $("#offer_count_" + e).html(t)
            },
            updateMerchants: function(e, t, a) {
                var r = Math.floor(e * a),
                    o = game_data.village;
                $(".offer_container").each(function() {
                    var e = $(this),
                        t = e.data("id"),
                        a = {
                            wood: e.data("wanted_wood"),
                            stone: e.data("wanted_stone"),
                            iron: e.data("wanted_iron")
                        },
                        i = e.data("count"),
                        n = 0,
                        f = 0;
                    ["wood", "stone", "iron"].forEach(function(e) {
                        n += a[e], a[e] > 0 && (f = Math.floor(o[e] / a[e]))
                    });
                    var s = n > 0 ? Math.floor(r / n) : 0,
                        l = Math.min(f, s, i);
                    $fillmax = $("#fillmax_" + t), $fillmax.html(l).data("max", l)
                })
            },
            fillMax: function(e) {
                $anchor = $(e), $anchor.parent().find("input[name=count]").val($anchor.data("max"))
            }
        },
        other_offer: {
            init: function() {
                $("input[name=res_sell], input[name=res_buy]").change(Market.Modes.other_offer.check_ratio_enabled), $("form.market_accept_offer").submit(function() {
                    Market.Modes.other_offer.submitOfferAcceptForm($this)
                }), Market.Modes.other_offer.check_ratio_enabled(), $("#offer_filter select, #offer_filter input[name=only_ally]").change(function() {
                    Market.Modes.other_offer.search()
                }), $("#confirm_custom_ratio_max").click(function() {
                    Market.Modes.other_offer.search()
                })
            },
            check_ratio_enabled: function() {
                var e = "",
                    t = "";
                $("input[name=res_sell]").each(function() {
                    this.checked && (e = this.value)
                }), $("input[name=res_buy]").each(function() {
                    this.checked && (t = this.value)
                })
            },
            lockSell: function(e) {
                $('input[name="res_sell"]').prop("disabled", !1), $('#selection_sell :input[value="' + e + '"]').prop("disabled", !0), this.search()
            },
            lockBuy: function(e) {
                $('input[name="res_buy"]').prop("disabled", !1), $('#selection_buy :input[value="' + e + '"]').prop("disabled", !0), this.search()
            },
            switchToCustomRatioUI: function() {
                $("#choose_ratio_max").remove(), $("#custom_ratio_max").show(), $("#custom_ratio_max_input").attr("name", "ratio_max").select()
            },
            sort: function(e) {
                var t = $("#order_by").val();
                e === t && $("#toggle_dir").val(1), $("#order_by").val(e), this.search()
            },
            search: function() {
                $("#offer_filter").submit()
            },
            acceptOffer: function(e, t) {
                TribalWars.post("market", {
                    ajaxaction: "accept_offer"
                }, {
                    id: e,
                    count: t
                }, function(e) {
                    e.hasOwnProperty("expired") ? UI.ErrorMessage(e.expired) : UI.SuccessMessage("NabA�dka pA�ijata."), partialReload()
                })
            },
            submitOfferAcceptForm: function(e) {
                var t = e.find("input[name=id]").val(),
                    a = e.find("input[name=count]").val();
                return this.acceptOffer(t, a), !1
            }
        },
        send: {
            init: function() {
                $("input.resources_max").change(Market.Modes.send.handleChange), $("#fill_recent_target").click(function() {
                    var e = $(this);
                    return Market.Modes.send.setCoords(e.data("x"), e.data("y")), !1
                })
            },
            setCoords: function(e, t) {
                return $("#inputx").val(e), $("#inputy").val(t), !1
            },
            handleChange: function(e) {
                Market.Modes.send.recalcFreeCapacity()
            },
            insertMax: function(e) {
                var t = $("input[name='" + e + "']"),
                    a = parseInt(t.val());
                isNaN(a) && (a = 0), null == Market.Memory.freeCapacity && Market.Modes.send.recalcFreeCapacity();
                var r = 0;
                r = Market.Memory.freeCapacity > Market.Memory.res[e] ? Market.Memory.res[e] : Market.Memory.freeCapacity, r <= 0 ? (r = 0, Market.Memory.res[e] = Market.Data.Res[e]) : r += a, Market.Memory.res[e] -= r, 0 == r && (r = ""), t.val(r), Market.Modes.send.recalcFreeCapacity()
            },
            recalcFreeCapacity: function() {
                var e = 0;
                $("input.resources_max").each(function() {
                    var t = this.name,
                        a = Math.max(0, parseInt($(this).val(), 10));
                    $(this).val().indexOf("k") != -1 && (a *= 1e3), isNaN(a) ? a = 0 : $(this).val(a), e += a, Market.Memory.res[t] = Market.Data.Res[t] - a
                });
                var t = Market.Data.Trader.capacity(),
                    a = t - e;
                Market.Set.freeCapacitiy(a), Market.Modes.send.Alter.freeCapacity()
            },
            Alter: {
                freeCapacity: function() {
                    $("a.insert").each(function() {
                        var e = $(this).attr("class").replace("insert ", ""),
                            t = Market.Memory.res[e],
                            a = 0;
                        a = t < Market.Memory.freeCapacity ? t : Market.Memory.freeCapacity;
                        var r = $('input.resources_max[name="' + e + '"]');
                        a < 0 ? ($(r).css("color", "red"), a = 0) : $(r).css("color", ""), $(this).text("(" + a + ")")
                    })
                }
            }
        },
        mass_create_offers: {
            group_id: 0,
            villages: {},
            lock_create: !1,
            lock_fill: !1,
            default_offer: {
                sell_value: "",
                sell_type: "wood",
                buy_value: "",
                buy_type: "wood",
                count: 0,
                max_time: 5
            },
            init: function() {
                var e = this;
                $("#template_save_button").click(function(t) {
                    t.preventDefault(), e.saveTemplate(e.readTemplate())
                }), $("#offer_fill_button").click(function(t) {
                    t.preventDefault(), e.fillFromTemplate(e.readTemplate())
                }), $("#market_offers").submit(function(t) {
                    t.preventDefault(), e.createOffers()
                }), $("#offer_sell_type, #offer_buy_type").width(Math.max($("#offer_sell_type").width(), $("#offer_buy_type").width()))
            },
            initForReal: function() {
                Object.keys(this.villages).length > 0 && this.initVillageForm()
            },
            displayCreationErrors: function(e) {
                var t = '<div class="error_box">NěkterA� z nabA�dek nemohly bA1t vytvoA�eny:<ul>';
                $.each(e, function(e, a) {
                    t += "<li>" + escapeHtml(a) + "</li>"
                }), t += "</ul></div>", $("#offer_creation_errors").html(t)
            },
            hideCreationErrors: function() {
                $("#offer_creation_errors").html("")
            },
            updateVillageInfo: function(e) {
                $("#village_info_res_" + e.id).html(e.res_string), $("#village_info_storage_" + e.id).html(Format.number(e.storage_max)), $("#village_info_traders_" + e.id).html(e.trader_free + "/" + e.trader_max), this.villages[e.id] = e
            },
            resetVillageOffer: function(e) {
                this.setVillageOffer(e, this.default_offer)
            },
            setVillageOffer: function(e, t) {
                Object.getOwnPropertyNames(t).forEach(function(a) {
                    $("#offer_" + a + "_" + e).val(t[a])
                })
            },
            readTemplate: function() {
                return {
                    sell_value: parseInt($("#offer_sell_value").val()) || 0,
                    sell_type: $("#offer_sell_type").val(),
                    buy_value: parseInt($("#offer_buy_value").val()) || 0,
                    buy_type: $("#offer_buy_type").val(),
                    count: parseInt($("#offer_count").val()) || 0,
                    max_time: parseInt($("#offer_max_time").val()) || 0,
                    buffer_wood: parseInt($("#offer_buffer_wood").val()) || 0,
                    buffer_stone: parseInt($("#offer_buffer_stone").val()) || 0,
                    buffer_iron: parseInt($("#offer_buffer_iron").val()) || 0,
                    buffer_trader: parseInt($("#offer_buffer_trader").val()) || 0
                }
            },
            saveTemplate: function(e) {
                var t = $.extend({
                    group_id: this.group_id
                }, e);
                TribalWars.post("market", {
                    ajaxaction: "save_offer_creation_template"
                }, t, function(e) {
                    UI.SuccessMessage("A ablona s nabA�dkou a rezervy pro tuto skupinu byla uloA3ena.")
                })
            },
            fillFromTemplate: function(e) {
                if (!this.lock_fill) {
                    this.lockFill();
                    var t = this,
                        a = function() {
                            t.unlockFill()
                        };
                    if (e.sell_type === e.buy_type) return UI.ErrorMessage("Pro obchodovA!nA� musA�A! vybrat odliA!nA1 typ surovin."), void a();
                    if (e.max_time < 1 || e.max_time > 96) return UI.ErrorMessage("Doba cesty musA� trvat mezi jednou a 96 hodinami."), void a();
                    var r = function() {
                        $.each(t.villages, function(a, r) {
                            var o = e.sell_type;
                            if ("greatest" === o) {
                                var i = -1;
                                Resources.types.forEach(function(e) {
                                    r[e] > i && (o = e, i = r[e])
                                })
                            }
                            var n = e.buy_type;
                            if ("least" === n) {
                                var f = 99999999;
                                Resources.types.forEach(function(e) {
                                    r[e] < f && (n = e, f = r[e])
                                })
                            }
                            if (o == n) return void t.resetVillageOffer(a);
                            var s = r[o],
                                l = e["buffer_" + o],
                                c = Math.max(0, s - l),
                                u = Math.floor(c / e.sell_value),
                                _ = Math.max(0, r.trader_free - e.buffer_trader),
                                d = Math.ceil(e.sell_value / r.trader_carry),
                                m = Math.floor(_ / d),
                                p = Math.min(e.count, u, m);
                            return p < 1 ? void t.resetVillageOffer(a) : void t.setVillageOffer(a, {
                                count: p,
                                sell_value: e.sell_value,
                                sell_type: o,
                                buy_value: e.buy_value,
                                buy_type: n,
                                max_time: e.max_time
                            })
                        }), a()
                    };
                    setTimeout(r, 1)
                }
            },
            createOffers: function() {
                if (!this.lock_create) {
                    this.hideCreationErrors(), this.lockCreate();
                    var e = 0;
                    if ($.each(this.villages, function(t, a) {
                            $("#offer_count_" + t).val() > 0 && e++
                        }), 0 === e) return this.unlockCreate(), void UI.ErrorMessage("Nejsou specifikovA!ny A3A!dnA� nabA�dky");
                    var t = this,
                        a = $("#mass_offer_creation"),
                        r = $("#offer_creation_creating"),
                        o = a.find(".blocker");
                    r.show(), o.show(), a.css("opacity", .4);
                    var i = function() {
                        t.unlockCreate(), o.hide(), a.css("opacity", 1), r.hide()
                    };
                    TribalWars.post("market", {
                        ajaxaction: "mass_create_offers"
                    }, $("#market_offers").serializeArray(), function(e) {
                        var a = function() {
                                e.success_message ? UI.SuccessMessage(e.success_message) : $.isEmptyObject(e.village_errors) && UI.ErrorMessage("Nebyly specifikovA!ny A3A!dnA� nabA�dky.")
                            },
                            r = Object.keys(e.villages),
                            o = 50,
                            n = 0,
                            f = function() {
                                for (; n < r.length;) {
                                    var s = r[n];
                                    if (t.updateVillageInfo(e.villages[s]), "undefined" != typeof e.successful_offers[s] && t.resetVillageOffer(s), n++, n % o === 0) break
                                }
                                n === r.length ? ($.isEmptyObject(e.village_errors) || t.displayCreationErrors(e.village_errors), i(), a()) : setTimeout(function() {
                                    f()
                                }, 1)
                            };
                        f()
                    }, function() {
                        i()
                    })
                }
            },
            lockCreate: function() {
                this.lock_create = !0, $("#market_offers").find(".btn_offer_create").prop("disabled", !0)
            },
            unlockCreate: function() {
                this.lock_create = !1, $("#market_offers").find(".btn_offer_create").prop("disabled", !1)
            },
            lockFill: function() {
                this.lock_fill = !0, $("#offer_fill_button").addClass("btn-disabled")
            },
            unlockFill: function() {
                this.lock_fill = !1, $("#offer_fill_button").removeClass("btn-disabled")
            },
            initVillageForm: function() {
                var e = this,
                    t = $("#offer_creation_loading"),
                    a = t.find(".mass-progress div"),
                    r = $("#mass_offer_creation"),
                    o = $("#offer_creation_villages").find("tbody");
                this.lockFill(), this.lockCreate();
                var i = Object.keys(e.villages),
                    n = 30,
                    f = 0,
                    s = function() {
                        for (; f < i.length;) {
                            var l = i[f];
                            if (o.append(e.genVillageRow(e.villages[l])), f++, a.width(f / i.length * 100 + "%"), f % n === 0) break
                        }
                        f === i.length ? (e.unlockFill(), e.unlockCreate(), t.hide(), r.find(".blocker").hide(), r.css("opacity", 1)) : setTimeout(function() {
                            s()
                        }, 1)
                    };
                s()
            },
            genVillageRow: function(e) {
                var t = e;
                return "<tr><td>" + t.village + '</td><td id="village_info_res_' + t.id + '">' + t.res_string + '</td><td id="village_info_storage_' + t.id + '">' + Format.number(t.storage_max) + '</td><td id="village_info_traders_' + t.id + '">' + t.trader_free + "/" + t.trader_max + '</td><td><table class="vis">' + this.genResSelect("NabA�zA�m:", "sell", t.id) + this.genResSelect("Chci:", "buy", t.id) + '</table></td><td><input id="offer_count_' + t.id + '" name="offers[' + t.id + '][count]" type="text" value="0" style="width:50px"> krA!t</td><td><input id="offer_max_time_' + t.id + '" name="offers[' + t.id + '][max_time]" type="text" value="' + this.default_offer.max_time + '" style="width:50px"> hodiny</td></tr>'
            },
            genResSelect: function(e, t, a) {
                return '<tr><td style="white-space:nowrap">' + e + '</td><td><input id="offer_' + t + "_value_" + a + '" name="offers[' + a + "][" + t + '_value]" type="text" style="width:50px"></td><td><select id="offer_' + t + "_type_" + a + '" name="offers[' + a + "][" + t + '_type]">' + $.map(Resources.names, function(e, t) {
                    return '<option value="' + t + '">' + e + "</option>"
                }).join("") + "</select></td></tr>"
            }
        }
    },
    AjaxRequest: {
        changeMaxTime: function(e, t, a, r) {
            $.ajax({
                type: "POST",
                url: e,
                data: {
                    text: parseInt(t)
                },
                dataType: "json",
                success: function(e) {
                    e.error ? UI.ErrorMessage(e.error, 3e3) : e.success && $(a).html(e.max_time_string), $(r).val(e.max_time_value)
                }
            })
        }
    }
};

; /**** game/MapHighlighter.js_ ****/
var MapHighlighter;
! function() {
    "use strict";
    MapHighlighter = {
        colorVillage: function(l) {
            var a = l.owner > 0 && TWMap.players[l.owner] ? TWMap.players[l.owner].ally : 0,
                e = TWMap.getColorByPlayer(l.owner, a, l.id);
            $("#map_village_" + l.id).css("background-color", "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")")
        },
        colorPlayer: function(l) {
            $.each(TWMap.villages, function(a, e) {
                parseInt(e.owner) === parseInt(l) && MapHighlighter.colorVillage(e)
            })
        },
        colorAlly: function(l) {
            $.each(TWMap.players, function(a, e) {
                parseInt(e.ally) === parseInt(l) && MapHighlighter.colorPlayer(a)
            })
        },
        colorAll: function(l, a, e) {
            $.each(l, function(l, a) {
                "undefined" != typeof TWMap.villageKey[a] && MapHighlighter.colorVillage(TWMap.villages[TWMap.villageKey[a]])
            }), $.each(a, function(l, a) {
                MapHighlighter.colorPlayer(a)
            }), $.each(e, function(l, a) {
                MapHighlighter.colorAlly(a)
            })
        },
        alterVillage: function(l, a) {
            return null === a ? void delete TWMap.villageColors[l] : void(TWMap.villageColors[l] = a)
        },
        alterPlayer: function(l, a) {
            return null === a ? void delete TWMap.playerColors[l] : void(TWMap.playerColors[l] = a)
        },
        alterAlly: function(l, a) {
            return null === a ? void delete TWMap.allyColors[l] : void(TWMap.allyColors[l] = a)
        },
        alterAll: function(l, a, e) {
            TWMap.allyColors = e, TWMap.playerColors = a, TWMap.villageColors = l
        }
    }
}();

; /**** game/MapLegend.js ****/
var MapLegend;
! function() {
    "use strict";
    MapLegend = function(t) {
        this.$container = t
    }, MapLegend.prototype = {
        CATEGORY_STANDARD: "standard",
        CATEGORY_TRIBAL: "tribal",
        CATEGORY_OWN: "own",
        CATEGORY_OTHER: "other",
        addHighlight: function(t, i, a, n, e) {
            var d = $("<div>").addClass("map_legend").attr("data-active", 1).attr("data-id", i),
                o = $("<div>");
            n && o.css("background-color", "rgb(" + n.r + "," + n.g + "," + n.b + ")"), e && o.css({
                "background-image": 'url("' + e + '")',
                "background-size": "15px 15px"
            }), d.append(o), d.append(" <span>" + escapeHtml(a) + "</span>"), this.$container.find('[data-category="' + t + '"]').find("td:nth-child(2)").append(d)
        },
        removeHighlight: function(t, i) {
            this.$container.find('[data-category="' + t + '"]').find('[data-id="' + i + '"]').remove(), this.updateVisibility()
        },
        updateHighlight: function(t, i, a, n, e) {
            var d = this.$container.find('[data-category="' + t + '"]').find('[data-id="' + i + '"]'),
                o = d.find("div"),
                r = n ? "rgb(" + n.r + "," + n.g + "," + n.b + ")" : "none";
            o.css("background-color", r), e && o.css({
                "background-image": 'url("' + escapeHtml(e) + '")',
                "background-size": "15px 15px"
            }), d.find("span").text(a)
        },
        showHighlight: function(t, i) {
            this.$container.find('[data-category="' + t + '"]').find('[data-id="' + i + '"]').attr("data-active", 1), this.updateVisibility()
        },
        hideHighlight: function(t, i) {
            this.$container.find('[data-category="' + t + '"]').find('[data-id="' + i + '"]').attr("data-active", 0), this.updateVisibility()
        },
        updateVisibility: function() {
            this.$container.find('.map_legend[data-active="1"]').show(), this.$container.find('.map_legend[data-active="0"]').hide();
            var t = this,
                i = 0;
            $.each([this.CATEGORY_STANDARD, this.CATEGORY_TRIBAL, this.CATEGORY_OWN, this.CATEGORY_OTHER], function(a, n) {
                t.countActiveHighlights(n) < 1 ? t.hideCategory(n) : (t.showCategory(n), i++)
            }), i < 2 ? this.hideCategoryLabels() : this.showCategoryLabels()
        },
        showCategory: function(t) {
            this.$container.find('[data-category="' + t + '"]').show()
        },
        hideCategory: function(t) {
            this.$container.find('[data-category="' + t + '"]').hide()
        },
        showCategoryLabels: function() {
            this.$container.find("tr td:first-child").show()
        },
        hideCategoryLabels: function() {
            this.$container.find("tr td:first-child").hide()
        },
        countActiveHighlights: function(t) {
            var i = this.$container.find('[data-category="' + t + '"]');
            return i.find('.map_legend[data-active="1"]').length
        }
    }
}();

;