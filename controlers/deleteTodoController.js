import User from '../modals/todoModels.js'

export async function deleteuser(req,res){
    try{
    const {id} = req.params;
    const Deleteuser = await User.findByIdAndDelete({_id:id});
    res.status(200).json({
        success:true,
        data:Deleteuser,
        message:'Deleted Succesfully'
    })
    }catch(error)
    {
        console.log(error);
        console.error(error);
        res.status(404).json({
            success:false,
            message:'failed to Delete'
        })

    }
    


}