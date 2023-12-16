import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		dts(),
		typescript2({
			check: false,
			include: ['src/components/**/*.vue'],
			tsconfigOverride: {
				compilerOptions: {
					outDir: 'dist',
					sourceMap: true,
					declaration: true,
					declarationMap: true,
				},
			},
			exclude: ['vite.config.ts']
		})
	],
	build: {
		cssCodeSplit: true,
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: 'src/components/vuetage.ts',
			name: 'vuetage',
			formats: ['es', 'cjs', 'umd'],
			fileName: format => `vuetage.${format}.js`
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			input: {
				main: path.resolve(__dirname, 'src/components/main.ts')
			},
			external: ['vue'],
			output: {
				assetFileNames: 'vuetage.css',
				exports: 'named',
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
