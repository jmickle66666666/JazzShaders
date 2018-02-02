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
float xcurve;
vec4 tv_Color;

void main() {
	xcurve = sin(v_texCoords.x * 3.1415);

	tex_Color = texture2D( u_texture, v_texCoords );
	tv_Color = texture2D( u_texture, v_texCoords );

	tv_Color.r *= 0.5 + sin(v_texCoords.y * 512.0) * 0.5;
	tv_Color.g *= 0.5 + sin((v_texCoords.y + 0.3) * 512.0) * 0.5; 
	tv_Color.b *= 0.5 + sin((v_texCoords.y + 0.6) * 512.0) * 0.5;

	tex_Color = mix(tex_Color, tv_Color, 1.0 - xcurve);

	gl_FragColor = tex_Color;
}