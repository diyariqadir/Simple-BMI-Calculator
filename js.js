var BMI; var Weight; var Height;

Weight= prompt("Please enter your weight in kg: ");
Height= prompt("Please enter your Height in meter: ");
BMI= parseInt(Weight/(Height*Height));


if (BMI>25)
{
  alert("Your BMI value is: "+ BMI + " You are over weight");
}
else if (BMI<25 && BMI>=19.5)
{
  alert("Your BMI value is: "+ BMI+ " Congrats! You are Normal!");
}
else if(BMI<19.5)
{
  alert("Your BMI value is: "+ BMI+ " You are Under Weight, you need to gain weight!");
}
else {  alert("Enter a valid input next time!");
}
