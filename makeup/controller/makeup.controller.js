import { validationResult } from "express-validator";
import Makeup from "../models/makeup.model.js";


export const savemakeup = async (request, response, next) => {
    console.log(request.body);
    try {
        const errors = await validationResult(request.body.Makeups);
        if (!errors.isEmpty())
            return response.status(400).json({ error: "bad request", status: true });

        const makeup = await Makeup.create(request.body.Makeups);
        return response.status(200).json({ message: "Makeup details saved", status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const viewAll = (request, response, next) => {
    Makeup.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ makeupDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};


export const viewById = (request, response, next) => {
    const id = request.params.id;

    Makeup.findById(id)
        .then(result => {
            if (result) {
                return response.status(200).json({ makeupDetails: result, status: true });
            } else {

                return response.status(404).json({ Message: "makeup not found", status: false });
            }
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
}

export const search = (request, response, next) => {
    Makeup.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { companyName: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {
        return response.status(200).json({ makeup: result, message: "Search makeup", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
}

export const activatemakeup = async (request, response, next) => {
    try {
        let makeup = await Makeup.updateOne({ _id: request.body.makeupId }, { status: "true" })
        if (makeup.modifiedCount)
            return response.status(200).json({ message: "makeup activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const activemakeupList = async (request, response, next) => {
    try {
        let makeup = await Makeup.find({ status: "true" })
        return response.status(200).json({ makeupList: makeup, status: true })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const saveImages = async (request, response, next) => {
    try {
        let makeup = await Makeup.find({ _id: request.params.id })
        if (!makeup)
            return response.status(404).json({ error: "request resorses not found", status: false })

        await (request.body.image).map((img, index) => {
            makeup.images.push(img)
        })
        venue.save();
        return response.json({ message: "images save", status: true })

    }
    catch (err) {
        console.log(err);
        return response.json({ error: "internal server error", status: false })
    }
}

export const removeById = async (request, response, next) => {
    try {
        let makeup = await Makeup.updateOne({ _id: request.body.makeupId }, { status: "false" })
        if (makeup.modifiedCount)
            return response.status(200).json({ message: "deleted succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
// Import your dependencies and define your router
// import express from "express"
// const router = express.Router();
// const Vendor = require('../models/Vendor');

// // Update the status field of a vendor
// router.put('/:id', async (req, res) => {
//   const vendorId = req.params.id;
//   const newStatus = req.body.status;

//   try {
//     const updatedVendor = await Vendor.findByIdAndUpdate(
//       vendorId,
//       { status: newStatus },
//       { new: true }
//     );
//     res.status(200).json(updatedVendor);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;

