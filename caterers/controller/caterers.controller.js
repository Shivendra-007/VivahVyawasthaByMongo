import Caterers from "../models/caterers.model.js";

export const saveMultiple = (request, response, next) => {
    Caterers.create(request.body.caterers)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "Caterers details  are saved...", status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}

export const viewAll = (request, response, next) => {
    Caterers.find()
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
    Caterers.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { companyName: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {
        return response.status(200).json({ caterer: result, message: "Search Caterers", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

export const remove = (request, response, next) => {
    Caterers.deleteOne({ _id: request.params.id }).then(() => {
        return response.status(200).json({ message: "Caterers is Removed", status: true });
    }).catch((err) => {

        console.log(err)
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

