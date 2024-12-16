import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

export default {
	input: {
		view:'src/views/MyView.vue',
		'adress-searcher':'src/components/adressSearcher.vue'
	},
	output: {
		entryFileNames: 'entry-[name].js',
		format: 'esm'
	},
	plugins: [
		vue(),
		postcss(),
		terser()	
	]
};
