import express = require('express');
import { Request, Response } from 'express';

export const router = express.Router();

router.get('/', (req: Request, res: Response) => res.status(200).send('Server works!'));