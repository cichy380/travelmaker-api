module.exports = function (middleware, req, res, next) {
  middleware(req, res, error => {
    if (error instanceof SyntaxError) {
      console.error(error)
      return res.status(400).json({message: 'Invalid syntax for this request was provided.'})
    }
    next()
  })
}
