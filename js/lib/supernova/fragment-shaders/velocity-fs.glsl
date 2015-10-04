    varying vec2 vUv;
    uniform sampler2D tVel;
    uniform sampler2D tPos;
    void main(void) {


    float mass = texture2D( tVel, vUv).a;
    vec3 p = texture2D( tPos, vUv).rgb;
    vec3 v = texture2D( tVel, vUv).rgb;
    vec3 acc = vec3(-0.0001*p.x,-0.0001*p.y,-0.0001*p.z); // Centripetal force
    vec3 ayAcc = 0.001*normalize(cross(vec3(0, 1 ,0),p)); // Angular force
    vec3 axAcc = 0.001*normalize(cross(vec3(1, 0 ,0),p)); // Angular force
    vec3 azAcc = 0.0*normalize(cross(vec3(0, 0 ,1),p)); // Angular force


    vec3 new_v = v + (acc+ayAcc+axAcc+azAcc);
    gl_FragColor = vec4(new_v, 1.0 );
    }