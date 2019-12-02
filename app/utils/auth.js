import jsonwebtoken from "jsonwebtoken";

export function verifyToken(req, res, next) {
  // Check header or url parameters or post parameters for token
  const token = req.headers["x-access-token"];

  // Decode token
  if (token) {
    // Verifies secret and checks exp
    jsonwebtoken.verify(token, process.env.SECRET, function(error, decoded) {
      if (error) {
        res.status(403).json({
          success: false,
          message: "Failed to authenticate token."
        });
        return;
      }

      // If everything is good, save to request for use in other routes
      req.decoded = decoded;
      req.email = decoded.email;

      next();
    });
  } else {
    // If there is no token return an error
    res.status(403).json({
      success: false,
      message: "No token provided."
    });
  }
}
