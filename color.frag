#ifdef GL_ES
precision mediump float;
#endif

void main() {
    vec3 color = vec3(.4, .9, .1);
    gl_FragColor = vec4(color, .5);
}