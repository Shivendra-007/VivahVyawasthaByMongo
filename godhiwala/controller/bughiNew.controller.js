import BughiNew from "../models/bughiNew.model.js";
// import { validationResult } from "express-validator";
export const saveMultiple = (request, response, next) => {
    BughiNew.create(request.body.bughinews)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "Bugghi are saved...", status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}

export const viewAll = (request, response, next) => {
    BughiNew.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ bughiDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}

export const search = (request, response, next) => {
    BughiNew.find({
        $or: [
            { name: { $regex: request.params.keyword, $options: 'i' } },
            { location: { $regex: request.params.keyword, $options: 'i' } },
            { services: { $regex: request.params.keyword, $options: 'i' } }

        ]
    }).then(result => {
        return response.status(200).json({ stdio: result, message: "Search bughi", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

export const update = async (request, response) => {
    try {
        let bughi = await BughiNew.findByIdAndUpdate(request.params.id, {
            $set: request.body
        })

        if (bughi == null) {
            return response.status(404).json({
                status: 404,
                message: "Id not found",
            })
        }
        response.status(200).json({
            message: "information updated sucessfully"
        })
    } catch (err) {
        console.log(err);
    }
}

export const getBughi = (request, response, next) => {
    const id = request.params.id;

    BughiNew.findById(id)
        .then((result) => {
            if (!result) {
                return response.status(404).json({ error: "Data not found", status: false });
            }
            return response.status(200).json({ bughis: result, status: true });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: "Internal server error", status: false });
        });
};
