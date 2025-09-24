import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "node:path";

export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5271',
                changeOrigin: true,
                secure: false,
            },
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, './src/styles'),
        },
    },
});
