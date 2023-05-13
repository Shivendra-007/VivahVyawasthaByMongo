import { response } from "express";
import { VenueDetails } from "../model/venueDetails.model.js"
import { validationResult } from "express-validator";

export const save = async (request, response, next) => {

    try {
        const errors = await validationResult(request.body);

        if (!errors.isEmpty())
            return response.status(400).json({ error: "bad request", status: true });

        const venueDetails = await VenueDetails.create(request.body);
        return response.status(200).json({ message: "venue details saved", status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const removeById = async (request, response, next) => {
    try {
        let venueDetails = await VenueDetails.updateOne({ _id: request.body.venueDetailsId }, { status: "false" })
        if (venueDetails.modifiedCount)
            return response.status(200).json({ message: "deleted succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const allList = async (request, response, next) => {
    try {
        let venueDetails = await VenueDetails.find()
        return response.status(200).json({ venueList: venueDetails, status: true })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const fetchById = async (request, response, next) => {
    try {
        let venueDetails = await VenueDetails.findById(request.params.id)
        if (venueDetails)
            return response.status(200).json({ venueList: venueDetails, status: true })
        return response.status(400).json({ error: "request resorses not found", status: false })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const activate = async (request, response, next) => {
    try {
        let venueDetails = await VenueDetails.updateOne({ _id: request.body.ID }, { status: "true" })
        if (venueDetails.modifiedCount)
            return response.status(200).json({ message: "venue activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
export const deactivatevenue = async (request, response, next) => {
    try {
        let makeup = await VenueDetails.updateOne({ _id: request.body.ID }, { status: false })
        if (makeup.modifiedCount)
            return response.status(200).json({ message: "Venue De-activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const activeList = async (request, response, next) => {
    try {
        let venueDetails = await VenueDetails.find({ status: "true" })
        return response.status(200).json({ venueList: venueDetails, status: true })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const saveImages = async (request, response, next) => {
    try {
        let venue = await find({ _id: request.params.id })
        if (!venue)
            return response.status(404).json({ error: "request resorses not found", status: false })

        await (request.body.image).map((img, index) => {
            venue.images.push(img)
        })
        venue.save();
        return response.json({ message: "images save", status: true })

    }
    catch (err) {
        console.log(err);
        return response.json({ error: "internal server error", status: false })
    }
}

export const topList = async (request, response, next) => {
    try {
        let venueDetails = await VenueDetails.find().limit(10)
        return response.status(200).json({ venueList: venueDetails, status: true })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const search = (request, response, next) => {
    console.log(request.params.keyword)
    VenueDetails.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { title: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {

        if (result.length)
            return response.status(200).json({ venueList: result, message: "Search venue", status: true });
        return response.status(404).json({ erro: "Not Found", status: false });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
}
