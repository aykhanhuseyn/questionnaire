import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import viteTSconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [viteTSconfigPaths(), react()],
	resolve: {
		alias: [{ find: '@app', replacement: path.resolve(__dirname, 'src') }],
	},
	define: {
		'process.env': process.env,
	},
});
