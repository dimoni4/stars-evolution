WAGNER.PositionPass = function() {

    WAGNER.Pass.call( this );
    WAGNER.log( 'PositionPass Pass constructor' );
    //DATA POSITION
    var width = numParticles;
    var height =numParticles;
    var n = width * height;
    var data = new Float32Array( n * 4 ),radius, q, l,xp,yp,zp;

    for (var k = 0; k < (n*4); k+=4) {
        radius=Math.random()*800+800;
        q=Math.random()*Math.PI*2;
        l=Math.random()*2-1
        xp=(Math.cos(q)*Math.sqrt(1-Math.pow(l,2)))*radius;
        yp=(Math.sin(q)*Math.sqrt(1-Math.pow(l,2)))*radius;
        zp=l*radius;
        data[k+0]=xp;
        data[k+1]=yp;
        data[k+2]=zp;
        data[k+3]=1.0;
    }

    this.temptexture = new THREE.DataTexture( data, width, height, THREE.RGBAFormat, THREE.FloatType );
    this.temptexture.minFilter = THREE.NearestFilter;
    this.temptexture.magFilter = THREE.NearestFilter;
    this.temptexture.generateMipmaps = false;
    this.temptexture.needsUpdate = true;
    this.loadShader( 'position-fs.glsl',function(){
        this.shader.depthWrite = false;
        this.shader.depthTest = false;
        this.shader.transparent = true;
        this.shader.uniforms.tPos.value= this.temptexture;
    } );

}

WAGNER.PositionPass.prototype = new WAGNER.Pass();

WAGNER.PositionPass.prototype.run = function( c, uniforms ) {
    this.shader.uniforms.tVel.value= uniforms.tVel;
    this.shader.uniforms.tPos.value= c.output;
    c.pass(this.shader);

}