const button1 = document.getElementById('convert');
button1.addEventListener('click', () =>{ get('https://api.exchangeratesapi.io/latest')
.then(data => {
  console.log(data);
  let sel1 = document.getElementById('select1');
    sel1User = sel1.options[sel1.selectedIndex].value;

    let sel2 = document.getElementById('select2');
    sel2User = sel2.options[sel2.selectedIndex].value;

    res1 = 0;
    res2 = 0;

    for (let key in data.rates) {
      if (key == sel1User) {
        res1 = data.rates[key];
      }
      else if (data.base == sel1User) {
        res1 = 1;
      }
    }

    for (let key1 in data.rates) {
      if (key1 == sel2User) {
        res2 = data.rates[key1];
      }
      else if (data.base == sel2User) {
        res2 = 1;
      }
    }
//console.log (res1, ' ', res2);
    let result = (res2 / res1).toFixed(3);
    let text = `На сегодня курс 1 ${sel1User} к ${sel2User} равен ${result}`;
    const div = document.createElement('div');
    div.id = 'resDiv1';
    document.body.append(div);
    div.innerHTML = text;
    div.style.display = 'block';

    const but = document.createElement('button');
    but.innerHTML = "Close";
    div.appendChild(but);
    but.id = "close";

    but.addEventListener('click', () => {
      div.style.display = 'none';
    })
})
.catch(error => console.error(error))})


function get(firstURL, data) {
return fetch(firstURL, {
  credentials: 'same-origin',  // параметр определяющий передвать ли разные сессионные данные вместе с запросом
  method: 'GET',              // метод POST 
  body: JSON.stringify(data),  // типа запрашиаемого документа
})
.then(response => response.json()) // возвращаем промис
}

function makeURL (data) {
    let sel1 = document.getElementById('select1');
    sel1User = sel1.options[sel1.selectedIndex].value;

    let sel2 = document.getElementById('select2');
    sel2User = sel2.options[sel2.selectedIndex].value;

    res1 = 0;
    res2 = 0;

    for (let key in data.rates) {
      if (key == sel1User) {
        res1 = data[rates][key];
      }
    }

    for (let key in data.rates) {
      if (key == sel2User) {
        res2 = data[rates][key];
      }
    }

    let result = res2 / res1;
    let text = `На сегодня курс 1 ${sel1User} к ${sel2User} равен ${result}`;

    //let resURL =  "https://api.exchangeratesapi.io/latest?symbols=" + sel1User + "," + sel2User;
    return text;
}



const button2 = document.getElementById('hist');
button2.addEventListener('click', () =>{ 
  const input1 = document.getElementById('date1');
const input2 = document.getElementById('date2');
let start = input1.value;
let end = input2.value;
  get(`https://api.exchangeratesapi.io/history?start_at=${start}&end_at=${end}`)
.then(data => {
  console.log(data);
  let history = '';
  for (let key in data.rates) {
    history += `${key}: \n EUR 1 `;
    for (let key2 in data.rates[key]) {
      if (key2 == 'EUR' || key2 == "USD" || key2 == "GBP") {
        history += `${key2}: ${data.rates[key][key2]}`;
      history += '\n';
      }
      
    }
  }
      
    let text = `Курсы валют с ${start} по ${end}:\n ${history}`;
    const div = document.createElement('div');
    div.id = 'resDiv2';
    document.body.append(div);
    div.innerHTML = text;
    div.style.display = 'block';

    const but = document.createElement('button');
    but.innerHTML = "Close";
    div.appendChild(but);
    but.id = "close";

    but.addEventListener('click', () => {
      div.style.display = 'none';
    })
})
.catch(error => console.error(error))})