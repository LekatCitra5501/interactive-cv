/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0A0A', // Sangat gelap, mendekati hitam
        'dark-card': '#1C1C1C', // Agak terang dari dark-bg
        'light-text': '#E0E0E0', // Abu-abu terang untuk teks umum
        'accent-1': '#3B82F6', // Blue-500
        'accent-2': '#A855F7', // Purple-500
        'accent-3': '#14B8A6', // Teal-500
        'gradient-start': '#4F46E5', // Indigo-600 (untuk gradien umum)
        'gradient-end': '#A855F7',   // Purple-500 (untuk gradien umum)
        'gradient-text-start': '#818CF8', // Indigo-300 untuk teks gradien
        'gradient-text-end': '#C084FC',   // Purple-300 untuk teks gradien
      },
      fontFamily: {
        // Import dari Google Fonts di main.css
        'sans': ['Inter', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'], // Untuk heading
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-light': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'dot-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'pulse-light': 'pulse-light 2s infinite ease-in-out',
        'gradient-shift': 'gradient-shift 10s ease infinite',
        'dot-pulse': 'dot-pulse 0.8s infinite alternate',
      },
    },
  },
  plugins: [],
}
