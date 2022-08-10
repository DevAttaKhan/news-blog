module.exports = (res, data, status, code = 200) => {
  res.status(code).json({
    status: status,
    data: data
  });
};
