let name = document.querySelector(".first_name");
let age = document.querySelector(".age");

function save_data() {
  let new_obj = {
    name: name.value,
    age: age.value,
  };
  console.log(new_obj);
  firebase.database().ref("student").child("student1").set(new_obj); // tells reference to firebase
  // or above line can be written as
  //firebase.database().ref("student/student1").set(new_obj);
}

console.log(firebase, firebase.database);
