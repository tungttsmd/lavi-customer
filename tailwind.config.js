// tailwind.config.js
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      keyframes: {
        'scale-bounce': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        'scale-bounce': 'scale-bounce 1.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
