#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_texture;
uniform vec4 u_FogColor;

varying vec4 v_color;
varying vec2 v_texCoords;
varying float v_fogFactor;
varying float v_eyeDistance;

vec4 color;
float warmth;
float rRatio;
float gRatio;
float r;
vec4 outColor;

void main() {
	color = texture2D( u_texture, v_texCoords );

	warmth = 0.5 + (((color.r+color.g)*0.5) - color.b) * 0.5;

	r = ((color.r+color.g)*0.5);
	gRatio = color.g / r;
	rRatio = color.r / r;
	outColor.b = (color.r + color.g) * 0.5;
	outColor.r = color.b * rRatio;
	outColor.g = color.b * gRatio;
	outColor.a = 1.0;

 	gl_FragColor = outColor;
}