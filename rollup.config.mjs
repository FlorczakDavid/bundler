import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

export default {
	input: {
		view:'src/views/MyView.vue',
		cube:'src/views/MyThreeView.vue'
	},
	output: {
		entryFileNames: 'entry-[name].js',
		format: 'esm',
		dir: './'
	},
	plugins: [
		vue(),
		postcss(),
		terser()	
	]
};
