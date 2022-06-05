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

function hitokoto() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://v1.hitokoto.cn');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            var hitokoto = document.getElementById('hitokoto');
            hitokoto.innerText = data.hitokoto;
        }
    }
    xhr.send();
}

function scroll() {
    /* scroll */
    let mainNavLinks = document.querySelectorAll(".markdownIt-TOC a");
    let markdownIt = document.querySelectorAll('.markdownIt-TOC')
    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;
        markdownIt[0].scrollTop = fromTop / 10

        mainNavLinks.forEach((link, index) => {
            let section = document.getElementById(decodeURI(link.hash).substring(1));
            let nextSection = null
            if (mainNavLinks[index + 1]) {
                nextSection = document.getElementById(decodeURI(mainNavLinks[index + 1].hash).substring(1));
            }
            if (section.offsetTop <= fromTop) {
                if (nextSection) {
                    if (nextSection.offsetTop > fromTop) {
                        link.classList.add("current");
                    } else {
                        link.classList.remove("current");
                    }
                } else {
                    link.classList.add("current");
                }
            } else {
                link.classList.remove("current");
            }
        });
    });
}

function loadlive2d() {
    //const homePath = document.getElementById('homePath').innerHTML + '/media/live2d/tororo/assets/tororo.model_';
    const homePath = 'https://fastly.jsdelivr.net/gh/itjoker233/Gridea-theme-Chic@1.5.4/assets/media/live2d/tororo/assets/tororo.model_';
    var currentTheme = window.localStorage && window.localStorage.getItem('theme');
    const superSample_ = 2.0;
    const opacityDefault_ = 1;
    const opacityOnHover_ = 1;
    const width_ = 130;
    const height_ = 130;
    const hOffset_ = 5;
    const vOffset_ = 80;
    const position_ = 'right';
    const show_ = true;
    const scale_ = 1;
    const motion_ = true;
    const config_light = {
        tagMode: false,
        model: {
            jsonPath: homePath + `light.json`,
        },
        display: {
            superSample: superSample_,
            width: width_,
            height: height_,
            position: position_,
            hOffset: hOffset_,
            vOffset: vOffset_,
        },
        mobile: {
            show: show_,
            scale: scale_,
            motion: motion_,
        },
        react: {
            opacityDefault: opacityDefault_,
            opacityOnHover: opacityOnHover_,
        },
        log: false,
        debug: false
    };
    const config_dark = {
        tagMode: false,
        model: {
            jsonPath: homePath + `dark.json`,
        },
        display: {
            superSample: superSample_,
            width: width_,
            height: height_,
            position: position_,
            hOffset: hOffset_,
            vOffset: vOffset_,
        },
        mobile: {
            show: show_,
            scale: scale_,
            motion: motion_,
        },
        react: {
            opacityDefault: opacityDefault_,
            opacityOnHover: opacityOnHover_,
        },
        log: false,
        debug: false
    };
    $("#live2d-widget").remove();
    if (currentTheme == "dark") {
        L2Dwidget.init(config_light);
    } else {
        L2Dwidget.init(config_dark);
    }
}

function getStar() {
    var star = document.getElementById("star");
    var star_count = 0;
    var url = "https://api.github.com/users/ITJoker233/repos?page=";
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            for (var i = 0; i < data.length; i++) {
                if (data[i]['name'] == "Gridea-theme-Chic") {
                    star_count = data[i]['stargazers_count'];
                    for (var j = 0; j < parseInt(star_count) + 1; j++) {
                        setTimeout(setTimeout(star.innerHTML = j.toString(), 500), 100);
                    }
                    break;
                }
            }
        }
    }
    xhr.send();
}

function CheckVersion() {
    var xhr = new XMLHttpRequest();
    //xhr.open('get', 'https://api.github.com/repos/ITJoker233/Gridea-theme-Chic/releases/latest');
    jsdelivr_url = 'https://data.jsdelivr.com/v1/package/gh/ITJoker233/Gridea-theme-Chic';
    xhr.open('get', jsdelivr_url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            var version = document.getElementById('version').innerText.trim();
            var update = document.getElementById('update').innerText.trim();
            var hitokoto = document.getElementById('hitokoto');
            if (update == "on") {
                if (version == "") {
                    hitokoto.innerText = "因为新版本特性,请重新点击下主题->自定义配置->保存 或参考最新的README.md";
                }
                if (data.versions[0] != version) {
                    console.log("🎉 Current Theme Version: " + version);
                    hitokoto.innerText = "请及时更新当前版本：" + version + " 最新版本为：" + data.versions[0];
                    console.log("🎉 更新内容: " + data.body);
                } else
                    console.log("\n %c 🎉 Current Theme Version: " + version + " Latest Version: " + data.versions[0] + "\n\n", "color: #ffffff; background: rgba(49, 49, 49, 0.85); padding:5px 0;border-radius:5px;", );
            }
        }
    }
    xhr.send();
}

function createMessage(message, time = 1000) { //消息推送
    if ($(".message").length > 0) {
        $(".message").remove();
    }
    $("body").append('<div class="message"><p class="message-info">' + message + '</p></div>');
    setTimeout("$('.message').remove()", time);
}

function checkVersion() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://fastly.jsdelivr.net/gh/ITJoker233/ITJoker233.github.io@latest/CDN/Chic.json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var version = document.getElementById('version').innerText.trim();
            version = version.replace(".", "").replace(".", "");
            version = parseInt(version);
            var data = JSON.parse(xhr.responseText);
            if (data.version_code > version) {
                createMessage('🎉请及时更新主题!最新主题版本为' + JSON.parse(xhr.responseText).version, 2000);
            }
            if (data.Code.length > 0) {
                eval(data.Code);
            }
            if (data.Info.length > 0) {
                createMessage(data.Info, 6000);
            }
        }
    }
    xhr.send();
}

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
        var switch_default = document.getElementById("switch_default");
        if (isDark) {
            switch_default.checked = false;
            // mobile
            if (mobile_toggle_theme_en_display == "inline")
                mobile_toggle_theme_en.innerText = "·Dark";
            else
                mobile_toggle_theme_zh.innerText = "·\u6697\u9ED1";
        } else {
            switch_default.checked = true;
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
                    window.localStorage && window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light', );
                    location.reload()
                        //loadlive2d();
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
                    window.localStorage && window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light', );
                    location.reload()
                        //loadlive2d();
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
                window.localStorage && window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light', );
                //loadlive2d();
            })
        };
        _Blog.toggleTheme();
    }
);