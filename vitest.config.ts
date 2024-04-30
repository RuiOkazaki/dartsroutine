import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,ts}'],
      exclude: [],
    },
  },
});
