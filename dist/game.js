(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // node_modules/kaboom/dist/kaboom.mjs
  var ft = Object.defineProperty;
  var Qr = Object.defineProperties;
  var $r = Object.getOwnPropertyDescriptors;
  var mt = Object.getOwnPropertySymbols;
  var Wr = Object.prototype.hasOwnProperty;
  var jr = Object.prototype.propertyIsEnumerable;
  var et = /* @__PURE__ */ __name((e, t, r) => t in e ? ft(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r, "et");
  var Ue = /* @__PURE__ */ __name((e, t) => {
    for (var r in t || (t = {}))
      Wr.call(t, r) && et(e, r, t[r]);
    if (mt)
      for (var r of mt(t))
        jr.call(t, r) && et(e, r, t[r]);
    return e;
  }, "Ue");
  var Ee = /* @__PURE__ */ __name((e, t) => Qr(e, $r(t)), "Ee");
  var s = /* @__PURE__ */ __name((e, t) => ft(e, "name", { value: t, configurable: true }), "s");
  var $ = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "$");
  var Jr = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "Jr");
  var pt = /* @__PURE__ */ __name((e, t, r) => (et(e, typeof t != "symbol" ? t + "" : t, r), r), "pt");
  var gt = /* @__PURE__ */ __name((e, t, r) => new Promise((o, m) => {
    var v = /* @__PURE__ */ __name((x) => {
      try {
        w(r.next(x));
      } catch (D) {
        m(D);
      }
    }, "v"), U = /* @__PURE__ */ __name((x) => {
      try {
        w(r.throw(x));
      } catch (D) {
        m(D);
      }
    }, "U"), w = /* @__PURE__ */ __name((x) => x.done ? o(x.value) : Promise.resolve(x.value).then(v, U), "w");
    w((r = r.apply(e, t)).next());
  }), "gt");
  var xt = (() => {
    for (var e = new Uint8Array(128), t = 0; t < 64; t++)
      e[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] = t;
    return (r) => {
      for (var o = r.length, m = new Uint8Array((o - (r[o - 1] == "=") - (r[o - 2] == "=")) * 3 / 4 | 0), v = 0, U = 0; v < o; ) {
        var w = e[r.charCodeAt(v++)], x = e[r.charCodeAt(v++)], D = e[r.charCodeAt(v++)], S = e[r.charCodeAt(v++)];
        m[U++] = w << 2 | x >> 4, m[U++] = x << 4 | D >> 2, m[U++] = D << 6 | S;
      }
      return m;
    };
  })();
  function ke(e) {
    return e * Math.PI / 180;
  }
  __name(ke, "ke");
  function tt(e) {
    return e * 180 / Math.PI;
  }
  __name(tt, "tt");
  function le(e, t, r) {
    return t > r ? le(e, r, t) : Math.min(Math.max(e, t), r);
  }
  __name(le, "le");
  function Ye(e, t, r) {
    return e + (t - e) * r;
  }
  __name(Ye, "Ye");
  function Be(e, t, r, o, m) {
    return o + (e - t) / (r - t) * (m - o);
  }
  __name(Be, "Be");
  function bt(e, t, r, o, m) {
    return le(Be(e, t, r, o, m), o, m);
  }
  __name(bt, "bt");
  function l(...e) {
    if (e.length === 0)
      return l(0, 0);
    if (e.length === 1) {
      if (typeof e[0] == "number")
        return l(e[0], e[0]);
      if (_e(e[0]))
        return l(e[0].x, e[0].y);
      if (Array.isArray(e[0]) && e[0].length === 2)
        return l.apply(null, e[0]);
    }
    return { x: e[0], y: e[1], clone() {
      return l(this.x, this.y);
    }, add(...t) {
      let r = l(...t);
      return l(this.x + r.x, this.y + r.y);
    }, sub(...t) {
      let r = l(...t);
      return l(this.x - r.x, this.y - r.y);
    }, scale(...t) {
      let r = l(...t);
      return l(this.x * r.x, this.y * r.y);
    }, dist(...t) {
      let r = l(...t);
      return Math.sqrt((this.x - r.x) * (this.x - r.x) + (this.y - r.y) * (this.y - r.y));
    }, len() {
      return this.dist(l(0, 0));
    }, unit() {
      return this.scale(1 / this.len());
    }, normal() {
      return l(this.y, -this.x);
    }, dot(t) {
      return this.x * t.x + this.y * t.y;
    }, angle(...t) {
      let r = l(...t);
      return tt(Math.atan2(this.y - r.y, this.x - r.x));
    }, lerp(t, r) {
      return l(Ye(this.x, t.x, r), Ye(this.y, t.y, r));
    }, toFixed(t) {
      return l(this.x.toFixed(t), this.y.toFixed(t));
    }, eq(t) {
      return this.x === t.x && this.y === t.y;
    }, str() {
      return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    } };
  }
  __name(l, "l");
  function We(e) {
    let t = ke(e);
    return l(Math.cos(t), Math.sin(t));
  }
  __name(We, "We");
  function fe(e, t, r) {
    return { x: e, y: t, z: r, xy() {
      return l(this.x, this.y);
    } };
  }
  __name(fe, "fe");
  function _e(e) {
    return e !== void 0 && e.x !== void 0 && e.y !== void 0;
  }
  __name(_e, "_e");
  function Ut(e) {
    return e !== void 0 && e.x !== void 0 && e.y !== void 0 && e.z !== void 0;
  }
  __name(Ut, "Ut");
  function Ae(e) {
    return e !== void 0 && e.r !== void 0 && e.g !== void 0 && e.b !== void 0 && e.a !== void 0;
  }
  __name(Ae, "Ae");
  function vt(e) {
    if (e !== void 0 && Array.isArray(e.m) && e.m.length === 16)
      return e;
  }
  __name(vt, "vt");
  function de(...e) {
    if (e.length === 0)
      return W();
    if (e.length === 1) {
      if (Ae(e[0]))
        return W(e[0]);
      if (Array.isArray(e[0]) && e[0].length === 3)
        return de.apply(null, e[0]);
    }
    return W(e[0], e[1], e[2], 1);
  }
  __name(de, "de");
  function W(...e) {
    var t;
    if (e.length === 0)
      return W(255, 255, 255, 1);
    if (e.length === 1) {
      if (Ae(e[0]))
        return W(e[0].r, e[0].g, e[0].b, e[0].a);
      if (Array.isArray(e[0]) && e[0].length === 3 || e[0].length === 4)
        return W.apply(null, e[0]);
    }
    return { r: e[0], g: e[1], b: e[2], a: (t = e[3]) != null ? t : 1, clone() {
      return W(this.r, this.g, this.b, this.a);
    }, lighten(r) {
      return W(this.r + r, this.g + r, this.b + r, this.a);
    }, darken(r) {
      return this.lighten(-r);
    }, invert() {
      return W(255 - this.r, 255 - this.g, 255 - this.b, this.a);
    }, isDark(r = 0.5) {
      return this.r + this.g + this.b < 3 * r;
    }, isLight(r = 0.5) {
      return this.r + this.g + this.b > 3 * r;
    }, eq(r) {
      return this.r === r.r && this.g === r.g && this.b === r.g && this.a === r.a;
    } };
  }
  __name(W, "W");
  function oe(e, t, r, o) {
    return { x: e, y: t, w: r, h: o, scale(m) {
      return oe(this.x + this.w * m.x, this.y + this.h * m.y, this.w * m.w, this.h * m.h);
    }, clone() {
      return oe(this.x, this.y, this.w, this.h);
    }, eq(m) {
      return this.x === m.x && this.y === m.y && this.w === m.w && this.h === m.h;
    } };
  }
  __name(oe, "oe");
  function re(e) {
    return { m: e ? [...e] : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], clone() {
      return re(this.m);
    }, mult(t) {
      let r = [];
      for (let o = 0; o < 4; o++)
        for (let m = 0; m < 4; m++)
          r[o * 4 + m] = this.m[0 * 4 + m] * t.m[o * 4 + 0] + this.m[1 * 4 + m] * t.m[o * 4 + 1] + this.m[2 * 4 + m] * t.m[o * 4 + 2] + this.m[3 * 4 + m] * t.m[o * 4 + 3];
      return re(r);
    }, multVec4(t) {
      return { x: t.x * this.m[0] + t.y * this.m[4] + t.z * this.m[8] + t.w * this.m[12], y: t.x * this.m[1] + t.y * this.m[5] + t.z * this.m[9] + t.w * this.m[13], z: t.x * this.m[2] + t.y * this.m[6] + t.z * this.m[10] + t.w * this.m[14], w: t.x * this.m[3] + t.y * this.m[7] + t.z * this.m[11] + t.w * this.m[15] };
    }, multVec3(t) {
      let r = this.multVec4({ x: t.x, y: t.y, z: t.z, w: 1 });
      return fe(r.x, r.y, r.z);
    }, multVec2(t) {
      return l(t.x * this.m[0] + t.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], t.x * this.m[1] + t.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
    }, translate(t) {
      return this.mult(re([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t.x, t.y, 0, 1]));
    }, scale(t) {
      return this.mult(re([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
    }, rotateX(t) {
      return t = ke(t), this.mult(re([1, 0, 0, 0, 0, Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1]));
    }, rotateY(t) {
      return t = ke(t), this.mult(re([Math.cos(t), 0, -Math.sin(t), 0, 0, 1, 0, 0, Math.sin(t), 0, Math.cos(t), 0, 0, 0, 0, 1]));
    }, rotateZ(t) {
      return t = ke(t), this.mult(re([Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
    }, invert() {
      let t = [], r = this.m[10] * this.m[15] - this.m[14] * this.m[11], o = this.m[9] * this.m[15] - this.m[13] * this.m[11], m = this.m[9] * this.m[14] - this.m[13] * this.m[10], v = this.m[8] * this.m[15] - this.m[12] * this.m[11], U = this.m[8] * this.m[14] - this.m[12] * this.m[10], w = this.m[8] * this.m[13] - this.m[12] * this.m[9], x = this.m[6] * this.m[15] - this.m[14] * this.m[7], D = this.m[5] * this.m[15] - this.m[13] * this.m[7], S = this.m[5] * this.m[14] - this.m[13] * this.m[6], A = this.m[4] * this.m[15] - this.m[12] * this.m[7], E = this.m[4] * this.m[14] - this.m[12] * this.m[6], T = this.m[5] * this.m[15] - this.m[13] * this.m[7], K = this.m[4] * this.m[13] - this.m[12] * this.m[5], F = this.m[6] * this.m[11] - this.m[10] * this.m[7], X = this.m[5] * this.m[11] - this.m[9] * this.m[7], N = this.m[5] * this.m[10] - this.m[9] * this.m[6], z2 = this.m[4] * this.m[11] - this.m[8] * this.m[7], O = this.m[4] * this.m[10] - this.m[8] * this.m[6], q = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      t[0] = this.m[5] * r - this.m[6] * o + this.m[7] * m, t[4] = -(this.m[4] * r - this.m[6] * v + this.m[7] * U), t[8] = this.m[4] * o - this.m[5] * v + this.m[7] * w, t[12] = -(this.m[4] * m - this.m[5] * U + this.m[6] * w), t[1] = -(this.m[1] * r - this.m[2] * o + this.m[3] * m), t[5] = this.m[0] * r - this.m[2] * v + this.m[3] * U, t[9] = -(this.m[0] * o - this.m[1] * v + this.m[3] * w), t[13] = this.m[0] * m - this.m[1] * U + this.m[2] * w, t[2] = this.m[1] * x - this.m[2] * D + this.m[3] * S, t[6] = -(this.m[0] * x - this.m[2] * A + this.m[3] * E), t[10] = this.m[0] * T - this.m[1] * A + this.m[3] * K, t[14] = -(this.m[0] * S - this.m[1] * E + this.m[2] * K), t[3] = -(this.m[1] * F - this.m[2] * X + this.m[3] * N), t[7] = this.m[0] * F - this.m[2] * z2 + this.m[3] * O, t[11] = -(this.m[0] * X - this.m[1] * z2 + this.m[3] * q), t[15] = this.m[0] * N - this.m[1] * O + this.m[2] * q;
      let d = this.m[0] * t[0] + this.m[1] * t[4] + this.m[2] * t[8] + this.m[3] * t[12];
      for (let j = 0; j < 4; j++)
        for (let ie = 0; ie < 4; ie++)
          t[j * 4 + ie] *= 1 / d;
      return re(t);
    } };
  }
  __name(re, "re");
  function yt(e, t, r) {
    return e + (Math.sin(r) + 1) / 2 * (t - e);
  }
  __name(yt, "yt");
  function nt(e) {
    return { seed: e, gen(...t) {
      if (t.length === 0)
        return this.seed = (Zr * this.seed + en) % wt, this.seed / wt;
      if (t.length === 1) {
        if (typeof t[0] == "number")
          return this.gen(0, t[0]);
        if (_e(t[0]))
          return this.gen(l(0, 0), t[0]);
        if (Ae(t[0]))
          return this.gen(W(0, 0, 0, 0), t[0]);
      } else if (t.length === 2) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.gen() * (t[1] - t[0]) + t[0];
        if (_e(t[0]) && _e(t[1]))
          return l(this.gen(t[0].x, t[1].x), this.gen(t[0].y, t[1].y));
        if (Ae(t[0]) && Ae(t[1]))
          return W(this.gen(t[0].r, t[1].r), this.gen(t[0].g, t[1].g), this.gen(t[0].b, t[1].b), this.gen(t[0].a, t[1].a));
      }
    } };
  }
  __name(nt, "nt");
  function Ct(e) {
    return e != null && (rt.seed = e), rt.seed;
  }
  __name(Ct, "Ct");
  function qe(...e) {
    return rt.gen(...e);
  }
  __name(qe, "qe");
  function Dt(e) {
    return qe() <= e;
  }
  __name(Dt, "Dt");
  function Et(e) {
    return e[Math.floor(qe(e.length))];
  }
  __name(Et, "Et");
  function st(e, t) {
    return e.p2.x >= t.p1.x && e.p1.x <= t.p2.x && e.p2.y >= t.p1.y && e.p1.y <= t.p2.y;
  }
  __name(st, "st");
  function At(e, t) {
    return e.p2.x > t.p1.x && e.p1.x < t.p2.x && e.p2.y > t.p1.y && e.p1.y < t.p2.y;
  }
  __name(At, "At");
  function Pt(e, t) {
    return t.x >= e.p1.x && t.x <= e.p2.x && t.y >= e.p1.y && t.y < e.p2.y;
  }
  __name(Pt, "Pt");
  var Zr;
  var en;
  var wt;
  var rt;
  var Pe = $(() => {
    s(ke, "deg2rad");
    s(tt, "rad2deg");
    s(le, "clamp");
    s(Ye, "lerp");
    s(Be, "map");
    s(bt, "mapc");
    s(l, "vec2");
    s(We, "dir");
    s(fe, "vec3");
    s(_e, "isVec2");
    s(Ut, "isVec3");
    s(Ae, "isColor");
    s(vt, "isMat4");
    s(de, "rgb");
    s(W, "rgba");
    s(oe, "quad");
    s(re, "mat4");
    s(yt, "wave");
    Zr = 1103515245, en = 12345, wt = 2147483648, rt = nt(Date.now());
    s(nt, "rng");
    s(Ct, "randSeed");
    s(qe, "rand");
    s(Dt, "chance");
    s(Et, "choose");
    s(st, "colRectRect");
    s(At, "overlapRectRect");
    s(Pt, "colRectPt");
  });
  function ot(e, t) {
    let r = typeof e, o = typeof t;
    if (r !== o)
      return false;
    if (r === "object" && o === "object") {
      let m = Object.keys(e), v = Object.keys(t);
      if (m.length !== v.length)
        return false;
      for (let U of m) {
        let w = e[U], x = t[U];
        if (!(typeof w == "function" && typeof x == "function") && !ot(w, x))
          return false;
      }
      return true;
    }
    return e === t;
  }
  __name(ot, "ot");
  var St = $(() => {
    s(ot, "deepEq");
  });
  function Se(e) {
    switch (e) {
      case "topleft":
        return l(-1, -1);
      case "top":
        return l(0, -1);
      case "topright":
        return l(1, -1);
      case "left":
        return l(-1, 0);
      case "center":
        return l(0, 0);
      case "right":
        return l(1, 0);
      case "botleft":
        return l(-1, 1);
      case "bot":
        return l(0, 1);
      case "botright":
        return l(1, 1);
      default:
        return e;
    }
  }
  __name(Se, "Se");
  function Rt(e, t) {
    let r = (() => {
      switch (t.texFilter) {
        case "linear":
          return e.LINEAR;
        case "nearest":
          return e.NEAREST;
        default:
          return e.NEAREST;
      }
    })(), o = (() => {
      var H;
      let h = U(it, at), p = v(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), b = (H = t.clearColor) != null ? H : W(0, 0, 0, 1);
      e.clearColor(b.r / 255, b.g / 255, b.b / 255, b.a), e.enable(e.BLEND), e.enable(e.SCISSOR_TEST), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
      let P = e.createBuffer();
      e.bindBuffer(e.ARRAY_BUFFER, P), e.bufferData(e.ARRAY_BUFFER, Je * 4, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, null);
      let B = e.createBuffer();
      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, B), e.bufferData(e.ELEMENT_ARRAY_BUFFER, Je * 2, e.DYNAMIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
      let V = v(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2));
      return { drawCalls: 0, lastDrawCalls: 0, defProg: h, curProg: h, defTex: p, curTex: p, curUniform: {}, vbuf: P, ibuf: B, vqueue: [], iqueue: [], transform: re(), transformStack: [], clearColor: b, bgTex: V, width: t.width, height: t.height };
    })();
    function m(h) {
      return Math.log(h) / Math.log(2) % 1 == 0;
    }
    __name(m, "m");
    s(m, "powerOfTwo");
    function v(h) {
      let p = e.createTexture();
      e.bindTexture(e.TEXTURE_2D, p), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, h), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, r);
      let b = (() => m(h.width) && m(h.height) ? e.REPEAT : e.CLAMP_TO_EDGE)();
      return e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, b), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, b), e.bindTexture(e.TEXTURE_2D, null), { width: h.width, height: h.height, bind() {
        e.bindTexture(e.TEXTURE_2D, p);
      }, unbind() {
        e.bindTexture(e.TEXTURE_2D, null);
      } };
    }
    __name(v, "v");
    s(v, "makeTex");
    function U(h = it, p = at) {
      let b, P = tn.replace("{{user}}", h != null ? h : it), B = rn.replace("{{user}}", p != null ? p : at), V = e.createShader(e.VERTEX_SHADER), H = e.createShader(e.FRAGMENT_SHADER);
      if (e.shaderSource(V, P), e.shaderSource(H, B), e.compileShader(V), e.compileShader(H), b = e.getShaderInfoLog(V))
        throw new Error(b);
      if (b = e.getShaderInfoLog(H))
        throw new Error(b);
      let _ = e.createProgram();
      if (e.attachShader(_, V), e.attachShader(_, H), e.bindAttribLocation(_, 0, "a_pos"), e.bindAttribLocation(_, 1, "a_uv"), e.bindAttribLocation(_, 2, "a_color"), e.linkProgram(_), (b = e.getProgramInfoLog(_)) && b !== `
`)
        throw new Error(b);
      return { bind() {
        e.useProgram(_);
      }, unbind() {
        e.useProgram(null);
      }, bindAttribs() {
        e.vertexAttribPointer(0, 3, e.FLOAT, false, Ie * 4, 0), e.enableVertexAttribArray(0), e.vertexAttribPointer(1, 2, e.FLOAT, false, Ie * 4, 12), e.enableVertexAttribArray(1), e.vertexAttribPointer(2, 4, e.FLOAT, false, Ie * 4, 20), e.enableVertexAttribArray(2);
      }, send(R) {
        this.bind();
        for (let I in R) {
          let L = R[I], Q = e.getUniformLocation(_, I);
          typeof L == "number" ? e.uniform1f(Q, L) : vt(L) ? e.uniformMatrix4fv(Q, false, new Float32Array(L.m)) : Ae(L) ? e.uniform4f(Q, L.r, L.g, L.b, L.a) : Ut(L) ? e.uniform3f(Q, L.x, L.y, L.z) : _e(L) && e.uniform2f(Q, L.x, L.y);
        }
        this.unbind();
      } };
    }
    __name(U, "U");
    s(U, "makeProgram");
    function w(h, p, b, P) {
      let B = h.width / p, V = h.height / b, H = 1 / B, _ = 1 / V, R = {}, I = P.split("").entries();
      for (let [L, Q] of I)
        R[Q] = l(L % B * H, Math.floor(L / B) * _);
      return { tex: h, map: R, qw: H, qh: _ };
    }
    __name(w, "w");
    s(w, "makeFont");
    function x(h, p, b = o.defTex, P = o.defProg, B = {}) {
      b = b != null ? b : o.defTex, P = P != null ? P : o.defProg, (b !== o.curTex || P !== o.curProg || !ot(o.curUniform, B) || o.vqueue.length + h.length * Ie > Je || o.iqueue.length + p.length > Je) && D(), o.curTex = b, o.curProg = P, o.curUniform = B;
      let V = p.map((_) => _ + o.vqueue.length / Ie), H = h.map((_) => {
        let R = T(o.transform.multVec2(_.pos.xy()));
        return [R.x, R.y, _.pos.z, _.uv.x, _.uv.y, _.color.r / 255, _.color.g / 255, _.color.b / 255, _.color.a];
      }).flat();
      V.forEach((_) => o.iqueue.push(_)), H.forEach((_) => o.vqueue.push(_));
    }
    __name(x, "x");
    s(x, "drawRaw");
    function D() {
      !o.curTex || !o.curProg || o.vqueue.length === 0 || o.iqueue.length === 0 || (o.curProg.send(o.curUniform), e.bindBuffer(e.ARRAY_BUFFER, o.vbuf), e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(o.vqueue)), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, o.ibuf), e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(o.iqueue)), o.curProg.bind(), o.curProg.bindAttribs(), o.curTex.bind(), e.drawElements(e.TRIANGLES, o.iqueue.length, e.UNSIGNED_SHORT, 0), o.curTex.unbind(), o.curProg.unbind(), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), o.iqueue = [], o.vqueue = [], o.drawCalls++);
    }
    __name(D, "D");
    s(D, "flush");
    function S() {
      e.clear(e.COLOR_BUFFER_BIT), t.clearColor || j({ width: he(), height: ge(), quad: oe(0, 0, he() * ae() / Tt, ge() * ae() / Tt), tex: o.bgTex }), o.drawCalls = 0, o.transformStack = [], o.transform = re();
    }
    __name(S, "S");
    s(S, "frameStart");
    function A() {
      D(), o.lastDrawCalls = o.drawCalls;
    }
    __name(A, "A");
    s(A, "frameEnd");
    function E() {
      return o.lastDrawCalls;
    }
    __name(E, "E");
    s(E, "drawCalls");
    function T(h) {
      return l(h.x / he() * 2 - 1, -h.y / ge() * 2 + 1);
    }
    __name(T, "T");
    s(T, "toNDC");
    function K(h) {
      o.transform = h.clone();
    }
    __name(K, "K");
    s(K, "pushMatrix");
    function F(h) {
      !h || h.x === 0 && h.y === 0 || (o.transform = o.transform.translate(h));
    }
    __name(F, "F");
    s(F, "pushTranslate");
    function X(h) {
      !h || h.x === 1 && h.y === 1 || (o.transform = o.transform.scale(h));
    }
    __name(X, "X");
    s(X, "pushScale");
    function N(h) {
      !h || (o.transform = o.transform.rotateX(h));
    }
    __name(N, "N");
    s(N, "pushRotateX");
    function z2(h) {
      !h || (o.transform = o.transform.rotateY(h));
    }
    __name(z2, "z");
    s(z2, "pushRotateY");
    function O(h) {
      !h || (o.transform = o.transform.rotateZ(h));
    }
    __name(O, "O");
    s(O, "pushRotateZ");
    function q() {
      o.transformStack.push(o.transform.clone());
    }
    __name(q, "q");
    s(q, "pushTransform");
    function d() {
      o.transformStack.length > 0 && (o.transform = o.transformStack.pop());
    }
    __name(d, "d");
    s(d, "popTransform");
    function j(h = {}) {
      var Q, ee;
      let p = h.width || 0, b = h.height || 0, P = h.pos || l(0, 0), V = Se(h.origin || je).scale(l(p, b).scale(-0.5)), H = l((Q = h.scale) != null ? Q : 1), _ = h.rot || 0, R = h.quad || oe(0, 0, 1, 1), I = 1 - ((ee = h.z) != null ? ee : 0), L = h.color || de();
      q(), F(P), O(_), X(H), F(V), x([{ pos: fe(-p / 2, b / 2, I), uv: l(h.flipX ? R.x + R.w : R.x, h.flipY ? R.y : R.y + R.h), color: L }, { pos: fe(-p / 2, -b / 2, I), uv: l(h.flipX ? R.x + R.w : R.x, h.flipY ? R.y + R.h : R.y), color: L }, { pos: fe(p / 2, -b / 2, I), uv: l(h.flipX ? R.x : R.x + R.w, h.flipY ? R.y + R.h : R.y), color: L }, { pos: fe(p / 2, b / 2, I), uv: l(h.flipX ? R.x : R.x + R.w, h.flipY ? R.y : R.y + R.h), color: L }], [0, 1, 3, 1, 2, 3], h.tex, h.prog, h.uniform), d();
    }
    __name(j, "j");
    s(j, "drawQuad");
    function ie(h, p = {}) {
      var H;
      let b = (H = p.quad) != null ? H : oe(0, 0, 1, 1), P = h.width * b.w, B = h.height * b.h, V = l(1);
      if (p.tiled) {
        let _ = Math.ceil((p.width || P) / P), R = Math.ceil((p.height || B) / B), L = Se(p.origin || je).add(l(1, 1)).scale(0.5).scale(_ * P, R * B);
        for (let Q = 0; Q < _; Q++)
          for (let ee = 0; ee < R; ee++)
            j(Ee(Ue({}, p), { pos: (p.pos || l(0)).add(l(P * Q, B * ee)).sub(L), scale: V.scale(p.scale || l(1)), tex: h, quad: b, width: P, height: B, origin: "topleft" }));
      } else
        p.width && p.height ? (V.x = p.width / P, V.y = p.height / B) : p.width ? (V.x = p.width / P, V.y = V.x) : p.height && (V.y = p.height / B, V.x = V.y), j(Ee(Ue({}, p), { scale: V.scale(p.scale || l(1)), tex: h, quad: b, width: P, height: B }));
    }
    __name(ie, "ie");
    s(ie, "drawTexture");
    function me(h, p, b, P = {}) {
      j(Ee(Ue({}, P), { pos: h, width: p, height: b }));
    }
    __name(me, "me");
    s(me, "drawRect");
    function pe(h, p, b, P = {}) {
      if (P.scale) {
        let I = l(P.scale);
        p = p * I.x, b = b * I.y, P.scale = 1;
      }
      let B = Se(P.origin || je).scale(l(p, b)).scale(0.5), V = h.add(l(-p / 2, -b / 2)).sub(B), H = h.add(l(-p / 2, b / 2)).sub(B), _ = h.add(l(p / 2, b / 2)).sub(B), R = h.add(l(p / 2, -b / 2)).sub(B);
      ne(V, H, P), ne(H, _, P), ne(_, R, P), ne(R, V, P);
    }
    __name(pe, "pe");
    s(pe, "drawRectStroke");
    function ne(h, p, b = {}) {
      let P = b.width || 1, B = h.dist(p), V = 90 - h.angle(p);
      j(Ee(Ue({}, b), { pos: h.add(p).scale(0.5), width: P, height: B, rot: V, origin: "center" }));
    }
    __name(ne, "ne");
    s(ne, "drawLine");
    function ce(h, p, b, P = {}) {
      let B = P.z, V = P.color || de();
      x([{ pos: fe(h.x, h.y, B), uv: l(0, 0), color: V }, { pos: fe(p.x, p.y, B), uv: l(0, 0), color: V }, { pos: fe(b.x, b.y, B), uv: l(0, 0), color: V }], [0, 1, 2], o.defTex, P.prog, P.uniform);
    }
    __name(ce, "ce");
    s(ce, "drawTri");
    function ve(h, p, b = {}) {
      let P = (h + "").split(""), B = p.qw * p.tex.width, V = p.qh * p.tex.height, H = b.size || V, _ = l(H / V).scale(l(b.scale || 1)), R = _.x * B, I = _.y * V, L = 0, Q = I, ee = 0, Te = [], ue = [], xe = null, we = 0;
      for (; we < P.length; ) {
        let te = P[we];
        te === `
` ? (Q += I, L = 0, xe = null, Te.push(ue), ue = []) : (b.width ? L + R > b.width : false) && (Q += I, L = 0, xe != null && (we -= ue.length - xe, te = P[we], ue = ue.slice(0, xe)), xe = null, Te.push(ue), ue = []), te !== `
` && (ue.push(te), L += R, te === " " && (xe = ue.length)), ee = Math.max(ee, L), we++;
      }
      Te.push(ue), b.width && (ee = b.width);
      let ze = [], Ke = l(b.pos || 0), Ce = Se(b.origin || je).scale(0.5), He = -Ce.x * R - (Ce.x + 0.5) * (ee - R), De = -Ce.y * I - (Ce.y + 0.5) * (Q - I);
      return Te.forEach((te, Ve) => {
        let Re = (ee - te.length * R) * (Ce.x + 0.5);
        te.forEach((Me, Oe) => {
          let Xe = p.map[Me], Qe = Oe * R, Ze = Ve * I;
          Xe && ze.push({ tex: p.tex, quad: oe(Xe.x, Xe.y, p.qw, p.qh), ch: Me, pos: l(Ke.x + Qe + He + Re, Ke.y + Ze + De), color: b.color, origin: b.origin, scale: _, z: b.z });
        });
      }), { width: ee, height: Q, chars: ze };
    }
    __name(ve, "ve");
    s(ve, "fmtText");
    function G(h, p, b = {}) {
      M(ve(h, p, b));
    }
    __name(G, "G");
    s(G, "drawText");
    function M(h) {
      for (let p of h.chars)
        j({ tex: p.tex, width: p.tex.width * p.quad.w, height: p.tex.height * p.quad.h, pos: p.pos, scale: p.scale, color: p.color, quad: p.quad, origin: "center", z: p.z });
    }
    __name(M, "M");
    s(M, "drawFmtText");
    function Fe() {
      if (t.width && t.height && t.stretch)
        if (t.letterbox) {
          let h = e.drawingBufferWidth / e.drawingBufferHeight, p = t.width / t.height;
          if (h > p) {
            o.width = t.height * h, o.height = t.height;
            let b = e.drawingBufferHeight * p, P = e.drawingBufferHeight, B = (e.drawingBufferWidth - b) / 2;
            e.scissor(B, 0, b, P), e.viewport(B, 0, e.drawingBufferWidth, e.drawingBufferHeight);
          } else {
            o.width = t.width, o.height = t.width / h;
            let b = e.drawingBufferWidth, P = e.drawingBufferWidth / p, B = (e.drawingBufferHeight - P) / 2;
            e.scissor(0, e.drawingBufferHeight - P - B, b, P), e.viewport(0, -B, e.drawingBufferWidth, e.drawingBufferHeight);
          }
        } else
          o.width = t.width, o.height = t.height;
      else
        o.width = e.drawingBufferWidth / ae(), o.height = e.drawingBufferHeight / ae();
    }
    __name(Fe, "Fe");
    s(Fe, "updateSize");
    function he() {
      return o.width;
    }
    __name(he, "he");
    s(he, "width");
    function ge() {
      return o.height;
    }
    __name(ge, "ge");
    s(ge, "height");
    function ae() {
      var h;
      return (h = t.scale) != null ? h : 1;
    }
    __name(ae, "ae");
    s(ae, "scale");
    function ye() {
      return o.clearColor.clone();
    }
    __name(ye, "ye");
    return s(ye, "clearColor"), Fe(), S(), A(), { width: he, height: ge, scale: ae, makeTex: v, makeProgram: U, makeFont: w, drawTexture: ie, drawText: G, drawFmtText: M, drawRect: me, drawRectStroke: pe, drawLine: ne, drawTri: ce, fmtText: ve, frameStart: S, frameEnd: A, pushTransform: q, popTransform: d, pushMatrix: K, drawCalls: E, clearColor: ye };
  }
  __name(Rt, "Rt");
  var je;
  var Ie;
  var Je;
  var Tt;
  var tn;
  var rn;
  var it;
  var at;
  var Gt = $(() => {
    Pe();
    St();
    je = "topleft", Ie = 9, Je = 65536, Tt = 64, tn = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`, rn = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`, it = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`, at = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
    s(Se, "originPt");
    s(Rt, "gfxInit");
  });
  function kt(e) {
    return e === "pressed" || e === "rpressed" ? "down" : e === "released" ? "up" : e;
  }
  __name(kt, "kt");
  function Bt(e = {}) {
    var ne, ce, ve;
    let t = (ne = e.root) != null ? ne : document.body, r = { canvas: (ce = e.canvas) != null ? ce : (() => {
      let G = document.createElement("canvas");
      return t.appendChild(G), G;
    })(), keyStates: {}, charInputted: [], mouseMoved: false, mouseState: "up", mousePos: l(0, 0), mouseDeltaPos: l(0, 0), time: 0, realTime: 0, skipTime: false, dt: 0, scale: (ve = e.scale) != null ? ve : 1, isTouch: false, loopID: null, stopped: false, fps: 0, fpsBuf: [], fpsTimer: 0 }, o = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" }, m = ["space", "left", "right", "up", "down", "tab", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11"];
    e.width && e.height && !e.stretch ? (r.canvas.width = e.width * r.scale, r.canvas.height = e.height * r.scale) : (r.canvas.width = t.offsetWidth, r.canvas.height = t.offsetHeight);
    let v = ["outline: none", "cursor: default"];
    e.crisp && (v.push("image-rendering: pixelated"), v.push("image-rendering: crisp-edges")), r.canvas.style = v.join(";"), r.canvas.setAttribute("tabindex", "0");
    let U = r.canvas.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    r.isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0, r.canvas.addEventListener("mousemove", (G) => {
      r.mousePos = l(G.offsetX, G.offsetY).scale(1 / r.scale), r.mouseDeltaPos = l(G.movementX, G.movementY).scale(1 / r.scale), r.mouseMoved = true;
    }), r.canvas.addEventListener("mousedown", () => {
      r.mouseState = "pressed";
    }), r.canvas.addEventListener("mouseup", () => {
      r.mouseState = "released";
    }), r.canvas.addEventListener("keydown", (G) => {
      let M = o[G.key] || G.key.toLowerCase();
      m.includes(M) && G.preventDefault(), M.length === 1 && r.charInputted.push(G.key), M === "space" && r.charInputted.push(" "), G.repeat ? r.keyStates[M] = "rpressed" : r.keyStates[M] = "pressed";
    }), r.canvas.addEventListener("keyup", (G) => {
      let M = o[G.key] || G.key.toLowerCase();
      r.keyStates[M] = "released";
    }), r.canvas.addEventListener("touchstart", (G) => {
      if (!e.touchToMouse)
        return;
      G.preventDefault();
      let M = G.touches[0];
      r.mousePos = l(M.clientX, M.clientY).scale(1 / r.scale), r.mouseState = "pressed";
    }), r.canvas.addEventListener("touchmove", (G) => {
      if (!e.touchToMouse)
        return;
      G.preventDefault();
      let M = G.touches[0];
      r.mousePos = l(M.clientX, M.clientY).scale(1 / r.scale), r.mouseMoved = true;
    }), r.canvas.addEventListener("touchend", (G) => {
      !e.touchToMouse || (r.mouseState = "released");
    }), r.canvas.addEventListener("touchcancel", (G) => {
      !e.touchToMouse || (r.mouseState = "released");
    }), document.addEventListener("visibilitychange", () => {
      var G, M;
      switch (document.visibilityState) {
        case "visible":
          r.skipTime = true, (G = e.audioCtx) == null || G.resume();
          break;
        case "hidden":
          (M = e.audioCtx) == null || M.suspend();
          break;
      }
    });
    function w() {
      return r.mousePos.clone();
    }
    __name(w, "w");
    s(w, "mousePos");
    function x() {
      return r.mouseDeltaPos.clone();
    }
    __name(x, "x");
    s(x, "mouseDeltaPos");
    function D() {
      return r.mouseState === "pressed";
    }
    __name(D, "D");
    s(D, "mouseClicked");
    function S() {
      return r.mouseState === "pressed" || r.mouseState === "down";
    }
    __name(S, "S");
    s(S, "mouseDown");
    function A() {
      return r.mouseState === "released";
    }
    __name(A, "A");
    s(A, "mouseReleased");
    function E() {
      return r.mouseMoved;
    }
    __name(E, "E");
    s(E, "mouseMoved");
    function T(G) {
      return r.keyStates[G] === "pressed";
    }
    __name(T, "T");
    s(T, "keyPressed");
    function K(G) {
      return r.keyStates[G] === "pressed" || r.keyStates[G] === "rpressed";
    }
    __name(K, "K");
    s(K, "keyPressedRep");
    function F(G) {
      return r.keyStates[G] === "pressed" || r.keyStates[G] === "rpressed" || r.keyStates[G] === "down";
    }
    __name(F, "F");
    s(F, "keyDown");
    function X(G) {
      return r.keyStates[G] === "released";
    }
    __name(X, "X");
    s(X, "keyReleased");
    function N() {
      return [...r.charInputted];
    }
    __name(N, "N");
    s(N, "charInputted");
    function z2() {
      return r.dt;
    }
    __name(z2, "z");
    s(z2, "dt");
    function O() {
      return r.time;
    }
    __name(O, "O");
    s(O, "time");
    function q() {
      return r.fps;
    }
    __name(q, "q");
    s(q, "fps");
    function d() {
      return r.canvas.toDataURL();
    }
    __name(d, "d");
    s(d, "screenshot");
    function j(G) {
      return G && (r.canvas.style.cursor = G), r.canvas.style.cursor;
    }
    __name(j, "j");
    s(j, "cursor");
    function ie(G) {
      return document.fullscreenElement ? document.exitFullscreen() : r.canvas.requestFullscreen(), document.fullscreenElement != null;
    }
    __name(ie, "ie");
    s(ie, "fullscreen");
    function me(G) {
      let M = s((Fe) => {
        j("default");
        let he = Fe / 1e3, ge = he - r.realTime;
        r.realTime = he, r.skipTime || (r.dt = ge, r.time += r.dt, r.fpsBuf.push(1 / r.dt), r.fpsTimer += r.dt, r.fpsTimer >= 1 && (r.fpsTimer = 0, r.fps = Math.round(r.fpsBuf.reduce((ae, ye) => ae + ye) / r.fpsBuf.length), r.fpsBuf = [])), r.skipTime = false, G();
        for (let ae in r.keyStates)
          r.keyStates[ae] = kt(r.keyStates[ae]);
        r.mouseState = kt(r.mouseState), r.charInputted = [], r.mouseMoved = false, r.loopID = requestAnimationFrame(M);
      }, "frame");
      r.stopped = false, r.loopID = requestAnimationFrame(M);
    }
    __name(me, "me");
    s(me, "run");
    function pe() {
      cancelAnimationFrame(r.loopID), r.stopped = true;
    }
    __name(pe, "pe");
    return s(pe, "quit"), { gl: U, mousePos: w, mouseDeltaPos: x, keyDown: F, keyPressed: T, keyPressedRep: K, keyReleased: X, mouseDown: S, mouseClicked: D, mouseReleased: A, mouseMoved: E, charInputted: N, cursor: j, dt: z2, time: O, fps: q, screenshot: d, run: me, quit: pe, focused: () => document.activeElement === r.canvas, focus: () => r.canvas.focus(), canvas: r.canvas, isTouch: r.isTouch, scale: r.scale, fullscreen: ie };
  }
  __name(Bt, "Bt");
  var _t = $(() => {
    Pe();
    s(kt, "processBtnState");
    s(Bt, "appInit");
  });
  var Vt;
  var Ft = $(() => {
    Vt = xt("SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwPj4+Pj4+TExMTExZWVlZWVlnZ2dnZ3V1dXV1dYODg4ODkZGRkZGRn5+fn5+frKysrKy6urq6urrIyMjIyNbW1tbW1uTk5OTk8vLy8vLy//////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAQKAAAAAAAAHjOZTf9/AAAAAAAAAAAAAAAAAAAAAP/7kGQAAANUMEoFPeACNQV40KEYABEY41g5vAAA9RjpZxRwAImU+W8eshaFpAQgALAAYALATx/nYDYCMJ0HITQYYA7AH4c7MoGsnCMU5pnW+OQnBcDrQ9Xx7w37/D+PimYavV8elKUpT5fqx5VjV6vZ38eJR48eRKa9KUp7v396UgPHkQwMAAAAAA//8MAOp39CECAAhlIEEIIECBAgTT1oj///tEQYT0wgEIYxgDC09aIiE7u7u7uIiIz+LtoIQGE/+XAGYLjpTAIOGYYy0ZACgDgSNFxC7YYiINocwERjAEDhIy0mRoGwAE7lOTBsGhj1qrXNCU9GrgwSPr80jj0dIpT9DRUNHKJbRxiWSiifVHuD2b0EbjLkOUzSXztP3uE1JpHzV6NPq+f3P5T0/f/lNH7lWTavQ5Xz1yLVe653///qf93B7f/vMdaKJAAJAMAIwIMAHMpzDkoYwD8CR717zVb8/p54P3MikXGCEWhQOEAOAdP6v8b8oNL/EzdnROC8Zo+z+71O8VVAGIKFEglKbidkoLam0mAFiwo0ZoVExf/7kmQLgAQyZFxvPWAENcVKXeK0ABAk2WFMaSNIzBMptBYfArbkZgpWjEQpcmjxQoG2qREWQcvpzuuIm29THt3ElhDNlrXV///XTGbm7Kbx0ymcRX///x7GVvquf5vk/dPs0Wi5Td1vggDxqbNII4bAPTU3Ix5h9FJTe7zv1LHG/uPsPrvth0ejchVzVT3giirs6sQAACgQAAIAdaXbRAYra/2t0//3HwqLKIlBOJhOg4BzAOkt+MOL6H8nlNvKyi3rOnqP//zf6AATwBAKIcHKixxwjl1TjDVIrvTqdmKQOFQBUBDwZ1EhHlDEGEVyGQWBAHrcJgRSXYbkvHK/8/6rbYjs4Qj0C8mRy2hwRv/82opGT55fROgRoBTjanaiQiMRHUu1/P3V9yGFffaVv78U1/6l/kpo0cz73vuSv/9GeaqDVRA5bWdHRKQKIEAAAAoIktKeEmdQFKN5sguv/ZSC0oxCAR7CzcJgEsd8cA0M/x0tzv15E7//5L5KCqoIAAmBFIKM1UxYtMMFjLKESTE8lhaelUyCBYeA2IN4rK1iDt//+5JkEgAkZzlVq29D8DJDWo0YLLARwPFZrL0PyLsUazTAlpI+hKSx01VSOfbjXg0iW9/jVPDleLJ15QQA4Okdc5ByMDFIeuCCE5CvevwBGH8YibiX9FtaIIgUikF42wrZw6ZJ6WlHrA+Ki5++NNMeYH1lEkwwJAIJB4ugVFguXFc20Vd/FLlvq1GSiSwAFABABABA47k6BFeNvxEQZO9v3L1IE4iEVElfrXmEmlyWIyGslFA55gH/sW7////o9AAFIBIIAAIUMzYTTNkgsAmYObfwQyzplrOmYvq0BKCKNN+nUTbvD7cJzvHxrEWG5QqvP8U1vFx6CwE8NoRc2ADBeEb/HoXh60N7ST8nw9QiiGoYvf/r6GtC9+vLwXHjaSkIp3iupC5+Nii81Zhu85pNYbFvrf+UFThDOYYY26off+W6b//73GTiN9xDfl0AAwBAiMBO8qsDBPOZtuT/dTbjVVbY/KSGH6ppHwKv/6X+s8gUCN/lODzv////GQAGAMQAADlXAUCBJiY0wFQZusYQOaQzaTwDBTcx0IvVp8m7uxKp//uSZBMCBHRI1eNPLHAyxNqWGeoYUIEnWYyxD8DUFSn0l6iojcd+oEOkzV6uWqyHNzjqmv+7V5xGUfY9yEmbziTzjRscm9OqFQp1PKFrqu3PX/7YuGtDU6bt0OUTpv38rdc+37dVDQLKUchaJ853E9edNDGqWwsYz1VoiSStEJtZvw6+sNqFWqaIXJjQCGAAGWAYVwmag/x3BRJw1wYF7IzVqDcNzn85d//FzK7IgwbQwccLoB4AsF8Nj/1ESRUAAVJwAFh0YOFEhmSJEHKQRDyhszgLUpHIgFrb5cySFg5jv10ImlYuvaaGBItfXqnNPmic+XNkmb5fW49vdhq97nQMQyGIlM2v8oQSrxKSxE4F1WqrduqvuJCRof1R7Gsre9KszUVF1/t3PzH2tnp+iSUG3rDwGNcDzxCGA8atuQF0paZAAkAhAQAEAC240yJV+nJgUrqq8axAYtVpYjZyFGb13/17jwiClQDaCdytZpyHHf1R/EG/+lUAgAAAChhmJvioVGGBCFgqdpsGAkUUrbTstwTCJgLQpFIsELW7t/68Iv/7kmQUgAQ9NFO9aeAAPAU6RKwUABClY2e5hoARGpDvPydCAsY8WO10fSvUOnfT98+n/l/6/+hxslhQ1DEOaevNKGocvIYba8WJpaP/15pX0NQ1DUNn/////k6lPp/N61rBi8RJFfERV3IgrqDsJA64sjCoKxDDQ9xEcWDpMBDwVFDIAEIAAzryxsjGi4q/oWpixKjhklAF4pUrDPjFhFVupDFZ/t/t0YPAygUBhADPR/KLCKJ8h2Oxhpxz/zNRAAFl0MAZLAYEAiVbEiz36LSgZ5QoQVat69KNy8FyM5Z80ACHAzgnISEkxUSJIDyBSwi5KF4mjBl4xJdbrG9ComLrL8YATiodhQKCkj6ROdyg1y5XmZlvMVmpJzYppJDwLi/Lp9vT3TfmimOGpuezi2U/9FNav0zX9Oja2r//8+hvuihuQAAMAVmqFgAgCcuboAEAAAUcqy8ca0BHBmwbFkED0CNA1YYDPkhcQrRJxcY3BzfxxltAz9vX62Xl3plAzWmRO+FkZyH///1qAAEjQBAACUpgU5o2AIBmFBGMamrGg0b/+5JkC4ADxyLWb2ngAEEkGofsoACP7U1JLaxTkOqFaKhspGgnW3SGC56ZgUJGCRnLOmIJAkuNBgvwU4Ocf8CJK9UsafH9/Frj///365XSoME+DZMw5UNjrMbVoeIj9EL91IuQ5KHyl5V2LCpdIdESgafOHxVGkAlkHuakmix/gN8+BP/sKguLAAoAtUjtvaoeEADwr3OK11E4KBlojgeQNQBJ4MvCAd/4t/xMMzeLhQGQ1//6tQu5BaBOGCT6U4aafvXZ//4iAPAAAAbLkgIlQmMSLA2H1CVNAlWwyVvKIQIxOSK1NWxs4MBUATlKrAkIMPAjCAdS6MVFzuURWa/+/qQWEGsA6EEpiBEJb9Q21lAHoBoD0B6aAPhyt+bG3muoXIN3RLadXxUfr/ohjGFF/p97eqNI5noKAqYLNPpUTDSI9/TmA6B+YAAADgA0Y4lxTW1SQfOQuDDDI0KTTuIrF5qoJrUFhUFAsg+AT2hbkaRZYGIjBKVDIa5VgNN/9P/rCDsBJbYJRKpCA1ArAkigIeYY61AjE+jubyiZFZ3+L789//uSZBCABHVj2entNmw1JXokLycYEFTFVa0wz4DYjKs08J2Q+r4n3lgbWaaMwMLEjFW88F39brqPF83cv1mCSJeY3Q2uiQxhBJxCBeR1D2LQRsYQcZUTzdNll8+OwZBsIwSgl45ymaHX603Mz7JmZuvt71GDTN66zev/+cLn/b5imV8pAHkg61FIJchBSG+zycgAZgADD6F1iQQRXRWmWS6bDIIgyBCZEcdl/KgXGmVKFv/vl8ry/5bLypf//U5jhYDhL9X/pAA0AKBIAAKgGtGXGGWJgEoF2JNsHlKfSKLRhGBAgIuWZKIJCFpF1VBhkB+EfzEyMUJdWuMrEZoPZ5BfF3/Nu62riIdjoO4AAKD2sTrDmpZZaYysf/810TitAVvn9xtFucieiaEy54YqiIO6RqkGAm5wVO0bFB0sDTdNxYGekKktR4KAAfAwUIgI8Ci6aXgtwbhPWAC+CKExAFydNtYGXNZoQjUsXv/9vKjgmdwieb+h7kHvPoc//0FaCACAATKFC4Y9ammklidbaiJNPBhGWTNhFSgdtalK12lpl//7kmQRAFN2NFI7TBvwNKNaTRsFGBWdfV2tPNcYvBHpgPKJsc8IUcTCxY3HSvUVNTWe/Z3YWlrJ0yrNRUiT19aprA7E+mPP+ZmC3/CsheOJXhc/9VJb3UZnphUBcqZUZQth1i3XqtPYu2Sy1s8DV9ZYACAAASAAHgFkQcOqgB5utFHFh3kSi4USs0yk4iOClREmjvdG+upaiLcRA6/9QGbOfxF/8sEAQAVG0G07YFMihKR4EXJCkRdX9isueLqUMRAQdhDZmv3KeR0nPqRVrZmSIXDt+BBSR7qqbKQcB98W9qiMb55preHIStxFWPE4lAyI+BKz2iSxonpvMR5DgKxTH6vGGXAbYCaAnJUW4W07EesQqbfqdbo4qNnPxSpn1H8eahszc/y9//dn1V7D/OYpn1szQKAPXTMlO/rO//u7JriJXbld7aP33v6RXYg/COIDzTWkTspg6Ay1YaDSwKxrP/LfIikHjmO871POf/kEAseAgoPEi9/0ZziNwfxVKy9qAEGEEAAq1EcOamDEGHAA0iao8k31rz2MiLNEik6VQ37/+5JkEAgEYU5WU0M3MDjDe0o9IjiOzSVM7aCzEM2GqXD8pFB0zxMcHCQNHtZD+R+pMWZxOJ/otEZTvVN/MeU12xTVcL+f2YaiNJTVoPd6SvzEnKel5GXOzEaazgdChnP2jOAwpfyRpVlQwoJBwpN1L1DL////6TVWcoepf7CVWrpEWiym5lR5U0BSMlxQC4qByOyQIAEuJfIriWixDqRgMfVZWuvRowjR9BzP5lZlT/+YG50CsSBG////////liXDQVMxEaBkbzKAAACnDIAstY7iK7gGSF7SIDexaTtPOHABk9YcmJEACmo50pgWal22etroBpYoVqtU6OPqvlf0c4QCAfLk9P/FJs4KCQMf6ECZyA6BwqqyJ0rMYj56k1/UlTIx1V3Rt5NF71D4qlptDC8VMgQVHFDlQnDFi06qQgKQAAIK4TxxJGFGYJuZNGXRdpq7IW/DYpPIQRFJLAc+qn1E0XYdOkQVJT+z8Lvff//8vbKAWTIBBUUdM6cOhlDry7x4dAkJXIBhbO3HSMMMGBQ9K9/JNfu09PjTO64wYEcR//uSZBeABP5g11NPRVwzQ4r8PMJVj7j9UU2wUwDPjeq0Z5w675D9+uDdL2QsuIry2lZtwn/pJYyRRjANEOQxNWw8mU7Tq+vueV7JrX/Pg7VIkEuZT5dwd85MVoq5lpStNICkBAcFR88//58KO8Zjt2PIGxWl1cVfXeNGH18SReNT//hYliWtQuNluxyxONbm4U+lpkAgpyE7yAIYUjIaqHmARJ0GQTtmH60xdwFp/u253XBCxD0f/lBcguCALn//Y5nqEv//1h4BAAwgAA5gcHmpIplgeW9fAOM6RFZUywrsGAiRmKkanQnCFBjYoPDS7bjwtPTkVI8D/P8VVLcTUz65n7PW2s3tNYHgEul4tBaIz0A9RgJAyAMI4/i0fpQKjhX9S+qIa0vmc4CZit/0/3UTDGeKNpkk0nu2rUE2ag8WErhE/kgAiQCJKQEYBA5Wn6CxHoIUh6dQ46nLIuwFk4S/LaDQxXu7Yf/pf//lwJB0S/Ff/4C///EiBEiAAAIAMnpngiIABAdMpKigkXaUwhLEGvpiofmXW57h2XAZO3CMRv/7kmQUAEOHQlHraRTQMkQp6GWFZBTVU1lNPTPYyIyocYeUoNgLBWAs1jPkTv/tXBaeZ/tbD/nAGP8/xT0SNEi5zof0KIVEzVe9r5lZOol7kyaXMYS4J/ZS3djp//UaeVyR0mUMlTgfz8XqMzIEgAQQ6UNQ1DSE0/C16OvyaocF4ijAGFci0FSYqCUSaWs6t9F6/699DKvMgMoK1//kSbvxtyBN27I7mdXgNMAW75sRU1UwUHYG5axI2tFIFpkgx7nnK+1JmRKjqeAd5Ph0QAL4QAnirmiPlg0yBDlrb/d3ngtA65rb999+8vdDCfnJuJAYIl285zklpVbrKpk1PEzrOY9NZUgyz6OiOsKt5qG/g2ibxSZ+/eTI/NB8n4ev//n2nIw85GAdwuJL7kYnnAbpcf1RBKH6b2U4RWP8dmWH5snsAFYwADBgAopKdzFJq4Jlmotloh/m4QpTSvJRE3nYZHephoqBhVf+P7vQ9BPlwZCP+3//+hdy5uUwS3LDEgQx4cdIgvDEBR1YqymCsSbKzRy2aQmSv+AAcAgAkvzPfuX/+5JkFQAj6VFX00Zr5DllOhhgpn4MmSs+zSRRiO8U5tWklYgSLKfs+Xheb/+6WaAQCKTztNeJ382MUltZNnjSJoFrCqB6C4mFcwJpJD4Oc8dLDXMTh9k1/rmTopfzqv9AvHWfOuZJlEvHSVMjyjpkVucKSzxJVQBgAAIo8DGqRdYCXPckFYg+dH9A/qUyljrtpxH9RJX/Z3Vv6uFkPg4M2jf3CL09QrwOrMt69n//8UFEAAMHWdhg1CcjyVBwiArOYlDL5NPY6x8ZLFBCGi6SVTKX5nqdSEFjebnv2zHdt0dj6xvORsSFzwqRNTJSZIrrlpXcURNL9WW7krBgr5jPMaGcvJ5v0N1s19CV7+7fvQfjySX2QECWUgKgeJCIif4WRBZ/6archpDkzE7oWctK3zEHP9Smeai8oeHkM6AK7pGjtOgeFv40ugqNd+Iv///uAZAMgAAAUeSWhLPpdwk3iXpBw43hOVIp1gliUOSaeZcZeZhLAH9TtD56wUpBduzLF5v5qViTH6o+I0+8Z1asaLgKVAohlpB72DgAQBQxEd3g//uSZCiAA6k0UdMPQfA+xcnBYON8E3WDVU0w1ZjPDSmo8IniHAFDNnkXF3B94gicH5d8MFw+IHZwufxOf/8gsHw+XrD4Jn8T4RAyQiABNBQg/3giEWuZ42mVFB3kkXNjhqBg1CghEUbN3/7/KBhyqNueef/MIDBClP3YRnKLiIlEFzf//0g+4zKpRIKTpqQgUtnHGFw6RSLN421iGcYapqFxny/capK9r9v+2BSy/RU1yZxa2eGaWK07ijfcxeiO3iuHJvjbXzts+Ny+XyFnsne1h0qG4mAaN6xRGaLVxKPlrri0Bg9oXGyxcw8JRBPkUzC8v451vVd9liSX85JMrmkVNwxOCwUg298////7ks//L409/hwMRIozKiIckXtjzDaAMTBcAACAwLGargPSEgEJZN/EFjfF/VKgaMYKMbwtf/T0UCGGfjfOAZ2frCigYdwh/+sGlQBxhCAAAUHkDPqOdmmUdAVYl3IhrEfR8qZFjLYEPOyzVGvm6lNUJCk2PNazwFxaijk+ZEaiTehoJGuDh6zN/EVP8BCLD/88BoY7Xv/7kmQlgBNmMtNTL0FwOGZJ/WHiKAyhJU+soE3A3JnmAa2oaCIru/+RrEHMTphxQ0X/LzoVy4gKhYl6ZUlklW7CLRVoYmgABwCRMAAMA/poCiEEYLsBVodWcVZ18+CcAfH165U4Xgh7/X1/BAQF6GN/BwQ/+D9S9P6wII//CoANYFYCBAKlGQDKhVjjylKARw2mPAtp8JjcQHggQswVsOEKsF6AIBWvmpIFdSZvRVv/LHWEy0+txMxu+VK9gEqG5pWf6GNGU4UBVkfd+bsj/6lZE0fkOpAqAOvyUO9oo+IiEtcLKOGzhhSGa4MYINHWoQsFr8zzmow0tRILkqz5/+vFxl/oZX/+qGW//xiLjR3xcGn//0QLkTQJh1UA8MAQAEXC/YxODKTDUEhrASs1512GRp+dRFFdTWIRaOXrve1eNjTNpreqQYrC9NBlQc1f8YO2po8bnH6qffuRvU7taiNF3baokE0YpmjRCHRclWBb9NCHKHpERwHRG3pqgXklq4sBpLjGvmekg8Y7SjM1FZopIM8IhB6dtMr8aKsdovh4FW//+5JkQ4CjTDdSU0gtIDiE+YBrKgwNbSVJTCBPwN8N5ZW8NKDnhRB8AXCm//KAsBUCwKU//oJQnET+UP3/zpYRocAAABJkVzzIuoLGEaDoxfsNva12EUdxhJMGFQioSg8GxKsLm8kWEmExJuNidarkk+OTXc0i2OZEq2v+tZr/MDZRS0I7LfRpHdlsiF6m/mEjk+XlK10UqtKYUwNgMx24hUtCJLfpM3ExUeKDYjClgZAzAjQ0qlNQBTsGpk9zSRkCiKkRGp572VXsPYChGvxhAuYkDYZK//jSRgto2mTf6+PJqgAAgIAAAACYZE6aZOHhYkYlcbpeYQq1RgLO4U8TIlL1sGw+iKZi5Kzc/bKT0yXrIUMES89RCWy8oWlxqIQlKANLFpT/KjUrK+UCYbZqGnjVj29aO5dzofWAskRX5eJWPi4kf/aRVjy3Wlyg2AnMYIDSTLwZUTASIzflPWUwwlUnIFMnGiyABeaXJcN91PmQJCLzmvUJkFOHCrX/+6O///IHnT4tT9YYBoNMQ09GfKIErwdwChNz1Qy5+5S/wWeY//uSZF+C03UyT2tMO0A3RRkhY20KzQjDMszhA8DjlGOBp5y4ZCS3ica52GIGiryv7FAaSDVZSXKFTiir+GvGiuK4rjgwPVTddso+W/42a4ueJJHDYtfj6YoKknnjzRgKA0fBIRZOSsprJqnoNN73ps/Z9DVgbKNbMGmRzrYBMAZCPUANkAZQ0syAC2ubK1NF90+WoesBpnhY8qwVDkNb/5Uof6//418TgElCSgAIgyAAQBHEmiaQFPIRmfAMELffpo0IflyEuAAQnSnKvwTlVlnIgOAAGS3P3IydjXPSh/CaVRqpSNCjQqDvPM+fLcuN+WgqNix6CoHomUWTT86JjziRSZ3yjnq+dIldKPU11KUuf6wAASMAAJxE+MlyktgE9UGSxjEx6RR0v1s9bWZ+EJSrGtjqUIhklG3J8eLRn/2U/nv7f///+7/6gBQgEAMUijVMwweWWMyYM/PLXuc7DptIQmBARMRCxXjEIcTNDQgSSeHpUNXO7dRSOllJPvnY7yzaO1hmUjsKvHe99fOxrabMX7mGTi5tsNkZVZLndzxse//7kmR7ABM2O0pbKTvQN4NI+WGFPA2ZESs1pYAAvA0jVrJwAHfbr/c6//vW790dzX36QNBRlDv/6QQAU3V64yUgBEAYc/lI8e5bm+Z9+j+4aaj4tFrb//iker/4a12b/V//q//9v+7vAEAAAAMqZTGd5gL4f54o6ZebKNrR/zWVYUEVYVVv8BuAV2OUT+DUQgkJ8J1Ey4ZbFCiAwgwzMSdHV4jQR+OoPWEASaPkyYq+PsQFFJCsEEJtOiUjI/+GRhtC2DnizTMXATJig9Ey/kAJMrkHGYJ8gpLjmJOYoskpav+ShRJInyGGZVJMihDi6pIxRZJJel/8iZPkYiREnyKE0akTL5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  });
  function Nt() {
    let e = (() => {
      let v = new (window.AudioContext || window.webkitAudioContext)(), U = v.createGain(), w = U;
      return w.connect(v.destination), { ctx: v, gainNode: U, masterNode: w };
    })(), t;
    e.ctx.decodeAudioData(Vt.buffer.slice(0), (v) => {
      t = v;
    }, () => {
      throw new Error("failed to make burp");
    });
    function r(v) {
      return v !== void 0 && (e.gainNode.gain.value = le(v, Xt, Lt)), e.gainNode.gain.value;
    }
    __name(r, "r");
    s(r, "volume");
    function o(v, U = { loop: false, volume: 1, speed: 1, detune: 0, seek: 0 }) {
      var K;
      let w = false, x = e.ctx.createBufferSource();
      x.buffer = v, x.loop = !!U.loop;
      let D = e.ctx.createGain();
      x.connect(D), D.connect(e.masterNode);
      let S = (K = U.seek) != null ? K : 0;
      x.start(0, S);
      let A = e.ctx.currentTime - S, E = null, T = { stop() {
        w || (this.pause(), A = e.ctx.currentTime);
      }, play(F) {
        if (!w)
          return;
        let X = x;
        x = e.ctx.createBufferSource(), x.buffer = X.buffer, x.loop = X.loop, x.playbackRate.value = X.playbackRate.value, x.detune && (x.detune.value = X.detune.value), x.connect(D);
        let N = F != null ? F : this.time();
        x.start(0, N), A = e.ctx.currentTime - N, w = false, E = null;
      }, pause() {
        w || (x.stop(), w = true, E = e.ctx.currentTime);
      }, paused() {
        return w;
      }, stopped() {
        return w;
      }, speed(F) {
        return F !== void 0 && (x.playbackRate.value = le(F, sn, on)), x.playbackRate.value;
      }, detune(F) {
        return x.detune ? (F !== void 0 && (x.detune.value = le(F, an, un)), x.detune.value) : 0;
      }, volume(F) {
        return F !== void 0 && (D.gain.value = le(F, Xt, Lt)), D.gain.value;
      }, loop() {
        x.loop = true;
      }, unloop() {
        x.loop = false;
      }, duration() {
        return v.duration;
      }, time() {
        return w ? E - A : e.ctx.currentTime - A;
      } };
      return T.speed(U.speed), T.detune(U.detune), T.volume(U.volume), T;
    }
    __name(o, "o");
    s(o, "play");
    function m(v) {
      return o(t, v);
    }
    __name(m, "m");
    return s(m, "burp"), { ctx: e.ctx, volume: r, play: o, burp: m };
  }
  __name(Nt, "Nt");
  var Xt;
  var Lt;
  var sn;
  var on;
  var an;
  var un;
  var Yt = $(() => {
    Pe();
    Ft();
    Xt = 0, Lt = 3, sn = 0, on = 3, an = -1200, un = 1200;
    s(Nt, "audioInit");
  });
  var It;
  var qt = $(() => {
    It = "data:image/png;base64,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";
  });
  var Kt;
  var zt = $(() => {
    Kt = "data:image/png;base64,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";
  });
  var Mt;
  var Ht = $(() => {
    Mt = "data:image/png;base64,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";
  });
  function Qt(e) {
    let t = new Image();
    return t.src = e, t.crossOrigin = "anonymous", new Promise((r, o) => {
      t.onload = () => {
        r(t);
      }, t.onerror = () => {
        o(`failed to load ${e}`);
      };
    });
  }
  __name(Qt, "Qt");
  function $t(e) {
    return e.startsWith("data:");
  }
  __name($t, "$t");
  function Wt(e, t, r = {}) {
    let o = { lastLoaderID: 0, loadRoot: "", loaders: {}, sprites: {}, sounds: {}, fonts: {}, shaders: {} };
    function m(A) {
      var T;
      let E = o.lastLoaderID;
      o.loaders[E] = false, o.lastLoaderID++, A.catch((T = r.errHandler) != null ? T : console.error).finally(() => o.loaders[E] = true);
    }
    __name(m, "m");
    s(m, "load");
    function v() {
      let A = 0, E = 0;
      for (let T in o.loaders)
        A += 1, o.loaders[T] && (E += 1);
      return E / A;
    }
    __name(v, "v");
    s(v, "loadProgress");
    function U(A) {
      return A !== void 0 && (o.loadRoot = A), o.loadRoot;
    }
    __name(U, "U");
    s(U, "loadRoot");
    function w(A, E, T, K, F = ut) {
      let X = new Promise((N, z2) => {
        let O = $t(E) ? E : o.loadRoot + E;
        Qt(O).then((q) => {
          let d = e.makeFont(e.makeTex(q), T, K, F);
          A && (o.fonts[A] = d), N(d);
        }).catch(z2);
      });
      return m(X), X;
    }
    __name(w, "w");
    s(w, "loadFont");
    function x(A, E, T = { sliceX: 1, sliceY: 1, anims: {} }) {
      function K(X, N, z2 = { sliceX: 1, sliceY: 1, gridWidth: 0, gridHeight: 0, anims: {} }) {
        let O = [], q = e.makeTex(N), d = z2.sliceX || q.width / (z2.gridWidth || q.width), j = z2.sliceY || q.height / (z2.gridHeight || q.height), ie = 1 / d, me = 1 / j;
        for (let ne = 0; ne < j; ne++)
          for (let ce = 0; ce < d; ce++)
            O.push(oe(ce * ie, ne * me, ie, me));
        let pe = { tex: q, frames: O, anims: z2.anims || {} };
        return X && (o.sprites[X] = pe), pe;
      }
      __name(K, "K");
      s(K, "loadRawSprite");
      let F = new Promise((X, N) => {
        if (!E)
          return N(`expected sprite src for "${A}"`);
        if (typeof E == "string") {
          let z2 = $t(E) ? E : o.loadRoot + E;
          Qt(z2).then((O) => {
            X(K(A, O, T));
          }).catch(N);
        } else
          X(K(A, E, T));
      });
      return m(F), F;
    }
    __name(x, "x");
    s(x, "loadSprite");
    function D(A, E, T, K = false) {
      function F(N, z2, O) {
        let q = e.makeProgram(z2, O);
        return N && (o.shaders[N] = q), q;
      }
      __name(F, "F");
      s(F, "loadRawShader");
      let X = new Promise((N, z2) => {
        if (!E && !T)
          return z2("no shader");
        function O(q) {
          return q ? fetch(o.loadRoot + q).then((d) => {
            if (d.ok)
              return d.text();
            throw new Error(`failed to load ${q}`);
          }).catch(z2) : new Promise((d) => d(null));
        }
        __name(O, "O");
        if (s(O, "resolveUrl"), K)
          Promise.all([O(E), O(T)]).then(([q, d]) => {
            N(F(A, q, d));
          }).catch(z2);
        else
          try {
            N(F(A, E, T));
          } catch (q) {
            z2(q);
          }
      });
      return m(X), X;
    }
    __name(D, "D");
    s(D, "loadShader");
    function S(A, E) {
      let T = o.loadRoot + E, K = new Promise((F, X) => {
        if (!E)
          return X(`expected sound src for "${A}"`);
        typeof E == "string" && fetch(T).then((N) => {
          if (N.ok)
            return N.arrayBuffer();
          throw new Error(`failed to load ${T}`);
        }).then((N) => new Promise((z2, O) => {
          t.ctx.decodeAudioData(N, z2, O);
        })).then((N) => {
          A && (o.sounds[A] = N), F(N);
        }).catch(X);
      });
      return m(K), K;
    }
    __name(S, "S");
    return s(S, "loadSound"), w("froggy", It, 48, 64), w("sink", Kt, 6, 8, "\u2588\u263A\u263B\u2665\u2666\u2663\u2660\u25CF\u25CB\u25AA\u25A1\u25A0\u25D8\u266A\u266B\u2261\u25BA\u25C4\u2302\xDE\xC0\xDF\xD7\xA5\u2191\u2193\u2192\u2190\u25CC\u25CF\u25BC\u25B2 !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u03A7\u2591\u2592\u2593\u1E00\u1E01\u1E02\u2502\u252C\u2524\u250C\u2510\u1E03\u1E04\u253C\u1E05\u1E06\u1E07\u1E08\u1E09\u1E0A\u1E0B\u1E0C\u2500\u251C\u2534\u2514\u2518\u1E0D\u1E0E\u205E\u1E0F\u1E10\u1E11\u1E12\u1E13\u1E14\u1E15\u1E16\u1E17\u1E18\u2584\u1E19\u1E1A\u1E1B\u1E1C\u2026\u1E1D\u1E1E\u1E1F\u1E20\u1E21\u1E22\u1E23\u1E24\u1E25\u1E26\u258C\u2590\u1E27\u1E28\u1E29\u1E2A\u1E2B\u1E2C\u1E2D\u1E2E\u1E2F\u1E30\u1E31\u1E32\u1E33\u1E34\u1E35\u1E36\u1E37\u1E38\u1E39\u1E3A\u1E3B\u1E3C\u1E3D\u1E3E\u1E3F\u1E40\u1E41\u1E42\u1E43\u1E44\u1E45\u1E46\u1E47\u1E48\u1E49\u1E4A\u1E4B\u1E4C\u1E4D\u1E4E\u1E4F\u1E50\u1E51\u1E52\u1E53\u1E54\u1E55\u1E56\u1E57\u1E58\u1E59\u1E5A\u1E5B\u1E5C\u1E5D\u1E5E\u1E5F\u1E60\u1E61\u1E62\u1E63\u1E64\u1E65\u1E66\u1E67\u1E68\u1E69\u1E6A\u1E6B\u1E6C\u1E6D\u1E6E\u1E6F\u1E70\u1E71\u1E72\u1E73\u1E74\u1E75\u1E76\u1E77\u1E78\u1E79\u1E7A\u1E7B\u1E7C"), w("sinko", Mt, 8, 10), { loadRoot: U, loadSprite: x, loadSound: S, loadFont: w, loadShader: D, loadProgress: v, load: m, sprites: o.sprites, fonts: o.fonts, sounds: o.sounds, shaders: o.shaders };
  }
  __name(Wt, "Wt");
  var ut;
  var Ot;
  var jt = $(() => {
    Pe();
    qt();
    zt();
    Ht();
    ut = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~", Ot = " \u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0";
    s(Qt, "loadImg");
    s($t, "isDataUrl");
    s(Wt, "assetsInit");
  });
  function Jt(e, t, r = { max: 8 }) {
    var D;
    let o = [], m = (D = r.max) != null ? D : 8;
    function v() {
      o.length > m && (o = o.slice(0, m));
      let S = l(0, e.height());
      o.forEach((A, E) => {
        let T = Be(E, 0, m, 1, 0.5), K = Be(E, 0, m, 0.8, 0.2), F = (() => {
          switch (A.type) {
            case "info":
              return W(255, 255, 255, T);
            case "error":
              return W(255, 0, 127, T);
          }
        })(), X = e.fmtText(A.msg, t.fonts.sink, { pos: S, origin: "botleft", color: F, size: hn / e.scale(), width: e.width() });
        e.drawRect(S, X.width, X.height, { origin: "botleft", color: W(0, 0, 0, K) }), e.drawFmtText(X), S.y -= X.height;
      });
    }
    __name(v, "v");
    s(v, "draw");
    function U(S) {
      o.unshift({ type: "error", msg: S });
    }
    __name(U, "U");
    s(U, "error");
    function w(S) {
      o.unshift({ type: "info", msg: S });
    }
    __name(w, "w");
    s(w, "info");
    function x() {
      o = [];
    }
    __name(x, "x");
    return s(x, "clear"), { info: w, error: U, draw: v, clear: x };
  }
  __name(Jt, "Jt");
  var hn;
  var Zt = $(() => {
    Pe();
    hn = 16;
    s(Jt, "loggerInit");
  });
  function er(e) {
    let t = {}, r = [], o = null;
    function m() {
      return o !== null && o.readyState === 1;
    }
    __name(m, "m");
    s(m, "connected");
    function v() {
      let D = new WebSocket(e);
      return new Promise((S, A) => {
        D.onopen = () => {
          S(D), o = D;
          for (let E of r)
            D.send(E);
        }, D.onerror = () => {
          A(`failed to connect to ${e}`);
        }, D.onmessage = (E) => {
          let T = JSON.parse(E.data);
          if (t[T.type])
            for (let K of t[T.type])
              K(T.id, T.data);
        };
      });
    }
    __name(v, "v");
    s(v, "connect");
    function U(D, S) {
      t[D] || (t[D] = []), t[D].push(S);
    }
    __name(U, "U");
    s(U, "recv");
    function w(D, S) {
      let A = JSON.stringify({ type: D, data: S });
      o ? o.send(A) : r.push(A);
    }
    __name(w, "w");
    s(w, "send");
    function x() {
      o && o.close();
    }
    __name(x, "x");
    return s(x, "close"), { connect: v, close: x, connected: m, recv: U, send: w };
  }
  __name(er, "er");
  var tr = $(() => {
    s(er, "netInit");
  });
  var nr;
  var rr = $(() => {
    nr = "data:image/png;base64,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";
  });
  var sr;
  var or = $(() => {
    rr();
    sr = s((e) => {
      function t(r = "bean") {
        return e.loadSprite(r, nr);
      }
      __name(t, "t");
      return s(t, "loadBean"), { loadBean: t };
    }, "default");
  });
  var ir;
  var ar = $(() => {
    ir = s((e) => {
      function t(o) {
        let m = new Image();
        return m.src = o, m.crossOrigin = "anonymous", new Promise((v, U) => {
          m.onload = () => {
            v(m);
          }, m.onerror = () => {
            U(`failed to load ${o}`);
          };
        });
      }
      __name(t, "t");
      s(t, "loadImg");
      function r(o, m) {
        let v = new Promise((U, w) => {
          fetch(e.loadRoot() + m).then((x) => x.json()).then((x) => gt(this, null, function* () {
            let D = yield Promise.all(x.frames.map(t)), S = document.createElement("canvas");
            S.width = x.width, S.height = x.height * x.frames.length;
            let A = S.getContext("2d");
            return D.forEach((E, T) => {
              A.drawImage(E, 0, T * x.height);
            }), e.loadSprite(o, S, { sliceY: x.frames.length, anims: x.anims });
          })).then(U).catch(w);
        });
        return e.load(v), v;
      }
      __name(r, "r");
      return s(r, "loadPedit"), { loadPedit: r };
    }, "default");
  });
  var ur;
  var cr = $(() => {
    ur = s((e) => {
      function t(r, o, m) {
        let v = new Promise((U, w) => {
          let x = e.loadRoot() + m;
          e.loadSprite(r, o).then((D) => {
            fetch(x).then((S) => S.json()).then((S) => {
              let A = S.meta.size;
              D.frames = S.frames.map((E) => e.quad(E.frame.x / A.w, E.frame.y / A.h, E.frame.w / A.w, E.frame.h / A.h));
              for (let E of S.meta.frameTags)
                D.anims[E.name] = { from: E.from, to: E.to };
              U(D);
            }).catch(w);
          }).catch(w);
        });
        return e.load(v), v;
      }
      __name(t, "t");
      return s(t, "loadAseprite"), { loadAseprite: t };
    }, "default");
  });
  var lr;
  var dr = $(() => {
    lr = "data:image/png;base64,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";
  });
  var hr;
  var fr = $(() => {
    dr();
    hr = s((e) => {
      function t(r = "cga") {
        return e.loadFont(r, lr, 8, 8, e.CP437_CHARS);
      }
      __name(t, "t");
      return s(t, "loadCGA"), { loadCGA: t };
    }, "default");
  });
  var mr;
  var pr = $(() => {
    mr = s((e) => {
      function t(o, m) {
        return { id: "grid", gridPos: m.clone(), setGridPos(v) {
          this.gridPos = v.clone(), this.pos = e.vec2(o.offset().x + this.gridPos.x * o.gridWidth(), o.offset().y + this.gridPos.y * o.gridHeight());
        }, moveLeft() {
          this.setGridPos(this.gridPos.add(e.vec2(-1, 0)));
        }, moveRight() {
          this.setGridPos(this.gridPos.add(e.vec2(1, 0)));
        }, moveUp() {
          this.setGridPos(this.gridPos.add(e.vec2(0, -1)));
        }, moveDown() {
          this.setGridPos(this.gridPos.add(e.vec2(0, 1)));
        } };
      }
      __name(t, "t");
      s(t, "grid");
      function r(o, m) {
        let v = [], U = e.vec2(m.pos || e.vec2(0)), w = 0, x = { offset() {
          return U.clone();
        }, gridWidth() {
          return m.width;
        }, gridHeight() {
          return m.height;
        }, getPos(...D) {
          let S = e.vec2(...D);
          return e.vec2(U.x + S.x * m.width, U.y + S.y * m.height);
        }, spawn(D, S) {
          let A = (() => {
            if (Array.isArray(D))
              return D;
            if (m[D]) {
              if (typeof m[D] == "function")
                return m[D]();
              if (Array.isArray(m[D]))
                return [...m[D]];
            } else if (m.any)
              return m.any(D);
          })();
          if (!A)
            return;
          A.push(e.pos(U.x + S.x * m.width, U.y + S.y * m.height));
          let E = e.add(A);
          return v.push(E), E.use(t(this, S)), E;
        }, width() {
          return w * m.width;
        }, height() {
          return o.length * m.height;
        }, destroy() {
          for (let D of v)
            e.destroy(D);
        } };
        return o.forEach((D, S) => {
          let A = D.split("");
          w = Math.max(A.length, w), A.forEach((E, T) => {
            x.spawn(E, e.vec2(T, S));
          });
        }), x;
      }
      __name(r, "r");
      return s(r, "addLevel"), { addLevel: r };
    }, "default");
  });
  var xr;
  var gr = $(() => {
    xr = "data:image/png;base64,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";
  });
  var Ur;
  var br = $(() => {
    Ur = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAABtCAYAAACV8UJdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA0fSURBVHgB7Z29jxxFGsafu1sJLCRkI1kCiaAtAk4EeDfzRdtOLC5ArCUCSwTbdmQir7PLdvwX2I7gEjwOkC5AshHJiQC3AyRfZFtICALktkTgE4EXAgQBGuqZ7hpXV1f1Z/XHeOsnlWa7Z2a7p/vpt956q+otYLpcEuWRKPdF2YTHoxGIslDKHXg8GnPkRcISwuPJCFAUyJjWJBRlBl/lTYpbMItkDGuyrx3fC2UC7MAukKGtyb7h+BE8o8PWzOqmHH3hhbGsySWYRRrBMyoRtJvy6MKFRfj66/qNuoF+2YXdkkXwjErOikRvvbVY7O0t7rz/vulmHUU/lAnk0Irkr5gGNO+BumP/1Knlq7Aky6KxB/fQKb0GT4EpiCSAdtOFFUHw8sur7V2xrUFRubQmFMgd/X+q53CYmYJIclaEN0ZaEQlFI5xYdRdvpitrEsAgEJ6DwYIdSsYWSQDtZu9qVkSyt7Wl73JhTQJYBDLThHqYGVskM3WD4rDdnEtCJI6tSYBUIIG60wukyJgiCZC2JlaU3RwKxGJN2h7bC6QmY4rkqrpBK2JwUHNYrEmEZgTwAmmEFAmfSPaZsAlIEx6i336KnaysqHODLNZkF/UJYBAIxecFYmcD6ZNYFh94IEoiymPlb74eoD05K8JWRJUVkfBzs3v3cl/PSlzxVVqdgkD4/65tb8NjhyIJKj6zCbNVoUikWB7imYASlAso0o9548wZ1IXVEpvE82+/VXfvo1wkR7P3A3UnBTJvcOzDCkUyR3qRm8ILH2Z/72jvJVl5iLzleaAfK7I0ecvYLYokhN2aSIGcVHduHj++LgLh+fMhZbUaiHJdlNsYEIokEeUKtJvH+v/g99/RkiArYdUH91v4AjJUH//4Y+5fwSwSVm0FgYg+IUwYCoMPHoWxiXwcJxTlGLpV943YyF7pk+SCUztvvIGroq5+8NNPS7E8FK/yb/nalTZWREJxxZ99pu4KUbQm7DGO1A9JgWitpCkgW2rvoSgMHb4fYyCkSKhKWpOVQ0lzTrMuQ9MUjYoUC8WT/PJLTkB1MIXfm2CxJnzy4uxv/pZIP+atd9+dkkBUYYQ1v8N7FWNANpS/aU1yJ3tFtCJCi1nmhbb00OasjxSQbn12O1gRicGaRKJcRmoVc9FYHosWZAKddgFSMYdoN4DqLgZmQ9umNQnlBp/Sm5lFaQJNOtEFJC0Nb5SLm8X/z2Np1iuG5oNMQCChKNtoIAwZXOT154OmEGNgdJHEWQnlDsYk3hNVjQsTLa2PSxgIO//ll+quqQgkRCqMCNVhhvQL4tpsi6L6atfv39c/FmNgNgz7ziOdNbd0nKhinuj+RCOSvKCX7941OtIjCCTEs1ZJrR5qCoP+Hh9E/TxpybXflSANIwyKSSQJ0rb4qkl8TYjEhQ/RFwzVa1HYpdUaSCAhWgpjtzhOJsfdvFNOHmIENiz7c01iqplO7I2JBp9Y5VDI8qnjhY/7E4ga3NpBDWHwfOg71RGGSlwUyaBBNIlNJGxmsZWwGpmuN4mnBC86BXwlsyaMpJ7MnGfH8MFh07q2MHjNdlr4dBS8QSQxRmCj5L05njXVlpQ1iceGN0KP5fRAac84hSCtBQXSxdk3xJuSrAzORsX7TprEzzMUAp1nOp5dhaHy+Q8/6LtijESVSGKk9eCqA29PtCRcNYmnju03qsLoq/o1VDWfYyT+UuMzAZQmMeEAnak2iV3C5v9pEdHlqwxu2aLMLqE/cuyjj/TdJzBSdVNHJGQGpUnMJ+n+Bx8cmnkpUiRDwapm54sv1F2MjWxhJOqOcWWTOJEbVDoDWIeFoR+G20V/ZNSLXVckspd4BX+Iod70OGAq8RFJk9Hyc2ge9hUtyunpDqs2rUOPDB6KV2k6pSJnTah4QweUpwOWANpgo9BM1HVcVeZQpjHQiX104cKhaBIPwVnhsGo+SYJn/uBBVn7GM+Ek2qttX2uq4iQmZkgHJ636dabcS7xuGCKtAWoONSjhQCvqvjLB8TVpI5IEa9ZLvE64GDts4CjaT64/+ze0g47UOXng3/74YzlUMfLh+s68+tJLy2vZk1jacKSNTyJhqP6WuoPjN3xODzdQJGpR9/2s7JMtIbVFZNrXgXkXkRBOmwzlBgUy8fksh5IqwbFFZQjgEQ5y2ukqkhBablXOq720NVoE2dMQVm2h6J8yVG+xKGdFOWjrk0gSpB1Pq3EW9548wcW338aLG218Ys+QcNjHO7dvL31K/S2kAvmNG11FQmJRLoryIjd4wCNCIN43mTYMW1z86ivTWwyY5uYsuRAJ1XYE2uCkqMFYTs+wsDvlX19/bXwLWooy4irTUa6XmGhzYTwTgb33M3OfG8c0z0xvuLAkhNaESW7OyR1sfrHK8QG26cAH9+NvvtF3M9r6oSgf277XtXWjk2sSc8wnByd5xoUtF46wM4T8KZDTqOhldmVJJLQmkdx48uuvOCb8klOvvQbPONCi/1O0YCyj7/8hyndV/8N19sUYab/OipkfczIacoyuRSCnUbOXuI8UnbmOJN/CGQcGyeQgbv0tNBAIcR3xCqClzPTR1+FhCILjUsqiqGiAa5HkOvzYstnzIhkURlEjc/iBUdQILXBZ3UTQpkH6BLrDwiCZRSAMkkVoicsm8CMoI6gYcZ1qFoLnEQrE0kgwRlGb4Kq64Si1ILfDW5HBYBT1mnlAOhMSzdERFyIJULHylac/GEXVEh8TOqYUiJP5Oi5EMoPS7O2aetNTH1YxFoFURlGb0NVxDWBYs8ZbkWGwBMnYnHQ6maurSHKj0uqsWeNxh2HMDtNTJHBMF5FE0JzVq35JkEExWOxebkBbkdAHKaw2MUA6Ko/CdtGSBOiBtiKxLvbsGQ72i2nWRGaGdEobkQTQgjP73lkdjc1ilskQjmkjkpm6IVey8oyDwXk9Ccc0FUkI3+SdFIZ8taNXNzfUDd/kHZ9Ns0jaTg430kQkETRnlQsMecbF4LwSp9akrkgCGJq8m/2k5vY0xOCXjCIS3+SdMIaH1anzWkckAbReXt/knRYne24G1xHJTN2gOPyIs2lhsCQBHDqvVUMFImhNXnI6vzhiKWpOjCbIFR98tVaNdF61kfHOloWtEsklfYclz2gvsCt8e4Bc7s8DvEba2BJnIqmqbgKMzGFKT96FPp3XqmmerCfewYgMPVWUTyNzdzBNVJ9NfFpjzo3hsf735Ikt3lEbJg36d34yOH2S63BA3aVMArQjQTtmGCGhsD7ivM/UXvTr9OzP0g+T6+g0+b2W5U+OwUE2addZBVzBp+ARBlxjxzQloS9xUhx1nP8wWyN4u2YKj61PP9WHNHKsa4yOuM4q4IpC9iT++L5ysdnmrPSV2ot+1ndPn1Z+jlUSsyKySuLyr6wCmefVJlpWW5pIOO+384z9qYqEcDBvLhfb/4V/4nr0W8mkpvQkxEU/9+abzqwJb/yHxVxlcfZ6tOx7/338eCkYLpr0vRAZHxjVwjzOPqNAn/I/6MiURUJrknOcecNcZk/iBbfkDkugZLvmxadQXEAroj3tMdJqgU4mm3LM9f4qSgRDZ55ZLjnvl4UZBCjiv7/yiu68vggHzutUfRIVTk1bdVi5SihcMrH6fPaaGxbhIts1rcGJTz4xHW9u+Dh/c4h0sYcQNaBQDIHLzs5rH/lJXHNZ3aDT13XFrgqBzNHTAlCG/5HAPg2T1S0TFtLKnMjOLUYJlsh2iI6sg0hiaBenS4CthkAkhQWgLKm1a0ErYphtd6Xu15GeGwVDy8BzZSqJOhYiQEfWQSQkdzFZp7dZsauBQEgMgzjbrh7R0IqUcZB9L0IqGArnJuwxqQAdWReRxEgvxAq2SJrcsIYCUd9bQWvQRpwdrUgVMVLBsEqSDnAiD420yurEuoiEcEzLyrzKFbvq0FIgJIF2M5nioak1cWhFqoiRXicK5hgcLTi9TiKhQHLNuTo3rINAVoeBJs4mTmzPVqSMzuF4yTqJhDS6YQ4EsjwMDOKsO1ziZlEgCfqxIr2xbiIpLGLNG2ZIweBKIJIZWuTOH9GKOGXdREJoTXL5N/QmMZuqJQnm5mhHzomtE6/h+5rFSeBoINCQrKNIiDXAxhD1ebtAZmhPjIYBNsP7ZU3VyTLlvpsyEqSRxEDuYP/K1vHjtqXCugpkdRgoqS6XYXbRj2QanDTP+lW0c6a4nTmUQ7EOfTc2QmiZlix9F64EIplDGRDFzkauxKH3ErOPRqtq+L3zWEPW1ZKQBNr6f4a15FwLhNAfipANYaAo9TEnBitCGqfrngrr6pNIZrBf+D4EQhJUxGsMvsgca+iLPE/MRFloZYZ+4ViPp+ox97a2Fou9vcWNM2cWhvMJ4BkVOR52KIFI9qCJQfgmC+Gj6AK5Ac8kCETZQQ+poCpQxbkQzqu3Ip4CIYqi8FbEU4DNcJtIAng8sFsTb0U8OeYoiiSEx6OgN4nv4DlinSOuU4JzhL5HOl+GEVmu2L2W0VUTfwLZMbcFHnJO2gAAAABJRU5ErkJggg==";
  });
  var vr;
  var yr = $(() => {
    gr();
    br();
    vr = s((e) => {
      function t(v = 2, U = 1) {
        let w = 0;
        return { id: "explode", require: ["scale"], update() {
          let x = Math.sin(w * v) * U;
          x < 0 && e.destroy(this), this.scale = e.vec2(x), w += e.dt();
        } };
      }
      __name(t, "t");
      s(t, "explode");
      let r = null, o = null;
      e.loadSprite(null, xr).then((v) => r = v), e.loadSprite(null, Ur).then((v) => o = v);
      function m(v, U = {}) {
        let w = (U.speed || 1) * 5, x = U.scale || 1, D = e.add([e.pos(v), e.sprite(o), e.scale(0), e.stay(), e.origin("center"), t(w, x), ...e.getComps(U.boomComps)]), S = e.add([e.pos(v), e.sprite(r), e.scale(0), e.stay(), e.origin("center"), e.timer(0.4 / w, () => S.use(t(w, x))), ...e.getComps(U.kaComps)]);
        return { destroy() {
          e.destroy(S), e.destroy(D);
        } };
      }
      __name(m, "m");
      return s(m, "addKaboom"), { addKaboom: m };
    }, "default");
  });
  var xn = Jr((gs, wr) => {
    Pe();
    Gt();
    _t();
    Yt();
    jt();
    Zt();
    tr();
    or();
    ar();
    cr();
    fr();
    pr();
    yr();
    var Z = /* @__PURE__ */ __name(class extends Map {
      constructor(...t) {
        super(...t);
        pt(this, "_lastID");
        this._lastID = 0;
      }
      push(t) {
        let r = this._lastID;
        return this.set(r, t), this._lastID++, r;
      }
      pushd(t) {
        let r = this.push(t);
        return () => this.delete(r);
      }
    }, "Z");
    s(Z, "IDList");
    wr.exports = (e = {}) => {
      var ht;
      let t = Nt(), r = Bt({ width: e.width, height: e.height, scale: e.scale, crisp: e.crisp, canvas: e.canvas, root: e.root, stretch: e.stretch, touchToMouse: (ht = e.touchToMouse) != null ? ht : true, audioCtx: t.ctx }), o = Rt(r.gl, { clearColor: e.clearColor ? W(e.clearColor) : void 0, width: e.width, height: e.height, scale: e.scale, texFilter: e.texFilter, stretch: e.stretch, letterbox: e.letterbox }), { width: m, height: v } = o, U = Wt(o, t, { errHandler: (n) => {
        w.error(n);
      } }), w = Jt(o, U, { max: e.logMax }), x = e.connect ? er(e.connect) : null, D = "froggy", S = "sink";
      function A(n, i) {
        if (!x)
          throw new Error("not connected to any websockets");
        x.recv(n, (u, a) => {
          i(u, a);
        });
      }
      __name(A, "A");
      s(A, "recv");
      function E(n, i) {
        if (!x)
          throw new Error("not connected to any websockets");
        x.send(n, i);
      }
      __name(E, "E");
      s(E, "send");
      function T() {
        return r.dt() * J.timeScale;
      }
      __name(T, "T");
      s(T, "dt");
      function K(n, i = {}) {
        let u = t.play(new AudioBuffer({ length: 1, numberOfChannels: 1, sampleRate: 44100 }));
        return Le(() => {
          let a = U.sounds[n];
          if (!a)
            throw new Error(`sound not found: "${n}"`);
          let g = t.play(a, i);
          for (let f in g)
            u[f] = g[f];
        }), u;
      }
      __name(K, "K");
      s(K, "play");
      function F() {
        return r.mousePos();
      }
      __name(F, "F");
      s(F, "mousePos");
      function X() {
        return d.camMousePos;
      }
      __name(X, "X");
      s(X, "mouseWorldPos");
      function N(n, i = {}) {
        var g, f;
        let u = (() => typeof n == "string" ? U.sprites[n] : n)();
        if (!u)
          throw new Error(`sprite not found: "${n}"`);
        let a = u.frames[(g = i.frame) != null ? g : 0];
        if (!a)
          throw new Error(`frame not found: ${(f = i.frame) != null ? f : 0}`);
        o.drawTexture(u.tex, Ee(Ue({}, i), { quad: a.scale(i.quad || oe(0, 0, 1, 1)) }));
      }
      __name(N, "N");
      s(N, "drawSprite");
      function z2(n, i = {}) {
        var g;
        let u = (g = i.font) != null ? g : D, a = U.fonts[u];
        if (!a)
          throw new Error(`font not found: ${u}`);
        o.drawText(n, a, i);
      }
      __name(z2, "z");
      s(z2, "drawText");
      let O = 980, q = "topleft", d = { loaded: false, events: {}, objEvents: {}, actions: new Z(), renders: new Z(), objs: new Z(), timers: new Z(), cam: { pos: l(m() / 2, v() / 2), scale: l(1, 1), angle: 0, shake: 0 }, camMousePos: r.mousePos(), camMatrix: re(), layers: {}, defLayer: null, gravity: O, on(n, i) {
        return this.events[n] || (this.events[n] = new Z()), this.events[n].pushd(i);
      }, trigger(n, ...i) {
        this.events[n] && this.events[n].forEach((u) => u(...i));
      }, scenes: {}, paused: false };
      function j(n, i) {
        n.forEach((u, a) => {
          d.layers[u] = a + 1;
        }), i && (d.defLayer = i);
      }
      __name(j, "j");
      s(j, "layers");
      function ie(...n) {
        return n.length > 0 && (d.cam.pos = l(...n)), d.cam.pos.clone();
      }
      __name(ie, "ie");
      s(ie, "camPos");
      function me(...n) {
        return n.length > 0 && (d.cam.scale = l(...n)), d.cam.scale.clone();
      }
      __name(me, "me");
      s(me, "camScale");
      function pe(n) {
        return n !== void 0 && (d.cam.angle = n), d.cam.angle;
      }
      __name(pe, "pe");
      s(pe, "camRot");
      function ne(n) {
        d.cam.shake = n;
      }
      __name(ne, "ne");
      s(ne, "shake");
      function ce(n) {
        return d.camMatrix.multVec2(n);
      }
      __name(ce, "ce");
      s(ce, "toScreen");
      function ve(n) {
        return d.camMatrix.invert().multVec2(n);
      }
      __name(ve, "ve");
      s(ve, "toWorld");
      let G = new Set(["id", "require"]), M = new Set(["add", "load", "update", "draw", "destroy", "inspect"]);
      function Fe(n) {
        let i = {}, u = {}, a = {}, g = [], f = { _id: null, hidden: false, paused: false, use(c) {
          if (!c)
            return;
          if (typeof c == "string") {
            g.push(c);
            return;
          }
          c.id && (this.unuse(c.id), i[c.id] = {});
          let y = c.id ? i[c.id] : u;
          y.cleanups = [];
          for (let C in c)
            if (!G.has(C)) {
              if (typeof c[C] == "function") {
                let Y = c[C].bind(this);
                if (M.has(C)) {
                  y.cleanups.push(this.on(C, Y));
                  continue;
                } else
                  y[C] = Y;
              } else
                y[C] = c[C];
              this[C] === void 0 && Object.defineProperty(this, C, { get: () => y[C], set: (Y) => y[C] = Y, configurable: true, enumerable: true });
            }
          let k = s(() => {
            if (!!c.require) {
              for (let C of c.require)
                if (!this.c(C))
                  throw new Error(`comp '${c.id}' requires comp '${C}'`);
            }
          }, "checkDeps");
          this.exists() ? (c.add && c.add.call(this), c.load && Le(() => c.load.call(this)), k()) : c.require && y.cleanups.push(this.on("add", () => {
            k();
          }));
        }, unuse(c) {
          if (i[c]) {
            i[c].cleanups.forEach((y) => y());
            for (let y in i[c])
              delete i[c][y];
          }
          i[c] = {};
        }, c(c) {
          return i[c];
        }, exists() {
          return this._id !== null;
        }, is(c) {
          if (c === "*")
            return true;
          if (Array.isArray(c)) {
            for (let y of c)
              if (!g.includes(y))
                return false;
            return true;
          }
          return g.includes(c);
        }, on(c, y) {
          return a[c] || (a[c] = new Z()), a[c].pushd(y);
        }, action(c) {
          return this.on("update", c);
        }, trigger(c, ...y) {
          a[c] && a[c].forEach((C) => C.call(this, ...y));
          let k = d.objEvents[c];
          k && k.forEach((C) => {
            this.is(C.tag) && C.cb(this, ...y);
          });
        }, untag(c) {
          let y = g.indexOf(c);
          y > -1 && g.splice(y, 1);
        }, destroy() {
          !this.exists() || (this.trigger("destroy"), d.objs.delete(this._id), delete this._id);
        }, _inspect() {
          let c = [];
          if (a.inspect)
            for (let y of a.inspect.values()) {
              let k = y();
              k && c.push(k);
            }
          return { tags: g, info: c };
        } };
        for (let c of n)
          f.use(c);
        return f;
      }
      __name(Fe, "Fe");
      s(Fe, "make");
      function he(n) {
        let i = Fe(n);
        return i._id = d.objs.push(i), i.trigger("add"), Le(() => i.trigger("load")), i;
      }
      __name(he, "he");
      s(he, "add");
      function ge(n) {
        if (!!n.exists())
          return d.objs.delete(n._id), n._id = d.objs.push(n), n;
      }
      __name(ge, "ge");
      s(ge, "readd");
      function ae(n, ...i) {
        var u;
        return (u = typeof n == "function" ? n(...i) : n) != null ? u : [];
      }
      __name(ae, "ae");
      s(ae, "getComps");
      function ye(n, i, u) {
        return d.objEvents[n] || (d.objEvents[n] = new Z()), d.objEvents[n].pushd({ tag: i, cb: u });
      }
      __name(ye, "ye");
      s(ye, "on");
      function h(n, i) {
        if (typeof n == "function" && i === void 0)
          return d.actions.pushd(n);
        if (typeof n == "string")
          return ye("update", n, i);
      }
      __name(h, "h");
      s(h, "action");
      function p(n, i) {
        if (typeof n == "function" && i === void 0)
          return d.renders.pushd(n);
        if (typeof n == "string")
          return ye("update", n, i);
      }
      __name(p, "p");
      s(p, "render");
      function b(n, i, u) {
        return h(n, (a) => {
          a._checkCollisions(i, (g) => {
            u(a, g);
          });
        });
      }
      __name(b, "b");
      s(b, "collides");
      function P(n, i, u) {
        return h(n, (a) => {
          a._checkOverlaps(i, (g) => {
            u(a, g);
          });
        });
      }
      __name(P, "P");
      s(P, "overlaps");
      function B(n, i) {
        return h(n, (u) => {
          u.isClicked() && i(u);
        });
      }
      __name(B, "B");
      s(B, "clicks");
      function V(n, i, u) {
        return h(n, (a) => {
          a.isHovered() ? i(a) : u && u(a);
        });
      }
      __name(V, "V");
      s(V, "hovers");
      function H(n, i) {
        return new Promise((u) => {
          d.timers.push({ time: n, action: () => {
            i && i(), u();
          } });
        });
      }
      __name(H, "H");
      s(H, "wait");
      function _(n, i) {
        let u = false, a = s(() => {
          u || (i(), H(n, a));
        }, "newF");
        return a(), () => u = true;
      }
      __name(_, "_");
      s(_, "loop");
      function R(n, i) {
        if (Array.isArray(n)) {
          let u = n.map((a) => R(a, i));
          return () => u.forEach((a) => a());
        } else
          return d.on("input", () => r.keyDown(n) && i());
      }
      __name(R, "R");
      s(R, "keyDown");
      function I(n, i) {
        if (Array.isArray(n)) {
          let u = n.map((a) => I(a, i));
          return () => u.forEach((a) => a());
        } else
          return d.on("input", () => r.keyPressed(n) && i());
      }
      __name(I, "I");
      s(I, "keyPress");
      function L(n, i) {
        if (Array.isArray(n)) {
          let u = n.map((a) => L(a, i));
          return () => u.forEach((a) => a());
        } else
          return d.on("input", () => r.keyPressedRep(n) && i());
      }
      __name(L, "L");
      s(L, "keyPressRep");
      function Q(n, i) {
        if (Array.isArray(n)) {
          let u = n.map((a) => Q(a, i));
          return () => u.forEach((a) => a());
        } else
          return d.on("input", () => r.keyReleased(n) && i());
      }
      __name(Q, "Q");
      s(Q, "keyRelease");
      function ee(n) {
        return d.on("input", () => r.mouseDown() && n(F()));
      }
      __name(ee, "ee");
      s(ee, "mouseDown");
      function Te(n) {
        return d.on("input", () => r.mouseClicked() && n(F()));
      }
      __name(Te, "Te");
      s(Te, "mouseClick");
      function ue(n) {
        return d.on("input", () => r.mouseReleased() && n(F()));
      }
      __name(ue, "ue");
      s(ue, "mouseRelease");
      function xe(n) {
        return d.on("input", () => r.mouseMoved() && n(F(), r.mouseDeltaPos()));
      }
      __name(xe, "xe");
      s(xe, "mouseMove");
      function we(n) {
        return d.on("input", () => r.charInputted().forEach((i) => n(i)));
      }
      __name(we, "we");
      s(we, "charInput"), r.canvas.addEventListener("touchstart", (n) => {
        [...n.changedTouches].forEach((i) => {
          d.trigger("touchStart", i.identifier, l(i.clientX, i.clientY).scale(1 / r.scale));
        });
      }), r.canvas.addEventListener("touchmove", (n) => {
        [...n.changedTouches].forEach((i) => {
          d.trigger("touchMove", i.identifier, l(i.clientX, i.clientY).scale(1 / r.scale));
        });
      }), r.canvas.addEventListener("touchmove", (n) => {
        [...n.changedTouches].forEach((i) => {
          d.trigger("touchEnd", i.identifier, l(i.clientX, i.clientY).scale(1 / r.scale));
        });
      });
      function ze(n) {
        return d.on("touchStart", n);
      }
      __name(ze, "ze");
      s(ze, "touchStart");
      function Ke(n) {
        return d.on("touchMove", n);
      }
      __name(Ke, "Ke");
      s(Ke, "touchMove");
      function Ce(n) {
        return d.on("touchEnd", n);
      }
      __name(Ce, "Ce");
      s(Ce, "touchEnd");
      function He() {
        I("f1", () => {
          J.inspect = !J.inspect;
        }), I("f2", () => {
          J.clearLog();
        }), I("f8", () => {
          J.paused = !J.paused, w.info(`${J.paused ? "paused" : "unpaused"}`);
        }), I("f7", () => {
          J.timeScale = le(J.timeScale - 0.2, 0, 2), w.info(`time scale: ${J.timeScale.toFixed(1)}`);
        }), I("f9", () => {
          J.timeScale = le(J.timeScale + 0.2, 0, 2), w.info(`time scale: ${J.timeScale.toFixed(1)}`);
        }), I("f10", () => {
          J.stepFrame(), w.info("stepped frame");
        });
      }
      __name(He, "He");
      s(He, "regDebugInput");
      function De(n) {
        let i = [...d.objs.values()].sort((u, a) => {
          var c, y, k, C, Y, se;
          let g = (y = d.layers[(c = u.layer) != null ? c : d.defLayer]) != null ? y : 0, f = (C = d.layers[(k = a.layer) != null ? k : d.defLayer]) != null ? C : 0;
          return g == f ? ((Y = u.z) != null ? Y : 0) - ((se = a.z) != null ? se : 0) : g - f;
        });
        return n ? i.filter((u) => u.is(n)) : i;
      }
      __name(De, "De");
      s(De, "get");
      function te(n, i) {
        if (typeof n == "function" && i === void 0)
          return De().map(n);
        if (typeof n == "string")
          return De(n).map(i);
      }
      __name(te, "te");
      s(te, "every");
      function Ve(n, i) {
        if (typeof n == "function" && i === void 0)
          return De().reverse().map(n);
        if (typeof n == "string")
          return De(n).reverse().map(i);
      }
      __name(Ve, "Ve");
      s(Ve, "revery");
      function Re(n) {
        n.destroy();
      }
      __name(Re, "Re");
      s(Re, "destroy");
      function Me(n) {
        te(n, Re);
      }
      __name(Me, "Me");
      s(Me, "destroyAll");
      function Oe(n) {
        return n !== void 0 && (d.gravity = n), d.gravity;
      }
      __name(Oe, "Oe");
      s(Oe, "gravity");
      function Xe(n, i) {
      }
      __name(Xe, "Xe");
      s(Xe, "regCursor");
      function Qe(n) {
        d.trigger("next"), delete d.events.next, (n || !J.paused) && (d.timers.forEach((f, c) => {
          f.time -= T(), f.time <= 0 && (f.action(), d.timers.delete(c));
        }), Ve((f) => {
          f.paused || f.trigger("update", f);
        }), d.actions.forEach((f) => f()));
        let u = l(m(), v()), a = d.cam, g = We(qe(0, 360)).scale(a.shake);
        a.shake = Ye(a.shake, 0, 5 * T()), d.camMatrix = re().translate(u.scale(0.5)).scale(a.scale).rotateZ(a.angle).translate(u.scale(-0.5)).translate(a.pos.scale(-1).add(u.scale(0.5)).add(g)), te((f) => {
          f.hidden || (o.pushTransform(), f.fixed || o.pushMatrix(d.camMatrix), f.trigger("draw"), o.popTransform());
        }), d.renders.forEach((f) => f());
      }
      __name(Qe, "Qe");
      s(Qe, "gameFrame");
      function Ze() {
        var f;
        let n = null, i = U.fonts[S], u = W((f = e.inspectColor) != null ? f : [0, 0, 255, 1]);
        function a(c, y, k) {
          let C = l(6).scale(1 / k), Y = o.fmtText(y, i, { size: 16 / k, pos: c.add(l(C.x, C.y)), color: de(0, 0, 0) });
          o.drawRect(c, Y.width + C.x * 2, Y.height + C.x * 2, { color: de() }), o.drawRectStroke(c, Y.width + C.x * 2, Y.height + C.x * 2, { width: 2 / k, color: de(0, 0, 0) }), o.drawFmtText(Y);
        }
        __name(a, "a");
        s(a, "drawInspectTxt");
        function g(c, y) {
          let k = o.scale() * (c.fixed ? 1 : (d.cam.scale.x + d.cam.scale.y) / 2);
          c.fixed || (o.pushTransform(), o.pushMatrix(d.camMatrix)), y(k), c.fixed || o.popTransform();
        }
        __name(g, "g");
        s(g, "drawObj"), Ve((c) => {
          !c.area || c.hidden || g(c, (y) => {
            n || c.isHovered() && (n = c);
            let k = (n === c ? 8 : 4) / y, C = c.worldArea(), Y = C.p2.x - C.p1.x, se = C.p2.y - C.p1.y;
            o.drawRectStroke(C.p1, Y, se, { width: k, color: u });
          });
        }), n && g(n, (c) => {
          let y = n.fixed ? F() : X(), k = [], C = n._inspect();
          if (!(C.tags.length === 0 && C.info.length === 0)) {
            for (let Y of C.tags)
              k.push(`"${Y}"`);
            for (let Y of C.info)
              for (let se in Y)
                k.push(`${se}: ${Y[se]}`);
            a(y, k.join(`
`), c);
          }
        }), a(l(0), `FPS: ${r.fps()}`, o.scale());
      }
      __name(Ze, "Ze");
      s(Ze, "drawInspect");
      function Cr(...n) {
        return { id: "pos", pos: l(...n), move(...i) {
          let u = l(...i), a = u.x * T(), g = u.y * T();
          this.pos.x += a, this.pos.y += g;
        }, moveTo(...i) {
          if (typeof i[0] == "number" && typeof i[1] == "number")
            return this.moveTo(l(i[0], i[1]), i[2]);
          let u = i[0], a = i[1];
          if (a === void 0) {
            this.pos = l(u);
            return;
          }
          let g = u.sub(this.pos);
          if (g.len() <= a) {
            this.pos = l(u);
            return;
          }
          this.pos = this.pos.add(g.unit().scale(a));
        }, screenPos() {
          return this.fixed ? this.pos : ce(this.pos);
        }, inspect() {
          return { pos: `(${~~this.pos.x}, ${~~this.pos.y})` };
        } };
      }
      __name(Cr, "Cr");
      s(Cr, "pos");
      function ct(...n) {
        return n.length === 0 ? ct(1) : { id: "scale", scale: l(...n) };
      }
      __name(ct, "ct");
      s(ct, "scale");
      function Dr(n) {
        return { id: "rotate", angle: n != null ? n : 0 };
      }
      __name(Dr, "Dr");
      s(Dr, "rotate");
      function Er(...n) {
        return { id: "color", color: W(...n) };
      }
      __name(Er, "Er");
      s(Er, "color");
      function Ar(n) {
        return { id: "origin", origin: n };
      }
      __name(Ar, "Ar");
      s(Ar, "origin");
      function Pr(n) {
        return { id: "layer", layer: n, inspect() {
          var i;
          return { layer: (i = this.layer) != null ? i : d.defLayer };
        } };
      }
      __name(Pr, "Pr");
      s(Pr, "layer");
      function Sr(n) {
        return { id: "z", z: n };
      }
      __name(Sr, "Sr");
      s(Sr, "z");
      function Tr(n, i) {
        let u = typeof n == "number" ? We(n) : n.unit(), a = 0, g = 6;
        function f(c) {
          let y = false;
          return u.x < 0 ? y || (y = c.x < 0) : u.x > 0 && (y || (y = c.x > m())), u.y < 0 ? y || (y = c.y < 0) : u.y > 0 && (y || (y = c.y > m())), y;
        }
        __name(f, "f");
        return s(f, "isOut"), { id: "move", require: ["pos"], update() {
          var y;
          this.move(u.scale(i));
          let c = this.screenPos();
          if (f(c))
            if (this.width && this.height) {
              let k = this.width, C = this.height, Y = (y = this.scale) != null ? y : l(1), se = Se(this.origin || q), Ne = c.sub(se.sub(-1, -1).scale(0.5).scale(k, C).scale(Y)), $e = c.sub(se.sub(1, 1).scale(0.5).scale(k, C).scale(Y));
              f(Ne) && f($e) ? a += T() : a = 0;
            } else
              a += T();
          else
            a = 0;
          a >= g && Re(this);
        } };
      }
      __name(Tr, "Tr");
      s(Tr, "move");
      function Rr(n = {}) {
        let i = {}, u = {};
        return { id: "area", add() {
          this.area.cursor && this.hovers(() => {
            r.cursor(this.area.cursor);
          });
        }, area: n, areaWidth() {
          let { p1: a, p2: g } = this.worldArea();
          return g.x - a.x;
        }, areaHeight() {
          let { p1: a, p2: g } = this.worldArea();
          return g.y - a.y;
        }, isClicked() {
          return r.mouseClicked() && this.isHovered();
        }, isHovered() {
          let a = this.fixed ? F() : X();
          return r.isTouch ? r.mouseDown() && this.hasPt(a) : this.hasPt(a);
        }, isCollided(a) {
          if (!a.area)
            return false;
          let g = this.worldArea(), f = a.worldArea();
          return st(g, f);
        }, isOverlapped(a) {
          if (!a.area)
            return false;
          let g = this.worldArea(), f = a.worldArea();
          return At(g, f);
        }, clicks(a) {
          this.action(() => {
            this.isClicked() && a();
          });
        }, hovers(a, g) {
          this.action(() => {
            this.isHovered() ? a() : g && g();
          });
        }, collides(a, g) {
          this.action(() => {
            this._checkCollisions(a, g);
          });
        }, overlaps(a, g) {
          this.action(() => {
            this._checkOverlaps(a, g);
          });
        }, hasPt(a) {
          let g = this.worldArea();
          return Pt({ p1: g.p1, p2: g.p2 }, a);
        }, pushOut(a) {
          if (a === this || !a.area)
            return null;
          let g = this.worldArea(), f = a.worldArea();
          if (!st(g, f))
            return null;
          let c = g.p2.x - f.p1.x, y = f.p2.x - g.p1.x, k = g.p2.y - f.p1.y, C = f.p2.y - g.p1.y;
          switch (Math.min(c, y, k, C)) {
            case c:
              return this.pos.x -= c, { obj: a, side: "right", dis: -c };
            case y:
              return this.pos.x += y, { obj: a, side: "left", dis: y };
            case k:
              return this.pos.y -= k, { obj: a, side: "bottom", dis: -k };
            case C:
              return this.pos.y += C, { obj: a, side: "top", dis: C };
          }
          return null;
        }, pushOutAll() {
          return te((a) => a.solid ? this.pushOut(a) : null).filter((a) => a != null);
        }, _checkCollisions(a, g) {
          te(a, (f) => {
            this !== f && (i[f._id] || this.isCollided(f) && (g(f), i[f._id] = f));
          });
          for (let f in i) {
            let c = i[f];
            this.isCollided(c) || delete i[f];
          }
        }, _checkOverlaps(a, g) {
          te(a, (f) => {
            this !== f && (u[f._id] || this.isOverlapped(f) && (g(f), u[f._id] = f));
          });
          for (let f in u) {
            let c = u[f];
            this.isOverlapped(c) || delete u[f];
          }
        }, worldArea() {
          var k, C;
          let a = { p1: this.area.p1, p2: this.area.p2 };
          if (!a.p1 && !a.p2) {
            let Y = (k = this.area.width) != null ? k : this.width, se = (C = this.area.height) != null ? C : this.height;
            if (!Y || !se)
              throw new Error("Auto area requires width and height from other comps (did you forget to add sprite / text / rect comp?)");
            let Ne = l(Y, se), $e = Se(this.origin || q).scale(Ne).scale(-0.5);
            a.p1 = $e.sub(Ne.scale(0.5)), a.p2 = $e.add(Ne.scale(0.5));
          }
          let g = this.pos || l(0), f = (this.scale || l(1)).scale(this.area.scale || l(1)), c = g.add(a.p1.scale(f)), y = g.add(a.p2.scale(f));
          return { p1: l(Math.min(c.x, y.x), Math.min(c.y, y.y)), p2: l(Math.max(c.x, y.x), Math.max(c.y, y.y)) };
        }, screenArea() {
          let a = this.worldArea();
          return this.fixed ? a : { p1: d.camMatrix.multVec2(a.p1), p2: d.camMatrix.multVec2(a.p2) };
        } };
      }
      __name(Rr, "Rr");
      s(Rr, "area");
      function Gr(n, i = {}) {
        let u = null, a = null;
        function g(f, c, y, k) {
          let C = l(1, 1);
          return y && k ? (C.x = y / (f.width * c.w), C.y = k / (f.height * c.h)) : y ? (C.x = y / (f.width * c.w), C.y = C.x) : k && (C.y = k / (f.height * c.h), C.x = C.y), C;
        }
        __name(g, "g");
        return s(g, "calcTexScale"), { id: "sprite", width: 0, height: 0, animSpeed: i.animSpeed || 0.1, frame: i.frame || 0, quad: i.quad || oe(0, 0, 1, 1), load() {
          if (typeof n == "string" ? u = U.sprites[n] : u = n, !u)
            throw new Error(`sprite not found: "${n}"`);
          let f = Ue({}, u.frames[0]);
          i.quad && (f = f.scale(i.quad));
          let c = g(u.tex, f, i.width, i.height);
          this.width = u.tex.width * f.w * c.x, this.height = u.tex.height * f.h * c.y;
        }, draw() {
          N(u, { pos: this.pos, scale: this.scale, rot: this.angle, color: this.color, frame: this.frame, origin: this.origin, quad: this.quad, prog: U.shaders[this.shader], uniform: this.uniform, flipX: i.flipX, flipY: i.flipY, tiled: i.tiled, width: i.width, height: i.height });
        }, update() {
          if (!a)
            return;
          let f = u.anims[a.name];
          a.timer += T(), a.timer >= this.animSpeed && (this.frame++, this.frame > f.to && (a.loop ? this.frame = f.from : (this.frame--, this.stop())), a && (a.timer -= this.animSpeed));
        }, play(f, c = true) {
          if (!u) {
            Le(() => {
              this.play(f, c);
            });
            return;
          }
          let y = u.anims[f];
          if (!y)
            throw new Error(`anim not found: ${f}`);
          a && this.stop(), a = { name: f, loop: c, timer: 0 }, this.frame = y.from, this.trigger("animPlay", f);
        }, stop() {
          if (!a)
            return;
          let f = a.name;
          a = null, this.trigger("animEnd", f);
        }, numFrames() {
          return u ? u.frames.length : 0;
        }, curAnim() {
          return a == null ? void 0 : a.name;
        }, flipX(f) {
          i.flipX = f;
        }, flipY(f) {
          i.flipY = f;
        }, inspect() {
          let f = {};
          return a && (f.curAnim = `"${a.name}"`), f;
        } };
      }
      __name(Gr, "Gr");
      s(Gr, "sprite");
      function kr(n, i = {}) {
        function u() {
          var f, c, y, k;
          let a = U.fonts[(c = (f = this.font) != null ? f : e.font) != null ? c : D];
          if (!a)
            throw new Error(`font not found: "${a}"`);
          let g = o.fmtText(this.text + "", a, { pos: this.pos, scale: this.scale, rot: this.angle, size: i.size, origin: this.origin, color: this.color, width: i.width });
          return this.width = g.width / (((y = this.scale) == null ? void 0 : y.x) || 1), this.height = g.height / (((k = this.scale) == null ? void 0 : k.y) || 1), g;
        }
        __name(u, "u");
        return s(u, "update"), { id: "text", text: n, textSize: i.size, font: i.font, width: 0, height: 0, load() {
          u.call(this);
        }, draw() {
          let a = u.call(this);
          o.drawFmtText(a);
        } };
      }
      __name(kr, "kr");
      s(kr, "text");
      function Br(n, i) {
        return { id: "rect", width: n, height: i, draw() {
          o.drawRect(this.pos, this.width, this.height, { scale: this.scale, rot: this.angle, color: this.color, origin: this.origin, prog: U.shaders[this.shader], uniform: this.uniform });
        } };
      }
      __name(Br, "Br");
      s(Br, "rect");
      function _r(n = 1, i = de(0, 0, 0)) {
        return { id: "outline", lineWidth: n, lineColor: i, draw() {
          if (this.width && this.height)
            o.drawRectStroke(this.pos || l(0), this.width, this.height, { width: this.lineWidth, color: this.lineColor, scale: this.scale, origin: this.origin, prog: U.shaders[this.shader], uniform: this.uniform });
          else if (this.area) {
            let u = this.worldArea(), a = u.p2.x - u.p1.x, g = u.p2.y - u.p1.y;
            o.drawRectStroke(u.p1, a, g, { width: n, color: i });
          }
        } };
      }
      __name(_r, "_r");
      s(_r, "outline");
      function Fr(n, i) {
        let u = new Z();
        return n && i && u.pushd({ time: n, action: i }), { id: "timer", wait(a, g) {
          return u.pushd({ time: a, action: g });
        }, update() {
          u.forEach((a, g) => {
            a.time -= T(), a.time <= 0 && (a.action.call(this), u.delete(g));
          });
        } };
      }
      __name(Fr, "Fr");
      s(Fr, "timer");
      let Vr = 480, Xr = 65536;
      function Lr(n = {}) {
        var f, c;
        let i = 0, u = null, a = null, g = true;
        return { id: "body", require: ["area", "pos"], jumpForce: (f = n.jumpForce) != null ? f : Vr, weight: (c = n.weight) != null ? c : 1, update() {
          var C;
          this.move(0, i);
          let y = this.pushOutAll(), k = false;
          if (u && (!u.exists() || !this.isCollided(u) ? (this.trigger("fall", u), u = null, a = null, k = true) : a && u.pos && (this.pos = this.pos.add(u.pos.sub(a)), a = u.pos.clone())), !u) {
            i += Oe() * this.weight * T(), i = Math.min(i, (C = n.maxVel) != null ? C : Xr);
            for (let Y of y)
              Y.side === "bottom" && i > 0 ? (u = Y.obj, i = 0, u.pos && (a = u.pos.clone()), k || (this.trigger("ground", u), g = true)) : Y.side === "top" && i < 0 && (i = 0, this.trigger("headbutt", Y.obj));
          }
        }, curPlatform() {
          return u;
        }, grounded() {
          return u !== null;
        }, falling() {
          return i > 0;
        }, jump(y) {
          u = null, a = null, i = -y || -this.jumpForce;
        }, djump(y) {
          this.grounded() ? this.jump(y) : g && (g = false, this.jump(y), this.trigger("djump"));
        } };
      }
      __name(Lr, "Lr");
      s(Lr, "body");
      function Nr(n, i = {}) {
        let u = U.shaders[n];
        return { id: "shader", shader: n, uniform: i };
      }
      __name(Nr, "Nr");
      s(Nr, "shader");
      function Yr() {
        return { id: "solid", require: ["area"], solid: true };
      }
      __name(Yr, "Yr");
      s(Yr, "solid");
      function qr() {
        return { id: "fixed", fixed: true };
      }
      __name(qr, "qr");
      s(qr, "fixed");
      function Ir() {
        return { id: "stay", stay: true };
      }
      __name(Ir, "Ir");
      s(Ir, "stay");
      function zr(n) {
        if (n == null)
          throw new Error("health() requires the initial amount of hp");
        return { id: "health", hurt(i = 1) {
          this.setHP(n - i), this.trigger("hurt");
        }, heal(i = 1) {
          this.setHP(n + i), this.trigger("heal");
        }, hp() {
          return n;
        }, setHP(i) {
          n = i, n <= 0 && this.trigger("death");
        } };
      }
      __name(zr, "zr");
      s(zr, "health");
      function Kr(n, i) {
        if (n == null)
          throw new Error("lifespan() requires time");
        let u = 0;
        return { id: "ilfespan", update() {
          u += T(), u >= n && (i && i.call(this), this.destroy());
        } };
      }
      __name(Kr, "Kr");
      s(Kr, "lifespan");
      let J = { inspect: false, timeScale: 1, showLog: true, fps: r.fps, objCount() {
        return d.objs.size;
      }, stepFrame() {
        Qe(true);
      }, drawCalls: o.drawCalls, clearLog: w.clear, log: w.info, error: w.error, get paused() {
        return d.paused;
      }, set paused(n) {
        d.paused = n, n ? t.ctx.suspend() : t.ctx.resume();
      } };
      function Le(n) {
        d.loaded ? n() : d.on("load", n);
      }
      __name(Le, "Le");
      s(Le, "ready");
      function Hr(n, i) {
        d.scenes[n] = i;
      }
      __name(Hr, "Hr");
      s(Hr, "scene");
      function Mr(n, ...i) {
        if (!d.scenes[n])
          throw new Error(`scene not found: ${n}`);
        d.on("next", () => {
          d.events = {}, d.objEvents = { add: new Z(), update: new Z(), draw: new Z(), destroy: new Z() }, d.actions = new Z(), d.renders = new Z(), d.objs.forEach((u) => {
            u.stay || Re(u);
          }), d.timers = new Z(), d.cam = { pos: lt(), scale: l(1, 1), angle: 0, shake: 0 }, d.camMousePos = r.mousePos(), d.camMatrix = re(), d.layers = {}, d.defLayer = null, d.gravity = O, d.scenes[n](...i), e.debug !== false && He();
        });
      }
      __name(Mr, "Mr");
      s(Mr, "go");
      function Or(n, i) {
        try {
          return JSON.parse(window.localStorage[n]);
        } catch (u) {
          return i ? (dt(n, i), i) : null;
        }
      }
      __name(Or, "Or");
      s(Or, "getData");
      function dt(n, i) {
        window.localStorage[n] = JSON.stringify(i);
      }
      __name(dt, "dt");
      s(dt, "setData");
      function be(n) {
        let i = n(Ge);
        for (let u in i)
          Ge[u] = i[u], e.global !== false && (window[u] = i[u]);
        return Ge;
      }
      __name(be, "be");
      s(be, "plug");
      function lt() {
        return l(m() / 2, v() / 2);
      }
      __name(lt, "lt");
      s(lt, "center");
      let Ge = { loadRoot: U.loadRoot, loadSprite: U.loadSprite, loadSound: U.loadSound, loadFont: U.loadFont, loadShader: U.loadShader, load: U.load, width: m, height: v, center: lt, dt: T, time: r.time, screenshot: r.screenshot, focused: r.focused, focus: r.focus, cursor: r.cursor, regCursor: Xe, fullscreen: r.fullscreen, ready: Le, isTouch: () => r.isTouch, layers: j, camPos: ie, camScale: me, camRot: pe, shake: ne, toScreen: ce, toWorld: ve, gravity: Oe, add: he, readd: ge, destroy: Re, destroyAll: Me, get: De, every: te, revery: Ve, getComps: ae, pos: Cr, scale: ct, rotate: Dr, color: Er, origin: Ar, layer: Pr, area: Rr, sprite: Gr, text: kr, rect: Br, outline: _r, body: Lr, shader: Nr, timer: Fr, solid: Yr, fixed: qr, stay: Ir, health: zr, lifespan: Kr, z: Sr, move: Tr, on: ye, action: h, render: p, collides: b, overlaps: P, clicks: B, hovers: V, keyDown: R, keyPress: I, keyPressRep: L, keyRelease: Q, mouseDown: ee, mouseClick: Te, mouseRelease: ue, mouseMove: xe, charInput: we, touchStart: ze, touchMove: Ke, touchEnd: Ce, mousePos: F, mouseWorldPos: X, mouseDeltaPos: r.mouseDeltaPos, keyIsDown: r.keyDown, keyIsPressed: r.keyPressed, keyIsPressedRep: r.keyPressedRep, keyIsReleased: r.keyReleased, mouseIsDown: r.mouseDown, mouseIsClicked: r.mouseClicked, mouseIsReleased: r.mouseReleased, mouseIsMoved: r.mouseMoved, loop: _, wait: H, play: K, volume: t.volume, burp: t.burp, audioCtx: t.ctx, rng: nt, rand: qe, randSeed: Ct, vec2: l, dir: We, rgb: de, rgba: W, quad: oe, choose: Et, chance: Dt, lerp: Ye, map: Be, mapc: bt, wave: yt, deg2rad: ke, rad2deg: tt, drawSprite: N, drawText: z2, drawRect: o.drawRect, drawRectStroke: o.drawRectStroke, drawLine: o.drawLine, drawTri: o.drawTri, debug: J, scene: Hr, go: Mr, getData: Or, setData: dt, plug: be, ASCII_CHARS: ut, CP437_CHARS: Ot, LEFT: l(-1, 0), RIGHT: l(1, 0), UP: l(0, -1), DOWN: l(0, 1), canvas: r.canvas };
      if (be(sr), be(ir), be(ur), be(hr), be(mr), be(vr), e.plugins && e.plugins.forEach(be), e.global !== false)
        for (let n in Ge)
          window[n] = Ge[n];
      return r.run(() => {
        if (o.frameStart(), d.loaded)
          d.camMousePos = d.camMatrix.invert().multVec2(r.mousePos()), d.trigger("input"), Qe(), J.inspect && Ze(), J.showLog && w.draw();
        else {
          let n = U.loadProgress();
          if (n === 1)
            d.loaded = true, d.trigger("load"), x && x.connect().catch(w.error);
          else {
            let i = m() / 2, u = 24 / o.scale(), a = l(m() / 2, v() / 2).sub(l(i / 2, u / 2));
            o.drawRect(l(0), m(), v(), { color: de(0, 0, 0) }), o.drawRectStroke(a, i, u, { width: 4 / o.scale() }), o.drawRect(a, i * n, u);
          }
        }
        o.frameEnd();
      }), focus(), e.debug !== false && He(), window.addEventListener("error", (n) => {
        w.error(`Error: ${n.error.message}`), r.quit(), r.run(() => {
          U.loadProgress() === 1 && (o.frameStart(), w.draw(), o.frameEnd());
        });
      }), Ge;
    };
  });
  var kaboom_default = xn();

  // code/main.js
  kaboom_default({
    scale: 1.3
  });
  loadSprite("birdy", "sprites/birdy.png");
  loadSprite("burdy", "sprites/bean.png");
  loadSprite("LAZAR", "sprites/LAZAR.png");
  loadSprite("bg", "sprites/bg.png");
  loadSprite("pipe", "sprites/pipe.png");
  loadSprite("box", "sprites/box.png");
  loadSound("wooosh", "sounds/wooosh.mp3");
  loadSound("point", "sounds/point.mp3");
  loadSound("hit", "sounds/hit.wav");
  var highScore = 0;
  scene("menu", () => {
    add([
      sprite("bg", { width: width(), height: height() })
    ]);
    add([
      text("ENHANCED Flappy Bird", { size: 45 }),
      pos(width() / 2, height() / 4),
      origin("center"),
      color(255, 255, 0)
    ]);
    const menuBird = add([
      sprite("birdy"),
      scale(2),
      pos(width() / 2, height() / 2 - 20),
      origin("center")
    ]);
    let floatDir = 1;
    menuBird.action(() => {
      menuBird.pos.y += floatDir * 0.7;
      if (menuBird.pos.y > height() / 2 + 10 || menuBird.pos.y < height() / 2 - 30) {
        floatDir *= -1;
      }
    });
    const playBtn = add([
      text("PLAY", { size: 32 }),
      pos(width() / 2, height() / 2 + 80),
      area(),
      origin("center"),
      color(0, 255, 0),
      "playButton"
    ]);
    const howToPlayBtn = add([
      text("HOW TO PLAY", { size: 32 }),
      pos(width() / 2, height() / 2 + 140),
      area(),
      origin("center"),
      color(0, 255, 255),
      "howToPlayButton"
    ]);
    mouseClick(() => {
      if (mousePos().x > playBtn.pos.x - 50 && mousePos().x < playBtn.pos.x + 50 && mousePos().y > playBtn.pos.y - 20 && mousePos().y < playBtn.pos.y + 20) {
        go("game");
      }
      if (mousePos().x > howToPlayBtn.pos.x - 100 && mousePos().x < howToPlayBtn.pos.x + 100 && mousePos().y > howToPlayBtn.pos.y - 20 && mousePos().y < howToPlayBtn.pos.y + 20) {
        go("howToPlay");
      }
    });
    action("playButton", (btn) => {
      if (mousePos().x > btn.pos.x - 50 && mousePos().x < btn.pos.x + 50 && mousePos().y > btn.pos.y - 20 && mousePos().y < btn.pos.y + 20) {
        btn.scale = vec2(1.1);
      } else {
        btn.scale = vec2(1);
      }
    });
    action("howToPlayButton", (btn) => {
      if (mousePos().x > btn.pos.x - 100 && mousePos().x < btn.pos.x + 100 && mousePos().y > btn.pos.y - 20 && mousePos().y < btn.pos.y + 20) {
        btn.scale = vec2(1.1);
      } else {
        btn.scale = vec2(1);
      }
    });
    keyPress("space", () => {
      go("game");
    });
  });
  scene("howToPlay", () => {
    add([
      sprite("bg", { width: width(), height: height() })
    ]);
    add([
      text("HOW TO PLAY", { size: 40 }),
      pos(width() / 2, 60),
      origin("center"),
      color(255, 255, 0)
    ]);
    const instructions = [
      "To flap, press the SPACE BAR and try to maneuver",
      "yourself through the pipes and get a high score!",
      "",
      "There are powerups that you can encounter along the way",
      "that can do good (or bad)!",
      "",
      "But watch out, there can be laser beams falling from",
      "the sky or bullets that come straight for you!",
      "",
      "Now what are you waiting for, PRESS PLAY!"
    ];
    add([
      text(instructions.join("\n"), {
        size: 24,
        lineSpacing: 8,
        width: width() - 100
      }),
      pos(width() / 2, 180),
      origin("top"),
      color(255, 255, 255)
    ]);
    const backBtn = add([
      text("BACK", { size: 32 }),
      pos(width() / 4, height() - 80),
      area(),
      origin("center"),
      color(255, 100, 100)
    ]);
    const playBtn = add([
      text("PLAY", { size: 32 }),
      pos(width() * 3 / 4, height() - 80),
      area(),
      origin("center"),
      color(0, 255, 0)
    ]);
    mouseClick(() => {
      if (mousePos().x > backBtn.pos.x - 50 && mousePos().x < backBtn.pos.x + 50 && mousePos().y > backBtn.pos.y - 20 && mousePos().y < backBtn.pos.y + 20) {
        go("menu");
      }
      if (mousePos().x > playBtn.pos.x - 50 && mousePos().x < playBtn.pos.x + 50 && mousePos().y > playBtn.pos.y - 20 && mousePos().y < playBtn.pos.y + 20) {
        go("game");
      }
    });
    action(() => {
      if (mousePos().x > backBtn.pos.x - 50 && mousePos().x < backBtn.pos.x + 50 && mousePos().y > backBtn.pos.y - 20 && mousePos().y < backBtn.pos.y + 20) {
        backBtn.scale = vec2(1.1);
      } else {
        backBtn.scale = vec2(1);
      }
      if (mousePos().x > playBtn.pos.x - 50 && mousePos().x < playBtn.pos.x + 50 && mousePos().y > playBtn.pos.y - 20 && mousePos().y < playBtn.pos.y + 20) {
        playBtn.scale = vec2(1.1);
      } else {
        playBtn.scale = vec2(1);
      }
    });
    keyPress("escape", () => {
      go("menu");
    });
    keyPress("space", () => {
      go("game");
    });
  });
  scene("game", () => {
    let score = 0;
    let gameSpeed = 160;
    let baseSpeed = 160;
    let laserThreshold = rand(20, 35);
    let lasersActive = false;
    let laserDuration = 25;
    let breakDuration = 20;
    let bulletThreshold = rand(35, 55);
    let bulletsActive = false;
    let immunityHits = 0;
    let activeEffects = {};
    let scoreMultiplier = 1;
    let powerUpMessage = add([
      text("", { size: 36 }),
      pos(width() / 2, 80),
      origin("center"),
      color(255, 255, 0),
      z(100)
    ]);
    powerUpMessage.opacity = 0;
    function showPowerUpMessage(message, isPersistent = false) {
      powerUpMessage.text = message;
      powerUpMessage.opacity = 1;
      if (!isPersistent) {
        wait(2, () => {
          if (powerUpMessage.text === message) {
            powerUpMessage.opacity = 0;
          }
        });
      }
    }
    __name(showPowerUpMessage, "showPowerUpMessage");
    function hidePowerUpMessage() {
      powerUpMessage.opacity = 0;
      powerUpMessage.text = "";
    }
    __name(hidePowerUpMessage, "hidePowerUpMessage");
    function updateImmunityMessage() {
      if (immunityHits > 0) {
        showPowerUpMessage(`IMMUNITY x${immunityHits}`, true);
        activeEffects["immunity"] = true;
      } else {
        if (activeEffects["immunity"]) {
          delete activeEffects["immunity"];
          if (Object.keys(activeEffects).length === 0) {
            hidePowerUpMessage();
          }
        }
      }
    }
    __name(updateImmunityMessage, "updateImmunityMessage");
    function spawnPowerUp() {
      if (!player.exists())
        return;
      const powerUps = [
        { name: "quarterSpeed", chance: 0.25, duration: 15 },
        { name: "halfSpeed", chance: 0.25, duration: 10 },
        { name: "immunity", chance: 0.1, duration: 0 },
        { name: "doubleSpeed", chance: 0.25, duration: 7 },
        { name: "spawnLasers", chance: 0.23, duration: 5 },
        { name: "spawnBullets", chance: 0.23, duration: 5 },
        { name: "doubleScore", chance: 0.1, duration: 10 },
        { name: "tripleScore", chance: 0.05, duration: 10 }
      ];
      const powerUpBox = add([
        sprite("box"),
        pos(width(), rand(50, height() - 100)),
        area(),
        "powerup",
        { type: choose(powerUps) },
        move(LEFT, gameSpeed * 2.2),
        { moveDir: rand(-1, 1) },
        {
          update() {
            powerUpBox.move(0, powerUpBox.moveDir * 2);
            if (powerUpBox.pos.y < 50 || powerUpBox.pos.y > height() - 100) {
              powerUpBox.moveDir *= -1;
            }
          }
        }
      ]);
      wait(rand(40, 65), spawnPowerUp);
    }
    __name(spawnPowerUp, "spawnPowerUp");
    function activatePowerUp(type) {
      let message = "";
      console.log("Activating power-up: " + type.name);
      switch (type.name) {
        case "quarterSpeed":
          message = "QUARTER SPEED!";
          const quarterSpeed = gameSpeed * 0.25;
          gameSpeed = quarterSpeed;
          activeEffects["quarterSpeed"] = true;
          showPowerUpMessage(message);
          wait(type.duration, () => {
            gameSpeed = gameSpeed / 0.25;
            delete activeEffects["quarterSpeed"];
            if (Object.keys(activeEffects).length === 0) {
              hidePowerUpMessage();
            } else if (immunityHits > 0) {
              updateImmunityMessage();
            }
          });
          break;
        case "halfSpeed":
          message = "HALF SPEED!";
          const halfSpeed = gameSpeed * 0.5;
          gameSpeed = halfSpeed;
          activeEffects["halfSpeed"] = true;
          showPowerUpMessage(message);
          wait(type.duration, () => {
            gameSpeed = gameSpeed / 0.5;
            delete activeEffects["halfSpeed"];
            if (Object.keys(activeEffects).length === 0) {
              hidePowerUpMessage();
            } else if (immunityHits > 0) {
              updateImmunityMessage();
            }
          });
          break;
        case "immunity":
          immunityHits = 2;
          activeEffects["immunity"] = true;
          updateImmunityMessage();
          break;
        case "doubleSpeed":
          message = "DOUBLE SPEED!";
          const doubleSpeed = gameSpeed * 2;
          gameSpeed = doubleSpeed;
          activeEffects["doubleSpeed"] = true;
          showPowerUpMessage(message);
          wait(type.duration, () => {
            gameSpeed = gameSpeed / 2;
            delete activeEffects["doubleSpeed"];
            if (Object.keys(activeEffects).length === 0) {
              hidePowerUpMessage();
            } else if (immunityHits > 0) {
              updateImmunityMessage();
            }
          });
          break;
        case "spawnLasers":
          message = "LASERS ACTIVE!";
          lasersActive = true;
          activeEffects["lasers"] = true;
          showPowerUpMessage(message);
          spawnLaser();
          wait(type.duration, () => {
            lasersActive = false;
            delete activeEffects["lasers"];
            if (Object.keys(activeEffects).length === 0) {
              hidePowerUpMessage();
            } else if (immunityHits > 0) {
              updateImmunityMessage();
            }
          });
          break;
        case "spawnBullets":
          message = "BULLETS ACTIVE!";
          bulletsActive = true;
          activeEffects["bullets"] = true;
          showPowerUpMessage(message);
          spawnBullet();
          wait(type.duration, () => {
            bulletsActive = false;
            delete activeEffects["bullets"];
            if (Object.keys(activeEffects).length === 0) {
              hidePowerUpMessage();
            } else if (immunityHits > 0) {
              updateImmunityMessage();
            }
          });
          break;
        case "doubleScore":
          message = "DOUBLE SCORE!";
          scoreMultiplier = 2;
          activeEffects["doubleScore"] = true;
          showPowerUpMessage(message);
          wait(type.duration, () => {
            scoreMultiplier = 1;
            delete activeEffects["doubleScore"];
            if (Object.keys(activeEffects).length === 0) {
              hidePowerUpMessage();
            } else if (immunityHits > 0) {
              updateImmunityMessage();
            }
          });
          break;
        case "tripleScore":
          message = "TRIPLE SCORE!";
          scoreMultiplier = 3;
          activeEffects["tripleScore"] = true;
          showPowerUpMessage(message);
          wait(type.duration, () => {
            scoreMultiplier = 1;
            delete activeEffects["tripleScore"];
            if (Object.keys(activeEffects).length === 0) {
              hidePowerUpMessage();
            } else if (immunityHits > 0) {
              updateImmunityMessage();
            }
          });
          break;
      }
    }
    __name(activatePowerUp, "activatePowerUp");
    function getPipeGap() {
      const baseGap = 245;
      const minGap = 132;
      const reductionRate = 5;
      const currentGap = Math.max(baseGap - score * reductionRate, minGap);
      const variance = 33;
      return currentGap + rand(-variance, variance);
    }
    __name(getPipeGap, "getPipeGap");
    add([
      sprite("bg", { width: width(), height: height() })
    ]);
    const scoreText = add([
      text(score, { size: 50 })
    ]);
    const player = add([
      sprite("birdy"),
      scale(2),
      pos(80, 40),
      area(),
      body()
    ]);
    function producePipes() {
      const offset = rand(-50, 50);
      const currentGap = getPipeGap();
      add([
        sprite("pipe"),
        pos(width(), height() / 2 + offset + currentGap / 2),
        "pipe",
        area(),
        { passed: false }
      ]);
      add([
        sprite("pipe", { flipY: true }),
        pos(width(), height() / 2 + offset - currentGap / 2),
        origin("botleft"),
        "pipe",
        area()
      ]);
    }
    __name(producePipes, "producePipes");
    loop(1.5, () => {
      producePipes();
    });
    wait(5, spawnPowerUp);
    action("pipe", (pipe) => {
      pipe.move(-gameSpeed, 0);
      if (pipe.passed === false && pipe.pos.x < player.pos.x) {
        pipe.passed = true;
        score += 1 * scoreMultiplier;
        scoreText.text = score;
        gameSpeed += 9;
        play("point");
        if (score >= bulletThreshold && !bulletsActive) {
          bulletsActive = true;
          spawnBullet();
        }
        if (score >= laserThreshold && !lasersActive) {
          lasersActive = true;
          spawnLaser();
          wait(laserDuration, () => {
            lasersActive = false;
            wait(breakDuration, () => {
              laserDuration += rand(10, 30);
              lasersActive = true;
              spawnLaser();
            });
          });
        }
      }
    });
    function spawnLaser() {
      if (!lasersActive)
        return;
      add([
        sprite("LAZAR"),
        pos(rand(0, width()), 0),
        area(),
        "laser",
        move(DOWN, 400)
      ]);
      wait(rand(1, 3), spawnLaser);
    }
    __name(spawnLaser, "spawnLaser");
    function spawnBullet() {
      if (!bulletsActive)
        return;
      add([
        sprite("burdy"),
        pos(width(), rand(50, height() - 50)),
        area(),
        "bullet",
        move(LEFT, 3e3)
      ]);
      wait(rand(1.5, 4), spawnBullet);
    }
    __name(spawnBullet, "spawnBullet");
    player.collides("bullet", () => {
      if (immunityHits > 0) {
        immunityHits--;
        updateImmunityMessage();
        return;
      }
      play("hit");
      go("gameover", score);
    });
    player.collides("laser", () => {
      if (immunityHits > 0) {
        immunityHits--;
        updateImmunityMessage();
        return;
      }
      play("hit");
      go("gameover", score);
    });
    player.collides("pipe", () => {
      if (immunityHits > 0) {
        immunityHits--;
        updateImmunityMessage();
        return;
      }
      play("hit");
      go("gameover", score);
    });
    player.collides("powerup", (p) => {
      const powerupType = p.type;
      destroy(p);
      activatePowerUp(powerupType);
      play("point");
      console.log("Collected power-up!");
    });
    player.action(() => {
      if (player.pos.y > height() + 30 || player.pos.y < -30) {
        go("gameover", score);
      }
    });
    keyPress("space", () => {
      play("wooosh");
      player.jump(310);
    });
  });
  scene("gameover", (score) => {
    if (score > highScore) {
      highScore = score;
    }
    add([
      sprite("bg", { width: width(), height: height() })
    ]);
    add([
      text("GAME OVER!\n\nSCORE: " + score + "\nHIGH SCORE: " + highScore + "\n\nPress SPACE to try again\nPress ESC for menu", {
        size: 35,
        width: width() - 100,
        align: "center"
      }),
      pos(width() / 2, height() / 2),
      origin("center"),
      color(255, 255, 255)
    ]);
    const menuBtn = add([
      text("MENU", { size: 28 }),
      pos(width() / 4, height() - 80),
      origin("center"),
      color(255, 100, 100)
    ]);
    const retryBtn = add([
      text("TRY AGAIN", { size: 28 }),
      pos(width() * 3 / 4, height() - 80),
      origin("center"),
      color(0, 255, 0)
    ]);
    mouseClick(() => {
      if (mousePos().x > menuBtn.pos.x - 50 && mousePos().x < menuBtn.pos.x + 50 && mousePos().y > menuBtn.pos.y - 20 && mousePos().y < menuBtn.pos.y + 20) {
        go("menu");
      }
      if (mousePos().x > retryBtn.pos.x - 75 && mousePos().x < retryBtn.pos.x + 75 && mousePos().y > retryBtn.pos.y - 20 && mousePos().y < retryBtn.pos.y + 20) {
        go("game");
      }
    });
    action(() => {
      if (mousePos().x > menuBtn.pos.x - 50 && mousePos().x < menuBtn.pos.x + 50 && mousePos().y > menuBtn.pos.y - 20 && mousePos().y < menuBtn.pos.y + 20) {
        menuBtn.scale = vec2(1.1);
      } else {
        menuBtn.scale = vec2(1);
      }
      if (mousePos().x > retryBtn.pos.x - 75 && mousePos().x < retryBtn.pos.x + 75 && mousePos().y > retryBtn.pos.y - 20 && mousePos().y < retryBtn.pos.y + 20) {
        retryBtn.scale = vec2(1.1);
      } else {
        retryBtn.scale = vec2(1);
      }
    });
    keyPress("space", () => {
      go("game");
    });
    keyPress("escape", () => {
      go("menu");
    });
  });
  go("menu");
})();
//# sourceMappingURL=game.js.map
