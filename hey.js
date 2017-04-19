module.exports = {
  root: "build",
  webpack: {
    umd: {
      entry: "./manba.js",
      library: "manba",
      filename: 'manba.js'
    }
  }
};
