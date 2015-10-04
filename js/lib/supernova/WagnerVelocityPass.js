WAGNER.VelocityPass = function() {

    WAGNER.Pass.call( this );
    WAGNER.log( 'VelocityPass Pass constructor' );
    var width =numParticles;
    var height =numParticles;
    var n = width * height;

    var data = new Float32Array(n*4);

    for (var k = 0; k < (n*4); k+=4) {

        data[k+0]=(Math.random() * 0.01) - 0.005;
        data[k+1]=(Math.random() * 0.01) - 0.005;
        data[k+2]=(Math.random() * 0.01) - 0.005;
        data[k+3]=(Math.random() * 0.01) - 0.005;

    }

    this.temptexture = new THREE.DataTexture( data, width, height, THREE.RGBAFormat, THREE.FloatType );
    this.temptexture.minFilter = THREE.NearestFilter;
    this.temptexture.magFilter = THREE.NearestFilter;
    this.temptexture.generateMipmaps = false;
    this.temptexture.needsUpdate = true;
    this.loadShader( 'velocity-fs.glsl',function(){

        this.shader.depthWrite = false;
        this.shader.depthTest = false;
        this.shader.transparent = true;
        this.shader.uniforms.tVel.value= this.temptexture;
    } );

}

WAGNER.VelocityPass.prototype = new WAGNER.Pass();

WAGNER.VelocityPass.prototype.run = function( c,  uniforms ) {

    this.shader.uniforms.tPos.value= uniforms.tPos;
    this.shader.uniforms.tVel.value= c.output;
    c.pass( this.shader );

}