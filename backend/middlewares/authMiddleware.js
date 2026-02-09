const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
    // Get the token from the header
    const token = req.header("Authorization");
    
    if (!token) return res.status(401).json({ error: "Access Denied: No Token" });

    try {
        // Now verifies using the secure key from your .env file
        const decoded = jwt.verify(
            token.replace("Bearer ", ""), 
            process.env.JWT_SECRET
        );
        
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid Token" });
    }
};