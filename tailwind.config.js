module.exports = {
    mode: "jit",
    purge: ["./src/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'body': '#1F0318',
          'title': '#E5F2C9',
          'card': '#6564DB',
          'question': '#E5F2C9',
          'items': '#E5F2C9',
          'hover-item': '#EFBDEB',
        },
      },
    },
    variants: {},
    plugins: [],
  };