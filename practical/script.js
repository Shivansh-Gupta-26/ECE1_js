function calculateResult(){
let n=document.getElementById("subjects").value;
let i;
let total=0;
for(i=0;i<n;i++){
    let x=parseFloat(prompt("Enter The Subject No."+(i+1)));
     total += x;
}
let average=total/n;
let grade;
if(average>=90){
    grade = "A";
}
else if(average>=75){
    grade = "B";
}
else if(average>=60){
    grade = "C";
}
    else if(average>=40){
    grade = "D";
    }
    else{
    grade = "F";
    }

      let r=document.getElementById("result").innerHTML="Total Marks"+total+"<br>Average Marks: "+average+"<br>Grade: "+grade;

}