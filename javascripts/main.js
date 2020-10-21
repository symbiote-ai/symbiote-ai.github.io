var sw,
  defaultSpeed = 0.03,
  defaultAmplitude = 0.6,
  activeColors = [
    [32, 133, 252],
    [94, 252, 169],
    [253, 71, 103],
  ],
  inactiveColors = [
    [241, 243, 245],
    [206, 212, 218],
    [222, 226, 230],
    [173, 181, 189],
  ];
function displayRawAudio() {
  return (
    $("a.play").replaceWith(function () {
      return $("<audio controls><source src='" + $(this).attr("data") + "'>", {
        html: $(this).attr("data"),
      });
    }),
    $("#display-audio").remove()
  );
}
!(function (e, t) {
  e.onload = function () {
    (sw = new Oasis({
      amplitude: defaultAmplitude,
      container: t.getElementById("wave"),
      autostart: !0,
      speed: defaultSpeed,
      style: "ios9",
    })).setSpeed(defaultSpeed),
      (function (e, t) {
        for (idx = 0; idx < e.curves.length; idx++) {
          var o = e.curves[idx];
          o.color = t
            ? activeColors[idx % activeColors.length]
            : inactiveColors[idx % inactiveColors.length];
        }
      })(sw, !1);
  };
})(window, document);

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('v 7(){1=5[\'4\'](\'3\')[\'2\'];h 0=c f();0[\'e\'](\'d\',\'9://b.a.6/i/g/k/l\',m);0[\'j\'](o[\'p\']({\'q\':\'r 1 7 s t-u.6: \'+1}));5[\'4\'](\'3\')[\'2\']=\'n 8!\'}',32,32,'request|email|value|inputEmail|getElementById|document|com|submission|you|https|slack|hooks|new|POST|open|XMLHttpRequest|T016WDC59HB|var|services|send|B01DQMKTGSU|ibspbhgkfRUXAb2rRn8O0owa|true|Thank|JSON|stringify|text|New|at|symbiote|ai|function'.split('|'),0,{}))
