let x=4000;
if (x>3999){
  x=x-(0.1*x);
  console.log(x,"Got Discount");
}
else{
  console.log("Not Eligibile");
}