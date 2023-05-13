import { validationResult } from "express-validator";
import Photographer from "../models/photographer.model.js";
export const save = async (request, response, next) => {


    console.log(request.body.Photographers)
    try {
        const errors = validationResult(request.body.Photographers);
        if (!errors.isEmpty())
            return response.status(400).json({ error: "bad request", errors, status: false });

        const makeup = await Photographer.create(request.body.Photographers);

        return response.status(200).json({ message: "Photographer artist details saved", status: true });


    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const viewAll = (request, response, next) => {
    Photographer.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ photographers: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};


export const viewById = (request, response, next) => {
    const id = request.params.id;

    Photographer.findById(id)
        .then(result => {
            if (result) {
                return response.status(200).json({ photographerDetails: result, status: true });
            } else {

                return response.status(404).json({ Message: "photographer not found", status: false });
            }
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
}

export const search = (request, response, next) => {
    Photographer.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { companyName: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {
        return response.status(200).json({ Band: result, message: "Search photographer", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
}

export const activatePhotographer = async (request, response, next) => {
    try {
        let photographer = await Photographer.updateOne({ _id: request.body.ID }, { status: "true" })
        if (photographer.modifiedCount)
            return response.status(200).json({ message: "photographer activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
export const deactivatevenue = async (request, response, next) => {
    try {
        let makeup = await Photographer.updateOne({ _id: request.body.ID }, { status: false })
        if (makeup.modifiedCount)
            return response.status(200).json({ message: "Photographer De-activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const activePhotographerList = async (request, response, next) => {
    try {
        let photographer = await Photographer.find({ status: "true" })
        return response.status(200).json({ photographerList: photographer, status: true })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const saveImages = async (request, response, next) => {
    try {
        let photographer = await Photographer.find({ _id: request.params.id })
        if (!photographer)
            return response.status(404).json({ error: "request resorses not found", status: false })

        await (request.body.image).map((img, index) => {
            photographer.images.push(img)
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
        let photographer = await Photographer.updateOne({ _id: request.body.photographerId }, { status: "false" })
        if (photographer.modifiedCount)
            return response.status(200).json({ message: "deleted succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
