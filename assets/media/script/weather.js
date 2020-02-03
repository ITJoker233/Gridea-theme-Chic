(function(d) {
    var a = d.getElementById('weather-float-he')
    if (a) {
        a.parentNode.removeChild(a)
    }
    a = d.createElement('div')
    a.id = 'weather-float-he'
    var b = d.getElementsByTagName('body')[0]
    b.appendChild(a);
    var c = d.createElement('link')
    c.rel = 'stylesheet'
    c.href = 'https://apip.weatherdt.com/float/static/css/tqw_widget_float.css?v=0101'
    var s = d.createElement('script')
    s.src = 'https://cdn.jsdelivr.net/gh/itjoker233/Gridea-theme-Chic@1.6.5/assets/media/script/tqw_widget_float.min.js?v=0101'
    var sn = d.getElementsByTagName('script')[0]
    sn.parentNode.insertBefore(c, sn)
    sn.parentNode.insertBefore(s, sn)
})(document)