const xhr = new XMLHttpRequest();
const url = 'https://api.chucknorris.io/jokes/random';
xhr.onreadystatechange = ()=>{
  if(xhr.readyState==4 && xhr.status==200){
    // console.log(xhr.responseText);
    const responseStr = xhr.responseText;
    const responseObj = JSON.parse(responseStr);
    console.log(responseObj);
  }

}  

xhr.open('GET', url);
xhr.send();
// console.log(xhr);
