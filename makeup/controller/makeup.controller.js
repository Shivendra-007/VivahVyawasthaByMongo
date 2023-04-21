import Makeup from "../models/makeup.model.js";


export const save=async(request,response,next)=>{
    try{
    const errors=await validationResult(request);

    if(!errors.isEmpty())
     return response.status(400).json({error:"bad request",status:true});

     const makeup=await Makeup.create(request.body);
      return response.status(200).json({message:"makeup details saved",status:true});
    }
    catch(err)
    {
        console.log(err);
        return response.status(500).json({error:"internal server error",status:false});
    }


}

export const viewAll = (request, response, next) => {
    Makeup.find()
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
    Makeup.find({
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

export const remove=async(request,response,next)=>{
    try{
        let venueDetails=await Makeup.updateOne({_id:request.params.venueDetailsId},{status:"false"})
        if(venueDetails.modifiedCount)
        return response.status(200).json({message:"deleted succesfully",status:true});
        return response.status(400).json({error:"request not found",status:false});
    }
    catch(err)
    {
        return response.status(500).json({error:"internal server error",status:false});
    }
}

export const activeList=async(request,response,next)=>{
    try{
        let venueDetails=await Makeup.find({status:"true"})
        return response.status(200).json({venueList:venueDetails,status:true})
    }
    catch(err)
    {
        return response.status(500).json({error:"internal server error",status:false});
    }
}

export const activate=async(request,response,next)=>{
    try{
        let makeup=await Makeup.updateOne({_id:request.body.venueDetailsId},{status:"true"})
        if(makeup.modifiedCount)
        return response.status(200).json({message:"venue activate succesfully", status:true});
        return response.status(400).json({error:"request not found", status:false});
    }
    catch(err)
    {
        return response.status(500).json({error:"internal server error",status:false});
    }
}



