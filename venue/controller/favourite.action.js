import { validationResult } from "express-validator";
import { Favourite } from "../model/favourite.model.js";

export const addFavourite = async (request, response, next) => {
    try {
        const errors = await validationResult
            (request);
        if (!errors.isEmpty())
            return response.status(400).json({ error: "bad request", status: true });
        const venueDetails = await Favourite.create(request.body);
        return response.status(200).json({ message: "Add to favourite", status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "internal server error", status: false });
    }

}

export const byCustomerId = async (request, response, next) => {
    try {
        const customerId=request.params.customerId 
        const favourite = await Favourite.find({ customerId: customerId }).populate("venueId")
        try {
          const makeupFavourite= await axios.get('http://localhost:6062/makeup/favourite/'+{customerId});
          return response.status(200).json({ favouriteList: favourite+makeupFavourite, message: "" });
           
        } catch (error) {
            res.status(500).send('Error notifying EmailService');
        }
        
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal server error" });
    }

}

export const removeFromFavourite = async (request, response, next) => {
    try {
        let requests = await Favourite.findByIdAndDelete(request.body._id)
        if (requests)
            return response.status(200).json({ message: "favourite remove successfully", status: true })
        return response.status(400).json({ error: "request resorses not found", status: false })
    }
    catch (err) {
        return response.status(500).json({ error: "internal server error", status: false })
    }
}