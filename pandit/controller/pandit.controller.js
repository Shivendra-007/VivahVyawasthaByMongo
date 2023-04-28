import { validationResult } from "express-validator";
import Pandit from "../models/pandit.model.js";

export const savepandit = (request, response, next) => {
    Pandit.create(request.body.pandits)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "pandit detailsare saved...", status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
       })
}
export const viewAll = (request, response, next) => {
    Pandit.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ panditDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};


export const viewById = (request, response, next) => {
    const id = request.params.id;

    Pandit.findById(id)
        .then(result => {
            if (result) {
                return response.status(200).json({ panditDetails: result, status: true });
            } else {

                return response.status(404).json({ Message: "pandit not found", status: false });
            }
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
}

export const search = (request, response, next) => {
    Pandit.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { companyName: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {
        return response.status(200).json({ pandit: result, message: "Search pandit", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
}

export const activatepandit = async (request, response, next) => {
    try {
        let pandit = await Pandit.updateOne({ _id: request.body.panditId }, { status: "true" })
        if (pandit.modifiedCount)
            return response.status(200).json({ message: "pandit activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const activepanditList = async (request, response, next) => {
    try {
        let pandit = await Pandit.find({ status: "true" })
        return response.status(200).json({ panditList: pandit, status: true })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const saveImages = async (request, response, next) => {
    try {
        let pandit = await Pandit.find({ _id: request.params.id })
        if (!pandit)
            return response.status(404).json({ error: "request resorses not found", status: false })

        await (request.body.image).map((img, index) => {
            pandit.images.push(img)
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
        let pandit = await Pandit.updateOne({ _id: request.body.panditId }, { status: "false" })
        if (pandit.modifiedCount)
            return response.status(200).json({ message: "deleted succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
