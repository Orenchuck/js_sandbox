let ip = '';

fetch('http://api.sypexgeo.net/')
.then(response => response.json()) 
.then(data => {
  //console.log(data)
  ip = data.ip;

  let url = 'https://api.jsonbin.io/g/' + ip;

fetch (url, {
    method: 'GET'
})
.then (response => response.json())
.then (data => {
    //console.log (data)
    const div = document.createElement ('div');
    document.body.append(div);
  
    let text = `Your country is ${data.data.country}, your city is ${data.data.city}`;
    div.id = 'res';
    div.innerHTML = text;
    const firstDiv = document.getElementById('first');
    document.body.removeChild(firstDiv);
})
.catch(error => console.error(error))


})
.catch(error => console.error(error))
console.log (ip);



const SECRET_KEY = '$2a$10$W9h6YjYM3QhL/rUic93.xuBHOAa9a4KINOLzYR9BTq0GYMUuFVfHm';
function postData(data){
  return fetch('https://api.jsonbin.io/b', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'secret-key': SECRET_KEY,
          'private': 'true',
      },
      body: JSON.stringify(data),
  });
}

const id = '5d10e4523c843d13d805a9bd';
function getData(id){
  return fetch(`https://api.jsonbin.io/b/${id}/latest`, {
      method: 'GET',
      headers: {
          'secret-key': SECRET_KEY,
      },
  })
  .then(response => response.json());
}


function updateData(id, data){
  return fetch(`https://api.jsonbin.io/b/${id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          'secret-key': SECRET_KEY,
      },
      body: JSON.stringify(data),
  });
}
let data = {1:'1'};

/*postData (data)
//.then(data => console.log(data))
.catch(error => console.error(error))
.then(res => res.json())
.then(res => console.log(res));*/



const button = document.getElementById('add');
const input = document.getElementById ('input');
const div = document.getElementById ('result');
const list = document.getElementById ('list');
let arr = [];

getData (id)
.then(data => {
  console.log(data);

  for (let i=0; i<data.length; i+=1) {
    let li = document.createElement('li');
    list.append (li);
    li.innerHTML = data[i];
  }
});
  
let i = 0;

getData.onload = addLi;

function empty () {
  if (input.value == '') {
    alert ('empty, try again');
    button.addEventListener ('click', () => {
      val = input.value;
      empty();
    })
  }
  return val;
}

function addLi () {
  let val = input.value;

  empty ();
  arr.push(val);
    
  updateData (id, arr);

  getData (id)
.then(data => {
  console.log(data);

let li = document.createElement('li');
list.append (li);

li.innerHTML = data[i];
i += 1;

input.value = '';
})
.catch(error => console.error(error));
}

button.addEventListener ('click', addLi);


