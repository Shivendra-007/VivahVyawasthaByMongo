import { validationResult } from "express-validator";
import Pandit from "../models/pandit.model.js";

export const savepandit = async (request, response, next) => {
    console.log(request.body.panditDetails)
    try {
        const errors = await validationResult(request.body.panditDetails);

        if (!errors.isEmpty())
            return response.status(400).json({ error: "bad request", status: true });

        const pandit = await Pandit.create(request.body.panditDetails);
        return response.status(200).json({ message: "pandit details saved", status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "internal server error", status: false });
    }


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

export const activate = async (request, response, next) => {
    try {
        let panditDetails = await Pandit.updateOne({ _id: request.body.ID }, { status: true })
        if (panditDetails.modifiedCount)
            return response.status(200).json({ message: "Pandit activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
export const deactivate = async (request, response, next) => {
    try {
        let pandit = await Pandit.updateOne({ _id: request.body.ID }, { status: false })
        if (pandit.modifiedCount)
            return response.status(200).json({ message: "Pandit De-activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const deactivepanditList = async (request, response, next) => {
    try {
        let pandit = await Pandit.find({ status: false })
        return response.status(200).json({ panditList: pandit, status: true })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
export const activepanditList = async (request, response, next) => {
    try {
        let pandit = await Pandit.find({ status: true })
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

export const premiumList = (request, response, next) => {
    Pandit.find().limit(10)
        .then(result => {

            return response.status(200).json({ premiumPanditList: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};
