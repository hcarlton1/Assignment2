var User = require('../Models/user.js');
var userProfile = require('../Models/userProfile.js');
//getUser - gets information on all users
module.exports.getUsers = function(){
  var users = [];
  for(let i=0; i< userData.length; i++){
    var user = new User(userData[i].userID,
      userData[i].firstName,
      userData[i].lastName,
      userData[i].email );

    users.push(user);
  }
  return users;

};
// var userinfo = user.newUser(01, 'Hunter', 'Carlton', 'hcarlton@uncc.edu');
//
//
// module.exports.getUsers =function(){
//   return userinfo;
// }
// module.exports.UserProfiles =function (userID, userItems){
//   this.userID = userID;
//   this.userItems = userItems
// }
// module.exports = {userinfo};
var userData =[
  {
    userID: 2,
    firstName: "Hunter",
    lastName: "Carlton",
    email: "hcarlton@uncc.edu",
    password: "1234",
    address1: "9201 University City Blvd",
    address2: "n/a",
    city: "Charlotte",
    state: "NC",
    zipcode: "28223",
    country: "US",
  },
  {
    UserID: 1,
    UserName: "huntercarlton",
    Email: "hcarlton@uncc.edu",
    Password:"1234"
  }
];
