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
float r;
float rg;
float rb;

void main() {
	tex_Color = texture2D( u_texture, v_texCoords );

	rg = tex_Color.g / tex_Color.r;
	rb = tex_Color.b / tex_Color.r;
	r = sqrt(tex_Color.r);
	r = floor(r * 8.0) / 8.0;
	r = r*r;

	gl_FragColor = vec4(r, r * rg, r * rb, 1.0);
}