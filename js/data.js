var stars = {
    red_gigant: {
        myImage: 'img/red_giant_gif.gif',
        mainLabel: 'Червоний гігант',
        infoLeft: 'Червоні гіганти і надгіганти - зірки пізніх спектральних класів з високою світністю і протяжними оболонкамиами.',
        infoRight: '<p> Приклади:</p> <p>Mira</p> <p>Albireo</p> <p>4 Cassiopeiae</p>',
        temperature: '3000−5000K',
        light: ' 10^5-10^6 Lsol',


        draw: function () {
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
        myImage: 'img/1.jpg',
        mainLabel: 'Протозоря',
        infoLeft: 'Протозоря - зірка на завершальному етапі свого формування, аж до моменту загоряння термоядерних реакцій в ядрі, після якого стиск протозірки припиняється і вона стає зіркою головної послідовності..',
        infoRight: '<p>Приклади:</p> <p>V1647 Orionis</p>',
        temperature: '10-20K',
        light: '~100 LSol',


        draw: function () {
            SCREEN_WIDTH = $('#graphic').width();
            SCREEN_HEIGHT = $('#graphic').height() - 5;
            var container, scene, camera, renderer, controls, stats, camera2;
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

                VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
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
                // STATS
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
                var lavaTexture = new THREE.ImageUtils.loadTexture('images/textures/proto.jpg');
                lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
                var lavaTextureCircle = new THREE.ImageUtils.loadTexture('images/textures/protocircle2.png');
                lavaTextureCircle.wrapS = lavaTextureCircle.wrapT = THREE.RepeatWrapping;
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


                // texture to additively blend with base image texture
                var blendTexture = new THREE.ImageUtils.loadTexture('images/textures/proto.jpg');
                blendTexture.wrapS = blendTexture.wrapT = THREE.RepeatWrapping;
                var blendTextureCircle = new THREE.ImageUtils.loadTexture('images/textures/protocircle2.png');
                blendTextureCircle.wrapS = blendTextureCircle.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var blendSpeed = 0.01;
                // adjust lightness/darkness of blended texture
                var blendOffset = 0.25;

                // texture to determine normal displacement
                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var bumpSpeed = 0.007;
                // magnitude of normal displacement
                var bumpScale = 10.0;

                var bumpSpeedCircle = 0.0001;
                // magnitude of normal displacement
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
                customUniformsCircle = {
                    baseTexture: {type: "t", value: lavaTextureCircle},
                    baseSpeed: {type: "f", value: baseSpeed},
                    repeatS: {type: "f", value: repeatS},
                    repeatT: {type: "f", value: repeatT},
                    noiseTexture: {type: "t", value: noiseTexture},
                    noiseScale: {type: "f", value: noiseScale},
                    blendTexture: {type: "t", value: blendTextureCircle},
                    blendSpeed: {type: "f", value: blendSpeed},
                    blendOffset: {type: "f", value: blendOffset},
                    bumpTexture: {type: "t", value: bumpTexture},
                    bumpSpeed: {type: "f", value: bumpSpeedCircle},
                    bumpScale: {type: "f", value: bumpScaleCircle},
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
                var customCircleMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: customUniformsCircle,
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent

                    }
                );
                // var circleTexture = THREE.ImageUtils.loadTexture( 'images/textures/circle.jpg' );
                //  var customMaterialCircle = new THREE.MeshBasicMaterial( { map: circleTexture } );
                var discGeometry = new THREE.CircleGeometry(130, 90, 20, 20);
                // var discGeometry2 = new THREE.CircleGeometry(140,90,20,20);
                // var discGeometry3 = new THREE.CircleGeometry(120,90,20,20);
                var disc = new THREE.Mesh(discGeometry, customCircleMaterial);
                var ballGeometry = new THREE.SphereGeometry(20, 64, 64);
                // var disc2 = new THREE.Mesh(discGeometry2, customCircleMaterial);
                //  var disc3 = new THREE.Mesh(discGeometry3, customCircleMaterial);

                disc.position.set(0, 0, -2.5);
                // disc3.position.set(0,0,2.5);
                //   disc2.position.set(0,0,0);
                scene.add(disc);
                // scene.add(disc2);
                //   scene.add(disc3);


                var ball = new THREE.Mesh(ballGeometry, customMaterial);
                ball.position.set(0, 0, 0);
                scene.add(ball);

                ball.position.set(0, 0, 0);


//                var customMaterialGlow = new THREE.ShaderMaterial(
//                    {
//                        uniforms: {  },
//                        vertexShader:   document.getElementById( 'vertexShaderGlow'   ).textContent,
//                        fragmentShader: document.getElementById( 'fragmentShaderGlow' ).textContent,
//                        side: THREE.BackSide,
//                        blending: THREE.AdditiveBlending,
//                        transparent: true
//                    }   );
//
//                var glowGeometry = new THREE.SphereGeometry( 80, 32, 16 );
//                var glow = new THREE.Mesh( glowGeometry, customMaterialGlow );
//                scene.add( glow );
                // SUPER SIMPLE GLOW EFFECT
                // use sprite because it appears the same from all angles
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
                ball.add(sprite2); // this centers the glow at the mesh
            }


            function animate() {
                idAnimationFrame = requestAnimationFrame(animate);
                render();
                update();
            }

            function update() {
                customUniforms.time.value += clock.getDelta();
                customUniformsCircle.time.value = customUniforms.time.value;
                controls.update();
                stats.update();
            }

            function render() {
                renderer.render(scene, camera);
            }
        }
    },
    blue_sverx_giant: {
        myImage: 'img/2.jpg',
        mainLabel: 'Блакитний надгігант',
        infoLeft: 'Блакитний надгігант - тип понад гігантських зірок спектральних класів A і B. Це молоді дуже гарячі і яскраві зірки з температурою поверхні 20 000-50 000 ° C.',
        infoRight: '<p> Приклади:</p> <p>Ригель</p> <p>Гамма Парусов</p> <p>Альфа Жирафа</p> <p>Дзета Ориона</p> <p>Тау Большого Пса</p> <p>Дзета Кормы</p>',
        temperature: '10,000–50,000 K',
        light: '105−106 LSol',

        draw: function () {
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

                var lavaTexture = new THREE.ImageUtils.loadTexture('images/textures/blue_giant.png');
                lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;

                var baseSpeed = 0.02;
                // number of times to repeat texture in each direction
                var repeatS = repeatT = 1.0;

                // texture used to generate "randomness", distort all other textures
                var noiseTexture = new THREE.ImageUtils.loadTexture('images/textures/cloud.png');
                noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
                // magnitude of noise effect
                var noiseScale = 1;

                // texture to additively blend with base image texture


                // texture to additively blend with base image texture
                var blendTexture = new THREE.ImageUtils.loadTexture('images/textures/blue_giant.png');
                blendTexture.wrapS = blendTexture.wrapT = THREE.RepeatWrapping;
                // var blendTextureCircle = new THREE.ImageUtils.loadTexture('images/textures/protocircle2.png');
                // blendTextureCircle.wrapS = blendTextureCircle.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var blendSpeed = 0.01;
                // adjust lightness/darkness of blended texture
                var blendOffset = 0.005;

                // texture to determine normal displacement
                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var bumpSpeed = 0.007;
                // magnitude of normal displacement
                var bumpScale = 10.0;

//                var bumpSpeedCircle = 0.0001;
//                // magnitude of normal displacement
//                var bumpScaleCircle = 15.0;


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

                // var moonTexture = THREE.ImageUtils.loadTexture( 'images/textures/blue_giant.png' );
                // var moonMaterial = new THREE.MeshBasicMaterial( { map: moonTexture } );
                var moon = new THREE.Mesh(sphereGeo, customMaterial);
                scene.add(moon);

                // create custom material from the shader code above
                //   that is within specially labeled script tags
                var customMaterial = new THREE.ShaderMaterial(
                    {
                        uniforms: {},
                        vertexShader: document.getElementById('vertexShaderGlow').textContent,
                        fragmentShader: document.getElementById('fragmentShaderGlow').textContent,
                        side: THREE.BackSide,
                        blending: THREE.AdditiveBlending,
                        transparent: true
                    });

                var ballGeometry = new THREE.SphereGeometry(77, 32, 16);
                var ball = new THREE.Mesh(ballGeometry, customMaterial);
                scene.add(ball);

//                var spriteMaterial = new THREE.SpriteMaterial(
//                    {
//                        map: new THREE.ImageUtils.loadTexture('images/textures/glow.png'),
//                        useScreenCoordinates: false,
//                        alignment: THREE.SpriteAlignment.center,
//                        color: 0xFFFFFF,
//                        transparent: false,
//                        blending: THREE.AdditiveBlending
//                    });
//                var sprite = new THREE.Sprite(spriteMaterial);
//                sprite.scale.set(440, 440, 1.0);
//                ball.add(sprite);
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
    blue_giant: {
        myImage: 'img/4.jpg',
        mainLabel: 'Блакитний гігант',
        infoLeft: 'Блакитний гігант - зірка спектрального класу O або B. Блакитні гіганти - молоді гарячі масивні зірки, які на діаграмі Герцшпрунга - Рассела розміщуються в області головної послідовності.',
        infoRight: '<p> Приклади:</p> <p>Alcyone</p>',
        temperature: '> 30,000 K',
        light: '10 LSol',

        draw: function () {
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
                // adjust lightness/darkness of blended texture
                var blendOffset = 0.005;
                // texture to determine normal displacement
                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var bumpSpeed = 0.007;
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
                        vertexShader: document.getElementById('vertexShaderGlow').textContent,
                        fragmentShader: document.getElementById('fragmentShaderGlow').textContent,
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
        myImage: 'img/6.jpg',
        mainLabel: 'Нейтронна зоря',
        infoLeft: 'Є одним з кінцевих продуктів еволюції зірок, що складається, в основному, з нейтронної серцевини, покритої порівняно тонкої (~1 км) корою речовини у вигляді важких атомних ядер і електронів. Мають надзвичайно високу швидкістю обертання, до тисячі обертів на секунду. ',
        infoRight: '<p> Приклади:</p> <p> PSR B1509-58</p> <p> LGM-1</p> <p> SWIFT J1756.9-2508 </p>',
        temperature: '6 x 105 K',
        light: '105−106LSol',

        draw: function () {
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
                var lavaTexture = new THREE.ImageUtils.loadTexture('images/textures/neutron2.jpg');
                lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
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
                var blendTexture = new THREE.ImageUtils.loadTexture('images/textures/neutron2.jpg');
                blendTexture.wrapS = blendTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var blendSpeed = 0.01;
                // adjust lightness/darkness of blended texture
                var blendOffset = 0.2;

                // texture to determine normal displacement
                var bumpTexture = noiseTexture;
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                // multiplier for distortion speed
                var bumpSpeed = 0.007;
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

                var ballGeometry = new THREE.SphereGeometry(50, 64, 64);
                var ball = new THREE.Mesh(ballGeometry, customMaterial);
                ball.position.set(0, 0, 0);

                scene.add(ball);
//                var spriteMaterial = new THREE.SpriteMaterial(
//                    {
//                        map: new THREE.ImageUtils.loadTexture('images/textures/glowN.png'),
//                        useScreenCoordinates: true,
//                        alignment: THREE.SpriteAlignment.center,
//                        color: 0xFFFF00,
//                        transparent: false,
//                        blending: THREE.AdditiveBlending
//                    });
//                var sprite = new THREE.Sprite(spriteMaterial);
//                sprite.scale.set(240, 240, 1.0);
//                ball.add(sprite);
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
    sun_type: {
        myImage: 'img/sun_type.jpg',
        mainLabel: 'Зірки сонячного типу',
        infoLeft: 'Зірки сонячного типу - це категорія зірок, більш-менш схожих на Сонце. Вивчення цих зірок вельми важливо для кращого розуміння властивостей Сонця, його унікальності або, навпаки, типовості серед інших зірок, а також можливості існування населених планет біля інших зірок.',
        infoRight: '<p> Приклади:</p> <p> Тау Кита</p> <p> 40 Эридана A</p> <p> Солнце</p> <p>Дельта Павлина	</p>',
        temperature: '5778 K ',
        light: '3.75×1028 lm',
        cell1: '',
        cell2: '',
        cell3: '',
        cell4: '',
        cell5: '',
        cell6: '',
        draw: function () {
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
        myImage: 'img/planet_remnant.jpg',
        mainLabel: 'Планетарна туманність',
        infoLeft: 'Планетарна туманність - астрономічний об"єкт, що складається з іонізованої газової оболонки і центральної зірки, білого карлика. Планетарні туманності утворюються при скиданні зовнішніх шарів червоних гігантів і надгігантів на завершальній стадії їх еволюції.',
        infoRight: '<p> Приклади:</p> <p>NGC 7354</p> <p>NGC 7662</p> <p>Туманность Кошачий Глаз</p> <p>Эйбелл 39</p>',
        temperature: '10 000 К',
        light: '105−106LSol',
        cell1: '',
        cell2: '',
        cell3: '',
        cell4: '',
        cell5: '',
        cell6: '',
        draw: function () {
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
        myImage: 'img/white dwarf.jpg',
        mainLabel: 'Білий карлик',
        infoLeft: ' Білі карлики є компактні зірки з масами, порівнянними з масою Сонця, але з радіусами в 100 разів менше. За поширеністю білі карлики складають, за різними оцінками, 3-10% зоряного населення нашої Галактики.',
        infoRight: '<p> Приклади:</p> <p>IK Pegasi</p> <p>BPM 37093</p> <p>G29-38 </p>',
        temperature: '1000 K',
        light: '1—2·108 К ',
        cell1: '',
        cell2: '',
        cell3: '',
        cell4: '',
        cell5: '',
        cell6: '',
        draw: function () {
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
                        vertexShader: document.getElementById('vertexShaderGlow').textContent,
                        fragmentShader: document.getElementById('fragmentShaderGlow').textContent,
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
        myImage: 'img/red_dwarf.jpg',
        mainLabel: 'Червоний карлик',
        infoLeft: 'Червоний карлик - маленька і відносно холодна зірка головної послідовності, що має спектральний клас М або верхній К.',
        infoRight: '<p> Приклади:</p> <p>Проксима Центавра</p> <p>Звезда Барнарда</p> <p>Вольф 359</p> <p>Глизе 581</p> <p>Росс 128</p>',
        temperature: '4000 K.',
        light: '3.75×100 lm',
        cell1: '',
        cell2: '',
        cell3: '',
        cell4: '',
        cell5: '',
        cell6: '',
        draw: function () {
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
        myImage: 'img/brown_dwarf.jpg',
        mainLabel: 'Коричневий карлик',
        infoLeft: 'Коричневі або бурі карлики - суб зоряні об"єкти після вичерпання запасів ядер легких елементів, термоядерні реакції в їхніх надрах припиняються, після чого вони відносно швидко остигають, перетворюючись на планетоподобні об"єкти.',
        infoRight: '<p> Приклади:</p> <p>GD 165 B</p> <p>2M1207</p> <p>OTS 44 </p>',
        temperature: '1000 K',
        light: '~10 LSol',
        cell1: '',
        cell2: '',
        cell3: '',
        cell4: '',
        cell5: '',
        cell6: '',
        draw: function () {
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
var StarsImages = {
    proto1: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/protostar/proto1.jpg'>");
        }
    },
    proto2: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/protostar/proto2.jpg'>");
        }
    },
    proto3: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/protostar/proto4.jpg'>");
        }
    },
    proto4: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/protostar/proto9.jpg'>");
        }
    },
    proto5: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/protostar/proto10.jpg'>");
        }
    },
    proto6: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/protostar/proto6.jpg'>");
        }
    },
    bsg1: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/bluesupergiant/bsg1.jpg'>");
        }
    },
    bsg2: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/bluesupergiant/bsg2.jpg'>");
        }
    },
    bsg3: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/bluesupergiant/bsg3.jpg'>");
        }
    },
    bsg4: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/bluesupergiant/bsg4.gif>");
        }
    },
    bsg5: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/bluesupergiant/bsg5.jpg'>");
        }
    },
    supernova1: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/supernova/sp1.jpg'>");
        }
    },
    supernova2: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/supernova/sp2.jpg'>");
        }
    },
    supernova3: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/supernova/sp3.jpg'>");
        }
    },
    supernova4: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/supernova/sp4.jpg'>");
        }
    },
    supernova5: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/supernova/sp5.jpg'>");
        }
    },
    supernova6: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/supernova/sp6.jpg'>");
        }
    },
    supernova7: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/supernova/sp7.jpg'>");
        }
    },
    supernova8: {
        drawImage: function () {
            var ImageContainer = $('#ImageContainer');
            ImageContainer.empty();
            ImageContainer.html("<img width='80%' src='images/stars/supernova/sp8.jpg'>");
        }
    }
}