import Bughi from "../models/bughi.model.js";

export const saveMultiple = (request, response, next) => {
    Bughi.create(request.body.bughis)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "Bughi are saved...", status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}

// Route handler for /viewAll
export const viewAll = (request, response, next) => {
    Bughi.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ bughiDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};

// Route handler for /viewById/:id
export const viewById = (request, response, next) => {
    const id = request.params.id; // Get the id from the request parameters

    Bughi.findById(id)
        .then(result => {
            if (result) {
                // If a bughi document is found, send it as the response
                return response.status(200).json({ bughiDetails: result, status: true });
            } else {
                // If no bughi document is found, send an error response
                return response.status(404).json({ Message: "Bughi not found", status: false });
            }
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};

export const search = (request, response, next) => {
    Bughi.find({
        $or: [
            { address: { $regex: request.params.keyword, $options: 'i' } },
            { companyName: { $regex: request.params.keyword, $options: 'i' } },
            { category: { $regex: request.params.keyword, $options: 'i' } },
            { description: { $regex: request.params.keyword, $options: 'i' } }
        ]
    }).then(result => {
        return response.status(200).json({ bughi: result, message: "Search Bughi", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

export const remove = (request, response, next) => {
    Bughi.deleteOne({ _id: request.params.id }).then(() => {
        return response.status(200).json({ message: "Bughi is Removed", status: true });
    }).catch((err) => {

        console.log(err)
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

