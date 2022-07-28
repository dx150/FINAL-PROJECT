

exports.isAdmin = async (req, res, next)=>{
   
    if (req.user.role !=="admin") {
       return  res.status(401).send('Not authorised');
    } 
	next()
}