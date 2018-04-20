import { Router } from 'express';
import UserController from './controller';

const router = Router();
router.post('/users', UserController.regist);

export default router;
