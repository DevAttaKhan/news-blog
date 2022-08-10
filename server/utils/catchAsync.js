module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(error => {
      return res.status(200).json({
        status: "error",
        message: error.message
      });
    });
  };
};
