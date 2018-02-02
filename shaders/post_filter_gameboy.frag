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
float v;

void main() {
	tex_Color = texture2D( u_texture, v_texCoords );

	v = sqrt((tex_Color.r + tex_Color.g + tex_Color.b)*0.333);
	v += 0.2;
	v = floor(v * 4.0) / 4.0;
	v = v*v;

	gl_FragColor = vec4(v, v, v, 1.0);
}