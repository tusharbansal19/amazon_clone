let cnv=document.querySelectorAll(".slt");
let img=document.querySelectorAll(".to imp");
let op=document.querySelector("#op");

let i=0;
let URL="https://v6.exchangerate-api.com/v6/3a7606882a81f9dd6da52fc6/pair/USD/INR";
for(let x of cnv){
    for(let y in  countryList){
        let temp=document.createElement("option");
        temp.value=y; 
        temp.innerHTML=y;
        x.append(temp);
    }
    if(x.pk=="USD")    x.parentElement.querySelector("img").src=`https://flagsapi.com/${countryList[x.pk]}/flat/64.png`
    // if(x.pk=="INR")
    x.addEventListener("change",()=>{
        x.parentElement.querySelector("img").src=`https://flagsapi.com/${countryList[x.value]}/flat/64.png`;
        
    });
}

// let x=document.querySelectorAll("select");
// x[0].parentElement.  x.parentElement.querySelector("img").src=`https://flagsapi.com/${"IN"}/flat/64.png`;

let rt=document.getElementById("rt");
let inp=document.querySelector("input");
// let c;
// if(import.value=="")
// c=1;
let mp=document.getElementById("mp");
// let h=document.querySelector("#he");
// let s=document.querySelector("#she");
let btn=document.querySelector("#btn");
btn.addEventListener("click",async()=>{
    let x=cnv[0].value;
    let y=cnv[1].value;
    console.log(x,y);
    let new_URL=`https://v6.exchangerate-api.com/v6/3a7606882a81f9dd6da52fc6/pair/${x}/${y}`;

    let responce=await fetch(new_URL);
    let data=await responce.json();
    let inp=document.querySelector("input");
    let amp=parseInt(inp.value);
    console.log(data.conversion_rate,inp.value);
    // op.innerHTML="CONVERSION RATE "+data.conversion_rate;
    if(inp.value==''){
        amp=parseFloat(1);
    }
    rt.innerText=`The rate of this conversion is ${data.conversion_rate}`;
    x=parseFloat(data.conversion_rate)*amp;
    mp.innerText=`Ammount is ${x}`;
    
})