const endDate=`1 january 2024 10:00 pm`;
const inputs=document.querySelectorAll(`input`);

document.getElementById(`end-date`).innerText=endDate;

function clock(){
    const end=new Date(endDate);
    const now=new Date();
    
   
   // diff is in milli second
   let diff=end-now;
   // now we have to convert milli second into second
   diff=diff/1000;
   if (diff<0)return;

  
   // convert into dates
 inputs[0].value= Math.trunc(diff/3600/24);
 // convert into hours
 inputs[1].value=Math.trunc((diff/3600)%24);
 //convert into minuts
 inputs[2].value=Math.trunc((diff/60)%60);
 // convert into seconds
 inputs[3].value=Math.trunc(diff%60);

}
clock();
setInterval(
    ()=>{
        clock()
    },1000
)