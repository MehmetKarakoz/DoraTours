/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',  // Angular dosyalarındaki tüm HTML ve TypeScript dosyalarını tarar
    './src/**/*.css',  // Eğer projede ekstra CSS dosyaları varsa onları da ekler
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Koyu altın sarı rengi
      },
    },
  },
  plugins: [],
}
