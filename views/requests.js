const httpGetRatedHotels = function (){
    // return list of information of 20 hotels as javascript object named listOfHotels
    //the object should contain name of the img inside public folder with prefix "static/" ,
    //the name of the hotel as hotelName, 
    //the hotel id  as hotelId , and
    //rating of the hotel as ratingOfHotel
    // example => listOfHotels = [{src : "static/img-1.png" , hotelId  , hotelName : "Sheraton Addis" ,  ratingOfHotel : 4}]

    //the following return should be erased once the data from the backend is obtained

    return [
        {
            src : "static/img-1.png" , hotelName : "Sheraton Addis",hotelId :1 , ratingOfHotel : 5
        },
           {
            src : "static/img-2.png" , hotelName : "Hilton Hotel" ,hotelId :2 ,  ratingOfHotel :5
        }, 
          {
            src : "static/img-3.png" , hotelName : "Inter lexury",hotelId :3 , ratingOfHotel : 5
        },
           {
            src : "static/img-4.png" , hotelName : "Inter continental", hotelId :4 , ratingOfHotel : 5} , 
           {
            src : "static/img-5.png" , hotelName : "Capital Hotel" ,hotelId :5 ,  ratingOfHotel  :4
        },
           {
            src : "static/img-6.png" , hotelName : "Sky light", hotelId :6 , ratingOfHotel :4
        },

        {
            src : "static/img-7.png" , hotelName : "Blue Magic", hotelId :7 , ratingOfHotel : 4
        },

        {
            src : "static/img-8.png" , hotelName : "Garalay Hotel" , hotelId :8 , ratingOfHotel :4
        },

        {
            src : "static/img-4.png" , hotelName : "Tom international", hotelId :9 , ratingOfHotel :4
        },

    ]

}


function httpGetHotelInformation(id){
 //This function should return information of the hotel specified by Id
 // The information should contain article , reviews , and images of the hotel

 return [
   
    {
    article : "Certain but she but shyness why cottage. Gay the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended. Parlors men express had private village man. Discovery moonlight recommend all one not. Indulged to answered prospect it bachelor is he bringing shutters. Pronounce forfeited mr direction oh he dashwoods ye unwilling.",
    src : "static/img-8.png",
 },
{
    article : "Was certainty remaining engrossed applauded sir how discovery. Settled opinion how enjoyed greater joy adapted too shy. Now properly surprise expenses interest nor replying she she. Bore tall nay many many time yet less. Doubtful for answered one fat indulged margaret sir shutters together. Ladies so in wholly around whence in at. Warmth he up giving oppose if. Impossible is dissimilar entreaties oh on terminated. Earnest studied article country ten respect showing had. But required offering him elegance son improved informed.",
    src : "static/img-3.png",
}

]

}


const  httpGetRatingInfo = function(id){
    //return a list of objects with attributes personId , ratingOfPerson , personName , personReview
    
    return [
        {
            personId : 100 , personName : "Mr.X" , ratingOfPerson : 5 , personReview : "This is the best hotel I have ever seen"
        },
        {
            personId : 200 , personName : "Mr.B" , ratingOfPerson : 4 , personReview : "This is the gratest hotel I have ever seen"
        },
        {
        personId : 101 , personName : "Mr.A" , ratingOfPerson : 3 , personReview : "Not this much actually"
        },
    ]
}

function getHotelNameById(id){
//return the name of a hotel by Id
 const hotelData = {
    9 : "Tom internationl", 
    2 : "Hilton hotel",
}
return "Tom international"
}


module.exports = {
    getHotelNameById,
    httpGetRatedHotels,
    httpGetHotelInformation,
    httpGetRatingInfo,
}