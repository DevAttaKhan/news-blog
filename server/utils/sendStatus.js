module.exports = (res, posts, status, code = 200) => {
  res.status(code).json({
    status: status,
    data: posts
  });
};
