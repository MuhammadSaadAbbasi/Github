// let name = "saad"
// const x = {
//     username: "saad",

//     x: function() {
//         console.log(this.username); 
//     },

//     y: function() {
//         console.log(this.username);
//     }
// };

// x.x(); 
// x.y(); 
// xtt= function() {
//     console.log(this.name);
// },
// xtt();

// let owner = "GlobalOwner";
this.owner = "GlobalOwner"; // now it's a property of the global object

const house = {
  owner: "Saad",

  localEmployee: function () {
    console.log("Local:", this.owner);
  },

  deliveryGuy: () => {
    console.log("Arrow:", this.owner);
  }
};

house.localEmployee(); // Local: Saad ✅
house.deliveryGuy();   // Arrow: GlobalOwner ❌
