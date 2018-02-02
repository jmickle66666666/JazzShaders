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
vec4 tex_Color2;
float val1;
float val2;

void main() {
	tex_Color = texture2D( u_texture, v_texCoords );
	tex_Color2 = texture2D( u_texture, vec2(v_texCoords.x + 0.05, v_texCoords.y) );
	val1 = (tex_Color.r + tex_Color.g + tex_Color.b) * 0.333;
	val2 = (tex_Color2.r + tex_Color2.g + tex_Color2.b) * 0.333;
	tex_Color.rgb *= 1.0 - abs(val1 - val2);
	gl_FragColor = tex_Color;
}