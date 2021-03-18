module.exports ={
    getTherapistData : (req, res) =>{
        const { photo, name, service, information} = req.body;
        const dbInstance = req.app.get( 'db' )
        dbInstance.get_info([ photo, name, service, information ]).then( getTherapistData => {
        res.status( 200 ).json({getTherapistData})
        }).catch( err => console.log('----------------------->Data Error',err));
        
    }
}