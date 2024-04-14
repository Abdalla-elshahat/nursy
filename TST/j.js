let tablet=document.querySelector(".table");
let bottom=document.querySelector(".bottom");
let contener=document.querySelector(".contener");
let accept=document.querySelector(".accept");
let rejected=document.querySelector(".rejected");
fetch('https://sheetdb.io/api/v1/md3toruwp7l9o')
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.map((e)=>{
      let tbody=document.createElement("tbody");
      const arr=Object.values(e);
      for(let i=0;i<arr.length-1;i++){
                let td=document.createElement("td");
        td.innerHTML=arr[i];
        tbody.appendChild(td);
      }
        let tdt=document.createElement("td");
          let but1=document.createElement("button");
          but1.innerHTML="Rejected";
          but1.className="rejected";
          tdt.appendChild(but1);
tbody.appendChild(tdt);
  let td=document.createElement("td");
  let but2=document.createElement("button");
  but2.innerHTML="Accept";
  but2.className="accept";
  td.appendChild(but2);
tbody.appendChild(td);
      tablet.appendChild(tbody);
        but1.addEventListener("click",(b)=>{
          b.preventDefault();
           let rowIndex = Array.prototype.indexOf.call(b.target.parentNode.parentNode.parentNode.children, b.target.parentNode.parentNode);
                    // let rowID = data[rowIndex - 1].id;
                    fetch(`https://sheetdb.io/api/v1/md3toruwp7l9o/`, {
                        method: "DELETE"
                    }).then(() => {
                        tablet.removeChild(b.target.parentNode.parentNode);
                    });
      })
      but2.addEventListener("click",function(x){
        x.preventDefault();
        let rowIndex = Array.prototype.indexOf.call(x.target.parentNode.parentNode.parentNode.children, x.target.parentNode.parentNode);
        let rowID = data[rowIndex - 1].Type;
        rowID.value="DD"
        console.log(rowID)
        fetch(`https://sheetdb.io/api/v1/md3toruwp7l9o`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            values: [["Waiting to accept"]] // Update the value here
          })
        }).then(() => {
          // Optionally, you can update the button text or perform other actions upon successful update.
          but2.innerHTML = "Accepted"; // Example of changing button text
          but2.style.backgroundColor="green"
          but2.style.color="white"
          but1.style.display="none"

        });
      })
    })
    console.log(data)
  })
  