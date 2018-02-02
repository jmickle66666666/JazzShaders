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
float warmth;
float value;

void main() {
	tex_Color = texture2D( u_texture, v_texCoords );
	warmth = 0.5 + (((tex_Color.r+tex_Color.g)*0.5) - tex_Color.b) * 0.5;
	value = (tex_Color.r + tex_Color.g + tex_Color.b) * 0.333;

	value = warmth * value;

 	gl_FragColor = vec4(value, value, value, 1.0);
}