var Item = require('./item.js');

module.exports.getItems = function(){
  let items = [];
  for(let i=0; i< data.length; i++){
    let item = new Item(data[i].itemCode,
        data[i].itemName,
        data[i].category,
        data[i].price,
        data[i].area,
        data[i].description,
        data[i].rating,
        data[i].ImageURL);

    items.push(item);
  }
  return items;
};

module.exports.getItem = function(itemCode){
  console.log("from db, id is: " + itemCode)
  for(var i=0; i<data.length;i++){

    console.log("data" + JSON.stringify(data[i].ImageURL));
    if(parseInt(data[i].itemCode) == itemCode ){
      console.log("Inside if");
      let item = new Item(data[i].itemCode,
          data[i].itemName,
          data[i].category,
          data[i].price,
          data[i].area,
          data[i].description,
          data[i].rating,
          data[i].ImageURL
        )
        console.log("item" + JSON.stringify(item));

        return item;
    }
  }
};





var data = [

  {
    itemCode: 1,
    ItemName: "Chasing Light Rails in the Queen City - Framed.",
    Category: "Landscape",
    Price: "$40.00",
    Description:"This long exposure captures the vibrant lights reflecting off not only the buildings but as well as the light rail train as it passes by. Captured in this long exposure is a Light Rail train passing through the 4th Ward Station." ,
    ImageURL: '/assets/images/DSC_5939.jpeg',
  },
  {
    ItemCode: 5,
    ItemName: "Kemba Walker's Step-back Fadeaway - Framed.",
    Category: "Sports",
    Price: "$50.00",
    Description: "Charlotte Hornets vs. Sacromento Kings. Kemba Walker (#15) shakes Justin Jackson with a nasty step back fader.",
    ImageURL: '/assets/images/DSC_7805.jpeg',
  },
  {
    ItemCode: 6,
    ItemName: "Zach LaVine, SG for the Chicago Bulls - Framed.",
    Category: "Sports",
    Price: "$50.00",
    Description: "Charlotte Hornets vs. Chicago Bulls (Pre-season). Zach LaVine, 2016 All-Star Slam Dunk Winner runs back down the court.",
    ImageURL: '/assets/images/DSC_5717.jpeg',
  },
  {
    ItemCode: 2,
    ItemName: "Jerry Richardson Stadium Aerial Print - Framed.",
    Category: "Landscape",
    Price: "$40.00",
    Description: "Jerry Richardson Football Stadium. Home of the UNC Charlotte 49er's.",
    ImageURL: '/assets/images/009B41238CEC2F88AD91ECED0FE8143D.jpeg',
  },

  {
    itemCode: 115,
    itemName: "Miles Bridges Tomahawk Dunk - Framed.",
    category: "Sports",
    price: "$50.00",
    area: "Spectrum Center, Home of Charlotte Hornets",
    description: "Charlotte Hornets vs. Sacromento Kings. Miles Bridges slams down a filthy tomahawk dunk through tough defense.",
    rating: 5,
    ImageURL: '/assets/images/DSC_7267.jpeg',
  },
  {
    ItemCode: 3,
    ItemName: "Charlotte Skyline Aerial Print - Framed.",
    Category: "Landscape",
    Price: "$40.00",
    Description: "Charlotte Skyline. Showing some great tones.",
    ImageURL: '/assets/images/44EDE802AF56F43DC051F7195EA51985.jpeg',
  },
  {
    ItemCode: 4,
    ItemName: "Bank of America Stadium Aerial Print - Framed.",
    Category: "Sports",
    Price: "$50.00",
    Description: "DJI drone photo of the Bank of America Stadium. This photo was taken right before they painted on the center logo.",
    ImageURL: '/assets/images/E56A81130A4057CB90173FD417BDF6A9.jpeg',
  },
  {
    itemCode: 118,
    itemName: "North Carolina State's Bell Tower - Framed.",
    category: "Landscape",
    price: "$40.00",
    area: "North Carolina State University",
    description: "Long exposure of the North Carolina State's Bell Tower. The center point of NCSU's campus.",
    rating: 4,
    ImageURL: '/assets/images/DSC_1825.jpeg',
  },




];
exports.category = ["Landscape", "Sports"];
