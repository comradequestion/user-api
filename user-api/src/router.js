import express from 'express'
import { UserRoutes } from './user_routes.js'

const router = express.Router();



const userRoutes = new UserRoutes();

router.get('/', (req, res) => {
    res.send('hello world')
});

//TODO Post, Put, Delete

//Accepts an optional min_age query parameter
//Usage: /users/{id}?min_age={age}
router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { min_age } = req.query;
    const user = await userRoutes.getUser({id, min_age});
    if ( user === null || user === undefined || user.length === 0) {
        res.status(404).json({ message: 'User not found' });
    } else {
        res.json(user);
    }
    
});

export default router;