console.log("hello anushka ");
const URL="https://catfact.ninja/fact";
const fun_api=async()=>{
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    console.log(data.fact);

    let x=document.querySelectorAll(".cat_fact")[0];
    x.innerHTML=data.fact+"maja";
    
}
fun_api();