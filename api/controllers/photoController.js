module.exports ={
    getPhotoData: (req, res) =>{
        const { photo, name, service, information} = req.body;
        const dbInstance = req.app.get( 'db' )
        dbInstance.get_info([ photo, name, service, information ]).then( getRehabPhotos => {
        res.status( 200 ).json({getRehabPhotos})
        }).catch( err => console.log('----------------------->Data Error',err));
        
    }
}