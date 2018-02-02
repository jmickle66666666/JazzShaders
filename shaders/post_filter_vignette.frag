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
float ycurve;
float curveTotal;
float val;

void main() {
	xcurve = sin(v_texCoords.x * 3.1415);
	ycurve = sin(v_texCoords.y * 3.1415);
	curveTotal = (xcurve + ycurve) * 0.5;

	tex_Color = texture2D( u_texture, v_texCoords );

	val = (tex_Color.r + tex_Color.g + tex_Color.b) * 0.334;
	vec3 noir = vec3(val, val, val);
	tex_Color.rgb = mix(tex_Color.rgb, noir, 1.0 - curveTotal); 
	tex_Color.rgb *= curveTotal;

	gl_FragColor = tex_Color;
}