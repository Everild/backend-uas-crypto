import Komponen from '../model/KomponenPcModel.js';
import path from "path";
import fs from "fs";

export const getKomponen = async (req, res) => {
    //SELECT * FROM Komponen
    try {
        const response = await Komponen.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKomponenById = async (req, res) => {
    try {
        //SELECT * FROM Komponen WHERE id = ?
        const response = await Komponen.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKomponen = async (req, res) => {
     // INSERT INTO Komponen VALUES
     if (req.files === null || req.files === undefined)
     return res.status(400).json({ msg: "Gambar belum diupload" });
    const { nama, deskripsi, harga} = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/image/${fileName}`;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
        return res.status(422).json({msg:"Image must be less than 5 MB"});

    file.mv(`./public/image/${fileName}`, async (err) => {
        if (err) return res.status(500).json({msg: err.message});
        try{
            await Komponen.create({
                nama: nama,
                deskripsi:deskripsi,
                harga: harga,
                image: fileName,
                url: url,
            });
            res.status(201).json({msg: "Product Created Successfuly"})
        } catch (error) {
            console.log(error.message);
        }
    })
}


export const updateKomponen = async (req, res) => {
    try {
        await Komponen.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            msg: 'Tempat Wisata Updated'
        });
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
        res.status(200).json({
            msg: 'Product Deleted'
        })
    } catch (error) {
        console.log(error.messagge);
    }
}


// export const getKomponen = async (req, res) => {
//     try {
//         const response = await Komponen.findAll();
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.messagge);
//     }
// }

// export const getKomponenById = async (req, res) => {
//     try {
//         const response = await Komponen.findOne({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.messagge);
//     }
// }

// export const createKomponen = async (req, res) => {
//     try {
//         await Komponen.create(req.body);
//         res.status(201).json({ msg: 'Product Created'})
//     } catch (error) {
//         console.log(error.messagge);
//     }
// }

// export const updateKomponen = async (req, res) => {
//     try {
//         await Komponen.update(req.body, {
//             where: {
//                 id: req.params.id,
//             },
//         });
//         res.status(200).json({ msg: 'Komponen Updated'});
//     } catch (error) {
//         console.log(error.messagge);
//     }
// }

// export const deleteKomponen = async (req, res) => {
//     try {
//         await Komponen.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         res.status(200).json({ msg: 'Komponen Deleted'})
//     } catch (error) {
//         console.log(error.messagge);
//     }
// }