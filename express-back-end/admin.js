const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const token = await req.headers.authorization.split(" ")[1];
        const decode = await jwt.verify(
            token, "RANDOM-TOKEN"
        );
        const user = await decode;
        req.user = user;
        next();
    }
    catch (e){
        res.status(401).json({
            e: new Error("Request did not work"),
        });
    }
}