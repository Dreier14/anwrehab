module.exports ={
    getPhotoData: (req, res) =>{
        const { photo, information} = req.body;
        const dbInstance = req.app.get( 'db' )
        dbInstance.get_info([ photo, information ]).then( getRehabPhotos => {
        res.status( 200 ).json({getRehabPhotos})
        }).catch( err => console.log('----------------------->Data Error',err));
        
    }

    // deletePhotos: (req, res) =>{
    //     const { post_id } = req.params
    //     const { id } = req.session.user 
    // } 

    


}