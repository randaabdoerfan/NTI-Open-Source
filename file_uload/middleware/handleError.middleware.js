const handleError = async(err,req,res,next)=>{
    const statuscode = err.statuscode || 500

    res.status(statuscode).json(
        {message:err.message || "internal server error"}
    )


}
module.exports = handleError