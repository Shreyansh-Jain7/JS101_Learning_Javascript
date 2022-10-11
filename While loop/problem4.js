let x=0;
let sum=0;
let count=0;
while(x<=100){
  if(x%2==0){
    sum+=x;
    count++;
  }
  x++;
}
console.log(sum/count);