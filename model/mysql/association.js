module.exports = function($) {
    // all association between model will defined here
  const Example = $.import(`${__dirname}/example`)
  Example.sync()
}
