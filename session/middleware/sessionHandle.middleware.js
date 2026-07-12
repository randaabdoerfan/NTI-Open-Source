exports.sessionHandle = async (req, res, next) => {
 if(!req.session.student){
     return res.status(401).json({
            message: "Your sesion has been expired so login again"
        });
    }
    next();
 }
