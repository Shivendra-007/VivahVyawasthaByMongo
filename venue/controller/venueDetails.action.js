
import  {VenueDetails}  from "../model/venueDetails.model.js"
import { validationResult } from "express-validator";

export const save=async(request,response,next)=>{
    console.log(request.body)
    try{
    const errors=  validationResult(request.body.venues);
    
    if(!errors.isEmpty())
    
     return response.status(400).json({error:"bad request",status:true});
     
     const venueDetails = await VenueDetails.create(request.body.venues);
     
     return response.status(200).json({message:"venue details saved",status:true});
    }
    catch(err)
    {
        console.log(err);
        return response.status(500).json({error:"internal server error",status:false});
    }


}
export const removeById=async(request,response,next)=>{
    try{
        let venueDetails=await VenueDetails.updateOne({_id:request.body.venueDetailsId},{status:"false"})
        if(venueDetails.modifiedCount)
        return response.status(200).json({message:"deleted succesfully",status:true});
        return response.status(400).json({error:"request not found",status:false});
    }
    catch(err)
    {
        return response.status(500).json({error:"internal server error",status:false});
    }
}

export const allList=async(request,response,next)=>{
    try{
        let venueDetails=await VenueDetails.find()
        return response.status(200).json({venueList:venueDetails,status:true})
    }
    catch(err)
    {
        return response.status(500).json({error:"internal server error",status:false});
    }
}

export const fetchById=async(request,response,next)=>{
    try{
        let venueDetails=await VenueDetails.findById(request.params.id)
        if(venueDetails)
        return response.status(200).json({venueList:venueDetails,status:true})
        return response.status(400).json({error:"request resorses not found",status:false})
    }
    catch(err)
    {
        return response.status(500).json({error:"internal server error",status:false});
    }
}

export const activate=async(request,response,next)=>{
    try{
        let venueDetails=await VenueDetails.updateOne({_id:request.body.venueDetailsId},{status:"true"})
        if(venueDetails.modifiedCount)
        return response.status(200).json({message:"venue activate succesfully", status:true});
        return response.status(400).json({error:"request not found", status:false});
    }
    catch(err)
    {
        return response.status(500).json({error:"internal server error",status:false});
    }
}

export const activeList=async(request,response,next)=>{
    try{
        let venueDetails=await VenueDetails.find({status:"true"})
        return response.status(200).json({venueList:venueDetails,status:true})
    }
    catch(err)
    {
        return response.status(500).json({error:"internal server error",status:false});
    }
}

export const saveImages=async(request,response,next)=>{
     try{
        let venue=await find({_id:request.params.id})
        if(!venue)
         return response.status(404).json({error:"request resorses not found",status:false})
         
       await (request.body.image).map((img,index)=>{
            venue.images.push(img)
        })
        venue.save();
        return response.json({message:"images save",status:true})
         
     }
     catch(err)
     {
       console.log(err);
       return response.json({error:"internal server error",status:false})
     }
}