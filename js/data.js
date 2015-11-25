idAnimationFrame = 0;
var stars = {
    red_gigant: {
        draw: function () {
            cancelAnimationFrame(idAnimationFrame);
            var container, scene, camera, renderer, controls, stats;
            var keyboard = new THREEx.KeyboardState();
            var clock = new THREE.Clock();
            // custom global variables
            init();
            animate();

            // FUNCTIONS
            function init() {

                // SCENE
                scene = new THREE.Scene();
                // CAMERA
                SCREEN_WIDTH = $('#graphic').width();
                SCREEN_HEIGHT = $('#graphic').height() - 5;
                var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
                camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
                camera.position.set(100, 200, 150);
                // camera.lookAt(scene.position);
                // RENDERER
                if (Detector.webgl)
                    renderer = new THREE.WebGLRenderer({antialias: true});
                else
                    renderer = new THREE.CanvasRenderer();
                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                container = document.getElementById('graphic');
                $('#graphic').html(renderer.domElement);
                // EVENTS
                THREEx.WindowResize(renderer, camera);
                THREEx.FullScreen.bindKey({charCode: 'm'.charCodeAt(0)});
                // CONTROLS
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                // SKYBOX/FOG
                var imagePrefix = "images/textures/skybox_";
                var directions = ["right1", "left2", "top3", "bottom4", "front5", "back6"];
                var imageSuffix = ".png";
                var skyGeometry = new THREE.CubeGeometry(22000, 22000, 22000);

                var materialArray = [];
                for (var i = 0; i < 6; i++)
                    materialArray.push(new THREE.MeshBasicMaterial({
                        map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
                        side: THREE.BackSide
                    }));
                var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
                var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
                scene.add(skyBox);
                // STATS
                stats = new Stats();
                stats.domElement.style.display = "none";
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.bottom = '0px';
                stats.domElement.style.zIndex = 100;
                $('#graphic').html(renderer.domElement);


                var lavaTexture = new THREE.ImageUtils.loadTexture('images/textures/lava.jpg');
                lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var baseSpeed = 0.002;
                // number of times to repeat texture in each direction
                var repeatS = repeatT = 3.0;

                // texture used to generate "randomness", distort all other textures
                var noiseTexture = new THREE.ImageUtils.loadTexture('images/textures/cloud.png');
                noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
                // magnitude of noise effect
                var noiseScale = 6;

                // texture to additively blend with base image texture
                var blendTexture = new THREE.ImageUtils.loadTexture('images/textures/lava.jpg');
                blendTexture.wrapS = blendTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var blendSpeed = 0.007;
                // adjust lightness/darkness of blended texture
                var blendOffset = 0.55;

                // texture to determine normal displacement
                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var bumpSpeed = 0.01;
                // magnitude of normal displacement
                var bumpScale = 20.0;

                customUniforms = {
                    baseTexture: {type: "t", value: lavaTexture},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTexture},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeed},
                    bumpScale: {type: "f", value: bumpScale},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };

                // create custom material from the shader code above
                //   that is within specially labeled script tags
                var customMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniforms,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent
                    });

                var ballGeometry = new THREE.SphereGeometry(80, 64, 64);
                var ball = new THREE.Mesh(ballGeometry, customMaterial);
                ball.position.set(0, 0, 0);

                scene.add(ball);


                var spriteMaterial = new THREE.SpriteMaterial(
                    {
                        map: new THREE.ImageUtils.loadTexture('images/textures/1234.png'),
                        useScreenCoordinates: false,
                        alignment: THREE.SpriteAlignment.center,
                        color: 0xFFCC33,
                        transparent: false,
                        blending: THREE.AdditiveBlending
                    });
                var sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(320, 320, 1.0);
                ball.add(sprite);

                var spriteMaterial2 = new THREE.SpriteMaterial(
                    {
                        map: new THREE.ImageUtils.loadTexture('images/textures/glow.png'),
                        useScreenCoordinates: false,
                        alignment: THREE.SpriteAlignment.center,
                        color: 0xCC0033,
                        transparent: false,
                        blending: THREE.AdditiveBlending
                    });
                var sprite2 = new THREE.Sprite(spriteMaterial2);
                sprite2.scale.set(280, 280, 1.0);
                ball.add(sprite2);
            }

            function animate() {
                idAnimationFrame = requestAnimationFrame(animate);
                render();
                update();
            }

            function update() {
                customUniforms.time.value += clock.getDelta();
                controls.update();
                stats.update();
            }

            function render() {
                renderer.render(scene, camera);
            }
        }
    },
    protostar: {
        draw: function () {
            cancelAnimationFrame(idAnimationFrame);
            SCREEN_WIDTH = $('#graphic').width();
            SCREEN_HEIGHT = $('#graphic').height()-5;
            var container, scene, camera, renderer, controls, stats, camera2;
            var clock = new THREE.Clock();
            init();
            animate();


            // FUNCTIONS
            function init() {
                scene = new THREE.Scene();
                VIEW_ANGLE = 47, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
                camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
                camera.position.set(335, -400, 300);
                if (Detector.webgl)
                    renderer = new THREE.WebGLRenderer({antialias: true});
                else
                    renderer = new THREE.CanvasRenderer();
                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                container = document.getElementById('graphic');
                $('#graphic').html(renderer.domElement);
                THREEx.WindowResize(renderer, camera);
                THREEx.FullScreen.bindKey({charCode: 'm'.charCodeAt(0)});
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                stats = new Stats();
                var imagePrefix = "images/textures/skybox_";
                var directions = ["right1", "left2", "top3", "bottom4", "front5", "back6"];
                var imageSuffix = ".png";
                var skyGeometry = new THREE.CubeGeometry(22000, 22000, 22000);
                var materialArray = [];
                for (var i = 0; i < 6; i++)
                    materialArray.push(new THREE.MeshBasicMaterial({
                        map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
                        side: THREE.BackSide
                    }));
                var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
                var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
                scene.add(skyBox);
                stats.domElement.style.display = "none";
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.bottom = '0px';
                stats.domElement.style.zIndex = 100;
                $('#graphic').html(renderer.domElement);
                var lavaTexture = new THREE.ImageUtils.loadTexture('images/textures/newproto.jpg');
                lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
                var lavaTextureCircle = new THREE.ImageUtils.loadTexture('images/textures/protocircle2.png');
                lavaTextureCircle.wrapS = lavaTextureCircle.wrapT = THREE.RepeatWrapping;
                var baseSpeed = 0.02;
                var repeatS = repeatT = 4.0;
                var noiseTexture = new THREE.ImageUtils.loadTexture('images/textures/cloud.png');
                noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
                var noiseScale = 1;
                var blendTexture = new THREE.ImageUtils.loadTexture('images/textures/newproto.jpg');
                blendTexture.wrapS = blendTexture.wrapT = THREE.RepeatWrapping;
                var blendTextureCircle = new THREE.ImageUtils.loadTexture('images/textures/protocircle2.png');
                blendTextureCircle.wrapS = blendTextureCircle.wrapT = THREE.RepeatWrapping;
                var blendSpeed = 0.01;

                var blendOffset = 0.695;
                var blendOffset0 = 0.42;
                var blendOffset1 = 0.129;
                var blendOffset2 = 0.015;
                var blendOffset3 = 0.39;
                var blendOffset4 = 0.23;
                var blendOffset5 = 0.125;
                var blendOffset6 = 0.25;
                var blendOffset7 = 0.08;
                var blendOffset8 = 0.005;

                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                var bumpSpeed = 0.007;
                var bumpScale = 10.0;
                var bumpSpeedCircle = 0.0006;
                var bumpScaleCircle = 15.0;


                customUniforms = {
                    baseTexture: {type: "t", value: lavaTexture},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTexture},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeed},
                    bumpScale: {type: "f", value: bumpScale},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                customUniformsCircle1 = {
                    baseTexture: {type: "t", value: lavaTextureCircle},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTextureCircle},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset1},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeedCircle},
                    bumpScale: {type: "f", value: bumpScaleCircle},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                customUniformsCircle2 = {
                    baseTexture: {type: "t", value: lavaTextureCircle},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTextureCircle},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset2},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeedCircle},
                    bumpScale: {type: "f", value: bumpScaleCircle},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                customUniformsCircle3 = {
                    baseTexture: {type: "t", value: lavaTextureCircle},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTextureCircle},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset3},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeedCircle},
                    bumpScale: {type: "f", value: bumpScaleCircle},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                customUniformsCircle4 = {
                    baseTexture: {type: "t", value: lavaTextureCircle},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTextureCircle},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset4},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeedCircle},
                    bumpScale: {type: "f", value: bumpScaleCircle},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                customUniformsCircle5 = {
                    baseTexture: {type: "t", value: lavaTextureCircle},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTextureCircle},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset5},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeedCircle},
                    bumpScale: {type: "f", value: bumpScaleCircle},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                customUniformsCircle6 = {
                    baseTexture: {type: "t", value: lavaTextureCircle},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTextureCircle},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset6},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeedCircle},
                    bumpScale: {type: "f", value: bumpScaleCircle},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                customUniformsCircle7 = {
                    baseTexture: {type: "t", value: lavaTextureCircle},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTextureCircle},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset7},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeedCircle},
                    bumpScale: {type: "f", value: bumpScaleCircle},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                customUniformsCircle8 = {
                    baseTexture: {type: "t", value: lavaTextureCircle},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTextureCircle},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset8},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeedCircle},
                    bumpScale: {type: "f", value: bumpScaleCircle},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                customUniformsCircle0 = {
                    baseTexture: {type: "t", value: lavaTextureCircle},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTextureCircle},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset0},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeedCircle},
                    bumpScale: {type: "f", value: bumpScaleCircle},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                var customMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniforms,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent
                    });
                var customCircleMaterial0 = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniformsCircle0,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent

                    }
                );
                var customCircleMaterial1 = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniformsCircle1,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent

                    }
                );
                var customCircleMaterial2 = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniformsCircle2,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent

                    }
                );
                var customCircleMaterial3 = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniformsCircle3,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent

                    }
                );
                var customCircleMaterial4 = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniformsCircle4,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent

                    }
                );
                var customCircleMaterial5 = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniformsCircle5,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent

                    }
                );
                var customCircleMaterial6 = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniformsCircle6,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent

                    }
                );
                var customCircleMaterial7 = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniformsCircle7,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent

                    }
                );
                var customCircleMaterial8 = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniformsCircle8,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent

                    }
                );
                var customMaterialGlow = new THREE.ShaderMaterial(
                    {
                        uniforms: {},
                        vertexShader: document.getElementById('vertexShaderGlow').textContent,
                        fragmentShader: document.getElementById('fragmentShaderGlow').textContent,
                        side: THREE.BackSide,
                        blending: THREE.AdditiveBlending,
                        transparent: true
                    });

                //var GlowTorus = new THREE.TorusGeometry(260, 12, 50, 50);
                //var Glow = new THREE.Mesh(GlowTorus, customMaterialGlow);
                //scene.add(Glow);

                var discGeometry = new THREE.TorusGeometry(235, 3, 50, 50);
                disc = new THREE.Mesh(discGeometry, customCircleMaterial0);
                disc.position.set(0, 0, 0);
                disc.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
                scene.add(disc);

                var discGeometry1 = new THREE.TorusGeometry(225, 4, 50, 50);
                disc1 = new THREE.Mesh(discGeometry1, customCircleMaterial1);
                disc1.position.set(0, 0, 0);
                disc1.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
                scene.add(disc1);

                var discGeometry2 = new THREE.TorusGeometry(215, 5, 50, 50);
                disc2 = new THREE.Mesh(discGeometry2, customCircleMaterial2);
                disc2.position.set(0, 0, 0);
                disc2.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
                scene.add(disc2);

                /*-------------------------*/

                var discGeometry3 = new THREE.TorusGeometry(170, 6, 50, 50);
                disc3 = new THREE.Mesh(discGeometry3, customCircleMaterial3);
                disc3.position.set(0, 0, 0);
                disc3.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
                scene.add(disc3);

                var discGeometry4 = new THREE.TorusGeometry(160, 7, 50, 50);
                disc4 = new THREE.Mesh(discGeometry4, customCircleMaterial4);
                disc4.position.set(0, 0, 0);
                disc4.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
                scene.add(disc4);

                var discGeometry5 = new THREE.TorusGeometry(150, 8, 50, 50);
                disc5 = new THREE.Mesh(discGeometry5, customCircleMaterial5);
                disc5.position.set(0, 0, 0);
                disc5.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
                scene.add(disc5);
                /*-------------------------*/

                var discGeometry6 = new THREE.TorusGeometry(100, 7, 50, 50);
                disc6 = new THREE.Mesh(discGeometry6, customCircleMaterial6);
                disc6.position.set(0, 0, 0);
                disc6.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
                scene.add(disc6);

                var discGeometry7 = new THREE.TorusGeometry(90, 6, 50, 50);
                disc7 = new THREE.Mesh(discGeometry7, customCircleMaterial7);
                disc7.position.set(0, 0, 0);
                disc7.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
                scene.add(disc7);

                var discGeometry8 = new THREE.TorusGeometry(80, 5, 50, 50);
                disc8 = new THREE.Mesh(discGeometry8, customCircleMaterial8);
                disc8.position.set(0, 0, 0);
                disc8.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
                scene.add(disc8);
                /*-------------------------*/

                var ballGeometry = new THREE.SphereGeometry(20, 64, 64);
                var ball = new THREE.Mesh(ballGeometry, customMaterial);
                ball.position.set(0, 0, 0);
                scene.add(ball);
                ball.position.set(0, 0, 0);
                var spriteMaterial = new THREE.SpriteMaterial(
                    {
                        map: new THREE.ImageUtils.loadTexture('images/textures/glow.png'),
                        useScreenCoordinates: false,
                        alignment: THREE.SpriteAlignment.center,
                        color: 0xFFFF00,
                        transparent: false,
                        blending: THREE.AdditiveBlending
                    });
                var sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(240, 240, 1.0);
                ball.add(sprite);
                var spriteMaterial2 = new THREE.SpriteMaterial(
                    {
                        map: new THREE.ImageUtils.loadTexture('images/textures/glow.png'),
                        useScreenCoordinates: false,
                        alignment: THREE.SpriteAlignment.center,
                        color: 0xFF3333,
                        transparent: false,
                        blending: THREE.AdditiveBlending
                    });
                var sprite2 = new THREE.Sprite(spriteMaterial2);
                sprite2.scale.set(340, 340, 1.0);
                ball.add(sprite2);
            }

            function rotateDisc() {
                disc.rotation.z += 0.003;
                disc1.rotation.z += 0.004;
                disc2.rotation.z += 0.005;
                disc3.rotation.z += 0.006;
                disc4.rotation.z += 0.007;
                disc5.rotation.z += 0.008;
                disc6.rotation.z += 0.0085;
                disc7.rotation.z += 0.009;
                disc8.rotation.z += 0.0095;
                // flatG.rotation.z += 10.005;
            }

            function animate() {
                idAnimationFrame = requestAnimationFrame(animate);
                rotateDisc();
                render();
                update();
            }

            function update() {
                customUniforms.time.value += clock.getDelta();
                customUniformsCircle1.time.value = customUniforms.time.value;
                customUniformsCircle2.time.value = customUniforms.time.value;
                customUniformsCircle3.time.value = customUniforms.time.value;
                customUniformsCircle4.time.value = customUniforms.time.value;
                customUniformsCircle5.time.value = customUniforms.time.value;
                customUniformsCircle6.time.value = customUniforms.time.value;
                customUniformsCircle7.time.value = customUniforms.time.value;
                customUniformsCircle8.time.value = customUniforms.time.value;
                controls.update();
                stats.update();
            }

            function render() {
                renderer.render(scene, camera);
            }
        }
    },
    blue_giant: {
        draw: function () {
            cancelAnimationFrame(idAnimationFrame);
            var container, scene, camera, renderer, controls, stats;
            var clock = new THREE.Clock();
            init();
            animate();
            function init() {
                scene = new THREE.Scene();
                SCREEN_WIDTH = $('#graphic').width();
                SCREEN_HEIGHT = $('#graphic').height() - 5;
                VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
                camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
                camera.position.set(100, 200, 150);
                if (Detector.webgl)
                    renderer = new THREE.WebGLRenderer({antialias: true});
                else
                    renderer = new THREE.CanvasRenderer();
                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                container = document.getElementById('graphic');
                THREEx.WindowResize(renderer, camera);
                THREEx.FullScreen.bindKey({charCode: 'm'.charCodeAt(0)});
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                stats = new Stats();
                stats.domElement.style.display = 'none';
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.bottom = '0px';
                stats.domElement.style.zIndex = 100;
                $('#graphic').html(renderer.domElement);
                var light = new THREE.PointLight(0xffffff);
                light.position.set(0, 250, 0);
                scene.add(light);
                var imagePrefix = "images/textures/skybox_";
                var directions = ["right1", "left2", "top3", "bottom4", "front5", "back6"];
                var imageSuffix = ".png";
                var skyGeometry = new THREE.CubeGeometry(22000, 22000, 22000);
                var materialArray = [];
                for (var i = 0; i < 6; i++)
                    materialArray.push(new THREE.MeshBasicMaterial({
                        map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
                        side: THREE.BackSide
                    }));
                var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
                var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
                scene.add(skyBox);
                var lavaTexture = new THREE.ImageUtils.loadTexture('images/textures/blue_giant4.png');
                lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
                var baseSpeed = 0.02;
                var repeatS = repeatT = 0.7;
                var noiseTexture = new THREE.ImageUtils.loadTexture('images/textures/cloud.png');
                noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
                var noiseScale = 1;
                var blendTexture = new THREE.ImageUtils.loadTexture('images/textures/blue_giant4.png');
                blendTexture.wrapS = blendTexture.wrapT = THREE.RepeatWrapping;
                var blendSpeed = 0.01;
                var blendOffset = 0.005;
                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                var bumpSpeed = 0.007;
                var bumpScale = 10.0;
                customUniforms = {
                    baseTexture: {type: "t", value: lavaTexture},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTexture},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeed},
                    bumpScale: {type: "f", value: bumpScale},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                var customMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniforms,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent
                    });
                var sphereGeo = new THREE.SphereGeometry(64, 40, 40);
                var moon = new THREE.Mesh(sphereGeo, customMaterial);
                scene.add(moon);
                var customMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: {},
                        vertexShader: document.getElementById('vertexShaderGlow3').textContent,
                        fragmentShader: document.getElementById('fragmentShaderGlow3').textContent,
                        side: THREE.BackSide,
                        blending: THREE.AdditiveBlending,
                        transparent: true
                    });
                var ballGeometry = new THREE.SphereGeometry(77, 32, 16);
                var ball = new THREE.Mesh(ballGeometry, customMaterial);
                scene.add(ball);
            }

            function animate() {
                idAnimationFrame = requestAnimationFrame(animate);
                render();
                update();
            }

            function update() {
                customUniforms.time.value += clock.getDelta();
                controls.update();
                stats.update();
            }

            function render() {
                renderer.render(scene, camera);
            }
        }
    },
    neutronstar: {
        draw: function () {
            cancelAnimationFrame(idAnimationFrame);
            var container, scene, camera, renderer, controls, stats;
            var keyboard = new THREEx.KeyboardState();
            var clock = new THREE.Clock();
            // custom global variables
            init();
            animate();

            // FUNCTIONS
            function init() {

                // SCENE
                scene = new THREE.Scene();
                // CAMERA
                SCREEN_WIDTH = $('#graphic').width();
                SCREEN_HEIGHT = $('#graphic').height()-5;
                var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
                camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
                camera.position.set(200, 200, 150);
                // camera.lookAt(scene.position);
                // RENDERER
                if (Detector.webgl)
                    renderer = new THREE.WebGLRenderer({antialias: true});
                else
                    renderer = new THREE.CanvasRenderer();
                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                container = document.getElementById('graphic');
                $('#graphic').html(renderer.domElement);
                // EVENTS
                THREEx.WindowResize(renderer, camera);
                THREEx.FullScreen.bindKey({charCode: 'm'.charCodeAt(0)});
                // CONTROLS
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                var imagePrefix = "images/textures/skybox_";
                var directions = ["right1", "left2", "top3", "bottom4", "front5", "back6"];
                var imageSuffix = ".png";
                var skyGeometry = new THREE.CubeGeometry(22000, 22000, 22000);

                var materialArray = [];
                for (var i = 0; i < 6; i++)
                    materialArray.push(new THREE.MeshBasicMaterial({
                        map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
                        side: THREE.BackSide
                    }));
                var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
                var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
                scene.add(skyBox);
                // STATS

                stats = new Stats();
                stats.domElement.style.display = "none";
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.bottom = '0px';
                stats.domElement.style.zIndex = 100;
                $('#graphic').html(renderer.domElement);
                var lavaTexture = new THREE.ImageUtils.loadTexture('images/textures/blue_giant.png');
                lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
                var lavaTexture2 = new THREE.ImageUtils.loadTexture('images/textures/neutronCylinder.png');
                lavaTexture2.wrapS = lavaTexture2.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var baseSpeed = 0.02;
                // number of times to repeat texture in each direction
                var repeatS = repeatT = 4.0;

                // texture used to generate "randomness", distort all other textures
                var noiseTexture = new THREE.ImageUtils.loadTexture('images/textures/cloud.png');
                noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
                // magnitude of noise effect
                var noiseScale = 1;

                // texture to additively blend with base image texture
                var blendTexture = new THREE.ImageUtils.loadTexture('images/textures/blue_giant.png');
                blendTexture.wrapS = blendTexture.wrapT = THREE.RepeatWrapping;

                var blendTexture2 = new THREE.ImageUtils.loadTexture('images/textures/neutronCylinder.png');
                blendTexture2.wrapS = blendTexture2.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var blendSpeed = 0.01;
                var blendSpeed2 = 0.1;
                // adjust lightness/darkness of blended texture
                var blendOffset = 0.2;
                var blendOffset2 = 0.02;

                // texture to determine normal displacement
                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var bumpSpeed = 0.007;
                var bumpSpeed2 = 0.009;
                // magnitude of normal displacement
                var bumpScale = 10.0;

                customUniforms = {
                    baseTexture: {type: "t", value: lavaTexture},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTexture},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeed},
                    bumpScale: {type: "f", value: bumpScale},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };

                customUniforms2 = {
                    baseTexture: {type: "t", value: lavaTexture2},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTexture2},
                    blendSpeed: {type: "f", value: blendSpeed2},
                    blendOffset: {type: "f", value: blendOffset2},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeed2},
                    bumpScale: {type: "f", value: bumpScale},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                // create custom material from the shader code above
                //   that is within specially labeled script tags
                var customMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniforms,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent
                    });
                var customMaterial3 = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniforms2,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent
                    });
                var customMaterial2 = new THREE.ShaderMaterial(
                    {
                        uniforms: {},
                        vertexShader: document.getElementById('vertexShaderGlow2').textContent,
                        fragmentShader: document.getElementById('fragmentShaderGlow2').textContent,
                        blending: THREE.AdditiveBlending,
                        transparent: true
                    });
                var ballGeometry = new THREE.SphereGeometry(50, 64, 64);
                ball = new THREE.Mesh(ballGeometry, customMaterial);
                ball.position.set(0, 0, 0);
                disc8.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
                scene.add(ball);

                var cylinderGeometry = new THREE.CylinderGeometry(15, 1, 3800, 30, 50, true);
                cylinder1 = new THREE.Mesh(cylinderGeometry, customMaterial2);
                cylinder1.position.set(0, 0, 0);
                scene.add(cylinder1);

                var cylinderGeometry2 = new THREE.CylinderGeometry(1, 15, 3800, 30, 50, true);
                cylinder2 = new THREE.Mesh(cylinderGeometry2, customMaterial2);
                cylinder2.position.set(0, 0, 0);
                scene.add(cylinder2);

                var cylinderGeometryHearth = new THREE.CylinderGeometry(5, 1, 3800, 30, 50, true);
                cylinderHearth1 = new THREE.Mesh(cylinderGeometryHearth, customMaterial3);
                cylinderHearth1.position.set(0, 0, 0);
                scene.add(cylinderHearth1);

                var cylinderGeometryHearth2 = new THREE.CylinderGeometry(1, 5, 3800, 30, 50, true);
                cylinderHearth2 = new THREE.Mesh(cylinderGeometryHearth2, customMaterial3);
                cylinderHearth2.position.set(0, 0, 0);
                scene.add(cylinderHearth2);

                spriteMaterial = new THREE.SpriteMaterial(
                    {
                        map: new THREE.ImageUtils.loadTexture('images/textures/1234.png'),
                        useScreenCoordinates: false,
                        alignment: THREE.SpriteAlignment.center,
                        color: 0x9966CC,
                        transparent: false,
                        blending: THREE.AdditiveBlending
                    });
                var sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(200, 200, 1.0);
                ball.add(sprite);
            }

            function rotateNeutron() {
                cylinder1.rotation.x += 0.019;
                cylinder2.rotation.x += 0.019;
                cylinderHearth1.rotation.x += 0.019;
                cylinderHearth2.rotation.x += 0.019;
                ball.rotation.x += 0.019;
            }

            function animate() {
                idAnimationFrame = requestAnimationFrame(animate);
                rotateNeutron();
                render();
                update();
            }

            function update() {
                customUniforms.time.value += clock.getDelta()
                customUniforms2.time.value = customUniforms.time.value;
                controls.update();
                stats.update();
            }

            function render() {
                renderer.render(scene, camera);
            }

        }
    },
    sun_type: {
        draw: function () {
            cancelAnimationFrame(idAnimationFrame);
            var container, scene, camera, renderer, controls, stats;
            var keyboard = new THREEx.KeyboardState();
            var clock = new THREE.Clock();
            // custom global variables
            init();
            animate();

            // FUNCTIONS
            function init() {

                // SCENE
                scene = new THREE.Scene();
                // CAMERA
                SCREEN_WIDTH = $('#graphic').width();
                SCREEN_HEIGHT = $('#graphic').height() - 5;
                var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
                camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
                camera.position.set(100, 200, 150);
                // camera.lookAt(scene.position);
                // RENDERER
                if (Detector.webgl)
                    renderer = new THREE.WebGLRenderer({antialias: true});
                else
                    renderer = new THREE.CanvasRenderer();
                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                container = document.getElementById('graphic');
                $('#graphic').html(renderer.domElement);
                // EVENTS
                THREEx.WindowResize(renderer, camera);
                THREEx.FullScreen.bindKey({charCode: 'm'.charCodeAt(0)});
                // CONTROLS
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                var imagePrefix = "images/textures/skybox_";
                var directions = ["right1", "left2", "top3", "bottom4", "front5", "back6"];
                var imageSuffix = ".png";
                var skyGeometry = new THREE.CubeGeometry(22000, 22000, 22000);

                var materialArray = [];
                for (var i = 0; i < 6; i++)
                    materialArray.push(new THREE.MeshBasicMaterial({
                        map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
                        side: THREE.BackSide
                    }));
                var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
                var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
                scene.add(skyBox);
                // STATS
                stats = new Stats();
                stats.domElement.style.display = "none";
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.bottom = '0px';
                stats.domElement.style.zIndex = 100;
                $('#graphic').html(renderer.domElement);
                var lavaTexture = new THREE.ImageUtils.loadTexture('images/textures/suntype.jpg');
                lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var baseSpeed = 0.008;
                // number of times to repeat texture in each direction
                var repeatS = repeatT = 3.0;

                // texture used to generate "randomness", distort all other textures
                var noiseTexture = new THREE.ImageUtils.loadTexture('images/textures/cloud.png');
                noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
                // magnitude of noise effect
                var noiseScale = 3;

                // texture to additively blend with base image texture
                var blendTexture = new THREE.ImageUtils.loadTexture('images/textures/suntype.jpg');
                blendTexture.wrapS = blendTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var blendSpeed = 0.0001;
                // adjust lightness/darkness of blended texture
                var blendOffset = 0.07;

                // texture to determine normal displacement
                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var bumpSpeed = 0.001;
                // magnitude of normal displacement
                var bumpScale = 10.0;

                customUniforms = {
                    baseTexture: {type: "t", value: lavaTexture},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTexture},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeed},
                    bumpScale: {type: "f", value: bumpScale},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };

                // create custom material from the shader code above
                //   that is within specially labeled script tags
                var customMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniforms,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent
                    });

                var ballGeometry = new THREE.SphereGeometry(60, 64, 64);
                var ball = new THREE.Mesh(ballGeometry, customMaterial);
                ball.position.set(0, 0, 0);

                scene.add(ball);
                var spriteMaterial = new THREE.SpriteMaterial(
                    {
                        map: new THREE.ImageUtils.loadTexture('images/textures/glow.png'),
                        useScreenCoordinates: false,
                        alignment: THREE.SpriteAlignment.center,
                        color: 0xFFCC33,
                        transparent: false,
                        blending: THREE.AdditiveBlending
                    });
                var sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(220, 220, 1.0);
                ball.add(sprite);
            }

            function animate() {
                idAnimationFrame = requestAnimationFrame(animate);
                render();
                update();
            }

            function update() {
                customUniforms.time.value += clock.getDelta();
                controls.update();
                stats.update();
            }

            function render() {
                renderer.render(scene, camera);
            }
        }
    },
    planet_remnant: {
        draw: function () {
            cancelAnimationFrame(idAnimationFrame);
            var container;
            SCREEN_WIDTH = $('#graphic').width();
            SCREEN_HEIGHT = $('#graphic').height() - 5;

            var scene, camera, light, renderer;
            var geometry, cube, mesh, material;

            var data, texture, points;

            var controls;

            var fboParticles, rtTexturePos, rtTexturePos2, simulationShader;

            var planeMat, planeGeo, plane;

            init();
            animate();

            function init() {

                container = document.getElementById("graphic")
                renderer = new THREE.WebGLRenderer();
                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                $('#graphic').html(renderer.domElement);

                scene = new THREE.Scene();

                camera = new THREE.PerspectiveCamera(50, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 1000);
                scene.add(camera);

                controls = new THREE.OrbitControls2(camera);
                controls.radius = 600;
                controls.speed = 1;
//                var imagePrefix = "images/textures/skybox_";
//                var directions = ["right1", "left2", "top3", "bottom4", "front5", "back6"];
//                var imageSuffix = ".png";
//                var skyGeometry = new THREE.CubeGeometry(22000, 22000, 22000);
//
//                var materialArray = [];
//                for (var i = 0; i < 6; i++)
//                    materialArray.push(new THREE.MeshBasicMaterial({
//                        map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
//                        side: THREE.BackSide
//                    }));
//                var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
//                var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
//                scene.add(skyBox);
                //

                var width = SCREEN_WIDTH - 50, height = SCREEN_HEIGHT;

                if (!renderer.context.getExtension('OES_texture_float')) {

                    alert('OES_texture_float is not :(');

                }

                // Start Creation of DataTexture
                // Could it be simplified with THREE.FBOUtils.createTextureFromData(textureWidth, textureWidth, data); ?

                data = new Float32Array(width * height * 3);

                texture = new THREE.DataTexture(data, width, height, THREE.RGBFormat, THREE.FloatType);
                texture.minFilter = THREE.NearestFilter;
                texture.magFilter = THREE.NearestFilter;
                texture.needsUpdate = true;


                // zz85 - fbo init

                rtTexturePos = new THREE.WebGLRenderTarget(width, height, {
                    wrapS: THREE.RepeatWrapping,
                    wrapT: THREE.RepeatWrapping,
                    minFilter: THREE.NearestFilter,
                    magFilter: THREE.NearestFilter,
                    format: THREE.RGBFormat,
                    type: THREE.FloatType,
                    stencilBuffer: false
                });

                rtTexturePos2 = rtTexturePos.clone();

                simulationShader = new THREE.ShaderMaterial({

                    uniforms: {
                        tPositions: {type: "t", value: texture},
                        origin: {type: "v3", value: new THREE.Vector3()},
                        timer: {type: "f", value: 0}
                    },

                    vertexShader: document.getElementById('texture_vertex_simulation_shader').textContent,
                    fragmentShader: document.getElementById('texture_fragment_simulation_shader').textContent

                });

                fboParticles = new THREE.FBOUtils(width, renderer, simulationShader);
                fboParticles.renderToTexture(rtTexturePos, rtTexturePos2);

                fboParticles.in = rtTexturePos;
                fboParticles.out = rtTexturePos2;


                geometry = new THREE.Geometry();

                for (var i = 0, l = width * height; i < l; i++) {

                    var vertex = new THREE.Vector3();
                    vertex.x = ( i % width ) / width;
                    vertex.y = Math.floor(i / width) / height;
                    geometry.vertices.push(vertex);

                }

                material = new THREE.ShaderMaterial({

                    uniforms: {

                        "map": {type: "t", value: rtTexturePos},
                        "width": {type: "f", value: width},
                        "height": {type: "f", value: height},

                        "pointColor": {type: "v4", value: new THREE.Vector4(0.25, 0.50, 1.0, 0.25)},
                        "pointSize": {type: "f", value: 1}

                    },
                    vertexShader: document.getElementById('vs-particles').textContent,
                    fragmentShader: document.getElementById('fs-particles').textContent,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false,
                    depthTest: false,
                    transparent: true

                });

                mesh = new THREE.ParticleSystem(geometry, material);
                scene.add(mesh);

//                var gui = new dat.GUI();
//                gui.add(material.uniforms.pointColor.value, 'x', 0.0, 1.0).name('red');
//                gui.add(material.uniforms.pointColor.value, 'y', 0.0, 1.0).name('green');
//                gui.add(material.uniforms.pointColor.value, 'z', 0.0, 1.0).name('blue');
//                gui.add(material.uniforms.pointColor.value, 'w', 0.0, 1.0).name('alpha');
//                gui.add(material.uniforms.pointSize, 'value', 0.0, 10.0).name('size');
//                gui.add(controls, 'enabled').name('auto move');

                //scene.add( new THREE.Mesh( new THREE.CubeGeometry( 500, 500, 500 ), new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true, opacity: 0.15, transparent: true } ) ) );

            }

            function animate() {

                requestAnimationFrame(animate);
                render();

            }


            var timer = 0;

            function render() {

                timer += 0.001;

                simulationShader.uniforms.timer.value = timer;
                simulationShader.uniforms.origin.value.x = Math.sin(timer * 0.3) * 0.5 + 0.5;
                simulationShader.uniforms.origin.value.y = Math.cos(timer * 0.5) * 0.5 + 0.5;
                simulationShader.uniforms.origin.value.z = Math.sin(timer * 0.7) * 0.5 + 0.5;

                // swap
                var tmp = fboParticles.in;
                fboParticles.in = fboParticles.out;
                fboParticles.out = tmp;

                simulationShader.uniforms.tPositions.value = fboParticles.in;
                fboParticles.simulate(fboParticles.out);
                material.uniforms.map.value = fboParticles.out;

                controls.update();

                renderer.render(scene, camera);
            }

        }

    },
    white_dwarf: {
        draw: function () {
            cancelAnimationFrame(idAnimationFrame);
            var container, scene, camera, renderer, controls, stats;
            var keyboard = new THREEx.KeyboardState();
            var clock = new THREE.Clock();
            // custom global variables

            init();
            animate();

            // FUNCTIONS
            function init() {

                // SCENE
                scene = new THREE.Scene();
                // CAMERA
                SCREEN_WIDTH = $('#graphic').width();
                SCREEN_HEIGHT = $('#graphic').height() - 5;
                VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
                camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
                camera.position.set(100, 200, 150);

                if (Detector.webgl)
                    renderer = new THREE.WebGLRenderer({antialias: true});
                else
                    renderer = new THREE.CanvasRenderer();
                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                container = document.getElementById('graphic');
                $('#graphic').html(renderer.domElement);
                // EVENTS
                THREEx.WindowResize(renderer, camera);
                THREEx.FullScreen.bindKey({charCode: 'm'.charCodeAt(0)});
                // CONTROLS
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                // STATS
                stats = new Stats();
                stats.domElement.style.display = 'none';
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.bottom = '0px';
                stats.domElement.style.zIndex = 100;
                $('#graphic').html(renderer.domElement);
                // LIGHT
                var light = new THREE.PointLight(0xffffff);
                light.position.set(0, 250, 0);
                scene.add(light);
                var imagePrefix = "images/textures/skybox_";
                var directions = ["right1", "left2", "top3", "bottom4", "front5", "back6"];
                var imageSuffix = ".png";
                var skyGeometry = new THREE.CubeGeometry(22000, 22000, 22000);

                var materialArray = [];
                for (var i = 0; i < 6; i++)
                    materialArray.push(new THREE.MeshBasicMaterial({
                        map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
                        side: THREE.BackSide
                    }));
                var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
                var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
                scene.add(skyBox);
                var lavaTexture = new THREE.ImageUtils.loadTexture('images/textures/whitedwarf.jpg');
                lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
                var baseSpeed = 0.004;
                var repeatS = repeatT = 4.0;
                var noiseTexture = new THREE.ImageUtils.loadTexture('images/textures/cloud.png');
                noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
                var noiseScale = 1;
                var blendTexture = new THREE.ImageUtils.loadTexture('images/textures/whitedwarf.jpg');
                blendTexture.wrapS = blendTexture.wrapT = THREE.RepeatWrapping;
                var blendSpeed = 0.009;
                // adjust lightness/darkness of blended texture
                var blendOffset = 0.595;
                // texture to determine normal displacement
                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var bumpSpeed = 0.007;
                // magnitude of normal displacement
                var bumpScale = 2.0;
                customUniforms = {
                    baseTexture: {type: "t", value: lavaTexture},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTexture},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeed},
                    bumpScale: {type: "f", value: bumpScale},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };
                var customMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniforms,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent
                    });
                var sphereGeo = new THREE.SphereGeometry(21, 40, 40);
                var moon = new THREE.Mesh(sphereGeo, customMaterial);
                scene.add(moon);
                var customMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: {},
                        vertexShader: document.getElementById('vertexShaderGlow3').textContent,
                        fragmentShader: document.getElementById('fragmentShaderGlow3').textContent,
                        side: THREE.BackSide,
                        blending: THREE.AdditiveBlending,
                        transparent: true
                    });
                var ballGeometry = new THREE.SphereGeometry(27, 32, 16);
                var ball = new THREE.Mesh(ballGeometry, customMaterial);
                scene.add(ball);
            }

            function animate() {
                idAnimationFrame = requestAnimationFrame(animate);
                render();
                update();
            }

            function update() {
                customUniforms.time.value += clock.getDelta();
                controls.update();
                stats.update();
            }

            function render() {
                renderer.render(scene, camera);
            }
        }
    },
    red_dwarf: {
        draw: function () {
            cancelAnimationFrame(idAnimationFrame);
            var container, scene, camera, renderer, controls, stats;
            var keyboard = new THREEx.KeyboardState();
            var clock = new THREE.Clock();
            // custom global variables
            init();
            animate();

            // FUNCTIONS
            function init() {

                // SCENE
                scene = new THREE.Scene();
                // CAMERA
                SCREEN_WIDTH = $('#graphic').width();
                SCREEN_HEIGHT = $('#graphic').height() - 5;
                var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
                camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
                camera.position.set(100, 200, 150);
                // camera.lookAt(scene.position);
                // RENDERER
                if (Detector.webgl)
                    renderer = new THREE.WebGLRenderer({antialias: true});
                else
                    renderer = new THREE.CanvasRenderer();
                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                container = document.getElementById('graphic');
                $('#graphic').html(renderer.domElement);
                // EVENTS
                THREEx.WindowResize(renderer, camera);
                THREEx.FullScreen.bindKey({charCode: 'm'.charCodeAt(0)});
                // CONTROLS
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                // SKYBOX/FOG
                var imagePrefix = "images/textures/skybox_";
                var directions = ["right1", "left2", "top3", "bottom4", "front5", "back6"];
                var imageSuffix = ".png";
                var skyGeometry = new THREE.CubeGeometry(22000, 22000, 22000);

                var materialArray = [];
                for (var i = 0; i < 6; i++)
                    materialArray.push(new THREE.MeshBasicMaterial({
                        map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
                        side: THREE.BackSide
                    }));
                var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
                var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
                scene.add(skyBox);
                // STATS
                stats = new Stats();
                stats.domElement.style.display = "none";
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.bottom = '0px';
                stats.domElement.style.zIndex = 100;
                $('#graphic').html(renderer.domElement);


                var lavaTexture = new THREE.ImageUtils.loadTexture('images/textures/red.jpg');
                lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var baseSpeed = 0.02;
                // number of times to repeat texture in each direction
                var repeatS = repeatT = 4.0;

                // texture used to generate "randomness", distort all other textures
                var noiseTexture = new THREE.ImageUtils.loadTexture('images/textures/cloud.png');
                noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
                // magnitude of noise effect
                var noiseScale = 0.5;

                // texture to additively blend with base image texture
                var blendTexture = new THREE.ImageUtils.loadTexture('images/textures/red.jpg');
                blendTexture.wrapS = blendTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var blendSpeed = 0.02;
                // adjust lightness/darkness of blended texture
                var blendOffset = 0;

                // texture to determine normal displacement
                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var bumpSpeed = 0.007;
                // magnitude of normal displacement
                var bumpScale = 2.0;

                customUniforms = {
                    baseTexture: {type: "t", value: lavaTexture},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTexture},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeed},
                    bumpScale: {type: "f", value: bumpScale},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };

                // create custom material from the shader code above
                //   that is within specially labeled script tags
                var customMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniforms,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent
                    });

                var ballGeometry = new THREE.SphereGeometry(21, 64, 64);
                var ball = new THREE.Mesh(ballGeometry, customMaterial);
                ball.position.set(0, 0, 0);

                scene.add(ball);


                var spriteMaterial = new THREE.SpriteMaterial(
                    {
                        map: new THREE.ImageUtils.loadTexture('images/textures/glow.png'),
                        useScreenCoordinates: false,
                        alignment: THREE.SpriteAlignment.center,
                        color: 0x990000,
                        transparent: false,
                        blending: THREE.AdditiveBlending
                    });
                var sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(75, 75, 1.0);
                ball.add(sprite);

                var spriteMaterial2 = new THREE.SpriteMaterial(
                    {
                        map: new THREE.ImageUtils.loadTexture('images/textures/glow.png'),
                        useScreenCoordinates: false,
                        alignment: THREE.SpriteAlignment.center,
                        color: 0xFF0000,
                        transparent: false,
                        blending: THREE.AdditiveBlending
                    });
                var sprite2 = new THREE.Sprite(spriteMaterial2);
                sprite2.scale.set(40, 40, 1.0);
                ball.add(sprite2);
            }

            function animate() {
                idAnimationFrame = requestAnimationFrame(animate);
                render();
                update();
            }

            function update() {
                customUniforms.time.value += clock.getDelta();
                controls.update();
                stats.update();
            }

            function render() {
                renderer.render(scene, camera);
            }
        }
    },
    brown_dwarf: {
        draw: function () {
            cancelAnimationFrame(idAnimationFrame);
            var container, scene, camera, renderer, controls, stats;
            var keyboard = new THREEx.KeyboardState();
            var clock = new THREE.Clock();
            // custom global variables
            init();
            animate();

            // FUNCTIONS
            function init() {

                // SCENE
                scene = new THREE.Scene();
                // CAMERA
                SCREEN_WIDTH = $('#graphic').width();
                SCREEN_HEIGHT = $('#graphic').height() - 5;
                var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
                camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
                camera.position.set(100, 200, 150);
                // camera.lookAt(scene.position);
                // RENDERER
                if (Detector.webgl)
                    renderer = new THREE.WebGLRenderer({antialias: true});
                else
                    renderer = new THREE.CanvasRenderer();
                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
                container = document.getElementById('graphic');
                $('#graphic').html(renderer.domElement);
                // EVENTS
                THREEx.WindowResize(renderer, camera);
                THREEx.FullScreen.bindKey({charCode: 'm'.charCodeAt(0)});
                // CONTROLS
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                // STATS
                var imagePrefix = "images/textures/skybox_";
                var directions = ["right1", "left2", "top3", "bottom4", "front5", "back6"];
                var imageSuffix = ".png";
                var skyGeometry = new THREE.CubeGeometry(22000, 22000, 22000);

                var materialArray = [];
                for (var i = 0; i < 6; i++)
                    materialArray.push(new THREE.MeshBasicMaterial({
                        map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
                        side: THREE.BackSide
                    }));
                var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
                var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
                scene.add(skyBox);
                stats = new Stats();
                stats.domElement.style.display = "none";
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.bottom = '0px';
                stats.domElement.style.zIndex = 100;
                $('#graphic').html(renderer.domElement);
                var lavaTexture = new THREE.ImageUtils.loadTexture('images/textures/brown.jpg');
                lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var baseSpeed = 0.01;
                // number of times to repeat texture in each direction
                var repeatS = repeatT = 4.0;

                // texture used to generate "randomness", distort all other textures
                var noiseTexture = new THREE.ImageUtils.loadTexture('images/textures/cloud.png');
                noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
                // magnitude of noise effect
                var noiseScale = 0.1;

                // texture to additively blend with base image texture
                var blendTexture = new THREE.ImageUtils.loadTexture('images/textures/brown.jpg');
                blendTexture.wrapS = blendTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var blendSpeed = 0.01;
                // adjust lightness/darkness of blended texture
                var blendOffset = 0;

                // texture to determine normal displacement
                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var bumpSpeed = 0.007;
                // magnitude of normal displacement
                var bumpScale = 2.0;

                customUniforms = {
                    baseTexture: {type: "t", value: lavaTexture},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTexture},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeed},
                    bumpScale: {type: "f", value: bumpScale},
                    alpha: {type: "f", value: 1.0},
                    time: {type: "f", value: 1.0}
                };

                // create custom material from the shader code above
                //   that is within specially labeled script tags
                var customMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniforms,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent
                    });

                var ballGeometry = new THREE.SphereGeometry(30, 64, 64);
                var ball = new THREE.Mesh(ballGeometry, customMaterial);
                ball.position.set(0, 0, 0);

                scene.add(ball);
            }

            function animate() {
                idAnimationFrame = requestAnimationFrame(animate);
                render();
                update();
            }

            function update() {
                customUniforms.time.value += clock.getDelta();
                controls.update();
                stats.update();
            }

            function render() {
                renderer.render(scene, camera);
            }
        }
    }
};

function showBigPicture(picName, starName) {
    $('#ImageContainer').hide(0);
    $('#ImageContainer').html("<img width='100%' src='images/stars/" + starName + "/" + picName + ".jpg'>");
    $('#ImageContainer').show(100);
}
function showBigPictureTheory(picName) {
    $('#ImageContainerTheory').hide(0);
    $('#ImageContainerTheory').html("<img width='70%' src='images/theoryImg/" + picName + ".jpg'>");
    $('#ImageContainerTheory').show(100);
}
function importStarPage(starName) {
    $('#main').load(starName);
}