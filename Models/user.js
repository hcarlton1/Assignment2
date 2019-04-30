var userID, firstName, lastName, email, address1, city, state, zipcode, country;
function newUser(userID, firstName, lastName){
  return{userID: userID,
    firstName:firstName,
    lastName:lastName};
}
module.exports = {userID, firstName, lastName, email, address1, city, state, zipcode, country, newUser};
