stars.blue_sverx_giant = {
    draw: function () {
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
            container = document.getElementById('graphic');
            document.body.appendChild(container);
            camera = new THREE.Camera(14.32, winnerWidth / winnerHeight, 1, 5000);
            camera.position.z = 1000;
//                controls = new THREE.OrbitControls( camera );
//                controls.addEventListener( 'change', render );
            //
            scene = new THREE.Scene();
            // scene.fog = new THREE.Fog( 0x020209, 0, 25000 );
            scene.matrixAutoUpdate = true;
            //
            renderer = new THREE.WebGLRenderer({clearAlpha: 1, antialias: false});
            renderer.setSize(winnerWidth, winnerHeight);
            renderer.sortElements = true;
            renderer.autoClear = !pospo;
            // renderer.setClearColor( scene.fog.color, 1 );
            container.appendChild(renderer.domElement);
            //
            if (_stats) {
                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                container.appendChild(stats.domElement);
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

            requestAnimationFrame(animate);
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