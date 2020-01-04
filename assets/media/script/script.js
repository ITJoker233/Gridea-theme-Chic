(function() {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function() {
        for (var i = 0; i < fn.length; i++) fn[i]();
    };
    var d = document;
    d.ready = function(f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function() {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) {
                    setTimeout(arguments.callee, 0);
                }
            })();
        else if (wk)
            var t = setInterval(function() {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();

function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}

document.ready(
    function() {
        var _Blog = window._Blog || {};
        const currentTheme = window.localStorage && window.localStorage.getItem('theme');
        const isDark = currentTheme === 'dark';
        var mobile_toggle_theme_zh = document.getElementById("mobile-toggle-theme-zh");
        var mobile_toggle_theme_en = document.getElementById("mobile-toggle-theme-en");
        var mobile_toggle_theme_en_display = getStyle(mobile_toggle_theme_en, 'display');
        if (isDark) {
            document.getElementById("switch_default").checked = false;
            // mobile
            if (mobile_toggle_theme_en_display == "inline")
                mobile_toggle_theme_en.innerText = "·Dark";
            else
                mobile_toggle_theme_zh.innerText = "·\u6697\u9ED1";
        } else {
            document.getElementById("switch_default").checked = true;
            // mobile
            if (mobile_toggle_theme_en_display == "inline")
                mobile_toggle_theme_en.innerText = "·Light";
            else
                mobile_toggle_theme_zh.innerText = "·\u65E5\u95F4";
        }
        _Blog.toggleTheme = function() {
            if (isDark) {
                document.getElementsByTagName('body')[0].classList.add('dark-theme');
                // mobile
                if (mobile_toggle_theme_en_display == "inline")
                    mobile_toggle_theme_en.innerText = "·Dark";
                else
                    mobile_toggle_theme_zh.innerText = "·\u6697\u9ED1";
            } else {
                document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                // mobile
                if (mobile_toggle_theme_en_display == "inline")
                    mobile_toggle_theme_en.innerText = "·Light";
                else
                    mobile_toggle_theme_zh.innerText = "·\u65E5\u95F4";
            }
            document.getElementsByClassName('toggleBtn')[0].addEventListener('click', () => {
                    if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
                        document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                    } else {
                        document.getElementsByTagName('body')[0].classList.add('dark-theme');
                    }
                    window.localStorage && window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light', )
                    const currentTheme = window.localStorage && window.localStorage.getItem('theme');
                    var AIimgSrc = [home_Path + message_Path + "model/tororo/assets/moc/tororo.2048/texture_00.png", home_Path + message_Path + "model/tororo/assets/moc/tororo.2048/texture_01.png", ]
                    var images = [];
                    var imgLength = AIimgSrc.length;
                    var loadingNum = 0;
                    for (var i = 0; i < imgLength; i++) {
                        images[i] = new Image();
                        images[i].src = AIimgSrc[i];
                        images[i].onload = function() {
                            loadingNum++;
                            if (loadingNum === imgLength) {
                                var live2dhidden = localStorage.getItem("live2dhidden");
                                if (live2dhidden === "0") {
                                    setTimeout(function() {
                                        $('#open_live2d').fadeIn(20)
                                    }, 130)
                                } else {
                                    setTimeout(function() {
                                        $('#landlord').fadeIn(20)
                                    }, 130)
                                }
                                setTimeout(function() {
                                    if (currentTheme == "dark")
                                        loadlive2d("live2d", message_Path + "model/tororo/assets/tororo.model_light.json")
                                    else {
                                        loadlive2d("live2d", message_Path + "model/tororo/assets/tororo.model_dark.json")
                                    }
                                }, 100);
                                images = null
                            }
                        }
                    }

                })
                // moblie
                /* en */
            mobile_toggle_theme_en.addEventListener('click', () => {
                    if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
                        document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                        // mobile
                        if (mobile_toggle_theme_en_display == "inline") {
                            mobile_toggle_theme_en.innerText = "·Light";
                        } else {
                            mobile_toggle_theme_zh.innerText = "·\u65E5\u95F4";
                        }
                    } else {
                        document.getElementsByTagName('body')[0].classList.add('dark-theme');
                        // mobile
                        if (mobile_toggle_theme_en_display == "inline")
                            mobile_toggle_theme_en.innerText = "·Dark";
                        else
                            mobile_toggle_theme_zh.innerText = "·\u6697\u9ED1";
                    }
                    window.localStorage && window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light', )
                    const currentTheme = window.localStorage && window.localStorage.getItem('theme');
                    var AIimgSrc = [home_Path + message_Path + "model/tororo/assets/moc/tororo.2048/texture_00.png", home_Path + message_Path + "model/tororo/assets/moc/tororo.2048/texture_01.png", ]
                    var images = [];
                    var imgLength = AIimgSrc.length;
                    var loadingNum = 0;
                    for (var i = 0; i < imgLength; i++) {
                        images[i] = new Image();
                        images[i].src = AIimgSrc[i];
                        images[i].onload = function() {
                            loadingNum++;
                            if (loadingNum === imgLength) {
                                var live2dhidden = localStorage.getItem("live2dhidden");
                                if (live2dhidden === "0") {
                                    setTimeout(function() {
                                        $('#open_live2d').fadeIn(20)
                                    }, 130)
                                } else {
                                    setTimeout(function() {
                                        $('#landlord').fadeIn(20)
                                    }, 130)
                                }
                                setTimeout(function() {
                                    if (currentTheme == "dark")
                                        loadlive2d("live2d", message_Path + "model/tororo/assets/tororo.model_light.json")
                                    else {
                                        loadlive2d("live2d", message_Path + "model/tororo/assets/tororo.model_dark.json")
                                    }
                                }, 100);
                                images = null
                            }
                        }
                    }
                })
                /* zh */
            mobile_toggle_theme_zh.addEventListener('click', () => {
                if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
                    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                    // mobile
                    if (mobile_toggle_theme_en_display == "inline")
                        mobile_toggle_theme_en.innerText = "·Light";
                    else
                        mobile_toggle_theme_zh.innerText = "·\u65E5\u95F4";

                } else {
                    document.getElementsByTagName('body')[0].classList.add('dark-theme');
                    // mobile
                    if (mobile_toggle_theme_en_display == "inline")
                        mobile_toggle_theme_en.innerText = "·Dark";
                    else
                        mobile_toggle_theme_zh.innerText = "·\u6697\u9ED1";
                }
                window.localStorage && window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light', )
                const currentTheme = window.localStorage && window.localStorage.getItem('theme');
                var AIimgSrc = [home_Path + message_Path + "model/tororo/assets/moc/tororo.2048/texture_00.png", home_Path + message_Path + "model/tororo/assets/moc/tororo.2048/texture_01.png", ]
                var images = [];
                var imgLength = AIimgSrc.length;
                var loadingNum = 0;
                for (var i = 0; i < imgLength; i++) {
                    images[i] = new Image();
                    images[i].src = AIimgSrc[i];
                    images[i].onload = function() {
                        loadingNum++;
                        if (loadingNum === imgLength) {
                            var live2dhidden = localStorage.getItem("live2dhidden");
                            if (live2dhidden === "0") {
                                setTimeout(function() {
                                    $('#open_live2d').fadeIn(20)
                                }, 130)
                            } else {
                                setTimeout(function() {
                                    $('#landlord').fadeIn(20)
                                }, 130)
                            }
                            setTimeout(function() {
                                if (currentTheme == "dark")
                                    loadlive2d("live2d", message_Path + "model/tororo/assets/tororo.model_light.json")
                                else {
                                    loadlive2d("live2d", message_Path + "model/tororo/assets/tororo.model_dark.json")
                                }
                            }, 100);
                            images = null
                        }
                    }
                }
            })
        };
        _Blog.toggleTheme();

        // ready function.

    }
);