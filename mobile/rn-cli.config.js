var path = require("path");

const dependencies = [
  {
    location: ["..", "node_modules"],
    dependencies: require("../package.json").dependencies
  },
  {
    location: ["node_modules"],
    dependencies: require("./package.json").dependencies
  }
];

const extraNodeModules = {};

dependencies.forEach(dependency => {
  Object.keys(dependency.dependencies).forEach(package => {
    extraNodeModules[package] = path.resolve(
      __dirname,
      ...dependency.location,
      package
    );
  });
});

var config = {
  resolver: {
    extraNodeModules
  },

  watchFolders: [
    path.resolve(__dirname, "../mobile"),
    path.resolve(__dirname, "../core"),
    path.resolve(__dirname, "../node_modules")
  ]
};

module.exports = config;

// const path = require("path");

// const dependencies = [
//   {
//     location: ["..", "node_modules"],
//     dependencies: require("../package.json").dependencies
//   },
//   {
//     location: ["node_modules"],
//     dependencies: require("./package.json").dependencies
//   }
// ];

// const extraNodeModules = {};

// dependencies.forEach(dependency => {
//   Object.keys(dependency.dependencies).forEach(dep => {
//     extraNodeModules[dep] = path.resolve(
//       __dirname,
//       ...dependency.location,
//       dep
//     );
//   });
// });

// console.log(extraNodeModules);

// var config = {
//   resolver: {
//     extraNodeModules
//   },

//   watchFolders: [
//     path.resolve(__dirname, "../mobile"),
//     path.resolve(__dirname, "../core")
//   ]
// };
// module.exports = config;
