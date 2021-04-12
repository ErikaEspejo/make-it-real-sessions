const userAuthorization = (req, res, next) => {
  const { username, authUsername } = req.body;
  if( username === authUsername) {
    next();
  } else {
    res.status(401).json({'message': 'unauthorized'})
  };
};

module.exports = { userAuthorization };