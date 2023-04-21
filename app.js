import gateway from "fast-gateway";
import express from "express";

const app=express();

app.use( gateway({
    routes: [{
      prefix: '/venue',
      target: 'http://localhost:6060/',
      
    },
    {
      prefix: '/apperals',
      target: 'http://localhost:6061/',  
    },
    {
      prefix: '/makeup',
      target: 'http://localhost:6061/',  
    },
    {
      prefix: '/mehandi',
      target: 'http://localhost:6061/',  
    },
    {
      prefix: '/',
      target: 'http://localhost:6061/',  
    },
    {
      prefix: '/apperals',
      target: 'http://localhost:6061/',  
    }
]
  })
)

app.listen("8000",()=>{
    console.log("GateWay started");
})

