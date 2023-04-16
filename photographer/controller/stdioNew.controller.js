import StdioNew from "../models/stdioNew.model.js";
import { validationResult } from "express-validator";
export const saveMultiple = (request, response, next) => {
    StdioNew.create(request.body.stdionews)
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "Stdio are saved...", status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}

export const viewAll = (request, response, next) => {
    StdioNew.find()
        .then(result => {
            console.log(result);
            return response.status(200).json({ stdioDetails: result, status: true });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Message: "Internal Server error...", status: false });
        })
}

export const search = (request, response, next) => {
    StdioNew.find({
        $or: [
            { name: { $regex: request.params.keyword, $options: 'i' } },
            { location: { $regex: request.params.keyword, $options: 'i' } },
            { services: { $regex: request.params.keyword, $options: 'i' } }

        ]
    }).then(result => {
        return response.status(200).json({ stdio: result, message: "Search Stdio", status: true });
    }).catch((err) => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
};
// stdioNew.controller.js






import mongoose from "mongoose";
// import { validationResult } from "express-validator";
// import StdioNew from "../models/stdioNew.model.js";

// Function to add a service
export const addService = (req, res) => {
  // Extract necessary data from the request body or parameters
  const { serviceName, serviceDescription, _id } = req.body;

  // Validate the request data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Send an error response if there are validation errors
    return res.status(400).json({ success: false, message: "Validation failed", errors: errors.array() });
  }

  // Convert _id to a valid ObjectId
  const stdioId = mongoose.Types.ObjectId(_id);

  // Update the service in the database
  StdioNew.findByIdAndUpdate(
    stdioId,
    { $push: { services: { type: serviceName, description: serviceDescription } } },
    { new: true }
  )
    .then(updatedStudio => {
      if (updatedStudio) {
        // Send a response indicating success
        res.status(201).json({ success: true, message: "Service added successfully", data: updatedStudio });
      } else {
        // Send an error response if the photo studio is not found
        res.status(404).json({ success: false, message: "Photo studio not found" });
      }
    })
    .catch(err => {
      // Send an error response if any error occurs
      res.status(500).json({ success: false, message: "Failed to add service", error: err });
    });
};





// export const addService = (request, response, next) => {
//     const stdioId = request.params._id; // Assuming "stdioId" is the parameter for the StdioNew ID
//     const updateData = request.body.stdionews; // Assuming "stdionews" is the data to be updated

//     // Add the new service to the "services" field in the request body data
//     const newService = request.body.newService; // Assuming "newService" is the new service to be added
//     updateData.services.push(newService); // Push the new service to the "services" array

//     StdioNew.findByIdAndUpdate(stdioId, updateData, { new: true })
//         .then(result => {
//             if (result) {
//                 console.log(result);
//                 return response.status(200).json({ Message: "Stdio Service added successfully.", status: true });
//             } else {
//                 return response.status(404).json({ Message: "Stdio not found.", status: false });
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             return response.status(500).json({ Message: "Internal Server error...", status: false });
//         })
// }


