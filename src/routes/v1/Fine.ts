import express, { Request, Response } from 'express';
import { Fine as DbModel } from '../../models/sacco';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        let fechedData = await DbModel.find();

        return res.status(200).json(fechedData);
    } catch (error: any) {
        return res.status(501).json({ error: error.message });
    }


})

router.get('/:id', async (req: Request, res: Response) => {
    try {
        let selectedRow = await DbModel.findById({ _id: req.params.id });

        return res.json(selectedRow);
    } catch (error: any) {
        return res.status(501).json({ error: error.message });
    }


})

router.post('/', async (req: Request, res: Response) => {
    try {

        const { body } = req;
        let created = await DbModel.create(body);

        return res.json(created);
    } catch (error: any) {
        return res.status(501).json({ error: error.message });
    }


})

router.post('/many', async (req: Request, res: Response) => {
    try {

        const { body } = req;
        let created = await DbModel.insertMany(body);

        return res.json(created);
    } catch (error: any) {
        return res.status(501).json({ error: error.message });
    }


})

router.put('/many', async (req: Request, res: Response) => {
    try {

        const { body: { where, data } } = req;
        let updated = await DbModel.updateMany(where, { '$set': data });


        return res.json(updated);
    } catch (error: any) {
        return res.status(501).json({ error: error.message });
    }


})

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { body } = req;
        let updatedRow = await DbModel.updateOne({ _id: req.params.id }, { '$set': body });


        return res.json(updatedRow);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }


})

router.delete('/many', async (req: Request, res: Response) => {
    try {

        let {where}= req.body;
        let deletedRows = await DbModel.deleteMany(where);

        return res.json(deletedRows);
    } catch (error: any) {
        return res.status(501).json({ error: error.message });
    }


})

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        let deletedRow = await DbModel.deleteOne({ _id: req.params.id });

        return res.json(deletedRow);
    } catch (error: any) {
        return res.status(501).json({ error: error.message });
    }


})

export default router;
