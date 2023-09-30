import react from '@vitejs/plugin-react-swc'
import {defineConfig, Plugin} from 'vite'
// eslint-disable-next-line rubrik/no-restricted-imports-relative

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      plugins: [
        [
          '@swc/plugin-emotion',
          {
            sourceMap: true,
          },
        ],
      ],
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
}))
