const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
const url = "https://randomuser.me/api";
btn.addEventListener("click", getApi);

function getApi() {
  let tempValue = intake.value;
  let tempUrl=url+ "?results="+tempValue;
  fetch(tempUrl) 
    .then(function(resp){
      // console.log(resp);
      return resp.json();
    })
    .then(function(data){
      // console.log(data.results);
      output.innerHTML = '';
      data.results.map((x)=>{
        output.innerHTML += x.email + '<br/>'
      });
    })
}