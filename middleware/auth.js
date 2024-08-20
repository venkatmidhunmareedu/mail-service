require('dotenv').config(); 

function authenticateToken(req, res, next) {
    const token = req.headers['authorization']; // Get token from Authorization header

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    if (token !== process.env.API_TOKEN) {
        return res.status(403).json({ message: 'Invalid API token.' });
    }

    next(); // Token is valid, proceed to the next middleware or route handler
}


module.exports = { authenticateToken }