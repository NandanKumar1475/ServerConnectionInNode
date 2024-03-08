import User from '../modals/todoModels.js'

export async function updateTodo(req, res) {
    try {
        // const id = req.params.id;
        // second method to get id 

        const { id } = req.params;
        const { name, email } = req.body;
        const users = await User.findByIdAndUpdate(
            { _id:id },{ name, email });

        res.status(200).json({
            success:true,
            data:users,
            message:'Data Succesfullt Updated'

        })

    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(404).json({
            success: false,
            data: "internal server error",
            message: error.message
        })
    }
}