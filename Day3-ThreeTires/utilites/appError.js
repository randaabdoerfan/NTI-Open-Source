module.exports =(message,statuscode)=>{
    const err = new Error(message)
    err.statuscode = statuscode
    return err
}