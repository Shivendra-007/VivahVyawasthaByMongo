import { validationResult } from "express-validator";
import Mehandi from "../models/mehandi.model.js";

export const savemehandi = async (request, response, next) => {
    console.log(request.body.mehandi)
    try {
        const errors = await validationResult(request.body.mehandi);
        console.log(request.body.mehandi)
        if (!errors.isEmpty())
            return response.status(400).json({ error: "bad request", status: true });

        const mehandi = await Mehandi.create(request.body.mehandi);
        return response.status(200).json({ message: "venue details saved", status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "internal server error", status: false });
    }


}

// export const savemehandi= (request, response, next) => {
//     console.log("data savesd")
//     try {
//         console.log(request.files);
//         let thumbnail = null;
//         let images = [];
//         request.files.map(file => {
//             if (file.fieldname != "file")
//                 images.push(file.path)
//             else
//                 thumbnail = file.path
//         });

//         let { title, description, price, address, rating, longitude, latitude, service, experience, contactNumber } = request.body
//         Mehandi.create(({ images: images, thumbnail: thumbnail, price: price, title: title, description: description, address: address, rating: rating, longitude: longitude, latitude: latitude, service: service, experience: experience, contactNumber: contactNumber }))
//         return response.status(200).json({ message: "saved...", status: true });

//     }
//     catch (err) {
//         console.log(err);
//         return response.status(500).json({ error: "Internal server error", status: false });
//     }
// }

export const viewAll = (request, response, next) => {
    Mehandi.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ mehandiDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};


export const viewById = (request, response, next) => {
    const id = request.params.id;

    Mehandi.findById(id)
        .then(result => {
            if (result) {
                return response.status(200).json({ mehandiDetails: result, status: true });
            } else {

                return response.status(404).json({ Message: "mehandi not found", status: false });
            }
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
}

export const search = (request, response, next) => {
    Mehandi.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { companyName: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {
        return response.status(200).json({ mehandi: result, message: "Search mehandi", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
}

export const activatemehandi = async (request, response, next) => {
    try {
        let mehandi = await Mehandi.updateOne({ _id: request.body.mehandiId }, { status: "true" })
        if (mehandi.modifiedCount)
            return response.status(200).json({ message: "mehandi activate succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const activemehandiList = async (request, response, next) => {
    try {
        let mehandi = await Mehandi.find({ status: "true" })
        return response.status(200).json({ mehandiList: mehandi, status: true })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const saveImages = async (request, response, next) => {
    try {
        let mehandi = await Mehandi.find({ _id: request.params.id })
        if (!mehandi)
            return response.status(404).json({ error: "request resorses not found", status: false })

        await (request.body.image).map((img, index) => {
            mehandi.images.push(img)
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
        let mehandi = await Mehandi.updateOne({ _id: request.body.mehandiId }, { status: "false" })
        if (mehandi.modifiedCount)
            return response.status(200).json({ message: "deleted succesfully", status: true });
        return response.status(400).json({ error: "request not found", status: false });
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false });
    }
}

export const topList = (request, response, next) => {
    Mehandi.find().limit(10)
        .then(result => {
            console.log(result);
            return response.status(200).json({ mehandiDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};
