const btn = document.querySelector("button");
const output =document.querySelector("#output");
const intake = document.querySelector("input");
let url = "https://randomuser.me/api";

btn.addEventListener("click", getInput);

function getInput() {
  const xhr = new XMLHttpRequest();
  let tempIntake = intake.value;
  let tempUrl = url + "?results=" + tempIntake;
  xhr.onload = function(){
    if (xhr.readyState===4 && xhr.status=="200"){
      let data = JSON.parse(xhr.responseText).results;
      outputHtml(data);
    }
  }

  xhr.open("GET", tempUrl);
  xhr.send();
  // console.log(xhr);
}

function outputHtml(data) {
  data.map((d)=>{
    output.innerHTML += d.email + '<br/>';
  });
}