const {person , imagesList , stud_info} = require("./views/home");
const { httpGetHotelInformation, httpGetRatedHotels , httpGetRatingInfo , getHotelNameById} = require("./views/requests")
const express = require("express");
const app = express()
app.set("views" , "views");
app.set("view engine" , "hbs");
app.use(express.json())

app.use("/static" , express.static("public/images"))

app.get("/home" , (req , res)=>{
    res.render("home"  , {person ,
        images : imagesList,
        people: [
          "Yehuda Katz",
          "Alan Johnson",
          "Charles Jolley",
        ],
        studInfo : stud_info
    
    
    },
       


    )}
);

app.get("/front" , (req , res)=>{
    res.render("front" , {
       hotelInfo :  httpGetRatedHotels
    })
})




app.get("/hoteldetail" , (req , res)=>{
    
    
    
   
    res.render("hotel-detail" , {
        hotelName : "Tom international",
            hotelInformation :   httpGetHotelInformation ,
            ratingInfo : httpGetRatingInfo,
        
    })
})

app.get("/hotel-detail/:sth" , (req , res)=>{
    const name =  getHotelNameById(+req.params.sth)
    res.render("hotel-detail" , {
        hotelName : name,
        hotelInformation : httpGetHotelInformation,
        ratingInfo : httpGetRatingInfo
    })
})
  
module.exports = app