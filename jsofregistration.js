let b= document.querySelector('button')
b.addEventListener("click",()=>{
    
    let a= document.querySelector('#rng')
    console.log(a.value)
    let g=a.value.length
    if(a.value=="male"){
        alert("sucessfull")
    }
    else{
        alert("error")
    }
})