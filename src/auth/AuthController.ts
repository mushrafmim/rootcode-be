import { Request, Response } from 'express';
import { AuthService } from './AuthService';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public register = async (req: Request, res: Response): Promise<void> => {
        try {
            const { firstname, lastname, email, password } = req.body;
            await this.authService.register(firstname, lastname, email, password);
            res.sendStatus(201);
        } catch (error) {
            console.error('Error during user registration:', error);
            res.status(500).json({ error: 'Failed to register user' });
        }
    };

    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;
            const token = await this.authService.login(email, password);
            res.json({ token });
            return
        } catch (error) {

            console.log(error)

            if (error.message === 'Invalid password')
                console.error('Error during user login:', error);
            res.status(500).json({ error: 'Failed to login' });
            return
        }
    };

    public logout = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            await this.authService.logout(token);
            res.sendStatus(204);
        } catch (error) {
            console.error('Error during user logout:', error);
            res.status(500).json({ error: 'Failed to logout' });
        }
    };
}