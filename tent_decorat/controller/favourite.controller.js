import Favourite from "../models/favourite.model.js";

export const saveMultiple = (request, response, next) => {
    Favourite.create(request.body.favourites)//;//favourites becase JSON {} ke pahle likhte h wahi aaayega send krte time
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "Favourite are saved...", status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}

export const viewAll = (request, response, next) => {
    Favourite.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ result: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}


export const remove = (request, response, next) => {
    Favourite.deleteOne({ _id: request.params.id }).then(() => {
        return response.status(200).json({ message: "Favourite is Removed", status: true });
    }).catch((err) => {

        console.log(err)
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};
