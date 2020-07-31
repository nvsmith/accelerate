var ctf_js_exists = (typeof ctf_js_exists !== 'undefined') ? true : false;
if(!ctf_js_exists){

    (function ($) {

        window.ctf_init = function() {

            if ($('.ctf').length <= $('.ctf_is_initialized').length) {
                return;
            }

            var ctfIntentsIncluded = false;
            $('.ctf').each(function () {
                if (!$(this).hasClass('ctf_is_initialized') && !ctfIntentsIncluded && typeof $(this).attr('data-ctfintents') !== 'undefined') {
                    ctfIntentsIncluded = true;
                    Function && Function.prototype && Function.prototype.bind && (/MSIE ([6789]|10)/.test(navigator.userAgent) || (window.__twttr && window.__twttr.widgets && window.__twttr.widgets.loaded && window.twttr.widgets.load && window.twttr.widgets.load(), window.__twttr && window.__twttr.widgets && window.__twttr.widgets.init || function (t) {
                        function e(e) {
                            for (var n, i, o = e[0], s = e[1], a = 0, c = []; a < o.length; a++) i = o[a], r[i] && c.push(r[i][0]), r[i] = 0;
                            for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
                            for (u && u(e); c.length;) c.shift()()
                        }

                        var n = {}, r = {1: 0};

                        function i(e) {
                            if (n[e]) return n[e].exports;
                            var r = n[e] = {i: e, l: !1, exports: {}};
                            return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports
                        }

                        i.e = function (t) {
                            var e = [], n = r[t];
                            if (0 !== n) if (n) e.push(n[2]); else {
                                var o = new Promise(function (e, i) {
                                    n = r[t] = [e, i]
                                });
                                e.push(n[2] = o);
                                var s, a = document.getElementsByTagName("head")[0],
                                    u = document.createElement("script");
                                u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.src = function (t) {
                                    return i.p + "js/" + ({
                                        0: "moment~timeline~tweet",
                                        2: "dm_button",
                                        3: "button",
                                        4: "moment",
                                        5: "periscope_on_air",
                                        6: "timeline",
                                        7: "tweet"
                                    }[t] || t) + "." + {
                                        0: "ec04a6cb5ba879d0e0db41f211639fdf",
                                        2: "6542a7407a2eccac51f5c5e0fac5bb80",
                                        3: "d941c9a422e2e3faf474b82a1f39e936",
                                        4: "0a3cc02317b85399478995c763a1296c",
                                        5: "d26526abe761c4d8d8d71cf0ec565649",
                                        6: "0a7b4db67eacd23e35c5ce02e6ea3470",
                                        7: "b2d749028be81f16d9cb4994d9692feb"
                                    }[t] + ".js"
                                }(t), s = function (e) {
                                    u.onerror = u.onload = null, clearTimeout(c);
                                    var n = r[t];
                                    if (0 !== n) {
                                        if (n) {
                                            var i = e && ("load" === e.type ? "missing" : e.type),
                                                o = e && e.target && e.target.src,
                                                s = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + o + ")");
                                            s.type = i, s.request = o, n[1](s)
                                        }
                                        r[t] = void 0
                                    }
                                };
                                var c = setTimeout(function () {
                                    s({type: "timeout", target: u})
                                }, 12e4);
                                u.onerror = u.onload = s, a.appendChild(u)
                            }
                            return Promise.all(e)
                        }, i.m = t, i.c = n, i.d = function (t, e, n) {
                            i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
                        }, i.r = function (t) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
                        }, i.t = function (t, e) {
                            if (1 & e && (t = i(t)), 8 & e) return t;
                            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                            var n = Object.create(null);
                            if (i.r(n), Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function (e) {
                                return t[e]
                            }.bind(null, r));
                            return n
                        }, i.n = function (t) {
                            var e = t && t.__esModule ? function () {
                                return t.default
                            } : function () {
                                return t
                            };
                            return i.d(e, "a", e), e
                        }, i.o = function (t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }, i.p = "https://platform.twitter.com/", i.oe = function (t) {
                            throw console.error(t), t
                        };
                        var o = window.__twttrll = window.__twttrll || [], s = o.push.bind(o);
                        o.push = e, o = o.slice();
                        for (var a = 0; a < o.length; a++) e(o[a]);
                        var u = s;
                        i(i.s = 94)
                    }([function (t, e, n) {
                        var r = n(1);

                        function i(t, e) {
                            var n;
                            for (n in t) t.hasOwnProperty && !t.hasOwnProperty(n) || e(n, t[n]);
                            return t
                        }

                        function o(t) {
                            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
                        }

                        function s(t) {
                            return t === Object(t)
                        }

                        function a(t) {
                            var e;
                            if (!s(t)) return !1;
                            if (Object.keys) return !Object.keys(t).length;
                            for (e in t) if (t.hasOwnProperty(e)) return !1;
                            return !0
                        }

                        function u(t) {
                            return t ? Array.prototype.slice.call(t) : []
                        }

                        t.exports = {
                            aug: function (t) {
                                return u(arguments).slice(1).forEach(function (e) {
                                    i(e, function (e, n) {
                                        t[e] = n
                                    })
                                }), t
                            }, async: function (t, e) {
                                r.setTimeout(function () {
                                    t.call(e || null)
                                }, 0)
                            }, compact: function t(e) {
                                return i(e, function (n, r) {
                                    s(r) && (t(r), a(r) && delete e[n]), void 0 !== r && null !== r && "" !== r || delete e[n]
                                }), e
                            }, contains: function (t, e) {
                                return !(!t || !t.indexOf) && t.indexOf(e) > -1
                            }, forIn: i, isObject: s, isEmptyObject: a, toType: o, isType: function (t, e) {
                                return t == o(e)
                            }, toRealArray: u
                        }
                    }, function (t, e) {
                        t.exports = window
                    }, function (t, e, n) {
                        var r = n(6);
                        t.exports = function () {
                            var t = this;
                            this.promise = new r(function (e, n) {
                                t.resolve = e, t.reject = n
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(11),
                            i = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
                            o = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
                            s = /^http(s?):\/\/(\w+\.)*twitter\.com([:/]|$)/i, a = /^http(s?):\/\/pbs\.twimg\.com\//,
                            u = /^#?([^.,<>!\s/#\-()'"]+)$/, c = /twitter\.com(?::\d{2,4})?\/intent\/(\w+)/,
                            d = /^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,
                            l = /^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i,
                            f = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i,
                            h = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-%]+)/i,
                            p = /^https?:\/\/(?:www\.)?twitter\.com\/i\/live\/(\d+)/i,
                            m = /^https?:\/\/syndication\.twitter\.com\/settings/i,
                            v = /^https?:\/\/(localhost|platform)\.twitter\.com(?::\d+)?\/widgets\/widget_iframe\.(.+)/i,
                            g = /^https?:\/\/(?:www\.)?twitter\.com\/search\?q=(\w+)/i;

                        function w(t) {
                            return "string" == typeof t && i.test(t) && RegExp.$1.length <= 20
                        }

                        function y(t) {
                            if (w(t)) return RegExp.$1
                        }

                        function b(t, e) {
                            var n = r.decodeURL(t);
                            if (e = e || !1, n.screen_name = y(t), n.screen_name) return r.url("https://twitter.com/intent/" + (e ? "follow" : "user"), n)
                        }

                        function _(t) {
                            return "string" == typeof t && u.test(t)
                        }

                        function E(t) {
                            return "string" == typeof t && o.test(t)
                        }

                        t.exports = {
                            isHashTag: _, hashTag: function (t, e) {
                                if (e = void 0 === e || e, _(t)) return (e ? "#" : "") + RegExp.$1
                            }, isScreenName: w, screenName: y, isStatus: E, status: function (t) {
                                return E(t) && RegExp.$1
                            }, intentForProfileURL: b, intentForFollowURL: function (t) {
                                return b(t, !0)
                            }, isTwitterURL: function (t) {
                                return s.test(t)
                            }, isTwimgURL: function (t) {
                                return a.test(t)
                            }, isIntentURL: function (t) {
                                return c.test(t)
                            }, isSettingsURL: function (t) {
                                return m.test(t)
                            }, isWidgetIframeURL: function (t) {
                                return v.test(t)
                            }, isSearchUrl: function (t) {
                                return g.test(t)
                            }, regexen: {profile: i}, momentId: function (t) {
                                return l.test(t) && RegExp.$1
                            }, collectionId: function (t) {
                                return d.test(t) && RegExp.$1
                            }, intentType: function (t) {
                                return c.test(t) && RegExp.$1
                            }, likesScreenName: function (t) {
                                return f.test(t) && RegExp.$1
                            }, listScreenNameAndSlug: function (t) {
                                var e, n, r;
                                if (h.test(t)) {
                                    e = RegExp.$1, n = RegExp.$2;
                                    try {
                                        r = decodeURIComponent(n)
                                    } catch (t) {
                                    }
                                    return {ownerScreenName: e, slug: r || n}
                                }
                                return !1
                            }, eventId: function (t) {
                                return p.test(t) && RegExp.$1
                            }
                        }
                    }, function (t, e) {
                        t.exports = document
                    }, function (t, e, n) {
                        var r = n(0), i = [!0, 1, "1", "on", "ON", "true", "TRUE", "yes", "YES"],
                            o = [!1, 0, "0", "off", "OFF", "false", "FALSE", "no", "NO"];

                        function s(t) {
                            return void 0 !== t && null !== t && "" !== t
                        }

                        function a(t) {
                            return c(t) && t % 1 == 0
                        }

                        function u(t) {
                            return c(t) && !a(t)
                        }

                        function c(t) {
                            return s(t) && !isNaN(t)
                        }

                        function d(t) {
                            return r.contains(o, t)
                        }

                        function l(t) {
                            return r.contains(i, t)
                        }

                        t.exports = {
                            hasValue: s, isInt: a, isFloat: u, isNumber: c, isString: function (t) {
                                return "string" === r.toType(t)
                            }, isArray: function (t) {
                                return s(t) && "array" == r.toType(t)
                            }, isTruthValue: l, isFalseValue: d, asInt: function (t) {
                                if (a(t)) return parseInt(t, 10)
                            }, asFloat: function (t) {
                                if (u(t)) return t
                            }, asNumber: function (t) {
                                if (c(t)) return t
                            }, asBoolean: function (t) {
                                return !(!s(t) || !l(t) && (d(t) || !t))
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(1), i = n(21), o = n(48);
                        i.hasPromiseSupport() || (r.Promise = o), t.exports = r.Promise
                    }, function (t, e, n) {
                        var r = n(0);
                        t.exports = function (t, e) {
                            var n = Array.prototype.slice.call(arguments, 2);
                            return function () {
                                var i = r.toRealArray(arguments);
                                return t.apply(e, n.concat(i))
                            }
                        }
                    }, function (t, e) {
                        t.exports = location
                    }, function (t, e, n) {
                        var r = n(50);
                        t.exports = new r("__twttr")
                    }, function (t, e, n) {
                        var r = n(0), i = /\b([\w-_]+)\b/g;

                        function o(t) {
                            return new RegExp("\\b" + t + "\\b", "g")
                        }

                        function s(t, e) {
                            t.classList ? t.classList.add(e) : o(e).test(t.className) || (t.className += " " + e)
                        }

                        function a(t, e) {
                            t.classList ? t.classList.remove(e) : t.className = t.className.replace(o(e), " ")
                        }

                        function u(t, e) {
                            return t.classList ? t.classList.contains(e) : r.contains(c(t), e)
                        }

                        function c(t) {
                            return r.toRealArray(t.classList ? t.classList : t.className.match(i))
                        }

                        t.exports = {
                            add: s, remove: a, replace: function (t, e, n) {
                                if (t.classList && u(t, e)) return a(t, e), void s(t, n);
                                t.className = t.className.replace(o(e), n)
                            }, toggle: function (t, e, n) {
                                return void 0 === n && t.classList && t.classList.toggle ? t.classList.toggle(e, n) : (n ? s(t, e) : a(t, e), n)
                            }, present: u, list: c
                        }
                    }, function (t, e, n) {
                        var r = n(5), i = n(0);

                        function o(t) {
                            return encodeURIComponent(t).replace(/\+/g, "%2B").replace(/'/g, "%27")
                        }

                        function s(t) {
                            return decodeURIComponent(t)
                        }

                        function a(t) {
                            var e = [];
                            return i.forIn(t, function (t, n) {
                                var s = o(t);
                                i.isType("array", n) || (n = [n]), n.forEach(function (t) {
                                    r.hasValue(t) && e.push(s + "=" + o(t))
                                })
                            }), e.sort().join("&")
                        }

                        function u(t) {
                            var e = {};
                            return t ? (t.split("&").forEach(function (t) {
                                var n = t.split("="), r = s(n[0]), o = s(n[1]);
                                if (2 == n.length) {
                                    if (!i.isType("array", e[r])) return r in e ? (e[r] = [e[r]], void e[r].push(o)) : void (e[r] = o);
                                    e[r].push(o)
                                }
                            }), e) : {}
                        }

                        t.exports = {
                            url: function (t, e) {
                                return a(e).length > 0 ? i.contains(t, "?") ? t + "&" + a(e) : t + "?" + a(e) : t
                            }, decodeURL: function (t) {
                                var e = t && t.split("?");
                                return 2 == e.length ? u(e[1]) : {}
                            }, decode: u, encode: a, encodePart: o, decodePart: s
                        }
                    }, function (t, e, n) {
                        var r = n(8), i = n(1), o = n(0), s = {}, a = o.contains(r.href, "tw_debug=true");

                        function u() {
                        }

                        function c() {
                        }

                        function d() {
                            return i.performance && +i.performance.now() || +new Date
                        }

                        function l(t, e) {
                            if (i.console && i.console[t]) switch (e.length) {
                                case 1:
                                    i.console[t](e[0]);
                                    break;
                                case 2:
                                    i.console[t](e[0], e[1]);
                                    break;
                                case 3:
                                    i.console[t](e[0], e[1], e[2]);
                                    break;
                                case 4:
                                    i.console[t](e[0], e[1], e[2], e[3]);
                                    break;
                                case 5:
                                    i.console[t](e[0], e[1], e[2], e[3], e[4]);
                                    break;
                                default:
                                    0 !== e.length && i.console.warn && i.console.warn("too many params passed to logger." + t)
                            }
                        }

                        t.exports = {
                            devError: u, devInfo: c, devObject: function (t, e) {
                            }, publicError: function () {
                                l("error", o.toRealArray(arguments))
                            }, publicLog: function () {
                                l("info", o.toRealArray(arguments))
                            }, time: function (t) {
                                a && (s[t] = d())
                            }, timeEnd: function (t) {
                                a && s[t] && (d(), s[t])
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(20), i = n(5), o = n(11), s = n(0), a = n(119);
                        t.exports = function (t) {
                            var e = t.href && t.href.split("?")[1], n = e ? o.decode(e) : {}, u = {
                                lang: a(t),
                                width: t.getAttribute("data-width") || t.getAttribute("width"),
                                height: t.getAttribute("data-height") || t.getAttribute("height"),
                                related: t.getAttribute("data-related"),
                                partner: t.getAttribute("data-partner")
                            };
                            return i.asBoolean(t.getAttribute("data-dnt")) && r.setOn(), s.forIn(u, function (t, e) {
                                var r = n[t];
                                n[t] = i.hasValue(r) ? r : e
                            }), s.compact(n)
                        }
                    }, function (t, e, n) {
                        var r = n(81), i = n(23);
                        t.exports = function () {
                            var t = "data-twitter-extracted-" + i.generate();
                            return function (e, n) {
                                return r(e, n).filter(function (e) {
                                    return !e.hasAttribute(t)
                                }).map(function (e) {
                                    return e.setAttribute(t, "true"), e
                                })
                            }
                        }
                    }, function (t, e) {
                        function n(t, e, n, r, i, o, s) {
                            this.factory = t, this.Sandbox = e, this.srcEl = o, this.targetEl = i, this.parameters = r, this.className = n, this.options = s
                        }

                        n.prototype.destroy = function () {
                            this.srcEl = this.targetEl = null
                        }, t.exports = n
                    }, function (t, e) {
                        t.exports = {
                            DM_BUTTON: "twitter-dm-button",
                            FOLLOW_BUTTON: "twitter-follow-button",
                            HASHTAG_BUTTON: "twitter-hashtag-button",
                            MENTION_BUTTON: "twitter-mention-button",
                            MOMENT: "twitter-moment",
                            PERISCOPE: "periscope-on-air",
                            SHARE_BUTTON: "twitter-share-button",
                            TIMELINE: "twitter-timeline",
                            TWEET: "twitter-tweet"
                        }
                    }, function (t, e, n) {
                        var r = n(6), i = n(20), o = n(53), s = n(52), a = n(35), u = n(5), c = n(0);
                        t.exports = function (t, e, n) {
                            var d;
                            return t = t || [], e = e || {}, d = "ƒ(" + t.join(", ") + ", target, [options]);", function () {
                                var l, f, h, p, m = Array.prototype.slice.apply(arguments, [0, t.length]),
                                    v = Array.prototype.slice.apply(arguments, [t.length]);
                                return v.forEach(function (t) {
                                    t && (t.nodeType !== Node.ELEMENT_NODE ? c.isType("function", t) ? l = t : c.isType("object", t) && (f = t) : h = t)
                                }), m.length !== t.length || 0 === v.length ? (l && c.async(function () {
                                    l(!1)
                                }), r.reject(new Error("Not enough parameters. Expected: " + d))) : h ? (f = c.aug({}, f || {}, e), t.forEach(function (t) {
                                    f[t] = m.shift()
                                }), u.asBoolean(f.dnt) && i.setOn(), p = a.getExperiments().then(function (t) {
                                    return o.addWidget(n(f, h, void 0, s.isHorizonTweetEnabled(t)))
                                }), l && p.then(l, function () {
                                    l(!1)
                                }), p) : (l && c.async(function () {
                                    l(!1)
                                }), r.reject(new Error("No target element specified. Expected: " + d)))
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(102), i = n(2), o = n(0);

                        function s(t, e) {
                            return function () {
                                try {
                                    e.resolve(t.call(this))
                                } catch (t) {
                                    e.reject(t)
                                }
                            }
                        }

                        t.exports = {
                            sync: function (t, e) {
                                t.call(e)
                            }, read: function (t, e) {
                                var n = new i;
                                return r.read(s(t, n), e), n.promise
                            }, write: function (t, e) {
                                var n = new i;
                                return r.write(s(t, n), e), n.promise
                            }, defer: function (t, e, n) {
                                var a = new i;
                                return o.isType("function", t) && (n = e, e = t, t = 1), r.defer(t, s(e, a), n), a.promise
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(9),
                            i = ["https://syndication.twitter.com", "https://cdn.syndication.twimg.com", "https://localhost.twitter.com:8444"],
                            o = ["https://syndication.twitter.com", "https://localhost.twitter.com:8445"],
                            s = ["https://platform.twitter.com/embed/index.html", "https://localhost.twitter.com:8080", /https:\/\/ton\.smf1\.twitter\.com\/syndication-internal\/embed-iframe\/[0-9A-Za-z_-]+\/app\/index\.html/],
                            a = function (t, e) {
                                return t.some(function (t) {
                                    return t instanceof RegExp ? t.test(e) : t === e
                                })
                            }, u = function () {
                                var t = r.get("backendHost");
                                return t && a(i, t) ? t : "https://cdn.syndication.twimg.com"
                            }, c = function () {
                                var t = r.get("settingsSvcHost");
                                return t && a(o, t) ? t : "https://syndication.twitter.com"
                            }, d = function () {
                                var t = r.get("embedIframeURL");
                                return t && a(s, t) ? t : "https://platform.twitter.com/embed/index.html"
                            };

                        function l(t, e) {
                            var n = [t];
                            return e.forEach(function (t) {
                                n.push(function (t) {
                                    var e = (t || "").toString(), n = "/" === e.slice(0, 1) ? 1 : 0, r = function (t) {
                                        return "/" === t.slice(-1)
                                    }(e) ? -1 : void 0;
                                    return e.slice(n, r)
                                }(t))
                            }), n.join("/")
                        }

                        t.exports = {
                            cookieConsent: function (t) {
                                var e = t || [];
                                return e.unshift("cookie/consent"), l(c(), e)
                            }, embedIframe: function () {
                                return d()
                            }, eventVideo: function (t) {
                                var e = t || [];
                                return e.unshift("video/event"), l(u(), e)
                            }, grid: function (t) {
                                var e = t || [];
                                return e.unshift("grid/collection"), l(u(), e)
                            }, moment: function (t) {
                                var e = t || [];
                                return e.unshift("moments"), l(u(), e)
                            }, settings: function (t) {
                                var e = t || [];
                                return e.unshift("settings"), l(c(), e)
                            }, timeline: function (t) {
                                var e = t || [];
                                return e.unshift("timeline"), l(u(), e)
                            }, tweetBatch: function (t) {
                                var e = t || [];
                                return e.unshift("tweets.json"), l(u(), e)
                            }, video: function (t) {
                                var e = t || [];
                                return e.unshift("widgets/video"), l(u(), e)
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(4), i = n(8), o = n(38), s = n(79), a = n(5), u = n(33), c = !1,
                            d = /https?:\/\/([^/]+).*/i;
                        t.exports = {
                            setOn: function () {
                                c = !0
                            }, enabled: function (t, e) {
                                return !!(c || a.asBoolean(u.val("dnt")) || s.isUrlSensitive(e || i.host) || o.isFramed() && s.isUrlSensitive(o.rootDocumentLocation()) || (t = d.test(t || r.referrer) && RegExp.$1) && s.isUrlSensitive(t))
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(4), i = n(12), o = n(95), s = n(1), a = n(0), u = o.userAgent;

                        function c(t) {
                            return /(Trident|MSIE|Edge[/ ]?\d)/.test(t = t || u)
                        }

                        t.exports = {
                            retina: function (t) {
                                return (t = t || s).devicePixelRatio ? t.devicePixelRatio >= 1.5 : !!t.matchMedia && t.matchMedia("only screen and (min-resolution: 144dpi)").matches
                            }, anyIE: c, ie9: function (t) {
                                return /MSIE 9/.test(t = t || u)
                            }, ie10: function (t) {
                                return /MSIE 10/.test(t = t || u)
                            }, ios: function (t) {
                                return /(iPad|iPhone|iPod)/.test(t = t || u)
                            }, android: function (t) {
                                return /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t = t || u)
                            }, canPostMessage: function (t, e) {
                                return t = t || s, e = e || u, t.postMessage && !(c(e) && t.opener)
                            }, touch: function (t, e, n) {
                                return t = t || s, e = e || o, n = n || u, "ontouchstart" in t || /Opera Mini/.test(n) || e.msMaxTouchPoints > 0
                            }, cssTransitions: function () {
                                var t = r.body.style;
                                return void 0 !== t.transition || void 0 !== t.webkitTransition || void 0 !== t.mozTransition || void 0 !== t.oTransition || void 0 !== t.msTransition
                            }, hasPromiseSupport: function () {
                                return !!(s.Promise && s.Promise.resolve && s.Promise.reject && s.Promise.all && s.Promise.race && (new s.Promise(function (e) {
                                    t = e
                                }), a.isType("function", t)));
                                var t
                            }, hasIntersectionObserverSupport: function () {
                                return !!s.IntersectionObserver
                            }, hasPerformanceInformation: function () {
                                return s.performance && s.performance.getEntriesByType
                            }, hasLocalStorageSupport: function () {
                                try {
                                    return s.localStorage.setItem("local_storage_support_test", "true"), void 0 !== s.localStorage
                                } catch (t) {
                                    return i.devError("window.localStorage is not supported:", t), !1
                                }
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(6), i = n(2);

                        function o(t, e) {
                            return t.then(e, e)
                        }

                        function s(t) {
                            return t instanceof r
                        }

                        t.exports = {
                            always: o, allResolved: function (t) {
                                var e;
                                return void 0 === t ? r.reject(new Error("undefined is not an object")) : Array.isArray(t) ? (e = t.length) ? new r(function (n, r) {
                                    var i = 0, o = [];

                                    function a() {
                                        (i += 1) === e && (0 === o.length ? r() : n(o))
                                    }

                                    function u(t) {
                                        o.push(t), a()
                                    }

                                    t.forEach(function (t) {
                                        s(t) ? t.then(u, a) : u(t)
                                    })
                                }) : r.resolve([]) : r.reject(new Error("Type error"))
                            }, some: function (t) {
                                var e;
                                return e = (t = t || []).length, t = t.filter(s), e ? e !== t.length ? r.reject("non-Promise passed to .some") : new r(function (e, n) {
                                    var r = 0;

                                    function i() {
                                        (r += 1) === t.length && n()
                                    }

                                    t.forEach(function (t) {
                                        t.then(e, i)
                                    })
                                }) : r.reject("no promises passed to .some")
                            }, isPromise: s, allSettled: function (t) {
                                function e() {
                                }

                                return r.all((t || []).map(function (t) {
                                    return o(t, e)
                                }))
                            }, timeout: function (t, e) {
                                var n = new i;
                                return setTimeout(function () {
                                    n.reject(new Error("Promise timed out"))
                                }, e), t.then(function (t) {
                                    n.resolve(t)
                                }, function (t) {
                                    n.reject(t)
                                }), n.promise
                            }
                        }
                    }, function (t, e) {
                        var n = "i", r = 0, i = 0;
                        t.exports = {
                            generate: function () {
                                return n + String(+new Date) + Math.floor(1e5 * Math.random()) + r++
                            }, deterministic: function () {
                                return n + String(i++)
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(49), i = n(51), o = n(0);
                        t.exports = o.aug(r.get("events") || {}, i.Emitter)
                    }, function (t, e, n) {
                        var r = n(26), i = n(110);
                        t.exports = r.build([i])
                    }, function (t, e, n) {
                        var r = n(40), i = n(107), o = n(7);
                        (r = Object.create(r)).build = o(r.build, null, i), t.exports = r
                    }, function (t, e, n) {
                        var r = n(40), i = n(41), o = n(7);
                        (r = Object.create(r)).build = o(r.build, null, i), t.exports = r
                    }, function (t, e, n) {
                        var r = n(83), i = n(75), o = n(84), s = n(8), a = n(71), u = n(74), c = n(20), d = n(5),
                            l = n(23), f = n(0);

                        function h(t) {
                            if (!t || !t.headers) throw new Error("unexpected response schema");
                            return {
                                html: t.body,
                                config: t.config,
                                pollInterval: 1e3 * parseInt(t.headers.xPolling, 10) || null,
                                maxCursorPosition: t.headers.maxPosition,
                                minCursorPosition: t.headers.minPosition
                            }
                        }

                        function p(t) {
                            if (t && t.headers) throw new Error(t.headers.status);
                            throw t instanceof Error ? t : new Error(t)
                        }

                        t.exports = function (t) {
                            t.params({
                                instanceId: {required: !0, fallback: l.deterministic},
                                lang: {required: !0, transform: a.matchLanguage, fallback: "en"},
                                tweetLimit: {transform: d.asInt}
                            }), t.defineProperty("endpoint", {
                                get: function () {
                                    throw new Error("endpoint not specified")
                                }
                            }), t.defineProperty("pollEndpoint", {
                                get: function () {
                                    return this.endpoint
                                }
                            }), t.define("cbId", function (t) {
                                var e = t ? "_new" : "_old";
                                return "tl_" + this.params.instanceId + "_" + this.id + e
                            }), t.define("queryParams", function () {
                                return {
                                    lang: this.params.lang,
                                    tz: u.getTimezoneOffset(),
                                    t: r(),
                                    domain: s.host,
                                    tweet_limit: this.params.tweetLimit,
                                    dnt: c.enabled()
                                }
                            }), t.define("fetch", function () {
                                return i.fetch(this.endpoint, this.queryParams(), o, this.cbId()).then(h, p)
                            }), t.define("poll", function (t, e) {
                                var n, r;
                                return n = {
                                    since_id: (t = t || {}).sinceId,
                                    max_id: t.maxId,
                                    min_position: t.minPosition,
                                    max_position: t.maxPosition
                                }, r = f.aug(this.queryParams(), n), i.fetch(this.pollEndpoint, r, o, this.cbId(e)).then(h, p)
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(51).makeEmitter();
                        t.exports = {
                            emitter: r,
                            START: "start",
                            ALL_WIDGETS_RENDER_START: "all_widgets_render_start",
                            ALL_WIDGETS_RENDER_END: "all_widgets_render_end",
                            ALL_WIDGETS_AND_IMAGES_LOADED: "all_widgets_and_images_loaded"
                        }
                    }, function (t, e, n) {
                        var r = n(4), i = n(0);
                        t.exports = function (t, e, n) {
                            var o;
                            if (n = n || r, t = t || {}, e = e || {}, t.name) {
                                try {
                                    o = n.createElement('<iframe name="' + t.name + '"></iframe>')
                                } catch (e) {
                                    (o = n.createElement("iframe")).name = t.name
                                }
                                delete t.name
                            } else o = n.createElement("iframe");
                            return t.id && (o.id = t.id, delete t.id), o.allowtransparency = "true", o.scrolling = "no", o.setAttribute("frameBorder", 0), o.setAttribute("allowTransparency", !0), i.forIn(t, function (t, e) {
                                o.setAttribute(t, e)
                            }), i.forIn(e, function (t, e) {
                                o.style[t] = e
                            }), o
                        }
                    }, function (t, e, n) {
                        var r = n(1).JSON;
                        t.exports = {stringify: r.stringify || r.encode, parse: r.parse || r.decode}
                    }, function (t, e, n) {
                        var r = n(0), i = n(43);
                        t.exports = {
                            closest: function t(e, n, o) {
                                var s;
                                if (n) return o = o || n && n.ownerDocument, s = r.isType("function", e) ? e : function (t) {
                                    return function (e) {
                                        return !!e.tagName && i(e, t)
                                    }
                                }(e), n === o ? s(n) ? n : void 0 : s(n) ? n : t(s, n.parentNode, o)
                            }
                        }
                    }, function (t, e, n) {
                        var r, i = n(4);

                        function o(t) {
                            var e, n, o, s = 0;
                            for (r = {}, e = (t = t || i).getElementsByTagName("meta"); e[s]; s++) {
                                if (n = e[s], /^twitter:/.test(n.getAttribute("name"))) o = n.getAttribute("name").replace(/^twitter:/, ""); else {
                                    if (!/^twitter:/.test(n.getAttribute("property"))) continue;
                                    o = n.getAttribute("property").replace(/^twitter:/, "")
                                }
                                r[o] = n.getAttribute("content") || n.getAttribute("value")
                            }
                        }

                        o(), t.exports = {
                            init: o, val: function (t) {
                                return r[t]
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(4), i = n(31), o = n(20), s = n(0), a = n(44), u = n(9), c = n(3), d = n(32),
                            l = a.version, f = u.get("clientEventEndpoint") || "https://syndication.twitter.com/i/jot",
                            h = 1;

                        function p(t) {
                            return s.aug({client: "tfw"}, t || {})
                        }

                        function m(t, e, n) {
                            return e = e || {}, s.aug({}, e, {
                                _category_: t,
                                triggered_on: e.triggered_on || +new Date,
                                dnt: o.enabled(n)
                            })
                        }

                        t.exports = {
                            extractTermsFromDOM: function t(e, n) {
                                var r;
                                return n = n || {}, e && e.nodeType === Node.ELEMENT_NODE ? ((r = e.getAttribute("data-scribe")) && r.split(" ").forEach(function (t) {
                                    var e = t.trim().split(":"), r = e[0], i = e[1];
                                    r && i && !n[r] && (n[r] = i)
                                }), t(e.parentNode, n)) : n
                            },
                            clickEventElement: function (t) {
                                var e = d.closest("[data-expanded-url]", t),
                                    n = e && e.getAttribute("data-expanded-url");
                                return n && c.isTwitterURL(n) ? "twitter_url" : "url"
                            },
                            flattenClientEventPayload: function (t, e) {
                                return s.aug({}, e, {event_namespace: t})
                            },
                            formatGenericEventData: m,
                            formatClientEventData: function (t, e, n) {
                                var i = t && t.widget_origin || r.referrer;
                                return (t = m("tfw_client_event", t, i)).client_version = l, t.format_version = void 0 !== n ? n : 1, e || (t.widget_origin = i), t
                            },
                            formatClientEventNamespace: p,
                            formatTweetAssociation: function (t, e) {
                                var n = {};
                                return (e = e || {}).association_namespace = p(t), n[h] = e, n
                            },
                            noticeSeen: function (t) {
                                return "notice" === t.element && "seen" === t.action
                            },
                            splitLogEntry: function (t) {
                                var e, n, r, i, o;
                                return t.item_ids && t.item_ids.length > 1 ? (e = Math.floor(t.item_ids.length / 2), n = t.item_ids.slice(0, e), r = {}, i = t.item_ids.slice(e), o = {}, n.forEach(function (e) {
                                    r[e] = t.item_details[e]
                                }), i.forEach(function (e) {
                                    o[e] = t.item_details[e]
                                }), [s.aug({}, t, {item_ids: n, item_details: r}), s.aug({}, t, {
                                    item_ids: i,
                                    item_details: o
                                })]) : [t]
                            },
                            stringify: function (t) {
                                var e, n = Array.prototype.toJSON;
                                return delete Array.prototype.toJSON, e = i.stringify(t), n && (Array.prototype.toJSON = n), e
                            },
                            AUDIENCE_ENDPOINT: "https://syndication.twitter.com/i/jot/syndication",
                            CLIENT_EVENT_ENDPOINT: f,
                            RUFOUS_REDIRECT: "https://platform.twitter.com/jot.html"
                        }
                    }, function (t, e, n) {
                        var r = n(113), i = n(116);

                        function o(t) {
                            return r.settingsLoaded().then(function (e) {
                                return e[t]
                            })
                        }

                        function s() {
                            return o("experiments")
                        }

                        t.exports = {
                            shouldObtainCookieConsent: function () {
                                return o("shouldObtainCookieConsent")
                            }, getExperiments: s, getExperiment: function (t) {
                                return s().then(function (e) {
                                    if (!e[t]) throw new Error("Experiment not found");
                                    return e[t]
                                })
                            }, getActiveExperimentDataString: function () {
                                return s().then(function (t) {
                                    var e = Object.keys(t).reduce(function (e, n) {
                                        var r;
                                        return t[n].version && (r = n.split("_").slice(-1)[0], e.push(r + ";" + t[n].bucket)), e
                                    }, []);
                                    return i(e.join(","))
                                })
                            }, getExperimentKeys: function () {
                                return s().then(function (t) {
                                    return Object.keys(t)
                                })
                            }, load: function () {
                                r.load()
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(10), i = {}, o = -1, s = {};

                        function a(t) {
                            var e = t.getAttribute("data-twitter-event-id");
                            return e || (t.setAttribute("data-twitter-event-id", ++o), o)
                        }

                        function u(t, e, n) {
                            var r = 0, i = t && t.length || 0;
                            for (r = 0; r < i; r++) if (t[r].call(e, n, e), n.ceaseImmediately) return !1
                        }

                        function c(t, e, n) {
                            for (var i = n || t.target || t.srcElement, o = r.list(i).map(function (t) {
                                return "." + t
                            }).concat(i.tagName), s = 0, a = o.length; s < a; s++) if (!1 === u(e[o[s]], i, t)) return;
                            t.cease || i !== this && c.call(this, t, e, i.parentElement || i.parentNode)
                        }

                        function d(t, e, n, r) {
                            function i(r) {
                                c.call(t, r, n[e])
                            }

                            !function (t, e, n, r) {
                                t.id && (s[t.id] = s[t.id] || [], s[t.id].push({
                                    el: t,
                                    listener: e,
                                    type: n,
                                    rootId: r
                                }))
                            }(t, i, e, r), t.addEventListener(e, i, !1)
                        }

                        function l(t) {
                            t && t.preventDefault ? t.preventDefault() : t.returnValue = !1
                        }

                        function f(t) {
                            t && (t.cease = !0) && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
                        }

                        t.exports = {
                            stop: function (t) {
                                return f(t), l(t), !1
                            }, stopPropagation: f, stopImmediatePropagation: function (t) {
                                t && (t.ceaseImmediately = !0, f(t), t.stopImmediatePropagation())
                            }, preventDefault: l, delegate: function (t, e, n, r) {
                                var o = a(t);
                                i[o] = i[o] || {}, i[o][e] || (i[o][e] = {}, d(t, e, i[o], o)), i[o][e][n] = i[o][e][n] || [], i[o][e][n].push(r)
                            }, simulate: function (t, e, n) {
                                var r = a(e), o = i[r] && i[r];
                                c.call(e, {target: n}, o[t])
                            }, removeDelegatesForWidget: function (t) {
                                var e = s[t];
                                e && (e.forEach(function (t) {
                                    t.el.removeEventListener(t.type, t.listener, !1), delete i[t.rootId]
                                }), delete s[t])
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(26), i = n(125);
                        t.exports = r.build([i])
                    }, function (t, e, n) {
                        var r = n(8), i = n(78), o = n(0), s = i.getCanonicalURL() || r.href, a = s;
                        t.exports = {
                            isFramed: function () {
                                return s !== a
                            }, rootDocumentLocation: function (t) {
                                return t && o.isType("string", t) && (s = t), s
                            }, currentDocumentLocation: function () {
                                return a
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(77), i = n(104), o = n(80), s = n(34), a = new (n(112))(function (t) {
                            var e, n, a;
                            if (0 !== t.length) {
                                if (u(t)) return c(t);
                                e = r(t, function (t) {
                                    return s.noticeSeen(t.input.namespace)
                                }), n = e.true, a = e.false, n && n.length > 0 && (n = n.slice(0, 1), o.canFlushOneItem(n[0]) || (n[0].input.data.message = ""), c(n)), a && (u(a) ? c : function (t) {
                                    i.init(), t.forEach(function (t) {
                                        var e = t.input.namespace, n = t.input.data, r = t.input.offsite,
                                            o = t.input.version;
                                        i.clientEvent(e, n, r, o)
                                    }), i.flush().then(function () {
                                        t.forEach(function (t) {
                                            t.taskDoneDeferred.resolve()
                                        })
                                    }, function () {
                                        t.forEach(function (t) {
                                            t.taskDoneDeferred.reject()
                                        })
                                    })
                                })(a)
                            }
                        });

                        function u(t) {
                            return 1 === t.length && o.canFlushOneItem(t[0])
                        }

                        function c(t) {
                            t.forEach(function (t) {
                                var e = t.input.namespace, n = t.input.data, r = t.input.offsite, i = t.input.version;
                                o.clientEvent(e, n, r, i), t.taskDoneDeferred.resolve()
                            })
                        }

                        t.exports = {
                            scribe: function (t, e, n, r) {
                                return a.add({namespace: t, data: e, offsite: n, version: r})
                            }, pause: function () {
                                a.pause()
                            }, resume: function () {
                                a.resume()
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(105), i = n(106), o = n(0);
                        t.exports = {
                            couple: function () {
                                return o.toRealArray(arguments)
                            }, build: function (t, e, n) {
                                var o = new t;
                                return (e = i(r(e || []))).forEach(function (t) {
                                    t.call(null, o)
                                }), o.build(n)
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(108), i = n(0), o = n(42);

                        function s() {
                            this.Component = this.factory(), this._adviceArgs = [], this._lastArgs = []
                        }

                        i.aug(s.prototype, {
                            factory: o, build: function (t) {
                                var e = this;
                                return this.Component, i.aug(this.Component.prototype.boundParams, t), this._adviceArgs.concat(this._lastArgs).forEach(function (t) {
                                    (function (t, e, n) {
                                        var r = this[e];
                                        if (!r) throw new Error(e + " does not exist");
                                        this[e] = t(r, n)
                                    }).apply(e.Component.prototype, t)
                                }), delete this._lastArgs, delete this._adviceArgs, this.Component
                            }, params: function (t) {
                                var e = this.Component.prototype.paramConfigs;
                                t = t || {}, this.Component.prototype.paramConfigs = i.aug({}, t, e)
                            }, define: function (t, e) {
                                if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
                                this.override(t, e)
                            }, defineStatic: function (t, e) {
                                this.Component[t] = e
                            }, override: function (t, e) {
                                this.Component.prototype[t] = e
                            }, defineProperty: function (t, e) {
                                if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
                                this.overrideProperty(t, e)
                            }, overrideProperty: function (t, e) {
                                var n = i.aug({configurable: !0}, e);
                                Object.defineProperty(this.Component.prototype, t, n)
                            }, before: function (t, e) {
                                this._adviceArgs.push([r.before, t, e])
                            }, after: function (t, e) {
                                this._adviceArgs.push([r.after, t, e])
                            }, around: function (t, e) {
                                this._adviceArgs.push([r.around, t, e])
                            }, last: function (t, e) {
                                this._lastArgs.push([r.after, t, e])
                            }
                        }), t.exports = s
                    }, function (t, e, n) {
                        var r = n(0);

                        function i() {
                            return !0
                        }

                        function o(t) {
                            return t
                        }

                        t.exports = function () {
                            function t(t) {
                                var e = this;
                                t = t || {}, this.params = Object.keys(this.paramConfigs).reduce(function (n, s) {
                                    var a = [], u = e.boundParams, c = e.paramConfigs[s], d = c.validate || i,
                                        l = c.transform || o;
                                    if (s in u && a.push(u[s]), s in t && a.push(t[s]), a = "fallback" in c ? a.concat(c.fallback) : a, n[s] = function (t, e, n) {
                                        var i = null;
                                        return t.some(function (t) {
                                            if (t = r.isType("function", t) ? t() : t, e(t)) return i = n(t), !0
                                        }), i
                                    }(a, d, l), c.required && null == n[s]) throw new Error(s + " is a required parameter");
                                    return n
                                }, {}), this.initialize()
                            }

                            return r.aug(t.prototype, {
                                paramConfigs: {}, boundParams: {}, initialize: function () {
                                }
                            }), t
                        }
                    }, function (t, e, n) {
                        var r = n(1).HTMLElement,
                            i = r.prototype.matches || r.prototype.matchesSelector || r.prototype.webkitMatchesSelector || r.prototype.mozMatchesSelector || r.prototype.msMatchesSelector || r.prototype.oMatchesSelector;
                        t.exports = function (t, e) {
                            if (i) return i.call(t, e)
                        }
                    }, function (t) {
                        t.exports = {version: "2a81c84:1568701398616"}
                    }, function (t, e, n) {
                        var r, i = n(10), o = n(4), s = n(1), a = n(33), u = n(54), c = n(5), d = n(23), l = "csptest";
                        t.exports = {
                            inlineStyle: function () {
                                var t = l + d.generate(), e = o.createElement("div"), n = o.createElement("style"),
                                    f = "." + t + " { visibility: hidden; }";
                                return !!o.body && (c.asBoolean(a.val("widgets:csp")) && (r = !1), void 0 !== r ? r : (e.style.display = "none", i.add(e, t), n.type = "text/css", n.appendChild(o.createTextNode(f)), o.body.appendChild(n), o.body.appendChild(e), r = "hidden" === s.getComputedStyle(e).visibility, u(e), u(n), r))
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(1);
                        t.exports = function (t, e, n) {
                            var i, o = 0;
                            return n = n || null, function s() {
                                var a = n || this, u = arguments, c = +new Date;
                                if (r.clearTimeout(i), c - o > e) return o = c, void t.apply(a, u);
                                i = r.setTimeout(function () {
                                    s.apply(a, u)
                                }, e)
                            }
                        }
                    }, function (t, e) {
                        t.exports = function (t) {
                            var e = t.getBoundingClientRect();
                            return {width: e.width, height: e.height}
                        }
                    }, function (t, e, n) {
                        /*!
                     * @overview es6-promise - a tiny implementation of Promises/A+.
                     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
                     * @license   Licensed under MIT license
                     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
                     * @version   v4.2.5+7f2b526d
                     */
                        var r;
                        r = function () {
                            "use strict";

                            function t(t) {
                                return "function" == typeof t
                            }

                            var e = Array.isArray ? Array.isArray : function (t) {
                                    return "[object Array]" === Object.prototype.toString.call(t)
                                }, n = 0, r = void 0, i = void 0, o = function (t, e) {
                                    f[n] = t, f[n + 1] = e, 2 === (n += 2) && (i ? i(h) : w())
                                }, s = "undefined" != typeof window ? window : void 0, a = s || {},
                                u = a.MutationObserver || a.WebKitMutationObserver,
                                c = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                                d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                            function l() {
                                var t = setTimeout;
                                return function () {
                                    return t(h, 1)
                                }
                            }

                            var f = new Array(1e3);

                            function h() {
                                for (var t = 0; t < n; t += 2) (0, f[t])(f[t + 1]), f[t] = void 0, f[t + 1] = void 0;
                                n = 0
                            }

                            var p, m, v, g, w = void 0;

                            function y(t, e) {
                                var n = this, r = new this.constructor(E);
                                void 0 === r[_] && k(r);
                                var i = n._state;
                                if (i) {
                                    var s = arguments[i - 1];
                                    o(function () {
                                        return D(i, r, s, n._result)
                                    })
                                } else I(n, r, t, e);
                                return r
                            }

                            function b(t) {
                                if (t && "object" == typeof t && t.constructor === this) return t;
                                var e = new this(E);
                                return C(e, t), e
                            }

                            c ? w = function () {
                                return process.nextTick(h)
                            } : u ? (m = 0, v = new u(h), g = document.createTextNode(""), v.observe(g, {characterData: !0}), w = function () {
                                g.data = m = ++m % 2
                            }) : d ? ((p = new MessageChannel).port1.onmessage = h, w = function () {
                                return p.port2.postMessage(0)
                            }) : w = void 0 === s ? function () {
                                try {
                                    var t = Function("return this")().require("vertx");
                                    return void 0 !== (r = t.runOnLoop || t.runOnContext) ? function () {
                                        r(h)
                                    } : l()
                                } catch (t) {
                                    return l()
                                }
                            }() : l();
                            var _ = Math.random().toString(36).substring(2);

                            function E() {
                            }

                            var x = void 0, T = 1, A = 2, S = {error: null};

                            function R(t) {
                                try {
                                    return t.then
                                } catch (t) {
                                    return S.error = t, S
                                }
                            }

                            function N(e, n, r) {
                                n.constructor === e.constructor && r === y && n.constructor.resolve === b ? function (t, e) {
                                    e._state === T ? L(t, e._result) : e._state === A ? j(t, e._result) : I(e, void 0, function (e) {
                                        return C(t, e)
                                    }, function (e) {
                                        return j(t, e)
                                    })
                                }(e, n) : r === S ? (j(e, S.error), S.error = null) : void 0 === r ? L(e, n) : t(r) ? function (t, e, n) {
                                    o(function (t) {
                                        var r = !1, i = function (t, e, n, r) {
                                            try {
                                                t.call(e, n, r)
                                            } catch (t) {
                                                return t
                                            }
                                        }(n, e, function (n) {
                                            r || (r = !0, e !== n ? C(t, n) : L(t, n))
                                        }, function (e) {
                                            r || (r = !0, j(t, e))
                                        }, t._label);
                                        !r && i && (r = !0, j(t, i))
                                    }, t)
                                }(e, n, r) : L(e, n)
                            }

                            function C(t, e) {
                                var n, r;
                                t === e ? j(t, new TypeError("You cannot resolve a promise with itself")) : (r = typeof (n = e), null === n || "object" !== r && "function" !== r ? L(t, e) : N(t, e, R(e)))
                            }

                            function P(t) {
                                t._onerror && t._onerror(t._result), O(t)
                            }

                            function L(t, e) {
                                t._state === x && (t._result = e, t._state = T, 0 !== t._subscribers.length && o(O, t))
                            }

                            function j(t, e) {
                                t._state === x && (t._state = A, t._result = e, o(P, t))
                            }

                            function I(t, e, n, r) {
                                var i = t._subscribers, s = i.length;
                                t._onerror = null, i[s] = e, i[s + T] = n, i[s + A] = r, 0 === s && t._state && o(O, t)
                            }

                            function O(t) {
                                var e = t._subscribers, n = t._state;
                                if (0 !== e.length) {
                                    for (var r = void 0, i = void 0, o = t._result, s = 0; s < e.length; s += 3) r = e[s], i = e[s + n], r ? D(n, r, i, o) : i(o);
                                    t._subscribers.length = 0
                                }
                            }

                            function D(e, n, r, i) {
                                var o = t(r), s = void 0, a = void 0, u = void 0, c = void 0;
                                if (o) {
                                    if ((s = function (t, e) {
                                        try {
                                            return t(e)
                                        } catch (t) {
                                            return S.error = t, S
                                        }
                                    }(r, i)) === S ? (c = !0, a = s.error, s.error = null) : u = !0, n === s) return void j(n, new TypeError("A promises callback cannot return that same promise."))
                                } else s = i, u = !0;
                                n._state !== x || (o && u ? C(n, s) : c ? j(n, a) : e === T ? L(n, s) : e === A && j(n, s))
                            }

                            var z = 0;

                            function k(t) {
                                t[_] = z++, t._state = void 0, t._result = void 0, t._subscribers = []
                            }

                            var M = function () {
                                function t(t, n) {
                                    this._instanceConstructor = t, this.promise = new t(E), this.promise[_] || k(this.promise), e(n) ? (this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? L(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(n), 0 === this._remaining && L(this.promise, this._result))) : j(this.promise, new Error("Array Methods must be provided an Array"))
                                }

                                return t.prototype._enumerate = function (t) {
                                    for (var e = 0; this._state === x && e < t.length; e++) this._eachEntry(t[e], e)
                                }, t.prototype._eachEntry = function (t, e) {
                                    var n = this._instanceConstructor, r = n.resolve;
                                    if (r === b) {
                                        var i = R(t);
                                        if (i === y && t._state !== x) this._settledAt(t._state, e, t._result); else if ("function" != typeof i) this._remaining--, this._result[e] = t; else if (n === U) {
                                            var o = new n(E);
                                            N(o, t, i), this._willSettleAt(o, e)
                                        } else this._willSettleAt(new n(function (e) {
                                            return e(t)
                                        }), e)
                                    } else this._willSettleAt(r(t), e)
                                }, t.prototype._settledAt = function (t, e, n) {
                                    var r = this.promise;
                                    r._state === x && (this._remaining--, t === A ? j(r, n) : this._result[e] = n), 0 === this._remaining && L(r, this._result)
                                }, t.prototype._willSettleAt = function (t, e) {
                                    var n = this;
                                    I(t, void 0, function (t) {
                                        return n._settledAt(T, e, t)
                                    }, function (t) {
                                        return n._settledAt(A, e, t)
                                    })
                                }, t
                            }(), U = function () {
                                function e(t) {
                                    this[_] = z++, this._result = this._state = void 0, this._subscribers = [], E !== t && ("function" != typeof t && function () {
                                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                    }(), this instanceof e ? function (t, e) {
                                        try {
                                            e(function (e) {
                                                C(t, e)
                                            }, function (e) {
                                                j(t, e)
                                            })
                                        } catch (e) {
                                            j(t, e)
                                        }
                                    }(this, t) : function () {
                                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                    }())
                                }

                                return e.prototype.catch = function (t) {
                                    return this.then(null, t)
                                }, e.prototype.finally = function (e) {
                                    var n = this.constructor;
                                    return t(e) ? this.then(function (t) {
                                        return n.resolve(e()).then(function () {
                                            return t
                                        })
                                    }, function (t) {
                                        return n.resolve(e()).then(function () {
                                            throw t
                                        })
                                    }) : this.then(e, e)
                                }, e
                            }();
                            return U.prototype.then = y, U.all = function (t) {
                                return new M(this, t).promise
                            }, U.race = function (t) {
                                var n = this;
                                return e(t) ? new n(function (e, r) {
                                    for (var i = t.length, o = 0; o < i; o++) n.resolve(t[o]).then(e, r)
                                }) : new n(function (t, e) {
                                    return e(new TypeError("You must pass an array to race."))
                                })
                            }, U.resolve = b, U.reject = function (t) {
                                var e = new this(E);
                                return j(e, t), e
                            }, U._setScheduler = function (t) {
                                i = t
                            }, U._setAsap = function (t) {
                                o = t
                            }, U._asap = o, U.polyfill = function () {
                                var t = void 0;
                                if ("undefined" != typeof global) t = global; else if ("undefined" != typeof self) t = self; else try {
                                    t = Function("return this")()
                                } catch (t) {
                                    throw new Error("polyfill failed because global object is unavailable in this environment")
                                }
                                var e = t.Promise;
                                if (e) {
                                    var n = null;
                                    try {
                                        n = Object.prototype.toString.call(e.resolve())
                                    } catch (t) {
                                    }
                                    if ("[object Promise]" === n && !e.cast) return
                                }
                                t.Promise = U
                            }, U.Promise = U, U
                        }, t.exports = r()
                    }, function (t, e, n) {
                        var r = n(50);
                        t.exports = new r("twttr")
                    }, function (t, e, n) {
                        var r = n(1), i = n(0);

                        function o(t) {
                            return i.isType("string", t) ? t.split(".") : i.isType("array", t) ? t : []
                        }

                        function s(t, e) {
                            (e = e || r)[t] = e[t] || {}, Object.defineProperty(this, "base", {value: e[t]}), Object.defineProperty(this, "name", {value: t})
                        }

                        i.aug(s.prototype, {
                            get: function (t) {
                                return o(t).reduce(function (t, e) {
                                    if (i.isObject(t)) return t[e]
                                }, this.base)
                            }, set: function (t, e, n) {
                                var r = o(t), s = function (t, e) {
                                    var n = o(e).slice(0, -1);
                                    return n.reduce(function (t, e, r) {
                                        if (t[e] = t[e] || {}, !i.isObject(t[e])) throw new Error(n.slice(0, r + 1).join(".") + " is already defined with a value.");
                                        return t[e]
                                    }, t)
                                }(this.base, t), a = r.slice(-1);
                                return n && a in s ? s[a] : s[a] = e
                            }, init: function (t, e) {
                                return this.set(t, e, !0)
                            }, unset: function (t) {
                                var e = o(t), n = this.get(e.slice(0, -1));
                                n && delete n[e.slice(-1)]
                            }, aug: function (t) {
                                var e = this.get(t), n = i.toRealArray(arguments).slice(1);
                                if (e = void 0 !== e ? e : {}, n.unshift(e), !n.every(i.isObject)) throw new Error("Cannot augment non-object.");
                                return this.set(t, i.aug.apply(null, n))
                            }, call: function (t) {
                                var e = this.get(t), n = i.toRealArray(arguments).slice(1);
                                if (!i.isType("function", e)) throw new Error("Function " + t + "does not exist.");
                                return e.apply(null, n)
                            }, fullPath: function (t) {
                                var e = o(t);
                                return e.unshift(this.name), e.join(".")
                            }
                        }), t.exports = s
                    }, function (t, e, n) {
                        var r = n(0), i = n(7), o = {
                            bind: function (t, e) {
                                return this._handlers = this._handlers || {}, this._handlers[t] = this._handlers[t] || [], this._handlers[t].push(e)
                            }, unbind: function (t, e) {
                                var n;
                                this._handlers && this._handlers[t] && (e ? (n = this._handlers[t].indexOf(e)) >= 0 && this._handlers[t].splice(n, 1) : this._handlers[t] = [])
                            }, trigger: function (t, e) {
                                var n = this._handlers && this._handlers[t];
                                (e = e || {}).type = t, n && n.forEach(function (t) {
                                    r.async(i(t, this, e))
                                })
                            }
                        };
                        t.exports = {
                            Emitter: o, makeEmitter: function () {
                                return r.aug(function () {
                                }, o)
                            }
                        }
                    }, function (t, e) {
                        var n = "tfw_horizon_tweet_embed_9555";
                        t.exports = {
                            isHorizonTweetEnabled: function (t) {
                                return !(!t || !t[n] || "hte" !== t[n].bucket)
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(101), i = n(76), o = n(6), s = n(22), a = n(7), u = n(0), c = new i(function (t) {
                            var e = function (t) {
                                return t.reduce(function (t, e) {
                                    return t[e._className] = t[e._className] || [], t[e._className].push(e), t
                                }, {})
                            }(t.map(r.fromRawTask));
                            u.forIn(e, function (t, e) {
                                s.allSettled(e.map(function (t) {
                                    return t.initialize()
                                })).then(function () {
                                    e.forEach(function (t) {
                                        o.all([t.hydrate(), t.insertIntoDom()]).then(a(t.render, t)).then(a(t.success, t), a(t.fail, t))
                                    })
                                })
                            })
                        });
                        t.exports = {
                            addWidget: function (t) {
                                return c.add(t)
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(18);
                        t.exports = function (t) {
                            return r.write(function () {
                                t && t.parentNode && t.parentNode.removeChild(t)
                            })
                        }
                    }, function (t, e, n) {
                        n(12), t.exports = {
                            log: function (t, e) {
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(1);

                        function i(t) {
                            return (t = t || r).getSelection && t.getSelection()
                        }

                        t.exports = {
                            getSelection: i, getSelectedText: function (t) {
                                var e = i(t);
                                return e ? e.toString() : ""
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(4), i = n(1), o = n(2), s = 2e4;
                        t.exports = function (t) {
                            var e = new o, n = r.createElement("img");
                            return n.onload = n.onerror = function () {
                                i.setTimeout(e.resolve, 50)
                            }, n.src = t, i.setTimeout(e.reject, s), e.promise
                        }
                    }, function (t, e, n) {
                        var r = n(111);
                        t.exports = function (t) {
                            t.define("createElement", r), t.define("createFragment", r), t.define("htmlToElement", r), t.define("hasSelectedText", r), t.define("addRootClass", r), t.define("removeRootClass", r), t.define("hasRootClass", r), t.define("prependStyleSheet", r), t.define("appendStyleSheet", r), t.define("prependCss", r), t.define("appendCss", r), t.define("makeVisible", r), t.define("injectWidgetEl", r), t.define("matchHeightToContent", r), t.define("matchWidthToContent", r)
                        }
                    }, function (t, e) {
                        t.exports = function (t) {
                            var e, n = !1;
                            return function () {
                                return n ? e : (n = !0, e = t.apply(this, arguments))
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(15), i = n(120), o = n(61), s = n(16);
                        t.exports = function (t, e, n) {
                            return new r(i, o, s.DM_BUTTON, t, e, n)
                        }
                    }, function (t, e, n) {
                        var r = n(62), i = n(25);
                        t.exports = r.isSupported() ? r : i
                    }, function (t, e, n) {
                        var r = n(26), i = n(121);
                        t.exports = r.build([i])
                    }, function (t, e, n) {
                        var r = n(15), i = n(124), o = n(37), s = n(16);
                        t.exports = function (t, e, n) {
                            return new r(i, o, s.FOLLOW_BUTTON, t, e, n)
                        }
                    }, function (t, e, n) {
                        var r = n(15), i = n(132), o = n(25), s = n(16);
                        t.exports = function (t, e, n) {
                            return new r(i, o, s.MOMENT, t, e, n)
                        }
                    }, function (t, e, n) {
                        var r = n(15), i = n(134), o = n(25), s = n(16);
                        t.exports = function (t, e, n) {
                            return new r(i, o, s.PERISCOPE, t, e, n)
                        }
                    }, function (t, e, n) {
                        var r = n(82), i = n(136), o = n(140), s = n(142), a = n(144), u = n(146),
                            c = {collection: i, event: o, likes: s, list: a, profile: u, url: l}, d = [u, s, i, a, o];

                        function l(t) {
                            return r(d, function (e) {
                                try {
                                    return new e(t)
                                } catch (t) {
                                }
                            })
                        }

                        t.exports = function (t) {
                            return t ? function (t) {
                                var e, n;
                                return e = (t.sourceType + "").toLowerCase(), (n = c[e]) ? new n(t) : null
                            }(t) || l(t) : null
                        }
                    }, function (t, e, n) {
                        var r = n(15), i = n(148), o = n(25), s = n(16);
                        t.exports = function (t, e, n) {
                            return new r(i, o, s.TIMELINE, t, e, n)
                        }
                    }, function (t, e, n) {
                        var r = n(15), i = n(4), o = n(37), s = n(150), a = n(61), u = n(151), c = n(16);
                        t.exports = function (t, e, n, d) {
                            var l;
                            return d ? (l = i.createElement("div"), new r(s, o, c.TWEET, t, e, n, {sandboxWrapperEl: l})) : new r(u, a, c.TWEET, t, e, n)
                        }
                    }, function (t, e, n) {
                        var r = n(15), i = n(153), o = n(37), s = n(16);
                        t.exports = function (t, e, n) {
                            var a = t && t.type || "share",
                                u = "hashtag" == a ? s.HASHTAG_BUTTON : "mention" == a ? s.MENTION_BUTTON : s.SHARE_BUTTON;
                            return new r(i, o, u, t, e, n)
                        }
                    }, function (t, e, n) {
                        var r = n(39), i = n(38), o = n(0);
                        t.exports = function (t) {
                            var e = {
                                widget_origin: i.rootDocumentLocation(),
                                widget_frame: i.isFramed() ? i.currentDocumentLocation() : null,
                                duration_ms: t.duration,
                                item_ids: t.widgetIds || []
                            }, n = o.aug(t.namespace, {page: "page", component: "performance"});
                            r.scribe(n, e)
                        }
                    }, function (t, e, n) {
                        var r = n(0), i = n(137), o = ["ar", "fa", "he", "ur"];
                        t.exports = {
                            isRtlLang: function (t) {
                                return t = String(t).toLowerCase(), r.contains(o, t)
                            }, matchLanguage: function (t) {
                                return t = (t = (t || "").toLowerCase()).replace("_", "-"), i(t) ? t : (t = t.replace(/-.*/, ""), i(t) ? t : "en")
                            }
                        }
                    }, function (t) {
                        t.exports = {
                            tweetButtonHtmlPath: "/widgets/tweet_button.d6364fae9340b0be5f13818370141fd0.{{lang}}.html",
                            followButtonHtmlPath: "/widgets/follow_button.d6364fae9340b0be5f13818370141fd0.{{lang}}.html",
                            hubHtmlPath: "/widgets/hub.html",
                            widgetIframeHtmlPath: "/widgets/widget_iframe.d6364fae9340b0be5f13818370141fd0.html",
                            resourceBaseUrl: "https://platform.twitter.com"
                        }
                    }, function (t, e, n) {
                        var r = n(3), i = n(98), o = n(24), s = n(11), a = {
                            favorite: ["favorite", "like"],
                            follow: ["follow"],
                            like: ["favorite", "like"],
                            retweet: ["retweet"],
                            tweet: ["tweet"]
                        };

                        function u(t) {
                            this.srcEl = [], this.element = t
                        }

                        u.open = function (t, e, n) {
                            var u = (r.intentType(t) || "").toLowerCase();
                            r.isTwitterURL(t) && (function (t, e) {
                                i.open(t, {}, e)
                            }(t, n), e && o.trigger("click", {
                                target: e,
                                region: "intent",
                                type: "click",
                                data: {}
                            }), e && a[u] && a[u].forEach(function (n) {
                                o.trigger(n, {
                                    target: e, region: "intent", type: n, data: function (t, e) {
                                        var n = s.decodeURL(e);
                                        switch (t) {
                                            case"favorite":
                                            case"like":
                                                return {tweet_id: n.tweet_id};
                                            case"follow":
                                                return {screen_name: n.screen_name, user_id: n.user_id};
                                            case"retweet":
                                                return {source_tweet_id: n.tweet_id};
                                            default:
                                                return {}
                                        }
                                    }(u, t)
                                })
                            }))
                        }, t.exports = u
                    }, function (t, e) {
                        t.exports = {
                            getTimezoneOffset: function () {
                                var t = (new Date).toString().match(/(GMT[+-]?\d+)/);
                                return t && t[0] || "GMT"
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(4), i = n(9), o = n(2), s = n(0), a = n(11), u = "cb", c = 0;
                        t.exports = {
                            fetch: function (t, e, n, d) {
                                var l, f, h;
                                return d = function (t) {
                                    if (t) return t.replace(/[^\w$]/g, "_")
                                }(d || u + c++), l = i.fullPath(["callbacks", d]), f = r.createElement("script"), h = new o, e = s.aug({}, e, {
                                    callback: l,
                                    suppress_response_codes: !0
                                }), i.set(["callbacks", d], function (t) {
                                    var e;
                                    t = (e = n(t || !1)).resp, e.success ? h.resolve(t) : h.reject(t), f.onload = f.onreadystatechange = null, f.parentNode && f.parentNode.removeChild(f), i.unset(["callbacks", d])
                                }), f.onerror = function () {
                                    h.reject(new Error("failed to fetch " + f.src))
                                }, f.src = a.url(t, e), f.async = "async", r.body.appendChild(f), h.promise
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(2), i = n(103), o = n(7);

                        function s(t) {
                            this._inputsQueue = [], this._task = t, this._hasFlushBeenScheduled = !1
                        }

                        s.prototype.add = function (t) {
                            var e = new r;
                            return this._inputsQueue.push({
                                input: t,
                                taskDoneDeferred: e
                            }), this._hasFlushBeenScheduled || (this._hasFlushBeenScheduled = !0, i(o(this._flush, this))), e.promise
                        }, s.prototype._flush = function () {
                            try {
                                this._task.call(null, this._inputsQueue)
                            } catch (t) {
                                this._inputsQueue.forEach(function (e) {
                                    e.taskDoneDeferred.reject(t)
                                })
                            }
                            this._inputsQueue = [], this._hasFlushBeenScheduled = !1
                        }, t.exports = s
                    }, function (t, e) {
                        t.exports = function (t, e) {
                            return t.reduce(function (t, n) {
                                var r = e(n);
                                return t[r] = t[r] || [], t[r].push(n), t
                            }, {})
                        }
                    }, function (t, e, n) {
                        var r = n(4), i = n(8), o = n(3);

                        function s(t, e) {
                            var n, r;
                            return e = e || i, /^https?:\/\//.test(t) ? t : /^\/\//.test(t) ? e.protocol + t : (n = e.host + (e.port.length ? ":" + e.port : ""), 0 !== t.indexOf("/") && ((r = e.pathname.split("/")).pop(), r.push(t), t = "/" + r.join("/")), [e.protocol, "//", n, t].join(""))
                        }

                        t.exports = {
                            absolutize: s, getCanonicalURL: function () {
                                for (var t, e = r.getElementsByTagName("link"), n = 0; e[n]; n++) if ("canonical" == (t = e[n]).rel) return s(t.href)
                            }, getScreenNameFromPage: function () {
                                for (var t, e, n, i = [r.getElementsByTagName("a"), r.getElementsByTagName("link")], s = 0, a = 0, u = /\bme\b/; t = i[s]; s++) for (a = 0; e = t[a]; a++) if (u.test(e.rel) && (n = o.screenName(e.href))) return n
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(8), i = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i, o = {};

                        function s(t) {
                            return t in o ? o[t] : o[t] = i.test(t)
                        }

                        t.exports = {
                            isUrlSensitive: s, isHostPageSensitive: function () {
                                return s(r.host)
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(20), i = n(55), o = n(11), s = n(34), a = n(0), u = n(9).get("scribeCallback"),
                            c = 2083, d = [], l = o.url(s.CLIENT_EVENT_ENDPOINT, {dnt: 0, l: ""}),
                            f = encodeURIComponent(l).length;

                        function h(t, e, n, r) {
                            var i = !a.isObject(t), o = !!e && !a.isObject(e);
                            i || o || (u && u(arguments), p(s.formatClientEventNamespace(t), s.formatClientEventData(e, n, r), s.CLIENT_EVENT_ENDPOINT))
                        }

                        function p(t, e, n) {
                            var r, u;
                            n && a.isObject(t) && a.isObject(e) && (i.log(t, e), r = s.flattenClientEventPayload(t, e), u = {l: s.stringify(r)}, s.noticeSeen(t) && (u.notice_seen = !0), r.dnt && (u.dnt = 1), w(o.url(n, u)))
                        }

                        function m(t, e, n, r) {
                            var i = !a.isObject(t), o = !!e && !a.isObject(e);
                            if (!i && !o) return v(s.flattenClientEventPayload(s.formatClientEventNamespace(t), s.formatClientEventData(e, n, r)))
                        }

                        function v(t) {
                            return d.push(t), d
                        }

                        function g(t) {
                            return encodeURIComponent(t).length + 3
                        }

                        function w(t) {
                            return (new Image).src = t
                        }

                        t.exports = {
                            canFlushOneItem: function (t) {
                                var e = g(s.stringify(t));
                                return f + e < c
                            }, _enqueueRawObject: v, scribe: p, clientEvent: h, clientEvent2: function (t, e, n) {
                                return h(t, e, n, 2)
                            }, enqueueClientEvent: m, flushClientEvents: function () {
                                var t;
                                return d.length > 1 && m({
                                    page: "widgets_js",
                                    component: "scribe_pixel",
                                    action: "batch_log"
                                }, {}), t = d, d = [], t.reduce(function (e, n, r) {
                                    var i = e.length, o = i && e[i - 1];
                                    return r + 1 == t.length && n.event_namespace && "batch_log" == n.event_namespace.action && (n.message = ["entries:" + r, "requests:" + i].join("/")), function t(e) {
                                        return Array.isArray(e) || (e = [e]), e.reduce(function (e, n) {
                                            var r, i = s.stringify(n), o = g(i);
                                            return f + o < c ? e = e.concat(i) : (r = s.splitLogEntry(n)).length > 1 && (e = e.concat(t(r))), e
                                        }, [])
                                    }(n).forEach(function (t) {
                                        var n = g(t);
                                        (!o || o.urlLength + n > c) && (o = {
                                            urlLength: f,
                                            items: []
                                        }, e.push(o)), o.urlLength += n, o.items.push(t)
                                    }), e
                                }, []).map(function (t) {
                                    var e = {l: t.items};
                                    return r.enabled() && (e.dnt = 1), w(o.url(s.CLIENT_EVENT_ENDPOINT, e))
                                })
                            }, interaction: function (t, e, n, r) {
                                var i = s.extractTermsFromDOM(t.target || t.srcElement);
                                i.action = r || "click", h(i, e, n)
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(0), i = n(43);
                        t.exports = function (t, e) {
                            return i(t, e) ? [t] : r.toRealArray(t.querySelectorAll(e))
                        }
                    }, function (t, e) {
                        t.exports = function (t, e, n) {
                            for (var r, i = 0; i < t.length; i++) if (r = e.call(n, t[i], i, t)) return r
                        }
                    }, function (t, e) {
                        t.exports = function () {
                            return Math.floor(+new Date / 9e5)
                        }
                    }, function (t, e, n) {
                        var r = n(12);
                        t.exports = function (t) {
                            var e, n;
                            return e = t.headers && t.headers.status, !(n = t && !t.error && 200 === e) && t.headers && t.headers.message && r.publicError(t.headers.message), {
                                success: n,
                                resp: t
                            }
                        }
                    }, function (t, e, n) {
                        var r, i = n(29), o = 0;

                        function s() {
                            r && r.length === o && (i.emitter.trigger(i.ALL_WIDGETS_AND_IMAGES_LOADED, r), r = null)
                        }

                        i.emitter.bind(i.ALL_WIDGETS_RENDER_END, function (t) {
                            r = t.widgets, s()
                        }), t.exports = {
                            reportImagesLoadForAWidget: function () {
                                o++, s()
                            }
                        }
                    }, , , , , , , , , function (t, e, n) {
                        var r, i = n(2), o = n(4), s = n(96), a = n(49), u = n(9), c = n(97), d = n(24), l = n(100),
                            f = n(154), h = n(162), p = n(163), m = n(29), v = n(35);
                        n(164), m.emitter.trigger(m.START), u.set("widgets.init", !0), a.set("init", !0), p(), r = new i, s.exposeReadyPromise(r.promise, a.base, "_e"), a.set("widgets", f), a.set("widgets.load", l.load), a.set("events", d), h(function () {
                            v.load(), r.resolve(a.base), c.attachTo(o), l.loadPage()
                        })
                    }, function (t, e) {
                        t.exports = navigator
                    }, function (t, e, n) {
                        var r = n(7);
                        t.exports = {
                            exposeReadyPromise: function (t, e, n) {
                                e.ready = r(t.then, t), n && Array.isArray(e[n]) && (e[n].forEach(r(t.then, t)), delete e[n])
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(8), i = n(36), o = n(32), s = n(73), a = n(3);

                        function u(t) {
                            var e, n, u;
                            t.altKey || t.metaKey || t.shiftKey || (e = o.closest(function (t) {
                                return "A" === t.tagName || "AREA" === t.tagName
                            }, t.target)) && a.isIntentURL(e.href) && (n = (n = (n = [u = e.href, "original_referer=" + r.href].join(-1 == u.indexOf("?") ? "?" : "&")).replace(/^http[:]/, "https:")).replace(/^\/\//, "https://"), s.open(n, e), i.preventDefault(t))
                        }

                        t.exports = {
                            attachTo: function (t) {
                                t.addEventListener("click", u, !1)
                            }
                        }
                    }, function (t, e, n) {
                        var r, i = n(1), o = n(99), s = n(36), a = n(32), u = n(21), c = n(3), d = n(23), l = n(0),
                            f = "intent_", h = i.screen.width, p = i.screen.height;

                        function m(t, e) {
                            function n(t) {
                                return Math.round(t / 2)
                            }

                            return t > e ? {coordinate: 0, size: e} : {coordinate: n(e) - n(t), size: t}
                        }

                        function v(t, e, n) {
                            var i, o;
                            e = r.parse(e), n = n || {}, i = m(e.width, n.width || h), e.left = i.coordinate, e.width = i.size, o = m(e.height, n.height || p), e.top = o.coordinate, e.height = o.size, this.win = t, this.features = function (t) {
                                var e = [];
                                return l.forIn(t, function (t, n) {
                                    e.push(t + "=" + n)
                                }), e.join(",")
                            }(e)
                        }

                        r = (new o).defaults({
                            width: 550,
                            height: 520,
                            personalbar: "0",
                            toolbar: "0",
                            location: "1",
                            scrollbars: "1",
                            resizable: "1"
                        }), v.prototype.open = function (t, e) {
                            var n = e && "click" == e.type && a.closest("a", e.target),
                                r = e && (e.altKey || e.metaKey || e.shiftKey), i = n && (u.ios() || u.android());
                            if (c.isTwitterURL(t)) return r || i ? this : (this.name = f + d.generate(), this.popup = this.win.open(t, this.name, this.features), e && s.preventDefault(e), this)
                        }, v.open = function (t, e, n) {
                            return new v(i, e).open(t, n)
                        }, t.exports = v
                    }, function (t, e, n) {
                        var r = n(5), i = n(0);

                        function o() {
                            this.assertions = [], this._defaults = {}
                        }

                        o.prototype.assert = function (t, e) {
                            return this.assertions.push({fn: t, msg: e || "assertion failed"}), this
                        }, o.prototype.defaults = function (t) {
                            return this._defaults = t || this._defaults, this
                        }, o.prototype.require = function (t) {
                            var e = this;
                            return (t = Array.isArray(t) ? t : i.toRealArray(arguments)).forEach(function (t) {
                                e.assert(function (t) {
                                    return function (e) {
                                        return r.hasValue(e[t])
                                    }
                                }(t), "required: " + t)
                            }), this
                        }, o.prototype.parse = function (t) {
                            var e, n;
                            if (e = i.aug({}, this._defaults, t || {}), (n = this.assertions.reduce(function (t, n) {
                                return n.fn(e) || t.push(n.msg), t
                            }, [])).length > 0) throw new Error(n.join("\n"));
                            return e
                        }, t.exports = o
                    }, function (t, e, n) {
                        var r = n(4), i = n(52), o = n(6), s = n(22), a = n(53), u = n(33), c = n(9), d = n(39),
                            l = n(24), f = n(5), h = n(0), p = n(35), m = n(117), v = n(29);

                        function g() {
                            var t = u.val("widgets:autoload") || !0;
                            return !f.isFalseValue(t) && (f.isTruthValue(t) ? r.body : r.querySelectorAll(t))
                        }

                        function w(t, e) {
                            var n, i;
                            return t = (t = t || r.body).length ? h.toRealArray(t) : [t], d.pause(), i = function (t, e) {
                                return t.reduce(function (t, n) {
                                    return t.concat(m.reduce(function (t, r) {
                                        return t.concat(r(n, e))
                                    }, []))
                                }, [])
                            }(t, e), v.emitter.trigger(v.ALL_WIDGETS_RENDER_START, {widgets: i}), n = s.allResolved(i.map(function (t) {
                                return a.addWidget(t)
                            })).then(function (t) {
                                l.trigger("loaded", {widgets: t}), t && t.length && v.emitter.trigger(v.ALL_WIDGETS_RENDER_END, {widgets: t})
                            }), s.always(n, function () {
                                d.resume()
                            }), n
                        }

                        function y(t) {
                            return p.getExperiments().then(function (e) {
                                return w(t, i.isHorizonTweetEnabled(e))
                            })
                        }

                        t.exports = {
                            load: y, loadPage: function () {
                                var t = g();
                                return !1 === t ? o.resolve() : (c.set("widgets.loaded", !0), y(t))
                            }, _getPageLoadTarget: g
                        }
                    }, function (t, e, n) {
                        var r = n(10), i = n(18), o = n(24), s = n(54), a = n(6), u = n(22);

                        function c(t, e) {
                            this._widget = null, this._sandbox = null, this._hydrated = !1, this._insertedIntoDom = !1, this._Sandbox = t.Sandbox, this._factory = t.factory, this._widgetParams = t.parameters, this._resolve = e, this._className = t.className, this._renderedClassName = t.className + "-rendered", this._errorClassName = t.className + "-error", this._srcEl = t.srcEl, this._targetGlobal = function (t) {
                                return (t.srcEl || t.targetEl).ownerDocument.defaultView
                            }(t), this._sandboxWrapperEl = t.options ? t.options.sandboxWrapperEl : null, this._insertionStrategy = function (e) {
                                var n, r = t.srcEl, i = t.targetEl, o = t.options ? t.options.sandboxWrapperEl : null;
                                o ? (o.appendChild(e), n = o) : n = e, r ? i.insertBefore(n, r) : i.appendChild(n)
                            }
                        }

                        c.fromRawTask = function (t) {
                            return new c(t.input, t.taskDoneDeferred.resolve)
                        }, c.prototype.initialize = function () {
                            var t = this, e = new this._Sandbox(this._targetGlobal);
                            return this._factory(this._widgetParams, e).then(function (n) {
                                return t._widget = n, t._sandbox = e, n._sandboxWrapperEl = t._sandboxWrapperEl, n
                            })
                        }, c.prototype.insertIntoDom = function () {
                            var t = this;
                            return this._widget ? this._sandbox.insert(this._widget.id, {class: [this._className, this._renderedClassName].join(" ")}, null, this._insertionStrategy).then(function () {
                                t._insertedIntoDom = !0
                            }) : a.reject(new Error("cannot insert widget into DOM before it is initialized"))
                        }, c.prototype.hydrate = function () {
                            var t = this;
                            return this._widget ? this._widget.hydrate().then(function () {
                                t._hydrated = !0
                            }) : a.reject(new Error("cannot hydrate widget before it is initialized"))
                        }, c.prototype.render = function () {
                            var t = this;

                            function e(e) {
                                return s(t._sandbox.sandboxEl).then(function () {
                                    return a.reject(e)
                                })
                            }

                            return this._hydrated ? this._insertedIntoDom ? t._widget.render(t._sandbox).then(function () {
                                return t._sandbox.onResize(function () {
                                    return t._widget.resize().then(function () {
                                        o.trigger("resize", {target: t._sandbox.sandboxEl})
                                    })
                                }), t._widget.show()
                            }).then(function () {
                                return s(t._srcEl).then(function () {
                                    return t._sandbox.sandboxEl
                                })
                            }, e) : e(new Error("cannot render widget before DOM insertion")) : e(new Error("cannot render widget before hydration"))
                        }, c.prototype.fail = function () {
                            var t = this;
                            return this._srcEl ? u.always(i.write(function () {
                                r.add(t._srcEl, t._errorClassName)
                            }), function () {
                                o.trigger("rendered", {target: t._srcEl}), t._resolve(t._srcEl)
                            }) : (t._resolve(), a.resolve())
                        }, c.prototype.success = function () {
                            o.trigger("rendered", {target: this._sandbox.sandboxEl}), this._resolve(this._sandbox.sandboxEl)
                        }, t.exports = c
                    }, function (t, e, n) {
                        var r;
                        !function () {
                            "use strict";
                            var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                                return window.setTimeout(t, 1e3 / 60)
                            };

                            function o() {
                                this.frames = [], this.lastId = 0, this.raf = i, this.batch = {
                                    hash: {},
                                    read: [],
                                    write: [],
                                    mode: null
                                }
                            }

                            o.prototype.read = function (t, e) {
                                var n = this.add("read", t, e), r = n.id;
                                return this.batch.read.push(n.id), "reading" === this.batch.mode || this.batch.scheduled ? r : (this.scheduleBatch(), r)
                            }, o.prototype.write = function (t, e) {
                                var n = this.add("write", t, e), r = this.batch.mode, i = n.id;
                                return this.batch.write.push(n.id), "writing" === r || "reading" === r || this.batch.scheduled ? i : (this.scheduleBatch(), i)
                            }, o.prototype.defer = function (t, e, n) {
                                "function" == typeof t && (n = e, e = t, t = 1);
                                var r = this, i = t - 1;
                                return this.schedule(i, function () {
                                    r.run({fn: e, ctx: n})
                                })
                            }, o.prototype.clear = function (t) {
                                if ("function" == typeof t) return this.clearFrame(t);
                                t = Number(t);
                                var e = this.batch.hash[t];
                                if (e) {
                                    var n = this.batch[e.type], r = n.indexOf(t);
                                    delete this.batch.hash[t], ~r && n.splice(r, 1)
                                }
                            }, o.prototype.clearFrame = function (t) {
                                var e = this.frames.indexOf(t);
                                ~e && this.frames.splice(e, 1)
                            }, o.prototype.scheduleBatch = function () {
                                var t = this;
                                this.schedule(0, function () {
                                    t.batch.scheduled = !1, t.runBatch()
                                }), this.batch.scheduled = !0
                            }, o.prototype.uniqueId = function () {
                                return ++this.lastId
                            }, o.prototype.flush = function (t) {
                                for (var e; e = t.shift();) this.run(this.batch.hash[e])
                            }, o.prototype.runBatch = function () {
                                try {
                                    this.batch.mode = "reading", this.flush(this.batch.read), this.batch.mode = "writing", this.flush(this.batch.write), this.batch.mode = null
                                } catch (t) {
                                    throw this.runBatch(), t
                                }
                            }, o.prototype.add = function (t, e, n) {
                                var r = this.uniqueId();
                                return this.batch.hash[r] = {id: r, fn: e, ctx: n, type: t}
                            }, o.prototype.run = function (t) {
                                var e = t.ctx || this, n = t.fn;
                                if (delete this.batch.hash[t.id], !this.onError) return n.call(e);
                                try {
                                    n.call(e)
                                } catch (t) {
                                    this.onError(t)
                                }
                            }, o.prototype.loop = function () {
                                var t, e = this, n = this.raf, r = !1;

                                function i() {
                                    var t = e.frames.shift();
                                    e.frames.length ? n(i) : e.looping = !1, t && t()
                                }

                                this.looping || (t = setTimeout(function () {
                                    r = !0, i()
                                }, 500), n(function () {
                                    r || (clearTimeout(t), i())
                                }), this.looping = !0)
                            }, o.prototype.schedule = function (t, e) {
                                return this.frames[t] ? this.schedule(t + 1, e) : (this.loop(), this.frames[t] = e)
                            };
                            var s = new o;
                            void 0 !== t && t.exports ? t.exports = s : void 0 === (r = function () {
                                return s
                            }.call(e, n, e, t)) || (t.exports = r)
                        }()
                    }, function (t, e, n) {
                        var r = n(48).Promise;
                        t.exports = r._asap
                    }, function (t, e, n) {
                        var r, i, o, s = n(4), a = n(1), u = n(30), c = n(20), d = n(2), l = n(6), f = n(55), h = n(34),
                            p = n(0), m = n(25), v = n(9).get("scribeCallback"),
                            g = Math.floor(1e3 * Math.random()) + "_", w = "rufous-frame-" + g + "-",
                            y = "rufous-form-" + g + "-", b = 0, _ = !1, E = new d;

                        function x() {
                            var t = o.createElement("form"), e = o.createElement("input"), n = o.createElement("input");
                            return b++, t.action = h.CLIENT_EVENT_ENDPOINT, t.method = "POST", t.target = w + b, t.id = y + b, e.type = "hidden", e.name = "dnt", e.value = c.enabled(), n.type = "hidden", n.name = "tfw_redirect", n.value = h.RUFOUS_REDIRECT, t.appendChild(e), t.appendChild(n), t
                        }

                        function T() {
                            var t = w + b;
                            return u({id: t, name: t, width: 0, height: 0, border: 0}, {display: "none"}, o.doc)
                        }

                        t.exports = {
                            clientEvent: function (t, e, n, i) {
                                (function (t, e) {
                                    var n = !p.isObject(t), r = !!e && !p.isObject(e), i = n || r;
                                    return i
                                })(t, e) || (v && v(arguments), E.promise.then(function () {
                                    !function (t, e) {
                                        var n, i, s;
                                        p.isObject(t) && p.isObject(e) && (f.log(t, e), s = h.flattenClientEventPayload(t, e), (n = r.firstChild).value = +(+n.value || s.dnt || 0), (i = o.createElement("input")).type = "hidden", i.name = "l", i.value = h.stringify(s), r.appendChild(i))
                                    }(h.formatClientEventNamespace(t), h.formatClientEventData(e, n, i))
                                }))
                            }, flush: function () {
                                return E.promise.then(function () {
                                    var t;
                                    return r.children.length <= 2 ? l.reject() : (t = l.all([o.doc.body.appendChild(r), o.doc.body.appendChild(i)]).then(function (t) {
                                        var e = t[0], n = t[1];
                                        return n.addEventListener("load", function () {
                                            !function (t, e) {
                                                return function () {
                                                    var n = t.parentNode;
                                                    n && (n.removeChild(t), n.removeChild(e))
                                                }
                                            }(e, n)()
                                        }), e.submit(), t
                                    }), r = x(), i = T(), t)
                                })
                            }, init: function () {
                                return _ ? E.promise : ((o = new m(a)).insert("rufous-sandbox", null, {display: "none"}, function (t) {
                                    s.body.appendChild(t)
                                }).then(function () {
                                    o.setTitle("Twitter analytics iframe"), r = x(), i = T(), E.resolve([r, i])
                                }), _ = !0, E.promise)
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(0);
                        t.exports = function t(e) {
                            var n = [];
                            return e.forEach(function (e) {
                                var i = r.isType("array", e) ? t(e) : [e];
                                n = n.concat(i)
                            }), n
                        }
                    }, function (t, e) {
                        t.exports = function (t) {
                            return t.filter(function (e, n) {
                                return t.indexOf(e) === n
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(41), i = n(0), o = n(109);

                        function s() {
                            r.apply(this, arguments)
                        }

                        s.prototype = Object.create(r.prototype), i.aug(s.prototype, {factory: o}), t.exports = s
                    }, function (t, e, n) {
                        var r = n(22), i = n(0), o = n(7);
                        t.exports = {
                            before: function (t, e) {
                                return function () {
                                    var n, i = this, o = arguments;
                                    return n = e.apply(this, arguments), r.isPromise(n) ? n.then(function () {
                                        return t.apply(i, o)
                                    }) : t.apply(this, arguments)
                                }
                            }, after: function (t, e) {
                                return function () {
                                    var n, i = this, o = arguments;

                                    function s(t, e) {
                                        return r.isPromise(e) ? e.then(function () {
                                            return t
                                        }) : t
                                    }

                                    return n = t.apply(this, arguments), r.isPromise(n) ? n.then(function (t) {
                                        return s(t, e.apply(i, o))
                                    }) : s(n, e.apply(this, arguments))
                                }
                            }, around: function (t, e) {
                                return function () {
                                    var n = i.toRealArray(arguments);
                                    return n.unshift(o(t, this)), e.apply(this, n)
                                }
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(10), i = n(18), o = n(42), s = n(6), a = n(0);
                        t.exports = function () {
                            var t = o();

                            function e(e) {
                                t.apply(this, arguments), Object.defineProperty(this, "targetGlobal", {value: e})
                            }

                            return e.prototype = Object.create(t.prototype), a.aug(e.prototype, {
                                id: null,
                                initialized: !1,
                                width: 0,
                                height: 0,
                                sandboxEl: null,
                                insert: function () {
                                    return s.reject()
                                },
                                onResize: function () {
                                },
                                addClass: function (t) {
                                    var e = this.sandboxEl;
                                    return t = Array.isArray(t) ? t : [t], i.write(function () {
                                        t.forEach(function (t) {
                                            r.add(e, t)
                                        })
                                    })
                                },
                                removeClass: function (t) {
                                    var e = this.sandboxEl;
                                    return t = Array.isArray(t) ? t : [t], i.write(function () {
                                        t.forEach(function (t) {
                                            r.remove(e, t)
                                        })
                                    })
                                },
                                styleSelf: function (t) {
                                    var e = this;
                                    return i.write(function () {
                                        a.forIn(t, function (t, n) {
                                            e.sandboxEl.style[t] = n
                                        })
                                    })
                                }
                            }), e
                        }
                    }, function (t, e, n) {
                        var r = n(4), i = n(10), o = n(18), s = n(56), a = n(26), u = n(57), c = n(45), d = n(46),
                            l = n(30), f = n(12), h = n(47), p = n(2), m = n(6), v = n(0), g = n(9), w = n(23),
                            y = n(7), b = {allowfullscreen: "true"}, _ = {
                                position: "absolute",
                                visibility: "hidden",
                                display: "block",
                                width: "0px",
                                height: "0px",
                                padding: "0",
                                border: "none"
                            }, E = {position: "static", visibility: "visible"}, x = "SandboxRoot",
                            T = ".SandboxRoot { display: none; }", A = 50;

                        function S(t, e, n, r) {
                            return e = v.aug({id: t}, b, e), n = v.aug({}, _, n), l(e, n, r)
                        }

                        function R(t, e, n, i, s) {
                            var a = new p, u = w.generate(), c = S(t, e, n, s);
                            return g.set(["sandbox", u], function () {
                                var t = c.contentWindow.document;
                                o.write(function () {
                                    t.write("<!DOCTYPE html><html><head></head><body></body></html>")
                                }).then(function () {
                                    t.close(), a.resolve(c)
                                })
                            }), c.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", 'catch (e) { document.domain="' + r.domain + '"; }', "window.parent." + g.fullPath(["sandbox", u]) + "();"].join(""), c.addEventListener("error", a.reject, !1), o.write(function () {
                                i.parentNode.replaceChild(c, i)
                            }), a.promise
                        }

                        t.exports = a.couple(n(58), function (t) {
                            t.overrideProperty("id", {
                                get: function () {
                                    return this.sandboxEl && this.sandboxEl.id
                                }
                            }), t.overrideProperty("initialized", {
                                get: function () {
                                    return !!this.win
                                }
                            }), t.overrideProperty("width", {
                                get: function () {
                                    return this._width
                                }
                            }), t.overrideProperty("height", {
                                get: function () {
                                    return this._height
                                }
                            }), t.overrideProperty("sandboxEl", {
                                get: function () {
                                    return this.iframeEl
                                }
                            }), t.defineProperty("iframeEl", {
                                get: function () {
                                    return this._iframe
                                }
                            }), t.defineProperty("rootEl", {
                                get: function () {
                                    return this.doc && this.doc.documentElement
                                }
                            }), t.defineProperty("widgetEl", {
                                get: function () {
                                    return this.doc && this.doc.body.firstElementChild
                                }
                            }), t.defineProperty("win", {
                                get: function () {
                                    return this.iframeEl && this.iframeEl.contentWindow
                                }
                            }), t.defineProperty("doc", {
                                get: function () {
                                    return this.win && this.win.document
                                }
                            }), t.define("_updateCachedDimensions", function () {
                                var t = this;
                                return o.read(function () {
                                    var e, n = h(t.sandboxEl);
                                    "visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = h(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height
                                })
                            }), t.define("_setTargetToBlank", function () {
                                var t = this.createElement("base");
                                t.target = "_blank", this.doc.head.appendChild(t)
                            }), t.define("_didResize", function () {
                                var t = this, e = this._resizeHandlers.slice(0);
                                return this._updateCachedDimensions().then(function () {
                                    e.forEach(function (e) {
                                        e(t)
                                    })
                                })
                            }), t.define("setTitle", function (t) {
                                this.iframeEl.title = t
                            }), t.override("createElement", function (t) {
                                return this.doc.createElement(t)
                            }), t.override("createFragment", function () {
                                return this.doc.createDocumentFragment()
                            }), t.override("htmlToElement", function (t) {
                                var e;
                                return (e = this.createElement("div")).innerHTML = t, e.firstElementChild
                            }), t.override("hasSelectedText", function () {
                                return !!s.getSelectedText(this.win)
                            }), t.override("addRootClass", function (t) {
                                var e = this.rootEl;
                                return t = Array.isArray(t) ? t : [t], this.initialized ? o.write(function () {
                                    t.forEach(function (t) {
                                        i.add(e, t)
                                    })
                                }) : m.reject(new Error("sandbox not initialized"))
                            }), t.override("removeRootClass", function (t) {
                                var e = this.rootEl;
                                return t = Array.isArray(t) ? t : [t], this.initialized ? o.write(function () {
                                    t.forEach(function (t) {
                                        i.remove(e, t)
                                    })
                                }) : m.reject(new Error("sandbox not initialized"))
                            }), t.override("hasRootClass", function (t) {
                                return i.present(this.rootEl, t)
                            }), t.define("addStyleSheet", function (t, e) {
                                var n, r = new p;
                                return this.initialized ? ((n = this.createElement("link")).type = "text/css", n.rel = "stylesheet", n.href = t, n.addEventListener("load", r.resolve, !1), n.addEventListener("error", r.reject, !1), o.write(y(e, null, n)).then(function () {
                                    return u(t).then(r.resolve, r.reject), r.promise
                                })) : m.reject(new Error("sandbox not initialized"))
                            }), t.override("prependStyleSheet", function (t) {
                                var e = this.doc;
                                return this.addStyleSheet(t, function (t) {
                                    var n = e.head.firstElementChild;
                                    return n ? e.head.insertBefore(t, n) : e.head.appendChild(t)
                                })
                            }), t.override("appendStyleSheet", function (t) {
                                var e = this.doc;
                                return this.addStyleSheet(t, function (t) {
                                    return e.head.appendChild(t)
                                })
                            }), t.define("addCss", function (t, e) {
                                var n;
                                return c.inlineStyle() ? ((n = this.createElement("style")).type = "text/css", n.appendChild(this.doc.createTextNode(t)), o.write(y(e, null, n))) : (f.devError("CSP enabled; cannot embed inline styles"), m.resolve())
                            }), t.override("prependCss", function (t) {
                                var e = this.doc;
                                return this.addCss(t, function (t) {
                                    var n = e.head.firstElementChild;
                                    return n ? e.head.insertBefore(t, n) : e.head.appendChild(t)
                                })
                            }), t.override("appendCss", function (t) {
                                var e = this.doc;
                                return this.addCss(t, function (t) {
                                    return e.head.appendChild(t)
                                })
                            }), t.override("makeVisible", function () {
                                var t = this;
                                return this.styleSelf(E).then(function () {
                                    t._updateCachedDimensions()
                                })
                            }), t.override("injectWidgetEl", function (t) {
                                var e = this;
                                return this.initialized ? this.widgetEl ? m.reject(new Error("widget already injected")) : o.write(function () {
                                    e.doc.body.appendChild(t)
                                }) : m.reject(new Error("sandbox not initialized"))
                            }), t.override("matchHeightToContent", function () {
                                var t, e = this;
                                return o.read(function () {
                                    t = e.widgetEl ? h(e.widgetEl).height : 0
                                }), o.write(function () {
                                    e.sandboxEl.style.height = t + "px"
                                }).then(function () {
                                    return e._updateCachedDimensions()
                                })
                            }), t.override("matchWidthToContent", function () {
                                var t, e = this;
                                return o.read(function () {
                                    t = e.widgetEl ? h(e.widgetEl).width : 0
                                }), o.write(function () {
                                    e.sandboxEl.style.width = t + "px"
                                }).then(function () {
                                    return e._updateCachedDimensions()
                                })
                            }), t.after("initialize", function () {
                                this._iframe = null, this._width = this._height = 0, this._resizeHandlers = []
                            }), t.override("insert", function (t, e, n, r) {
                                var i = this, s = new p, a = this.targetGlobal.document, u = S(t, e, n, a);
                                return o.write(y(r, null, u)), u.addEventListener("load", function () {
                                    (function (t) {
                                        try {
                                            t.contentWindow.document
                                        } catch (t) {
                                            return m.reject(t)
                                        }
                                        return m.resolve(t)
                                    })(u).then(null, y(R, null, t, e, n, u, a)).then(s.resolve, s.reject)
                                }, !1), u.addEventListener("error", s.reject, !1), s.promise.then(function (t) {
                                    var e = d(i._didResize, A, i);
                                    return i._iframe = t, i.win.addEventListener("resize", e, !1), m.all([i._setTargetToBlank(), i.addRootClass(x), i.prependCss(T)])
                                })
                            }), t.override("onResize", function (t) {
                                this._resizeHandlers.push(t)
                            }), t.after("styleSelf", function () {
                                return this._updateCachedDimensions()
                            })
                        })
                    }, function (t, e) {
                        t.exports = function () {
                            throw new Error("unimplemented method")
                        }
                    }, function (t, e, n) {
                        var r = n(2), i = n(7), o = 100, s = 3e3;

                        function a(t, e) {
                            this._inputsQueue = [], this._task = t, this._isPaused = !1, this._flushDelay = e && e.flushDelay || o, this._pauseLength = e && e.pauseLength || s, this._flushTimeout = void 0
                        }

                        a.prototype.add = function (t) {
                            var e = new r;
                            return this._inputsQueue.push({
                                input: t,
                                taskDoneDeferred: e
                            }), this._scheduleFlush(), e.promise
                        }, a.prototype._scheduleFlush = function () {
                            this._isPaused || (clearTimeout(this._flushTimeout), this._flushTimeout = setTimeout(i(this._flush, this), this._flushDelay))
                        }, a.prototype._flush = function () {
                            try {
                                this._task.call(null, this._inputsQueue)
                            } catch (t) {
                                this._inputsQueue.forEach(function (e) {
                                    e.taskDoneDeferred.reject(t)
                                })
                            }
                            this._inputsQueue = [], this._flushTimeout = void 0
                        }, a.prototype.pause = function (t) {
                            clearTimeout(this._flushTimeout), this._isPaused = !0, !t && this._pauseLength && setTimeout(i(this.resume, this), this._pauseLength)
                        }, a.prototype.resume = function () {
                            this._isPaused = !1, this._scheduleFlush()
                        }, t.exports = a
                    }, function (t, e, n) {
                        var r, i = n(72), o = n(30), s = n(2), a = n(4), u = n(19), c = n(21), d = n(31), l = n(8),
                            f = n(12), h = n(114), p = n(59), m = n(9), v = n(11), g = n(115), w = n(3), y = n(0),
                            b = n(1), _ = p(function () {
                                return new s
                            });

                        function E(t) {
                            var e = t || {should_obtain_cookie_consent: !0, experiments: {}};
                            return new g(e.should_obtain_cookie_consent, e.experiments)
                        }

                        t.exports = {
                            load: function () {
                                var t, e, n, s;
                                if (c.ie9() || c.ie10() || "http:" !== l.protocol && "https:" !== l.protocol) return f.devError("Using default settings due to unsupported browser or protocol."), r = E(), void _().resolve();
                                t = {origin: l.origin}, u.settings().indexOf("localhost") > -1 && (t.localSettings = !0), e = v.url(i.resourceBaseUrl + i.widgetIframeHtmlPath, t), n = function (t) {
                                    var n;
                                    if (e.substr(0, t.origin.length) === t.origin && w.isTwitterURL(t.origin)) try {
                                        (n = "string" == typeof t.data ? d.parse(t.data) : t.data).namespace === h.settings && (r = E(n.settings), _().resolve())
                                    } catch (t) {
                                        f.devError(t)
                                    }
                                }, b.addEventListener("message", n), s = o({
                                    src: e,
                                    title: "Twitter settings iframe"
                                }, {display: "none"}), a.body.appendChild(s)
                            }, settingsLoaded: function () {
                                var t, e, n;
                                return t = new s, e = m.get("experimentOverride"), _().promise.then(function () {
                                    e && e.name && e.assignment && ((n = {})[e.name] = {bucket: e.assignment}, r.experiments = y.aug(r.experiments, n)), t.resolve(r)
                                }).catch(function (e) {
                                    t.reject(e)
                                }), t.promise
                            }
                        }
                    }, function (t, e) {
                        t.exports = {settings: "twttr.settings"}
                    }, function (t, e) {
                        t.exports = function (t, e) {
                            this.shouldObtainCookieConsent = t, this.experiments = e || {}
                        }
                    }, function (t, e) {
                        t.exports = function (t) {
                            return t.split("").map(function (t) {
                                return t.charCodeAt(0).toString(16)
                            }).join("")
                        }
                    }, function (t, e, n) {
                        t.exports = [n(118), n(123), n(131), n(133), n(135), n(149), n(152)]
                    }, function (t, e, n) {
                        var r = n(11), i = n(5), o = n(0), s = n(13), a = n(14)(), u = n(60), c = "a.twitter-dm-button";
                        t.exports = function (t) {
                            return a(t, c).map(function (t) {
                                return u(function (t) {
                                    var e = t.getAttribute("data-show-screen-name"), n = s(t),
                                        a = t.getAttribute("href"), u = t.getAttribute("data-screen-name"),
                                        c = e ? i.asBoolean(e) : null, d = t.getAttribute("data-size"),
                                        l = r.decodeURL(a), f = l.recipient_id,
                                        h = t.getAttribute("data-text") || l.text,
                                        p = t.getAttribute("data-welcome-message-id") || l.welcomeMessageId;
                                    return o.aug(n, {
                                        screenName: u,
                                        showScreenName: c,
                                        size: d,
                                        text: h,
                                        userId: f,
                                        welcomeMessageId: p
                                    })
                                }(t), t.parentNode, t)
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(0);
                        t.exports = function t(e) {
                            var n;
                            if (e) return n = e.lang || e.getAttribute("data-lang"), r.isType("string", n) ? n : t(e.parentElement)
                        }
                    }, function (t, e, n) {
                        var r = n(2);
                        t.exports = function (t, e) {
                            var i = new r;
                            return n.e(2).then(function (r) {
                                var o;
                                try {
                                    o = n(86), i.resolve(new o(t, e))
                                } catch (t) {
                                    i.reject(t)
                                }
                            }.bind(null, n)).catch(function (t) {
                                i.reject(t)
                            }), i.promise
                        }
                    }, function (t, e, n) {
                        var r = n(122), i = n(1), o = n(10), s = n(36), a = n(18), u = n(56), c = n(26), d = n(57),
                            l = n(45), f = n(47), h = n(7), p = n(46), m = n(6), v = n(0), g = 50, w = {
                                position: "absolute",
                                visibility: "hidden",
                                display: "block",
                                transform: "rotate(0deg)"
                            }, y = {position: "static", visibility: "visible"}, b = "twitter-widget", _ = "open",
                            E = "SandboxRoot", x = ".SandboxRoot { display: none; max-height: 10000px; }";
                        t.exports = c.couple(n(58), function (t) {
                            t.defineStatic("isSupported", function () {
                                return !!i.HTMLElement.prototype.attachShadow && l.inlineStyle()
                            }), t.overrideProperty("id", {
                                get: function () {
                                    return this.sandboxEl && this.sandboxEl.id
                                }
                            }), t.overrideProperty("initialized", {
                                get: function () {
                                    return !!this._shadowHost
                                }
                            }), t.overrideProperty("width", {
                                get: function () {
                                    return this._width
                                }
                            }), t.overrideProperty("height", {
                                get: function () {
                                    return this._height
                                }
                            }), t.overrideProperty("sandboxEl", {
                                get: function () {
                                    return this._shadowHost
                                }
                            }), t.define("_updateCachedDimensions", function () {
                                var t = this;
                                return a.read(function () {
                                    var e, n = f(t.sandboxEl);
                                    "visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = f(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height
                                })
                            }), t.define("_didResize", function () {
                                var t = this, e = this._resizeHandlers.slice(0);
                                return this._updateCachedDimensions().then(function () {
                                    e.forEach(function (e) {
                                        e(t)
                                    })
                                })
                            }), t.override("createElement", function (t) {
                                return this.targetGlobal.document.createElement(t)
                            }), t.override("createFragment", function () {
                                return this.targetGlobal.document.createDocumentFragment()
                            }), t.override("htmlToElement", function (t) {
                                var e;
                                return (e = this.createElement("div")).innerHTML = t, e.firstElementChild
                            }), t.override("hasSelectedText", function () {
                                return !!u.getSelectedText(this.targetGlobal)
                            }), t.override("addRootClass", function (t) {
                                var e = this._shadowRootBody;
                                return t = Array.isArray(t) ? t : [t], this.initialized ? a.write(function () {
                                    t.forEach(function (t) {
                                        o.add(e, t)
                                    })
                                }) : m.reject(new Error("sandbox not initialized"))
                            }), t.override("removeRootClass", function (t) {
                                var e = this._shadowRootBody;
                                return t = Array.isArray(t) ? t : [t], this.initialized ? a.write(function () {
                                    t.forEach(function (t) {
                                        o.remove(e, t)
                                    })
                                }) : m.reject(new Error("sandbox not initialized"))
                            }), t.override("hasRootClass", function (t) {
                                return o.present(this._shadowRootBody, t)
                            }), t.override("addStyleSheet", function (t, e) {
                                return this.addCss('@import url("' + t + '");', e).then(function () {
                                    return d(t)
                                })
                            }), t.override("prependStyleSheet", function (t) {
                                var e = this._shadowRoot;
                                return this.addStyleSheet(t, function (t) {
                                    var n = e.firstElementChild;
                                    return n ? e.insertBefore(t, n) : e.appendChild(t)
                                })
                            }), t.override("appendStyleSheet", function (t) {
                                var e = this._shadowRoot;
                                return this.addStyleSheet(t, function (t) {
                                    return e.appendChild(t)
                                })
                            }), t.override("addCss", function (t, e) {
                                var n;
                                return this.initialized ? l.inlineStyle() ? ((n = this.createElement("style")).type = "text/css", n.appendChild(this.targetGlobal.document.createTextNode(t)), a.write(h(e, null, n))) : m.resolve() : m.reject(new Error("sandbox not initialized"))
                            }), t.override("prependCss", function (t) {
                                var e = this._shadowRoot;
                                return this.addCss(t, function (t) {
                                    var n = e.firstElementChild;
                                    return n ? e.insertBefore(t, n) : e.appendChild(t)
                                })
                            }), t.override("appendCss", function (t) {
                                var e = this._shadowRoot;
                                return this.addCss(t, function (t) {
                                    return e.appendChild(t)
                                })
                            }), t.override("makeVisible", function () {
                                return this.styleSelf(y)
                            }), t.override("injectWidgetEl", function (t) {
                                var e = this;
                                return this.initialized ? this._shadowRootBody.firstElementChild ? m.reject(new Error("widget already injected")) : a.write(function () {
                                    e._shadowRootBody.appendChild(t)
                                }).then(function () {
                                    return e._updateCachedDimensions()
                                }).then(function () {
                                    var t = p(e._didResize, g, e);
                                    new r(e._shadowRootBody, t)
                                }) : m.reject(new Error("sandbox not initialized"))
                            }), t.override("matchHeightToContent", function () {
                                return m.resolve()
                            }), t.override("matchWidthToContent", function () {
                                return m.resolve()
                            }), t.override("insert", function (t, e, n, r) {
                                var i = this.targetGlobal.document, o = this._shadowHost = i.createElement(b),
                                    u = this._shadowRoot = o.attachShadow({mode: _}),
                                    c = this._shadowRootBody = i.createElement("div");
                                return v.forIn(e || {}, function (t, e) {
                                    o.setAttribute(t, e)
                                }), o.id = t, u.appendChild(c), s.delegate(c, "click", "A", function (t, e) {
                                    e.hasAttribute("target") || e.setAttribute("target", "_blank")
                                }), m.all([this.styleSelf(w), this.addRootClass(E), this.prependCss(x), a.write(r.bind(null, o))])
                            }), t.override("onResize", function (t) {
                                this._resizeHandlers.push(t)
                            }), t.after("initialize", function () {
                                this._shadowHost = this._shadowRoot = this._shadowRootBody = null, this._width = this._height = 0, this._resizeHandlers = []
                            }), t.after("styleSelf", function () {
                                return this._updateCachedDimensions()
                            })
                        })
                    }, function (t, e) {
                        var n;
                        (n = function (t, e) {
                            function r(t, e) {
                                if (t.resizedAttached) {
                                    if (t.resizedAttached) return void t.resizedAttached.add(e)
                                } else t.resizedAttached = new function () {
                                    var t, e;
                                    this.q = [], this.add = function (t) {
                                        this.q.push(t)
                                    }, this.call = function () {
                                        for (t = 0, e = this.q.length; t < e; t++) this.q[t].call()
                                    }
                                }, t.resizedAttached.add(e);
                                t.resizeSensor = document.createElement("div"), t.resizeSensor.className = "resize-sensor";
                                var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                                    r = "position: absolute; left: 0; top: 0; transition: 0s;";
                                t.resizeSensor.style.cssText = n, t.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + n + '"><div style="' + r + '"></div></div><div class="resize-sensor-shrink" style="' + n + '"><div style="' + r + ' width: 200%; height: 200%"></div></div>', t.appendChild(t.resizeSensor), {
                                    fixed: 1,
                                    absolute: 1
                                }[function (t, e) {
                                    return t.currentStyle ? t.currentStyle[e] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(e) : t.style[e]
                                }(t, "position")] || (t.style.position = "relative");
                                var i, o, s = t.resizeSensor.childNodes[0], a = s.childNodes[0],
                                    u = t.resizeSensor.childNodes[1], c = (u.childNodes[0], function () {
                                        a.style.width = s.offsetWidth + 10 + "px", a.style.height = s.offsetHeight + 10 + "px", s.scrollLeft = s.scrollWidth, s.scrollTop = s.scrollHeight, u.scrollLeft = u.scrollWidth, u.scrollTop = u.scrollHeight, i = t.offsetWidth, o = t.offsetHeight
                                    });
                                c();
                                var d = function (t, e, n) {
                                    t.attachEvent ? t.attachEvent("on" + e, n) : t.addEventListener(e, n)
                                }, l = function () {
                                    t.offsetWidth == i && t.offsetHeight == o || t.resizedAttached && t.resizedAttached.call(), c()
                                };
                                d(s, "scroll", l), d(u, "scroll", l)
                            }

                            var i = Object.prototype.toString.call(t),
                                o = "[object Array]" === i || "[object NodeList]" === i || "[object HTMLCollection]" === i || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
                            if (o) for (var s = 0, a = t.length; s < a; s++) r(t[s], e); else r(t, e);
                            this.detach = function () {
                                if (o) for (var e = 0, r = t.length; e < r; e++) n.detach(t[e]); else n.detach(t)
                            }
                        }).detach = function (t) {
                            t.resizeSensor && (t.removeChild(t.resizeSensor), delete t.resizeSensor, delete t.resizedAttached)
                        }, void 0 !== t && void 0 !== t.exports ? t.exports = n : window.ResizeSensor = n
                    }, function (t, e, n) {
                        var r = n(3), i = n(0), o = n(13), s = n(14)(), a = n(63), u = n(5),
                            c = "a.twitter-follow-button";
                        t.exports = function (t) {
                            return s(t, c).map(function (t) {
                                return a(function (t) {
                                    var e = o(t), n = {
                                        screenName: r.screenName(t.href),
                                        showScreenName: "false" !== t.getAttribute("data-show-screen-name"),
                                        showCount: "false" !== t.getAttribute("data-show-count"),
                                        size: t.getAttribute("data-size"),
                                        count: t.getAttribute("data-count"),
                                        preview: t.getAttribute("data-preview")
                                    };
                                    return i.forIn(n, function (t, n) {
                                        var r = e[t];
                                        e[t] = u.hasValue(r) ? r : n
                                    }), e.screenName = e.screenName || e.screen_name, e
                                }(t), t.parentNode, t)
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(2);
                        t.exports = function (t, e) {
                            var i = new r;
                            return n.e(3).then(function (r) {
                                var o;
                                try {
                                    o = n(87), i.resolve(new o(t, e))
                                } catch (t) {
                                    i.reject(t)
                                }
                            }.bind(null, n)).catch(function (t) {
                                i.reject(t)
                            }), i.promise
                        }
                    }, function (t, e, n) {
                        var r = n(18), i = n(126), o = n(59), s = n(30), a = n(2), u = n(6), c = n(7), d = n(0),
                            l = {position: "absolute", visibility: "hidden", width: "0px", height: "0px"},
                            f = {position: "static", visibility: "visible"}, h = {};
                        i(function (t, e, n) {
                            var r = h[t];
                            if (r) return e = e || 1, n = n || 1, r.styleSelf({
                                width: e + "px",
                                height: n + "px"
                            }).then(function () {
                                r.didResize()
                            })
                        }), t.exports = function (t) {
                            t.overrideProperty("id", {
                                get: function () {
                                    return this.sandboxEl && this.sandboxEl.id
                                }
                            }), t.overrideProperty("initialized", {
                                get: function () {
                                    return !!this.iframeEl
                                }
                            }), t.overrideProperty("width", {
                                get: function () {
                                    return this._width
                                }
                            }), t.overrideProperty("height", {
                                get: function () {
                                    return this._height
                                }
                            }), t.overrideProperty("sandboxEl", {
                                get: function () {
                                    return this.iframeEl
                                }
                            }), t.defineProperty("iframeEl", {
                                get: function () {
                                    return this._iframe
                                }
                            }), t.define("updateCachedDimensions", function () {
                                var t = this;
                                return this.initialized ? r.read(function () {
                                    t._width = t.sandboxEl.offsetWidth, t._height = t.sandboxEl.offsetHeight
                                }) : u.resolve()
                            }), t.define("setTitle", function (t) {
                                this.iframeEl.title = t
                            }), t.define("makeVisible", function () {
                                return this.styleSelf(f)
                            }), t.define("didResize", function () {
                                var t = this, e = t._resizeHandlers.length > 0;
                                return this.updateCachedDimensions().then(function () {
                                    e && t._resizeHandlers.forEach(function (e) {
                                        e(t)
                                    })
                                })
                            }), t.define("loadDocument", function (t) {
                                var e = new a;
                                return this.initialized ? this.iframeEl.src ? u.reject(new Error("widget already loaded")) : (this.iframeEl.addEventListener("load", e.resolve, !1), this.iframeEl.addEventListener("error", e.reject, !1), this.iframeEl.src = t, e.promise) : u.reject(new Error("sandbox not initialized"))
                            }), t.after("initialize", function () {
                                this._iframe = null, this._width = this._height = 0, this._resizeHandlers = []
                            }), t.override("insert", function (t, e, n, i) {
                                var a = this;
                                return e = d.aug({id: t}, e), n = d.aug({}, l, n), this._iframe = s(e, n), h[t] = this, this.onResize(o(function () {
                                    a.makeVisible()
                                })), r.write(c(i, null, this._iframe))
                            }), t.override("onResize", function (t) {
                                this._resizeHandlers.push(t)
                            }), t.after("styleSelf", function () {
                                return this.updateCachedDimensions()
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(1), i = n(127), o = n(129), s = n(24), a = n(5), u = n(130);
                        t.exports = function (t) {
                            function e(t, e) {
                                var n = u(this);
                                s.trigger(t, {target: n, region: e, type: t, data: {}})
                            }

                            function n(e) {
                                var n = u(this), r = n && n.id, i = a.asInt(e.width), o = a.asInt(e.height);
                                r && void 0 !== i && void 0 !== o && t(r, i, o)
                            }

                            (new i).attachReceiver(new o.Receiver(r, "twttr.button")).bind("twttr.private.trigger", e).bind("twttr.private.resizeButton", n), (new i).attachReceiver(new o.Receiver(r, "twttr.embed")).bind("twttr.private.trigger", e).bind("twttr.private.rendered", n).bind("twttr.private.resize", n)
                        }
                    }, function (t, e, n) {
                        var r = n(31), i = n(128), o = n(0), s = n(6), a = n(22), u = "2.0";

                        function c(t) {
                            this.registry = t || {}
                        }

                        function d(t) {
                            var e, n;
                            return e = o.isType("string", t), n = o.isType("number", t), e || n || null === t
                        }

                        function l(t, e) {
                            return {jsonrpc: u, id: d(t) ? t : null, error: e}
                        }

                        c.prototype._invoke = function (t, e) {
                            var n, r, i;
                            n = this.registry[t.method], r = t.params || [], r = o.isType("array", r) ? r : [r];
                            try {
                                i = n.apply(e.source || null, r)
                            } catch (t) {
                                i = s.reject(t.message)
                            }
                            return a.isPromise(i) ? i : s.resolve(i)
                        }, c.prototype._processRequest = function (t, e) {
                            var n, r;
                            return function (t) {
                                var e, n, r;
                                return !!o.isObject(t) && (e = t.jsonrpc === u, n = o.isType("string", t.method), r = !("id" in t) || d(t.id), e && n && r)
                            }(t) ? (n = "params" in t && (r = t.params, !o.isObject(r) || o.isType("function", r)) ? s.resolve(l(t.id, i.INVALID_PARAMS)) : this.registry[t.method] ? this._invoke(t, {source: e}).then(function (e) {
                                return n = t.id, {jsonrpc: u, id: n, result: e};
                                var n
                            }, function () {
                                return l(t.id, i.INTERNAL_ERROR)
                            }) : s.resolve(l(t.id, i.METHOD_NOT_FOUND)), null != t.id ? n : s.resolve()) : s.resolve(l(t.id, i.INVALID_REQUEST))
                        }, c.prototype.attachReceiver = function (t) {
                            return t.attachTo(this), this
                        }, c.prototype.bind = function (t, e) {
                            return this.registry[t] = e, this
                        }, c.prototype.receive = function (t, e) {
                            var n, a, u, c = this;
                            try {
                                u = t, t = o.isType("string", u) ? r.parse(u) : u
                            } catch (t) {
                                return s.resolve(l(null, i.PARSE_ERROR))
                            }
                            return e = e || null, a = ((n = o.isType("array", t)) ? t : [t]).map(function (t) {
                                return c._processRequest(t, e)
                            }), n ? function (t) {
                                return s.all(t).then(function (t) {
                                    return (t = t.filter(function (t) {
                                        return void 0 !== t
                                    })).length ? t : void 0
                                })
                            }(a) : a[0]
                        }, t.exports = c
                    }, function (t) {
                        t.exports = {
                            PARSE_ERROR: {code: -32700, message: "Parse error"},
                            INVALID_REQUEST: {code: -32600, message: "Invalid Request"},
                            INVALID_PARAMS: {code: -32602, message: "Invalid params"},
                            METHOD_NOT_FOUND: {code: -32601, message: "Method not found"},
                            INTERNAL_ERROR: {code: -32603, message: "Internal error"}
                        }
                    }, function (t, e, n) {
                        var r = n(8), i = n(1), o = n(31), s = n(2), a = n(21), u = n(0), c = n(3), d = n(7),
                            l = a.ie9();

                        function f(t, e, n) {
                            var r;
                            t && t.postMessage && (l ? r = (n || "") + o.stringify(e) : n ? (r = {})[n] = e : r = e, t.postMessage(r, "*"))
                        }

                        function h(t) {
                            return u.isType("string", t) ? t : "JSONRPC"
                        }

                        function p(t, e) {
                            return e ? u.isType("string", t) && 0 === t.indexOf(e) ? t.substring(e.length) : t && t[e] ? t[e] : void 0 : t
                        }

                        function m(t, e) {
                            var n = t.document;
                            this.filter = h(e), this.server = null, this.isTwitterFrame = c.isTwitterURL(n.location.href), t.addEventListener("message", d(this._onMessage, this), !1)
                        }

                        function v(t, e) {
                            this.pending = {}, this.target = t, this.isTwitterHost = c.isTwitterURL(r.href), this.filter = h(e), i.addEventListener("message", d(this._onMessage, this), !1)
                        }

                        u.aug(m.prototype, {
                            _onMessage: function (t) {
                                var e, n = this;
                                this.server && (this.isTwitterFrame && !c.isTwitterURL(t.origin) || (e = p(t.data, this.filter)) && this.server.receive(e, t.source).then(function (e) {
                                    e && f(t.source, e, n.filter)
                                }))
                            }, attachTo: function (t) {
                                this.server = t
                            }, detach: function () {
                                this.server = null
                            }
                        }), u.aug(v.prototype, {
                            _processResponse: function (t) {
                                var e = this.pending[t.id];
                                e && (e.resolve(t), delete this.pending[t.id])
                            }, _onMessage: function (t) {
                                var e;
                                if ((!this.isTwitterHost || c.isTwitterURL(t.origin)) && (e = p(t.data, this.filter))) {
                                    if (u.isType("string", e)) try {
                                        e = o.parse(e)
                                    } catch (t) {
                                        return
                                    }
                                    (e = u.isType("array", e) ? e : [e]).forEach(d(this._processResponse, this))
                                }
                            }, send: function (t) {
                                var e = new s;
                                return t.id ? this.pending[t.id] = e : e.resolve(), f(this.target, t, this.filter), e.promise
                            }
                        }), t.exports = {
                            Receiver: m, Dispatcher: v, _stringifyPayload: function (t) {
                                return arguments.length > 0 && (l = !!t), l
                            }
                        }
                    }, function (t, e, n) {
                        var r = n(4);
                        t.exports = function (t) {
                            for (var e, n = r.getElementsByTagName("iframe"), i = 0; n[i]; i++) if ((e = n[i]).contentWindow === t) return e
                        }
                    }, function (t, e, n) {
                        var r = n(5), i = n(0), o = n(3), s = n(13), a = n(14)(), u = n(64), c = "a.twitter-moment";
                        t.exports = function (t) {
                            return a(t, c).map(function (t) {
                                return u(function (t) {
                                    var e = s(t), n = {
                                        momentId: o.momentId(t.href),
                                        chrome: t.getAttribute("data-chrome"),
                                        limit: t.getAttribute("data-limit")
                                    };
                                    return i.forIn(n, function (t, n) {
                                        var i = e[t];
                                        e[t] = r.hasValue(i) ? i : n
                                    }), e
                                }(t), t.parentNode, t)
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(2);
                        t.exports = function (t, e) {
                            var i = new r;
                            return Promise.all([n.e(0), n.e(4)]).then(function (r) {
                                var o;
                                try {
                                    o = n(88), i.resolve(new o(t, e))
                                } catch (t) {
                                    i.reject(t)
                                }
                            }.bind(null, n)).catch(function (t) {
                                i.reject(t)
                            }), i.promise
                        }
                    }, function (t, e, n) {
                        var r = n(0), i = n(13), o = n(14)(), s = n(65), a = "a.periscope-on-air",
                            u = /^https?:\/\/(?:www\.)?(?:periscope|pscp)\.tv\/@?([a-zA-Z0-9_]+)\/?$/i;
                        t.exports = function (t) {
                            return o(t, a).map(function (t) {
                                return s(function (t) {
                                    var e = i(t), n = t.getAttribute("href"), o = t.getAttribute("data-size"),
                                        s = u.exec(n)[1];
                                    return r.aug(e, {username: s, size: o})
                                }(t), t.parentNode, t)
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(2);
                        t.exports = function (t, e) {
                            var i = new r;
                            return n.e(5).then(function (r) {
                                var o;
                                try {
                                    o = n(89), i.resolve(new o(t, e))
                                } catch (t) {
                                    i.reject(t)
                                }
                            }.bind(null, n)).catch(function (t) {
                                i.reject(t)
                            }), i.promise
                        }
                    }, function (t, e, n) {
                        var r = n(5), i = n(0), o = n(66), s = n(13), a = n(14)(), u = n(67), c = n(3), d = n(12),
                            l = "a.twitter-timeline,div.twitter-timeline,a.twitter-grid",
                            f = "Embedded Search timelines have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295.",
                            h = "You may have been affected by an update to settings in embedded timelines. See https://twittercommunity.com/t/deprecating-widget-settings/102295.",
                            p = "Embedded grids have been deprecated and will now render as timelines. Please update your embed code to use the twitter-timeline class. More info: https://twittercommunity.com/t/update-on-the-embedded-grid-display-type/119564.";
                        t.exports = function (t) {
                            return a(t, l).map(function (t) {
                                return u(function (t) {
                                    var e = s(t), n = t.getAttribute("data-show-replies"), a = {
                                        isPreconfigured: !!t.getAttribute("data-widget-id"),
                                        chrome: t.getAttribute("data-chrome"),
                                        tweetLimit: t.getAttribute("data-tweet-limit") || t.getAttribute("data-limit"),
                                        ariaLive: t.getAttribute("data-aria-polite"),
                                        theme: t.getAttribute("data-theme"),
                                        linkColor: t.getAttribute("data-link-color"),
                                        borderColor: t.getAttribute("data-border-color"),
                                        showReplies: n ? r.asBoolean(n) : null,
                                        profileScreenName: t.getAttribute("data-screen-name"),
                                        profileUserId: t.getAttribute("data-user-id"),
                                        favoritesScreenName: t.getAttribute("data-favorites-screen-name"),
                                        favoritesUserId: t.getAttribute("data-favorites-user-id"),
                                        likesScreenName: t.getAttribute("data-likes-screen-name"),
                                        likesUserId: t.getAttribute("data-likes-user-id"),
                                        listOwnerScreenName: t.getAttribute("data-list-owner-screen-name"),
                                        listOwnerUserId: t.getAttribute("data-list-owner-id"),
                                        listId: t.getAttribute("data-list-id"),
                                        listSlug: t.getAttribute("data-list-slug"),
                                        customTimelineId: t.getAttribute("data-custom-timeline-id"),
                                        staticContent: t.getAttribute("data-static-content"),
                                        url: t.href
                                    };
                                    return a.isPreconfigured && (c.isSearchUrl(a.url) ? d.publicError(f, t) : d.publicLog(h, t)), "twitter-grid" === t.className && d.publicLog(p, t), (a = i.aug(a, e)).dataSource = o(a), a.id = a.dataSource && a.dataSource.id, a
                                }(t), t.parentNode, t)
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(27);
                        t.exports = r.build([n(28), n(139)])
                    }, function (t, e, n) {
                        var r = n(0), i = n(138);
                        t.exports = function (t) {
                            return "en" === t || r.contains(i, t)
                        }
                    }, function (t, e) {
                        t.exports = ["hi", "zh-cn", "fr", "zh-tw", "msa", "fil", "fi", "sv", "pl", "ja", "ko", "de", "it", "pt", "es", "ru", "id", "tr", "da", "no", "nl", "hu", "fa", "ar", "ur", "he", "th", "cs", "uk", "vi", "ro", "bn", "el", "en-gb", "gu", "kn", "mr", "ta", "bg", "ca", "hr", "sr", "sk"]
                    }, function (t, e, n) {
                        var r = n(3), i = n(0), o = n(19), s = "collection:";

                        function a(t, e) {
                            return r.collectionId(t) || e
                        }

                        t.exports = function (t) {
                            t.params({id: {}, url: {}}), t.overrideProperty("id", {
                                get: function () {
                                    var t = a(this.params.url, this.params.id);
                                    return s + t
                                }
                            }), t.overrideProperty("endpoint", {
                                get: function () {
                                    return o.timeline(["collection"])
                                }
                            }), t.around("queryParams", function (t) {
                                return i.aug(t(), {collection_id: a(this.params.url, this.params.id)})
                            }), t.before("initialize", function () {
                                if (!a(this.params.url, this.params.id)) throw new Error("one of url or id is required")
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(27);
                        t.exports = r.build([n(28), n(141)])
                    }, function (t, e, n) {
                        var r = n(3), i = n(0), o = n(19), s = "event:";

                        function a(t, e) {
                            return r.eventId(t) || e
                        }

                        t.exports = function (t) {
                            t.params({id: {}, url: {}}), t.overrideProperty("id", {
                                get: function () {
                                    var t = a(this.params.url, this.params.id);
                                    return s + t
                                }
                            }), t.overrideProperty("endpoint", {
                                get: function () {
                                    return o.timeline(["event"])
                                }
                            }), t.around("queryParams", function (t) {
                                return i.aug(t(), {event_id: a(this.params.url, this.params.id)})
                            }), t.before("initialize", function () {
                                if (!a(this.params.url, this.params.id)) throw new Error("one of url or id is required")
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(27);
                        t.exports = r.build([n(28), n(143)])
                    }, function (t, e, n) {
                        var r = n(3), i = n(0), o = n(19), s = "likes:";

                        function a(t) {
                            return r.likesScreenName(t.url) || t.screenName
                        }

                        t.exports = function (t) {
                            t.params({
                                screenName: {},
                                userId: {},
                                url: {}
                            }), t.overrideProperty("id", {
                                get: function () {
                                    var t = a(this.params) || this.params.userId;
                                    return s + t
                                }
                            }), t.overrideProperty("endpoint", {
                                get: function () {
                                    return o.timeline(["likes"])
                                }
                            }), t.define("_getLikesQueryParam", function () {
                                var t = a(this.params);
                                return t ? {screen_name: t} : {user_id: this.params.userId}
                            }), t.around("queryParams", function (t) {
                                return i.aug(t(), this._getLikesQueryParam())
                            }), t.before("initialize", function () {
                                if (!a(this.params) && !this.params.userId) throw new Error("screen name or user id is required")
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(27);
                        t.exports = r.build([n(28), n(145)])
                    }, function (t, e, n) {
                        var r = n(3), i = n(0), o = n(19), s = "list:";

                        function a(t) {
                            var e = r.listScreenNameAndSlug(t.url) || t;
                            return i.compact({
                                screen_name: e.ownerScreenName,
                                user_id: e.ownerUserId,
                                list_slug: e.slug
                            })
                        }

                        t.exports = function (t) {
                            t.params({
                                id: {},
                                ownerScreenName: {},
                                ownerUserId: {},
                                slug: {},
                                url: {}
                            }), t.overrideProperty("id", {
                                get: function () {
                                    var t, e, n;
                                    return this.params.id ? s + this.params.id : (e = (t = a(this.params)) && t.list_slug.replace(/-/g, "_"), n = t && (t.screen_name || t.user_id), s + (n + ":") + e)
                                }
                            }), t.overrideProperty("endpoint", {
                                get: function () {
                                    return o.timeline(["list"])
                                }
                            }), t.define("_getListQueryParam", function () {
                                return this.params.id ? {list_id: this.params.id} : a(this.params)
                            }), t.around("queryParams", function (t) {
                                return i.aug(t(), this._getListQueryParam())
                            }), t.before("initialize", function () {
                                var t = a(this.params);
                                if (i.isEmptyObject(t) && !this.params.id) throw new Error("qualified slug or list id required")
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(27);
                        t.exports = r.build([n(28), n(147)])
                    }, function (t, e, n) {
                        var r = n(3), i = n(5), o = n(0), s = n(19), a = "profile:";

                        function u(t, e) {
                            return r.screenName(t) || e
                        }

                        t.exports = function (t) {
                            t.params({
                                showReplies: {fallback: !1, transform: i.asBoolean},
                                screenName: {},
                                userId: {},
                                url: {}
                            }), t.overrideProperty("id", {
                                get: function () {
                                    var t = u(this.params.url, this.params.screenName);
                                    return a + (t || this.params.userId)
                                }
                            }), t.overrideProperty("endpoint", {
                                get: function () {
                                    return s.timeline(["profile"])
                                }
                            }), t.define("_getProfileQueryParam", function () {
                                var t = u(this.params.url, this.params.screenName),
                                    e = t ? {screen_name: t} : {user_id: this.params.userId};
                                return o.aug(e, {with_replies: this.params.showReplies ? "true" : "false"})
                            }), t.around("queryParams", function (t) {
                                return o.aug(t(), this._getProfileQueryParam())
                            }), t.before("initialize", function () {
                                if (!u(this.params.url, this.params.screenName) && !this.params.userId) throw new Error("screen name or user id is required")
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(2);
                        t.exports = function (t, e) {
                            var i = new r;
                            return Promise.all([n.e(0), n.e(6)]).then(function (r) {
                                var o;
                                try {
                                    o = n(90), i.resolve(new o(t, e))
                                } catch (t) {
                                    i.reject(t)
                                }
                            }.bind(null, n)).catch(function (t) {
                                i.reject(t)
                            }), i.promise
                        }
                    }, function (t, e, n) {
                        var r = n(10), i = n(3), o = n(0), s = n(13), a = n(14)(), u = n(68),
                            c = "blockquote.twitter-tweet, blockquote.twitter-video",
                            d = /\btw-align-(left|right|center)\b/;
                        t.exports = function (t, e) {
                            return a(t, c).map(function (t) {
                                return u(function (t) {
                                    var e = s(t), n = t.getElementsByTagName("A"), a = n && n[n.length - 1],
                                        u = a && i.status(a.href), c = t.getAttribute("data-conversation"),
                                        l = "none" == c || "hidden" == c || r.present(t, "tw-hide-thread"),
                                        f = t.getAttribute("data-cards"),
                                        h = "none" == f || "hidden" == f || r.present(t, "tw-hide-media"),
                                        p = t.getAttribute("data-align") || t.getAttribute("align"),
                                        m = t.getAttribute("data-link-color"), v = t.getAttribute("data-theme");
                                    return !p && d.test(t.className) && (p = RegExp.$1), o.aug(e, {
                                        tweetId: u,
                                        hideThread: l,
                                        hideCard: h,
                                        align: p,
                                        linkColor: m,
                                        theme: v,
                                        id: u
                                    })
                                }(t), t.parentNode, t, e)
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(2);
                        t.exports = function (t, e) {
                            var i = new r;
                            return Promise.all([n.e(0), n.e(7)]).then(function (r) {
                                var o;
                                try {
                                    o = n(91), i.resolve(new o(t, e))
                                } catch (t) {
                                    i.reject(t)
                                }
                            }.bind(null, n)).catch(function (t) {
                                i.reject(t)
                            }), i.promise
                        }
                    }, function (t, e, n) {
                        var r = n(2);
                        t.exports = function (t, e) {
                            var i = new r;
                            return Promise.all([n.e(0), n.e(7)]).then(function (r) {
                                var o;
                                try {
                                    o = n(92), i.resolve(new o(t, e))
                                } catch (t) {
                                    i.reject(t)
                                }
                            }.bind(null, n)).catch(function (t) {
                                i.reject(t)
                            }), i.promise
                        }
                    }, function (t, e, n) {
                        var r = n(10), i = n(0), o = n(13), s = n(14)(), a = n(69), u = n(5),
                            c = "a.twitter-share-button, a.twitter-mention-button, a.twitter-hashtag-button",
                            d = "twitter-hashtag-button", l = "twitter-mention-button";
                        t.exports = function (t) {
                            return s(t, c).map(function (t) {
                                return a(function (t) {
                                    var e = o(t), n = {
                                        screenName: t.getAttribute("data-button-screen-name"),
                                        text: t.getAttribute("data-text"),
                                        type: t.getAttribute("data-type"),
                                        size: t.getAttribute("data-size"),
                                        url: t.getAttribute("data-url"),
                                        hashtags: t.getAttribute("data-hashtags"),
                                        via: t.getAttribute("data-via"),
                                        buttonHashtag: t.getAttribute("data-button-hashtag")
                                    };
                                    return i.forIn(n, function (t, n) {
                                        var r = e[t];
                                        e[t] = u.hasValue(r) ? r : n
                                    }), e.screenName = e.screenName || e.screen_name, e.buttonHashtag = e.buttonHashtag || e.button_hashtag || e.hashtag, r.present(t, d) && (e.type = "hashtag"), r.present(t, l) && (e.type = "mention"), e
                                }(t), t.parentNode, t)
                            })
                        }
                    }, function (t, e, n) {
                        var r = n(2);
                        t.exports = function (t, e) {
                            var i = new r;
                            return n.e(3).then(function (r) {
                                var o;
                                try {
                                    o = n(93), i.resolve(new o(t, e))
                                } catch (t) {
                                    i.reject(t)
                                }
                            }.bind(null, n)).catch(function (t) {
                                i.reject(t)
                            }), i.promise
                        }
                    }, function (t, e, n) {
                        var r = n(0);
                        t.exports = r.aug({}, n(155), n(156), n(157), n(158), n(159), n(160), n(161))
                    }, function (t, e, n) {
                        var r = n(60), i = n(17)(["userId"], {}, r);
                        t.exports = {createDMButton: i}
                    }, function (t, e, n) {
                        var r = n(63), i = n(17)(["screenName"], {}, r);
                        t.exports = {createFollowButton: i}
                    }, function (t, e, n) {
                        var r = n(64), i = n(17)(["momentId"], {}, r);
                        t.exports = {createMoment: i}
                    }, function (t, e, n) {
                        var r = n(65), i = n(17)(["username"], {}, r);
                        t.exports = {createPeriscopeOnAirButton: i}
                    }, function (t, e, n) {
                        var r = n(8), i = n(12), o = n(3), s = n(0), a = n(5), u = n(66), c = n(67),
                            d = n(17)([], {}, c), l = n(6),
                            f = "Embedded grids have been deprecated. Please use twttr.widgets.createTimeline instead. More info: https://twittercommunity.com/t/update-on-the-embedded-grid-display-type/119564.",
                            h = {
                                createTimeline: p, createGridFromCollection: function (t) {
                                    var e = s.toRealArray(arguments).slice(1), n = {sourceType: "collection", id: t};
                                    return e.unshift(n), i.publicLog(f), p.apply(this, e)
                                }
                            };

                        function p(t) {
                            var e, n = s.toRealArray(arguments).slice(1);
                            return a.isString(t) || a.isNumber(t) ? l.reject("Embedded timelines with widget settings have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295.") : s.isObject(t) ? (t = t || {}, n.forEach(function (t) {
                                s.isType("object", t) && function (t) {
                                    t.ariaLive = t.ariaPolite
                                }(e = t)
                            }), e || (e = {}, n.push(e)), t.lang = e.lang, t.tweetLimit = e.tweetLimit, t.showReplies = e.showReplies, e.dataSource = u(t), d.apply(this, n)) : l.reject("data source must be an object.")
                        }

                        o.isTwitterURL(r.href) && (h.createTimelinePreview = function (t, e, n) {
                            var r = {previewParams: t, useLegacyDefaults: !0, isPreviewTimeline: !0};
                            return r.dataSource = u(r), d(e, r, n)
                        }), t.exports = h
                    }, function (t, e, n) {
                        var r, i = n(0), o = n(68), s = n(17), a = (r = s(["tweetId"], {}, o), function () {
                            return i.toRealArray(arguments).slice(1).forEach(function (t) {
                                i.isType("object", t) && (t.hideCard = "none" == t.cards || "hidden" == t.cards, t.hideThread = "none" == t.conversation || "hidden" == t.conversation)
                            }), r.apply(this, arguments)
                        });
                        t.exports = {createTweet: a, createTweetEmbed: a, createVideo: a}
                    }, function (t, e, n) {
                        var r = n(0), i = n(69), o = n(17), s = o(["url"], {type: "share"}, i),
                            a = o(["buttonHashtag"], {type: "hashtag"}, i), u = o(["screenName"], {type: "mention"}, i);

                        function c(t) {
                            return function () {
                                return r.toRealArray(arguments).slice(1).forEach(function (t) {
                                    r.isType("object", t) && (t.screenName = t.screenName || t.screen_name, t.buttonHashtag = t.buttonHashtag || t.button_hashtag || t.hashtag)
                                }), t.apply(this, arguments)
                            }
                        }

                        t.exports = {createShareButton: c(s), createHashtagButton: c(a), createMentionButton: c(u)}
                    }, function (t, e, n) {
                        var r, i, o, s = n(4), a = n(1), u = 0, c = [], d = s.createElement("a");

                        function l() {
                            var t, e;
                            for (u = 1, t = 0, e = c.length; t < e; t++) c[t]()
                        }

                        /^loade|c/.test(s.readyState) && (u = 1), s.addEventListener && s.addEventListener("DOMContentLoaded", i = function () {
                            s.removeEventListener("DOMContentLoaded", i, !1), l()
                        }, !1), d.doScroll && s.attachEvent("onreadystatechange", r = function () {
                            /^c/.test(s.readyState) && (s.detachEvent("onreadystatechange", r), l())
                        }), o = d.doScroll ? function (t) {
                            a.self != a.top ? u ? t() : c.push(t) : function () {
                                try {
                                    d.doScroll("left")
                                } catch (e) {
                                    return setTimeout(function () {
                                        o(t)
                                    }, 50)
                                }
                                t()
                            }()
                        } : function (t) {
                            u ? t() : c.push(t)
                        }, t.exports = o
                    }, function (t, e, n) {
                        var r = n(44), i = n(9);
                        t.exports = function () {
                            i.set("buildVersion", r.version)
                        }
                    }, function (t, e, n) {
                        n(165), n(85), n(168)
                    }, function (t, e, n) {
                        var r = n(166), i = n(29), o = n(70), s = new r, a = function (t) {
                            t.widgets && 1 === t.widgets.length && (s.start(), i.emitter.unbind(i.ALL_WIDGETS_RENDER_START, a))
                        }, u = function (t) {
                            var e;
                            t.widgets && 1 === t.widgets.length && (e = t.widgets[0], s.end(), e.dataset && e.dataset.tweetId && o({
                                duration: s.duration(),
                                namespace: {element: "tweet", action: "render"},
                                widgetIds: [e.dataset.tweetId]
                            })), i.emitter.unbind(i.ALL_WIDGETS_RENDER_END, u)
                        };
                        i.emitter.bind(i.ALL_WIDGETS_RENDER_START, a), i.emitter.bind(i.ALL_WIDGETS_RENDER_END, u)
                    }, function (t, e, n) {
                        var r = n(167);

                        function i() {
                        }

                        i.prototype.start = function () {
                            this._startTime = r()
                        }, i.prototype.end = function () {
                            this._duration = r() - this._startTime
                        }, i.prototype.duration = function () {
                            return this._duration
                        }, t.exports = i
                    }, function (t, e, n) {
                        var r = n(1);
                        t.exports = function () {
                            return r.performance && r.performance.now ? r.performance.now() : Date.now()
                        }
                    }, function (t, e, n) {
                        var r = n(29), i = n(70), o = n(169), s = n(3), a = n(1), u = n(0), c = n(21), d = n(62);

                        function l(t) {
                            return t.performance.getEntriesByType("resource").filter(function (t) {
                                return s.isTwimgURL(t.name) || s.isTwitterURL(t.name)
                            }).reduce(function (t, e) {
                                return t[e.name] = e.duration, t
                            }, {})
                        }

                        r.emitter.bind(r.ALL_WIDGETS_AND_IMAGES_LOADED, function (t) {
                            var e, n, r = [];
                            c.hasPerformanceInformation() && (e = l(a), d.isSupported() || (r = function (t) {
                                return t.reduce(function (t, e) {
                                    return u.aug(t, l(e.contentDocument.defaultView))
                                }, {})
                            }(t)), n = u.aug({}, e, r), Object.keys(o).forEach(function (t) {
                                !function (t, e, n) {
                                    var r = Object.keys(t).reduce(function (e, r) {
                                        return n(r) ? e + t[r] : e
                                    }, 0);
                                    i({duration: r, namespace: {element: e, action: "resource"}})
                                }(n, t, o[t])
                            }))
                        })
                    }, function (t, e, n) {
                        var r = n(3), i = {
                            all: function () {
                                return !0
                            }, image: function (t) {
                                return r.isTwimgURL(t)
                            }, settings: function (t) {
                                return r.isSettingsURL(t)
                            }, widget_iframe: function (t) {
                                return r.isWidgetIframeURL(t)
                            }
                        };
                        t.exports = i
                    }])));
                }
            });


            //Runs every time new tweets are loaded
            function ctfScripts($ctf) {
                $ctf.addClass('ctf_is_initialized');
                //Loop through each newly loaded tweet
                $ctf.find('.ctf-item.ctf-new').each(function () {

                    var $ctfItem = $(this),
                        $ctfTextMedia = $ctfItem.find('.ctf-tweet-text-media-wrap'),
                        $ctfText = $ctfItem.find('.ctf-tweet-text').remove('.ctf-tweet-text-media-wrap'),
                        ctfTextStr = ' ' + $ctfText.html();

                    if ($ctf.attr('data-ctfdisablelinks') != 'true' && typeof ctfTextStr !== 'undefined' && !$ctf.find('.ctf-tweet-text-link').length) {

                        var ctfLinkColor = $ctf.attr('data-ctflinktextcolor'),
                            ctfLinkColorHex = '';
                        if (ctfLinkColor) ctfLinkColorHex = ctfLinkColor.replace(';', '').split("#")[1];

                        //Link URLs
                        window.ctfLinkify = (function () {
                            var k = "[a-z\\d.-]+://",
                                h = "(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])",
                                c = "(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+",
                                n = "(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)",
                                f = "(?:" + c + n + "|" + h + ")", o = "(?:[;/][^#?<>\\s]*)?",
                                e = "(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?", d = "\\b" + k + "[^<>\\s]+",
                                a = "\\b" + f + o + e + "(?!\\w)", m = "mailto:",
                                j = "(?:" + m + ")?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" + f + e + "(?!\\w)",
                                l = new RegExp("(?:" + d + "|" + a + "|" + j + ")", "ig"), g = new RegExp("^" + k, "i"),
                                b = {"'": "`", ">": "<", ")": "(", "]": "[", "}": "{", "B;": "B+", "b:": "b9"}, i = {
                                    callback: function (q, p) {
                                        return p ? '<a href="' + p + '" title="' + p + '" target="_blank">' + q + "</a>" : q
                                    },
                                    punct_regexp: /(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/
                                };
                            return function (u, z) {
                                z = z || {};
                                var w, v, A, p, x = "", t = [], s, E, C, y, q, D, B, r;
                                for (v in i) {
                                    if (z[v] === undefined) {
                                        z[v] = i[v]
                                    }
                                }
                                while (w = l.exec(u)) {
                                    A = w[0];
                                    E = l.lastIndex;
                                    C = E - A.length;
                                    if (/[\/:]/.test(u.charAt(C - 1))) {
                                        continue
                                    }
                                    do {
                                        y = A;
                                        r = A.substr(-1);
                                        B = b[r];
                                        if (B) {
                                            q = A.match(new RegExp("\\" + B + "(?!$)", "g"));
                                            D = A.match(new RegExp("\\" + r, "g"));
                                            if ((q ? q.length : 0) < (D ? D.length : 0)) {
                                                A = A.substr(0, A.length - 1);
                                                E--
                                            }
                                        }
                                        if (z.punct_regexp) {
                                            A = A.replace(z.punct_regexp, function (F) {
                                                E -= F.length;
                                                return ""
                                            })
                                        }
                                    } while (A.length && A !== y);
                                    p = A;
                                    if (!g.test(p)) {
                                        p = (p.indexOf("@") !== -1 ? (!p.indexOf(m) ? "" : m) : !p.indexOf("irc.") ? "irc://" : !p.indexOf("ftp.") ? "ftp://" : "http://") + p
                                    }
                                    if (s != C) {
                                        t.push([u.slice(s, C)]);
                                        s = E
                                    }
                                    t.push([A, p])
                                }
                                t.push([u.substr(s)]);
                                for (v = 0; v < t.length; v++) {
                                    x += z.callback.apply(window, t[v])
                                }
                                return x || u
                            }
                        })();
                        if (!$ctfText.find('a').length) {
                            $ctfText.find('.emoji').each(function() {
                                $(this).replaceWith($(this).attr('alt'));
                            });
                            ctfTextStr = ' ' +$ctfText.html();
                            ctfTextStr = ctfLinkify(ctfTextStr);
                        }
                        //Link hashtags
                        var ctfHashRegex = /(^|\s)#(\w*[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]+\w*)/gi;

                        function ctfHashReplacer(hash) {
                            //Remove white space at beginning of hash
                            var replacementString = jQuery.trim(hash);
                            //If the hash is a hex code then don't replace it with a link as it's likely in the style attr, eg: "color: #ff0000"
                            if (/^#[0-9A-F]{6}$/i.test(replacementString)) {
                                return replacementString;
                            } else {
                                return ' <a href="https://twitter.com/hashtag/' + replacementString.substring(1) + '" target="_blank" rel="nofollow">' + replacementString + '</a>';
                            }
                        }

                        //Replace hashtags in text
                        if (ctfTextStr.length > 0) {
                            //Add a space after all <br> tags so that #hashtags immediately after them are also converted to hashtag links. Without the space they aren't captured by the regex.
                            ctfTextStr = ctfTextStr.replace(/<br>/g, "<br> ");
                            ctfTextStr = ctfTextStr.replace(ctfHashRegex, ctfHashReplacer);
                        }

                        //Link @tags
                        function ctfReplaceTags(tag) {
                            var replacementString = jQuery.trim(tag);
                            return ' <a href="https://twitter.com/' + replacementString.substring(1) + '" target="_blank" rel="nofollow">' + replacementString + '</a>';
                        }

                        var tagRegex = /[\s][@]+[A-Za-z0-9-_]+/g;
                        ctfTextStr = ctfTextStr.replace(tagRegex, ctfReplaceTags);


                        //Replace text with linked version
                        $ctfText.html(ctfTextStr.trim());
                        $ctfText.append($ctfTextMedia);

                        //Add link color
                        $ctfText.find('a').css('color', '#' + ctfLinkColorHex);
                        $ctfTextMedia.css('color', '#' + ctfLinkColorHex);

                    } // End "ctfdata-disablelinks" check

                    // shorten long urls in tweets
                    $ctfItem.find('.ctf-tweet-text a').each(function () {
                        if (jQuery(this).text().indexOf('http') > -1 && jQuery(this).text().length > 63) {
                            jQuery(this).text(jQuery(this).text().substring(0, 60) + '...');
                        }
                    });

                }); // End .ctfItem loop

                //Change color of retweet icon to match text
                // $ctf.find('.ctf-retweet-icon').css({'background' : $ctf.find('.ctf-tweet-text a').css('color')}); //This doesn't work well if the link color is set to white as the default color of the icon text is also white

                //Change colors of some items to match tweet text
                $ctf.find('.ctf-author-name, .ctf-tweet-date, .ctf-author-screenname, .ctf-twitterlink, .ctf-author-box-link, .ctf-retweet-text, .ctf-quoted-tweet').css('color', $ctf.find('.ctf-tweet-text').css('color'));

                //Set the line height of the twitter link to match the icons so that it's centered vertically
                var $ctfIconFirst = $ctf.find('.ctf-tweet-actions a').first();
                $ctf.find('.ctf-twitterlink').css('line-height', $ctfIconFirst.height() + 'px');

                //Adjust icon number font size to be slightly smaller than the icon size
                if ($ctfIconFirst.length) {
                    var ctfIconSize = parseInt($ctfIconFirst.css('font-size').replace('px', ''));
                    $ctf.find('.ctf-action-count').css({
                        'display': 'block',
                        'font-size': (ctfIconSize - 4) + 'px',
                        'line-height': $ctfIconFirst.height() + 'px'
                    });
                }

                //Header profile pic hover
                $ctf.find('.ctf-header .ctf-header-link').hover(function () {
                    $ctf.find('.ctf-header .ctf-header-img-hover').fadeIn(200);
                }, function () {
                    $ctf.find('.ctf-header .ctf-header-img-hover').stop().fadeOut(600);
                });

                $ctf.find('.ctf_more').unbind('click').bind('click', function (e) {
                    e.preventDefault();
                    $(this).hide().next('.ctf_remaining').show();
                });

                // Call Custom JS if it exists
                if (typeof ctf_custom_js == 'function') ctf_custom_js($);

                $ctf.find('.ctf-author-box-link p:empty').remove();
            } // end ctfScripts()

            function ctfLoadTweets(lastIDData, shortcodeData, $ctf, $ctfMore, numNeeded, persistentIndex) {

                //Display loader
                $ctfMore.addClass('ctf-loading').append('<div class="ctf-loader"></div>');
                $ctfMore.find('.ctf-loader').css('background-color', $ctfMore.css('color'));

                jQuery.ajax({
                    url: ctf.ajax_url,
                    type: 'post',
                    data: {
                        action: 'ctf_get_more_posts',
                        last_id_data: lastIDData,
                        shortcode_data: shortcodeData,
                        num_needed: numNeeded,
                        persistent_index: persistentIndex
                    },
                    success: function (data) {
                        if (lastIDData !== '') {
                            // appends the html echoed out in ctf_get_new_posts() to the last post element
                            if (data.indexOf('<meta charset') == -1) {
                                $ctf.find('.ctf-item').removeClass('ctf-new').last().after(data);
                            }

                            if ($ctf.find('.ctf-out-of-tweets').length) {
                                $ctfMore.hide();
                                //Fade in the no more tweets message
                                $ctf.find('.ctf-out-of-tweets p').eq(0).fadeIn().end().eq(1).delay(500).fadeIn();
                            }
                        } else {
                            $ctf.find('.ctf-tweets').append(data);
                        }


                        //Remove loader
                        $ctfMore.removeClass('ctf-loading').find('.ctf-loader').remove();

                        //Re-run JS code
                        ctfScripts($ctf);

                    }
                }); // ajax call
            }

            $('.ctf').each(function () {

                var $ctf = $(this),
                    numNeeded = parseInt($ctf.attr('data-ctfneeded'));

                //Adds a class if the feed is in a narrow column or on mobile so we can make styling adjustments
                if ($ctf.width() <= 480) $ctf.addClass('ctf-narrow');
                if ($ctf.width() <= 320) $ctf.addClass('ctf-super-narrow');

                if (!$(this).hasClass('ctf_is_initialized')) {
                    ctfScripts($ctf);
                }

                // delay added to prevent strange issue with ajax themes returning the entire page
                setTimeout(function () {
                    if (numNeeded > 0) {
                        var $ctfMore = $ctf.find('.ctf-more'),
                            lastIDData = $ctf.find('.ctf-item').last().attr('id'),
                            persistentIndex = $ctf.find('.ctf-item').length,
                            shortcodeData = $ctf.attr('data-ctfshortcode');

                        ctfLoadTweets(lastIDData, shortcodeData, $ctf, $ctfMore, numNeeded, persistentIndex);
                    }
                }, 500);

                // add the load more button and input to simulate a dynamic json file call
                $ctf.find('.ctf-more').on('click', function () {
                    // read the json that is in the ctf-shortcode-data that contains all of the shortcode arguments
                    var $ctfMore = $(this),
                        lastIDData = $ctf.find('.ctf-item').last().attr('id'),
                        persistentIndex = $ctf.find('.ctf-item').length,
                        shortcodeData = $ctf.attr('data-ctfshortcode');

                    ctfLoadTweets(lastIDData, shortcodeData, $ctf, $ctfMore, 0, persistentIndex);

                });

                $ctf.find('.ctf-author-box-link p:empty').remove();
            }); // end .cff each loop
        }

        jQuery(document).ready(function($) {
            ctf_init();
        });
    })(jQuery);


} //End ctf_js_exists check