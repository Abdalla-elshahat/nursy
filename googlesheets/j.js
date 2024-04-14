let form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
   e.preventDefault();
   fetch(form.action,{
      method:"POST",
      body:new FormData(form)
   }).then((response)=>response.json()
   ).then((reslt)=>{
   })
})
