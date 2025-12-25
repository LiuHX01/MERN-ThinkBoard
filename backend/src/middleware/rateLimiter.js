import ratelimit from "../config/upstash.js";



const rateLimiter = async (req, res, next) => {
    try {
        const ip = req.ip;
        const { success } = await ratelimit.limit(ip);
        if (!success) {
            return res.status(429).json({ message: "Rate limit exceeded" });
        }
        next();
    } catch (error) {
        console.log("Error in rateLimiter middleware:", error.message);
        next(error);
    }
}

export default rateLimiter;