/**** jquery/jquery-1.9.1.min.js ****/
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
 */
(function(e, t) {
    var n, r, i = typeof t,
        o = e.document,
        a = e.location,
        s = e.jQuery,
        u = e.$,
        l = {},
        c = [],
        p = "1.9.1",
        f = c.concat,
        d = c.push,
        h = c.slice,
        g = c.indexOf,
        m = l.toString,
        y = l.hasOwnProperty,
        v = p.trim,
        b = function(e, t) {
            return new b.fn.init(e, t, r)
        },
        x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = /\S+/g,
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        k = /^[\],:{}\s]*$/,
        E = /(?:^|:|,)(?:\s*\[)+/g,
        S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        j = /^-ms-/,
        D = /-([\da-z])/gi,
        L = function(e, t) {
            return t.toUpperCase()
        },
        H = function(e) {
            (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
        },
        q = function() {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
        };
    b.fn = b.prototype = {
        jquery: p,
        constructor: b,
        init: function(e, n, r) {
            var i, a;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n))
                        for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (a = o.getElementById(i[2]), a && a.parentNode) {
                    if (a.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = a
                }
                return this.context = o, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return h.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return b.each(this, e, t)
        },
        ready: function(e) {
            return b.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(h.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
            if (null != (o = arguments[u]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, b.extend({
        noConflict: function(t) {
            return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? b.readyWait++ : b.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!o.body) return setTimeout(b.ready);
                b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === b.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === b.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || y.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || o;
            var r = C.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && b.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(j, "ms-").replace(D, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        },
        trim: v && !v.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : v.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (g) return g.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return f.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(h.call(arguments)))
            }, i.guid = e.guid = e.guid || b.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === b.type(r)) {
                o = !0;
                for (u in r) b.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(b(e), n)
                })), n))
                for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }), b.ready.promise = function(t) {
        if (!n)
            if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready);
            else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
        else {
            o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
            var r = !1;
            try {
                r = null == e.frameElement && o.documentElement
            } catch (i) {}
            r && r.doScroll && function a() {
                if (!b.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(a, 50)
                    }
                    q(), b.ready()
                }
            }()
        }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = b(o);
    var _ = {};

    function F(e) {
        var t = _[e] = {};
        return b.each(e.match(w) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
        var n, r, i, o, a, s, u = [],
            l = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++)
                    if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
            },
            p = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        (function i(t) {
                            b.each(t, function(t, n) {
                                var r = b.type(n);
                                "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = u.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return u && b.each(arguments, function(e, t) {
                        var r;
                        while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], this
                },
                disable: function() {
                    return u = l = r = t, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = t, r || p.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, b.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", b.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return b.Deferred(function(n) {
                            b.each(t, function(t, o) {
                                var a = o[0],
                                    s = b.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? b.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, b.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = h.call(arguments),
                r = n.length,
                i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : b.Deferred(),
                a = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                },
                s, u, l;
            if (r > 1)
                for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
            return i || o.resolveWith(l, n), o.promise()
        }
    }), b.support = function() {
        var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!a.value,
            optSelected: l.selected,
            enctype: !!o.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === o.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function() {
            var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                u = o.getElementsByTagName("body")[0];
            u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
        }), n = s = u = l = r = a = null, t
    }();
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        B = /([A-Z])/g;

    function P(e, n, r, i) {
        if (b.acceptData(e)) {
            var o, a, s = b.expando,
                u = "string" == typeof n,
                l = e.nodeType,
                p = l ? b.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
        }
    }

    function R(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                s = a ? b.cache : e,
                u = a ? e[b.expando] : b.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                    if (!(n ? $ : b.isEmptyObject)(o)) return
                }(n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
            }
        }
    }
    b.extend({
        cache: {},
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e)
        },
        data: function(e, t, n) {
            return P(e, t, n)
        },
        removeData: function(e, t) {
            return R(e, t)
        },
        _data: function(e, t, n) {
            return P(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return R(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), b.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
                a = 0,
                s = null;
            if (e === t) {
                if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
                    b._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                b.data(this, e)
            }) : b.access(this, function(n) {
                return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function() {
                    b.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e)
            })
        }
    });

    function W(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
                } catch (o) {}
                b.data(e, n, r)
            } else r = t
        }
        return r
    }

    function $(e) {
        var t;
        for (t in e)
            if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    b.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = b._queueHooks(e, t),
                a = function() {
                    b.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    b._removeData(e, t + "queue"), b._removeData(e, n)
                })
            })
        }
    }), b.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = b.Deferred(),
                a = this,
                s = this.length,
                u = function() {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var I, z, X = /[\t\r\n]/g,
        U = /\r/g,
        V = /^(?:input|select|textarea|button|object)$/i,
        Y = /^(?:a|area)$/i,
        J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        G = /^(?:checked|selected)$/i,
        Q = b.support.getSetAttribute,
        K = b.support.input;
    b.fn.extend({
        attr: function(e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = b.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(w) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = b.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(w) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? b.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var o, a = 0,
                        s = b(this),
                        u = t,
                        l = e.match(w) || [];
                    while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
                } else(n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = b.isFunction(e), this.each(function(n) {
                    var o, a = b(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
            }
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        u = 0 > i ? s : o ? i : 0;
                    for (; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(w);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), z = {
        get: function(e, n) {
            var r = b.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, K && Q || (b.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function(e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
        }
    }), Q || (I = b.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, b.attrHooks.contenteditable = {
        get: I.get,
        set: function(e, t, n) {
            I.set(e, "" === t ? !1 : t, n)
        }
    }, b.each(["width", "height"], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), b.each(["href", "src"], function(e, t) {
        b.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })), b.support.style || (b.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function(e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
            }
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }
    b.event = {
            global: {},
            add: function(e, n, r, o, a) {
                var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
                if (v) {
                    r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                        return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                    }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
                    while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && b.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
                if (m && (c = m.events)) {
                    t = (t || "").match(w) || [""], l = t.length;
                    while (l--)
                        if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                            p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
                            while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                            u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
                        } else
                            for (d in c) b.event.remove(e, d + t[l], n, r, !0);
                    b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, a) {
                var s, u, l, c, p, f, d, h = [i || o],
                    g = y.call(n, "type") ? n.type : n,
                    m = y.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                    if (!a && !p.noBubble && !b.isWindow(i)) {
                        for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
                        f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                    }
                    d = 0;
                    while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                    if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                        f = i[u], f && (i[u] = null), b.event.triggered = g;
                        try {
                            i[g]()
                        } catch (v) {}
                        b.event.triggered = t, f && (i[u] = f)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = b.event.fix(e);
                var n, r, i, o, a, s = [],
                    u = h.call(arguments),
                    l = (b._data(this, "events") || {})[e.type] || [],
                    c = b.event.special[e.type] || {};
                if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    s = b.event.handlers.call(this, e, l), n = 0;
                    while ((o = s[n++]) && !e.isPropagationStopped()) {
                        e.currentTarget = o.elem, a = 0;
                        while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                    }
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [],
                    u = n.delegateCount,
                    l = e.target;
                if (u && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return n.length > u && s.push({
                    elem: this,
                    handlers: n.slice(u)
                }), s
            },
            fix: function(e) {
                if (e[b.expando]) return e;
                var t, n, r, i = e.type,
                    a = e,
                    s = this.fixHooks[i];
                s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
                while (t--) n = r[t], e[n] = a[n];
                return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, a, s = n.button,
                        u = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== o.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === o.activeElement && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = b.extend(new b.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, b.removeEvent = o.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
        }, b.Event = function(e, n) {
            return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
        }, b.Event.prototype = {
            isDefaultPrevented: ot,
            isPropagationStopped: ot,
            isImmediatePropagationStopped: ot,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = it, this.stopPropagation()
            }
        }, b.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            b.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), b.support.submitBubbles || (b.event.special.submit = {
            setup: function() {
                return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                    r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), b._data(r, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
            }
        }), b.support.changeBubbles || (b.event.special.change = {
            setup: function() {
                return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), b.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
                })), !1) : (b.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                    }), b._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(e) {
                var n = e.target;
                return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return b.event.remove(this, "._change"), !Z.test(this.nodeName)
            }
        }), b.support.focusinBubbles || b.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    b.event.simulate(t, e.target, b.event.fix(e), !0)
                };
            b.event.special[t] = {
                setup: function() {
                    0 === n++ && o.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && o.removeEventListener(e, r, !0)
                }
            }
        }), b.fn.extend({
            on: function(e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n, n = t);
                    for (a in e) this.on(a, n, r, e[a], o);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
                else if (!i) return this;
                return 1 === o && (s = i, i = function(e) {
                    return b().off(e), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function() {
                    b.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                    b.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    b.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, n) {
                var r = this[0];
                return r ? b.event.trigger(e, n, r, !0) : t
            }
        }),
        function(e, t) {
            var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
                w = e.document,
                T = {},
                N = 0,
                C = 0,
                k = it(),
                E = it(),
                S = it(),
                A = typeof t,
                j = 1 << 31,
                D = [],
                L = D.pop,
                H = D.push,
                q = D.slice,
                M = D.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                _ = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                O = F.replace("w", "w#"),
                B = "([*^$|!~]?=)",
                P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
                R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
                W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
                $ = RegExp("^" + _ + "*," + _ + "*"),
                I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
                z = RegExp(R),
                X = RegExp("^" + O + "$"),
                U = {
                    ID: RegExp("^#(" + F + ")"),
                    CLASS: RegExp("^\\.(" + F + ")"),
                    NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                    TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + P),
                    PSEUDO: RegExp("^" + R),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                    needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
                },
                V = /[\x20\t\r\n\f]*[+~]/,
                Y = /^[^{]+\{\s*\[native code/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                G = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                K = /'|\\/g,
                Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                tt = function(e, t) {
                    var n = "0x" + t - 65536;
                    return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
            try {
                q.call(w.documentElement.childNodes, 0)[0].nodeType
            } catch (nt) {
                q = function(e) {
                    var t, n = [];
                    while (t = this[e++]) n.push(t);
                    return n
                }
            }

            function rt(e) {
                return Y.test(e + "")
            }

            function it() {
                var e, t = [];
                return e = function(n, r) {
                    return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
                }
            }

            function ot(e) {
                return e[x] = !0, e
            }

            function at(e) {
                var t = p.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }

            function st(e, t, n, r) {
                var i, o, a, s, u, l, f, g, m, v;
                if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (!d && !r) {
                    if (i = J.exec(e))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
                            if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
                        }
                    if (T.qsa && !h.test(e)) {
                        if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
                            while (u--) l[u] = g + dt(l[u]);
                            m = V.test(e) && t.parentNode || t, v = l.join(",")
                        }
                        if (v) try {
                            return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
                        } catch (b) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return wt(e.replace(W, "$1"), t, n, r)
            }
            a = st.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, c = st.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : w;
                return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), T.attributes = at(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), T.getByClassName = at(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }), T.getByName = at(function(e) {
                    e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
                    var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                    return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
                }), i.attrHandle = at(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                }, T.getIdNotName ? (i.find.ID = function(e, t) {
                    if (typeof t.getElementById !== A && !d) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(et, tt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (i.find.ID = function(e, n) {
                    if (typeof n.getElementById !== A && !d) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(et, tt);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = T.tagNameNoComments ? function(e, n) {
                    return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, i.find.NAME = T.getByName && function(e, n) {
                    return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
                }, i.find.CLASS = T.getByClassName && function(e, n) {
                    return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
                }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
                }), at(function(e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
                })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
                    T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
                }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, v = f.compareDocumentPosition ? function(e, t) {
                    var r;
                    return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) return u = !0, 0;
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
                    if (o === a) return ut(e, t);
                    r = e;
                    while (r = r.parentNode) s.unshift(r);
                    r = t;
                    while (r = r.parentNode) l.unshift(r);
                    while (s[i] === l[i]) i++;
                    return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
            }, st.matches = function(e, t) {
                return st(e, null, null, t)
            }, st.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
                    var n = m.call(e, t);
                    if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (r) {}
                return st(t, p, null, [e]).length > 0
            }, st.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && c(e), y(e, t)
            }, st.attr = function(e, t) {
                var n;
                return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, st.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, st.uniqueSort = function(e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                if (u = !T.detectDuplicates, e.sort(v), u) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            };

            function ut(e, t) {
                var n = t && e,
                    r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function lt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function ct(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function pt(e) {
                return ot(function(t) {
                    return t = +t, ot(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            o = st.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += o(t);
                return n
            }, i = st.selectors = {
                cacheLength: 50,
                createPseudo: ot,
                match: U,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        return "*" === e ? function() {
                            return !0
                        } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = k[e + " "];
                        return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = st.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !u && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g])
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [N, d, f];
                                            break
                                        }
                                } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1];
                                else
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break;
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                        return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ot(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(W, "$1"));
                        return r[x] ? ot(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: ot(function(e) {
                        return function(t) {
                            return st(e, t).length > 0
                        }
                    }),
                    contains: ot(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                        }
                    }),
                    lang: ot(function(e) {
                        return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === f
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: pt(function() {
                        return [0]
                    }),
                    last: pt(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pt(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: pt(function(e, t) {
                        var n = 0;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: pt(function(e, t) {
                        var n = 1;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: pt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: pt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; t > ++r;) e.push(r);
                        return e
                    })
                }
            };
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[n] = lt(n);
            for (n in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[n] = ct(n);

            function ft(e, t) {
                var n, r, o, a, s, u, l, c = E[e + " "];
                if (c) return t ? 0 : c.slice(0);
                s = e, u = [], l = i.preFilter;
                while (s) {
                    (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    }), s = s.slice(n.length));
                    for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
            }

            function dt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r
            }

            function ht(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    a = C++;
                return t.first ? function(t, n, r) {
                    while (t = t[i])
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, n, s) {
                    var u, l, c, p = N + " " + a;
                    if (s) {
                        while (t = t[i])
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        while (t = t[i])
                            if (1 === t.nodeType || o)
                                if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
                                    if ((u = l[1]) === !0 || u === r) return u === !0
                                } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
                }
            }

            function gt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function mt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    u = e.length,
                    l = null != t;
                for (; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                return a
            }

            function yt(e, t, n, r, i, o) {
                return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function(o, a, s, u) {
                    var l, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || xt(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : mt(g, f, e, s, u),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, u), r) {
                        l = mt(y, d), r(l, [], s, u), c = l.length;
                        while (c--)(p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                l = [], c = y.length;
                                while (c--)(p = y[c]) && l.push(m[c] = p);
                                i(null, y = [], l, u)
                            }
                            c = y.length;
                            while (c--)(p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                        }
                    } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
                })
            }

            function vt(e) {
                var t, n, r, o = e.length,
                    a = i.relative[e[0].type],
                    s = a || i.relative[" "],
                    u = a ? 1 : 0,
                    c = ht(function(e) {
                        return e === t
                    }, s, !0),
                    p = ht(function(e) {
                        return M.call(t, e) > -1
                    }, s, !0),
                    f = [function(e, n, r) {
                        return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }];
                for (; o > u; u++)
                    if (n = i.relative[e[u].type]) f = [ht(gt(f), n)];
                    else {
                        if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                            for (r = ++u; o > r; r++)
                                if (i.relative[e[r].type]) break;
                            return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                        }
                        f.push(n)
                    }
                return gt(f)
            }

            function bt(e, t) {
                var n = 0,
                    o = t.length > 0,
                    a = e.length > 0,
                    s = function(s, u, c, f, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            T = l,
                            C = s || a && i.find.TAG("*", d && u.parentNode || u),
                            k = N += null == T ? 1 : Math.random() || .1;
                        for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, u, c)) {
                                        f.push(h);
                                        break
                                    }
                                w && (N = k, r = ++n)
                            }
                            o && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if (v += b, o && b !== v) {
                            g = 0;
                            while (m = t[g++]) m(x, y, u, c);
                            if (s) {
                                if (v > 0)
                                    while (b--) x[b] || y[b] || (y[b] = L.call(f));
                                y = mt(y)
                            }
                            H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                        }
                        return w && (N = k, l = T), x
                    };
                return o ? ot(s) : s
            }
            s = st.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = S[e + " "];
                if (!o) {
                    t || (t = ft(e)), n = t.length;
                    while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
                    o = S(e, bt(i, r))
                }
                return o
            };

            function xt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) st(e, t[r], n);
                return n
            }

            function wt(e, t, n, r) {
                var o, a, u, l, c, p = ft(e);
                if (!r && 1 === p.length) {
                    if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                        if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
                        e = e.slice(a.shift().value.length)
                    }
                    o = U.needsContext.test(e) ? 0 : a.length;
                    while (o--) {
                        if (u = a[o], i.relative[l = u.type]) break;
                        if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                            if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
                            break
                        }
                    }
                }
                return s(e, p)(r, t, d, n, V.test(e)), n
            }
            i.pseudos.nth = i.pseudos.eq;

            function Tt() {}
            i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
        }(e);
    var at = /Until$/,
        st = /^(?:parents|prev(?:Until|All))/,
        ut = /^.[^:#\[\.,]*$/,
        lt = b.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    b.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (b.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function(e) {
            var t, n = b(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (b.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0))
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(o.length > 1 ? b.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.fn.andSelf = b.fn.addBack;

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return b.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return b.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return b.sibling(e.firstChild)
        },
        contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }
    }, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), b.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (t = t || 0, b.isFunction(t)) return b.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return b.grep(e, function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = b.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (ut.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r)
        }
        return b.grep(e, function(e) {
            return b.inArray(e, t) >= 0 === n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Nt = /^(?:checkbox|radio)$/i,
        Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        jt = dt(o),
        Dt = jt.appendChild(o.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
        text: function(e) {
            return b.access(this, function(e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return b.isFunction(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = b.isFunction(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = 0;
            for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(Ot(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return b.clone(this, e, t)
            })
        },
        html: function(e) {
            return b.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = f.apply([], e);
            var i, o, a, s, u, l, c = 0,
                p = this.length,
                d = this,
                h = p - 1,
                g = e[0],
                m = b.isFunction(g);
            if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function(i) {
                var o = d.eq(i);
                m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
                l = i = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function Ht(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Mt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }

    function _t(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, o = b._data(e),
                a = b._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
            }
            a.data && (a.data = b.extend({}, a.data))
        }
    }

    function Ft(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) b.removeEvent(t, r, i.handle);
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = b(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ot(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
    }

    function Bt(e) {
        Nt.test(e.type) && (e.defaultChecked = e.checked)
    }
    b.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]);
                else _t(e, o);
            return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, u, l, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                    o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                }
                b.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
                    i = 0;
                    while (o = s[i++]) kt.test(o.type || "") && n.push(o)
                }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                u = b.expando,
                l = b.cache,
                p = b.support.deleteExpando,
                f = b.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
                    l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
                }
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + x + ")(.*)$", "i"),
        Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + x + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    b.fn.extend({
        css: function(e, n) {
            return b.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (b.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : nn(this)) ? b(this).show(): b(this).hide()
            })
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = b.camelCase(n),
                    l = e.style;
                if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = b.camelCase(n);
            return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : o.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function un(e) {
        var t = o,
            n = Gt[e];
        return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
    }

    function ln(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
            r = b.css(n[0], "display");
        return n.remove(), r
    }
    b.each(["height", "width"], function(e, n) {
        b.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), b(function() {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? b.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
            b.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
    }, b.expr.filters.visible = function(e) {
        return !b.expr.filters.hidden(e)
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (b.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
            }).map(function(e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), b.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function(t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var mn, yn, vn = b.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Cn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = b.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = a.href
    } catch (Ln) {
        yn = o.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(u) {
            var l;
            return o[u] = !0, b.each(e[u] || [], function(e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function Mn(e, n) {
        var r, i, o = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e
    }
    b.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), b.each(["get", "post"], function(e, n) {
        b[n] = function(e, r, i, o) {
            return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Nn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
                h = b.Deferred(),
                g = b.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                x = 0,
                T = "canceled",
                N = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else N.always(e[N.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return l && l.abort(t), k(0, t), this
                    }
                };
            if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
            u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
            T = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) N[i](p[i]);
            if (l = qn(jn, p, n, N)) {
                N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    N.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, l.send(y, k)
                } catch (C) {
                    if (!(2 > x)) throw C;
                    k(-1, C)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, C = n;
                2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
            }
            return N
        },
        getScript: function(e, n) {
            return b.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        }
    });

    function _n(e, n, r) {
        var i, o, a, s, u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in u)
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in r) a = l[0];
        else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }

    function Fn(e, t) {
        var n, r, i, o, a = {},
            s = 0,
            u = e.dataTypes.slice(),
            l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
            for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];)
            if ("*" !== r) {
                if ("*" !== l && l !== r) {
                    if (i = a[l + " " + r] || a["* " + r], !i)
                        for (n in a)
                            if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                                break
                            }
                    if (i !== !0)
                        if (i && e["throws"]) t = i(t);
                        else try {
                            t = i(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: i ? c : "No conversion from " + l + " to " + r
                            }
                        }
                }
                l = r
            }
        return {
            state: "success",
            data: t
        }
    }
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), b.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = o.head || b("head")[0] || o.documentElement;
            return {
                send: function(t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var On = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = On.pop() || b.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || b.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() {
            var e;
            for (e in Pn) Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    b.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function(n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, l, c, p;
                        try {
                            if (r && (i || 4 === u.readyState))
                                if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();
                                else {
                                    p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    o = Yn.exec(t),
                    a = i.cur(),
                    s = +a || 0,
                    u = 1,
                    l = 20;
                if (o) {
                    if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                        s = b.css(i.elem, e, !0) || n || 1;
                        do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };

    function Kn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = b.now()
    }

    function Zn(e, t) {
        b.each(t, function(t, n) {
            var r = (Qn[t] || []).concat(Qn["*"]),
                i = 0,
                o = r.length;
            for (; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = b.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = n / l.duration || 0,
                    o = 1 - r,
                    a = 0,
                    u = l.tweens.length;
                for (; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (tr(c, l.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(l, e, c, l.opts)) return r;
        return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (i in e)
            if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
                n = a.expand(n), delete e[r];
                for (i in n) i in e || (e[i] = n[i], t[i] = o)
            } else t[r] = o
    }
    b.Animation = b.extend(er, {
        tweener: function(e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, u, l, c, p, f = this,
            d = e.style,
            h = {},
            g = [],
            m = e.nodeType && nn(e);
        n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() {
            c.unqueued || p()
        }), c.unqueued++, f.always(function() {
            f.always(function() {
                c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (a = t[i], Vn.exec(a)) {
                if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
                g.push(i)
            }
        if (o = g.length) {
            s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function() {
                b(e).hide()
            }), f.done(function() {
                var t;
                b._removeData(e, "fxshow");
                for (t in h) b.style(e, t, h[t])
            });
            for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    b.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.each(["toggle", "show", "hide"], function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), b.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e),
                o = b.speed(t, n, r),
                a = function() {
                    var t = er(this, b.extend({}, e), o);
                    a.finish = function() {
                        t.stop(!0)
                    }, (i || b._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = b.timers,
                    a = b._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && b.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = b._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = b.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), b.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
    }, b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
        var e, n = b.timers,
            r = 0;
        for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t
    }, b.fx.timer = function(e) {
        e() && b.timers.push(e) && b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function() {
        Un || (Un = setInterval(b.fx.tick, b.fx.interval))
    }, b.fx.stop = function() {
        clearInterval(Un), Un = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem
        }).length
    }), b.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            b.offset.setOffset(this, e, t)
        });
        var n, r, o = {
                top: 0,
                left: 0
            },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, b.offset = {
        setOffset: function(e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e),
                o = i.offset(),
                a = b.css(e, "top"),
                s = b.css(e, "left"),
                u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
                l = {},
                c = {},
                p, f;
            u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
        }
    }, b.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || o.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
                return e || o.documentElement
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function(i) {
            return b.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    b.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            b.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return b.access(this, function(n, r, i) {
                    var o;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return b
    })
})(window);; /**** jquery/jquery-ui-1.10.4.custom.min.js ****/
/*! jQuery UI - v1.10.4 - 2014-06-10
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.sortable.js, jquery.ui.autocomplete.js, jquery.ui.menu.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e, t) {
    function i(t, i) {
        var s, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var s = 0,
        a = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function(t) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), n && n.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
                    if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    a = a.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                a.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, n) {
            return !!e.data(t, n[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex"),
                s = isNaN(n);
            return (s || n >= 0) && i(t, !s)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, n) {
        function s(t, i, n, s) {
            return e.each(a, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            o = n.toLowerCase(),
            r = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + n] = function(i) {
            return i === t ? r["inner" + n].call(this) : this.each(function() {
                e(this).css(o, s(this, i) + "px")
            })
        }, e.fn["outer" + n] = function(t, i) {
            return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function() {
                e(this).css(o, s(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, i, n) {
                var s, a = e.ui[t].prototype;
                for (s in n) a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
            },
            call: function(e, t, i) {
                var n, s = e.plugins[t];
                if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (n = 0; s.length > n; n++) e.options[s[n][0]] && s[n][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
        }
    })
})(jQuery);
(function(t, e) {
    var i = 0,
        s = Array.prototype.slice,
        n = t.cleanData;
    t.cleanData = function(e) {
        for (var i, s = 0; null != (i = e[s]); s++) try {
            t(i).triggerHandler("remove")
        } catch (o) {}
        n(e)
    }, t.widget = function(i, s, n) {
        var o, a, r, h, l = {},
            c = i.split(".")[0];
        i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o)
        }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function(t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
        }, t.extend(r, a, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function(i, n) {
            return t.isFunction(n) ? (l[i] = function() {
                var t = function() {
                        return s.prototype[i].apply(this, arguments)
                    },
                    e = function(t) {
                        return s.prototype[i].apply(this, t)
                    };
                return function() {
                    var i, s = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
                }
            }(), e) : (l[i] = n, e)
        }), r.prototype = t.widget.extend(h, {
            widgetEventPrefix: a ? h.widgetEventPrefix || i : i
        }, l, {
            constructor: r,
            namespace: c,
            widgetName: i,
            widgetFullName: o
        }), a ? (t.each(a._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
    }, t.widget.extend = function(i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
            for (n in a[r]) o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function(i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function(a) {
            var r = "string" == typeof a,
                h = s.call(arguments, 1),
                l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function() {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
            }), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, o, a, r = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (r = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++) o[n[a]] = o[n[a]] || {}, o = o[n[a]];
                    if (i = n.pop(), 1 === arguments.length) return o[i] === e ? null : o[i];
                    o[i] = s
                } else {
                    if (1 === arguments.length) return this.options[i] === e ? null : this.options[i];
                    r[i] = s
                }
            return this._setOptions(r), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, n) {
            var o, a = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function(n, r) {
                function h() {
                    return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
                }
                "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                    c = l[1] + a.eventNamespace,
                    u = l[2];
                u ? o.delegate(u, c, h) : s.bind(c, h)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1
    }), t.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this,
                    n = 1 === i.which,
                    a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return s._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return s._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
})(jQuery);
(function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var a, o = Math.max,
        r = Math.abs,
        l = Math.round,
        h = /left|center|right/,
        c = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
    t.position = {
            scrollbarWidth: function() {
                if (a !== e) return a;
                var i, s, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = n.children()[0];
                return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {
                    width: a ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window),
                    s = t.isWindow(i[0]),
                    n = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s ? i.width() : i.outerWidth(),
                    height: s ? i.height() : i.outerHeight()
                }
            }
        }, t.fn.position = function(e) {
            if (!e || !e.of) return f.apply(this, arguments);
            e = t.extend({}, e);
            var a, p, g, m, v, _, b = t(e.of),
                y = t.position.getWithinInfo(e.within),
                k = t.position.getScrollInfo(y),
                w = (e.collision || "flip").split(" "),
                D = {};
            return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
                var t, i, s = (e[this] || "").split(" ");
                1 === s.length && (s = h.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = h.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), D[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
            }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), a = i(D.at, p, g), v.left += a[0], v.top += a[1], this.each(function() {
                var n, h, c = t(this),
                    u = c.outerWidth(),
                    d = c.outerHeight(),
                    f = s(this, "marginLeft"),
                    _ = s(this, "marginTop"),
                    x = u + f + s(this, "marginRight") + k.width,
                    C = d + _ + s(this, "marginBottom") + k.height,
                    M = t.extend({}, v),
                    T = i(D.my, c.outerWidth(), c.outerHeight());
                "right" === e.my[0] ? M.left -= u : "center" === e.my[0] && (M.left -= u / 2), "bottom" === e.my[1] ? M.top -= d : "center" === e.my[1] && (M.top -= d / 2), M.left += T[0], M.top += T[1], t.support.offsetFractions || (M.left = l(M.left), M.top = l(M.top)), n = {
                    marginLeft: f,
                    marginTop: _
                }, t.each(["left", "top"], function(i, s) {
                    t.ui.position[w[i]] && t.ui.position[w[i]][s](M, {
                        targetWidth: p,
                        targetHeight: g,
                        elemWidth: u,
                        elemHeight: d,
                        collisionPosition: n,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [a[0] + T[0], a[1] + T[1]],
                        my: e.my,
                        at: e.at,
                        within: y,
                        elem: c
                    })
                }), e.using && (h = function(t) {
                    var i = m.left - M.left,
                        s = i + p - u,
                        n = m.top - M.top,
                        a = n + g - d,
                        l = {
                            target: {
                                element: b,
                                left: m.left,
                                top: m.top,
                                width: p,
                                height: g
                            },
                            element: {
                                element: c,
                                left: M.left,
                                top: M.top,
                                width: u,
                                height: d
                            },
                            horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                        };
                    u > p && p > r(i + s) && (l.horizontal = "center"), d > g && g > r(n + a) && (l.vertical = "middle"), l.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, l)
                }), c.offset(t.extend(M, {
                    using: h
                }))
            })
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollLeft : s.offset.left,
                        a = s.width,
                        r = t.left - e.collisionPosition.marginLeft,
                        l = n - r,
                        h = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
                },
                top: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollTop : s.offset.top,
                        a = e.within.height,
                        r = t.top - e.collisionPosition.marginTop,
                        l = n - r,
                        h = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within,
                        a = n.offset.left + n.scrollLeft,
                        o = n.width,
                        l = n.isWindow ? n.scrollLeft : n.offset.left,
                        h = t.left - e.collisionPosition.marginLeft,
                        c = h - l,
                        u = h + e.collisionWidth - o - l,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > r(s)) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, s, n = e.within,
                        a = n.offset.top + n.scrollTop,
                        o = n.height,
                        l = n.isWindow ? n.scrollTop : n.offset.top,
                        h = t.top - e.collisionPosition.marginTop,
                        c = h - l,
                        u = h + e.collisionHeight - o - l,
                        d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        g = -2 * e.offset[1];
                    0 > c ? (s = t.top + p + f + g + e.collisionHeight - o - a, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var e, i, s, n, a, o = document.getElementsByTagName("body")[0],
                r = document.createElement("div");
            e = document.createElement(o ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, o && t.extend(s, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (a in s) e.style[a] = s[a];
            e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
        }()
})(jQuery);
(function(t) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function(e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            return n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: n.scrollTop(),
                left: n.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n, a, o = this.options,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = e.pageX,
                h = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: r.scrollTop(),
                left: r.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = s.options,
                a = t.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], t(n.connectToSortable).each(function() {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, a))
            })
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = t.extend({}, i, {
                    item: s.element
                });
            t.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = this;
            t.each(s.sortables, function() {
                var a = !1,
                    o = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, t.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && t.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
                })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var e = t("body"),
                i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        },
        stop: function() {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function(e) {
            var i = t(this).data("ui-draggable"),
                s = i.options,
                n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function() {
            var e = t(this).data("ui-draggable"),
                i = e.options;
            e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = t(this),
                    s = i.offset();
                this !== e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function(e, i) {
            var s, n, a, o, r, l, h, c, u, d, p = t(this).data("ui-draggable"),
                g = p.options,
                f = g.snapTolerance,
                m = i.offset.left,
                _ = m + p.helperProportions.width,
                v = i.offset.top,
                b = v + p.helperProportions.height;
            for (u = p.snapElements.length - 1; u >= 0; u--) r = p.snapElements[u].left, l = r + p.snapElements[u].width, h = p.snapElements[u].top, c = h + p.snapElements[u].height, r - f > _ || m > l + f || h - f > b || v > c + f || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = !1) : ("inner" !== g.snapMode && (s = f >= Math.abs(h - b), n = f >= Math.abs(c - v), a = f >= Math.abs(r - _), o = f >= Math.abs(l - m), s && (i.position.top = p._convertPositionTo("relative", {
                top: h - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r - p.helperProportions.width
            }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - p.margins.left)), d = s || n || a || o, "outer" !== g.snapMode && (s = f >= Math.abs(h - v), n = f >= Math.abs(c - b), a = f >= Math.abs(r - m), o = f >= Math.abs(l - _), s && (i.position.top = p._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: c - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r
            }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = s || n || a || o || d)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function() {
            var e, i = this.data("ui-draggable").options,
                s = t.makeArray(t(i.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function(i) {
                t(this).css("zIndex", e + i)
            }), this.css("zIndex", e + s.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    })
})(jQuery);
(function(t) {
    function e(t) {
        return parseInt(t, 10) || 0
    }

    function i(t) {
        return !isNaN(parseInt(t, 10))
    }
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var e, i, s, n, a, o = this,
                r = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!r.aspectRatio,
                    aspectRatio: r.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++) s = t.trim(e[i]), a = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
                    zIndex: r.zIndex
                }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function(e) {
                var i, s, n, a;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, a), this._proportionallyResize()), t(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                r.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function() {
                r.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(i) {
            var s, n, a, o = this.options,
                r = this.element.position(),
                h = this.element;
            return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
                position: "absolute",
                top: h.css("top"),
                left: h.css("left")
            }) : h.is(".ui-draggable") && h.css({
                position: "absolute",
                top: r.top,
                left: r.left
            }), this._renderProxy(), s = e(this.helper.css("left")), n = e(this.helper.css("top")), o.containment && (s += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: s,
                top: n
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: h.width(),
                height: h.height()
            }, this.originalSize = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            }, this.originalPosition = {
                left: s,
                top: n
            }, this.sizeDiff = {
                width: h.outerWidth() - h.width(),
                height: h.outerHeight() - h.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function(e) {
            var i, s = this.helper,
                n = {},
                a = this.originalMousePosition,
                o = this.axis,
                r = this.position.top,
                h = this.position.left,
                l = this.size.width,
                c = this.size.height,
                u = e.pageX - a.left || 0,
                d = e.pageY - a.top || 0,
                p = this._change[o];
            return p ? (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1) : !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options,
                c = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, a = s ? 0 : c.sizeDiff.width, o = {
                width: c.helper.width() - a,
                height: c.helper.height() - n
            }, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(o, {
                top: h,
                left: r
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, s, n, a, o, r = this.options;
            o = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                s = this.size,
                n = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                s = this.axis,
                n = i(t.width) && e.maxWidth && e.maxWidth < t.width,
                a = i(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = i(t.width) && e.minWidth && e.minWidth > t.width,
                r = i(t.height) && e.minHeight && e.minHeight > t.height,
                h = this.originalPosition.left + this.originalSize.width,
                l = this.position.top + this.size.height,
                c = /sw|nw|w/.test(s),
                u = /nw|ne|n/.test(s);
            return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), a && (t.height = e.maxHeight), o && c && (t.left = h - e.minWidth), n && c && (t.left = h - e.maxWidth), r && u && (t.top = l - e.minHeight), a && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, s, n, a = this.helper || this.element;
                for (t = 0; this._proportionallyResizeElements.length > t; t++) {
                    if (n = this._proportionallyResizeElements[t], !this.borderDif)
                        for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++) this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
                    n.css({
                        height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize,
                    s = this.originalPosition;
                return {
                    left: s.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize,
                    n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).data("ui-resizable"),
                s = i.options,
                n = i._proportionallyResizeElements,
                a = n.length && /textarea/i.test(n[0].nodeName),
                o = a && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                r = a ? 0 : i.sizeDiff.width,
                h = {
                    width: i.size.width - r,
                    height: i.size.height - o
                },
                l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? {
                top: c,
                left: l
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, s, n, a, o, r, h, l = t(this).data("ui-resizable"),
                c = l.options,
                u = l.element,
                d = c.containment,
                p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                s[t] = e(i.css("padding" + n))
            }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = t.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {
                element: p,
                left: n.left,
                top: n.top,
                width: r,
                height: h
            }))
        },
        resize: function(e) {
            var i, s, n, a, o = t(this).data("ui-resizable"),
                r = o.options,
                h = o.containerOffset,
                l = o.position,
                c = o._aspectRatio || e.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                d = o.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - u.left), c && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - u.left : o.offset.left - u.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - u.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= Math.abs(o.parentData.left)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, c && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, c && (o.size.width = o.size.height * o.aspectRatio))
        },
        stop: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.containerOffset,
                n = e.containerPosition,
                a = e.containerElement,
                o = t(e.helper),
                r = o.offset(),
                h = o.outerWidth() - e.sizeDiff.width,
                l = o.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }), e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = function(e) {
                    t(e).each(function() {
                        var e = t(this);
                        e.data("ui-resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                s(t)
            })
        },
        resize: function(e, i) {
            var s = t(this).data("ui-resizable"),
                n = s.options,
                a = s.originalSize,
                o = s.originalPosition,
                r = {
                    height: s.size.height - a.height || 0,
                    width: s.size.width - a.width || 0,
                    top: s.position.top - o.top || 0,
                    left: s.position.left - o.left || 0
                },
                h = function(e, s) {
                    t(e).each(function() {
                        var e = t(this),
                            n = t(this).data("ui-resizable-alsoresize"),
                            a = {},
                            o = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(o, function(t, e) {
                            var i = (n[e] || 0) + (r[e] || 0);
                            i && i >= 0 && (a[e] = i || null)
                        }), e.css(a)
                    })
                };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function(t, e) {
                h(t, e)
            })
        },
        stop: function() {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.size,
                n = e.originalSize,
                a = e.originalPosition,
                o = e.axis,
                r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                h = r[0] || 1,
                l = r[1] || 1,
                c = Math.round((s.width - n.width) / h) * h,
                u = Math.round((s.height - n.height) / l) * l,
                d = n.width + c,
                p = n.height + u,
                f = i.maxWidth && d > i.maxWidth,
                g = i.maxHeight && p > i.maxHeight,
                m = i.minWidth && i.minWidth > d,
                v = i.minHeight && i.minHeight > p;
            i.grid = r, m && (d += h), v && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(o) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.top = a.top - u) : /^(sw)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.left = a.left - c) : (p - l > 0 ? (e.size.height = p, e.position.top = a.top - u) : (e.size.height = l, e.position.top = a.top + n.height - l), d - h > 0 ? (e.size.width = d, e.position.left = a.left - c) : (e.size.width = h, e.position.left = a.left + n.width - h))
        }
    })
})(jQuery);
(function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var s = null,
                n = !1,
                o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : undefined
            }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0)
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function(e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, s, n, o, a = this.options,
                r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                h = r + t.height,
                l = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || s + l > r && h > s + l,
                d = "y" === this.options.axis || e + c > o && a > e + c,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                n = i && s,
                o = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return n ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this)
            }
            var s, n, o, a, r = [],
                h = [],
                l = this._connectWith();
            if (l && e)
                for (s = l.length - 1; s >= 0; s--)
                    for (o = t(l[s]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, s, n, o, a, r, h, l, c = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem
                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
                    item: h,
                    instance: a,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(),
                        n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
                    }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(s) {
            var n, o, a, r, h, l, c, u, d, p, f = null,
                g = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (f && t.contains(this.containers[n].element[0], f.element[0])) continue;
                        f = this.containers[n], g = n
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1);
                else {
                    for (a = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"));
                    if (!r && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[g]) return;
                    r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options,
                o = e.pageX,
                a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (n.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }), n.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), n.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), s = 0; n.length > s; s++) n[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (s = 0; n.length > s; s++) n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
})(jQuery);
(function(e) {
    e.widget("ui.autocomplete", {
        version: "1.10.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(),
                a = "textarea" === n,
                o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, undefined;
                    t = !1, s = !1, i = !1;
                    var a = e.ui.keyCode;
                    switch (n.keyCode) {
                        case a.PAGE_UP:
                            t = !0, this._move("previousPage", n);
                            break;
                        case a.PAGE_DOWN:
                            t = !0, this._move("nextPage", n);
                            break;
                        case a.UP:
                            t = !0, this._keyEvent("previous", n);
                            break;
                        case a.DOWN:
                            t = !0, this._keyEvent("next", n);
                            break;
                        case a.ENTER:
                        case a.NUMPAD_ENTER:
                            this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                },
                input: function(e) {
                    return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                },
                menufocus: function(t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function() {
                        e(t.target).trigger(t.originalEvent)
                    }), undefined;
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: s
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                },
                menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, n) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        n(e)
                    },
                    error: function() {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return e.proxy(function(e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var s = this;
            e.each(i, function(e, i) {
                s._renderItemData(t, i)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function(e) {
                return s.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
        }
    })
})(jQuery);
(function(t) {
    t.widget("ui.menu", {
        version: "1.10.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var s, n, a, o, r, l = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    l = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text())
                    }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text())
                    })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i = this.options.icons.submenu,
                s = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this),
                    s = e.prev("a"),
                    n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
            }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },
        focus: function(t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this), 0 > i.offset().top - s - n
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - s + n > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
})(jQuery);; /**** jquery/jquery.browser.js ****/
jQuery.uaMatch = function(e) {
    e = e.toLowerCase();
    var r = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
    return {
        browser: r[1] || "",
        version: r[2] || "0"
    }
}, jQuery.browser || (matched = jQuery.uaMatch(navigator.userAgent), browser = {}, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0), jQuery.browser = browser);

; /**** jquery/jquery.ds.tooltip.js ****/
! function(t) {
    function e(e) {
        u.parent || (u.parent = t('<div id="' + e.id + '"><h3></h3><div class="body"></div><div class="url"></div></div>').appendTo(document.body).hide(), t.fn.bgiframe && u.parent.bgiframe(), u.title = t("h3", u.parent), u.body = t("div.body", u.parent), u.url = t("div.url", u.parent))
    }

    function i(e) {
        return t.data(e, "tooltip")
    }

    function o(e) {
        i(this).delay ? c = setTimeout(r, i(this).delay) : r(), b = !!i(this).track, t(document.body).bind("mousemove", d), d(e)
    }

    function n() {
        this.title && (this.tooltipText = this.title, t(this).removeAttr("title"), p === this && a.call(this, {}, !0))
    }

    function s() {
        p === this && a.call(this, {}, !0)
    }

    function a(e, n) {
        var s = "object" == typeof e.originalEvent;
        if ((!s || !e.originalEvent.triggered_ds_tooltip) && !t.tooltip.blocked && (this !== p || n) && (this.tooltipText || i(this).bodyHandler)) {
            if (p = this, f = this.tooltipText, i(this).bodyHandler) {
                u.title.hide();
                var a = i(this).bodyHandler.call(this);
                a.nodeType || a.jquery ? u.body.empty().append(a) : u.body.html(a), u.body.show()
            } else if (i(this).showBody) {
                var r = f.split(i(this).showBody);
                u.title.html(r.shift()).show(), u.body.empty();
                for (var d, l = 0; d = r[l]; l++) l > 0 && u.body.append("<br/>"), u.body.append(d);
                u.body.hideWhenEmpty()
            } else u.title.html(f).show(), u.body.hide();
            i(this).showURL && t(this).url() ? u.url.html(t(this).url().replace("http://", "")).show() : u.url.hide(), i(this).fixPNG && u.parent.fixPNG(), o.apply(this, arguments), s && (e.originalEvent.triggered_ds_tooltip = !0)
        }
    }

    function r() {
        c = null, m && t.fn.bgiframe || !i(p).fade ? u.parent.show() : u.parent.is(":animated") ? u.parent.stop().show().fadeTo(i(p).fade, p.tOpacity) : u.parent.is(":visible") ? u.parent.fadeTo(i(p).fade, p.tOpacity) : u.parent.fadeIn(i(p).fade), u.parent.addClass(i(p).extraClass), d()
    }

    function d(e) {
        if (!(t.tooltip.blocked || e && e.target && "OPTION" == e.target.tagName)) {
            if (!b && u.parent.is(":visible") && t(document.body).unbind("mousemove", d), null == p) return void t(document.body).unbind("mousemove", d);
            if (!t.contains(document.documentElement, p)) return t(document.body).unbind("mousemove", d), void u.parent.hide().css("opacity", "");
            u.parent.removeClass("viewport-right").removeClass("viewport-bottom");
            var o = u.parent[0].offsetLeft,
                n = u.parent[0].offsetTop;
            if (e) {
                o = e.pageX + i(p).left, n = e.pageY + i(p).top;
                var s = "auto";
                i(p).positionLeft && (s = t(window).width() - o, o = "auto"), u.parent.css({
                    left: o,
                    right: s,
                    top: n
                })
            }
            var a = l(),
                r = u.parent[0];
            a.x + a.cx < r.offsetLeft + r.offsetWidth && (o -= r.offsetWidth + 20 + i(p).left, u.parent.css({
                left: o + "px"
            }).addClass("viewport-right")), a.y + a.cy < r.offsetTop + r.offsetHeight && (n -= r.offsetHeight + 20 + i(p).top, u.parent.css({
                top: n + "px"
            }).addClass("viewport-bottom"))
        }
    }

    function l() {
        return {
            x: t(window).scrollLeft(),
            y: t(window).scrollTop(),
            cx: t(window).width(),
            cy: t(window).height()
        }
    }

    function h(e) {
        function o() {
            u.parent.removeClass(n.extraClass).hide().css("opacity", "")
        }
        if (!t.tooltip.blocked) {
            c && clearTimeout(c), p = null;
            var n = i(this);
            m && t.fn.bgiframe || !n.fade ? o() : u.parent.is(":animated") ? u.parent.stop().fadeTo(n.fade, 0, o) : u.parent.stop().fadeOut(n.fade, o), i(this).fixPNG && u.parent.unfixPNG()
        }
    }
    var p, f, c, u = {},
        m = t.browser.msie && /MSIE\s(5\.5|6\.)/.test(navigator.userAgent),
        b = !1;
    t.tooltip = {
        blocked: !1,
        defaults: {
            delay: 200,
            fade: !1,
            showURL: !0,
            extraClass: "",
            top: 15,
            left: 15,
            id: "tooltip"
        },
        block: function() {
            t.tooltip.blocked = !t.tooltip.blocked
        }
    }, t.fn.extend({
        tooltip: function(i) {
            return i = t.extend({}, t.tooltip.defaults, i), e(i), this.each(function() {
                t.data(this, "tooltip", i), this.tOpacity = u.parent.css("opacity"), this.tooltipText = this.title
            }).mouseover(a).mouseout(h).on("tooltip_content_change", s).on("tooltip_change", n).click(h).removeAttr("title").removeClass("tooltip").removeAttr("alt")
        },
        removeTooltip: function() {
            this.each(function() {
                this.tooltipText = "", p === this && (a.call(this, {}, !0), h.call(this))
            })
        },
        fixPNG: m ? function() {
            return this.each(function() {
                var e = t(this).css("backgroundImage");
                e.match(/^url\(["']?(.*\.png)["']?\)$/i) && (e = RegExp.$1, t(this).css({
                    backgroundImage: "none",
                    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + e + "')"
                }).each(function() {
                    var e = t(this).css("position");
                    "absolute" != e && "relative" != e && t(this).css("position", "relative")
                }))
            })
        } : function() {
            return this
        },
        unfixPNG: m ? function() {
            return this.each(function() {
                t(this).css({
                    filter: "",
                    backgroundImage: ""
                })
            })
        } : function() {
            return this
        },
        hideWhenEmpty: function() {
            return this.each(function() {
                t(this)[t(this).html() ? "show" : "hide"]()
            })
        },
        url: function() {
            return this.attr("href") || this.attr("src")
        }
    })
}(jQuery);

; /**** jquery/jquery.quickedit.js ****/
! function(t, e, i, n) {
    function a(e, i) {
        this.element = e, this.settings = t.extend({
            url: "",
            show_icons: !0,
            label_element: !1,
            save_success_callback: null
        }, o, i), this._defaults = o, this._name = s, this.init()
    }
    var s = "QuickEdit",
        o = {};
    a.prototype = {
        init: function() {
            t(this.element).find(".rename-icon").on("click", t.proxy(this.beginEdit, this))
        },
        beginEdit: function() {
            var e, i = t(this.element),
                n = i.find(".quickedit-label"),
                a = Math.max(80, n.width());
            if (n.data("text")) e = n.data("text");
            else var e = t.trim(i.find(".quickedit-label").text());
            i.find(".quickedit-content").hide();
            var i = t('<span class="quickedit-edit"></span>'),
                s = t('<input type="text" />').val(e).css("width", a + "px").appendTo(i).on("keydown", t.proxy(function(t) {
                    if (13 == t.keyCode) return this.beginSave(), !1
                }, this));
            t('<input type="button" class="btn" />').val("OK").appendTo(i).on("click", t.proxy(this.beginSave, this));
            return i.appendTo(t(this.element)), s.select(), !1
        },
        beginSave: function() {
            var e = t(this.element),
                i = e.find("input[type=text]").prop("disabled", !0).val();
            e.find(".btn").remove(), e.find(".quickedit-edit").append(UI.Image("loading2.gif", {
                style: "vertical-align: middle"
            }));
            var n = this.settings.url.replace("__ID__", e.data("id")),
                a = this;
            TribalWars.post(n, {}, {
                text: i
            }, function(i) {
                var n = a.settings.label_element ? t(a.settings.label_element) : e.find(".quickedit-label");
                if (n.text(i.text), i.raw && n.data("text", i.raw), i.icon && a.settings.show_icons) {
                    var s = e.find(".quickedit-content");
                    s.find("img, .commandicon-ally").remove(), t.each(i.icon, function(t, e) {
                        if (i.command) s.prepend(UI.CommandIcon(e, i.command));
                        else {
                            var n = e.tooltip ? {
                                class: "tooltip",
                                title: e.tooltip
                            } : {};
                            s.prepend(UI.Image(e.img, n))
                        }
                        s.prepend(" ")
                    }), UI.ToolTip(s.find(".tooltip"))
                }
                a.revert(), "function" == typeof a.settings.save_success_callback && a.settings.save_success_callback(i)
            }, function() {
                a.revert()
            })
        },
        revert: function() {
            var e = t(this.element);
            e.find(".quickedit-edit").remove(), e.find(".quickedit-content").show()
        }
    }, t.fn[s] = function(e) {
        return this.each(function() {
            t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new a(this, e))
        }), this
    }
}(jQuery, window, document);

; /**** jquery/jquery-cookie.js ****/
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }

    function r(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
        } catch (e) {}
    }

    function t(n, o) {
        var i = u.raw ? n : r(n);
        return e.isFunction(o) ? o(i) : i
    }
    var c = /\+/g,
        u = e.cookie = function(r, c, f) {
            if (void 0 !== c && !e.isFunction(c)) {
                if (f = e.extend({}, u.defaults, f), "number" == typeof f.expires) {
                    var a = f.expires,
                        d = f.expires = new Date;
                    d.setTime(+d + 864e5 * a)
                }
                return document.cookie = [n(r), "=", i(c), f.expires ? "; expires=" + f.expires.toUTCString() : "", f.path ? "; path=" + f.path : "", f.domain ? "; domain=" + f.domain : "", f.secure ? "; secure" : ""].join("")
            }
            for (var p = r ? void 0 : {}, s = document.cookie ? document.cookie.split("; ") : [], m = 0, x = s.length; m < x; m++) {
                var v = s[m].split("="),
                    k = o(v.shift()),
                    l = v.join("=");
                if (r && r === k) {
                    p = t(l, c);
                    break
                }
                r || void 0 === (l = t(l)) || (p[k] = l)
            }
            return p
        };
    u.defaults = {}, e.removeCookie = function(n, o) {
        return void 0 !== e.cookie(n) && (e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })), !e.cookie(n))
    }
});

; /**** jquery/jquery.hotkeys.js ****/
! function(t) {
    function e(e) {
        if ("string" == typeof e.data && (e.data = {
                keys: e.data
            }), e.data && e.data.keys && "string" == typeof e.data.keys) {
            var a = e.handler,
                s = e.data.keys.toLowerCase().split(" ");
            e.handler = function(e) {
                if (this === e.target || !(t.hotkeys.options.filterInputAcceptingElements && t.hotkeys.textInputTypes.test(e.target.nodeName) || t.hotkeys.options.filterContentEditable && t(e.target).attr("contenteditable") || t.hotkeys.options.filterTextInputs && t.inArray(e.target.type, t.hotkeys.textAcceptingInputTypes) > -1)) {
                    var n = "keypress" !== e.type && t.hotkeys.specialKeys[e.which],
                        i = String.fromCharCode(e.which).toLowerCase(),
                        r = "",
                        o = {};
                    t.each(["alt", "ctrl", "shift"], function(t, a) {
                        e[a + "Key"] && n !== a && (r += a + "+")
                    }), e.metaKey && !e.ctrlKey && "meta" !== n && (r += "meta+"), e.metaKey && "meta" !== n && r.indexOf("alt+ctrl+shift+") > -1 && (r = r.replace("alt+ctrl+shift+", "hyper+")), n ? o[r + n] = !0 : (o[r + i] = !0, o[r + t.hotkeys.shiftNums[i]] = !0, "shift+" === r && (o[t.hotkeys.shiftNums[i]] = !0));
                    for (var p = 0, l = s.length; p < l; p++)
                        if (o[s[p]]) return a.apply(this, arguments)
                }
            }
        }
    }
    t.hotkeys = {
        version: "0.2.0",
        specialKeys: {
            8: "backspace",
            9: "tab",
            10: "return",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            59: ";",
            61: "=",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'"
        },
        shiftNums: {
            "`": "~",
            1: "!",
            2: "@",
            3: "#",
            4: "$",
            5: "%",
            6: "^",
            7: "&",
            8: "*",
            9: "(",
            0: ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": '"',
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        },
        textAcceptingInputTypes: ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color", "tel"],
        textInputTypes: /textarea|input|select/i,
        options: {
            filterInputAcceptingElements: !0,
            filterTextInputs: !0,
            filterContentEditable: !0
        }
    }, t.each(["keydown", "keyup", "keypress"], function() {
        t.event.special[this] = {
            add: e
        }
    })
}(jQuery || this.jQuery || window.jQuery);

; /**** jquery/jtoggler.js ****/
var JToggler = {
    init: function(e) {
        JToggler.elements = $(e + ":not(.selectAll):not(.ignore_jtoggler)"), JToggler.elements.unbind("mousedown", JToggler.down).bind("mousedown", JToggler.down), JToggler.elements.unbind("click", JToggler.click).bind("click", JToggler.click), $("body").unbind("mouseup", JToggler.up).bind("mouseup", JToggler.up)
    },
    click: function(e) {
        if (JToggler.first && (JToggler.first.checked = JToggler.checked), e.shiftKey && JToggler.first) {
            var g, o = JToggler.elements.index(JToggler.first),
                r = JToggler.elements.index(e.target);
            for (o > r ? (g = r, r = o) : g = o, g; g < r; g++) JToggler.elements[g].checked = JToggler.checked
        }
    },
    down: function(e) {
        e.shiftKey || JToggler.started || (JToggler.started = !0, JToggler.first = e.target, JToggler.checked = e.target.checked = !e.target.checked, JToggler.elements.mouseover(JToggler.over))
    },
    over: function(e) {
        e.target.checked != JToggler.checked && (e.target.checked = JToggler.checked)
    },
    up: function(e) {
        JToggler.started && (JToggler.started = !1, JToggler.elements.unbind("mouseover", JToggler.over))
    }
};

; /**** libs/notify.js ****/
! function(t, o) {
    "use strict";
    "function" == typeof define && define.amd ? define("notify", [], function() {
        return o(t, document)
    }) : "object" == typeof exports ? module.exports = o(t, document) : t.Notify = o(t, document)
}(window, function(t, o) {
    "use strict";

    function i(t, o) {
        if ("string" != typeof t) throw new Error("Notify(): first arg (title) must be a string.");
        if (this.title = t, this.options = {
                icon: "",
                body: "",
                tag: "",
                notifyShow: null,
                notifyClose: null,
                notifyClick: null,
                notifyError: null,
                permissionGranted: null,
                permissionDenied: null,
                timeout: null
            }, this.permission = null, i.isSupported() && "object" == typeof o) {
            for (var n in o) o.hasOwnProperty(n) && (this.options[n] = o[n]);
            "function" == typeof this.options.notifyShow && (this.onShowCallback = this.options.notifyShow), "function" == typeof this.options.notifyClose && (this.onCloseCallback = this.options.notifyClose), "function" == typeof this.options.notifyClick && (this.onClickCallback = this.options.notifyClick), "function" == typeof this.options.notifyError && (this.onErrorCallback = this.options.notifyError)
        }
    }
    return i.isSupported = function() {
        return "Notification" in t
    }, i.needsPermission = function() {
        return !i.isSupported() || "granted" !== Notification.permission
    }, i.requestPermission = function(o, n) {
        i.isSupported() && t.Notification.requestPermission(function(t) {
            switch (t) {
                case "granted":
                    "function" == typeof o && o();
                    break;
                case "denied":
                    "function" == typeof n && n()
            }
        })
    }, i.prototype.show = function() {
        i.isSupported() && (this.myNotify = new Notification(this.title, {
            body: this.options.body,
            tag: this.options.tag,
            icon: this.options.icon
        }), this.options.timeout && !isNaN(this.options.timeout) && setTimeout(this.close.bind(this), 1e3 * this.options.timeout), this.myNotify.addEventListener("show", this, !1), this.myNotify.addEventListener("error", this, !1), this.myNotify.addEventListener("close", this, !1), this.myNotify.addEventListener("click", this, !1))
    }, i.prototype.onShowNotification = function(t) {
        this.onShowCallback && this.onShowCallback(t)
    }, i.prototype.onCloseNotification = function() {
        this.onCloseCallback && this.onCloseCallback(), this.destroy()
    }, i.prototype.onClickNotification = function() {
        this.onClickCallback && this.onClickCallback()
    }, i.prototype.onErrorNotification = function() {
        this.onErrorCallback && this.onErrorCallback(), this.destroy()
    }, i.prototype.destroy = function() {
        this.myNotify.removeEventListener("show", this, !1), this.myNotify.removeEventListener("error", this, !1), this.myNotify.removeEventListener("close", this, !1), this.myNotify.removeEventListener("click", this, !1)
    }, i.prototype.close = function() {
        this.myNotify.close()
    }, i.prototype.handleEvent = function(t) {
        switch (t.type) {
            case "show":
                this.onShowNotification(t);
                break;
            case "close":
                this.onCloseNotification(t);
                break;
            case "click":
                this.onClickNotification(t);
                break;
            case "error":
                this.onErrorNotification(t)
        }
    }, i
});

; /**** libs/socket.io.js ****/
! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.io = t()
    }
}(function() {
    var t;
    return function t(e, n, r) {
        function o(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var c = "function" == typeof require && require;
                    if (!a && c) return c(s, !0);
                    if (i) return i(s, !0);
                    var p = new Error("Cannot find module '" + s + "'");
                    throw p.code = "MODULE_NOT_FOUND", p
                }
                var u = n[s] = {
                    exports: {}
                };
                e[s][0].call(u.exports, function(t) {
                    var n = e[s][1][t];
                    return o(n ? n : t)
                }, u, u.exports, t, e, n, r)
            }
            return n[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
        return o
    }({
        1: [function(t, e, n) {
            e.exports = t("./lib/")
        }, {
            "./lib/": 2
        }],
        2: [function(t, e, n) {
            e.exports = t("./socket"), e.exports.parser = t("engine.io-parser")
        }, {
            "./socket": 3,
            "engine.io-parser": 19
        }],
        3: [function(t, e, n) {
            (function(n) {
                function r(t, e) {
                    if (!(this instanceof r)) return new r(t, e);
                    e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = u(t), e.hostname = t.host, e.secure = "https" == t.protocol || "wss" == t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = u(e.host).host), this.secure = null != e.secure ? e.secure : n.location && "https:" == location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || (n.location ? location.hostname : "localhost"), this.port = e.port || (n.location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized ? null : e.rejectUnauthorized;
                    var o = "object" == typeof n && n;
                    o.global === o && e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), this.open()
                }

                function o(t) {
                    var e = {};
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                }
                var i = t("./transports"),
                    s = t("component-emitter"),
                    a = t("debug")("engine.io-client:socket"),
                    c = t("indexof"),
                    p = t("engine.io-parser"),
                    u = t("parseuri"),
                    f = t("parsejson"),
                    h = t("parseqs");
                e.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = p.protocol, r.Socket = r, r.Transport = t("./transport"), r.transports = t("./transports"), r.parser = t("engine.io-parser"), r.prototype.createTransport = function(t) {
                    a('creating transport "%s"', t);
                    var e = o(this.query);
                    e.EIO = p.protocol, e.transport = t, this.id && (e.sid = this.id);
                    var n = new i[t]({
                        agent: this.agent,
                        hostname: this.hostname,
                        port: this.port,
                        secure: this.secure,
                        path: this.path,
                        query: e,
                        forceJSONP: this.forceJSONP,
                        jsonp: this.jsonp,
                        forceBase64: this.forceBase64,
                        enablesXDR: this.enablesXDR,
                        timestampRequests: this.timestampRequests,
                        timestampParam: this.timestampParam,
                        policyPort: this.policyPort,
                        socket: this,
                        pfx: this.pfx,
                        key: this.key,
                        passphrase: this.passphrase,
                        cert: this.cert,
                        ca: this.ca,
                        ciphers: this.ciphers,
                        rejectUnauthorized: this.rejectUnauthorized,
                        perMessageDeflate: this.perMessageDeflate,
                        extraHeaders: this.extraHeaders
                    });
                    return n
                }, r.prototype.open = function() {
                    var t;
                    if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") != -1) t = "websocket";
                    else {
                        if (0 === this.transports.length) {
                            var e = this;
                            return void setTimeout(function() {
                                e.emit("error", "No transports available")
                            }, 0)
                        }
                        t = this.transports[0]
                    }
                    this.readyState = "opening";
                    try {
                        t = this.createTransport(t)
                    } catch (t) {
                        return this.transports.shift(), void this.open()
                    }
                    t.open(), this.setTransport(t)
                }, r.prototype.setTransport = function(t) {
                    a("setting transport %s", t.name);
                    var e = this;
                    this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function() {
                        e.onDrain()
                    }).on("packet", function(t) {
                        e.onPacket(t)
                    }).on("error", function(t) {
                        e.onError(t)
                    }).on("close", function() {
                        e.onClose("transport close")
                    })
                }, r.prototype.probe = function(t) {
                    function e() {
                        if (h.onlyBinaryUpgrades) {
                            var e = !this.supportsBinary && h.transport.supportsBinary;
                            f = f || e
                        }
                        f || (a('probe transport "%s" opened', t), u.send([{
                            type: "ping",
                            data: "probe"
                        }]), u.once("packet", function(e) {
                            if (!f)
                                if ("pong" == e.type && "probe" == e.data) {
                                    if (a('probe transport "%s" pong', t), h.upgrading = !0, h.emit("upgrading", u), !u) return;
                                    r.priorWebsocketSuccess = "websocket" == u.name, a('pausing current transport "%s"', h.transport.name), h.transport.pause(function() {
                                        f || "closed" != h.readyState && (a("changing transport and sending upgrade packet"), p(), h.setTransport(u), u.send([{
                                            type: "upgrade"
                                        }]), h.emit("upgrade", u), u = null, h.upgrading = !1, h.flush())
                                    })
                                } else {
                                    a('probe transport "%s" failed', t);
                                    var n = new Error("probe error");
                                    n.transport = u.name, h.emit("upgradeError", n)
                                }
                        }))
                    }

                    function n() {
                        f || (f = !0, p(), u.close(), u = null)
                    }

                    function o(e) {
                        var r = new Error("probe error: " + e);
                        r.transport = u.name, n(), a('probe transport "%s" failed because of error: %s', t, e), h.emit("upgradeError", r)
                    }

                    function i() {
                        o("transport closed")
                    }

                    function s() {
                        o("socket closed")
                    }

                    function c(t) {
                        u && t.name != u.name && (a('"%s" works - aborting "%s"', t.name, u.name), n())
                    }

                    function p() {
                        u.removeListener("open", e), u.removeListener("error", o), u.removeListener("close", i), h.removeListener("close", s), h.removeListener("upgrading", c)
                    }
                    a('probing transport "%s"', t);
                    var u = this.createTransport(t, {
                            probe: 1
                        }),
                        f = !1,
                        h = this;
                    r.priorWebsocketSuccess = !1, u.once("open", e), u.once("error", o), u.once("close", i), this.once("close", s), this.once("upgrading", c), u.open()
                }, r.prototype.onOpen = function() {
                    if (a("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                        a("starting upgrade probes");
                        for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
                    }
                }, r.prototype.onPacket = function(t) {
                    if ("opening" == this.readyState || "open" == this.readyState) switch (a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
                        case "open":
                            this.onHandshake(f(t.data));
                            break;
                        case "pong":
                            this.setPing(), this.emit("pong");
                            break;
                        case "error":
                            var e = new Error("server error");
                            e.code = t.data, this.onError(e);
                            break;
                        case "message":
                            this.emit("data", t.data), this.emit("message", t.data)
                    } else a('packet received with socket readyState "%s"', this.readyState)
                }, r.prototype.onHandshake = function(t) {
                    this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
                }, r.prototype.onHeartbeat = function(t) {
                    clearTimeout(this.pingTimeoutTimer);
                    var e = this;
                    e.pingTimeoutTimer = setTimeout(function() {
                        "closed" != e.readyState && e.onClose("ping timeout")
                    }, t || e.pingInterval + e.pingTimeout)
                }, r.prototype.setPing = function() {
                    var t = this;
                    clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function() {
                        a("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout)
                    }, t.pingInterval)
                }, r.prototype.ping = function() {
                    var t = this;
                    this.sendPacket("ping", function() {
                        t.emit("ping")
                    })
                }, r.prototype.onDrain = function() {
                    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                }, r.prototype.flush = function() {
                    "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                }, r.prototype.write = r.prototype.send = function(t, e, n) {
                    return this.sendPacket("message", t, e, n), this
                }, r.prototype.sendPacket = function(t, e, n, r) {
                    if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" != this.readyState && "closed" != this.readyState) {
                        n = n || {}, n.compress = !1 !== n.compress;
                        var o = {
                            type: t,
                            data: e,
                            options: n
                        };
                        this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
                    }
                }, r.prototype.close = function() {
                    function t() {
                        r.onClose("forced close"), a("socket closing - telling transport to close"), r.transport.close()
                    }

                    function e() {
                        r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t()
                    }

                    function n() {
                        r.once("upgrade", e), r.once("upgradeError", e)
                    }
                    if ("opening" == this.readyState || "open" == this.readyState) {
                        this.readyState = "closing";
                        var r = this;
                        this.writeBuffer.length ? this.once("drain", function() {
                            this.upgrading ? n() : t()
                        }) : this.upgrading ? n() : t()
                    }
                    return this
                }, r.prototype.onError = function(t) {
                    a("socket error %j", t), r.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
                }, r.prototype.onClose = function(t, e) {
                    if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                        a('socket close with reason: "%s"', t);
                        var n = this;
                        clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), n.writeBuffer = [], n.prevBufferLen = 0
                    }
                }, r.prototype.filterUpgrades = function(t) {
                    for (var e = [], n = 0, r = t.length; n < r; n++) ~c(this.transports, t[n]) && e.push(t[n]);
                    return e
                }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {
            "./transport": 4,
            "./transports": 5,
            "component-emitter": 15,
            debug: 17,
            "engine.io-parser": 19,
            indexof: 23,
            parsejson: 26,
            parseqs: 27,
            parseuri: 28
        }],
        4: [function(t, e, n) {
            function r(t) {
                this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders
            }
            var o = t("engine.io-parser"),
                i = t("component-emitter");
            e.exports = r, i(r.prototype), r.prototype.onError = function(t, e) {
                var n = new Error(t);
                return n.type = "TransportError", n.description = e, this.emit("error", n), this
            }, r.prototype.open = function() {
                return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening", this.doOpen()), this
            }, r.prototype.close = function() {
                return "opening" != this.readyState && "open" != this.readyState || (this.doClose(), this.onClose()), this
            }, r.prototype.send = function(t) {
                if ("open" != this.readyState) throw new Error("Transport not open");
                this.write(t)
            }, r.prototype.onOpen = function() {
                this.readyState = "open", this.writable = !0, this.emit("open")
            }, r.prototype.onData = function(t) {
                var e = o.decodePacket(t, this.socket.binaryType);
                this.onPacket(e)
            }, r.prototype.onPacket = function(t) {
                this.emit("packet", t)
            }, r.prototype.onClose = function() {
                this.readyState = "closed", this.emit("close")
            }
        }, {
            "component-emitter": 15,
            "engine.io-parser": 19
        }],
        5: [function(t, e, n) {
            (function(e) {
                function r(t) {
                    var n, r = !1,
                        a = !1,
                        c = !1 !== t.jsonp;
                    if (e.location) {
                        var p = "https:" == location.protocol,
                            u = location.port;
                        u || (u = p ? 443 : 80), r = t.hostname != location.hostname || u != t.port, a = t.secure != p
                    }
                    if (t.xdomain = r, t.xscheme = a, n = new o(t), "open" in n && !t.forceJSONP) return new i(t);
                    if (!c) throw new Error("JSONP disabled");
                    return new s(t)
                }
                var o = t("xmlhttprequest-ssl"),
                    i = t("./polling-xhr"),
                    s = t("./polling-jsonp"),
                    a = t("./websocket");
                n.polling = r, n.websocket = a
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {
            "./polling-jsonp": 6,
            "./polling-xhr": 7,
            "./websocket": 9,
            "xmlhttprequest-ssl": 10
        }],
        6: [function(t, e, n) {
            (function(n) {
                function r() {}

                function o(t) {
                    i.call(this, t), this.query = this.query || {}, a || (n.___eio || (n.___eio = []), a = n.___eio), this.index = a.length;
                    var e = this;
                    a.push(function(t) {
                        e.onData(t)
                    }), this.query.j = this.index, n.document && n.addEventListener && n.addEventListener("beforeunload", function() {
                        e.script && (e.script.onerror = r)
                    }, !1)
                }
                var i = t("./polling"),
                    s = t("component-inherit");
                e.exports = o;
                var a, c = /\n/g,
                    p = /\\n/g;
                s(o, i), o.prototype.supportsBinary = !1, o.prototype.doClose = function() {
                    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), i.prototype.doClose.call(this)
                }, o.prototype.doPoll = function() {
                    var t = this,
                        e = document.createElement("script");
                    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function(e) {
                        t.onError("jsonp poll error", e)
                    };
                    var n = document.getElementsByTagName("script")[0];
                    n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e;
                    var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                    r && setTimeout(function() {
                        var t = document.createElement("iframe");
                        document.body.appendChild(t), document.body.removeChild(t)
                    }, 100)
                }, o.prototype.doWrite = function(t, e) {
                    function n() {
                        r(), e()
                    }

                    function r() {
                        if (o.iframe) try {
                            o.form.removeChild(o.iframe)
                        } catch (t) {
                            o.onError("jsonp polling iframe removal error", t)
                        }
                        try {
                            var t = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                            i = document.createElement(t)
                        } catch (t) {
                            i = document.createElement("iframe"), i.name = o.iframeId, i.src = "javascript:0"
                        }
                        i.id = o.iframeId, o.form.appendChild(i), o.iframe = i
                    }
                    var o = this;
                    if (!this.form) {
                        var i, s = document.createElement("form"),
                            a = document.createElement("textarea"),
                            u = this.iframeId = "eio_iframe_" + this.index;
                        s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = u, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a
                    }
                    this.form.action = this.uri(), r(), t = t.replace(p, "\\\n"), this.area.value = t.replace(c, "\\n");
                    try {
                        this.form.submit()
                    } catch (t) {}
                    this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                        "complete" == o.iframe.readyState && n()
                    } : this.iframe.onload = n
                }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {
            "./polling": 8,
            "component-inherit": 16
        }],
        7: [function(t, e, n) {
            (function(n) {
                function r() {}

                function o(t) {
                    if (c.call(this, t), n.location) {
                        var e = "https:" == location.protocol,
                            r = location.port;
                        r || (r = e ? 443 : 80), this.xd = t.hostname != n.location.hostname || r != t.port, this.xs = t.secure != e
                    } else this.extraHeaders = t.extraHeaders
                }

                function i(t) {
                    this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 != t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create()
                }

                function s() {
                    for (var t in i.requests) i.requests.hasOwnProperty(t) && i.requests[t].abort()
                }
                var a = t("xmlhttprequest-ssl"),
                    c = t("./polling"),
                    p = t("component-emitter"),
                    u = t("component-inherit"),
                    f = t("debug")("engine.io-client:polling-xhr");
                e.exports = o, e.exports.Request = i, u(o, c), o.prototype.supportsBinary = !0, o.prototype.request = function(t) {
                    return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.extraHeaders = this.extraHeaders, new i(t)
                }, o.prototype.doWrite = function(t, e) {
                    var n = "string" != typeof t && void 0 !== t,
                        r = this.request({
                            method: "POST",
                            data: t,
                            isBinary: n
                        }),
                        o = this;
                    r.on("success", e), r.on("error", function(t) {
                        o.onError("xhr post error", t)
                    }), this.sendXhr = r
                }, o.prototype.doPoll = function() {
                    f("xhr poll");
                    var t = this.request(),
                        e = this;
                    t.on("data", function(t) {
                        e.onData(t)
                    }), t.on("error", function(t) {
                        e.onError("xhr poll error", t)
                    }), this.pollXhr = t
                }, p(i.prototype), i.prototype.create = function() {
                    var t = {
                        agent: this.agent,
                        xdomain: this.xd,
                        xscheme: this.xs,
                        enablesXDR: this.enablesXDR
                    };
                    t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
                    var e = this.xhr = new a(t),
                        r = this;
                    try {
                        f("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);
                        try {
                            if (this.extraHeaders) {
                                e.setDisableHeaderCheck(!0);
                                for (var o in this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && e.setRequestHeader(o, this.extraHeaders[o])
                            }
                        } catch (t) {}
                        if (this.supportsBinary && (e.responseType = "arraybuffer"), "POST" == this.method) try {
                            this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (t) {}
                        "withCredentials" in e && (e.withCredentials = !0), this.hasXDR() ? (e.onload = function() {
                            r.onLoad()
                        }, e.onerror = function() {
                            r.onError(e.responseText)
                        }) : e.onreadystatechange = function() {
                            4 == e.readyState && (200 == e.status || 1223 == e.status ? r.onLoad() : setTimeout(function() {
                                r.onError(e.status)
                            }, 0))
                        }, f("xhr data %s", this.data), e.send(this.data)
                    } catch (t) {
                        return void setTimeout(function() {
                            r.onError(t)
                        }, 0)
                    }
                    n.document && (this.index = i.requestsCount++, i.requests[this.index] = this)
                }, i.prototype.onSuccess = function() {
                    this.emit("success"), this.cleanup()
                }, i.prototype.onData = function(t) {
                    this.emit("data", t), this.onSuccess()
                }, i.prototype.onError = function(t) {
                    this.emit("error", t), this.cleanup(!0)
                }, i.prototype.cleanup = function(t) {
                    if ("undefined" != typeof this.xhr && null !== this.xhr) {
                        if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, t) try {
                            this.xhr.abort()
                        } catch (t) {}
                        n.document && delete i.requests[this.index], this.xhr = null
                    }
                }, i.prototype.onLoad = function() {
                    var t;
                    try {
                        var e;
                        try {
                            e = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                        } catch (t) {}
                        if ("application/octet-stream" === e) t = this.xhr.response;
                        else if (this.supportsBinary) try {
                            t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                        } catch (e) {
                            for (var n = new Uint8Array(this.xhr.response), r = [], o = 0, i = n.length; o < i; o++) r.push(n[o]);
                            t = String.fromCharCode.apply(null, r)
                        } else t = this.xhr.responseText
                    } catch (t) {
                        this.onError(t)
                    }
                    null != t && this.onData(t)
                }, i.prototype.hasXDR = function() {
                    return "undefined" != typeof n.XDomainRequest && !this.xs && this.enablesXDR
                }, i.prototype.abort = function() {
                    this.cleanup()
                }, n.document && (i.requestsCount = 0, i.requests = {}, n.attachEvent ? n.attachEvent("onunload", s) : n.addEventListener && n.addEventListener("beforeunload", s, !1))
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {
            "./polling": 8,
            "component-emitter": 15,
            "component-inherit": 16,
            debug: 17,
            "xmlhttprequest-ssl": 10
        }],
        8: [function(t, e, n) {
            function r(t) {
                var e = t && t.forceBase64;
                u && !e || (this.supportsBinary = !1), o.call(this, t)
            }
            var o = t("../transport"),
                i = t("parseqs"),
                s = t("engine.io-parser"),
                a = t("component-inherit"),
                c = t("yeast"),
                p = t("debug")("engine.io-client:polling");
            e.exports = r;
            var u = function() {
                var e = t("xmlhttprequest-ssl"),
                    n = new e({
                        xdomain: !1
                    });
                return null != n.responseType
            }();
            a(r, o), r.prototype.name = "polling", r.prototype.doOpen = function() {
                this.poll()
            }, r.prototype.pause = function(t) {
                function e() {
                    p("paused"), n.readyState = "paused", t()
                }
                var n = this;
                if (this.readyState = "pausing", this.polling || !this.writable) {
                    var r = 0;
                    this.polling && (p("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function() {
                        p("pre-pause polling complete"), --r || e()
                    })), this.writable || (p("we are currently writing - waiting to pause"), r++, this.once("drain", function() {
                        p("pre-pause writing complete"), --r || e()
                    }))
                } else e()
            }, r.prototype.poll = function() {
                p("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
            }, r.prototype.onData = function(t) {
                var e = this;
                p("polling got data %s", t);
                var n = function(t, n, r) {
                    return "opening" == e.readyState && e.onOpen(), "close" == t.type ? (e.onClose(), !1) : void e.onPacket(t)
                };
                s.decodePayload(t, this.socket.binaryType, n), "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : p('ignoring poll - transport state "%s"', this.readyState))
            }, r.prototype.doClose = function() {
                function t() {
                    p("writing close packet"), e.write([{
                        type: "close"
                    }])
                }
                var e = this;
                "open" == this.readyState ? (p("transport open - closing"), t()) : (p("transport not open - deferring close"), this.once("open", t))
            }, r.prototype.write = function(t) {
                var e = this;
                this.writable = !1;
                var n = function() {
                        e.writable = !0, e.emit("drain")
                    },
                    e = this;
                s.encodePayload(t, this.supportsBinary, function(t) {
                    e.doWrite(t, n)
                })
            }, r.prototype.uri = function() {
                var t = this.query || {},
                    e = this.secure ? "https" : "http",
                    n = "";
                !1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && ("https" == e && 443 != this.port || "http" == e && 80 != this.port) && (n = ":" + this.port), t.length && (t = "?" + t);
                var r = this.hostname.indexOf(":") !== -1;
                return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
            }
        }, {
            "../transport": 4,
            "component-inherit": 16,
            debug: 17,
            "engine.io-parser": 19,
            parseqs: 27,
            "xmlhttprequest-ssl": 10,
            yeast: 30
        }],
        9: [function(t, e, n) {
            (function(n) {
                function r(t) {
                    var e = t && t.forceBase64;
                    e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, o.call(this, t)
                }
                var o = t("../transport"),
                    i = t("engine.io-parser"),
                    s = t("parseqs"),
                    a = t("component-inherit"),
                    c = t("yeast"),
                    p = t("debug")("engine.io-client:websocket"),
                    u = n.WebSocket || n.MozWebSocket,
                    f = u;
                if (!f && "undefined" == typeof window) try {
                    f = t("ws")
                } catch (t) {}
                e.exports = r, a(r, o), r.prototype.name = "websocket", r.prototype.supportsBinary = !0, r.prototype.doOpen = function() {
                    if (this.check()) {
                        var t = this.uri(),
                            e = void 0,
                            n = {
                                agent: this.agent,
                                perMessageDeflate: this.perMessageDeflate
                            };
                        n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.ws = u ? new f(t) : new f(t, e, n), void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
                    }
                }, r.prototype.addEventListeners = function() {
                    var t = this;
                    this.ws.onopen = function() {
                        t.onOpen()
                    }, this.ws.onclose = function() {
                        t.onClose()
                    }, this.ws.onmessage = function(e) {
                        t.onData(e.data)
                    }, this.ws.onerror = function(e) {
                        t.onError("websocket error", e)
                    }
                }, "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (r.prototype.onData = function(t) {
                    var e = this;
                    setTimeout(function() {
                        o.prototype.onData.call(e, t)
                    }, 0)
                }), r.prototype.write = function(t) {
                    function e() {
                        r.emit("flush"), setTimeout(function() {
                            r.writable = !0, r.emit("drain")
                        }, 0)
                    }
                    var r = this;
                    this.writable = !1;
                    for (var o = t.length, s = 0, a = o; s < a; s++) ! function(t) {
                        i.encodePacket(t, r.supportsBinary, function(i) {
                            if (!u) {
                                var s = {};
                                if (t.options && (s.compress = t.options.compress), r.perMessageDeflate) {
                                    var a = "string" == typeof i ? n.Buffer.byteLength(i) : i.length;
                                    a < r.perMessageDeflate.threshold && (s.compress = !1)
                                }
                            }
                            try {
                                u ? r.ws.send(i) : r.ws.send(i, s)
                            } catch (t) {
                                p("websocket closed before onclose event")
                            }--o || e()
                        })
                    }(t[s])
                }, r.prototype.onClose = function() {
                    o.prototype.onClose.call(this)
                }, r.prototype.doClose = function() {
                    "undefined" != typeof this.ws && this.ws.close()
                }, r.prototype.uri = function() {
                    var t = this.query || {},
                        e = this.secure ? "wss" : "ws",
                        n = "";
                    this.port && ("wss" == e && 443 != this.port || "ws" == e && 80 != this.port) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || (t.b64 = 1), t = s.encode(t), t.length && (t = "?" + t);
                    var r = this.hostname.indexOf(":") !== -1;
                    return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
                }, r.prototype.check = function() {
                    return !(!f || "__initialize" in f && this.name === r.prototype.name)
                }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {
            "../transport": 4,
            "component-inherit": 16,
            debug: 17,
            "engine.io-parser": 19,
            parseqs: 27,
            ws: void 0,
            yeast: 30
        }],
        10: [function(t, e, n) {
            var r = t("has-cors");
            e.exports = function(t) {
                var e = t.xdomain,
                    n = t.xscheme,
                    o = t.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!e || r)) return new XMLHttpRequest
                } catch (t) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !n && o) return new XDomainRequest
                } catch (t) {}
                if (!e) try {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }
        }, {
            "has-cors": 22
        }],
        11: [function(t, e, n) {
            function r(t, e, n) {
                function r(t, o) {
                    if (r.count <= 0) throw new Error("after called too many times");
                    --r.count, t ? (i = !0, e(t), e = n) : 0 !== r.count || i || e(null, o)
                }
                var i = !1;
                return n = n || o, r.count = t, 0 === t ? e() : r
            }

            function o() {}
            e.exports = r
        }, {}],
        12: [function(t, e, n) {
            e.exports = function(t, e, n) {
                var r = t.byteLength;
                if (e = e || 0, n = n || r, t.slice) return t.slice(e, n);
                if (e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r) return new ArrayBuffer(0);
                for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, a++) i[a] = o[s];
                return i.buffer
            }
        }, {}],
        13: [function(t, e, n) {
            ! function(t) {
                "use strict";
                n.encode = function(e) {
                    var n, r = new Uint8Array(e),
                        o = r.length,
                        i = "";
                    for (n = 0; n < o; n += 3) i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]];
                    return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i
                }, n.decode = function(e) {
                    var n, r, o, i, s, a = .75 * e.length,
                        c = e.length,
                        p = 0;
                    "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                    var u = new ArrayBuffer(a),
                        f = new Uint8Array(u);
                    for (n = 0; n < c; n += 4) r = t.indexOf(e[n]), o = t.indexOf(e[n + 1]), i = t.indexOf(e[n + 2]), s = t.indexOf(e[n + 3]), f[p++] = r << 2 | o >> 4, f[p++] = (15 & o) << 4 | i >> 2, f[p++] = (3 & i) << 6 | 63 & s;
                    return u
                }
            }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
        }, {}],
        14: [function(t, e, n) {
            (function(t) {
                function n(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (n.buffer instanceof ArrayBuffer) {
                            var r = n.buffer;
                            if (n.byteLength !== r.byteLength) {
                                var o = new Uint8Array(n.byteLength);
                                o.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = o.buffer
                            }
                            t[e] = r
                        }
                    }
                }

                function r(t, e) {
                    e = e || {};
                    var r = new i;
                    n(t);
                    for (var o = 0; o < t.length; o++) r.append(t[o]);
                    return e.type ? r.getBlob(e.type) : r.getBlob()
                }

                function o(t, e) {
                    return n(t), new Blob(t, e || {})
                }
                var i = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder,
                    s = function() {
                        try {
                            var t = new Blob(["hi"]);
                            return 2 === t.size
                        } catch (t) {
                            return !1
                        }
                    }(),
                    a = s && function() {
                        try {
                            var t = new Blob([new Uint8Array([1, 2])]);
                            return 2 === t.size
                        } catch (t) {
                            return !1
                        }
                    }(),
                    c = i && i.prototype.append && i.prototype.getBlob;
                e.exports = function() {
                    return s ? a ? t.Blob : o : c ? r : void 0
                }()
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {}],
        15: [function(t, e, n) {
            function r(t) {
                if (t) return o(t)
            }

            function o(t) {
                for (var e in r.prototype) t[e] = r.prototype[e];
                return t
            }
            e.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
                return this._callbacks = this._callbacks || {}, (this._callbacks[t] = this._callbacks[t] || []).push(e), this
            }, r.prototype.once = function(t, e) {
                function n() {
                    r.off(t, n), e.apply(this, arguments)
                }
                var r = this;
                return this._callbacks = this._callbacks || {}, n.fn = e, this.on(t, n), this
            }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n = this._callbacks[t];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks[t], this;
                for (var r, o = 0; o < n.length; o++)
                    if (r = n[o], r === e || r.fn === e) {
                        n.splice(o, 1);
                        break
                    }
                return this
            }, r.prototype.emit = function(t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    n = this._callbacks[t];
                if (n) {
                    n = n.slice(0);
                    for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, e)
                }
                return this
            }, r.prototype.listeners = function(t) {
                return this._callbacks = this._callbacks || {}, this._callbacks[t] || []
            }, r.prototype.hasListeners = function(t) {
                return !!this.listeners(t).length
            }
        }, {}],
        16: [function(t, e, n) {
            e.exports = function(t, e) {
                var n = function() {};
                n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
            }
        }, {}],
        17: [function(t, e, n) {
            function r() {
                return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }

            function o() {
                var t = arguments,
                    e = this.useColors;
                if (t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + n.humanize(this.diff), !e) return t;
                var r = "color: " + this.color;
                t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                var o = 0,
                    i = 0;
                return t[0].replace(/%[a-z%]/g, function(t) {
                    "%%" !== t && (o++, "%c" === t && (i = o))
                }), t.splice(i, 0, r), t
            }

            function i() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function s(t) {
                try {
                    null == t ? n.storage.removeItem("debug") : n.storage.debug = t
                } catch (t) {}
            }

            function a() {
                var t;
                try {
                    t = n.storage.debug
                } catch (t) {}
                return t
            }

            function c() {
                try {
                    return window.localStorage
                } catch (t) {}
            }
            n = e.exports = t("./debug"), n.log = i, n.formatArgs = o, n.save = s, n.load = a, n.useColors = r, n.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : c(), n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], n.formatters.j = function(t) {
                return JSON.stringify(t)
            }, n.enable(a())
        }, {
            "./debug": 18
        }],
        18: [function(t, e, n) {
            function r() {
                return n.colors[u++ % n.colors.length]
            }

            function o(t) {
                function e() {}

                function o() {
                    var t = o,
                        e = +new Date,
                        i = e - (p || e);
                    t.diff = i, t.prev = p, t.curr = e, p = e, null == t.useColors && (t.useColors = n.useColors()), null == t.color && t.useColors && (t.color = r());
                    var s = Array.prototype.slice.call(arguments);
                    s[0] = n.coerce(s[0]), "string" != typeof s[0] && (s = ["%o"].concat(s));
                    var a = 0;
                    s[0] = s[0].replace(/%([a-z%])/g, function(e, r) {
                        if ("%%" === e) return e;
                        a++;
                        var o = n.formatters[r];
                        if ("function" == typeof o) {
                            var i = s[a];
                            e = o.call(t, i), s.splice(a, 1), a--
                        }
                        return e
                    }), "function" == typeof n.formatArgs && (s = n.formatArgs.apply(t, s));
                    var c = o.log || n.log || console.log.bind(console);
                    c.apply(t, s)
                }
                e.enabled = !1, o.enabled = !0;
                var i = n.enabled(t) ? o : e;
                return i.namespace = t, i
            }

            function i(t) {
                n.save(t);
                for (var e = (t || "").split(/[\s,]+/), r = e.length, o = 0; o < r; o++) e[o] && (t = e[o].replace(/\*/g, ".*?"), "-" === t[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")))
            }

            function s() {
                n.enable("")
            }

            function a(t) {
                var e, r;
                for (e = 0, r = n.skips.length; e < r; e++)
                    if (n.skips[e].test(t)) return !1;
                for (e = 0, r = n.names.length; e < r; e++)
                    if (n.names[e].test(t)) return !0;
                return !1
            }

            function c(t) {
                return t instanceof Error ? t.stack || t.message : t
            }
            n = e.exports = o, n.coerce = c, n.disable = s, n.enable = i, n.enabled = a, n.humanize = t("ms"), n.names = [], n.skips = [], n.formatters = {};
            var p, u = 0
        }, {
            ms: 25
        }],
        19: [function(t, e, n) {
            (function(e) {
                function r(t, e) {
                    var r = "b" + n.packets[t.type] + t.data.data;
                    return e(r)
                }

                function o(t, e, r) {
                    if (!e) return n.encodeBase64Packet(t, r);
                    var o = t.data,
                        i = new Uint8Array(o),
                        s = new Uint8Array(1 + o.byteLength);
                    s[0] = m[t.type];
                    for (var a = 0; a < i.length; a++) s[a + 1] = i[a];
                    return r(s.buffer)
                }

                function i(t, e, r) {
                    if (!e) return n.encodeBase64Packet(t, r);
                    var o = new FileReader;
                    return o.onload = function() {
                        t.data = o.result, n.encodePacket(t, e, !0, r)
                    }, o.readAsArrayBuffer(t.data)
                }

                function s(t, e, r) {
                    if (!e) return n.encodeBase64Packet(t, r);
                    if (g) return i(t, e, r);
                    var o = new Uint8Array(1);
                    o[0] = m[t.type];
                    var s = new w([o.buffer, t.data]);
                    return r(s)
                }

                function a(t, e, n) {
                    for (var r = new Array(t.length), o = h(t.length, n), i = function(t, n, o) {
                            e(n, function(e, n) {
                                r[t] = n, o(e, r)
                            })
                        }, s = 0; s < t.length; s++) i(s, t[s], o)
                }
                var c = t("./keys"),
                    p = t("has-binary"),
                    u = t("arraybuffer.slice"),
                    f = t("base64-arraybuffer"),
                    h = t("after"),
                    l = t("utf8"),
                    d = navigator.userAgent.match(/Android/i),
                    y = /PhantomJS/i.test(navigator.userAgent),
                    g = d || y;
                n.protocol = 3;
                var m = n.packets = {
                        open: 0,
                        close: 1,
                        ping: 2,
                        pong: 3,
                        message: 4,
                        upgrade: 5,
                        noop: 6
                    },
                    b = c(m),
                    v = {
                        type: "error",
                        data: "parser error"
                    },
                    w = t("blob");
                n.encodePacket = function(t, n, i, a) {
                    "function" == typeof n && (a = n, n = !1), "function" == typeof i && (a = i, i = null);
                    var c = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                    if (e.ArrayBuffer && c instanceof ArrayBuffer) return o(t, n, a);
                    if (w && c instanceof e.Blob) return s(t, n, a);
                    if (c && c.base64) return r(t, a);
                    var p = m[t.type];
                    return void 0 !== t.data && (p += i ? l.encode(String(t.data)) : String(t.data)), a("" + p)
                }, n.encodeBase64Packet = function(t, r) {
                    var o = "b" + n.packets[t.type];
                    if (w && t.data instanceof e.Blob) {
                        var i = new FileReader;
                        return i.onload = function() {
                            var t = i.result.split(",")[1];
                            r(o + t)
                        }, i.readAsDataURL(t.data)
                    }
                    var s;
                    try {
                        s = String.fromCharCode.apply(null, new Uint8Array(t.data))
                    } catch (e) {
                        for (var a = new Uint8Array(t.data), c = new Array(a.length), p = 0; p < a.length; p++) c[p] = a[p];
                        s = String.fromCharCode.apply(null, c)
                    }
                    return o += e.btoa(s), r(o)
                }, n.decodePacket = function(t, e, r) {
                    if ("string" == typeof t || void 0 === t) {
                        if ("b" == t.charAt(0)) return n.decodeBase64Packet(t.substr(1), e);
                        if (r) try {
                            t = l.decode(t)
                        } catch (t) {
                            return v
                        }
                        var o = t.charAt(0);
                        return Number(o) == o && b[o] ? t.length > 1 ? {
                            type: b[o],
                            data: t.substring(1)
                        } : {
                            type: b[o]
                        } : v
                    }
                    var i = new Uint8Array(t),
                        o = i[0],
                        s = u(t, 1);
                    return w && "blob" === e && (s = new w([s])), {
                        type: b[o],
                        data: s
                    }
                }, n.decodeBase64Packet = function(t, n) {
                    var r = b[t.charAt(0)];
                    if (!e.ArrayBuffer) return {
                        type: r,
                        data: {
                            base64: !0,
                            data: t.substr(1)
                        }
                    };
                    var o = f.decode(t.substr(1));
                    return "blob" === n && w && (o = new w([o])), {
                        type: r,
                        data: o
                    }
                }, n.encodePayload = function(t, e, r) {
                    function o(t) {
                        return t.length + ":" + t
                    }

                    function i(t, r) {
                        n.encodePacket(t, !!s && e, !0, function(t) {
                            r(null, o(t))
                        })
                    }
                    "function" == typeof e && (r = e, e = null);
                    var s = p(t);
                    return e && s ? w && !g ? n.encodePayloadAsBlob(t, r) : n.encodePayloadAsArrayBuffer(t, r) : t.length ? void a(t, i, function(t, e) {
                        return r(e.join(""))
                    }) : r("0:")
                }, n.decodePayload = function(t, e, r) {
                    if ("string" != typeof t) return n.decodePayloadAsBinary(t, e, r);
                    "function" == typeof e && (r = e, e = null);
                    var o;
                    if ("" == t) return r(v, 0, 1);
                    for (var i, s, a = "", c = 0, p = t.length; c < p; c++) {
                        var u = t.charAt(c);
                        if (":" != u) a += u;
                        else {
                            if ("" == a || a != (i = Number(a))) return r(v, 0, 1);
                            if (s = t.substr(c + 1, i), a != s.length) return r(v, 0, 1);
                            if (s.length) {
                                if (o = n.decodePacket(s, e, !0), v.type == o.type && v.data == o.data) return r(v, 0, 1);
                                var f = r(o, c + i, p);
                                if (!1 === f) return
                            }
                            c += i, a = ""
                        }
                    }
                    return "" != a ? r(v, 0, 1) : void 0
                }, n.encodePayloadAsArrayBuffer = function(t, e) {
                    function r(t, e) {
                        n.encodePacket(t, !0, !0, function(t) {
                            return e(null, t)
                        })
                    }
                    return t.length ? void a(t, r, function(t, n) {
                        var r = n.reduce(function(t, e) {
                                var n;
                                return n = "string" == typeof e ? e.length : e.byteLength, t + n.toString().length + n + 2
                            }, 0),
                            o = new Uint8Array(r),
                            i = 0;
                        return n.forEach(function(t) {
                            var e = "string" == typeof t,
                                n = t;
                            if (e) {
                                for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);
                                n = r.buffer
                            }
                            e ? o[i++] = 0 : o[i++] = 1;
                            for (var a = n.byteLength.toString(), s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
                            o[i++] = 255;
                            for (var r = new Uint8Array(n), s = 0; s < r.length; s++) o[i++] = r[s]
                        }), e(o.buffer)
                    }) : e(new ArrayBuffer(0))
                }, n.encodePayloadAsBlob = function(t, e) {
                    function r(t, e) {
                        n.encodePacket(t, !0, !0, function(t) {
                            var n = new Uint8Array(1);
                            if (n[0] = 1, "string" == typeof t) {
                                for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
                                t = r.buffer, n[0] = 0
                            }
                            for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++) a[o] = parseInt(s[o]);
                            if (a[s.length] = 255, w) {
                                var c = new w([n.buffer, a.buffer, t]);
                                e(null, c)
                            }
                        })
                    }
                    a(t, r, function(t, n) {
                        return e(new w(n))
                    })
                }, n.decodePayloadAsBinary = function(t, e, r) {
                    "function" == typeof e && (r = e, e = null);
                    for (var o = t, i = [], s = !1; o.byteLength > 0;) {
                        for (var a = new Uint8Array(o), c = 0 === a[0], p = "", f = 1; 255 != a[f]; f++) {
                            if (p.length > 310) {
                                s = !0;
                                break
                            }
                            p += a[f]
                        }
                        if (s) return r(v, 0, 1);
                        o = u(o, 2 + p.length), p = parseInt(p);
                        var h = u(o, 0, p);
                        if (c) try {
                            h = String.fromCharCode.apply(null, new Uint8Array(h))
                        } catch (t) {
                            var l = new Uint8Array(h);
                            h = "";
                            for (var f = 0; f < l.length; f++) h += String.fromCharCode(l[f])
                        }
                        i.push(h), o = u(o, p)
                    }
                    var d = i.length;
                    i.forEach(function(t, o) {
                        r(n.decodePacket(t, e, !0), o, d)
                    })
                }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {
            "./keys": 20,
            after: 11,
            "arraybuffer.slice": 12,
            "base64-arraybuffer": 13,
            blob: 14,
            "has-binary": 21,
            utf8: 29
        }],
        20: [function(t, e, n) {
            e.exports = Object.keys || function(t) {
                var e = [],
                    n = Object.prototype.hasOwnProperty;
                for (var r in t) n.call(t, r) && e.push(r);
                return e
            }
        }, {}],
        21: [function(t, e, n) {
            (function(n) {
                function r(t) {
                    function e(t) {
                        if (!t) return !1;
                        if (n.Buffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File) return !0;
                        if (o(t)) {
                            for (var r = 0; r < t.length; r++)
                                if (e(t[r])) return !0
                        } else if (t && "object" == typeof t) {
                            t.toJSON && (t = t.toJSON());
                            for (var i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i) && e(t[i])) return !0
                        }
                        return !1
                    }
                    return e(t)
                }
                var o = t("isarray");
                e.exports = r
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {
            isarray: 24
        }],
        22: [function(t, e, n) {
            try {
                e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
            } catch (t) {
                e.exports = !1
            }
        }, {}],
        23: [function(t, e, n) {
            var r = [].indexOf;
            e.exports = function(t, e) {
                if (r) return t.indexOf(e);
                for (var n = 0; n < t.length; ++n)
                    if (t[n] === e) return n;
                return -1
            }
        }, {}],
        24: [function(t, e, n) {
            e.exports = Array.isArray || function(t) {
                return "[object Array]" == Object.prototype.toString.call(t)
            }
        }, {}],
        25: [function(t, e, n) {
            function r(t) {
                if (t = "" + t, !(t.length > 1e4)) {
                    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                    if (e) {
                        var n = parseFloat(e[1]),
                            r = (e[2] || "ms").toLowerCase();
                        switch (r) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return n * f;
                            case "days":
                            case "day":
                            case "d":
                                return n * u;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return n * p;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return n * c;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return n * a;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return n
                        }
                    }
                }
            }

            function o(t) {
                return t >= u ? Math.round(t / u) + "d" : t >= p ? Math.round(t / p) + "h" : t >= c ? Math.round(t / c) + "m" : t >= a ? Math.round(t / a) + "s" : t + "ms"
            }

            function i(t) {
                return s(t, u, "day") || s(t, p, "hour") || s(t, c, "minute") || s(t, a, "second") || t + " ms"
            }

            function s(t, e, n) {
                if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
            }
            var a = 1e3,
                c = 60 * a,
                p = 60 * c,
                u = 24 * p,
                f = 365.25 * u;
            e.exports = function(t, e) {
                return e = e || {}, "string" == typeof t ? r(t) : e.long ? i(t) : o(t)
            }
        }, {}],
        26: [function(t, e, n) {
            (function(t) {
                var n = /^[\],:{}\s]*$/,
                    r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    i = /(?:^|:|,)(?:\s*\[)+/g,
                    s = /^\s+/,
                    a = /\s+$/;
                e.exports = function(e) {
                    return "string" == typeof e && e ? (e = e.replace(s, "").replace(a, ""), t.JSON && JSON.parse ? JSON.parse(e) : n.test(e.replace(r, "@").replace(o, "]").replace(i, "")) ? new Function("return " + e)() : void 0) : null
                }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {}],
        27: [function(t, e, n) {
            n.encode = function(t) {
                var e = "";
                for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                return e
            }, n.decode = function(t) {
                for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
                    var i = n[r].split("=");
                    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                }
                return e
            }
        }, {}],
        28: [function(t, e, n) {
            var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            e.exports = function(t) {
                var e = t,
                    n = t.indexOf("["),
                    i = t.indexOf("]");
                n != -1 && i != -1 && (t = t.substring(0, n) + t.substring(n, i).replace(/:/g, ";") + t.substring(i, t.length));
                for (var s = r.exec(t || ""), a = {}, c = 14; c--;) a[o[c]] = s[c] || "";
                return n != -1 && i != -1 && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
            }
        }, {}],
        29: [function(e, n, r) {
            (function(e) {
                ! function(o) {
                    function i(t) {
                        for (var e, n, r = [], o = 0, i = t.length; o < i;) e = t.charCodeAt(o++), e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e);
                        return r
                    }

                    function s(t) {
                        for (var e, n = t.length, r = -1, o = ""; ++r < n;) e = t[r], e > 65535 && (e -= 65536, o += w(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += w(e);
                        return o
                    }

                    function a(t) {
                        if (t >= 55296 && t <= 57343) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value")
                    }

                    function c(t, e) {
                        return w(t >> e & 63 | 128)
                    }

                    function p(t) {
                        if (0 == (4294967168 & t)) return w(t);
                        var e = "";
                        return 0 == (4294965248 & t) ? e = w(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (a(t), e = w(t >> 12 & 15 | 224), e += c(t, 6)) : 0 == (4292870144 & t) && (e = w(t >> 18 & 7 | 240), e += c(t, 12), e += c(t, 6)), e += w(63 & t | 128)
                    }

                    function u(t) {
                        for (var e, n = i(t), r = n.length, o = -1, s = ""; ++o < r;) e = n[o], s += p(e);
                        return s
                    }

                    function f() {
                        if (v >= b) throw Error("Invalid byte index");
                        var t = 255 & m[v];
                        if (v++, 128 == (192 & t)) return 63 & t;
                        throw Error("Invalid continuation byte")
                    }

                    function h() {
                        var t, e, n, r, o;
                        if (v > b) throw Error("Invalid byte index");
                        if (v == b) return !1;
                        if (t = 255 & m[v], v++, 0 == (128 & t)) return t;
                        if (192 == (224 & t)) {
                            var e = f();
                            if (o = (31 & t) << 6 | e, o >= 128) return o;
                            throw Error("Invalid continuation byte")
                        }
                        if (224 == (240 & t)) {
                            if (e = f(), n = f(), o = (15 & t) << 12 | e << 6 | n, o >= 2048) return a(o), o;
                            throw Error("Invalid continuation byte")
                        }
                        if (240 == (248 & t) && (e = f(), n = f(), r = f(), o = (15 & t) << 18 | e << 12 | n << 6 | r, o >= 65536 && o <= 1114111)) return o;
                        throw Error("Invalid UTF-8 detected")
                    }

                    function l(t) {
                        m = i(t), b = m.length, v = 0;
                        for (var e, n = [];
                            (e = h()) !== !1;) n.push(e);
                        return s(n)
                    }
                    var d = "object" == typeof r && r,
                        y = "object" == typeof n && n && n.exports == d && n,
                        g = "object" == typeof e && e;
                    g.global !== g && g.window !== g || (o = g);
                    var m, b, v, w = String.fromCharCode,
                        k = {
                            version: "2.0.0",
                            encode: u,
                            decode: l
                        };
                    if ("function" == typeof t && "object" == typeof t.amd && t.amd) t(function() {
                        return k
                    });
                    else if (d && !d.nodeType)
                        if (y) y.exports = k;
                        else {
                            var x = {},
                                A = x.hasOwnProperty;
                            for (var B in k) A.call(k, B) && (d[B] = k[B])
                        }
                    else o.utf8 = k
                }(this)
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {}],
        30: [function(t, e, n) {
            "use strict";

            function r(t) {
                var e = "";
                do e = a[t % c] + e, t = Math.floor(t / c); while (t > 0);
                return e
            }

            function o(t) {
                var e = 0;
                for (f = 0; f < t.length; f++) e = e * c + p[t.charAt(f)];
                return e
            }

            function i() {
                var t = r(+new Date);
                return t !== s ? (u = 0, s = t) : t + "." + r(u++)
            }
            for (var s, a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), c = 64, p = {}, u = 0, f = 0; f < c; f++) p[a[f]] = f;
            i.encode = r, i.decode = o, e.exports = i
        }, {}],
        31: [function(t, e, n) {
            function r(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, r = o(t),
                    i = r.source,
                    p = r.id,
                    u = r.path,
                    f = c[p] && u in c[p].nsps,
                    h = e.forceNew || e["force new connection"] || !1 === e.multiplex || f;
                return h ? (a("ignoring socket cache for %s", i), n = s(i, e)) : (c[p] || (a("new io instance for %s", i), c[p] = s(i, e)), n = c[p]), n.socket(r.path)
            }
            var o = t("./url"),
                i = t("socket.io-parser"),
                s = t("./manager"),
                a = t("debug")("socket.io-client");
            e.exports = n = r;
            var c = n.managers = {};
            n.protocol = i.protocol, n.connect = r, n.Manager = t("./manager"), n.Socket = t("./socket")
        }, {
            "./manager": 32,
            "./socket": 34,
            "./url": 35,
            debug: 39,
            "socket.io-parser": 47
        }],
        32: [function(t, e, n) {
            function r(t, e) {
                return this instanceof r ? (t && "object" == typeof t && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new h({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new a.Encoder, this.decoder = new a.Decoder, this.autoConnect = e.autoConnect !== !1, void(this.autoConnect && this.open())) : new r(t, e)
            }
            var o = t("engine.io-client"),
                i = t("./socket"),
                s = t("component-emitter"),
                a = t("socket.io-parser"),
                c = t("./on"),
                p = t("component-bind"),
                u = t("debug")("socket.io-client:manager"),
                f = t("indexof"),
                h = t("backo2"),
                l = Object.prototype.hasOwnProperty;
            e.exports = r, r.prototype.emitAll = function() {
                this.emit.apply(this, arguments);
                for (var t in this.nsps) l.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
            }, r.prototype.updateSocketIds = function() {
                for (var t in this.nsps) l.call(this.nsps, t) && (this.nsps[t].id = this.engine.id)
            }, s(r.prototype), r.prototype.reconnection = function(t) {
                return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
            }, r.prototype.reconnectionAttempts = function(t) {
                return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
            }, r.prototype.reconnectionDelay = function(t) {
                return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
            }, r.prototype.randomizationFactor = function(t) {
                return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
            }, r.prototype.reconnectionDelayMax = function(t) {
                return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
            }, r.prototype.timeout = function(t) {
                return arguments.length ? (this._timeout = t, this) : this._timeout
            }, r.prototype.maybeReconnectOnOpen = function() {
                !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
            }, r.prototype.open = r.prototype.connect = function(t) {
                if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                u("opening %s", this.uri), this.engine = o(this.uri, this.opts);
                var e = this.engine,
                    n = this;
                this.readyState = "opening", this.skipReconnect = !1;
                var r = c(e, "open", function() {
                        n.onopen(), t && t()
                    }),
                    i = c(e, "error", function(e) {
                        if (u("connect_error"), n.cleanup(), n.readyState = "closed", n.emitAll("connect_error", e), t) {
                            var r = new Error("Connection error");
                            r.data = e, t(r)
                        } else n.maybeReconnectOnOpen()
                    });
                if (!1 !== this._timeout) {
                    var s = this._timeout;
                    u("connect attempt will timeout after %d", s);
                    var a = setTimeout(function() {
                        u("connect attempt timed out after %d", s), r.destroy(), e.close(), e.emit("error", "timeout"), n.emitAll("connect_timeout", s)
                    }, s);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(a)
                        }
                    })
                }
                return this.subs.push(r), this.subs.push(i), this
            }, r.prototype.onopen = function() {
                u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                var t = this.engine;
                this.subs.push(c(t, "data", p(this, "ondata"))), this.subs.push(c(t, "ping", p(this, "onping"))), this.subs.push(c(t, "pong", p(this, "onpong"))), this.subs.push(c(t, "error", p(this, "onerror"))), this.subs.push(c(t, "close", p(this, "onclose"))), this.subs.push(c(this.decoder, "decoded", p(this, "ondecoded")))
            }, r.prototype.onping = function() {
                this.lastPing = new Date, this.emitAll("ping")
            }, r.prototype.onpong = function() {
                this.emitAll("pong", new Date - this.lastPing)
            }, r.prototype.ondata = function(t) {
                this.decoder.add(t)
            }, r.prototype.ondecoded = function(t) {
                this.emit("packet", t)
            }, r.prototype.onerror = function(t) {
                u("error", t), this.emitAll("error", t)
            }, r.prototype.socket = function(t) {
                function e() {
                    ~f(r.connecting, n) || r.connecting.push(n)
                }
                var n = this.nsps[t];
                if (!n) {
                    n = new i(this, t), this.nsps[t] = n;
                    var r = this;
                    n.on("connecting", e), n.on("connect", function() {
                        n.id = r.engine.id
                    }), this.autoConnect && e()
                }
                return n
            }, r.prototype.destroy = function(t) {
                var e = f(this.connecting, t);
                ~e && this.connecting.splice(e, 1), this.connecting.length || this.close()
            }, r.prototype.packet = function(t) {
                u("writing packet %j", t);
                var e = this;
                e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function(n) {
                    for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
                    e.encoding = !1, e.processPacketQueue()
                }))
            }, r.prototype.processPacketQueue = function() {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var t = this.packetBuffer.shift();
                    this.packet(t)
                }
            }, r.prototype.cleanup = function() {
                u("cleanup");
                for (var t; t = this.subs.shift();) t.destroy();
                this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
            }, r.prototype.close = r.prototype.disconnect = function() {
                u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" == this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
            }, r.prototype.onclose = function(t) {
                u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
            }, r.prototype.reconnect = function() {
                if (this.reconnecting || this.skipReconnect) return this;
                var t = this;
                if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
                else {
                    var e = this.backoff.duration();
                    u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
                    var n = setTimeout(function() {
                        t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function(e) {
                            e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect())
                        }))
                    }, e);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(n)
                        }
                    })
                }
            }, r.prototype.onreconnect = function() {
                var t = this.backoff.attempts;
                this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t)
            }
        }, {
            "./on": 33,
            "./socket": 34,
            backo2: 36,
            "component-bind": 37,
            "component-emitter": 38,
            debug: 39,
            "engine.io-client": 1,
            indexof: 42,
            "socket.io-parser": 47
        }],
        33: [function(t, e, n) {
            function r(t, e, n) {
                return t.on(e, n), {
                    destroy: function() {
                        t.removeListener(e, n)
                    }
                }
            }
            e.exports = r
        }, {}],
        34: [function(t, e, n) {
            function r(t, e) {
                this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.io.autoConnect && this.open()
            }
            var o = t("socket.io-parser"),
                i = t("component-emitter"),
                s = t("to-array"),
                a = t("./on"),
                c = t("component-bind"),
                p = t("debug")("socket.io-client:socket"),
                u = t("has-binary");
            e.exports = n = r;
            var f = {
                    connect: 1,
                    connect_error: 1,
                    connect_timeout: 1,
                    connecting: 1,
                    disconnect: 1,
                    error: 1,
                    reconnect: 1,
                    reconnect_attempt: 1,
                    reconnect_failed: 1,
                    reconnect_error: 1,
                    reconnecting: 1,
                    ping: 1,
                    pong: 1
                },
                h = i.prototype.emit;
            i(r.prototype), r.prototype.subEvents = function() {
                if (!this.subs) {
                    var t = this.io;
                    this.subs = [a(t, "open", c(this, "onopen")), a(t, "packet", c(this, "onpacket")), a(t, "close", c(this, "onclose"))]
                }
            }, r.prototype.open = r.prototype.connect = function() {
                return this.connected ? this : (this.subEvents(), this.io.open(), "open" == this.io.readyState && this.onopen(), this.emit("connecting"), this)
            }, r.prototype.send = function() {
                var t = s(arguments);
                return t.unshift("message"), this.emit.apply(this, t), this
            }, r.prototype.emit = function(t) {
                if (f.hasOwnProperty(t)) return h.apply(this, arguments), this;
                var e = s(arguments),
                    n = o.EVENT;
                u(e) && (n = o.BINARY_EVENT);
                var r = {
                    type: n,
                    data: e
                };
                return r.options = {}, r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (p("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), delete this.flags, this
            }, r.prototype.packet = function(t) {
                t.nsp = this.nsp, this.io.packet(t)
            }, r.prototype.onopen = function() {
                p("transport is open - connecting"), "/" != this.nsp && this.packet({
                    type: o.CONNECT
                })
            }, r.prototype.onclose = function(t) {
                p("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t)
            }, r.prototype.onpacket = function(t) {
                if (t.nsp == this.nsp) switch (t.type) {
                    case o.CONNECT:
                        this.onconnect();
                        break;
                    case o.EVENT:
                        this.onevent(t);
                        break;
                    case o.BINARY_EVENT:
                        this.onevent(t);
                        break;
                    case o.ACK:
                        this.onack(t);
                        break;
                    case o.BINARY_ACK:
                        this.onack(t);
                        break;
                    case o.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case o.ERROR:
                        this.emit("error", t.data)
                }
            }, r.prototype.onevent = function(t) {
                var e = t.data || [];
                p("emitting event %j", e), null != t.id && (p("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? h.apply(this, e) : this.receiveBuffer.push(e)
            }, r.prototype.ack = function(t) {
                var e = this,
                    n = !1;
                return function() {
                    if (!n) {
                        n = !0;
                        var r = s(arguments);
                        p("sending ack %j", r);
                        var i = u(r) ? o.BINARY_ACK : o.ACK;
                        e.packet({
                            type: i,
                            id: t,
                            data: r
                        })
                    }
                }
            }, r.prototype.onack = function(t) {
                var e = this.acks[t.id];
                "function" == typeof e ? (p("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : p("bad ack %s", t.id)
            }, r.prototype.onconnect = function() {
                this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
            }, r.prototype.emitBuffered = function() {
                var t;
                for (t = 0; t < this.receiveBuffer.length; t++) h.apply(this, this.receiveBuffer[t]);
                for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
                this.sendBuffer = []
            }, r.prototype.ondisconnect = function() {
                p("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
            }, r.prototype.destroy = function() {
                if (this.subs) {
                    for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
                    this.subs = null
                }
                this.io.destroy(this)
            }, r.prototype.close = r.prototype.disconnect = function() {
                return this.connected && (p("performing disconnect (%s)", this.nsp), this.packet({
                    type: o.DISCONNECT
                })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
            }, r.prototype.compress = function(t) {
                return this.flags = this.flags || {}, this.flags.compress = t, this
            }
        }, {
            "./on": 33,
            "component-bind": 37,
            "component-emitter": 38,
            debug: 39,
            "has-binary": 41,
            "socket.io-parser": 47,
            "to-array": 51
        }],
        35: [function(t, e, n) {
            (function(n) {
                function r(t, e) {
                    var r = t,
                        e = e || n.location;
                    null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" == t.charAt(0) && (t = "/" == t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t), t = "undefined" != typeof e ? e.protocol + "//" + t : "https://" + t), i("parse %s", t), r = o(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
                    var s = r.host.indexOf(":") !== -1,
                        a = s ? "[" + r.host + "]" : r.host;
                    return r.id = r.protocol + "://" + a + ":" + r.port, r.href = r.protocol + "://" + a + (e && e.port == r.port ? "" : ":" + r.port), r
                }
                var o = t("parseuri"),
                    i = t("debug")("socket.io-client:url");
                e.exports = r
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {
            debug: 39,
            parseuri: 45
        }],
        36: [function(t, e, n) {
            function r(t) {
                t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
            }
            e.exports = r, r.prototype.duration = function() {
                var t = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var e = Math.random(),
                        n = Math.floor(e * this.jitter * t);
                    t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
                }
                return 0 | Math.min(t, this.max)
            }, r.prototype.reset = function() {
                this.attempts = 0
            }, r.prototype.setMin = function(t) {
                this.ms = t
            }, r.prototype.setMax = function(t) {
                this.max = t
            }, r.prototype.setJitter = function(t) {
                this.jitter = t
            }
        }, {}],
        37: [function(t, e, n) {
            var r = [].slice;
            e.exports = function(t, e) {
                if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
                var n = r.call(arguments, 2);
                return function() {
                    return e.apply(t, n.concat(r.call(arguments)))
                }
            }
        }, {}],
        38: [function(t, e, n) {
            function r(t) {
                if (t) return o(t)
            }

            function o(t) {
                for (var e in r.prototype) t[e] = r.prototype[e];
                return t
            }
            e.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
            }, r.prototype.once = function(t, e) {
                function n() {
                    this.off(t, n), e.apply(this, arguments)
                }
                return n.fn = e, this.on(t, n), this
            }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n = this._callbacks["$" + t];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                for (var r, o = 0; o < n.length; o++)
                    if (r = n[o], r === e || r.fn === e) {
                        n.splice(o, 1);
                        break
                    }
                return this
            }, r.prototype.emit = function(t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    n = this._callbacks["$" + t];
                if (n) {
                    n = n.slice(0);
                    for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, e)
                }
                return this
            }, r.prototype.listeners = function(t) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
            }, r.prototype.hasListeners = function(t) {
                return !!this.listeners(t).length
            }
        }, {}],
        39: [function(t, e, n) {
            arguments[4][17][0].apply(n, arguments)
        }, {
            "./debug": 40,
            dup: 17
        }],
        40: [function(t, e, n) {
            arguments[4][18][0].apply(n, arguments)
        }, {
            dup: 18,
            ms: 44
        }],
        41: [function(t, e, n) {
            (function(n) {
                function r(t) {
                    function e(t) {
                        if (!t) return !1;
                        if (n.Buffer && n.Buffer.isBuffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File) return !0;
                        if (o(t)) {
                            for (var r = 0; r < t.length; r++)
                                if (e(t[r])) return !0
                        } else if (t && "object" == typeof t) {
                            t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());
                            for (var i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i) && e(t[i])) return !0
                        }
                        return !1
                    }
                    return e(t)
                }
                var o = t("isarray");
                e.exports = r
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {
            isarray: 43
        }],
        42: [function(t, e, n) {
            arguments[4][23][0].apply(n, arguments)
        }, {
            dup: 23
        }],
        43: [function(t, e, n) {
            arguments[4][24][0].apply(n, arguments)
        }, {
            dup: 24
        }],
        44: [function(t, e, n) {
            arguments[4][25][0].apply(n, arguments)
        }, {
            dup: 25
        }],
        45: [function(t, e, n) {
            arguments[4][28][0].apply(n, arguments)
        }, {
            dup: 28
        }],
        46: [function(t, e, n) {
            (function(e) {
                var r = t("isarray"),
                    o = t("./is-buffer");
                n.deconstructPacket = function(t) {
                    function e(t) {
                        if (!t) return t;
                        if (o(t)) {
                            var i = {
                                _placeholder: !0,
                                num: n.length
                            };
                            return n.push(t), i
                        }
                        if (r(t)) {
                            for (var s = new Array(t.length), a = 0; a < t.length; a++) s[a] = e(t[a]);
                            return s
                        }
                        if ("object" == typeof t && !(t instanceof Date)) {
                            var s = {};
                            for (var c in t) s[c] = e(t[c]);
                            return s
                        }
                        return t
                    }
                    var n = [],
                        i = t.data,
                        s = t;
                    return s.data = e(i), s.attachments = n.length, {
                        packet: s,
                        buffers: n
                    }
                }, n.reconstructPacket = function(t, e) {
                    function n(t) {
                        if (t && t._placeholder) {
                            var o = e[t.num];
                            return o
                        }
                        if (r(t)) {
                            for (var i = 0; i < t.length; i++) t[i] = n(t[i]);
                            return t
                        }
                        if (t && "object" == typeof t) {
                            for (var s in t) t[s] = n(t[s]);
                            return t
                        }
                        return t
                    }
                    return t.data = n(t.data), t.attachments = void 0, t
                }, n.removeBlobs = function(t, n) {
                    function i(t, c, p) {
                        if (!t) return t;
                        if (e.Blob && t instanceof Blob || e.File && t instanceof File) {
                            s++;
                            var u = new FileReader;
                            u.onload = function() {
                                p ? p[c] = this.result : a = this.result, --s || n(a)
                            }, u.readAsArrayBuffer(t)
                        } else if (r(t))
                            for (var f = 0; f < t.length; f++) i(t[f], f, t);
                        else if (t && "object" == typeof t && !o(t))
                            for (var h in t) i(t[h], h, t)
                    }
                    var s = 0,
                        a = t;
                    i(a), s || n(a)
                }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {
            "./is-buffer": 48,
            isarray: 43
        }],
        47: [function(t, e, n) {
            function r() {}

            function o(t) {
                var e = "",
                    r = !1;
                return e += t.type, n.BINARY_EVENT != t.type && n.BINARY_ACK != t.type || (e += t.attachments, e += "-"), t.nsp && "/" != t.nsp && (r = !0, e += t.nsp), null != t.id && (r && (e += ",", r = !1), e += t.id), null != t.data && (r && (e += ","), e += f.stringify(t.data)), u("encoded %j as %s", t, e), e
            }

            function i(t, e) {
                function n(t) {
                    var n = l.deconstructPacket(t),
                        r = o(n.packet),
                        i = n.buffers;
                    i.unshift(r), e(i)
                }
                l.removeBlobs(t, n)
            }

            function s() {
                this.reconstructor = null
            }

            function a(t) {
                var e = {},
                    r = 0;
                if (e.type = Number(t.charAt(0)), null == n.types[e.type]) return p();
                if (n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type) {
                    for (var o = "";
                        "-" != t.charAt(++r) && (o += t.charAt(r), r != t.length););
                    if (o != Number(o) || "-" != t.charAt(r)) throw new Error("Illegal attachments");
                    e.attachments = Number(o)
                }
                if ("/" == t.charAt(r + 1))
                    for (e.nsp = ""; ++r;) {
                        var i = t.charAt(r);
                        if ("," == i) break;
                        if (e.nsp += i, r == t.length) break
                    } else e.nsp = "/";
                var s = t.charAt(r + 1);
                if ("" !== s && Number(s) == s) {
                    for (e.id = ""; ++r;) {
                        var i = t.charAt(r);
                        if (null == i || Number(i) != i) {
                            --r;
                            break
                        }
                        if (e.id += t.charAt(r), r == t.length) break
                    }
                    e.id = Number(e.id)
                }
                if (t.charAt(++r)) try {
                    e.data = f.parse(t.substr(r))
                } catch (t) {
                    return p()
                }
                return u("decoded %s as %j", t, e), e
            }

            function c(t) {
                this.reconPack = t, this.buffers = []
            }

            function p(t) {
                return {
                    type: n.ERROR,
                    data: "parser error"
                }
            }
            var u = t("debug")("socket.io-parser"),
                f = t("json3"),
                h = (t("isarray"), t("component-emitter")),
                l = t("./binary"),
                d = t("./is-buffer");
            n.protocol = 4, n.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"], n.CONNECT = 0, n.DISCONNECT = 1, n.EVENT = 2, n.ACK = 3, n.ERROR = 4, n.BINARY_EVENT = 5, n.BINARY_ACK = 6, n.Encoder = r, n.Decoder = s, r.prototype.encode = function(t, e) {
                if (u("encoding packet %j", t), n.BINARY_EVENT == t.type || n.BINARY_ACK == t.type) i(t, e);
                else {
                    var r = o(t);
                    e([r])
                }
            }, h(s.prototype), s.prototype.add = function(t) {
                var e;
                if ("string" == typeof t) e = a(t), n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type ? (this.reconstructor = new c(e), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", e)) : this.emit("decoded", e);
                else {
                    if (!d(t) && !t.base64) throw new Error("Unknown type: " + t);
                    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                    e = this.reconstructor.takeBinaryData(t), e && (this.reconstructor = null, this.emit("decoded", e))
                }
            }, s.prototype.destroy = function() {
                this.reconstructor && this.reconstructor.finishedReconstruction()
            }, c.prototype.takeBinaryData = function(t) {
                if (this.buffers.push(t), this.buffers.length == this.reconPack.attachments) {
                    var e = l.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(), e
                }
                return null
            }, c.prototype.finishedReconstruction = function() {
                this.reconPack = null, this.buffers = []
            }
        }, {
            "./binary": 46,
            "./is-buffer": 48,
            "component-emitter": 49,
            debug: 39,
            isarray: 43,
            json3: 50
        }],
        48: [function(t, e, n) {
            (function(t) {
                function n(e) {
                    return t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer
                }
                e.exports = n
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {}],
        49: [function(t, e, n) {
            arguments[4][15][0].apply(n, arguments)
        }, {
            dup: 15
        }],
        50: [function(e, n, r) {
            (function(e) {
                (function() {
                    function o(t, e) {
                        function n(t) {
                            if (n[t] !== g) return n[t];
                            var o;
                            if ("bug-string-char-index" == t) o = "a" != "a" [0];
                            else if ("json" == t) o = n("json-stringify") && n("json-parse");
                            else {
                                var s, a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                if ("json-stringify" == t) {
                                    var c = e.stringify,
                                        u = "function" == typeof c && v;
                                    if (u) {
                                        (s = function() {
                                            return 1
                                        }).toJSON = s;
                                        try {
                                            u = "0" === c(0) && "0" === c(new r) && '""' == c(new i) && c(b) === g && c(g) === g && c() === g && "1" === c(s) && "[1]" == c([s]) && "[null]" == c([g]) && "null" == c(null) && "[null,null,null]" == c([g, b, null]) && c({
                                                a: [s, !0, !1, null, "\0\b\n\f\r\t"]
                                            }) == a && "1" === c(null, s) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new p((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == c(new p(864e13)) && '"-000001-01-01T00:00:00.000Z"' == c(new p((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == c(new p((-1)))
                                        } catch (t) {
                                            u = !1
                                        }
                                    }
                                    o = u
                                }
                                if ("json-parse" == t) {
                                    var f = e.parse;
                                    if ("function" == typeof f) try {
                                        if (0 === f("0") && !f(!1)) {
                                            s = f(a);
                                            var h = 5 == s.a.length && 1 === s.a[0];
                                            if (h) {
                                                try {
                                                    h = !f('"\t"')
                                                } catch (t) {}
                                                if (h) try {
                                                    h = 1 !== f("01")
                                                } catch (t) {}
                                                if (h) try {
                                                    h = 1 !== f("1.")
                                                } catch (t) {}
                                            }
                                        }
                                    } catch (t) {
                                        h = !1
                                    }
                                    o = h
                                }
                            }
                            return n[t] = !!o
                        }
                        t || (t = c.Object()), e || (e = c.Object());
                        var r = t.Number || c.Number,
                            i = t.String || c.String,
                            a = t.Object || c.Object,
                            p = t.Date || c.Date,
                            u = t.SyntaxError || c.SyntaxError,
                            f = t.TypeError || c.TypeError,
                            h = t.Math || c.Math,
                            l = t.JSON || c.JSON;
                        "object" == typeof l && l && (e.stringify = l.stringify, e.parse = l.parse);
                        var d, y, g, m = a.prototype,
                            b = m.toString,
                            v = new p((-0xc782b5b800cec));
                        try {
                            v = v.getUTCFullYear() == -109252 && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 == v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v.getUTCMilliseconds()
                        } catch (t) {}
                        if (!n("json")) {
                            var w = "[object Function]",
                                k = "[object Date]",
                                x = "[object Number]",
                                A = "[object String]",
                                B = "[object Array]",
                                C = "[object Boolean]",
                                S = n("bug-string-char-index");
                            if (!v) var E = h.floor,
                                _ = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                T = function(t, e) {
                                    return _[e] + 365 * (t - 1970) + E((t - 1969 + (e = +(e > 1))) / 4) - E((t - 1901 + e) / 100) + E((t - 1601 + e) / 400)
                                };
                            if ((d = m.hasOwnProperty) || (d = function(t) {
                                    var e, n = {};
                                    return (n.__proto__ = null, n.__proto__ = {
                                        toString: 1
                                    }, n).toString != b ? d = function(t) {
                                        var e = this.__proto__,
                                            n = t in (this.__proto__ = null, this);
                                        return this.__proto__ = e, n
                                    } : (e = n.constructor, d = function(t) {
                                        var n = (this.constructor || e).prototype;
                                        return t in this && !(t in n && this[t] === n[t])
                                    }), n = null, d.call(this, t)
                                }), y = function(t, e) {
                                    var n, r, o, i = 0;
                                    (n = function() {
                                        this.valueOf = 0;
                                    }).prototype.valueOf = 0, r = new n;
                                    for (o in r) d.call(r, o) && i++;
                                    return n = r = null, i ? y = 2 == i ? function(t, e) {
                                        var n, r = {},
                                            o = b.call(t) == w;
                                        for (n in t) o && "prototype" == n || d.call(r, n) || !(r[n] = 1) || !d.call(t, n) || e(n)
                                    } : function(t, e) {
                                        var n, r, o = b.call(t) == w;
                                        for (n in t) o && "prototype" == n || !d.call(t, n) || (r = "constructor" === n) || e(n);
                                        (r || d.call(t, n = "constructor")) && e(n)
                                    } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], y = function(t, e) {
                                        var n, o, i = b.call(t) == w,
                                            a = !i && "function" != typeof t.constructor && s[typeof t.hasOwnProperty] && t.hasOwnProperty || d;
                                        for (n in t) i && "prototype" == n || !a.call(t, n) || e(n);
                                        for (o = r.length; n = r[--o]; a.call(t, n) && e(n));
                                    }), y(t, e)
                                }, !n("json-stringify")) {
                                var O = {
                                        92: "\\\\",
                                        34: '\\"',
                                        8: "\\b",
                                        12: "\\f",
                                        10: "\\n",
                                        13: "\\r",
                                        9: "\\t"
                                    },
                                    j = "000000",
                                    P = function(t, e) {
                                        return (j + (e || 0)).slice(-t)
                                    },
                                    N = "\\u00",
                                    R = function(t) {
                                        for (var e = '"', n = 0, r = t.length, o = !S || r > 10, i = o && (S ? t.split("") : t); n < r; n++) {
                                            var s = t.charCodeAt(n);
                                            switch (s) {
                                                case 8:
                                                case 9:
                                                case 10:
                                                case 12:
                                                case 13:
                                                case 34:
                                                case 92:
                                                    e += O[s];
                                                    break;
                                                default:
                                                    if (s < 32) {
                                                        e += N + P(2, s.toString(16));
                                                        break
                                                    }
                                                    e += o ? i[n] : t.charAt(n)
                                            }
                                        }
                                        return e + '"'
                                    },
                                    D = function(t, e, n, r, o, i, s) {
                                        var a, c, p, u, h, l, m, v, w, S, _, O, j, N, U, q;
                                        try {
                                            a = e[t]
                                        } catch (t) {}
                                        if ("object" == typeof a && a)
                                            if (c = b.call(a), c != k || d.call(a, "toJSON")) "function" == typeof a.toJSON && (c != x && c != A && c != B || d.call(a, "toJSON")) && (a = a.toJSON(t));
                                            else if (a > -1 / 0 && a < 1 / 0) {
                                            if (T) {
                                                for (h = E(a / 864e5), p = E(h / 365.2425) + 1970 - 1; T(p + 1, 0) <= h; p++);
                                                for (u = E((h - T(p, 0)) / 30.42); T(p, u + 1) <= h; u++);
                                                h = 1 + h - T(p, u), l = (a % 864e5 + 864e5) % 864e5, m = E(l / 36e5) % 24, v = E(l / 6e4) % 60, w = E(l / 1e3) % 60, S = l % 1e3
                                            } else p = a.getUTCFullYear(), u = a.getUTCMonth(), h = a.getUTCDate(), m = a.getUTCHours(), v = a.getUTCMinutes(), w = a.getUTCSeconds(), S = a.getUTCMilliseconds();
                                            a = (p <= 0 || p >= 1e4 ? (p < 0 ? "-" : "+") + P(6, p < 0 ? -p : p) : P(4, p)) + "-" + P(2, u + 1) + "-" + P(2, h) + "T" + P(2, m) + ":" + P(2, v) + ":" + P(2, w) + "." + P(3, S) + "Z"
                                        } else a = null;
                                        if (n && (a = n.call(e, t, a)), null === a) return "null";
                                        if (c = b.call(a), c == C) return "" + a;
                                        if (c == x) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                                        if (c == A) return R("" + a);
                                        if ("object" == typeof a) {
                                            for (N = s.length; N--;)
                                                if (s[N] === a) throw f();
                                            if (s.push(a), _ = [], U = i, i += o, c == B) {
                                                for (j = 0, N = a.length; j < N; j++) O = D(j, a, n, r, o, i, s), _.push(O === g ? "null" : O);
                                                q = _.length ? o ? "[\n" + i + _.join(",\n" + i) + "\n" + U + "]" : "[" + _.join(",") + "]" : "[]"
                                            } else y(r || a, function(t) {
                                                var e = D(t, a, n, r, o, i, s);
                                                e !== g && _.push(R(t) + ":" + (o ? " " : "") + e)
                                            }), q = _.length ? o ? "{\n" + i + _.join(",\n" + i) + "\n" + U + "}" : "{" + _.join(",") + "}" : "{}";
                                            return s.pop(), q
                                        }
                                    };
                                e.stringify = function(t, e, n) {
                                    var r, o, i, a;
                                    if (s[typeof e] && e)
                                        if ((a = b.call(e)) == w) o = e;
                                        else if (a == B) {
                                        i = {};
                                        for (var c, p = 0, u = e.length; p < u; c = e[p++], a = b.call(c), (a == A || a == x) && (i[c] = 1));
                                    }
                                    if (n)
                                        if ((a = b.call(n)) == x) {
                                            if ((n -= n % 1) > 0)
                                                for (r = "", n > 10 && (n = 10); r.length < n; r += " ");
                                        } else a == A && (r = n.length <= 10 ? n : n.slice(0, 10));
                                    return D("", (c = {}, c[""] = t, c), o, i, r, "", [])
                                }
                            }
                            if (!n("json-parse")) {
                                var U, q, L = i.fromCharCode,
                                    M = {
                                        92: "\\",
                                        34: '"',
                                        47: "/",
                                        98: "\b",
                                        116: "\t",
                                        110: "\n",
                                        102: "\f",
                                        114: "\r"
                                    },
                                    I = function() {
                                        throw U = q = null, u()
                                    },
                                    H = function() {
                                        for (var t, e, n, r, o, i = q, s = i.length; U < s;) switch (o = i.charCodeAt(U)) {
                                            case 9:
                                            case 10:
                                            case 13:
                                            case 32:
                                                U++;
                                                break;
                                            case 123:
                                            case 125:
                                            case 91:
                                            case 93:
                                            case 58:
                                            case 44:
                                                return t = S ? i.charAt(U) : i[U], U++, t;
                                            case 34:
                                                for (t = "@", U++; U < s;)
                                                    if (o = i.charCodeAt(U), o < 32) I();
                                                    else if (92 == o) switch (o = i.charCodeAt(++U)) {
                                                    case 92:
                                                    case 34:
                                                    case 47:
                                                    case 98:
                                                    case 116:
                                                    case 110:
                                                    case 102:
                                                    case 114:
                                                        t += M[o], U++;
                                                        break;
                                                    case 117:
                                                        for (e = ++U, n = U + 4; U < n; U++) o = i.charCodeAt(U), o >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || I();
                                                        t += L("0x" + i.slice(e, U));
                                                        break;
                                                    default:
                                                        I()
                                                } else {
                                                    if (34 == o) break;
                                                    for (o = i.charCodeAt(U), e = U; o >= 32 && 92 != o && 34 != o;) o = i.charCodeAt(++U);
                                                    t += i.slice(e, U)
                                                }
                                                if (34 == i.charCodeAt(U)) return U++, t;
                                                I();
                                            default:
                                                if (e = U, 45 == o && (r = !0, o = i.charCodeAt(++U)), o >= 48 && o <= 57) {
                                                    for (48 == o && (o = i.charCodeAt(U + 1), o >= 48 && o <= 57) && I(), r = !1; U < s && (o = i.charCodeAt(U), o >= 48 && o <= 57); U++);
                                                    if (46 == i.charCodeAt(U)) {
                                                        for (n = ++U; n < s && (o = i.charCodeAt(n), o >= 48 && o <= 57); n++);
                                                        n == U && I(), U = n
                                                    }
                                                    if (o = i.charCodeAt(U), 101 == o || 69 == o) {
                                                        for (o = i.charCodeAt(++U), 43 != o && 45 != o || U++, n = U; n < s && (o = i.charCodeAt(n), o >= 48 && o <= 57); n++);
                                                        n == U && I(), U = n
                                                    }
                                                    return +i.slice(e, U)
                                                }
                                                if (r && I(), "true" == i.slice(U, U + 4)) return U += 4, !0;
                                                if ("false" == i.slice(U, U + 5)) return U += 5, !1;
                                                if ("null" == i.slice(U, U + 4)) return U += 4, null;
                                                I()
                                        }
                                        return "$"
                                    },
                                    z = function(t) {
                                        var e, n;
                                        if ("$" == t && I(), "string" == typeof t) {
                                            if ("@" == (S ? t.charAt(0) : t[0])) return t.slice(1);
                                            if ("[" == t) {
                                                for (e = []; t = H(), "]" != t; n || (n = !0)) n && ("," == t ? (t = H(), "]" == t && I()) : I()), "," == t && I(), e.push(z(t));
                                                return e
                                            }
                                            if ("{" == t) {
                                                for (e = {}; t = H(), "}" != t; n || (n = !0)) n && ("," == t ? (t = H(), "}" == t && I()) : I()), "," != t && "string" == typeof t && "@" == (S ? t.charAt(0) : t[0]) && ":" == H() || I(), e[t.slice(1)] = z(H());
                                                return e
                                            }
                                            I()
                                        }
                                        return t
                                    },
                                    J = function(t, e, n) {
                                        var r = X(t, e, n);
                                        r === g ? delete t[e] : t[e] = r
                                    },
                                    X = function(t, e, n) {
                                        var r, o = t[e];
                                        if ("object" == typeof o && o)
                                            if (b.call(o) == B)
                                                for (r = o.length; r--;) J(o, r, n);
                                            else y(o, function(t) {
                                                J(o, t, n)
                                            });
                                        return n.call(t, e, o)
                                    };
                                e.parse = function(t, e) {
                                    var n, r;
                                    return U = 0, q = "" + t, n = z(H()), "$" != H() && I(), U = q = null, e && b.call(e) == w ? X((r = {}, r[""] = n, r), "", e) : n
                                }
                            }
                        }
                        return e.runInContext = o, e
                    }
                    var i = "function" == typeof t && t.amd,
                        s = {
                            function: !0,
                            object: !0
                        },
                        a = s[typeof r] && r && !r.nodeType && r,
                        c = s[typeof window] && window || this,
                        p = a && s[typeof n] && n && !n.nodeType && "object" == typeof e && e;
                    if (!p || p.global !== p && p.window !== p && p.self !== p || (c = p), a && !i) o(c, a);
                    else {
                        var u = c.JSON,
                            f = c.JSON3,
                            h = !1,
                            l = o(c, c.JSON3 = {
                                noConflict: function() {
                                    return h || (h = !0, c.JSON = u, c.JSON3 = f, u = f = null), l
                                }
                            });
                        c.JSON = {
                            parse: l.parse,
                            stringify: l.stringify
                        }
                    }
                    i && t(function() {
                        return l
                    })
                }).call(this)
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})
        }, {}],
        51: [function(t, e, n) {
            function r(t, e) {
                var n = [];
                e = e || 0;
                for (var r = e || 0; r < t.length; r++) n[r - e] = t[r];
                return n
            }
            e.exports = r
        }, {}]
    }, {}, [31])(31)
});

; /**** game/lib/jquery.slimscroll.min.js ****/
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.6
 *
 */
(function(e) {
    e.fn.extend({
        slimScroll: function(g) {
            var a = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, g);
            this.each(function() {
                function v(d) {
                    if (r) {
                        d = d || window.event;
                        var c = 0;
                        d.wheelDelta && (c = -d.wheelDelta / 120);
                        d.detail && (c = d.detail / 3);
                        e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && m(c, !0);
                        d.preventDefault && !k && d.preventDefault();
                        k || (d.returnValue = !1)
                    }
                }

                function m(d, e, g) {
                    k = !1;
                    var f = d,
                        h = b.outerHeight() - c.outerHeight();
                    e && (f = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), f = Math.min(Math.max(f, 0), h), f = 0 < d ? Math.ceil(f) : Math.floor(f), c.css({
                        top: f + "px"
                    }));
                    l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
                    f = l * (b[0].scrollHeight - b.outerHeight());
                    g && (f = d, d = f / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), h), c.css({
                        top: d + "px"
                    }));
                    b.scrollTop(f);
                    b.trigger("slimscrolling", ~~f);
                    w();
                    p()
                }

                function x() {
                    u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30);
                    c.css({
                        height: u + "px"
                    });
                    var a = u == b.outerHeight() ? "none" : "block";
                    c.css({
                        display: a
                    })
                }

                function w() {
                    x();
                    clearTimeout(B);
                    l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
                    C = l;
                    u >= b.outerHeight() ? k = !0 : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && h.stop(!0, !0).fadeIn("fast"))
                }

                function p() {
                    a.alwaysVisible || (B = setTimeout(function() {
                        a.disableFadeOut && r || y || z || (c.fadeOut("slow"), h.fadeOut("slow"))
                    }, 1E3))
                }
                var r, y, z, B, A, u, l, C, k = !1,
                    b = e(this);
                if (b.parent().hasClass(a.wrapperClass)) {
                    var n = b.scrollTop(),
                        c = b.closest("." + a.barClass),
                        h = b.closest("." + a.railClass);
                    x();
                    if (e.isPlainObject(g)) {
                        if ("height" in g && "auto" == g.height) {
                            b.parent().css("height", "auto");
                            b.css("height", "auto");
                            var q = b.parent().parent().height();
                            b.parent().css("height",
                                q);
                            b.css("height", q)
                        }
                        if ("scrollTo" in g) n = parseInt(a.scrollTo);
                        else if ("scrollBy" in g) n += parseInt(a.scrollBy);
                        else if ("destroy" in g) {
                            c.remove();
                            h.remove();
                            b.unwrap();
                            return
                        }
                        m(n, !1, !0)
                    }
                } else if (!(e.isPlainObject(g) && "destroy" in g)) {
                    a.height = "auto" == a.height ? b.parent().height() : a.height;
                    n = e("<div></div>").addClass(a.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: a.width,
                        height: a.height
                    });
                    b.css({
                        overflow: "hidden",
                        width: a.width,
                        height: a.height
                    });
                    var h = e("<div></div>").addClass(a.railClass).css({
                            width: a.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: a.alwaysVisible && a.railVisible ? "block" : "none",
                            "border-radius": a.railBorderRadius,
                            background: a.railColor,
                            opacity: a.railOpacity,
                            zIndex: 90
                        }),
                        c = e("<div></div>").addClass(a.barClass).css({
                            background: a.color,
                            width: a.size,
                            position: "absolute",
                            top: 0,
                            opacity: a.opacity,
                            display: a.alwaysVisible ? "block" : "none",
                            "border-radius": a.borderRadius,
                            BorderRadius: a.borderRadius,
                            MozBorderRadius: a.borderRadius,
                            WebkitBorderRadius: a.borderRadius,
                            zIndex: 99
                        }),
                        q = "right" == a.position ? {
                            right: a.distance
                        } : {
                            left: a.distance
                        };
                    h.css(q);
                    c.css(q);
                    b.wrap(n);
                    b.parent().append(c);
                    b.parent().append(h);
                    a.railDraggable && c.bind("mousedown", function(a) {
                        var b = e(document);
                        z = !0;
                        t = parseFloat(c.css("top"));
                        pageY = a.pageY;
                        b.bind("mousemove.slimscroll", function(a) {
                            currTop = t + a.pageY - pageY;
                            c.css("top", currTop);
                            m(0, c.position().top, !1)
                        });
                        b.bind("mouseup.slimscroll", function(a) {
                            z = !1;
                            p();
                            b.unbind(".slimscroll")
                        });
                        return !1
                    }).bind("selectstart.slimscroll", function(a) {
                        a.stopPropagation();
                        a.preventDefault();
                        return !1
                    });
                    h.hover(function() {
                        w()
                    }, function() {
                        p()
                    });
                    c.hover(function() {
                        y = !0
                    }, function() {
                        y = !1
                    });
                    b.hover(function() {
                        r = !0;
                        w();
                        p()
                    }, function() {
                        r = !1;
                        p()
                    });
                    b.bind("touchstart", function(a, b) {
                        a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY)
                    });
                    b.bind("touchmove", function(b) {
                        k || b.originalEvent.preventDefault();
                        b.originalEvent.touches.length && (m((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), A = b.originalEvent.touches[0].pageY)
                    });
                    x();
                    "bottom" === a.start ? (c.css({
                            top: b.outerHeight() - c.outerHeight()
                        }),
                        m(0, !0)) : "top" !== a.start && (m(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v)
                }
            });
            return this
        }
    });
    e.fn.extend({
        slimscroll: e.fn.slimScroll
    })
})(jQuery);; /**** libs/require.js ****/
var requirejs, require, define;
! function(global, setTimeout) {
    function commentReplace(e, t) {
        return t || ""
    }

    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
        if (e) {
            var i;
            for (i = 0; i < e.length && (!e[i] || !t(e[i], i, e)); i += 1);
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var i;
            for (i = e.length - 1; i > -1 && (!e[i] || !t(e[i], i, e)); i -= 1);
        }
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var i;
        for (i in e)
            if (hasProp(e, i) && t(e[i], i)) break
    }

    function mixin(e, t, i, r) {
        return t && eachProp(t, function(t, n) {
            !i && hasProp(e, n) || (!r || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[n] = t : (e[n] || (e[n] = {}), mixin(e[n], t, i, r)))
        }), e
    }

    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(e) {
        throw e
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function(e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, i, r) {
        var n = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return n.requireType = e, n.requireModules = r, i && (n.originalError = i), n
    }

    function newContext(e) {
        function t(e) {
            var t, i;
            for (t = 0; t < e.length; t++)
                if (i = e[t], "." === i) e.splice(t, 1), t -= 1;
                else if (".." === i) {
                if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }

        function i(e, i, r) {
            var n, o, a, s, u, c, d, p, f, l, h, m, g = i && i.split("/"),
                v = y.map,
                x = v && v["*"];
            if (e && (e = e.split("/"), d = e.length - 1, y.nodeIdCompat && jsSuffixRegExp.test(e[d]) && (e[d] = e[d].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && g && (m = g.slice(0, g.length - 1), e = m.concat(e)), t(e), e = e.join("/")), r && v && (g || x)) {
                a = e.split("/");
                e: for (s = a.length; s > 0; s -= 1) {
                    if (c = a.slice(0, s).join("/"), g)
                        for (u = g.length; u > 0; u -= 1)
                            if (o = getOwn(v, g.slice(0, u).join("/")), o && (o = getOwn(o, c))) {
                                p = o, f = s;
                                break e
                            }!l && x && getOwn(x, c) && (l = getOwn(x, c), h = s)
                }!p && l && (p = l, f = h), p && (a.splice(0, f, p), e = a.join("/"))
            }
            return n = getOwn(y.pkgs, e), n ? n : e
        }

        function r(e) {
            isBrowser && each(scripts(), function(t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === q.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function n(e) {
            var t = getOwn(y.paths, e);
            if (t && isArray(t) && t.length > 1) return t.shift(), q.require.undef(e), q.makeRequire(null, {
                skipMap: !0
            })([e]), !0
        }

        function o(e) {
            var t, i = e ? e.indexOf("!") : -1;
            return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
        }

        function a(e, t, r, n) {
            var a, s, u, c, d = null,
                p = t ? t.name : null,
                f = e,
                l = !0,
                h = "";
            return e || (l = !1, e = "_@r" + (T += 1)), c = o(e), d = c[0], e = c[1], d && (d = i(d, p, n), s = getOwn(j, d)), e && (d ? h = r ? e : s && s.normalize ? s.normalize(e, function(e) {
                return i(e, p, n)
            }) : e.indexOf("!") === -1 ? i(e, p, n) : e : (h = i(e, p, n), c = o(h), d = c[0], h = c[1], r = !0, a = q.nameToUrl(h))), u = !d || s || r ? "" : "_unnormalized" + (A += 1), {
                prefix: d,
                name: h,
                parentMap: t,
                unnormalized: !!u,
                url: a,
                originalName: f,
                isDefine: l,
                id: (d ? d + "!" + h : h) + u
            }
        }

        function s(e) {
            var t = e.id,
                i = getOwn(S, t);
            return i || (i = S[t] = new q.Module(e)), i
        }

        function u(e, t, i) {
            var r = e.id,
                n = getOwn(S, r);
            !hasProp(j, r) || n && !n.defineEmitComplete ? (n = s(e), n.error && "error" === t ? i(n.error) : n.on(t, i)) : "defined" === t && i(j[r])
        }

        function c(e, t) {
            var i = e.requireModules,
                r = !1;
            t ? t(e) : (each(i, function(t) {
                var i = getOwn(S, t);
                i && (i.error = e, i.events.error && (r = !0, i.emit("error", e)))
            }), r || req.onError(e))
        }

        function d() {
            globalDefQueue.length && (each(globalDefQueue, function(e) {
                var t = e[0];
                "string" == typeof t && (q.defQueueMap[t] = !0), O.push(e)
            }), globalDefQueue = [])
        }

        function p(e) {
            delete S[e], delete k[e]
        }

        function f(e, t, i) {
            var r = e.map.id;
            e.error ? e.emit("error", e.error) : (t[r] = !0, each(e.depMaps, function(r, n) {
                var o = r.id,
                    a = getOwn(S, o);
                !a || e.depMatched[n] || i[o] || (getOwn(t, o) ? (e.defineDep(n, j[o]), e.check()) : f(a, t, i))
            }), i[r] = !0)
        }

        function l() {
            var e, t, i = 1e3 * y.waitSeconds,
                o = i && q.startTime + i < (new Date).getTime(),
                a = [],
                s = [],
                u = !1,
                d = !0;
            if (!x) {
                if (x = !0, eachProp(k, function(e) {
                        var i = e.map,
                            c = i.id;
                        if (e.enabled && (i.isDefine || s.push(e), !e.error))
                            if (!e.inited && o) n(c) ? (t = !0, u = !0) : (a.push(c), r(c));
                            else if (!e.inited && e.fetched && i.isDefine && (u = !0, !i.prefix)) return d = !1
                    }), o && a.length) return e = makeError("timeout", "Load timeout for modules: " + a, null, a), e.contextName = q.contextName, c(e);
                d && each(s, function(e) {
                    f(e, {}, {})
                }), o && !t || !u || !isBrowser && !isWebWorker || w || (w = setTimeout(function() {
                    w = 0, l()
                }, 50)), x = !1
            }
        }

        function h(e) {
            hasProp(j, e[0]) || s(a(e[0], null, !0)).init(e[1], e[2])
        }

        function m(e, t, i, r) {
            e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(i, t, !1)
        }

        function g(e) {
            var t = e.currentTarget || e.srcElement;
            return m(t, q.onScriptLoad, "load", "onreadystatechange"), m(t, q.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function v() {
            var e;
            for (d(); O.length;) {
                if (e = O.shift(), null === e[0]) return c(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                h(e)
            }
            q.defQueueMap = {}
        }
        var x, b, q, E, w, y = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            S = {},
            k = {},
            M = {},
            O = [],
            j = {},
            P = {},
            R = {},
            T = 1,
            A = 1;
        return E = {
            require: function(e) {
                return e.require ? e.require : e.require = q.makeRequire(e.map)
            },
            exports: function(e) {
                if (e.usingExports = !0, e.map.isDefine) return e.exports ? j[e.map.id] = e.exports : e.exports = j[e.map.id] = {}
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return getOwn(y.config, e.map.id) || {}
                    },
                    exports: e.exports || (e.exports = {})
                }
            }
        }, b = function(e) {
            this.events = getOwn(M, e.id) || {}, this.map = e, this.shim = getOwn(y.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, b.prototype = {
            init: function(e, t, i, r) {
                r = r || {}, this.inited || (this.factory = t, i ? this.on("error", i) : this.events.error && (i = bind(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = i, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, q.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? void q.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    })) : e.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var e = this.map.url;
                P[e] || (P[e] = !0, q.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, i = this.map.id,
                        r = this.depExports,
                        n = this.exports,
                        o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        n = q.execCb(i, o, r, n)
                                    } catch (t) {
                                        e = t
                                    } else n = q.execCb(i, o, r, n);
                                    if (this.map.isDefine && void 0 === n && (t = this.module, t ? n = t.exports : this.usingExports && (n = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", c(this.error = e)
                                } else n = o;
                                if (this.exports = n, this.map.isDefine && !this.ignore && (j[i] = n, req.onResourceLoad)) {
                                    var a = [];
                                    each(this.depMaps, function(e) {
                                        a.push(e.normalizedMap || e)
                                    }), req.onResourceLoad(q, this.map, a)
                                }
                                p(i), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else hasProp(q.defQueueMap, i) || this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                    t = e.id,
                    r = a(e.prefix);
                this.depMaps.push(r), u(r, "defined", bind(this, function(r) {
                    var n, o, d, f = getOwn(R, this.map.id),
                        l = this.map.name,
                        h = this.map.parentMap ? this.map.parentMap.name : null,
                        m = q.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    return this.map.unnormalized ? (r.normalize && (l = r.normalize(l, function(e) {
                        return i(e, h, !0)
                    }) || ""), o = a(e.prefix + "!" + l, this.map.parentMap, !0), u(o, "defined", bind(this, function(e) {
                        this.map.normalizedMap = o, this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), d = getOwn(S, o.id), void(d && (this.depMaps.push(o), this.events.error && d.on("error", bind(this, function(e) {
                        this.emit("error", e)
                    })), d.enable()))) : f ? (this.map.url = q.nameToUrl(f), void this.load()) : (n = bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), n.error = bind(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(S, function(e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && p(e.map.id)
                        }), c(e)
                    }), n.fromText = bind(this, function(i, r) {
                        var o = e.name,
                            u = a(o),
                            d = useInteractive;
                        r && (i = r), d && (useInteractive = !1), s(u), hasProp(y.config, t) && (y.config[o] = y.config[t]);
                        try {
                            req.exec(i)
                        } catch (e) {
                            return c(makeError("fromtexteval", "fromText eval for " + t + " failed: " + e, e, [t]))
                        }
                        d && (useInteractive = !0), this.depMaps.push(u), q.completeLoad(o), m([o], n)
                    }), void r.load(e.name, m, n, y))
                })), q.enable(r, this), this.pluginMaps[r.id] = r
            },
            enable: function() {
                k[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                    var i, r, n;
                    if ("string" == typeof e) {
                        if (e = a(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, n = getOwn(E, e.id)) return void(this.depExports[t] = n(this));
                        this.depCount += 1, u(e, "defined", bind(this, function(e) {
                            this.undefed || (this.defineDep(t, e), this.check())
                        })), this.errback ? u(e, "error", bind(this, this.errback)) : this.events.error && u(e, "error", bind(this, function(e) {
                            this.emit("error", e)
                        }))
                    }
                    i = e.id, r = S[i], hasProp(E, i) || !r || r.enabled || q.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(S, e.id);
                    t && !t.enabled && q.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function(e, t) {
                var i = this.events[e];
                i || (i = this.events[e] = []), i.push(t)
            },
            emit: function(e, t) {
                each(this.events[e], function(e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, q = {
            config: y,
            contextName: e,
            registry: S,
            defined: j,
            urlFetched: P,
            defQueue: O,
            defQueueMap: {},
            Module: b,
            makeModuleMap: a,
            nextTick: req.nextTick,
            onError: c,
            configure: function(e) {
                if (e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/"), "string" == typeof e.urlArgs) {
                    var t = e.urlArgs;
                    e.urlArgs = function(e, i) {
                        return (i.indexOf("?") === -1 ? "?" : "&") + t
                    }
                }
                var i = y.shim,
                    r = {
                        paths: !0,
                        bundles: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(e, function(e, t) {
                    r[t] ? (y[t] || (y[t] = {}), mixin(y[t], e, !0, !0)) : y[t] = e
                }), e.bundles && eachProp(e.bundles, function(e, t) {
                    each(e, function(e) {
                        e !== t && (R[e] = t)
                    })
                }), e.shim && (eachProp(e.shim, function(e, t) {
                    isArray(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = q.makeShimExports(e)), i[t] = e
                }), y.shim = i), e.packages && each(e.packages, function(e) {
                    var t, i;
                    e = "string" == typeof e ? {
                        name: e
                    } : e, i = e.name, t = e.location, t && (y.paths[i] = e.location), y.pkgs[i] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(S, function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = a(t, null, !0))
                }), (e.deps || e.callback) && q.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function(t, n) {
                function o(i, r, u) {
                    var d, p, f;
                    return n.enableBuildCallback && r && isFunction(r) && (r.__requireJsBuild = !0), "string" == typeof i ? isFunction(r) ? c(makeError("requireargs", "Invalid require call"), u) : t && hasProp(E, i) ? E[i](S[t.id]) : req.get ? req.get(q, i, t, o) : (p = a(i, t, !1, !0), d = p.id, hasProp(j, d) ? j[d] : c(makeError("notloaded", 'Module name "' + d + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(), q.nextTick(function() {
                        v(), f = s(a(null, t)), f.skipMap = n.skipMap, f.init(i, r, u, {
                            enabled: !0
                        }), l()
                    }), o)
                }
                return n = n || {}, mixin(o, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var r, n = e.lastIndexOf("."),
                            o = e.split("/")[0],
                            a = "." === o || ".." === o;
                        return n !== -1 && (!a || n > 1) && (r = e.substring(n, e.length), e = e.substring(0, n)), q.nameToUrl(i(e, t && t.id, !0), r, !0)
                    },
                    defined: function(e) {
                        return hasProp(j, a(e, t, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = a(e, t, !1, !0).id, hasProp(j, e) || hasProp(S, e)
                    }
                }), t || (o.undef = function(e) {
                    d();
                    var i = a(e, t, !0),
                        n = getOwn(S, e);
                    n.undefed = !0, r(e), delete j[e], delete P[i.url], delete M[e], eachReverse(O, function(t, i) {
                        t[0] === e && O.splice(i, 1)
                    }), delete q.defQueueMap[e], n && (n.events.defined && (M[e] = n.events), p(e))
                }), o
            },
            enable: function(e) {
                var t = getOwn(S, e.id);
                t && s(e).enable()
            },
            completeLoad: function(e) {
                var t, i, r, o = getOwn(y.shim, e) || {},
                    a = o.exports;
                for (d(); O.length;) {
                    if (i = O.shift(), null === i[0]) {
                        if (i[0] = e, t) break;
                        t = !0
                    } else i[0] === e && (t = !0);
                    h(i)
                }
                if (q.defQueueMap = {}, r = getOwn(S, e), !t && !hasProp(j, e) && r && !r.inited) {
                    if (!(!y.enforceDefine || a && getGlobal(a))) return n(e) ? void 0 : c(makeError("nodefine", "No define call for " + e, null, [e]));
                    h([e, o.deps || [], o.exportsFn])
                }
                l()
            },
            nameToUrl: function(e, t, i) {
                var r, n, o, a, s, u, c, d = getOwn(y.pkgs, e);
                if (d && (e = d), c = getOwn(R, e)) return q.nameToUrl(c, t, i);
                if (req.jsExtRegExp.test(e)) s = e + (t || "");
                else {
                    for (r = y.paths, n = e.split("/"), o = n.length; o > 0; o -= 1)
                        if (a = n.slice(0, o).join("/"), u = getOwn(r, a)) {
                            isArray(u) && (u = u[0]), n.splice(0, o, u);
                            break
                        }
                    s = n.join("/"), s += t || (/^data\:|^blob\:|\?/.test(s) || i ? "" : ".js"), s = ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : y.baseUrl) + s
                }
                return y.urlArgs && !/^blob\:/.test(s) ? s + y.urlArgs(e, s) : s
            },
            load: function(e, t) {
                req.load(q, e, t)
            },
            execCb: function(e, t, i, r) {
                return t.apply(r, i)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = g(e);
                    q.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = g(e);
                if (!n(t.id)) {
                    var i = [];
                    return eachProp(S, function(e, r) {
                        0 !== r.indexOf("_@r") && each(e.depMaps, function(e) {
                            if (e.id === t.id) return i.push(r), !0
                        })
                    }), c(makeError("scripterror", 'Script error for "' + t.id + (i.length ? '", needed by: ' + i.join(", ") : '"'), e, [t.id]))
                }
            }
        }, q.require = q.makeRequire(), q
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
            if ("interactive" === e.readyState) return interactiveScript = e
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.3.3",
        commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, i, r) {
            var n, o, a = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = i, i = r) : e = []), o && o.context && (a = o.context), n = getOwn(contexts, a), n || (n = contexts[a] = req.s.newContext(a)), o && n.configure(o), n.require(e, t, i)
        }, req.config = function(e) {
            return req(e)
        }, req.nextTick = "undefined" != typeof setTimeout ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, i) {
            var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return r.type = e.scriptType || "text/javascript", r.charset = "utf-8", r.async = !0, r
        }, req.load = function(e, t, i) {
            var r, n = e && e.config || {};
            if (isBrowser) return r = req.createNode(n, t, i), r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = i, n.onNodeCreated && n.onNodeCreated(r, n, t, i), currentlyAddingScript = r, baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r), currentlyAddingScript = null, r;
            if (isWebWorker) try {
                setTimeout(function() {}, 0), importScripts(i), e.completeLoad(t)
            } catch (r) {
                e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + i, r, [t]))
            }
        }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
            if (head || (head = e.parentNode), dataMain = e.getAttribute("data-main")) return mainScript = dataMain, cfg.baseUrl || mainScript.indexOf("!") !== -1 || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
        }), define = function(e, t, i) {
            var r, n;
            "string" != typeof e && (i = t, t = e, e = null), isArray(t) || (i = t, t = null), !t && isFunction(i) && (t = [], i.length && (i.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function(e, i) {
                t.push(i)
            }), t = (1 === i.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), n = contexts[r.getAttribute("data-requirecontext")])), n ? (n.defQueue.push([e, t, i]), n.defQueueMap[e] = !0) : globalDefQueue.push([e, t, i])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    }
}(this, "undefined" == typeof setTimeout ? void 0 : setTimeout);

; /**** game/Modernizr.js ****/
window.Modernizr = function(e, t, n) {
        function r(e) {
            y.cssText = e
        }

        function o(e, t) {
            return typeof e === t
        }

        function i(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function a(e, t) {
            for (var r in e) {
                var o = e[r];
                if (!i(o, "-") && y[o] !== n) return "pfx" != t || o
            }
            return !1
        }

        function c(e, t, r) {
            for (var i in e) {
                var a = t[e[i]];
                if (a !== n) return r === !1 ? e[i] : o(a, "function") ? a.bind(r || t) : a
            }
            return !1
        }

        function l(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                i = (e + " " + E.join(r + " ") + r).split(" ");
            return o(t, "string") || o(t, "undefined") ? a(i, t) : (i = (e + " " + w.join(r + " ") + r).split(" "), c(i, t, n))
        }
        var s, u, f, d = "2.8.3",
            p = {},
            m = !0,
            h = t.documentElement,
            v = "modernizr",
            g = t.createElement(v),
            y = g.style,
            b = ({}.toString, "Webkit Moz O ms"),
            E = b.split(" "),
            w = b.toLowerCase().split(" "),
            S = {},
            x = [],
            j = x.slice,
            C = function() {
                function e(e, i) {
                    i = i || t.createElement(r[e] || "div"), e = "on" + e;
                    var a = e in i;
                    return a || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), a = o(i[e], "function"), o(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, a
                }
                var r = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return e
            }(),
            F = {}.hasOwnProperty;
        f = o(F, "undefined") || o(F.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return F.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = j.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var o = function() {};
                        o.prototype = t.prototype;
                        var i = new o,
                            a = t.apply(i, n.concat(j.call(arguments)));
                        return Object(a) === a ? a : i
                    }
                    return t.apply(e, n.concat(j.call(arguments)))
                };
            return r
        }), S.flexbox = function() {
            return l("flexWrap")
        }, S.history = function() {
            return !!e.history && !!history.pushState
        }, S.draganddrop = function() {
            var e = t.createElement("div");
            return "draggable" in e || "ondragstart" in e && "ondrop" in e
        }, S.borderimage = function() {
            return l("borderImage")
        }, S.textshadow = function() {
            return "" === t.createElement("div").style.textShadow
        }, S.cssanimations = function() {
            return l("animationName")
        }, S.localstorage = function() {
            try {
                return localStorage.setItem(v, v), localStorage.removeItem(v), !0
            } catch (e) {
                return !1
            }
        }, S.sessionstorage = function() {
            try {
                return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
            } catch (e) {
                return !1
            }
        };
        for (var N in S) f(S, N) && (u = N.toLowerCase(), p[u] = S[N](), x.push((p[u] ? "" : "no-") + u));
        return p.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) f(e, r) && p.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), p[e] !== n) return p;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (h.className += " " + (t ? "" : "no-") + e), p[e] = t
                }
                return p
            }, r(""), g = s = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function r() {
                    var e = y.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function o(e) {
                    var t = g[e[h]];
                    return t || (t = {}, v++, e[h] = v, g[v] = t), t
                }

                function i(e, n, r) {
                    if (n || (n = t), u) return n.createElement(e);
                    r || (r = o(n));
                    var i;
                    return i = r.cache[e] ? r.cache[e].cloneNode() : m.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !i.canHaveChildren || p.test(e) || i.tagUrn ? i : r.frag.appendChild(i)
                }

                function a(e, n) {
                    if (e || (e = t), u) return e.createDocumentFragment();
                    n = n || o(e);
                    for (var i = n.frag.cloneNode(), a = 0, c = r(), l = c.length; a < l; a++) i.createElement(c[a]);
                    return i
                }

                function c(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return y.shivMethods ? i(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(y, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var r = o(e);
                    return y.shivCSS && !s && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || c(e, r), e
                }
                var s, u, f = "3.7.0",
                    d = e.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h = "_html5shiv",
                    v = 0,
                    g = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", s = "hidden" in e, u = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (e) {
                        s = !0, u = !0
                    }
                }();
                var y = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: f,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: i,
                    createDocumentFragment: a
                };
                e.html5 = y, l(t)
            }(this, t), p._version = d, p._domPrefixes = w, p._cssomPrefixes = E, p.hasEvent = C, p.testProp = function(e) {
                return a([e])
            }, p.testAllProps = l, p.prefixed = function(e, t, n) {
                return t ? l(e, t, n) : l(e, "pfx")
            }, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + x.join(" ") : ""), p
    }(this, this.document),
    function(e, t, n) {
        function r(e) {
            return "[object Function]" == v.call(e)
        }

        function o(e) {
            return "string" == typeof e
        }

        function i() {}

        function a(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function c() {
            var e = g.shift();
            y = 1, e ? e.t ? m(function() {
                ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), c()) : y = 0
        }

        function l(e, n, r, o, i, l, s) {
            function u(t) {
                if (!p && a(f.readyState) && (b.r = p = 1, !y && c(), f.onload = f.onreadystatechange = null, t)) {
                    "img" != e && m(function() {
                        w.removeChild(f)
                    }, 50);
                    for (var r in F[n]) F[n].hasOwnProperty(r) && F[n][r].onload()
                }
            }
            var s = s || d.errorTimeout,
                f = t.createElement(e),
                p = 0,
                v = 0,
                b = {
                    t: r,
                    s: n,
                    e: i,
                    a: l,
                    x: s
                };
            1 === F[n] && (v = 1, F[n] = []), "object" == e ? f.data = n : (f.src = n, f.type = e), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function() {
                u.call(this, v)
            }, g.splice(o, 0, b), "img" != e && (v || 2 === F[n] ? (w.insertBefore(f, E ? null : h), m(u, s)) : F[n].push(f))
        }

        function s(e, t, n, r, i) {
            return y = 0, t = t || "j", o(e) ? l("c" == t ? x : S, e, t, this.i++, n, r, i) : (g.splice(this.i++, 0, e), 1 == g.length && c()), this
        }

        function u() {
            var e = d;
            return e.loader = {
                load: s,
                i: 0
            }, e
        }
        var f, d, p = t.documentElement,
            m = e.setTimeout,
            h = t.getElementsByTagName("script")[0],
            v = {}.toString,
            g = [],
            y = 0,
            b = "MozAppearance" in p.style,
            E = b && !!t.createRange().compareNode,
            w = E ? p : h.parentNode,
            p = e.opera && "[object Opera]" == v.call(e.opera),
            p = !!t.attachEvent && !p,
            S = b ? "object" : p ? "script" : "img",
            x = p ? "script" : S,
            j = Array.isArray || function(e) {
                return "[object Array]" == v.call(e)
            },
            C = [],
            F = {},
            N = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        d = function(e) {
            function t(e) {
                var t, n, r, e = e.split("!"),
                    o = C.length,
                    i = e.pop(),
                    a = e.length,
                    i = {
                        url: i,
                        origUrl: i,
                        prefixes: e
                    };
                for (n = 0; n < a; n++) r = e[n].split("="), (t = N[r.shift()]) && (i = t(i, r));
                for (n = 0; n < o; n++) i = C[n](i);
                return i
            }

            function a(e, o, i, a, c) {
                var l = t(e),
                    s = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = r(o) ? o : o[e] || o[a] || o[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, o, i, a, c) : (F[l.url] ? l.noexec = !0 : F[l.url] = 1, i.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (r(o) || r(s)) && i.load(function() {
                    u(), o && o(l.origUrl, c, a), s && s(l.origUrl, c, a), F[l.url] = 2
                })))
            }

            function c(e, t) {
                function n(e, n) {
                    if (e) {
                        if (o(e)) n || (f = function() {
                            var e = [].slice.call(arguments);
                            d.apply(this, e), p()
                        }), a(e, f, t, 0, s);
                        else if (Object(e) === e)
                            for (l in c = function() {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) && n++;
                                    return n
                                }(), e) e.hasOwnProperty(l) && (!n && !--c && (r(f) ? f = function() {
                                var e = [].slice.call(arguments);
                                d.apply(this, e), p()
                            } : f[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), p()
                                }
                            }(d[l])), a(e[l], f, t, l, s))
                    } else !n && p()
                }
                var c, l, s = !!e.test,
                    u = e.load || e.both,
                    f = e.callback || i,
                    d = f,
                    p = e.complete || i;
                n(s ? e.yep : e.nope, !!u), u && n(u)
            }
            var l, s, f = this.yepnope.loader;
            if (o(e)) a(e, 0, f, 0);
            else if (j(e))
                for (l = 0; l < e.length; l++) s = e[l], o(s) ? a(s, 0, f, 0) : j(s) ? d(s) : Object(s) === s && c(s, f);
            else Object(e) === e && c(e, f)
        }, d.addPrefix = function(e, t) {
            N[e] = t
        }, d.addFilter = function(e) {
            C.push(e)
        }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", f = function() {
            t.removeEventListener("DOMContentLoaded", f, 0), t.readyState = "complete"
        }, 0)), e.yepnope = u(), e.yepnope.executeStack = c, e.yepnope.injectJs = function(e, n, r, o, l, s) {
            var u, f, p = t.createElement("script"),
                o = o || d.errorTimeout;
            p.src = e;
            for (f in r) p.setAttribute(f, r[f]);
            n = s ? c : n || i, p.onreadystatechange = p.onload = function() {
                !u && a(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null)
            }, m(function() {
                u || (u = 1, n(1))
            }, o), l ? p.onload() : h.parentNode.insertBefore(p, h)
        }, e.yepnope.injectCss = function(e, n, r, o, a, l) {
            var s, o = t.createElement("link"),
                n = l ? c : n || i;
            o.href = e, o.rel = "stylesheet", o.type = "text/css";
            for (s in r) o.setAttribute(s, r[s]);
            a || (h.parentNode.insertBefore(o, h), m(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest("filereader", function() {
        return !!(window.File && window.FileList && window.FileReader)
    }), Modernizr.addTest("json", !!window.JSON && !!JSON.parse), Modernizr.addTest("performance", !!Modernizr.prefixed("performance", window));

; /**** game/script.js ****/
function setImageTitles() {
    $("img").each(function() {
        var e = $(this).attr("alt");
        $(this).attr("title") || "" == e || $(this).attr("title", e)
    })
}

function setCookie(e, t) {
    document.cookie = e + "=" + t
}

function popup(e, t, n) {
    var o = window.open(e, "popup", "width=" + t + ",height=" + n + ",left=150,top=150,resizable=yes");
    o.focus()
}

function popup_scroll(e, t, n) {
    var o = window.open(e, "popup", "width=" + t + ",height=" + n + ",left=150,top=100,resizable=yes,scrollbars=yes");
    o.focus()
}

function getTime(e) {
    if (i = e.data("seconds")) return i;
    if (!e.html() || 0 == e.html().length) return -1;
    if (e.html().indexOf("<a ") != -1) return -1;
    for (var t = e.html().split(":"), n = 1; n < 3; n++) "0" == t[n].charAt(0) && (t[n] = t[n].substring(1, t[n].length));
    var o, a;
    if (isNaN(t[0])) {
        var r = t[0].split(/[a-z\s]+/i);
        o = parseInt(r[1], 10), a = parseInt(r[0], 10)
    } else o = parseInt(t[0], 10), a = 0;
    var l = parseInt(t[1], 10),
        i = parseInt(t[2], 10),
        c = 3600 * a * 24 + 60 * o * 60 + 60 * l + i;
    return c
}

function getLocalTime() {
    var e = new Date;
    return Math.round(e.getTime() / 1e3)
}

function getLocalTimeAsFloat() {
    var e = new Date;
    return e.getTime() / 1e3
}

function startTimer() {
    Timing.resetTickHandlers()
}

function setRes(e, t) {
    game_data.village[e] = t, game_data.village[e + "_float"] = t, index = "wood" == e ? 0 : "stone" == e ? 2 : 4, game_data.village.res[index] = t, Timing.resetTickHandlers()
}

function changeResStyle(e, t) {
    e.hasClass(t) || e.removeClass("res").removeClass("warn").removeClass("warn_90").addClass(t)
}

function number_format(e, t) {
    var n = e < 0,
        o = Math.abs(e).toString();
    if (o.length <= 3) return e;
    var a = new Array;
    do {
        var r = o.length - 3;
        a.push(o.slice(r, o.length)), o = o.substring(0, r)
    } while (o.length > 3);
    a.reverse();
    for (r in a) a.hasOwnProperty(r) && (o += t + a[r]);
    return n ? "-" + o : o
}

function incrementDate() {
    currentDate = $("#serverDate").html(), splitDate = currentDate.split("/"), date = splitDate[0], month = splitDate[1] - 1, year = splitDate[2], dateObject = new Date(year, month, date), dateObject.setDate(dateObject.getDate() + 1), dateString = "", date = dateObject.getDate(), month = dateObject.getMonth() + 1, year = dateObject.getFullYear(), date < 10 && (dateString += "0"), dateString += date + "/", month < 10 && (dateString += "0"), dateString += month + "/", dateString += year, $("#serverDate").html(dateString)
}

function getTimeString(e, t) {
    e = Math.floor(e);
    var n = Math.floor(e / 3600);
    t && (n %= 24);
    var o = Math.floor(e / 60) % 60,
        a = e % 60,
        r = n + ":";
    return o < 10 && (r += "0"), r += o + ":", a < 10 && (r += "0"), r += a
}

function formatTime(e, t, n) {
    var o = getTimeString(t, n);
    $(e).html(o), "serverTime" == $(e).attr("id") && "0:00:00" == o && incrementDate()
}

function partialReload(e) {
    if (!$(".g-recaptcha").length) {
        $(document).trigger("partial_reload_start");
        var t = document.location.href.replace(/action=\w*/, "").replace(/#.*$/, "") + "&_partial";
        TribalWars.fetch(t, e)
    }
}

function selectAll(e, t) {
    for (var n = 0; n < e.length; n++) e.elements[n].checked = t
}

function changeBunches(e) {
    for (var t = 0, n = 0; n < e.length; n++) {
        var o = e.elements[n];
        "select_all" != o.className && null != o.selectedIndex && (t += parseInt(o.value, 10))
    }
    $("#selectedBunches_bottom").text(t), $("#selectedBunches_top").text(t)
}

function selectAllMax(e, t, n) {
    for (var o = 0; o < e.length; o++) {
        var a = e.elements[o];
        null != a.selectedIndex && (max ? a.selectedIndex = a.length - 2 : a.value = 0)
    }
    max = !max, anchor = document.getElementById("select_anchor_top"), anchor.firstChild.nodeValue = max ? t : n, anchor = document.getElementById("select_anchor_bottom"), anchor.firstChild.nodeValue = max ? t : n, changeBunches(e)
}

function delete_village_group(e, t) {
    var n = function() {
            window.location.href = t
        },
        o = [{
            text: "Potvrdit",
            callback: n,
            confirm: !0
        }];
    UI.ConfirmationBox(e, o)
}

function insertCoord(e, t, n) {
    var o = t.value.split("|");
    if (2 == o.length) {
        var a = parseInt(o[0], 10),
            r = parseInt(o[1], 10);
        n = n || "", e[n + "x"].value = a, e[n + "y"].value = r;
        var l = $(e).find(".target-input input[type=text]");
        l && l.val(a + "|" + r)
    }
}

function insertUnit(e, t, n) {
    e = $(e), e.is(":disabled") || (t != e.val() || n ? e.val(t) : e.val(""))
}

function insertNumber(e, t) {
    var n = parseInt($(e).val(), 10);
    return isNaN(n) && (n = 0), "object" == typeof t && (t = parseInt($(t).text().replace("(", ""), 10)), e.value != t ? t > 0 ? $(e).val(t + n) : $(e).val(0) : $(e).val(""), $(e).trigger("change"), !1
}

function insertBBcode(e, t, n) {
    return BBCodes.insert(t, n), !1
}

function inlinePopupClose() {
    null !== $("#inline_popup") && ($("#inline_popup").removeClass("show"), setTimeout(function() {
        $("#inline_popup").addClass("hidden")
    }, 300))
}

function selectTarget(e, t, n) {
    n = n || "";
    var o = $('form[name="units"], form[name="market"]')[0];
    o[n + "x"].value = e, o[n + "y"].value = t, inlinePopupClose(), $("#closelink_village_targets").click(), $("div[id$='_cont']").hide()
}

function insertAdresses(e, t) {
    if (window.opener.document.forms.header.to.value += e, t) {
        var n = window.opener.document.forms.header.mass_mail;
        n && (n.checked = "checked")
    }
}

function editGroup(e) {
    var t = window.opener.location.href;
    t = t.replace(/&action=edit_group&edit_group=\d+&h=([a-z0-9]+)/, ""), t = t.replace(/&edit_group=\d+/, ""), overview = window.opener.document.getElementById("overview"), overview && overview.value.search(/(combined|prod|units|buildings|tech)/) != -1 && (window.opener.location.href = encodeURI(t + "&edit_group=" + e)), window.close()
}

function toggleExtended() {
    var e = document.getElementById("extended");
    "block" == e.style.display ? (e.style.display = "none", document.getElementsByName("extended")[0].value = 0) : (e.style.display = "block", document.getElementsByName("extended")[0].value = 1)
}

function resizeIGMField(e) {
    field = document.getElementsByName("text")[0], old_size = parseInt(field.getAttribute("rows"), 10), "bigger" == e ? field.setAttribute("rows", old_size + 3) : "smaller" == e && old_size >= 4 && field.setAttribute("rows", old_size - 3)
}

function escape_id(e) {
    return "#" + e.replace("^#", "").replace("[", "\\[").replace("]", "\\]")
}

function editToggle(e, t) {
    $(escape_id(t)).toggle(), $(escape_id(e)).toggle();
    var n = $(escape_id(t)).find("input");
    n.each(function() {
        var e = $(this),
            t = e.attr("type"),
            n = "undefined" == typeof t || "text" == t;
        n && (e.focus(), e.select())
    })
}

function toggle_element(e) {
    "#" !== e.substring(0, 1) && (e = "#" + e), $(e).toggle()
}

function toggle_button(e, t) {
    var n = $(e);
    t || (t = this), t = $(t), "none" == n.css("display") ? (t.addClass("active"), n.show()) : (t.removeClass("active"), n.hide())
}

function toggle_visibility(e) {
    return toggle_element(e)
}

function urlEncode(e) {
    return encodeURIComponent(e)
}

function escapeHtml(e, t) {
    return e = String(e), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), t && (e = e.replace(/"/g, "&quot;")), e
}

function unescapeHtml(e) {
    return e = String(e), e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
}

function renameAttack(e, t, n) {
    var o = $("#" + e).val();
    o.length > 0 && ($("#" + t).html(escapeHtml(o)), $("#" + n).val(o))
}

function inlinePopupReload(e, t, n) {
    var o = $("#inline_popup_content");
    $.ajax({
        url: t,
        cache: !1,
        onRequest: function() {
            n.empty_errors && $("#error").empty(), o.empty(), o.append($("<img>").attr("src", image_base + "/throbber.gif").attr("alt", "Loading..."))
        },
        success: function(e) {
            o.empty(), o.html(e), UI.init()
        }
    })
}

function inlinePopup(e, t, n, o, a, r) {
    var l, i, c = $(document),
        s = $("#inline_popup");
    e ? (l = e.clientX, i = e.clientY) : window.event ? (l = window.event.clientX, i = window.event.clientY) : (l = c.width() / 2 - popup.width(), i = c.scrollTop - 800);
    var u = {
            min: {
                x: 0,
                y: 60
            },
            max: {
                x: c.width() - o.offset_x,
                y: c.height() - o.offset_y
            }
        },
        p = {
            x: l + o.offset_x,
            y: i + o.offset_y
        };
    return p.x = p.x < u.min.x ? u.min.x : p.x, p.x = p.x > u.max.x ? u.max.x : p.x, p.y = p.y < u.min.y ? u.min.y : p.y, p.y = p.y > u.max.y ? u.max.y : p.y, "undefined" != typeof mobile && mobile && (p.x = 0, p.y = c.scrollTop(), s.css("width", "100%"), s.css("border-left", "0px"), s.css("border-right", "0px")), s.css("left", p.x + "px"), s.css("top", p.y + "px"), s.removeClass("hidden"), n ? (s.addClass("show"), inlinePopupReload(t, n, o)) : a && ($("#inline_popup_content").html(a), s.addClass("show")), r = r || "", $("#inline_popup_title").text(r), UI.Draggable(s), !1
}

function bb_color_picker_gencaller(e, t) {
    var n = function() {
        e(t)
    };
    return n
}

function bb_color_set_color(e) {
    var t = $("#bb_color_picker_preview"),
        n = $("#bb_color_picker_tx");
    t.css("color", "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")");
    var o = e[0].toString(16),
        a = e[1].toString(16),
        r = e[2].toString(16);
    o = o.length < 2 ? "0" + o : o, a = a.length < 2 ? "0" + a : a, r = r.length < 2 ? "0" + r : r, n.val("#" + o + a + r)
}

function bb_color_pick_color(e) {
    for (var t = e.data("rgb"), n = 0; n < 6; n++)
        for (var o = 1; o < 6; o++) {
            var a = $("#bb_color_picker_" + o + n);
            a || alert("bb_color_picker_" + o + n);
            var r = n / 3,
                l = o / 4.5;
            l = Math.pow(l, .5);
            var i = Math.max(0, 255 * r - 255),
                c = Math.floor(Math.max(0, Math.min(255, t[0] * r * l + 255 * (1 - l) + i))),
                s = Math.floor(Math.max(0, Math.min(255, t[1] * r * l + 255 * (1 - l) + i))),
                u = Math.floor(Math.max(0, Math.min(255, t[2] * r * l + 255 * (1 - l) + i)));
            a.css("background-color", "rgb(" + c + "," + s + "," + u + ")"), a.data("rgb", [c, s, u]), a.unbind("click").click(function() {
                bb_color_picker_gencaller(bb_color_set_color, $(this).data("rgb"))
            })
        }
}

function bb_color_picker_textchange() {
    var e = $("#bb_color_picker_tx"),
        t = $("#bb_color_picker_preview");
    try {
        t.css("color", e.val())
    } catch (e) {}
}

function bb_color_picker_toggle(e) {
    var t = $("#bb_color_picker_tx");
    if (t.unbind("keyup").keyup(function() {
            bb_color_picker_textchange()
        }), e) return insertBBcode("message", "[color=" + t.val() + "]", "[/color]"), void toggle_element("bb_color_picker");
    var n = [$("#bb_color_picker_c0"), $("#bb_color_picker_c1"), $("#bb_color_picker_c2"), $("#bb_color_picker_c3"), $("#bb_color_picker_c4"), $("#bb_color_picker_c5")];
    for (n[0].data("rgb", [255, 0, 0]), n[1].data("rgb", [255, 255, 0]), n[2].data("rgb", [0, 255, 0]), n[3].data("rgb", [0, 255, 255]), n[4].data("rgb", [0, 0, 255]), n[5].data("rgb", [255, 0, 255]), i = 0; i <= 5; i++) n[i].unbind("click").click(function() {
        bb_color_picker_gencaller(bb_color_pick_color, $(this))
    });
    bb_color_pick_color(n[0]), toggle_element("bb_color_picker")
}

function get_sitter_player() {
    var e = /(\?|&)t=(\d+)/,
        t = e.exec(location.href + "");
    return !!t && parseInt(t[2], 10)
}

function igm_to_show(e) {
    $.get(e, function(e) {
        var t = $("#igm_to_content");
        t.html(e), UI.Draggable(t.parent(), {
            savepos: !1
        })
    }), $("#igm_to").css("display", "inline")
}

function igm_to_hide() {
    $("#igm_to").hide()
}

function igm_to_insert_adresses(e) {
    $("#to").val($("#to").val() + e)
}

function igm_to_addresses_clear() {
    $("#to").val("")
}

function xProcess(e, t) {
    e = $("#" + e), t = $("#" + t);
    var n, o, a = e.val(),
        r = t.val();
    if (a.indexOf("|") != -1) {
        var l = a.split("|");
        return n = parseInt(l[0], 10), 0 !== l[1].length && (o = parseInt(l[1], 10)), e.val(n), void t.val(o).focus()
    }
    3 === a.length && 0 === r.length ? t.focus() : a.length > 3 && (n = a.substr(0, 3), o = a.substring(3), e.val(n), t.val(o).focus())
}

function _(e) {
    return e
}

function textCounter(e, t, n) {
    e.value.length > n && (e.value = e.value.substring(0, n));
    try {
        document.getElementById(t).innerHTML = "%1/%2".replace(/%2/, n).replace(/%1/, e.value.length)
    } catch (e) {}
}

function selectAllUnits(e) {
    $(".unitsInput").each(function(t, n) {
        var o = $(this).next("a").html();
        o = o.substr(1).substr(0, o.length - 2), o > 0 && e ? insertUnit(n, o, e) : insertUnit(n, "", e)
    })
}

function toggle_spoiler(e) {
    var t = e.parentNode.getElementsByTagName("div")[0].getElementsByTagName("span")[0].style.display;
    "none" == t ? e.parentNode.getElementsByTagName("div")[0].getElementsByTagName("span")[0].style.display = "block" : e.parentNode.getElementsByTagName("div")[0].getElementsByTagName("span")[0].style.display = "none"
}

function center_target(e, t, n) {
    var o = $(n).getStyle("height");
    o = o.replace(/px/g, ""), o /= 2, t -= o;
    var a = $(n).getStyle("width");
    a = a.replace(/px/g, ""), a /= 2, e -= a, e < 0 && (e = 0), t < 0 && (t = 0), $(n).setStyle("left", e + "px"), $(n).setStyle("top", t + "px")
}

function s(e) {
    if (arguments.length > 1 && "object" == typeof arguments[1] && null != arguments[1]) return s.apply(s, [arguments[0]].concat(arguments[1]));
    for (var t = 1; t < arguments.length; t++) e = e.split("%" + t).join(arguments[t]);
    return e
}

function autoresize_textarea(e, t) {
    var n = $(e);
    if (n.length) {
        t = t || 40;
        var o = n[0].rows;
        n.keydown(function() {
            for (var e = this.value.split("\n"), a = e.length, r = 0; r < e.length; r++) e[r].length >= n[0].cols && (a += Math.floor(e[r].length / n[0].cols));
            a += 2, a = Math.min(a, t), a > o && (this.rows = a)
        })
    }
}

function load_append(e, t) {
    "undefined" == typeof t && (t = document.body), $.ajax({
        url: e,
        dataType: "json",
        success: function(e) {
            e.error ? UI.ErrorMessage(e.error) : $(t).append(e)
        }
    })
}

function load_into(e, t) {
    "undefined" == typeof t && (t = document.body), $.ajax({
        url: e,
        success: function(e) {
            e.error ? UI.ErrorMessage(e.error) : $(t).html(e).show()
        }
    })
}

function ajaxSimple(e, t, n, o) {
    $.ajax({
        url: e,
        data: n,
        dataType: "html",
        success: function(e) {
            0 == e.length && (e = o), $("#" + t).html(e)
        }
    })
}
var mx = 0,
    my = 0,
    max = !0,
    villageDock = {
        saveLink: !1,
        loadLink: null,
        docked: null,
        bindClose: function() {
            $("#closelink_group_popup").click(function() {
                villageDock.saveDockMode(0)
            })
        },
        saveDockMode: function(e) {
            if (villageDock.saveLink) {
                var t = {
                    dock: e
                };
                ajaxSimple(villageDock.saveLink, null, t), villageDock.docked = e
            }
        },
        open: function(e) {
            return 0 == villageDock.docked && villageDock.saveDockMode(1), UI.AjaxPopup(e, "group_popup", villageDock.loadLink, "SkupinovA� vesnice", villageDock.callback, null, 320, 380, null, null, ["#open_groups", "#close_groups"]), $("#close_groups, #open_groups").toggle(), !1
        },
        close: function(e) {
            return 1 == villageDock.docked && villageDock.saveDockMode(0), $("#close_groups, #open_groups").toggle(), $("#group_popup").toggle(), !1
        },
        callback: function(e, t) {
            VillageGroups.villageSelect.handleGroupMenuData(e, t), villageDock.saveLink && villageDock.bindClose()
        }
    };

; /**** game/Decorate.js ****/
var Decorate;
! function() {
    "use strict";
    Decorate = {
        FiresEvents: function(n) {
            var e = {};
            n.on = function(n, t) {
                "undefined" == typeof e[n] && (e[n] = []), e[n].push(t)
            }, n.off = function(n) {
                e[n] = []
            }, n.trigger = function(n, t) {
                "undefined" != typeof e[n] && e[n].forEach(function(n) {
                    n(t)
                })
            }
        }
    }
}();

; /**** game/UI.js ****/
var UI;
! function() {
    "use strict";
    UI = {
        init: function() {
            "undefined" != typeof game_data && (this.initUIElements(), this.initDialogs(), $(".evt-confirm").click(UI.getConfirmHandler()), $(".error_box").click(function() {
                window.getSelection().toString() || $(this).fadeOut(500, function() {
                    $(this).remove()
                })
            }), this.InitProgressBars(), $.widget("ui.autocomplete", $.ui.autocomplete, UI.AutoComplete.extension_targeted_suggestions), "undefined" == typeof mobile || mobile || $(".autocomplete").autocomplete({
                minLength: 2,
                source: UI.AutoComplete.source,
                focus: UI.AutoComplete.handleFocus
            }), UI.ToolTip(".tooltip"), UI.ToolTip(".tooltip-delayed", {
                delay: 400
            }), UI.checkForMessages(), UI.FormAbandon.init(), UI.FormAllowOneSubmission.init(), UI.Help.init(), UI.initHintToggle(), require(["Ig/TribalWars/Modules/UI/FormSubmit"], function(t) {
                new t
            }))
        },
        initHintToggle: function() {
            $(".hint-toggle").on("click", function() {
                var t = $(this);
                t.closest(".info_box").fadeOut(), TribalWars.setSetting(t.data("setting"), 0)
            })
        },
        AutoComplete: {
            url: null,
            source: function(t, e) {
                var i = this.element.data("type");
                t.term.indexOf(";") !== -1 && e([]), $.post(UI.AutoComplete.url, {
                    type: i,
                    text: t.term
                }, function(t) {
                    e(t)
                }, "json")
            },
            handleFocus: function(t, e) {
                UI.AutoComplete.highlightMenuItem(e.item.label)
            },
            highlightMenuItem: function(t) {
                var e = $(".ui-autocomplete.ui-menu > li > a");
                $.each(e, function(e, i) {
                    var n = $(i);
                    n.html() == t ? n.addClass("selected") : n.removeClass("selected")
                })
            },
            extension_targeted_suggestions: {
                _renderMenu: function(t, e) {
                    var i = this,
                        n = e[0];
                    if (i.element.data("ignore-single-exact-match") && n.targeted.length + n.common.length === 1) {
                        var o = n.targeted.length ? n.targeted[0] : n.common[0];
                        if (o.label.toUpperCase() === i.element.val().toUpperCase()) return void t.addClass("no-suggestions")
                    }
                    if (!n.targeted.length && !n.common.length) {
                        var a = this.element.data("no-suggestions-hint");
                        return a ? void t.append("<li>" + a + "</li>") : void t.addClass("no-suggestions")
                    }
                    t.removeClass("no-suggestions"), n.targeted.length && $.each(n.targeted, function(e, n) {
                        i._renderItemData(t, n)
                    }), n.targeted.length && n.common.length && t.append("<li><hr/></li>"), $.each(n.common, function(e, n) {
                        i._renderItemData(t, n)
                    })
                }
            }
        },
        Throbber: $('<img alt="Na�?A�tA!nA�…" title="Na�?A�tA!nA�…" />').attr("src", "/graphic/throbber.gif"),
        initDialogs: function() {
            $(".dialog-opener").on("click", function() {
                var t = $(this),
                    e = t.data("name"),
                    i = t.data("screen"),
                    n = t.data("ajax");
                return Dialog.fetch(e, i, {
                    ajax: n
                }), !1
            })
        },
        initUIElements: function() {
            $("#premium_points_buy, .premium-buy").off("click").click(function(t) {
                mobile || (Premium.buy(), t.preventDefault())
            }), Premium.initChecks()
        },
        initOverflowTooltips: function() {
            $(".overflow_tooltip").each(function() {
                this.offsetWidth < this.scrollWidth ? UI.ToolTip(this) : $(this).attr("title", "")
            })
        },
        InitProgressBars: function() {
            $(".progress-bar:not(.progress-bar-alive)").each(function() {
                UI.initProgressBar($(this))
            })
        },
        initProgressBar: function(t) {
            var e = t.children(":first").html(),
                i = (t.data("prefix") || "") + " ",
                n = " " + (t.data("suffix") || ""),
                o = t.find("div");
            "100%" === o[0].style.width && o.addClass("full");
            var a = $("<span>" + (i + e + n).trim() + "</span>").addClass("label").css("width", t.width() + "px");
            UI.onResizeEnd(t, function() {
                a.css("width", t.width() + "px")
            }), o.first().append(a), t.addClass("progress-bar-alive")
        },
        updateProgressBar: function(t, e, i) {
            var n = e / i * 100,
                o = (t.data("prefix") || "") + " ",
                a = " " + (t.data("suffix") || ""),
                s = t.find("div");
            s.css("width", n + "%"), 100 == n && s.addClass("full");
            var r = t.find(".label");
            r.html((o + Format.number(e) + " / " + Format.number(i) + a).trim())
        },
        checkForMessages: function() {
            var t = $.cookie("success_message");
            t && UI.SuccessMessage(t.replace(/\+/g, " ")), $.removeCookie("success_message")
        },
        Image: function(t, e) {
            var i = {
                src: image_base + t
            };
            return $.extend(i, e), $('<img alt="" />').attr(i)
        },
        CommandIcon: function(t, e) {
            var i = $("<span>").attr("data-command-id", e.unit);
            t.class && i.addClass(t.class);
            var n = t.tooltip || "";
            return e.own_command || e.is_shared ? (i.addClass("command_hover_details"), i.attr("data-icon-hint", escapeHtml(n, !0)), i.attr("data-command-type", e.type), Command.initHoverDetails(i)) : (i.addClass("tooltip"), i.attr("title", escapeHtml(n, !0))), i.append(UI.Image(t.img, {})), i
        },
        ToolTip: function(t, e) {
            if (!mobile) {
                var i = {
                    showURL: !1,
                    track: !0,
                    fade: 0,
                    delay: 0,
                    showBody: " :: ",
                    extraClass: "tooltip-style"
                };
                $(t).tooltip($.extend(i, e))
            }
        },
        DatePicker: function(t, e) {
            var i = {
                showButtonPanel: !0,
                dateFormat: "yy-mm-dd",
                showAnim: "fold",
                showOtherMonths: !0,
                selectOtherMonths: !0
            };
            $(t).datepicker($.extend(i, e))
        },
        Draggable: function(t, e) {
            var i = {
                    savepos: !0,
                    cursor: "move",
                    handle: $(t).find("div:first"),
                    appendTo: "body",
                    containment: [0, 60]
                },
                n = $.extend(i, e);
            $(t).draggable(n), n.savepos && $(t).bind("dragstop", function() {
                var e = $(document),
                    i = $(t).offset().left - e.scrollLeft(),
                    n = $(t).offset().top - e.scrollTop();
                $.cookie("popup_pos_" + $(t).attr("id"), i + "x" + n)
            })
        },
        Sortable: function(t, e) {
            var i = {
                cursor: "move",
                handle: $(t).find("div:first"),
                opacity: .6,
                helper: function(t, e) {
                    return e.children().each(function() {
                        $(this).width($(this).width())
                    }), e
                }
            };
            $(t).sortable($.extend(i, e))
        },
        SlimScroll: function(t, e) {
            e.maxHeight && ($(t).css({
                height: "",
                "max-height": e.maxHeight
            }), e.height = "auto"), $(t).parent(".slimScrollDiv").size() > 0 && $(t).parent().replaceWith($(t)), $(t).slimScroll(e)
        },
        ErrorMessage: function(t, e, i) {
            return UI.InfoMessage(t, e, "error", i)
        },
        SuccessMessage: function(t, e, i) {
            return UI.InfoMessage(t, e, "success", i)
        },
        InfoMessage: function(t, e, i, n) {
            $(".autoHideBox").remove(), e = e || 2e3;
            var o = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
            n = n || o || $("body"), i === !0 && (i = "error"), $("<div/>", {
                class: i ? "autoHideBox " + i : "autoHideBox",
                click: function() {
                    $(this).remove()
                },
                html: "<p>" + t + "</p>"
            }).appendTo(n).delay(e).fadeOut("slow", function() {
                $(this).remove()
            })
        },
        OmgMessage: function(t, e, i, n, o) {
            i = i || "", o = o || $("#ds_body");
            var a = t.offset().left - o.offset().left + t.width() / 2,
                s = t.offset().top - o.offset().top,
                r = s + t.height() / 2,
                c = 20,
                l = 5,
                d = s + t.height() - l,
                u = $('<div class="omg-message-container">').css({
                    top: Math.min(r - c / 2, d - c),
                    left: a - 150
                }).appendTo(o),
                f = $('<span class="omg-message ' + i + '"></span>').text(e);
            "object" == typeof n && null !== n && f.css(n), f.appendTo(u), setTimeout(function() {
                u.remove()
            }, 2e3)
        },
        BanneredRewardMessage: function(t, e) {
            var i = s('<div class="bannered-reward"><div class="bannered-reward-message">' + t + "</div></div>"),
                n = $(i).appendTo("body");
            e = e || 1800, setTimeout(function() {
                n.fadeOut(300, function() {
                    n.remove()
                })
            }, e)
        },
        ConfirmationBox: function(t, e, i, n, o) {
            $("#fader").remove();
            var a = "click";
            if (i = i || "confirmation-box", 0 === $("#" + i).length) {
                n !== !0 && e.push({
                    text: "Storno",
                    callback: function() {},
                    cancel: !0
                }), $("<div id='fader'><div class='confirmation-box' id='" + i + "' role='dialog' aria-labelledby='confirmation-msg'><div>" + (o ? t : "<p id='confirmation-msg' class='confirmation-msg'>" + t + "</p>") + "<div class='confirmation-buttons'></div></div></div></div>").appendTo("body").css("z-index", "14999");
                var s = $("#" + i);
                s.outerWidth() % 2 === 1 && s.css("width", s.outerWidth() + 1 + "px");
                var r = s.find(".confirmation-buttons");
                $("#mNotifyContainer").hide();
                var c = function(t) {
                    return function(e) {
                        return $("#fader > .confirmation-box").parent().hide(), $("#mNotifyContainer").show(), t(e), $(document).off("keydown.confirmbox"), !1
                    }
                };
                $(e).each(function(t, e) {
                    var i = $("<button class='btn' aria-label'" + e.text + "'>" + e.text + "</button>").bind(a, c(e.callback)).appendTo(r);
                    0 === t && i.focus(), e.confirm === !0 && i.addClass("evt-confirm-btn").addClass("btn-confirm-yes"), e.cancel === !0 && (i.addClass("evt-cancel-btn").addClass("btn-confirm-no"), $(document).on("keydown.confirmbox", null, "esc", c(e.callback)))
                })
            }
        },
        getConfirmHandler: function(t) {
            return function(e) {
                e.preventDefault();
                var i = $(e.target);
                i.hasClass("evt-confirm") || (i = i.parents(".evt-confirm"));
                var n = t || i.data("confirm-msg");
                return i.is("input, button") && UI.confirmSubmit(e, n), i.is("a") && UI.confirmLink(e, n), !1
            }
        },
        confirmLink: function(t, e) {
            var i = function() {
                var e = $(t.target).attr("href");
                "undefined" == typeof e && (e = $(t.target).closest("a").attr("href")), window.location = e
            };
            UI.addConfirmBox(e, i)
        },
        confirmSubmit: function(t, e) {
            var i = $(t.target),
                n = i.attr("name"),
                o = i.attr("value");
            n && o && ($("#submit-value-container").remove(), i.before("<input id='submit-value-container' type='hidden' name='" + n + "' value='" + o + "' />"));
            var a = function() {
                $(t.target).closest("form").submit()
            };
            UI.addConfirmBox(e, a)
        },
        addConfirmBox: function(t, e) {
            var i = [{
                text: "OK",
                callback: e,
                confirm: !0
            }];
            UI.ConfirmationBox(t, i)
        },
        AjaxPopup: function(t, e, i, n, o, a, s, r, c, l, d) {
            var u = $(".top_bar").height(),
                f = {
                    dataType: "json",
                    saveDragPosition: !0,
                    container: "#ds_body"
                },
                m = $.extend(f, a);
            if (m.reload || 0 === $("#" + e).length) {
                var p = null;
                if (t && (!c || !l)) {
                    p = t.srcElement ? t.srcElement : t.target;
                    var h = $(p).offset();
                    c || (c = h.left), l || (l = h.top + $(p).height() + 1)
                }
                r || (r = "auto"), s || (s = "auto");
                var g = "#" + e;
                if ("undefined" != typeof d && d.length > 0) {
                    var v;
                    for (v in d) d.hasOwnProperty(v) && (g = g + ", " + d[v])
                }
                var b = function(t) {
                    var i = null;
                    if (0 === $("#" + e).length) {
                        i = $("<div>").attr("id", e).addClass("popup_style").css({
                            width: s,
                            position: "fixed"
                        });
                        var a = $("<div>").attr("id", e + "_menu").addClass("popup_menu").html(n + '<a id="closelink_' + e + '" href="#">X</a>'),
                            d = $("<div>").attr("id", e + "_content").addClass("popup_content").css("height", r).css("overflow-y", "auto");
                        i.append(a).append(d), UI.Draggable(i, {
                            savepos: m.saveDragPosition
                        }), i.bind("dragstart", function() {
                            document.onselectstart = function(t) {
                                t.preventDefault()
                            }
                        }), i.bind("dragstop", function() {
                            document.onselectstart = function(t) {
                                $(t.target).trigger("select")
                            }
                        }), $(m.container).append($('<div class="popup_helper"></div>').append(i)), $("#closelink_" + e).click(function(t) {
                            t.preventDefault(), $(g).toggle()
                        })
                    } else i = $("#" + e);
                    if (o ? o.call(this, t, $("#" + e + "_content")) : $("#" + e + "_content").html(t), $.cookie("popup_pos_" + e)) {
                        var f = $.cookie("popup_pos_" + e).split("x");
                        c = parseInt(f[0], 10), l = parseInt(f[1], 10)
                    } else m.saveDragPosition && $.cookie("popup_pos_" + e, c + "x" + l);
                    if (!mobile) {
                        var p = i.outerHeight(),
                            h = i.outerWidth(),
                            v = $(window).width(),
                            b = $(window).height();
                        l + p > b && (l = b - p), c + h > v && (c = v - h), c < 0 && (c = 0), l < u && (l = u), i.css("top", l).css("left", c);
                        var w = function(t, e) {
                            var i = 0,
                                n = $(document).height() - $(t).outerHeight(),
                                o = $(document).width() - $(t).outerWidth(),
                                a = [i, e, o, n];
                            t.draggable("option", "containment", a)
                        };
                        w(i, u), $(window).resize(function() {
                            w(i, u)
                        })
                    }
                    if (mobile) {
                        var _ = {
                            position: "absolute",
                            top: $(window).scrollTop() + "px",
                            left: "0px",
                            height: "auto",
                            width: "auto",
                            overflow: "auto"
                        };
                        i.css(_), $("#" + e + "_content").css({
                            height: "auto"
                        })
                    }
                    i.show(), UI.init()
                };
                "json" === m.dataType ? TribalWars.get(i, {}, b) : $.ajax({
                    url: i,
                    dataType: m.dataType,
                    success: b
                })
            } else $("#" + e).show()
        },
        Notification: {
            SHOW_TIME: 6e3,
            _queue: [],
            _displayed_notifications: 0,
            show: function(t, e, i, n) {
                if (!window.mobile) {
                    var o = $("#side-notification-container");
                    o.length || (o = $('<div id="side-notification-container"></div>').appendTo("body"));
                    var a = o.position().top > 100;
                    if (!(a || this._displayed_notifications < 1)) return void this._queue.push({
                        img: t,
                        title: e,
                        content: i,
                        callback: n
                    });
                    var s = '<div class="side-notification"><div class="img-container"><img src="' + t + '" alt="" /></div><div class="content"><strong>' + e + "</strong><p>" + i + "</p></div></div>",
                        r = $(s);
                    r.on("click", n).prependTo(o).addClass("side-notification-visible"), this._displayed_notifications++;
                    var c = this;
                    setTimeout(function() {
                        c.removeNotification(r)
                    }, this.SHOW_TIME)
                }
            },
            showNext: function() {
                if (!(this._queue.length < 1)) {
                    var t = this._queue.shift();
                    this.show(t.img, t.title, t.content, t.callback)
                }
            },
            removeNotification: function(t) {
                var e = this,
                    i = function() {
                        t.remove(), e._displayed_notifications--, e.showNext()
                    };
                Modernizr.cssanimations ? (t.removeClass("side-notification-visible").addClass("side-notification-hide"), t.on("transitionend webkitTransitionEnd", function(e) {
                    t.off(e).addClass("side-notification-shrink").on("transitionend webkitTransitionEnd", function() {
                        i()
                    })
                })) : i()
            },
            debug: function() {
                this.show("/user_image.php?award=award1&level=4", "Achievement unlocked!", "Demolisher (Gold - Level 4) - Destroy 10.000 building levels using catapults")
            }
        },
        FormAbandon: {
            active: !1,
            verify: function(t) {
                if (UI.FormAbandon.active) return t.stopImmediatePropagation(), "MA!A! informace, kterA� nebyly uloA3eny. Jsi si jistA1, A3e chceA! i pA�esto tuto strA!nku opustit?"
            },
            init: function() {
                $(window).on("beforeunload", UI.FormAbandon.verify);
                var t = $(".confirm_abandonment");
                t.change(function() {
                    UI.FormAbandon.active = !0
                }), t.submit(function() {
                    UI.FormAbandon.active = !1
                })
            }
        },
        FormAllowOneSubmission: {
            init: function() {
                $(".submit-once").each(function() {
                    UI.FormAllowOneSubmission.registerForm(this)
                })
            },
            registerForm: function(t) {
                var e = $(t);
                e.submit(function(t) {
                    return e.data("lock-submission") ? void t.preventDefault() : void UI.FormAllowOneSubmission.lockForm(e)
                }), e.removeClass("submit-once")
            },
            lockForm: function(t) {
                t.data("lock-submission", 1), t.find("input[type=submit]").addClass("btn-disabled")
            }
        },
        onResizeEnd: function(t, e) {
            UI.Resize.end_handlers.push(e), $(t).on("resize.end", function(t) {
                clearTimeout(UI.Resize.timeout), UI.Resize.timeout = setTimeout(function() {
                    UI.Resize.callEndHandlers(t)
                }, 50)
            })
        },
        Resize: {
            timeout: null,
            end_handlers: [],
            callEndHandlers: function(t) {
                for (var e = 0; e < this.end_handlers.length; e++) this.end_handlers[e](t)
            }
        },
        Help: {
            init: function() {
                $(".help_link").click(function(t) {
                    t.preventDefault();
                    var e = $(this);
                    UI.Help.open(e.data("topic"), e.data("section"))
                })
            },
            open: function(t, e) {
                Dialog.fetch("ingame_help", "api", {
                    ajax: "help",
                    topic: t,
                    section: e
                })
            }
        }
    }
}(), $(document).ready(function() {
    UI.init()
});

; /**** game/BBCodes.js ****/
var BBCodes = {
    target: null,
    ajax_unit_url: null,
    ajax_building_url: null,
    init: function(o) {
        BBCodes.target = $(o.target), BBCodes.ajax_unit_url = o.ajax_unit_url, BBCodes.ajax_building_url = o.ajax_building_url
    },
    insert: function(o, e, t) {
        var r = BBCodes.target[0];
        if (r.focus(), "undefined" != typeof document.selection) {
            var i = document.selection.createRange(),
                c = i.text;
            i.text = o + c + e, i = document.selection.createRange(), c.length > 0 || 1 == t ? i.moveStart("character", o.length + c.length + e.length) : i.move("character", -e.length), i.select()
        } else if ("undefined" != typeof r.selectionStart) {
            var a = r.selectionStart,
                l = r.selectionEnd,
                c = r.value.substring(a, l),
                n = r.scrollTop;
            r.value = r.value.substr(0, a) + o + c + e + r.value.substr(l);
            var b;
            b = c.length > 0 || !0 === t ? a + o.length + c.length + e.length : a + o.length, r.setSelectionRange(a + o.length, l + o.length), r.scrollTop = n
        }
        return !1
    },
    colorPickerToggle: function(o) {
        var e = $("#bb_color_picker_tx").first();
        if (e.unbind("keyup").keyup(function() {
                var o = $("#bb_color_picker_tx").first(),
                    e = $("#bb_color_picker_preview").first();
                try {
                    e.css("color", o.val())
                } catch (o) {}
            }), o) return BBCodes.insert("[color=" + $(e).val() + "]", "[/color]"), $("#bb_color_picker").toggle(), !1;
        var t = [$("#bb_color_picker_c0").first(), $("#bb_color_picker_c1").first(), $("#bb_color_picker_c2").first(), $("#bb_color_picker_c3").first(), $("#bb_color_picker_c4").first(), $("#bb_color_picker_c5").first()];
        t[0].data("rgb", [255, 0, 0]), t[1].data("rgb", [255, 255, 0]), t[2].data("rgb", [0, 255, 0]), t[3].data("rgb", [0, 255, 255]), t[4].data("rgb", [0, 0, 255]), t[5].data("rgb", [255, 0, 255]);
        for (var r = 0; r <= 5; r++) t[r].unbind("click").click(function() {
            BBCodes.colorPickColor($(this).data("rgb"))
        });
        return BBCodes.colorPickColor(t[0].data("rgb")), $("#bb_color_picker").toggle(), !1
    },
    colorPickColor: function(o) {
        for (var e = 0; e < 6; e++)
            for (var t = 1; t < 6; t++) {
                var r = $("#bb_color_picker_" + t + e).first();
                r || alert("bb_color_picker_" + t + e);
                var i = e / 3,
                    c = t / 4.5;
                c = Math.pow(c, .5);
                var a = Math.max(0, 255 * i - 255),
                    l = Math.floor(Math.max(0, Math.min(255, o[0] * i * c + 255 * (1 - c) + a))),
                    n = Math.floor(Math.max(0, Math.min(255, o[1] * i * c + 255 * (1 - c) + a))),
                    b = Math.floor(Math.max(0, Math.min(255, o[2] * i * c + 255 * (1 - c) + a)));
                r.css("background-color", "rgb(" + l + "," + n + "," + b + ")"), r.data("rgb", [l, n, b]), r.unbind("click").click(function() {
                    BBCodes.colorSetColor($(this).data("rgb"))
                })
            }
    },
    colorSetColor: function(o) {
        var e = $("#bb_color_picker_preview").first(),
            t = $("#bb_color_picker_tx").first();
        e.css("color", "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")");
        var r = o[0].toString(16),
            i = o[1].toString(16),
            c = o[2].toString(16);
        r = r.length < 2 ? "0" + r : r, i = i.length < 2 ? "0" + i : i, c = c.length < 2 ? "0" + c : c, t.val("#" + r + i + c)
    },
    placePopups: function() {
        var o = $("#bb_button_size > span"),
            e = $("#bb_button_color > span"),
            t = $("#bb_sizes"),
            r = $("#bb_color_picker"),
            i = $(document).width();
        if (i || (i = document.body.clientWidth), o.length > 0 && t.offset({
                left: o.offset().left,
                top: o.offset().top + o.height() + 2
            }), e.length > 0) {
            var c = e.offset().left + e.width() - r.width();
            /MSIE 7/.test(navigator.userAgent) && (c -= 200), r.offset({
                left: c,
                top: e.offset().top + e.height() + 2
            })
        }
    },
    closePopups: function() {
        $("#bb_sizes").hide(), $("#bb_color_picker").hide()
    },
    setTarget: function(o) {
        BBCodes.target = o, $("#bb_popup_container").children().hide();
        var e = $("#bb_popup_container").detach();
        $(".bb_popup_container").remove(), o.before(e)
    },
    ajaxPopupToggle: function(o, e, t, r) {
        var i = $("#" + e);
        i && i.is(":visible") ? i.hide() : UI.AjaxPopup(o, e, t, r, null, {
            container: "#bb_popup_container"
        }, 200)
    },
    unitPickerToggle: function(o) {
        BBCodes.ajaxPopupToggle(o, "unit_picker", BBCodes.ajax_unit_url, "Jednotky")
    },
    buildingPickerToggle: function(o) {
        BBCodes.ajaxPopupToggle(o, "building_picker", BBCodes.ajax_building_url, "Budovy")
    },
    emojiToggle: function(o) {
        $("#bb_popup_container").off("click.emoji").on("click.emoji", ".emoji-selectable", function() {
            BBCodes.insert(":" + $(this).attr("title") + ":", "")
        }), BBCodes.ajaxPopupToggle(o, "emoji_picker", TribalWars.buildURL("GET", "api", {
            ajax: "emoji",
            bbcode: 1
        }), "SmajlA�ci")
    }
};

; /**** game/ScriptAPI.js ****/
var ScriptAPI = {
    active: [],
    url: "",
    version: null,
    register: function(r, t, i, e) {
        var a = function(r, t) {
            if (!t) throw "ScriptAPI: parameter ('" + r + "') requires a value."
        };
        if ("" !== ScriptAPI.url) {
            a("scriptname", r), a("author", i), a("email", e), "8.20" != t && "8.21" != t || (t = !0), "object" != typeof t || $.inArray(8.2, t) == -1 && $.inArray(8.21, t) == -1 || (t = !0), t = t === !0;
            var c = {
                    scriptname: r,
                    version: 0,
                    author: i,
                    email: e,
                    broken: !1
                },
                n = !1;
            for (var p in ScriptAPI.active) ScriptAPI.active[p].scriptname == r && (n = !0, c = ScriptAPI.active[p]);
            if (n || (ScriptAPI.active.push(c), ScriptAPI.save(c)), !c.broken && !t) throw c.broken = !0, ScriptAPI.notify(c), "Version incompatible!"
        }
    },
    notify: function(r) {
        var t = $("<li>").text(escapeHtml(r.scriptname) + " ");
        t.append($("<a>").attr("href", escapeHtml("mailto:" + r.email)).text("(Autor:" + escapeHtml(r.author) + ")")), $("#script_list").append(t), $("#script_warning").show()
    },
    save: function(r) {
        $.post(ScriptAPI.url, r)
    }
};

; /**** game/Premium.js ****/
var Premium;
! function() {
    "use strict";
    Premium = {
        initChecks: function() {
            $(".evt-check-pp").on("click", function() {
                var e = $(this);
                if (e.attr("disabled")) return !1;
                var a = e.data("feature"),
                    t = e.data("cost");
                return Premium.check(a, t, function() {
                    document.location = "#" != e.attr("href") ? e.attr("href") : e.data("url")
                }), !1
            }).removeClass("evt-check-pp")
        },
        check: function(e, a, t, i, n) {
            if (!a) return void t();
            "undefined" === i && (i = 0), "undefined" === n && (n = 0);
            var o = {
                feature: e,
                costs: a,
                days: i,
                save: n,
                ajax: "check_premium"
            };
            TribalWars.get("api", o, function(e) {
                if (e.insufficient_pp) return void Dialog.show("pp", e.insufficient_pp);
                if (e.prompt) {
                    var a = function() {
                            var a = $("#pp_prompt");
                            return a.length && a.is(":checked") ? void Premium.setPromptState(e.set_prompt_link, 0, t) : a.length && !a.is(":checked") && 0 === e.current_prompt_state ? void Premium.setPromptState(e.set_prompt_link, 1, t) : void t()
                        },
                        i = [{
                            text: "Potvrdit",
                            callback: a,
                            confirm: !0
                        }];
                    return void UI.ConfirmationBox(e.prompt, i, !1, [])
                }
                t()
            })
        },
        setPromptState: function(e, a, t) {
            TribalWars.get(e + "&prompt=" + a, {}, function() {
                t()
            })
        },
        buy: function(e) {
            if (mobile) return void TribalWars.redirect("premium", {
                mode: "premium"
            });
            Dialog.close();
            var a = $.extend({
                ajax: "buy_premium"
            }, e);
            Premium.isFacebookCanvas() && (a.facebook = 1), TribalWars.get("api", a, function(e) {
                var a = function() {
                    e.popup ? $(document.body).append(e.popup) : e.easypay && Premium.showEasyPay(e.easypay)
                };
                e.fb_library ? Premium.loadFacebookLibrary(e.fb_library, a) : a()
            }), $(window).off("message", Premium.handleMessage).on("message", Premium.handleMessage)
        },
        showEasyPay: function(e) {
            if (!$("#pay_frame").length) {
                var a, t = 244,
                    i = 530,
                    n = $('<iframe id="pay_frame" style="position: absolute; width: ' + t + "px; height: " + i + 'px" frameborder="0" src="' + e + '" />'),
                    o = $("#main_layout").offset().left,
                    r = $("#topContainer").height() + 10;
                a = o > t ? o - t : $("#premium_points_buy").offset().left - t / 2, n.css({
                    zIndex: 1e3,
                    top: r + "px",
                    left: a + "px"
                }), n.on("load", function() {
                    TribalWars.hideLoadingIndicator()
                }), TribalWars.showLoadingIndicator(), $("body").append(n), $(window).off("message", Premium.handleMessage).on("message", Premium.handleMessage)
            }
        },
        handleMessage: function(e) {
            "close_easypay_window" === e.originalEvent.data ? Premium.closeBuy() : "open_payment_window" === e.originalEvent.data ? (Premium.closeBuy(), Premium.buy({
                force: "full"
            })) : "payment_window_transaction_success" === e.originalEvent.data && (Premium.closeBuy(), Premium.showTransactionCompleteMessage()), "CloseCashshop" === e.originalEvent.data && Premium.closeBuy();
            var a = Premium.extractEventData(e.originalEvent.data);
            a && "Shop/close" === a.name && Premium.closeBuy()
        },
        extractEventData: function(e) {
            var a = new RegExp("^([^/]+)/([^:]+)(?::(.+))?$");
            if ("string" != typeof e) return !1;
            var t = e.match(a);
            if (null === t || 4 !== t.length) return !1;
            var i = {};
            if (void 0 !== t[3]) try {
                i = JSON.parse(t[3])
            } catch (e) {
                return !1
            }
            return {
                context: t[1],
                method: t[2],
                name: t[1] + "/" + t[2],
                data: i
            }
        },
        showTransactionCompleteMessage: function() {
            var e = '<div style="max-width: 450px" class="popup_box_header"><h2>Transakce dokon�?ena</h2>';
            e += '<img src="' + window.image_base + 'premium/coinbag_large.png" class="float_right" style="margin: 0 5px" />', e += "<p>DA�ky za tvoji platbu! TvA� PrA�miovA� body budou pA�ipsA!ny na tvA�j Ao�?et v nejbliA3A!A� době.</p>", e += "<p>Pokud neobdrA3A�A! prA�miovA� body během 15 minut, prosA�m nevA!hej a kontaktuj nA!A! Support tA1m.</p>", e += "</div>", Dialog.show("payment_success", e)
        },
        showFeatureTrialNotification: function() {
            Dialog.fetch("feature_trial", "premium", {
                ajax: "trial_dialog"
            })
        },
        closeBuy: function() {
            $("#pay_frame").remove(), $("#fader,#payment_box").remove(), TribalWars.track("pay_window_close", [])
        },
        features: {
            init: function() {
                $(".premium-offer").on("change", this.updatePrices), this.updatePrices();
                var e = $(".premium-sub");
                e.find("button").on("click", function() {
                    var e = $(this).attr("name");
                    $(this).parents("form").data("intent", e)
                }), e.on("submit", function() {
                    var e = $(this);
                    if (!e.data("confirmed")) {
                        var a = e.data("cost"),
                            t = e.data("feature"),
                            i = e.data("days"),
                            n = "gift" === e.data("intent") ? 1 : 0,
                            o = e.find("input[name=intent]");
                        o.length || (o = $('<input type="hidden" name="intent" />').appendTo(e)), o.val(e.data("intent"));
                        var r = function() {
                            e.data("confirmed", !0), e.submit()
                        };
                        return Premium.check(t, a, r, i, n), !1
                    }
                })
            },
            updatePrices: function() {
                $(".premium-offer, input[name=offer]").each(function() {
                    var e = $(this).find("option:selected"),
                        a = $(this).parents("form");
                    e.length || (e = $(this));
                    var t = e.data("feature"),
                        i = e.data("costs"),
                        n = e.data("days");
                    a.data("cost", i), a.data("days", n), a.data("feature", t);
                    var o = $("#premium-cost-" + t);
                    o.text(s("%1 bodA�", i))
                })
            },
            toggleAutoExtend: function(e) {
                TribalWars.post("premium", {
                    ajaxaction: "auto_renew",
                    feature: e.value,
                    active: e.checked ? 1 : 0
                }, null, function(e) {
                    var a;
                    a = e.active ? "TvA� nastavenA� bylo uloA3eno. Tato funkce bude automaticky prodlouA3ena." : "TvA� nastavenA� bylo uloA3eno. Tato funkce se jiA3 nebude automaticky prodluA3ovat.", e.extended_now ? (a += " TvA! prA�miovA! funkce byla navA�c nynA� obnovena.", document.location.reload(), $.cookie("success_message", a)) : UI.SuccessMessage(a)
                })
            }
        },
        directBuy: {
            init: function() {
                $(".premium_direct_buy").click(function() {
                    return Premium.directBuy.beginBuy($(this).data("feature")), !1
                })
            },
            beginGift: function(e, a) {
                Dialog.fetch("sub_gift", "premium", {
                    ajax: "direct_gift_dialog",
                    feature: a,
                    player_id: e
                }, function() {
                    Premium.features.init(), $(".direct-buy-form").on("submit", Premium.directBuy.finishBuy)
                }, {
                    class_name: "noborder"
                })
            },
            beginBuy: function(e) {
                return "ios" === window.game_data.device ? void TribalWars.redirect("premium") : void Dialog.fetch("sub_buy", "premium", {
                    ajax: "direct_buy_dialog",
                    feature: e
                }, function() {
                    Premium.features.init(), $(".direct-buy-form").on("submit", Premium.directBuy.finishBuy)
                }, {
                    class_name: "noborder"
                })
            },
            finishBuy: function() {
                var e = $(".direct-buy-form");
                if (!e.data("confirmed")) return !1;
                var a = e.serializeArray();
                return TribalWars.post("premium", {
                    ajaxaction: "accept"
                }, a, function(e) {
                    return e.hasOwnProperty("feature_was_activated") ? void window.location.reload() : e.hasOwnProperty("redirect") ? void(window.location = e.redirect) : (UI.SuccessMessage(e.success), void Dialog.close())
                }), !1
            }
        },
        showBlocked: function() {
            Dialog.fetch("blocked_points", "premium", {
                ajax: "blocked_points"
            })
        },
        showSalePromotion: function() {
            Dialog.fetch("premium_sale", "premium", {
                ajax: "sale_dialog"
            })
        },
        isFacebookCanvas: function() {
            return /^iframe_canvas/.test(window.name)
        },
        loadFacebookLibrary: function(e, a) {
            if ("undefined" != typeof InnoPaymentFacebookCanvasLib) return void a();
            var t = function() {
                window.innoPaymentFacebookCanvas = new InnoPaymentFacebookCanvasLib, window.innoPaymentFacebookCanvas.init({
                    appId: "283626988422290"
                }), a()
            };
            $.getScript(e, t)
        },
        checkForCanvasOnPurchasePage: function() {
            Premium.isFacebookCanvas() && ($("#pay_frame").remove(), Premium.buy())
        }
    }
}(), $(function() {
    Premium.directBuy.init()
});

; /**** game/Quests.js ****/
var Quests;
! function() {
    "use strict";
    Quests = {
        quests: {},
        handlers: {
            quest_completed: []
        },
        setQuestData: function(e, t) {
            "desktop" === window.game_data.device && ($.each(e, function(e, t) {
                Quests.hasQuest(e) ? Quests.getQuest(e).updateData(t) : "completed" !== t.state && Quests.addQuest(t)
            }), t === !0 && $.each(Quests.quests, function(e, t) {
                Quests.quests.hasOwnProperty(e) || t.destroy()
            }), "undefined" != typeof QuestArrows && QuestArrows.init())
        },
        getAll: function() {
            return Quests.quests
        },
        hasQuest: function(e) {
            return Quests.quests.hasOwnProperty(e)
        },
        getQuest: function(e) {
            return Quests.quests[e]
        },
        addQuest: function(e) {
            Quests.quests[e.id] = new Quest(e)
        },
        removeQuest: function(e) {
            delete Quests.quests[e]
        },
        handleButton: function(e) {
            return "guest_register" === e && GuestRegister.showDialog(), !1
        },
        onQuestCompleted: function(e) {
            this.handlers.quest_completed.push(e)
        },
        notifyQuestCompleted: function(e) {
            this.handlers.quest_completed.forEach(function(t) {
                t(e)
            })
        }
    }
}();

; /**** game/Quest.js ****/
var Quest;
! function() {
    "use strict";
    Quest = function(e) {
        var s, t, i = "completed",
            o = this;
        this.init = function(e) {
            o.updateData(e), s.on("click", o.open)
        }, this.updateData = function(e) {
            return e.state === i ? void o.destroy() : (t = e, o.render(), void(e.finished && !e.opened && 0 === $("#popup_box_quest").length && o.open()))
        }, this.render = function() {
            var e = !1;
            s || (s = $('<div class="quest" id="quest_' + t.id + '"><div class="quest_progress"></div><div class="quest_new ' + game_data.market + '">NovA�</div></div>'), e = !0), t.opened ? s.addClass("opened") : s.removeClass("opened"), t.finished ? s.addClass("finished") : s.removeClass("finished"), s.attr("title", t.title), s.css("background-image", "url(" + window.image_base + t.icon + ")"), o.renderProgress(), e && s.appendTo("#questlog")
        }, this.renderProgress = function() {
            var e = o.numberOfSetBits(t.goals_completed),
                i = o.numberOfSetBits(t.goals_total);
            if (e) {
                var n = s.find(".quest_progress");
                n.css("width", Math.min(100, e / i * 100) + "%")
            }
        }, this.open = function() {
            window.mobile || s.addClass("spin"), t.opened = !0, o.render(), s.addClass("opened"), TribalWars.get("api", {
                ajax: "quest_show",
                quest: t.id
            }, function(e) {
                s.removeClass("spin"), mobile ? ($("#quest-container").html(e).show(), $("#quest-close").show(), $("#mobileQuests").show(), document.location.replace("#mobileQuests")) : (Dialog.show("quest", e), UI.init()), "undefined" != typeof QuestArrows && QuestArrows.init()
            }, function() {
                s.removeClass("spin")
            })
        }, this.complete = function(e) {
            "undefined" == typeof e && (e = !1), Dialog.close();
            var s = t.id;
            TribalWars.post("api", {
                ajaxaction: "quest_complete",
                quest: s,
                skip: e
            }, null, function(e) {
                if (e.reward ? UI.SuccessMessage("A�kol dokon�?en! ZA�skal jsi:<br /><br />" + e.reward, 3e3) : UI.SuccessMessage("A�kol dokon�?en!", 3e3), o.destroy(), mobile) $("#quest-container").hide();
                else {
                    var t = e.detailed;
                    $.each(t, function(e, s) {
                        s.hasOwnProperty("resources") && $.each(s.resources, function(e, s) {
                            TribalWars.showResourceIncrease(e, s)
                        }), s.hasOwnProperty("text") && UI.SuccessMessage("ZA�skanA! odměna: " + s.text)
                    })
                }
                Quests.notifyQuestCompleted(s)
            })
        }, this.getArrowState = function() {
            return t.finished ? "finished" : t.opened ? "active" : "new"
        }, this.skip = function() {
            this.complete(!0)
        }, this.destroy = function() {
            s.fadeOut(500, function() {
                s.remove(), Quests.removeQuest(t.id), "undefined" != typeof QuestArrows && QuestArrows.init()
            })
        }, this.getGoalsCompleted = function() {
            return t.goals_completed
        }, this.numberOfSetBits = function(e) {
            return e -= e >> 1 & 1431655765, e = (858993459 & e) + (e >> 2 & 858993459), 16843009 * (e + (e >> 4) & 252645135) >> 24
        }, this.init(e)
    }
}();

; /**** game/QuestArrows.js ****/
var QuestArrows = {
    firstInit: !0,
    arrows: {
        1: {
            new: {
                arrow: "left",
                target: "#quest_1"
            },
            active: {
                arrow: "down",
                target: "villageHQ"
            }
        },
        2: {
            active: {
                arrow: "down",
                target: "quest2"
            }
        },
        9: {
            active: {
                arrow: "left",
                target: "quest9"
            }
        },
        41: {
            active: {
                arrow: "up",
                target: "quest41"
            }
        },
        1010: {
            new: {
                arrow: "left",
                target: "#quest_1010"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: {
                    arrow: "down",
                    target: "#main_buildlink_wood_1",
                    remember: "click"
                },
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1020: {
            new: {
                arrow: "left",
                target: "#quest_1020"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_stone_1",
                    remember: "click"
                }, {
                    arrow: "down",
                    target: "#main_buildlink_iron_1",
                    remember: "click"
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1030: {
            new: {
                arrow: "left",
                target: "#quest_1030"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_wood_2",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "down",
                    target: "#main_buildlink_stone_2",
                    remember: "click",
                    goal: 2
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1040: {
            new: {
                arrow: "left",
                target: "#quest_1040"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: {
                    arrow: "down",
                    target: "#main_buildlink_main_2",
                    remember: "click"
                },
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1050: {
            new: {
                arrow: "left",
                target: "#quest_1050"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_main_3",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }, {
                    arrow: "down",
                    target: "#main_buildlink_barracks_1",
                    remember: "click",
                    goal: 2
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1060: {
            new: {
                arrow: "left",
                target: "#quest_1060"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_wood_3",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }, {
                    arrow: "down",
                    target: "#main_buildlink_stone_3",
                    remember: "click",
                    goal: 2
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant2",
                    goal: 2
                }, {
                    arrow: "down",
                    target: "#main_buildlink_barracks_2",
                    remember: "click",
                    goal: 4
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1070: {
            active: {
                main: {
                    arrow: "down",
                    target: "#main_buildlink_storage_2",
                    remember: "click"
                }
            }
        },
        1090: {
            active: {
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_iron_2",
                    remember: "click"
                }, {
                    arrow: "down",
                    target: "#main_buildlink_storage_3",
                    remember: "click"
                }]
            }
        },
        1140: {
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_barracks, .visual-building-barracks1"
                },
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                },
                barracks: [{
                    arrow: "left",
                    target: "#spear_0",
                    remember: "keyup"
                }, {
                    arrow: "right",
                    target: ".btn-recruit",
                    remember: "click",
                    remember_id: "recruit"
                }]
            }
        },
        1150: {
            active: {
                barracks: [{
                    arrow: "left",
                    target: "#spear_0",
                    remember: "keyup",
                    goal: 1
                }, {
                    arrow: "right",
                    target: ".btn-recruit",
                    remember: "click",
                    remember_id: "recruit",
                    goal: 1
                }, {
                    arrow: "left",
                    target: "#quest_1150",
                    remember: "click"
                }],
                main: {
                    arrow: "down",
                    target: "#main_buildlink_barracks_3",
                    remember: "click"
                }
            }
        },
        1810: {
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: {
                    arrow: "down",
                    target: "#main_buildlink_statue_1",
                    remember: "click"
                }
            }
        },
        1820: {
            active: {
                default: {
                    arrow: "up",
                    target: "#header_menu_link_map"
                },
                map: [{
                    arrow: "left",
                    target: "#units_entry_all_spear",
                    remember: "click"
                }, {
                    arrow: "left",
                    target: "#units_entry_all_sword",
                    remember: "click"
                }, {
                    arrow: "up",
                    target: "#target_attack",
                    remember: "click"
                }, {
                    arrow: "up",
                    target: "#troop_confirm_go"
                }]
            }
        },
        1821: {
            active: {
                default: {
                    arrow: "up",
                    target: "#header_menu_link_map"
                },
                map: [{
                    arrow: "left",
                    target: "#units_entry_all_spear",
                    remember: "click"
                }, {
                    arrow: "left",
                    target: "#units_entry_all_sword",
                    remember: "click"
                }, {
                    arrow: "up",
                    target: "#target_attack",
                    remember: "click"
                }, {
                    arrow: "up",
                    target: "#troop_confirm_go"
                }]
            }
        }
    },
    sizes: {
        left: [67, 71],
        right: [67, 71],
        down: [70, 68],
        up: [70, 68]
    },
    init: function() {
        if (!window.mobile) {
            var r = Quests.getAll();
            $(".quest_arrow").remove(), $(".quest-arrow-target").removeClass("quest-arrow-target"), $.each(r, function(r, e) {
                var a = e.getArrowState();
                QuestArrows.arrows.hasOwnProperty(r) && QuestArrows.arrows[r].hasOwnProperty(a) && QuestArrows.showArrow(r, QuestArrows.arrows[r][a])
            }), this.firstInit && (this.firstInit = !1, UI.onResizeEnd(window, this.onResize))
        }
    },
    onResize: function() {
        $(".quest_arrow").length && QuestArrows.init()
    },
    getTarget: function(r) {
        return this.callbacks.hasOwnProperty(r) ? $target = this.callbacks[r]() : $target = $(r), $target
    },
    checkArrowEligibility: function(r, e) {
        if (e.hasOwnProperty("remember")) {
            var a = e.hasOwnProperty("remember_id") ? e.remember_id : QuestArrows.getTarget(e.target).attr("id");
            if (!a) return !1;
            if (QuestArrows.isRemembered(r, a)) return !1
        }
        return !(e.hasOwnProperty("goal") && e.goal & Quests.getQuest(r).getGoalsCompleted())
    },
    showArrow: function(r, e) {
        if (!e.hasOwnProperty("arrow")) {
            var a = e.hasOwnProperty(game_data.screen) ? e[game_data.screen] : e.default;
            if (!a) return !1;
            if (a.hasOwnProperty("arrow")) e = a;
            else {
                var t = !1;
                if ($.each(a, function(a, i) {
                        if (QuestArrows.checkArrowEligibility(r, i)) return e = i, t = !0, !1
                    }), !t) return !1
            }
        }
        var i, n, o, l, s, m = e.arrow,
            w = this.sizes[m];
        if (i = this.callbacks.hasOwnProperty(e.target) ? this.callbacks[e.target]() : $(e.target), !i || !i.length) return !1;
        if (e.hasOwnProperty("remember") && QuestArrows.isRemembered(r, QuestArrows.getTarget(e.target))) return !1;
        i.data("arrow") && (m = i.data("arrow"));
        var g = $('<img class="quest_arrow quest_arrow_' + m + '" src="/graphic/quests/ar_' + m + '.png" alt="" />');
        g.css({
            width: w[0] + "px",
            height: w[1] + "px"
        }), $("body").append(g);
        var _ = i.offset();
        n = _.left, o = _.top, l = i.outerWidth(), s = i.outerHeight(), this.positionArrow(g, n, o, l, s, m, i.zIndex() + 1), i.addClass("quest-arrow-target"), e.hasOwnProperty("remember") && i.on(e.remember, function() {
            QuestArrows.remember(r, i.attr("id")), QuestArrows.init()
        })
    },
    remember: function(r, e) {
        window.sessionStorage.setItem(game_data.world + "_questprogress_" + r + "_" + e, !0)
    },
    isRemembered: function(r, e) {
        return null !== window.sessionStorage.getItem(game_data.world + "_questprogress_" + r + "_" + e)
    },
    positionArrow: function(r, e, a, t, i, n, o) {
        var l = this.sizes[n][0],
            s = this.sizes[n][1],
            m = 0,
            w = 0;
        "left" == n ? (m = e + t + 5, w = a + i / 2 - s / 2) : "right" == n ? (m = e - l - 5, w = a + i / 2 - s / 2) : "down" == n ? (m = e + t / 2 - l / 2, w = a - s - 5) : "up" == n && (m = e + t / 2 - l / 2, w = a + s / 2 + 5), r.css({
            left: m + "px",
            top: w + "px",
            "z-index": o
        })
    },
    callbacks: {
        villageHQ: function() {
            var r = $("#buildings_visual");
            return "overview" != game_data.screen ? $("#menu_row2_village").find("a").data("arrow", "left") : r.length ? $("img.p_main") : $("#l_main").find("a:not(#upgrade_level_main)").first()
        },
        quest2: function() {
            if ("main" == game_data.screen) {
                var r = !1;
                return game_data.village.buildings.wood < 1 && 0 == $(".buildorder_wood").length ? r = $("#main_buildlink_wood_1") : game_data.village.buildings.stone < 1 && 0 == $(".buildorder_stone").length && (r = $("#main_buildlink_stone_1")), r ? r.data("arrow", "left") : $.cookie("qa2_done", 1, {
                    expires: 7,
                    path: "/"
                }), r
            }
            return !$.cookie("qa2_done") && QuestArrows.callbacks.villageHQ()
        },
        quest9: function() {
            if (0 != $("#quest_9").data("progress")) return !1;
            if ("map" == game_data.screen);
            else {
                if ("info_village" != game_data.screen) return "place" == game_data.screen ? $("#target_attack").length ? $("#target_attack") : $("#troop_confirm_go") : $("#menu_map_link");
                if (0 == VillageInfoData.player_id) return $("#send_troops")
            }
        },
        quest41: function() {
            if ("flags" != game_data.screen) {
                var r = $(".icon.flags_new, .icon.flags");
                return r ? r.data("arrow", "up") : $(".icon.flags").data("arrow", "up")
            }
            if ("flags" == game_data.screen) return "index" != game_data.mode && game_data.mode ? $("#content_value").find(".modemenu").find("td").first().data("arrow", "down") : $("#flag_box_1_1")
        }
    }
};

; /**** game/VillageContext.js ****/
var VillageContext = {
    claim_enabled: !1,
    igm_enabled: !1,
    send_troops_enabled: !1,
    send_attack_disabled: !1,
    _button_order: {
        pa_own: ["info", "recruit", "map", "overview", "", "market", "place"],
        pa_other: ["info", "claim", "map", "", "fav", "market", "place"],
        free_own: ["info", "", "map", "overview", "", "market", "place"],
        free_other: ["info", "", "map", "", "", "market", "place"]
    },
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
    _requires_extra: ["claim", "fav"],
    _buttons_created: [],
    _open: !1,
    _urls: {},
    _current_anchor: null,
    _titles: {
        info: "Informace o vesnici",
        recruit: "Rekrutace",
        map: "Zobrazit na mapě",
        overview: "NA!hled vesnice",
        market: "Rozeslat suroviny",
        place: "Poslat jednotky ",
        claim: "Rezervovat vesnici",
        unclaim: "",
        fav: "PA�idat k favoritA�m",
        unfav: "Odebrat z favoritA�"
    },
    init: function(e) {
        "undefined" != typeof mobile && mobile || (e ? e.find(".village_anchor:not(.contexted)").each(VillageContext.enableContext) : $(".village_anchor:not(.contexted)").each(VillageContext.enableContext))
    },
    enableContext: function() {
        var e = $('<a class="ctx" href="#"></a>');
        $(this).append(e).addClass("contexted"), e.click(VillageContext.toggleForVillage)
    },
    toggleForVillage: function() {
        var e = $(this).parent(),
            a = e.data("id"),
            t = e.data("player"),
            i = $(this).offset(),
            n = [i.left + 6, i.top + 6];
        return VillageContext.beginShow($(this), n, a, t), !1
    },
    hide: function() {
        VillageContext._current_anchor && (VillageContext._current_anchor.removeClass("spin"), VillageContext._current_anchor = null), $(".village_ctx").hide(), $("body").unbind("click", VillageContext.hide), VillageContext._open = !1
    },
    beginShow: function(e, a, t, i) {
        this._open && this.hide(), VillageContext._current_anchor = e;
        var n, o = this;
        n = premium ? i == game_data.player.id ? this._button_order.pa_own : this._button_order.pa_other : i == game_data.player.id ? this._button_order.free_own : this._button_order.free_other;
        var r = !1;
        $.each(this._requires_extra, function(e, a) {
            if (r || $.inArray(a, n) != -1) return void(r = !0)
        }), r ? (VillageContext._current_anchor.addClass("spin"), $.getJSON("/game.php?screen=api&ajax=village_context", {
            id: t
        }, function(e) {
            return e.error ? void UI.ErrorMessage(e.error) : void o.show(a, t, i, n, e)
        })) : this.show(a, t, i, n, null)
    },
    show: function(e, a, t, i, n) {
        var o = this,
            r = this._circlePos;
        $(i).each(function(i, l) {
            if ("" != l && ("market" != l && "place" != l || a != game_data.village.id) && ("claim" !== l || game_data.player.ally && VillageContext.claim_enabled) && (VillageContext.igm_enabled || "msg" !== l) && ("place" != l || VillageContext.send_troops_enabled)) {
                "fav" == l && n.fav && (l = "unfav"), "claim" == l && n.claim && (l = "unclaim"), "unclaim" == l && (o._titles[l] = n.unclaim_title);
                var c, s = o._titles[l],
                    _ = o._urls[l].replace(/__village__/, a).replace(/__owner__/, t).replace(/__source__/, game_data.village.id);
                $.inArray(l, o._buttons_created) == -1 ? (c = $('<a class="village_ctx" id="ctx_' + l + '" title="' + s + '" href=""></a>'), o._buttons_created.push(l)) : c = $("#ctx_" + l), _.match(/json/) ? o.ajaxRegister(c, l, _) : c.attr("href", _), c.attr("title", s), c.appendTo("body").css("left", e[0] + r[i][0] + "px").css("top", e[1] + r[i][1] + "px").stop().css("opacity", 0).show().fadeTo(120, 1)
            }
        }), VillageContext._current_anchor.removeClass("spin"), $("body").bind("click", VillageContext.hide), this._open = !0
    },
    ajaxRegister: function(e, a, t) {
        e.unbind("click").click(function(e) {
            e.preventDefault();
            var i = (new Date).getTime();
            if (!(this._last && i - this._last < 900)) return this._last = i, $.ajax({
                url: t,
                dataType: "json",
                success: function(e) {
                    VillageContext.ajaxDone(a, e)
                }
            }), !1
        })
    },
    ajaxDone: function(e, a) {
        switch (this.hide(), e) {
            case "claim":
            case "unclaim":
                if (!a.code) {
                    UI.ErrorMessage(a.error);
                    break
                }
                a.notice && UI.InfoMessage(a.notice), "delete" == a.type ? (UI.SuccessMessage("Rezervace byla zruA!ena!"), a.id && ($("#reservation_" + a.id).fadeOut(), "info_player" == game_data.screen && $("#reservation_" + a.village).hide())) : (UI.SuccessMessage("Vesnice byla rezervovA!na."), "info_player" == game_data.screen && (lock_icon = $("#reservation_" + a.village), lock_icon.attr("src", "https://dscs.innogamescdn.com/8.86/33385/graphic/map/reserved_player.png"), lock_icon.attr("title", " :: RezervovA!no tebou"), UI.ToolTip(lock_icon), lock_icon.show()));
                break;
            case "fav":
            case "unfav":
                if (!a.code) {
                    UI.ErrorMessage(a.error, null, message_container);
                    break
                }
                "fav" == e ? UI.SuccessMessage("Vesnice byla pA�idA!na do favoritA�.") : UI.SuccessMessage("Vesnice byla odstraněna z favoritA�.")
        }
    }
};

; /**** game/Favicon.js ****/
var Favicon = {
    update: function() {
        var e, t = document.createElement("canvas"),
            n = document.createElement("img"),
            a = document.getElementById("favicon").cloneNode(!0),
            i = Number(game_data.player.incomings),
            o = "";
        o = i < 100 ? i.toString() : i < 1e3 ? "99+" : i < 1e4 ? i.toString().substring(0, 1) + "k" : ": O", t.getContext && (n.onload = function() {
            if (t.height = t.width = 16, e = t.getContext("2d"), 0 !== i) {
                var n = 8,
                    d = 2.5,
                    c = 11;
                1 === o.length ? (n = 12, d = 4.5, c = 12.3) : 2 === o.length && (n = 10, d = 1.5, c = 11), e.drawImage(this, 0, 0), e.font = "bold " + n + 'px "helvetica", sans-serif', e.fillStyle = "#333333", e.fillText(o, d, c), a.href = t.toDataURL("image/png")
            } else a.href = image_base + "favicon.png";
            var g = document.getElementById("favicon");
            g.parentNode.removeChild(g), document.head.appendChild(a)
        }, n.src = "/graphic/favicon_lit.png")
    }
};
$(function() {
    !document.getElementById("favicon") || "undefined" == typeof game_data || "undefined" != typeof mobile && mobile || 0 === game_data.player.incomings || Favicon.update()
});

; /**** game/WorldSwitch.js ****/
var WorldSwitch = {
    worldsURL: "",
    loaded: !1,
    init: function() {
        $(".evt-world-selection-toggle").click(function() {
            var o = "none" == $("#world_selection_popup").css("display");
            o ? WorldSwitch.show() : WorldSwitch.hide()
        })
    },
    hide: function() {
        $("#world_selection_clicktrap").hide(), $("#world_selection_popup").hide()
    },
    show: function() {
        var o = function() {
            $("#world_selection_clicktrap").show(), $("#world_selection_popup").show(), $("#world_selection_popup").css("left", $("#footer .evt-world-selection-toggle").offset().left - 10 + "px")
        };
        WorldSwitch.loaded ? o() : $.getJSON(WorldSwitch.worldsURL, function(l) {
            $("#servers-list-block").html(l.html), o(), WorldSwitch.loaded = !0
        })
    }
};

; /**** game/general.js ****/
function repositionAd() {
    var e = $(window),
        o = $("#SkyScraperAd");
    o.css("height", e.height() - 85 + "px"), o.css("top", Math.max(e.scrollTop() + 10, 60) + "px");
    var t = $("#SkyScraperAdCell").offset();
    o.css("left", t.left + "px"), window.setTimeout("repositionAd()", 100)
}

function supportsFixed() {
    var e = document.createElement("div");
    e.id = "testingPositionFixed", e.style.position = "fixed", e.style.top = "0px", e.style.right = "0px", document.body.appendChild(e);
    var o = 1,
        t = !1;
    return "number" == typeof e.offsetTop && null != e.offsetTop && "undefined" != e.offsetTop && (o = parseInt(e.offsetTop)), 0 === o && (t = !0), document.body.removeChild(e), t
}

function selectVillage(e, o) {
    var t = window.location.href;
    t.search(/village=\w*/) != -1 ? t = t.replace(/village=\w*/, "village=" + e) : t += "&village=" + e, t = t.replace(/action=\w*/, ""), t.search(/group=\w*/) != -1 ? t = t.replace(/group=\w*/, "group=" + o) : t += "&group=" + o, window.location.href = encodeURI(t)
}
$(window).load(function() {
    var e = $(window);
    if ("iPad" != navigator.platform && "iPhone" != navigator.platform && "iPod" != navigator.platform) $("#SkyScraperAd, #SkyScraperAdLeft").css("height", e.height() - 85 + "px"), e.bind("scroll resize", function() {
        $("#SkyScraperAd, #SkyScraperAdLeft").css("height", e.height() - 85 + "px")
    });
    else {
        var o = $("#SkyScraperAd");
        o.css("position", "absolute"), o.css("height", e.height() - 85 + "px"), o.css("top", Math.max(e.scrollTop() + 10, 60) + "px");
        var t = $("#SkyScraperAdCell").offset();
        o.css("left", t.left + "px"), window.setTimeout("repositionAd()", 100)
    }
    var i = $("#SkyScraperAdLeft");
    i.css("margin-left", "-" + (i.width() - 5) + "px")
}), $(document).ready(function() {
    "undefined" != typeof mobile_on_normal && mobile_on_normal && ($("#footer").css("position", "static").css("margin-top", "10px"), $("body").css("padding-bottom", 0))
});

; /**** game/TribalWars.js ****/
var TribalWars;
! function() {
    "use strict";
    TribalWars = {
        _script: "/game.php",
        _loadedJS: [],
        _onLoadHandler: null,
        _inputCache: {},
        _previousData: {},
        _data_update_stamps: {},
        _settings: {
            sound: !1
        },
        _tabID: null,
        _tabActive: !0,
        _tabTimeout: !1,
        _lastActivity: null,
        _lastSound: 0,
        _chat: null,
        Modules: {},
        constants: {},
        fetch: function(a, e) {
            this.registerOnLoadHandler(null), this.cacheInputVars(), e || this.showLoadingIndicator(), $.getJSON(a, function(a) {
                TribalWars.hideLoadingIndicator(), TribalWars.handleResponse(a), UI.init(), UnitPopup.init()
            })
        },
        get: function(a, e, t, r, n) {
            var i = this.buildURL("GET", a, e);
            this.request("GET", i, {}, t, r, n)
        },
        post: function(a, e, t, r, n, i) {
            var s = this.buildURL("POST", a, e);
            this.request("POST", s, t, r, n, i)
        },
        request: function(a, e, t, r, n, i) {
            i !== !0 && this.showLoadingIndicator(), $.ajax({
                url: e + "&client_time=" + Math.round(Timing.getCurrentServerTime() / 1e3),
                data: t,
                type: a,
                dataType: "json",
                headers: {
                    "TribalWars-Ajax": 1
                },
                success: function(a) {
                    TribalWars.hideLoadingIndicator(), TribalWars.handleResponse(a, r, n)
                },
                error: function(a, e) {
                    if (TribalWars.hideLoadingIndicator(), 0 !== a.readyState) {
                        if (429 === a.status) return void UI.ErrorMessage("Tvoje akce byla zablokovA!na, protoA3e jsi provedl pA�A�liA! mnoho poA3adavkA� na nA!A! server.", 3e3);
                        UI.ErrorMessage("PoA3adavek se nezdaA�il. Server mA�A3e mA�t potA�A3e."), "function" == typeof n && n()
                    }
                }
            })
        },
        redirect: function(a, e) {
            var t = TribalWars.buildURL("GET", a, e);
            window.location.href = t
        },
        buildURL: function(a, e, t) {
            var r = "";
            return "string" == typeof e && ("/" === e.charAt() ? (r = e, "object" == typeof t && (e = t)) : e = $.extend({
                screen: e
            }, t)), "" === r && ("object" == typeof e && null !== e && "undefined" != typeof e.village ? (r = TribalWars._script + "?village=" + e.village, delete e.village) : r = game_data.hasOwnProperty("village") ? TribalWars._script + "?village=" + game_data.village.id : TribalWars._script + "?village="), "object" == typeof e && null !== e && (r += "&" + $.param(e)), ("POST" === a || "object" == typeof e && null !== e && e.hasOwnProperty("action")) && r.indexOf("&h=") === -1 && (r += "&h=" + window.csrf_token), game_data.player.sitter > 0 && (r += "&t=" + game_data.player.id), r
        },
        handleResponse: function(a, e, t) {
            if (TribalWars._previousData = $.extend(!0, {}, window.game_data), a.hasOwnProperty("redirect")) {
                var r = String(document.location),
                    n = r.indexOf(a.redirect);
                if (n === -1 || r.substring(n) !== a.redirect) return void(document.location = a.redirect)
            }
            if (!a.hasOwnProperty("error") && !a.hasOwnProperty("response") && !a.hasOwnProperty("content")) return void UI.ErrorMessage("PoA3adavek se nezdaA�il. Server mA�A3e mA�t potA�A3e.");
            if (a.error) {
                var i;
                return i = Array.isArray(a.error) && a.error.length > 1 ? "<ul>" + a.error.map(function(a) {
                    return "<li>" + a + "</li>"
                }).join("") + "</ul>" : Array.isArray(a.error) ? a.error[0] : a.error, UI.ErrorMessage(i), void("function" == typeof t && t())
            }
            if (a.time_diff && UI.InfoMessage(a.time_diff), a.content && $("#content_value").html(a.content), a.content && (UI.ToolTip(".tooltip"), TribalWars.contentLoaded()), a.game_data) {
                var s = window.game_data.screen;
                TribalWars.updateGameData(a.game_data), window.game_data.screen = s, setTimeout(function() {
                    Timing.resetTickHandlers()
                }, 10)
            }
            a.quest_data && Quests.setQuestData(a.quest_data, !0), "partial_reload" === a.response ? $(document).trigger("partial_reload_end") : null !== a.response && e(a.response), mobile ? TribalWars.updateHeaderOnMobile() : TribalWars.updateHeader(), a.bot_protect && BotProtect.show(a.bot_protect)
        },
        updateGameData: function(a) {
            "undefined" == typeof window.game_data ? window.game_data = a : (TribalWars._previousData = $.extend(!0, {}, window.game_data), $.each(a, function(e, t) {
                TribalWars.mergeGameDataProperty(e, t, a.time_generated, window.game_data, TribalWars._data_update_stamps)
            })), "undefined" != typeof window.game_data.village && (Village.isPrototypeOf(window.game_data.village) || (window.game_data.village = $.extend(!0, Object.create(Village), window.game_data.village)))
        },
        mergeGameDataProperty: function(a, e, t, r, n) {
            "object" == typeof e && null !== e ? ("object" != typeof n[a] && (n[a] = {}), r[a] || (r[a] = {}), $.each(e, function(e, i) {
                TribalWars.mergeGameDataProperty(e, i, t, r[a], n[a])
            })) : (!n.hasOwnProperty(a) || n[a] < t) && (r[a] = e, n[a] = t)
        },
        handleGameData: function(a) {
            TribalWars.updateGameData(a), mobile ? TribalWars.updateHeaderOnMobile() : TribalWars.updateHeader(), a.hasOwnProperty("village") && Timing.resetTickHandlers()
        },
        showLoadingIndicator: function() {
            $("#loading_content").show()
        },
        hideLoadingIndicator: function() {
            $("#loading_content").hide()
        },
        updateHeader: function() {
            if (window.game_data.hasOwnProperty("village")) {
                $("#storage").text(game_data.village.storage_max);
                var a = $("#pop_current_label");
                if (a.text(game_data.village.pop), changeResStyle(a, Format.get_warn_pop_class(game_data.village.pop, game_data.village.pop_max, game_data.village.is_farm_upgradable)), $("#pop_max_label").text(game_data.village.pop_max), parseInt(this._previousData.player.rank) !== parseInt(game_data.player.rank)) {
                    var e = $("#rank_rank").html(game_data.player.rank_formatted);
                    this._previousData.player.rank > game_data.player.rank && (e.addClass("increased"), setTimeout(function() {
                        e.removeClass("increased")
                    }, 100))
                }
                if (parseInt(this._previousData.player.points) !== parseInt(game_data.player.points)) {
                    var t = $("#rank_points").html(game_data.player.points_formatted);
                    this._previousData.player.points < game_data.player.points && (t.addClass("increased"), setTimeout(function() {
                        t.removeClass("increased")
                    }, 100))
                }
            }
            $("#premium_points").text(game_data.player.pp);
            var r = $("#new_mail"),
                n = r.hasClass("new_mail_faded"),
                i = parseInt(game_data.player.new_igm);
            i > 0 && n ? r.removeClass("new_mail_faded").addClass("new_mail") : 0 !== i || n || r.hide(), $(".badge-mail").text(i ? " (" + i + ")" : "");
            var s = $("#new_report"),
                o = s.hasClass("new_report_faded"),
                l = parseInt(game_data.player.new_report);
            l > 0 && o ? s.removeClass("new_report_faded").addClass("new_report") : 0 !== l || o || s.hide(), $(".badge-report").text(l ? " (" + l + ")" : "");
            var d = parseInt(game_data.player.new_forum_post),
                p = parseInt(game_data.player.new_ally_invite),
                _ = parseInt(game_data.player.new_ally_application),
                u = d + p + _,
                c = $("#tribe_forum_indicator");
            c.hasClass("no_new_post") && d ? c.removeClass("no_new_post").addClass("new_post").attr("title", "NovA1 pA�A�spěvek v KmenovA�m fA3rum") : c.hasClass("new_post") && !d && c.removeClass("new_post").addClass("no_new_post").attr("title", "A1A!dnA1 novA1 pA�A�spěvek v KmenovA�m fA3rum"), $(".badge-ally-forum-post").text(d ? " (" + d + ")" : ""), $(".badge-ally-application").text(_ ? " (" + _ + ")" : ""), $(".badge-ally-invite").text(p ? " (" + p + ")" : ""), $("#menu_counter_ally").text(u ? " (" + u + ")" : "");
            var m = parseInt(game_data.player.sitter) ? 0 : parseInt(game_data.player.new_buddy_request),
                g = parseInt(game_data.player.sitter) ? 0 : parseInt(game_data.player.new_daily_bonus),
                b = parseInt(game_data.player.new_items),
                f = m + b + g;
            $(".badge-buddy").text(m ? " (" + m + ")" : ""), $(".badge-daily-bonus").text(g ? " (" + g + ")" : ""), $(".badge-inventory").text(b ? " (" + b + ")" : ""), $("#menu_counter_profile").text(f ? " (" + f + ")" : "");
            var v = $("#header_commands");
            game_data.player.incomings !== this._previousData.player.incomings && (!v.hasClass("has_incomings") && parseInt(game_data.player.incomings) > 0 ? v.addClass("has_incomings") : v.hasClass("has_incomings") && 0 === parseInt(game_data.player.incomings) && v.removeClass("has_incomings"), $("#incomings_amount").text(game_data.player.incomings), Favicon.update()), window.premium && parseInt(game_data.player.supports) !== parseInt(this._previousData.player.supports) && (!v.hasClass("has_supports") && parseInt(game_data.player.supports) > 0 ? v.addClass("has_supports") : v.hasClass("has_supports") && 0 === parseInt(game_data.player.supports) && v.removeClass("has_supports"), $("#supports_amount").text(game_data.player.supports))
        },
        updateHeaderOnMobile: function() {
            $("#storage").text(game_data.village.storage_max), $("#pop_current_label").text(game_data.village.pop), $("#pop_max_label").text(game_data.village.pop_max);
            var a = $("#notify_mail");
            "none" === a.css("display") && 1 === parseInt(game_data.player.new_igm) ? a.show() : "none" !== a.css("display") && 0 === parseInt(game_data.player.new_igm) && a.hide();
            var e = $("#notify_report");
            "none" === e.css("display") && 1 === parseInt(game_data.player.new_report) ? e.show() : "none" !== e.css("display") && 0 === parseInt(game_data.player.new_report) && e.hide();
            var t = $("#notify_forum");
            1 === parseInt(game_data.player.new_forum_post) ? t.show() : t.hide();
            var r = $("#notify_incomings");
            parseInt(game_data.player.incomings) > 0 ? r.show() : r.hide(), r.find(".mNotifyNumber").last().text(game_data.player.incomings);
            var n = $("#notify_supports");
            parseInt(game_data.player.supports) > 0 ? n.show() : n.hide(), n.find(".mNotifyNumber").last().text(game_data.player.supports)
        },
        cacheInputVars: function() {
            this._inputCache = {};
            var a = 0;
            $("#content_value").find("input[type=text]:visible").each(function() {
                var e = $(this);
                if (e.attr("id")) {
                    if (++a > 20) return !1;
                    TribalWars._inputCache["#" + e.attr("id")] = e.val()
                } else if (e.attr("name")) {
                    if (++a > 20) return !1;
                    TribalWars._inputCache["input[name=" + e.attr("name").replace("[", "\\[").replace("]", "\\]") + "]"] = e.val()
                }
            })
        },
        restoreInputVars: function() {
            var a = $("#content_value");
            $.each(this._inputCache, function(e, t) {
                a.find(e).val(t)
            })
        },
        contentLoaded: function() {
            this._onLoadHandler && this._onLoadHandler(), TribalWars.restoreInputVars()
        },
        registerOnLoadHandler: function(a) {
            this._onLoadHandler = a
        },
        shouldPartialLoad: function() {
            return !0
        },
        showResourceIncrease: function(a, e) {
            var t = $("#" + a),
                r = t.offset(),
                n = $('<span id="' + a + '_gain"></span>').text("+" + e);
            n.css({
                top: r.top - 8 + "px",
                left: r.left - 3 + "px"
            }), n.appendTo($("body")), n.animate({
                top: r.top - 20 + "px"
            }, 1600, "linear", function() {
                $(this).delay(500).fadeOut().remove()
            })
        },
        dev: function() {
            TribalWars.get("dev", {
                ajax: "options"
            }, function(a) {
                $(a.options).insertAfter(".server_info")
            })
        },
        playAttackSound: function() {
            TribalWars._settings.sound && ((new Date).getTime() - TribalWars._lastSound < 6e4 || (TribalWars.playSound("attack"), TribalWars._lastSound = (new Date).getTime()))
        },
        playSound: function(a) {
            var e = '<audio autoplay><source src="' + image_base + "/sound/" + a + '.ogg" type="audio/ogg" /><source src="' + image_base + "/sound/" + a + '.mp3" type="audio/mpeg" /></audio>',
                t = $(e).appendTo("body");
            setTimeout(function() {
                t.remove()
            }, 1500)
        },
        setSetting: function(a, e, t) {
            TribalWars.post("settings", {
                ajaxaction: "toggle_setting"
            }, {
                setting: a,
                value: e ? 1 : 0
            }, function(a) {
                TribalWars._settings = $.extend(TribalWars._settings, a), t && t()
            })
        },
        getSetting: function(a) {
            return TribalWars._settings[a]
        },
        initTab: function(a) {
            QuickBar.init(), Modernizr.localstorage && (this._tabID = a, TribalWars.setActivityHappened(), $("body").on("click keydown mouseenter", function() {
                TribalWars.setActivityHappened(), TribalWars._tabTimeout && (TribalWars.setActiveTab(), TribalWars._tabTimeout = !1)
            }), document.hidden || TribalWars.setActiveTab(), $(document).on("visibilitychange", function() {
                TribalWars.setActivityHappened(), document.hidden ? TribalWars.setInactiveTab() : TribalWars.setActiveTab()
            }), STracking.init(a), "undefined" == typeof Chat || Boolean(TribalWars.getSetting("chat_enabled")) !== !0 || Number(window.game_data.player.sitter) || (this._chat = new Chat))
        },
        setActiveTab: function() {
            localStorage.setItem("activetab", JSON.stringify([this._tabID, (new Date).getTime()])), localStorage.setItem("lastactivetab", this._tabID), TribalWars._tabActive = !0, TribalWars._tabTimer = setTimeout(function() {
                TribalWars.getIdleTime() < 18e4 ? TribalWars.setActiveTab() : TribalWars._tabTimeout = !0
            }, 1e3)
        },
        setInactiveTab: function() {
            TribalWars._tabTimer && clearInterval(TribalWars._tabTimer), localStorage.setItem("activetab", JSON.stringify(!1)), TribalWars._tabActive = !1
        },
        isTabActive: function() {
            return !document.hidden
        },
        isAnyTabActive: function() {
            if (!this._tabID) return !0;
            var a = JSON.parse(localStorage.getItem("activetab"));
            return a && (new Date).getTime() - a[1] < 2500 && this.getIdleTime() < 18e4
        },
        wasLastActiveTab: function() {
            return this._tabID == localStorage.getItem("lastactivetab")
        },
        setActivityHappened: function() {
            TribalWars._lastActivity = (new Date).getTime()
        },
        getIdleTime: function() {
            return (new Date).getTime() - TribalWars._lastActivity
        },
        track: function(a, e) {
            TribalWars.post("tracking", {
                ajaxaction: "track"
            }, {
                event: a,
                params: e
            }, null, null, !0)
        },
        getGameData: function() {
            return window.game_data
        },
        requireNamespace: function(a) {
            var e = a.split("."),
                t = window;
            e.forEach(function(a) {
                t[a] = t[a] || {}, t = t[a]
            })
        }
    }
}();

; /**** game/Village.js_ ****/
var Village;
! function() {
    "use strict";
    Village = {
        id: null,
        points: null,
        name: null,
        player_id: null,
        x: null,
        y: null,
        pop: null,
        pop_max: null,
        storage_max: null,
        wood: null,
        stone: null,
        iron: null,
        wood_float: null,
        stone_float: null,
        iron_float: null,
        wood_prod: null,
        stone_prod: null,
        iron_prod: null,
        last_res_tick: null,
        buildings: null,
        canAfford: function(l) {
            return new Resources(this.wood, this.stone, this.iron).hasEnough(l)
        },
        updateRes: function() {
            var l = this,
                n = Timing.getCurrentServerTime(),
                o = (n - l.last_res_tick) / 1e3,
                t = parseInt(l.storage_max);
            ["wood", "stone", "iron"].forEach(function(n) {
                var r = parseFloat(l[n + "_float"]),
                    a = parseFloat(l[n + "_prod"]),
                    u = Math.min(t, r + a * o);
                l[n + "_float"] = u, l[n] = Math.floor(u)
            }), l.last_res_tick = n
        }
    }
}();

; /**** game/Resources.js_ ****/
var Resources, ResourcesForecast, ResourcesForecaster;
! function() {
    var e = function(e, t, o, s, r, n, i) {
            if (Math.max(e.wood, e.stone, e.iron) > r) return new ResourcesForecast(ResourcesForecast.AVAILABLE_NEVER);
            if (t.hasEnough(e)) return new ResourcesForecast(ResourcesForecast.AVAILABLE_NOW, s);
            s = Math.ceil(s);
            var u = {};
            Resources.types.forEach(function(r) {
                var a = e[r];
                if (t[r] >= a) return void(u[r] = s);
                var c = i.getMostRecentItem(r, s),
                    l = Number(c.value) + o[r] * (s - c.time),
                    h = Number(t[r]) - l,
                    d = i.getItemAlmostAtValue(r, a - h),
                    m = Number(d.value) + h,
                    f = d.time;
                if (m < a) {
                    var p;
                    p = f <= s ? o[r] : n.getMostRecentItem(r, f).value;
                    var R = a - m,
                        v = Math.ceil(R / p),
                        w = f + v,
                        A = i.getNextItem(r, f);
                    null !== A && (w = Math.min(w, A.time)), f = w
                }
                u[r] = f
            });
            var a = Math.max(u.wood, u.stone, u.iron);
            return new ResourcesForecast(ResourcesForecast.AVAILABLE_FUTURE, a)
        },
        t = function(e, t, o) {
            if (!t || e[0] > o) return null;
            for (var s = 0, r = t - 1, n = r; n > 1;) {
                var i = s + (n >> 1);
                e[i] > o ? r = i - 1 : s = i, n = r - s
            }
            return e[r] > o ? e[s] : e[r]
        },
        o = function() {};
    o.prototype = {
        schedules: {
            wood: {},
            stone: {},
            iron: {}
        },
        items_count: {
            wood: 0,
            stone: 0,
            iron: 0
        },
        timestamps: {
            wood: [],
            stone: [],
            iron: []
        },
        getMostRecentItem: function(e, o) {
            var s = t(this.timestamps[e], this.items_count[e], o);
            return null === s ? null : new n(s, this.schedules[e][s])
        }
    };
    var r = function() {};
    r.prototype = $.extend(Object.create(o.prototype), {
        values: {
            wood: [],
            stone: [],
            iron: []
        },
        next_timestamps: {
            wood: {},
            stone: {},
            iron: {}
        },
        schedules_flipped: {
            wood: {},
            stone: {},
            iron: {}
        },
        getNextItem: function(e, t) {
            if ("undefined" == typeof this.next_timestamps[e][t]) return null;
            var o = this.next_timestamps[e][t];
            return new n(o, this.schedules[e][o])
        },
        getItemAlmostAtValue: function(e, o) {
            var s = t(this.values[e], this.items_count[e], o);
            return null === s ? null : new n(this.schedules_flipped[e][s.toString()], s)
        }
    });
    var n = function(e, t) {
        this.time = e, this.value = t
    };
    Resources = function(e, t, o) {
        this.wood = e, this.stone = t, this.iron = o
    }, Resources.prototype = {
        hasEnough: function(e) {
            return this.wood >= e.wood && this.stone >= e.stone && this.iron >= e.iron
        },
        maxAffordableUnits: function(e) {
            var t = e.wood ? this.wood / e.wood : 0,
                o = e.stone ? this.stone / e.stone : 0,
                s = e.iron ? this.iron / e.iron : 0;
            return Math.floor(Math.min(t, o, s))
        }
    }, Resources.types = ["wood", "stone", "iron"], Resources.names = {
        wood: "DA�evo",
        stone: "HlA�na",
        iron: "A1elezo"
    }, ResourcesForecast = function(e, t) {
        this.available = e, this.when = t
    }, ResourcesForecast.AVAILABLE_NEVER = "never", ResourcesForecast.AVAILABLE_NOW = "now", ResourcesForecast.AVAILABLE_FUTURE = "future", ResourcesForecast.prototype = {
        toHTML: function(e, t) {
            if (e || (e = "Suroviny jsou k dispozici."), this.available === ResourcesForecast.AVAILABLE_NEVER) return "SkladiA!tě je pA�A�liA! malA�";
            if (this.available === ResourcesForecast.AVAILABLE_NOW) return e;
            var o = this.when - Timing.getCurrentServerTime() / 1e3;
            if (o <= 120) {
                if (t) return s("Suroviny jsou k dispozici za %1", getTimeString(Math.round(o)));
                var r = '<span class="timer_replace">' + getTimeString(Math.round(o)) + "</span>",
                    n = "<span>" + s("Suroviny jsou k dispozici za %1", r) + "</span>",
                    i = '<span style="display:none">' + e + "</span>";
                return n + i
            }
            return s("Suroviny jsou k dispozici %1", Format.date(getLocalTimeAsFloat() + o))
        },
        toString: function() {
            return this.toHTML("", !0)
        }
    }, ResourcesForecaster = {
        getForecast: function(t, o, s, r) {
            var n = new Resources(o.wood_float, o.stone_float, o.iron_float),
                i = new Resources(o.wood_prod, o.stone_prod, o.iron_prod),
                u = Timing.getCurrentServerTime() / 1e3;
            return e(t, n, i, u, o.storage_max, s, r)
        },
        fetchSchedules: function(e, t) {
            TribalWars.get("api", {
                ajax: "resources_schedule",
                id: e
            }, function(e) {
                t({
                    time_generated: e.time_generated,
                    rates: ResourcesForecaster.Factory.createResourcesSchedule(e.rates),
                    amounts: ResourcesForecaster.Factory.createResourcesInVillageSchedule(e.amounts)
                })
            })
        },
        Factory: {
            createResourcesSchedule: function(e) {
                return $.extend(new o, e)
            },
            createResourcesInVillageSchedule: function(e) {
                return $.extend(new r, e)
            }
        }
    }
}();

; /**** game/Format.js_ ****/
var Format;
! function() {
    "use strict";
    Format = {
        month_names: ["Led", "A�no", "BA�e", "Dub", "Kvě", "�Ovn", "�Ovc", "Srp", "ZA!A�", "A~A�j", "Lis", "Pro"],
        date: function(e, t) {
            var a, r = 60 * (new Date).getTimezoneOffset(),
                n = e + r + window.server_utc_diff,
                o = new Date(1e3 * n),
                i = (o.getYear(), o.getMonth() + 1),
                s = o.getDate(),
                u = o.getHours(),
                p = o.getMinutes(),
                c = o.getSeconds(),
                g = function(e) {
                    return e = "" + e, 1 === e.length ? "0" + e : e
                };
            a = "us" === game_data.market ? g(i) + "." + g(s) + "." : g(s) + "." + g(i) + ".";
            var h = g(u) + ":" + g(p) + (t === !0 ? ":" + g(c) : ""),
                d = new Date((new Date).getTime() + 1e3 * r + 1e3 * window.server_utc_diff),
                f = new Date(d);
            return f.setDate(d.getDate() + 1), d.getDate() === o.getDate() ? "dnes v %s".replace("%s", h) : f.getDate() === o.getDate() ? "zA�tra v %s".replace("%s", h) : "dne %1 v/ve %2".replace("%1", a).replace("%2", h)
        },
        time: function(e, t) {
            var a = new Date(e),
                r = "";
            return r += Format.padLead(a.getHours(), 2), r += ":" + Format.padLead(a.getMinutes(), 2), t && (r += ":" + Format.padLead(a.getSeconds(), 2)), r
        },
        timeSpan: function(e, t) {
            var a, r, n = "";
            t ? (r = Math.floor(e / 24 / 60 / 60 / 1e3), n += r > 0 ? r + ":" : "", a = Math.floor(e / 60 / 60 / 1e3) % 24) : a = Math.floor(e / 60 / 60 / 1e3), n += r > 0 ? Format.padLead(a, 2) : a;
            var o = Math.floor(e / 60 / 1e3) % 60;
            n += ":" + Format.padLead(o, 2);
            var i = Math.floor(e / 1e3) % 60;
            return n += ":" + Format.padLead(i, 2)
        },
        padLead: function(e, t) {
            for (var a = e.toString(), r = a.length; r < t; r++) a = "0" + a;
            return a
        },
        number: function(e) {
            return number_format(e, '<span class="grey">.</span>')
        },
        shorten_number: function(e) {
            return e >= 1e7 ? (e /= 1e6, Math.round(e) + "M") : e >= 1e4 ? (e /= 1e3, Math.round(e) + "K") : e
        },
        get_warn_pop_class: function(e, t, a) {
            var r = e >= t;
            return a && r ? "warn" : a && e / t >= .9 ? "warn_90" : ""
        },
        image_src: function(e) {
            return window.image_base + e
        },
        image_tag: function(e, t, a) {
            var r = e.src,
                n = "";
            return e.has_retina && (r = r.replace(/\.(png)/, "@2x.$1"), n = s('style="width: %1px; height: %2px;"', e.width, e.height)), t = t || "", a = a || [], '<img src="' + Format.image_src(r) + '" title="' + t + '" alt="" class="' + a.join(" ") + '" ' + n + "/>"
        },
        imageTexture: function(e, t, a, r, n) {
            Array.isArray(r) || (r = []), "string" != typeof n && (n = "span");
            var o = t / e.width,
                i = a / e.height,
                s = {
                    width: e.atlas_width * o,
                    height: e.atlas_height * i,
                    position_x: -e.position_x * o,
                    position_y: -e.position_y * i
                },
                u = ["width:" + t + "px", "height:" + a + "px", "background-image: url(" + Format.image_src(e.atlas_src) + ")", "background-size:" + s.width + "px " + s.height + "px", "background-position:" + s.position_x + "px " + s.position_y + "px"];
            return r.push("sprite"), "<" + n + ' class="' + r.join(" ") + '" style="' + u.join(";") + '"></' + n + ">"
        },
        playerAnchor: function(e, t) {
            var a = TribalWars.buildURL("GET", "info_player", {
                id: e
            });
            return '<a href="' + a + '">' + escapeHtml(t) + "</a>"
        },
        overdueAnchor: function() {
            return '<a href="minus.php">tA�měA� hotovo</a>'
        },
        ppCostTooltip: function(e) {
            var t = "Cena: %1";
            return mobile ? s(t, s("%1 prA�miovA1ch bodA�", e)) : s(t, s('<span class="coinbag solo"></span> %1', e))
        },
        lifeColor: function(e) {
            var t = 0,
                a = 0,
                r = 0,
                n = 255,
                o = 255;
            e < .5 ? (t = n, a = e <= 0 ? 0 : e / .5 * o) : (a = o, t = e >= 1 ? 0 : (1 - e) / .5 * n);
            var i = function(e) {
                return Math.min(255, Math.floor(e))
            };
            return s("rgb(%1, %2, %3)", i(t), i(a), i(r))
        }
    }
}();

; /**** game/Dialog.js ****/
var Dialog;
! function() {
    "use strict";
    var e = function(e, t) {
        this.priority = e, this.closeCallback = t
    };
    e.prototype = {
        is_completely_shown: !1,
        after_completely_shown_queue: [],
        triggerAfterCompletelyShownHooks: function() {
            for (var e = this.after_completely_shown_queue; e.length;) {
                var t = e.shift();
                t()
            }
        }
    }, Dialog = {
        MAX_WIDTH: 821,
        PRIORITY_NONE: 0,
        PRIORITY_IMPORTANT: 1,
        active_id: null,
        instances: {},
        show: function(t, o, i, n) {
            if (!this.isContentValid(o)) throw "invalid dialog content";
            if (n = $.extend({
                    class_name: "",
                    close_from_fader: !0,
                    allow_close: !0,
                    priority: Dialog.PRIORITY_NONE
                }, n), this.active_id && this.active_id !== t) {
                if (this.getActiveInstance().priority > n.priority) return;
                Dialog.close()
            }
            this.active_id = t;
            var s = new e(n.priority, i);
            this.instances[t] = s;
            var l, a, c, p = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement,
                r = p || "body",
                d = $(".popup_box_container"),
                u = !1;
            switch (d.length ? (l = d.find(".popup_box"), c = d.find(".popup_box_content"), l.css("width", "auto")) : (u = !0, d = $('<div class="popup_box_container" />'), l = $('<div class="popup_box" />').attr("id", "popup_box_" + t).addClass(n.class_name).data("name", t).appendTo(d), a = $('<div class="fader" />').appendTo(d), c = $('<div class="popup_box_content" />').appendTo(l), d.appendTo($(r))), typeof o) {
                case "string":
                    c.html(o);
                    break;
                case "object":
                    c.html("").append(o);
                    break;
                case "function":
                    c.html(""), o(c);
                    break;
                default:
                    throw "invalid dialog content"
            }
            var _ = 125;
            ($(window).width() < 500 || $(window).height() < c.height() + _) && (l.addClass("mobile"), $(".popup_box_content").css({
                "max-height": window.innerHeight - _ / 2 + "px"
            }));
            var h;
            h = "function" == typeof window.getComputedStyle ? parseInt(getComputedStyle(l[0], null).borderLeftWidth) : parseInt(l.css("border-left-width"));
            var f = 250,
                w = Math.min(this.MAX_WIDTH, c.width(), $(window).width() - h);
            if (w < f && (w = f), Modernizr.borderimage || (w += 20), w % 2 === 1 && w++, l.css("width", w + "px"), n.allow_close) {
                var m = mobile || mobiledevice || !HotKeys.enabled ? "" : " :: klA!vesovA! zkratka: <b>Esc</b>",
                    v = mobile || mobiledevice ? "" : "tooltip-delayed",
                    b = $('<a class="popup_box_close ' + v + '" title="ZavA�A�t' + m + '" href="#">&nbsp;</a>').prependTo(c);
                UI.ToolTip(b, {
                    delay: 400
                });
                var g = n.close_from_fader ? ".fader, .popup_box_close, .popup_closer" : ".popup_box_close, .popup_closer";
                d.on("click", g, function() {
                    return Dialog.close(!0), !1
                })
            }
            u ? setTimeout(function() {
                l.addClass("show"), s.is_completely_shown = !0, s.triggerAfterCompletelyShownHooks()
            }, 50) : (s.is_completely_shown = !0, s.triggerAfterCompletelyShownHooks()), UI.init(), UnitPopup.init(), setTimeout(QuestArrows.init, 500)
        },
        isContentValid: function(e) {
            return "string" == typeof e || "object" == typeof e && $.prototype.isPrototypeOf(e) || "function" == typeof e && 1 === e.length
        },
        close: function(e) {
            if (!this.active_id) return !1;
            $(".popup_box_container").remove(), inlinePopupClose(), $(".popup_style").hide();
            var t = this.getActiveInstance();
            return t.closeCallback && t.closeCallback(e), delete this.instances[this.active_id], this.active_id = null, QuestArrows.init(), !1
        },
        fetch: function(e, t, o, i, n, s) {
            TribalWars.get(t, o, function(t) {
                Dialog.show(e, t.dialog, s, n), i && i()
            })
        },
        queueCallWhenShown: function(e) {
            var t = this.getActiveInstance();
            t.is_completely_shown ? e() : t.after_completely_shown_queue.push(e)
        },
        getActiveInstance: function() {
            return this.instances[this.active_id]
        }
    }
}();

; /**** game/VillageGroups.js ****/
var VillageGroups = {
    loadGroups: function(t, e, a, r) {
        TribalWars.get("groups", {
            ajax: "load_groups",
            village_id: t
        }, function(t) {
            VillageGroups.showGroups(t, e, a, r)
        })
    },
    loadGroupsToggle: function(t, e, a) {
        var r = $("#" + e);
        r.toggle(), r.is(":visible") && VillageGroups.loadGroups(t, e, a)
    },
    showGroups: function(t, e, a, r) {
        r = "undefined" != typeof r ? r : function() {}, $("#" + e).empty();
        var n = $("<table>").attr("id", "group_table").attr("width", "100%").addClass("vis"),
            p = $("<tbody>");
        n.append(p), $("#group_assiggment > tr").not("#header").remove(), p.append($("<img>").attr("src", "graphic/throbber.gif").attr("alt", "Loading...").attr("id", "throbber"));
        var o;
        a && (o = $("<form>").attr("id", "reassign_village_to_groups_form_" + e).attr("action", $("#group_assign_action").val()).attr("method", "POST"));
        for (var i = 0; i < t.result.length; i++)
            if (a || t.result[i].in_group) {
                var l = $("<tr>"),
                    u = $("<td>"),
                    s = t.result[i].name,
                    d = null;
                if (a) {
                    var g = $("<input>").attr("type", "checkbox").attr("id", "checkbox_" + s).attr("name", "groups[]").attr("value", t.result[i].group_id).addClass("check");
                    t.result[i].in_group && g.attr("checked", "checked"), d = $("<label>" + s + "</label>").prepend(g), u.append(d)
                }
                var _ = $("<p>").addClass("p_groups");
                d ? _.append(d) : _.html(s), u.append(_), l.append(u), p.append(l)
            }
        if (a ? (n.appendTo(o), o.append($("<input>").attr("name", "village_id").attr("type", "hidden").val(t.village_id)), o.append($("<input>").attr("name", "mode").attr("type", "hidden").val("village")), o.append($("<input>").attr("type", "submit").attr("class", "btn").val($("#group_submit_text").val())), $("#" + e).append(o)) : $("#" + e).append(n), $("#throbber").remove(), a) o.unbind().on("submit", function() {
            return TribalWars.post(o.attr("action"), {}, o.serialize(), function(t) {
                VillageGroups.showGroups(t, e, !1, r), r && r(t, e)
            }), !1
        });
        else {
            var c, m = "overview" === game_data.screen;
            if (t.player_has_static_groups) c = $("<a>").attr("href", "#").html($("#group_edit_village").val()).on("click", function() {
                return VillageGroups.loadGroups(t.village_id, "group_assignment", !0, r), !1
            });
            else {
                if (!m) return !1;
                if (parseInt($("#village_has_dynamic_membership").val())) return !1;
                c = $("<i>Nikdo</i>")
            }
            var v = $("<tbody>"),
                h = $("<table>").attr("width", "100%").addClass("vis").css("margin-top", "-2px").append(v),
                f = $("<tr>"),
                b = $("<td>");
            b.append(c), f.append(b), v.append(f), $("#" + e).append(h)
        }
    },
    handleSaveFromOverview: function(t, e) {
        var a = "",
            r = 0;
        if (null != t.result && t.result.length > 0) {
            for (var n = 0; n < t.result.length; n++) t.result[n].in_group && (a += t.result[n].name + "; ", r++);
            a = a.substring(0, a.lastIndexOf(";")), $("#assigned_groups_" + t.village_id + "_names").html(a)
        } else {
            $("#assigned_groups_" + t.village_id + "_names").empty();
            var p = $('<span class="grey" style="font-style:italic"></span>');
            p.html($("#group_undefined").val()), $("#assigned_groups_" + t.village_id + "_names").append(p)
        }
        $("#assigned_groups_" + t.village_id + "_count").html(r), mobile ? $("#group_edit_div_" + t.village_id).hide() : $("#group_edit_tr_" + t.village_id).hide()
    },
    initOverviews: function() {
        $("#add_group_form").on("submit", function() {
            return VillageGroups.createGroup($(this).find("#add_new_group_name").val()), !1
        })
    },
    displayGroupInfo: function(t, e, a) {
        $("#" + e).empty();
        var r = $("<img>").attr("src", "/graphic/throbber.gif");
        $("#" + e).append(r);
        var n = $("<table>").addClass("vis").attr("id", "group_table").width("100%"),
            p = $("<tbody>");
        n.append(p);
        var o = $("<tr>");
        p.append(o);
        var i = $("<th>").width("100%").html($("#group_config_headline").val());
        o.append(i);
        for (var l = new Array, u = 0; u < t.result.length; u++) {
            if (!a && 5 == u) {
                var d = t.result.length - 5,
                    g = $('<tr><td><a href="#" /></td></tr>'),
                    _ = g.find("a");
                1 == d ? _.text("Zobrazit 1 dalA!A� skupinu") : _.text(s("Zobrazit %1 dalA!A� skupiny (dalA!A�ch skupiny)", d)), _.on("click", function() {
                    VillageGroups.displayGroupInfo(t, e, !0)
                }), p.append(g);
                break
            }
            var c = t.result[u].group_id,
                m = t.result[u].name,
                v = $("<tr>").attr("id", "tr_group" + c),
                h = $("<td>").attr("id", "show_group" + c),
                f = $("<a>").attr("href", t.result[u].link).html(escapeHtml(m));
            null != t.last_selected && c == t.last_selected && h.addClass("selected"), h.append(f), v.append(h);
            var b = $("<td>").attr("id", "rename_group" + c).css("display", "none"),
                G = $("<form>").attr("id", "rename_group_form" + c).attr("class", "rename_group_form").attr("action", $("#rename_group_link").val() + "&old_name=" + m).attr("method", "post"),
                y = $("<input>").attr("type", "hidden").attr("name", "group_id").attr("value", c);
            if (G.append(y), y = $("<input>").attr("type", "hidden").attr("name", "mode").attr("value", $("#group_mode").val()), G.append(y), y = $("<input>").attr("type", "text").attr("name", "group_name").attr("value", m), G.append(y), y = $("<input>").attr("type", "submit").attr("class", "btn").attr("value", $("#group_submit_text").val()), G.append(y), b.append(G), v.append(b), 0 != c) {
                var w = $("<a>").attr("href", "#").addClass("float_right").data("group-name", m);
                k = $("<img>").attr("src", "/graphic/delete_14.png").attr("title", $("#group_title_delete").val()), w.append(k), h.append(w), w.click(function(t) {
                    var e = function() {
                            VillageGroups.deleteGroup(VillageGroups.getGroupID(t))
                        },
                        a = s($("#group_msg_confirm_delete").val(), $(this).data("group-name")),
                        r = [{
                            text: "Potvrdit",
                            callback: e,
                            confirm: !0
                        }];
                    return UI.ConfirmationBox(a, r), !1
                });
                var x = $("<a>").attr("href", "#").css("margin", "0 5px"),
                    k = $("<img>").attr("src", "/graphic/rename.png").attr("title", $("#group_title_rename").val());
                x.append(k), h.append(x), x.click(function(t) {
                    var e = VillageGroups.getGroupID(t);
                    return toggle_element("#show_group" + e), toggle_element("#rename_group" + e), !1
                }), l[u] = new Array, l[u].group_id = c
            }
            p.append(v)
        }
        $("#" + e).empty().append(n).show(), $(".rename_group_form").on("submit", function() {
            var t = $(this).find("input[name=group_id]").val(),
                e = $(this).find("input[name=group_name]").val();
            return VillageGroups.renameGroup(t, e), !1
        })
    },
    reloadOverviewPage: function() {
        var t = location.href.match(/group=[0-9]*/),
            e = $("#start_edit_group_link").val().replace("group=0", t);
        $.ajax({
            url: e,
            dataType: "html",
            success: function(t) {
                $("#group_management_content").length > 0 ? $("#group_management_content").html(t) : $("#paged_view_content").html(t), "undefined" != typeof MDS && MDS.initToggleMenus(), VillageGroups.initOverviews(), UI.ToolTip($(".group_tooltip"), {
                    delay: 1e3
                })
            }
        })
    },
    createGroup: function(t) {
        TribalWars.post("groups", {
            ajaxaction: "create_group"
        }, {
            group_name: t
        }, function(t) {
            $("#add_new_group_name").val(""), VillageGroups.reloadOverviewPage()
        })
    },
    deleteGroup: function(t) {
        TribalWars.post("groups", {
            ajaxaction: "delete_group"
        }, {
            group_id: t
        }, function(t) {
            VillageGroups.reloadOverviewPage()
        })
    },
    renameGroup: function(t, e) {
        TribalWars.post("groups", {
            ajaxaction: "rename_group"
        }, {
            group_name: e,
            group_id: t
        }, function(t) {
            VillageGroups.reloadOverviewPage()
        })
    },
    getGroupID: function(t) {
        var e = null;
        e = t.srcElement ? t.srcElement : t.target;
        var a = $(e).parents("tr").first().attr("id");
        return parseInt(a.substr(8))
    },
    villageSelect: {
        init: function(t) {
            TribalWars.get("groups", {
                ajax: "load_group_menu"
            }, function(e) {
                VillageGroups.villageSelect.handleGroupMenuData(e, t)
            })
        },
        handleGroupMenuData: function(t, e) {
            var a = t;
            "object" != typeof e && (e = $("#" + e));
            var r = $("<form>").attr("id", "select_group_box").attr("action", $("#show_groups_villages_link").val()).attr("method", "POST"),
                n = $("<p>").attr("style", "margin: 0 0 10px 0; font-weight: bold;").html($("#group_popup_select_title").val()),
                p = $("<select>").attr("id", "group_id").attr("name", "group_id").css("margin-left", "3px"),
                o = $("<input>").attr("type", "hidden").attr("name", "mode").attr("value", $("#group_popup_mode").val());
            r.append(o);
            for (var i = !1, l = !1, u = 0; u < a.result.length; u++) {
                var s = a.result[u],
                    d = "separator" === s.type,
                    g = "";
                d && !l ? (g = "<option disabled></option>", l = !0) : d || (g = $("<option>").attr("value", s.group_id).html(escapeHtml(s.name)), a.group_id && s.group_id === a.group_id && (g.attr("selected", !0), i = !0), l = !1), p.append(g)
            }
            var _ = $("<div>").attr("id", "group_list_content").css("overflow", "auto");
            mobile || _.css("height", "340px"), n.append(p), r.append(n), e.empty(), e.append(r).append(_), r.on("submit", function() {
                return TribalWars.post("groups", {
                    ajax: "load_villages_from_group"
                }, {
                    group_id: $("#group_id").val()
                }, function(t) {
                    VillageGroups.villageSelect.showVillages(t.html, "group_list_content")
                }), !1
            }), r.submit(), $("#group_id").change(function() {
                $("#group_list_content").html(UI.Throbber), r.submit()
            })
        },
        showVillages: function(t, e) {
            $("#" + e).html(t), $("th.group_label").html($("#group_popup_villages_select").val());
            var a = $("#selected_popup_village");
            if (a.length) {
                var r = a.position().top;
                $("#group_list_content").scrollTop(r - 60)
            }
        }
    }
};

; /**** game/OrderProgress.js ****/
var OrderProgress = {
    didInitTicker: !1,
    initProgress: function() {
        $(".order-progress").each(function() {
            var e = $(this),
                r = e.data("progress"),
                a = [];
            $.each(r.progress, function(r, t) {
                var s = t[0],
                    o = t[1],
                    d = $("<div />").css({
                        width: 100 * o + "%"
                    });
                d.data("seconds_worked", s), d.data("percentage_complete", o), e.append(d), a.push(o / s)
            });
            var t = $('<div class="anim" />');
            e.append(t), e.data("slot_speeds", a)
        }), UI.ToolTip($(".order-progress").find("div"), {
            bodyHandler: OrderProgress.getTooltipBody
        }), OrderProgress.updateProgress(!0), setTimeout(function() {
            OrderProgress.updateProgress(), OrderProgress.didInitTicker || (OrderProgress.didInitTicker = !0, $(window.TribalWars).on("global_tick", function() {
                OrderProgress.updateProgress()
            }))
        }, 100)
    },
    updateProgress: function(e) {
        $(".order-progress").each(function() {
            var r = $(this),
                a = r.data("progress"),
                t = r.data("slot_speeds");
            if (t) {
                t = t.slice(0);
                var s = Math.min(a.slot_elapsed + Math.max(Timing.getElapsedTimeSinceData() / 1e3, .1), a.slot_time);
                e || s++, s = Math.round(s);
                var o = s / a.slot_time,
                    d = o * (1 - a.percentage_complete);
                if (t.push(d / s), !(d > 1)) {
                    var i = Math.max.apply(Math, t),
                        n = Math.min.apply(Math, t),
                        c = r.find("div");
                    c.each(function(e) {
                        var r, a = $(this);
                        e == c.length - 1 ? (r = (d / s - n) / (i - n), a.css("width", 100 * d + "%"), a.data("percentage_complete", d), a.data("seconds_worked", s + 1)) : r = (a.data("percentage_complete") / a.data("seconds_worked") - n) / (i - n), 1 == t.length ? r = 0 : isNaN(r) && (r = 1);
                        var o;
                        o = 0 == r ? "#92c200" : 1 == r ? "#577400" : "#7aa104", a.css("background-color", o)
                    })
                }
            }
        })
    },
    getTooltipBody: function() {
        var e = $(this),
            r = e.data("percentage_complete"),
            a = e.data("seconds_worked");
        return s("%1% kompletnA� v %2", Math.round(100 * r), getTimeString(Math.round(a)))
    }
};

; /**** game/Timing.js_ ****/
var Timing = {
    tick_interval: 1e3,
    initial_server_time: null,
    initial_local_time: null,
    added_server_time: 0,
    offset_to_server: 0,
    offset_from_server: 0,
    paused: !1,
    is_ready: !1,
    when_ready: [],
    tickHandlers: {},
    init: function(e) {
        this.initial_server_time = Math.round(1e3 * e), this.supportsPerformanceAPI() ? (this.offset_from_server = Date.now() - performance.timing.responseStart, this.offset_to_server = performance.timing.responseStart - performance.timing.fetchStart) : this.initial_local_time = (new Date).getTime();
        for (var i in Timing.tickHandlers) Timing.tickHandlers.hasOwnProperty(i) && Timing.tickHandlers[i].hasOwnProperty("init") && Timing.tickHandlers[i].init();
        var t = $("#serverTime").click(function() {
            Timing.pause()
        });
        Timing.offset_to_server && t.attr("title", "Doba pA�ipojenA� k serveru: " + Timing.offset_to_server + "ms"), this.is_ready = !0, this.when_ready.forEach(function(e) {
            e()
        }), this.doGlobalTick()
    },
    pause: function() {
        this.paused = !this.paused
    },
    supportsPerformanceAPI: function() {
        return Modernizr.performance && "object" == typeof window.performance && "function" == typeof window.performance.now
    },
    getReturnTimeFromServer: function() {
        return this.offset_from_server
    },
    getElapsedTimeSinceLoad: function() {
        return this.supportsPerformanceAPI() ? performance.now() - this.getReturnTimeFromServer() : (new Date).getTime() - Timing.initial_local_time
    },
    getElapsedTimeSinceData: function() {
        return this.supportsPerformanceAPI() ? performance.now() - this.added_server_time - this.getReturnTimeFromServer() : (new Date).getTime() - Timing.initial_local_time - this.added_server_time
    },
    getCurrentServerTime: function() {
        return this.initial_server_time + this.getReturnTimeFromServer() + this.getElapsedTimeSinceLoad()
    },
    doGlobalTick: function(e) {
        if (!Timing.paused) {
            for (var i in Timing.tickHandlers) Timing.tickHandlers.hasOwnProperty(i) && Timing.tickHandlers[i].tick();
            $(window.TribalWars).trigger("global_tick")
        }
        if (!e) {
            var t = Math.round(Timing.getCurrentServerTime()),
                r = Timing.tick_interval - t % Timing.tick_interval + 10;
            setTimeout(Timing.doGlobalTick, r)
        }
    },
    resetTickHandlers: function() {
        this.added_server_time += this.getElapsedTimeSinceData();
        for (var e in Timing.tickHandlers) Timing.tickHandlers.hasOwnProperty(e) && Timing.tickHandlers[e].hasOwnProperty("reset") && Timing.tickHandlers[e].reset();
        this.doGlobalTick(!0)
    },
    whenReady: function(e) {
        return this.is_ready ? void e() : void this.when_ready.push(e)
    }
};
Timing.tickHandlers.serverTime = {
    tick: function() {
        var e = $("#serverTime"),
            i = Timing.getCurrentServerTime() / 1e3,
            t = i + window.server_utc_diff;
        e.text(getTimeString(t, !0))
    }
}, Timing.tickHandlers.resources = {
    start: {},
    lastFullState: !1,
    tick: function() {
        game_data.village && (game_data.village.updateRes(), ["wood", "stone", "iron"].forEach(this.updateDisplay), Timing.tickHandlers.resources.checkIfFull())
    },
    updateDisplay: function(e) {
        var i = game_data.village[e],
            t = parseInt(game_data.village.storage_max, 10),
            r = $("#" + e);
        i >= .9 * t && i < t ? changeResStyle(r, "warn_90") : i < t ? changeResStyle(r, "res") : changeResStyle(r, "warn");
        var n = "wood" == e ? 0 : "stone" == e ? 2 : 4;
        game_data.village.res[n] = i, mobile && (i > 99999 ? i = Math.floor(i / 1e3) + "K" : i > 9999 && (i = Math.floor(i / 100) / 10 + "K")), r.html(i)
    },
    checkIfFull: function() {
        var e = parseInt(game_data.village.storage_max),
            i = game_data.village.wood >= e || game_data.village.stone >= e || game_data.village.iron > e;
        i && !this.lastFullState && BrowserNotification.showNotification(BrowserNotification.NOTIFICATION_WAREHOUSE, [game_data.village.name]), this.lastFullState = i
    },
    initResource: function(e) {
        var i = parseFloat(game_data.village[e + "_float"]);
        return Timing.tickHandlers.resources.start[e] = i
    },
    getOriginalValue: function(e) {
        return Timing.tickHandlers.resources.start.hasOwnProperty(e) ? Timing.tickHandlers.resources.start[e] : Timing.tickHandlers.resources.initResource(e)
    },
    reset: function() {
        Timing.tickHandlers.resources.start = {}
    }
}, Timing.tickHandlers.timers = {
    _timers: [],
    _command_refresh_timeouts: {},
    _lock_content_reloading: !1,
    _doc_events_registered: !1,
    init: function() {
        this._doc_events_registered || ($(document).on("partial_reload_start", function() {
            Timing.tickHandlers.timers.lockPartialReloading()
        }), $(document).on("partial_reload_end", function() {
            Timing.tickHandlers.timers.unlockPartialReloading()
        }), this._doc_events_registered = !0), this.initTimers("timer", Timing.tickHandlers.timers.handleTimerEnd), this.initTimers("timer_replace", Timing.tickHandlers.timers.handleReplaceTimerEnd), this.initTimers("widget-command-timer", Timing.tickHandlers.timers.handleCommandTimerEnd)
    },
    handleTimerEnd: function() {
        var e = $(this).data("timer_callback");
        return e ? void e.call(this) : void(Timing.tickHandlers.timers._lock_content_reloading || (TribalWars.shouldPartialLoad() ? partialReload() : document.location.href = document.location.href.replace(/action=\w*/, "").replace(/#.*$/, "")))
    },
    handleReplaceTimerEnd: function() {
        var e = $(this).parent(),
            i = e.next();
        0 !== i.length && (i.css("display", "inline"), e.remove())
    },
    handleCommandTimerEnd: function() {
        var e = $(this).parents(".commands-container"),
            i = e.data("type");
        $(this).parents("tr").eq(0).remove(), $(window.TribalWars).trigger("command_timer_expire");
        var t = e.find(".commands-command-count");
        if (!t.data("limit-reached")) {
            var r = parseInt(e.data("commands")) - 1;
            e.data("commands", r), t.text("(" + r + ")"), 0 === r && Timing.tickHandlers.timers.handleCommandTimerRefreshAll(e)
        }
        Timing.tickHandlers.timers._command_refresh_timeouts.hasOwnProperty(i) || (Timing.tickHandlers.timers._command_refresh_timeouts[i] = setTimeout(function() {
            Timing.tickHandlers.timers.handleCommandTimerRefreshAll(e)
        }, 5e3))
    },
    handleCommandTimerRefreshAll: function(e) {
        var i = e.data("type"),
            t = e.data("village");
        Timing.tickHandlers.timers._command_refresh_timeouts.hasOwnProperty(i) && delete Timing.tickHandlers.timers._command_refresh_timeouts[i], TribalWars.post("place", {
            ajax: "commands",
            oscreen: game_data.screen
        }, {
            type: i,
            village_id: t
        }, function(i) {
            if (i) e.replaceWith(i);
            else {
                var t = e.parents(".commands-container-outer");
                if (t.length) {
                    var r = t.find(".commands-container");
                    1 === r.length && t.remove()
                }
                e.remove(), $(window.TribalWars).trigger("command_timer_empty")
            }
        })
    },
    lockPartialReloading: function() {
        this._lock_content_reloading = !0
    },
    unlockPartialReloading: function() {
        this._lock_content_reloading = !1
    },
    initTimers: function(e, i) {
        var t = Math.round(Timing.getCurrentServerTime() / 1e3),
            r = this;
        $("span." + e).each(function() {
            var n = $(this);
            n.removeClass(e), n.on("timer_end", i);
            var a, s;
            return (s = n.data("endtime")) ? a = Math.round(s - t) : (a = getTime(n), s = t + a), "widget-command-timer" == e && a < 1 && a >= -3 ? void n.trigger("timer_end") : a < 0 ? void n.html(Format.overdueAnchor()) : (formatTime(n, a, !1), void r._timers.push({
                element: n,
                end: s
            }))
        })
    },
    reset: function() {
        this.init()
    },
    tick: function() {
        for (var e = 0; e < this._timers.length; e++) {
            var i = this.tickTimer(this._timers[e]);
            i && this._timers.splice(e, 1)
        }
    },
    tickTimer: function(e) {
        "use strict";
        if (!$.contains(document.body, e.element[0])) return !0;
        var i = Math.round(e.end - Timing.getCurrentServerTime() / 1e3);
        if (i >= 0) return formatTime(e.element, i, !1), !1;
        var t = $(".popup_style:visible").length > 0;
        return !t && (formatTime(e.element, 0, !1), e.element.trigger("timer_end"), !0)
    }
}, Timing.tickHandlers.forwardTimers = {
    _timers: [],
    init: function() {
        $("span.relative_time").each(function() {
            Timing.tickHandlers.forwardTimers._timers.push($(this)), $(this).removeClass(".relative_time")
        })
    },
    tick: function() {
        for (var e = 0; e < this._timers.length; e++) {
            var i = this._timers[e];
            if ($.contains(document.body, i[0])) {
                var t = i.data("duration"),
                    r = (Timing.getCurrentServerTime() + Timing.offset_to_server) / 1e3 + t;
                i.text(Format.date(r, !0))
            } else this._timers.splice(e, 1)
        }
    },
    reset: function() {
        this.init()
    }
};

; /**** game/HotKeys.js ****/
var HotKeys;
! function() {
    "use strict";
    HotKeys = {
        enabled: !1,
        rate_limit_ms: 200,
        locked: !1,
        init: function() {
            var e = $(document);
            $.hotkeys.textInputTypes = /textarea|select/i;
            var o = function(e) {
                return function(o) {
                    HotKeys.processHotkey(e, o)
                }
            };
            switch (e.on("keydown", null, "shift+h", o(HotKeys.help)), e.on("keydown", null, "a", o(HotKeys.previousVillage)), e.on("keydown", null, "d", o(HotKeys.nextVillage)), game_data.screen) {
                default: break;
                case "report":
                        e.on("keydown", null, "w", o(HotKeys.nextReport)),
                    e.on("keydown", null, "s", o(HotKeys.previousReport));
                    break;
                case "mail":
                        e.on("keydown", null, "w", o(HotKeys.nextMail)),
                    e.on("keydown", null, "s", o(HotKeys.previousMail))
            }
            game_data.pregame || (e.on("keydown", null, "v", o(HotKeys.villageOverview)), e.on("keydown", null, "m", o(HotKeys.map))), e.on("keydown", null, "esc", o(HotKeys.closeDialog)), this.bindQuickbarKeys(), this.enabled = !0
        },
        bindQuickbarKeys: function() {
            $("#quickbar_contents").find(".quickbar_item").each(function(e, o) {
                var t = $(o),
                    n = t.data("hotkey");
                (n || 0 === n) && $(document).on("keydown", null, String(n), function(e) {
                    HotKeys.processHotkey(function() {
                        var e = t.find(".quickbar_link"),
                            o = e.attr("href");
                        UI.InfoMessage(s("OtevA�enA� odkazu rychlA�ho nA!hledu: %1", "<b>" + e.html() + "</b>")), "_blank" === e.prop("target") ? window.open(o) : QuickBar.openEntry(e.data("hash"), o)
                    }, e)
                })
            })
        },
        processHotkey: function(e, o) {
            HotKeys.locked || (HotKeys.locked = !0, e(o), setTimeout(function() {
                HotKeys.locked = !1
            }, HotKeys.rate_limit_ms))
        },
        help: function(e) {
            e && e.stopPropagation(), TribalWars.get("api", {
                ajax: "hotkeys"
            }, function(e) {
                Dialog.show("hotkeys", e.dialog)
            })
        },
        nextReport: function(e) {
            var o = $("#report-next");
            o.length && (UI.InfoMessage("Na�?A�tA!m oznA!menA�..."), document.location.replace(o.attr("href")))
        },
        previousReport: function(e) {
            var o = $("#report-prev");
            o.length && (UI.InfoMessage("Na�?A�tA!m oznA!menA�..."), document.location.replace(o.attr("href")))
        },
        nextMail: function(e) {
            var o = $("#igm-next");
            o.length && (UI.InfoMessage("Na�?A�tA!nA� zprA!vy..."), document.location.replace(o.attr("href")))
        },
        previousMail: function(e) {
            var o = $("#igm-prev");
            o.length && (UI.InfoMessage("Na�?A�tA!nA� zprA!vy..."), document.location.replace(o.attr("href")))
        },
        previousVillage: function(e) {
            if (97 !== e.keyCode) {
                e.stopPropagation();
                var o = $("#village_switch_left");
                o.length && (UI.InfoMessage("PA�epA�nA!m vesnici..."), document.location.replace(o.attr("href")))
            }
        },
        nextVillage: function(e) {
            if (100 !== e.keyCode) {
                e.stopPropagation();
                var o = $("#village_switch_right");
                o.length && (UI.InfoMessage("PA�epA�nA!m vesnici..."), document.location.replace(o.attr("href")))
            }
        },
        villageOverview: function(e) {
            e.stopPropagation(), UI.InfoMessage("OtevA�rA!m nA!hled vesnice..."), TribalWars.redirect("overview")
        },
        map: function(e) {
            e.stopPropagation(), UI.InfoMessage("OtevA�rA!m mapu..."), TribalWars.redirect("map")
        },
        closeDialog: function(e) {
            e.stopPropagation(), Dialog.close()
        }
    }
}();

; /**** game/Campaign.js ****/
var Campaign = {
    latest_interstitial: null,
    showInterstitial: function(a) {
        Campaign.latest_interstitial = a, Dialog.show("campaign", a, function(a) {
            a && Campaign.ignoreInterstitial()
        }, {
            class_name: "slim",
            close_from_fader: !1,
            priority: Dialog.PRIORITY_IMPORTANT
        }), $("#popup_box_campaign .campaign-image").on("click", function() {
            Campaign.acceptInterstitial()
        })
    },
    ignoreInterstitial: function() {
        var a = [{
            text: "ZavA�A�t okno",
            callback: function() {
                TribalWars.post("campaign", {
                    ajaxaction: "ignore_interstitial"
                }, {}, function() {})
            },
            confirm: !0
        }, {
            text: "Storno",
            callback: function() {
                Campaign.showInterstitial(Campaign.latest_interstitial)
            },
            cancel: !0
        }];
        UI.ConfirmationBox("Opravdu chceA! zavA�A�t toto okno? NabA�dka uA3 nebude nadA!le dostupnA!.", a, "interstitial-confirm", !0)
    },
    acceptInterstitial: function(a) {
        Dialog.close();
        var i = {};
        "undefined" != typeof a && (i = {
            campaign_id: a
        }), TribalWars.post("campaign", {
            ajaxaction: "accept_campaign"
        }, i, function(a) {
            var i = function() {
                    switch (a.cta.type) {
                        case "inventory":
                            TribalWars.redirect("inventory");
                            break;
                        case "cashShop":
                            Premium.buy();
                            break;
                        case "cashShopPackageTab":
                            Premium.buy({
                                tab: "packages"
                            });
                            break;
                        case "none":
                    }
                },
                t = function() {
                    if (window.mobile) UI.SuccessMessage(a.reward.title + " " + a.reward.description);
                    else {
                        var i = '<img src="' + a.reward.img + '" class="left" alt="" /><div style="width: 350px; float: left">' + a.reward.title + "<br />" + a.reward.description + "</div>";
                        UI.SuccessMessage(i, 2500)
                    }
                };
            a.reward ? (t(), setTimeout(i, 2700)) : setTimeout(i, 700)
        })
    },
    initMailHandler: function() {
        $(".crm-campaign-mail a").on("click", function() {
            var a = $(this).attr("href"),
                i = a.match(/accept=([0-9]*)/)[1];
            Campaign.acceptInterstitial(i);
            var t = $(this).parents(".crm-campaign-mail");
            if (!t.hasClass("external")) return !1
        })
    }
};

; /**** game/Crm.js_ ****/
"use strict";
var Crm;
! function() {
    Crm = {
        showFader: function() {
            $('<div class="fader" />').appendTo("body")
        },
        hideFader: function() {
            $(".fader").remove()
        },
        showContent: function(e, a, t) {
            Crm.showFader(), TribalWars.post("crm", {
                ajaxaction: "view"
            }, {
                content_id: e,
                target_id: a,
                cdp: t
            }, function(r) {
                if (Crm.hideFader(), !r.offer_no_longer_available) {
                    var i = r.interstitial;
                    window.mobile && (i.width /= 2, i.height /= 2);
                    var c, n = s('<img src="%1" style="width: %2px; height: %3px; cursor: pointer" class="campaign-image" />', i.url, i.width, i.height);
                    c = r.cta && "uri" === r.cta.type ? s('<a href="%1" target="_blank">%2</a>', TribalWars.buildURL("GET", "crm", {
                        action: "follow_campaign",
                        content_id: e,
                        target_id: a,
                        cdp: t
                    }), n) : n, Dialog.show("crm", c, function(r) {
                        r && Crm.ignoreContent(e, a, t)
                    }, {
                        class_name: "slim",
                        close_from_fader: !1,
                        priority: Dialog.PRIORITY_IMPORTANT
                    }), $("#popup_box_crm a[target=_blank]").on("click", function() {
                        Dialog.close(!1)
                    }), r.cta && "uri" === r.cta.type || $("#popup_box_crm").find(".campaign-image").on("click", function() {
                        Crm.acceptContent(e, a, t)
                    })
                }
            }, function() {
                Crm.hideFader()
            })
        },
        acceptContent: function(e, a, t) {
            TribalWars.post("crm", {
                ajaxaction: "accept"
            }, {
                content_id: e,
                target_id: a,
                cdp: t
            }, Crm.handleAcceptedContent, function() {
                Dialog.close()
            })
        },
        handleAcceptedContent: function(e) {
            Dialog.close();
            var a = function() {
                    switch (e.cta.type) {
                        case "inventory":
                            TribalWars.redirect("inventory");
                            break;
                        case "cashShop":
                            Premium.buy();
                            break;
                        case "cashShopPackageTab":
                            Premium.buy({
                                tab: "packages"
                            });
                            break;
                        case "itemShop":
                            TribalWars.redirect("premium");
                            break;
                        case "casual_transfer":
                            TribalWars.redirect("settings", {
                                mode: "transfer"
                            });
                            break;
                        case "friend_invite":
                            TribalWars.redirect("settings", {
                                mode: "ref",
                                source: "crm"
                            });
                            break;
                        case "push_notifications":
                            TribalWars.redirect("settings", {
                                mode: "push"
                            });
                            break;
                        case "premium_exchange":
                            TribalWars.redirect("market", {
                                mode: "exchange"
                            });
                            break;
                        case "uri":
                            window.location.replace(e.cta.value)
                    }
                    "screen_" === e.cta.type.substr(0, 7) && TribalWars.redirect(e.cta.type.substr(7))
                },
                t = function() {
                    if (window.mobile) UI.SuccessMessage(e.reward.title + " " + e.reward.description);
                    else {
                        var a = '<img src="' + e.reward.img + '" class="left" alt="" /><div style="width: 350px; float: left">' + e.reward.title + "<br />" + e.reward.description + "</div>";
                        UI.SuccessMessage(a, 2500)
                    }
                };
            e.reward ? (t(), setTimeout(a, 2700)) : setTimeout(a, 700)
        },
        ignoreContent: function(e, a, t) {
            var r = [{
                text: "ZavA�A�t okno",
                callback: function() {
                    TribalWars.post("crm", {
                        ajaxaction: "ignore"
                    }, {
                        content_id: e,
                        target_id: a,
                        cdp: t
                    }, function() {})
                },
                confirm: !0
            }, {
                text: "Storno",
                callback: function() {
                    Crm.showContent(e, a, t)
                },
                cancel: !0
            }];
            UI.ConfirmationBox("Opravdu chceA! zavA�A�t toto okno? NabA�dka uA3 nebude nadA!le dostupnA!.", r, "interstitial-confirm", !0)
        },
        initMailHandler: function() {
            $(".crm3-mail a").on("click", function() {
                var e = $(this).attr("href"),
                    a = e.match("tribalwars://crm3/accept/([0-9]+)/([a-fA-F0-9-]*)");
                return Crm.acceptContent(a[1], a[2]), !1
            })
        }
    }
}();

; /**** game/BrowserNotification.js ****/
var BrowserNotification;
! function() {
    "use strict";
    BrowserNotification = {
        NOTIFICATION_INTRO: "bn_intro",
        NOTIFICATION_ATTACK: "bn_attack",
        NOTIFICATION_WAREHOUSE: "bn_warehouse",
        NOTIFICATION_MAIL: "bn_mail",
        NOTIFICATION_BUILDING: "bn_building",
        defaultProperties: {
            icon: "/browser_notification.png",
            timeout: 3
        },
        notifications: {
            bn_intro: {
                title: "DivokA� Kmeny",
                properties: {
                    body: "Zapnuli jsme upozorněnA�! Zde vidA�A!, jak takovA� upozorněnA� bude vypadat!"
                }
            },
            bn_attack: {
                title: "DivokA� Kmeny - PA�ichA!zejA�cA� Aotok!",
                properties: {
                    body: "TvA! vesnice %1 je pod Aotokem."
                }
            },
            bn_warehouse: {
                title: "DivokA� Kmeny: SkladiA!tě je plnA�",
                properties: {
                    body: "TvA� skladiA!tě v %1 je plnA�."
                }
            },
            bn_mail: {
                title: "DivokA� Kmeny - PA�ijata zprA!va",
                properties: {
                    body: "ObdrA3el jsi novou zprA!vu od %1."
                }
            },
            bn_building: {
                title: "DivokA� Kmeny - VA1stavba dokon�?ena",
                properties: {
                    body: "TvA�j stavebnA� pA�A�kaz %1 ve vesnici %2 byl dokon�?en."
                }
            }
        },
        supported: function() {
            return Notify.isSupported() && "hidden" in document && Modernizr.localstorage && Modernizr.json
        },
        shouldShowNotification: function(i) {
            return "bn_intro" === i || TribalWars._settings[i] && !Notify.needsPermission() && !TribalWars.isAnyTabActive() && TribalWars.wasLastActiveTab()
        },
        showNotification: function(i, o, t) {
            if (!BrowserNotification.notifications.hasOwnProperty(i)) throw "No such notification " + i;
            if (BrowserNotification.supported() && BrowserNotification.shouldShowNotification(i)) {
                var n = BrowserNotification.notifications[i],
                    r = $.extend(n.properties, BrowserNotification.defaultProperties);
                $.isArray(o) && (r.body = s(r.body, o)), r.hasOwnProperty("icon") && (r.icon = image_base + r.icon), r.notifyShow = function() {
                    TribalWars.track("notification", ["see_notification", i])
                }, r.notifyClose = function() {
                    TribalWars.track("notification", ["close_notification", i])
                }, r.notifyClick = function() {
                    "function" == typeof t && t(), TribalWars.track("notification", ["accept_notification", i])
                }, new Notify(n.title, r).show()
            }
        },
        showNotificationsTurnedOnNotification: function() {
            this.showNotification("bn_intro")
        },
        requestPermission: function(i) {
            Notify.requestPermission(function() {
                TribalWars.track("notification", ["give_permission", ""]), BrowserNotification.showNotificationsTurnedOnNotification(), i()
            })
        },
        showPrompt: function() {
            !TribalWars.getSetting("bn_suppress_prompt") && Notify.needsPermission() && BrowserNotification.supported() && TribalWars.get("settings", {
                ajax: "browser_notification_prompt"
            }, function(i) {
                Dialog.show("browser_notification_prompt", i.dialog, BrowserNotification.suppressPrompts)
            })
        },
        suppressPrompts: function() {
            TribalWars.setSetting("bn_suppress_prompt", 1)
        }
    }
}();

; /**** game/Connection.js_ ****/
var Connection;
! function() {
    "use strict";
    Connection = {
        socket: null,
        observers: {},
        pending_handlers: {},
        handlers: {},
        emit_queue: [],
        registerHandler: function(e, n) {
            return null === this.socket ? void(this.pending_handlers[e] = n) : (this.handlers[e] = n, this.socket.off(e), this.socket.on(e, function(n) {
                Connection.debug("Message from backend: " + name), Connection.handlers[e](n)
            }), void delete this.pending_handlers[e])
        },
        receiveBridgedEvent: function(e, n) {
            Connection.handlers.hasOwnProperty(e) && Connection.handlers[e](n)
        },
        connect: function(e, n, i, o) {
            var t = this;
            if ("android" !== window.game_data.device) {
                if (!this.isSupportedBrowser()) return void this.showUnsupportedBrowserNotice();
                if (!window.iosappdata || $.inArray("socket.io", window.iosappdata.capabilities) === -1) {
                    if ("undefined" == typeof io) return void Connection.debug("node", "Couldn't connect to backend: socket.io not available");
                    var a = "undefined" != typeof game_data.village ? game_data.village.id : 0,
                        r = {
                            query: "sessid=" + i + "&village_id=" + a + "&screen=" + game_data.screen,
                            rememberUpgrade: !0
                        };
                    Boolean($.cookie("websocket_available")) === !0, this.socket = io.connect((o ? "https://" : "http://") + e + ":" + n + "/game", r);
                    var s = this.socket;
                    this.socket.on("connect", function() {
                        Connection.debug("Connected to backend"), $(Connection).trigger("connected");
                        for (var e = 0; e < t.emit_queue.length; e++) {
                            var n = t.emit_queue[e];
                            s.emit(n[0], n[1])
                        }
                        t.emit_queue = []
                    }), this.socket.io.engine.on("upgrade", function(e) {
                        $.cookie("websocket_available", !0)
                    }), this.socket.on("connect_error", function() {
                        $(Connection).trigger("connect_error")
                    }), this.socket.on("disconnect", function(e) {
                        Connection.debug("disconnected"), $(Connection).trigger("disconnected")
                    }), this.socket.on("error", function(e) {
                        "Invalid session" === e && $(Connection).trigger("disconnected")
                    }), $.each(this.pending_handlers, function(e, n) {
                        Connection.registerHandler(e, n)
                    })
                }
            }
        },
        reportTransport: function() {
            var e = $.cookie("websocket_last_report"),
                n = (new Date).getTime();
            (!e || n - e > 3e5) && setTimeout(function() {
                $.cookie("websocket_last_report", n), TribalWars.post("api", {
                    ajaxaction: "report_connection_type"
                }, {
                    w: Boolean($.cookie("websocket_available")) === !0 ? 1 : 0
                })
            }, 2e3)
        },
        isConnected: function() {
            return this.socket && this.socket.connected
        },
        isSupportedBrowser: function() {
            if (window.opera && window.opera.version) {
                var e = window.opera.version().split(".");
                return e > 12
            }
            return !0
        },
        showUnsupportedBrowserNotice: function() {
            $("#unsupported-browser").show().on("click", function() {
                Dialog.fetch("unsupported_browser", "api", {
                    ajax: "unsupported_browser"
                })
            })
        },
        debug: function(e) {
            "undefined" != typeof Debug && Debug.hasOwnProperty("message") && Debug.message("node", e)
        },
        registerObserver: function(e, n) {
            this.observers[e] = n
        },
        notifyObservers: function(e, n) {
            var i = this;
            $(Object.keys(this.observers)).each(function() {
                i.observers[this].notify(e, n)
            })
        },
        emit: function(e, n) {
            return this.socket && this.socket.connected ? void this.socket.emit(e, n) : void this.emit_queue.push([e, n])
        }
    }, Connection.registerHandler("gamedata", function(e) {
        TribalWars.handleGameData(e)
    }), Connection.registerHandler("award", function(e) {
        var n = e.image.replace("awards/", "").replace(".png", ""),
            i = function() {
                TribalWars.redirect("info_player", {
                    mode: "awards"
                })
            };
        UI.Notification.show("/user_image.php?award=" + n + "&level=" + e.level, "A�spěch odem�?en!", e.name + "<br />" + e.description, i)
    }), Connection.registerHandler("award_progress", function() {
        var e = data.image.replace("awards/", "").replace(".png", ""),
            n = function() {
                TribalWars.redirect("info_player", {
                    mode: "awards"
                })
            },
            i = '<div class="progress-bar"><span class="label">%1 / %2</span><div style="width: %3%"></div></div>';
        UI.Notification.show("/user_image.php?award=" + e + "&level=" + data.level, "Stav Aospěchu:" + data.name, window.s(i, Format.number(data.current), Format.number(data.max), data.current / data.max * 100), n), UI.InitProgressBars()
    }), Connection.registerHandler("message", function(e) {
        var n = function() {
            TribalWars.redirect("mail", {
                mode: "view",
                view: e.id
            })
        };
        TribalWars.isAnyTabActive() ? UI.Notification.show(image_base + "/notification/message.png", s("ObdrA3ena zprA!va od %1", e.sender_name), e.subject, n) : BrowserNotification.showNotification(BrowserNotification.NOTIFICATION_MAIL, [e.sender_name], n)
    }), Connection.registerHandler("report", function(e) {
        UI.Notification.show(image_base + e.image, "NovA� oznA!menA�", e.title, function() {
            TribalWars.redirect("report", {
                view: e.id
            })
        })
    }), Connection.registerHandler("attack", function(e) {
        TribalWars.wasLastActiveTab() && TribalWars.playAttackSound();
        var n = function() {
            TribalWars.redirect("incomings")
        };
        BrowserNotification.showNotification(BrowserNotification.NOTIFICATION_ATTACK, [e.target_village_name], n)
    }), Connection.registerHandler("building_complete", function(e) {
        if (BrowserNotification.showNotification(BrowserNotification.NOTIFICATION_BUILDING, [e.building_order, e.village_name]), TribalWars._settings.inline_notification_building && "main" !== game_data.screen) {
            var n = function() {
                    TribalWars.redirect("main", {
                        village: e.village_id
                    })
                },
                i = "VA1stavba dokon�?ena",
                o = s("TvA�j stavebnA� pA�A�kaz %1 ve vesnici %2 byl dokon�?en.", e.building_order, e.village_name);
            UI.Notification.show(image_base + e.building_image_big, i, o, n)
        }
    }), Connection.registerHandler("village_gained", function(e) {
        var n = function() {
                TribalWars.redirect("report", {
                    view: e.report_id
                })
            },
            i = "Vesnice dobyta",
            o = e.village_name;
        UI.Notification.show(image_base + e.village_image, i, o, n)
    }), Connection.registerHandler("crest_received", function(e) {
        var n = function() {
            TribalWars.redirect("event_crest")
        };
        UI.Notification.show(image_base + "/events/crest/" + e.crest_id + ".jpg", "Boj o erby", s("ZA�skanA1 erb: %1", e.crest_name), n)
    }), Connection.registerHandler("quest_data", function(e) {
        Quests.setQuestData(e), QuestArrows.init()
    }), Connection.registerHandler("premium_purchase", function(e) {
        UI.SuccessMessage(window.s("TvA�j nA!kup %1 PrA�miovA1ch bodA� byl pA�ipsA!n na tvA�j Ao�?et.", e.pp))
    }), Connection.registerHandler("premium_trial", function(e) {
        Premium.showFeatureTrialNotification()
    }), Connection.registerHandler("command_count", function(e) {
        Connection.notifyObservers("command_count", e)
    }), Connection.registerHandler("apprentice_status", function(e) {
        Connection.notifyObservers("apprentice_status", e)
    }), Connection.registerHandler("res_schedule_invalid", function(e) {
        Connection.notifyObservers("res_schedule_invalid", e)
    }), Connection.registerHandler("event_royalty_action", function(e) {
        if ("event_royalty" !== window.game_data.screen) {
            var n = function() {
                TribalWars.redirect("event_royalty")
            };
            switch (e.action) {
                case "cave_lose":
                    UI.Notification.show(window.image_base + e.additional_data.img, "ZA!chrana se nepodaA�ila", "TvA�j bojovnA�k od pA�A�A!ery utekl.", n);
                    break;
                case "cave_win":
                    UI.Notification.show(window.image_base + e.additional_data.img, "�Olen krA!lovskA� rodiny zachrA!něn!", "TvA�j state�?nA1 bojovnA�k zachrA!nil �?lena krA!lovskA� rodiny!", n);
                    break;
                case "cave_win_full":
                    UI.Notification.show(window.image_base + e.additional_data.img, "ZachrA!něnA1 �?len krA!lovskA� rodiny zemA�el", "TvA�j bojovnA�k zachrA!nil �?lena krA!lovskA� rodiny, ale bohuA3el jsi neměl dostatek volnA�ho prostoru ve svA�m panstvA�.", n);
                    break;
                case "cave_explore":
                    UI.Notification.show(window.image_base + e.additional_data.img, "Jeskyně prozkoumA!na", s("V %1 byla nalezena pA�A�A!era.", e.additional_data.name), n)
            }
        }
    }), Connection.registerHandler("event_assault_tribe_goal", function(e) {
        var n = function() {
                TribalWars.redirect("event_assault")
            },
            i = "KmenovA! odměna aktivovA!na!",
            o = e.reward_description;
        UI.Notification.show(e.img, i, o, n)
    }), Connection.registerHandler("debug", function(e) {
        alert(e.msg)
    })
}();

; /**** game/Command.js ****/
var Command;
! function() {
    "use strict";
    Command = {
        didInit: !1,
        details_cache: {},
        pending_details: {},
        init: function() {
            mobile || this.initHoverDetails(".command_hover_details"), this.didInit || ($("body").on("click", ".command-cancel", Command.cancel), this.didInit = !0)
        },
        initHoverDetails: function(t) {
            var a = {
                bodyHandler: Command.getDetailsTooltipContent,
                extraClass: "tooltip-style command-details"
            };
            UI.ToolTip(t, a)
        },
        cancel: function() {
            var t = $(this),
                a = t.data("id"),
                n = t.data("home"),
                e = t.html();
            return t.html(UI.Image("loading2.gif")), TribalWars.post("place", {
                ajaxaction: "cancel"
            }, {
                id: a,
                village: n
            }, function() {
                var a = t.parents(".commands-container"),
                    n = parseInt(a.data("commands")) - 1;
                a.data("commands", n), a.find(".commands-command-count").text("(" + n + ")"), t.parents("tr").eq(0).remove()
            }, function() {
                t.html(e)
            }), !1
        },
        getDetailsTooltipContent: function() {
            var t = $(this),
                a = t.data("command-id"),
                n = '<b style="white-space: nowrap;">' + t.data("icon-hint") + "</b>",
                e = Boolean(Command.pending_details[a]),
                i = "undefined" != typeof Command.details_cache[a],
                o = !!i && t.data("command-type") !== Command.details_cache[a].type,
                d = !!i && (o && "return" === Command.details_cache[a].type),
                c = !!i && Command.details_cache[a].no_authorization;
            if (c) return "PA�A�kaz jiA3 neexistuje";
            if (e || i && (!o || d) || (Command.loadDetailsForTooltip(t, a), e = !0), e) {
                var s = '<img alt="" src="' + image_base + 'loading2.gif">';
                return n + '<div style="text-align:center; margin:5px;">' + s + "</div>"
            }
            var m = Command.details_cache[a];
            return n + "<br/>" + Command.getDetailsHTML(m)
        },
        loadDetailsForTooltip: function(t, a) {
            Command.pending_details[a] = !0, TribalWars.get("info_command", {
                ajax: "details",
                id: a
            }, function(n) {
                Command.details_cache[a] = n, Command.pending_details[a] = !1, t.trigger("tooltip_content_change")
            })
        },
        getDetailsHTML: function(t) {
            var a = '<table class="vis" style="width:100%;"><tr>';
            return $.each(t.units, function(t, n) {
                0 !== parseInt(n.count) && (a += '<th style="min-width:50px;"><img src="' + n.image_src + '"></th>')
            }), a += "</tr><tr>", $.each(t.units, function(t, n) {
                0 !== parseInt(n.count) && (a += '<td class="unit-item">' + n.count + "</td>")
            }), a += "</tr>", a += "</table>", t.hasOwnProperty("catapult_target") && (a += "CA�l katapultu: " + t.catapult_target.name), t.hasOwnProperty("booty") && (a += "KoA�ist: ", $.each(t.booty, function(t, n) {
                0 !== parseInt(n) && (a += '<span class="icon header ' + t + '">&nbsp;</span>' + Format.number(n) + " ")
            }), a += ""), a
        }
    }
}();

; /**** game/Toggler.js ****/
var Toggler;
! function() {
    "use strict";
    Toggler = {
        register: function(e, o, g) {
            var n = $(e);
            $(o).on("click", function() {
                Toggler.toggle(n, g)
            });
            var i = $.cookie("toggler_" + n.data("name"));
            "undefined" !== i && 0 === parseInt(i) && Toggler.hide(n, g)
        },
        toggle: function(e, o) {
            "none" === e.css("display") ? Toggler.show(e, o) : Toggler.hide(e, o)
        },
        show: function(e, o) {
            e.show(), $.cookie("toggler_" + e.data("name"), 1, {
                expires: 365,
                path: "/"
            }), o && o()
        },
        hide: function(e, o) {
            e.hide(), $.cookie("toggler_" + e.data("name"), 0, {
                expires: 365,
                path: "/"
            }), o && o()
        }
    }
}();

; /**** game/PARIS.js ****/
var PARIS;
! function() {
    "use strict";
    PARIS = {
        answered: !1,
        question_id: null,
        open: function() {
            this.answered = !1, PARIS.closeTeaser(), TribalWars.get("paris", {
                ajax: "question"
            }, function(e) {
                PARIS.question_id = e.question, Dialog.show("paris", e.dialog, function() {
                    PARIS.answered || TribalWars.post("paris", {
                        ajaxaction: "close"
                    }, {
                        question: e.question
                    }, function() {})
                }), $(".paris-emote").on("click", PARIS.selectEmote), $("#paris-submit").on("click", PARIS.submitAnswer)
            })
        },
        selectEmote: function() {
            return !PARIS.answered && ($(".paris-emote").removeClass("emoted"), $(this).addClass("emoted"), $("#paris-submit").removeClass("btn-disabled").addClass("btn-confirm-yes"), !1)
        },
        submitAnswer: function() {
            var e = $(this);
            if (!PARIS.disabled && !e.hasClass("btn-disabled")) {
                e.addClass("btn-disabled").removeClass("btn-confirm-yes");
                var s = $(".paris-emote.emoted").data("rating");
                TribalWars.post("paris", {
                    ajaxaction: "vote"
                }, {
                    question: PARIS.question_id,
                    answer: s
                }, function(e) {
                    $("#paris-button").hide(), $("#paris-done").show(), $(".paris-emote:not(.emoted)").each(function() {
                        $(this).parent().remove()
                    }), 0 === parseInt(e.questions_ready) && $("#paris-opener").removeClass("paris-badge"), PARIS.answered = !0
                }, function() {
                    e.removeClass("btn-disabled").addClass("btn-confirm-yes")
                })
            }
        },
        tease: function() {
            var e = '<span class="paris-badge">Odeslat nA!zor</span>',
                s = {
                    title: "Pomoz nA!m vylepA!it DivokA� kmeny!",
                    body: window.s("Kdykoliv nA!m mA�A3eA! rychle sdělit svA�j nA!zor kliknutA�m na %1 odkaz ve spodnA� liA!tě.", e),
                    buttonYes: "NynA� ohodnotit",
                    buttonNo: "MoA3nA! později"
                },
                i = '<div class="fader paris-fader"></div><div class="paris-widget"><div class="paris-widget-content"><h2>%1</h2><p>%2</p><div style="text-align: center; margin: 27px 0 17px"><a href="#" id="paris-teaser-yes" class="btn btn-confirm-yes btn-confirm-large" style="margin: 0 10px 10px">%3</a><a href="#" id="paris-teaser-no" class="btn btn-confirm-no btn-confirm-large" style="margin: 0 10px 10px">%4</a></div></div></div>',
                a = window.s(i, s.title, s.body, s.buttonYes, s.buttonNo);
            $("body").append(a), $("#paris-teaser-yes").on("click", function() {
                PARIS.closeTeaser(), PARIS.open()
            }), $("#paris-teaser-no").on("click", function() {
                PARIS.closeTeaser()
            })
        },
        closeTeaser: function() {
            $(".paris-widget, .paris-fader").remove()
        }
    }
}();

; /**** game/STracking.js ****/
eval(function(t, a, e, n, r, i) {
    if (r = function(t) {
            return (t < a ? "" : r(parseInt(t / a))) + ((t %= a) > 35 ? String.fromCharCode(t + 29) : t.toString(36))
        }, !"".replace(/^/, String)) {
        for (; e--;) i[r(e)] = n[e] || r(e);
        n = [function(t) {
            return i[t]
        }], r = function() {
            return "\\w+"
        }, e = 1
    }
    for (; e--;) n[e] && (t = t.replace(new RegExp("\\b" + r(e) + "\\b", "g"), n[e]));
    return t
}("5 E;(4(){'Z Y';5 m={};4 9(7,x){5 v=7.X('?')[0];x=x?x.W(0,10):'';5 u=v+x;6(m.l(u)){g}m[u]=r;5 t=[y(n.13+'-'+7)];6(x){t.12(y(x))}$('U').N('<M 7=\"/L/'+t.O('/')+'.P\" />')}4 D(a,b){a=f(a);5 c=e('('+e(a)+')');e(a+\" = 4(d) {b(z); c.T(S, z);}\");6(B R.A!=='4'){e(a+\".h = 4() {g c.h()}\")}Q{e(a+\".h = c.h.A(c)\")}}5 k={};5 j={a:4(){D('1l=',4(a){6(a[0]===f('1i==')){9('1m')}})},b:4(){5 a=['1j','1g','1a=','19'].F(4(a){g f(a)});$(a[0])[a[1]](4(){6($(a[2])[a[3]]){9('1h')}})},c:4(){5 a=['18==','1b=','1c'].F(4(a){g f(a)});$(a[0])[a[1]](4(){6(B(n[a[2]])==='4'){9('1e')}})}};E={1d:4(a){q(5 p I j){6(j.l(p)){j[p]()}}6(!n.w)g;5 H=17 w(4(C){C.1k(4(o){q(5 i=0;i<o.K.G;++i){5 8=o.K[i];5 s=f('16');6(8.J===s&&!8.7){q(5 p I k){6(k.l(p)){5 b=k[p](8.1f);6(b){9(b)}}}}6(!a&&8.J===s&&8.7&&8.7.G>0){9(8.7)}}})});H.V(14,{15:r,11:r})}}})();", 62, 85, "||||function|var|if|src|addedNode|px|||||eval|atob|return|toString||fs|tc|hasOwnProperty|cache|window|mutation||for|true||params|cache_key|uri|MutationObserver||btoa|arguments|bind|typeof|mutations|sp|STracking|map|length|observer|in|nodeName|addedNodes|st|img|append|join|gif|else|Function|this|apply|body|observe|substring|split|strict|use|50|subtree|unshift|csrf_token|document|childList|U0NSSVBU|new|YS5mYXJtX2ljb25fYSwgYS5mYXJtX2ljb25fYg|bGVuZ3Ro|I3RpbWVyWlo|Y2xpY2s|YWx0QWxkZWlh|init|8fa35ia3|textContent|c3VibWl0|42c8b297|MSBhdGFrIG5hIHNlayA9IGJyYWsgYmFuYQ|I2NvbW1hbmQtZGF0YS1mb3Jt|forEach|VUkuSW5mb01lc3NhZ2U|bc76cd71".split("|"), 0, {}));

; /**** game/BuildFeatureAvailability.js ****/
var BuildFeatureAvailability;
! function() {
    "use strict";
    BuildFeatureAvailability = {
        inited: !1,
        init: function() {
            this.inited || ($(window.TribalWars).on("global_tick", function() {
                BuildFeatureAvailability.updateFeatureAvailability()
            }), BuildFeatureAvailability.updateFeatureAvailability())
        },
        updateFeatureAvailability: function() {
            $(".order_feature").each(function() {
                var i = $(this),
                    a = i.data("available-from"),
                    t = i.data("available-to");
                a || (a = 0), t || (t = 4294967295);
                var e = Math.floor(Timing.getCurrentServerTime() / 1e3) - 1;
                a <= e && t > e ? i.show() : i.hide()
            })
        }
    }
}();

; /**** game/QuickBar.js_ ****/
var QuickBar;
! function() {
    "use strict";
    QuickBar = {
        lastHash: null,
        loadingQuickBarScript: !1,
        loadingQuickBarScriptTimer: 0,
        init: function() {
            $(".quickbar_link").on("click", function(r) {
                if (1 === r.which && !r.ctrlKey && !r.shiftKey) {
                    var i = $(this);
                    return "_blank" === i.attr("target") || (QuickBar.openEntry($(this).data("hash"), $(this).attr("href")), !1)
                }
            }), QuickBar.initProxy()
        },
        showInsecureDialog: function(r) {
            if (QuickBar.loadingQuickBarScript) {
                var i = "<h2>Tento skript nenA� moA3nA� spustit</h2>";
                i += "<p>Skript ve tvA�m rychlA�m nA!hledu se pokusil na�?A�st jinA1 skript, kterA1 nenA� bezpe�?nA1.</p>", i += "<p>Jako sou�?A!st zabezpe�?enA� tvA�ho internetovA�ho prohlA�A3e�?e mohou bA1t skripty na�?A�tA!ny pomocA� bezpe�?nA1ch adres, kterA� za�?A�najA� na <strong>https://</strong></p>", i += "<p>" + s("Adresa URL, kterA! se nedala na�?A�st: %1", r) + "</p>", Dialog.close(), Dialog.show("insecure_script", i)
            }
        },
        initProxy: function() {
            $.getScriptOrig = $.getScript, $.getScript = function(r, i) {
                return "http:" === r.substr(0, 5) ? r.indexOf(window.location.host) >= 0 ? void $.getScript(r.replace("http://", "https://")) : void QuickBar.showInsecureDialog(r) : void $.getScriptOrig(r, i)
            }
        },
        openEntry: function(r, i) {
            if (i && "#" !== i) return void document.location.replace(i);
            QuickBar.lastHash = r;
            var t = QuickBar.fetchFromCache(r);
            return t ? void QuickBar.runEntry(t) : void QuickBar.fetchFromServer(r, function(i) {
                return i ? (QuickBar.setInCache(r, i), void QuickBar.runEntry(i)) : void(QuickBar.loadingQuickBarScript = !1)
            })
        },
        runEntry: function(r) {
            QuickBar.loadingQuickBarScript = !0, QuickBar.loadingQuickBarScriptTimer && clearTimeout(QuickBar.loadingQuickBarScriptTimer), QuickBar.loadingQuickBarScriptTimer = setTimeout(function() {
                QuickBar.loadingQuickBarScript = !1, QuickBar.loadingQuickBarScriptTimer = 0
            }, 1500);
            try {
                $.globalEval(r)
            } catch (r) {
                console.log("An error occurred while running the script: " + r)
            }
        },
        fetchFromServer: function(r, i) {
            TribalWars.get("api", {
                ajax: "quickbar_entry",
                hash: r
            }, function(r) {
                i(r.entry)
            })
        },
        fetchFromCache: function(r) {
            if (!Modernizr.sessionstorage) return null;
            var i = sessionStorage.getItem("qb");
            if (!i) return null;
            if (i = JSON.parse(i), "object" != typeof i || !i.hasOwnProperty(r)) return null;
            var t = i[r];
            return (new Date).getTime() - t.time > 36e5 ? null : t.entry
        },
        setInCache: function(r, i) {
            if (!Modernizr.sessionstorage) return null;
            var t = sessionStorage.getItem("qb");
            t = t ? JSON.parse(t) : {}, t[r] = {
                time: (new Date).getTime(),
                entry: i
            }, sessionStorage.setItem("qb", JSON.stringify(t))
        }
    }
}();

; /**** game/unit_popup.js ****/
var UnitPopup = {
    popup_template: null,
    unit_data: {},
    req_row: '<td><a href="%2">%3</a><br />(StupeA^ %1)</td>',
    init: function() {
        $(".unit_link").click(function(t) {
            var e = $(this),
                i = $(this).data("unit");
            return "chicken" === i ? (TribalWars.playSound("chicken"), e.find("img").addClass("spin"), setTimeout(function() {
                e.find("img").removeClass("spin")
            }, 1e3), !1) : (UnitPopup.open(t, i), void t.preventDefault())
        })
    },
    open: function(t, e) {
        if (mobile) return TribalWars.redirect("unit_info", {
            unit: e
        }), !1;
        var i = {
            offset_x: -100,
            offset_y: -100
        };
        return inlinePopup(t, "unit_popup", null, i, UnitPopup.fetchContent(e), this.unit_data[e].name), $("#inline_popup").css("width", "700px").find("h3").hide(), $("#inline_popup_main").css({
            height: "auto",
            "max-height": 950
        }), $("#inline_popup_main div").css("height", "auto"), setTimeout(function() {
            $("#inline_popup #unit_image").show()
        }, 300), !1
    },
    showInContainer: function(t, e) {
        t.html(UnitPopup.fetchContent(e))
    },
    fetchContent: function(t) {
        var e = this.unit_data[t];
        this.popup_template = $("#unit_popup_template"), $(".dynamic_content", this.popup_template).remove(), $.each(e, function(t, e) {
            "tech_levels" != t && UnitPopup.popup_template.find(".unit_" + t).text(e)
        }), $("#unit_image", this.popup_template).attr("src", s("/graphic/unit_popup/%1.png", t)), mobile && $("#unit_image").hide();
        var i = Math.round(1 / (60 * e.speed), 2),
            p = 1 === i ? "1 minuta pro pole" : s("%1 Minut pro polA��?ko ", i);
        if ($("#unit_speed", this.popup_template).text(p), e.desc_abilities.length) {
            $(".show_if_has_abilities", this.popup_template).show();
            var n = "";
            e.desc_abilities.forEach(function(t) {
                n += "<li>" + t + "</li>"
            }), $(".unit_info_abilities", this.popup_template).html(n)
        } else $(".show_if_has_abilities", this.popup_template).hide();
        if ($(".tech_researched, .tech_res_list", this.popup_template).hide(), e.reqs) {
            $(".show_if_has_reqs", this.popup_template).show();
            var o = $("#reqs", this.popup_template);
            $.each(e.reqs, function() {
                var t = $(s(UnitPopup.req_row, this.level, this.building_link, this.name));
                t.addClass("dynamic_content"), o.append(t)
            }), $("#reqs_count", this.popup_template).attr("colspan", e.reqs.length)
        } else $(".show_if_has_reqs", this.popup_template).hide();
        if ($(".unit_tech", this.popup_template).hide(), e.tech_levels) {
            $(".unit_tech_levels", this.popup_template).show();
            var h = $("#unit_tech_prototype", this.popup_template);
            $.each(e.tech_levels, function(t) {
                var e = h.clone();
                $.each(this, function(t, i) {
                    e.find(".tech_" + t).text(i)
                }), this.res ? ($(".tech_wood", e).text(this.res.wood), $(".tech_stone", e).text(this.res.stone), $(".tech_iron", e).text(this.res.iron), $(".tech_res_list", e).show()) : $(".tech_researched", e).show(), e.show().attr("id", "").addClass("dynamic_content"), $(".unit_tech_levels", this.popup_template).append(e)
            })
        }
        if (e.tech_costs) {
            var a = $(".unit_tech_cost", this.popup_template).show();
            $.each(e.tech_costs, function(t, e) {
                $(".tech_cost_" + t, a).html(e)
            })
        }
        return this.popup_template.html()
    }
};

; /**** game/FBCanvas.js_ ****/
"use strict";
window.location.host.match("tribalwars.social") && !/^iframe_canvas/.test(window.name) && window.location.replace("https://apps.facebook.com/tribal-wars/?prev=" + encodeURIComponent(window.location));

; /**** game/Place.js_ ****/
var Place;
! function() {
    "use strict";
    Place = {}, Place.insertAllUnits = function() {
        var t = $(this).data("unit"),
            n = $("#unit_input_" + t),
            e = parseInt(n.data("all-count"));
        return !(n.is(":disabled") || !e) && (e !== parseInt(n.val()) ? n.val(e) : n.val(""), !1)
    }, Place.commandScreen = {
        lastUnitRefresh: 0,
        init: function() {
            $(".units-entry-all").on("click", Place.insertAllUnits), $(window.TribalWars).off("command_timer_expire.place").on("command_timer_expire.place", function() {
                Timing.getCurrentServerTime() - Place.commandScreen.lastUnitRefresh > 1e3 && (Place.commandScreen.lastUnitRefresh = Timing.getCurrentServerTime(), Place.commandScreen.refreshHomeUnits())
            }), $(window.TribalWars).off("command_timer_empty.place").on("command_timer_empty.place", this.refreshHomeUnits)
        },
        refreshHomeUnits: function() {
            TribalWars.get("place", {
                ajax: "home_units"
            }, function(t) {
                $.each(t, Place.commandScreen.updateUnitCount)
            })
        },
        updateUnitCount: function(t, n) {
            var e = $("#unit_input_" + t).data("all-count", n);
            $("#units_entry_all_" + t).text("(" + n + ")"), 0 === n ? e.parent().addClass("unit-input-faded") : e.parent().removeClass("unit-input-faded")
        }
    }, Place.confirmScreen = {
        data: {},
        init: function(t) {
            this.data = t, $("#troop_confirm_train").on("click", function() {
                return Place.confirmScreen.addAdditionalAttack(), !1
            }), this.checkAndShowNobleTrainButton()
        },
        getType: function() {
            return this.data.type
        },
        getSendUnits: function() {
            return this.data.send_units
        },
        getAvailableUnits: function() {
            return this.data.available_units
        },
        getUsedUnitCount: function(t) {
            var n = this.getSendUnits()[t];
            return $("input[name*=\\[" + t + "\\]]").each(function() {
                var t = parseInt($(this).val());
                n += isNaN(t) ? 0 : t
            }), n
        },
        getDirtyUnitCount: function(t) {
            var n = 0;
            return $("input.dirty[name*=\\[" + t + "\\]]").each(function() {
                var t = parseInt($(this).val());
                n += isNaN(t) ? 0 : t
            }), n
        },
        shouldShowNobleTrainButton: function() {
            var t = this.getSendUnits(),
                n = this.getAvailableUnits();
            return !!("attack" === this.getType() && this.getNumberOfAttacks() < 5 && t.snob > 0 && n.snob - this.getUsedUnitCount("snob") > 0)
        },
        checkAndShowNobleTrainButton: function() {
            this.shouldShowNobleTrainButton() ? $("#troop_confirm_train").show() : $("#troop_confirm_train").hide()
        },
        shouldShowCatapultTargetSelection: function() {
            return this.getUsedUnitCount("catapult") > 0
        },
        checkAndShowCatapultTargetSelection: function() {
            this.shouldShowCatapultTargetSelection() ? $("#place_confirm_catapult_target").show() : $("#place_confirm_catapult_target").hide()
        },
        getNumberOfAttacks: function() {
            return $("#place_confirm_units").find(".units-row").length
        },
        generateNewAttackElement: function(t) {
            var n = "";
            if (window.mobile) {
                n += '<table class="vis small units-row">', n += '<tr class="red"><th colspan="6" class="train-name">' + s("A�tok #%1", t) + "</th></td></tr>", n += "<tr>";
                var e = 0;
                for ($.each(this.data.units, function(i, a) {
                        n += '<td style="width: 35px" align="center"><img src="' + Format.image_src("unit/unit_" + a + ".png") + '" /></td>', n += "snob" === a ? '<td>1 <input type="hidden" data-unit="' + a + '" name="train[' + t + "][" + a + ']" style="width: 40px" value="1" /></td>' : '<td><input type="text" data-unit="' + a + '" name="train[' + t + "][" + a + ']" style="width: 40px" /></td>', e++, e > 0 && e % 3 === 0 && (n += "</tr><tr>")
                    }); e % 3 !== 0;) n += '<td colspan="2"></td>', e++;
                n += "</tr>", n += "</table>"
            } else n += '<tr class="units-row"><th class="train-name"><span>' + s("A�tok #%1", t) + "</span></th>", $.each(this.data.units, function(e, i) {
                "snob" !== i && (n += '<td><input type="text" data-unit="' + i + '" name="train[' + t + "][" + i + ']" style="width: 40px" /></td>')
            }), n += '<td>1 <input type="hidden" data-unit="snob" name="train[' + t + '][snob]" style="width: 40px" value="1" /></td>';
            return $(n)
        },
        addAdditionalAttack: function() {
            $(".train-ui").show().eq(1);
            var t = $("#place_confirm_units");
            window.mobile && t.find(".train-name").eq(0).text(s("A�tok #%1", 1));
            var n = this.getNumberOfAttacks() + 1;
            if (n > 5 || this.getAvailableUnits().snob - this.getUsedUnitCount.snob === 0) return void UI.ErrorMessage("Nedostatek A!lechticA�");
            var e = this.generateNewAttackElement(n);
            e.insertBefore(t.find(".units-sum")), e.find("input").on("keyup", function() {
                $(this).addClass("dirty");
                var t = Place.confirmScreen.checkForInvalidInput($(this));
                Place.confirmScreen.updateUnitsSum(t), Place.confirmScreen.checkForUnprotectedSnobs(), Place.confirmScreen.checkAndShowCatapultTargetSelection()
            });
            var i = UI.Image("delete_14.png", {
                class: "float_right",
                style: "cursor: pointer"
            });
            i.on("click", function() {
                Place.confirmScreen.deleteSnobAttack(e)
            }), e.find(".train-name").append(i), window.mobile && $("body").animate({
                scrollTop: e.offset().top - $(window).height() + e.height()
            }, 200), this.autoBalance(), this.checkAndShowNobleTrainButton()
        },
        deleteSnobAttack: function(t) {
            t.remove();
            var n = $("#place_confirm_units").find(".units-row");
            n.each(function(t, n) {
                $(n).find("input").each(function() {
                    var n = $(this);
                    n.attr("name", "train[" + t + "][" + n.data("unit") + "]")
                }), $(n).find(".train-name span").text(s("A�tok #%1", t + 1))
            }), this.autoBalance(), this.checkAndShowNobleTrainButton(), this.checkAndShowCatapultTargetSelection()
        },
        updateUnitsSum: function(t) {
            t || (t = 0), $.each(this.data.units, function(n, e) {
                var i = $(".units-sum .unit-item-" + e),
                    a = Place.confirmScreen.getUsedUnitCount(e);
                a > Place.confirmScreen.getAvailableUnits()[e] ? (i.addClass("warn"), t++) : i.removeClass("warn"), 0 === a ? (i.addClass("hidden"), window.mobile && i.prev().find("img").eq(0).addClass("faded")) : (i.removeClass("hidden"), window.mobile && i.prev().find("img").eq(0).removeClass("faded")), i.text(Place.confirmScreen.getUsedUnitCount(e))
            }), t ? $(".troop_confirm_go").attr("disabled", "disabled") : $(".troop_confirm_go").removeAttr("disabled")
        },
        checkForInvalidInput: function(t) {
            var n = t.val(),
                e = 0;
            return isNaN(n) || Math.floor(n) !== Number(n) || n < 0 ? (e++, t.addClass("warn")) : t.removeClass("warn"), e
        },
        checkForUnprotectedSnobs: function() {
            var t = 0,
                n = $("#place_confirm_units").find(".units-row");
            n.each(function(n) {
                if (0 !== n) {
                    var e = $(this),
                        i = 0;
                    e.find("input[type=text], input[type=number]").each(function() {
                        var t = parseInt($(this).val());
                        i += isNaN(t) ? 0 : t
                    }), 0 === i && t++
                }
            }), t ? $("#train_noble_warning").show() : $("#train_noble_warning").hide()
        },
        autoBalance: function() {
            var t = Place.confirmScreen.getSendUnits(),
                n = Place.confirmScreen.getAvailableUnits();
            $.each(["axe", "light"], function(e, i) {
                var a = n[i] - t[i] - Place.confirmScreen.getDirtyUnitCount(i),
                    r = 0,
                    o = $("#place_confirm_units").find("input[name*=\\[" + i + "\\]]:not(.dirty)");
                o.each(function(t) {
                    var n = t === o.length - 1 ? a - r : Math.floor(a / o.length);
                    $(this).val(n > 0 ? n : ""), r += n
                })
            }), this.updateUnitsSum(), this.checkForUnprotectedSnobs()
        }
    }, Place.backScreen = {
        init: function() {
            $(".units-entry-all").on("click", Place.insertAllUnits)
        }
    }
}();

; /**** game/GuestRegister.js ****/
var GuestRegister;
! function() {
    "use strict";
    GuestRegister = {
        showDialog: function() {
            Dialog.fetch("register", "api", {
                ajax: "guest_register_dialog"
            }, function() {
                $("#guest_register_form").on("submit", GuestRegister.doRegister)
            })
        },
        doRegister: function() {
            var e = {
                username: $("input[name=username]").val(),
                password: $("input[name=password]").val(),
                email: $("input[name=email]").val()
            };
            return TribalWars.post("api", {
                ajaxaction: "guest_register"
            }, e, function() {
                window.location.reload()
            }), !1
        }
    }
}();

; /**** game/Football.js_ ****/
! function() {
    "use strict";
    $(function() {
        $(".football-close").on("click", function() {
            $.cookie("ignore_football", 1, {
                path: "/",
                expires: 1
            }), $("#football_scores").hide()
        })
    })
}();

; /**** game/BotProtect.js_ ****/
function botProtectLoaded() {
    BotProtect.libraryLoaded()
}
var BotProtect;
! function() {
    "use strict";
    BotProtect = {
        library: "https://www.google.com/recaptcha/api.js?onload=botProtectLoaded&render=explicit&hl=cs",
        key: "6LetVRYTAAAAAD3ftGbWWw-X1BkfYX7-Ez3_fj2n",
        load_callback: null,
        forced: !1,
        ensureLibraryLoaded: function(o) {
            return "undefined" == typeof grecaptcha ? (this.load_callback = o, void $.getScript(this.library)) : void o()
        },
        libraryLoaded: function() {
            this.load_callback && (this.load_callback(), this.load_callback = null)
        },
        show: function(o) {
            this.forced = "pending" !== o, this.ensureLibraryLoaded(function() {
                "forced_dialog" === o ? BotProtect.showDialog() : BotProtect.showPending()
            })
        },
        showPending: function() {
            var o = $("#content_value"),
                t = o.find("#bot_check");
            t.length || (t = $('<div id="bot_check" />').prependTo(o), t.append('<h2>Ochrana proti Botu. </h2><div class="g-recaptcha"></div>'), this.render())
        },
        showDialog: function() {
            if (!$("#popup_box_protection").length) {
                var o = $(".g-recaptcha");
                if (o.length) return void $("body").scrollTop(o.offset().top - 100);
                Dialog.close(!1);
                var t = "<h2>Ochrana proti Botu. </h2>";
                t += '<div class="g-recaptcha"></div>', Dialog.show("bot_protection", t, null, {
                    close_from_fader: !1,
                    allow_close: !1
                }), BotProtect.render()
            }
        },
        render: function() {
            grecaptcha.render($(".g-recaptcha")[0], {
                callback: BotProtect.check,
                sitekey: BotProtect.key
            })
        },
        check: function(o) {
            TribalWars.post("botcheck", {
                ajaxaction: "verify"
            }, {
                response: o
            }, function(o) {
                return o.success ? void(BotProtect.forced ? window.location.reload() : $("#bot_check").remove()) : (UI.ErrorMessage("Zkus to prosA�m znovu"), void grecaptcha.reset())
            })
        }
    }
}(), $(function() {
    var o = $("body").data("bot-protect");
    o && BotProtect.show(o)
});

; /**** game/DailyBonus.js_ ****/
var DailyBonus;
! function() {
    "use strict";
    DailyBonus = {
        SCREEN_LOCATION_LOGIN: "login",
        SCREEN_LOCATION_PROFILE: "profile",
        screen_location: "profile",
        cycle: null,
        chest_unlocker: null,
        day_today: -1,
        last_day: -1,
        showDialog: function() {
            this.screen_location = DailyBonus.SCREEN_LOCATION_LOGIN;
            var t = function() {
                DailyBonus.reportClosed()
            };
            Dialog.fetch("daily_bonus", "daily_bonus", {
                ajax: "widget"
            }, null, {}, t)
        },
        init: function(t, e, i) {
            this.chest_unlocker = e, this.day_today = i, this.last_day = Math.max.apply(Math, Object.getOwnPropertyNames(t.rewards)), Timing.tickHandlers.timers.initTimers("daily_bonus_reset_timer", function() {
                DailyBonus.screen_location == DailyBonus.SCREEN_LOCATION_LOGIN ? (Dialog.close(), setTimeout(function() {
                    DailyBonus.showDialog()
                }, 200)) : partialReload()
            }), this.update(t), mobile && this.MobileView.init(), this.reportViewed()
        },
        update: function(t) {
            this.cycle = t, this.updateButtons(), this.updateChestGraphics(), this.updateRewardInfo(), UI.init()
        },
        updateButtons: function() {
            var t = $("#daily_bonus_content"),
                e = this.chest_unlocker.pp_unlock.costs[this.cycle.pp_count_unlocked] || -1,
                i = 'Jakmile budeA! mA�t mA�ně jak 24 hodin do restartu, mA�A3eA! vyuA3A�t prA�miovA� body na odemknutA� zmeA!kanA1ch truhlA�.<br/><br/>Cena za tuto truhlu: <span class="icon header premium"></span>' + e;
            $.each(this.cycle.rewards, function(n, a) {
                var o = t.find(".day_" + n).find(".actions");
                o.html("");
                var l;
                DailyBonus.canOpenChest(n) ? (l = $('<a href="#" class="btn btn-default">OtevA�A�t</a>'), l.on("click", function(t) {
                    t.preventDefault(), DailyBonus.openChest(n)
                }), o.append(l)) : DailyBonus.canBuyChest(n) && (l = $('<a href="#" class="btn btn-default tooltip" title=" :: ' + escapeHtml(i, !0) + '">' + s("OtevA�A�t (%1)", '<span class="icon header premium"></span>' + e) + "</a>"), l.on("click", function(t) {
                    t.preventDefault(), Premium.check(DailyBonus.chest_unlocker.pp_unlock.feature, e, function() {
                        DailyBonus.openLockedChest(n)
                    })
                }), o.append(l))
            })
        },
        updateChestGraphics: function() {
            $.each(this.cycle.rewards, function(t, e) {
                var i = $("#daily_bonus_content").find(".day_" + t).find(".chest");
                e.is_collected ? i.addClass("opened") : DailyBonus.canOpenChest(t) && i.addClass("unlocked"), t == DailyBonus.last_day && i.addClass("amazing")
            })
        },
        updateRewardInfo: function() {
            $.each(this.cycle.rewards, function(t, e) {
                var i = ItemUIFactory.createDetailHtml(e.item);
                if (e.is_collected ? i += '<div class="center" style="font-weight:bold;">Odměna je jiA3 zA�skA!na</div>' : DailyBonus.willChestUnlockTomorrow(t) && (i += '<div class="center" style="font-weight:bold;">K odem�?enA� tA�to truhly se vraAY opět zA�tra!</div>'), mobile) {
                    var n = $("#daily_bonus_content").find(".day_" + t).find(".reward_info");
                    n.html(i)
                } else {
                    var a = $("#daily_bonus_content").find(".day_" + t).find(".chest");
                    a.addClass("tooltip"), a.prop("title", " :: " + i)
                }
            })
        },
        canOpenChest: function(t) {
            return !this.cycle.rewards[t].is_locked && !this.cycle.rewards[t].is_collected
        },
        canBuyChest: function(t) {
            return this.chest_unlocker.pp_unlock.enabled && this.day_today == this.last_day && t >= 1 && t <= this.last_day && this.cycle.rewards[t].is_locked && !this.cycle.rewards[t - 1].is_locked
        },
        willChestUnlockTomorrow: function(t) {
            return this.day_today !== this.last_day && t == this.cycle.reward_count_unlocked + 1
        },
        areAllUnlockedChestsOpen: function() {
            var t = !1;
            return $.each(this.cycle.rewards, function(e, i) {
                i.is_locked || i.is_collected || (t = !0)
            }), !t
        },
        handleChestOpened: function(t, e) {
            DailyBonus.update(t), UI.SuccessMessage("PoloA3ka pA�idA!na do inventA!A�e");
            var i = this.day_today === this.last_day;
            mobile && this.canBuyChest(this.cycle.reward_count_unlocked + 1) && this.MobileView.switchToDay(this.cycle.reward_count_unlocked + 1), this.screen_location !== this.SCREEN_LOCATION_LOGIN || !this.areAllUnlockedChestsOpen() || i && this.cycle.reward_count_unlocked !== this.last_day || Dialog.close()
        },
        openChest: function(t) {
            TribalWars.post("daily_bonus", {
                ajaxaction: "open"
            }, {
                day: t,
                from_screen: this.screen_location
            }, function(e) {
                DailyBonus.handleChestOpened(e.cycle, t)
            })
        },
        openLockedChest: function(t) {
            TribalWars.post("daily_bonus", {
                ajaxaction: "unlock"
            }, {
                day: t,
                from_screen: this.screen_location
            }, function(e) {
                DailyBonus.handleChestOpened(e.cycle, t)
            })
        },
        reportViewed: function() {
            TribalWars.post("daily_bonus", {
                ajax: "viewed"
            }, {
                from_screen: this.screen_location
            }, null, null, !0)
        },
        reportClosed: function() {
            this.areAllUnlockedChestsOpen() || TribalWars.post("daily_bonus", {
                ajax: "canceled"
            }, {
                from_screen: this.screen_location
            }, null, null, !0)
        },
        MobileView: {
            SWIPE_THRESHOLD_PX: 50,
            pane_width: 280,
            displayed_day: 1,
            $content: null,
            $rewards_pane: null,
            $left_arrow: null,
            $right_arrow: null,
            init: function() {
                this.$content = $("#daily_bonus_content"), this.$rewards_pane = this.$content.find(".rewards_pane"), this.$left_arrow = this.$content.find(".arrow.left"), this.$right_arrow = this.$content.find(".arrow.right"), this.resize(), UI.onResizeEnd(window, function() {
                    DailyBonus.MobileView.resize()
                }), this.$content.find(".arrow.left").on("click", function() {
                    DailyBonus.MobileView.switchPrevDay()
                }), this.$content.find(".arrow.right").on("click", function() {
                    DailyBonus.MobileView.switchNextDay()
                }), this.switchToDay(DailyBonus.cycle.reward_count_unlocked, !1), this.initSwiping()
            },
            resize: function() {
                this.pane_width = this.$content.width(), this.$rewards_pane.css({
                    width: this.pane_width
                }), this.$content.find(".rewards_sheet").css({
                    width: this.pane_width * DailyBonus.last_day
                }), this.$content.find(".reward").css({
                    width: this.pane_width
                })
            },
            switchPrevDay: function() {
                this.switchToDay(this.displayed_day - 1, !0)
            },
            switchNextDay: function() {
                this.switchToDay(this.displayed_day + 1, !0)
            },
            switchToDay: function(t, e) {
                if (!(t < 1 || t > DailyBonus.last_day)) {
                    var i = (t - 1) * this.pane_width;
                    e ? this.$rewards_pane.animate({
                        scrollLeft: i
                    }, 200) : this.$rewards_pane.scrollLeft(i), this.displayed_day = t, 1 == t ? this.$left_arrow.hide() : this.$left_arrow.show(), t == DailyBonus.last_day ? this.$right_arrow.hide() : this.$right_arrow.show()
                }
            },
            initSwiping: function() {
                var t = !1,
                    e = {
                        pageX: null,
                        scrollLeft: null
                    },
                    i = {
                        pageX: null
                    },
                    n = this.$rewards_pane,
                    a = function() {
                        var t = i.pageX - e.pageX,
                            a = DailyBonus.MobileView.pane_width;
                        t = Math.max(Math.min(t, a), -a), n.scrollLeft(e.scrollLeft - t)
                    },
                    s = function(n) {
                        if (t) {
                            var a = i.pageX - e.pageX;
                            Math.abs(a) >= DailyBonus.MobileView.SWIPE_THRESHOLD_PX ? a > 0 ? DailyBonus.MobileView.switchPrevDay() : DailyBonus.MobileView.switchNextDay() : DailyBonus.MobileView.switchToDay(DailyBonus.MobileView.displayed_day, !0)
                        }
                        t = !1
                    };
                this.$rewards_pane.on({
                    touchstart: function(i) {
                        t = !0, e = {
                            pageX: i.originalEvent.touches[0].pageX,
                            scrollLeft: n.scrollLeft()
                        }
                    },
                    touchmove: function(e) {
                        t && (i = e.originalEvent.touches[0], a())
                    },
                    touchend: s,
                    touchcancel: s
                })
            }
        }
    }
}();

; /**** game/ItemUIFactory.js_ ****/
var ItemUIFactory;
! function() {
    "use strict";
    ItemUIFactory = {
        createDetailHtml: function(t) {
            return '<div class="item_details"><div class="identity"><img src="' + t.image + '"><div class="texts"><div class="name">' + t.name + '</div><div class="type">' + TribalWars.constants.item_types[t.type] + '</div><div class="category">' + TribalWars.constants.item_categories[t.category] + '</div></div></div><div class="descriptions">' + t.descriptions.map(function(t) {
                return ItemUIFactory.createDescriptionHtml(t)
            }).join("") + "</div></div>"
        },
        createDescriptionHtml: function(t) {
            var i = "";
            t.color && (i += "color: " + t.color + ";");
            var e = "";
            return t.image && (e = '<img src="' + t.image + '" style="vertical-align: -4px"/> '), '<p style="' + i + '">' + e + t.text + "</p>"
        }
    }
}();

; /**** game/Visual.js ****/
var Visual;
! function() {
    "use strict";
    Visual = function(i, n) {
        var e = $(".visual"),
            a = {
                style: "reverse",
                pause: .3
            },
            s = {
                "anim-building-barracks-0": a,
                "anim-building-snob-0": a,
                "anim-building-stable-0": a,
                "anim-building-wall-0": a,
                "anim-building-smith-0": a,
                "anim-building-place-0": a,
                "anim-building-market-0": a,
                "anim-building-wood-0": a,
                "anim-building-stone-0": a,
                "anim-building-iron-0": a,
                "anim-building-church-0": a,
                "anim-building-garage-0": a,
                "anim-building-garage-prod": {
                    style: "reverse",
                    pause: .3
                },
                "anim-building-garage-prod2": {
                    style: "reverse",
                    pause: .3
                },
                "anim-building-main-1": {
                    fps: 12
                },
                "anim-building-main-2": {
                    fps: 12
                },
                "anim-building-main-3": {
                    fps: 12
                },
                "anim-building-farm-2": {
                    fps: 18
                },
                "anim-building-farm-3": {
                    fps: 18
                },
                "anim-building-wood-prod": {
                    style: "reverse",
                    fps: 6,
                    pause: 1
                },
                "anim-building-iron-prod": {
                    style: "reverse",
                    fps: 16,
                    timing: {
                        22: 2
                    },
                    pause: 2
                },
                "anim-building-stone-prod": {
                    style: "reverse",
                    pause: 1.5
                },
                "anim-building-farm-prod": {
                    style: "reverse",
                    pause: .3
                },
                "anim-building-main-prod": {
                    style: "reverse",
                    fps: 12
                },
                "anim-building-stable-prod": {
                    style: "reverse",
                    pause: .6,
                    fps: 15
                },
                "anim-building-smith-prod": {
                    style: "reverse",
                    pause: .5
                },
                "anim-building-barracks-prod": {
                    style: "reverse",
                    pause: .5
                },
                "anim-joker": {
                    fps: 20
                },
                "anim-guard": {
                    fps: 20,
                    style: "reverse",
                    pause: 2
                },
                "anim-convo": {
                    fps: 20
                }
            },
            r = [],
            t = (new Date).getTime(),
            u = 0,
            m = this;
        this.init = function() {
            $.each(i, function(i, n) {
                s.hasOwnProperty(n) && r.push(new VisualAnim(m, n, s[n]))
            }), this.tick()
        }, this.getRoot = function() {
            return e
        }, this.tick = function() {
            $.contains(document.documentElement, e.get(0)) && (u = ((new Date).getTime() - t) / 1e3, $.each(r, function(i, n) {
                n.update(u)
            }), window.requestAnimationFrame(m.tick))
        }, this.getAssetFolder = function() {
            return "night" === n ? "visual_night" : "visual"
        }, this.generateFrameTimingsFromTimings = function(i, n, e) {
            for (var a = [], s = 0, r = 0; r < n; r++) {
                var t = i.hasOwnProperty(r) ? i[r] : 1 / e;
                a.push(t), s += t
            }
            return {
                timing: a,
                total: s
            }
        }, this.init()
    }
}();

; /**** game/VisualAnim.js ****/
var VisualAnim;
! function() {
    "use strict";
    VisualAnim = function(t, e, i) {
        var n = document.createElement("canvas");
        n.className = "visual-anim " + e, t.getRoot().append(n);
        var r, a = 0,
            s = 0,
            h = 0,
            d = 0,
            o = i.fps || 10,
            u = 0,
            g = 0,
            l = n.getContext("2d"),
            f = function() {
                var i = new Image;
                return i.src = Format.image_src(t.getAssetFolder() + "/2016/" + e + ".png"), i
            }(),
            m = i.style || "default",
            c = i.pause || 0,
            v = !1,
            w = !1;
        return this.init = function() {
            if (0 !== n.offsetWidth) {
                if (n.width = Math.round(parseFloat(window.getComputedStyle(n).width)), n.height = Math.round(parseFloat(window.getComputedStyle(n).height)), w = !0, d = f.naturalWidth / n.width, u = "reverse" === m ? 2 * d - 2 : d, i.timing) {
                    var e = t.generateFrameTimingsFromTimings(i.timing, u, o);
                    r = e.total, v = e.timing
                } else r = u / o;
                g = r + c
            }
        }, this.update = function(t) {
            if (!this.ready()) return void this.init();
            var e = t % g,
                i = 0;
            if (e > r) i = 0, s = 0, h = 0;
            else {
                var n = 0;
                if (v) {
                    var o = h;
                    for (n = s; n < u; n++)
                        if (o += v[n], e < o) {
                            h = o - v[n], s = n;
                            break
                        }
                } else n = Math.floor(e / r * u);
                i = n, "reverse" === m && (i = n < d ? i : u - n)
            }
            i !== a && (a = i, this.render(i))
        }, this.render = function(t) {
            l.clearRect(0, 0, n.width, n.height), l.drawImage(f, n.width * t, 0, n.width, n.height, 0, 0, n.width, n.height)
        }, this.ready = function() {
            return w
        }, f.addEventListener("load", this.init), this
    }
}();

; /**** game/Modules/TimedCommandQueue.js ****/
define("Ig/TribalWars/Modules/TimedCommandQueue", function() {
    "use strict";
    var t = function() {
        this.command_queue = [], this.lock_expiry = 0
    };
    return t.prototype = {
        isBusy: function() {
            return this.lock_expiry >= Date.now()
        },
        pushCommand: function(t, n) {
            this.command_queue.push({
                run: t,
                duration: n
            }), this.isBusy() || this.runNextCommand()
        },
        runNextCommand: function() {
            var t = this;
            if (0 !== this.command_queue.length) {
                var n = Date.now(),
                    i = this.command_queue.shift();
                this.lock_expiry = n + i.duration, i.run();
                var u = Math.max(0, this.lock_expiry - Date.now());
                setTimeout(function() {
                    t.runNextCommand()
                }, u)
            }
        }
    }, t
});

; /**** game/Modules/UI/FormSubmit.js ****/
! function() {
    "use strict";
    var t = "Ig/TribalWars/Modules/UI/FormSubmit";
    define(t, [], function() {
        var i = function() {
            $("body").on("keyup", ".easy-submit", function(t) {
                if (t.ctrlKey && 13 === t.keyCode) {
                    var i = $(this),
                        n = i.data("submit-button");
                    n ? $(this).parents("form").find("input[name=" + n + "]").click() : $(this).parents("form").first().submit()
                }
            })
        };
        return i.prototype = {
            class_name: t
        }, i
    })
}();

; /**** start/GoogleAnalytics.js ****/
var GAPageTracking = {
    track: function(a) {
        dataLayer.push(a)
    }
};

; /**** start/index.js ****/
function popup_scroll(e, t, n) {
    var s = window.open(e, "popup", "width=" + t + ",height=" + n + ",left=150,top=100,resizable=yes,scrollbars=yes");
    s.focus()
}

function hover_toggle_css(e, t, n) {
    $(e).toggleClass(t), n && $(e).toggleClass(n)
}
var Index = {
    login_submit: function() {
        if (Index.world_select_enter_pressed()) return !1;
        var e = $("#login_form").attr("action"),
            t = {
                user: $("#user").val(),
                password: $("#password").val(),
                cookie: !!mobile || $("#cookie").is(":checked"),
                clear: !0
            };
        return $.ajax({
            type: "POST",
            url: e,
            data: t,
            dataType: "json",
            success: function(e) {
                if ($("#error").remove(), null != e) {
                    if (null != e.error) return void(mobile ? $(".error").show().html(e.error) : $(".login-block h2").after("<div id='error' class='error' style='line-height: 20px'>" + e.error + "</div>"));
                    mobile ? $("#mobileLogin").html(e.res) : ($("#servers-list-block").html(e.res), $("#world_selection").show(), $("#servers-list").show())
                }
            }
        }), !1
    },
    world_select_enter_pressed: function() {
        var e = $(".world_button_active");
        return !(1 != e.length || !$("#world_selection").is(":visible")) && ($(".world_button_active")[0].parentNode.onclick(), !0)
    },
    submit_login: function(e) {
        return $server_select_list = $("#server_select_list"), $server_select_list.attr("action", $server_select_list.attr("action") + "&" + e), $server_select_list.submit(), !1
    },
    toggle_screenshot: function(e) {
        $("#screenshot_image").append("<img src='/graphic/index/screenshot-" + e + ".jpg' />"), $("#screenshot").fadeIn("slow")
    },
    hide_screenshot: function() {
        $("#screenshot").fadeOut("fast", function() {
            $("#screenshot_image").html("")
        })
    },
    countdown: function(e, t, n) {
        var s = t;
        t -= 1;
        var i = $('<p class="timer"><span class="timer-item">00</span> <span class="timer-item">:</span> <span class="timer-item">00</span> <span class="timer-item">:</span> <span class="timer-item">00</span> <span class="timer-item">:</span> <span class="timer-item">00</span></p>').css("visibility", "hidden"),
            r = i.find("span").eq(0),
            o = i.find("span").eq(2),
            a = i.find("span").eq(4),
            l = i.find("span").eq(6),
            p = setInterval(function() {
                var e = Math.floor(t / 60 / 60 / 24 % 60),
                    n = Math.floor(t / 60 / 60 % 24),
                    c = Math.floor(t / 60 % 60),
                    d = t % 60;
                r.text(e), o.text((n < 10 ? "0" : "") + n), a.text((c < 10 ? "0" : "") + c), l.text((d < 10 ? "0" : "") + d), s - 1 == t && i.css("visibility", "visible"), t -= 1, t < 0 && (i.fadeOut(), clearInterval(p))
            }, 1e3);
        if (e.empty(), e.append(i), n.length) {
            var n = $("<div />").attr("id", "countdown_info").text(n);
            i.append(n), i.parent().css("margin-bottom", "25px")
        }
    },
    spin: {
        input: "",
        pattern: "38384040373937396665",
        init: function() {
            $(document).on("keydown", function(e) {
                Index.spin.input += e.keyCode, Index.spin.input.length > Index.spin.pattern.length && (Index.spin.input = Index.spin.input.substring(Index.spin.input.length - Index.spin.pattern.length)), Index.spin.input === Index.spin.pattern && $(".paladin").addClass("spin")
            })
        }
    }
};
$(function() {
    Index.spin.init()
});

; /**** game/Chat.js_ ****/
var Chat;
! function() {
    "use strict";
    Chat = function() {
        var e, t, n, i, a = 245,
            o = this,
            r = {},
            s = [],
            c = {},
            d = {},
            h = {},
            u = {},
            v = {},
            l = {},
            f = 0,
            g = !0;
        this.HISTORY_CACHE_TIME = 300, this.init = function() {
            if (this.isSupported() && !(window.game_data.player.sitter > 0)) {
                this.storage = new ChatStorage, e = document.title, i = $("#chat-wrapper"), f = Math.floor($(document).width() / a);
                var t = o.storage.get("last_connection_state");
                t === !1 && this.connectionUnavailable(!0), this.contacts = new ChatContacts(this), this.addWindow(this.contacts), this.initConversations(), this.initWindowState(), this.updateSoundStatus(), this.updateBlockedPlayers(), this.storage.addObserver("conversations", this.syncConversations), this.storage.addObserver("window_state", this.syncWindowState), Connection.registerHandler("chat/playername", this.receivedPlayerName), Connection.registerHandler("chat/messages", this.receivedChatMessages), Connection.registerHandler("chat/read", this.receivedChatRead), Connection.registerHandler("chat/typing", this.receivedTypingIndication), Connection.registerHandler("chat/error", this.handleError), Connection.registerHandler("chat/playerconversation", this.receivedNewConversationData), Connection.registerHandler("chat/conversation", this.receivedConversationData), $(Connection).on("disconnected", this.connectionUnavailable), $(Connection).on("connected", this.connectionAvailable);
                var n = function() {
                    o.connectionUnavailable(), $(Connection).off("connect_error", n)
                };
                $(Connection).on("connect_error", n), Math.random() < .01 && o.cleanCache()
            }
        }, this.isPlayerBlocked = function(e) {
            return $.inArray(e, l) !== -1
        }, this.updateBlockedPlayers = function() {
            var e = window.sessionStorage,
                t = "chat_blocked_players",
                n = window.location.href.indexOf("mode=block") !== -1,
                i = !1;
            e.hasOwnProperty(t) && (l = JSON.parse(e.getItem(t)), i = !0), i && !n || TribalWars.get("api", {
                ajax: "blocked_players"
            }, function(n) {
                l = n, e.setItem(t, JSON.stringify(l))
            })
        }, this.cleanCache = function() {
            Object.keys(localStorage).forEach(function(e) {
                var t = e.match(/(\d+)_chat_/);
                if (t) {
                    var n = parseInt(t[1]);
                    if (n !== parseInt(window.game_data.player.id) && localStorage.removeItem(e), /history/.test(e)) {
                        var i = JSON.parse(localStorage.getItem(e));
                        Timing.getCurrentServerTime() - i.timestamp > 1e3 * o.HISTORY_CACHE_TIME && localStorage.removeItem(e)
                    }
                }
            })
        }, this.connectionAvailable = function() {
            i.removeClass("chat-disconnected"), g = !0, o.storage.set("last_connection_state", !0), $(".chat-header").off("click", o.showConnectionError), t && (clearTimeout(t), t = 0)
        }, this.connectionUnavailable = function(e) {
            if (!t) {
                var n = function() {
                    i.addClass("chat-disconnected"), g = !1, o.storage.set("last_connection_state", !1), $(".chat-header").on("click", o.showConnectionError)
                };
                return e === !0 ? void n() : void(t = setTimeout(n, 3e3))
            }
        }, this.isConnected = function() {
            return g
        }, this.showConnectionError = function(e) {
            return e.stopImmediatePropagation(), e.preventDefault(), UI.ErrorMessage(ChatLang.error.unavailable), !1
        }, this.isSupported = function() {
            return Connection.isSupportedBrowser() && Modernizr.json && Modernizr.localstorage && "function" == typeof window.addEventListener
        }, this.handleError = function(e) {
            if ("err_unknown" === e.message ? UI.ErrorMessage(ChatLang.error.unknown) : "err_spam" === e.message ? UI.ErrorMessage("ZdA! se, A3e ti tvA! ko�?ka pA�eběhla pA�es klA!vesnici, takA3e jsme nemohli poslat tvoji zprA!vu.") : UI.ErrorMessage(e.message), "message" === e.type) {
                var t = e.metadata.head_id,
                    n = o.getWindow("conversation_" + t);
                n && n.setBusy(!1)
            }
        }, this.updateSoundStatus = function() {
            TribalWars.getSetting("chat_sound_enabled") ? i.addClass("chat-sound-enabled") : i.removeClass("chat-sound-enabled")
        }, this.addWindow = function(e) {
            i.append(e.getWindow()), r[e.getID()] = e, setTimeout(function() {
                e.getWindow().removeClass("chat-new-block")
            }, 200)
        }, this.removeWindow = function(e) {
            delete r[e.getID()], e.getWindow().remove()
        }, this.getWindow = function(e) {
            return r.hasOwnProperty(e) ? r[e] : null
        }, this.requestConversationWithPlayer = function(e) {
            return e === parseInt(window.game_data.player.id) ? void UI.ErrorMessage(ChatLang.error.insanity) : void Connection.emit("chat/playerconversation", e)
        }, this.receivedNewConversationData = function(e) {
            1 === e.players.length ? o.newConversation(e.head_id, e.players[0].player_id, !1, !0) : o.newConversation(e.head_id, 0, !1, !0)
        }, this.getConversationData = function(e, t) {
            return h.hasOwnProperty(e) ? void t(h[e]) : (u[e] = t, void Connection.emit("chat/conversation", e))
        }, this.receivedConversationData = function(e) {
            h[e.head_id] = e, u.hasOwnProperty("head_id") && (u[e.head_id](e), delete u[e.head_id])
        }, this.newConversation = function(e, t, n, i) {
            if (e = parseInt(e), t = parseInt(t), Object.keys(r).length >= f) return void(i && (UI.ErrorMessage(ChatLang.error.windows), TribalWars.track("chat_windows", [f])));
            var a = o.getWindow("conversation_" + e);
            if (a) return a.maximize(), a.setRead(), a.focus(), a;
            var s = new ChatConversation(o, e, t);
            return o.addWindow(s), o.conversationsChanged(n), v.hasOwnProperty(e) && s.updateUnreadCount(v[e]), i && (o.windowStateChanged(), s.setRead(), s.focus()), s
        }, this.removeConversation = function(e, t) {
            var n = "conversation_" + e,
                i = o.getWindow(n);
            i && (o.removeWindow(i), o.conversationsChanged(t))
        }, this.conversationsChanged = function(e) {
            var t = [];
            $.each(r, function(e, n) {
                n instanceof ChatConversation && t.push(n.getConversationKey())
            }), s = t, e !== !0 && o.storage.set("conversationsv2", t)
        }, this.syncConversations = function(e, t) {
            s.forEach(function(e) {
                $.inArray(e, t) === -1 && o.removeConversation(e.split("_")[0], !0)
            }), t.forEach(function(e) {
                if ($.inArray(e, s) === -1) {
                    var t = e.split("_");
                    o.newConversation(t[0], t[1], !0)
                }
            })
        }, this.initConversations = function() {
            var e = o.storage.get("conversationsv2");
            e && e.forEach(function(e) {
                var t = e.split("_");
                o.newConversation(t[0], t[1], !0)
            })
        }, this.addPlayerName = function(e, t) {
            c[e] = t, d.hasOwnProperty(e) && (d[e](t), delete d[e])
        }, this.getPlayerName = function(e, t) {
            return c.hasOwnProperty(e) ? void t(c[e]) : (d[e] = t, void o.requestPlayerName(e))
        }, this.requestPlayerName = function(e) {
            Connection.emit("chat/playername", e)
        }, this.receivedPlayerName = function(e) {
            o.addPlayerName(e.id, e.name)
        }, this.initWindowState = function() {
            var e = o.storage.get("window_state");
            e ? (this.syncWindowState(null, e), o.updateUIBufferStatus()) : parseInt(window.game_data.player.points) < 100 && o.contacts.minimize()
        }, this.windowStateChanged = function() {
            var e = {};
            $.each(r, function(t, n) {
                e[t] = n.isMinimized() ? 0 : 1
            }), o.window_state = e, o.storage.set("window_state", e), o.updateUIBufferStatus()
        }, this.updateUIBufferStatus = function() {
            var e = $("#chat-wrapper").find(".chat-window:not(.chat-window-minimized)").length > 0;
            e ? $(".chat-open-buffer").show() : $(".chat-open-buffer").hide()
        }, this.syncWindowState = function(e, t) {
            $.each(t, function(e, t) {
                var n = o.getWindow(e);
                if (n) {
                    var i = n.isMinimized() ? 0 : 1;
                    i !== t && (1 === t ? n.maximize(!0) : n.minimize(!0))
                }
            })
        }, this.requestChatHistory = function(e, t) {
            var n = {
                head_id: e,
                before: t
            };
            Connection.emit("chat/history", n)
        }, this.receivedChatMessages = function(e) {
            var t = o.getWindow("conversation_" + e.head_id);
            return t ? void t.receivedMessages(e) : (t = o.newConversation(e.head_id, e.player_id), t.playSound(), void o.requestContacts())
        }, this.requestContacts = function() {
            Connection.emit("chat/contacts", {})
        }, this.setUnreadMessageCount = function(t, n) {
            v[t] = n;
            var i = o.getWindow("conversation_" + t);
            if (i && i.updateUnreadCount(n), o.contacts) {
                o.contacts.setUnreadCount(t, n);
                var a = 0;
                $.each(v, function(e, t) {
                    a += t
                }), o.contacts.setTotalUnreadCount(a), 0 === a ? document.title = e : document.title = "(" + a + ") " + e
            }
        }, this.receivedChatRead = function(e) {
            o.setUnreadMessageCount(e, 0)
        }, this.receivedTypingIndication = function(e) {
            var t = o.getWindow("conversation_" + e);
            t && t.receivedPartnerTypingNotice()
        }, this.getEmojiSelector = function(e) {
            return n ? void e(n) : void TribalWars.get("api", {
                ajax: "emoji"
            }, function(t) {
                n = t, e(n)
            })
        }, this.init()
    }
}();

; /**** game/ChatLang.js ****/
var ChatLang;
! function() {
    "use strict";
    ChatLang = {
        general: {
            title: "Chat",
            close: "Opravdu chceA! vypnout chat? Pokud budeA! mA�t chat vypnutA1, ostatnA�m se v něm zobrazA�A! offline. Jakmile ho vypneA!, zapnout si jej budeA! moct pA�es stranu s hernA�mi nastavenA�mi.",
            close_confirm: "Vypnout chat",
            authorship: "[%1] %2 napsal:",
            new_messages: "Jsou k dispozici novA� zprA!vy."
        },
        buttons: {
            close: "ZavA�A�t",
            minimize: "SkrA1t",
            maximize: "OtevA�A�t",
            other: "Blokovat uA3ivatele",
            "sound-on": "Zapnout zvuky",
            "sound-off": "Vypnout zvuky"
        },
        contacts: {
            recent: "PoslednA� konverzace",
            group: "SkupinovA! konverzace",
            ally: "Kmen",
            buddy: "PA�A!telA�",
            none: "NemA!A! A3A!dnA� konverzace, kterA� by se mohly zobrazit. Vstup do některA�ho kmenu a nebo pozdrav hrA!�?e ve svA�m okolA�!",
            enter_name: "Zadej jmA�no hrA!�?e",
            does_not_exist: "HrA!�? s tA�mto jmA�nem neexistuje."
        },
        error: {
            windows: "Pro tuto akci mA!A! otevA�eno pA�A�liA! mnoho oken.",
            unknown: "DoA!lo k neznA!mA� chybě, zkus to prosA�m později.",
            insanity: "Je nebezpe�?nA� mluvit sA!m se sebou.",
            unavailable: "Nelze se pA�ipojit k chatu, zkus to prosA�m později."
        },
        online: {
            online: "Online v chatu",
            offline: "Offline v chatu",
            unknown: "Online stav neznA!mA1 / nepouA3A�vanA1"
        },
        menu: {
            report: "NahlA!sit konverzaci",
            block: "Zablokovat hrA!�?e"
        }
    }
}();

; /**** game/ChatStorage.js ****/
var ChatStorage;
! function() {
    "use strict";
    ChatStorage = function() {
        var t = {},
            e = window.game_data.player.id + "_chat_";
        this.init = function() {
            "function" == typeof window.addEventListener && window.addEventListener("storage", this.storageChange, !1)
        }, this.storageChange = function(n) {
            if (n.key.substr(0, e.length) === e && t.hasOwnProperty(n.key)) {
                var a = t[n.key],
                    i = !!n.oldValue && JSON.parse(n.oldValue),
                    o = !!n.newValue && JSON.parse(n.newValue);
                a(i, o)
            }
        }, this.get = function(t) {
            return JSON.parse(window.localStorage.getItem(e + t))
        }, this.set = function(t, n) {
            window.localStorage.setItem(e + t, JSON.stringify(n))
        }, this.remove = function(t) {
            window.localStorage.removeItem(e + t)
        }, this.addObserver = function(n, a) {
            t[e + n] = a
        }, this.init()
    }
}();

; /**** game/ChatWindow.js ****/
var ChatWindow;
! function() {
    "use strict";
    ChatWindow = function(i) {
        var t = this;
        this.$block = null, this.buildWindow = function(i) {
            var n = '<div class="chat-block chat-new-block"><div class="chat-window ' + i + '"><div class="chat-header"><h4 class="chat-title"></h4><div class="chat-buttons"></div></div><div class="chat-body"></div><div class="chat-footer"></div></div></div>';
            t.$block = $(n), t.$block.find(".chat-header").click(function(i) {
                return "A" === i.target.tagName || void(t.isMinimized() ? t.maximize() : t.minimize())
            })
        }, this.getWindow = function() {
            return t.$block
        }, this.setTitle = function(i) {
            t.$block.find("h4").html(i)
        }, this.addButton = function(i, n) {
            var a = $('<a href="#" class="chat-button chat-button-' + i + '"></a>').attr("title", ChatLang.buttons[i]);
            t.$block.find(".chat-buttons").append(a), a.on("click", n)
        }, this.minimize = function(n) {
            return !!i.isConnected() && (t.$block.find(".chat-window").addClass("chat-window-minimized"), n !== !0 && i.windowStateChanged(), t.hasOwnProperty("didMinimize") && t.didMinimize(), !1)
        }, this.maximize = function(n) {
            return !!i.isConnected() && (t.$block.find(".chat-window").removeClass("chat-window-minimized"), n !== !0 && i.windowStateChanged(), t.hasOwnProperty("didMaximize") && t.didMaximize(), !1)
        }, this.isMinimized = function() {
            return t.$block.find(".chat-window").hasClass("chat-window-minimized")
        }
    }
}();

; /**** game/ChatContacts.js ****/
var ChatContacts;
! function() {
    "use strict";
    ChatContacts = function(t) {
        ChatWindow.call(this, t);
        var a = this,
            n = {},
            e = {},
            o = {},
            i = {};
        this.init = function() {
            this.buildWindow("chat-contacts"), this.setTitle(ChatLang.general.title + ' <span class="chat-total-unread"></span>'), this.addButton("close", this.close), this.addButton("minimize", this.minimize), this.addButton("maximize", this.maximize), this.addButton("sound-off", this.toggleSound), this.addButton("sound-on", this.toggleSound), this.buildFooter(), this.loadGroupState(), this.renderContactsFromCache(), this.getWindow().on("click", ".chat-contact", this.clickContact), Connection.registerHandler("chat/contacts", this.receivedContacts), Connection.registerHandler("chat/playerdata", this.receivedNewPlayerData), t.storage.addObserver("group_state", this.remoteGroupStateChanged)
        }, this.getID = function() {
            return "contacts"
        }, this.didMinimize = function() {
            a.getWindow().addClass("chat-mini-block")
        }, this.didMaximize = function() {
            a.getWindow().removeClass("chat-mini-block")
        }, this.toggleSound = function() {
            var a = TribalWars.getSetting("chat_sound_enabled");
            return TribalWars.setSetting("chat_sound_enabled", !a, function() {
                t.updateSoundStatus()
            }), !1
        }, this.close = function() {
            var t = [{
                text: ChatLang.general.close_confirm,
                callback: function() {
                    TribalWars.setSetting("chat_enabled", 0, function() {
                        window.location.reload()
                    })
                },
                confirm: !0
            }];
            UI.ConfirmationBox(ChatLang.general.close, t)
        }, this.clickContact = function() {
            var a = $(this).data("player_id"),
                n = $(this).data("head_id");
            return n ? t.newConversation(n, a, !1, !0) : t.requestConversationWithPlayer(a), !1
        }, this.sortContactsByName = function(t, a) {
            return t.name.localeCompare(a.name)
        }, this.sortContactsByLastPost = function(t, a) {
            return t.last_post > a.last_post
        }, this.renderContactsFromCache = function() {
            var e = t.storage.get("contacts");
            e && (n = e, a.renderContacts())
        }, this.renderContacts = function() {
            var s = a.getWindow().find(".chat-body");
            i = {}, 0 === Object.keys(n).length && 0 === s.find(".chat-no-contacts").length ? s.append('<div class="chat-no-contacts">' + ChatLang.contacts.none + "</div>") : Object.keys(n).length > 0 && s.find(".chat-no-contacts").remove(), $.each(n, function(n, c) {
                c = "recent" === n || "group" === n ? c.sort(a.sortContactsByLastPost) : c.sort(a.sortContactsByName);
                var r, h = s.find("#chat-contact-group-" + n);
                if (h.length) r = h.find(".chat-contact-group-contacts");
                else {
                    o.hasOwnProperty(n) || (o[n] = 1), h = $('<div class="chat-contact-group chat-contact-group-open" id="chat-contact-group-' + n + '"/>').appendTo(s);
                    var d = $('<div class="chat-contact-group-header"><span>' + ChatLang.contacts[n] + "</span></div>").appendTo(h);
                    d.data("group", n), d.on("click", a.toggleGroup), r = $('<div class="chat-contact-group-contacts" />').appendTo(h), 0 === o[n] && a.hideGroup(n)
                }
                e.hasOwnProperty(n) || (e[n] = {});
                var u, l = e[n],
                    p = {},
                    g = {};
                $.each(c, function(a, e) {
                    if (!e.player_id || !g.hasOwnProperty(e.player_id)) {
                        var o = e.head_id + "_" + e.player_id;
                        e.player_id ? t.addPlayerName(e.player_id, e.name) : t.receivedConversationData({
                            head_id: e.head_id,
                            subject: e.name
                        });
                        var s;
                        l.hasOwnProperty(o) || (s = $('<a class="chat-contact chat-status chat-status-' + e.player_id + '" data-head_id="' + e.head_id + '" data-player_id="' + e.player_id + '" id="chat-contact-' + o + '" href="#">' + e.name + ' <span class="chat-contact-count"></span></a>').data("online", -2), u ? u.after(s) : "recent" === n ? r.prepend(s) : r.append(s)), t.setUnreadMessageCount(e.head_id, e.new_count), i.hasOwnProperty[e.player_id] && e.online === -1 || (i[e.player_id] = e.online), p[o] = !0, g[e.player_id] = !0, u = s
                    }
                }), $.each(l, function(t) {
                    p.hasOwnProperty(t) || s.find("#chat-contact-" + t).remove()
                }), e[n] = p
            }), a.renderOnlineState()
        }, this.renderOnlineState = function() {
            $.each(i, function(t, n) {
                var e = a.getWindow().parent().find(".chat-status-" + t);
                e.each(function() {
                    var t = $(this);
                    parseInt(t.data("online")) !== n && (1 === n ? t.removeClass("chat-status-offline").addClass("chat-status-online").attr("title", ChatLang.online.online) : 0 === n ? t.removeClass("chat-status-online").addClass("chat-status-offline").attr("title", ChatLang.online.offline) : t.removeClass("chat-status-online chat-status-offline").attr("title", ChatLang.online.unknown), t.data("online", n))
                })
            })
        }, this.getOnlineState = function(t) {
            return i.hasOwnProperty(t) ? i[t] : -1
        }, this.loadGroupState = function() {
            var a = t.storage.get("group_state");
            a && (o = a)
        }, this.toggleGroup = function() {
            var t = $(this).data("group"),
                n = $(this).parent();
            n.hasClass("chat-contact-group-open") ? a.hideGroup(t) : a.showGroup(t)
        }, this.showGroup = function(t) {
            a.getWindow().find("#chat-contact-group-" + t).addClass("chat-contact-group-open"), a.setLocalGroupState(t, 1)
        }, this.hideGroup = function(t) {
            a.getWindow().find("#chat-contact-group-" + t).removeClass("chat-contact-group-open"), a.setLocalGroupState(t, 0)
        }, this.setLocalGroupState = function(a, n) {
            o[a] = n, t.storage.set("group_state", o)
        }, this.remoteGroupStateChanged = function(t, n) {
            $.each(n, function(t, n) {
                n !== o[t] && (n ? a.showGroup(t) : a.hideGroup(t))
            })
        }, this.buildFooter = function() {
            var t = $('<input class="chat-input chat-search" type="text" placeholder="' + ChatLang.contacts.enter_name + '" />').appendTo(a.getWindow().find(".chat-footer"));
            t.on("keyup", function(n) {
                if (13 === n.keyCode) return a.newChatWithUnknownPlayer(t.val()), t.val(""), !1
            })
        }, this.newChatWithUnknownPlayer = function(t) {
            Connection.emit("chat/playerdata", t)
        }, this.receivedNewPlayerData = function(a) {
            a.status === !1 ? UI.ErrorMessage(ChatLang.contacts.does_not_exist) : (t.addPlayerName(a.result.id, a.result.name), t.requestConversationWithPlayer(a.result.id))
        }, this.receivedContacts = function(e) {
            n = e, t.storage.set("contacts", n), a.renderContacts()
        }, this.setUnreadCount = function(t, n) {
            var e = a.getWindow().find(".chat-contact[data-head_id=" + t + "]"),
                o = e.find(".chat-contact-count");
            o.text(n > 0 ? "(" + n + ")" : "")
        }, this.setTotalUnreadCount = function(t) {
            this.getWindow().find(".chat-total-unread").text(t > 0 ? "(" + t + ")" : "")
        }, this.init()
    }, ChatContacts.prototype = new ChatWindow
}();

; /**** game/ChatConversation.js_ ****/
var ChatConversation;
! function() {
    "use strict";
    ChatConversation = function(e, t, a) {
        ChatWindow.call(this, e);
        var i, n, s, o, r = 20,
            l = this,
            d = 0,
            c = !1,
            h = !1,
            p = 0,
            u = 0,
            g = 0,
            m = {
                timestamp: 0,
                human: ""
            },
            f = 0,
            v = !1,
            y = !1;
        this.init = function() {
            l.buildWindow("chat-conversation"), s = l.getWindow().find(".chat-body"), l.addButton("close", l.close), l.addButton("minimize", l.minimize), l.addButton("maximize", l.maximize), a && l.addButton("other", l.clickOther), l.buildUI(), l.initDragDrop(), s.on("scroll", l.didScroll), s.on("click", l.setRead), a ? e.getPlayerName(a, function(t) {
                o = t;
                var i = TribalWars.buildURL("GET", "info_player", {
                        id: a
                    }),
                    n = "",
                    s = e.contacts.getOnlineState(a);
                1 === s ? n = "chat-status-online" : 0 === s && (n = "chat-status-offline"), l.setTitle('<a class="chat-status chat-status-' + a + " " + n + '" href="' + i + '">' + t + '</a> <span class="chat-unread-count"></span><span class="chat-typing-indicator"></span>'), l.getWindow().find(".chat-status").data("online", s)
            }) : e.getConversationData(t, function(e) {
                l.setTitle(e.subject + ' <span class="chat-unread-count"></span>')
            }), l.requestHistory()
        }, this.getID = function() {
            return "conversation_" + t
        }, this.getHeadID = function() {
            return t
        }, this.getPlayerID = function() {
            return a
        }, this.getConversationKey = function() {
            return t + "_" + a
        }, this.didMaximize = function() {
            l.scrollToBottom()
        }, this.didMinimize = function() {
            l.getWindow().find(".chat-popover").hide()
        }, this.clickOther = function() {
            var e = l.getWindow().find(".chat-menu");
            if (e.length) return void e.remove();
            var t = $('<div class="chat-menu" />');
            a && $('<a href="#" class="chat-menu-option">' + ChatLang.menu.block + "</div>").on("click", function() {
                return l.close(), TribalWars.redirect("info_player", {
                    mode: "block",
                    block_id: l.getPlayerID()
                }), !1
            }).appendTo(t), t.appendTo(s.parent())
        }, this.close = function() {
            return l.setRead(), e.removeConversation(t), !1
        }, this.scrollToBottom = function() {
            s.scrollTop(s[0].scrollHeight)
        }, this.buildUI = function() {
            l.buildFooter();
            var e = $('<a class="chat-new-message-notification" href="#">' + ChatLang.general.new_messages + "</div>");
            e.on("click", function() {
                return e.hide(), l.scrollToBottom(), l.setRead(), !1
            }), e.appendTo(s)
        }, this.buildFooter = function() {
            var e = l.getWindow().find(".chat-footer"),
                t = $('<textarea class="chat-input" maxlength="500"></textarea>').appendTo(e);
            i = t.height(), t.on("input", function() {
                l.adjustInputSize(), l.broadcastTyping()
            }), t.on("keydown", function(e) {
                if (13 === e.keyCode) return e.ctrlKey ? (t.val(t.val() + "\n"), l.adjustInputSize()) : (l.sendMessage(t.val()), t.val(""), l.adjustInputSize()), !1
            }), t.on("click", l.setRead), t.on("focus", function() {
                v = !0
            }), t.on("blur", function() {
                v = !1
            }), e.append(UI.Image("loading2.gif", {
                class: "chat-busy-indicator"
            }));
            var a = UI.Image("emoji/16x16/1f600.png", {
                class: "chat-smileys"
            });
            e.append(a), a.on("click", this.toggleSmileys)
        }, this.toggleSmileys = function(t) {
            t && t.stopPropagation();
            var a = l.getWindow().find(".chat-popover-smileys").parents(".chat-popover");
            return a.length ? void("none" === a.css("display") ? a.show() : a.hide()) : (l.setBusy(!0), void e.getEmojiSelector(function(e) {
                var t = $('<div class="chat-popover" />'),
                    a = $('<div class="chat-popover-smileys" />').appendTo(t);
                a.html(e), a.slimScroll({
                    height: "200px"
                }), a.on("click", ".emoji", function() {
                    var e = ":" + $(this).attr("title") + ":",
                        t = l.getWindow().find(".chat-input"),
                        a = t.prop("selectionStart"),
                        i = t.val(),
                        n = i.substring(0, a),
                        s = i.substring(a, i.length);
                    t.val(n + e + s), t.focus(), t[0].setSelectionRange(n.length + e.length, n.length + e.length), l.adjustInputSize(), l.toggleSmileys()
                }), l.getWindow().on("click", function(e) {
                    var t = l.getWindow().find(".chat-popover-smileys").parents(".chat-popover");
                    "none" !== t.css("display") && l.toggleSmileys()
                }), l.getWindow().append(t), l.setBusy(!1)
            }))
        }, this.adjustInputSize = function() {
            var e = l.getWindow().find("textarea");
            i || (i = e.height(), n = l.getWindow().find(".chat-body").height()), e[0].style.height = 0, e[0].style.height = Math.max(i, e[0].scrollHeight) + "px", l.getWindow().find(".chat-body").height(n + i - e.parent().height() + "px")
        }, this.setBusy = function(e) {
            e ? l.getWindow().addClass("chat-busy") : l.getWindow().removeClass("chat-busy")
        }, this.broadcastTyping = function() {
            if (a) {
                var e = (new Date).getTime();
                e - u > 3500 && (u = e, Connection.emit("chat/typing", {
                    head_id: l.getHeadID(),
                    player_id: l.getPlayerID()
                }))
            }
        }, this.sendMessage = function(e) {
            Connection.emit("chat/send", {
                head_id: t,
                body: e
            }), l.setBusy(!0), u = 0
        }, this.fixBB = function(e) {
            var t = TribalWars._script + "?";
            return window.game_data.hasOwnProperty("village") && (t += "village=" + window.game_data.village.id + "&"), e.replace(/\/guest.php\?/g, t)
        }, this.addMessage = function(t, i, n) {
            var o = s.scrollTop(),
                r = $('<div class="chat-row" />'),
                c = t.body;
            e.isPlayerBlocked(t.player_id) && (r.addClass("blocked"), c = "HrA!�? blokovA!n");
            var h = window.s(ChatLang.general.authorship, t.datetime, parseInt(t.player_id) === parseInt(window.game_data.player.id) ? window.game_data.player.name : "other_person"),
                u = $('<div class="chat-message" />').html('<span class="chat-author">' + h + "\n</span>" + l.fixBB(c)).attr("title", t.datetime).appendTo(r),
                g = 0;
            if (t.player_id !== parseInt(game_data.player.id)) {
                u.addClass("chat-message-other");
                var w = TribalWars.buildURL("GET", "info_player", {
                        id: t.player_id
                    }),
                    T = $('<a href="' + w + '" title="' + escapeHtml(t.player_name) + '"><img src="' + t.player_avatar + '" class="userimage" /></a>');
                r.prepend(T), r.addClass("has-avatar"), UI.ToolTip(T), r.addClass("reportable");
                var _ = TribalWars.buildURL("GET", "affront", {
                        mode: "affront",
                        type: "post",
                        id: t.id
                    }),
                    C = Format.image_src("error.png"),
                    b = $('<a href="' + _ + '" title="NahlA!sit nevhodnA1 obsah" class="chat-report"><img src="' + C + '" /></a>');
                r.append(b), UI.ToolTip(b), a || r.prepend('<span class="chat-author-line">' + escapeHtml(t.player_name) + "</span>")
            }
            var W = function(e) {
                    var a = $('<div class="chat-row"><span class="chat-time">' + (n ? t.datetime : m.human) + "</span></div>");
                    "new" === i ? a.appendTo(s) : a.prependTo(s), g += a.outerHeight()
                },
                I = function() {
                    0 === f && (f = t.timestamp), 0 === m.timestamp ? m = {
                        timestamp: t.timestamp,
                        human: t.datetime
                    } : m.timestamp - t.timestamp > 3600 || n ? (W(n ? t.datetime : m.human), m = {
                        timestamp: t.timestamp,
                        human: t.datetime
                    }) : m.human = t.datetime
                };
            "new" === i ? (0 !== f && (new Date).getTime() / 1e3 - f > 3600 && W(t.human), f = t.timestamp, s.append(r), r.hide().fadeIn(200), t.player_id !== parseInt(window.game_data.player.id) ? (e.setUnreadMessageCount(l.getHeadID(), p + 1), v ? l.setRead() : l.playSound(), l.setPartnerSilent(), l.isMinimized() || s[0].scrollHeight - s.height() === s.scrollTop() || s.find(".chat-new-message-notification").show()) : l.setBusy(!1)) : (n && s.prepend(r), I(), n || s.prepend(r)), t.player_id !== parseInt(game_data.player.id) && (y = !0), (0 === d || d > t.id) && (d = t.id), l.isMinimized() || s.scrollTop(o + r.outerHeight() + g)
        }, this.requestHistory = function(a) {
            if (!c) {
                if (a || (a = 0), 0 === a) {
                    var i = l.getCachedHistory();
                    if (i) return void setTimeout(function() {
                        l.receivedMessages({
                            type: "history",
                            messages: i
                        })
                    }, 0)
                }
                c = !0, e.requestChatHistory(t, a)
            }
        }, this.getCachedHistory = function() {
            var a = e.storage.get("history_" + t);
            return !!a && (Timing.getCurrentServerTime() - a.timestamp < 1e3 * e.HISTORY_CACHE_TIME && a.messages)
        }, this.receivedMessages = function(t) {
            c = !1;
            var a = t.messages,
                i = !1;
            a.length !== r + 1 ? i = !0 : a = a.slice(0, r), t.messages.forEach(function(e, n) {
                l.addMessage(e, t.type, i && n === a.length - 1)
            }), "history" === t.type && t.hasOwnProperty("fresh") && t.fresh === !0 ? e.storage.set("history_" + t.head_id, {
                timestamp: Timing.getCurrentServerTime(),
                messages: t.messages
            }) : "new" === t.type && e.storage.remove("history_" + t.head_id), 0 === t.messages.length && (h = !0)
        }, this.playSound = function() {
            TribalWars.getSetting("chat_sound_enabled") && TribalWars.playSound("chat")
        }, this.didScroll = function(e) {
            var t = s[0].scrollHeight - s.height();
            $(this).scrollTop() < t / 3 && !c && !h && l.requestHistory(d), s[0].scrollHeight - s.height() === s.scrollTop() && s.find(".chat-new-message-notification").hide()
        }, this.updateUnreadCount = function(e) {
            p = parseInt(e);
            var t = l.getWindow().find(".chat-unread-count");
            p > 0 ? t.show().text("(" + e + ")") : 0 === p && "none" !== t.css("display") && t.fadeOut()
        }, this.setRead = function() {
            0 !== p && (e.setUnreadMessageCount(t, 0), Connection.emit("chat/read", t), a && TribalWars.track("chat", ["read", l.getPlayerID(), 1]))
        }, this.receivedPartnerTypingNotice = function() {
            g && clearTimeout(g), l.setPartnerTyping(), g = setTimeout(l.setPartnerSilent, 5e3)
        }, this.setPartnerTyping = function() {
            l.getWindow().addClass("is-typing")
        }, this.setPartnerSilent = function() {
            g && clearTimeout(g), l.getWindow().removeClass("is-typing")
        }, this.focus = function() {
            l.getWindow().find("textarea").focus()
        }, this.initDragDrop = function() {
            var e = l.getWindow(),
                t = 0;
            e.on("dragenter", function(e) {
                t++, 1 === t && s.addClass("lit")
            }), e.on("dragleave", function(e) {
                t--, 0 === t && s.removeClass("lit")
            }), e.on("dragover", function(e) {
                e.preventDefault()
            }), e.on("dragstop", function(e) {
                t = 0, s.removeClass("lit")
            }), e.on("drop", function(e) {
                var a = e.originalEvent.dataTransfer.getData("Text");
                if (!a) return !0;
                if ("http" !== a.substr(0, 4)) return !0;
                var i, n = a.match(/id=([0-9]+)/);
                if (n && a.match(/screen=info_village/)) i = "[village]#" + n[1] + "[/village]";
                else if (a.match(/screen=overview/) && !a.match(/screen=overview_/)) {
                    var o = a.match(/village=(\d+)/);
                    o && (i = "[village]#" + o[1] + "[/village]")
                } else i = n && a.match(/screen=info_player/) ? "[player]#" + n[1] + "[/player]" : n && a.match(/screen=info_ally/) ? "[ally]#" + n[1] + "[/ally]" : "[url]" + a + "[/url]";
                i && (l.sendMessage(i), l.getWindow().find("textarea").focus(), e.preventDefault()), t = 0, s.removeClass("lit")
            })
        }, this.init()
    }, ChatConversation.prototype = new ChatWindow
}();

; /**** initialize constants ****/
TribalWars.constants = {
    "item_types": {
        "1": "Vlastnost",
        "2": "Pou\u017eiteln\u00e9",
        "3": "Pasivn\u00ed"
    },
    "item_categories": {
        "7": "Kniha schopnost\u00ed",
        "5": "Mapa",
        "6": "Odm\u011bna",
        "4": "Polo\u017eka z ud\u00e1losti",
        "1": "Pr\u00e9mium",
        "2": "Surovinov\u00fd bal\u00ed\u010dek",
        "3": "Vhodn\u00fd k no\u0161en\u00ed"
    },
    "item_tags": {
        "rarity": ["\u017d\u00e1dn\u00e9", "Obvykl\u00e9", "Neobvykl\u00e9", "Vz\u00e1cn\u00e9", "Legend\u00e1rn\u00ed"],
        "use_type": ["\u017d\u00e1dn\u00e9", "Pou\u017eiteln\u00e9", "Darovateln\u00e9"]
    }
};