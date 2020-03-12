import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

export default {

    index(req: Request, res: Response) {
        return res.json('list users');
    },

    async store(req: Request, res: Response) {
        const shopkeeperRepository = getRepository(User)

        try {
            let userId = req.params.id;
            let data = req.body;

            console.log(userId);

            const setUserData = await shopkeeperRepository.save(data);

            res.send({ setUserData });
        } catch (err) {
            console.log(err)
        }
    }
}