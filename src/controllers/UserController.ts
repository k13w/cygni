import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: '', email: '' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async createUser(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { name: 'heaven', email: 'gilmarheavensilva@hotmail.com' },
            message: { subject: 'bem vindo ao cygni', body: 'seja bem vindo' }
        });

        return res.send();
    }
}