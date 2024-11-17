import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';

export default {
	input: 'src/components/MyView.vue',
	output: {
		file: 'MyBundledView.js',
		format: 'esm'
	},
	plugins: [
		vue(),
		postcss()	
	]
};
