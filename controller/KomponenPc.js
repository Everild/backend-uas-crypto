import Komponen from '../model/KomponenPcModel.js';

export const getKomponen = async (req, res) => {
    try {
        const response = await Komponen.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
}

export const getKomponenById = async (req, res) => {
    try {
        const response = await Komponen.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
}

export const createKomponen = async (req, res) => {
    try {
        await Komponen.create(req.body);
        res.status(201).json({ msg: 'Product Created'})
    } catch (error) {
        console.log(error.messagge);
    }
}

export const updateKomponen = async (req, res) => {
    try {
        await Komponen.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Komponen Updated'});
    } catch (error) {
        console.log(error.messagge);
    }
}

export const deleteKomponen = async (req, res) => {
    try {
        await Komponen.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Komponen Deleted'})
    } catch (error) {
        console.log(error.messagge);
    }
}