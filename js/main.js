jQuery(document).ready(function(e) {
    function i() {
        var e = window,
            i = "inner";
        return "innerWidth" in window || (i = "client", e = document.documentElement || document.body), {
            width: e[i + "Width"],
            height: e[i + "Height"]
        }
    }

    function t() {
        var e = i().width;
        768 >= e && !T.hasClass("mobile") ? T.addClass("mobile") : e > 768 && T.hasClass("mobile") && T.removeClass("mobile")
    }

    function a() {
        var e = x,
            i = e.data("height");
        if (e.hasClass("full-height")) {
            var t = w.outerHeight(!0);
            e.css(T.hasClass("mobile") ? {
                height: b.height() - t
            } : {
                height: b.height()
            })
        } else e.css({
            height: i + "em"
        })
    }

    function s() {
        var i = $;
        i.append(H), i.addClass(function() {
            return i.find(".intro-item").length > 1 ? "big-slider" : ""
        }), i.waitForImages({
            finished: function() {
                if (e(".landing-slider").remove(), i.hasClass("big-slider")) {
                    var t = i.data("autoplay"),
                        a = i.data("navigation"),
                        s = i.data("pagination"),
                        o = i.data("transition");
                    i.owlCarousel({
                        singleItem: !0,
                        autoPlay: t || !1,
                        transitionStyle: o || !1,
                        stopOnHover: !0,
                        responsiveBaseWidth: ".slider",
                        responsiveRefreshRate: 0,
                        addClassActive: !0,
                        navigation: a || !1,
                        navigationText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
                        pagination: s || !1,
                        rewindSpeed: 2e3
                    })
                }
                i.removeClass("preload"), i.hasClass("darken") && I.append(B), x.length && i.hasClass("more-button") && "true" !== i.attr("data-pagination") && (i.append(R), r())
            },
            waitForAll: !0
        })
    }

    function r() {
        e("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                var i = e(this.hash);
                if (i = i.length ? i : e("[name=" + this.hash.slice(1) + "]"), i.length) return e("html,body").animate({
                    scrollTop: i.offset().top
                }, 500), !1
            }
        })
    }

    function o() {
        if (x.length) {
            var i = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (i) T.addClass("no-parallax");
            else if (T.hasClass("mobile") || T.hasClass("no-parallax")) {
                skrollr.init().destroy(), _.css({
                    marginTop: "0px"
                });
                var t, a, s = e("header, #intro"),
                    r = s[0].attributes;
                for (a = r.length - 1; a >= 0; --a) t = r[a].nodeName, "data-" === t.substring(0, 5) && s.removeAttr(t);
                s.css({
                    "-webkit-transform": "",
                    "-moz-transform": "",
                    transform: "",
                    backgroundPosition: ""
                }).removeClass("skrollable-after"), S.each(function() {
                    var i = e(this);
                    i.css(!T.hasClass("mobile") && T.hasClass("no-parallax") ? {
                        top: (x.height() + C - i.outerHeight()) / 2
                    } : {
                        top: (x.height() - i.outerHeight()) / 2
                    })
                })
            } else $.attr("data-anchor-target", "#intro-wrap"), $.attr("data-top", "transform:translateY(0px);"), w.attr("data-anchor-target", "#intro-wrap"), w.attr("data-top", "transform:translateY(0px);"), i ? ($.attr("data-top-bottom", "transform:translateY(0px);"), w.attr("data-top-bottom", "transform:translateY(0px);"), w.addClass("transition")) : ($.attr("data-top-bottom", "transform:translateY(-" + x.height() / 4 + "px);"), w.attr("data-top-bottom", "transform:translateY(-" + x.height() / 4 + "px);")), animDone = !1, skrollr.init({
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function() {
                    return !1
                },
                render: function() {
                    w.hasClass("skrollable-after") ? animDone || (animDone = !0, w.addClass("fixed-header").css({
                        display: "none"
                    }).fadeIn(300)) : (animDone = !1, w.removeClass("fixed-header"))
                }
            }).refresh(), S.each(function() {
                var i = e(this);
                i.css({
                    top: (x.height() + C / 2 - i.outerHeight()) / 2
                })
            })
        } else _.css(T.hasClass("mobile") ? {
            marginTop: 0
        } : {
            marginTop: C + "px"
        })
    }

    function l() {
        var i = e(".overlay-content"),
            t = e(".blog-overlay");
        i.length && i.each(function() {
            var i = e(this),
                t = i.closest(".item").height(),
                a = i.height(),
                s = i.children(".post-type");
            PortfolioIconHeight = s.children("i").height(), a + 30 > t ? (i.children("p").css({
                visibility: "hidden"
            }), i.children("h2").css({
                visibility: "hidden"
            }), i.css({
                marginTop: (t - PortfolioIconHeight) / 2
            })) : (i.children("p").css({
                visibility: "visible"
            }), i.children("h2").css({
                visibility: "visible"
            }), i.css({
                marginTop: (t - a) / 2
            }))
        }), t.length && t.each(function() {
            var i = e(this),
                t = i.prev("img").height(),
                a = i.children("i"),
                s = a.height();
            a.css({
                top: (t - s) / 2
            })
        })
    }

    function n() {
        var i = parseInt(e(".grid-items").width()),
            t = i / 100 * 48,
            a = .75 * t,
            s = i / 100 * 22.05,
            r = .75 * s,
            o = a - r + .5;
        U.css(T.hasClass("mobile") ? {
            height: "auto"
        } : {
            height: o
        })
    }

    function f() {
        Z.each(function() {
            var i = e(this),
                t = i.prev(".filter-options"),
                a = i.find(".shuffle-sizer");
            i.append(P), i.waitForImages({
                finished: function() {
                    if (i.children(".landing-els").remove(), i.shuffle({
                            itemSelector: ".item",
                            sizer: a,
                            speed: 500,
                            easing: "ease-out"
                        }), t.length) {
                        var s = t.children();
                        s.on("click", function() {
                            var i = e(this),
                                a = t.next(Z),
                                s = i.hasClass("active"),
                                r = s ? "all" : i.data("group");
                            s || e(".filter-options .active").removeClass("active"), i.toggleClass("active"), a.shuffle("shuffle", r)
                        }), s = null
                    }
                    i.removeClass("preload"), l()
                },
                waitForAll: !0
            })
        })
    }

    function p() {
        V.css({
            top: (K.height() - V.outerHeight()) / 2
        })
    }

    function d() {
        ei.each(function() {
            var i = e(this);
            i.onScreen({
                doIn: function() {
                    var e = i.find(".count-number"),
                        t = i.find(".count-subject");
                    e.countTo({
                        onComplete: function() {
                            t.delay(100).addClass("subject-on"), e.removeClass("count-number").addClass("count-number-done")
                        }
                    })
                }
            })
        })
    }

    function y() {
        z.each(function() {
            var i = e(this),
                t = i.data("autoplay"),
                a = i.data("pagination"),
                s = i.data("transition"),
                r = i.data("autoheight");
            i.owlCarousel({
                singleItem: !0,
                autoPlay: t || !1,
                transitionStyle: s || !1,
                autoHeight: r || !1,
                stopOnHover: !0,
                responsiveBaseWidth: ".slider",
                responsiveRefreshRate: 0,
                addClassActive: !0,
                pagination: a || !1,
                rewindSpeed: 2e3
            })
        })
    }

    function c() {
        A.each(function() {
            var i = e(this),
                t = i.data("autoplay"),
                a = i.data("pagination"),
                s = i.data("transition"),
                r = i.data("autoheight");
            i.owlCarousel({
                singleItem: !0,
                autoPlay: t || !1,
                transitionStyle: s || !1,
                autoHeight: r || !1,
                stopOnHover: !0,
                responsiveBaseWidth: ".slider",
                responsiveRefreshRate: 0,
                addClassActive: !0,
                pagination: a || !1,
                rewindSpeed: 2e3
            })
        })
    }

    function u() {
        si.each(function() {
            var i = e(this),
                t = (i.find(".owl-item").outerHeight(!0), '<div class="mockup iphone-mockup black"></div>'),
                a = '<div class="mockup iphone-mockup white"></div>',
                s = '<div class="mockup iphone-mockup grey"></div>',
                r = '<div class="mockup ipad-mockup black"></div>',
                o = '<div class="mockup ipad-mockup white"></div>',
                l = '<div class="mockup ipad-mockup grey"></div>',
                n = '<div class="mockup desktop-mockup"></div>',
                f = i.parent(".row-content"),
                p = i.children("figure"),
                d = i.data("autoplay");
            p.owlCarousel(i.parent("div").hasClass("side-mockup") ? {
                singleItem: !0,
                autoPlay: d || !1,
                stopOnHover: !0,
                transitionStyle: "fade",
                responsiveBaseWidth: ".slider",
                responsiveRefreshRate: 0,
                addClassActive: !0,
                navigation: !1,
                pagination: !0,
                rewindSpeed: 2e3,
                mouseDrag: !1,
                touchDrag: !1
            } : {
                singleItem: !0,
                autoPlay: d || !1,
                stopOnHover: !0,
                responsiveBaseWidth: ".slider",
                responsiveRefreshRate: 0,
                addClassActive: !0,
                navigation: !0,
                navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                pagination: !1,
                rewindSpeed: 2e3
            }), i.hasClass("iphone-slider black") ? i.find(".owl-wrapper-outer").after(t) : i.hasClass("iphone-slider white") ? i.find(".owl-wrapper-outer").after(a) : i.hasClass("iphone-slider grey") ? i.find(".owl-wrapper-outer").after(s) : i.hasClass("ipad-slider black") ? i.find(".owl-wrapper-outer").after(r) : i.hasClass("ipad-slider white") ? i.find(".owl-wrapper-outer").after(o) : i.hasClass("ipad-slider grey") ? i.find(".owl-wrapper-outer").after(l) : i.hasClass("desktop-slider") && i.find(".owl-wrapper-outer").after(n), i.waitForImages({
                finished: function() {
                    i.fadeIn("slow")
                },
                waitForAll: !0
            }), f.css({
                "padding-left": "0",
                "padding-right": "0"
            })
        })
    }

    function m() {
        si.each(function() {
            var i = e(this).find(".owl-item").outerHeight(!0);
            e(this).find(".owl-prev, .owl-next").css("top", i / 2)
        })
    }

    function v() {
        ri.each(function() {
            var i = e(this),
                t = parseInt(i.find(".slider").height()),
                a = i.parent(".row-content"),
                s = parseInt(a.css("padding-top")),
                r = t + 2 * s + "px";
            T.hasClass("mobile") ? (i.css({
                position: "relative",
                left: "auto",
                right: "auto"
            }), a.css({
                position: "relative",
                "min-height": "0"
            })) : (i.hasClass("right-mockup") ? i.css({
                position: "absolute",
                left: "52%"
            }) : i.hasClass("left-mockup") && i.css({
                position: "absolute",
                right: "52%"
            }), a.css({
                position: "relative",
                "min-height": r
            }))
        })
    }

    function h() {
        oi.each(function() {
            var i = e(this),
                t = i.children("figure"),
                a = i.data("autoplay"),
                s = i.data("autoheight");
            t.owlCarousel({
                singleItem: !0,
                autoHeight: s || !1,
                autoPlay: a || !1,
                transitionStyle: "fade",
                stopOnHover: !0,
                responsiveBaseWidth: ".slider",
                responsiveRefreshRate: 0,
                addClassActive: !0,
                navigation: !0,
                navigationText: ["<i class='icon  icon-arrow-up'></i>", "<i class='icon icon-arrow-down'></i>"],
                pagination: !1,
                rewindSpeed: 2e3
            }), i.fadeIn("slow")
        })
    }

    function g() {
        e(".map").each(function(i, t) {
            function a() {
                var e = $map.parent("#intro").height();
                $map.css({
                    height: e
                })
            }
            $map = e(t), $map_lat = $map.attr("data-mapLat"), $map_lon = $map.attr("data-mapLon"), $map_zoom = parseInt($map.attr("data-mapZoom")), $map_title = $map.attr("data-mapTitle"), $map_info = $map.attr("data-info"), $map_img = $map.attr("data-img"), $map_color = $map.attr("data-color"), $map_height = $map.attr("data-height");
            var s = new google.maps.LatLng($map_lat, $map_lon),
                r = {
                    scrollwheel: !1,
                    draggable: !1,
                    zoomControl: !1,
                    disableDoubleClickZoom: !0,
                    disableDefaultUI: !0,
                    zoom: $map_zoom,
                    center: s,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                },
                o = "#fd685b",
                l = "#fe8e84",
                n = "#fa6f57",
                f = "#fb9381",
                p = "#fecd5e",
                d = "#fedc8f",
                y = "#a1d26e",
                c = "#b9dd92",
                u = "#4fcead",
                m = "#7bdac2",
                v = "#4FC1E9",
                h = "#73d2f4",
                g = "#5D9CEC",
                b = "#86b5f1",
                T = "#ab94e9",
                w = "#c0afef",
                C = "#ea89bf",
                k = "#efa7cf",
                _ = "#E6E9ED",
                x = "#F5F7FA",
                $ = "#333333",
                I = "#F5F5F5",
                S = "#434A54",
                z = "#5f656d";
            if ("red" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: o
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: l
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = o;
            if ("orange" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: n
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: f
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = n;
            if ("yellow" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: p
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: d
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = p;
            if ("green" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: y
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: c
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = y;
            if ("mint" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: u
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: m
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = u;
            if ("aqua" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: v
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: h
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = v;
            if ("blue" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: g
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: b
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = g;
            if ("purple" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: T
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: w
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = T;
            if ("pink" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: C
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: k
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = C;
            if ("white" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: _
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: x
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = "#333";
            if ("grey" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: $
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: I
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = "#333";
            if ("dark-grey" == $map_color) var A = [{
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        color: S
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        color: z
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
                H = "#333";
            if ("invert" == $map_color) var A = [{
                    stylers: [{
                        invert_lightness: "true"
                    }, {
                        hue: "0xffbb00"
                    }, {
                        saturation: "-100"
                    }, {
                        lightness: "15"
                    }]
                }],
                H = "#333";
            var P = new google.maps.StyledMapType(A, {
                    name: "Styled Map"
                }),
                D = new google.maps.Map($map[0], r),
                B = {
                    url: $map_img,
                    size: null,
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(26, 26),
                    scaledSize: new google.maps.Size(52, 52)
                },
                R = new google.maps.Marker({
                    position: s,
                    title: $map_title,
                    map: D,
                    icon: B
                });
            D.mapTypes.set("map_style", P), D.setMapTypeId("map_style");
            var F = '<div class="infobox-inner" style="color: ' + H + ';">' + $map_info + "</div>",
                L = new InfoBox({
                    content: F,
                    disableAutoPan: !1,
                    maxWidth: 0,
                    zIndex: null,
                    boxStyle: {
                        width: "280px"
                    },
                    closeBoxURL: "",
                    pixelOffset: new google.maps.Size(-140, 40),
                    infoBoxClearance: new google.maps.Size(1, 1)
                });
            $map.parent("div").is("#intro") ? (a(), e(window).resize(a)) : $map.css({
                height: $map_height + "em"
            }), google.maps.event.addListener(R, "click", function() {
                L.open(D, R)
            }), L.open(D, R), google.maps.event.addDomListener(window, "resize", function() {
                var e = D.getCenter();
                google.maps.event.trigger(D, "resize"), D.setCenter(e)
            })
        })
    }
    var b = e(window),
        T = e("body"),
        w = e("header"),
        C = w.outerHeight(!0),
        k = e("nav"),
        _ = e("main"),
        x = e("#intro-wrap"),
        $ = e("#intro"),
        I = e(".intro-item"),
        S = $.find(".caption"),
        z = e(".testimonial-slider"),
        A = e(".custom-carousel"),
        H = '<div class="landing landing-slider"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>',
        P = '<div class="landing landing-els"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>',
        D = '<div class="landing landing-els lightbox"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>',
        B = '<div class="darkover"></div>',
        R = '<div class="more"><a href="#main"><i class="icon icon-arrow-down"></i></a></div>';
    t(), e(window).resize(t), $.length && (s(), a(), e(window).resize(a)), r(), x.length || w.addClass("fixed-header"), o(), e(window).resize(o);
    var F = e("#menu-toggle"),
        L = k.children("ul"),
        M = L.children("li:has(ul.sub-menu)"),
        O = e("ul.sub-menu"),
        W = O.children("li:has(ul.sub-menu)").children("a"),
        E = '<span class="sub-arrow"><i class="fa fa-chevron-down"></i></span>';
    M.addClass("parent").children("a").append(E), W.addClass("parent"), F.click(function() {
        return L.slideToggle(200), e(this).children("i").toggleClass("active"), !1
    }), e(window).resize(function() {
        T.hasClass("mobile") || (L.removeAttr("style"), F.children("i").removeClass("active"))
    });
    var Y = e(".page"),
        j = Y.find(".section"),
        q = j.filter(":odd");
    T.hasClass("page") && j.length > 1 && q.addClass("greyish"), l(), e(window).on("load", l), e(window).on("resize", l);
    var U = e(".item.column.three .blog-excerpt");
    U.length && (n(), e(window).on("resize", n));
    var Z = e(".grid-items");
    Z.length && f();
    var N = e(".dribbble-items"),
        Q = function(i) {
            var t = "";
            e.each(i.shots, function(e, i) {
                t += '<div class="item column three"><figure>', t += '<img src="' + i.image_url + '" ', t += 'alt="' + i.title + '"></figure>', t += '<a class="overlay" href="' + i.url + '">', t += '<div class="overlay-content">', t += '<div class="post-type"><i class="fa fa-dribbble"></i></div>', t += '<p class="reset">' + i.views_count + " views</p>", t += '<p class="reset">' + i.likes_count + " likes</p>", t += "</div></a></div>"
            }), N.html(t).append(P);
            var a = e(".dribbble-items");
            a.find(".item:nth-of-type(4n)").addClass("last"), a.removeClass("preload"), a.children(".landing-els").remove(), l()
        };
    if (N.length) {
        var G = N.data("username"),
            J = N.data("elements");
        e.jribbble.getShotsByPlayerId(G, Q, {
            page: 1,
            per_page: J
        }), e(window).load(function() {
            l()
        })
    }

    var ei = e(".count-item");
    ei.length && d();
    var ii = e(".timeline"),
        ti = ii.find(".circle");
    ii.length && ti.each(function() {
        var i = e(this).parents("section").css("background-color");
        e(this).css({
            backgroundColor: i
        })
    }), z.length && y(), A.length && c();
    var ai = e(".animation");
    ai.length && ai.onScreen({
        toggleClass: !1,
        doIn: function() {
            e(this).addClass("onscreen")
        }
    });
    var si = e(".slider");
    si.length && !si.hasClass("gallery") && (u(), m(), e(window).resize(m));
    var ri = e(".side-mockup");
    ri.length && (v(), e(window).resize(v));
    var oi = e(".gallery.slider");
    oi.length && h();
    var li = e(".lightbox");
    if (li.length) {
        for (var ni = li, fi = 0; fi < ni.length; fi++) e(ni[fi]).find(".item a").attr("data-lightbox", "gallery-" + fi);
        li.each(function() {
            var i = e(this),
                t = function() {
                    e(D).appendTo("body")
                },
                a = function() {
                    e(".landing-els").remove()
                },
                s = function() {
                    e('<div id="imagelightbox-overlay"></div>').appendTo("body")
                },
                r = function() {
                    e("#imagelightbox-overlay").remove()
                },
                o = function(i) {
                    e('<a href="#" id="imagelightbox-close"><i class="icon icon-close"></i></a>').appendTo("body").on("click", function() {
                        return e(this).remove(), i.quitImageLightbox(), !1
                    })
                },
                l = function() {
                    e("#imagelightbox-close").remove()
                },
                n = function() {
                    var i = e('a[href="' + e("#imagelightbox").attr("src") + '"]').find("h2").html();
                    i.length > 0 && e('<div id="imagelightbox-caption"><h3>' + i + "</h3></div>").appendTo("body")
                },
                f = function() {
                    e("#imagelightbox-caption").remove()
                },
                p = i.find('.item a[data-lightbox^="gallery-"]').imageLightbox({
                    onStart: function() {
                        s(), o(p)
                    },
                    onEnd: function() {
                        r(), f(), l(), a()
                    },
                    onLoadStart: function() {
                        f(), t()
                    },
                    onLoadEnd: function() {
                        n(), a()
                    }
                })
        })
    }
    e(".map").length && g(), k.find(".menu-item").last("li").addClass("last"), e("#top-footer").find(".column").last(".column").addClass("last"), e(".blog.list-style").find("article").last("article").addClass("last"), e(".search.list-style").find("article").last("article").addClass("last");
    var pi = e(".column.last");
    pi.length && pi.after('<div class="clear"></div>'), Fluidvids.init({
        selector: "iframe",
        players: ["www.youtube.com", "player.vimeo.com"]
    })
});
