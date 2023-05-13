
import { VenueDetails } from "../model/venueDetails.model.js"
import { validationResult } from "express-validator";


export const save = (request, response, next) => {
    console.log("data savesd")
    console.log(request.files);
    try {
        console.log(request.files);
        let thumbnail = null;
        let license = null;
        let images = [];
        request.files.map(file => {
            if (file.fieldname != "file")
                images.push(file.path)
            else {
                thumbnail = file.path
                license = file.path
            }

        });

        

        VenueDetails.create(({ images: images, license: license, thumbnail: thumbnail, charges: charges,vendorId:vendorId, capacity: capacity, category: category, NonvegPrice: NonvegPrice, vegPrice: vegPrice, title: title, description: description, address: address, rating: rating, longitude: longitude, latitude: latitude, service: service, contactNumber: contactNumber }))
        return response.status(200).json({ message: "saved...", status: true });

    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal server error", status: false });
    }
}
export const uploadPost = async (request, response) => {
    console.log(request)
    let file = (request.file) ? request.file.filename : null;

    console.log(file)
    try {
        request.body.isLiked = false;

        Post.create(request.body)
        return response.status(200).json({ message: "post uploaded by user ", status: true });
    } catch (err) {
        return response.status(500).json({ result: "internal server error", status: false });
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
        let venueDetails = await VenueDetails.updateOne({ _id: request.body.venueDetailsId }, { status: "true" })
        if (venueDetails.modifiedCount)
            return response.status(200).json({ message: "venue activate succesfully", status: true });
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
