import express from 'express';
import { getProperties, getProperty, createProperty, updateProperty, deleteProperty } from '../controller/properties.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

// getProperty
router.get('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await getProperty(id);
    res.status(200).json(result);
})

// getProperties
router.get('/', authenticate, async (req, res) => {
    const results = await getProperties();
    res.status(200).json(results);
});

// createProperty
router.post('/', authenticate, async (req, res) => {
    const result = await createProperty(req.body);
    res.status(200).json(result);
});

// createProperty
router.put('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await updateProperty(id, req.body);
    res.status(200).json(result);
});

// createProperty
router.delete('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await deleteProperty(id);
    res.status(200).json(result);
});

export default router;
