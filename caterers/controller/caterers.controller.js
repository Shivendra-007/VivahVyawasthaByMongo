import { validationResult } from "express-validator";
import Caterer from "../models/caterers.model.js";

export const savecaterer = async (request, response, next) => {
    try {
        const errors = await validationResult(request.body.Caterers);
        if (!errors.isEmpty())
            return response.status(400).json({ error: "bad request", status: true });

        const caterer = await Caterer.create(request.body.Caterers);
        return response.status(200).json({ message: "Cateres details saved", status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const viewAll = (request, response, next) => {
    Caterer.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ catererDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};


export const viewById = (request, response, next) => {
    const id = request.params.id;
    Caterer.findById(id)
        .then(result => {
            if (result) {
                return response.status(200).json({ catererDetails: result, status: true });
            } else {
                return response.status(404).json({ Message: "caterer not found", status: false });
            }
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
}

export const search = (request, response, next) => {
    Caterer.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { title: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {
        return response.status(200).json({ caterer: result, message: "Search caterer", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
}

export const activate = async (request, response, next) => {
    try {
        let tentDetails = await Caterer.updateOne({ _id: request.body.ID }, { status: true })
        if (tentDetails.modifiedCount)
            return response.status(200).json({ message: "Caterer activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
export const deactivate = async (request, response, next) => {
    try {
        let tent = await Caterer.updateOne({ _id: request.body.ID }, { status: false })
        if (tent.modifiedCount)
            return response.status(200).json({ message: "Caterer De-activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const activecatererList = async (request, response, next) => {
    try {
        let caterer = await Caterer.find({ status: "true" })
        return response.status(200).json({ catererList: caterer, status: true })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const saveImages = async (request, response, next) => {
    try {
        let caterer = await Caterer.find({ _id: request.params.id })
        if (!caterer)
            return response.status(404).json({ error: "request resorses not found", status: false })

        await (request.body.image).map((img, index) => {
            caterer.images.push(img)
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
        let caterer = await Caterer.updateOne({ _id: request.body.catererId }, { status: "false" })
        if (caterer.modifiedCount)
            return response.status(200).json({ message: "deleted succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
