const router = require('express').Router();
const Device = require('../model/Devices');

// Rota para obter todos os dispositivos
router.get('/', async (req, res) => {
    try {
        const devices = await Device.find();
        res.status(200).json(devices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para criar um novo dispositivo
router.post('/', async (req, res) => {
    const device = new Device({
        
        toConect: req.body.toConect,
        dateCreated: new Date(),
        nameResponsable: req.body.nameResponsable,
        sensorTemp: req.body.sensorTemp,
        sensorUmiAr: req.body.sensorUmiAr,
        lumen: req.body.lumen,
        sensorSolo1: req.body.sensorSolo1,
        sensorSolo2: req.body.sensorSolo2,
        sensorSolo3: req.body.sensorSolo3  
    });

    try {
        const savedDevice = await device.save();
        res.status(201).json(savedDevice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedDevice = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedDevice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await Device.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;