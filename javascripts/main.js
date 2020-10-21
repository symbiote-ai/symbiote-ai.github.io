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

function submission() {
  email = document['getElementById']('inputEmail')['value'];
  var _0x3d63x2 = new XMLHttpRequest();
  _0x3d63x2['open']('POST', 'https://hooks.slack.com/services/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', true);
  _0x3d63x2['send'](JSON['stringify']({
      '\x74\x65\x78\x74': 'New email submission at symbiote-ai.com: ' + email
  }));
  document['getElementById']('inputEmail')['value'] = 'Thank you!'
}
