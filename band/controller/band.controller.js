import Band from "../models/band.model.js";

export const saveMultiple = (request, response, next) => {
    Band.create(request.body.bands)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "Band are saved...", status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}

// Route handler for /viewAll
export const viewAll = (request, response, next) => {
    Band.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ BandDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};

// Route handler for /viewById/:id
export const viewById = (request, response, next) => {
    const id = request.params.id; // Get the id from the request parameters

    Band.findById(id)
        .then(result => {
            if (result) {
                // If a Band document is found, send it as the response
                return response.status(200).json({ BandDetails: result, status: true });
            } else {
                // If no Band document is found, send an error response
                return response.status(404).json({ Message: "Band not found", status: false });
            }
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        });
};

export const search = (request, response, next) => {
    Band.find({
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
};

export const remove = (request, response, next) => {
    Band.deleteOne({ _id: request.params.id }).then(() => {
        return response.status(200).json({ message: "Band is Removed", status: true });
    }).catch((err) => {

        console.log(err)
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};

