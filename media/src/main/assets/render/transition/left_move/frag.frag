precision mediump float;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;
varying vec2 vCoordinate;
uniform float uOffset;
uniform int uUseSampler;
void main(){
    vec2 newCoordinate = vec2(vCoordinate.x + uOffset, vCoordinate.y);

    if (uUseSampler == 0) {
        gl_FragColor = texture2D(uSampler, newCoordinate);
    } else {
        gl_FragColor = texture2D(uSampler2, newCoordinate);
    }
}