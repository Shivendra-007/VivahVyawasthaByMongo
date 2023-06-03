import { validationResult } from "express-validator";
import Buggy from "../models/buggyDetails.model.js";


export const saveBuggy = async (request, response, next) => {
    try {
        const errors = await validationResult(request.body.Ghodi);

        if (!errors.isEmpty())
            return response.status(400).json({ error: "bad request", status: true });

        const band = await Buggy.create(request.body.Ghodi);
        return response.status(200).json({ message: "buggyDetails saved", status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "internal server error", status: false });
    }


}

// export const viewAll = (request, response, next) => {
//     Buggy.find()
//         .then(result => {
//             console.log(result);
//             return response.status(200).json({ BuggyDetails: result, status: true });
//         })
//         .catch(err => {
//             console.log(err);
//             return response.status(500).json({ Message: "Internal Server error...", status: false });
//         });
// };
export const viewAll = (request, response, next) => {
    Buggy.find()
        .sort({ _id: -1 }) // Sort the results by createdAt field in ascending order
        .then(result => {
            console.log(result);
            return response.status(200).json({ BuggyDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};
export const viewById = (request, response, next) => {
    const id = request.params.id;

    Buggy.findById(id)
        .then(result => {
            if (result) {
                return response.status(200).json({ BuggyDetails: result, status: true });
            } else {

                return response.status(404).json({ Message: "Band not found", status: false });
            }
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
}

export const search = (request, response, next) => {
    Buggy.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { companyName: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {
        return response.status(200).json({ Band: result, message: "Search Band", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
}

export const activate = async (request, response, next) => {
    try {
        let venueDetails = await Buggy.updateOne({ _id: request.body.ID }, { status: true })
        if (venueDetails.modifiedCount)
            return response.status(200).json({ message: "Buggy activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
export const deactivatevenue = async (request, response, next) => {
    try {
        let makeup = await Buggy.updateOne({ _id: request.body.ID }, { status: false })
        if (makeup.modifiedCount)
            return response.status(200).json({ message: "Buggy De-activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
export const activeBuggyList = async (request, response, next) => {
    try {
        let buggy = await Buggy.find({ status: "true" })
        return response.status(200).json({ buggyList: buggy, status: true })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const saveImages = async (request, response, next) => {
    try {
        let buggy = await Buggy.find({ _id: request.params.id })
        if (!buggy)
            return response.status(404).json({ error: "request resorses not found", status: false })

        await (request.body.image).map((img, index) => {
            band.images.push(img)
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
        let buggy = await Buggy.updateOne({ _id: request.body.buggyId }, { status: "false" })
        if (buggy.modifiedCount)
            return response.status(200).json({ message: "deleted succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}
