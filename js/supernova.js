steps.supernova = {
    myImage: 'img/supernova1.jpg',
    mainLabel: 'Наднова зірка',
    infoLeft: 'Наднові зірки - зірки, блиск яких при спалаху збільшується на десятки зоряних величин протягом декількох діб. У максимумі блиску наднова порівнянна по яскравості з усією галактикою, в якій вона спалахнула, і навіть може перевершувати її. ',
    infoRight: '<p> Приклади:</p> <p>SN 1972E </p> <p>SN 1572</p> <p>SN 1604 (Сверхновая Кеплера)</p> <p> SN 2006gy</p>',
    temperature: '100 billion K',
    light: '5*10^25 LSol',
    cell1: '',
    cell2: '',
    cell3: '',
    cell4: '',
    cell5: '',
    cell6: '',
    draw: function () {

        container = {};
        stats = {};

        camera = {};
        scene = {};
        renderer = {};

        mouseX = 0, mouseY = 0;

        windowHalfX = $('#graphic').width();
        windowHalfY = ($('#graphic').height() - 5);


        shaderMaterial = {};

        numParticles = gup('particles') || 256;

        composerVel = {};
        composerPos = {};
        velPass = {};
        posPass = {};

        init();
        animate();

        function init() {

            container = document.getElementById('graphic');
            scene = new THREE.Scene();
            var ambient = new THREE.AmbientLight(0x444444);
            scene.add(ambient);

            camera = new THREE.PerspectiveCamera(45,  windowHalfX / windowHalfY, 1, 1000000);
            camera.position.z = 500;
            camera.lookAt(scene.position);
            scene.add(camera);


            var attributes = {

                size: { type: 'f', value: [] },
                customColor: { type: 'c', value: [] },
                aPoints: { type: 'v2', value: [new THREE.Vector2()] }

            };

            var uniforms = {

                amplitude: { type: "f", value: 1.0 },
                color: { type: "c", value: new THREE.Color(0xffffff) },
                texture: { type: "t", value: null },
                texture_point: { type: "t", value: THREE.ImageUtils.loadTexture("img/supernova/assets/textures/spark1.png") }

            };

            shaderMaterial = new THREE.ShaderMaterial({

                uniforms: uniforms,
                attributes: attributes,
                vertexShader: document.getElementById('vertexshaderP').textContent,
                fragmentShader: document.getElementById('fragmentshaderP').textContent,
                blending: THREE.AdditiveBlending,
                depthTest: false,
                depthWrite:false,
                transparent: true


            });


            var geometry = new THREE.Geometry();

            for (var i = 0; i < numParticles * numParticles; i++) {

                geometry.vertices.push(new THREE.Vector3());

            }

            sphere = new THREE.ParticleSystem(geometry, shaderMaterial);
            sphere.sortParticles = false;

            var vertices = sphere.geometry.vertices;
            var values_size = attributes.size.value;
            var values_color = attributes.customColor.value;


            for (var v = 0; v < vertices.length; v++) {

                values_size[ v ] = 10;
                values_color[ v ] = new THREE.Color(0xffaa00);

                if (vertices[ v ].x < 0)
                    THREE.ColorConverter.setHSV(values_color[ v ], 0.5 + 0.1 * ( v / vertices.length ), 0.7, 0.9);
                else
                    THREE.ColorConverter.setHSV(values_color[ v ], 0.0 + 0.1 * ( v / vertices.length ), 0.9, 0.9);


            }
            var square = numParticles;
            var particles = [], d = 1 / square;
            for (var y = d / 2; y < 1; y += d) {
                for (var x = d / 2; x < 1; x += d) {
                    particles.push(new THREE.Vector2(x, y));

                }
            }

            attributes.aPoints.value = particles;


            scene.add(sphere);


            renderer = new THREE.WebGLRenderer();//{ antialias: false, alpha: true });
            renderer.autoClear = true;
            renderer.setSize(windowHalfX,  windowHalfY);
            container.appendChild(renderer.domElement);


            var settingsVel={
                useRGBA: true,
                wrapS: THREE.RepeatWrapping,
                wrapT: THREE.RepeatWrapping,
                minFilter: THREE.NearestFilter,
                magFilter: THREE.NearestFilter,
                format: THREE.RGBFormat,
                type: THREE.FloatType,
                stencilBuffer: false
            };

            var settingsPos={
                useRGBA: true,
                wrapS: THREE.RepeatWrapping,
                wrapT: THREE.RepeatWrapping,
                minFilter: THREE.NearestFilter,
                magFilter: THREE.NearestFilter,
                format: THREE.RGBAFormat,
                type: THREE.FloatType,
                stencilBuffer: false
            };

            composerVel = new WAGNER.Composer(renderer, settingsVel);
            composerPos = new WAGNER.Composer(renderer, settingsPos);

            velPass = new WAGNER.VelocityPass();
            posPass = new WAGNER.PositionPass();

            document.addEventListener('mousemove', onDocumentMouseMove, false);
            window.addEventListener('resize', onWindowResize, false);
            onWindowResize();



            composerPos.reset();
            composerVel.reset();

        }

        function onWindowResize() {

            var s = 1,
                w = windowHalfX,
                h =  windowHalfY;

            renderer.setSize(s * w, s * h);
            camera.projectionMatrix.makePerspective(45, w / h, camera.near, camera.far);
            composerPos.setSize(numParticles, numParticles);
            composerVel.setSize(numParticles, numParticles);


        }


        function onDocumentMouseMove(event) {
//
//            mouseX = ( event.clientX - windowHalfX );
//            mouseY = ( event.clientY - windowHalfY );

        }

        function animate() {

            requestAnimationFrame(animate);
            render();

        }
        var ready = false;
        function render() {

            if (composerPos.copyPass.isLoaded() && composerVel.copyPass.isLoaded() && !ready) {

                ready = true;
                composerVel.setSource(velPass.temptexture);
                composerPos.setSource(posPass.temptexture);

            }
            if(!ready) return;


            camera.position.x += ( mouseX - camera.position.x ) * .05;
            camera.position.y += ( - mouseY - camera.position.y ) * .05;
            camera.lookAt(scene.position);


            composerVel.pass(velPass, {tPos: composerPos.output});
            composerPos.pass(posPass, {tVel: composerVel.output});
            shaderMaterial.uniforms.texture.value = composerPos.output;
            renderer.render(scene, camera);

        }

        function gup(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(window.location.href);
            if (results == null)
                return "";
            else
                return results[1];
        }
    }

};