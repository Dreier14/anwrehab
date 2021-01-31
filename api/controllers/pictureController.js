
module.exports ={
    getPictureData: (req, res) =>{
        const { picture } = req.body;
        const dbInstance = req.app.get( 'db' )
        dbInstance.get_pictures([ picture ])
        .then( RehabPictures => {
        res.status( 200 ).json({RehabPictures})
        }).catch( err => console.log('----------------------->Data Error',err));
        
    }
}