
import NewMakeup from "../models/newmakeup.model.js";

export const save = (request, response, next) => {
    NewMakeup.create(request.body.newmakeups)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "makeup are saved...", status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}
export const pricing = (request, response, next) => {

    const { type, rate, description } = request.body;

    if (!type || !rate || !description) {
        return response.status(400).json({ message: 'Missing required fields' });
    }
    const newPricingObject = { type, rate, description };
    pricing.push(newPricingObject);
    return response.status(200).json({ Message: "makeup are saved...", status: true });
    
}
export const viewAll = (request, response, next) => {
    NewMakeup.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ makeupDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}

export const search = (request, response, next) => {
    NewMakeup.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { companyName: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {
        return response.status(200).json({ makeup: result, message: "Search makeup", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

export const remove = (request, response, next) => {
    NewMakeup.deleteOne({ _id: request.params.id }).then(() => {
        return response.status(200).json({ message: "makeUp is Removed", status: true });
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
