/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        outlaw: {
          light: '#fef2f2',
          DEFAULT: '#dc2626',
          dark: '#991b1b'
        },
        law: {
          light: '#f3f4f6',
          DEFAULT: '#1f2937',
          dark: '#111827'
        }
      }
    }
  },
  plugins: []
};
