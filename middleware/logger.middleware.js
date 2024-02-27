const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  const startTime = new Date();
  const originalEnd = res.end;
  res.end = function (chunk, encoding) {
    const duration = new Date() - startTime;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.url} - ${
        res.statusCode
      } (${duration}ms)`
    );

    originalEnd.call(res, chunk, encoding);
  };

  next();
};

module.exports = loggerMiddleware;
