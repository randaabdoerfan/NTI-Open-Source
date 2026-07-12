
exports.loginMiddleware=async(req,res,next)=>{
       if (!req.session.student.studentId) {
        return res.status(401).json({
            message: "You should login first"
        });
    }

    next();
}