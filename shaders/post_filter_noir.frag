#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_texture;
uniform vec4 u_FogColor;

varying vec4 v_color;
varying vec2 v_texCoords;
varying float v_fogFactor;
varying float v_eyeDistance;

vec4 tex_Color;
float val;

void main() {
	tex_Color = texture2D( u_texture, v_texCoords );
	val = (tex_Color.r + tex_Color.g + tex_Color.b) * 0.334;
	gl_FragColor = vec4(val, val, val, 1.0);
}