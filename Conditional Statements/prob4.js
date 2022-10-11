//database
let stored_user="fw23_0306";
let stored_pass="1234";
//user input
let user="fw23_0306";
let pass="1243";

if (stored_user==user){
  if (stored_pass==pass){
    console.log("login successful");
  }else{
    console.log("incorrect password");
  }
}else{
  console.log("wrong credentials");
}