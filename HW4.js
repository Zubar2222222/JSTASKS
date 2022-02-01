let user = {
  name: "Antony",
  height: 180 
};

let key = prompt("what would you like to know about user?", "name");

// acces to the property thrue variable
alert( user[key] );

function makeUser(name, age ) {
   return {
      name,
      age 
   };
}

let user = makeUser("Antony", 30);
alert(user.name);

let user = { age: 30};

let key = "age";
alert( key in user );

let user = {
  name: "Antony",
  age: 30,
  isAdmin: true 
};
for (let key in user) {
  alert( key );
  alert( user[key] );
}
user = {
   sayHi: function() {
      alert("Holla!");
   }
};

let user = {
  firstName: "Antony",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Antony
