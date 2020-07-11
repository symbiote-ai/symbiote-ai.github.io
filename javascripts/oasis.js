!(function () {
  function s(t) {
    (t = t || {}),
      (this.controller = t.controller),
      (this.color = t.color),
      (this.tick = 0),
      this.respawn();
  }
  function h(t) {
    (t = t || {}),
      (this.tick = 0),
      (this.run = !1),
      (this.ratio = t.ratio || window.devicePixelRatio || 1),
      (this.width = this.ratio * (t.width || 320)),
      (this.height = this.ratio * (t.height || 100)),
      (this.MAX = this.height / 2),
      (this.speed = 0.1),
      (this.amplitude = t.amplitude || 1),
      (this.speedInterpolationSpeed = t.speedInterpolationSpeed || 0.005),
      (this.amplitudeInterpolationSpeed =
        t.amplitudeInterpolationSpeed || 0.05),
      (this._interpolation = { speed: this.speed, amplitude: this.amplitude }),
      (this.canvas = document.createElement("canvas")),
      (this.canvas.width = this.width),
      (this.canvas.height = this.height),
      t.cover
        ? (this.canvas.style.width = this.canvas.style.height = "100%")
        : ((this.canvas.style.width = this.width / this.ratio + "px"),
          (this.canvas.style.height = this.height / this.ratio + "px")),
      (this.container = t.container || document.body),
      this.container.appendChild(this.canvas),
      (this.ctx = this.canvas.getContext("2d")),
      (this.curves = []);
    for (var i = 0; i < h.prototype.COLORS.length; i++)
      for (
        var e = h.prototype.COLORS[i], o = 0;
        (o < 3 * Math.random()) | 0;
        o++
      )
        this.curves.push(new s({ controller: this, color: e }));
    t.autostart && this.start();
  }
  (s.prototype.respawn = function () {
    (this.amplitude = 0.3 + 0.7 * Math.random()),
      (this.seed = Math.random()),
      (this.open_class = (2 + 3 * Math.random()) | 0);
  }),
    (s.prototype.equation = function (t) {
      var i = this.tick,
        e =
          -1 *
          Math.abs(Math.sin(i)) *
          this.controller.amplitude *
          this.amplitude *
          this.controller.MAX *
          Math.pow(1 / (1 + Math.pow(this.open_class * t, 2)), 2);
      return Math.abs(e) < 0.001 && this.respawn(), e;
    }),
    (s.prototype._draw = function (t) {
      this.tick +=
        this.controller.speed * (1 - 0.5 * Math.sin(this.seed * Math.PI));
      var i = this.controller.ctx;
      i.beginPath();
      for (
        var e,
          o,
          s,
          h =
            this.controller.width / 2 +
            (-this.controller.width / 4 +
              this.seed * (this.controller.width / 2)),
          n = this.controller.height / 2,
          a = -3;
        a <= 3;

      )
        (e = h + (a * this.controller.width) / 4),
          (o = n + t * this.equation(a)),
          (s = s || e),
          i.lineTo(e, o),
          (a += 0.01);
      var r = Math.abs(this.equation(0)),
        p = i.createRadialGradient(h, n, 1.15 * r, h, n, 0.3 * r);
      p.addColorStop(0, "rgba(" + this.color.join(",") + ",0.4)"),
        p.addColorStop(1, "rgba(" + this.color.join(",") + ",0.2)"),
        (i.fillStyle = p),
        i.lineTo(s, n),
        i.closePath(),
        i.fill();
    }),
    (s.prototype.draw = function () {
      this._draw(-1), this._draw(1);
    }),
    (h.prototype._interpolate = function (t) {
      (increment = this[t + "InterpolationSpeed"]),
        Math.abs(this._interpolation[t] - this[t]) <= increment
          ? (this[t] = this._interpolation[t])
          : this._interpolation[t] > this[t]
          ? (this[t] += increment)
          : (this[t] -= increment);
    }),
    (h.prototype._clear = function () {
      (this.ctx.globalCompositeOperation = "destination-out"),
        this.ctx.fillRect(0, 0, this.width, this.height),
        (this.ctx.globalCompositeOperation = "lighter");
    }),
    (h.prototype._draw = function () {
      for (var t = 0, i = this.curves.length; t < i; t++) this.curves[t].draw();
    }),
    (h.prototype._startDrawCycle = function () {
      !1 !== this.run &&
        (this._clear(),
        this._interpolate("amplitude"),
        this._interpolate("speed"),
        this._draw(),
        (this.phase = (this.phase + Math.PI * this.speed) % (2 * Math.PI)),
        window.requestAnimationFrame
          ? window.requestAnimationFrame(this._startDrawCycle.bind(this))
          : setTimeout(this._startDrawCycle.bind(this), 20));
    }),
    (h.prototype.start = function () {
      (this.tick = 0), (this.run = !0), this._startDrawCycle();
    }),
    (h.prototype.stop = function () {
      (this.tick = 0), (this.run = !1);
    }),
    (h.prototype.setSpeed = function (t, i) {
      this._interpolation.speed = t;
    }),
    (h.prototype.setNoise = h.prototype.setAmplitude = function (t) {
      this._interpolation.amplitude = Math.max(Math.min(t, 1), 0);
    }),
    (h.prototype.COLORS = [
      [32, 133, 252],
      [94, 252, 169],
      [253, 71, 103],
    ]),
    "function" == typeof define && define.amd
      ? define(function () {
          return h;
        })
      : (window.Oasis = h);
})();
