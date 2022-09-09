const verifyAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!!!authorization || authorization !== process.env.ROUTE_PASSWORD)
    return res.status(403).end();

  next();
};

module.exports = {
  verifyAuth: verifyAuth,
};
