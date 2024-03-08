import userDet from '../modals/todoModels.js'
export async function getUser(req,res){
    try{
        // const usersDet = await userDet.find({});
        const usersDet = await userDet.find({});
        // response 

        res.status(200).json({
            success:true,
            data:usersDet,
            message:'Data Fetched Succesfully'
        })
    }catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:'Internal Server Error can not able to fetch the data',
            message:error.message
        })
    }
}

export async function getUserbyId(req,res){
   try{
    const id = req.params.id;
    const User = await userDet.findById({_id:id});
    if(!User)
    {
        return res.status(404).json({
            success:false,
            message:'data not found'
        })
    }
    
    res.status(200).json({
        success:true,
        data:User,
        message:'data found succesfully'
    })

   }catch(error)
   {
    console.error(error);
    console.log(error);
    res.status(404).json({
        success:false,
        data:"Server Error",
        message:error.message
    })

   }
}