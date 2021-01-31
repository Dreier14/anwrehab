module.exports={
    getTestamonials:(req, res) =>{
        const { names, services, experience } = req.body
        const dbInstance = req.app.get( 'db' )
        dbInstance.get_testimonials([ names, services, experience]).then( testimonials => {
            res.status(200).json({testimonials})
        }).catch(err => console.log("NO DATA FOR YOU", err));
    }

}