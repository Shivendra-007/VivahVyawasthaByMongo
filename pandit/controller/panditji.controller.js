import Pandit from "../models/panditji.model.js";

export const saveMultiple = (request, response, next) => {
    Pandit.create(request.body.pandits)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "Pandit details  are saved...", status: true });
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
            return response.status(200).json({ result: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
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
        return response.status(200).json({ pandit: result, message: "Search Pandit", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

export const remove = (request, response, next) => {
    Pandit.deleteOne({ _id: request.params.id }).then(() => {
        return response.status(200).json({ message: "Pandit ji  is Removed", status: true });
    }).catch((err) => {

        console.log(err)
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};
