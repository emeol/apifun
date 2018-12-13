const btn=document.querySelector("#getJoke");
const output = document.querySelector('#output');
console.log(btn);
btn.addEventListener("click", getJoke);


function getJoke(){
  const xhr = new XMLHttpRequest();
  const url = 'https://api.chucknorris.io/jokes/random'

  xhr.onreadystatechange = ()=>{
    if (xhr.readyState==4 && xhr.status==200){
      const strR = xhr.responseText;
      const objR = JSON.parse(strR);
      output.innerHTML = objR.value;
    }
  }

  xhr.open('GET',url);
  xhr.send();
  console.log(xhr);

}