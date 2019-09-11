module.exports = function (name, extension='') {
  return `${name}${extension ? `.${extension}`:''}.js`;
}
