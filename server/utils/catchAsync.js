module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(error => {
      return res.status(404).json({
        status: "error",
        message: error.message
      });
    });
  };
};
