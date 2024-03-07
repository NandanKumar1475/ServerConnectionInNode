
import User from '../modals/todoModels.js';

export async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);

    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(400).json({
            success: false,
            data: 'internal server error',
            message: error.message
        })

    }
}
