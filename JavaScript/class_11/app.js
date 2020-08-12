let name = document.querySelector(".first_name");
let age = document.querySelector(".age");

function save_data() {
  //firebase.database().ref("student").child("student1").set(new_obj); // tells reference to firebase
  // or above line can be written as
  //firebase.database().ref("student/student1").set(new_obj);

  // to avoid replacement/ overwriteness
  //let generated_key = firebase.database().ref("student").child("student1").push(new_obj); // tells reference to firebase

  let generated_key = firebase.database().ref("student").push().key;
  let new_obj = {
    name: name.value,
    age: age.value,
    key: generated_key,
  };
  console.log(new_obj);
  firebase
    .database()
    .ref("student/" + generated_key)
    .set(new_obj);
}

function getFirebaseData() {
  //   firebase
  //     .database()
  //     .ref("student")
  //     .once("value", function (data) {
  //       console.log(data.val());
  //     });          firebase used once to retrieve data only once

  firebase
    .database()
    .ref("student")
    .on("child_added", function (data) {
      console.log("database, ", data.val());
    });
}

console.log(firebase, firebase.database);

getFirebaseData();

function removeFirebaseData() {
  //firebase.database().ref('student').remove();        //delete all data
  firebase.database().ref("student/key").remove();
}

function editFirebaseData() {
  firebase.database().ref("student/key").set({
    key: "same key",
    name: "basit",
    age: 34,
  });
}
