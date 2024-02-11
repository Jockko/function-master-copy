//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // code
//given an object
//create an array filled with it's values
var result = [];
for(let key in object){
    result.push(object[key]);
}
return result;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//should return a string of all the keys inside object spearted by a space
//result set to an array of values using Objec.keys method
var result = Object.keys(object);
console.log(result);
//return the array of values joined by a space into one string
return result.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var storage = []
   for(let key in object){
    if(typeof object[key] === "string"){
        storage.push(object[key]);
    }
    
   }

   console.log(storage);
   return storage.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
   if(Array.isArray(collection)){
    return 'array';
   }
   else { return "object"};

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return string.charAt(0).toUpperCase() + string.slice(1)
return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //console.log(string);
var words = string.split(" ");
//capitalize each first letter of our words
for(let i = 0; i < words.length; i++){
   words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
return words.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //Must account for lowerCase first letter of name and make sure it's capitalized
    return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!"; 

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //should log Name is a Species
return object.name[0].toUpperCase() + object.name.slice(1)  + " is a " + object.species[0].toUpperCase() + object.species.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//if this object has a noises array with values inside, return that data as a string seperated by spaces
if(Array.isArray(object.noises) && object.noises.length > 0){
    return object.noises.join(" ");
}
//otherwise return there are no noises
return "there are no noises"
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//if word is inside of string, return true. Otherwise return false
console.log("STRRINGG", string,"WOOORDDD", word)
//split string into an array to have access to each word inside the string
let stringArr = string.split(" ");
//loop through the stringArr to compare each word with our given word
for(let i = 0; i < stringArr.length; i++){
    //if the current string matches word
    if(stringArr[i] === word){
        //return true
        return true
    }
}
//Otherwise
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
console.log("BIG DAWG", object.friends)
object.friends.push(name)
console.log("FRIENDS< HOW MANY OF US HAVE THEM?", object.friends);
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // if(!object.keys){
    //     return false;
    // }
    //if there are no keys in the object
    if(Object.keys(object).length === 0){
        return false;
    }
else if(object.friends.includes(name)){
    return true;
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
console.log("ARRAY!", array, "NAME", name);
//array is a list of objects
let list = [];
for(let i = 0; i < array.length; i++){
console.log("HI THERE BROTHER", array[i].friends);
if(name !== array[i].name){
    if(array[i].friends.includes(name) === false){
        console.log("BAM", array[i].name);
        list.push(array[i].name);
    }

}
}
return list;
//return a list of all the non friends (friends that don't include name)


}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
if(!object[key]){
    object[key] = value;
}
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //array is an array of strings used to compare with each key in object 
for(let key in object){
    for(let i = 0; i < array.length; i++){
        //if the key name matches the current string
        if(key === array[i]){
            //remove that property
            delete object[key];
        }
    }
}
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//create non duplicate array
let nonduplicates = [];
for(let i = 0; i < array.length; i++){
    //check if the current element doesn't match the next 2 elements
    if(array[i] !== array[i + 1] && array[i] !== array[i + 2]){
        //if no match, it's not a duplicate
        nonduplicates.push(array[i]);
    }

}
return nonduplicates;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}