function getPulpoTHREE() {
    var THREE = THREE || {};
    if (!window.Int32Array)window.Int32Array = Array, window.Float32Array = Array;
    THREE.Color = function (b) {
        b !== void 0 && this.setHex(b);
        return this
    };
    THREE.Color.prototype = {
        constructor: THREE.Color, r: 1, g: 1, b: 1, copy: function (b) {
            this.r = b.r;
            this.g = b.g;
            this.b = b.b;
            return this
        }, setRGB: function (b, c, e) {
            this.r = b;
            this.g = c;
            this.b = e;
            return this
        }, setHSV: function (b, c, e) {
            var f, h, m;
            if (e == 0)this.r = this.g = this.b = 0; else switch (f = Math.floor(b * 6), h = b * 6 - f, b = e * (1 - c), m = e * (1 - c * h), c = e * (1 - c * (1 - h)), f) {
                case 1:
                    this.r = m;
                    this.g = e;
                    this.b = b;
                    break;
                case 2:
                    this.r = b;
                    this.g = e;
                    this.b = c;
                    break;
                case 3:
                    this.r = b;
                    this.g = m;
                    this.b = e;
                    break;
                case 4:
                    this.r = c;
                    this.g = b;
                    this.b = e;
                    break;
                case 5:
                    this.r =
                        e;
                    this.g = b;
                    this.b = m;
                    break;
                case 6:
                case 0:
                    this.r = e, this.g = c, this.b = b
            }
            return this
        }, setHex: function (b) {
            b = Math.floor(b);
            this.r = (b >> 16 & 255) / 255;
            this.g = (b >> 8 & 255) / 255;
            this.b = (b & 255) / 255;
            return this
        }, getHex: function () {
            return ~~(this.r * 255) << 16 ^ ~~(this.g * 255) << 8 ^ ~~(this.b * 255)
        }, getContextStyle: function () {
            return "rgb(" + Math.floor(this.r * 255) + "," + Math.floor(this.g * 255) + "," + Math.floor(this.b * 255) + ")"
        }, clone: function () {
            return (new THREE.Color).setRGB(this.r, this.g, this.b)
        }
    };
    THREE.Vector2 = function (b, c) {
        this.x = b || 0;
        this.y = c || 0
    };
    THREE.Vector2.prototype = {
        constructor: THREE.Vector2, set: function (b, c) {
            this.x = b;
            this.y = c;
            return this
        }, copy: function (b) {
            this.x = b.x;
            this.y = b.y;
            return this
        }, clone: function () {
            return new THREE.Vector2(this.x, this.y)
        }, add: function (b, c) {
            this.x = b.x + c.x;
            this.y = b.y + c.y;
            return this
        }, addSelf: function (b) {
            this.x += b.x;
            this.y += b.y;
            return this
        }, sub: function (b, c) {
            this.x = b.x - c.x;
            this.y = b.y - c.y;
            return this
        }, subSelf: function (b) {
            this.x -= b.x;
            this.y -= b.y;
            return this
        }, multiplyScalar: function (b) {
            this.x *= b;
            this.y *= b;
            return this
        },
        divideScalar: function (b) {
            b ? (this.x /= b, this.y /= b) : this.set(0, 0);
            return this
        }, negate: function () {
            return this.multiplyScalar(-1)
        }, dot: function (b) {
            return this.x * b.x + this.y * b.y
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y
        }, length: function () {
            return Math.sqrt(this.lengthSq())
        }, normalize: function () {
            return this.divideScalar(this.length())
        }, distanceTo: function (b) {
            return Math.sqrt(this.distanceToSquared(b))
        }, distanceToSquared: function (b) {
            var c = this.x - b.x, b = this.y - b.y;
            return c * c + b * b
        }, setLength: function (b) {
            return this.normalize().multiplyScalar(b)
        },
        equals: function (b) {
            return b.x == this.x && b.y == this.y
        }
    };
    THREE.Vector3 = function (b, c, e) {
        this.x = b || 0;
        this.y = c || 0;
        this.z = e || 0
    };
    THREE.Vector3.prototype = {
        constructor: THREE.Vector3, set: function (b, c, e) {
            this.x = b;
            this.y = c;
            this.z = e;
            return this
        }, copy: function (b) {
            this.x = b.x;
            this.y = b.y;
            this.z = b.z;
            return this
        }, clone: function () {
            return new THREE.Vector3(this.x, this.y, this.z)
        }, add: function (b, c) {
            this.x = b.x + c.x;
            this.y = b.y + c.y;
            this.z = b.z + c.z;
            return this
        }, addSelf: function (b) {
            this.x += b.x;
            this.y += b.y;
            this.z += b.z;
            return this
        }, addScalar: function (b) {
            this.x += b;
            this.y += b;
            this.z += b;
            return this
        }, sub: function (b, c) {
            this.x = b.x - c.x;
            this.y = b.y - c.y;
            this.z =
                b.z - c.z;
            return this
        }, subSelf: function (b) {
            this.x -= b.x;
            this.y -= b.y;
            this.z -= b.z;
            return this
        }, multiply: function (b, c) {
            this.x = b.x * c.x;
            this.y = b.y * c.y;
            this.z = b.z * c.z;
            return this
        }, multiplySelf: function (b) {
            this.x *= b.x;
            this.y *= b.y;
            this.z *= b.z;
            return this
        }, multiplyScalar: function (b) {
            this.x *= b;
            this.y *= b;
            this.z *= b;
            return this
        }, divideSelf: function (b) {
            this.x /= b.x;
            this.y /= b.y;
            this.z /= b.z;
            return this
        }, divideScalar: function (b) {
            b ? (this.x /= b, this.y /= b, this.z /= b) : this.set(0, 0, 0);
            return this
        }, negate: function () {
            return this.multiplyScalar(-1)
        },
        dot: function (b) {
            return this.x * b.x + this.y * b.y + this.z * b.z
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }, length: function () {
            return Math.sqrt(this.lengthSq())
        }, lengthManhattan: function () {
            return this.x + this.y + this.z
        }, normalize: function () {
            return this.divideScalar(this.length())
        }, setLength: function (b) {
            return this.normalize().multiplyScalar(b)
        }, cross: function (b, c) {
            this.x = b.y * c.z - b.z * c.y;
            this.y = b.z * c.x - b.x * c.z;
            this.z = b.x * c.y - b.y * c.x;
            return this
        }, crossSelf: function (b) {
            return this.set(this.y *
            b.z - this.z * b.y, this.z * b.x - this.x * b.z, this.x * b.y - this.y * b.x)
        }, distanceTo: function (b) {
            return Math.sqrt(this.distanceToSquared(b))
        }, distanceToSquared: function (b) {
            return (new THREE.Vector3).sub(this, b).lengthSq()
        }, setPositionFromMatrix: function (b) {
            this.x = b.n14;
            this.y = b.n24;
            this.z = b.n34
        }, setRotationFromMatrix: function (b) {
            var c = Math.cos(this.y);
            this.y = Math.asin(b.n13);
            Math.abs(c) > 1.0E-5 ? (this.x = Math.atan2(-b.n23 / c, b.n33 / c), this.z = Math.atan2(-b.n12 / c, b.n11 / c)) : (this.x = 0, this.z = Math.atan2(b.n21, b.n22))
        }, isZero: function () {
            return this.lengthSq() <
                1.0E-4
        }
    };
    THREE.Vector4 = function (b, c, e, f) {
        this.x = b || 0;
        this.y = c || 0;
        this.z = e || 0;
        this.w = f || 1
    };
    THREE.Vector4.prototype = {
        constructor: THREE.Vector4, set: function (b, c, e, f) {
            this.x = b;
            this.y = c;
            this.z = e;
            this.w = f;
            return this
        }, copy: function (b) {
            this.x = b.x;
            this.y = b.y;
            this.z = b.z;
            this.w = b.w || 1
        }, clone: function () {
            return new THREE.Vector4(this.x, this.y, this.z, this.w)
        }, add: function (b, c) {
            this.x = b.x + c.x;
            this.y = b.y + c.y;
            this.z = b.z + c.z;
            this.w = b.w + c.w;
            return this
        }, addSelf: function (b) {
            this.x += b.x;
            this.y += b.y;
            this.z += b.z;
            this.w += b.w;
            return this
        }, sub: function (b, c) {
            this.x = b.x - c.x;
            this.y = b.y - c.y;
            this.z = b.z - c.z;
            this.w =
                b.w - c.w;
            return this
        }, subSelf: function (b) {
            this.x -= b.x;
            this.y -= b.y;
            this.z -= b.z;
            this.w -= b.w;
            return this
        }, multiplyScalar: function (b) {
            this.x *= b;
            this.y *= b;
            this.z *= b;
            this.w *= b;
            return this
        }, divideScalar: function (b) {
            b ? (this.x /= b, this.y /= b, this.z /= b, this.w /= b) : (this.z = this.y = this.x = 0, this.w = 1);
            return this
        }, negate: function () {
            return this.multiplyScalar(-1)
        }, dot: function (b) {
            return this.x * b.x + this.y * b.y + this.z * b.z + this.w * b.w
        }, lengthSq: function () {
            return this.dot(this)
        }, length: function () {
            return Math.sqrt(this.lengthSq())
        },
        normalize: function () {
            return this.divideScalar(this.length())
        }, setLength: function (b) {
            return this.normalize().multiplyScalar(b)
        }, lerpSelf: function (b, c) {
            this.x += (b.x - this.x) * c;
            this.y += (b.y - this.y) * c;
            this.z += (b.z - this.z) * c;
            this.w += (b.w - this.w) * c;
            return this
        }
    };
    THREE.Ray = function (b, c) {
        this.origin = b || new THREE.Vector3;
        this.direction = c || new THREE.Vector3
    };
    THREE.Ray.prototype = {
        constructor: THREE.Ray, intersectScene: function (b) {
            return this.intersectObjects(b.objects)
        }, intersectObjects: function (b) {
            var c, e, f = [];
            c = 0;
            for (e = b.length; c < e; c++)f = f.concat(this.intersectObject(b[c]));
            f.sort(function (b, e) {
                return b.distance - e.distance
            });
            return f
        }, intersectObject: function (b) {
            function c(b, e, c) {
                var f;
                f = c.clone().subSelf(b).dot(e);
                if (f <= 0)return null;
                b = b.clone().addSelf(e.clone().multiplyScalar(f));
                return c.distanceTo(b)
            }

            function e(b, e, c, f) {
                var f = f.clone().subSelf(e),
                    c = c.clone().subSelf(e), h = b.clone().subSelf(e), b = f.dot(f), e = f.dot(c), f = f.dot(h), k = c.dot(c), c = c.dot(h), h = 1 / (b * k - e * e), k = (k * f - e * c) * h, b = (b * c - e * f) * h;
                return k > 0 && b > 0 && k + b < 1
            }

            if (b instanceof THREE.Particle) {
                var f = c(this.origin, this.direction, b.matrixWorld.getPosition());
                if (f == null || f > b.scale.x)return [];
                return [{distance: f, point: b.position, face: null, object: b}]
            } else if (b instanceof THREE.Mesh) {
                f = c(this.origin, this.direction, b.matrixWorld.getPosition());
                if (f == null || f > b.geometry.boundingSphere.radius * Math.max(b.scale.x,
                        Math.max(b.scale.y, b.scale.z)))return [];
                var h, m, k, n, u, p, v, t, x, w, z = b.geometry, y = z.vertices, B = [], f = 0;
                for (h = z.faces.length; f < h; f++)if (m = z.faces[f], x = this.origin.clone(), w = this.direction.clone(), p = b.matrixWorld, k = p.multiplyVector3(m.centroid.clone()).subSelf(x), t = k.dot(w), !(t <= 0) && (k = p.multiplyVector3(y[m.a].position.clone()), n = p.multiplyVector3(y[m.b].position.clone()), u = p.multiplyVector3(y[m.c].position.clone()), p = m instanceof THREE.Face4 ? p.multiplyVector3(y[m.d].position.clone()) : null, v = b.matrixRotationWorld.multiplyVector3(m.normal.clone()),
                        t = w.dot(v), b.doubleSided || (b.flipSided ? t > 0 : t < 0)))if (t = v.dot((new THREE.Vector3).sub(k, x)) / t, x = x.addSelf(w.multiplyScalar(t)), m instanceof THREE.Face3)e(x, k, n, u) && (m = {
                    distance: this.origin.distanceTo(x),
                    point: x,
                    face: m,
                    object: b
                }, B.push(m)); else if (m instanceof THREE.Face4 && (e(x, k, n, p) || e(x, n, u, p)))m = {
                    distance: this.origin.distanceTo(x),
                    point: x,
                    face: m,
                    object: b
                }, B.push(m);
                B.sort(function (b, e) {
                    return b.distance - e.distance
                });
                return B
            } else return []
        }
    };
    THREE.Rectangle = function () {
        function b() {
            m = f - c;
            k = h - e
        }

        var c, e, f, h, m, k, n = !0;
        this.getX = function () {
            return c
        };
        this.getY = function () {
            return e
        };
        this.getWidth = function () {
            return m
        };
        this.getHeight = function () {
            return k
        };
        this.getLeft = function () {
            return c
        };
        this.getTop = function () {
            return e
        };
        this.getRight = function () {
            return f
        };
        this.getBottom = function () {
            return h
        };
        this.set = function (k, m, v, t) {
            n = !1;
            c = k;
            e = m;
            f = v;
            h = t;
            b()
        };
        this.addPoint = function (k, m) {
            n ? (n = !1, c = k, e = m, f = k, h = m) : (c = c < k ? c : k, e = e < m ? e : m, f = f > k ? f : k, h = h > m ? h : m);
            b()
        };
        this.add3Points =
            function (k, m, v, t, x, w) {
                n ? (n = !1, c = k < v ? k < x ? k : x : v < x ? v : x, e = m < t ? m < w ? m : w : t < w ? t : w, f = k > v ? k > x ? k : x : v > x ? v : x, h = m > t ? m > w ? m : w : t > w ? t : w) : (c = k < v ? k < x ? k < c ? k : c : x < c ? x : c : v < x ? v < c ? v : c : x < c ? x : c, e = m < t ? m < w ? m < e ? m : e : w < e ? w : e : t < w ? t < e ? t : e : w < e ? w : e, f = k > v ? k > x ? k > f ? k : f : x > f ? x : f : v > x ? v > f ? v : f : x > f ? x : f, h = m > t ? m > w ? m > h ? m : h : w > h ? w : h : t > w ? t > h ? t : h : w > h ? w : h);
                b()
            };
        this.addRectangle = function (k) {
            n ? (n = !1, c = k.getLeft(), e = k.getTop(), f = k.getRight(), h = k.getBottom()) : (c = c < k.getLeft() ? c : k.getLeft(), e = e < k.getTop() ? e : k.getTop(), f = f > k.getRight() ? f : k.getRight(), h = h >
            k.getBottom() ? h : k.getBottom());
            b()
        };
        this.inflate = function (k) {
            c -= k;
            e -= k;
            f += k;
            h += k;
            b()
        };
        this.minSelf = function (k) {
            c = c > k.getLeft() ? c : k.getLeft();
            e = e > k.getTop() ? e : k.getTop();
            f = f < k.getRight() ? f : k.getRight();
            h = h < k.getBottom() ? h : k.getBottom();
            b()
        };
        this.instersects = function (b) {
            return Math.min(f, b.getRight()) - Math.max(c, b.getLeft()) >= 0 && Math.min(h, b.getBottom()) - Math.max(e, b.getTop()) >= 0
        };
        this.empty = function () {
            n = !0;
            h = f = e = c = 0;
            b()
        };
        this.isEmpty = function () {
            return n
        }
    };
    THREE.Matrix3 = function () {
        this.m = []
    };
    THREE.Matrix3.prototype = {
        constructor: THREE.Matrix3, transpose: function () {
            var b, c = this.m;
            b = c[1];
            c[1] = c[3];
            c[3] = b;
            b = c[2];
            c[2] = c[6];
            c[6] = b;
            b = c[5];
            c[5] = c[7];
            c[7] = b;
            return this
        }, transposeIntoArray: function (b) {
            var c = this.m;
            b[0] = c[0];
            b[1] = c[3];
            b[2] = c[6];
            b[3] = c[1];
            b[4] = c[4];
            b[5] = c[7];
            b[6] = c[2];
            b[7] = c[5];
            b[8] = c[8];
            return this
        }
    };
    THREE.Matrix4 = function (b, c, e, f, h, m, k, n, u, p, v, t, x, w, z, y) {
        this.set(b || 1, c || 0, e || 0, f || 0, h || 0, m || 1, k || 0, n || 0, u || 0, p || 0, v || 1, t || 0, x || 0, w || 0, z || 0, y || 1);
        this.flat = Array(16);
        this.m33 = new THREE.Matrix3
    };
    THREE.Matrix4.prototype = {
        constructor: THREE.Matrix4, set: function (b, c, e, f, h, m, k, n, u, p, v, t, x, w, z, y) {
            this.n11 = b;
            this.n12 = c;
            this.n13 = e;
            this.n14 = f;
            this.n21 = h;
            this.n22 = m;
            this.n23 = k;
            this.n24 = n;
            this.n31 = u;
            this.n32 = p;
            this.n33 = v;
            this.n34 = t;
            this.n41 = x;
            this.n42 = w;
            this.n43 = z;
            this.n44 = y;
            return this
        }, identity: function () {
            this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this
        }, copy: function (b) {
            this.set(b.n11, b.n12, b.n13, b.n14, b.n21, b.n22, b.n23, b.n24, b.n31, b.n32, b.n33, b.n34, b.n41, b.n42, b.n43, b.n44);
            return this
        }, lookAt: function (b,
                             c, e) {
            var f = THREE.Matrix4.__v1, h = THREE.Matrix4.__v2, m = THREE.Matrix4.__v3;
            m.sub(b, c).normalize();
            if (m.length() === 0)m.z = 1;
            f.cross(e, m).normalize();
            f.length() === 0 && (m.x += 1.0E-4, f.cross(e, m).normalize());
            h.cross(m, f).normalize();
            this.n11 = f.x;
            this.n12 = h.x;
            this.n13 = m.x;
            this.n21 = f.y;
            this.n22 = h.y;
            this.n23 = m.y;
            this.n31 = f.z;
            this.n32 = h.z;
            this.n33 = m.z;
            return this
        }, multiplyVector3: function (b) {
            var c = b.x, e = b.y, f = b.z, h = 1 / (this.n41 * c + this.n42 * e + this.n43 * f + this.n44);
            b.x = (this.n11 * c + this.n12 * e + this.n13 * f + this.n14) * h;
            b.y = (this.n21 * c + this.n22 * e + this.n23 * f + this.n24) * h;
            b.z = (this.n31 * c + this.n32 * e + this.n33 * f + this.n34) * h;
            return b
        }, multiplyVector4: function (b) {
            var c = b.x, e = b.y, f = b.z, h = b.w;
            b.x = this.n11 * c + this.n12 * e + this.n13 * f + this.n14 * h;
            b.y = this.n21 * c + this.n22 * e + this.n23 * f + this.n24 * h;
            b.z = this.n31 * c + this.n32 * e + this.n33 * f + this.n34 * h;
            b.w = this.n41 * c + this.n42 * e + this.n43 * f + this.n44 * h;
            return b
        }, rotateAxis: function (b) {
            var c = b.x, e = b.y, f = b.z;
            b.x = c * this.n11 + e * this.n12 + f * this.n13;
            b.y = c * this.n21 + e * this.n22 + f * this.n23;
            b.z = c * this.n31 +
            e * this.n32 + f * this.n33;
            b.normalize();
            return b
        }, crossVector: function (b) {
            var c = new THREE.Vector4;
            c.x = this.n11 * b.x + this.n12 * b.y + this.n13 * b.z + this.n14 * b.w;
            c.y = this.n21 * b.x + this.n22 * b.y + this.n23 * b.z + this.n24 * b.w;
            c.z = this.n31 * b.x + this.n32 * b.y + this.n33 * b.z + this.n34 * b.w;
            c.w = b.w ? this.n41 * b.x + this.n42 * b.y + this.n43 * b.z + this.n44 * b.w : 1;
            return c
        }, multiply: function (b, c) {
            var e = b.n11, f = b.n12, h = b.n13, m = b.n14, k = b.n21, n = b.n22, u = b.n23, p = b.n24, v = b.n31, t = b.n32, x = b.n33, w = b.n34, z = b.n41, y = b.n42, B = b.n43, D = b.n44, G = c.n11, H = c.n12,
                E = c.n13, N = c.n14, F = c.n21, I = c.n22, C = c.n23, K = c.n24, U = c.n31, L = c.n32, O = c.n33, S = c.n34, P = c.n41, o = c.n42, W = c.n43, na = c.n44;
            this.n11 = e * G + f * F + h * U + m * P;
            this.n12 = e * H + f * I + h * L + m * o;
            this.n13 = e * E + f * C + h * O + m * W;
            this.n14 = e * N + f * K + h * S + m * na;
            this.n21 = k * G + n * F + u * U + p * P;
            this.n22 = k * H + n * I + u * L + p * o;
            this.n23 = k * E + n * C + u * O + p * W;
            this.n24 = k * N + n * K + u * S + p * na;
            this.n31 = v * G + t * F + x * U + w * P;
            this.n32 = v * H + t * I + x * L + w * o;
            this.n33 = v * E + t * C + x * O + w * W;
            this.n34 = v * N + t * K + x * S + w * na;
            this.n41 = z * G + y * F + B * U + D * P;
            this.n42 = z * H + y * I + B * L + D * o;
            this.n43 = z * E + y * C + B * O + D * W;
            this.n44 = z *
            N + y * K + B * S + D * na;
            return this
        }, multiplyToArray: function (b, c, e) {
            this.multiply(b, c);
            e[0] = this.n11;
            e[1] = this.n21;
            e[2] = this.n31;
            e[3] = this.n41;
            e[4] = this.n12;
            e[5] = this.n22;
            e[6] = this.n32;
            e[7] = this.n42;
            e[8] = this.n13;
            e[9] = this.n23;
            e[10] = this.n33;
            e[11] = this.n43;
            e[12] = this.n14;
            e[13] = this.n24;
            e[14] = this.n34;
            e[15] = this.n44;
            return this
        }, multiplySelf: function (b) {
            this.multiply(this, b);
            return this
        }, multiplyScalar: function (b) {
            this.n11 *= b;
            this.n12 *= b;
            this.n13 *= b;
            this.n14 *= b;
            this.n21 *= b;
            this.n22 *= b;
            this.n23 *= b;
            this.n24 *=
                b;
            this.n31 *= b;
            this.n32 *= b;
            this.n33 *= b;
            this.n34 *= b;
            this.n41 *= b;
            this.n42 *= b;
            this.n43 *= b;
            this.n44 *= b;
            return this
        }, determinant: function () {
            var b = this.n11, c = this.n12, e = this.n13, f = this.n14, h = this.n21, m = this.n22, k = this.n23, n = this.n24, u = this.n31, p = this.n32, v = this.n33, t = this.n34, x = this.n41, w = this.n42, z = this.n43, y = this.n44;
            return f * k * p * x - e * n * p * x - f * m * v * x + c * n * v * x + e * m * t * x - c * k * t * x - f * k * u * w + e * n * u * w + f * h * v * w - b * n * v * w - e * h * t * w + b * k * t * w + f * m * u * z - c * n * u * z - f * h * p * z + b * n * p * z + c * h * t * z - b * m * t * z - e * m * u * y + c * k * u * y + e * h * p * y - b * k * p * y - c * h *
                v * y + b * m * v * y
        }, transpose: function () {
            var b;
            b = this.n21;
            this.n21 = this.n12;
            this.n12 = b;
            b = this.n31;
            this.n31 = this.n13;
            this.n13 = b;
            b = this.n32;
            this.n32 = this.n23;
            this.n23 = b;
            b = this.n41;
            this.n41 = this.n14;
            this.n14 = b;
            b = this.n42;
            this.n42 = this.n24;
            this.n24 = b;
            b = this.n43;
            this.n43 = this.n34;
            this.n43 = b;
            return this
        }, clone: function () {
            var b = new THREE.Matrix4;
            b.n11 = this.n11;
            b.n12 = this.n12;
            b.n13 = this.n13;
            b.n14 = this.n14;
            b.n21 = this.n21;
            b.n22 = this.n22;
            b.n23 = this.n23;
            b.n24 = this.n24;
            b.n31 = this.n31;
            b.n32 = this.n32;
            b.n33 = this.n33;
            b.n34 =
                this.n34;
            b.n41 = this.n41;
            b.n42 = this.n42;
            b.n43 = this.n43;
            b.n44 = this.n44;
            return b
        }, flatten: function () {
            this.flat[0] = this.n11;
            this.flat[1] = this.n21;
            this.flat[2] = this.n31;
            this.flat[3] = this.n41;
            this.flat[4] = this.n12;
            this.flat[5] = this.n22;
            this.flat[6] = this.n32;
            this.flat[7] = this.n42;
            this.flat[8] = this.n13;
            this.flat[9] = this.n23;
            this.flat[10] = this.n33;
            this.flat[11] = this.n43;
            this.flat[12] = this.n14;
            this.flat[13] = this.n24;
            this.flat[14] = this.n34;
            this.flat[15] = this.n44;
            return this.flat
        }, flattenToArray: function (b) {
            b[0] =
                this.n11;
            b[1] = this.n21;
            b[2] = this.n31;
            b[3] = this.n41;
            b[4] = this.n12;
            b[5] = this.n22;
            b[6] = this.n32;
            b[7] = this.n42;
            b[8] = this.n13;
            b[9] = this.n23;
            b[10] = this.n33;
            b[11] = this.n43;
            b[12] = this.n14;
            b[13] = this.n24;
            b[14] = this.n34;
            b[15] = this.n44;
            return b
        }, flattenToArrayOffset: function (b, c) {
            b[c] = this.n11;
            b[c + 1] = this.n21;
            b[c + 2] = this.n31;
            b[c + 3] = this.n41;
            b[c + 4] = this.n12;
            b[c + 5] = this.n22;
            b[c + 6] = this.n32;
            b[c + 7] = this.n42;
            b[c + 8] = this.n13;
            b[c + 9] = this.n23;
            b[c + 10] = this.n33;
            b[c + 11] = this.n43;
            b[c + 12] = this.n14;
            b[c + 13] = this.n24;
            b[c + 14] =
                this.n34;
            b[c + 15] = this.n44;
            return b
        }, setTranslation: function (b, c, e) {
            this.set(1, 0, 0, b, 0, 1, 0, c, 0, 0, 1, e, 0, 0, 0, 1);
            return this
        }, setScale: function (b, c, e) {
            this.set(b, 0, 0, 0, 0, c, 0, 0, 0, 0, e, 0, 0, 0, 0, 1);
            return this
        }, setRotationX: function (b) {
            var c = Math.cos(b), b = Math.sin(b);
            this.set(1, 0, 0, 0, 0, c, -b, 0, 0, b, c, 0, 0, 0, 0, 1);
            return this
        }, setRotationY: function (b) {
            var c = Math.cos(b), b = Math.sin(b);
            this.set(c, 0, b, 0, 0, 1, 0, 0, -b, 0, c, 0, 0, 0, 0, 1);
            return this
        }, setRotationZ: function (b) {
            var c = Math.cos(b), b = Math.sin(b);
            this.set(c, -b, 0,
                0, b, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this
        }, setRotationAxis: function (b, c) {
            var e = Math.cos(c), f = Math.sin(c), h = 1 - e, m = b.x, k = b.y, n = b.z, u = h * m, p = h * k;
            this.set(u * m + e, u * k - f * n, u * n + f * k, 0, u * k + f * n, p * k + e, p * n - f * m, 0, u * n - f * k, p * n + f * m, h * n * n + e, 0, 0, 0, 0, 1);
            return this
        }, setPosition: function (b) {
            this.n14 = b.x;
            this.n24 = b.y;
            this.n34 = b.z;
            return this
        }, getPosition: function () {
            if (!this.position)this.position = new THREE.Vector3;
            this.position.set(this.n14, this.n24, this.n34);
            return this.position
        }, getColumnX: function () {
            if (!this.columnX)this.columnX =
                new THREE.Vector3;
            this.columnX.set(this.n11, this.n21, this.n31);
            return this.columnX
        }, getColumnY: function () {
            if (!this.columnY)this.columnY = new THREE.Vector3;
            this.columnY.set(this.n12, this.n22, this.n32);
            return this.columnY
        }, getColumnZ: function () {
            if (!this.columnZ)this.columnZ = new THREE.Vector3;
            this.columnZ.set(this.n13, this.n23, this.n33);
            return this.columnZ
        }, setRotationFromEuler: function (b, c) {
            var e = b.x, f = b.y, h = b.z, m = Math.cos(e), e = Math.sin(e), k = Math.cos(f), f = Math.sin(f), n = Math.cos(h), h = Math.sin(h);
            switch (c) {
                case "YXZ":
                    var u =
                        k * n, p = k * h, v = f * n, t = f * h;
                    this.n11 = u + t * e;
                    this.n12 = v * e - p;
                    this.n13 = m * f;
                    this.n21 = m * h;
                    this.n22 = m * n;
                    this.n23 = -e;
                    this.n31 = p * e - v;
                    this.n32 = t + u * e;
                    this.n33 = m * k;
                    break;
                case "ZXY":
                    u = k * n;
                    p = k * h;
                    v = f * n;
                    t = f * h;
                    this.n11 = u - t * e;
                    this.n12 = -m * h;
                    this.n13 = v + p * e;
                    this.n21 = p + v * e;
                    this.n22 = m * n;
                    this.n23 = t - u * e;
                    this.n31 = -m * f;
                    this.n32 = e;
                    this.n33 = m * k;
                    break;
                case "ZYX":
                    u = m * n;
                    p = m * h;
                    v = e * n;
                    t = e * h;
                    this.n11 = k * n;
                    this.n12 = v * f - p;
                    this.n13 = u * f + t;
                    this.n21 = k * h;
                    this.n22 = t * f + u;
                    this.n23 = p * f - v;
                    this.n31 = -f;
                    this.n32 = e * k;
                    this.n33 = m * k;
                    break;
                case "YZX":
                    u = m * k;
                    p =
                        m * f;
                    v = e * k;
                    t = e * f;
                    this.n11 = k * n;
                    this.n12 = t - u * h;
                    this.n13 = v * h + p;
                    this.n21 = h;
                    this.n22 = m * n;
                    this.n23 = -e * n;
                    this.n31 = -f * n;
                    this.n32 = p * h + v;
                    this.n33 = u - t * h;
                    break;
                case "XZY":
                    u = m * k;
                    p = m * f;
                    v = e * k;
                    t = e * f;
                    this.n11 = k * n;
                    this.n12 = -h;
                    this.n13 = f * n;
                    this.n21 = u * h + t;
                    this.n22 = m * n;
                    this.n23 = p * h - v;
                    this.n31 = v * h - p;
                    this.n32 = e * n;
                    this.n33 = t * h + u;
                    break;
                default:
                    u = m * n, p = m * h, v = e * n, t = e * h, this.n11 = k * n, this.n12 = -k * h, this.n13 = f, this.n21 = p + v * f, this.n22 = u - t * f, this.n23 = -e * k, this.n31 = t - u * f, this.n32 = v + p * f, this.n33 = m * k
            }
            return this
        }, setRotationFromQuaternion: function (b) {
            var c =
                b.x, e = b.y, f = b.z, h = b.w, m = c + c, k = e + e, n = f + f, b = c * m, u = c * k;
            c *= n;
            var p = e * k;
            e *= n;
            f *= n;
            m *= h;
            k *= h;
            h *= n;
            this.n11 = 1 - (p + f);
            this.n12 = u - h;
            this.n13 = c + k;
            this.n21 = u + h;
            this.n22 = 1 - (b + f);
            this.n23 = e - m;
            this.n31 = c - k;
            this.n32 = e + m;
            this.n33 = 1 - (b + p);
            return this
        }, scale: function (b) {
            var c = b.x, e = b.y, b = b.z;
            this.n11 *= c;
            this.n12 *= e;
            this.n13 *= b;
            this.n21 *= c;
            this.n22 *= e;
            this.n23 *= b;
            this.n31 *= c;
            this.n32 *= e;
            this.n33 *= b;
            this.n41 *= c;
            this.n42 *= e;
            this.n43 *= b;
            return this
        }, compose: function (b, c, e) {
            var f = THREE.Matrix4.__m1, h = THREE.Matrix4.__m2;
            f.identity();
            f.setRotationFromQuaternion(c);
            h.setScale(e.x, e.y, e.z);
            this.multiply(f, h);
            this.n14 = b.x;
            this.n24 = b.y;
            this.n34 = b.z;
            return this
        }, decompose: function (b, c, e) {
            var f = THREE.Matrix4.__v1, h = THREE.Matrix4.__v2, m = THREE.Matrix4.__v3;
            f.set(this.n11, this.n21, this.n31);
            h.set(this.n12, this.n22, this.n32);
            m.set(this.n13, this.n23, this.n33);
            b = b instanceof THREE.Vector3 ? b : new THREE.Vector3;
            c = c instanceof THREE.Quaternion ? c : new THREE.Quaternion;
            e = e instanceof THREE.Vector3 ? e : new THREE.Vector3;
            e.x = f.length();
            e.y = h.length();
            e.z = m.length();
            b.x = this.n14;
            b.y = this.n24;
            b.z = this.n34;
            f = THREE.Matrix4.__m1;
            f.copy(this);
            f.n11 /= e.x;
            f.n21 /= e.x;
            f.n31 /= e.x;
            f.n12 /= e.y;
            f.n22 /= e.y;
            f.n32 /= e.y;
            f.n13 /= e.z;
            f.n23 /= e.z;
            f.n33 /= e.z;
            c.setFromRotationMatrix(f);
            return [b, c, e]
        }, extractPosition: function (b) {
            this.n14 = b.n14;
            this.n24 = b.n24;
            this.n34 = b.n34
        }, extractRotation: function (b, c) {
            var e = 1 / c.x, f = 1 / c.y, h = 1 / c.z;
            this.n11 = b.n11 * e;
            this.n21 = b.n21 * e;
            this.n31 = b.n31 * e;
            this.n12 = b.n12 * f;
            this.n22 = b.n22 * f;
            this.n32 = b.n32 * f;
            this.n13 = b.n13 * h;
            this.n23 =
                b.n23 * h;
            this.n33 = b.n33 * h
        }
    };
    THREE.Matrix4.makeInvert = function (b, c) {
        var e = b.n11, f = b.n12, h = b.n13, m = b.n14, k = b.n21, n = b.n22, u = b.n23, p = b.n24, v = b.n31, t = b.n32, x = b.n33, w = b.n34, z = b.n41, y = b.n42, B = b.n43, D = b.n44;
        c === void 0 && (c = new THREE.Matrix4);
        c.n11 = u * w * y - p * x * y + p * t * B - n * w * B - u * t * D + n * x * D;
        c.n12 = m * x * y - h * w * y - m * t * B + f * w * B + h * t * D - f * x * D;
        c.n13 = h * p * y - m * u * y + m * n * B - f * p * B - h * n * D + f * u * D;
        c.n14 = m * u * t - h * p * t - m * n * x + f * p * x + h * n * w - f * u * w;
        c.n21 = p * x * z - u * w * z - p * v * B + k * w * B + u * v * D - k * x * D;
        c.n22 = h * w * z - m * x * z + m * v * B - e * w * B - h * v * D + e * x * D;
        c.n23 = m * u * z - h * p * z - m * k * B + e * p * B + h * k * D - e * u * D;
        c.n24 =
            h * p * v - m * u * v + m * k * x - e * p * x - h * k * w + e * u * w;
        c.n31 = n * w * z - p * t * z + p * v * y - k * w * y - n * v * D + k * t * D;
        c.n32 = m * t * z - f * w * z - m * v * y + e * w * y + f * v * D - e * t * D;
        c.n33 = h * p * z - m * n * z + m * k * y - e * p * y - f * k * D + e * n * D;
        c.n34 = m * n * v - f * p * v - m * k * t + e * p * t + f * k * w - e * n * w;
        c.n41 = u * t * z - n * x * z - u * v * y + k * x * y + n * v * B - k * t * B;
        c.n42 = f * x * z - h * t * z + h * v * y - e * x * y - f * v * B + e * t * B;
        c.n43 = h * n * z - f * u * z - h * k * y + e * u * y + f * k * B - e * n * B;
        c.n44 = f * u * v - h * n * v + h * k * t - e * u * t - f * k * x + e * n * x;
        c.multiplyScalar(1 / b.determinant());
        return c
    };
    THREE.Matrix4.makeInvert3x3 = function (b) {
        var c = b.m33, e = c.m, f = b.n33 * b.n22 - b.n32 * b.n23, h = -b.n33 * b.n21 + b.n31 * b.n23, m = b.n32 * b.n21 - b.n31 * b.n22, k = -b.n33 * b.n12 + b.n32 * b.n13, n = b.n33 * b.n11 - b.n31 * b.n13, u = -b.n32 * b.n11 + b.n31 * b.n12, p = b.n23 * b.n12 - b.n22 * b.n13, v = -b.n23 * b.n11 + b.n21 * b.n13, t = b.n22 * b.n11 - b.n21 * b.n12, b = b.n11 * f + b.n21 * k + b.n31 * p;
        b == 0 && console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible.");
        b = 1 / b;
        e[0] = b * f;
        e[1] = b * h;
        e[2] = b * m;
        e[3] = b * k;
        e[4] = b * n;
        e[5] = b * u;
        e[6] = b * p;
        e[7] = b * v;
        e[8] = b * t;
        return c
    };
    THREE.Matrix4.makeFrustum = function (b, c, e, f, h, m) {
        var k;
        k = new THREE.Matrix4;
        k.n11 = 2 * h / (c - b);
        k.n12 = 0;
        k.n13 = (c + b) / (c - b);
        k.n14 = 0;
        k.n21 = 0;
        k.n22 = 2 * h / (f - e);
        k.n23 = (f + e) / (f - e);
        k.n24 = 0;
        k.n31 = 0;
        k.n32 = 0;
        k.n33 = -(m + h) / (m - h);
        k.n34 = -2 * m * h / (m - h);
        k.n41 = 0;
        k.n42 = 0;
        k.n43 = -1;
        k.n44 = 0;
        return k
    };
    THREE.Matrix4.makePerspective = function (b, c, e, f) {
        var h, b = e * Math.tan(b * Math.PI / 360);
        h = -b;
        return THREE.Matrix4.makeFrustum(h * c, b * c, h, b, e, f)
    };
    THREE.Matrix4.makeOrtho = function (b, c, e, f, h, m) {
        var k, n, u, p;
        k = new THREE.Matrix4;
        n = c - b;
        u = e - f;
        p = m - h;
        k.n11 = 2 / n;
        k.n12 = 0;
        k.n13 = 0;
        k.n14 = -((c + b) / n);
        k.n21 = 0;
        k.n22 = 2 / u;
        k.n23 = 0;
        k.n24 = -((e + f) / u);
        k.n31 = 0;
        k.n32 = 0;
        k.n33 = -2 / p;
        k.n34 = -((m + h) / p);
        k.n41 = 0;
        k.n42 = 0;
        k.n43 = 0;
        k.n44 = 1;
        return k
    };
    THREE.Matrix4.__v1 = new THREE.Vector3;
    THREE.Matrix4.__v2 = new THREE.Vector3;
    THREE.Matrix4.__v3 = new THREE.Vector3;
    THREE.Matrix4.__m1 = new THREE.Matrix4;
    THREE.Matrix4.__m2 = new THREE.Matrix4;
    THREE.Object3D = function () {
        this.id = THREE.Object3DCount++;
        this.name = "";
        this.parent = void 0;
        this.children = [];
        this.up = new THREE.Vector3(0, 1, 0);
        this.position = new THREE.Vector3;
        this.rotation = new THREE.Vector3;
        this.eulerOrder = "XYZ";
        this.scale = new THREE.Vector3(1, 1, 1);
        this.flipSided = this.doubleSided = this.dynamic = !1;
        this.renderDepth = null;
        this.rotationAutoUpdate = !0;
        this.matrix = new THREE.Matrix4;
        this.matrixWorld = new THREE.Matrix4;
        this.matrixRotationWorld = new THREE.Matrix4;
        this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
        this.quaternion = new THREE.Quaternion;
        this.useQuaternion = !1;
        this.boundRadius = 0;
        this.boundRadiusScale = 1;
        this.visible = !0;
        this.receiveShadow = this.castShadow = !1;
        this.frustumCulled = !0;
        this._vector = new THREE.Vector3
    };
    THREE.Object3D.prototype = {
        constructor: THREE.Object3D, translate: function (b, c) {
            this.matrix.rotateAxis(c);
            this.position.addSelf(c.multiplyScalar(b))
        }, translateX: function (b) {
            this.translate(b, this._vector.set(1, 0, 0))
        }, translateY: function (b) {
            this.translate(b, this._vector.set(0, 1, 0))
        }, translateZ: function (b) {
            this.translate(b, this._vector.set(0, 0, 1))
        }, lookAt: function (b) {
            this.matrix.lookAt(b, this.position, this.up);
            this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
        }, addChild: function (b) {
            if (this.children.indexOf(b) === -1) {
                b.parent !== void 0 && b.parent.removeChild(b);
                b.parent = this;
                this.children.push(b);
                for (var c = this; c.parent !== void 0;)c = c.parent;
                c !== void 0 && c instanceof THREE.Scene && c.addChildRecurse(b)
            }
        }, removeChild: function (b) {
            var c = this.children.indexOf(b);
            if (c !== -1)b.parent = void 0, this.children.splice(c, 1)
        }, getChildByName: function (b, c) {
            var e, f, h;
            e = 0;
            for (f = this.children.length; e < f; e++) {
                h = this.children[e];
                if (h.name === b)return h;
                if (c && (h = h.getChildByName(b, c), h !== void 0))return h
            }
        }, updateMatrix: function () {
            this.matrix.setPosition(this.position);
            this.useQuaternion ? this.matrix.setRotationFromQuaternion(this.quaternion) : this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder);
            if (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1)this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z));
            this.matrixWorldNeedsUpdate = !0
        }, update: function (b, c, e) {
            this.matrixAutoUpdate && this.updateMatrix();
            if (this.matrixWorldNeedsUpdate || c)b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix),
                this.matrixRotationWorld.extractRotation(this.matrixWorld, this.scale), this.matrixWorldNeedsUpdate = !1, c = !0;
            for (var b = 0, f = this.children.length; b < f; b++)this.children[b].update(this.matrixWorld, c, e)
        }
    };
    THREE.Object3DCount = 0;
    THREE.Projector = function () {
        function b() {
            var b = u[n] = u[n] || new THREE.RenderableVertex;
            n++;
            return b
        }

        function c(b, e) {
            return e.z - b.z
        }

        function e(b, e) {
            var c = 0, f = 1, k = b.z + b.w, h = e.z + e.w, m = -b.z + b.w, n = -e.z + e.w;
            return k >= 0 && h >= 0 && m >= 0 && n >= 0 ? !0 : k < 0 && h < 0 || m < 0 && n < 0 ? !1 : (k < 0 ? c = Math.max(c, k / (k - h)) : h < 0 && (f = Math.min(f, k / (k - h))), m < 0 ? c = Math.max(c, m / (m - n)) : n < 0 && (f = Math.min(f, m / (m - n))), f < c ? !1 : (b.lerpSelf(e, c), e.lerpSelf(b, 1 - f), !0))
        }

        var f, h, m = [], k, n, u = [], p, v, t = [], x, w = [], z, y, B = [], D, G, H = [], E = [], N = [], F = new THREE.Vector4, I = new THREE.Vector4,
            C = new THREE.Matrix4, K = new THREE.Matrix4, U = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4], L = new THREE.Vector4, O = new THREE.Vector4;
        this.projectVector = function (b, e) {
            C.multiply(e.projectionMatrix, e.matrixWorldInverse);
            C.multiplyVector3(b);
            return b
        };
        this.unprojectVector = function (b, e) {
            C.multiply(e.matrixWorld, THREE.Matrix4.makeInvert(e.projectionMatrix));
            C.multiplyVector3(b);
            return b
        };
        this.projectObjects = function (b, e, k) {
            var n, u;
            h = E.length = 0;
            n = b.objects;
            b = 0;
            for (e = n.length; b < e; b++) {
                u = n[b];
                var w;
                if (!(w = !u.visible))if (w = u instanceof THREE.Mesh)if (w = u.frustumCulled) {
                    a:{
                        w = void 0;
                        for (var t = u.matrixWorld, p = -u.geometry.boundingSphere.radius * Math.max(u.scale.x, Math.max(u.scale.y, u.scale.z)), v = 0; v < 6; v++)if (w = U[v].x * t.n14 + U[v].y * t.n24 + U[v].z * t.n34 + U[v].w, w <= p) {
                            w = !1;
                            break a
                        }
                        w = !0
                    }
                    w = !w
                }
                if (!w)w = m[h] = m[h] || new THREE.RenderableObject, h++, f = w, F.copy(u.position), C.multiplyVector3(F), f.object = u, f.z = F.z, E.push(f)
            }
            k && E.sort(c);
            return E
        };
        this.projectScene =
            function (f, h, m) {
                var E = h.near, F = h.far, R, ia, aa, ma, fa, ga, da, $, ca, X, ja, ea, qa, V, pa, va, ra;
                G = y = x = v = N.length = 0;
                h.matrixAutoUpdate && h.update(void 0, !0);
                f.update(void 0, !1, h);
                C.multiply(h.projectionMatrix, h.matrixWorldInverse);
                U[0].set(C.n41 - C.n11, C.n42 - C.n12, C.n43 - C.n13, C.n44 - C.n14);
                U[1].set(C.n41 + C.n11, C.n42 + C.n12, C.n43 + C.n13, C.n44 + C.n14);
                U[2].set(C.n41 + C.n21, C.n42 + C.n22, C.n43 + C.n23, C.n44 + C.n24);
                U[3].set(C.n41 - C.n21, C.n42 - C.n22, C.n43 - C.n23, C.n44 - C.n24);
                U[4].set(C.n41 - C.n31, C.n42 - C.n32, C.n43 - C.n33, C.n44 - C.n34);
                U[5].set(C.n41 + C.n31, C.n42 + C.n32, C.n43 + C.n33, C.n44 + C.n34);
                for (R = 0; R < 6; R++)ca = U[R], ca.divideScalar(Math.sqrt(ca.x * ca.x + ca.y * ca.y + ca.z * ca.z));
                ca = this.projectObjects(f, h, !0);
                f = 0;
                for (R = ca.length; f < R; f++)if (X = ca[f].object, X.visible)if (ja = X.matrixWorld, ea = X.matrixRotationWorld, qa = X.materials, V = X.overdraw, n = 0, X instanceof THREE.Mesh) {
                    pa = X.geometry;
                    ma = pa.vertices;
                    va = pa.faces;
                    pa = pa.faceVertexUvs;
                    ia = 0;
                    for (aa = ma.length; ia < aa; ia++)k = b(), k.positionWorld.copy(ma[ia].position), ja.multiplyVector3(k.positionWorld),
                        k.positionScreen.copy(k.positionWorld), C.multiplyVector4(k.positionScreen), k.positionScreen.x /= k.positionScreen.w, k.positionScreen.y /= k.positionScreen.w, k.visible = k.positionScreen.z > E && k.positionScreen.z < F;
                    ma = 0;
                    for (ia = va.length; ma < ia; ma++) {
                        aa = va[ma];
                        if (aa instanceof THREE.Face3)if (fa = u[aa.a], ga = u[aa.b], da = u[aa.c], fa.visible && ga.visible && da.visible && (X.doubleSided || X.flipSided != (da.positionScreen.x - fa.positionScreen.x) * (ga.positionScreen.y - fa.positionScreen.y) - (da.positionScreen.y - fa.positionScreen.y) *
                            (ga.positionScreen.x - fa.positionScreen.x) < 0))$ = t[v] = t[v] || new THREE.RenderableFace3, v++, p = $, p.v1.copy(fa), p.v2.copy(ga), p.v3.copy(da); else continue; else if (aa instanceof THREE.Face4)if (fa = u[aa.a], ga = u[aa.b], da = u[aa.c], $ = u[aa.d], fa.visible && ga.visible && da.visible && $.visible && (X.doubleSided || X.flipSided != (($.positionScreen.x - fa.positionScreen.x) * (ga.positionScreen.y - fa.positionScreen.y) - ($.positionScreen.y - fa.positionScreen.y) * (ga.positionScreen.x - fa.positionScreen.x) < 0 || (ga.positionScreen.x - da.positionScreen.x) *
                            ($.positionScreen.y - da.positionScreen.y) - (ga.positionScreen.y - da.positionScreen.y) * ($.positionScreen.x - da.positionScreen.x) < 0)))ra = w[x] = w[x] || new THREE.RenderableFace4, x++, p = ra, p.v1.copy(fa), p.v2.copy(ga), p.v3.copy(da), p.v4.copy($); else continue;
                        p.normalWorld.copy(aa.normal);
                        ea.multiplyVector3(p.normalWorld);
                        p.centroidWorld.copy(aa.centroid);
                        ja.multiplyVector3(p.centroidWorld);
                        p.centroidScreen.copy(p.centroidWorld);
                        C.multiplyVector3(p.centroidScreen);
                        da = aa.vertexNormals;
                        fa = 0;
                        for (ga = da.length; fa < ga; fa++)$ =
                            p.vertexNormalsWorld[fa], $.copy(da[fa]), ea.multiplyVector3($);
                        fa = 0;
                        for (ga = pa.length; fa < ga; fa++)if (ra = pa[fa][ma]) {
                            da = 0;
                            for ($ = ra.length; da < $; da++)p.uvs[fa][da] = ra[da]
                        }
                        p.meshMaterials = qa;
                        p.faceMaterials = aa.materials;
                        p.overdraw = V;
                        p.z = p.centroidScreen.z;
                        N.push(p)
                    }
                } else if (X instanceof THREE.Line) {
                    K.multiply(C, ja);
                    ma = X.geometry.vertices;
                    fa = b();
                    fa.positionScreen.copy(ma[0].position);
                    K.multiplyVector4(fa.positionScreen);
                    ia = 1;
                    for (aa = ma.length; ia < aa; ia++)if (fa = b(), fa.positionScreen.copy(ma[ia].position), K.multiplyVector4(fa.positionScreen),
                            ga = u[n - 2], L.copy(fa.positionScreen), O.copy(ga.positionScreen), e(L, O))L.multiplyScalar(1 / L.w), O.multiplyScalar(1 / O.w), ja = B[y] = B[y] || new THREE.RenderableLine, y++, z = ja, z.v1.positionScreen.copy(L), z.v2.positionScreen.copy(O), z.z = Math.max(L.z, O.z), z.materials = X.materials, N.push(z)
                } else if (X instanceof THREE.Particle && (I.set(X.matrixWorld.n14, X.matrixWorld.n24, X.matrixWorld.n34, 1), C.multiplyVector4(I), I.z /= I.w, I.z > 0 && I.z < 1))ja = H[G] = H[G] || new THREE.RenderableParticle, G++, D = ja, D.x = I.x / I.w, D.y = I.y / I.w, D.z =
                    I.z, D.rotation = X.rotation.z, D.scale.x = X.scale.x * Math.abs(D.x - (I.x + h.projectionMatrix.n11) / (I.w + h.projectionMatrix.n14)), D.scale.y = X.scale.y * Math.abs(D.y - (I.y + h.projectionMatrix.n22) / (I.w + h.projectionMatrix.n24)), D.materials = X.materials, N.push(D);
                m && N.sort(c);
                return N
            }
    };
    THREE.Quaternion = function (b, c, e, f) {
        this.set(b || 0, c || 0, e || 0, f !== void 0 ? f : 1)
    };
    THREE.Quaternion.prototype = {
        constructor: THREE.Quaternion, set: function (b, c, e, f) {
            this.x = b;
            this.y = c;
            this.z = e;
            this.w = f;
            return this
        }, copy: function (b) {
            this.x = b.x;
            this.y = b.y;
            this.z = b.z;
            this.w = b.w;
            return this
        }, setFromEuler: function (b) {
            var c = 0.5 * Math.PI / 360, e = b.x * c, f = b.y * c, h = b.z * c, b = Math.cos(f), f = Math.sin(f), c = Math.cos(-h), h = Math.sin(-h), m = Math.cos(e), e = Math.sin(e), k = b * c, n = f * h;
            this.w = k * m - n * e;
            this.x = k * e + n * m;
            this.y = f * c * m + b * h * e;
            this.z = b * h * m - f * c * e;
            return this
        }, setFromAxisAngle: function (b, c) {
            var e = c / 2, f = Math.sin(e);
            this.x = b.x * f;
            this.y = b.y * f;
            this.z = b.z * f;
            this.w = Math.cos(e);
            return this
        }, setFromRotationMatrix: function (b) {
            var c = Math.pow(b.determinant(), 1 / 3);
            this.w = Math.sqrt(Math.max(0, c + b.n11 + b.n22 + b.n33)) / 2;
            this.x = Math.sqrt(Math.max(0, c + b.n11 - b.n22 - b.n33)) / 2;
            this.y = Math.sqrt(Math.max(0, c - b.n11 + b.n22 - b.n33)) / 2;
            this.z = Math.sqrt(Math.max(0, c - b.n11 - b.n22 + b.n33)) / 2;
            this.x = b.n32 - b.n23 < 0 ? -Math.abs(this.x) : Math.abs(this.x);
            this.y = b.n13 - b.n31 < 0 ? -Math.abs(this.y) : Math.abs(this.y);
            this.z = b.n21 - b.n12 < 0 ? -Math.abs(this.z) : Math.abs(this.z);
            this.normalize();
            return this
        }, calculateW: function () {
            this.w = -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z));
            return this
        }, inverse: function () {
            this.x *= -1;
            this.y *= -1;
            this.z *= -1;
            return this
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }, normalize: function () {
            var b = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
            b == 0 ? this.w = this.z = this.y = this.x = 0 : (b = 1 / b, this.x *= b, this.y *= b, this.z *= b, this.w *= b);
            return this
        }, multiplySelf: function (b) {
            var c =
                this.x, e = this.y, f = this.z, h = this.w, m = b.x, k = b.y, n = b.z, b = b.w;
            this.x = c * b + h * m + e * n - f * k;
            this.y = e * b + h * k + f * m - c * n;
            this.z = f * b + h * n + c * k - e * m;
            this.w = h * b - c * m - e * k - f * n;
            return this
        }, multiply: function (b, c) {
            this.x = b.x * c.w + b.y * c.z - b.z * c.y + b.w * c.x;
            this.y = -b.x * c.z + b.y * c.w + b.z * c.x + b.w * c.y;
            this.z = b.x * c.y - b.y * c.x + b.z * c.w + b.w * c.z;
            this.w = -b.x * c.x - b.y * c.y - b.z * c.z + b.w * c.w;
            return this
        }, multiplyVector3: function (b, c) {
            c || (c = b);
            var e = b.x, f = b.y, h = b.z, m = this.x, k = this.y, n = this.z, u = this.w, p = u * e + k * h - n * f, v = u * f + n * e - m * h, t = u * h + m * f - k * e, e = -m *
                e - k * f - n * h;
            c.x = p * u + e * -m + v * -n - t * -k;
            c.y = v * u + e * -k + t * -m - p * -n;
            c.z = t * u + e * -n + p * -k - v * -m;
            return c
        }
    };
    THREE.Quaternion.slerp = function (b, c, e, f) {
        var h = b.w * c.w + b.x * c.x + b.y * c.y + b.z * c.z;
        if (Math.abs(h) >= 1)return e.w = b.w, e.x = b.x, e.y = b.y, e.z = b.z, e;
        var m = Math.acos(h), k = Math.sqrt(1 - h * h);
        if (Math.abs(k) < 0.001)return e.w = 0.5 * (b.w + c.w), e.x = 0.5 * (b.x + c.x), e.y = 0.5 * (b.y + c.y), e.z = 0.5 * (b.z + c.z), e;
        h = Math.sin((1 - f) * m) / k;
        f = Math.sin(f * m) / k;
        e.w = b.w * h + c.w * f;
        e.x = b.x * h + c.x * f;
        e.y = b.y * h + c.y * f;
        e.z = b.z * h + c.z * f;
        return e
    };
    THREE.Vertex = function (b) {
        this.position = b || new THREE.Vector3
    };
    THREE.Face3 = function (b, c, e, f, h, m) {
        this.a = b;
        this.b = c;
        this.c = e;
        this.normal = f instanceof THREE.Vector3 ? f : new THREE.Vector3;
        this.vertexNormals = f instanceof Array ? f : [];
        this.color = h instanceof THREE.Color ? h : new THREE.Color;
        this.vertexColors = h instanceof Array ? h : [];
        this.vertexTangents = [];
        this.materials = m instanceof Array ? m : [m];
        this.centroid = new THREE.Vector3
    };
    THREE.Face4 = function (b, c, e, f, h, m, k) {
        this.a = b;
        this.b = c;
        this.c = e;
        this.d = f;
        this.normal = h instanceof THREE.Vector3 ? h : new THREE.Vector3;
        this.vertexNormals = h instanceof Array ? h : [];
        this.color = m instanceof THREE.Color ? m : new THREE.Color;
        this.vertexColors = m instanceof Array ? m : [];
        this.vertexTangents = [];
        this.materials = k instanceof Array ? k : [k];
        this.centroid = new THREE.Vector3
    };
    THREE.UV = function (b, c) {
        this.u = b || 0;
        this.v = c || 0
    };
    THREE.UV.prototype = {
        constructor: THREE.UV, set: function (b, c) {
            this.u = b;
            this.v = c;
            return this
        }, copy: function (b) {
            this.u = b.u;
            this.v = b.v;
            return this
        }, clone: function () {
            return new THREE.UV(this.u, this.v)
        }
    };
    THREE.Geometry = function () {
        this.id = THREE.GeometryCount++;
        this.vertices = [];
        this.colors = [];
        this.faces = [];
        this.edges = [];
        this.faceUvs = [[]];
        this.faceVertexUvs = [[]];
        this.morphTargets = [];
        this.morphColors = [];
        this.skinWeights = [];
        this.skinIndices = [];
        this.boundingSphere = this.boundingBox = null;
        this.dynamic = this.hasTangents = !1
    };
    THREE.Geometry.prototype = {
        constructor: THREE.Geometry, computeCentroids: function () {
            var b, c, e;
            b = 0;
            for (c = this.faces.length; b < c; b++)e = this.faces[b], e.centroid.set(0, 0, 0), e instanceof THREE.Face3 ? (e.centroid.addSelf(this.vertices[e.a].position), e.centroid.addSelf(this.vertices[e.b].position), e.centroid.addSelf(this.vertices[e.c].position), e.centroid.divideScalar(3)) : e instanceof THREE.Face4 && (e.centroid.addSelf(this.vertices[e.a].position), e.centroid.addSelf(this.vertices[e.b].position), e.centroid.addSelf(this.vertices[e.c].position),
                e.centroid.addSelf(this.vertices[e.d].position), e.centroid.divideScalar(4))
        }, computeFaceNormals: function (b) {
            var c, e, f, h, m, k, n = new THREE.Vector3, u = new THREE.Vector3;
            f = 0;
            for (h = this.faces.length; f < h; f++) {
                m = this.faces[f];
                if (b && m.vertexNormals.length) {
                    n.set(0, 0, 0);
                    c = 0;
                    for (e = m.vertexNormals.length; c < e; c++)n.addSelf(m.vertexNormals[c]);
                    n.divideScalar(3)
                } else c = this.vertices[m.a], e = this.vertices[m.b], k = this.vertices[m.c], n.sub(k.position, e.position), u.sub(c.position, e.position), n.crossSelf(u);
                n.isZero() ||
                n.normalize();
                m.normal.copy(n)
            }
        }, computeVertexNormals: function () {
            var b, c, e, f;
            if (this.__tmpVertices == void 0) {
                f = this.__tmpVertices = Array(this.vertices.length);
                b = 0;
                for (c = this.vertices.length; b < c; b++)f[b] = new THREE.Vector3;
                b = 0;
                for (c = this.faces.length; b < c; b++)if (e = this.faces[b], e instanceof THREE.Face3)e.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]; else if (e instanceof THREE.Face4)e.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]
            } else {
                f =
                    this.__tmpVertices;
                b = 0;
                for (c = this.vertices.length; b < c; b++)f[b].set(0, 0, 0)
            }
            b = 0;
            for (c = this.faces.length; b < c; b++)e = this.faces[b], e instanceof THREE.Face3 ? (f[e.a].addSelf(e.normal), f[e.b].addSelf(e.normal), f[e.c].addSelf(e.normal)) : e instanceof THREE.Face4 && (f[e.a].addSelf(e.normal), f[e.b].addSelf(e.normal), f[e.c].addSelf(e.normal), f[e.d].addSelf(e.normal));
            b = 0;
            for (c = this.vertices.length; b < c; b++)f[b].normalize();
            b = 0;
            for (c = this.faces.length; b < c; b++)e = this.faces[b], e instanceof THREE.Face3 ? (e.vertexNormals[0].copy(f[e.a]),
                e.vertexNormals[1].copy(f[e.b]), e.vertexNormals[2].copy(f[e.c])) : e instanceof THREE.Face4 && (e.vertexNormals[0].copy(f[e.a]), e.vertexNormals[1].copy(f[e.b]), e.vertexNormals[2].copy(f[e.c]), e.vertexNormals[3].copy(f[e.d]))
        }, computeTangents: function () {
            function b(b, e, c, f, h, m, o) {
                n = b.vertices[e].position;
                u = b.vertices[c].position;
                p = b.vertices[f].position;
                v = k[h];
                t = k[m];
                x = k[o];
                w = u.x - n.x;
                z = p.x - n.x;
                y = u.y - n.y;
                B = p.y - n.y;
                D = u.z - n.z;
                G = p.z - n.z;
                H = t.u - v.u;
                E = x.u - v.u;
                N = t.v - v.v;
                F = x.v - v.v;
                I = 1 / (H * F - E * N);
                L.set((F * w - N * z) *
                I, (F * y - N * B) * I, (F * D - N * G) * I);
                O.set((H * z - E * w) * I, (H * B - E * y) * I, (H * G - E * D) * I);
                K[e].addSelf(L);
                K[c].addSelf(L);
                K[f].addSelf(L);
                U[e].addSelf(O);
                U[c].addSelf(O);
                U[f].addSelf(O)
            }

            var c, e, f, h, m, k, n, u, p, v, t, x, w, z, y, B, D, G, H, E, N, F, I, C, K = [], U = [], L = new THREE.Vector3, O = new THREE.Vector3, S = new THREE.Vector3, P = new THREE.Vector3, o = new THREE.Vector3;
            c = 0;
            for (e = this.vertices.length; c < e; c++)K[c] = new THREE.Vector3, U[c] = new THREE.Vector3;
            c = 0;
            for (e = this.faces.length; c < e; c++)m = this.faces[c], k = this.faceVertexUvs[0][c], m instanceof
            THREE.Face3 ? b(this, m.a, m.b, m.c, 0, 1, 2) : m instanceof THREE.Face4 && (b(this, m.a, m.b, m.c, 0, 1, 2), b(this, m.a, m.b, m.d, 0, 1, 3));
            var W = ["a", "b", "c", "d"];
            c = 0;
            for (e = this.faces.length; c < e; c++) {
                m = this.faces[c];
                for (f = 0; f < m.vertexNormals.length; f++)o.copy(m.vertexNormals[f]), h = m[W[f]], C = K[h], S.copy(C), S.subSelf(o.multiplyScalar(o.dot(C))).normalize(), P.cross(m.vertexNormals[f], C), h = P.dot(U[h]), h = h < 0 ? -1 : 1, m.vertexTangents[f] = new THREE.Vector4(S.x, S.y, S.z, h)
            }
            this.hasTangents = !0
        }, computeBoundingBox: function () {
            var b;
            if (this.vertices.length > 0) {
                this.boundingBox = {
                    x: [this.vertices[0].position.x, this.vertices[0].position.x],
                    y: [this.vertices[0].position.y, this.vertices[0].position.y],
                    z: [this.vertices[0].position.z, this.vertices[0].position.z]
                };
                for (var c = 1, e = this.vertices.length; c < e; c++) {
                    b = this.vertices[c];
                    if (b.position.x < this.boundingBox.x[0])this.boundingBox.x[0] = b.position.x; else if (b.position.x > this.boundingBox.x[1])this.boundingBox.x[1] = b.position.x;
                    if (b.position.y < this.boundingBox.y[0])this.boundingBox.y[0] = b.position.y;
                    else if (b.position.y > this.boundingBox.y[1])this.boundingBox.y[1] = b.position.y;
                    if (b.position.z < this.boundingBox.z[0])this.boundingBox.z[0] = b.position.z; else if (b.position.z > this.boundingBox.z[1])this.boundingBox.z[1] = b.position.z
                }
            }
        }, computeBoundingSphere: function () {
            for (var b = 0, c = 0, e = this.vertices.length; c < e; c++)b = Math.max(b, this.vertices[c].position.length());
            this.boundingSphere = {radius: b}
        }, computeEdgeFaces: function () {
            function b(b, e) {
                return Math.min(b, e) + "_" + Math.max(b, e)
            }

            function c(b, e, c) {
                b[e] === void 0 ? (b[e] = {
                    set: {},
                    array: []
                }, b[e].set[c] = 1, b[e].array.push(c)) : b[e].set[c] === void 0 && (b[e].set[c] = 1, b[e].array.push(c))
            }

            var e, f, h, m, k, n = {};
            e = 0;
            for (f = this.faces.length; e < f; e++)k = this.faces[e], k instanceof THREE.Face3 ? (h = b(k.a, k.b), c(n, h, e), h = b(k.b, k.c), c(n, h, e), h = b(k.a, k.c), c(n, h, e)) : k instanceof THREE.Face4 && (h = b(k.b, k.d), c(n, h, e), h = b(k.a, k.b), c(n, h, e), h = b(k.a, k.d), c(n, h, e), h = b(k.b, k.c), c(n, h, e), h = b(k.c, k.d), c(n, h, e));
            e = 0;
            for (f = this.edges.length; e < f; e++) {
                k = this.edges[e];
                h = k.vertexIndices[0];
                m = k.vertexIndices[1];
                k.faceIndices = n[b(h, m)].array;
                for (h = 0; h < k.faceIndices.length; h++)m = k.faceIndices[h], k.faces.push(this.faces[m])
            }
        }
    };
    THREE.GeometryCount = 0;
    THREE.Spline = function (b) {
        function c(b, e, c, f, k, h, m) {
            b = (c - b) * 0.5;
            f = (f - e) * 0.5;
            return (2 * (e - c) + b + f) * m + (-3 * (e - c) - 2 * b - f) * h + b * k + e
        }

        this.points = b;
        var e = [], f = {x: 0, y: 0, z: 0}, h, m, k, n, u, p, v, t, x;
        this.initFromArray = function (b) {
            this.points = [];
            for (var e = 0; e < b.length; e++)this.points[e] = {x: b[e][0], y: b[e][1], z: b[e][2]}
        };
        this.getPoint = function (b) {
            h = (this.points.length - 1) * b;
            m = Math.floor(h);
            k = h - m;
            e[0] = m == 0 ? m : m - 1;
            e[1] = m;
            e[2] = m > this.points.length - 2 ? m : m + 1;
            e[3] = m > this.points.length - 3 ? m : m + 2;
            p = this.points[e[0]];
            v = this.points[e[1]];
            t = this.points[e[2]];
            x = this.points[e[3]];
            n = k * k;
            u = k * n;
            f.x = c(p.x, v.x, t.x, x.x, k, n, u);
            f.y = c(p.y, v.y, t.y, x.y, k, n, u);
            f.z = c(p.z, v.z, t.z, x.z, k, n, u);
            return f
        };
        this.getControlPointsArray = function () {
            var b, e, c = this.points.length, f = [];
            for (b = 0; b < c; b++)e = this.points[b], f[b] = [e.x, e.y, e.z];
            return f
        };
        this.getLength = function (b) {
            var e, c, f = e = e = 0, k = new THREE.Vector3, h = new THREE.Vector3, m = [], n = 0;
            m[0] = 0;
            b || (b = 100);
            c = this.points.length * b;
            k.copy(this.points[0]);
            for (b = 1; b < c; b++)e = b / c, position = this.getPoint(e), h.copy(position),
                n += h.distanceTo(k), k.copy(position), e *= this.points.length - 1, e = Math.floor(e), e != f && (m[e] = n, f = e);
            m[m.length] = n;
            return {chunks: m, total: n}
        };
        this.reparametrizeByArcLength = function (b) {
            var e, c, f, k, h, m, n = [], u = new THREE.Vector3, t = this.getLength();
            n.push(u.copy(this.points[0]).clone());
            for (e = 1; e < this.points.length; e++) {
                c = t.chunks[e] - t.chunks[e - 1];
                m = Math.ceil(b * c / t.total);
                k = (e - 1) / (this.points.length - 1);
                h = e / (this.points.length - 1);
                for (c = 1; c < m - 1; c++)f = k + c * (1 / m) * (h - k), position = this.getPoint(f), n.push(u.copy(position).clone());
                n.push(u.copy(this.points[e]).clone())
            }
            this.points = n
        }
    };
    THREE.Edge = function (b, c, e, f) {
        this.vertices = [b, c];
        this.vertexIndices = [e, f];
        this.faces = [];
        this.faceIndices = []
    };
    THREE.Camera = function (b, c, e, f, h) {
        THREE.Object3D.call(this);
        this.fov = b || 50;
        this.aspect = c || 1;
        this.near = e || 0.1;
        this.far = f || 2E3;
        this.target = h || new THREE.Object3D;
        this.useTarget = !0;
        this.matrixWorldInverse = new THREE.Matrix4;
        this.projectionMatrix = null;
        this.updateProjectionMatrix()
    };
    THREE.Camera.prototype = new THREE.Object3D;
    THREE.Camera.prototype.constructor = THREE.Camera;
    THREE.Camera.prototype.supr = THREE.Object3D.prototype;
    THREE.Camera.prototype.translate = function (b, c) {
        this.matrix.rotateAxis(c);
        c.multiplyScalar(b);
        this.position.addSelf(c);
        this.target.position.addSelf(c)
    };
    THREE.Camera.prototype.updateProjectionMatrix = function () {
        if (this.fullWidth) {
            var b = this.fullWidth / this.fullHeight, c = Math.tan(this.fov * Math.PI / 360) * this.near, e = -c, f = b * e, b = Math.abs(b * c - f), e = Math.abs(c - e);
            this.projectionMatrix = THREE.Matrix4.makeFrustum(f + this.x * b / this.fullWidth, f + (this.x + this.width) * b / this.fullWidth, c - (this.y + this.height) * e / this.fullHeight, c - this.y * e / this.fullHeight, this.near, this.far)
        } else this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this.aspect, this.near, this.far)
    };
    THREE.Camera.prototype.setViewOffset = function (b, c, e, f, h, m) {
        this.fullWidth = b;
        this.fullHeight = c;
        this.x = e;
        this.y = f;
        this.width = h;
        this.height = m;
        this.updateProjectionMatrix()
    };
    THREE.Camera.prototype.update = function (b, c, e) {
        if (this.useTarget)this.matrix.lookAt(this.position, this.target.position, this.up), this.matrix.setPosition(this.position), b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse), c = !0; else if (this.matrixAutoUpdate && this.updateMatrix(), c || this.matrixWorldNeedsUpdate)b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0, THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse);
        for (b = 0; b < this.children.length; b++)this.children[b].update(this.matrixWorld, c, e)
    };
    THREE.OrthoCamera = function (b, c, e, f, h, m, k) {
        THREE.Camera.call(this, 45, 1, h, m, k);
        this.left = b;
        this.right = c;
        this.top = e;
        this.bottom = f;
        this.updateProjectionMatrix()
    };
    THREE.OrthoCamera.prototype = new THREE.Camera;
    THREE.OrthoCamera.prototype.constructor = THREE.OrthoCamera;
    THREE.OrthoCamera.prototype.updateProjectionMatrix = function () {
        this.projectionMatrix = THREE.Matrix4.makeOrtho(this.left, this.right, this.top, this.bottom, this.near, this.far)
    };
    THREE.Light = function (b) {
        THREE.Object3D.call(this);
        this.color = new THREE.Color(b)
    };
    THREE.Light.prototype = new THREE.Object3D;
    THREE.Light.prototype.constructor = THREE.Light;
    THREE.Light.prototype.supr = THREE.Object3D.prototype;
    THREE.AmbientLight = function (b) {
        THREE.Light.call(this, b)
    };
    THREE.AmbientLight.prototype = new THREE.Light;
    THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
    THREE.DirectionalLight = function (b, c, e, f) {
        THREE.Light.call(this, b);
        this.position = new THREE.Vector3(0, 1, 0);
        this.intensity = c || 1;
        this.distance = e || 0;
        this.castShadow = f !== void 0 ? f : !1
    };
    THREE.DirectionalLight.prototype = new THREE.Light;
    THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
    THREE.PointLight = function (b, c, e) {
        THREE.Light.call(this, b);
        this.position = new THREE.Vector3;
        this.intensity = c || 1;
        this.distance = e || 0
    };
    THREE.PointLight.prototype = new THREE.Light;
    THREE.PointLight.prototype.constructor = THREE.PointLight;
    THREE.SpotLight = function (b, c, e, f) {
        THREE.Light.call(this, b);
        this.position = new THREE.Vector3(0, 1, 0);
        this.target = new THREE.Object3D;
        this.intensity = c || 1;
        this.distance = e || 0;
        this.castShadow = f !== void 0 ? f : !1
    };
    THREE.SpotLight.prototype = new THREE.Light;
    THREE.SpotLight.prototype.constructor = THREE.SpotLight;
    THREE.Material = function (b) {
        this.id = THREE.MaterialCount++;
        b = b || {};
        this.opacity = b.opacity !== void 0 ? b.opacity : 1;
        this.transparent = b.transparent !== void 0 ? b.transparent : !1;
        this.blending = b.blending !== void 0 ? b.blending : THREE.NormalBlending;
        this.depthTest = b.depthTest !== void 0 ? b.depthTest : !0;
        this.polygonOffset = b.polygonOffset !== void 0 ? b.polygonOffset : !1;
        this.polygonOffsetFactor = b.polygonOffsetFactor !== void 0 ? b.polygonOffsetFactor : 0;
        this.polygonOffsetUnits = b.polygonOffsetUnits !== void 0 ? b.polygonOffsetUnits :
            0;
        this.alphaTest = b.alphaTest !== void 0 ? b.alphaTest : 0
    };
    THREE.MaterialCount = 0;
    THREE.NoShading = 0;
    THREE.FlatShading = 1;
    THREE.SmoothShading = 2;
    THREE.NoColors = 0;
    THREE.FaceColors = 1;
    THREE.VertexColors = 2;
    THREE.NormalBlending = 0;
    THREE.AdditiveBlending = 1;
    THREE.SubtractiveBlending = 2;
    THREE.MultiplyBlending = 3;
    THREE.AdditiveAlphaBlending = 4;
    THREE.LineBasicMaterial = function (b) {
        THREE.Material.call(this, b);
        b = b || {};
        this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
        this.linewidth = b.linewidth !== void 0 ? b.linewidth : 1;
        this.linecap = b.linecap !== void 0 ? b.linecap : "round";
        this.linejoin = b.linejoin !== void 0 ? b.linejoin : "round";
        this.vertexColors = b.vertexColors ? b.vertexColors : !1
    };
    THREE.LineBasicMaterial.prototype = new THREE.Material;
    THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
    THREE.MeshBasicMaterial = function (b) {
        THREE.Material.call(this, b);
        b = b || {};
        this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
        this.map = b.map !== void 0 ? b.map : null;
        this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
        this.envMap = b.envMap !== void 0 ? b.envMap : null;
        this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
        this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
        this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
        this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
        this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
        this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
        this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
        this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
        this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
        this.skinning = b.skinning !== void 0 ? b.skinning : !1;
        this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
    };
    THREE.MeshBasicMaterial.prototype = new THREE.Material;
    THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
    THREE.MeshLambertMaterial = function (b) {
        THREE.Material.call(this, b);
        b = b || {};
        this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
        this.map = b.map !== void 0 ? b.map : null;
        this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
        this.envMap = b.envMap !== void 0 ? b.envMap : null;
        this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
        this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
        this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
        this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
        this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
        this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
        this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
        this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
        this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
        this.skinning = b.skinning !== void 0 ? b.skinning : !1;
        this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
    };
    THREE.MeshLambertMaterial.prototype = new THREE.Material;
    THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
    THREE.MeshPhongMaterial = function (b) {
        THREE.Material.call(this, b);
        b = b || {};
        this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
        this.ambient = b.ambient !== void 0 ? new THREE.Color(b.ambient) : new THREE.Color(328965);
        this.specular = b.specular !== void 0 ? new THREE.Color(b.specular) : new THREE.Color(1118481);
        this.shininess = b.shininess !== void 0 ? b.shininess : 30;
        this.map = b.map !== void 0 ? b.map : null;
        this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
        this.envMap = b.envMap !== void 0 ? b.envMap : null;
        this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
        this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
        this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
        this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
        this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
        this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
        this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
        this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
        this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
        this.skinning = b.skinning !== void 0 ? b.skinning : !1;
        this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
    };
    THREE.MeshPhongMaterial.prototype = new THREE.Material;
    THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
    THREE.MeshDepthMaterial = function (b) {
        THREE.Material.call(this, b);
        b = b || {};
        this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
        this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
        this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1
    };
    THREE.MeshDepthMaterial.prototype = new THREE.Material;
    THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
    THREE.MeshNormalMaterial = function (b) {
        THREE.Material.call(this, b);
        b = b || {};
        this.shading = b.shading ? b.shading : THREE.FlatShading;
        this.wireframe = b.wireframe ? b.wireframe : !1;
        this.wireframeLinewidth = b.wireframeLinewidth ? b.wireframeLinewidth : 1
    };
    THREE.MeshNormalMaterial.prototype = new THREE.Material;
    THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
    THREE.MeshFaceMaterial = function () {
    };
    THREE.MeshShaderMaterial = function (b) {
        THREE.Material.call(this, b);
        b = b || {};
        this.fragmentShader = b.fragmentShader !== void 0 ? b.fragmentShader : "void main() {}";
        this.vertexShader = b.vertexShader !== void 0 ? b.vertexShader : "void main() {}";
        this.uniforms = b.uniforms !== void 0 ? b.uniforms : {};
        this.attributes = b.attributes;
        this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
        this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
        this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
        this.fog =
            b.fog !== void 0 ? b.fog : !1;
        this.lights = b.lights !== void 0 ? b.lights : !1;
        this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
        this.skinning = b.skinning !== void 0 ? b.skinning : !1;
        this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
    };
    THREE.MeshShaderMaterial.prototype = new THREE.Material;
    THREE.MeshShaderMaterial.prototype.constructor = THREE.MeshShaderMaterial;
    THREE.ParticleBasicMaterial = function (b) {
        THREE.Material.call(this, b);
        b = b || {};
        this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
        this.map = b.map !== void 0 ? b.map : null;
        this.size = b.size !== void 0 ? b.size : 1;
        this.sizeAttenuation = b.sizeAttenuation !== void 0 ? b.sizeAttenuation : !0;
        this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1
    };
    THREE.ParticleBasicMaterial.prototype = new THREE.Material;
    THREE.ParticleBasicMaterial.prototype.constructor = THREE.ParticleBasicMaterial;
    THREE.ParticleCanvasMaterial = function (b) {
        THREE.Material.call(this, b);
        b = b || {};
        this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
        this.program = b.program !== void 0 ? b.program : function () {
        }
    };
    THREE.ParticleCanvasMaterial.prototype = new THREE.Material;
    THREE.ParticleCanvasMaterial.prototype.constructor = THREE.ParticleCanvasMaterial;
    THREE.ParticleDOMMaterial = function (b) {
        THREE.Material.call(this);
        this.domElement = b
    };
    THREE.Texture = function (b, c, e, f, h, m) {
        this.id = THREE.TextureCount++;
        this.image = b;
        this.mapping = c !== void 0 ? c : new THREE.UVMapping;
        this.wrapS = e !== void 0 ? e : THREE.ClampToEdgeWrapping;
        this.wrapT = f !== void 0 ? f : THREE.ClampToEdgeWrapping;
        this.magFilter = h !== void 0 ? h : THREE.LinearFilter;
        this.minFilter = m !== void 0 ? m : THREE.LinearMipMapLinearFilter;
        this.offset = new THREE.Vector2(0, 0);
        this.repeat = new THREE.Vector2(1, 1);
        this.needsUpdate = !1
    };
    THREE.Texture.prototype = {
        constructor: THREE.Texture, clone: function () {
            var b = new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
            b.offset.copy(this.offset);
            b.repeat.copy(this.repeat);
            return b
        }
    };
    THREE.TextureCount = 0;
    THREE.MultiplyOperation = 0;
    THREE.MixOperation = 1;
    THREE.CubeReflectionMapping = function () {
    };
    THREE.CubeRefractionMapping = function () {
    };
    THREE.LatitudeReflectionMapping = function () {
    };
    THREE.LatitudeRefractionMapping = function () {
    };
    THREE.SphericalReflectionMapping = function () {
    };
    THREE.SphericalRefractionMapping = function () {
    };
    THREE.UVMapping = function () {
    };
    THREE.RepeatWrapping = 0;
    THREE.ClampToEdgeWrapping = 1;
    THREE.MirroredRepeatWrapping = 2;
    THREE.NearestFilter = 3;
    THREE.NearestMipMapNearestFilter = 4;
    THREE.NearestMipMapLinearFilter = 5;
    THREE.LinearFilter = 6;
    THREE.LinearMipMapNearestFilter = 7;
    THREE.LinearMipMapLinearFilter = 8;
    THREE.ByteType = 9;
    THREE.UnsignedByteType = 10;
    THREE.ShortType = 11;
    THREE.UnsignedShortType = 12;
    THREE.IntType = 13;
    THREE.UnsignedIntType = 14;
    THREE.FloatType = 15;
    THREE.AlphaFormat = 16;
    THREE.RGBFormat = 17;
    THREE.RGBAFormat = 18;
    THREE.LuminanceFormat = 19;
    THREE.LuminanceAlphaFormat = 20;
    THREE.DataTexture = function (b, c, e, f, h, m, k, n, u) {
        THREE.Texture.call(this, null, h, m, k, n, u);
        this.image = {data: b, width: c, height: e};
        this.format = f !== void 0 ? f : THREE.RGBAFormat
    };
    THREE.DataTexture.prototype = new THREE.Texture;
    THREE.DataTexture.prototype.constructor = THREE.DataTexture;
    THREE.DataTexture.prototype.clone = function () {
        var b = new THREE.DataTexture(this.data.slice(0), this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
        b.offset.copy(this.offset);
        b.repeat.copy(this.repeat);
        return b
    };
    THREE.Particle = function (b) {
        THREE.Object3D.call(this);
        this.materials = b instanceof Array ? b : [b]
    };
    THREE.Particle.prototype = new THREE.Object3D;
    THREE.Particle.prototype.constructor = THREE.Particle;
    THREE.ParticleSystem = function (b, c) {
        THREE.Object3D.call(this);
        this.geometry = b;
        this.materials = c instanceof Array ? c : [c];
        this.sortParticles = !1
    };
    THREE.ParticleSystem.prototype = new THREE.Object3D;
    THREE.ParticleSystem.prototype.constructor = THREE.ParticleSystem;
    THREE.Line = function (b, c, e) {
        THREE.Object3D.call(this);
        this.geometry = b;
        this.materials = c instanceof Array ? c : [c];
        this.type = e != void 0 ? e : THREE.LineStrip
    };
    THREE.LineStrip = 0;
    THREE.LinePieces = 1;
    THREE.Line.prototype = new THREE.Object3D;
    THREE.Line.prototype.constructor = THREE.Line;
    THREE.Mesh = function (b, c) {
        THREE.Object3D.call(this);
        this.geometry = b;
        this.materials = c && c.length ? c : [c];
        this.overdraw = !1;
        if (this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(), this.boundRadius = b.boundingSphere.radius, this.geometry.morphTargets.length)) {
            this.morphTargetBase = -1;
            this.morphTargetForcedOrder = [];
            this.morphTargetInfluences = [];
            this.morphTargetDictionary = {};
            for (var e = 0; e < this.geometry.morphTargets.length; e++)this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] =
                e
        }
    };
    THREE.Mesh.prototype = new THREE.Object3D;
    THREE.Mesh.prototype.constructor = THREE.Mesh;
    THREE.Mesh.prototype.supr = THREE.Object3D.prototype;
    THREE.Mesh.prototype.getMorphTargetIndexByName = function (b) {
        if (this.morphTargetDictionary[b] !== void 0)return this.morphTargetDictionary[b];
        console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + b + " does not exist. Returning 0.");
        return 0
    };
    THREE.Bone = function (b) {
        THREE.Object3D.call(this);
        this.skin = b;
        this.skinMatrix = new THREE.Matrix4;
        this.hasNoneBoneChildren = !1
    };
    THREE.Bone.prototype = new THREE.Object3D;
    THREE.Bone.prototype.constructor = THREE.Bone;
    THREE.Bone.prototype.supr = THREE.Object3D.prototype;
    THREE.Bone.prototype.update = function (b, c, e) {
        this.matrixAutoUpdate && (c |= this.updateMatrix());
        if (c || this.matrixWorldNeedsUpdate)b ? this.skinMatrix.multiply(b, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0;
        var f, h = this.children.length;
        if (this.hasNoneBoneChildren) {
            this.matrixWorld.multiply(this.skin.matrixWorld, this.skinMatrix);
            for (f = 0; f < h; f++)b = this.children[f], b instanceof THREE.Bone ? b.update(this.skinMatrix, c, e) : b.update(this.matrixWorld, !0, e)
        } else for (f = 0; f < h; f++)this.children[f].update(this.skinMatrix,
            c, e)
    };
    THREE.Bone.prototype.addChild = function (b) {
        if (this.children.indexOf(b) === -1 && (b.parent !== void 0 && b.parent.removeChild(b), b.parent = this, this.children.push(b), !(b instanceof THREE.Bone)))this.hasNoneBoneChildren = !0
    };
    THREE.SkinnedMesh = function (b, c) {
        THREE.Mesh.call(this, b, c);
        this.identityMatrix = new THREE.Matrix4;
        this.bones = [];
        this.boneMatrices = [];
        var e, f, h, m, k, n;
        if (this.geometry.bones !== void 0) {
            for (e = 0; e < this.geometry.bones.length; e++)h = this.geometry.bones[e], m = h.pos, k = h.rotq, n = h.scl, f = this.addBone(), f.name = h.name, f.position.set(m[0], m[1], m[2]), f.quaternion.set(k[0], k[1], k[2], k[3]), f.useQuaternion = !0, n !== void 0 ? f.scale.set(n[0], n[1], n[2]) : f.scale.set(1, 1, 1);
            for (e = 0; e < this.bones.length; e++)h = this.geometry.bones[e],
                f = this.bones[e], h.parent === -1 ? this.addChild(f) : this.bones[h.parent].addChild(f);
            this.boneMatrices = new Float32Array(16 * this.bones.length);
            this.pose()
        }
    };
    THREE.SkinnedMesh.prototype = new THREE.Mesh;
    THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;
    THREE.SkinnedMesh.prototype.update = function (b, c, e) {
        if (this.visible) {
            this.matrixAutoUpdate && (c |= this.updateMatrix());
            if (c || this.matrixWorldNeedsUpdate)b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0;
            var f, h = this.children.length;
            for (f = 0; f < h; f++)b = this.children[f], b instanceof THREE.Bone ? b.update(this.identityMatrix, !1, e) : b.update(this.matrixWorld, c, e);
            e = this.bones.length;
            ba = this.bones;
            bm = this.boneMatrices;
            for (c = 0; c < e; c++)ba[c].skinMatrix.flattenToArrayOffset(bm,
                c * 16)
        }
    };
    THREE.SkinnedMesh.prototype.addBone = function (b) {
        b === void 0 && (b = new THREE.Bone(this));
        this.bones.push(b);
        return b
    };
    THREE.SkinnedMesh.prototype.pose = function () {
        this.update(void 0, !0);
        for (var b, c = [], e = 0; e < this.bones.length; e++)b = this.bones[e], c.push(THREE.Matrix4.makeInvert(b.skinMatrix)), b.skinMatrix.flattenToArrayOffset(this.boneMatrices, e * 16);
        if (this.geometry.skinVerticesA === void 0) {
            this.geometry.skinVerticesA = [];
            this.geometry.skinVerticesB = [];
            var f;
            for (b = 0; b < this.geometry.skinIndices.length; b++) {
                var e = this.geometry.vertices[b].position, h = this.geometry.skinIndices[b].x, m = this.geometry.skinIndices[b].y;
                f = new THREE.Vector3(e.x,
                    e.y, e.z);
                this.geometry.skinVerticesA.push(c[h].multiplyVector3(f));
                f = new THREE.Vector3(e.x, e.y, e.z);
                this.geometry.skinVerticesB.push(c[m].multiplyVector3(f));
                this.geometry.skinWeights[b].x + this.geometry.skinWeights[b].y !== 1 && (e = (1 - (this.geometry.skinWeights[b].x + this.geometry.skinWeights[b].y)) * 0.5, this.geometry.skinWeights[b].x += e, this.geometry.skinWeights[b].y += e)
            }
        }
    };
    THREE.Ribbon = function (b, c) {
        THREE.Object3D.call(this);
        this.geometry = b;
        this.materials = c instanceof Array ? c : [c]
    };
    THREE.Ribbon.prototype = new THREE.Object3D;
    THREE.Ribbon.prototype.constructor = THREE.Ribbon;
    THREE.LOD = function () {
        THREE.Object3D.call(this);
        this.LODs = []
    };
    THREE.LOD.prototype = new THREE.Object3D;
    THREE.LOD.prototype.constructor = THREE.LOD;
    THREE.LOD.prototype.supr = THREE.Object3D.prototype;
    THREE.LOD.prototype.add = function (b, c) {
        c === void 0 && (c = 0);
        for (var c = Math.abs(c), e = 0; e < this.LODs.length; e++)if (c < this.LODs[e].visibleAtDistance)break;
        this.LODs.splice(e, 0, {visibleAtDistance: c, object3D: b});
        this.addChild(b)
    };
    THREE.LOD.prototype.update = function (b, c, e) {
        this.matrixAutoUpdate && (c |= this.updateMatrix());
        if (c || this.matrixWorldNeedsUpdate)b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0;
        if (this.LODs.length > 1) {
            b = e.matrixWorldInverse;
            b = -(b.n31 * this.position.x + b.n32 * this.position.y + b.n33 * this.position.z + b.n34);
            this.LODs[0].object3D.visible = !0;
            for (var f = 1; f < this.LODs.length; f++)if (b >= this.LODs[f].visibleAtDistance)this.LODs[f - 1].object3D.visible = !1,
                this.LODs[f].object3D.visible = !0; else break;
            for (; f < this.LODs.length; f++)this.LODs[f].object3D.visible = !1
        }
        for (b = 0; b < this.children.length; b++)this.children[b].update(this.matrixWorld, c, e)
    };
    THREE.Sprite = function (b) {
        THREE.Object3D.call(this);
        if (b.material !== void 0)this.material = b.material, this.map = void 0, this.blending = material.blending; else if (b.map !== void 0)this.map = b.map instanceof THREE.Texture ? b.map : THREE.ImageUtils.loadTexture(b.map), this.material = void 0, this.blending = b.blending !== void 0 ? b.blending : THREE.NormalBlending;
        this.useScreenCoordinates = b.useScreenCoordinates !== void 0 ? b.useScreenCoordinates : !0;
        this.mergeWith3D = b.mergeWith3D !== void 0 ? b.mergeWith3D : !this.useScreenCoordinates;
        this.affectedByDistance = b.affectedByDistance !== void 0 ? b.affectedByDistance : !this.useScreenCoordinates;
        this.scaleByViewport = b.scaleByViewport !== void 0 ? b.scaleByViewport : !this.affectedByDistance;
        this.alignment = b.alignment instanceof THREE.Vector2 ? b.alignment : THREE.SpriteAlignment.center;
        this.rotation3d = this.rotation;
        this.rotation = 0;
        this.opacity = 1;
        this.uvOffset = new THREE.Vector2(0, 0);
        this.uvScale = new THREE.Vector2(1, 1)
    };
    THREE.Sprite.prototype = new THREE.Object3D;
    THREE.Sprite.prototype.constructor = THREE.Sprite;
    THREE.Sprite.prototype.supr = THREE.Object3D.prototype;
    THREE.Sprite.prototype.updateMatrix = function () {
        this.matrix.setPosition(this.position);
        this.rotation3d.set(0, 0, this.rotation);
        this.matrix.setRotationFromEuler(this.rotation3d);
        if (this.scale.x !== 1 || this.scale.y !== 1)this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, this.scale.y);
        this.matrixWorldNeedsUpdate = !0
    };
    THREE.SpriteAlignment = {};
    THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1);
    THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1);
    THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1);
    THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0);
    THREE.SpriteAlignment.center = new THREE.Vector2(0, 0);
    THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0);
    THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1);
    THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1);
    THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1);
    THREE.Scene = function () {
        THREE.Object3D.call(this);
        this.matrixAutoUpdate = !1;
        this.collisions = this.overrideMaterial = this.fog = null;
        this.objects = [];
        this.lights = [];
        this.__objectsAdded = [];
        this.__objectsRemoved = []
    };
    THREE.Scene.prototype = new THREE.Object3D;
    THREE.Scene.prototype.constructor = THREE.Scene;
    THREE.Scene.prototype.supr = THREE.Object3D.prototype;
    THREE.Scene.prototype.addChild = function (b) {
        this.supr.addChild.call(this, b);
        this.addChildRecurse(b)
    };
    THREE.Scene.prototype.addChildRecurse = function (b) {
        if (b instanceof THREE.Light)this.lights.indexOf(b) === -1 && this.lights.push(b); else if (!(b instanceof THREE.Camera || b instanceof THREE.Bone) && this.objects.indexOf(b) === -1)this.objects.push(b), this.__objectsAdded.push(b);
        for (var c = 0; c < b.children.length; c++)this.addChildRecurse(b.children[c])
    };
    THREE.Scene.prototype.removeChild = function (b) {
        this.supr.removeChild.call(this, b);
        this.removeChildRecurse(b)
    };
    THREE.Scene.prototype.removeChildRecurse = function (b) {
        if (b instanceof THREE.Light) {
            var c = this.lights.indexOf(b);
            c !== -1 && this.lights.splice(c, 1)
        } else b instanceof THREE.Camera || (c = this.objects.indexOf(b), c !== -1 && (this.objects.splice(c, 1), this.__objectsRemoved.push(b)));
        for (c = 0; c < b.children.length; c++)this.removeChildRecurse(b.children[c])
    };
    THREE.Scene.prototype.addObject = THREE.Scene.prototype.addChild;
    THREE.Scene.prototype.removeObject = THREE.Scene.prototype.removeChild;
    THREE.Scene.prototype.addLight = THREE.Scene.prototype.addChild;
    THREE.Scene.prototype.removeLight = THREE.Scene.prototype.removeChild;
    THREE.Fog = function (b, c, e) {
        this.color = new THREE.Color(b);
        this.near = c || 1;
        this.far = e || 1E3
    };
    THREE.FogExp2 = function (b, c) {
        this.color = new THREE.Color(b);
        this.density = c !== void 0 ? c : 2.5E-4
    };
    THREE.DOMRenderer = function () {
        THREE.Renderer.call(this);
        var b = null, c = new THREE.Projector, e, f, h, m;
        this.domElement = document.createElement("div");
        this.setSize = function (b, c) {
            e = b;
            f = c;
            h = e / 2;
            m = f / 2
        };
        this.render = function (e, f) {
            var u, p, v, t, x, w, z, y;
            b = c.projectScene(e, f);
            u = 0;
            for (p = b.length; u < p; u++)if (x = b[u], x instanceof THREE.RenderableParticle) {
                z = x.x * h + h;
                y = x.y * m + m;
                v = 0;
                for (t = x.material.length; v < t; v++)if (w = x.material[v], w instanceof THREE.ParticleDOMMaterial)w = w.domElement, w.style.left = z + "px", w.style.top = y + "px"
            }
        }
    };
    THREE.CanvasRenderer = function (b) {
        function c(b) {
            if (B != b)w.globalAlpha = B = b
        }

        function e(b) {
            if (D != b) {
                switch (b) {
                    case THREE.NormalBlending:
                        w.globalCompositeOperation = "source-over";
                        break;
                    case THREE.AdditiveBlending:
                        w.globalCompositeOperation = "lighter";
                        break;
                    case THREE.SubtractiveBlending:
                        w.globalCompositeOperation = "darker"
                }
                D = b
            }
        }

        function f(b) {
            if (G != b)w.strokeStyle = G = b
        }

        function h(b) {
            if (H != b)w.fillStyle = H = b
        }

        var m = this, k = null, n = new THREE.Projector, b = b || {}, u = b.canvas !== void 0 ? b.canvas : document.createElement("canvas"),
            p, v, t, x, w = u.getContext("2d"), z = new THREE.Color(0), y = 0, B = 1, D = 0, G = null, H = null, E = null, N = null, F = null, I, C, K, U, L = new THREE.RenderableVertex, O = new THREE.RenderableVertex, S, P, o, W, na, R, ia, aa, ma, fa, ga, da, $ = new THREE.Color(0), ca = new THREE.Color(0), X = new THREE.Color(0), ja = new THREE.Color(0), ea = new THREE.Color(0), qa = [], V, pa, va, ra, sa, Ca, wa, Aa, za, Fa, M = new THREE.Rectangle, Z = new THREE.Rectangle, T = new THREE.Rectangle, xa = !1, ha = new THREE.Color, ka = new THREE.Color, ya = new THREE.Color, ta = new THREE.Color, oa = new THREE.Vector3,
            Y, Ga, la, Ba, Va, Da, b = 16;
        Y = document.createElement("canvas");
        Y.width = Y.height = 2;
        Ga = Y.getContext("2d");
        Ga.fillStyle = "rgba(0,0,0,1)";
        Ga.fillRect(0, 0, 2, 2);
        la = Ga.getImageData(0, 0, 2, 2);
        Ba = la.data;
        Va = document.createElement("canvas");
        Va.width = Va.height = b;
        Da = Va.getContext("2d");
        Da.translate(-b / 2, -b / 2);
        Da.scale(b, b);
        b--;
        this.domElement = u;
        this.sortElements = this.sortObjects = this.autoClear = !0;
        this.data = {vertices: 0, faces: 0};
        this.setSize = function (b, e) {
            p = b;
            v = e;
            t = Math.floor(p / 2);
            x = Math.floor(v / 2);
            u.width = p;
            u.height =
                v;
            M.set(-t, -x, t, x);
            Z.set(-t, -x, t, x);
            B = 1;
            D = 0;
            F = N = E = H = G = null
        };
        this.setClearColor = function (b, e) {
            z.copy(b);
            y = e;
            Z.set(-t, -x, t, x)
        };
        this.setClearColorHex = function (b, e) {
            z.setHex(b);
            y = e;
            Z.set(-t, -x, t, x)
        };
        this.clear = function () {
            w.setTransform(1, 0, 0, -1, t, x);
            Z.isEmpty() || (Z.minSelf(M), Z.inflate(2), y < 1 && w.clearRect(Math.floor(Z.getX()), Math.floor(Z.getY()), Math.floor(Z.getWidth()), Math.floor(Z.getHeight())), y > 0 && (e(THREE.NormalBlending), c(1), h("rgba(" + Math.floor(z.r * 255) + "," + Math.floor(z.g * 255) + "," + Math.floor(z.b *
            255) + "," + y + ")"), w.fillRect(Math.floor(Z.getX()), Math.floor(Z.getY()), Math.floor(Z.getWidth()), Math.floor(Z.getHeight()))), Z.empty())
        };
        this.render = function (b, u) {
            function p(b) {
                var e, c, f, k = b.lights;
                ka.setRGB(0, 0, 0);
                ya.setRGB(0, 0, 0);
                ta.setRGB(0, 0, 0);
                b = 0;
                for (e = k.length; b < e; b++)c = k[b], f = c.color, c instanceof THREE.AmbientLight ? (ka.r += f.r, ka.g += f.g, ka.b += f.b) : c instanceof THREE.DirectionalLight ? (ya.r += f.r, ya.g += f.g, ya.b += f.b) : c instanceof THREE.PointLight && (ta.r += f.r, ta.g += f.g, ta.b += f.b)
            }

            function v(b, e, c,
                       f) {
                var k, h, m, o, n = b.lights, b = 0;
                for (k = n.length; b < k; b++)h = n[b], m = h.color, h instanceof THREE.DirectionalLight ? (o = c.dot(h.position), o <= 0 || (o *= h.intensity, f.r += m.r * o, f.g += m.g * o, f.b += m.b * o)) : h instanceof THREE.PointLight && (o = c.dot(oa.sub(h.position, e).normalize()), o <= 0 || (o *= h.distance == 0 ? 1 : 1 - Math.min(e.distanceTo(h.position) / h.distance, 1), o != 0 && (o *= h.intensity, f.r += m.r * o, f.g += m.g * o, f.b += m.b * o)))
            }

            function z(b, k, m) {
                c(m.opacity);
                e(m.blending);
                var o, n, u, la, p, v;
                if (m instanceof THREE.ParticleBasicMaterial) {
                    if (m.map)la =
                        m.map.image, p = la.width >> 1, v = la.height >> 1, m = k.scale.x * t, u = k.scale.y * x, o = m * p, n = u * v, T.set(b.x - o, b.y - n, b.x + o, b.y + n), M.instersects(T) && (w.save(), w.translate(b.x, b.y), w.rotate(-k.rotation), w.scale(m, -u), w.translate(-p, -v), w.drawImage(la, 0, 0), w.restore())
                } else m instanceof THREE.ParticleCanvasMaterial && (o = k.scale.x * t, n = k.scale.y * x, T.set(b.x - o, b.y - n, b.x + o, b.y + n), M.instersects(T) && (f(m.color.getContextStyle()), h(m.color.getContextStyle()), w.save(), w.translate(b.x, b.y), w.rotate(-k.rotation), w.scale(o, n), m.program(w),
                    w.restore()))
            }

            function B(b, k, h, m) {
                c(m.opacity);
                e(m.blending);
                w.beginPath();
                w.moveTo(b.positionScreen.x, b.positionScreen.y);
                w.lineTo(k.positionScreen.x, k.positionScreen.y);
                w.closePath();
                if (m instanceof THREE.LineBasicMaterial) {
                    b = m.linewidth;
                    if (E != b)w.lineWidth = E = b;
                    b = m.linecap;
                    if (N != b)w.lineCap = N = b;
                    b = m.linejoin;
                    if (F != b)w.lineJoin = F = b;
                    f(m.color.getContextStyle());
                    w.stroke();
                    T.inflate(m.linewidth * 2)
                }
            }

            function y(b, f, k, h, n, t, la, p, w) {
                m.data.vertices += 3;
                m.data.faces++;
                c(p.opacity);
                e(p.blending);
                S = b.positionScreen.x;
                P = b.positionScreen.y;
                o = f.positionScreen.x;
                W = f.positionScreen.y;
                na = k.positionScreen.x;
                R = k.positionScreen.y;
                G(S, P, o, W, na, R);
                if (p instanceof THREE.MeshBasicMaterial)if (p.map)p.map.mapping instanceof THREE.UVMapping && (ra = la.uvs[0], Ya(S, P, o, W, na, R, ra[h].u, ra[h].v, ra[n].u, ra[n].v, ra[t].u, ra[t].v, p.map)); else if (p.envMap) {
                    if (p.envMap.mapping instanceof THREE.SphericalReflectionMapping)b = u.matrixWorldInverse, oa.copy(la.vertexNormalsWorld[0]), sa = (oa.x * b.n11 + oa.y * b.n12 + oa.z * b.n13) * 0.5 + 0.5, Ca = -(oa.x * b.n21 + oa.y *
                    b.n22 + oa.z * b.n23) * 0.5 + 0.5, oa.copy(la.vertexNormalsWorld[1]), wa = (oa.x * b.n11 + oa.y * b.n12 + oa.z * b.n13) * 0.5 + 0.5, Aa = -(oa.x * b.n21 + oa.y * b.n22 + oa.z * b.n23) * 0.5 + 0.5, oa.copy(la.vertexNormalsWorld[2]), za = (oa.x * b.n11 + oa.y * b.n12 + oa.z * b.n13) * 0.5 + 0.5, Fa = -(oa.x * b.n21 + oa.y * b.n22 + oa.z * b.n23) * 0.5 + 0.5, Ya(S, P, o, W, na, R, sa, Ca, wa, Aa, za, Fa, p.envMap)
                } else p.wireframe ? Ja(p.color, p.wireframeLinewidth, p.wireframeLinecap, p.wireframeLinejoin) : Ka(p.color); else if (p instanceof THREE.MeshLambertMaterial)p.map && !p.wireframe && (p.map.mapping instanceof
                THREE.UVMapping && (ra = la.uvs[0], Ya(S, P, o, W, na, R, ra[h].u, ra[h].v, ra[n].u, ra[n].v, ra[t].u, ra[t].v, p.map)), e(THREE.SubtractiveBlending)), xa ? !p.wireframe && p.shading == THREE.SmoothShading && la.vertexNormalsWorld.length == 3 ? (ca.r = X.r = ja.r = ka.r, ca.g = X.g = ja.g = ka.g, ca.b = X.b = ja.b = ka.b, v(w, la.v1.positionWorld, la.vertexNormalsWorld[0], ca), v(w, la.v2.positionWorld, la.vertexNormalsWorld[1], X), v(w, la.v3.positionWorld, la.vertexNormalsWorld[2], ja), ea.r = (X.r + ja.r) * 0.5, ea.g = (X.g + ja.g) * 0.5, ea.b = (X.b + ja.b) * 0.5, va = Wa(ca, X,
                    ja, ea), Sa(S, P, o, W, na, R, 0, 0, 1, 0, 0, 1, va)) : (ha.r = ka.r, ha.g = ka.g, ha.b = ka.b, v(w, la.centroidWorld, la.normalWorld, ha), $.r = Math.max(0, Math.min(p.color.r * ha.r, 1)), $.g = Math.max(0, Math.min(p.color.g * ha.g, 1)), $.b = Math.max(0, Math.min(p.color.b * ha.b, 1)), p.wireframe ? Ja($, p.wireframeLinewidth, p.wireframeLinecap, p.wireframeLinejoin) : Ka($)) : p.wireframe ? Ja(p.color, p.wireframeLinewidth, p.wireframeLinecap, p.wireframeLinejoin) : Ka(p.color); else if (p instanceof THREE.MeshDepthMaterial)V = u.near, pa = u.far, ca.r = ca.g = ca.b = 1 -
                Na(b.positionScreen.z, V, pa), X.r = X.g = X.b = 1 - Na(f.positionScreen.z, V, pa), ja.r = ja.g = ja.b = 1 - Na(k.positionScreen.z, V, pa), ea.r = (X.r + ja.r) * 0.5, ea.g = (X.g + ja.g) * 0.5, ea.b = (X.b + ja.b) * 0.5, va = Wa(ca, X, ja, ea), Sa(S, P, o, W, na, R, 0, 0, 1, 0, 0, 1, va); else if (p instanceof THREE.MeshNormalMaterial)$.r = Ta(la.normalWorld.x), $.g = Ta(la.normalWorld.y), $.b = Ta(la.normalWorld.z), p.wireframe ? Ja($, p.wireframeLinewidth, p.wireframeLinecap, p.wireframeLinejoin) : Ka($)
            }

            function D(b, f, k, h, n, p, la, t, w) {
                m.data.vertices += 4;
                m.data.faces++;
                c(t.opacity);
                e(t.blending);
                if (t.map || t.envMap)y(b, f, h, 0, 1, 3, la, t, w), y(n, k, p, 1, 2, 3, la, t, w); else if (S = b.positionScreen.x, P = b.positionScreen.y, o = f.positionScreen.x, W = f.positionScreen.y, na = k.positionScreen.x, R = k.positionScreen.y, ia = h.positionScreen.x, aa = h.positionScreen.y, ma = n.positionScreen.x, fa = n.positionScreen.y, ga = p.positionScreen.x, da = p.positionScreen.y, t instanceof THREE.MeshBasicMaterial)H(S, P, o, W, na, R, ia, aa), t.wireframe ? Ja(t.color, t.wireframeLinewidth, t.wireframeLinecap, t.wireframeLinejoin) : Ka(t.color); else if (t instanceof
                    THREE.MeshLambertMaterial)xa ? !t.wireframe && t.shading == THREE.SmoothShading && la.vertexNormalsWorld.length == 4 ? (ca.r = X.r = ja.r = ea.r = ka.r, ca.g = X.g = ja.g = ea.g = ka.g, ca.b = X.b = ja.b = ea.b = ka.b, v(w, la.v1.positionWorld, la.vertexNormalsWorld[0], ca), v(w, la.v2.positionWorld, la.vertexNormalsWorld[1], X), v(w, la.v4.positionWorld, la.vertexNormalsWorld[3], ja), v(w, la.v3.positionWorld, la.vertexNormalsWorld[2], ea), va = Wa(ca, X, ja, ea), G(S, P, o, W, ia, aa), Sa(S, P, o, W, ia, aa, 0, 0, 1, 0, 0, 1, va), G(ma, fa, na, R, ga, da), Sa(ma, fa, na, R, ga, da, 1,
                    0, 1, 1, 0, 1, va)) : (ha.r = ka.r, ha.g = ka.g, ha.b = ka.b, v(w, la.centroidWorld, la.normalWorld, ha), $.r = Math.max(0, Math.min(t.color.r * ha.r, 1)), $.g = Math.max(0, Math.min(t.color.g * ha.g, 1)), $.b = Math.max(0, Math.min(t.color.b * ha.b, 1)), H(S, P, o, W, na, R, ia, aa), t.wireframe ? Ja($, t.wireframeLinewidth, t.wireframeLinecap, t.wireframeLinejoin) : Ka($)) : (H(S, P, o, W, na, R, ia, aa), t.wireframe ? Ja(t.color, t.wireframeLinewidth, t.wireframeLinecap, t.wireframeLinejoin) : Ka(t.color)); else if (t instanceof THREE.MeshNormalMaterial)$.r = Ta(la.normalWorld.x),
                    $.g = Ta(la.normalWorld.y), $.b = Ta(la.normalWorld.z), H(S, P, o, W, na, R, ia, aa), t.wireframe ? Ja($, t.wireframeLinewidth, t.wireframeLinecap, t.wireframeLinejoin) : Ka($); else if (t instanceof THREE.MeshDepthMaterial)V = u.near, pa = u.far, ca.r = ca.g = ca.b = 1 - Na(b.positionScreen.z, V, pa), X.r = X.g = X.b = 1 - Na(f.positionScreen.z, V, pa), ja.r = ja.g = ja.b = 1 - Na(h.positionScreen.z, V, pa), ea.r = ea.g = ea.b = 1 - Na(k.positionScreen.z, V, pa), va = Wa(ca, X, ja, ea), G(S, P, o, W, ia, aa), Sa(S, P, o, W, ia, aa, 0, 0, 1, 0, 0, 1, va), G(ma, fa, na, R, ga, da), Sa(ma, fa, na, R, ga,
                    da, 1, 0, 1, 1, 0, 1, va)
            }

            function G(b, e, c, f, k, h) {
                w.beginPath();
                w.moveTo(b, e);
                w.lineTo(c, f);
                w.lineTo(k, h);
                w.lineTo(b, e);
                w.closePath()
            }

            function H(b, e, c, f, k, h, m, o) {
                w.beginPath();
                w.moveTo(b, e);
                w.lineTo(c, f);
                w.lineTo(k, h);
                w.lineTo(m, o);
                w.lineTo(b, e);
                w.closePath()
            }

            function Ja(b, e, c, k) {
                if (E != e)w.lineWidth = E = e;
                if (N != c)w.lineCap = N = c;
                if (F != k)w.lineJoin = F = k;
                f(b.getContextStyle());
                w.stroke();
                T.inflate(e * 2)
            }

            function Ka(b) {
                h(b.getContextStyle());
                w.fill()
            }

            function Ya(b, e, c, f, k, m, o, n, t, p, la, u, v) {
                if (v.image.width != 0) {
                    if (v.needsUpdate == !0 || qa[v.id] == void 0) {
                        var x = v.wrapS == THREE.RepeatWrapping, Da = v.wrapT == THREE.RepeatWrapping;
                        qa[v.id] = w.createPattern(v.image, x && Da ? "repeat" : x && !Da ? "repeat-x" : !x && Da ? "repeat-y" : "no-repeat");
                        v.needsUpdate = !1
                    }
                    h(qa[v.id]);
                    var x = v.offset.x / v.repeat.x, Da = v.offset.y / v.repeat.y, M = (v.image.width - 1) * v.repeat.x, v = (v.image.height - 1) * v.repeat.y, o = (o + x) * M, n = (n + Da) * v, t = (t + x) * M, p = (p + Da) * v, la = (la + x) * M, u = (u + Da) * v;
                    c -= b;
                    f -= e;
                    k -= b;
                    m -= e;
                    t -= o;
                    p -= n;
                    la -= o;
                    u -= n;
                    x = 1 / (t * u - la * p);
                    v = (u * c - p * k) * x;
                    p = (u * f - p * m) * x;
                    c = (t * k - la * c) * x;
                    f = (t *
                    m - la * f) * x;
                    b = b - v * o - c * n;
                    e = e - p * o - f * n;
                    w.save();
                    w.transform(v, p, c, f, b, e);
                    w.fill();
                    w.restore()
                }
            }

            function Sa(b, e, c, f, k, h, m, o, n, t, p, la, u) {
                var v, x;
                v = u.width - 1;
                x = u.height - 1;
                m *= v;
                o *= x;
                n *= v;
                t *= x;
                p *= v;
                la *= x;
                c -= b;
                f -= e;
                k -= b;
                h -= e;
                n -= m;
                t -= o;
                p -= m;
                la -= o;
                x = 1 / (n * la - p * t);
                v = (la * c - t * k) * x;
                t = (la * f - t * h) * x;
                c = (n * k - p * c) * x;
                f = (n * h - p * f) * x;
                b = b - v * m - c * o;
                e = e - t * m - f * o;
                w.save();
                w.transform(v, t, c, f, b, e);
                w.clip();
                w.drawImage(u, 0, 0);
                w.restore()
            }

            function Wa(b, e, c, f) {
                var k = ~~(b.r * 255), h = ~~(b.g * 255), b = ~~(b.b * 255), m = ~~(e.r * 255), o = ~~(e.g * 255),
                    e = ~~(e.b * 255), n = ~~(c.r * 255), t = ~~(c.g * 255), c = ~~(c.b * 255), p = ~~(f.r * 255), u = ~~(f.g * 255), f = ~~(f.b * 255);
                Ba[0] = k < 0 ? 0 : k > 255 ? 255 : k;
                Ba[1] = h < 0 ? 0 : h > 255 ? 255 : h;
                Ba[2] = b < 0 ? 0 : b > 255 ? 255 : b;
                Ba[4] = m < 0 ? 0 : m > 255 ? 255 : m;
                Ba[5] = o < 0 ? 0 : o > 255 ? 255 : o;
                Ba[6] = e < 0 ? 0 : e > 255 ? 255 : e;
                Ba[8] = n < 0 ? 0 : n > 255 ? 255 : n;
                Ba[9] = t < 0 ? 0 : t > 255 ? 255 : t;
                Ba[10] = c < 0 ? 0 : c > 255 ? 255 : c;
                Ba[12] = p < 0 ? 0 : p > 255 ? 255 : p;
                Ba[13] = u < 0 ? 0 : u > 255 ? 255 : u;
                Ba[14] = f < 0 ? 0 : f > 255 ? 255 : f;
                Ga.putImageData(la, 0, 0);
                Da.drawImage(Y, 0, 0);
                return Va
            }

            function Na(b, e, c) {
                b = (b - e) / (c - e);
                return b * b * (3 - 2 * b)
            }

            function Ta(b) {
                b =
                    (b + 1) * 0.5;
                return b < 0 ? 0 : b > 1 ? 1 : b
            }

            function La(b, e) {
                var c = e.x - b.x, f = e.y - b.y, k = c * c + f * f;
                k != 0 && (k = 1 / Math.sqrt(k), c *= k, f *= k, e.x += c, e.y += f, b.x -= c, b.y -= f)
            }

            var Xa, bb, ua, Ea, Ma, Ua, J, A;
            this.autoClear ? this.clear() : w.setTransform(1, 0, 0, -1, t, x);
            m.data.vertices = 0;
            m.data.faces = 0;
            k = n.projectScene(b, u, this.sortElements);
            (xa = b.lights.length > 0) && p(b);
            Xa = 0;
            for (bb = k.length; Xa < bb; Xa++) {
                ua = k[Xa];
                T.empty();
                if (ua instanceof THREE.RenderableParticle) {
                    I = ua;
                    I.x *= t;
                    I.y *= x;
                    Ea = 0;
                    for (Ma = ua.materials.length; Ea < Ma;)A = ua.materials[Ea++],
                    A.opacity != 0 && z(I, ua, A, b)
                } else if (ua instanceof THREE.RenderableLine) {
                    if (I = ua.v1, C = ua.v2, I.positionScreen.x *= t, I.positionScreen.y *= x, C.positionScreen.x *= t, C.positionScreen.y *= x, T.addPoint(I.positionScreen.x, I.positionScreen.y), T.addPoint(C.positionScreen.x, C.positionScreen.y), M.instersects(T)) {
                        Ea = 0;
                        for (Ma = ua.materials.length; Ea < Ma;)A = ua.materials[Ea++], A.opacity != 0 && B(I, C, ua, A, b)
                    }
                } else if (ua instanceof THREE.RenderableFace3) {
                    if (I = ua.v1, C = ua.v2, K = ua.v3, I.positionScreen.x *= t, I.positionScreen.y *= x, C.positionScreen.x *=
                            t, C.positionScreen.y *= x, K.positionScreen.x *= t, K.positionScreen.y *= x, ua.overdraw && (La(I.positionScreen, C.positionScreen), La(C.positionScreen, K.positionScreen), La(K.positionScreen, I.positionScreen)), T.add3Points(I.positionScreen.x, I.positionScreen.y, C.positionScreen.x, C.positionScreen.y, K.positionScreen.x, K.positionScreen.y), M.instersects(T)) {
                        Ea = 0;
                        for (Ma = ua.meshMaterials.length; Ea < Ma;)if (A = ua.meshMaterials[Ea++], A instanceof THREE.MeshFaceMaterial) {
                            Ua = 0;
                            for (J = ua.faceMaterials.length; Ua < J;)(A = ua.faceMaterials[Ua++]) &&
                            A.opacity != 0 && y(I, C, K, 0, 1, 2, ua, A, b)
                        } else A.opacity != 0 && y(I, C, K, 0, 1, 2, ua, A, b)
                    }
                } else if (ua instanceof THREE.RenderableFace4 && (I = ua.v1, C = ua.v2, K = ua.v3, U = ua.v4, I.positionScreen.x *= t, I.positionScreen.y *= x, C.positionScreen.x *= t, C.positionScreen.y *= x, K.positionScreen.x *= t, K.positionScreen.y *= x, U.positionScreen.x *= t, U.positionScreen.y *= x, L.positionScreen.copy(C.positionScreen), O.positionScreen.copy(U.positionScreen), ua.overdraw && (La(I.positionScreen, C.positionScreen), La(C.positionScreen, U.positionScreen),
                        La(U.positionScreen, I.positionScreen), La(K.positionScreen, L.positionScreen), La(K.positionScreen, O.positionScreen)), T.addPoint(I.positionScreen.x, I.positionScreen.y), T.addPoint(C.positionScreen.x, C.positionScreen.y), T.addPoint(K.positionScreen.x, K.positionScreen.y), T.addPoint(U.positionScreen.x, U.positionScreen.y), M.instersects(T))) {
                    Ea = 0;
                    for (Ma = ua.meshMaterials.length; Ea < Ma;)if (A = ua.meshMaterials[Ea++], A instanceof THREE.MeshFaceMaterial) {
                        Ua = 0;
                        for (J = ua.faceMaterials.length; Ua < J;)(A = ua.faceMaterials[Ua++]) &&
                        A.opacity != 0 && D(I, C, K, U, L, O, ua, A, b)
                    } else A.opacity != 0 && D(I, C, K, U, L, O, ua, A, b)
                }
                Z.addRectangle(T)
            }
            w.setTransform(1, 0, 0, 1, 0, 0)
        }
    };
    THREE.SVGRenderer = function () {
        function b(b, e, c) {
            var f, k, h, m;
            f = 0;
            for (k = b.lights.length; f < k; f++)h = b.lights[f], h instanceof THREE.DirectionalLight ? (m = e.normalWorld.dot(h.position) * h.intensity, m > 0 && (c.r += h.color.r * m, c.g += h.color.g * m, c.b += h.color.b * m)) : h instanceof THREE.PointLight && (U.sub(h.position, e.centroidWorld), U.normalize(), m = e.normalWorld.dot(U) * h.intensity, m > 0 && (c.r += h.color.r * m, c.g += h.color.g * m, c.b += h.color.b * m))
        }

        function c(e, c, k, o, n, t) {
            m.data.vertices += 3;
            m.data.faces++;
            S = f(P++);
            S.setAttribute("d",
                "M " + e.positionScreen.x + " " + e.positionScreen.y + " L " + c.positionScreen.x + " " + c.positionScreen.y + " L " + k.positionScreen.x + "," + k.positionScreen.y + "z");
            n instanceof THREE.MeshBasicMaterial ? E.copy(n.color) : n instanceof THREE.MeshLambertMaterial ? H ? (N.r = F.r, N.g = F.g, N.b = F.b, b(t, o, N), E.r = Math.max(0, Math.min(n.color.r * N.r, 1)), E.g = Math.max(0, Math.min(n.color.g * N.g, 1)), E.b = Math.max(0, Math.min(n.color.b * N.b, 1))) : E.copy(n.color) : n instanceof THREE.MeshDepthMaterial ? (K = 1 - n.__2near / (n.__farPlusNear - o.z * n.__farMinusNear),
                E.setRGB(K, K, K)) : n instanceof THREE.MeshNormalMaterial && E.setRGB(h(o.normalWorld.x), h(o.normalWorld.y), h(o.normalWorld.z));
            n.wireframe ? S.setAttribute("style", "fill: none; stroke: " + E.getContextStyle() + "; stroke-width: " + n.wireframeLinewidth + "; stroke-opacity: " + n.opacity + "; stroke-linecap: " + n.wireframeLinecap + "; stroke-linejoin: " + n.wireframeLinejoin) : S.setAttribute("style", "fill: " + E.getContextStyle() + "; fill-opacity: " + n.opacity);
            u.appendChild(S)
        }

        function e(e, c, k, o, n, t, p) {
            m.data.vertices += 4;
            m.data.faces++;
            S = f(P++);
            S.setAttribute("d", "M " + e.positionScreen.x + " " + e.positionScreen.y + " L " + c.positionScreen.x + " " + c.positionScreen.y + " L " + k.positionScreen.x + "," + k.positionScreen.y + " L " + o.positionScreen.x + "," + o.positionScreen.y + "z");
            t instanceof THREE.MeshBasicMaterial ? E.copy(t.color) : t instanceof THREE.MeshLambertMaterial ? H ? (N.r = F.r, N.g = F.g, N.b = F.b, b(p, n, N), E.r = Math.max(0, Math.min(t.color.r * N.r, 1)), E.g = Math.max(0, Math.min(t.color.g * N.g, 1)), E.b = Math.max(0, Math.min(t.color.b * N.b, 1))) : E.copy(t.color) : t instanceof
            THREE.MeshDepthMaterial ? (K = 1 - t.__2near / (t.__farPlusNear - n.z * t.__farMinusNear), E.setRGB(K, K, K)) : t instanceof THREE.MeshNormalMaterial && E.setRGB(h(n.normalWorld.x), h(n.normalWorld.y), h(n.normalWorld.z));
            t.wireframe ? S.setAttribute("style", "fill: none; stroke: " + E.getContextStyle() + "; stroke-width: " + t.wireframeLinewidth + "; stroke-opacity: " + t.opacity + "; stroke-linecap: " + t.wireframeLinecap + "; stroke-linejoin: " + t.wireframeLinejoin) : S.setAttribute("style", "fill: " + E.getContextStyle() + "; fill-opacity: " +
            t.opacity);
            u.appendChild(S)
        }

        function f(b) {
            L[b] == null && (L[b] = document.createElementNS("http://www.w3.org/2000/svg", "path"), W == 0 && L[b].setAttribute("shape-rendering", "crispEdges"));
            return L[b]
        }

        function h(b) {
            b = (b + 1) * 0.5;
            return b < 0 ? 0 : b > 1 ? 1 : b
        }

        var m = this, k = null, n = new THREE.Projector, u = document.createElementNS("http://www.w3.org/2000/svg", "svg"), p, v, t, x, w, z, y, B, D = new THREE.Rectangle, G = new THREE.Rectangle, H = !1, E = new THREE.Color(16777215), N = new THREE.Color(16777215), F = new THREE.Color(0), I = new THREE.Color(0),
            C = new THREE.Color(0), K, U = new THREE.Vector3, L = [], O = [], S, P, o, W = 1;
        this.domElement = u;
        this.sortElements = this.sortObjects = this.autoClear = !0;
        this.data = {vertices: 0, faces: 0};
        this.setQuality = function (b) {
            switch (b) {
                case "high":
                    W = 1;
                    break;
                case "low":
                    W = 0
            }
        };
        this.setSize = function (b, e) {
            p = b;
            v = e;
            t = p / 2;
            x = v / 2;
            u.setAttribute("viewBox", -t + " " + -x + " " + p + " " + v);
            u.setAttribute("width", p);
            u.setAttribute("height", v);
            D.set(-t, -x, t, x)
        };
        this.clear = function () {
            for (; u.childNodes.length > 0;)u.removeChild(u.childNodes[0])
        };
        this.render =
            function (b, f) {
                var h, p, v, E, N, L, K, ca;
                this.autoClear && this.clear();
                m.data.vertices = 0;
                m.data.faces = 0;
                k = n.projectScene(b, f, this.sortElements);
                o = P = 0;
                if (H = b.lights.length > 0) {
                    K = b.lights;
                    F.setRGB(0, 0, 0);
                    I.setRGB(0, 0, 0);
                    C.setRGB(0, 0, 0);
                    h = 0;
                    for (p = K.length; h < p; h++)v = K[h], E = v.color, v instanceof THREE.AmbientLight ? (F.r += E.r, F.g += E.g, F.b += E.b) : v instanceof THREE.DirectionalLight ? (I.r += E.r, I.g += E.g, I.b += E.b) : v instanceof THREE.PointLight && (C.r += E.r, C.g += E.g, C.b += E.b)
                }
                h = 0;
                for (p = k.length; h < p; h++)if (K = k[h], G.empty(),
                    K instanceof THREE.RenderableParticle) {
                    w = K;
                    w.x *= t;
                    w.y *= -x;
                    v = 0;
                    for (E = K.materials.length; v < E;)v++
                } else if (K instanceof THREE.RenderableLine) {
                    if (w = K.v1, z = K.v2, w.positionScreen.x *= t, w.positionScreen.y *= -x, z.positionScreen.x *= t, z.positionScreen.y *= -x, G.addPoint(w.positionScreen.x, w.positionScreen.y), G.addPoint(z.positionScreen.x, z.positionScreen.y), D.instersects(G)) {
                        v = 0;
                        for (E = K.materials.length; v < E;)if ((ca = K.materials[v++]) && ca.opacity != 0) {
                            N = w;
                            L = z;
                            var X = o++;
                            O[X] == null && (O[X] = document.createElementNS("http://www.w3.org/2000/svg",
                                "line"), W == 0 && O[X].setAttribute("shape-rendering", "crispEdges"));
                            S = O[X];
                            S.setAttribute("x1", N.positionScreen.x);
                            S.setAttribute("y1", N.positionScreen.y);
                            S.setAttribute("x2", L.positionScreen.x);
                            S.setAttribute("y2", L.positionScreen.y);
                            ca instanceof THREE.LineBasicMaterial && (S.setAttribute("style", "fill: none; stroke: " + ca.color.getContextStyle() + "; stroke-width: " + ca.linewidth + "; stroke-opacity: " + ca.opacity + "; stroke-linecap: " + ca.linecap + "; stroke-linejoin: " + ca.linejoin), u.appendChild(S))
                        }
                    }
                } else if (K instanceof
                    THREE.RenderableFace3) {
                    if (w = K.v1, z = K.v2, y = K.v3, w.positionScreen.x *= t, w.positionScreen.y *= -x, z.positionScreen.x *= t, z.positionScreen.y *= -x, y.positionScreen.x *= t, y.positionScreen.y *= -x, G.addPoint(w.positionScreen.x, w.positionScreen.y), G.addPoint(z.positionScreen.x, z.positionScreen.y), G.addPoint(y.positionScreen.x, y.positionScreen.y), D.instersects(G)) {
                        v = 0;
                        for (E = K.meshMaterials.length; v < E;)if (ca = K.meshMaterials[v++], ca instanceof THREE.MeshFaceMaterial) {
                            N = 0;
                            for (L = K.faceMaterials.length; N < L;)(ca = K.faceMaterials[N++]) &&
                            ca.opacity != 0 && c(w, z, y, K, ca, b)
                        } else ca && ca.opacity != 0 && c(w, z, y, K, ca, b)
                    }
                } else if (K instanceof THREE.RenderableFace4 && (w = K.v1, z = K.v2, y = K.v3, B = K.v4, w.positionScreen.x *= t, w.positionScreen.y *= -x, z.positionScreen.x *= t, z.positionScreen.y *= -x, y.positionScreen.x *= t, y.positionScreen.y *= -x, B.positionScreen.x *= t, B.positionScreen.y *= -x, G.addPoint(w.positionScreen.x, w.positionScreen.y), G.addPoint(z.positionScreen.x, z.positionScreen.y), G.addPoint(y.positionScreen.x, y.positionScreen.y), G.addPoint(B.positionScreen.x,
                        B.positionScreen.y), D.instersects(G))) {
                    v = 0;
                    for (E = K.meshMaterials.length; v < E;)if (ca = K.meshMaterials[v++], ca instanceof THREE.MeshFaceMaterial) {
                        N = 0;
                        for (L = K.faceMaterials.length; N < L;)(ca = K.faceMaterials[N++]) && ca.opacity != 0 && e(w, z, y, B, K, ca, b)
                    } else ca && ca.opacity != 0 && e(w, z, y, B, K, ca, b)
                }
            }
    };
    THREE.ShaderChunk = {
        fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",
        fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform int combine;\n#endif",
        envmap_fragment: "#ifdef USE_ENVMAP\nvec4 cubeColor = textureCube( envMap, vec3( -vReflect.x, vReflect.yz ) );\nif ( combine == 1 ) {\ngl_FragColor = vec4( mix( gl_FragColor.xyz, cubeColor.xyz, reflectivity ), opacity );\n} else {\ngl_FragColor = gl_FragColor * cubeColor;\n}\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[ 0 ].xyz, objectMatrix[ 1 ].xyz, objectMatrix[ 2 ].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refractionRatio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",
        map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
        map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, gl_PointCoord );\n#endif",
        map_pars_vertex: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif",
        map_vertex: "#ifdef USE_MAP\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
        map_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
        lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",
        lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",
        lights_pars_vertex: "uniform bool enableLighting;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#ifdef PHONG\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif",
        lights_vertex: "if ( !enableLighting ) {\nvLightWeighting = vec3( 1.0 );\n} else {\nvLightWeighting = ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat pointLightWeighting = max( dot( transformedNormal, lVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef PHONG\nvPointLight[ i ] = vec4( lVector, lDistance );\n#endif\n}\n#endif\n}",
        lights_pars_fragment: "#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
        lights_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 mColor = vec4( diffuse, opacity );\nvec4 mSpecular = vec4( specular, opacity );\n#if MAX_POINT_LIGHTS > 0\nvec4 pointDiffuse  = vec4( vec3( 0.0 ), 1.0 );\nvec4 pointSpecular = vec4( vec3( 0.0 ), 1.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + viewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, shininess );\npointDiffuse  += mColor * pointDiffuseWeight * pointDistance;\npointSpecular += mSpecular * pointSpecularWeight * pointDistance;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec4 dirDiffuse  = vec4( vec3( 0.0 ), 1.0 );\nvec4 dirSpecular = vec4( vec3( 0.0 ), 1.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + viewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, shininess );\ndirDiffuse  += mColor * dirDiffuseWeight;\ndirSpecular += mSpecular * dirSpecularWeight;\n}\n#endif\nvec4 totalLight = vec4( ambient, opacity );\n#if MAX_DIR_LIGHTS > 0\ntotalLight += dirDiffuse + dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalLight += pointDiffuse + pointSpecular;\n#endif\ngl_FragColor = gl_FragColor * totalLight;",
        color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
        color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",
        color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\nvColor = color;\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\ngl_Position  = ( boneGlobalMatrices[ int( skinIndex.x ) ] * skinVertexA ) * skinWeight.x;\ngl_Position += ( boneGlobalMatrices[ int( skinIndex.y ) ] * skinVertexB ) * skinWeight.y;\ngl_Position  = projectionMatrix * viewMatrix * objectMatrix * gl_Position;\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\nuniform float morphTargetInfluences[ 8 ];\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0, 0.0, 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\nmorphed += position;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );\n#endif",
        default_vertex: "#ifndef USE_MORPHTARGETS\n#ifndef USE_SKINNING\ngl_Position = projectionMatrix * mvPosition;\n#endif\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform float shadowDarkness;\nuniform float shadowBias;\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",
        shadowmap_fragment: "#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_SOFT\nconst float xPixelOffset = 1.0 / SHADOWMAP_WIDTH;\nconst float yPixelOffset = 1.0 / SHADOWMAP_HEIGHT;\n#endif\nvec4 shadowColor = vec4( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nif ( shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0 ) {\n#ifdef SHADOWMAP_SOFT\nfloat shadow = 0.0;\nfor ( float y = -1.25; y <= 1.25; y += 1.25 )\nfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\nvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < ( shadowCoord.z + shadowBias ) )\nshadow += 1.0;\n}\nshadow /= 9.0;\nshadowColor = shadowColor * vec4( vec3( ( 1.0 - shadowDarkness * shadow ) ), 1.0 );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < ( shadowCoord.z + shadowBias ) )\nshadowColor = shadowColor * vec4( vec3( shadowDarkness ), 1.0 );\n#endif\n}\n}\ngl_FragColor = gl_FragColor * shadowColor;\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * objectMatrix * vec4( position, 1.0 );\n}\n#endif",
        alphatest_fragment: "#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif"
    };
    THREE.UniformsUtils = {
        merge: function (b) {
            var c, e, f, h = {};
            for (c = 0; c < b.length; c++)for (e in f = this.clone(b[c]), f)h[e] = f[e];
            return h
        }, clone: function (b) {
            var c, e, f, h = {};
            for (c in b)for (e in h[c] = {}, b[c])f = b[c][e], h[c][e] = f instanceof THREE.Color || f instanceof THREE.Vector2 || f instanceof THREE.Vector3 || f instanceof THREE.Vector4 || f instanceof THREE.Matrix4 || f instanceof THREE.Texture ? f.clone() : f instanceof Array ? f.slice() : f;
            return h
        }
    };
    THREE.UniformsLib = {
        common: {
            diffuse: {type: "c", value: new THREE.Color(15658734)},
            opacity: {type: "f", value: 1},
            map: {type: "t", value: 0, texture: null},
            offsetRepeat: {type: "v4", value: new THREE.Vector4(0, 0, 1, 1)},
            lightMap: {type: "t", value: 2, texture: null},
            envMap: {type: "t", value: 1, texture: null},
            useRefract: {type: "i", value: 0},
            reflectivity: {type: "f", value: 1},
            refractionRatio: {type: "f", value: 0.98},
            combine: {type: "i", value: 0},
            morphTargetInfluences: {type: "f", value: 0}
        },
        fog: {
            fogDensity: {type: "f", value: 2.5E-4}, fogNear: {
                type: "f",
                value: 1
            }, fogFar: {type: "f", value: 2E3}, fogColor: {type: "c", value: new THREE.Color(16777215)}
        },
        lights: {
            enableLighting: {type: "i", value: 1},
            ambientLightColor: {type: "fv", value: []},
            directionalLightDirection: {type: "fv", value: []},
            directionalLightColor: {type: "fv", value: []},
            pointLightColor: {type: "fv", value: []},
            pointLightPosition: {type: "fv", value: []},
            pointLightDistance: {type: "fv1", value: []}
        },
        particle: {
            psColor: {type: "c", value: new THREE.Color(15658734)},
            opacity: {type: "f", value: 1},
            size: {type: "f", value: 1},
            scale: {
                type: "f",
                value: 1
            },
            map: {type: "t", value: 0, texture: null},
            fogDensity: {type: "f", value: 2.5E-4},
            fogNear: {type: "f", value: 1},
            fogFar: {type: "f", value: 2E3},
            fogColor: {type: "c", value: new THREE.Color(16777215)}
        },
        shadowmap: {
            shadowMap: {type: "tv", value: 3, texture: []},
            shadowMatrix: {type: "m4v", value: []},
            shadowBias: {type: "f", value: 0.0039},
            shadowDarkness: {type: "f", value: 0.2}
        }
    };
    THREE.ShaderLib = {
        lensFlareVertexTexture: {
            vertexShader: "uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 UV;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
            fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D map;\nuniform float opacity;\nuniform int renderType;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * vVisibility;\ngl_FragColor = color;\n}\n}"
        },
        lensFlare: {
            vertexShader: "uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nattribute vec2 position;\nattribute vec2 UV;\nvarying vec2 vUV;\nvoid main() {\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
            fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform int renderType;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * visibility;\ngl_FragColor = color;\n}\n}"
        },
        sprite: {
            vertexShader: "uniform int useScreenCoordinates;\nuniform int affectedByDistance;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
            fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D map;\nuniform float opacity;\nvarying vec2 vUV;\nvoid main() {\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity;\ngl_FragColor = color;\n}"
        },
        shadowPost: {
            vertexShader: "uniform \tmat4 \tprojectionMatrix;\nattribute \tvec3 \tposition;\nvoid main() {\ngl_Position = projectionMatrix * vec4( position, 1.0 );\n}",
            fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform \tfloat \tdarkness;\nvoid main() {\ngl_FragColor = vec4( 0, 0, 0, darkness );\n}"
        },
        shadowVolumeDynamic: {
            uniforms: {directionalLightDirection: {type: "fv", value: []}},
            vertexShader: "uniform \tvec3 \tdirectionalLightDirection;\nvoid main() {\nvec4 pos      = objectMatrix * vec4( position, 1.0 );\nvec3 norm     = mat3( objectMatrix[ 0 ].xyz, objectMatrix[ 1 ].xyz, objectMatrix[ 2 ].xyz ) * normal;\nvec4 extruded = vec4( directionalLightDirection * 5000.0 * step( 0.0, dot( directionalLightDirection, norm ) ), 0.0 );\ngl_Position   = projectionMatrix * viewMatrix * ( pos + extruded );\n}",
            fragmentShader: "void main() {\ngl_FragColor = vec4( 1.0 );\n}"
        },
        depth: {
            uniforms: {mNear: {type: "f", value: 1}, mFar: {type: "f", value: 2E3}, opacity: {type: "f", value: 1}},
            fragmentShader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}",
            vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"
        },
        normal: {
            uniforms: {opacity: {type: "f", value: 1}},
            fragmentShader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}",
            vertexShader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}"
        },
        basic: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
            fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment,
                THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
            vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex,
                THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n")
        },
        lambert: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap]),
            fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment,
                THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, "gl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment,
                "}"].join("\n"),
            vertexShader: ["varying vec3 vLightWeighting;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex,
                THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.lights_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n")
        },
        phong: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
                ambient: {type: "c", value: new THREE.Color(328965)},
                specular: {type: "c", value: new THREE.Color(1118481)}, shininess: {type: "f", value: 30}
            }]),
            fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment,
                "void main() {\ngl_FragColor = vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.lights_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
            vertexShader: ["#define PHONG\nvarying vec3 vLightWeighting;\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex,
                THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = -mvPosition.xyz;\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormal = transformedNormal;",
                THREE.ShaderChunk.lights_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n")
        },
        particle_basic: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
            fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment,
                "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
            vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",
                THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n")
        },
        depthRGBA: {
            uniforms: {},
            fragmentShader: "vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}",
            vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex,
                "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n")
        }
    };
    THREE.WebGLRenderer = function (b) {
        function c(b, e, c) {
            var f, k, h, m = b.vertices, n = m.length, t = b.colors, p = t.length, u = b.__vertexArray, v = b.__colorArray, w = b.__sortArray, x = b.__dirtyVertices, M = b.__dirtyColors, T = b.__webglCustomAttributes, z, y;
            if (T)for (z in T)T[z].offset = 0;
            if (c.sortParticles) {
                pa.multiplySelf(c.matrixWorld);
                for (f = 0; f < n; f++)k = m[f].position, sa.copy(k), pa.multiplyVector3(sa), w[f] = [sa.z, f];
                w.sort(function (b, e) {
                    return e[0] - b[0]
                });
                for (f = 0; f < n; f++)k = m[w[f][1]].position, h = f * 3, u[h] = k.x, u[h + 1] = k.y, u[h + 2] = k.z;
                for (f = 0; f < p; f++)h = f * 3, color = t[w[f][1]], v[h] = color.r, v[h + 1] = color.g, v[h + 2] = color.b;
                if (T)for (z in T) {
                    f = T[z];
                    t = f.value.length;
                    for (h = 0; h < t; h++) {
                        index = w[h][1];
                        p = f.offset;
                        if (f.size === 1) {
                            if (f.boundTo === void 0 || f.boundTo === "vertices")f.array[p] = f.value[index]
                        } else {
                            if (f.boundTo === void 0 || f.boundTo === "vertices")y = f.value[index];
                            f.size === 2 ? (f.array[p] = y.x, f.array[p + 1] = y.y) : f.size === 3 ? f.type === "c" ? (f.array[p] = y.r, f.array[p + 1] = y.g, f.array[p + 2] = y.b) : (f.array[p] = y.x, f.array[p + 1] = y.y, f.array[p + 2] = y.z) : (f.array[p] =
                                y.x, f.array[p + 1] = y.y, f.array[p + 2] = y.z, f.array[p + 3] = y.w)
                        }
                        f.offset += f.size
                    }
                }
            } else {
                if (x)for (f = 0; f < n; f++)k = m[f].position, h = f * 3, u[h] = k.x, u[h + 1] = k.y, u[h + 2] = k.z;
                if (M)for (f = 0; f < p; f++)color = t[f], h = f * 3, v[h] = color.r, v[h + 1] = color.g, v[h + 2] = color.b;
                if (T)for (z in T)if (f = T[z], f.__original.needsUpdate) {
                    t = f.value.length;
                    for (h = 0; h < t; h++) {
                        p = f.offset;
                        if (f.size === 1) {
                            if (f.boundTo === void 0 || f.boundTo === "vertices")f.array[p] = f.value[h]
                        } else {
                            if (f.boundTo === void 0 || f.boundTo === "vertices")y = f.value[h];
                            f.size === 2 ? (f.array[p] =
                                y.x, f.array[p + 1] = y.y) : f.size === 3 ? f.type === "c" ? (f.array[p] = y.r, f.array[p + 1] = y.g, f.array[p + 2] = y.b) : (f.array[p] = y.x, f.array[p + 1] = y.y, f.array[p + 2] = y.z) : (f.array[p] = y.x, f.array[p + 1] = y.y, f.array[p + 2] = y.z, f.array[p + 3] = y.w)
                        }
                        f.offset += f.size
                    }
                }
            }
            if (x || c.sortParticles)o.bindBuffer(o.ARRAY_BUFFER, b.__webglVertexBuffer), o.bufferData(o.ARRAY_BUFFER, u, e);
            if (M || c.sortParticles)o.bindBuffer(o.ARRAY_BUFFER, b.__webglColorBuffer), o.bufferData(o.ARRAY_BUFFER, v, e);
            if (T)for (z in T)if (f = T[z], f.__original.needsUpdate || c.sortParticles)o.bindBuffer(o.ARRAY_BUFFER,
                f.buffer), o.bufferData(o.ARRAY_BUFFER, f.array, e)
        }

        function e(b, e, c, f, h) {
            f.program || P.initMaterial(f, e, c, h);
            if (f.morphTargets && !h.__webglMorphTargetInfluences) {
                h.__webglMorphTargetInfluences = new Float32Array(P.maxMorphTargets);
                for (var k = 0, m = P.maxMorphTargets; k < m; k++)h.__webglMorphTargetInfluences[k] = 0
            }
            var k = f.program, m = k.uniforms, n = f.uniforms;
            k != na && (o.useProgram(k), na = k);
            o.uniformMatrix4fv(m.projectionMatrix, !1, va);
            if (c && (f instanceof THREE.MeshBasicMaterial || f instanceof THREE.MeshLambertMaterial ||
                f instanceof THREE.MeshPhongMaterial || f instanceof THREE.LineBasicMaterial || f instanceof THREE.ParticleBasicMaterial || f.fog))if (n.fogColor.value = c.color, c instanceof THREE.Fog)n.fogNear.value = c.near, n.fogFar.value = c.far; else if (c instanceof THREE.FogExp2)n.fogDensity.value = c.density;
            if (f instanceof THREE.MeshPhongMaterial || f instanceof THREE.MeshLambertMaterial || f.lights) {
                var p, t, u, v = 0, w = 0, x = 0, M, T, z, y = Ca, B = y.directional.colors, Z = y.directional.positions, D = y.point.colors, G = y.point.positions, H = y.point.distances,
                    E = 0, V = 0, c = t = z = 0;
                for (p = e.length; c < p; c++)if (t = e[c], u = t.color, M = t.position, T = t.intensity, z = t.distance, t instanceof THREE.AmbientLight)v += u.r, w += u.g, x += u.b; else if (t instanceof THREE.DirectionalLight)z = E * 3, B[z] = u.r * T, B[z + 1] = u.g * T, B[z + 2] = u.b * T, Z[z] = M.x, Z[z + 1] = M.y, Z[z + 2] = M.z, E += 1; else if (t instanceof THREE.SpotLight)z = E * 3, B[z] = u.r * T, B[z + 1] = u.g * T, B[z + 2] = u.b * T, u = 1 / M.length(), Z[z] = M.x * u, Z[z + 1] = M.y * u, Z[z + 2] = M.z * u, E += 1; else if (t instanceof THREE.PointLight)t = V * 3, D[t] = u.r * T, D[t + 1] = u.g * T, D[t + 2] = u.b * T, G[t] = M.x,
                    G[t + 1] = M.y, G[t + 2] = M.z, H[V] = z, V += 1;
                for (c = E * 3; c < B.length; c++)B[c] = 0;
                for (c = V * 3; c < D.length; c++)D[c] = 0;
                y.point.length = V;
                y.directional.length = E;
                y.ambient[0] = v;
                y.ambient[1] = w;
                y.ambient[2] = x;
                e = Ca;
                n.enableLighting.value = e.directional.length + e.point.length;
                n.ambientLightColor.value = e.ambient;
                n.directionalLightColor.value = e.directional.colors;
                n.directionalLightDirection.value = e.directional.positions;
                n.pointLightColor.value = e.point.colors;
                n.pointLightPosition.value = e.point.positions;
                n.pointLightDistance.value =
                    e.point.distances
            }
            if (f instanceof THREE.MeshBasicMaterial || f instanceof THREE.MeshLambertMaterial || f instanceof THREE.MeshPhongMaterial)n.diffuse.value = f.color, n.opacity.value = f.opacity, (n.map.texture = f.map) && n.offsetRepeat.value.set(f.map.offset.x, f.map.offset.y, f.map.repeat.x, f.map.repeat.y), n.lightMap.texture = f.lightMap, n.envMap.texture = f.envMap, n.reflectivity.value = f.reflectivity, n.refractionRatio.value = f.refractionRatio, n.combine.value = f.combine, n.useRefract.value = f.envMap && f.envMap.mapping instanceof
            THREE.CubeRefractionMapping;
            if (f instanceof THREE.LineBasicMaterial)n.diffuse.value = f.color, n.opacity.value = f.opacity; else if (f instanceof THREE.ParticleBasicMaterial)n.psColor.value = f.color, n.opacity.value = f.opacity, n.size.value = f.size, n.scale.value = wa.height / 2, n.map.texture = f.map; else if (f instanceof THREE.MeshPhongMaterial)n.ambient.value = f.ambient, n.specular.value = f.specular, n.shininess.value = f.shininess; else if (f instanceof THREE.MeshDepthMaterial)n.mNear.value = b.near, n.mFar.value = b.far, n.opacity.value =
                f.opacity; else if (f instanceof THREE.MeshNormalMaterial)n.opacity.value = f.opacity;
            if (h.receiveShadow && !f._shadowPass && n.shadowMatrix) {
                for (e = 0; e < xa.length; e++)n.shadowMatrix.value[e] = xa[e], n.shadowMap.texture[e] = P.shadowMap[e];
                n.shadowDarkness.value = P.shadowMapDarkness;
                n.shadowBias.value = P.shadowMapBias
            }
            for (var ka in n)if (p = k.uniforms[ka])if (c = n[ka], v = c.type, e = c.value, v == "i")o.uniform1i(p, e); else if (v == "f")o.uniform1f(p, e); else if (v == "v2")o.uniform2f(p, e.x, e.y); else if (v == "v3")o.uniform3f(p, e.x, e.y,
                e.z); else if (v == "v4")o.uniform4f(p, e.x, e.y, e.z, e.w); else if (v == "c")o.uniform3f(p, e.r, e.g, e.b); else if (v == "fv1")o.uniform1fv(p, e); else if (v == "fv")o.uniform3fv(p, e); else if (v == "v3v") {
                if (!c._array)c._array = new Float32Array(3 * e.length);
                v = 0;
                for (w = e.length; v < w; v++)x = v * 3, c._array[x] = e[v].x, c._array[x + 1] = e[v].y, c._array[x + 2] = e[v].z;
                o.uniform3fv(p, c._array)
            } else if (v == "m4") {
                if (!c._array)c._array = new Float32Array(16);
                e.flattenToArray(c._array);
                o.uniformMatrix4fv(p, !1, c._array)
            } else if (v == "m4v") {
                if (!c._array)c._array =
                    new Float32Array(16 * e.length);
                v = 0;
                for (w = e.length; v < w; v++)e[v].flattenToArrayOffset(c._array, v * 16);
                o.uniformMatrix4fv(p, !1, c._array)
            } else if (v == "t") {
                if (o.uniform1i(p, e), p = c.texture)if (p.image instanceof Array && p.image.length == 6) {
                    if (c = p, c.image.length == 6)if (c.needsUpdate) {
                        if (!c.image.__webglTextureCube)c.image.__webglTextureCube = o.createTexture();
                        o.activeTexture(o.TEXTURE0 + e);
                        o.bindTexture(o.TEXTURE_CUBE_MAP, c.image.__webglTextureCube);
                        for (e = 0; e < 6; e++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0,
                            o.RGBA, o.RGBA, o.UNSIGNED_BYTE, c.image[e]);
                        I(o.TEXTURE_CUBE_MAP, c, c.image[0]);
                        c.needsUpdate = !1
                    } else o.activeTexture(o.TEXTURE0 + e), o.bindTexture(o.TEXTURE_CUBE_MAP, c.image.__webglTextureCube)
                } else p instanceof THREE.WebGLRenderTargetCube ? (c = p, o.activeTexture(o.TEXTURE0 + e), o.bindTexture(o.TEXTURE_CUBE_MAP, c.__webglTexture)) : C(p, e)
            } else if (v == "tv") {
                if (!c._array) {
                    c._array = [];
                    v = 0;
                    for (w = c.texture.length; v < w; v++)c._array[v] = e + v
                }
                o.uniform1iv(p, c._array);
                v = 0;
                for (w = c.texture.length; v < w; v++)(p = c.texture[v]) &&
                C(p, c._array[v])
            }
            o.uniformMatrix4fv(m.modelViewMatrix, !1, h._modelViewMatrixArray);
            m.normalMatrix && o.uniformMatrix3fv(m.normalMatrix, !1, h._normalMatrixArray);
            (f instanceof THREE.MeshShaderMaterial || f instanceof THREE.MeshPhongMaterial || f.envMap) && m.cameraPosition !== null && o.uniform3f(m.cameraPosition, b.position.x, b.position.y, b.position.z);
            (f instanceof THREE.MeshShaderMaterial || f.envMap || f.skinning || h.receiveShadow) && m.objectMatrix !== null && o.uniformMatrix4fv(m.objectMatrix, !1, h._objectMatrixArray);
            (f instanceof THREE.MeshPhongMaterial || f instanceof THREE.MeshLambertMaterial || f instanceof THREE.MeshShaderMaterial || f.skinning) && m.viewMatrix !== null && o.uniformMatrix4fv(m.viewMatrix, !1, ra);
            f.skinning && (o.uniformMatrix4fv(m.cameraInverseMatrix, !1, ra), o.uniformMatrix4fv(m.boneGlobalMatrices, !1, h.boneMatrices));
            return k
        }

        function f(b, c, f, h, k, m) {
            if (h.opacity != 0) {
                var n, b = e(b, c, f, h, m).attributes;
                if (!h.morphTargets && b.position >= 0)o.bindBuffer(o.ARRAY_BUFFER, k.__webglVertexBuffer), o.vertexAttribPointer(b.position,
                    3, o.FLOAT, !1, 0, 0); else if (m.morphTargetBase) {
                    c = h.program.attributes;
                    m.morphTargetBase !== -1 ? (o.bindBuffer(o.ARRAY_BUFFER, k.__webglMorphTargetsBuffers[m.morphTargetBase]), o.vertexAttribPointer(c.position, 3, o.FLOAT, !1, 0, 0)) : c.position >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, k.__webglVertexBuffer), o.vertexAttribPointer(c.position, 3, o.FLOAT, !1, 0, 0));
                    if (m.morphTargetForcedOrder.length)for (var f = 0, p = m.morphTargetForcedOrder, t = m.morphTargetInfluences; f < h.numSupportedMorphTargets && f < p.length;)o.bindBuffer(o.ARRAY_BUFFER,
                        k.__webglMorphTargetsBuffers[p[f]]), o.vertexAttribPointer(c["morphTarget" + f], 3, o.FLOAT, !1, 0, 0), m.__webglMorphTargetInfluences[f] = t[p[f]], f++; else {
                        var p = [], u = -1, v = 0, t = m.morphTargetInfluences, w, x = t.length, f = 0;
                        for (m.morphTargetBase !== -1 && (p[m.morphTargetBase] = !0); f < h.numSupportedMorphTargets;) {
                            for (w = 0; w < x; w++)!p[w] && t[w] > u && (v = w, u = t[v]);
                            o.bindBuffer(o.ARRAY_BUFFER, k.__webglMorphTargetsBuffers[v]);
                            o.vertexAttribPointer(c["morphTarget" + f], 3, o.FLOAT, !1, 0, 0);
                            m.__webglMorphTargetInfluences[f] = u;
                            p[v] = 1;
                            u = -1;
                            f++
                        }
                    }
                    h.program.uniforms.morphTargetInfluences !== null && o.uniform1fv(h.program.uniforms.morphTargetInfluences, m.__webglMorphTargetInfluences)
                }
                if (k.__webglCustomAttributes)for (n in k.__webglCustomAttributes)b[n] >= 0 && (c = k.__webglCustomAttributes[n], o.bindBuffer(o.ARRAY_BUFFER, c.buffer), o.vertexAttribPointer(b[n], c.size, o.FLOAT, !1, 0, 0));
                b.color >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, k.__webglColorBuffer), o.vertexAttribPointer(b.color, 3, o.FLOAT, !1, 0, 0));
                b.normal >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, k.__webglNormalBuffer),
                    o.vertexAttribPointer(b.normal, 3, o.FLOAT, !1, 0, 0));
                b.tangent >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, k.__webglTangentBuffer), o.vertexAttribPointer(b.tangent, 4, o.FLOAT, !1, 0, 0));
                b.uv >= 0 && (k.__webglUVBuffer ? (o.bindBuffer(o.ARRAY_BUFFER, k.__webglUVBuffer), o.vertexAttribPointer(b.uv, 2, o.FLOAT, !1, 0, 0), o.enableVertexAttribArray(b.uv)) : o.disableVertexAttribArray(b.uv));
                b.uv2 >= 0 && (k.__webglUV2Buffer ? (o.bindBuffer(o.ARRAY_BUFFER, k.__webglUV2Buffer), o.vertexAttribPointer(b.uv2, 2, o.FLOAT, !1, 0, 0), o.enableVertexAttribArray(b.uv2)) :
                    o.disableVertexAttribArray(b.uv2));
                h.skinning && b.skinVertexA >= 0 && b.skinVertexB >= 0 && b.skinIndex >= 0 && b.skinWeight >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, k.__webglSkinVertexABuffer), o.vertexAttribPointer(b.skinVertexA, 4, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, k.__webglSkinVertexBBuffer), o.vertexAttribPointer(b.skinVertexB, 4, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, k.__webglSkinIndicesBuffer), o.vertexAttribPointer(b.skinIndex, 4, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, k.__webglSkinWeightsBuffer),
                    o.vertexAttribPointer(b.skinWeight, 4, o.FLOAT, !1, 0, 0));
                m instanceof THREE.Mesh ? (h.wireframe ? (o.lineWidth(h.wireframeLinewidth), o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, k.__webglLineBuffer), o.drawElements(o.LINES, k.__webglLineCount, o.UNSIGNED_SHORT, 0)) : (o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, k.__webglFaceBuffer), o.drawElements(o.TRIANGLES, k.__webglFaceCount, o.UNSIGNED_SHORT, 0)), P.data.vertices += k.__webglFaceCount, P.data.faces += k.__webglFaceCount / 3, P.data.drawCalls++) : m instanceof THREE.Line ? (m = m.type == THREE.LineStrip ?
                    o.LINE_STRIP : o.LINES, o.lineWidth(h.linewidth), o.drawArrays(m, 0, k.__webglLineCount), P.data.drawCalls++) : m instanceof THREE.ParticleSystem ? (o.drawArrays(o.POINTS, 0, k.__webglParticleCount), P.data.drawCalls++) : m instanceof THREE.Ribbon && (o.drawArrays(o.TRIANGLE_STRIP, 0, k.__webglVertexCount), P.data.drawCalls++)
            }
        }

        function h(b, e, c) {
            if (!b.__webglVertexBuffer)b.__webglVertexBuffer = o.createBuffer();
            if (!b.__webglNormalBuffer)b.__webglNormalBuffer = o.createBuffer();
            b.hasPos && (o.bindBuffer(o.ARRAY_BUFFER, b.__webglVertexBuffer),
                o.bufferData(o.ARRAY_BUFFER, b.positionArray, o.DYNAMIC_DRAW), o.enableVertexAttribArray(e.attributes.position), o.vertexAttribPointer(e.attributes.position, 3, o.FLOAT, !1, 0, 0));
            if (b.hasNormal) {
                o.bindBuffer(o.ARRAY_BUFFER, b.__webglNormalBuffer);
                if (c == THREE.FlatShading) {
                    var f, k, h, m, n, p, t, u, v, w, x = b.count * 3;
                    for (w = 0; w < x; w += 9)c = b.normalArray, f = c[w], k = c[w + 1], h = c[w + 2], m = c[w + 3], p = c[w + 4], u = c[w + 5], n = c[w + 6], t = c[w + 7], v = c[w + 8], f = (f + m + n) / 3, k = (k + p + t) / 3, h = (h + u + v) / 3, c[w] = f, c[w + 1] = k, c[w + 2] = h, c[w + 3] = f, c[w + 4] = k, c[w + 5] = h, c[w +
                    6] = f, c[w + 7] = k, c[w + 8] = h
                }
                o.bufferData(o.ARRAY_BUFFER, b.normalArray, o.DYNAMIC_DRAW);
                o.enableVertexAttribArray(e.attributes.normal);
                o.vertexAttribPointer(e.attributes.normal, 3, o.FLOAT, !1, 0, 0)
            }
            o.drawArrays(o.TRIANGLES, 0, b.count);
            b.count = 0
        }

        function m(b) {
            if (aa != b.doubleSided)b.doubleSided ? o.disable(o.CULL_FACE) : o.enable(o.CULL_FACE), aa = b.doubleSided;
            if (ma != b.flipSided)b.flipSided ? o.frontFace(o.CW) : o.frontFace(o.CCW), ma = b.flipSided
        }

        function k(b) {
            ga != b && (b ? o.enable(o.DEPTH_TEST) : o.disable(o.DEPTH_TEST), ga =
                b)
        }

        function n(b, e, c) {
            da != b && (b ? o.enable(o.POLYGON_OFFSET_FILL) : o.disable(o.POLYGON_OFFSET_FILL), da = b);
            if (b && ($ != e || ca != c))o.polygonOffset(e, c), $ = e, ca = c
        }

        function u(b) {
            V[0].set(b.n41 - b.n11, b.n42 - b.n12, b.n43 - b.n13, b.n44 - b.n14);
            V[1].set(b.n41 + b.n11, b.n42 + b.n12, b.n43 + b.n13, b.n44 + b.n14);
            V[2].set(b.n41 + b.n21, b.n42 + b.n22, b.n43 + b.n23, b.n44 + b.n24);
            V[3].set(b.n41 - b.n21, b.n42 - b.n22, b.n43 - b.n23, b.n44 - b.n24);
            V[4].set(b.n41 - b.n31, b.n42 - b.n32, b.n43 - b.n33, b.n44 - b.n34);
            V[5].set(b.n41 + b.n31, b.n42 + b.n32, b.n43 + b.n33,
                b.n44 + b.n34);
            for (var e, b = 0; b < 6; b++)e = V[b], e.divideScalar(Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z))
        }

        function p(b) {
            for (var e = b.matrixWorld, c = -b.geometry.boundingSphere.radius * Math.max(b.scale.x, Math.max(b.scale.y, b.scale.z)), f = 0; f < 6; f++)if (b = V[f].x * e.n14 + V[f].y * e.n24 + V[f].z * e.n34 + V[f].w, b <= c)return !1;
            return !0
        }

        function v(b, e) {
            b.list[b.count] = e;
            b.count += 1
        }

        function t(b) {
            var e, c, f = b.object, k = b.opaque, h = b.transparent;
            h.count = 0;
            b = k.count = 0;
            for (e = f.materials.length; b < e; b++)c = f.materials[b], c.transparent ? v(h, c) :
                v(k, c)
        }

        function x(b) {
            var e, c, f, k, h = b.object, m = b.buffer, n = b.opaque, o = b.transparent;
            o.count = 0;
            b = n.count = 0;
            for (f = h.materials.length; b < f; b++)if (e = h.materials[b], e instanceof THREE.MeshFaceMaterial) {
                e = 0;
                for (c = m.materials.length; e < c; e++)(k = m.materials[e]) && (k.transparent ? v(o, k) : v(n, k))
            } else(k = e) && (k.transparent ? v(o, k) : v(n, k))
        }

        function w(b, e) {
            return e.z - b.z
        }

        function z(b, c) {
            var n, t, v, w = 0, x, z, y, D, G = b.lights;
            T || (T = new THREE.Camera(P.shadowCameraFov, c.aspect, P.shadowCameraNear, P.shadowCameraFar));
            n = 0;
            for (t =
                     G.length; n < t; n++)if (v = G[n], v instanceof THREE.SpotLight && v.castShadow) {
                P.shadowMap[w] || (P.shadowMap[w] = new THREE.WebGLRenderTarget(P.shadowMapWidth, P.shadowMapHeight, {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    format: THREE.RGBAFormat
                }));
                xa[w] || (xa[w] = new THREE.Matrix4);
                x = P.shadowMap[w];
                z = xa[w];
                T.position.copy(v.position);
                T.target.position.copy(v.target.position);
                T.update(void 0, !0);
                b.update(void 0, !1, T);
                z.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
                z.multiplySelf(T.projectionMatrix);
                z.multiplySelf(T.matrixWorldInverse);
                T.matrixWorldInverse.flattenToArray(ra);
                T.projectionMatrix.flattenToArray(va);
                pa.multiply(T.projectionMatrix, T.matrixWorldInverse);
                u(pa);
                P.initWebGLObjects(b);
                K(x);
                o.clearColor(1, 1, 1, 1);
                P.clear();
                o.clearColor(M.r, M.g, M.b, Z);
                z = b.__webglObjects.length;
                v = b.__webglObjectsImmediate.length;
                for (x = 0; x < z; x++)y = b.__webglObjects[x], D = y.object, D.visible && D.castShadow ? !(D instanceof THREE.Mesh) || !D.frustumCulled || p(D) ? (D.matrixWorld.flattenToArray(D._objectMatrixArray), B(D,
                    T, !1), y.render = !0) : y.render = !1 : y.render = !1;
                k(!0);
                F(THREE.NormalBlending);
                for (x = 0; x < z; x++)if (y = b.__webglObjects[x], y.render)D = y.object, buffer = y.buffer, m(D), y = D.customDepthMaterial ? D.customDepthMaterial : D.geometry.morphTargets.length ? ya : ka, f(T, G, null, y, buffer, D);
                for (x = 0; x < v; x++)y = b.__webglObjectsImmediate[x], D = y.object, D.visible && D.castShadow && (D.matrixAutoUpdate && D.matrixWorld.flattenToArray(D._objectMatrixArray), B(D, T, !1), m(D), program = e(T, G, null, ka, D), D.render(function (b) {
                    h(b, program, ka.shading)
                }));
                w++
            }
        }

        function y(b, e) {
            var c, f, k;
            c = Y.attributes;
            var h = Y.uniforms, m = qa / ea, n, p = [], t = ea * 0.5, u = qa * 0.5, v = !0;
            o.useProgram(Y.program);
            na = Y.program;
            ga = fa = -1;
            Ga || (o.enableVertexAttribArray(Y.attributes.position), o.enableVertexAttribArray(Y.attributes.uv), Ga = !0);
            o.disable(o.CULL_FACE);
            o.enable(o.BLEND);
            o.depthMask(!0);
            o.bindBuffer(o.ARRAY_BUFFER, Y.vertexBuffer);
            o.vertexAttribPointer(c.position, 2, o.FLOAT, !1, 16, 0);
            o.vertexAttribPointer(c.uv, 2, o.FLOAT, !1, 16, 8);
            o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, Y.elementBuffer);
            o.uniformMatrix4fv(h.projectionMatrix, !1, va);
            o.activeTexture(o.TEXTURE0);
            o.uniform1i(h.map, 0);
            c = 0;
            for (f = b.__webglSprites.length; c < f; c++)k = b.__webglSprites[c], k.useScreenCoordinates ? k.z = -k.position.z : (k._modelViewMatrix.multiplyToArray(e.matrixWorldInverse, k.matrixWorld, k._modelViewMatrixArray), k.z = -k._modelViewMatrix.n34);
            b.__webglSprites.sort(w);
            c = 0;
            for (f = b.__webglSprites.length; c < f; c++)k = b.__webglSprites[c], k.material === void 0 && k.map && k.map.image && k.map.image.width && (k.useScreenCoordinates ? (o.uniform1i(h.useScreenCoordinates,
                1), o.uniform3f(h.screenPosition, (k.position.x - t) / t, (u - k.position.y) / u, Math.max(0, Math.min(1, k.position.z)))) : (o.uniform1i(h.useScreenCoordinates, 0), o.uniform1i(h.affectedByDistance, k.affectedByDistance ? 1 : 0), o.uniformMatrix4fv(h.modelViewMatrix, !1, k._modelViewMatrixArray)), n = k.map.image.width / (k.scaleByViewport ? qa : 1), p[0] = n * m * k.scale.x, p[1] = n * k.scale.y, o.uniform2f(h.uvScale, k.uvScale.x, k.uvScale.y), o.uniform2f(h.uvOffset, k.uvOffset.x, k.uvOffset.y), o.uniform2f(h.alignment, k.alignment.x, k.alignment.y),
                o.uniform1f(h.opacity, k.opacity), o.uniform1f(h.rotation, k.rotation), o.uniform2fv(h.scale, p), k.mergeWith3D && !v ? (o.enable(o.DEPTH_TEST), v = !0) : !k.mergeWith3D && v && (o.disable(o.DEPTH_TEST), v = !1), F(k.blending), C(k.map, 0), o.drawElements(o.TRIANGLES, 6, o.UNSIGNED_SHORT, 0));
            o.enable(o.CULL_FACE);
            o.enable(o.DEPTH_TEST);
            o.depthMask(ia)
        }

        function B(b, e, c) {
            b._modelViewMatrix.multiplyToArray(e.matrixWorldInverse, b.matrixWorld, b._modelViewMatrixArray);
            c && THREE.Matrix4.makeInvert3x3(b._modelViewMatrix).transposeIntoArray(b._normalMatrixArray)
        }

        function D(b) {
            var e, c, f, k;
            k = b.__materials;
            b = 0;
            for (c = k.length; b < c; b++)if (f = k[b], f.attributes)for (e in f.attributes)if (f.attributes[e].needsUpdate)return !0;
            return !1
        }

        function G(b) {
            var e, c, f, k;
            k = b.__materials;
            b = 0;
            for (c = k.length; b < c; b++)if (f = k[b], f.attributes)for (e in f.attributes)f.attributes[e].needsUpdate = !1
        }

        function H(b, e) {
            var c;
            for (c = b.length - 1; c >= 0; c--)b[c].object == e && b.splice(c, 1)
        }

        function E(b) {
            function e(b) {
                var k = [];
                c = 0;
                for (f = b.length; c < f; c++)b[c] == void 0 ? k.push("undefined") : k.push(b[c].id);
                return k.join("_")
            }

            var c, f, k, h, m, n, o, p, t = {}, u = b.morphTargets !== void 0 ? b.morphTargets.length : 0;
            b.geometryGroups = {};
            k = 0;
            for (h = b.faces.length; k < h; k++)m = b.faces[k], n = m.materials, o = e(n), t[o] == void 0 && (t[o] = {
                hash: o,
                counter: 0
            }), p = t[o].hash + "_" + t[o].counter, b.geometryGroups[p] == void 0 && (b.geometryGroups[p] = {
                faces: [],
                materials: n,
                vertices: 0,
                numMorphTargets: u
            }), m = m instanceof THREE.Face3 ? 3 : 4, b.geometryGroups[p].vertices + m > 65535 && (t[o].counter += 1, p = t[o].hash + "_" + t[o].counter, b.geometryGroups[p] == void 0 && (b.geometryGroups[p] = {
                faces: [],
                materials: n, vertices: 0, numMorphTargets: u
            })), b.geometryGroups[p].faces.push(k), b.geometryGroups[p].vertices += m;
            b.geometryGroupsList = [];
            for (var v in b.geometryGroups)b.geometryGroupsList.push(b.geometryGroups[v])
        }

        function N(b, e, c) {
            b.push({buffer: e, object: c, opaque: {list: [], count: 0}, transparent: {list: [], count: 0}})
        }

        function F(b) {
            if (b != fa) {
                switch (b) {
                    case THREE.AdditiveBlending:
                        o.blendEquation(o.FUNC_ADD);
                        o.blendFunc(o.SRC_ALPHA, o.ONE);
                        break;
                    case THREE.SubtractiveBlending:
                        o.blendEquation(o.FUNC_ADD);
                        o.blendFunc(o.ZERO,
                            o.ONE_MINUS_SRC_COLOR);
                        break;
                    case THREE.MultiplyBlending:
                        o.blendEquation(o.FUNC_ADD);
                        o.blendFunc(o.ZERO, o.SRC_COLOR);
                        break;
                    default:
                        o.blendEquationSeparate(o.FUNC_ADD, o.FUNC_ADD), o.blendFuncSeparate(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA, o.ONE, o.ONE_MINUS_SRC_ALPHA)
                }
                fa = b
            }
        }

        function I(b, e, c) {
            (c.width & c.width - 1) == 0 && (c.height & c.height - 1) == 0 ? (o.texParameteri(b, o.TEXTURE_WRAP_S, S(e.wrapS)), o.texParameteri(b, o.TEXTURE_WRAP_T, S(e.wrapT)), o.texParameteri(b, o.TEXTURE_MAG_FILTER, S(e.magFilter)), o.texParameteri(b,
                o.TEXTURE_MIN_FILTER, S(e.minFilter)), o.generateMipmap(b)) : (o.texParameteri(b, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(b, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE), o.texParameteri(b, o.TEXTURE_MAG_FILTER, O(e.magFilter)), o.texParameteri(b, o.TEXTURE_MIN_FILTER, O(e.minFilter)))
        }

        function C(b, e) {
            if (b.needsUpdate) {
                if (!b.__webglInit)b.__webglInit = !0, b.__webglTexture = o.createTexture();
                o.activeTexture(o.TEXTURE0 + e);
                o.bindTexture(o.TEXTURE_2D, b.__webglTexture);
                b instanceof THREE.DataTexture ? o.texImage2D(o.TEXTURE_2D,
                    0, S(b.format), b.image.width, b.image.height, 0, S(b.format), o.UNSIGNED_BYTE, b.image.data) : o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, b.image);
                I(o.TEXTURE_2D, b, b.image);
                b.needsUpdate = !1
            } else o.activeTexture(o.TEXTURE0 + e), o.bindTexture(o.TEXTURE_2D, b.__webglTexture)
        }

        function K(b) {
            var e = b instanceof THREE.WebGLRenderTargetCube;
            if (b && !b.__webglFramebuffer) {
                if (b.depthBuffer === void 0)b.depthBuffer = !0;
                if (b.stencilBuffer === void 0)b.stencilBuffer = !0;
                b.__webglRenderbuffer = o.createRenderbuffer();
                b.__webglTexture = o.createTexture();
                if (e) {
                    o.bindTexture(o.TEXTURE_CUBE_MAP, b.__webglTexture);
                    I(o.TEXTURE_CUBE_MAP, b, b);
                    b.__webglFramebuffer = [];
                    for (var c = 0; c < 6; c++)b.__webglFramebuffer[c] = o.createFramebuffer(), o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X + c, 0, S(b.format), b.width, b.height, 0, S(b.format), S(b.type), null)
                } else b.__webglFramebuffer = o.createFramebuffer(), o.bindTexture(o.TEXTURE_2D, b.__webglTexture), I(o.TEXTURE_2D, b, b), o.texImage2D(o.TEXTURE_2D, 0, S(b.format), b.width, b.height, 0, S(b.format), S(b.type),
                    null);
                o.bindRenderbuffer(o.RENDERBUFFER, b.__webglRenderbuffer);
                if (e)for (c = 0; c < 6; ++c)o.bindFramebuffer(o.FRAMEBUFFER, b.__webglFramebuffer[c]), o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_CUBE_MAP_POSITIVE_X + c, b.__webglTexture, 0); else o.bindFramebuffer(o.FRAMEBUFFER, b.__webglFramebuffer), o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, b.__webglTexture, 0);
                b.depthBuffer && !b.stencilBuffer ? (o.renderbufferStorage(o.RENDERBUFFER, o.DEPTH_COMPONENT16, b.width, b.height),
                    o.framebufferRenderbuffer(o.FRAMEBUFFER, o.DEPTH_ATTACHMENT, o.RENDERBUFFER, b.__webglRenderbuffer)) : b.depthBuffer && b.stencilBuffer ? (o.renderbufferStorage(o.RENDERBUFFER, o.DEPTH_STENCIL, b.width, b.height), o.framebufferRenderbuffer(o.FRAMEBUFFER, o.DEPTH_STENCIL_ATTACHMENT, o.RENDERBUFFER, b.__webglRenderbuffer)) : o.renderbufferStorage(o.RENDERBUFFER, o.RGBA4, b.width, b.height);
                e ? o.bindTexture(o.TEXTURE_CUBE_MAP, null) : o.bindTexture(o.TEXTURE_2D, null);
                o.bindRenderbuffer(o.RENDERBUFFER, null);
                o.bindFramebuffer(o.FRAMEBUFFER,
                    null)
            }
            var f, k;
            b ? (e = e ? b.__webglFramebuffer[b.activeCubeFace] : b.__webglFramebuffer, c = b.width, b = b.height, k = f = 0) : (e = null, c = ea, b = qa, f = X, k = ja);
            e != R && (o.bindFramebuffer(o.FRAMEBUFFER, e), o.viewport(f, k, c, b), R = e)
        }

        function U(b) {
            b instanceof THREE.WebGLRenderTargetCube ? (o.bindTexture(o.TEXTURE_CUBE_MAP, b.__webglTexture), o.generateMipmap(o.TEXTURE_CUBE_MAP), o.bindTexture(o.TEXTURE_CUBE_MAP, null)) : (o.bindTexture(o.TEXTURE_2D, b.__webglTexture), o.generateMipmap(o.TEXTURE_2D), o.bindTexture(o.TEXTURE_2D, null))
        }

        function L(b,
                   e) {
            var c;
            b == "fragment" ? c = o.createShader(o.FRAGMENT_SHADER) : b == "vertex" && (c = o.createShader(o.VERTEX_SHADER));
            o.shaderSource(c, e);
            o.compileShader(c);
            if (!o.getShaderParameter(c, o.COMPILE_STATUS))return console.error(o.getShaderInfoLog(c)), console.error(e), null;
            return c
        }

        function O(b) {
            switch (b) {
                case THREE.NearestFilter:
                case THREE.NearestMipMapNearestFilter:
                case THREE.NearestMipMapLinearFilter:
                    return o.NEAREST;
                default:
                    return o.LINEAR
            }
        }

        function S(b) {
            switch (b) {
                case THREE.RepeatWrapping:
                    return o.REPEAT;
                case THREE.ClampToEdgeWrapping:
                    return o.CLAMP_TO_EDGE;
                case THREE.MirroredRepeatWrapping:
                    return o.MIRRORED_REPEAT;
                case THREE.NearestFilter:
                    return o.NEAREST;
                case THREE.NearestMipMapNearestFilter:
                    return o.NEAREST_MIPMAP_NEAREST;
                case THREE.NearestMipMapLinearFilter:
                    return o.NEAREST_MIPMAP_LINEAR;
                case THREE.LinearFilter:
                    return o.LINEAR;
                case THREE.LinearMipMapNearestFilter:
                    return o.LINEAR_MIPMAP_NEAREST;
                case THREE.LinearMipMapLinearFilter:
                    return o.LINEAR_MIPMAP_LINEAR;
                case THREE.ByteType:
                    return o.BYTE;
                case THREE.UnsignedByteType:
                    return o.UNSIGNED_BYTE;
                case THREE.ShortType:
                    return o.SHORT;
                case THREE.UnsignedShortType:
                    return o.UNSIGNED_SHORT;
                case THREE.IntType:
                    return o.INT;
                case THREE.UnsignedShortType:
                    return o.UNSIGNED_INT;
                case THREE.FloatType:
                    return o.FLOAT;
                case THREE.AlphaFormat:
                    return o.ALPHA;
                case THREE.RGBFormat:
                    return o.RGB;
                case THREE.RGBAFormat:
                    return o.RGBA;
                case THREE.LuminanceFormat:
                    return o.LUMINANCE;
                case THREE.LuminanceAlphaFormat:
                    return o.LUMINANCE_ALPHA
            }
            return 0
        }

        var P = this, o, W = [], na = null, R = null, ia = !0, aa = null, ma = null, fa = null, ga = null, da = null, $ = null, ca = null, X = 0, ja = 0, ea = 0, qa =
            0, V = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4], pa = new THREE.Matrix4, va = new Float32Array(16), ra = new Float32Array(16), sa = new THREE.Vector4, Ca = {
            ambient: [0, 0, 0],
            directional: {length: 0, colors: [], positions: []},
            point: {length: 0, colors: [], positions: [], distances: []}
        }, b = b || {}, wa = b.canvas !== void 0 ? b.canvas : document.createElement("canvas"), Aa = b.stencil !== void 0 ? b.stencil : !0, za = b.preserveDrawingBuffer !== void 0 ? b.preserveDrawingBuffer : !1, Fa = b.antialias !== void 0 ? b.antialias : !1, M = b.clearColor !== void 0 ? new THREE.Color(b.clearColor) : new THREE.Color(0), Z = b.clearAlpha !== void 0 ? b.clearAlpha : 0;
        _maxLights = b.maxLights !== void 0 ? b.maxLights : 4;
        this.data = {vertices: 0, faces: 0, drawCalls: 0};
        this.maxMorphTargets = 8;
        this.domElement = wa;
        this.sortObjects = this.autoClear = !0;
        this.shadowMapBias = 0.0039;
        this.shadowMapDarkness = 0.5;
        this.shadowMapHeight = this.shadowMapWidth = 512;
        this.shadowCameraNear = 1;
        this.shadowCameraFar = 5E3;
        this.shadowCameraFov = 50;
        this.shadowMap = [];
        this.shadowMapEnabled = !1;
        this.shadowMapSoft = !0;
        var T, xa = [], b = THREE.ShaderLib.depthRGBA, ha = THREE.UniformsUtils.clone(b.uniforms), ka = new THREE.MeshShaderMaterial({
            fragmentShader: b.fragmentShader,
            vertexShader: b.vertexShader,
            uniforms: ha
        }), ya = new THREE.MeshShaderMaterial({
            fragmentShader: b.fragmentShader,
            vertexShader: b.vertexShader,
            uniforms: ha,
            morphTargets: !0
        });
        ka._shadowPass = !0;
        ya._shadowPass = !0;
        try {
            if (!(o = wa.getContext("experimental-webgl", {
                    antialias: Fa,
                    stencil: Aa,
                    preserveDrawingBuffer: za
                })))throw"Error creating WebGL context.";
            console.log(navigator.userAgent + " | " + o.getParameter(o.VERSION) + " | " + o.getParameter(o.VENDOR) + " | " + o.getParameter(o.RENDERER) + " | " + o.getParameter(o.SHADING_LANGUAGE_VERSION))
        } catch (ta) {
            console.error(ta)
        }
        o.clearColor(0, 0, 0, 1);
        o.clearDepth(1);
        o.clearStencil(0);
        o.enable(o.DEPTH_TEST);
        o.depthFunc(o.LEQUAL);
        o.frontFace(o.CCW);
        o.cullFace(o.BACK);
        o.enable(o.CULL_FACE);
        o.enable(o.BLEND);
        o.blendEquation(o.FUNC_ADD);
        o.blendFunc(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA);
        o.clearColor(M.r, M.g, M.b, Z);
        this.context =
            o;
        var oa = o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0, Y = {};
        Y.vertices = new Float32Array(16);
        Y.faces = new Uint16Array(6);
        i = 0;
        Y.vertices[i++] = -1;
        Y.vertices[i++] = -1;
        Y.vertices[i++] = 0;
        Y.vertices[i++] = 1;
        Y.vertices[i++] = 1;
        Y.vertices[i++] = -1;
        Y.vertices[i++] = 1;
        Y.vertices[i++] = 1;
        Y.vertices[i++] = 1;
        Y.vertices[i++] = 1;
        Y.vertices[i++] = 1;
        Y.vertices[i++] = 0;
        Y.vertices[i++] = -1;
        Y.vertices[i++] = 1;
        Y.vertices[i++] = 0;
        i = Y.vertices[i++] = 0;
        Y.faces[i++] = 0;
        Y.faces[i++] = 1;
        Y.faces[i++] = 2;
        Y.faces[i++] = 0;
        Y.faces[i++] = 2;
        Y.faces[i++] =
            3;
        Y.vertexBuffer = o.createBuffer();
        Y.elementBuffer = o.createBuffer();
        o.bindBuffer(o.ARRAY_BUFFER, Y.vertexBuffer);
        o.bufferData(o.ARRAY_BUFFER, Y.vertices, o.STATIC_DRAW);
        o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, Y.elementBuffer);
        o.bufferData(o.ELEMENT_ARRAY_BUFFER, Y.faces, o.STATIC_DRAW);
        Y.program = o.createProgram();
        o.attachShader(Y.program, L("fragment", THREE.ShaderLib.sprite.fragmentShader));
        o.attachShader(Y.program, L("vertex", THREE.ShaderLib.sprite.vertexShader));
        o.linkProgram(Y.program);
        Y.attributes = {};
        Y.uniforms =
        {};
        Y.attributes.position = o.getAttribLocation(Y.program, "position");
        Y.attributes.uv = o.getAttribLocation(Y.program, "uv");
        Y.uniforms.uvOffset = o.getUniformLocation(Y.program, "uvOffset");
        Y.uniforms.uvScale = o.getUniformLocation(Y.program, "uvScale");
        Y.uniforms.rotation = o.getUniformLocation(Y.program, "rotation");
        Y.uniforms.scale = o.getUniformLocation(Y.program, "scale");
        Y.uniforms.alignment = o.getUniformLocation(Y.program, "alignment");
        Y.uniforms.map = o.getUniformLocation(Y.program, "map");
        Y.uniforms.opacity = o.getUniformLocation(Y.program,
            "opacity");
        Y.uniforms.useScreenCoordinates = o.getUniformLocation(Y.program, "useScreenCoordinates");
        Y.uniforms.affectedByDistance = o.getUniformLocation(Y.program, "affectedByDistance");
        Y.uniforms.screenPosition = o.getUniformLocation(Y.program, "screenPosition");
        Y.uniforms.modelViewMatrix = o.getUniformLocation(Y.program, "modelViewMatrix");
        Y.uniforms.projectionMatrix = o.getUniformLocation(Y.program, "projectionMatrix");
        var Ga = !1;
        this.setSize = function (b, e) {
            wa.width = b;
            wa.height = e;
            this.setViewport(0, 0, wa.width,
                wa.height)
        };
        this.setViewport = function (b, e, c, f) {
            X = b;
            ja = e;
            ea = c;
            qa = f;
            o.viewport(X, ja, ea, qa)
        };
        this.setScissor = function (b, e, c, f) {
            o.scissor(b, e, c, f)
        };
        this.enableScissorTest = function (b) {
            b ? o.enable(o.SCISSOR_TEST) : o.disable(o.SCISSOR_TEST)
        };
        this.enableDepthBufferWrite = function (b) {
            ia = b;
            o.depthMask(b)
        };
        this.setClearColorHex = function (b, e) {
            M.setHex(b);
            Z = e;
            o.clearColor(M.r, M.g, M.b, Z)
        };
        this.setClearColor = function (b, e) {
            M.copy(b);
            Z = e;
            o.clearColor(M.r, M.g, M.b, Z)
        };
        this.clear = function () {
            o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT |
            o.STENCIL_BUFFER_BIT)
        };
        this.getContext = function () {
            return o
        };
        this.deallocateObject = function (b) {
            if (b.__webglInit)if (b.__webglInit = !1, delete b._modelViewMatrix, delete b._normalMatrixArray, delete b._modelViewMatrixArray, delete b._objectMatrixArray, b instanceof THREE.Mesh)for (g in b.geometry.geometryGroups) {
                var e = b.geometry.geometryGroups[g];
                o.deleteBuffer(e.__webglVertexBuffer);
                o.deleteBuffer(e.__webglNormalBuffer);
                o.deleteBuffer(e.__webglTangentBuffer);
                o.deleteBuffer(e.__webglColorBuffer);
                o.deleteBuffer(e.__webglUVBuffer);
                o.deleteBuffer(e.__webglUV2Buffer);
                o.deleteBuffer(e.__webglSkinVertexABuffer);
                o.deleteBuffer(e.__webglSkinVertexBBuffer);
                o.deleteBuffer(e.__webglSkinIndicesBuffer);
                o.deleteBuffer(e.__webglSkinWeightsBuffer);
                o.deleteBuffer(e.__webglFaceBuffer);
                o.deleteBuffer(e.__webglLineBuffer);
                if (e.numMorphTargets)for (var c = 0, f = e.numMorphTargets; c < f; c++)o.deleteBuffer(e.__webglMorphTargetsBuffers[c])
            } else if (b instanceof THREE.Ribbon)b = b.geometry, o.deleteBuffer(b.__webglVertexBuffer), o.deleteBuffer(b.__webglColorBuffer);
            else if (b instanceof THREE.Line)b = b.geometry, o.deleteBuffer(b.__webglVertexBuffer), o.deleteBuffer(b.__webglColorBuffer); else if (b instanceof THREE.ParticleSystem)b = b.geometry, o.deleteBuffer(b.__webglVertexBuffer), o.deleteBuffer(b.__webglColorBuffer)
        };
        this.deallocateTexture = function (b) {
            if (b.__webglInit)b.__webglInit = !1, o.deleteTexture(b.__webglTexture)
        };
        this.initMaterial = function (b, e, c, f) {
            var k, h, m;
            b instanceof THREE.MeshDepthMaterial ? m = "depth" : b instanceof THREE.MeshNormalMaterial ? m = "normal" : b instanceof
            THREE.MeshBasicMaterial ? m = "basic" : b instanceof THREE.MeshLambertMaterial ? m = "lambert" : b instanceof THREE.MeshPhongMaterial ? m = "phong" : b instanceof THREE.LineBasicMaterial ? m = "basic" : b instanceof THREE.ParticleBasicMaterial && (m = "particle_basic");
            if (m) {
                var n = THREE.ShaderLib[m];
                b.uniforms = THREE.UniformsUtils.clone(n.uniforms);
                b.vertexShader = n.vertexShader;
                b.fragmentShader = n.fragmentShader
            }
            var p, t, u;
            p = u = n = 0;
            for (t = e.length; p < t; p++)h = e[p], h instanceof THREE.SpotLight && u++, h instanceof THREE.DirectionalLight &&
            u++, h instanceof THREE.PointLight && n++;
            n + u <= _maxLights ? p = u : (p = Math.ceil(_maxLights * u / (n + u)), n = _maxLights - p);
            h = {directional: p, point: n};
            n = u = 0;
            for (p = e.length; n < p; n++)t = e[n], t instanceof THREE.SpotLight && t.castShadow && u++;
            var v = 50;
            if (f !== void 0 && f instanceof THREE.SkinnedMesh)v = f.bones.length;
            var w;
            a:{
                p = b.fragmentShader;
                t = b.vertexShader;
                var n = b.uniforms, e = b.attributes, c = {
                    map: !!b.map,
                    envMap: !!b.envMap,
                    lightMap: !!b.lightMap,
                    vertexColors: b.vertexColors,
                    fog: c,
                    sizeAttenuation: b.sizeAttenuation,
                    skinning: b.skinning,
                    morphTargets: b.morphTargets,
                    maxMorphTargets: this.maxMorphTargets,
                    maxDirLights: h.directional,
                    maxPointLights: h.point,
                    maxBones: v,
                    shadowMapEnabled: this.shadowMapEnabled && f.receiveShadow,
                    shadowMapSoft: this.shadowMapSoft,
                    shadowMapWidth: this.shadowMapWidth,
                    shadowMapHeight: this.shadowMapHeight,
                    maxShadows: u,
                    alphaTest: b.alphaTest
                }, x, f = [];
                m ? f.push(m) : (f.push(p), f.push(t));
                for (x in c)f.push(x), f.push(c[x]);
                m = f.join();
                x = 0;
                for (f = W.length; x < f; x++)if (W[x].code == m) {
                    w = W[x].program;
                    break a
                }
                x = o.createProgram();
                f = [oa ?
                    "#define VERTEX_TEXTURES" : "", "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_SHADOWS " + c.maxShadows, "#define MAX_BONES " + c.maxBones, c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.skinning ? "#define USE_SKINNING" : "", c.morphTargets ? "#define USE_MORPHTARGETS" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapSoft ? "#define SHADOWMAP_SOFT" : "", c.sizeAttenuation ?
                    "#define USE_SIZEATTENUATION" : "", "uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform mat4 cameraInverseMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinVertexA;\nattribute vec4 skinVertexB;\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
                h = ["#ifdef GL_ES\nprecision highp float;\n#endif", "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_SHADOWS " + c.maxShadows, c.alphaTest ? "#define ALPHATEST " + c.alphaTest : "", c.fog ? "#define USE_FOG" : "", c.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapSoft ? "#define SHADOWMAP_SOFT" :
                    "", c.shadowMapSoft ? "#define SHADOWMAP_WIDTH " + c.shadowMapWidth.toFixed(1) : "", c.shadowMapSoft ? "#define SHADOWMAP_HEIGHT " + c.shadowMapHeight.toFixed(1) : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");
                o.attachShader(x, L("fragment", h + p));
                o.attachShader(x, L("vertex", f + t));
                o.linkProgram(x);
                o.getProgramParameter(x, o.LINK_STATUS) || console.error("Could not initialise shader\nVALIDATE_STATUS: " + o.getProgramParameter(x, o.VALIDATE_STATUS) + ", gl error [" + o.getError() + "]");
                x.uniforms =
                {};
                x.attributes = {};
                var M, f = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "objectMatrix", "cameraPosition", "cameraInverseMatrix", "boneGlobalMatrices", "morphTargetInfluences"];
                for (M in n)f.push(M);
                M = f;
                f = 0;
                for (n = M.length; f < n; f++)p = M[f], x.uniforms[p] = o.getUniformLocation(x, p);
                f = ["position", "normal", "uv", "uv2", "tangent", "color", "skinVertexA", "skinVertexB", "skinIndex", "skinWeight"];
                for (M = 0; M < c.maxMorphTargets; M++)f.push("morphTarget" + M);
                for (w in e)f.push(w);
                w = f;
                M = 0;
                for (e = w.length; M < e; M++)c =
                    w[M], x.attributes[c] = o.getAttribLocation(x, c);
                W.push({program: x, code: m});
                w = x
            }
            b.program = w;
            w = b.program.attributes;
            w.position >= 0 && o.enableVertexAttribArray(w.position);
            w.color >= 0 && o.enableVertexAttribArray(w.color);
            w.normal >= 0 && o.enableVertexAttribArray(w.normal);
            w.tangent >= 0 && o.enableVertexAttribArray(w.tangent);
            b.skinning && w.skinVertexA >= 0 && w.skinVertexB >= 0 && w.skinIndex >= 0 && w.skinWeight >= 0 && (o.enableVertexAttribArray(w.skinVertexA), o.enableVertexAttribArray(w.skinVertexB), o.enableVertexAttribArray(w.skinIndex),
                o.enableVertexAttribArray(w.skinWeight));
            if (b.attributes)for (k in b.attributes)w[k] !== void 0 && w[k] >= 0 && o.enableVertexAttribArray(w[k]);
            if (b.morphTargets)for (k = b.numSupportedMorphTargets = 0; k < this.maxMorphTargets; k++)M = "morphTarget" + k, w[M] >= 0 && (o.enableVertexAttribArray(w[M]), b.numSupportedMorphTargets++)
        };
        this.clearTarget = function (b, c, e, f) {
            K(b);
            b = 0;
            c && (b |= o.COLOR_BUFFER_BIT);
            e && (b |= o.DEPTH_BUFFER_BIT);
            f && (b |= o.STENCIL_BUFFER_BIT);
            o.clear(b)
        };
        this.render = function (b, c, o, v) {
            var M, T, D, Z, G, H, E, V, ka = b.lights,
                C = b.fog;
            this.shadowMapEnabled && z(b, c);
            P.data.vertices = 0;
            P.data.faces = 0;
            P.data.drawCalls = 0;
            c.matrixAutoUpdate && c.update(void 0, !0);
            b.update(void 0, !1, c);
            c.matrixWorldInverse.flattenToArray(ra);
            c.projectionMatrix.flattenToArray(va);
            pa.multiply(c.projectionMatrix, c.matrixWorldInverse);
            u(pa);
            this.initWebGLObjects(b);
            K(o);
            (this.autoClear || v) && this.clear();
            G = b.__webglObjects.length;
            for (v = 0; v < G; v++)if (M = b.__webglObjects[v], E = M.object, E.visible)if (!(E instanceof THREE.Mesh) || !E.frustumCulled || p(E)) {
                if (E.matrixWorld.flattenToArray(E._objectMatrixArray),
                        B(E, c, !0), x(M), M.render = !0, this.sortObjects)M.object.renderDepth ? M.z = M.object.renderDepth : (sa.copy(E.position), pa.multiplyVector3(sa), M.z = sa.z)
            } else M.render = !1; else M.render = !1;
            this.sortObjects && b.__webglObjects.sort(w);
            H = b.__webglObjectsImmediate.length;
            for (v = 0; v < H; v++)M = b.__webglObjectsImmediate[v], E = M.object, E.visible && (E.matrixAutoUpdate && E.matrixWorld.flattenToArray(E._objectMatrixArray), B(E, c, !0), t(M));
            if (b.overrideMaterial) {
                k(b.overrideMaterial.depthTest);
                F(b.overrideMaterial.blending);
                for (v =
                         0; v < G; v++)if (M = b.__webglObjects[v], M.render)E = M.object, V = M.buffer, m(E), f(c, ka, C, b.overrideMaterial, V, E);
                for (v = 0; v < H; v++)M = b.__webglObjectsImmediate[v], E = M.object, E.visible && (m(E), T = e(c, ka, C, b.overrideMaterial, E), E.render(function (c) {
                    h(c, T, b.overrideMaterial.shading)
                }))
            } else {
                F(THREE.NormalBlending);
                for (v = G - 1; v >= 0; v--)if (M = b.__webglObjects[v], M.render) {
                    E = M.object;
                    V = M.buffer;
                    D = M.opaque;
                    m(E);
                    for (M = 0; M < D.count; M++)Z = D.list[M], k(Z.depthTest), n(Z.polygonOffset, Z.polygonOffsetFactor, Z.polygonOffsetUnits),
                        f(c, ka, C, Z, V, E)
                }
                for (v = 0; v < H; v++)if (M = b.__webglObjectsImmediate[v], E = M.object, E.visible) {
                    D = M.opaque;
                    m(E);
                    for (M = 0; M < D.count; M++)Z = D.list[M], k(Z.depthTest), n(Z.polygonOffset, Z.polygonOffsetFactor, Z.polygonOffsetUnits), T = e(c, ka, C, Z, E), E.render(function (b) {
                        h(b, T, Z.shading)
                    })
                }
                for (v = 0; v < G; v++)if (M = b.__webglObjects[v], M.render) {
                    E = M.object;
                    V = M.buffer;
                    D = M.transparent;
                    m(E);
                    for (M = 0; M < D.count; M++)Z = D.list[M], F(Z.blending), k(Z.depthTest), n(Z.polygonOffset, Z.polygonOffsetFactor, Z.polygonOffsetUnits), f(c, ka, C, Z,
                        V, E)
                }
                for (v = 0; v < H; v++)if (M = b.__webglObjectsImmediate[v], E = M.object, E.visible) {
                    D = M.transparent;
                    m(E);
                    for (M = 0; M < D.count; M++)Z = D.list[M], F(Z.blending), k(Z.depthTest), n(Z.polygonOffset, Z.polygonOffsetFactor, Z.polygonOffsetUnits), T = e(c, ka, C, Z, E), E.render(function (b) {
                        h(b, T, Z.shading)
                    })
                }
            }
            b.__webglSprites.length && y(b, c);
            o && o.minFilter !== THREE.NearestFilter && o.minFilter !== THREE.LinearFilter && U(o)
        };
        this.initWebGLObjects = function (b) {
            if (!b.__webglObjects)b.__webglObjects = [], b.__webglObjectsImmediate = [], b.__webglSprites =
                [];
            for (; b.__objectsAdded.length;) {
                var e = b.__objectsAdded[0], f = b, k = void 0, h = void 0, m = void 0;
                if (!e.__webglInit)if (e.__webglInit = !0, e._modelViewMatrix = new THREE.Matrix4, e._normalMatrixArray = new Float32Array(9), e._modelViewMatrixArray = new Float32Array(16), e._objectMatrixArray = new Float32Array(16), e.matrixWorld.flattenToArray(e._objectMatrixArray), e instanceof THREE.Mesh)for (k in h = e.geometry, h.geometryGroups == void 0 && E(h), h.geometryGroups) {
                    m = h.geometryGroups[k];
                    if (!m.__webglVertexBuffer) {
                        var n = m;
                        n.__webglVertexBuffer =
                            o.createBuffer();
                        n.__webglNormalBuffer = o.createBuffer();
                        n.__webglTangentBuffer = o.createBuffer();
                        n.__webglColorBuffer = o.createBuffer();
                        n.__webglUVBuffer = o.createBuffer();
                        n.__webglUV2Buffer = o.createBuffer();
                        n.__webglSkinVertexABuffer = o.createBuffer();
                        n.__webglSkinVertexBBuffer = o.createBuffer();
                        n.__webglSkinIndicesBuffer = o.createBuffer();
                        n.__webglSkinWeightsBuffer = o.createBuffer();
                        n.__webglFaceBuffer = o.createBuffer();
                        n.__webglLineBuffer = o.createBuffer();
                        if (n.numMorphTargets) {
                            var p = void 0, t = void 0;
                            n.__webglMorphTargetsBuffers =
                                [];
                            p = 0;
                            for (t = n.numMorphTargets; p < t; p++)n.__webglMorphTargetsBuffers.push(o.createBuffer())
                        }
                        for (var n = m, p = e, v = void 0, u = void 0, w = void 0, x = w = void 0, M = void 0, T = void 0, z = T = t = 0, y = w = u = void 0, Z = y = u = v = void 0, w = void 0, x = p.geometry, M = x.faces, y = n.faces, v = 0, u = y.length; v < u; v++)w = y[v], w = M[w], w instanceof THREE.Face3 ? (t += 3, T += 1, z += 3) : w instanceof THREE.Face4 && (t += 4, T += 2, z += 4);
                        for (var v = n, u = p, B = y = M = void 0, V = void 0, B = void 0, w = [], M = 0, y = u.materials.length; M < y; M++)if (B = u.materials[M], B instanceof THREE.MeshFaceMaterial) {
                            B =
                                0;
                            for (l = v.materials.length; B < l; B++)(V = v.materials[B]) && w.push(V)
                        } else(V = B) && w.push(V);
                        v = w;
                        n.__materials = v;
                        a:{
                            M = u = void 0;
                            y = v.length;
                            for (u = 0; u < y; u++)if (M = v[u], M.map || M.lightMap || M instanceof THREE.MeshShaderMaterial) {
                                u = !0;
                                break a
                            }
                            u = !1
                        }
                        a:{
                            y = M = void 0;
                            w = v.length;
                            for (M = 0; M < w; M++)if (y = v[M], !(y instanceof THREE.MeshBasicMaterial && !y.envMap || y instanceof THREE.MeshDepthMaterial)) {
                                y = y && y.shading != void 0 && y.shading == THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading;
                                break a
                            }
                            y = !1
                        }
                        a:{
                            w = M = void 0;
                            B = v.length;
                            for (M = 0; M < B; M++)if (w = v[M], w.vertexColors) {
                                w = w.vertexColors;
                                break a
                            }
                            w = !1
                        }
                        n.__vertexArray = new Float32Array(t * 3);
                        if (y)n.__normalArray = new Float32Array(t * 3);
                        if (x.hasTangents)n.__tangentArray = new Float32Array(t * 4);
                        if (w)n.__colorArray = new Float32Array(t * 3);
                        if (u) {
                            if (x.faceUvs.length > 0 || x.faceVertexUvs.length > 0)n.__uvArray = new Float32Array(t * 2);
                            if (x.faceUvs.length > 1 || x.faceVertexUvs.length > 1)n.__uv2Array = new Float32Array(t * 2)
                        }
                        if (p.geometry.skinWeights.length && p.geometry.skinIndices.length)n.__skinVertexAArray =
                            new Float32Array(t * 4), n.__skinVertexBArray = new Float32Array(t * 4), n.__skinIndexArray = new Float32Array(t * 4), n.__skinWeightArray = new Float32Array(t * 4);
                        n.__faceArray = new Uint16Array(T * 3 + (p.geometry.edgeFaces ? p.geometry.edgeFaces.length * 6 : 0));
                        n.__lineArray = new Uint16Array(z * 2);
                        if (n.numMorphTargets) {
                            n.__morphTargetsArrays = [];
                            x = 0;
                            for (M = n.numMorphTargets; x < M; x++)n.__morphTargetsArrays.push(new Float32Array(t * 3))
                        }
                        n.__needsSmoothNormals = y == THREE.SmoothShading;
                        n.__uvType = u;
                        n.__vertexColorType = w;
                        n.__normalType =
                            y;
                        n.__webglFaceCount = T * 3 + (p.geometry.edgeFaces ? p.geometry.edgeFaces.length * 6 : 0);
                        n.__webglLineCount = z * 2;
                        x = 0;
                        for (M = v.length; x < M; x++)if (u = v[x], u.attributes) {
                            if (n.__webglCustomAttributes === void 0)n.__webglCustomAttributes = {};
                            for (a in u.attributes) {
                                w = u.attributes[a];
                                y = {};
                                for (Z in w)y[Z] = w[Z];
                                if (!y.__webglInitialized || y.createUniqueBuffers)y.__webglInitialized = !0, T = 1, y.type === "v2" ? T = 2 : y.type === "v3" ? T = 3 : y.type === "v4" ? T = 4 : y.type === "c" && (T = 3), y.size = T, y.array = new Float32Array(t * T), y.buffer = o.createBuffer(),
                                    y.buffer.belongsToAttribute = a, w.needsUpdate = !0, y.__original = w;
                                n.__webglCustomAttributes[a] = y
                            }
                        }
                        n.__inittedArrays = !0;
                        h.__dirtyVertices = !0;
                        h.__dirtyMorphTargets = !0;
                        h.__dirtyElements = !0;
                        h.__dirtyUvs = !0;
                        h.__dirtyNormals = !0;
                        h.__dirtyTangents = !0;
                        h.__dirtyColors = !0
                    }
                    N(f.__webglObjects, m, e)
                } else if (e instanceof THREE.Ribbon) {
                    h = e.geometry;
                    if (!h.__webglVertexBuffer)k = h, k.__webglVertexBuffer = o.createBuffer(), k.__webglColorBuffer = o.createBuffer(), k = h, m = k.vertices.length, k.__vertexArray = new Float32Array(m * 3), k.__colorArray =
                        new Float32Array(m * 3), k.__webglVertexCount = m, h.__dirtyVertices = !0, h.__dirtyColors = !0;
                    N(f.__webglObjects, h, e)
                } else if (e instanceof THREE.Line) {
                    h = e.geometry;
                    if (!h.__webglVertexBuffer)k = h, k.__webglVertexBuffer = o.createBuffer(), k.__webglColorBuffer = o.createBuffer(), k = h, m = k.vertices.length, k.__vertexArray = new Float32Array(m * 3), k.__colorArray = new Float32Array(m * 3), k.__webglLineCount = m, h.__dirtyVertices = !0, h.__dirtyColors = !0;
                    N(f.__webglObjects, h, e)
                } else if (e instanceof THREE.ParticleSystem) {
                    h = e.geometry;
                    if (!h.__webglVertexBuffer) {
                        k = h;
                        k.__webglVertexBuffer = o.createBuffer();
                        k.__webglColorBuffer = o.createBuffer();
                        k = h;
                        m = e;
                        n = k.vertices.length;
                        k.__vertexArray = new Float32Array(n * 3);
                        k.__colorArray = new Float32Array(n * 3);
                        k.__sortArray = [];
                        k.__webglParticleCount = n;
                        k.__materials = m.materials;
                        Z = t = p = void 0;
                        p = 0;
                        for (t = m.materials.length; p < t; p++)if (Z = m.materials[p], Z.attributes) {
                            if (k.__webglCustomAttributes === void 0)k.__webglCustomAttributes = {};
                            for (a in Z.attributes) {
                                originalAttribute = Z.attributes[a];
                                attribute = {};
                                for (property in originalAttribute)attribute[property] =
                                    originalAttribute[property];
                                if (!attribute.__webglInitialized || attribute.createUniqueBuffers)attribute.__webglInitialized = !0, size = 1, attribute.type === "v2" ? size = 2 : attribute.type === "v3" ? size = 3 : attribute.type === "v4" ? size = 4 : attribute.type === "c" && (size = 3), attribute.size = size, attribute.array = new Float32Array(n * size), attribute.buffer = o.createBuffer(), attribute.buffer.belongsToAttribute = a, originalAttribute.needsUpdate = !0, attribute.__original = originalAttribute;
                                k.__webglCustomAttributes[a] = attribute
                            }
                        }
                        h.__dirtyVertices = !0;
                        h.__dirtyColors = !0
                    }
                    N(f.__webglObjects, h, e)
                } else THREE.MarchingCubes !== void 0 && e instanceof THREE.MarchingCubes ? f.__webglObjectsImmediate.push({
                    object: e,
                    opaque: {list: [], count: 0},
                    transparent: {list: [], count: 0}
                }) : e instanceof THREE.Sprite && f.__webglSprites.push(e);
                b.__objectsAdded.splice(0, 1)
            }
            for (; b.__objectsRemoved.length;) {
                f = b.__objectsRemoved[0];
                e = b;
                if (f instanceof THREE.Mesh || f instanceof THREE.ParticleSystem || f instanceof THREE.Ribbon || f instanceof THREE.Line)H(e.__webglObjects, f); else if (f instanceof
                    THREE.Sprite) {
                    e = e.__webglSprites;
                    h = void 0;
                    for (h = e.length - 1; h >= 0; h--)e[h] == f && e.splice(h, 1)
                } else f instanceof THREE.MarchingCubes && H(e.__webglObjectsImmediate, f);
                b.__objectsRemoved.splice(0, 1)
            }
            e = 0;
            for (f = b.__webglObjects.length; e < f; e++)if (k = b.__webglObjects[e].object, t = m = h = void 0, k instanceof THREE.Mesh) {
                h = k.geometry;
                n = 0;
                for (p = h.geometryGroupsList.length; n < p; n++)if (m = h.geometryGroupsList[n], t = D(m), h.__dirtyVertices || h.__dirtyMorphTargets || h.__dirtyElements || h.__dirtyUvs || h.__dirtyNormals || h.__dirtyColors ||
                    h.__dirtyTangents || t)if (t = m, Z = o.DYNAMIC_DRAW, T = !h.dynamic, t.__inittedArrays) {
                    var ka = x = z = void 0, C = void 0, xa = ka = void 0, K = void 0, pa = void 0, ha = void 0, I = V = B = w = y = M = u = v = void 0, L = void 0, J = C = ha = C = pa = K = void 0, A = void 0, F = A = J = K = void 0, Y = void 0, va = F = A = J = ka = ka = xa = ha = C = F = A = J = Y = F = A = J = Y = F = A = J = void 0, O = 0, X = 0, S = 0, ra = 0, R = 0, ca = 0, P = 0, ya = 0, oa = 0, Q = 0, U = 0, F = J = 0, F = void 0, W = t.__vertexArray, ja = t.__uvArray, fa = t.__uv2Array, ma = t.__normalArray, $ = t.__tangentArray, sa = t.__colorArray, aa = t.__skinVertexAArray, ea = t.__skinVertexBArray, ta =
                            t.__skinIndexArray, da = t.__skinWeightArray, na = t.__morphTargetsArrays, ga = t.__webglCustomAttributes, A = void 0, qa = t.__faceArray, ia = t.__lineArray, Ga = t.__needsSmoothNormals, u = t.__vertexColorType, v = t.__uvType, M = t.__normalType, wa = k.geometry, Ca = wa.__dirtyVertices, Aa = wa.__dirtyElements, za = wa.__dirtyUvs, Fa = wa.__dirtyNormals, Za = wa.__dirtyTangents, $a = wa.__dirtyColors, ab = wa.__dirtyMorphTargets, Oa = wa.vertices, cb = t.faces, fb = wa.faces, db = wa.faceVertexUvs[0], eb = wa.faceVertexUvs[1], Pa = wa.skinVerticesA, Qa = wa.skinVerticesB,
                        Ra = wa.skinIndices, Ia = wa.skinWeights, Ha = wa.morphTargets;
                    if (ga)for (va in ga)ga[va].offset = 0, ga[va].offsetSrc = 0;
                    z = 0;
                    for (x = cb.length; z < x; z++)if (ka = cb[z], C = fb[ka], db && (y = db[ka]), eb && (w = eb[ka]), ka = C.vertexNormals, xa = C.normal, K = C.vertexColors, pa = C.color, ha = C.vertexTangents, C instanceof THREE.Face3) {
                        if (Ca)B = Oa[C.a].position, V = Oa[C.b].position, I = Oa[C.c].position, W[X] = B.x, W[X + 1] = B.y, W[X + 2] = B.z, W[X + 3] = V.x, W[X + 4] = V.y, W[X + 5] = V.z, W[X + 6] = I.x, W[X + 7] = I.y, W[X + 8] = I.z, X += 9;
                        if (ga)for (va in ga)if (A = ga[va], A.__original.needsUpdate)J =
                            A.offset, F = A.offsetSrc, A.size === 1 ? (A.boundTo === void 0 || A.boundTo === "vertices" ? (A.array[J] = A.value[C.a], A.array[J + 1] = A.value[C.b], A.array[J + 2] = A.value[C.c]) : A.boundTo === "faces" ? (F = A.value[F], A.array[J] = F, A.array[J + 1] = F, A.array[J + 2] = F, A.offsetSrc++) : A.boundTo === "faceVertices" && (A.array[J] = A.value[F], A.array[J + 1] = A.value[F + 1], A.array[J + 2] = A.value[F + 2], A.offsetSrc += 3), A.offset += 3) : (A.boundTo === void 0 || A.boundTo === "vertices" ? (B = A.value[C.a], V = A.value[C.b], I = A.value[C.c]) : A.boundTo === "faces" ? (I = V = B = F = A.value[F],
                            A.offsetSrc++) : A.boundTo === "faceVertices" && (B = A.value[F], V = A.value[F + 1], I = A.value[F + 2], A.offsetSrc += 3), A.size === 2 ? (A.array[J] = B.x, A.array[J + 1] = B.y, A.array[J + 2] = V.x, A.array[J + 3] = V.y, A.array[J + 4] = I.x, A.array[J + 5] = I.y, A.offset += 6) : A.size === 3 ? (A.type === "c" ? (A.array[J] = B.r, A.array[J + 1] = B.g, A.array[J + 2] = B.b, A.array[J + 3] = V.r, A.array[J + 4] = V.g, A.array[J + 5] = V.b, A.array[J + 6] = I.r, A.array[J + 7] = I.g, A.array[J + 8] = I.b) : (A.array[J] = B.x, A.array[J + 1] = B.y, A.array[J + 2] = B.z, A.array[J + 3] = V.x, A.array[J + 4] = V.y, A.array[J + 5] =
                            V.z, A.array[J + 6] = I.x, A.array[J + 7] = I.y, A.array[J + 8] = I.z), A.offset += 9) : (A.array[J] = B.x, A.array[J + 1] = B.y, A.array[J + 2] = B.z, A.array[J + 3] = B.w, A.array[J + 4] = V.x, A.array[J + 5] = V.y, A.array[J + 6] = V.z, A.array[J + 7] = V.w, A.array[J + 8] = I.x, A.array[J + 9] = I.y, A.array[J + 10] = I.z, A.array[J + 11] = I.w, A.offset += 12));
                        if (ab) {
                            J = 0;
                            for (A = Ha.length; J < A; J++)B = Ha[J].vertices[C.a].position, V = Ha[J].vertices[C.b].position, I = Ha[J].vertices[C.c].position, F = na[J], F[U] = B.x, F[U + 1] = B.y, F[U + 2] = B.z, F[U + 3] = V.x, F[U + 4] = V.y, F[U + 5] = V.z, F[U + 6] = I.x, F[U +
                            7] = I.y, F[U + 8] = I.z;
                            U += 9
                        }
                        if (Ia.length)J = Ia[C.a], A = Ia[C.b], F = Ia[C.c], da[Q] = J.x, da[Q + 1] = J.y, da[Q + 2] = J.z, da[Q + 3] = J.w, da[Q + 4] = A.x, da[Q + 5] = A.y, da[Q + 6] = A.z, da[Q + 7] = A.w, da[Q + 8] = F.x, da[Q + 9] = F.y, da[Q + 10] = F.z, da[Q + 11] = F.w, J = Ra[C.a], A = Ra[C.b], F = Ra[C.c], ta[Q] = J.x, ta[Q + 1] = J.y, ta[Q + 2] = J.z, ta[Q + 3] = J.w, ta[Q + 4] = A.x, ta[Q + 5] = A.y, ta[Q + 6] = A.z, ta[Q + 7] = A.w, ta[Q + 8] = F.x, ta[Q + 9] = F.y, ta[Q + 10] = F.z, ta[Q + 11] = F.w, J = Pa[C.a], A = Pa[C.b], F = Pa[C.c], aa[Q] = J.x, aa[Q + 1] = J.y, aa[Q + 2] = J.z, aa[Q + 3] = 1, aa[Q + 4] = A.x, aa[Q + 5] = A.y, aa[Q + 6] = A.z, aa[Q + 7] =
                            1, aa[Q + 8] = F.x, aa[Q + 9] = F.y, aa[Q + 10] = F.z, aa[Q + 11] = 1, J = Qa[C.a], A = Qa[C.b], F = Qa[C.c], ea[Q] = J.x, ea[Q + 1] = J.y, ea[Q + 2] = J.z, ea[Q + 3] = 1, ea[Q + 4] = A.x, ea[Q + 5] = A.y, ea[Q + 6] = A.z, ea[Q + 7] = 1, ea[Q + 8] = F.x, ea[Q + 9] = F.y, ea[Q + 10] = F.z, ea[Q + 11] = 1, Q += 12;
                        if ($a && u)K.length == 3 && u == THREE.VertexColors ? (C = K[0], J = K[1], A = K[2]) : A = J = C = pa, sa[oa] = C.r, sa[oa + 1] = C.g, sa[oa + 2] = C.b, sa[oa + 3] = J.r, sa[oa + 4] = J.g, sa[oa + 5] = J.b, sa[oa + 6] = A.r, sa[oa + 7] = A.g, sa[oa + 8] = A.b, oa += 9;
                        if (Za && wa.hasTangents)K = ha[0], pa = ha[1], C = ha[2], $[P] = K.x, $[P + 1] = K.y, $[P + 2] = K.z, $[P +
                        3] = K.w, $[P + 4] = pa.x, $[P + 5] = pa.y, $[P + 6] = pa.z, $[P + 7] = pa.w, $[P + 8] = C.x, $[P + 9] = C.y, $[P + 10] = C.z, $[P + 11] = C.w, P += 12;
                        if (Fa && M)if (ka.length == 3 && Ga)for (ha = 0; ha < 3; ha++)xa = ka[ha], ma[ca] = xa.x, ma[ca + 1] = xa.y, ma[ca + 2] = xa.z, ca += 3; else for (ha = 0; ha < 3; ha++)ma[ca] = xa.x, ma[ca + 1] = xa.y, ma[ca + 2] = xa.z, ca += 3;
                        if (za && y !== void 0 && v)for (ha = 0; ha < 3; ha++)ka = y[ha], ja[S] = ka.u, ja[S + 1] = ka.v, S += 2;
                        if (za && w !== void 0 && v)for (ha = 0; ha < 3; ha++)ka = w[ha], fa[ra] = ka.u, fa[ra + 1] = ka.v, ra += 2;
                        Aa && (qa[R] = O, qa[R + 1] = O + 1, qa[R + 2] = O + 2, R += 3, ia[ya] = O, ia[ya + 1] = O +
                        1, ia[ya + 2] = O, ia[ya + 3] = O + 2, ia[ya + 4] = O + 1, ia[ya + 5] = O + 2, ya += 6, O += 3)
                    } else if (C instanceof THREE.Face4) {
                        if (Ca)B = Oa[C.a].position, V = Oa[C.b].position, I = Oa[C.c].position, L = Oa[C.d].position, W[X] = B.x, W[X + 1] = B.y, W[X + 2] = B.z, W[X + 3] = V.x, W[X + 4] = V.y, W[X + 5] = V.z, W[X + 6] = I.x, W[X + 7] = I.y, W[X + 8] = I.z, W[X + 9] = L.x, W[X + 10] = L.y, W[X + 11] = L.z, X += 12;
                        if (ga)for (va in ga)if (A = ga[va], A.__original.needsUpdate)J = A.offset, F = A.offsetSrc, A.size === 1 ? (A.boundTo === void 0 || A.boundTo === "vertices" ? (A.array[J] = A.value[C.a], A.array[J + 1] = A.value[C.b],
                            A.array[J + 2] = A.value[C.c], A.array[J + 3] = A.value[C.d]) : A.boundTo === "faces" ? (F = A.value[F], A.array[J] = F, A.array[J + 1] = F, A.array[J + 2] = F, A.array[J + 3] = F, A.offsetSrc++) : A.boundTo === "faceVertices" && (A.array[J] = A.value[F], A.array[J + 1] = A.value[F + 1], A.array[J + 2] = A.value[F + 2], A.array[J + 3] = A.value[F + 3], A.offsetSrc += 4), A.offset += 4) : (A.boundTo === void 0 || A.boundTo === "vertices" ? (B = A.value[C.a], V = A.value[C.b], I = A.value[C.c], L = A.value[C.d]) : A.boundTo === "faces" ? (L = I = V = B = F = A.value[F], A.offsetSrc++) : A.boundTo === "faceVertices" &&
                        (B = A.value[F], V = A.value[F + 1], I = A.value[F + 2], L = A.value[F + 3], A.offsetSrc += 4), A.size === 2 ? (A.array[J] = B.x, A.array[J + 1] = B.y, A.array[J + 2] = V.x, A.array[J + 3] = V.y, A.array[J + 4] = I.x, A.array[J + 5] = I.y, A.array[J + 6] = L.x, A.array[J + 7] = L.y, A.offset += 8) : A.size === 3 ? (A.type === "c" ? (A.array[J] = B.r, A.array[J + 1] = B.g, A.array[J + 2] = B.b, A.array[J + 3] = V.r, A.array[J + 4] = V.g, A.array[J + 5] = V.b, A.array[J + 6] = I.r, A.array[J + 7] = I.g, A.array[J + 8] = I.b, A.array[J + 9] = L.r, A.array[J + 10] = L.g, A.array[J + 11] = L.b) : (A.array[J] = B.x, A.array[J + 1] = B.y, A.array[J +
                        2] = B.z, A.array[J + 3] = V.x, A.array[J + 4] = V.y, A.array[J + 5] = V.z, A.array[J + 6] = I.x, A.array[J + 7] = I.y, A.array[J + 8] = I.z, A.array[J + 9] = L.x, A.array[J + 10] = L.y, A.array[J + 11] = L.z), A.offset += 12) : (A.array[J] = B.x, A.array[J + 1] = B.y, A.array[J + 2] = B.z, A.array[J + 3] = B.w, A.array[J + 4] = V.x, A.array[J + 5] = V.y, A.array[J + 6] = V.z, A.array[J + 7] = V.w, A.array[J + 8] = I.x, A.array[J + 9] = I.y, A.array[J + 10] = I.z, A.array[J + 11] = I.w, A.array[J + 12] = L.x, A.array[J + 13] = L.y, A.array[J + 14] = L.z, A.array[J + 15] = L.w, A.offset += 16));
                        if (ab) {
                            J = 0;
                            for (A = Ha.length; J < A; J++)B =
                                Ha[J].vertices[C.a].position, V = Ha[J].vertices[C.b].position, I = Ha[J].vertices[C.c].position, L = Ha[J].vertices[C.d].position, F = na[J], F[U] = B.x, F[U + 1] = B.y, F[U + 2] = B.z, F[U + 3] = V.x, F[U + 4] = V.y, F[U + 5] = V.z, F[U + 6] = I.x, F[U + 7] = I.y, F[U + 8] = I.z, F[U + 9] = L.x, F[U + 10] = L.y, F[U + 11] = L.z;
                            U += 12
                        }
                        if (Ia.length)J = Ia[C.a], A = Ia[C.b], F = Ia[C.c], Y = Ia[C.d], da[Q] = J.x, da[Q + 1] = J.y, da[Q + 2] = J.z, da[Q + 3] = J.w, da[Q + 4] = A.x, da[Q + 5] = A.y, da[Q + 6] = A.z, da[Q + 7] = A.w, da[Q + 8] = F.x, da[Q + 9] = F.y, da[Q + 10] = F.z, da[Q + 11] = F.w, da[Q + 12] = Y.x, da[Q + 13] = Y.y, da[Q + 14] = Y.z,
                            da[Q + 15] = Y.w, J = Ra[C.a], A = Ra[C.b], F = Ra[C.c], Y = Ra[C.d], ta[Q] = J.x, ta[Q + 1] = J.y, ta[Q + 2] = J.z, ta[Q + 3] = J.w, ta[Q + 4] = A.x, ta[Q + 5] = A.y, ta[Q + 6] = A.z, ta[Q + 7] = A.w, ta[Q + 8] = F.x, ta[Q + 9] = F.y, ta[Q + 10] = F.z, ta[Q + 11] = F.w, ta[Q + 12] = Y.x, ta[Q + 13] = Y.y, ta[Q + 14] = Y.z, ta[Q + 15] = Y.w, J = Pa[C.a], A = Pa[C.b], F = Pa[C.c], Y = Pa[C.d], aa[Q] = J.x, aa[Q + 1] = J.y, aa[Q + 2] = J.z, aa[Q + 3] = 1, aa[Q + 4] = A.x, aa[Q + 5] = A.y, aa[Q + 6] = A.z, aa[Q + 7] = 1, aa[Q + 8] = F.x, aa[Q + 9] = F.y, aa[Q + 10] = F.z, aa[Q + 11] = 1, aa[Q + 12] = Y.x, aa[Q + 13] = Y.y, aa[Q + 14] = Y.z, aa[Q + 15] = 1, J = Qa[C.a], A = Qa[C.b], F = Qa[C.c],
                            C = Qa[C.d], ea[Q] = J.x, ea[Q + 1] = J.y, ea[Q + 2] = J.z, ea[Q + 3] = 1, ea[Q + 4] = A.x, ea[Q + 5] = A.y, ea[Q + 6] = A.z, ea[Q + 7] = 1, ea[Q + 8] = F.x, ea[Q + 9] = F.y, ea[Q + 10] = F.z, ea[Q + 11] = 1, ea[Q + 12] = C.x, ea[Q + 13] = C.y, ea[Q + 14] = C.z, ea[Q + 15] = 1, Q += 16;
                        if ($a && u)K.length == 4 && u == THREE.VertexColors ? (C = K[0], J = K[1], A = K[2], K = K[3]) : K = A = J = C = pa, sa[oa] = C.r, sa[oa + 1] = C.g, sa[oa + 2] = C.b, sa[oa + 3] = J.r, sa[oa + 4] = J.g, sa[oa + 5] = J.b, sa[oa + 6] = A.r, sa[oa + 7] = A.g, sa[oa + 8] = A.b, sa[oa + 9] = K.r, sa[oa + 10] = K.g, sa[oa + 11] = K.b, oa += 12;
                        if (Za && wa.hasTangents)K = ha[0], pa = ha[1], C = ha[2], ha =
                            ha[3], $[P] = K.x, $[P + 1] = K.y, $[P + 2] = K.z, $[P + 3] = K.w, $[P + 4] = pa.x, $[P + 5] = pa.y, $[P + 6] = pa.z, $[P + 7] = pa.w, $[P + 8] = C.x, $[P + 9] = C.y, $[P + 10] = C.z, $[P + 11] = C.w, $[P + 12] = ha.x, $[P + 13] = ha.y, $[P + 14] = ha.z, $[P + 15] = ha.w, P += 16;
                        if (Fa && M)if (ka.length == 4 && Ga)for (ha = 0; ha < 4; ha++)xa = ka[ha], ma[ca] = xa.x, ma[ca + 1] = xa.y, ma[ca + 2] = xa.z, ca += 3; else for (ha = 0; ha < 4; ha++)ma[ca] = xa.x, ma[ca + 1] = xa.y, ma[ca + 2] = xa.z, ca += 3;
                        if (za && y !== void 0 && v)for (ha = 0; ha < 4; ha++)ka = y[ha], ja[S] = ka.u, ja[S + 1] = ka.v, S += 2;
                        if (za && w !== void 0 && v)for (ha = 0; ha < 4; ha++)ka = w[ha],
                            fa[ra] = ka.u, fa[ra + 1] = ka.v, ra += 2;
                        Aa && (qa[R] = O, qa[R + 1] = O + 1, qa[R + 2] = O + 3, qa[R + 3] = O + 1, qa[R + 4] = O + 2, qa[R + 5] = O + 3, R += 6, ia[ya] = O, ia[ya + 1] = O + 1, ia[ya + 2] = O, ia[ya + 3] = O + 3, ia[ya + 4] = O + 1, ia[ya + 5] = O + 2, ia[ya + 6] = O + 2, ia[ya + 7] = O + 3, ya += 8, O += 4)
                    }
                    Ca && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglVertexBuffer), o.bufferData(o.ARRAY_BUFFER, W, Z));
                    if (ga)for (va in ga)A = ga[va], A.__original.needsUpdate && (o.bindBuffer(o.ARRAY_BUFFER, A.buffer), o.bufferData(o.ARRAY_BUFFER, A.array, Z));
                    if (ab) {
                        J = 0;
                        for (A = Ha.length; J < A; J++)o.bindBuffer(o.ARRAY_BUFFER,
                            t.__webglMorphTargetsBuffers[J]), o.bufferData(o.ARRAY_BUFFER, na[J], Z)
                    }
                    $a && oa > 0 && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglColorBuffer), o.bufferData(o.ARRAY_BUFFER, sa, Z));
                    Fa && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglNormalBuffer), o.bufferData(o.ARRAY_BUFFER, ma, Z));
                    Za && wa.hasTangents && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglTangentBuffer), o.bufferData(o.ARRAY_BUFFER, $, Z));
                    za && S > 0 && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglUVBuffer), o.bufferData(o.ARRAY_BUFFER, ja, Z));
                    za && ra > 0 && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglUV2Buffer),
                        o.bufferData(o.ARRAY_BUFFER, fa, Z));
                    Aa && (o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, t.__webglFaceBuffer), o.bufferData(o.ELEMENT_ARRAY_BUFFER, qa, Z), o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, t.__webglLineBuffer), o.bufferData(o.ELEMENT_ARRAY_BUFFER, ia, Z));
                    Q > 0 && (o.bindBuffer(o.ARRAY_BUFFER, t.__webglSkinVertexABuffer), o.bufferData(o.ARRAY_BUFFER, aa, Z), o.bindBuffer(o.ARRAY_BUFFER, t.__webglSkinVertexBBuffer), o.bufferData(o.ARRAY_BUFFER, ea, Z), o.bindBuffer(o.ARRAY_BUFFER, t.__webglSkinIndicesBuffer), o.bufferData(o.ARRAY_BUFFER,
                        ta, Z), o.bindBuffer(o.ARRAY_BUFFER, t.__webglSkinWeightsBuffer), o.bufferData(o.ARRAY_BUFFER, da, Z));
                    T && (delete t.__inittedArrays, delete t.__colorArray, delete t.__normalArray, delete t.__tangentArray, delete t.__uvArray, delete t.__uv2Array, delete t.__faceArray, delete t.__vertexArray, delete t.__lineArray, delete t.__skinVertexAArray, delete t.__skinVertexBArray, delete t.__skinIndexArray, delete t.__skinWeightArray)
                }
                h.__dirtyVertices = !1;
                h.__dirtyMorphTargets = !1;
                h.__dirtyElements = !1;
                h.__dirtyUvs = !1;
                h.__dirtyNormals = !1;
                h.__dirtyTangents = !1;
                h.__dirtyColors = !1;
                G(m)
            } else if (k instanceof THREE.Ribbon) {
                h = k.geometry;
                if (h.__dirtyVertices || h.__dirtyColors) {
                    k = h;
                    m = o.DYNAMIC_DRAW;
                    n = z = T = T = void 0;
                    x = k.vertices;
                    p = k.colors;
                    v = x.length;
                    t = p.length;
                    u = k.__vertexArray;
                    Z = k.__colorArray;
                    M = k.__dirtyColors;
                    if (k.__dirtyVertices) {
                        for (T = 0; T < v; T++)z = x[T].position, n = T * 3, u[n] = z.x, u[n + 1] = z.y, u[n + 2] = z.z;
                        o.bindBuffer(o.ARRAY_BUFFER, k.__webglVertexBuffer);
                        o.bufferData(o.ARRAY_BUFFER, u, m)
                    }
                    if (M) {
                        for (T = 0; T < t; T++)color = p[T], n = T * 3, Z[n] = color.r, Z[n +
                        1] = color.g, Z[n + 2] = color.b;
                        o.bindBuffer(o.ARRAY_BUFFER, k.__webglColorBuffer);
                        o.bufferData(o.ARRAY_BUFFER, Z, m)
                    }
                }
                h.__dirtyVertices = !1;
                h.__dirtyColors = !1
            } else if (k instanceof THREE.Line) {
                h = k.geometry;
                if (h.__dirtyVertices || h.__dirtyColors) {
                    k = h;
                    m = o.DYNAMIC_DRAW;
                    n = z = T = T = void 0;
                    x = k.vertices;
                    p = k.colors;
                    v = x.length;
                    t = p.length;
                    u = k.__vertexArray;
                    Z = k.__colorArray;
                    M = k.__dirtyColors;
                    if (k.__dirtyVertices) {
                        for (T = 0; T < v; T++)z = x[T].position, n = T * 3, u[n] = z.x, u[n + 1] = z.y, u[n + 2] = z.z;
                        o.bindBuffer(o.ARRAY_BUFFER, k.__webglVertexBuffer);
                        o.bufferData(o.ARRAY_BUFFER, u, m)
                    }
                    if (M) {
                        for (T = 0; T < t; T++)color = p[T], n = T * 3, Z[n] = color.r, Z[n + 1] = color.g, Z[n + 2] = color.b;
                        o.bindBuffer(o.ARRAY_BUFFER, k.__webglColorBuffer);
                        o.bufferData(o.ARRAY_BUFFER, Z, m)
                    }
                }
                h.__dirtyVertices = !1;
                h.__dirtyColors = !1
            } else if (k instanceof THREE.ParticleSystem)h = k.geometry, t = D(h), (h.__dirtyVertices || h.__dirtyColors || k.sortParticles || t) && c(h, o.DYNAMIC_DRAW, k), h.__dirtyVertices = !1, h.__dirtyColors = !1, G(h)
        };
        this.setFaceCulling = function (b, e) {
            b ? (!e || e == "ccw" ? o.frontFace(o.CCW) : o.frontFace(o.CW),
                b == "back" ? o.cullFace(o.BACK) : b == "front" ? o.cullFace(o.FRONT) : o.cullFace(o.FRONT_AND_BACK), o.enable(o.CULL_FACE)) : o.disable(o.CULL_FACE)
        };
        this.supportsVertexTextures = function () {
            return oa
        }
    };
    THREE.WebGLRenderTarget = function (b, c, e) {
        this.width = b;
        this.height = c;
        e = e || {};
        this.wrapS = e.wrapS !== void 0 ? e.wrapS : THREE.ClampToEdgeWrapping;
        this.wrapT = e.wrapT !== void 0 ? e.wrapT : THREE.ClampToEdgeWrapping;
        this.magFilter = e.magFilter !== void 0 ? e.magFilter : THREE.LinearFilter;
        this.minFilter = e.minFilter !== void 0 ? e.minFilter : THREE.LinearMipMapLinearFilter;
        this.offset = new THREE.Vector2(0, 0);
        this.repeat = new THREE.Vector2(1, 1);
        this.format = e.format !== void 0 ? e.format : THREE.RGBAFormat;
        this.type = e.type !== void 0 ? e.type :
            THREE.UnsignedByteType;
        this.depthBuffer = e.depthBuffer !== void 0 ? e.depthBuffer : !0;
        this.stencilBuffer = e.stencilBuffer !== void 0 ? e.stencilBuffer : !0
    };
    THREE.WebGLRenderTarget.prototype.clone = function () {
        var b = new THREE.WebGLRenderTarget(this.width, this.height);
        b.wrapS = this.wrapS;
        b.wrapT = this.wrapT;
        b.magFilter = this.magFilter;
        b.minFilter = this.minFilter;
        b.offset.copy(this.offset);
        b.repeat.copy(this.repeat);
        b.format = this.format;
        b.type = this.type;
        b.depthBuffer = this.depthBuffer;
        b.stencilBuffer = this.stencilBuffer;
        return b
    };
    THREE.WebGLRenderTargetCube = function (b, c, e) {
        THREE.WebGLRenderTarget.call(this, b, c, e);
        this.activeCubeFace = 0
    };
    THREE.WebGLRenderTargetCube.prototype = new THREE.WebGLRenderTarget;
    THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube;
    THREE.RenderableVertex = function () {
        this.positionWorld = new THREE.Vector3;
        this.positionScreen = new THREE.Vector4;
        this.visible = !0
    };
    THREE.RenderableVertex.prototype.copy = function (b) {
        this.positionWorld.copy(b.positionWorld);
        this.positionScreen.copy(b.positionScreen)
    };
    THREE.RenderableFace3 = function () {
        this.v1 = new THREE.RenderableVertex;
        this.v2 = new THREE.RenderableVertex;
        this.v3 = new THREE.RenderableVertex;
        this.centroidWorld = new THREE.Vector3;
        this.centroidScreen = new THREE.Vector3;
        this.normalWorld = new THREE.Vector3;
        this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        this.faceMaterials = this.meshMaterials = null;
        this.overdraw = !1;
        this.uvs = [[]];
        this.z = null
    };
    THREE.RenderableFace4 = function () {
        this.v1 = new THREE.RenderableVertex;
        this.v2 = new THREE.RenderableVertex;
        this.v3 = new THREE.RenderableVertex;
        this.v4 = new THREE.RenderableVertex;
        this.centroidWorld = new THREE.Vector3;
        this.centroidScreen = new THREE.Vector3;
        this.normalWorld = new THREE.Vector3;
        this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        this.faceMaterials = this.meshMaterials = null;
        this.overdraw = !1;
        this.uvs = [[]];
        this.z = null
    };
    THREE.RenderableObject = function () {
        this.z = this.object = null
    };
    THREE.RenderableParticle = function () {
        this.rotation = this.z = this.y = this.x = null;
        this.scale = new THREE.Vector2;
        this.materials = null
    };
    THREE.RenderableLine = function () {
        this.z = null;
        this.v1 = new THREE.RenderableVertex;
        this.v2 = new THREE.RenderableVertex;
        this.materials = null
    };
    THREE.ColorUtils = {
        adjustHSV: function (b, c, e, f) {
            var h = THREE.ColorUtils.__hsv;
            THREE.ColorUtils.rgbToHsv(b, h);
            h.h = THREE.ColorUtils.clamp(h.h + c, 0, 1);
            h.s = THREE.ColorUtils.clamp(h.s + e, 0, 1);
            h.v = THREE.ColorUtils.clamp(h.v + f, 0, 1);
            b.setHSV(h.h, h.s, h.v)
        }, rgbToHsv: function (b, c) {
            var e = b.r, f = b.g, h = b.b, m = Math.max(Math.max(e, f), h), k = Math.min(Math.min(e, f), h);
            if (k == m)k = e = 0; else {
                var n = m - k, k = n / m, e = e == m ? (f - h) / n : f == m ? 2 + (h - e) / n : 4 + (e - f) / n;
                e /= 6;
                e < 0 && (e += 1);
                e > 1 && (e -= 1)
            }
            c === void 0 && (c = {h: 0, s: 0, v: 0});
            c.h = e;
            c.s = k;
            c.v = m;
            return c
        },
        clamp: function (b, c, e) {
            return b < c ? c : b > e ? e : b
        }
    };
    THREE.ColorUtils.__hsv = {h: 0, s: 0, v: 0};
    THREE.GeometryUtils = {
        merge: function (b, c) {
            var e = c instanceof THREE.Mesh, f = b.vertices.length, h = e ? c.geometry : c, m = b.vertices, k = h.vertices, n = b.faces, u = h.faces, p = b.faceVertexUvs[0], h = h.faceVertexUvs[0];
            e && c.matrixAutoUpdate && c.updateMatrix();
            for (var v = 0, t = k.length; v < t; v++) {
                var x = new THREE.Vertex(k[v].position.clone());
                e && c.matrix.multiplyVector3(x.position);
                m.push(x)
            }
            v = 0;
            for (t = u.length; v < t; v++) {
                var k = u[v], w, z, y = k.vertexNormals, x = k.vertexColors;
                k instanceof THREE.Face3 ? w = new THREE.Face3(k.a + f, k.b + f, k.c +
                f) : k instanceof THREE.Face4 && (w = new THREE.Face4(k.a + f, k.b + f, k.c + f, k.d + f));
                w.normal.copy(k.normal);
                e = 0;
                for (m = y.length; e < m; e++)z = y[e], w.vertexNormals.push(z.clone());
                w.color.copy(k.color);
                e = 0;
                for (m = x.length; e < m; e++)z = x[e], w.vertexColors.push(z.clone());
                w.materials = k.materials.slice();
                w.centroid.copy(k.centroid);
                n.push(w)
            }
            v = 0;
            for (t = h.length; v < t; v++) {
                f = h[v];
                n = [];
                e = 0;
                for (m = f.length; e < m; e++)n.push(new THREE.UV(f[e].u, f[e].v));
                p.push(n)
            }
        }, clone: function (b) {
            var c = new THREE.Geometry, e, f = b.vertices, h = b.faces,
                m = b.faceVertexUvs[0], b = 0;
            for (e = f.length; b < e; b++) {
                var k = new THREE.Vertex(f[b].position.clone());
                c.vertices.push(k)
            }
            b = 0;
            for (e = h.length; b < e; b++) {
                var n = h[b], u, p, v = n.vertexNormals, t = n.vertexColors;
                n instanceof THREE.Face3 ? u = new THREE.Face3(n.a, n.b, n.c) : n instanceof THREE.Face4 && (u = new THREE.Face4(n.a, n.b, n.c, n.d));
                u.normal.copy(n.normal);
                f = 0;
                for (k = v.length; f < k; f++)p = v[f], u.vertexNormals.push(p.clone());
                u.color.copy(n.color);
                f = 0;
                for (k = t.length; f < k; f++)p = t[f], u.vertexColors.push(p.clone());
                u.materials = n.materials.slice();
                u.centroid.copy(n.centroid);
                c.faces.push(u)
            }
            b = 0;
            for (e = m.length; b < e; b++) {
                h = m[b];
                u = [];
                f = 0;
                for (k = h.length; f < k; f++)u.push(new THREE.UV(h[f].u, h[f].v));
                c.faceVertexUvs[0].push(u)
            }
            return c
        }, randomPointInTriangle: function (b, c, e) {
            var f, h, m, k = new THREE.Vector3, n = THREE.GeometryUtils.__v1;
            f = THREE.GeometryUtils.random();
            h = THREE.GeometryUtils.random();
            f + h > 1 && (f = 1 - f, h = 1 - h);
            m = 1 - f - h;
            k.copy(b);
            k.multiplyScalar(f);
            n.copy(c);
            n.multiplyScalar(h);
            k.addSelf(n);
            n.copy(e);
            n.multiplyScalar(m);
            k.addSelf(n);
            return k
        }, randomPointInFace: function (b,
                                        c, e) {
            var f, h, m;
            if (b instanceof THREE.Face3)return f = c.vertices[b.a].position, h = c.vertices[b.b].position, m = c.vertices[b.c].position, THREE.GeometryUtils.randomPointInTriangle(f, h, m); else if (b instanceof THREE.Face4) {
                f = c.vertices[b.a].position;
                h = c.vertices[b.b].position;
                m = c.vertices[b.c].position;
                var c = c.vertices[b.d].position, k;
                e ? b._area1 && b._area2 ? (e = b._area1, k = b._area2) : (e = THREE.GeometryUtils.triangleArea(f, h, c), k = THREE.GeometryUtils.triangleArea(h, m, c), b._area1 = e, b._area2 = k) : (e = THREE.GeometryUtils.triangleArea(f,
                    h, c), k = THREE.GeometryUtils.triangleArea(h, m, c));
                return THREE.GeometryUtils.random() * (e + k) < e ? THREE.GeometryUtils.randomPointInTriangle(f, h, c) : THREE.GeometryUtils.randomPointInTriangle(h, m, c)
            }
        }, randomPointsInGeometry: function (b, c) {
            function e(b) {
                function e(c, f) {
                    if (f < c)return c;
                    var k = c + Math.floor((f - c) / 2);
                    return p[k] > b ? e(c, k - 1) : p[k] < b ? e(k + 1, f) : k
                }

                return e(0, p.length - 1)
            }

            var f, h, m = b.faces, k = b.vertices, n = m.length, u = 0, p = [], v, t, x, w;
            for (h = 0; h < n; h++) {
                f = m[h];
                if (f instanceof THREE.Face3)v = k[f.a].position, t = k[f.b].position,
                    x = k[f.c].position, f._area = THREE.GeometryUtils.triangleArea(v, t, x); else if (f instanceof THREE.Face4)v = k[f.a].position, t = k[f.b].position, x = k[f.c].position, w = k[f.d].position, f._area1 = THREE.GeometryUtils.triangleArea(v, t, w), f._area2 = THREE.GeometryUtils.triangleArea(t, x, w), f._area = f._area1 + f._area2;
                u += f._area;
                p[h] = u
            }
            f = [];
            k = {};
            for (h = 0; h < c; h++)n = THREE.GeometryUtils.random() * u, n = e(n), f[h] = THREE.GeometryUtils.randomPointInFace(m[n], b, !0), k[n] ? k[n] += 1 : k[n] = 1;
            return f
        }, triangleArea: function (b, c, e) {
            var f, h = THREE.GeometryUtils.__v1;
            h.sub(b, c);
            f = h.length();
            h.sub(b, e);
            b = h.length();
            h.sub(c, e);
            e = h.length();
            c = 0.5 * (f + b + e);
            return Math.sqrt(c * (c - f) * (c - b) * (c - e))
        }, random16: function () {
            return (65280 * Math.random() + 255 * Math.random()) / 65535
        }
    };
    THREE.GeometryUtils.random = THREE.GeometryUtils.random16;
    THREE.GeometryUtils.__v1 = new THREE.Vector3;
    THREE.ImageUtils = {
        loadTexture: function (b, c, e) {
            var f = new Image, h = new THREE.Texture(f, c);
            f.onload = function () {
                h.needsUpdate = !0;
                e && e(this)
            };
            f.crossOrigin = "";
            f.src = b;
            return h
        }, loadTextureCube: function (b, c, e) {
            var f, h = [], m = new THREE.Texture(h, c), c = h.loadCount = 0;
            for (f = b.length; c < f; ++c)h[c] = new Image, h[c].onload = function () {
                h.loadCount += 1;
                if (h.loadCount == 6)m.needsUpdate = !0;
                e && e(this)
            }, h[c].crossOrigin = "", h[c].src = b[c];
            return m
        }, getNormalMap: function (b, c) {
            var e = function (b) {
                var e = Math.sqrt(b[0] * b[0] + b[1] * b[1] +
                b[2] * b[2]);
                return [b[0] / e, b[1] / e, b[2] / e]
            };
            c |= 1;
            var f = b.width, h = b.height, m = document.createElement("canvas");
            m.width = f;
            m.height = h;
            var k = m.getContext("2d");
            k.drawImage(b, 0, 0);
            for (var n = k.getImageData(0, 0, f, h).data, u = k.createImageData(f, h), p = u.data, v = 0; v < f; v++)for (var t = 1; t < h; t++) {
                var x = t - 1 < 0 ? h - 1 : t - 1, w = (t + 1) % h, z = v - 1 < 0 ? f - 1 : v - 1, y = (v + 1) % f, B = [], D = [0, 0, n[(t * f + v) * 4] / 255 * c];
                B.push([-1, 0, n[(t * f + z) * 4] / 255 * c]);
                B.push([-1, -1, n[(x * f + z) * 4] / 255 * c]);
                B.push([0, -1, n[(x * f + v) * 4] / 255 * c]);
                B.push([1, -1, n[(x * f + y) * 4] / 255 * c]);
                B.push([1, 0, n[(t * f + y) * 4] / 255 * c]);
                B.push([1, 1, n[(w * f + y) * 4] / 255 * c]);
                B.push([0, 1, n[(w * f + v) * 4] / 255 * c]);
                B.push([-1, 1, n[(w * f + z) * 4] / 255 * c]);
                x = [];
                z = B.length;
                for (w = 0; w < z; w++) {
                    var y = B[w], G = B[(w + 1) % z], y = [y[0] - D[0], y[1] - D[1], y[2] - D[2]], G = [G[0] - D[0], G[1] - D[1], G[2] - D[2]];
                    x.push(e([y[1] * G[2] - y[2] * G[1], y[2] * G[0] - y[0] * G[2], y[0] * G[1] - y[1] * G[0]]))
                }
                B = [0, 0, 0];
                for (w = 0; w < x.length; w++)B[0] += x[w][0], B[1] += x[w][1], B[2] += x[w][2];
                B[0] /= x.length;
                B[1] /= x.length;
                B[2] /= x.length;
                D = (t * f + v) * 4;
                p[D] = (B[0] + 1) / 2 * 255 | 0;
                p[D + 1] = (B[1] + 0.5) *
                255 | 0;
                p[D + 2] = B[2] * 255 | 0;
                p[D + 3] = 255
            }
            k.putImageData(u, 0, 0);
            return m
        }
    };
    THREE.SceneUtils = {
        showHierarchy: function (b, c) {
            THREE.SceneUtils.traverseHierarchy(b, function (b) {
                b.visible = c
            })
        }, traverseHierarchy: function (b, c) {
            var e, f, h = b.children.length;
            for (f = 0; f < h; f++)e = b.children[f], c(e), THREE.SceneUtils.traverseHierarchy(e, c)
        }
    };
    if (THREE.WebGLRenderer)THREE.ShaderUtils = {
        lib: {
            fresnel: {
                uniforms: {
                    mRefractionRatio: {type: "f", value: 1.02},
                    mFresnelBias: {type: "f", value: 0.1},
                    mFresnelPower: {type: "f", value: 2},
                    mFresnelScale: {type: "f", value: 1},
                    tCube: {type: "t", value: 1, texture: null}
                },
                fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
                vertexShader: "uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"
            },
            normal: {
                uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
                    enableAO: {type: "i", value: 0},
                    enableDiffuse: {type: "i", value: 0},
                    enableSpecular: {type: "i", value: 0},
                    tDiffuse: {type: "t", value: 0, texture: null},
                    tNormal: {type: "t", value: 2, texture: null},
                    tSpecular: {type: "t", value: 3, texture: null},
                    tAO: {type: "t", value: 4, texture: null},
                    uNormalScale: {type: "f", value: 1},
                    tDisplacement: {type: "t", value: 5, texture: null},
                    uDisplacementBias: {type: "f", value: 0},
                    uDisplacementScale: {type: "f", value: 1},
                    uDiffuseColor: {
                        type: "c",
                        value: new THREE.Color(15658734)
                    },
                    uSpecularColor: {type: "c", value: new THREE.Color(1118481)},
                    uAmbientColor: {type: "c", value: new THREE.Color(328965)},
                    uShininess: {type: "f", value: 30},
                    uOpacity: {type: "f", value: 1}
                }]),
                fragmentShader: ["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform float uNormalScale;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;",
                    THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( 1.0 );\nvec4 mColor = vec4( uDiffuseColor, uOpacity );\nvec4 mSpecular = vec4( uSpecularColor, uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse )\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\nif( enableAO )\ngl_FragColor = gl_FragColor * texture2D( tAO, vUv );\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( vTangent, vBinormal, vNormal );\nvec3 finalNormal = tsb * normalTex;\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec4 pointTotal = vec4( vec3( 0.0 ), 1.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + viewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = specularTex.r * pow( pointDotNormalHalf, uShininess );\npointTotal  += pointDistance * vec4( pointLightColor[ i ], 1.0 ) * ( mColor * pointDiffuseWeight + mSpecular * pointSpecularWeight * pointDiffuseWeight );\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec4 dirTotal = vec4( vec3( 0.0 ), 1.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + viewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = specularTex.r * pow( dirDotNormalHalf, uShininess );\ndirTotal  += vec4( directionalLightColor[ i ], 1.0 ) * ( mColor * dirDiffuseWeight + mSpecular * dirSpecularWeight * dirDiffuseWeight );\n}\n#endif\nvec4 totalLight = vec4( ambientLightColor * uAmbientColor, uOpacity );\n#if MAX_DIR_LIGHTS > 0\ntotalLight += dirTotal;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalLight += pointTotal;\n#endif\ngl_FragColor = gl_FragColor * totalLight;",
                    THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
                vertexShader: "attribute vec4 tangent;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvViewPosition = -mvPosition.xyz;\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvBinormal = normalize( vBinormal );\nvUv = uv;\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#ifdef VERTEX_TEXTURES\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\nvec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;\ngl_Position = projectionMatrix * displacedPosition;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif\n}"
            },
            cube: {
                uniforms: {tCube: {type: "t", value: 1, texture: null}},
                vertexShader: "varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
                fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( - wPos.x, wPos.yz ) );\n}"
            }
        }
    };
    THREE.Curve = function () {
    };
    THREE.Curve.prototype.getPoint = function () {
        console.log("Warning, getPoint() not implemented!");
        return null
    };
    THREE.Curve.prototype.getPointAt = function (b) {
        return this.getPoint(this.getUtoTmapping(b))
    };
    THREE.Curve.prototype.getPoints = function (b) {
        b || (b = 5);
        var c, e = [];
        for (c = 0; c <= b; c++)e.push(this.getPoint(c / b));
        return e
    };
    THREE.Curve.prototype.getSpacedPoints = function (b) {
        b || (b = 5);
        var c, e = [];
        for (c = 0; c <= b; c++)e.push(this.getPointAt(c / b));
        return e
    };
    THREE.Curve.prototype.getLength = function () {
        var b = this.getLengths();
        return b[b.length - 1]
    };
    THREE.Curve.prototype.getLengths = function (b) {
        b || (b = 200);
        if (this.cacheArcLengths && this.cacheArcLengths.length == b + 1)return this.cacheArcLengths;
        var c = [], e, f = this.getPoint(0), h, m = 0;
        c.push(0);
        for (h = 1; h <= b; h++)e = this.getPoint(h / b), m += e.distanceTo(f), c.push(m), f = e;
        return this.cacheArcLengths = c
    };
    THREE.Curve.prototype.getUtoTmapping = function (b, c) {
        var e = this.getLengths(), f = 0, h = e.length, m;
        m = c ? c : b * e[h - 1];
        time = Date.now();
        for (var k = 0, n = h - 1, u; k <= n;)if (f = Math.floor(k + (n - k) / 2), u = e[f] - m, u < 0)k = f + 1; else if (u > 0)n = f - 1; else {
            n = f;
            break
        }
        f = n;
        if (e[f] == m)return f / (h - 1);
        k = e[f];
        return e = (f + (m - k) / (e[f + 1] - k)) / (h - 1)
    };
    THREE.Curve.prototype.getNormalVector = function (b) {
        b = this.getTangent(b);
        return new THREE.Vector2(-b.y, b.x)
    };
    THREE.Curve.prototype.getTangent = function (b) {
        var c = b - 1.0E-4;
        b += 1.0E-4;
        c < 0 && (c = 0);
        b > 1 && (b = 1);
        var c = this.getPoint(c), b = this.getPoint(b), e = new THREE.Vector2;
        e.sub(b, c);
        return e.unit()
    };
    THREE.LineCurve = function (b, c) {
        b instanceof THREE.Vector2 ? (this.v1 = b, this.v2 = c) : THREE.LineCurve.oldConstructor.apply(this, arguments)
    };
    THREE.LineCurve.oldConstructor = function (b, c, e, f) {
        this.constructor(new THREE.Vector2(b, c), new THREE.Vector2(e, f))
    };
    THREE.LineCurve.prototype = new THREE.Curve;
    THREE.LineCurve.prototype.constructor = THREE.LineCurve;
    THREE.LineCurve.prototype.getPoint = function (b) {
        var c = new THREE.Vector2;
        c.sub(this.v2, this.v1);
        c.multiplyScalar(b).addSelf(this.v1);
        return c
    };
    THREE.LineCurve.prototype.getPointAt = function (b) {
        return this.getPoint(b)
    };
    THREE.LineCurve.prototype.getTangent = function () {
        var b = new THREE.Vector2;
        b.sub(this.v2, this.v1);
        b.normalize();
        return b
    };
    THREE.QuadraticBezierCurve = function (b, c, e) {
        if (!(c instanceof THREE.Vector2))var f = Array.prototype.slice.call(arguments), b = new THREE.Vector2(f[0], f[1]), c = new THREE.Vector2(f[2], f[3]), e = new THREE.Vector2(f[4], f[5]);
        this.v0 = b;
        this.v1 = c;
        this.v2 = e
    };
    THREE.QuadraticBezierCurve.prototype = new THREE.Curve;
    THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve;
    THREE.QuadraticBezierCurve.prototype.getPoint = function (b) {
        var c;
        c = THREE.Shape.Utils.b2(b, this.v0.x, this.v1.x, this.v2.x);
        b = THREE.Shape.Utils.b2(b, this.v0.y, this.v1.y, this.v2.y);
        return new THREE.Vector2(c, b)
    };
    THREE.QuadraticBezierCurve.prototype.getTangent = function (b) {
        var c;
        c = THREE.Curve.Utils.tangentQuadraticBezier(b, this.v0.x, this.v1.x, this.v2.x);
        b = THREE.Curve.Utils.tangentQuadraticBezier(b, this.v0.y, this.v1.y, this.v2.y);
        c = new THREE.Vector2(c, b);
        c.normalize();
        return c
    };
    THREE.CubicBezierCurve = function (b, c, e, f) {
        if (!(c instanceof THREE.Vector2))var h = Array.prototype.slice.call(arguments), b = new THREE.Vector2(h[0], h[1]), c = new THREE.Vector2(h[2], h[3]), e = new THREE.Vector2(h[4], h[5]), f = new THREE.Vector2(h[6], h[7]);
        this.v0 = b;
        this.v1 = c;
        this.v2 = e;
        this.v3 = f
    };
    THREE.CubicBezierCurve.prototype = new THREE.Curve;
    THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve;
    THREE.CubicBezierCurve.prototype.getPoint = function (b) {
        var c;
        c = THREE.Shape.Utils.b3(b, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
        b = THREE.Shape.Utils.b3(b, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
        return new THREE.Vector2(c, b)
    };
    THREE.CubicBezierCurve.prototype.getTangent = function (b) {
        var c;
        c = THREE.Curve.Utils.tangentCubicBezier(b, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
        b = THREE.Curve.Utils.tangentCubicBezier(b, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
        c = new THREE.Vector2(c, b);
        c.normalize();
        return c
    };
    THREE.SplineCurve = function (b) {
        this.points = b
    };
    THREE.SplineCurve.prototype = new THREE.Curve;
    THREE.SplineCurve.prototype.constructor = THREE.SplineCurve;
    THREE.SplineCurve.prototype.getPoint = function (b) {
        var c = new THREE.Vector2, e = [], f = this.points, h;
        h = (f.length - 1) * b;
        b = Math.floor(h);
        h -= b;
        e[0] = b == 0 ? b : b - 1;
        e[1] = b;
        e[2] = b > f.length - 2 ? b : b + 1;
        e[3] = b > f.length - 3 ? b : b + 2;
        c.x = THREE.Curve.Utils.interpolate(f[e[0]].x, f[e[1]].x, f[e[2]].x, f[e[3]].x, h);
        c.y = THREE.Curve.Utils.interpolate(f[e[0]].y, f[e[1]].y, f[e[2]].y, f[e[3]].y, h);
        return c
    };
    THREE.ArcCurve = function (b, c, e, f, h, m) {
        this.aX = b;
        this.aY = c;
        this.aRadius = e;
        this.aStartAngle = f;
        this.aEndAngle = h;
        this.aClockwise = m
    };
    THREE.ArcCurve.prototype = new THREE.Curve;
    THREE.ArcCurve.prototype.constructor = THREE.ArcCurve;
    THREE.ArcCurve.prototype.getPoint = function (b) {
        var c = this.aEndAngle - this.aStartAngle;
        this.aClockwise || (b = 1 - b);
        b = this.aStartAngle + b * c;
        return new THREE.Vector2(this.aX + this.aRadius * Math.cos(b), this.aY + this.aRadius * Math.sin(b))
    };
    THREE.Curve.Utils = {
        tangentQuadraticBezier: function (b, c, e, f) {
            return 2 * (1 - b) * (e - c) + 2 * b * (f - e)
        }, tangentCubicBezier: function (b, c, e, f, h) {
            return -3 * c * (1 - b) * (1 - b) + 3 * e * (1 - b) * (1 - b) - 6 * b * e * (1 - b) + 6 * b * f * (1 - b) - 3 * b * b * f + 3 * b * b * h
        }, tangentSpline: function (b) {
            return 6 * b * b - 6 * b + (3 * b * b - 4 * b + 1) + (-6 * b * b + 6 * b) + (3 * b * b - 2 * b)
        }, interpolate: function (b, c, e, f, h) {
            var b = (e - b) * 0.5, f = (f - c) * 0.5, m = h * h;
            return (2 * c - 2 * e + b + f) * h * m + (-3 * c + 3 * e - 2 * b - f) * m + b * h + c
        }
    };
    THREE.Curve.create = function (b, c) {
        b.prototype = new THREE.Curve;
        b.prototype.constructor = b;
        b.prototype.getPoint = c;
        return b
    };
    THREE.LineCurve3 = THREE.Curve.create(function (b, c) {
        this.v1 = b;
        this.v2 = c
    }, function (b) {
        var c = new THREE.Vector3;
        c.sub(v2, v1);
        c.multiplyScalar(b);
        c.addSelf(this.v1);
        return c
    });
    THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (b, c, e) {
        this.v0 = b;
        this.v1 = c;
        this.v2 = e
    }, function (b) {
        var c, e;
        c = THREE.Shape.Utils.b2(b, this.v0.x, this.v1.x, this.v2.x);
        e = THREE.Shape.Utils.b2(b, this.v0.y, this.v1.y, this.v2.y);
        b = THREE.Shape.Utils.b2(b, this.v0.z, this.v1.z, this.v2.z);
        return new THREE.Vector3(c, e, b)
    });
    THREE.CurvePath = function () {
        this.curves = [];
        this.bends = []
    };
    THREE.CurvePath.prototype = new THREE.Curve;
    THREE.CurvePath.prototype.constructor = THREE.CurvePath;
    THREE.CurvePath.prototype.add = function (b) {
        this.curves.push(b)
    };
    THREE.CurvePath.prototype.checkConnection = function () {
    };
    THREE.CurvePath.prototype.closePath = function () {
    };
    THREE.CurvePath.prototype.getPoint = function (b) {
        for (var c = b * this.getLength(), e = this.getCurveLengths(), b = 0; b < e.length;) {
            if (e[b] >= c)return c = e[b] - c, b = this.curves[b], c = 1 - c / b.getLength(), b.getPointAt(c);
            b++
        }
        return null
    };
    THREE.CurvePath.prototype.getLength = function () {
        var b = this.getCurveLengths();
        return b[b.length - 1]
    };
    THREE.CurvePath.prototype.getCurveLengths = function () {
        if (this.cacheLengths && this.cacheLengths.length == this.curves.length)return this.cacheLengths;
        var b = [], c = 0, e, f = this.curves.length;
        for (e = 0; e < f; e++)c += this.curves[e].getLength(), b.push(c);
        return this.cacheLengths = b
    };
    THREE.CurvePath.prototype.getBoundingBox = function () {
        var b = this.getPoints(), c, e, f, h;
        c = e = Number.NEGATIVE_INFINITY;
        f = h = Number.POSITIVE_INFINITY;
        var m, k, n, u;
        u = new THREE.Vector2;
        k = 0;
        for (n = b.length; k < n; k++) {
            m = b[k];
            if (m.x > c)c = m.x; else if (m.x < f)f = m.x;
            if (m.y > e)e = m.y; else if (m.y < e)h = m.y;
            u.addSelf(m.x, m.y)
        }
        return {minX: f, minY: h, maxX: c, maxY: e, centroid: u.divideScalar(n)}
    };
    THREE.CurvePath.prototype.createPointsGeometry = function (b) {
        return this.createGeometry(this.getPoints(b, !0))
    };
    THREE.CurvePath.prototype.createSpacedPointsGeometry = function (b) {
        return this.createGeometry(this.getSpacedPoints(b, !0))
    };
    THREE.CurvePath.prototype.createGeometry = function (b) {
        for (var c = new THREE.Geometry, e = 0; e < b.length; e++)c.vertices.push(new THREE.Vertex(new THREE.Vector3(b[e].x, b[e].y, 0)));
        return c
    };
    THREE.CurvePath.prototype.addWrapPath = function (b) {
        this.bends.push(b)
    };
    THREE.CurvePath.prototype.getTransformedPoints = function (b, c) {
        var e = this.getPoints(b), f, h;
        if (!c)c = this.bends;
        f = 0;
        for (h = c.length; f < h; f++)e = this.getWrapPoints(e, c[f]);
        return e
    };
    THREE.CurvePath.prototype.getTransformedSpacedPoints = function (b, c) {
        var e = this.getSpacedPoints(b), f, h;
        if (!c)c = this.bends;
        f = 0;
        for (h = c.length; f < h; f++)e = this.getWrapPoints(e, c[f]);
        return e
    };
    THREE.CurvePath.prototype.getWrapPoints = function (b, c) {
        var e = this.getBoundingBox(), f, h, m, k, n, u;
        f = 0;
        for (h = b.length; f < h; f++)m = b[f], k = m.x, n = m.y, u = k / e.maxX, u = c.getUtoTmapping(u, k), k = c.getPoint(u), n = c.getNormalVector(u).multiplyScalar(n), m.x = k.x + n.x, m.y = k.y + n.y;
        return b
    };
    THREE.Path = function (b) {
        THREE.CurvePath.call(this);
        this.actions = [];
        b && this.fromPoints(b)
    };
    THREE.Path.prototype = new THREE.CurvePath;
    THREE.Path.prototype.constructor = THREE.Path;
    THREE.PathActions = {
        MOVE_TO: "moveTo",
        LINE_TO: "lineTo",
        QUADRATIC_CURVE_TO: "quadraticCurveTo",
        BEZIER_CURVE_TO: "bezierCurveTo",
        CSPLINE_THRU: "splineThru",
        ARC: "arc"
    };
    THREE.Path.prototype.fromPoints = function (b) {
        this.moveTo(b[0].x, b[0].y);
        var c, e = b.length;
        for (c = 1; c < e; c++)this.lineTo(b[c].x, b[c].y)
    };
    THREE.Path.prototype.moveTo = function () {
        var b = Array.prototype.slice.call(arguments);
        this.actions.push({action: THREE.PathActions.MOVE_TO, args: b})
    };
    THREE.Path.prototype.lineTo = function (b, c) {
        var e = Array.prototype.slice.call(arguments), f = this.actions[this.actions.length - 1].args;
        this.curves.push(new THREE.LineCurve(new THREE.Vector2(f[f.length - 2], f[f.length - 1]), new THREE.Vector2(b, c)));
        this.actions.push({action: THREE.PathActions.LINE_TO, args: e})
    };
    THREE.Path.prototype.quadraticCurveTo = function (b, c, e, f) {
        var h = Array.prototype.slice.call(arguments), m = this.actions[this.actions.length - 1].args;
        this.curves.push(new THREE.QuadraticBezierCurve(new THREE.Vector2(m[m.length - 2], m[m.length - 1]), new THREE.Vector2(b, c), new THREE.Vector2(e, f)));
        this.actions.push({action: THREE.PathActions.QUADRATIC_CURVE_TO, args: h})
    };
    THREE.Path.prototype.bezierCurveTo = function (b, c, e, f, h, m) {
        var k = Array.prototype.slice.call(arguments), n = this.actions[this.actions.length - 1].args;
        this.curves.push(new THREE.CubicBezierCurve(new THREE.Vector2(n[n.length - 2], n[n.length - 1]), new THREE.Vector2(b, c), new THREE.Vector2(e, f), new THREE.Vector2(h, m)));
        this.actions.push({action: THREE.PathActions.BEZIER_CURVE_TO, args: k})
    };
    THREE.Path.prototype.splineThru = function (b) {
        var c = Array.prototype.slice.call(arguments), e = this.actions[this.actions.length - 1].args, e = [new THREE.Vector2(e[e.length - 2], e[e.length - 1])], e = e.concat(b);
        this.curves.push(new THREE.SplineCurve(e));
        this.actions.push({action: THREE.PathActions.CSPLINE_THRU, args: c})
    };
    THREE.Path.prototype.arc = function (b, c, e, f, h, m) {
        var k = Array.prototype.slice.call(arguments);
        this.curves.push(new THREE.ArcCurve(b, c, e, f, h, m));
        this.actions.push({action: THREE.PathActions.ARC, args: k})
    };
    THREE.Path.prototype.getSpacedPoints = function (b) {
        b || (b = 40);
        for (var c = [], e = 0; e < b; e++)c.push(this.getPoint(e / b));
        return c
    };
    THREE.Path.prototype.getPoints = function (b, c) {
        var b = b || 12, e = [], f, h, m, k, n, u, p, v, t, x, w, z, y;
        f = 0;
        for (h = this.actions.length; f < h; f++)switch (m = this.actions[f], k = m.action, m = m.args, k) {
            case THREE.PathActions.LINE_TO:
                e.push(new THREE.Vector2(m[0], m[1]));
                break;
            case THREE.PathActions.QUADRATIC_CURVE_TO:
                n = m[2];
                u = m[3];
                t = m[0];
                x = m[1];
                e.length > 0 ? (k = e[e.length - 1], w = k.x, z = k.y) : (k = this.actions[f - 1].args, w = k[k.length - 2], z = k[k.length - 1]);
                for (k = 1; k <= b; k++)y = k / b, m = THREE.Shape.Utils.b2(y, w, t, n), y = THREE.Shape.Utils.b2(y, z, x,
                    u), e.push(new THREE.Vector2(m, y));
                break;
            case THREE.PathActions.BEZIER_CURVE_TO:
                n = m[4];
                u = m[5];
                t = m[0];
                x = m[1];
                p = m[2];
                v = m[3];
                e.length > 0 ? (k = e[e.length - 1], w = k.x, z = k.y) : (k = this.actions[f - 1].args, w = k[k.length - 2], z = k[k.length - 1]);
                for (k = 1; k <= b; k++)y = k / b, m = THREE.Shape.Utils.b3(y, w, t, p, n), y = THREE.Shape.Utils.b3(y, z, x, v, u), e.push(new THREE.Vector2(m, y));
                break;
            case THREE.PathActions.CSPLINE_THRU:
                k = this.actions[f - 1].args;
                k = [new THREE.Vector2(k[k.length - 2], k[k.length - 1])];
                y = b * m[0].length;
                k = k.concat(m[0]);
                m = new THREE.SplineCurve(k);
                for (k = 1; k <= y; k++)e.push(m.getPointAt(k / y));
                break;
            case THREE.PathActions.ARC:
                k = this.actions[f - 1].args;
                n = m[0];
                u = m[1];
                p = m[2];
                t = m[3];
                y = m[4];
                x = !!m[5];
                v = k[k.length - 2];
                w = k[k.length - 1];
                k.length == 0 && (v = w = 0);
                z = y - t;
                var B = b * 2;
                for (k = 1; k <= B; k++)y = k / B, x || (y = 1 - y), y = t + y * z, m = v + n + p * Math.cos(y), y = w + u + p * Math.sin(y), e.push(new THREE.Vector2(m, y))
        }
        c && e.push(e[0]);
        return e
    };
    THREE.Path.prototype.transform = function (b, c) {
        this.getBoundingBox();
        return this.getWrapPoints(this.getPoints(c), b)
    };
    THREE.Path.prototype.nltransform = function (b, c, e, f, h, m) {
        var k = this.getPoints(), n, u, p, v, t;
        n = 0;
        for (u = k.length; n < u; n++)p = k[n], v = p.x, t = p.y, p.x = b * v + c * t + e, p.y = f * t + h * v + m;
        return k
    };
    THREE.Path.prototype.debug = function (b) {
        var c = this.getBoundingBox();
        b || (b = document.createElement("canvas"), b.setAttribute("width", c.maxX + 100), b.setAttribute("height", c.maxY + 100), document.body.appendChild(b));
        c = b.getContext("2d");
        c.fillStyle = "white";
        c.fillRect(0, 0, b.width, b.height);
        c.strokeStyle = "black";
        c.beginPath();
        var e, f, h, b = 0;
        for (e = this.actions.length; b < e; b++)f = this.actions[b], h = f.args, f = f.action, f != THREE.PathActions.CSPLINE_THRU && c[f].apply(c, h);
        c.stroke();
        c.closePath();
        c.strokeStyle = "red";
        f =
            this.getPoints();
        b = 0;
        for (e = f.length; b < e; b++)h = f[b], c.beginPath(), c.arc(h.x, h.y, 1.5, 0, Math.PI * 2, !1), c.stroke(), c.closePath()
    };
    THREE.Path.prototype.toShapes = function () {
        var b, c, e, f, h = [], m = new THREE.Path;
        b = 0;
        for (c = this.actions.length; b < c; b++)e = this.actions[b], f = e.args, e = e.action, e == THREE.PathActions.MOVE_TO && m.actions.length != 0 && (h.push(m), m = new THREE.Path), m[e].apply(m, f);
        m.actions.length != 0 && h.push(m);
        if (h.length == 0)return [];
        var k, m = [];
        if (THREE.Shape.Utils.isClockWise(h[0].getPoints())) {
            b = 0;
            for (c = h.length; b < c; b++)f = h[b], THREE.Shape.Utils.isClockWise(f.getPoints()) ? (k && m.push(k), k = new THREE.Shape, k.actions = f.actions, k.curves =
                f.curves) : k.holes.push(f);
            m.push(k)
        } else {
            k = new THREE.Shape;
            b = 0;
            for (c = h.length; b < c; b++)f = h[b], THREE.Shape.Utils.isClockWise(f.getPoints()) ? (k.actions = f.actions, k.curves = f.curves, m.push(k), k = new THREE.Shape) : k.holes.push(f)
        }
        return m
    };
    THREE.Shape = function () {
        THREE.Path.apply(this, arguments);
        this.holes = []
    };
    THREE.Shape.prototype = new THREE.Path;
    THREE.Shape.prototype.constructor = THREE.Path;
    THREE.Shape.prototype.extrude = function (b) {
        return new THREE.ExtrudeGeometry(this, b)
    };
    THREE.Shape.prototype.getPointsHoles = function (b) {
        var c, e = this.holes.length, f = [];
        for (c = 0; c < e; c++)f[c] = this.holes[c].getTransformedPoints(b, this.bends);
        return f
    };
    THREE.Shape.prototype.getSpacedPointsHoles = function (b) {
        var c, e = this.holes.length, f = [];
        for (c = 0; c < e; c++)f[c] = this.holes[c].getTransformedSpacedPoints(b, this.bends);
        return f
    };
    THREE.Shape.prototype.extractAllPoints = function (b) {
        return {shape: this.getTransformedPoints(b), holes: this.getPointsHoles(b)}
    };
    THREE.Shape.prototype.extractAllSpacedPoints = function (b) {
        return {shape: this.getTransformedSpacedPoints(b), holes: this.getSpacedPointsHoles(b)}
    };
    THREE.Shape.Utils = {
        removeHoles: function (b, c) {
            var e = b.concat(), f = e.concat(), h, m, k, n, u, p, v, t, x, w, z = [];
            for (u = 0; u < c.length; u++) {
                p = c[u];
                f = f.concat(p);
                m = Number.POSITIVE_INFINITY;
                for (h = 0; h < p.length; h++) {
                    x = p[h];
                    w = [];
                    for (t = 0; t < e.length; t++)v = e[t], v = x.distanceToSquared(v), w.push(v), v < m && (m = v, k = h, n = t)
                }
                h = n - 1 >= 0 ? n - 1 : e.length - 1;
                m = k - 1 >= 0 ? k - 1 : p.length - 1;
                var y = [p[k], e[n], e[h]];
                t = THREE.FontUtils.Triangulate.area(y);
                var B = [p[k], p[m], e[n]];
                x = THREE.FontUtils.Triangulate.area(B);
                w = n;
                v = k;
                n += 1;
                k += -1;
                n < 0 && (n += e.length);
                n %=
                    e.length;
                k < 0 && (k += p.length);
                k %= p.length;
                h = n - 1 >= 0 ? n - 1 : e.length - 1;
                m = k - 1 >= 0 ? k - 1 : p.length - 1;
                y = [p[k], e[n], e[h]];
                y = THREE.FontUtils.Triangulate.area(y);
                B = [p[k], p[m], e[n]];
                B = THREE.FontUtils.Triangulate.area(B);
                t + x > y + B && (n = w, k = v, n < 0 && (n += e.length), n %= e.length, k < 0 && (k += p.length), k %= p.length, h = n - 1 >= 0 ? n - 1 : e.length - 1, m = k - 1 >= 0 ? k - 1 : p.length - 1);
                t = e.slice(0, n);
                x = e.slice(n);
                w = p.slice(k);
                v = p.slice(0, k);
                m = [p[k], p[m], e[n]];
                z.push([p[k], e[n], e[h]]);
                z.push(m);
                e = t.concat(w).concat(v).concat(x)
            }
            return {
                shape: e, isolatedPts: z,
                allpoints: f
            }
        }, triangulateShape: function (b, c) {
            var e = THREE.Shape.Utils.removeHoles(b, c), f = e.allpoints, h = e.isolatedPts, e = THREE.FontUtils.Triangulate(e.shape, !1), m, k, n, u, p = {};
            m = 0;
            for (k = f.length; m < k; m++)u = f[m].x + ":" + f[m].y, p[u] !== void 0 && console.log("Duplicate point", u), p[u] = m;
            m = 0;
            for (k = e.length; m < k; m++) {
                n = e[m];
                for (f = 0; f < 3; f++)u = n[f].x + ":" + n[f].y, u = p[u], u !== void 0 && (n[f] = u)
            }
            m = 0;
            for (k = h.length; m < k; m++) {
                n = h[m];
                for (f = 0; f < 3; f++)u = n[f].x + ":" + n[f].y, u = p[u], u !== void 0 && (n[f] = u)
            }
            return e.concat(h)
        }, isClockWise: function (b) {
            return THREE.FontUtils.Triangulate.area(b) <
                0
        }, b2p0: function (b, c) {
            var e = 1 - b;
            return e * e * c
        }, b2p1: function (b, c) {
            return 2 * (1 - b) * b * c
        }, b2p2: function (b, c) {
            return b * b * c
        }, b2: function (b, c, e, f) {
            return this.b2p0(b, c) + this.b2p1(b, e) + this.b2p2(b, f)
        }, b3p0: function (b, c) {
            var e = 1 - b;
            return e * e * e * c
        }, b3p1: function (b, c) {
            var e = 1 - b;
            return 3 * e * e * b * c
        }, b3p2: function (b, c) {
            return 3 * (1 - b) * b * b * c
        }, b3p3: function (b, c) {
            return b * b * b * c
        }, b3: function (b, c, e, f, h) {
            return this.b3p0(b, c) + this.b3p1(b, e) + this.b3p2(b, f) + this.b3p3(b, h)
        }
    };
    THREE.TextPath = function (b, c) {
        THREE.Path.call(this);
        this.parameters = c || {};
        this.set(b)
    };
    THREE.TextPath.prototype.set = function (b, c) {
        this.text = b;
        var c = c || this.parameters, e = c.curveSegments !== void 0 ? c.curveSegments : 4, f = c.font !== void 0 ? c.font : "helvetiker", h = c.weight !== void 0 ? c.weight : "normal", m = c.style !== void 0 ? c.style : "normal";
        THREE.FontUtils.size = c.size !== void 0 ? c.size : 100;
        THREE.FontUtils.divisions = e;
        THREE.FontUtils.face = f;
        THREE.FontUtils.weight = h;
        THREE.FontUtils.style = m
    };
    THREE.TextPath.prototype.toShapes = function () {
        for (var b = THREE.FontUtils.drawText(this.text).paths, c = [], e = 0, f = b.length; e < f; e++)c = c.concat(b[e].toShapes());
        return c
    };
    THREE.AnimationHandler = function () {
        var b = [], c = {}, e = {
            update: function (e) {
                for (var c = 0; c < b.length; c++)b[c].update(e)
            }, addToUpdate: function (e) {
                b.indexOf(e) === -1 && b.push(e)
            }, removeFromUpdate: function (e) {
                e = b.indexOf(e);
                e !== -1 && b.splice(e, 1)
            }, add: function (b) {
                c[b.name] !== void 0 && console.log("THREE.AnimationHandler.add: Warning! " + b.name + " already exists in library. Overwriting.");
                c[b.name] = b;
                if (b.initialized !== !0) {
                    for (var e = 0; e < b.hierarchy.length; e++) {
                        for (var f = 0; f < b.hierarchy[e].keys.length; f++) {
                            if (b.hierarchy[e].keys[f].time <
                                0)b.hierarchy[e].keys[f].time = 0;
                            if (b.hierarchy[e].keys[f].rot !== void 0 && !(b.hierarchy[e].keys[f].rot instanceof THREE.Quaternion)) {
                                var n = b.hierarchy[e].keys[f].rot;
                                b.hierarchy[e].keys[f].rot = new THREE.Quaternion(n[0], n[1], n[2], n[3])
                            }
                        }
                        if (b.hierarchy[e].keys[0].morphTargets !== void 0) {
                            n = {};
                            for (f = 0; f < b.hierarchy[e].keys.length; f++)for (var u = 0; u < b.hierarchy[e].keys[f].morphTargets.length; u++) {
                                var p = b.hierarchy[e].keys[f].morphTargets[u];
                                n[p] = -1
                            }
                            b.hierarchy[e].usedMorphTargets = n;
                            for (f = 0; f < b.hierarchy[e].keys.length; f++) {
                                var v =
                                {};
                                for (p in n) {
                                    for (u = 0; u < b.hierarchy[e].keys[f].morphTargets.length; u++)if (b.hierarchy[e].keys[f].morphTargets[u] === p) {
                                        v[p] = b.hierarchy[e].keys[f].morphTargetsInfluences[u];
                                        break
                                    }
                                    u === b.hierarchy[e].keys[f].morphTargets.length && (v[p] = 0)
                                }
                                b.hierarchy[e].keys[f].morphTargetsInfluences = v
                            }
                        }
                        for (f = 1; f < b.hierarchy[e].keys.length; f++)b.hierarchy[e].keys[f].time === b.hierarchy[e].keys[f - 1].time && (b.hierarchy[e].keys.splice(f, 1), f--);
                        for (f = 1; f < b.hierarchy[e].keys.length; f++)b.hierarchy[e].keys[f].index = f
                    }
                    f = parseInt(b.length *
                    b.fps, 10);
                    b.JIT = {};
                    b.JIT.hierarchy = [];
                    for (e = 0; e < b.hierarchy.length; e++)b.JIT.hierarchy.push(Array(f));
                    b.initialized = !0
                }
            }, get: function (b) {
                if (typeof b === "string")return c[b] ? c[b] : (console.log("THREE.AnimationHandler.get: Couldn't find animation " + b), null)
            }, parse: function (b) {
                var e = [];
                if (b instanceof THREE.SkinnedMesh)for (var c = 0; c < b.bones.length; c++)e.push(b.bones[c]); else f(b, e);
                return e
            }
        }, f = function (b, e) {
            e.push(b);
            for (var c = 0; c < b.children.length; c++)f(b.children[c], e)
        };
        e.LINEAR = 0;
        e.CATMULLROM = 1;
        e.CATMULLROM_FORWARD =
            2;
        return e
    }();
    THREE.Animation = function (b, c, e, f) {
        this.root = b;
        this.data = THREE.AnimationHandler.get(c);
        this.hierarchy = THREE.AnimationHandler.parse(b);
        this.currentTime = 0;
        this.timeScale = 1;
        this.isPlaying = !1;
        this.loop = this.isPaused = !0;
        this.interpolationType = e !== void 0 ? e : THREE.AnimationHandler.LINEAR;
        this.JITCompile = f !== void 0 ? f : !0;
        this.points = [];
        this.target = new THREE.Vector3
    };
    THREE.Animation.prototype.play = function (b, c) {
        if (!this.isPlaying) {
            this.isPlaying = !0;
            this.loop = b !== void 0 ? b : !0;
            this.currentTime = c !== void 0 ? c : 0;
            var e, f = this.hierarchy.length, h;
            for (e = 0; e < f; e++) {
                h = this.hierarchy[e];
                if (this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD)h.useQuaternion = !0;
                h.matrixAutoUpdate = !0;
                if (h.animationCache === void 0)h.animationCache = {}, h.animationCache.prevKey = {
                    pos: 0,
                    rot: 0,
                    scl: 0
                }, h.animationCache.nextKey = {pos: 0, rot: 0, scl: 0}, h.animationCache.originalMatrix = h instanceof
                THREE.Bone ? h.skinMatrix : h.matrix;
                var m = h.animationCache.prevKey;
                h = h.animationCache.nextKey;
                m.pos = this.data.hierarchy[e].keys[0];
                m.rot = this.data.hierarchy[e].keys[0];
                m.scl = this.data.hierarchy[e].keys[0];
                h.pos = this.getNextKeyWith("pos", e, 1);
                h.rot = this.getNextKeyWith("rot", e, 1);
                h.scl = this.getNextKeyWith("scl", e, 1)
            }
            this.update(0)
        }
        this.isPaused = !1;
        THREE.AnimationHandler.addToUpdate(this)
    };
    THREE.Animation.prototype.pause = function () {
        this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
        this.isPaused = !this.isPaused
    };
    THREE.Animation.prototype.stop = function () {
        this.isPaused = this.isPlaying = !1;
        THREE.AnimationHandler.removeFromUpdate(this);
        for (var b = 0; b < this.hierarchy.length; b++)if (this.hierarchy[b].animationCache !== void 0)this.hierarchy[b]instanceof THREE.Bone ? this.hierarchy[b].skinMatrix = this.hierarchy[b].animationCache.originalMatrix : this.hierarchy[b].matrix = this.hierarchy[b].animationCache.originalMatrix, delete this.hierarchy[b].animationCache
    };
    THREE.Animation.prototype.update = function (b) {
        if (this.isPlaying) {
            var c = ["pos", "rot", "scl"], e, f, h, m, k, n, u, p, v = this.data.JIT.hierarchy, t, x;
            this.currentTime += b * this.timeScale;
            x = this.currentTime;
            t = this.currentTime %= this.data.length;
            p = parseInt(Math.min(t * this.data.fps, this.data.length * this.data.fps), 10);
            for (var w = 0, z = this.hierarchy.length; w < z; w++)if (b = this.hierarchy[w], u = b.animationCache, this.JITCompile && v[w][p] !== void 0)b instanceof THREE.Bone ? (b.skinMatrix = v[w][p], b.matrixAutoUpdate = !1, b.matrixWorldNeedsUpdate = !1) : (b.matrix = v[w][p], b.matrixAutoUpdate = !1, b.matrixWorldNeedsUpdate = !0); else {
                if (this.JITCompile)b instanceof THREE.Bone ? b.skinMatrix = b.animationCache.originalMatrix : b.matrix = b.animationCache.originalMatrix;
                for (var y = 0; y < 3; y++) {
                    e = c[y];
                    k = u.prevKey[e];
                    n = u.nextKey[e];
                    if (n.time <= x) {
                        if (t < x)if (this.loop) {
                            k = this.data.hierarchy[w].keys[0];
                            for (n = this.getNextKeyWith(e, w, 1); n.time < t;)k = n, n = this.getNextKeyWith(e, w, n.index + 1)
                        } else {
                            this.stop();
                            return
                        } else {
                            do k = n, n = this.getNextKeyWith(e, w, n.index + 1); while (n.time <
                            t)
                        }
                        u.prevKey[e] = k;
                        u.nextKey[e] = n
                    }
                    b.matrixAutoUpdate = !0;
                    b.matrixWorldNeedsUpdate = !0;
                    f = (t - k.time) / (n.time - k.time);
                    h = k[e];
                    m = n[e];
                    if (f < 0 || f > 1)console.log("THREE.Animation.update: Warning! Scale out of bounds:" + f + " on bone " + w), f = f < 0 ? 0 : 1;
                    if (e === "pos")if (e = b.position, this.interpolationType === THREE.AnimationHandler.LINEAR)e.x = h[0] + (m[0] - h[0]) * f, e.y = h[1] + (m[1] - h[1]) * f, e.z = h[2] + (m[2] - h[2]) * f; else {
                        if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD)if (this.points[0] =
                                this.getPrevKeyWith("pos", w, k.index - 1).pos, this.points[1] = h, this.points[2] = m, this.points[3] = this.getNextKeyWith("pos", w, n.index + 1).pos, f = f * 0.33 + 0.33, h = this.interpolateCatmullRom(this.points, f), e.x = h[0], e.y = h[1], e.z = h[2], this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD)f = this.interpolateCatmullRom(this.points, f * 1.01), this.target.set(f[0], f[1], f[2]), this.target.subSelf(e), this.target.y = 0, this.target.normalize(), f = Math.atan2(this.target.x, this.target.z), b.rotation.set(0, f, 0)
                    } else if (e ===
                        "rot")THREE.Quaternion.slerp(h, m, b.quaternion, f); else if (e === "scl")e = b.scale, e.x = h[0] + (m[0] - h[0]) * f, e.y = h[1] + (m[1] - h[1]) * f, e.z = h[2] + (m[2] - h[2]) * f
                }
            }
            if (this.JITCompile && v[0][p] === void 0) {
                this.hierarchy[0].update(void 0, !0);
                for (w = 0; w < this.hierarchy.length; w++)v[w][p] = this.hierarchy[w]instanceof THREE.Bone ? this.hierarchy[w].skinMatrix.clone() : this.hierarchy[w].matrix.clone()
            }
        }
    };
    THREE.Animation.prototype.interpolateCatmullRom = function (b, c) {
        var e = [], f = [], h, m, k, n, u, p;
        h = (b.length - 1) * c;
        m = Math.floor(h);
        h -= m;
        e[0] = m == 0 ? m : m - 1;
        e[1] = m;
        e[2] = m > b.length - 2 ? m : m + 1;
        e[3] = m > b.length - 3 ? m : m + 2;
        m = b[e[0]];
        n = b[e[1]];
        u = b[e[2]];
        p = b[e[3]];
        e = h * h;
        k = h * e;
        f[0] = this.interpolate(m[0], n[0], u[0], p[0], h, e, k);
        f[1] = this.interpolate(m[1], n[1], u[1], p[1], h, e, k);
        f[2] = this.interpolate(m[2], n[2], u[2], p[2], h, e, k);
        return f
    };
    THREE.Animation.prototype.interpolate = function (b, c, e, f, h, m, k) {
        b = (e - b) * 0.5;
        f = (f - c) * 0.5;
        return (2 * (c - e) + b + f) * k + (-3 * (c - e) - 2 * b - f) * m + b * h + c
    };
    THREE.Animation.prototype.getNextKeyWith = function (b, c, e) {
        var f = this.data.hierarchy[c].keys;
        for (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? e = e < f.length - 1 ? e : f.length - 1 : e %= f.length; e < f.length; e++)if (f[e][b] !== void 0)return f[e];
        return this.data.hierarchy[c].keys[0]
    };
    THREE.Animation.prototype.getPrevKeyWith = function (b, c, e) {
        for (var f = this.data.hierarchy[c].keys, e = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? e > 0 ? e : 0 : e >= 0 ? e : e + f.length; e >= 0; e--)if (f[e][b] !== void 0)return f[e];
        return this.data.hierarchy[c].keys[f.length - 1]
    };
    THREE.FirstPersonCamera = function (b) {
        function c(b, c) {
            return function () {
                c.apply(b, arguments)
            }
        }

        THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
        this.movementSpeed = 1;
        this.lookSpeed = 0.005;
        this.noFly = !1;
        this.lookVertical = !0;
        this.autoForward = !1;
        this.activeLook = !0;
        this.heightSpeed = !1;
        this.heightCoef = 1;
        this.heightMin = 0;
        this.constrainVertical = !1;
        this.verticalMin = 0;
        this.verticalMax = 3.14;
        this.domElement = document;
        this.lastUpdate = (new Date).getTime();
        this.tdiff = 0;
        if (b) {
            if (b.movementSpeed !== void 0)this.movementSpeed =
                b.movementSpeed;
            if (b.lookSpeed !== void 0)this.lookSpeed = b.lookSpeed;
            if (b.noFly !== void 0)this.noFly = b.noFly;
            if (b.lookVertical !== void 0)this.lookVertical = b.lookVertical;
            if (b.autoForward !== void 0)this.autoForward = b.autoForward;
            if (b.activeLook !== void 0)this.activeLook = b.activeLook;
            if (b.heightSpeed !== void 0)this.heightSpeed = b.heightSpeed;
            if (b.heightCoef !== void 0)this.heightCoef = b.heightCoef;
            if (b.heightMin !== void 0)this.heightMin = b.heightMin;
            if (b.heightMax !== void 0)this.heightMax = b.heightMax;
            if (b.constrainVertical !== void 0)this.constrainVertical = b.constrainVertical;
            if (b.verticalMin !== void 0)this.verticalMin = b.verticalMin;
            if (b.verticalMax !== void 0)this.verticalMax = b.verticalMax;
            if (b.domElement !== void 0)this.domElement = b.domElement
        }
        this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = this.autoSpeedFactor = 0;
        this.mouseDragOn = this.freeze = this.moveRight = this.moveLeft = this.moveBackward = this.moveForward = !1;
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        this.onMouseDown = function (b) {
            b.preventDefault();
            b.stopPropagation();
            if (this.activeLook)switch (b.button) {
                case 0:
                    this.moveForward = !0;
                    break;
                case 2:
                    this.moveBackward = !0
            }
            this.mouseDragOn = !0
        };
        this.onMouseUp = function (b) {
            b.preventDefault();
            b.stopPropagation();
            if (this.activeLook)switch (b.button) {
                case 0:
                    this.moveForward = !1;
                    break;
                case 2:
                    this.moveBackward = !1
            }
            this.mouseDragOn = !1
        };
        this.onMouseMove = function (b) {
            this.mouseX = b.clientX - this.windowHalfX;
            this.mouseY = b.clientY - this.windowHalfY
        };
        this.onKeyDown = function (b) {
            switch (b.keyCode) {
                case 38:
                case 87:
                    this.moveForward = !0;
                    break;
                case 37:
                case 65:
                    this.moveLeft = !0;
                    break;
                case 40:
                case 83:
                    this.moveBackward = !0;
                    break;
                case 39:
                case 68:
                    this.moveRight = !0;
                    break;
                case 82:
                    this.moveUp = !0;
                    break;
                case 70:
                    this.moveDown = !0;
                    break;
                case 81:
                    this.freeze = !this.freeze
            }
        };
        this.onKeyUp = function (b) {
            switch (b.keyCode) {
                case 38:
                case 87:
                    this.moveForward = !1;
                    break;
                case 37:
                case 65:
                    this.moveLeft = !1;
                    break;
                case 40:
                case 83:
                    this.moveBackward = !1;
                    break;
                case 39:
                case 68:
                    this.moveRight = !1;
                    break;
                case 82:
                    this.moveUp = !1;
                    break;
                case 70:
                    this.moveDown = !1
            }
        };
        this.update =
            function () {
                var b = (new Date).getTime();
                this.tdiff = (b - this.lastUpdate) / 1E3;
                this.lastUpdate = b;
                if (!this.freeze) {
                    this.autoSpeedFactor = this.heightSpeed ? this.tdiff * ((this.position.y < this.heightMin ? this.heightMin : this.position.y > this.heightMax ? this.heightMax : this.position.y) - this.heightMin) * this.heightCoef : 0;
                    var c = this.tdiff * this.movementSpeed;
                    (this.moveForward || this.autoForward && !this.moveBackward) && this.translateZ(-(c + this.autoSpeedFactor));
                    this.moveBackward && this.translateZ(c);
                    this.moveLeft && this.translateX(-c);
                    this.moveRight && this.translateX(c);
                    this.moveUp && this.translateY(c);
                    this.moveDown && this.translateY(-c);
                    c = this.tdiff * this.lookSpeed;
                    this.activeLook || (c = 0);
                    this.lon += this.mouseX * c;
                    this.lookVertical && (this.lat -= this.mouseY * c);
                    this.lat = Math.max(-85, Math.min(85, this.lat));
                    this.phi = (90 - this.lat) * Math.PI / 180;
                    this.theta = this.lon * Math.PI / 180;
                    var b = this.target.position, h = this.position;
                    b.x = h.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
                    b.y = h.y + 100 * Math.cos(this.phi);
                    b.z = h.z + 100 * Math.sin(this.phi) * Math.sin(this.theta)
                }
                b =
                    1;
                this.constrainVertical && (b = 3.14 / (this.verticalMax - this.verticalMin));
                this.lon += this.mouseX * c;
                this.lookVertical && (this.lat -= this.mouseY * c * b);
                this.lat = Math.max(-85, Math.min(85, this.lat));
                this.phi = (90 - this.lat) * Math.PI / 180;
                this.theta = this.lon * Math.PI / 180;
                if (this.constrainVertical)this.phi = (this.phi - 0) * (this.verticalMax - this.verticalMin) / 3.14 + this.verticalMin;
                b = this.target.position;
                h = this.position;
                b.x = h.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
                b.y = h.y + 100 * Math.cos(this.phi);
                b.z = h.z + 100 * Math.sin(this.phi) *
                Math.sin(this.theta);
                this.supr.update.call(this)
            };
        this.domElement.addEventListener("contextmenu", function (b) {
            b.preventDefault()
        }, !1);
        this.domElement.addEventListener("mousemove", c(this, this.onMouseMove), !1);
        this.domElement.addEventListener("mousedown", c(this, this.onMouseDown), !1);
        this.domElement.addEventListener("mouseup", c(this, this.onMouseUp), !1);
        this.domElement.addEventListener("keydown", c(this, this.onKeyDown), !1);
        this.domElement.addEventListener("keyup", c(this, this.onKeyUp), !1)
    };
    THREE.FirstPersonCamera.prototype = new THREE.Camera;
    THREE.FirstPersonCamera.prototype.constructor = THREE.FirstPersonCamera;
    THREE.FirstPersonCamera.prototype.supr = THREE.Camera.prototype;
    THREE.FirstPersonCamera.prototype.translate = function (b, c) {
        this.matrix.rotateAxis(c);
        if (this.noFly)c.y = 0;
        this.position.addSelf(c.multiplyScalar(b));
        this.target.position.addSelf(c.multiplyScalar(b))
    };
    THREE.PathCamera = function (b) {
        function c(b, e, c, f) {
            var k = {
                name: c,
                fps: 0.6,
                length: f,
                hierarchy: []
            }, h, m = e.getControlPointsArray(), n = e.getLength(), u = m.length, G = 0;
            h = u - 1;
            e = {parent: -1, keys: []};
            e.keys[0] = {time: 0, pos: m[0], rot: [0, 0, 0, 1], scl: [1, 1, 1]};
            e.keys[h] = {time: f, pos: m[h], rot: [0, 0, 0, 1], scl: [1, 1, 1]};
            for (h = 1; h < u - 1; h++)G = f * n.chunks[h] / n.total, e.keys[h] = {time: G, pos: m[h]};
            k.hierarchy[0] = e;
            THREE.AnimationHandler.add(k);
            return new THREE.Animation(b, c, THREE.AnimationHandler.CATMULLROM_FORWARD, !1)
        }

        function e(b, e) {
            var c,
                f, k = new THREE.Geometry;
            for (c = 0; c < b.points.length * e; c++)f = c / (b.points.length * e), f = b.getPoint(f), k.vertices[c] = new THREE.Vertex(new THREE.Vector3(f.x, f.y, f.z));
            return k
        }

        function f(b, c) {
            var f = e(c, 10), k = e(c, 10), h = new THREE.LineBasicMaterial({color: 16711680, linewidth: 3});
            lineObj = new THREE.Line(f, h);
            particleObj = new THREE.ParticleSystem(k, new THREE.ParticleBasicMaterial({color: 16755200, size: 3}));
            lineObj.scale.set(1, 1, 1);
            b.addChild(lineObj);
            particleObj.scale.set(1, 1, 1);
            b.addChild(particleObj);
            k = new THREE.SphereGeometry(1,
                16, 8);
            h = new THREE.MeshBasicMaterial({color: 65280});
            for (i = 0; i < c.points.length; i++)f = new THREE.Mesh(k, h), f.position.copy(c.points[i]), f.updateMatrix(), b.addChild(f)
        }

        THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
        this.id = "PathCamera" + THREE.PathCameraIdCounter++;
        this.duration = 1E4;
        this.waypoints = [];
        this.useConstantSpeed = !0;
        this.resamplingCoef = 50;
        this.debugPath = new THREE.Object3D;
        this.debugDummy = new THREE.Object3D;
        this.animationParent = new THREE.Object3D;
        this.lookSpeed = 0.005;
        this.lookHorizontal =
            this.lookVertical = !0;
        this.verticalAngleMap = {srcRange: [0, 6.28], dstRange: [0, 6.28]};
        this.horizontalAngleMap = {srcRange: [0, 6.28], dstRange: [0, 6.28]};
        this.domElement = document;
        if (b) {
            if (b.duration !== void 0)this.duration = b.duration * 1E3;
            if (b.waypoints !== void 0)this.waypoints = b.waypoints;
            if (b.useConstantSpeed !== void 0)this.useConstantSpeed = b.useConstantSpeed;
            if (b.resamplingCoef !== void 0)this.resamplingCoef = b.resamplingCoef;
            if (b.createDebugPath !== void 0)this.createDebugPath = b.createDebugPath;
            if (b.createDebugDummy !== void 0)this.createDebugDummy = b.createDebugDummy;
            if (b.lookSpeed !== void 0)this.lookSpeed = b.lookSpeed;
            if (b.lookVertical !== void 0)this.lookVertical = b.lookVertical;
            if (b.lookHorizontal !== void 0)this.lookHorizontal = b.lookHorizontal;
            if (b.verticalAngleMap !== void 0)this.verticalAngleMap = b.verticalAngleMap;
            if (b.horizontalAngleMap !== void 0)this.horizontalAngleMap = b.horizontalAngleMap;
            if (b.domElement !== void 0)this.domElement = b.domElement
        }
        this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = 0;
        this.windowHalfX =
            window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        var h = Math.PI * 2, m = Math.PI / 180;
        this.update = function (b, e, c) {
            var f, k;
            this.lookHorizontal && (this.lon += this.mouseX * this.lookSpeed);
            this.lookVertical && (this.lat -= this.mouseY * this.lookSpeed);
            this.lon = Math.max(0, Math.min(360, this.lon));
            this.lat = Math.max(-85, Math.min(85, this.lat));
            this.phi = (90 - this.lat) * m;
            this.theta = this.lon * m;
            f = this.phi % h;
            this.phi = f >= 0 ? f : f + h;
            f = this.verticalAngleMap.srcRange;
            k = this.verticalAngleMap.dstRange;
            var n = k[1] - k[0];
            this.phi =
                TWEEN.Easing.Quadratic.EaseInOut(((this.phi - f[0]) * (k[1] - k[0]) / (f[1] - f[0]) + k[0] - k[0]) / n) * n + k[0];
            f = this.horizontalAngleMap.srcRange;
            k = this.horizontalAngleMap.dstRange;
            n = k[1] - k[0];
            this.theta = TWEEN.Easing.Quadratic.EaseInOut(((this.theta - f[0]) * (k[1] - k[0]) / (f[1] - f[0]) + k[0] - k[0]) / n) * n + k[0];
            f = this.target.position;
            f.x = 100 * Math.sin(this.phi) * Math.cos(this.theta);
            f.y = 100 * Math.cos(this.phi);
            f.z = 100 * Math.sin(this.phi) * Math.sin(this.theta);
            this.supr.update.call(this, b, e, c)
        };
        this.onMouseMove = function (b) {
            this.mouseX =
                b.clientX - this.windowHalfX;
            this.mouseY = b.clientY - this.windowHalfY
        };
        this.spline = new THREE.Spline;
        this.spline.initFromArray(this.waypoints);
        this.useConstantSpeed && this.spline.reparametrizeByArcLength(this.resamplingCoef);
        if (this.createDebugDummy) {
            var b = new THREE.MeshLambertMaterial({color: 30719}), k = new THREE.MeshLambertMaterial({color: 65280}), n = new THREE.CubeGeometry(10, 10, 20), u = new THREE.CubeGeometry(2, 2, 10);
            this.animationParent = new THREE.Mesh(n, b);
            b = new THREE.Mesh(u, k);
            b.position.set(0, 10, 0);
            this.animation =
                c(this.animationParent, this.spline, this.id, this.duration);
            this.animationParent.addChild(this);
            this.animationParent.addChild(this.target);
            this.animationParent.addChild(b)
        } else this.animation = c(this.animationParent, this.spline, this.id, this.duration), this.animationParent.addChild(this.target), this.animationParent.addChild(this);
        this.createDebugPath && f(this.debugPath, this.spline);
        this.domElement.addEventListener("mousemove", function (b, e) {
                return function () {
                    e.apply(b, arguments)
                }
            }(this, this.onMouseMove),
            !1)
    };
    THREE.PathCamera.prototype = new THREE.Camera;
    THREE.PathCamera.prototype.constructor = THREE.PathCamera;
    THREE.PathCamera.prototype.supr = THREE.Camera.prototype;
    THREE.PathCameraIdCounter = 0;
    THREE.FlyCamera = function (b) {
        function c(b, c) {
            return function () {
                c.apply(b, arguments)
            }
        }

        THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
        this.tmpQuaternion = new THREE.Quaternion;
        this.movementSpeed = 1;
        this.rollSpeed = 0.005;
        this.autoForward = this.dragToLook = !1;
        this.domElement = document;
        if (b) {
            if (b.movementSpeed !== void 0)this.movementSpeed = b.movementSpeed;
            if (b.rollSpeed !== void 0)this.rollSpeed = b.rollSpeed;
            if (b.dragToLook !== void 0)this.dragToLook = b.dragToLook;
            if (b.autoForward !== void 0)this.autoForward =
                b.autoForward;
            if (b.domElement !== void 0)this.domElement = b.domElement
        }
        this.useTarget = !1;
        this.useQuaternion = !0;
        this.mouseStatus = 0;
        this.moveState = {
            up: 0,
            down: 0,
            left: 0,
            right: 0,
            forward: 0,
            back: 0,
            pitchUp: 0,
            pitchDown: 0,
            yawLeft: 0,
            yawRight: 0,
            rollLeft: 0,
            rollRight: 0
        };
        this.moveVector = new THREE.Vector3(0, 0, 0);
        this.rotationVector = new THREE.Vector3(0, 0, 0);
        this.lastUpdate = -1;
        this.tdiff = 0;
        this.handleEvent = function (b) {
            if (typeof this[b.type] == "function")this[b.type](b)
        };
        this.keydown = function (b) {
            if (!b.altKey) {
                switch (b.keyCode) {
                    case 16:
                        this.movementSpeedMultiplier =
                            0.1;
                        break;
                    case 87:
                        this.moveState.forward = 1;
                        break;
                    case 83:
                        this.moveState.back = 1;
                        break;
                    case 65:
                        this.moveState.left = 1;
                        break;
                    case 68:
                        this.moveState.right = 1;
                        break;
                    case 82:
                        this.moveState.up = 1;
                        break;
                    case 70:
                        this.moveState.down = 1;
                        break;
                    case 38:
                        this.moveState.pitchUp = 1;
                        break;
                    case 40:
                        this.moveState.pitchDown = 1;
                        break;
                    case 37:
                        this.moveState.yawLeft = 1;
                        break;
                    case 39:
                        this.moveState.yawRight = 1;
                        break;
                    case 81:
                        this.moveState.rollLeft = 1;
                        break;
                    case 69:
                        this.moveState.rollRight = 1
                }
                this.updateMovementVector();
                this.updateRotationVector()
            }
        };
        this.keyup = function (b) {
            switch (b.keyCode) {
                case 16:
                    this.movementSpeedMultiplier = 1;
                    break;
                case 87:
                    this.moveState.forward = 0;
                    break;
                case 83:
                    this.moveState.back = 0;
                    break;
                case 65:
                    this.moveState.left = 0;
                    break;
                case 68:
                    this.moveState.right = 0;
                    break;
                case 82:
                    this.moveState.up = 0;
                    break;
                case 70:
                    this.moveState.down = 0;
                    break;
                case 38:
                    this.moveState.pitchUp = 0;
                    break;
                case 40:
                    this.moveState.pitchDown = 0;
                    break;
                case 37:
                    this.moveState.yawLeft = 0;
                    break;
                case 39:
                    this.moveState.yawRight = 0;
                    break;
                case 81:
                    this.moveState.rollLeft = 0;
                    break;
                case 69:
                    this.moveState.rollRight = 0
            }
            this.updateMovementVector();
            this.updateRotationVector()
        };
        this.mousedown = function (b) {
            b.preventDefault();
            b.stopPropagation();
            if (this.dragToLook)this.mouseStatus++; else switch (b.button) {
                case 0:
                    this.moveForward = !0;
                    break;
                case 2:
                    this.moveBackward = !0
            }
        };
        this.mousemove = function (b) {
            if (!this.dragToLook || this.mouseStatus > 0) {
                var c = this.getContainerDimensions(), h = c.size[0] / 2, m = c.size[1] / 2;
                this.moveState.yawLeft = -(b.clientX - c.offset[0] - h) / h;
                this.moveState.pitchDown = (b.clientY -
                c.offset[1] - m) / m;
                this.updateRotationVector()
            }
        };
        this.mouseup = function (b) {
            b.preventDefault();
            b.stopPropagation();
            if (this.dragToLook)this.mouseStatus--, this.moveState.yawLeft = this.moveState.pitchDown = 0; else switch (b.button) {
                case 0:
                    this.moveForward = !1;
                    break;
                case 2:
                    this.moveBackward = !1
            }
            this.updateRotationVector()
        };
        this.update = function () {
            var b = (new Date).getTime();
            if (this.lastUpdate == -1)this.lastUpdate = b;
            this.tdiff = (b - this.lastUpdate) / 1E3;
            this.lastUpdate = b;
            var b = this.tdiff * this.movementSpeed, c = this.tdiff *
                this.rollSpeed;
            this.translateX(this.moveVector.x * b);
            this.translateY(this.moveVector.y * b);
            this.translateZ(this.moveVector.z * b);
            this.tmpQuaternion.set(this.rotationVector.x * c, this.rotationVector.y * c, this.rotationVector.z * c, 1).normalize();
            this.quaternion.multiplySelf(this.tmpQuaternion);
            this.matrix.setPosition(this.position);
            this.matrix.setRotationFromQuaternion(this.quaternion);
            this.matrixWorldNeedsUpdate = !0;
            this.supr.update.call(this)
        };
        this.updateMovementVector = function () {
            var b = this.moveState.forward ||
            this.autoForward && !this.moveState.back ? 1 : 0;
            this.moveVector.x = -this.moveState.left + this.moveState.right;
            this.moveVector.y = -this.moveState.down + this.moveState.up;
            this.moveVector.z = -b + this.moveState.back
        };
        this.updateRotationVector = function () {
            this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp;
            this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft;
            this.rotationVector.z = -this.moveState.rollRight + this.moveState.rollLeft
        };
        this.getContainerDimensions = function () {
            return this.domElement !=
            document ? {
                size: [this.domElement.offsetWidth, this.domElement.offsetHeight],
                offset: [this.domElement.offsetLeft, this.domElement.offsetTop]
            } : {size: [window.innerWidth, window.innerHeight], offset: [0, 0]}
        };
        this.domElement.addEventListener("mousemove", c(this, this.mousemove), !1);
        this.domElement.addEventListener("mousedown", c(this, this.mousedown), !1);
        this.domElement.addEventListener("mouseup", c(this, this.mouseup), !1);
        window.addEventListener("keydown", c(this, this.keydown), !1);
        window.addEventListener("keyup", c(this,
            this.keyup), !1);
        this.updateMovementVector();
        this.updateRotationVector()
    };
    THREE.FlyCamera.prototype = new THREE.Camera;
    THREE.FlyCamera.prototype.constructor = THREE.FlyCamera;
    THREE.FlyCamera.prototype.supr = THREE.Camera.prototype;
    THREE.RollCamera = function (b, c, e, f) {
        THREE.Camera.call(this, b, c, e, f);
        this.mouseLook = !0;
        this.autoForward = !1;
        this.rollSpeed = this.movementSpeed = this.lookSpeed = 1;
        this.constrainVertical = [-0.9, 0.9];
        this.domElement = document;
        this.matrixAutoUpdate = this.useTarget = !1;
        this.forward = new THREE.Vector3(0, 0, 1);
        this.roll = 0;
        this.lastUpdate = -1;
        this.delta = 0;
        var h = new THREE.Vector3, m = new THREE.Vector3, k = new THREE.Vector3, n = new THREE.Matrix4, u = !1, p = 1, v = 0, t = 0, x = 0, w = 0, z = 0, y = window.innerWidth / 2, B = window.innerHeight / 2;
        this.update =
            function () {
                var b = (new Date).getTime();
                if (this.lastUpdate == -1)this.lastUpdate = b;
                this.delta = (b - this.lastUpdate) / 1E3;
                this.lastUpdate = b;
                this.mouseLook && (b = this.delta * this.lookSpeed, this.rotateHorizontally(b * w), this.rotateVertically(b * z));
                b = this.delta * this.movementSpeed;
                this.translateZ(b * (v > 0 || this.autoForward && !(v < 0) ? 1 : v));
                this.translateX(b * t);
                this.translateY(b * x);
                u && (this.roll += this.rollSpeed * this.delta * p);
                if (this.forward.y > this.constrainVertical[1])this.forward.y = this.constrainVertical[1], this.forward.normalize();
                else if (this.forward.y < this.constrainVertical[0])this.forward.y = this.constrainVertical[0], this.forward.normalize();
                k.copy(this.forward);
                m.set(0, 1, 0);
                h.cross(m, k).normalize();
                m.cross(k, h).normalize();
                this.matrix.n11 = h.x;
                this.matrix.n12 = m.x;
                this.matrix.n13 = k.x;
                this.matrix.n21 = h.y;
                this.matrix.n22 = m.y;
                this.matrix.n23 = k.y;
                this.matrix.n31 = h.z;
                this.matrix.n32 = m.z;
                this.matrix.n33 = k.z;
                n.identity();
                n.n11 = Math.cos(this.roll);
                n.n12 = -Math.sin(this.roll);
                n.n21 = Math.sin(this.roll);
                n.n22 = Math.cos(this.roll);
                this.matrix.multiplySelf(n);
                this.matrixWorldNeedsUpdate = !0;
                this.matrix.n14 = this.position.x;
                this.matrix.n24 = this.position.y;
                this.matrix.n34 = this.position.z;
                this.supr.update.call(this)
            };
        this.translateX = function (b) {
            this.position.x += this.matrix.n11 * b;
            this.position.y += this.matrix.n21 * b;
            this.position.z += this.matrix.n31 * b
        };
        this.translateY = function (b) {
            this.position.x += this.matrix.n12 * b;
            this.position.y += this.matrix.n22 * b;
            this.position.z += this.matrix.n32 * b
        };
        this.translateZ = function (b) {
            this.position.x -= this.matrix.n13 * b;
            this.position.y -=
                this.matrix.n23 * b;
            this.position.z -= this.matrix.n33 * b
        };
        this.rotateHorizontally = function (b) {
            h.set(this.matrix.n11, this.matrix.n21, this.matrix.n31);
            h.multiplyScalar(b);
            this.forward.subSelf(h);
            this.forward.normalize()
        };
        this.rotateVertically = function (b) {
            m.set(this.matrix.n12, this.matrix.n22, this.matrix.n32);
            m.multiplyScalar(b);
            this.forward.addSelf(m);
            this.forward.normalize()
        };
        this.domElement.addEventListener("contextmenu", function (b) {
            b.preventDefault()
        }, !1);
        this.domElement.addEventListener("mousemove",
            function (b) {
                w = (b.clientX - y) / window.innerWidth;
                z = (b.clientY - B) / window.innerHeight
            }, !1);
        this.domElement.addEventListener("mousedown", function (b) {
            b.preventDefault();
            b.stopPropagation();
            switch (b.button) {
                case 0:
                    v = 1;
                    break;
                case 2:
                    v = -1
            }
        }, !1);
        this.domElement.addEventListener("mouseup", function (b) {
            b.preventDefault();
            b.stopPropagation();
            switch (b.button) {
                case 0:
                    v = 0;
                    break;
                case 2:
                    v = 0
            }
        }, !1);
        this.domElement.addEventListener("keydown", function (b) {
            switch (b.keyCode) {
                case 38:
                case 87:
                    v = 1;
                    break;
                case 37:
                case 65:
                    t = -1;
                    break;
                case 40:
                case 83:
                    v = -1;
                    break;
                case 39:
                case 68:
                    t = 1;
                    break;
                case 81:
                    u = !0;
                    p = 1;
                    break;
                case 69:
                    u = !0;
                    p = -1;
                    break;
                case 82:
                    x = 1;
                    break;
                case 70:
                    x = -1
            }
        }, !1);
        this.domElement.addEventListener("keyup", function (b) {
            switch (b.keyCode) {
                case 38:
                case 87:
                    v = 0;
                    break;
                case 37:
                case 65:
                    t = 0;
                    break;
                case 40:
                case 83:
                    v = 0;
                    break;
                case 39:
                case 68:
                    t = 0;
                    break;
                case 81:
                    u = !1;
                    break;
                case 69:
                    u = !1;
                    break;
                case 82:
                    x = 0;
                    break;
                case 70:
                    x = 0
            }
        }, !1)
    };
    THREE.RollCamera.prototype = new THREE.Camera;
    THREE.RollCamera.prototype.constructor = THREE.RollCamera;
    THREE.RollCamera.prototype.supr = THREE.Camera.prototype;
    THREE.TrackballCamera = function (b) {
        function c(b, c) {
            return function () {
                c.apply(b, arguments)
            }
        }

        b = b || {};
        THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
        this.domElement = b.domElement || document;
        this.screen = b.screen || {width: window.innerWidth, height: window.innerHeight, offsetLeft: 0, offsetTop: 0};
        this.radius = b.radius || (this.screen.width + this.screen.height) / 4;
        this.rotateSpeed = b.rotateSpeed || 1;
        this.zoomSpeed = b.zoomSpeed || 1.2;
        this.panSpeed = b.panSpeed || 0.3;
        this.noZoom = b.noZoom || !1;
        this.noPan = b.noPan || !1;
        this.staticMoving = b.staticMoving || !1;
        this.dynamicDampingFactor = b.dynamicDampingFactor || 0.2;
        this.minDistance = b.minDistance || 0;
        this.maxDistance = b.maxDistance || Infinity;
        this.keys = b.keys || [65, 83, 68];
        this.useTarget = !0;
        var e = !1, f = this.STATE.NONE, h = new THREE.Vector3, m = new THREE.Vector3, k = new THREE.Vector3, n = new THREE.Vector2, u = new THREE.Vector2, p = new THREE.Vector2, v = new THREE.Vector2;
        this.handleEvent = function (b) {
            if (typeof this[b.type] == "function")this[b.type](b)
        };
        this.getMouseOnScreen = function (b, c) {
            return new THREE.Vector2((b -
            this.screen.offsetLeft) / this.radius * 0.5, (c - this.screen.offsetTop) / this.radius * 0.5)
        };
        this.getMouseProjectionOnBall = function (b, c) {
            var e = new THREE.Vector3((b - this.screen.width * 0.5 - this.screen.offsetLeft) / this.radius, (this.screen.height * 0.5 + this.screen.offsetTop - c) / this.radius, 0), f = e.length();
            f > 1 ? e.normalize() : e.z = Math.sqrt(1 - f * f);
            h = this.position.clone().subSelf(this.target.position);
            f = this.up.clone().setLength(e.y);
            f.addSelf(this.up.clone().crossSelf(h).setLength(e.x));
            f.addSelf(h.setLength(e.z));
            return f
        };
        this.rotateCamera = function () {
            var b = Math.acos(m.dot(k) / m.length() / k.length());
            if (b) {
                var c = (new THREE.Vector3).cross(m, k).normalize(), e = new THREE.Quaternion;
                b *= this.rotateSpeed;
                e.setFromAxisAngle(c, -b);
                e.multiplyVector3(h);
                e.multiplyVector3(this.up);
                e.multiplyVector3(k);
                this.staticMoving ? m = k : (e.setFromAxisAngle(c, b * (this.dynamicDampingFactor - 1)), e.multiplyVector3(m))
            }
        };
        this.zoomCamera = function () {
            var b = 1 + (u.y - n.y) * this.zoomSpeed;
            b !== 1 && b > 0 && (h.multiplyScalar(b), this.staticMoving ? n = u : n.y += (u.y - n.y) * this.dynamicDampingFactor)
        };
        this.panCamera = function () {
            var b = v.clone().subSelf(p);
            if (b.lengthSq()) {
                b.multiplyScalar(h.length() * this.panSpeed);
                var c = h.clone().crossSelf(this.up).setLength(b.x);
                c.addSelf(this.up.clone().setLength(b.y));
                this.position.addSelf(c);
                this.target.position.addSelf(c);
                this.staticMoving ? p = v : p.addSelf(b.sub(v, p).multiplyScalar(this.dynamicDampingFactor))
            }
        };
        this.checkDistances = function () {
            if (!this.noZoom || !this.noPan)this.position.lengthSq() > this.maxDistance * this.maxDistance && this.position.setLength(this.maxDistance),
            h.lengthSq() < this.minDistance * this.minDistance && this.position.add(this.target.position, h.setLength(this.minDistance))
        };
        this.update = function (b, c, e) {
            h = this.position.clone().subSelf(this.target.position);
            this.rotateCamera();
            this.noZoom || this.zoomCamera();
            this.noPan || this.panCamera();
            this.position.add(this.target.position, h);
            this.checkDistances();
            this.supr.update.call(this, b, c, e)
        };
        this.domElement.addEventListener("contextmenu", function (b) {
            b.preventDefault()
        }, !1);
        this.domElement.addEventListener("mousemove",
            c(this, function (b) {
                e && (m = k = this.getMouseProjectionOnBall(b.clientX, b.clientY), n = u = this.getMouseOnScreen(b.clientX, b.clientY), p = v = this.getMouseOnScreen(b.clientX, b.clientY), e = !1);
                f !== this.STATE.NONE && (f === this.STATE.ROTATE ? k = this.getMouseProjectionOnBall(b.clientX, b.clientY) : f === this.STATE.ZOOM && !this.noZoom ? u = this.getMouseOnScreen(b.clientX, b.clientY) : f === this.STATE.PAN && !this.noPan && (v = this.getMouseOnScreen(b.clientX, b.clientY)))
            }), !1);
        this.domElement.addEventListener("mousedown", c(this, function (b) {
            b.preventDefault();
            b.stopPropagation();
            if (f === this.STATE.NONE)f = b.button, f === this.STATE.ROTATE ? m = k = this.getMouseProjectionOnBall(b.clientX, b.clientY) : f === this.STATE.ZOOM && !this.noZoom ? n = u = this.getMouseOnScreen(b.clientX, b.clientY) : this.noPan || (p = v = this.getMouseOnScreen(b.clientX, b.clientY))
        }), !1);
        this.domElement.addEventListener("mouseup", c(this, function (b) {
            b.preventDefault();
            b.stopPropagation();
            f = this.STATE.NONE
        }), !1);
        window.addEventListener("keydown", c(this, function (b) {
            if (f === this.STATE.NONE) {
                if (b.keyCode === this.keys[this.STATE.ROTATE])f =
                    this.STATE.ROTATE; else if (b.keyCode === this.keys[this.STATE.ZOOM] && !this.noZoom)f = this.STATE.ZOOM; else if (b.keyCode === this.keys[this.STATE.PAN] && !this.noPan)f = this.STATE.PAN;
                f !== this.STATE.NONE && (e = !0)
            }
        }), !1);
        window.addEventListener("keyup", c(this, function () {
            if (f !== this.STATE.NONE)f = this.STATE.NONE
        }), !1)
    };
    THREE.TrackballCamera.prototype = new THREE.Camera;
    THREE.TrackballCamera.prototype.constructor = THREE.TrackballCamera;
    THREE.TrackballCamera.prototype.supr = THREE.Camera.prototype;
    THREE.TrackballCamera.prototype.STATE = {NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2};
    THREE.QuakeCamera = THREE.FirstPersonCamera;
    THREE.CubeGeometry = function (b, c, e, f, h, m, k, n, u) {
        function p(b, c, e, k, n, p, t, u) {
            var w, x, y = f || 1, z = h || 1, O = n / 2, S = p / 2, P = v.vertices.length;
            if (b == "x" && c == "y" || b == "y" && c == "x")w = "z"; else if (b == "x" && c == "z" || b == "z" && c == "x")w = "y", z = m || 1; else if (b == "z" && c == "y" || b == "y" && c == "z")w = "x", y = m || 1;
            var o = y + 1, W = z + 1;
            n /= y;
            var na = p / z;
            for (x = 0; x < W; x++)for (p = 0; p < o; p++) {
                var R = new THREE.Vector3;
                R[b] = (p * n - O) * e;
                R[c] = (x * na - S) * k;
                R[w] = t;
                v.vertices.push(new THREE.Vertex(R))
            }
            for (x = 0; x < z; x++)for (p = 0; p < y; p++)v.faces.push(new THREE.Face4(p + o *
            x + P, p + o * (x + 1) + P, p + 1 + o * (x + 1) + P, p + 1 + o * x + P, null, null, u)), v.faceVertexUvs[0].push([new THREE.UV(p / y, x / z), new THREE.UV(p / y, (x + 1) / z), new THREE.UV((p + 1) / y, (x + 1) / z), new THREE.UV((p + 1) / y, x / z)])
        }

        THREE.Geometry.call(this);
        var v = this, t = b / 2, x = c / 2, w = e / 2, n = n ? -1 : 1;
        if (k !== void 0)if (k instanceof Array)this.materials = k; else {
            this.materials = [];
            for (var z = 0; z < 6; z++)this.materials.push([k])
        } else this.materials = [];
        this.sides = {px: !0, nx: !0, py: !0, ny: !0, pz: !0, nz: !0};
        if (u != void 0)for (var y in u)this.sides[y] != void 0 && (this.sides[y] =
            u[y]);
        this.sides.px && p("z", "y", 1 * n, -1, e, c, -t, this.materials[0]);
        this.sides.nx && p("z", "y", -1 * n, -1, e, c, t, this.materials[1]);
        this.sides.py && p("x", "z", 1 * n, 1, b, e, x, this.materials[2]);
        this.sides.ny && p("x", "z", 1 * n, -1, b, e, -x, this.materials[3]);
        this.sides.pz && p("x", "y", 1 * n, -1, b, c, w, this.materials[4]);
        this.sides.nz && p("x", "y", -1 * n, -1, b, c, -w, this.materials[5]);
        (function () {
            for (var b = [], c = [], e = 0, f = v.vertices.length; e < f; e++) {
                for (var k = v.vertices[e], h = !1, m = 0, n = b.length; m < n; m++) {
                    var p = b[m];
                    if (k.position.x == p.position.x &&
                        k.position.y == p.position.y && k.position.z == p.position.z) {
                        c[e] = m;
                        h = !0;
                        break
                    }
                }
                if (!h)c[e] = b.length, b.push(new THREE.Vertex(k.position.clone()))
            }
            e = 0;
            for (f = v.faces.length; e < f; e++)k = v.faces[e], k.a = c[k.a], k.b = c[k.b], k.c = c[k.c], k.d = c[k.d];
            v.vertices = b
        })();
        this.computeCentroids();
        this.computeFaceNormals()
    };
    THREE.CubeGeometry.prototype = new THREE.Geometry;
    THREE.CubeGeometry.prototype.constructor = THREE.CubeGeometry;
    THREE.CylinderGeometry = function (b, c, e, f, h, m) {
        function k(b, c, e) {
            n.vertices.push(new THREE.Vertex(new THREE.Vector3(b, c, e)))
        }

        THREE.Geometry.call(this);
        var n = this, u, p = Math.PI * 2, v = f / 2;
        for (u = 0; u < b; u++)k(Math.sin(p * u / b) * c, Math.cos(p * u / b) * c, -v);
        for (u = 0; u < b; u++)k(Math.sin(p * u / b) * e, Math.cos(p * u / b) * e, v);
        var t, x, w, z, y = c - e;
        for (u = 0; u < b; u++)t = new THREE.Vector3, t.copy(n.vertices[u].position), t.z = y, t.normalize(), x = new THREE.Vector3, x.copy(n.vertices[u + b].position), x.z = y, x.normalize(), w = new THREE.Vector3, w.copy(n.vertices[b +
        (u + 1) % b].position), w.z = y, w.normalize(), z = new THREE.Vector3, z.copy(n.vertices[(u + 1) % b].position), z.z = y, z.normalize(), n.faces.push(new THREE.Face4(u, u + b, b + (u + 1) % b, (u + 1) % b, [t, x, w, z]));
        if (e > 0) {
            e = new THREE.Vector3(0, 0, -1);
            k(0, 0, -v - (m || 0));
            for (u = b; u < b + b / 2; u++)n.faces.push(new THREE.Face4(2 * b, (2 * u - 2 * b) % b, (2 * u - 2 * b + 1) % b, (2 * u - 2 * b + 2) % b, [e, e, e, e]))
        }
        if (c > 0) {
            c = new THREE.Vector3(0, 0, 1);
            k(0, 0, v + (h || 0));
            for (u = b + b / 2; u < 2 * b; u++)n.faces.push(new THREE.Face4(2 * b + 1, (2 * u - 2 * b + 2) % b + b, (2 * u - 2 * b + 1) % b + b, (2 * u - 2 * b) % b + b, [c, c, c, c]))
        }
        u =
            0;
        for (b = this.faces.length; u < b; u++)h = [], v = this.faces[u], c = this.vertices[v.a], m = this.vertices[v.b], e = this.vertices[v.c], t = this.vertices[v.d], h.push(new THREE.UV(0.5 + Math.atan2(c.position.x, c.position.y) / p, 0.5 + c.position.z / f)), h.push(new THREE.UV(0.5 + Math.atan2(m.position.x, m.position.y) / p, 0.5 + m.position.z / f)), h.push(new THREE.UV(0.5 + Math.atan2(e.position.x, e.position.y) / p, 0.5 + e.position.z / f)), v instanceof THREE.Face4 && h.push(new THREE.UV(0.5 + Math.atan2(t.position.x, t.position.y) / p, 0.5 + t.position.z /
        f)), this.faceVertexUvs[0].push(h);
        this.computeCentroids();
        this.computeFaceNormals()
    };
    THREE.CylinderGeometry.prototype = new THREE.Geometry;
    THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry;
    THREE.ExtrudeGeometry = function (b, c) {
        if (typeof b != "undefined") {
            THREE.Geometry.call(this);
            var b = b instanceof Array ? b : [b], e, f = b.length, h;
            this.shapebb = b[f - 1].getBoundingBox();
            for (e = 0; e < f; e++)h = b[e], this.addShape(h, c);
            this.computeCentroids();
            this.computeFaceNormals()
        }
    };
    THREE.ExtrudeGeometry.prototype = new THREE.Geometry;
    THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry;
    THREE.ExtrudeGeometry.prototype.addShape = function (b, c) {
        function e(b, c, e) {
            c || console.log("die");
            return c.clone().multiplyScalar(e).addSelf(b)
        }

        function f(b, c, e) {
            var f = THREE.ExtrudeGeometry.__v1, k = THREE.ExtrudeGeometry.__v2, h = THREE.ExtrudeGeometry.__v3, m = THREE.ExtrudeGeometry.__v4, n = THREE.ExtrudeGeometry.__v5, o = THREE.ExtrudeGeometry.__v6;
            f.set(b.x - c.x, b.y - c.y);
            k.set(b.x - e.x, b.y - e.y);
            f = f.normalize();
            k = k.normalize();
            h.set(-f.y, f.x);
            m.set(k.y, -k.x);
            n.copy(b).addSelf(h);
            o.copy(b).addSelf(m);
            if (n.equals(o))return m.clone();
            n.copy(c).addSelf(h);
            o.copy(e).addSelf(m);
            h = f.dot(m);
            m = o.subSelf(n).dot(m);
            h == 0 && (console.log("Either infinite or no solutions!"), m == 0 ? console.log("Its finite solutions.") : console.log("Too bad, no solutions."));
            m /= h;
            if (m < 0)return c = Math.atan2(c.y - b.y, c.x - b.x), b = Math.atan2(e.y - b.y, e.x - b.x), c > b && (b += Math.PI * 2), anglec = (c + b) / 2, new THREE.Vector2(-Math.cos(anglec), -Math.sin(anglec));
            return f.multiplyScalar(m).addSelf(n).subSelf(b).clone()
        }

        function h(b) {
            for (L = b.length; --L >= 0;) {
                ga = L;
                da = L - 1;
                da < 0 && (da = b.length -
                1);
                for (var c = 0, e = w + v * 2, c = 0; c < e; c++) {
                    var f = na * c, k = na * (c + 1), h = $ + ga + f, m = $ + ga + k, o = h, f = $ + da + f, k = $ + da + k, p = m;
                    o += U;
                    f += U;
                    k += U;
                    p += U;
                    K.faces.push(new THREE.Face4(o, f, k, p, null, null, E));
                    E && (o = c / e, f = (c + 1) / e, k = n + u * 2, h = (K.vertices[h].position.z + u) / k, m = (K.vertices[m].position.z + u) / k, K.faceVertexUvs[0].push([new THREE.UV(h, o), new THREE.UV(m, o), new THREE.UV(m, f), new THREE.UV(h, f)]))
                }
            }
        }

        function m(b, c, e) {
            K.vertices.push(new THREE.Vertex(new THREE.Vector3(b, c, e)))
        }

        function k(b, c, e) {
            b += U;
            c += U;
            e += U;
            K.faces.push(new THREE.Face3(b,
                c, e, null, null, H));
            if (H) {
                var f = N.maxY, k = N.maxX, h = K.vertices[c].position.x, c = K.vertices[c].position.y, m = K.vertices[e].position.x, e = K.vertices[e].position.y;
                K.faceVertexUvs[0].push([new THREE.UV(K.vertices[b].position.x / k, K.vertices[b].position.y / f), new THREE.UV(h / k, c / f), new THREE.UV(m / k, e / f)])
            }
        }

        var n = c.amount !== void 0 ? c.amount : 100, u = c.bevelThickness !== void 0 ? c.bevelThickness : 6, p = c.bevelSize !== void 0 ? c.bevelSize : u - 2, v = c.bevelSegments !== void 0 ? c.bevelSegments : 3, t = c.bevelEnabled !== void 0 ? c.bevelEnabled :
            !0, x = c.curveSegments !== void 0 ? c.curveSegments : 12, w = c.steps !== void 0 ? c.steps : 1, z = c.bendPath, y = c.extrudePath, B, D = !1, G = c.useSpacedPoints !== void 0 ? c.useSpacedPoints : !1, H = c.material, E = c.extrudeMaterial, N = this.shapebb;
        if (y)B = y.getPoints(x), w = B.length, D = !0, t = !1;
        t || (p = u = v = 0);
        var F, I, C, K = this, U = this.vertices.length;
        z && b.addWrapPath(z);
        x = G ? b.extractAllSpacedPoints(x) : b.extractAllPoints(x);
        z = x.shape;
        x = x.holes;
        if (y = !THREE.Shape.Utils.isClockWise(z)) {
            z = z.reverse();
            I = 0;
            for (C = x.length; I < C; I++)F = x[I], THREE.Shape.Utils.isClockWise(F) &&
            (x[I] = F.reverse());
            y = !1
        }
        y = THREE.Shape.Utils.triangulateShape(z, x);
        G = z;
        I = 0;
        for (C = x.length; I < C; I++)F = x[I], z = z.concat(F);
        var L, O, S, P, o, W, na = z.length, R = y.length, ia = [];
        L = 0;
        O = G.length;
        ga = O - 1;
        for (da = L + 1; L < O; L++, ga++, da++)ga == O && (ga = 0), da == O && (da = 0), ia[L] = f(G[L], G[ga], G[da]);
        var aa = [], ma, fa = ia.concat();
        I = 0;
        for (C = x.length; I < C; I++) {
            F = x[I];
            ma = [];
            L = 0;
            O = F.length;
            ga = O - 1;
            for (da = L + 1; L < O; L++, ga++, da++)ga == O && (ga = 0), da == O && (da = 0), ma[L] = f(F[L], F[ga], F[da]);
            aa.push(ma);
            fa = fa.concat(ma)
        }
        for (S = 0; S < v; S++) {
            P = S / v;
            o = u * (1 -
            P);
            P = p * Math.sin(P * Math.PI / 2);
            L = 0;
            for (O = G.length; L < O; L++)W = e(G[L], ia[L], P), m(W.x, W.y, -o);
            I = 0;
            for (C = x.length; I < C; I++) {
                F = x[I];
                ma = aa[I];
                L = 0;
                for (O = F.length; L < O; L++)W = e(F[L], ma[L], P), m(W.x, W.y, -o)
            }
        }
        P = p;
        for (L = 0; L < na; L++)W = t ? e(z[L], fa[L], P) : z[L], D ? m(W.x, W.y + B[0].y, B[0].x) : m(W.x, W.y, 0);
        for (S = 1; S <= w; S++)for (L = 0; L < na; L++)W = t ? e(z[L], fa[L], P) : z[L], D ? m(W.x, W.y + B[S - 1].y, B[S - 1].x) : m(W.x, W.y, n / w * S);
        for (S = v - 1; S >= 0; S--) {
            P = S / v;
            o = u * (1 - P);
            P = p * Math.sin(P * Math.PI / 2);
            L = 0;
            for (O = G.length; L < O; L++)W = e(G[L], ia[L], P), m(W.x, W.y,
                n + o);
            I = 0;
            for (C = x.length; I < C; I++) {
                F = x[I];
                ma = aa[I];
                L = 0;
                for (O = F.length; L < O; L++)W = e(F[L], ma[L], P), D ? m(W.x, W.y + B[w - 1].y, B[w - 1].x + o) : m(W.x, W.y, n + o)
            }
        }
        if (t) {
            t = na * 0;
            for (L = 0; L < R; L++)p = y[L], k(p[2] + t, p[1] + t, p[0] + t);
            t = na * (w + v * 2);
            for (L = 0; L < R; L++)p = y[L], k(p[0] + t, p[1] + t, p[2] + t)
        } else {
            for (L = 0; L < R; L++)p = y[L], k(p[2], p[1], p[0]);
            for (L = 0; L < R; L++)p = y[L], k(p[0] + na * w, p[1] + na * w, p[2] + na * w)
        }
        var ga, da, $ = 0;
        h(G);
        $ += G.length;
        I = 0;
        for (C = x.length; I < C; I++)F = x[I], h(F), $ += F.length
    };
    THREE.ExtrudeGeometry.__v1 = new THREE.Vector2;
    THREE.ExtrudeGeometry.__v2 = new THREE.Vector2;
    THREE.ExtrudeGeometry.__v3 = new THREE.Vector2;
    THREE.ExtrudeGeometry.__v4 = new THREE.Vector2;
    THREE.ExtrudeGeometry.__v5 = new THREE.Vector2;
    THREE.ExtrudeGeometry.__v6 = new THREE.Vector2;
    THREE.IcosahedronGeometry = function (b) {
        function c(b, c, e) {
            var f = Math.sqrt(b * b + c * c + e * e);
            return h.vertices.push(new THREE.Vertex(new THREE.Vector3(b / f, c / f, e / f))) - 1
        }

        function e(b, c, e, f) {
            f.faces.push(new THREE.Face3(b, c, e))
        }

        function f(b, e) {
            var f = h.vertices[b].position, k = h.vertices[e].position;
            return c((f.x + k.x) / 2, (f.y + k.y) / 2, (f.z + k.z) / 2)
        }

        var h = this, m = new THREE.Geometry;
        this.subdivisions = b || 0;
        THREE.Geometry.call(this);
        b = (1 + Math.sqrt(5)) / 2;
        c(-1, b, 0);
        c(1, b, 0);
        c(-1, -b, 0);
        c(1, -b, 0);
        c(0, -1, b);
        c(0, 1, b);
        c(0, -1,
            -b);
        c(0, 1, -b);
        c(b, 0, -1);
        c(b, 0, 1);
        c(-b, 0, -1);
        c(-b, 0, 1);
        e(0, 11, 5, m);
        e(0, 5, 1, m);
        e(0, 1, 7, m);
        e(0, 7, 10, m);
        e(0, 10, 11, m);
        e(1, 5, 9, m);
        e(5, 11, 4, m);
        e(11, 10, 2, m);
        e(10, 7, 6, m);
        e(7, 1, 8, m);
        e(3, 9, 4, m);
        e(3, 4, 2, m);
        e(3, 2, 6, m);
        e(3, 6, 8, m);
        e(3, 8, 9, m);
        e(4, 9, 5, m);
        e(2, 4, 11, m);
        e(6, 2, 10, m);
        e(8, 6, 7, m);
        e(9, 8, 1, m);
        for (var k = 0; k < this.subdivisions; k++) {
            var b = new THREE.Geometry, n;
            for (n in m.faces) {
                var u = f(m.faces[n].a, m.faces[n].b), p = f(m.faces[n].b, m.faces[n].c), v = f(m.faces[n].c, m.faces[n].a);
                e(m.faces[n].a, u, v, b);
                e(m.faces[n].b, p,
                    u, b);
                e(m.faces[n].c, v, p, b);
                e(u, p, v, b)
            }
            m.faces = b.faces
        }
        h.faces = m.faces;
        this.computeCentroids();
        this.computeFaceNormals();
        this.computeVertexNormals()
    };
    THREE.IcosahedronGeometry.prototype = new THREE.Geometry;
    THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry;
    THREE.LatheGeometry = function (b, c, e) {
        THREE.Geometry.call(this);
        this.steps = c || 12;
        this.angle = e || 2 * Math.PI;
        for (var c = this.angle / this.steps, e = [], f = [], h = [], m = [], k = (new THREE.Matrix4).setRotationZ(c), n = 0; n < b.length; n++)this.vertices.push(new THREE.Vertex(b[n])), e[n] = b[n].clone(), f[n] = this.vertices.length - 1;
        for (var u = 0; u <= this.angle + 0.001; u += c) {
            for (n = 0; n < e.length; n++)u < this.angle ? (e[n] = k.multiplyVector3(e[n].clone()), this.vertices.push(new THREE.Vertex(e[n])), h[n] = this.vertices.length - 1) : h = m;
            u == 0 && (m = f);
            for (n = 0; n < f.length - 1; n++)this.faces.push(new THREE.Face4(h[n], h[n + 1], f[n + 1], f[n])), this.faceVertexUvs[0].push([new THREE.UV(1 - u / this.angle, n / b.length), new THREE.UV(1 - u / this.angle, (n + 1) / b.length), new THREE.UV(1 - (u - c) / this.angle, (n + 1) / b.length), new THREE.UV(1 - (u - c) / this.angle, n / b.length)]);
            f = h;
            h = []
        }
        this.computeCentroids();
        this.computeFaceNormals();
        this.computeVertexNormals()
    };
    THREE.LatheGeometry.prototype = new THREE.Geometry;
    THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry;
    THREE.PlaneGeometry = function (b, c, e, f) {
        THREE.Geometry.call(this);
        var h, m = b / 2, k = c / 2, e = e || 1, f = f || 1, n = e + 1, u = f + 1;
        b /= e;
        var p = c / f;
        for (h = 0; h < u; h++)for (c = 0; c < n; c++)this.vertices.push(new THREE.Vertex(new THREE.Vector3(c * b - m, -(h * p - k), 0)));
        for (h = 0; h < f; h++)for (c = 0; c < e; c++)this.faces.push(new THREE.Face4(c + n * h, c + n * (h + 1), c + 1 + n * (h + 1), c + 1 + n * h)), this.faceVertexUvs[0].push([new THREE.UV(c / e, h / f), new THREE.UV(c / e, (h + 1) / f), new THREE.UV((c + 1) / e, (h + 1) / f), new THREE.UV((c + 1) / e, h / f)]);
        this.computeCentroids();
        this.computeFaceNormals()
    };
    THREE.PlaneGeometry.prototype = new THREE.Geometry;
    THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry;
    THREE.SphereGeometry = function (b, c, e) {
        THREE.Geometry.call(this);
        for (var b = b || 50, f, h = Math.PI, m = Math.max(3, c || 8), k = Math.max(2, e || 6), c = [], e = 0; e < k + 1; e++) {
            f = e / k;
            var n = b * Math.cos(f * h), u = b * Math.sin(f * h), p = [], v = 0;
            for (f = 0; f < m; f++) {
                var t = 2 * f / m, x = u * Math.sin(t * h), t = u * Math.cos(t * h);
                (e == 0 || e == k) && f > 0 || (v = this.vertices.push(new THREE.Vertex(new THREE.Vector3(t, n, x))) - 1);
                p.push(v)
            }
            c.push(p)
        }
        for (var w, z, y, h = c.length, e = 0; e < h; e++)if (m = c[e].length, e > 0)for (f = 0; f < m; f++) {
            p = f == m - 1;
            k = c[e][p ? 0 : f + 1];
            n = c[e][p ? m - 1 : f];
            u = c[e - 1][p ?
            m - 1 : f];
            p = c[e - 1][p ? 0 : f + 1];
            x = e / (h - 1);
            w = (e - 1) / (h - 1);
            z = (f + 1) / m;
            var t = f / m, v = new THREE.UV(1 - z, x), x = new THREE.UV(1 - t, x), t = new THREE.UV(1 - t, w), B = new THREE.UV(1 - z, w);
            e < c.length - 1 && (w = this.vertices[k].position.clone(), z = this.vertices[n].position.clone(), y = this.vertices[u].position.clone(), w.normalize(), z.normalize(), y.normalize(), this.faces.push(new THREE.Face3(k, n, u, [new THREE.Vector3(w.x, w.y, w.z), new THREE.Vector3(z.x, z.y, z.z), new THREE.Vector3(y.x, y.y, y.z)])), this.faceVertexUvs[0].push([v, x, t]));
            e > 1 && (w =
                this.vertices[k].position.clone(), z = this.vertices[u].position.clone(), y = this.vertices[p].position.clone(), w.normalize(), z.normalize(), y.normalize(), this.faces.push(new THREE.Face3(k, u, p, [new THREE.Vector3(w.x, w.y, w.z), new THREE.Vector3(z.x, z.y, z.z), new THREE.Vector3(y.x, y.y, y.z)])), this.faceVertexUvs[0].push([v, t, B]))
        }
        this.computeCentroids();
        this.computeFaceNormals();
        this.computeVertexNormals();
        this.boundingSphere = {radius: b}
    };
    THREE.SphereGeometry.prototype = new THREE.Geometry;
    THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry;
    THREE.TextGeometry = function (b, c) {
        var e = (new THREE.TextPath(b, c)).toShapes();
        c.amount = c.height !== void 0 ? c.height : 50;
        if (c.bevelThickness === void 0)c.bevelThickness = 10;
        if (c.bevelSize === void 0)c.bevelSize = 8;
        if (c.bevelEnabled === void 0)c.bevelEnabled = !1;
        if (c.bend) {
            var f = e[e.length - 1].getBoundingBox().maxX;
            c.bendPath = new THREE.QuadraticBezierCurve(new THREE.Vector2(0, 0), new THREE.Vector2(f / 2, 120), new THREE.Vector2(f, 0))
        }
        THREE.ExtrudeGeometry.call(this, e, c)
    };
    THREE.TextGeometry.prototype = new THREE.ExtrudeGeometry;
    THREE.TextGeometry.prototype.constructor = THREE.TextGeometry;
    THREE.FontUtils = {
        faces: {}, face: "helvetiker", weight: "normal", style: "normal", size: 150, divisions: 10, getFace: function () {
            return this.faces[this.face][this.weight][this.style]
        }, getTextShapes: function (b, c) {
            return (new TextPath(b, c)).toShapes()
        }, loadFace: function (b) {
            var c = b.familyName.toLowerCase();
            this.faces[c] = this.faces[c] || {};
            this.faces[c][b.cssFontWeight] = this.faces[c][b.cssFontWeight] || {};
            this.faces[c][b.cssFontWeight][b.cssFontStyle] = b;
            return this.faces[c][b.cssFontWeight][b.cssFontStyle] = b
        }, drawText: function (b) {
            for (var c =
                this.getFace(), e = this.size / c.resolution, f = 0, h = String(b).split(""), m = h.length, k = [], b = 0; b < m; b++) {
                var n = new THREE.Path, n = this.extractGlyphPoints(h[b], c, e, f, n);
                f += n.offset;
                k.push(n.path)
            }
            return {paths: k, offset: f / 2}
        }, extractGlyphPoints: function (b, c, e, f, h) {
            var m = [], k, n, u, p, v, t, x, w, z, y, B = c.glyphs[b] || c.glyphs[ctxt.options.fallbackCharacter];
            if (B) {
                if (B.o) {
                    c = B._cachedOutline || (B._cachedOutline = B.o.split(" "));
                    u = c.length;
                    for (b = 0; b < u;)switch (n = c[b++], n) {
                        case "m":
                            n = c[b++] * e + f;
                            p = c[b++] * e;
                            m.push(new THREE.Vector2(n,
                                p));
                            h.moveTo(n, p);
                            break;
                        case "l":
                            n = c[b++] * e + f;
                            p = c[b++] * e;
                            m.push(new THREE.Vector2(n, p));
                            h.lineTo(n, p);
                            break;
                        case "q":
                            n = c[b++] * e + f;
                            p = c[b++] * e;
                            x = c[b++] * e + f;
                            w = c[b++] * e;
                            h.quadraticCurveTo(x, w, n, p);
                            if (k = m[m.length - 1]) {
                                v = k.x;
                                t = k.y;
                                k = 1;
                                for (divisions = this.divisions; k <= divisions; k++) {
                                    var D = k / divisions, G = THREE.Shape.Utils.b2(D, v, x, n), D = THREE.Shape.Utils.b2(D, t, w, p);
                                    m.push(new THREE.Vector2(G, D))
                                }
                            }
                            break;
                        case "b":
                            if (n = c[b++] * e + f, p = c[b++] * e, x = c[b++] * e + f, w = c[b++] * -e, z = c[b++] * e + f, y = c[b++] * -e, h.bezierCurveTo(n, p,
                                    x, w, z, y), k = m[m.length - 1]) {
                                v = k.x;
                                t = k.y;
                                k = 1;
                                for (divisions = this.divisions; k <= divisions; k++)D = k / divisions, G = THREE.Shape.Utils.b3(D, v, x, z, n), D = THREE.Shape.Utils.b3(D, t, w, y, p), m.push(new THREE.Vector2(G, D))
                            }
                    }
                }
                return {offset: B.ha * e, points: m, path: h}
            }
        }
    };
    (function (b) {
        var c = function (b) {
            for (var c = b.length, h = 0, m = c - 1, k = 0; k < c; m = k++)h += b[m].x * b[k].y - b[k].x * b[m].y;
            return h * 0.5
        };
        b.Triangulate = function (b, f) {
            var h = b.length;
            if (h < 3)return null;
            var m = [], k = [], n = [], u, p, v;
            if (c(b) > 0)for (p = 0; p < h; p++)k[p] = p; else for (p = 0; p < h; p++)k[p] = h - 1 - p;
            var t = 2 * h;
            for (p = h - 1; h > 2;) {
                if (t-- <= 0) {
                    console.log("Warning, unable to triangulate polygon!");
                    if (f)return n;
                    return m
                }
                u = p;
                h <= u && (u = 0);
                p = u + 1;
                h <= p && (p = 0);
                v = p + 1;
                h <= v && (v = 0);
                var x;
                a:{
                    x = b;
                    var w = u, z = p, y = v, B = h, D = k, G = void 0, H = void 0, E = void 0,
                        N = void 0, F = void 0, I = void 0, C = void 0, K = void 0, U = void 0, H = x[D[w]].x, E = x[D[w]].y, N = x[D[z]].x, F = x[D[z]].y, I = x[D[y]].x, C = x[D[y]].y;
                    if (1.0E-10 > (N - H) * (C - E) - (F - E) * (I - H))x = !1; else {
                        for (G = 0; G < B; G++)if (!(G == w || G == z || G == y)) {
                            var K = x[D[G]].x, U = x[D[G]].y, L = void 0, O = void 0, S = void 0, P = void 0, o = void 0, W = void 0, na = void 0, R = void 0, ia = void 0, aa = void 0, ma = void 0, fa = void 0, L = S = o = void 0, L = I - N, O = C - F, S = H - I, P = E - C, o = N - H, W = F - E, na = K - H, R = U - E, ia = K - N, aa = U - F, ma = K - I, fa = U - C, L = L * aa - O * ia, o = o * R - W * na, S = S * fa - P * ma;
                            if (L >= 0 && S >= 0 && o >= 0) {
                                x = !1;
                                break a
                            }
                        }
                        x = !0
                    }
                }
                if (x) {
                    m.push([b[k[u]], b[k[p]], b[k[v]]]);
                    n.push([k[u], k[p], k[v]]);
                    u = p;
                    for (v = p + 1; v < h; u++, v++)k[u] = k[v];
                    h--;
                    t = 2 * h
                }
            }
            if (f)return n;
            return m
        };
        b.Triangulate.area = c;
        return b
    })(THREE.FontUtils);
    window._typeface_js = {faces: THREE.FontUtils.faces, loadFace: THREE.FontUtils.loadFace};
    THREE.TorusGeometry = function (b, c, e, f, h) {
        THREE.Geometry.call(this);
        this.radius = b || 100;
        this.tube = c || 40;
        this.segmentsR = e || 8;
        this.segmentsT = f || 6;
        this.arc = h || Math.PI * 2;
        h = new THREE.Vector3;
        b = [];
        c = [];
        for (e = 0; e <= this.segmentsR; e++)for (f = 0; f <= this.segmentsT; f++) {
            var m = f / this.segmentsT * this.arc, k = e / this.segmentsR * Math.PI * 2;
            h.x = this.radius * Math.cos(m);
            h.y = this.radius * Math.sin(m);
            var n = new THREE.Vector3;
            n.x = (this.radius + this.tube * Math.cos(k)) * Math.cos(m);
            n.y = (this.radius + this.tube * Math.cos(k)) * Math.sin(m);
            n.z =
                this.tube * Math.sin(k);
            this.vertices.push(new THREE.Vertex(n));
            b.push(new THREE.UV(f / this.segmentsT, 1 - e / this.segmentsR));
            c.push(n.clone().subSelf(h).normalize())
        }
        for (e = 1; e <= this.segmentsR; e++)for (f = 1; f <= this.segmentsT; f++) {
            var h = (this.segmentsT + 1) * e + f - 1, m = (this.segmentsT + 1) * (e - 1) + f - 1, k = (this.segmentsT + 1) * (e - 1) + f, n = (this.segmentsT + 1) * e + f, u = new THREE.Face4(h, m, k, n, [c[h], c[m], c[k], c[n]]);
            u.normal.addSelf(c[h]);
            u.normal.addSelf(c[m]);
            u.normal.addSelf(c[k]);
            u.normal.addSelf(c[n]);
            u.normal.normalize();
            this.faces.push(u);
            this.faceVertexUvs[0].push([b[h].clone(), b[m].clone(), b[k].clone(), b[n].clone()])
        }
        this.computeCentroids()
    };
    THREE.TorusGeometry.prototype = new THREE.Geometry;
    THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry;
    THREE.TorusKnotGeometry = function (b, c, e, f, h, m, k) {
        function n(b, c, e, f, k, h) {
            c = e / f * b;
            e = Math.cos(c);
            return new THREE.Vector3(k * (2 + e) * 0.5 * Math.cos(b), k * (2 + e) * Math.sin(b) * 0.5, h * k * Math.sin(c) * 0.5)
        }

        THREE.Geometry.call(this);
        this.radius = b || 200;
        this.tube = c || 40;
        this.segmentsR = e || 64;
        this.segmentsT = f || 8;
        this.p = h || 2;
        this.q = m || 3;
        this.heightScale = k || 1;
        this.grid = Array(this.segmentsR);
        e = new THREE.Vector3;
        f = new THREE.Vector3;
        m = new THREE.Vector3;
        for (b = 0; b < this.segmentsR; ++b) {
            this.grid[b] = Array(this.segmentsT);
            for (c = 0; c <
            this.segmentsT; ++c) {
                var u = b / this.segmentsR * 2 * this.p * Math.PI, k = c / this.segmentsT * 2 * Math.PI, h = n(u, k, this.q, this.p, this.radius, this.heightScale), u = n(u + 0.01, k, this.q, this.p, this.radius, this.heightScale);
                e.x = u.x - h.x;
                e.y = u.y - h.y;
                e.z = u.z - h.z;
                f.x = u.x + h.x;
                f.y = u.y + h.y;
                f.z = u.z + h.z;
                m.cross(e, f);
                f.cross(m, e);
                m.normalize();
                f.normalize();
                u = -this.tube * Math.cos(k);
                k = this.tube * Math.sin(k);
                h.x += u * f.x + k * m.x;
                h.y += u * f.y + k * m.y;
                h.z += u * f.z + k * m.z;
                this.grid[b][c] = this.vertices.push(new THREE.Vertex(new THREE.Vector3(h.x, h.y,
                    h.z))) - 1
            }
        }
        for (b = 0; b < this.segmentsR; ++b)for (c = 0; c < this.segmentsT; ++c) {
            var f = (b + 1) % this.segmentsR, m = (c + 1) % this.segmentsT, h = this.grid[b][c], e = this.grid[f][c], f = this.grid[f][m], m = this.grid[b][m], k = new THREE.UV(b / this.segmentsR, c / this.segmentsT), u = new THREE.UV((b + 1) / this.segmentsR, c / this.segmentsT), p = new THREE.UV((b + 1) / this.segmentsR, (c + 1) / this.segmentsT), v = new THREE.UV(b / this.segmentsR, (c + 1) / this.segmentsT);
            this.faces.push(new THREE.Face4(h, e, f, m));
            this.faceVertexUvs[0].push([k, u, p, v])
        }
        this.computeCentroids();
        this.computeFaceNormals();
        this.computeVertexNormals()
    };
    THREE.TorusKnotGeometry.prototype = new THREE.Geometry;
    THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry;
    THREE.Loader = function (b) {
        this.statusDomElement = (this.showStatus = b) ? THREE.Loader.prototype.addStatusElement() : null;
        this.onLoadStart = function () {
        };
        this.onLoadProgress = function () {
        };
        this.onLoadComplete = function () {
        }
    };
    THREE.Loader.prototype = {
        addStatusElement: function () {
            var b = document.createElement("div");
            b.style.position = "absolute";
            b.style.right = "0px";
            b.style.top = "0px";
            b.style.fontSize = "0.8em";
            b.style.textAlign = "left";
            b.style.background = "rgba(0,0,0,0.25)";
            b.style.color = "#fff";
            b.style.width = "120px";
            b.style.padding = "0.5em 0.5em 0.5em 0.5em";
            b.style.zIndex = 1E3;
            b.innerHTML = "Loading ...";
            return b
        }, updateProgress: function (b) {
            var c = "Loaded ";
            c += b.total ? (100 * b.loaded / b.total).toFixed(0) + "%" : (b.loaded / 1E3).toFixed(2) + " KB";
            this.statusDomElement.innerHTML = c
        }, extractUrlbase: function (b) {
            b = b.split("/");
            b.pop();
            return b.join("/")
        }, init_materials: function (b, c, e) {
            b.materials = [];
            for (var f = 0; f < c.length; ++f)b.materials[f] = [THREE.Loader.prototype.createMaterial(c[f], e)]
        }, hasNormals: function (b) {
            var c, e, f = b.materials.length;
            for (e = 0; e < f; e++)if (c = b.materials[e][0], c instanceof THREE.MeshShaderMaterial)return !0;
            return !1
        }, createMaterial: function (b, c) {
            function e(b) {
                b = Math.log(b) / Math.LN2;
                return Math.floor(b) == b
            }

            function f(b, c) {
                var f =
                    new Image;
                f.onload = function () {
                    if (!e(this.width) || !e(this.height)) {
                        var c = Math.pow(2, Math.round(Math.log(this.width) / Math.LN2)), f = Math.pow(2, Math.round(Math.log(this.height) / Math.LN2));
                        b.image.width = c;
                        b.image.height = f;
                        b.image.getContext("2d").drawImage(this, 0, 0, c, f)
                    } else b.image = this;
                    b.needsUpdate = !0
                };
                f.src = c
            }

            function h(b, e, k, h, m, n) {
                var p = document.createElement("canvas");
                b[e] = new THREE.Texture(p);
                b[e].sourceFile = k;
                if (h) {
                    b[e].repeat.set(h[0], h[1]);
                    if (h[0] != 1)b[e].wrapS = THREE.RepeatWrapping;
                    if (h[1] !=
                        1)b[e].wrapT = THREE.RepeatWrapping
                }
                m && b[e].offset.set(m[0], m[1]);
                if (n) {
                    h = {repeat: THREE.RepeatWrapping, mirror: THREE.MirroredRepeatWrapping};
                    if (h[n[0]] !== void 0)b[e].wrapS = h[n[0]];
                    if (h[n[1]] !== void 0)b[e].wrapT = h[n[1]]
                }
                f(b[e], c + "/" + k)
            }

            function m(b) {
                return (b[0] * 255 << 16) + (b[1] * 255 << 8) + b[2] * 255
            }

            var k, n, u;
            n = "MeshLambertMaterial";
            k = {color: 15658734, opacity: 1, map: null, lightMap: null, normalMap: null, wireframe: b.wireframe};
            b.shading && (b.shading == "Phong" ? n = "MeshPhongMaterial" : b.shading == "Basic" && (n = "MeshBasicMaterial"));
            if (b.blending)if (b.blending == "Additive")k.blending = THREE.AdditiveBlending; else if (b.blending == "Subtractive")k.blending = THREE.SubtractiveBlending; else if (b.blending == "Multiply")k.blending = THREE.MultiplyBlending;
            if (b.transparent !== void 0 || b.opacity < 1)k.transparent = b.transparent;
            if (b.depthTest !== void 0)k.depthTest = b.depthTest;
            if (b.vertexColors !== void 0)if (b.vertexColors == "face")k.vertexColors = THREE.FaceColors; else if (b.vertexColors)k.vertexColors = THREE.VertexColors;
            if (b.colorDiffuse)k.color = m(b.colorDiffuse);
            else if (b.DbgColor)k.color = b.DbgColor;
            if (b.colorSpecular)k.specular = m(b.colorSpecular);
            if (b.colorAmbient)k.ambient = m(b.colorAmbient);
            if (b.transparency)k.opacity = b.transparency;
            if (b.specularCoef)k.shininess = b.specularCoef;
            b.mapDiffuse && c && h(k, "map", b.mapDiffuse, b.mapDiffuseRepeat, b.mapDiffuseOffset, b.mapDiffuseWrap);
            b.mapLight && c && h(k, "lightMap", b.mapLight, b.mapLightRepeat, b.mapLightOffset, b.mapLightWrap);
            b.mapNormal && c && h(k, "normalMap", b.mapNormal, b.mapNormalRepeat, b.mapNormalOffset, b.mapNormalWrap);
            b.mapSpecular && c && h(k, "specularMap", b.mapSpecular, b.mapSpecularRepeat, b.mapSpecularOffset, b.mapSpecularWrap);
            if (b.mapNormal) {
                var p = THREE.ShaderUtils.lib.normal, v = THREE.UniformsUtils.clone(p.uniforms), t = k.color;
                n = k.specular;
                u = k.ambient;
                var x = k.shininess;
                v.tNormal.texture = k.normalMap;
                if (b.mapNormalFactor)v.uNormalScale.value = b.mapNormalFactor;
                if (k.map)v.tDiffuse.texture = k.map, v.enableDiffuse.value = !0;
                if (k.specularMap)v.tSpecular.texture = k.specularMap, v.enableSpecular.value = !0;
                if (k.lightMap)v.tAO.texture =
                    k.lightMap, v.enableAO.value = !0;
                v.uDiffuseColor.value.setHex(t);
                v.uSpecularColor.value.setHex(n);
                v.uAmbientColor.value.setHex(u);
                v.uShininess.value = x;
                if (k.opacity)v.uOpacity.value = k.opacity;
                k = new THREE.MeshShaderMaterial({
                    fragmentShader: p.fragmentShader,
                    vertexShader: p.vertexShader,
                    uniforms: v,
                    lights: !0,
                    fog: !0
                })
            } else k = new THREE[n](k);
            return k
        }, constructor: THREE.Loader
    };
    THREE.BinaryLoader = function (b) {
        THREE.Loader.call(this, b)
    };
    THREE.BinaryLoader.prototype = new THREE.Loader;
    THREE.BinaryLoader.prototype.constructor = THREE.BinaryLoader;
    THREE.BinaryLoader.prototype.supr = THREE.Loader.prototype;
    THREE.BinaryLoader.prototype.load = function (b) {
        var c = b.model, e = b.callback, f = b.texture_path ? b.texture_path : THREE.Loader.prototype.extractUrlbase(c), h = b.bin_path ? b.bin_path : THREE.Loader.prototype.extractUrlbase(c), b = (new Date).getTime(), c = new Worker(c), m = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
        c.onmessage = function (b) {
            THREE.BinaryLoader.prototype.loadAjaxBuffers(b.data.buffers, b.data.materials, e, h, f, m)
        };
        c.onerror = function (b) {
            alert("worker.onerror: " + b.message + "\n" + b.data);
            b.preventDefault()
        };
        c.postMessage(b)
    };
    THREE.BinaryLoader.prototype.loadAjaxBuffers = function (b, c, e, f, h, m) {
        var k = new XMLHttpRequest, n = f + "/" + b, u = 0;
        k.onreadystatechange = function () {
            k.readyState == 4 ? k.status == 200 || k.status == 0 ? THREE.BinaryLoader.prototype.createBinModel(k.responseText, e, h, c) : alert("Couldn't load [" + n + "] [" + k.status + "]") : k.readyState == 3 ? m && (u == 0 && (u = k.getResponseHeader("Content-Length")), m({
                total: u,
                loaded: k.responseText.length
            })) : k.readyState == 2 && (u = k.getResponseHeader("Content-Length"))
        };
        k.open("GET", n, !0);
        k.overrideMimeType("text/plain; charset=x-user-defined");
        k.setRequestHeader("Content-Type", "text/plain");
        k.send(null)
    };
    THREE.BinaryLoader.prototype.createBinModel = function (b, c, e, f) {
        var h = function (c) {
            function e(b, c) {
                var f = v(b, c), k = v(b, c + 1), h = v(b, c + 2), m = v(b, c + 3), n = (m << 1 & 255 | h >> 7) - 127;
                f |= (h & 127) << 16 | k << 8;
                if (f == 0 && n == -127)return 0;
                return (1 - 2 * (m >> 7)) * (1 + f * Math.pow(2, -23)) * Math.pow(2, n)
            }

            function h(b, c) {
                var e = v(b, c), f = v(b, c + 1), k = v(b, c + 2);
                return (v(b, c + 3) << 24) + (k << 16) + (f << 8) + e
            }

            function u(b, c) {
                var e = v(b, c);
                return (v(b, c + 1) << 8) + e
            }

            function p(b, c) {
                var e = v(b, c);
                return e > 127 ? e - 256 : e
            }

            function v(b, c) {
                return b.charCodeAt(c) & 255
            }

            function t(c) {
                var e,
                    f, k;
                e = h(b, c);
                f = h(b, c + F);
                k = h(b, c + I);
                c = u(b, c + C);
                D.faces.push(new THREE.Face3(e, f, k, null, null, D.materials[c]))
            }

            function x(c) {
                var e, f, k, m, o, p;
                e = h(b, c);
                f = h(b, c + F);
                k = h(b, c + I);
                m = u(b, c + C);
                o = h(b, c + K);
                p = h(b, c + U);
                c = h(b, c + L);
                m = D.materials[m];
                var t = E[p * 3], v = E[p * 3 + 1];
                p = E[p * 3 + 2];
                var w = E[c * 3], M = E[c * 3 + 1], c = E[c * 3 + 2];
                D.faces.push(new THREE.Face3(e, f, k, [new THREE.Vector3(E[o * 3], E[o * 3 + 1], E[o * 3 + 2]), new THREE.Vector3(t, v, p), new THREE.Vector3(w, M, c)], null, m))
            }

            function w(c) {
                var e, f, k, m;
                e = h(b, c);
                f = h(b, c + O);
                k = h(b, c + S);
                m = h(b,
                    c + P);
                c = u(b, c + o);
                D.faces.push(new THREE.Face4(e, f, k, m, null, null, D.materials[c]))
            }

            function z(c) {
                var e, f, k, m, p, t, v, w;
                e = h(b, c);
                f = h(b, c + O);
                k = h(b, c + S);
                m = h(b, c + P);
                p = u(b, c + o);
                t = h(b, c + W);
                v = h(b, c + na);
                w = h(b, c + R);
                c = h(b, c + ia);
                p = D.materials[p];
                var x = E[v * 3], M = E[v * 3 + 1];
                v = E[v * 3 + 2];
                var y = E[w * 3], T = E[w * 3 + 1];
                w = E[w * 3 + 2];
                var z = E[c * 3], B = E[c * 3 + 1], c = E[c * 3 + 2];
                D.faces.push(new THREE.Face4(e, f, k, m, [new THREE.Vector3(E[t * 3], E[t * 3 + 1], E[t * 3 + 2]), new THREE.Vector3(x, M, v), new THREE.Vector3(y, T, w), new THREE.Vector3(z, B, c)], null, p))
            }

            function y(c) {
                var e, f, k, m;
                e = h(b, c);
                f = h(b, c + aa);
                k = h(b, c + ma);
                c = N[e * 2];
                m = N[e * 2 + 1];
                e = N[f * 2];
                var o = D.faceVertexUvs[0];
                f = N[f * 2 + 1];
                var p = N[k * 2];
                k = N[k * 2 + 1];
                var t = [];
                t.push(new THREE.UV(c, m));
                t.push(new THREE.UV(e, f));
                t.push(new THREE.UV(p, k));
                o.push(t)
            }

            function B(c) {
                var e, f, k, m, o, p;
                e = h(b, c);
                f = h(b, c + fa);
                k = h(b, c + ga);
                m = h(b, c + da);
                c = N[e * 2];
                o = N[e * 2 + 1];
                e = N[f * 2];
                p = N[f * 2 + 1];
                f = N[k * 2];
                var t = D.faceVertexUvs[0];
                k = N[k * 2 + 1];
                var u = N[m * 2];
                m = N[m * 2 + 1];
                var v = [];
                v.push(new THREE.UV(c, o));
                v.push(new THREE.UV(e, p));
                v.push(new THREE.UV(f,
                    k));
                v.push(new THREE.UV(u, m));
                t.push(v)
            }

            var D = this, G = 0, H, E = [], N = [], F, I, C, K, U, L, O, S, P, o, W, na, R, ia, aa, ma, fa, ga, da, $, ca, X, ja, ea, qa;
            THREE.Geometry.call(this);
            THREE.Loader.prototype.init_materials(D, f, c);
            H = {
                signature: b.substr(G, 8),
                header_bytes: v(b, G + 8),
                vertex_coordinate_bytes: v(b, G + 9),
                normal_coordinate_bytes: v(b, G + 10),
                uv_coordinate_bytes: v(b, G + 11),
                vertex_index_bytes: v(b, G + 12),
                normal_index_bytes: v(b, G + 13),
                uv_index_bytes: v(b, G + 14),
                material_index_bytes: v(b, G + 15),
                nvertices: h(b, G + 16),
                nnormals: h(b, G + 16 + 4),
                nuvs: h(b,
                    G + 16 + 8),
                ntri_flat: h(b, G + 16 + 12),
                ntri_smooth: h(b, G + 16 + 16),
                ntri_flat_uv: h(b, G + 16 + 20),
                ntri_smooth_uv: h(b, G + 16 + 24),
                nquad_flat: h(b, G + 16 + 28),
                nquad_smooth: h(b, G + 16 + 32),
                nquad_flat_uv: h(b, G + 16 + 36),
                nquad_smooth_uv: h(b, G + 16 + 40)
            };
            G += H.header_bytes;
            F = H.vertex_index_bytes;
            I = H.vertex_index_bytes * 2;
            C = H.vertex_index_bytes * 3;
            K = H.vertex_index_bytes * 3 + H.material_index_bytes;
            U = H.vertex_index_bytes * 3 + H.material_index_bytes + H.normal_index_bytes;
            L = H.vertex_index_bytes * 3 + H.material_index_bytes + H.normal_index_bytes * 2;
            O = H.vertex_index_bytes;
            S = H.vertex_index_bytes * 2;
            P = H.vertex_index_bytes * 3;
            o = H.vertex_index_bytes * 4;
            W = H.vertex_index_bytes * 4 + H.material_index_bytes;
            na = H.vertex_index_bytes * 4 + H.material_index_bytes + H.normal_index_bytes;
            R = H.vertex_index_bytes * 4 + H.material_index_bytes + H.normal_index_bytes * 2;
            ia = H.vertex_index_bytes * 4 + H.material_index_bytes + H.normal_index_bytes * 3;
            aa = H.uv_index_bytes;
            ma = H.uv_index_bytes * 2;
            fa = H.uv_index_bytes;
            ga = H.uv_index_bytes * 2;
            da = H.uv_index_bytes * 3;
            c = H.vertex_index_bytes * 3 + H.material_index_bytes;
            qa = H.vertex_index_bytes *
            4 + H.material_index_bytes;
            $ = H.ntri_flat * c;
            ca = H.ntri_smooth * (c + H.normal_index_bytes * 3);
            X = H.ntri_flat_uv * (c + H.uv_index_bytes * 3);
            ja = H.ntri_smooth_uv * (c + H.normal_index_bytes * 3 + H.uv_index_bytes * 3);
            ea = H.nquad_flat * qa;
            c = H.nquad_smooth * (qa + H.normal_index_bytes * 4);
            qa = H.nquad_flat_uv * (qa + H.uv_index_bytes * 4);
            G += function (c) {
                for (var f, h, m, n = H.vertex_coordinate_bytes * 3, o = c + H.nvertices * n; c < o; c += n)f = e(b, c), h = e(b, c + H.vertex_coordinate_bytes), m = e(b, c + H.vertex_coordinate_bytes * 2), D.vertices.push(new THREE.Vertex(new THREE.Vector3(f,
                    h, m)));
                return H.nvertices * n
            }(G);
            G += function (c) {
                for (var e, f, k, h = H.normal_coordinate_bytes * 3, m = c + H.nnormals * h; c < m; c += h)e = p(b, c), f = p(b, c + H.normal_coordinate_bytes), k = p(b, c + H.normal_coordinate_bytes * 2), E.push(e / 127, f / 127, k / 127);
                return H.nnormals * h
            }(G);
            G += function (c) {
                for (var f, h, m = H.uv_coordinate_bytes * 2, n = c + H.nuvs * m; c < n; c += m)f = e(b, c), h = e(b, c + H.uv_coordinate_bytes), N.push(f, h);
                return H.nuvs * m
            }(G);
            $ = G + $;
            ca = $ + ca;
            X = ca + X;
            ja = X + ja;
            ea = ja + ea;
            c = ea + c;
            qa = c + qa;
            (function (b) {
                var c, e = H.vertex_index_bytes * 3 + H.material_index_bytes,
                    f = e + H.uv_index_bytes * 3, k = b + H.ntri_flat_uv * f;
                for (c = b; c < k; c += f)t(c), y(c + e);
                return k - b
            })(ca);
            (function (b) {
                var c, e = H.vertex_index_bytes * 3 + H.material_index_bytes + H.normal_index_bytes * 3, f = e + H.uv_index_bytes * 3, k = b + H.ntri_smooth_uv * f;
                for (c = b; c < k; c += f)x(c), y(c + e);
                return k - b
            })(X);
            (function (b) {
                var c, e = H.vertex_index_bytes * 4 + H.material_index_bytes, f = e + H.uv_index_bytes * 4, k = b + H.nquad_flat_uv * f;
                for (c = b; c < k; c += f)w(c), B(c + e);
                return k - b
            })(c);
            (function (b) {
                var c, e = H.vertex_index_bytes * 4 + H.material_index_bytes + H.normal_index_bytes *
                    4, f = e + H.uv_index_bytes * 4, k = b + H.nquad_smooth_uv * f;
                for (c = b; c < k; c += f)z(c), B(c + e);
                return k - b
            })(qa);
            (function (b) {
                var c, e = H.vertex_index_bytes * 3 + H.material_index_bytes, f = b + H.ntri_flat * e;
                for (c = b; c < f; c += e)t(c);
                return f - b
            })(G);
            (function (b) {
                var c, e = H.vertex_index_bytes * 3 + H.material_index_bytes + H.normal_index_bytes * 3, f = b + H.ntri_smooth * e;
                for (c = b; c < f; c += e)x(c);
                return f - b
            })($);
            (function (b) {
                var c, e = H.vertex_index_bytes * 4 + H.material_index_bytes, f = b + H.nquad_flat * e;
                for (c = b; c < f; c += e)w(c);
                return f - b
            })(ja);
            (function (b) {
                var c,
                    e = H.vertex_index_bytes * 4 + H.material_index_bytes + H.normal_index_bytes * 4, f = b + H.nquad_smooth * e;
                for (c = b; c < f; c += e)z(c);
                return f - b
            })(ea);
            this.computeCentroids();
            this.computeFaceNormals();
            THREE.Loader.prototype.hasNormals(this) && this.computeTangents()
        };
        h.prototype = new THREE.Geometry;
        h.prototype.constructor = h;
        c(new h(e))
    };
    var ColladaLoader = function () {
        function b(b, c, e) {
            for (var b = $.evaluate(b, $, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null), f = {}, k = b.iterateNext(), h = 0; k;) {
                k = (new c).parse(k);
                if (k.id.length == 0)k.id = e + h++;
                f[k.id] = k;
                k = b.iterateNext()
            }
            return f
        }

        function c() {
            var b = 1E6, c = -b, e = 0, f;
            for (f in qa)for (var k = qa[f], h = 0; h < k.sampler.length; h++) {
                var m = k.sampler[h];
                m.create();
                b = Math.min(b, m.startTime);
                c = Math.max(c, m.endTime);
                e = Math.max(e, m.input.length)
            }
            return {start: b, end: c, frames: e}
        }

        function e(b, c, f, k) {
            b.world = b.world ||
            new THREE.Matrix4;
            b.world.copy(b.matrix);
            if (b.channels && b.channels.length) {
                var h = b.channels[0].sampler.output[f];
                h instanceof THREE.Matrix4 && b.world.copy(h)
            }
            k && b.world.multiply(k, b.world);
            c.push(b);
            for (k = 0; k < b.nodes.length; k++)e(b.nodes[k], c, f, b.world)
        }

        function f(b, f, k) {
            var h = V[f.url];
            if (!h || !h.skin)console.log("could not find skin controller!"); else if (!f.skeleton || !f.skeleton.length)console.log("could not find the skeleton for the skin!"); else {
                var m = c(), f = X.getChildById(f.skeleton[0], !0) || X.getChildBySid(f.skeleton[0],
                        !0), n, o, p, t, v = new THREE.Vector3, u;
                for (n = 0; n < b.vertices.length; n++)h.skin.bindShapeMatrix.multiplyVector3(b.vertices[n].position);
                for (k = 0; k < m.frames; k++) {
                    var w = [], x = [];
                    for (n = 0; n < b.vertices.length; n++)x.push(new THREE.Vertex(new THREE.Vector3));
                    e(f, w, k);
                    n = w;
                    o = h.skin;
                    for (t = 0; t < n.length; t++) {
                        p = n[t];
                        u = -1;
                        for (var y = 0; y < o.joints.length; y++)if (p.sid == o.joints[y]) {
                            u = y;
                            break
                        }
                        if (u >= 0) {
                            y = o.invBindMatrices[u];
                            p.invBindMatrix = y;
                            p.skinningMatrix = new THREE.Matrix4;
                            p.skinningMatrix.multiply(p.world, y);
                            p.weights = [];
                            for (y = 0; y < o.weights.length; y++)for (var z = 0; z < o.weights[y].length; z++) {
                                var B = o.weights[y][z];
                                B.joint == u && p.weights.push(B)
                            }
                        } else throw"could not find joint!";
                    }
                    for (n = 0; n < w.length; n++)for (o = 0; o < w[n].weights.length; o++)p = w[n].weights[o], t = p.index, p = p.weight, u = b.vertices[t], t = x[t], v.x = u.position.x, v.y = u.position.y, v.z = u.position.z, w[n].skinningMatrix.multiplyVector3(v), t.position.x += v.x * p, t.position.y += v.y * p, t.position.z += v.z * p;
                    b.morphTargets.push({name: "target_" + k, vertices: x})
                }
            }
        }

        function h(b) {
            var c = new THREE.Object3D,
                e, k, m;
            c.name = b.id || "";
            c.matrixAutoUpdate = !1;
            c.matrix = b.matrix;
            for (m = 0; m < b.controllers.length; m++) {
                var n = V[b.controllers[m].url];
                switch (n.type) {
                    case "skin":
                        if (pa[n.skin.source]) {
                            var o = new z;
                            o.url = n.skin.source;
                            o.instance_material = b.controllers[m].instance_material;
                            b.geometries.push(o);
                            e = b.controllers[m]
                        } else if (V[n.skin.source] && (k = n = V[n.skin.source], n.morph && pa[n.morph.source]))o = new z, o.url = n.morph.source, o.instance_material = b.controllers[m].instance_material, b.geometries.push(o);
                        break;
                    case "morph":
                        if (pa[n.morph.source])o =
                            new z, o.url = n.morph.source, o.instance_material = b.controllers[m].instance_material, b.geometries.push(o), k = b.controllers[m];
                        console.log("DAE: morph-controller partially supported.")
                }
            }
            for (m = 0; m < b.geometries.length; m++) {
                var n = b.geometries[m], o = n.instance_material, n = pa[n.url], p = {}, t = 0, v;
                if (n && n.mesh && n.mesh.primitives) {
                    if (c.name.length == 0)c.name = n.id;
                    if (o)for (j = 0; j < o.length; j++) {
                        v = o[j];
                        var u = ra[va[v.target].instance_effect.url].shader;
                        u.material.opacity = !u.material.opacity ? 1 : u.material.opacity;
                        v = p[v.symbol] =
                            u.material;
                        t++
                    }
                    o = v || new THREE.MeshLambertMaterial({color: 14540253, shading: THREE.FlatShading});
                    n = n.mesh.geometry3js;
                    if (t > 1) {
                        o = new THREE.MeshFaceMaterial;
                        for (j = 0; j < n.faces.length; j++)t = n.faces[j], t.materials = [p[t.daeMaterial]]
                    }
                    if (e !== void 0)f(n, e), o.morphTargets = !0, o = new THREE.SkinnedMesh(n, o), o.skeleton = e.skeleton, o.skinController = V[e.url], o.skinInstanceController = e, o.name = "skin_" + za.length, za.push(o); else if (k !== void 0) {
                        p = n;
                        t = k instanceof x ? V[k.url] : k;
                        if (!t || !t.morph)console.log("could not find morph controller!");
                        else {
                            t = t.morph;
                            for (u = 0; u < t.targets.length; u++) {
                                var w = pa[t.targets[u]];
                                if (w.mesh && w.mesh.primitives && w.mesh.primitives.length)w = w.mesh.primitives[0].geometry, w.vertices.length === p.vertices.length && p.morphTargets.push({
                                    name: "target_1",
                                    vertices: w.vertices
                                })
                            }
                            p.morphTargets.push({name: "target_Z", vertices: p.vertices})
                        }
                        o.morphTargets = !0;
                        o = new THREE.Mesh(n, o);
                        o.name = "morph_" + Aa.length;
                        Aa.push(o)
                    } else o = new THREE.Mesh(n, o);
                    c.addChild(o)
                }
            }
            for (m = 0; m < b.nodes.length; m++)c.addChild(h(b.nodes[m], b));
            return c
        }

        function m() {
            this.init_from =
                this.id = ""
        }

        function k() {
            this.type = this.name = this.id = "";
            this.morph = this.skin = null
        }

        function n() {
            this.weights = this.targets = this.source = this.method = null
        }

        function u() {
            this.source = "";
            this.bindShapeMatrix = null;
            this.invBindMatrices = [];
            this.joints = [];
            this.weights = []
        }

        function p() {
            this.name = this.id = "";
            this.nodes = [];
            this.scene = new THREE.Object3D
        }

        function v() {
            this.sid = this.name = this.id = "";
            this.nodes = [];
            this.controllers = [];
            this.transforms = [];
            this.geometries = [];
            this.channels = [];
            this.matrix = new THREE.Matrix4
        }

        function t() {
            this.type =
                this.sid = "";
            this.data = [];
            this.matrix = new THREE.Matrix4
        }

        function x() {
            this.url = "";
            this.skeleton = [];
            this.instance_material = []
        }

        function w() {
            this.target = this.symbol = ""
        }

        function z() {
            this.url = "";
            this.instance_material = []
        }

        function y() {
            this.id = "";
            this.mesh = null
        }

        function B(b) {
            this.geometry = b.id;
            this.primitives = [];
            this.geometry3js = this.vertices = null
        }

        function D() {
        }

        function G() {
            this.material = "";
            this.count = 0;
            this.inputs = [];
            this.vcount = null;
            this.p = [];
            this.geometry = new THREE.Geometry
        }

        function H() {
            this.source = "";
            this.stride = this.count = 0;
            this.params = []
        }

        function E() {
            this.input = {}
        }

        function N() {
            this.semantic = "";
            this.offset = 0;
            this.source = "";
            this.set = 0
        }

        function F(b) {
            this.id = b;
            this.type = null
        }

        function I() {
            this.name = this.id = "";
            this.instance_effect = null
        }

        function C() {
            this.color = new THREE.Color(0);
            this.color.setRGB(Math.random(), Math.random(), Math.random());
            this.color.a = 1;
            this.texcoord = this.texture = null
        }

        function K(b, c) {
            this.type = b;
            this.effect = c;
            this.material = null
        }

        function U(b) {
            this.effect = b;
            this.format = this.init_from =
                null
        }

        function L(b) {
            this.effect = b;
            this.mipfilter = this.magfilter = this.minfilter = this.wrap_t = this.wrap_s = this.source = null
        }

        function O() {
            this.name = this.id = "";
            this.sampler = this.surface = this.shader = null
        }

        function S() {
            this.url = ""
        }

        function P() {
            this.name = this.id = "";
            this.source = {};
            this.sampler = [];
            this.channel = []
        }

        function o(b) {
            this.animation = b;
            this.target = this.source = "";
            this.member = this.arrIndices = this.arrSyntax = this.dotSyntax = this.sid = null
        }

        function W(b) {
            this.id = "";
            this.animation = b;
            this.inputs = [];
            this.endTime =
                this.startTime = this.interpolation = this.output = this.input = null;
            this.duration = 0
        }

        function na(b) {
            var c = b.getAttribute("id");
            if (ja[c] != void 0)return ja[c];
            ja[c] = (new F(c)).parse(b);
            return ja[c]
        }

        function R(b) {
            if (b == "dae")return "http://www.collada.org/2005/11/COLLADASchema";
            return null
        }

        function ia(b) {
            for (var b = ma(b), c = [], e = 0; e < b.length; e++)c.push(parseFloat(b[e]));
            return c
        }

        function aa(b) {
            for (var b = ma(b), c = [], e = 0; e < b.length; e++)c.push(parseInt(b[e], 10));
            return c
        }

        function ma(b) {
            return b.replace(/^\s+/, "").replace(/\s+$/,
                "").split(/\s+/)
        }

        function fa(b, c, e) {
            return b.hasAttribute(c) ? parseInt(b.getAttribute(c), 10) : e
        }

        function ga(b, c) {
            if (b === void 0) {
                for (var e = "0."; e.length < c + 2;)e += "0";
                return e
            }
            c = c || 2;
            e = b.toString().split(".");
            for (e[1] = e.length > 1 ? e[1].substr(0, c) : "0"; e[1].length < c;)e[1] += "0";
            return e.join(".")
        }

        function da(b, c) {
            var e = "";
            e += ga(b.x, c) + ",";
            e += ga(b.y, c) + ",";
            e += ga(b.z, c);
            return e
        }

        var $ = null, ca = null, X, ja = {}, ea = {}, qa = {}, V = {}, pa = {}, va = {}, ra = {}, sa, Ca = null, wa, Aa, za, Fa = THREE.SmoothShading;
        m.prototype.parse = function (b) {
            this.id =
                b.getAttribute("id");
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                if (e.nodeName == "init_from")this.init_from = e.textContent
            }
            return this
        };
        k.prototype.parse = function (b) {
            this.id = b.getAttribute("id");
            this.name = b.getAttribute("name");
            this.type = "none";
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                switch (e.nodeName) {
                    case "skin":
                        this.skin = (new u).parse(e);
                        this.type = e.nodeName;
                        break;
                    case "morph":
                        this.morph = (new n).parse(e), this.type = e.nodeName
                }
            }
            return this
        };
        n.prototype.parse = function (b) {
            var c =
            {}, e = [], f;
            this.method = b.getAttribute("method");
            this.source = b.getAttribute("source").replace(/^#/, "");
            for (f = 0; f < b.childNodes.length; f++) {
                var k = b.childNodes[f];
                if (k.nodeType == 1)switch (k.nodeName) {
                    case "source":
                        k = (new F).parse(k);
                        c[k.id] = k;
                        break;
                    case "targets":
                        e = this.parseInputs(k);
                        break;
                    default:
                        console.log(k.nodeName)
                }
            }
            for (f = 0; f < e.length; f++)switch (b = e[f], k = c[b.source], b.semantic) {
                case "MORPH_TARGET":
                    this.targets = k.read();
                    break;
                case "MORPH_WEIGHT":
                    this.weights = k.read()
            }
            return this
        };
        n.prototype.parseInputs =
            function (b) {
                for (var c = [], e = 0; e < b.childNodes.length; e++) {
                    var f = b.childNodes[e];
                    if (f.nodeType == 1)switch (f.nodeName) {
                        case "input":
                            c.push((new N).parse(f))
                    }
                }
                return c
            };
        u.prototype.parse = function (b) {
            var c = {}, e, f;
            this.source = b.getAttribute("source").replace(/^#/, "");
            this.invBindMatrices = [];
            this.joints = [];
            this.weights = [];
            for (var k = 0; k < b.childNodes.length; k++) {
                var h = b.childNodes[k];
                if (h.nodeType == 1)switch (h.nodeName) {
                    case "bind_shape_matrix":
                        h = ia(h.textContent);
                        this.bindShapeMatrix = new THREE.Matrix4;
                        this.bindShapeMatrix.set(h[0],
                            h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], h[12], h[13], h[14], h[15]);
                        break;
                    case "source":
                        h = (new F).parse(h);
                        c[h.id] = h;
                        break;
                    case "joints":
                        e = h;
                        break;
                    case "vertex_weights":
                        f = h;
                        break;
                    default:
                        console.log(h.nodeName)
                }
            }
            this.parseJoints(e, c);
            this.parseWeights(f, c);
            return this
        };
        u.prototype.parseJoints = function (b, c) {
            for (var e = 0; e < b.childNodes.length; e++) {
                var f = b.childNodes[e];
                if (f.nodeType == 1)switch (f.nodeName) {
                    case "input":
                        var f = (new N).parse(f), k = c[f.source];
                        if (f.semantic == "JOINT")this.joints =
                            k.read(); else if (f.semantic == "INV_BIND_MATRIX")this.invBindMatrices = k.read()
                }
            }
        };
        u.prototype.parseWeights = function (b, c) {
            for (var e, f, k = [], h = 0; h < b.childNodes.length; h++) {
                var m = b.childNodes[h];
                if (m.nodeType == 1)switch (m.nodeName) {
                    case "input":
                        k.push((new N).parse(m));
                        break;
                    case "v":
                        e = aa(m.textContent);
                        break;
                    case "vcount":
                        f = aa(m.textContent)
                }
            }
            for (h = m = 0; h < f.length; h++) {
                for (var n = f[h], o = [], p = 0; p < n; p++) {
                    for (var t = {}, u = 0; u < k.length; u++) {
                        var v = k[u], w = e[m + v.offset];
                        switch (v.semantic) {
                            case "JOINT":
                                t.joint = w;
                                break;
                            case "WEIGHT":
                                t.weight = c[v.source].data[w]
                        }
                    }
                    o.push(t);
                    m += k.length
                }
                for (p = 0; p < o.length; p++)o[p].index = h;
                this.weights.push(o)
            }
        };
        p.prototype.getChildById = function (b, c) {
            for (var e = 0; e < this.nodes.length; e++) {
                var f = this.nodes[e].getChildById(b, c);
                if (f)return f
            }
            return null
        };
        p.prototype.getChildBySid = function (b, c) {
            for (var e = 0; e < this.nodes.length; e++) {
                var f = this.nodes[e].getChildBySid(b, c);
                if (f)return f
            }
            return null
        };
        p.prototype.parse = function (b) {
            this.id = b.getAttribute("id");
            this.name = b.getAttribute("name");
            this.nodes = [];
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                if (e.nodeType == 1)switch (e.nodeName) {
                    case "node":
                        this.nodes.push((new v).parse(e))
                }
            }
            return this
        };
        v.prototype.getChannelForTransform = function (b) {
            for (var c = 0; c < this.channels.length; c++) {
                var e = this.channels[c], f = e.target.split("/");
                f.shift();
                var k = f.shift(), h = k.indexOf(".") >= 0, m = k.indexOf("(") >= 0, n;
                if (h)f = k.split("."), k = f.shift(), f.shift(); else if (m) {
                    n = k.split("(");
                    k = n.shift();
                    for (f = 0; f < n.length; f++)n[f] = parseInt(n[f].replace(/\)/,
                        ""))
                }
                if (k == b)return e.info = {sid: k, dotSyntax: h, arrSyntax: m, arrIndices: n}, e
            }
            return null
        };
        v.prototype.getChildById = function (b, c) {
            if (this.id == b)return this;
            if (c)for (var e = 0; e < this.nodes.length; e++) {
                var f = this.nodes[e].getChildById(b, c);
                if (f)return f
            }
            return null
        };
        v.prototype.getChildBySid = function (b, c) {
            if (this.sid == b)return this;
            if (c)for (var e = 0; e < this.nodes.length; e++) {
                var f = this.nodes[e].getChildBySid(b, c);
                if (f)return f
            }
            return null
        };
        v.prototype.getTransformBySid = function (b) {
            for (var c = 0; c < this.transforms.length; c++)if (this.transforms[c].sid ==
                b)return this.transforms[c];
            return null
        };
        v.prototype.parse = function (b) {
            var c;
            this.id = b.getAttribute("id");
            this.sid = b.getAttribute("sid");
            this.name = b.getAttribute("name");
            this.type = b.getAttribute("type");
            this.type = this.type == "JOINT" ? this.type : "NODE";
            this.nodes = [];
            this.transforms = [];
            this.geometries = [];
            this.controllers = [];
            this.matrix = new THREE.Matrix4;
            for (var e = 0; e < b.childNodes.length; e++)if (c = b.childNodes[e], c.nodeType == 1)switch (c.nodeName) {
                case "node":
                    this.nodes.push((new v).parse(c));
                    break;
                case "instance_camera":
                    break;
                case "instance_controller":
                    this.controllers.push((new x).parse(c));
                    break;
                case "instance_geometry":
                    this.geometries.push((new z).parse(c));
                    break;
                case "instance_light":
                    break;
                case "instance_node":
                    c = c.getAttribute("url").replace(/^#/, "");
                    (c = $.evaluate(".//dae:library_nodes//dae:node[@id='" + c + "']", $, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext()) && this.nodes.push((new v).parse(c));
                    break;
                case "rotate":
                case "translate":
                case "scale":
                case "matrix":
                case "lookat":
                case "skew":
                    this.transforms.push((new t).parse(c));
                    break;
                case "extra":
                    break;
                default:
                    console.log(c.nodeName)
            }
            b = [];
            e = 1E6;
            c = -1E6;
            for (var f in qa)for (var k = qa[f], h = 0; h < k.channel.length; h++) {
                var m = k.channel[h], n = k.sampler[h];
                f = m.target.split("/")[0];
                if (f == this.id)n.create(), m.sampler = n, e = Math.min(e, n.startTime), c = Math.max(c, n.endTime), b.push(m)
            }
            if (b.length)this.startTime = e, this.endTime = c;
            if ((this.channels = b) && this.channels.length) {
                f = 1E7;
                for (i = 0; i < this.channels.length; i++) {
                    b = this.channels[i].sampler;
                    for (e = 0; e < b.input.length - 1; e++)f = Math.min(f, b.input[e +
                    1] - b.input[e])
                }
                e = [];
                for (b = this.startTime; b < this.endTime; b += f) {
                    c = b;
                    for (var k = {}, o = h = void 0, h = 0; h < this.channels.length; h++)o = this.channels[h], k[o.sid] = o;
                    m = new THREE.Matrix4;
                    for (h = 0; h < this.transforms.length; h++)if (n = this.transforms[h], o = k[n.sid], o !== void 0) {
                        for (var p = o.sampler, u, o = 0; o < p.input.length - 1; o++)if (p.input[o + 1] > c) {
                            u = p.output[o];
                            break
                        }
                        m = u !== void 0 ? u instanceof THREE.Matrix4 ? m.multiply(m, u) : m.multiply(m, n.matrix) : m.multiply(m, n.matrix)
                    } else m = m.multiply(m, n.matrix);
                    c = m;
                    e.push({
                        time: b, pos: [c.n14,
                            c.n24, c.n34], rotq: [0, 0, 0, 1], scl: [1, 1, 1]
                    })
                }
                this.keys = e
            }
            this.updateMatrix();
            return this
        };
        v.prototype.updateMatrix = function () {
            this.matrix.identity();
            for (var b = 0; b < this.transforms.length; b++)this.matrix.multiply(this.matrix, this.transforms[b].matrix)
        };
        t.prototype.parse = function (b) {
            this.sid = b.getAttribute("sid");
            this.type = b.nodeName;
            this.data = ia(b.textContent);
            this.updateMatrix();
            return this
        };
        t.prototype.updateMatrix = function () {
            var b = 0;
            this.matrix.identity();
            switch (this.type) {
                case "matrix":
                    this.matrix.set(this.data[0],
                        this.data[1], this.data[2], this.data[3], this.data[4], this.data[5], this.data[6], this.data[7], this.data[8], this.data[9], this.data[10], this.data[11], this.data[12], this.data[13], this.data[14], this.data[15]);
                    break;
                case "translate":
                    this.matrix.setTranslation(this.data[0], this.data[1], this.data[2]);
                    break;
                case "rotate":
                    b = this.data[3] * (Math.PI / 180);
                    this.matrix.setRotationAxis(new THREE.Vector3(this.data[0], this.data[1], this.data[2]), b);
                    break;
                case "scale":
                    this.matrix.setScale(this.data[0], this.data[1], this.data[2])
            }
            return this.matrix
        };
        x.prototype.parse = function (b) {
            this.url = b.getAttribute("url").replace(/^#/, "");
            this.skeleton = [];
            this.instance_material = [];
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                if (e.nodeType == 1)switch (e.nodeName) {
                    case "skeleton":
                        this.skeleton.push(e.textContent.replace(/^#/, ""));
                        break;
                    case "bind_material":
                        if (e = $.evaluate(".//dae:instance_material", e, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null))for (var f = e.iterateNext(); f;)this.instance_material.push((new w).parse(f)), f = e.iterateNext()
                }
            }
            return this
        };
        w.prototype.parse = function (b) {
            this.symbol = b.getAttribute("symbol");
            this.target = b.getAttribute("target").replace(/^#/, "");
            return this
        };
        z.prototype.parse = function (b) {
            this.url = b.getAttribute("url").replace(/^#/, "");
            this.instance_material = [];
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                if (e.nodeType == 1 && e.nodeName == "bind_material") {
                    if (b = $.evaluate(".//dae:instance_material", e, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null))for (c = b.iterateNext(); c;)this.instance_material.push((new w).parse(c)),
                        c = b.iterateNext();
                    break
                }
            }
            return this
        };
        y.prototype.parse = function (b) {
            this.id = b.getAttribute("id");
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                switch (e.nodeName) {
                    case "mesh":
                        this.mesh = (new B(this)).parse(e)
                }
            }
            return this
        };
        B.prototype.parse = function (b) {
            function c(b, e) {
                var f = da(b.position);
                k[f] === void 0 && (k[f] = {v: b, index: e});
                return k[f]
            }

            this.primitives = [];
            var e;
            for (e = 0; e < b.childNodes.length; e++) {
                var f = b.childNodes[e];
                switch (f.nodeName) {
                    case "source":
                        na(f);
                        break;
                    case "vertices":
                        this.vertices =
                            (new E).parse(f);
                        break;
                    case "triangles":
                        this.primitives.push((new G).parse(f));
                        break;
                    case "polygons":
                        console.warn("polygon holes not yet supported!");
                    case "polylist":
                        this.primitives.push((new D).parse(f))
                }
            }
            var k = {};
            this.geometry3js = new THREE.Geometry;
            f = ja[this.vertices.input.POSITION.source].data;
            for (b = e = 0; e < f.length; e += 3, b++) {
                var h = new THREE.Vertex(new THREE.Vector3(f[e], f[e + 1], f[e + 2]));
                c(h, b);
                this.geometry3js.vertices.push(h)
            }
            for (e = 0; e < this.primitives.length; e++)primitive = this.primitives[e], primitive.setVertices(this.vertices),
                this.handlePrimitive(primitive, this.geometry3js, k);
            this.geometry3js.computeCentroids();
            this.geometry3js.computeFaceNormals();
            this.geometry3js.computeVertexNormals();
            this.geometry3js.computeBoundingBox();
            return this
        };
        B.prototype.handlePrimitive = function (b, c, e) {
            var f = 0, k, h, m = b.p, n = b.inputs, o, p, t, u = 0, v = 3, w = [];
            for (k = 0; k < n.length; k++)o = n[k], o.semantic == "TEXCOORD" && w.push(o.set);
            for (; f < m.length;) {
                var x = [], y = [], z = {};
                b.vcount && (v = b.vcount[u++]);
                for (k = 0; k < v; k++)for (h = 0; h < n.length; h++)switch (o = n[h], source =
                    ja[o.source], p = m[f + k * n.length + o.offset], numParams = source.accessor.params.length, t = p * numParams, o.semantic) {
                    case "VERTEX":
                        o = da(c.vertices[p].position);
                        x.push(e[o].index);
                        break;
                    case "NORMAL":
                        y.push(new THREE.Vector3(source.data[t + 0], source.data[t + 1], source.data[t + 2]));
                        break;
                    case "TEXCOORD":
                        z[o.set] === void 0 && (z[o.set] = []), z[o.set].push(new THREE.UV(source.data[t + 0], source.data[t + 1]))
                }
                h = new THREE.Face3(x[0], x[1], x[2], [y[0], y[1], y[2]]);
                h.daeMaterial = b.material;
                c.faces.push(h);
                for (h = 0; h < w.length; h++)o =
                    z[w[h]], c.faceVertexUvs[h].push([o[0], o[1], o[2]]);
                if (v > 3)for (k = 2; k < x.length - 1; k++) {
                    h = new THREE.Face3(x[0], x[k], x[k + 1], [y[0], y[k], y[k + 1]]);
                    h.daeMaterial = b.material;
                    c.faces.push(h);
                    for (h = 0; h < w.length; h++)o = z[w[h]], c.faceVertexUvs[h].push([o[0], o[k], o[k + 1]])
                }
                f += n.length * v
            }
        };
        D.prototype = new G;
        D.prototype.constructor = D;
        G.prototype.setVertices = function (b) {
            for (var c = 0; c < this.inputs.length; c++)if (this.inputs[c].source == b.id)this.inputs[c].source = b.input.POSITION.source
        };
        G.prototype.parse = function (b) {
            this.inputs =
                [];
            this.material = b.getAttribute("material");
            this.count = fa(b, "count", 0);
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                switch (e.nodeName) {
                    case "input":
                        this.inputs.push((new N).parse(b.childNodes[c]));
                        break;
                    case "vcount":
                        this.vcount = aa(e.textContent);
                        break;
                    case "p":
                        this.p = aa(e.textContent)
                }
            }
            return this
        };
        H.prototype.parse = function (b) {
            this.params = [];
            this.source = b.getAttribute("source");
            this.count = fa(b, "count", 0);
            this.stride = fa(b, "stride", 0);
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                if (e.nodeName == "param") {
                    var f = {};
                    f.name = e.getAttribute("name");
                    f.type = e.getAttribute("type");
                    this.params.push(f)
                }
            }
            return this
        };
        E.prototype.parse = function (b) {
            this.id = b.getAttribute("id");
            for (var c = 0; c < b.childNodes.length; c++)b.childNodes[c].nodeName == "input" && (input = (new N).parse(b.childNodes[c]), this.input[input.semantic] = input);
            return this
        };
        N.prototype.parse = function (b) {
            this.semantic = b.getAttribute("semantic");
            this.source = b.getAttribute("source").replace(/^#/, "");
            this.set = fa(b, "set", -1);
            this.offset =
                fa(b, "offset", 0);
            if (this.semantic == "TEXCOORD" && this.set < 0)this.set = 0;
            return this
        };
        F.prototype.parse = function (b) {
            this.id = b.getAttribute("id");
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                switch (e.nodeName) {
                    case "bool_array":
                        for (var f = ma(e.textContent), k = [], h = 0; h < f.length; h++)k.push(f[h] == "true" || f[h] == "1" ? !0 : !1);
                        this.data = k;
                        this.type = e.nodeName;
                        break;
                    case "float_array":
                        this.data = ia(e.textContent);
                        this.type = e.nodeName;
                        break;
                    case "int_array":
                        this.data = aa(e.textContent);
                        this.type = e.nodeName;
                        break;
                    case "IDREF_array":
                    case "Name_array":
                        this.data = ma(e.textContent);
                        this.type = e.nodeName;
                        break;
                    case "technique_common":
                        for (f = 0; f < e.childNodes.length; f++)if (e.childNodes[f].nodeName == "accessor") {
                            this.accessor = (new H).parse(e.childNodes[f]);
                            break
                        }
                }
            }
            return this
        };
        F.prototype.read = function () {
            var b = [], c = this.accessor.params[0];
            switch (c.type) {
                case "IDREF":
                case "Name":
                case "float":
                    return this.data;
                case "float4x4":
                    for (c = 0; c < this.data.length; c += 16) {
                        var e = this.data.slice(c, c + 16), f = new THREE.Matrix4;
                        f.set(e[0],
                            e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
                        b.push(f)
                    }
                    break;
                default:
                    console.log("Dae::Source:read dont know how to read " + c.type)
            }
            return b
        };
        I.prototype.parse = function (b) {
            this.id = b.getAttribute("id");
            this.name = b.getAttribute("name");
            for (var c = 0; c < b.childNodes.length; c++)if (b.childNodes[c].nodeName == "instance_effect") {
                this.instance_effect = (new S).parse(b.childNodes[c]);
                break
            }
            return this
        };
        C.prototype.isColor = function () {
            return this.texture == null
        };
        C.prototype.isTexture =
            function () {
                return this.texture != null
            };
        C.prototype.parse = function (b) {
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                if (e.nodeType == 1)switch (e.nodeName) {
                    case "color":
                        e = ia(e.textContent);
                        this.color = new THREE.Color(0);
                        this.color.setRGB(e[0], e[1], e[2]);
                        this.color.a = e[3];
                        break;
                    case "texture":
                        this.texture = e.getAttribute("texture"), this.texcoord = e.getAttribute("texcoord")
                }
            }
            return this
        };
        K.prototype.parse = function (b) {
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                if (e.nodeType ==
                    1)switch (e.nodeName) {
                    case "ambient":
                    case "emission":
                    case "diffuse":
                    case "specular":
                    case "transparent":
                        this[e.nodeName] = (new C).parse(e);
                        break;
                    case "shininess":
                    case "reflectivity":
                    case "transparency":
                        var f;
                        f = $.evaluate(".//dae:float", e, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
                        for (var k = f.iterateNext(), h = []; k;)h.push(k), k = f.iterateNext();
                        f = h;
                        f.length > 0 && (this[e.nodeName] = parseFloat(f[0].textContent))
                }
            }
            this.create();
            return this
        };
        K.prototype.create = function () {
            var b = {}, c = this.transparency !== void 0 &&
                this.transparency < 1, e;
            for (e in this)switch (e) {
                case "ambient":
                case "emission":
                case "diffuse":
                case "specular":
                    var f = this[e];
                    if (f instanceof C)if (f.isTexture()) {
                        if (this.effect.sampler && this.effect.surface && this.effect.sampler.source == this.effect.surface.sid && (f = ea[this.effect.surface.init_from]))b.map = THREE.ImageUtils.loadTexture(wa + f.init_from), b.map.wrapS = THREE.RepeatWrapping, b.map.wrapT = THREE.RepeatWrapping, b.map.repeat.x = 1, b.map.repeat.y = -1
                    } else e == "diffuse" ? b.color = f.color.getHex() : c || (b[e] = f.color.getHex());
                    break;
                case "shininess":
                case "reflectivity":
                    b[e] = this[e];
                    break;
                case "transparency":
                    if (c)b.transparent = !0, b.opacity = this[e], c = !0
            }
            b.shading = Fa;
            return this.material = new THREE.MeshLambertMaterial(b)
        };
        U.prototype.parse = function (b) {
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                if (e.nodeType == 1)switch (e.nodeName) {
                    case "init_from":
                        this.init_from = e.textContent;
                        break;
                    case "format":
                        this.format = e.textContent;
                        break;
                    default:
                        console.log("unhandled Surface prop: " + e.nodeName)
                }
            }
            return this
        };
        L.prototype.parse =
            function (b) {
                for (var c = 0; c < b.childNodes.length; c++) {
                    var e = b.childNodes[c];
                    if (e.nodeType == 1)switch (e.nodeName) {
                        case "source":
                            this.source = e.textContent;
                            break;
                        case "minfilter":
                            this.minfilter = e.textContent;
                            break;
                        case "magfilter":
                            this.magfilter = e.textContent;
                            break;
                        case "mipfilter":
                            this.mipfilter = e.textContent;
                            break;
                        case "wrap_s":
                            this.wrap_s = e.textContent;
                            break;
                        case "wrap_t":
                            this.wrap_t = e.textContent;
                            break;
                        default:
                            console.log("unhandled Sampler2D prop: " + e.nodeName)
                    }
                }
                return this
            };
        O.prototype.create = function () {
            if (this.shader ==
                null)return null
        };
        O.prototype.parse = function (b) {
            this.id = b.getAttribute("id");
            this.name = b.getAttribute("name");
            this.shader = null;
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                if (e.nodeType == 1)switch (e.nodeName) {
                    case "profile_COMMON":
                        this.parseTechnique(this.parseProfileCOMMON(e))
                }
            }
            return this
        };
        O.prototype.parseNewparam = function (b) {
            for (var c = b.getAttribute("sid"), e = 0; e < b.childNodes.length; e++) {
                var f = b.childNodes[e];
                if (f.nodeType == 1)switch (f.nodeName) {
                    case "surface":
                        this.surface = (new U(this)).parse(f);
                        this.surface.sid = c;
                        break;
                    case "sampler2D":
                        this.sampler = (new L(this)).parse(f);
                        this.sampler.sid = c;
                        break;
                    case "extra":
                        break;
                    default:
                        console.log(f.nodeName)
                }
            }
        };
        O.prototype.parseProfileCOMMON = function (b) {
            for (var c, e = 0; e < b.childNodes.length; e++) {
                var f = b.childNodes[e];
                if (f.nodeType == 1)switch (f.nodeName) {
                    case "profile_COMMON":
                        this.parseProfileCOMMON(f);
                        break;
                    case "technique":
                        c = f;
                        break;
                    case "newparam":
                        this.parseNewparam(f);
                        break;
                    case "extra":
                        break;
                    default:
                        console.log(f.nodeName)
                }
            }
            return c
        };
        O.prototype.parseTechnique =
            function (b) {
                for (var c = 0; c < b.childNodes.length; c++) {
                    var e = b.childNodes[c];
                    if (e.nodeType == 1)switch (e.nodeName) {
                        case "lambert":
                        case "blinn":
                        case "phong":
                            this.shader = (new K(e.nodeName, this)).parse(e)
                    }
                }
            };
        S.prototype.parse = function (b) {
            this.url = b.getAttribute("url").replace(/^#/, "");
            return this
        };
        P.prototype.parse = function (b) {
            this.id = b.getAttribute("id");
            this.name = b.getAttribute("name");
            this.source = {};
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                if (e.nodeType == 1)switch (e.nodeName) {
                    case "source":
                        e =
                            (new F).parse(e);
                        this.source[e.id] = e;
                        break;
                    case "sampler":
                        this.sampler.push((new W(this)).parse(e));
                        break;
                    case "channel":
                        this.channel.push((new o(this)).parse(e))
                }
            }
            return this
        };
        o.prototype.parse = function (b) {
            this.source = b.getAttribute("source").replace(/^#/, "");
            this.target = b.getAttribute("target");
            var c = this.target.split("/");
            c.shift();
            var b = c.shift(), e = b.indexOf(".") >= 0, f = b.indexOf("(") >= 0, k, h;
            if (e)c = b.split("."), b = c.shift(), h = c.shift(); else if (f) {
                k = b.split("(");
                b = k.shift();
                for (c = 0; c < k.length; c++)k[c] =
                    parseInt(k[c].replace(/\)/, ""))
            }
            this.sid = b;
            this.dotSyntax = e;
            this.arrSyntax = f;
            this.arrIndices = k;
            this.member = h;
            return this
        };
        W.prototype.parse = function (b) {
            this.id = b.getAttribute("id");
            this.inputs = [];
            for (var c = 0; c < b.childNodes.length; c++) {
                var e = b.childNodes[c];
                if (e.nodeType == 1)switch (e.nodeName) {
                    case "input":
                        this.inputs.push((new N).parse(e))
                }
            }
            return this
        };
        W.prototype.create = function () {
            for (var b = 0; b < this.inputs.length; b++) {
                var c = this.inputs[b], e = this.animation.source[c.source];
                switch (c.semantic) {
                    case "INPUT":
                        this.input =
                            e.read();
                        break;
                    case "OUTPUT":
                        this.output = e.read();
                        break;
                    case "INTERPOLATION":
                        this.interpolation = e.read();
                        break;
                    case "IN_TANGENT":
                        break;
                    case "OUT_TANGENT":
                        break;
                    default:
                        console.log(c.semantic)
                }
            }
            this.duration = this.endTime = this.startTime = 0;
            if (this.input.length) {
                this.startTime = 1E8;
                this.endTime = -1E8;
                for (b = 0; b < this.input.length; b++)this.startTime = Math.min(this.startTime, this.input[b]), this.endTime = Math.max(this.endTime, this.input[b]);
                this.duration = this.endTime - this.startTime
            }
        };
        return {
            load: function (e, f) {
                if (document.implementation &&
                    document.implementation.createDocument) {
                    document.implementation.createDocument("http://www.collada.org/2005/11/COLLADASchema", "COLLADA", null);
                    e += "?rnd=" + Math.random();
                    var n = new XMLHttpRequest;
                    n.overrideMimeType && n.overrideMimeType("text/xml");
                    n.onreadystatechange = function () {
                        if (n.readyState == 4 && (n.status == 0 || n.status == 200)) {
                            Ca = f;
                            var o, t = e;
                            $ = n.responseXML;
                            o = Ca;
                            t !== void 0 && (t = t.split("/"), t.pop(), wa = t.join("/") + "/");
                            ea = b("//dae:library_images/dae:image", m, "image");
                            va = b("//dae:library_materials/dae:material",
                                I, "material");
                            ra = b("//dae:library_effects/dae:effect", O, "effect");
                            pa = b("//dae:library_geometries/dae:geometry", y, "geometry");
                            V = b("//dae:library_controllers/dae:controller", k, "controller");
                            qa = b("//dae:library_animations/dae:animation", P, "animation");
                            sa = b(".//dae:library_visual_scenes/dae:visual_scene", p, "visual_scene");
                            Aa = [];
                            za = [];
                            (t = $.evaluate(".//dae:scene/dae:instance_visual_scene", $, R, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext()) ? (t = t.getAttribute("url").replace(/^#/, ""), X = sa[t]) :
                                X = null;
                            ca = new THREE.Object3D;
                            for (t = 0; t < X.nodes.length; t++)ca.addChild(h(X.nodes[t]));
                            c();
                            for (var u in qa);
                            u = {
                                scene: ca,
                                morphs: Aa,
                                skins: za,
                                dae: {
                                    images: ea,
                                    materials: va,
                                    effects: ra,
                                    geometries: pa,
                                    controllers: V,
                                    animations: qa,
                                    visualScenes: sa,
                                    scene: X
                                }
                            };
                            o && o(u)
                        }
                    };
                    n.open("GET", e, !0);
                    n.send(null)
                } else alert("Don't know how to parse XML!")
            }, setPreferredShading: function (b) {
                Fa = b
            }, applySkin: f, geometries: pa
        }
    };
    THREE.JSONLoader = function (b) {
        THREE.Loader.call(this, b)
    };
    THREE.JSONLoader.prototype = new THREE.Loader;
    THREE.JSONLoader.prototype.constructor = THREE.JSONLoader;
    THREE.JSONLoader.prototype.supr = THREE.Loader.prototype;
    THREE.JSONLoader.prototype.load = function (b) {
        var c = this, e = b.model, f = b.callback, h = b.texture_path ? b.texture_path : this.extractUrlbase(e), b = new Worker(e);
        b.onmessage = function (b) {
            c.createModel(b.data, f, h);
            c.onLoadComplete()
        };
        this.onLoadStart();
        b.postMessage((new Date).getTime())
    };
    THREE.JSONLoader.prototype.createModel = function (b, c, e) {
        var f = new THREE.Geometry, h = b.scale !== void 0 ? 1 / b.scale : 1;
        this.init_materials(f, b.materials, e);
        (function (c) {
            if (b.version === void 0 || b.version != 2)console.error("Deprecated file format."); else {
                var e, h, u, p, v, t, x, w, z, y, B, D, G, H, E = b.faces;
                t = b.vertices;
                var N = b.normals, F = b.colors, I = 0;
                for (e = 0; e < b.uvs.length; e++)b.uvs[e].length && I++;
                for (e = 0; e < I; e++)f.faceUvs[e] = [], f.faceVertexUvs[e] = [];
                p = 0;
                for (v = t.length; p < v;)x = new THREE.Vertex, x.position.x = t[p++] * c, x.position.y =
                    t[p++] * c, x.position.z = t[p++] * c, f.vertices.push(x);
                p = 0;
                for (v = E.length; p < v;) {
                    c = E[p++];
                    t = c & 1;
                    u = c & 2;
                    e = c & 4;
                    h = c & 8;
                    w = c & 16;
                    x = c & 32;
                    y = c & 64;
                    c &= 128;
                    t ? (B = new THREE.Face4, B.a = E[p++], B.b = E[p++], B.c = E[p++], B.d = E[p++], t = 4) : (B = new THREE.Face3, B.a = E[p++], B.b = E[p++], B.c = E[p++], t = 3);
                    if (u)u = E[p++], B.materials = f.materials[u];
                    u = f.faces.length;
                    if (e)for (e = 0; e < I; e++)D = b.uvs[e], z = E[p++], H = D[z * 2], z = D[z * 2 + 1], f.faceUvs[e][u] = new THREE.UV(H, z);
                    if (h)for (e = 0; e < I; e++) {
                        D = b.uvs[e];
                        G = [];
                        for (h = 0; h < t; h++)z = E[p++], H = D[z * 2], z = D[z * 2 + 1], G[h] =
                            new THREE.UV(H, z);
                        f.faceVertexUvs[e][u] = G
                    }
                    if (w)w = E[p++] * 3, h = new THREE.Vector3, h.x = N[w++], h.y = N[w++], h.z = N[w], B.normal = h;
                    if (x)for (e = 0; e < t; e++)w = E[p++] * 3, h = new THREE.Vector3, h.x = N[w++], h.y = N[w++], h.z = N[w], B.vertexNormals.push(h);
                    if (y)x = E[p++], x = new THREE.Color(F[x]), B.color = x;
                    if (c)for (e = 0; e < t; e++)x = E[p++], x = new THREE.Color(F[x]), B.vertexColors.push(x);
                    f.faces.push(B)
                }
            }
        })(h);
        (function () {
            var c, e, h, u;
            if (b.skinWeights) {
                c = 0;
                for (e = b.skinWeights.length; c < e; c += 2)h = b.skinWeights[c], u = b.skinWeights[c + 1], f.skinWeights.push(new THREE.Vector4(h,
                    u, 0, 0))
            }
            if (b.skinIndices) {
                c = 0;
                for (e = b.skinIndices.length; c < e; c += 2)h = b.skinIndices[c], u = b.skinIndices[c + 1], f.skinIndices.push(new THREE.Vector4(h, u, 0, 0))
            }
            f.bones = b.bones;
            f.animation = b.animation
        })();
        (function (c) {
            if (b.morphTargets !== void 0) {
                var e, h, u, p, v, t, x, w, z;
                e = 0;
                for (h = b.morphTargets.length; e < h; e++) {
                    f.morphTargets[e] = {};
                    f.morphTargets[e].name = b.morphTargets[e].name;
                    f.morphTargets[e].vertices = [];
                    w = f.morphTargets[e].vertices;
                    z = b.morphTargets[e].vertices;
                    u = 0;
                    for (p = z.length; u < p; u += 3)v = z[u] * c, t = z[u + 1] *
                    c, x = z[u + 2] * c, w.push(new THREE.Vertex(new THREE.Vector3(v, t, x)))
                }
            }
            if (b.morphColors !== void 0) {
                e = 0;
                for (h = b.morphColors.length; e < h; e++) {
                    f.morphColors[e] = {};
                    f.morphColors[e].name = b.morphColors[e].name;
                    f.morphColors[e].colors = [];
                    p = f.morphColors[e].colors;
                    v = b.morphColors[e].colors;
                    c = 0;
                    for (u = v.length; c < u; c += 3)t = new THREE.Color(16755200), t.setRGB(v[c], v[c + 1], v[c + 2]), p.push(t)
                }
            }
        })(h);
        (function () {
            if (b.edges !== void 0) {
                var c, e, h;
                for (c = 0; c < b.edges.length; c += 2)e = b.edges[c], h = b.edges[c + 1], f.edges.push(new THREE.Edge(f.vertices[e],
                    f.vertices[h], e, h))
            }
        })();
        f.computeCentroids();
        f.computeFaceNormals();
        this.hasNormals(f) && f.computeTangents();
        c(f)
    };
    THREE.SceneLoader = function () {
        this.onLoadStart = function () {
        };
        this.onLoadProgress = function () {
        };
        this.onLoadComplete = function () {
        };
        this.callbackSync = function () {
        };
        this.callbackProgress = function () {
        }
    };
    THREE.SceneLoader.prototype = {
        load: function (b, c) {
            var e = this, f = new Worker(b);
            f.postMessage(0);
            var h = THREE.Loader.prototype.extractUrlbase(b);
            f.onmessage = function (b) {
                function f(b, c) {
                    return c == "relativeToHTML" ? b : h + "/" + b
                }

                function n() {
                    for (w in O.objects)if (!R.objects[w])if (G = O.objects[w], G.geometry !== void 0) {
                        if (F = R.geometries[G.geometry]) {
                            var b = !1;
                            U = [];
                            for (aa = 0; aa < G.materials.length; aa++)U[aa] = R.materials[G.materials[aa]], b = U[aa]instanceof THREE.MeshShaderMaterial;
                            b && F.computeTangents();
                            H = G.position;
                            r =
                                G.rotation;
                            q = G.quaternion;
                            s = G.scale;
                            q = 0;
                            U.length == 0 && (U[0] = new THREE.MeshFaceMaterial);
                            U.length > 1 && (U = [new THREE.MeshFaceMaterial]);
                            object = new THREE.Mesh(F, U);
                            object.name = w;
                            object.position.set(H[0], H[1], H[2]);
                            q ? (object.quaternion.set(q[0], q[1], q[2], q[3]), object.useQuaternion = !0) : object.rotation.set(r[0], r[1], r[2]);
                            object.scale.set(s[0], s[1], s[2]);
                            object.visible = G.visible;
                            R.scene.addObject(object);
                            R.objects[w] = object;
                            G.meshCollider && (b = THREE.CollisionUtils.MeshColliderWBox(object), R.scene.collisions.colliders.push(b));
                            if (G.castsShadow)b = new THREE.ShadowVolume(F), R.scene.addChild(b), b.position = object.position, b.rotation = object.rotation, b.scale = object.scale;
                            G.trigger && G.trigger.toLowerCase() != "none" && (b = {
                                type: G.trigger,
                                object: G
                            }, R.triggers[object.name] = b)
                        }
                    } else H = G.position, r = G.rotation, q = G.quaternion, s = G.scale, q = 0, object = new THREE.Object3D, object.name = w, object.position.set(H[0], H[1], H[2]), q ? (object.quaternion.set(q[0], q[1], q[2], q[3]), object.useQuaternion = !0) : object.rotation.set(r[0], r[1], r[2]), object.scale.set(s[0],
                        s[1], s[2]), object.visible = G.visible !== void 0 ? G.visible : !1, R.scene.addObject(object), R.objects[w] = object, R.empties[w] = object, G.trigger && G.trigger.toLowerCase() != "none" && (b = {
                        type: G.trigger,
                        object: G
                    }, R.triggers[object.name] = b)
                }

                function u(b) {
                    return function (c) {
                        R.geometries[b] = c;
                        n();
                        P -= 1;
                        e.onLoadComplete();
                        v()
                    }
                }

                function p(b) {
                    return function (c) {
                        R.geometries[b] = c
                    }
                }

                function v() {
                    e.callbackProgress({totalModels: W, totalTextures: na, loadedModels: W - P, loadedTextures: na - o}, R);
                    e.onLoadProgress();
                    P == 0 && o == 0 && c(R)
                }

                var t, x, w, z, y, B, D, G, H, E, N, F, I, C, K, U, L, O, S, P, o, W, na, R;
                O = b.data;
                K = new THREE.BinaryLoader;
                S = new THREE.JSONLoader;
                o = P = 0;
                R = {
                    scene: new THREE.Scene,
                    geometries: {},
                    materials: {},
                    textures: {},
                    objects: {},
                    cameras: {},
                    lights: {},
                    fogs: {},
                    triggers: {},
                    empties: {}
                };
                b = !1;
                for (w in O.objects)if (G = O.objects[w], G.meshCollider) {
                    b = !0;
                    break
                }
                if (b)R.scene.collisions = new THREE.CollisionSystem;
                if (O.transform) {
                    b = O.transform.position;
                    E = O.transform.rotation;
                    var ia = O.transform.scale;
                    b && R.scene.position.set(b[0], b[1], b[2]);
                    E && R.scene.rotation.set(E[0],
                        E[1], E[2]);
                    ia && R.scene.scale.set(ia[0], ia[1], ia[2]);
                    (b || E || ia) && R.scene.updateMatrix()
                }
                b = function () {
                    o -= 1;
                    v();
                    e.onLoadComplete()
                };
                for (y in O.cameras) {
                    E = O.cameras[y];
                    if (E.type == "perspective")I = new THREE.Camera(E.fov, E.aspect, E.near, E.far); else if (E.type == "ortho")I = new THREE.Camera, I.projectionMatrix = THREE.Matrix4.makeOrtho(E.left, E.right, E.top, E.bottom, E.near, E.far);
                    H = E.position;
                    E = E.target;
                    I.position.set(H[0], H[1], H[2]);
                    I.target.position.set(E[0], E[1], E[2]);
                    R.cameras[y] = I
                }
                for (z in O.lights)y = O.lights[z],
                    I = y.color !== void 0 ? y.color : 16777215, E = y.intensity !== void 0 ? y.intensity : 1, y.type == "directional" ? (H = y.direction, L = new THREE.DirectionalLight(I, E), L.position.set(H[0], H[1], H[2]), L.position.normalize()) : y.type == "point" ? (H = y.position, d = y.distance, L = new THREE.PointLight(I, E, d), L.position.set(H[0], H[1], H[2])) : y.type == "ambient" && (L = new THREE.AmbientLight(I)), R.scene.addLight(L), R.lights[z] = L;
                for (B in O.fogs)z = O.fogs[B], z.type == "linear" ? C = new THREE.Fog(0, z.near, z.far) : z.type == "exp2" && (C = new THREE.FogExp2(0,
                    z.density)), E = z.color, C.color.setRGB(E[0], E[1], E[2]), R.fogs[B] = C;
                if (R.cameras && O.defaults.camera)R.currentCamera = R.cameras[O.defaults.camera];
                if (R.fogs && O.defaults.fog)R.scene.fog = R.fogs[O.defaults.fog];
                E = O.defaults.bgcolor;
                R.bgColor = new THREE.Color;
                R.bgColor.setRGB(E[0], E[1], E[2]);
                R.bgColorAlpha = O.defaults.bgalpha;
                for (t in O.geometries)if (B = O.geometries[t], B.type == "bin_mesh" || B.type == "ascii_mesh")P += 1, e.onLoadStart();
                W = P;
                for (t in O.geometries)B = O.geometries[t], B.type == "cube" ? (F = new THREE.CubeGeometry(B.width,
                    B.height, B.depth, B.segmentsWidth, B.segmentsHeight, B.segmentsDepth, null, B.flipped, B.sides), R.geometries[t] = F) : B.type == "plane" ? (F = new THREE.PlaneGeometry(B.width, B.height, B.segmentsWidth, B.segmentsHeight), R.geometries[t] = F) : B.type == "sphere" ? (F = new THREE.SphereGeometry(B.radius, B.segmentsWidth, B.segmentsHeight), R.geometries[t] = F) : B.type == "cylinder" ? (F = new THREE.CylinderGeometry(B.numSegs, B.topRad, B.botRad, B.height, B.topOffset, B.botOffset), R.geometries[t] = F) : B.type == "torus" ? (F = new THREE.TorusGeometry(B.radius,
                    B.tube, B.segmentsR, B.segmentsT), R.geometries[t] = F) : B.type == "icosahedron" ? (F = new THREE.IcosahedronGeometry(B.subdivisions), R.geometries[t] = F) : B.type == "bin_mesh" ? K.load({
                    model: f(B.url, O.urlBaseType),
                    callback: u(t)
                }) : B.type == "ascii_mesh" ? S.load({
                    model: f(B.url, O.urlBaseType),
                    callback: u(t)
                }) : B.type == "embedded_mesh" && (B = O.embeds[B.id]) && S.createModel(B, p(t), "");
                for (D in O.textures)if (t = O.textures[D], t.url instanceof Array) {
                    o += t.url.length;
                    for (K = 0; K < t.url.length; K++)e.onLoadStart()
                } else o += 1, e.onLoadStart();
                na = o;
                for (D in O.textures) {
                    t = O.textures[D];
                    if (t.mapping != void 0 && THREE[t.mapping] != void 0)t.mapping = new THREE[t.mapping];
                    if (t.url instanceof Array) {
                        K = [];
                        for (var aa = 0; aa < t.url.length; aa++)K[aa] = f(t.url[aa], O.urlBaseType);
                        K = THREE.ImageUtils.loadTextureCube(K, t.mapping, b)
                    } else {
                        K = THREE.ImageUtils.loadTexture(f(t.url, O.urlBaseType), t.mapping, b);
                        if (THREE[t.minFilter] != void 0)K.minFilter = THREE[t.minFilter];
                        if (THREE[t.magFilter] != void 0)K.magFilter = THREE[t.magFilter];
                        if (t.repeat) {
                            K.repeat.set(t.repeat[0],
                                t.repeat[1]);
                            if (t.repeat[0] != 1)K.wrapS = THREE.RepeatWrapping;
                            if (t.repeat[1] != 1)K.wrapT = THREE.RepeatWrapping
                        }
                        t.offset && K.offset.set(t.offset[0], t.offset[1]);
                        if (t.wrap) {
                            S = {repeat: THREE.RepeatWrapping, mirror: THREE.MirroredRepeatWrapping};
                            if (S[t.wrap[0]] !== void 0)K.wrapS = S[t.wrap[0]];
                            if (S[t.wrap[1]] !== void 0)K.wrapT = S[t.wrap[1]]
                        }
                    }
                    R.textures[D] = K
                }
                for (x in O.materials) {
                    D = O.materials[x];
                    for (N in D.parameters)if (N == "envMap" || N == "map" || N == "lightMap")D.parameters[N] = R.textures[D.parameters[N]]; else if (N == "shading")D.parameters[N] =
                        D.parameters[N] == "flat" ? THREE.FlatShading : THREE.SmoothShading; else if (N == "blending")D.parameters[N] = THREE[D.parameters[N]] ? THREE[D.parameters[N]] : THREE.NormalBlending; else if (N == "combine")D.parameters[N] = D.parameters[N] == "MixOperation" ? THREE.MixOperation : THREE.MultiplyOperation; else if (N == "vertexColors")if (D.parameters[N] == "face")D.parameters[N] = THREE.FaceColors; else if (D.parameters[N])D.parameters[N] = THREE.VertexColors;
                    if (D.parameters.opacity !== void 0 && D.parameters.opacity < 1)D.parameters.transparent = !0;
                    if (D.parameters.normalMap) {
                        t = THREE.ShaderUtils.lib.normal;
                        b = THREE.UniformsUtils.clone(t.uniforms);
                        K = D.parameters.color;
                        S = D.parameters.specular;
                        B = D.parameters.ambient;
                        C = D.parameters.shininess;
                        b.tNormal.texture = R.textures[D.parameters.normalMap];
                        if (D.parameters.normalMapFactor)b.uNormalScale.value = D.parameters.normalMapFactor;
                        if (D.parameters.map)b.tDiffuse.texture = D.parameters.map, b.enableDiffuse.value = !0;
                        if (D.parameters.lightMap)b.tAO.texture = D.parameters.lightMap, b.enableAO.value = !0;
                        if (D.parameters.specularMap)b.tSpecular.texture =
                            R.textures[D.parameters.specularMap], b.enableSpecular.value = !0;
                        b.uDiffuseColor.value.setHex(K);
                        b.uSpecularColor.value.setHex(S);
                        b.uAmbientColor.value.setHex(B);
                        b.uShininess.value = C;
                        if (D.parameters.opacity)b.uOpacity.value = D.parameters.opacity;
                        D = new THREE.MeshShaderMaterial({
                            fragmentShader: t.fragmentShader,
                            vertexShader: t.vertexShader,
                            uniforms: b,
                            lights: !0,
                            fog: !0
                        })
                    } else D = new THREE[D.type](D.parameters);
                    R.materials[x] = D
                }
                n();
                e.callbackSync(R)
            }
        }, constructor: THREE.SceneLoader
    };
    THREE.UTF8Loader = function () {
    };
    THREE.UTF8Loader.prototype = new THREE.UTF8Loader;
    THREE.UTF8Loader.prototype.constructor = THREE.UTF8Loader;
    THREE.UTF8Loader.prototype.load = function (b) {
        var c = new XMLHttpRequest, e = b.model, f = b.callback, h = b.scale !== void 0 ? b.scale : 1, m = b.offsetX !== void 0 ? b.offsetX : 0, k = b.offsetY !== void 0 ? b.offsetY : 0, n = b.offsetZ !== void 0 ? b.offsetZ : 0;
        c.onreadystatechange = function () {
            c.readyState == 4 ? c.status == 200 || c.status == 0 ? THREE.UTF8Loader.prototype.createModel(c.responseText, f, h, m, k, n) : alert("Couldn't load [" + e + "] [" + c.status + "]") : c.readyState != 3 && c.readyState == 2 && c.getResponseHeader("Content-Length")
        };
        c.open("GET", e, !0);
        c.send(null)
    };
    THREE.UTF8Loader.prototype.decompressMesh = function (b) {
        var c = b.charCodeAt(0);
        c >= 57344 && (c -= 2048);
        c++;
        for (var e = new Float32Array(8 * c), f = 1, h = 0; h < 8; h++) {
            for (var m = 0, k = 0; k < c; ++k) {
                var n = b.charCodeAt(k + f);
                m += n >> 1 ^ -(n & 1);
                e[8 * k + h] = m
            }
            f += c
        }
        c = b.length - f;
        m = new Uint16Array(c);
        for (h = k = 0; h < c; h++)n = b.charCodeAt(h + f), m[h] = k - n, n == 0 && k++;
        return [e, m]
    };
    THREE.UTF8Loader.prototype.createModel = function (b, c, e, f, h, m) {
        var k = function () {
            var c = this;
            c.materials = [];
            THREE.Geometry.call(this);
            var k = THREE.UTF8Loader.prototype.decompressMesh(b), p = [], v = [];
            (function (b, k, p) {
                for (var u, v, B, D = b.length; p < D; p += k)u = b[p], v = b[p + 1], B = b[p + 2], u = u / 16383 * e, v = v / 16383 * e, B = B / 16383 * e, u += f, v += h, B += m, c.vertices.push(new THREE.Vertex(new THREE.Vector3(u, v, B)))
            })(k[0], 8, 0);
            (function (b, c, e) {
                for (var f, h, k = b.length; e < k; e += c)f = b[e], h = b[e + 1], f /= 1023, h /= 1023, v.push(f, h)
            })(k[0], 8, 3);
            (function (b,
                       c, e) {
                for (var f, h, k, m = b.length; e < m; e += c)f = b[e], h = b[e + 1], k = b[e + 2], f = (f - 512) / 511, h = (h - 512) / 511, k = (k - 512) / 511, p.push(f, h, k)
            })(k[0], 8, 5);
            (function (b) {
                var e, f, h, k, m, u, G, H, E, N = b.length;
                for (e = 0; e < N; e += 3) {
                    f = b[e];
                    h = b[e + 1];
                    k = b[e + 2];
                    m = c;
                    H = f;
                    E = h;
                    u = k;
                    G = f;
                    var F = h, I = k, C = m.materials[0], K = p[F * 3], U = p[F * 3 + 1], F = p[F * 3 + 2], L = p[I * 3], O = p[I * 3 + 1], I = p[I * 3 + 2];
                    G = new THREE.Vector3(p[G * 3], p[G * 3 + 1], p[G * 3 + 2]);
                    F = new THREE.Vector3(K, U, F);
                    I = new THREE.Vector3(L, O, I);
                    m.faces.push(new THREE.Face3(H, E, u, [G, F, I], null, C));
                    m = v[f * 2];
                    f = v[f * 2 +
                    1];
                    u = v[h * 2];
                    G = v[h * 2 + 1];
                    H = v[k * 2];
                    E = v[k * 2 + 1];
                    k = c.faceVertexUvs[0];
                    h = u;
                    u = G;
                    G = [];
                    G.push(new THREE.UV(m, f));
                    G.push(new THREE.UV(h, u));
                    G.push(new THREE.UV(H, E));
                    k.push(G)
                }
            })(k[1]);
            this.computeCentroids();
            this.computeFaceNormals()
        };
        k.prototype = new THREE.Geometry;
        k.prototype.constructor = k;
        c(new k)
    };
    THREE.MarchingCubes = function (b, c) {
        THREE.Object3D.call(this);
        this.materials = c instanceof Array ? c : [c];
        this.init = function (b) {
            this.isolation = 80;
            this.size = b;
            this.size2 = this.size * this.size;
            this.size3 = this.size2 * this.size;
            this.halfsize = this.size / 2;
            this.delta = 2 / this.size;
            this.yd = this.size;
            this.zd = this.size2;
            this.field = new Float32Array(this.size3);
            this.normal_cache = new Float32Array(this.size3 * 3);
            this.vlist = new Float32Array(36);
            this.nlist = new Float32Array(36);
            this.firstDraw = !0;
            this.maxCount = 4096;
            this.count =
                0;
            this.hasNormal = this.hasPos = !1;
            this.positionArray = new Float32Array(this.maxCount * 3);
            this.normalArray = new Float32Array(this.maxCount * 3)
        };
        this.lerp = function (b, c, h) {
            return b + (c - b) * h
        };
        this.VIntX = function (b, c, h, m, k, n, u, p, v, t) {
            k = (k - v) / (t - v);
            v = this.normal_cache;
            c[m] = n + k * this.delta;
            c[m + 1] = u;
            c[m + 2] = p;
            h[m] = this.lerp(v[b], v[b + 3], k);
            h[m + 1] = this.lerp(v[b + 1], v[b + 4], k);
            h[m + 2] = this.lerp(v[b + 2], v[b + 5], k)
        };
        this.VIntY = function (b, c, h, m, k, n, u, p, v, t) {
            k = (k - v) / (t - v);
            v = this.normal_cache;
            c[m] = n;
            c[m + 1] = u + k * this.delta;
            c[m +
            2] = p;
            c = b + this.yd * 3;
            h[m] = this.lerp(v[b], v[c], k);
            h[m + 1] = this.lerp(v[b + 1], v[c + 1], k);
            h[m + 2] = this.lerp(v[b + 2], v[c + 2], k)
        };
        this.VIntZ = function (b, c, h, m, k, n, u, p, v, t) {
            k = (k - v) / (t - v);
            v = this.normal_cache;
            c[m] = n;
            c[m + 1] = u;
            c[m + 2] = p + k * this.delta;
            c = b + this.zd * 3;
            h[m] = this.lerp(v[b], v[c], k);
            h[m + 1] = this.lerp(v[b + 1], v[c + 1], k);
            h[m + 2] = this.lerp(v[b + 2], v[c + 2], k)
        };
        this.compNorm = function (b) {
            var c = b * 3;
            this.normal_cache[c] == 0 && (this.normal_cache[c] = this.field[b - 1] - this.field[b + 1], this.normal_cache[c + 1] = this.field[b - this.yd] - this.field[b +
            this.yd], this.normal_cache[c + 2] = this.field[b - this.zd] - this.field[b + this.zd])
        };
        this.polygonize = function (b, c, h, m, k, n) {
            var u = m + 1, p = m + this.yd, v = m + this.zd, t = u + this.yd, x = u + this.zd, w = m + this.yd + this.zd, z = u + this.yd + this.zd, y = 0, B = this.field[m], D = this.field[u], G = this.field[p], H = this.field[t], E = this.field[v], N = this.field[x], F = this.field[w], I = this.field[z];
            B < k && (y |= 1);
            D < k && (y |= 2);
            G < k && (y |= 8);
            H < k && (y |= 4);
            E < k && (y |= 16);
            N < k && (y |= 32);
            F < k && (y |= 128);
            I < k && (y |= 64);
            var C = THREE.edgeTable[y];
            if (C == 0)return 0;
            var K = this.delta,
                U = b + K, L = c + K, K = h + K;
            C & 1 && (this.compNorm(m), this.compNorm(u), this.VIntX(m * 3, this.vlist, this.nlist, 0, k, b, c, h, B, D));
            C & 2 && (this.compNorm(u), this.compNorm(t), this.VIntY(u * 3, this.vlist, this.nlist, 3, k, U, c, h, D, H));
            C & 4 && (this.compNorm(p), this.compNorm(t), this.VIntX(p * 3, this.vlist, this.nlist, 6, k, b, L, h, G, H));
            C & 8 && (this.compNorm(m), this.compNorm(p), this.VIntY(m * 3, this.vlist, this.nlist, 9, k, b, c, h, B, G));
            C & 16 && (this.compNorm(v), this.compNorm(x), this.VIntX(v * 3, this.vlist, this.nlist, 12, k, b, c, K, E, N));
            C & 32 && (this.compNorm(x),
                this.compNorm(z), this.VIntY(x * 3, this.vlist, this.nlist, 15, k, U, c, K, N, I));
            C & 64 && (this.compNorm(w), this.compNorm(z), this.VIntX(w * 3, this.vlist, this.nlist, 18, k, b, L, K, F, I));
            C & 128 && (this.compNorm(v), this.compNorm(w), this.VIntY(v * 3, this.vlist, this.nlist, 21, k, b, c, K, E, F));
            C & 256 && (this.compNorm(m), this.compNorm(v), this.VIntZ(m * 3, this.vlist, this.nlist, 24, k, b, c, h, B, E));
            C & 512 && (this.compNorm(u), this.compNorm(x), this.VIntZ(u * 3, this.vlist, this.nlist, 27, k, U, c, h, D, N));
            C & 1024 && (this.compNorm(t), this.compNorm(z), this.VIntZ(t *
            3, this.vlist, this.nlist, 30, k, U, L, h, H, I));
            C & 2048 && (this.compNorm(p), this.compNorm(w), this.VIntZ(p * 3, this.vlist, this.nlist, 33, k, b, L, h, G, F));
            y <<= 4;
            for (k = m = 0; THREE.triTable[y + k] != -1;)b = y + k, c = b + 1, h = b + 2, this.posnormtriv(this.vlist, this.nlist, 3 * THREE.triTable[b], 3 * THREE.triTable[c], 3 * THREE.triTable[h], n), k += 3, m++;
            return m
        };
        this.posnormtriv = function (b, c, h, m, k, n) {
            var u = this.count * 3;
            this.positionArray[u] = b[h];
            this.positionArray[u + 1] = b[h + 1];
            this.positionArray[u + 2] = b[h + 2];
            this.positionArray[u + 3] = b[m];
            this.positionArray[u +
            4] = b[m + 1];
            this.positionArray[u + 5] = b[m + 2];
            this.positionArray[u + 6] = b[k];
            this.positionArray[u + 7] = b[k + 1];
            this.positionArray[u + 8] = b[k + 2];
            this.normalArray[u] = c[h];
            this.normalArray[u + 1] = c[h + 1];
            this.normalArray[u + 2] = c[h + 2];
            this.normalArray[u + 3] = c[m];
            this.normalArray[u + 4] = c[m + 1];
            this.normalArray[u + 5] = c[m + 2];
            this.normalArray[u + 6] = c[k];
            this.normalArray[u + 7] = c[k + 1];
            this.normalArray[u + 8] = c[k + 2];
            this.hasNormal = this.hasPos = !0;
            this.count += 3;
            this.count >= this.maxCount - 3 && n(this)
        };
        this.begin = function () {
            this.count = 0;
            this.hasNormal = this.hasPos = !1
        };
        this.end = function (b) {
            if (this.count != 0) {
                for (var c = this.count * 3; c < this.positionArray.length; c++)this.positionArray[c] = 0;
                b(this)
            }
        };
        this.addBall = function (b, c, h, m, k) {
            var n = this.size * Math.sqrt(m / k), u = h * this.size, p = c * this.size, v = b * this.size, t = Math.floor(u - n);
            t < 1 && (t = 1);
            u = Math.floor(u + n);
            u > this.size - 1 && (u = this.size - 1);
            var x = Math.floor(p - n);
            x < 1 && (x = 1);
            p = Math.floor(p + n);
            p > this.size - 1 && (p = this.size - 1);
            var w = Math.floor(v - n);
            w < 1 && (w = 1);
            n = Math.floor(v + n);
            n > this.size - 1 && (n = this.size -
            1);
            for (var z, y, B, D, G, H; t < u; t++) {
                v = this.size2 * t;
                y = t / this.size - h;
                G = y * y;
                for (y = x; y < p; y++) {
                    B = v + this.size * y;
                    z = y / this.size - c;
                    H = z * z;
                    for (z = w; z < n; z++)D = z / this.size - b, D = m / (1.0E-6 + D * D + H + G) - k, D > 0 && (this.field[B + z] += D)
                }
            }
        };
        this.addPlaneX = function (b, c) {
            var h, m, k, n, u, p = this.size, v = this.yd, t = this.zd, x = this.field, w = p * Math.sqrt(b / c);
            w > p && (w = p);
            for (h = 0; h < w; h++)if (m = h / p, m *= m, n = b / (1.0E-4 + m) - c, n > 0)for (m = 0; m < p; m++) {
                u = h + m * v;
                for (k = 0; k < p; k++)x[t * k + u] += n
            }
        };
        this.addPlaneY = function (b, c) {
            var h, m, k, n, u, p, v = this.size, t = this.yd, x =
                this.zd, w = this.field, z = v * Math.sqrt(b / c);
            z > v && (z = v);
            for (m = 0; m < z; m++)if (h = m / v, h *= h, n = b / (1.0E-4 + h) - c, n > 0) {
                u = m * t;
                for (h = 0; h < v; h++) {
                    p = u + h;
                    for (k = 0; k < v; k++)w[x * k + p] += n
                }
            }
        };
        this.addPlaneZ = function (b, c) {
            var h, m, k, n, u, p;
            size = this.size;
            yd = this.yd;
            zd = this.zd;
            field = this.field;
            dist = size * Math.sqrt(b / c);
            dist > size && (dist = size);
            for (k = 0; k < dist; k++)if (h = k / size, h *= h, n = b / (1.0E-4 + h) - c, n > 0) {
                u = zd * k;
                for (m = 0; m < size; m++) {
                    p = u + m * yd;
                    for (h = 0; h < size; h++)field[p + h] += n
                }
            }
        };
        this.reset = function () {
            var b;
            for (b = 0; b < this.size3; b++)this.normal_cache[b *
            3] = 0, this.field[b] = 0
        };
        this.render = function (b) {
            this.begin();
            var c, h, m, k, n, u, p, v, t, x = this.size - 2;
            for (k = 1; k < x; k++) {
                t = this.size2 * k;
                p = (k - this.halfsize) / this.halfsize;
                for (m = 1; m < x; m++) {
                    v = t + this.size * m;
                    u = (m - this.halfsize) / this.halfsize;
                    for (h = 1; h < x; h++)n = (h - this.halfsize) / this.halfsize, c = v + h, this.polygonize(n, u, p, c, this.isolation, b)
                }
            }
            this.end(b)
        };
        this.generateGeometry = function () {
            var b = 0, c = new THREE.Geometry, h = [];
            this.render(function (m) {
                var k, n, u, p, v, t, x, w;
                for (k = 0; k < m.count; k++)x = k * 3, v = x + 1, w = x + 2, n = m.positionArray[x],
                    u = m.positionArray[v], p = m.positionArray[w], t = new THREE.Vector3(n, u, p), n = m.normalArray[x], u = m.normalArray[v], p = m.normalArray[w], x = new THREE.Vector3(n, u, p), x.normalize(), v = new THREE.Vertex(t), c.vertices.push(v), h.push(x);
                nfaces = m.count / 3;
                for (k = 0; k < nfaces; k++)x = (b + k) * 3, v = x + 1, w = x + 2, t = h[x], n = h[v], u = h[w], x = new THREE.Face3(x, v, w, [t, n, u]), c.faces.push(x);
                b += nfaces;
                m.count = 0
            });
            return c
        };
        this.init(b)
    };
    THREE.MarchingCubes.prototype = new THREE.Object3D;
    THREE.MarchingCubes.prototype.constructor = THREE.MarchingCubes;
    THREE.edgeTable = new Int32Array([0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107,
        1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958, 170,
        419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0]);
    THREE.triTable = new Int32Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, 1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1, 3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1, 3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1, 9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 9, 0, 2, 8, 4, 7,
        -1, -1, -1, -1, -1, -1, -1, 2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1, 8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1, 3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1, 1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1, 4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1, 4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, 8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1, 2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1, 9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1, 10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1, 5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1, 5, 4, 8, 5,
        8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1, 0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1, 1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1, 8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1, 2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, 7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, 9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1, 2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1, 11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1,
        -1, 9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1, 5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1, 11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1, 11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1, 9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1, 5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1, 2, 3, 11, 10, 6,
        5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1, 6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1, 3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1, 6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1, 6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1,
        -1, -1, -1, 1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1, 8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1, 7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1, 3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1, 0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, 9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1, 8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1, 5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1, 0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1, 6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1, 10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1,
        10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1, 8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1, 1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1, 0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, 10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1, 3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1, 6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1, 9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1, 8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1, 3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1,
        6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1, 10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1, 10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1, 1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1, 7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1, 7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1, 1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1, 11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1,
        8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1, 0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1, 7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1, 7,
        2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1, 2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, 1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1, 10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1, 10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1, 0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1, 7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1, 6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1, 9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1, 6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1,
        -1, -1, -1, -1, 1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1, 4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1, 10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1, 8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1, 1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1, 10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1, 4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1, 10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 5, 11, 7, 6,
        -1, -1, -1, -1, -1, -1, -1, 5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1, 9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1, 7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1, 3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1, 7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1, 3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1, 6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1, 9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1, 1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1, 4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10,
        -1, 7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1, 6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1, 0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1, 6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1, 0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1, 11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1, 6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1, 5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1, 9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1, 1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1, 1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1, 10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1, 0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1, 5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1, 10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1, 11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1, 9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1, 7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1, 2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1,
        -1, -1, -1, -1, -1, 8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1, 9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1, 9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1, 1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1, 9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1, 9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, 5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1, 0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1, 10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1, 2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1, 0, 4, 11, 0, 11, 3, 4, 5, 11,
        2, 11, 1, 5, 1, 11, -1, 0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1, 9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1, 5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1, 3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1, 5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1, 1, 10, 11, 1, 11,
        4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1, 3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1, 4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1, 9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1, 11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1, 11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1, 2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1, 9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1, 3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1, 1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1, 4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 8, 7, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1, 3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1, 0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1, 9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1, 1, 10,
        2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
    THREE.Trident = function (b) {
        function c(c) {
            return new THREE.Mesh(new THREE.CylinderGeometry(30, 0.1, b.length / 20, b.length / 5), new THREE.MeshBasicMaterial({color: c}))
        }

        function e(b, c) {
            var e = new THREE.Geometry;
            e.vertices = [new THREE.Vertex, new THREE.Vertex(b)];
            return new THREE.Line(e, new THREE.LineBasicMaterial({color: c}))
        }

        THREE.Object3D.call(this);
        var f = Math.PI / 2, h, b = b || THREE.Trident.defaultParams;
        if (b !== THREE.Trident.defaultParams)for (h in THREE.Trident.defaultParams)b.hasOwnProperty(h) || (b[h] = THREE.Trident.defaultParams[h]);
        this.scale = new THREE.Vector3(b.scale, b.scale, b.scale);
        this.addChild(e(new THREE.Vector3(b.length, 0, 0), b.xAxisColor));
        this.addChild(e(new THREE.Vector3(0, b.length, 0), b.yAxisColor));
        this.addChild(e(new THREE.Vector3(0, 0, b.length), b.zAxisColor));
        if (b.showArrows)h = c(b.xAxisColor), h.rotation.y = -f, h.position.x = b.length, this.addChild(h), h = c(b.yAxisColor), h.rotation.x = f, h.position.y = b.length, this.addChild(h), h = c(b.zAxisColor), h.rotation.y = Math.PI, h.position.z = b.length, this.addChild(h)
    };
    THREE.Trident.prototype = new THREE.Object3D;
    THREE.Trident.prototype.constructor = THREE.Trident;
    THREE.Trident.defaultParams = {
        xAxisColor: 16711680,
        yAxisColor: 65280,
        zAxisColor: 255,
        showArrows: !0,
        length: 100,
        scale: 1
    };
    THREE.PlaneCollider = function (b, c) {
        this.point = b;
        this.normal = c
    };
    THREE.SphereCollider = function (b, c) {
        this.center = b;
        this.radius = c;
        this.radiusSq = c * c
    };
    THREE.BoxCollider = function (b, c) {
        this.min = b;
        this.max = c;
        this.dynamic = !0;
        this.normal = new THREE.Vector3
    };
    THREE.MeshCollider = function (b, c) {
        this.mesh = b;
        this.box = c;
        this.numFaces = this.mesh.geometry.faces.length;
        this.normal = new THREE.Vector3
    };
    THREE.CollisionSystem = function () {
        this.collisionNormal = new THREE.Vector3;
        this.colliders = [];
        this.hits = []
    };
    THREE.Collisions = new THREE.CollisionSystem;
    THREE.CollisionSystem.prototype.merge = function (b) {
        this.colliders = this.colliders.concat(b.colliders);
        this.hits = this.hits.concat(b.hits)
    };
    THREE.CollisionSystem.prototype.rayCastAll = function (b) {
        b.direction.normalize();
        this.hits.length = 0;
        var c, e, f, h, m = 0;
        c = 0;
        for (e = this.colliders.length; c < e; c++)if (h = this.colliders[c], f = this.rayCast(b, h), f < Number.MAX_VALUE)h.distance = f, f > m ? this.hits.push(h) : this.hits.unshift(h), m = f;
        return this.hits
    };
    THREE.CollisionSystem.prototype.rayCastNearest = function (b) {
        var c = this.rayCastAll(b);
        if (c.length == 0)return null;
        for (var e = 0; c[e]instanceof THREE.MeshCollider;) {
            var f = this.rayMesh(b, c[e]);
            if (f.dist < Number.MAX_VALUE) {
                c[e].distance = f.dist;
                c[e].faceIndex = f.faceIndex;
                break
            }
            e++
        }
        if (e > c.length)return null;
        return c[e]
    };
    THREE.CollisionSystem.prototype.rayCast = function (b, c) {
        if (c instanceof THREE.PlaneCollider)return this.rayPlane(b, c); else if (c instanceof THREE.SphereCollider)return this.raySphere(b, c); else if (c instanceof THREE.BoxCollider)return this.rayBox(b, c); else if (c instanceof THREE.MeshCollider && c.box)return this.rayBox(b, c.box)
    };
    THREE.CollisionSystem.prototype.rayMesh = function (b, c) {
        for (var e = this.makeRayLocal(b, c.mesh), f = Number.MAX_VALUE, h, m = 0; m < c.numFaces; m++) {
            var k = c.mesh.geometry.faces[m], n = c.mesh.geometry.vertices[k.a].position, u = c.mesh.geometry.vertices[k.b].position, p = c.mesh.geometry.vertices[k.c].position, v = k instanceof THREE.Face4 ? c.mesh.geometry.vertices[k.d].position : null;
            k instanceof THREE.Face3 ? (k = this.rayTriangle(e, n, u, p, f, this.collisionNormal, c.mesh), k < f && (f = k, h = m, c.normal.copy(this.collisionNormal), c.normal.normalize())) :
            k instanceof THREE.Face4 && (k = this.rayTriangle(e, n, u, v, f, this.collisionNormal, c.mesh), k < f && (f = k, h = m, c.normal.copy(this.collisionNormal), c.normal.normalize()), k = this.rayTriangle(e, u, p, v, f, this.collisionNormal, c.mesh), k < f && (f = k, h = m, c.normal.copy(this.collisionNormal), c.normal.normalize()))
        }
        return {dist: f, faceIndex: h}
    };
    THREE.CollisionSystem.prototype.rayTriangle = function (b, c, e, f, h, m, k) {
        var n = THREE.CollisionSystem.__v1, u = THREE.CollisionSystem.__v2;
        m.set(0, 0, 0);
        n.sub(e, c);
        u.sub(f, e);
        m.cross(n, u);
        n = m.dot(b.direction);
        if (!(n < 0))if (k.doubleSided || k.flipSided)m.multiplyScalar(-1), n *= -1; else return Number.MAX_VALUE;
        k = m.dot(c) - m.dot(b.origin);
        if (!(k <= 0))return Number.MAX_VALUE;
        if (!(k >= n * h))return Number.MAX_VALUE;
        k /= n;
        n = THREE.CollisionSystem.__v3;
        n.copy(b.direction);
        n.multiplyScalar(k);
        n.addSelf(b.origin);
        Math.abs(m.x) >
        Math.abs(m.y) ? Math.abs(m.x) > Math.abs(m.z) ? (b = n.y - c.y, m = e.y - c.y, h = f.y - c.y, n = n.z - c.z, e = e.z - c.z, f = f.z - c.z) : (b = n.x - c.x, m = e.x - c.x, h = f.x - c.x, n = n.y - c.y, e = e.y - c.y, f = f.y - c.y) : Math.abs(m.y) > Math.abs(m.z) ? (b = n.x - c.x, m = e.x - c.x, h = f.x - c.x, n = n.z - c.z, e = e.z - c.z, f = f.z - c.z) : (b = n.x - c.x, m = e.x - c.x, h = f.x - c.x, n = n.y - c.y, e = e.y - c.y, f = f.y - c.y);
        c = m * f - e * h;
        if (c == 0)return Number.MAX_VALUE;
        c = 1 / c;
        f = (b * f - n * h) * c;
        if (!(f >= 0))return Number.MAX_VALUE;
        c *= m * n - e * b;
        if (!(c >= 0))return Number.MAX_VALUE;
        if (!(1 - f - c >= 0))return Number.MAX_VALUE;
        return k
    };
    THREE.CollisionSystem.prototype.makeRayLocal = function (b, c) {
        var e = THREE.CollisionSystem.__m;
        THREE.Matrix4.makeInvert(c.matrixWorld, e);
        var f = THREE.CollisionSystem.__r;
        f.origin.copy(b.origin);
        f.direction.copy(b.direction);
        e.multiplyVector3(f.origin);
        e.rotateAxis(f.direction);
        f.direction.normalize();
        return f
    };
    THREE.CollisionSystem.prototype.rayBox = function (b, c) {
        var e;
        c.dynamic && c.mesh && c.mesh.matrixWorld ? e = this.makeRayLocal(b, c.mesh) : (e = THREE.CollisionSystem.__r, e.origin.copy(b.origin), e.direction.copy(b.direction));
        var f = 0, h = 0, m = 0, k = 0, n = 0, u = 0, p = !0;
        e.origin.x < c.min.x ? (f = c.min.x - e.origin.x, f /= e.direction.x, p = !1, k = -1) : e.origin.x > c.max.x && (f = c.max.x - e.origin.x, f /= e.direction.x, p = !1, k = 1);
        e.origin.y < c.min.y ? (h = c.min.y - e.origin.y, h /= e.direction.y, p = !1, n = -1) : e.origin.y > c.max.y && (h = c.max.y - e.origin.y, h /= e.direction.y,
            p = !1, n = 1);
        e.origin.z < c.min.z ? (m = c.min.z - e.origin.z, m /= e.direction.z, p = !1, u = -1) : e.origin.z > c.max.z && (m = c.max.z - e.origin.z, m /= e.direction.z, p = !1, u = 1);
        if (p)return -1;
        p = 0;
        h > f && (p = 1, f = h);
        m > f && (p = 2, f = m);
        switch (p) {
            case 0:
                n = e.origin.y + e.direction.y * f;
                if (n < c.min.y || n > c.max.y)return Number.MAX_VALUE;
                e = e.origin.z + e.direction.z * f;
                if (e < c.min.z || e > c.max.z)return Number.MAX_VALUE;
                c.normal.set(k, 0, 0);
                break;
            case 1:
                k = e.origin.x + e.direction.x * f;
                if (k < c.min.x || k > c.max.x)return Number.MAX_VALUE;
                e = e.origin.z + e.direction.z *
                f;
                if (e < c.min.z || e > c.max.z)return Number.MAX_VALUE;
                c.normal.set(0, n, 0);
                break;
            case 2:
                k = e.origin.x + e.direction.x * f;
                if (k < c.min.x || k > c.max.x)return Number.MAX_VALUE;
                n = e.origin.y + e.direction.y * f;
                if (n < c.min.y || n > c.max.y)return Number.MAX_VALUE;
                c.normal.set(0, 0, u)
        }
        return f
    };
    THREE.CollisionSystem.prototype.rayPlane = function (b, c) {
        var e = b.direction.dot(c.normal), f = c.point.dot(c.normal);
        if (e < 0)e = (f - b.origin.dot(c.normal)) / e; else return Number.MAX_VALUE;
        return e > 0 ? e : Number.MAX_VALUE
    };
    THREE.CollisionSystem.prototype.raySphere = function (b, c) {
        var e = c.center.clone().subSelf(b.origin);
        if (e.lengthSq < c.radiusSq)return -1;
        var f = e.dot(b.direction.clone());
        if (f <= 0)return Number.MAX_VALUE;
        e = c.radiusSq - (e.lengthSq() - f * f);
        if (e >= 0)return Math.abs(f) - Math.sqrt(e);
        return Number.MAX_VALUE
    };
    THREE.CollisionSystem.__v1 = new THREE.Vector3;
    THREE.CollisionSystem.__v2 = new THREE.Vector3;
    THREE.CollisionSystem.__v3 = new THREE.Vector3;
    THREE.CollisionSystem.__nr = new THREE.Vector3;
    THREE.CollisionSystem.__m = new THREE.Matrix4;
    THREE.CollisionSystem.__r = new THREE.Ray;
    THREE.CollisionUtils = {};
    THREE.CollisionUtils.MeshOBB = function (b) {
        b.geometry.computeBoundingBox();
        var c = b.geometry.boundingBox, e = new THREE.Vector3(c.x[0], c.y[0], c.z[0]), c = new THREE.Vector3(c.x[1], c.y[1], c.z[1]), e = new THREE.BoxCollider(e, c);
        e.mesh = b;
        return e
    };
    THREE.CollisionUtils.MeshAABB = function (b) {
        var c = THREE.CollisionUtils.MeshOBB(b);
        c.min.addSelf(b.position);
        c.max.addSelf(b.position);
        c.dynamic = !1;
        return c
    };
    THREE.CollisionUtils.MeshColliderWBox = function (b) {
        return new THREE.MeshCollider(b, THREE.CollisionUtils.MeshOBB(b))
    };
    if (THREE.WebGLRenderer)THREE.AnaglyphWebGLRenderer = function (b) {
        THREE.WebGLRenderer.call(this, b);
        var c = this, e = this.setSize, f = this.render, h = new THREE.Camera, m = new THREE.Camera, k = new THREE.Matrix4, n = new THREE.Matrix4, u, p, v;
        h.useTarget = m.useTarget = !1;
        h.matrixAutoUpdate = m.matrixAutoUpdate = !1;
        var b = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat
        }, t = new THREE.WebGLRenderTarget(512, 512, b), x = new THREE.WebGLRenderTarget(512, 512, b), w = new THREE.Camera(53, 1, 1, 1E4);
        w.position.z =
            2;
        _material = new THREE.MeshShaderMaterial({
            uniforms: {
                mapLeft: {type: "t", value: 0, texture: t},
                mapRight: {type: "t", value: 1, texture: x}
            },
            vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D mapLeft;\nuniform sampler2D mapRight;\nvarying vec2 vUv;\nvoid main() {\nvec4 colorL, colorR;\nvec2 uv = vUv;\ncolorL = texture2D( mapLeft, uv );\ncolorR = texture2D( mapRight, uv );\ngl_FragColor = vec4( colorL.g * 0.7 + colorL.b * 0.3, colorR.g, colorR.b, colorL.a + colorR.a ) * 1.1;\n}"
        });
        var z = new THREE.Scene;
        z.addObject(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), _material));
        this.setSize = function (b, f) {
            e.call(c, b, f);
            t.width = b;
            t.height = f;
            x.width = b;
            x.height = f
        };
        this.render = function (b, e) {
            e.update(null, !0);
            if (u !== e.aspect || p !== e.near || v !== e.fov) {
                u = e.aspect;
                p = e.near;
                v = e.fov;
                var D = e.projectionMatrix.clone(), G = 125 / 30 * 0.5, H = G * p / 125, E = p * Math.tan(v * Math.PI / 360), N;
                k.n14 = G;
                n.n14 = -G;
                G = -E * u + H;
                N = E * u + H;
                D.n11 = 2 * p / (N - G);
                D.n13 = (N + G) / (N - G);
                h.projectionMatrix = D.clone();
                G = -E * u - H;
                N = E * u - H;
                D.n11 = 2 * p / (N - G);
                D.n13 = (N + G) / (N - G);
                m.projectionMatrix = D.clone()
            }
            h.matrix = e.matrixWorld.clone().multiplySelf(n);
            h.update(null, !0);
            h.position.copy(e.position);
            h.near = p;
            h.far = e.far;
            f.call(c, b, h, t, !0);
            m.matrix = e.matrixWorld.clone().multiplySelf(k);
            m.update(null, !0);
            m.position.copy(e.position);
            m.near = p;
            m.far = e.far;
            f.call(c, b, m, x, !0);
            f.call(c, z, w)
        }
    };
    if (THREE.WebGLRenderer)THREE.CrosseyedWebGLRenderer = function (b) {
        THREE.WebGLRenderer.call(this, b);
        this.autoClear = !1;
        var c = this, e = this.setSize, f = this.render, h, m, k = new THREE.Camera, n = new THREE.Camera;
        c.separation = 10;
        if (b && b.separation !== void 0)c.separation = b.separation;
        (new THREE.Camera(53, window.innerWidth / 2 / window.innerHeight, 1, 1E4)).position.z = -10;
        this.setSize = function (b, f) {
            e.call(c, b, f);
            h = b / 2;
            m = f
        };
        this.render = function (b, e) {
            this.clear();
            k.fov = e.fov;
            k.aspect = 0.5 * e.aspect;
            k.near = e.near;
            k.far = e.far;
            k.updateProjectionMatrix();
            k.position.copy(e.position);
            k.target.position.copy(e.target.position);
            k.translateX(c.separation);
            n.projectionMatrix = k.projectionMatrix;
            n.position.copy(e.position);
            n.target.position.copy(e.target.position);
            n.translateX(-c.separation);
            this.setViewport(0, 0, h, m);
            f.call(c, b, k);
            this.setViewport(h, 0, h, m);
            f.call(c, b, n, !1)
        }
    };

    THREE.RenderPass = function ( scene, camera, overrideMaterial ) {

        this.scene = scene;
        this.camera = camera;
        this.overrideMaterial = overrideMaterial;

        this.clear = true;
        this.needsSwap = false;

    };

    THREE.RenderPass.prototype = {

        render: function ( renderer, writeBuffer, readBuffer, delta ) {

            this.scene.overrideMaterial = this.overrideMaterial;

            renderer.render( this.scene, this.camera, readBuffer, this.clear );

            this.scene.overrideMaterial = null;

        }

    };

    /**
     * @author alteredq / http://alteredqualia.com/
     */

    THREE.BloomPass = function (strength, kernelSize, sigma, resolution) {

        strength = ( strength !== undefined ) ? strength : 1;
        kernelSize = ( kernelSize !== undefined ) ? kernelSize : 25;
        sigma = ( sigma !== undefined ) ? sigma : 4.0;
        resolution = ( resolution !== undefined ) ? resolution : 256;

        // render targets

        var pars = {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat};

        this.renderTargetX = new THREE.WebGLRenderTarget(resolution, resolution, pars);
        this.renderTargetY = new THREE.WebGLRenderTarget(resolution, resolution, pars);

        // screen material

        var screenShader = THREE.ShaderExtras["screen"];

        this.screenUniforms = THREE.UniformsUtils.clone(screenShader.uniforms);

        this.screenUniforms["opacity"].value = strength;

        this.materialScreen = new THREE.MeshShaderMaterial({

            uniforms: this.screenUniforms,
            vertexShader: screenShader.vertexShader,
            fragmentShader: screenShader.fragmentShader,
            blending: THREE.AdditiveBlending,
            transparent: true

        });

        // convolution material

        var convolutionShader = THREE.ShaderExtras["convolution"];

        this.convolutionUniforms = THREE.UniformsUtils.clone(convolutionShader.uniforms);

        this.convolutionUniforms["uImageIncrement"].value = THREE.BloomPass.blurx;
        this.convolutionUniforms["cKernel"].value = THREE.ShaderExtras.buildKernel(sigma);

        this.materialConvolution = new THREE.MeshShaderMaterial({

            uniforms: this.convolutionUniforms,
            vertexShader: "#define KERNEL_SIZE " + kernelSize + ".0\n" + convolutionShader.vertexShader,
            fragmentShader: "#define KERNEL_SIZE " + kernelSize + "\n" + convolutionShader.fragmentShader

        });

        this.needsSwap = false;

    };

    THREE.BloomPass.prototype = {

        render: function (renderer, writeBuffer, readBuffer, delta, maskActive) {

            if (maskActive) renderer.context.disable(renderer.context.STENCIL_TEST);

            // Render quad with blured scene into texture (convolution pass 1)

            THREE.EffectComposer.quad.materials[0] = this.materialConvolution;

            this.convolutionUniforms["tDiffuse"].texture = readBuffer;
            this.convolutionUniforms["uImageIncrement"].value = THREE.BloomPass.blurX;

            renderer.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera, this.renderTargetX, true);

            // Render quad with blured scene into texture (convolution pass 2)

            this.convolutionUniforms["tDiffuse"].texture = this.renderTargetX;
            this.convolutionUniforms["uImageIncrement"].value = THREE.BloomPass.blurY;

            renderer.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera, this.renderTargetY, true);

            // Render original scene with superimposed blur to texture

            THREE.EffectComposer.quad.materials[0] = this.materialScreen;

            this.screenUniforms["tDiffuse"].texture = this.renderTargetY;

            if (maskActive) renderer.context.enable(renderer.context.STENCIL_TEST);

            renderer.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera, readBuffer, false);

        }

    };

    THREE.BloomPass.blurX = new THREE.Vector2(0.001953125, 0.0);
    THREE.BloomPass.blurY = new THREE.Vector2(0.0, 0.001953125);


    /**
     * @author alteredq / http://alteredqualia.com/
     */

    THREE.EffectComposer = function( renderer, renderTarget ) {

        this.renderer = renderer;

        this.renderTarget1 = renderTarget;

        if ( this.renderTarget1 === undefined ) {

            this.renderTargetParameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBufer: false };
            this.renderTarget1 = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, this.renderTargetParameters );

        }

        this.renderTarget2 = this.renderTarget1.clone();

        this.writeBuffer = this.renderTarget1;
        this.readBuffer = this.renderTarget2;

        this.passes = [];

        this.copyPass = new THREE.ShaderPass( THREE.ShaderExtras[ "screen" ] );

    };

    THREE.EffectComposer.prototype = {

        swapBuffers: function() {

            var tmp = this.readBuffer;
            this.readBuffer = this.writeBuffer;
            this.writeBuffer = tmp;

        },

        addPass: function ( pass ) {

            this.passes.push( pass );

        },

        render: function ( delta ) {

            this.writeBuffer = this.renderTarget1;
            this.readBuffer = this.renderTarget2;

            var maskActive = false;

            var i, il = this.passes.length;

            for ( i = 0; i < il; i ++ ) {

                this.passes[ i ].render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

                if ( this.passes[ i ].needsSwap ) {

                    if ( maskActive ) {

                        var context = this.renderer.context;

                        context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

                        this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

                        context.stencilFunc( context.EQUAL, 1, 0xffffffff );

                    }

                    this.swapBuffers();

                }

                if ( this.passes[ i ] instanceof THREE.MaskPass ) {

                    maskActive = true;

                }

                if ( this.passes[ i ] instanceof THREE.ClearMaskPass ) {

                    maskActive = false;

                }

            }

        },

        reset: function ( renderTarget ) {

            this.renderTarget1 = renderTarget;

            if ( this.renderTarget1 === undefined ) {

                this.renderTarget1 = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, this.renderTargetParameters );

            }

            this.renderTarget2 = this.renderTarget1.clone();

            this.writeBuffer = this.renderTarget1;
            this.readBuffer = this.renderTarget2;

            THREE.EffectComposer.quad.scale.set( window.innerWidth, window.innerHeight, 1 );

            THREE.EffectComposer.camera.left = window.innerWidth / - 2;
            THREE.EffectComposer.camera.right = window.innerWidth / 2;
            THREE.EffectComposer.camera.top = window.innerHeight / 2;
            THREE.EffectComposer.camera.bottom = window.innerHeight / - 2;

            THREE.EffectComposer.camera.updateProjectionMatrix();

        }

    };

    // shared fullscreen quad scene

    THREE.EffectComposer.geometry = new THREE.PlaneGeometry( 1, 1 );

    THREE.EffectComposer.quad = new THREE.Mesh( THREE.EffectComposer.geometry, null );
    THREE.EffectComposer.quad.position.z = -100	;
    THREE.EffectComposer.quad.scale.set( window.innerWidth, window.innerHeight, 1 );

    THREE.EffectComposer.scene = new THREE.Scene();
    THREE.EffectComposer.scene.addObject( THREE.EffectComposer.quad );

    // shared ortho camera

    THREE.EffectComposer.camera = new THREE.OrthoCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, -10000, 10000 );

    /**
     * @author alteredq / http://alteredqualia.com/
     */

    THREE.ShaderPass = function( shader, textureID ) {

        this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

        this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

        this.material = new THREE.MeshShaderMaterial( {

            uniforms: this.uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader

        } );

        this.renderToScreen = false;
        this.needsSwap = true;

    };

    THREE.ShaderPass.prototype = {

        render: function ( renderer, writeBuffer, readBuffer, delta ) {

            this.uniforms[ this.textureID ].texture = readBuffer;

            THREE.EffectComposer.quad.materials[ 0 ] = this.material;

            if ( this.renderToScreen ) {

                renderer.render( THREE.EffectComposer.scene, THREE.EffectComposer.camera );

            } else {

                renderer.render( THREE.EffectComposer.scene, THREE.EffectComposer.camera, writeBuffer, false );

            }

        }

    };


    THREE.ShaderExtras = {

        /* -------------------------------------------------------------------------
         //	Full-screen textured quad shader
         ------------------------------------------------------------------------- */

        'screen': {

            uniforms: {

                tDiffuse: { type: "t", value: 0, texture: null },
                opacity:  { type: "f", value: 1.0 }

            },

            vertexShader: [

                "varying vec2 vUv;",

                "void main() {",

                "vUv = vec2( uv.x, 1.0 - uv.y );",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

            ].join("\n"),

            fragmentShader: [

                "uniform float opacity;",

                "uniform sampler2D tDiffuse;",

                "varying vec2 vUv;",

                "void main() {",

                "vec4 texel = texture2D( tDiffuse, vUv );",
                "gl_FragColor = opacity * texel;",

                "}"

            ].join("\n")

        },

        /* ------------------------------------------------------------------------
         //	Convolution shader
         //	  - ported from o3d sample to WebGL / GLSL
         //			http://o3d.googlecode.com/svn/trunk/samples/convolution.html
         ------------------------------------------------------------------------ */

        'convolution': {

            uniforms: {

                "tDiffuse" : 		{ type: "t", value: 0, texture: null },
                "uImageIncrement" : { type: "v2", value: new THREE.Vector2( 0.001953125, 0.0 ) },
                "cKernel" : 		{ type: "fv1", value: [] }

            },

            vertexShader: [

                //"#define KERNEL_SIZE 25.0",

                "uniform vec2 uImageIncrement;",

                "varying vec2 vUv;",

                "void main() {",

                "vUv = uv - ( ( KERNEL_SIZE - 1.0 ) / 2.0 ) * uImageIncrement;",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

            ].join("\n"),

            fragmentShader: [

                //"#define KERNEL_SIZE 25",
                "uniform float cKernel[ KERNEL_SIZE ];",

                "uniform sampler2D tDiffuse;",
                "uniform vec2 uImageIncrement;",

                "varying vec2 vUv;",

                "void main() {",

                "vec2 imageCoord = vUv;",
                "vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );",

                "for( int i = 0; i < KERNEL_SIZE; i ++ ) {",

                "sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];",
                "imageCoord += uImageIncrement;",

                "}",

                "gl_FragColor = sum;",

                "}"


            ].join("\n")

        },

        /* -------------------------------------------------------------------------

         // Film grain & scanlines shader

         //	- ported from HLSL to WebGL / GLSL
         //	  http://www.truevision3d.com/forums/showcase/staticnoise_colorblackwhite_scanline_shaders-t18698.0.html

         // Screen Space Static Postprocessor
         //
         // Produces an analogue noise overlay similar to a film grain / TV static
         //
         // Original implementation and noise algorithm
         // Pat 'Hawthorne' Shearon
         //
         // Optimized scanlines + noise version with intensity scaling
         // Georg 'Leviathan' Steinrohder

         // This version is provided under a Creative Commons Attribution 3.0 License
         // http://creativecommons.org/licenses/by/3.0/
         ------------------------------------------------------------------------- */

        'film': {

            uniforms: {

                tDiffuse:   { type: "t", value: 0, texture: null },
                time: 	    { type: "f", value: 0.0 },
                nIntensity: { type: "f", value: 0.5 },
                sIntensity: { type: "f", value: 0.05 },
                sCount: 	{ type: "f", value: 4096 },
                grayscale:  { type: "i", value: 1 }

            },

            vertexShader: [

                "varying vec2 vUv;",

                "void main() {",

                "vUv = vec2( uv.x, 1.0 - uv.y );",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

            ].join("\n"),

            fragmentShader: [

                // control parameter
                "uniform float time;",

                "uniform bool grayscale;",

                // noise effect intensity value (0 = no effect, 1 = full effect)
                "uniform float nIntensity;",

                // scanlines effect intensity value (0 = no effect, 1 = full effect)
                "uniform float sIntensity;",

                // scanlines effect count value (0 = no effect, 4096 = full effect)
                "uniform float sCount;",

                "uniform sampler2D tDiffuse;",

                "varying vec2 vUv;",

                "void main() {",

                // sample the source
                "vec4 cTextureScreen = texture2D( tDiffuse, vUv );",

                // make some noise
                "float x = vUv.x * vUv.y * time *  1000.0;",
                "x = mod( x, 13.0 ) * mod( x, 123.0 );",
                "float dx = mod( x, 0.01 );",

                // add noise
                "vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );",

                // get us a sine and cosine
                "vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );",

                // add scanlines
                "cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;",

                // interpolate between source and result by intensity
                "cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );",

                // convert to grayscale if desired
                "if( grayscale ) {",

                "cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );",

                "}",

                "gl_FragColor =  vec4( cResult, cTextureScreen.a );",

                "}"

            ].join("\n")

        },


        /* -------------------------------------------------------------------------
         //	Depth-of-field shader with bokeh
         //	ported from GLSL shader by Martins Upitis
         //	http://artmartinsh.blogspot.com/2010/02/glsl-lens-blur-filter-with-bokeh.html
         ------------------------------------------------------------------------- */

        'bokeh'	: {

            uniforms: { tColor:   { type: "t", value: 0, texture: null },
                tDepth:   { type: "t", value: 1, texture: null },
                focus:    { type: "f", value: 1.0 },
                aspect:   { type: "f", value: 1.0 },
                aperture: { type: "f", value: 0.025 },
                maxblur:  { type: "f", value: 1.0 },
            },

            vertexShader: [

                "varying vec2 vUv;",

                "void main() {",

                "vUv = vec2( uv.x, 1.0 - uv.y );",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

            ].join("\n"),

            fragmentShader: [

                "varying vec2 vUv;",

                "uniform sampler2D tColor;",
                "uniform sampler2D tDepth;",

                "uniform float maxblur;",  	// max blur amount
                "uniform float aperture;",	// aperture - bigger values for shallower depth of field

                "uniform float focus;",
                "uniform float aspect;",

                "void main() {",

                "vec2 aspectcorrect = vec2( 1.0, aspect );",

                "vec4 depth1 = texture2D( tDepth, vUv );",

                "float factor = depth1.x - focus;",

                "vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );",

                "vec2 dofblur9 = dofblur * 0.9;",
                "vec2 dofblur7 = dofblur * 0.7;",
                "vec2 dofblur4 = dofblur * 0.4;",

                "vec4 col = vec4( 0.0 );",

                "col += texture2D( tColor, vUv.xy );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );",

                "col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );",

                "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );",

                "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );",
                "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );",
                "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );",

                "gl_FragColor = col / 41.0;",
                "gl_FragColor.a = 1.0;",

                "}"

            ].join("\n")

        },

        /* -------------------------------------------------------------------------
         //	Depth-of-field shader using mipmaps
         //	- from Matt Handley @applmak
         //	- requires power-of-2 sized render target with enabled mipmaps
         ------------------------------------------------------------------------- */

        'dofmipmap': {

            uniforms: {

                tColor:   { type: "t", value: 0, texture: null },
                tDepth:   { type: "t", value: 1, texture: null },
                focus:    { type: "f", value: 1.0 },
                maxblur:  { type: "f", value: 1.0 }

            },

            vertexShader: [

                "varying vec2 vUv;",

                "void main() {",

                "vUv = vec2( uv.x, 1.0 - uv.y );",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

            ].join("\n"),

            fragmentShader: [

                "uniform float focus;",
                "uniform float maxblur;",

                "uniform sampler2D tColor;",
                "uniform sampler2D tDepth;",

                "varying vec2 vUv;",

                "void main() {",

                "vec4 depth = texture2D( tDepth, vUv );",

                "float factor = depth.x - focus;",

                "vec4 col = texture2D( tColor, vUv, 2.0 * maxblur * abs( focus - depth.x ) );",

                "gl_FragColor = col;",
                "gl_FragColor.a = 1.0;",

                "}"

            ].join("\n")

        },

        /* -------------------------------------------------------------------------
         //	Sepia tone shader
         //  - based on glfx.js sepia shader
         //		https://github.com/evanw/glfx.js
         ------------------------------------------------------------------------- */

        'sepia': {

            uniforms: {

                tDiffuse: { type: "t", value: 0, texture: null },
                amount:   { type: "f", value: 1.0 }

            },

            vertexShader: [

                "varying vec2 vUv;",

                "void main() {",

                "vUv = vec2( uv.x, 1.0 - uv.y );",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

            ].join("\n"),

            fragmentShader: [

                "uniform float amount;",

                "uniform sampler2D tDiffuse;",

                "varying vec2 vUv;",

                "void main() {",

                "vec4 color = texture2D( tDiffuse, vUv );",
                "vec3 c = color.rgb;",

                "color.r = dot( c, vec3( 1.0 - 0.607 * amount, 0.769 * amount, 0.189 * amount ) );",
                "color.g = dot( c, vec3( 0.349 * amount, 1.0 - 0.314 * amount, 0.168 * amount ) );",
                "color.b = dot( c, vec3( 0.272 * amount, 0.534 * amount, 1.0 - 0.869 * amount ) );",

                "gl_FragColor = vec4( min( vec3( 1.0 ), color.rgb ), color.a );",

                "}"

            ].join("\n")

        },

        /* -------------------------------------------------------------------------
         //	Dot screen shader
         //  - based on glfx.js sepia shader
         //		https://github.com/evanw/glfx.js
         ------------------------------------------------------------------------- */

        'dotscreen': {

            uniforms: {

                tDiffuse: { type: "t", value: 0, texture: null },
                tSize:    { type: "v2", value: new THREE.Vector2( 256, 256 ) },
                center:   { type: "v2", value: new THREE.Vector2( 0.5, 0.5 ) },
                angle:	  { type: "f", value: 1.57 },
                scale:	  { type: "f", value: 1.0 }

            },

            vertexShader: [

                "varying vec2 vUv;",

                "void main() {",

                "vUv = vec2( uv.x, 1.0 - uv.y );",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

            ].join("\n"),

            fragmentShader: [

                "uniform vec2 center;",
                "uniform float angle;",
                "uniform float scale;",
                "uniform vec2 tSize;",

                "uniform sampler2D tDiffuse;",

                "varying vec2 vUv;",

                "float pattern() {",

                "float s = sin( angle ), c = cos( angle );",

                "vec2 tex = vUv * tSize - center;",
                "vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;",

                "return ( sin( point.x ) * sin( point.y ) ) * 4.0;",

                "}",

                "void main() {",

                "vec4 color = texture2D( tDiffuse, vUv );",

                "float average = ( color.r + color.g + color.b ) / 3.0;",

                "gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );",

                "}"

            ].join("\n")

        },

        /* ------------------------------------------------------------------------------------------------
         //	Vignette shader
         //	- based on PaintEffect postprocess from ro.me
         //		http://code.google.com/p/3-dreams-of-black/source/browse/deploy/js/effects/PaintEffect.js
         ------------------------------------------------------------------------------------------------ */

        'vignette': {

            uniforms: {

                tDiffuse: { type: "t", value: 0, texture: null },
                offset:   { type: "f", value: 1.0 },
                darkness: { type: "f", value: 1.0 }

            },

            vertexShader: [

                "varying vec2 vUv;",

                "void main() {",

                "vUv = vec2( uv.x, 1.0 - uv.y );",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

            ].join("\n"),

            fragmentShader: [

                "uniform float offset;",
                "uniform float darkness;",

                "uniform sampler2D tDiffuse;",

                "varying vec2 vUv;",

                "void main() {",

                // Eskil's vignette

                "vec4 texel = texture2D( tDiffuse, vUv );",
                "vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );",
                "gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );",

                /*
                 // alternative version from glfx.js
                 // this one makes more "dusty" look (as opposed to "burned")

                 "vec4 color = texture2D( tDiffuse, vUv );",
                 "float dist = distance( vUv, vec2( 0.5 ) );",
                 "color.rgb *= smoothstep( 0.8, offset * 0.799, dist *( darkness + offset ) );",
                 "gl_FragColor = color;",
                 */

                "}"

            ].join("\n")

        },

        /* -------------------------------------------------------------------------
         //	Bleach bypass shader [http://en.wikipedia.org/wiki/Bleach_bypass]
         //	- based on Nvidia example
         //		http://developer.download.nvidia.com/shaderlibrary/webpages/shader_library.html#post_bleach_bypass
         ------------------------------------------------------------------------- */

        'bleachbypass': {

            uniforms: {

                tDiffuse: { type: "t", value: 0, texture: null },
                opacity:  { type: "f", value: 1.0 }

            },

            vertexShader: [

                "varying vec2 vUv;",

                "void main() {",

                "vUv = vec2( uv.x, 1.0 - uv.y );",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

            ].join("\n"),

            fragmentShader: [

                "uniform float opacity;",

                "uniform sampler2D tDiffuse;",

                "varying vec2 vUv;",

                "void main() {",

                "vec4 base = texture2D( tDiffuse, vUv );",

                "vec3 lumCoeff = vec3( 0.25, 0.65, 0.1 );",
                "float lum = dot( lumCoeff, base.rgb );",
                "vec3 blend = vec3( lum );",

                "float L = min( 1.0, max( 0.0, 10.0 * ( lum - 0.45 ) ) );",

                "vec3 result1 = 2.0 * base.rgb * blend;",
                "vec3 result2 = 1.0 - 2.0 * ( 1.0 - blend ) * ( 1.0 - base.rgb );",

                "vec3 newColor = mix( result1, result2, L );",

                "float A2 = opacity * base.a;",
                "vec3 mixRGB = A2 * newColor.rgb;",
                "mixRGB += ( ( 1.0 - A2 ) * base.rgb );",

                "gl_FragColor = vec4( mixRGB, base.a );",

                "}"

            ].join("\n")

        },

        /* --------------------------------------------------------------------------------------------------
         //	Focus shader
         //	- based on PaintEffect postprocess from ro.me
         //		http://code.google.com/p/3-dreams-of-black/source/browse/deploy/js/effects/PaintEffect.js
         -------------------------------------------------------------------------------------------------- */

        'focus': {

            uniforms : {

                "tDiffuse": 		{ type: "t", value: 0, texture: null },
                "screenWidth": 		{ type: "f", value: 1024 },
                "screenHeight": 	{ type: "f", value: 1024 },
                "sampleDistance": 	{ type: "f", value: 0.94 },
                "waveFactor": 		{ type: "f", value: 0.00125 }

            },

            vertexShader: [

                "varying vec2 vUv;",

                "void main() {",

                "vUv = vec2( uv.x, 1.0 - uv.y );",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

            ].join("\n"),

            fragmentShader: [

                "uniform float screenWidth;",
                "uniform float screenHeight;",
                "uniform float sampleDistance;",
                "uniform float waveFactor;",

                "uniform sampler2D tDiffuse;",

                "varying vec2 vUv;",

                "void main() {",

                "vec4 color, org, tmp, add;",
                "float sample_dist, f;",
                "vec2 vin;",
                "vec2 uv = vUv;",

                "add += color = org = texture2D( tDiffuse, uv );",

                "vin = ( uv - vec2( 0.5 ) ) * vec2( 1.4 );",
                "sample_dist = dot( vin, vin ) * 2.0;",

                "f = ( waveFactor * 100.0 + sample_dist ) * sampleDistance * 4.0;",

                "vec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2( f );",

                "add += tmp = texture2D( tDiffuse, uv + vec2( 0.111964, 0.993712 ) * sampleSize );",
                "if( tmp.b < color.b ) color = tmp;",

                "add += tmp = texture2D( tDiffuse, uv + vec2( 0.846724, 0.532032 ) * sampleSize );",
                "if( tmp.b < color.b ) color = tmp;",

                "add += tmp = texture2D( tDiffuse, uv + vec2( 0.943883, -0.330279 ) * sampleSize );",
                "if( tmp.b < color.b ) color = tmp;",

                "add += tmp = texture2D( tDiffuse, uv + vec2( 0.330279, -0.943883 ) * sampleSize );",
                "if( tmp.b < color.b ) color = tmp;",

                "add += tmp = texture2D( tDiffuse, uv + vec2( -0.532032, -0.846724 ) * sampleSize );",
                "if( tmp.b < color.b ) color = tmp;",

                "add += tmp = texture2D( tDiffuse, uv + vec2( -0.993712, -0.111964 ) * sampleSize );",
                "if( tmp.b < color.b ) color = tmp;",

                "add += tmp = texture2D( tDiffuse, uv + vec2( -0.707107, 0.707107 ) * sampleSize );",
                "if( tmp.b < color.b ) color = tmp;",

                "color = color * vec4( 2.0 ) - ( add / vec4( 8.0 ) );",
                "color = color + ( add / vec4( 8.0 ) - color ) * ( vec4( 1.0 ) - vec4( sample_dist * 0.5 ) );",

                "gl_FragColor = vec4( color.rgb * color.rgb * vec3( 0.95 ) + color.rgb, 1.0 );",

                "}"


            ].join("\n")
        },

        /* -------------------------------------------------------------------------
         //	Simple test shader
         ------------------------------------------------------------------------- */

        'basic': {

            uniforms: {},

            vertexShader: [

                "void main() {",

                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

            ].join("\n"),

            fragmentShader: [

                "void main() {",

                "gl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );",

                "}"

            ].join("\n")

        },

        // METHODS

        buildKernel: function( sigma ) {

            // We lop off the sqrt(2 * pi) * sigma term, since we're going to normalize anyway.

            function gauss( x, sigma ) {

                return Math.exp( - ( x * x ) / ( 2.0 * sigma * sigma ) );

            }

            var i, values, sum, halfWidth, kMaxKernelSize = 25, kernelSize = 2 * Math.ceil( sigma * 3.0 ) + 1;

            if ( kernelSize > kMaxKernelSize ) kernelSize = kMaxKernelSize;
            halfWidth = ( kernelSize - 1 ) * 0.5

            values = new Array( kernelSize );
            sum = 0.0;
            for ( i = 0; i < kernelSize; ++i ) {

                values[ i ] = gauss( i - halfWidth, sigma );
                sum += values[ i ];

            }

            // normalize the kernel

            for ( i = 0; i < kernelSize; ++i ) values[ i ] /= sum;

            return values;

        }

    };

    /**
     * @author alteredq / http://alteredqualia.com/
     */

    THREE.MaskPass = function ( scene, camera ) {

        this.scene = scene;
        this.camera = camera;

        this.clear = true;
        this.needsSwap = false;

    };

    THREE.MaskPass.prototype = {

        render: function ( renderer, writeBuffer, readBuffer, delta ) {

            var context = renderer.context;

            // don't update color or depth

            context.colorMask( false, false, false, false );
            context.depthMask( false );

            // set up stencil

            context.enable( context.STENCIL_TEST );
            context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
            context.stencilFunc( context.ALWAYS, 1, 0xffffffff );

            // draw into the stencil buffer

            renderer.render( this.scene, this.camera, readBuffer, this.clear );
            renderer.render( this.scene, this.camera, writeBuffer, this.clear );

            // re-enable update of color and depth

            context.colorMask( true, true, true, true );
            context.depthMask( true );

            // only render where stencil is set to 1

            context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
            context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

        }

    };


    THREE.ClearMaskPass = function () {

    };

    THREE.ClearMaskPass.prototype = {

        render: function ( renderer, writeBuffer, readBuffer, delta ) {

            var context = renderer.context;

            context.disable( context.STENCIL_TEST );

        }

    };


    var Stats = function () {
        function s(a, g, d) {
            var f, c, e;
            for (c = 0; c < 30; c++)for (f = 0; f < 73; f++)e = (f + c * 74) * 4, a[e] = a[e + 4], a[e + 1] = a[e + 5], a[e + 2] = a[e + 6];
            for (c = 0; c < 30; c++)e = (73 + c * 74) * 4, c < g ? (a[e] = b[d].bg.r, a[e + 1] = b[d].bg.g, a[e + 2] = b[d].bg.b) : (a[e] = b[d].fg.r, a[e + 1] = b[d].fg.g, a[e + 2] = b[d].fg.b)
        }

        var r = 0, t = 2, g, u = 0, j = (new Date).getTime(), F = j, v = j, l = 0, w = 1E3, x = 0, k, d, a, m, y, n = 0, z = 1E3, A = 0, f, c, o, B, p = 0, C = 1E3, D = 0, h, i, q, E, b = {
            fps: {bg: {r: 16, g: 16, b: 48}, fg: {r: 0, g: 255, b: 255}},
            ms: {bg: {r: 16, g: 48, b: 16}, fg: {r: 0, g: 255, b: 0}},
            mb: {
                bg: {
                    r: 48, g: 16,
                    b: 26
                }, fg: {r: 255, g: 0, b: 128}
            }
        };
        g = document.createElement("div");
        g.style.cursor = "pointer";
        g.style.width = "80px";
        g.style.opacity = "0.9";
        g.style.zIndex = "10001";
        g.addEventListener("click", function () {
            r++;
            r == t && (r = 0);
            k.style.display = "none";
            f.style.display = "none";
            h.style.display = "none";
            switch (r) {
                case 0:
                    k.style.display = "block";
                    break;
                case 1:
                    f.style.display = "block";
                    break;
                case 2:
                    h.style.display = "block"
            }
        }, !1);
        k = document.createElement("div");
        k.style.backgroundColor = "rgb(" + Math.floor(b.fps.bg.r / 2) + "," + Math.floor(b.fps.bg.g /
        2) + "," + Math.floor(b.fps.bg.b / 2) + ")";
        k.style.padding = "2px 0px 3px 0px";
        g.appendChild(k);
        d = document.createElement("div");
        d.style.fontFamily = "Helvetica, Arial, sans-serif";
        d.style.textAlign = "left";
        d.style.fontSize = "9px";
        d.style.color = "rgb(" + b.fps.fg.r + "," + b.fps.fg.g + "," + b.fps.fg.b + ")";
        d.style.margin = "0px 0px 1px 3px";
        d.innerHTML = '<span style="font-weight:bold">FPS</span>';
        k.appendChild(d);
        a = document.createElement("canvas");
        a.width = 74;
        a.height = 30;
        a.style.display = "block";
        a.style.marginLeft = "3px";
        k.appendChild(a);
        m = a.getContext("2d");
        m.fillStyle = "rgb(" + b.fps.bg.r + "," + b.fps.bg.g + "," + b.fps.bg.b + ")";
        m.fillRect(0, 0, a.width, a.height);
        y = m.getImageData(0, 0, a.width, a.height);
        f = document.createElement("div");
        f.style.backgroundColor = "rgb(" + Math.floor(b.ms.bg.r / 2) + "," + Math.floor(b.ms.bg.g / 2) + "," + Math.floor(b.ms.bg.b / 2) + ")";
        f.style.padding = "2px 0px 3px 0px";
        f.style.display = "none";
        g.appendChild(f);
        c = document.createElement("div");
        c.style.fontFamily = "Helvetica, Arial, sans-serif";
        c.style.textAlign = "left";
        c.style.fontSize =
            "9px";
        c.style.color = "rgb(" + b.ms.fg.r + "," + b.ms.fg.g + "," + b.ms.fg.b + ")";
        c.style.margin = "0px 0px 1px 3px";
        c.innerHTML = '<span style="font-weight:bold">MS</span>';
        f.appendChild(c);
        a = document.createElement("canvas");
        a.width = 74;
        a.height = 30;
        a.style.display = "block";
        a.style.marginLeft = "3px";
        f.appendChild(a);
        o = a.getContext("2d");
        o.fillStyle = "rgb(" + b.ms.bg.r + "," + b.ms.bg.g + "," + b.ms.bg.b + ")";
        o.fillRect(0, 0, a.width, a.height);
        B = o.getImageData(0, 0, a.width, a.height);
        try {
            performance && performance.memory && performance.memory.totalJSHeapSize &&
            (t = 3)
        } catch (G) {
        }
        h = document.createElement("div");
        h.style.backgroundColor = "rgb(" + Math.floor(b.mb.bg.r / 2) + "," + Math.floor(b.mb.bg.g / 2) + "," + Math.floor(b.mb.bg.b / 2) + ")";
        h.style.padding = "2px 0px 3px 0px";
        h.style.display = "none";
        g.appendChild(h);
        i = document.createElement("div");
        i.style.fontFamily = "Helvetica, Arial, sans-serif";
        i.style.textAlign = "left";
        i.style.fontSize = "9px";
        i.style.color = "rgb(" + b.mb.fg.r + "," + b.mb.fg.g + "," + b.mb.fg.b + ")";
        i.style.margin = "0px 0px 1px 3px";
        i.innerHTML = '<span style="font-weight:bold">MB</span>';
        h.appendChild(i);
        a = document.createElement("canvas");
        a.width = 74;
        a.height = 30;
        a.style.display = "block";
        a.style.marginLeft = "3px";
        h.appendChild(a);
        q = a.getContext("2d");
        q.fillStyle = "#301010";
        q.fillRect(0, 0, a.width, a.height);
        E = q.getImageData(0, 0, a.width, a.height);
        return {
            domElement: g, update: function () {
                u++;
                j = (new Date).getTime();
                n = j - F;
                z = Math.min(z, n);
                A = Math.max(A, n);
                s(B.data, Math.min(30, 30 - n / 200 * 30), "ms");
                c.innerHTML = '<span style="font-weight:bold">' + n + " MS</span> (" + z + "-" + A + ")";
                o.putImageData(B, 0, 0);
                F = j;
                if (j >
                    v + 1E3) {
                    l = Math.round(u * 1E3 / (j - v));
                    w = Math.min(w, l);
                    x = Math.max(x, l);
                    s(y.data, Math.min(30, 30 - l / 100 * 30), "fps");
                    d.innerHTML = '<span style="font-weight:bold">' + l + " FPS</span> (" + w + "-" + x + ")";
                    m.putImageData(y, 0, 0);
                    if (t == 3)p = performance.memory.usedJSHeapSize * 9.54E-7, C = Math.min(C, p), D = Math.max(D, p), s(E.data, Math.min(30, 30 - p / 2), "mb"), i.innerHTML = '<span style="font-weight:bold">' + Math.round(p) + " MB</span> (" + Math.round(C) + "-" + Math.round(D) + ")", q.putImageData(E, 0, 0);
                    v = j;
                    u = 0
                }
            }
        }
    };

    return THREE;
}
stars.blue_sverx_giant = {
    draw: function () {
        var THREE = getPulpoTHREE();
        cancelAnimationFrame(idAnimationFrame);
        var pospo = 1
        var _stats = 1
        var container, stats;
        var camera, controls, sprite, material, scene, renderer, ribbon, geometry, materials = [], ribbons = [], parameters, i, i2, h, color, x, y, z, z2, s, n, n2, nribbons, grid, geom = [], geomVel = [], posZ = [];
        var plane
        var mouseX = 0, mouseY = 0;
        var count = 0
        var mouseDn = 0
        var winnerWidth = 1200
        var winnerHeight = 495
        var windowHalfX = winnerWidth / 2;
        var windowHalfY = winnerHeight / 2;
        var postprocessing = {enabled: false};
        var composer;
        var mi_pulpo
        var i, line, vector1, vector2, material, p,
            geometry = new THREE.Geometry();


        init();
        animate();
        function Pulpo() {

            var fast = 0
            var cantCeldTent = 27
            // var largoTotal = 10
            var anchoBrz = 70
            var ruedatentacules = 6
            /*NO PONER PAR*/
            var changeColor = 1
            /**/
            var tm = 0
            var materpup
            var materpupfast
            var materpupPart
            var largoCeldTent
            var tentacles = []
            var nulRoot
            var ready = 0
            /**/
            var oldAngleX = 0
            var changeRotX = 0
            var oldAngleY = 0
            var changeRotY = 0
            var oldAngleZ = 0
            var changeRotZ = 0
            var thisRueda = 0
            var misprite
            var misprite2
            /**/
            this.isready = function () {
                return (ready)
            }
            if (fast) {
                changeColor = 0;
                cantCeldTent = 10;
                ruedatentacules = 1
                largoTotal = 500
                pospo = 0;
                if (0) {
                    var ruedatentacules = 1
                    var cantCeldTent = 1
                }
            }


            ////-------------------------------------------------------
            this.cons = function () {
                if (!ready) construct();
            }
            this.anim = function () {
                if (ready) {
                    oldAngleX = nulRoot.rotation.x;
                    oldAngleY = nulRoot.rotation.y;
                    oldAngleZ = nulRoot.rotation.z;
                }
                if (!ready) construct();
                if (ready) {
                    animPriv()
                }
                tm++
            }
            this.inst = function () {
                return nulRoot
            }
            this.valsupdate = function () {
                if (ready) {
                    changeRotX = nulRoot.rotation.x - oldAngleX;
                    changeRotY = nulRoot.rotation.y - oldAngleY;
                    changeRotZ = nulRoot.rotation.z - oldAngleZ;
                }
            }
            ////-------------------------------------------------------


            ////-------------------------------------------------------
            function construct() {
                //MATERIAL
                if (ready) return;
                largoCeldTent = 2.2

                misprite = THREE.ImageUtils.loadTexture("particle.png")
                materpup = new THREE.MeshBasicMaterial({
                    color: 0x99FFFF,
                    opacity: 0.7,
                    depthTest: 0,
                    vertexColors: THREE.FaceColors,
                    transparent: true,
                    blending: THREE.AdditiveBlending
                })
                materpupPart = new THREE.MeshBasicMaterial({
                    color: 0x8891cb,
                    opacity: 0.4,
                    depthTest: 0,
                    vertexColors: THREE.FaceColors,
                    transparent: true,
                    blending: THREE.AdditiveBlending
                })
                materpupfast = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    opacity: 0.8,
                    depthTest: 0,
                    vertexColors: THREE.FaceColors
                })
                if (fast) {
                    materpup = materpupfast
                }

                //ROOT
                nulRoot = new THREE.Mesh()
                scene.addObject(nulRoot);

                //RUEDAS DE TENTACULOS
                for (var j = 0; j < ruedatentacules * 1; j++) {
                    for (var i = 0; i < ruedatentacules * 1; i++) {
                        if (i == 0) {
                            thisRueda++
                        }
                        var tent = new tentacle()
                        tent.contructorT(j * (360 / (ruedatentacules * 1) * 0.017453), i * (360 / (ruedatentacules * 1) * 0.017453), thisRueda)
                        tentacles.push(tent)
                    }
                }


                ready = 1
            }

            ////-------------------------------------------------------
            function animPriv() {
                var max = tentacles.length
                for (var i = 0; i < max; i++) {
                    tentacles[i].animPrivT()
                }
            }

            ////-------------------------------------------------------


            ////-------------------------------------------------------
            ////TENTACLE
            ////-------------------------------------------------------
            function tentacle() {
                var celdaTents = []
                var celdaTentsRY = []
                var celdaTentsRZ = []
                var celdaTentsRY2 = []
                var celdaTentsRZ2 = []
                var _rootceldaTent
                var initAngY
                var initAngZ
                var rueda
                var mirand
                var multRestP = 2.3
                var innerP = 0.4
                if (fast) {
                    multRest = 4
                }
                ////-------------------------------------------------------
                this.contructorT = function ($initAngY, $initAngZ, $rueda) {
                    initAngY = $initAngY * (0.9 + (Math.random()) / 5)
                    initAngZ = $initAngZ * (0.9 + (Math.random()) / 5)
                    //
                    celdaTentsRY.push[0]
                    celdaTentsRZ.push[0]
                    celdaTentsRY2.push[0]
                    celdaTentsRZ2.push[0]
                    //
                    mirand = 1 + ((Math.random()) / 2) - 0.25
                    rueda = $rueda

                    for (var i = 0; i < cantCeldTent; i++) {
                        var iPer = (i / cantCeldTent) //80 шикарная поверхность // 5 для лучей
                        var iPerNeg = 1 - iPer
                        var iPerNegExp = (iPerNeg )
                        var iPerNegExp2 = (1 - ((i + 1) / cantCeldTent) )
                        var sizeh = ((anchoBrz * iPerNegExp * iPerNegExp * iPerNegExp * iPerNegExp) + 2.5)
                        var sizeh2 = ((anchoBrz * iPerNegExp2 * iPerNegExp2 * iPerNegExp2 * iPerNegExp2) + 2.5)
                        var largo = largoCeldTent
                        var cube = new THREE.CubeGeometry(largo, sizeh, sizeh2)

                        //REDUCCION
                        var redux = sizeh / sizeh2
                        for (var v = 0; v < cube.vertices.length; v++) {
                            if (v == 5 || v == 6 || v == 7 || v == 8 || v == 4) {
                                cube.vertices[v].position.y /= redux;
                                cube.vertices[v].position.z /= redux;
                            }
                        }
                        var celdaTent = new THREE.Mesh(cube, materpup)
                        celdaTent.doubleSided = false


                        if (changeColor) {
                            for (var fcs = 0; fcs < celdaTent.geometry.faces.length; fcs++) {
                                var co = new THREE.Color();
                                co.setHSV((iPer / 4) + 0.45, 0.25 + (iPer / 2), iPerNeg / 6 + 0.3);
                                if (fcs == 0 || fcs == 10) {
                                    co.setHSV((iPer / 4) + 0.45, 0.35 + (iPer / 2), 0);
                                }
                                celdaTent.geometry.faces[fcs].color = co;
                            }
                        }

                        if (i == 0) {
                            _rootceldaTent = celdaTent
                        } else {
                            celdaTents[celdaTents.length - 1].addChild(celdaTent)
                            celdaTent.position.x = (largo)


                            if (Math.random() > 0.2 && 1) {
                                var celdaTent2 = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), materpupPart)
                                celdaTents[celdaTents.length - 1].addChild(celdaTent2)
                                celdaTent2.position.x = (largo * 4)
                                celdaTent2.position.y = (largo * 5 * Math.random())
                                celdaTent2.position.z = (largo * 5 * Math.random())
                                celdaTent2.rotation.y = Math.random() * 6
                                celdaTent2.rotation.z = Math.random() * 6
                                if (changeColor) {
                                    for (var fcs = 0; fcs < celdaTent2.geometry.faces.length; fcs++) {
                                        var co = new THREE.Color();
                                        co.setHSV(0.55, 1, 3);
                                        celdaTent2.geometry.faces[fcs].color = co;
                                    }
                                }
                            }
                        }
                        celdaTents.push(celdaTent)
                    }
                    nulRoot.addChild(_rootceldaTent);
                    _rootceldaTent.rotation.y = initAngY
                    _rootceldaTent.rotation.z = initAngZ
                }
                ////-------------------------------------------------------
                this.animPrivT = function () {
                    var max = celdaTents.length
                    for (var i = 0; i < max; i++) {
                        if (i > 0) {
                            var multRest = multRestP * (i / max) * mirand
                            var inner = innerP * (0.9 + (Math.random()) / 5)
                            celdaTentsRZ[i] = -changeRotZ * Math.cos(initAngY) * multRest * 0.6
                            celdaTentsRY[i] = -changeRotZ * Math.sin(initAngZ) * Math.sin(initAngY) * multRest
                            //****************************
                            celdaTentsRY2[i] = -changeRotY * Math.cos(initAngZ) * multRest * 2 * Math.cos(nulRoot.rotation.z)
                            celdaTentsRZ2[i] = 0 * changeRotY * Math.sin(initAngZ) * multRest * Math.sin(nulRoot.rotation.z) * Math.sin(nulRoot.rotation.y)
                            //****************************
                            celdaTents[i].rotation.y += ((celdaTentsRY[i] + celdaTentsRY2[i]) - celdaTents[i].rotation.y) * innerP
                            celdaTents[i].rotation.z += ((celdaTentsRZ[i] + celdaTentsRZ2[i]) - celdaTents[i].rotation.z) * innerP
                            if (1) {
//                                    celdaTents[0].scale.z =  2+ (Math.cos(tm/30)*1.2)
//                                    celdaTents[0].scale.x =  2+ (Math.cos(tm/30)*1.2)
//                                    celdaTents[0].scale.y =  2+ (Math.cos(tm/30)*1.2)
                            }
                        } else {

                        }
                    }
                }
                ////-------------------------------------------------------
            }

            ////-------------------------------------------------------

        }

        ////-------------------------------------------------------


        ////-------------------------------------------------------
        function init() {
            //var imagePrefix = "images/textures/skybox_";
            //var directions = ["right1", "left2", "top3", "bottom4", "front5", "back6"];
            //var imageSuffix = ".png";
            //var materialArray = [];
            //var skyGeometry = new THREE.CubeGeometry(22000, 22000, 22000);
            container = document.getElementById('graphic');
            camera = new THREE.Camera(14.32, winnerWidth / winnerHeight, 1, 5000);
            camera.position.z = 670;
//                controls = new THREE.OrbitControls( camera );
//                controls.addEventListener( 'change', render );
            //
            scene = new THREE.Scene();
            // scene.fog = new THREE.Fog( 0x020209, 0, 25000 );
            scene.matrixAutoUpdate = true;
            //
            //for (var i = 0; i < 6; i++)
            //    materialArray.push(new THREE.MeshBasicMaterial({
            //        map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
            //        side: THREE.BackSide
            //    }));
            //var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
            //var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
            //THREE.EffectComposer.scene.addObject(skyBox);
           // scene.addObject(skyBox);

            renderer = new THREE.WebGLRenderer({clearAlpha: 1, antialias: false});
            renderer.setSize(winnerWidth, winnerHeight);
            renderer.sortElements = true;
            renderer.autoClear = !pospo;
            // renderer.setClearColor( scene.fog.color, 1 );
            $('#graphic').html(renderer.domElement);
            //
            if (_stats) {
                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.display = 'none';
                $('#graphic').html(renderer.domElement);
            }
            //
            document.addEventListener('mousemove', onDocumentMouseMove, false);
            container.addEventListener('mousedown', onDocumentMouseDown, false);
            container.addEventListener('mouseup', onDocumentMouseUp, false);
            //
            if (pospo) {
                var renderModel = new THREE.RenderPass(scene, camera);
                var effectBloom = new THREE.BloomPass(10, 25, 4, 260);
                var effectScreen = new THREE.ShaderPass(THREE.ShaderExtras["screen"]);
                effectScreen.renderToScreen = true;
                composer = new THREE.EffectComposer(renderer);
                composer.addPass(renderModel);
                composer.addPass(effectBloom);
                composer.addPass(effectScreen);
            }
            mi_pulpo = new Pulpo()
            mi_pulpo.cons()
        }

        function onDocumentMouseMove(event) {
            if (mouseDn) {
                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;
            }
        }

        function onDocumentMouseDown(event) {
            mouseDn = 1
        }

        function onDocumentMouseUp(event) {
            mouseDn = 0
        }

        function animate() {
            count++
            if (mi_pulpo.isready && 1) {
                mi_pulpo.anim()
//                    mi_pulpo.inst().rotation.z += (Math.sin(count/80)*8 - mi_pulpo.inst().rotation.z ) * 0.1;
//                    mi_pulpo.inst().rotation.y += (Math.cos(count/80)*8- mi_pulpo.inst().rotation.y ) * 0.1;
                // mi_pulpo.inst().rotation.x+=0.05;
                mi_pulpo.inst().rotation.z += 0.03;
                mi_pulpo.inst().rotation.y += 0.03;
            }

            idAnimationFrame = requestAnimationFrame(animate);
            //controls.update();
            render();
            stats.update();

            mi_pulpo.valsupdate()
        }

        function render() {
//                camera.position.x += ( mouseX*6 - camera.position.x ) * 0.3;
//                camera.position.y += ( -(mouseY*6) - camera.position.y ) * 0.3;
            renderer.clear();
            if (pospo) {
                renderer.autoClear = false
                composer.render();
            } else {
                renderer.autoClear = true
                renderer.render(scene, camera);
            }
        }
    }
};