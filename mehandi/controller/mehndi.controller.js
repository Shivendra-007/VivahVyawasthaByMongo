import Mehndi from "../models/mehndi.model.js";

export const saveMultiple = (request, response, next) => {
    Mehndi.create(request.body.mehndis)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "Mehndi are saved...", status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}

// Route handler for /viewAll
export const viewAll = (request, response, next) => {
    Mehndi.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ MehndiDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};

// Route handler for /viewById/:id
export const viewById = (request, response, next) => {
    const id = request.params.id; // Get the id from the request parameters

    Mehndi.findById(id)
        .then(result => {
            if (result) {
                // If a Mehndi document is found, send it as the response
                return response.status(200).json({ MehndiDetails: result, status: true });
            } else {
                // If no Mehndi document is found, send an error response
                return response.status(404).json({ Message: "Mehndi not found", status: false });
            }
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};

export const search = (request, response, next) => {
    Mehndi.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { companyName: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {
        return response.status(200).json({ Mehndi: result, message: "Search Mehndi", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

export const remove = (request, response, next) => {
    Mehndi.deleteOne({ _id: request.params.id }).then(() => {
        return response.status(200).json({ message: "Mehndi is Removed", status: true });
    }).catch((err) => {

        console.log(err)
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

