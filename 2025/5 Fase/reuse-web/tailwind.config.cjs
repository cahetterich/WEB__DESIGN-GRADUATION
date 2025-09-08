// tailwind.config.cjs
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reuse: {
          'green-900': '#163F44',
          'green-700': '#3D6262',
          'green-500': '#5F9070',
          'green-300': '#81AA8B',
          'green-100': '#C3D6C7',
          'accent-600': '#C86331',
          'accent-500': '#C27949',
          'accent-200': '#E8BFAB',
          'neutral-900': '#414141',
          'neutral-300': '#D1D1D1',
          'neutral-100': '#F6F6F6',
          'danger': '#E23636',
          'info': '#2082DE',
          'warn': '#E2C036',
          'accent-orange': '#E28636'
        }
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
