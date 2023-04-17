import Tent from "../models/tent.model.js";

export const saveMultiple = (request, response, next) => {
    Tent.create(request.body.tents)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "Tent details  are saved...", status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}

export const viewAll = (request, response, next) => {
    Tent.find()
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
    Tent.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { companyName: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {
        return response.status(200).json({ tent: result, message: "Search tent", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

export const remove = (request, response, next) => {
    Tent.deleteOne({ _id: request.params.id }).then(() => {
        return response.status(200).json({ message: "Tent is Removed", status: true });
    }).catch((err) => {

        console.log(err)
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

// export const remove = async (request, response, next) => {
//     console.log(request.body);
//     try {
//        await Makeup.findByIdAndDelete(request.body.id);
//         return response.status(200).json({ message: "makeup is Removed", status: true });

//     } catch (err) {
//         return response.status(500).json({ error: "Internal Server Error", status: false });
//     }

// }
