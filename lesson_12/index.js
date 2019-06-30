const input = document.getElementById('input');
let data = [];
let n = 1;
let result;

let saveList = localStorage.getItem('value');
if (saveList !== null && saveList !== '') {
    let initVal = localStorage.getItem('value');
    let arr = JSON.parse(initVal);


    for (let i=0; i<arr.length; i += 1) {
         let li = document.createElement('li');
       let div = document.createElement ('div');
       let checkbox = document.createElement ('input');
       let label = document.createElement ('label');
       let button = document.createElement ('button');

       const ul = document.getElementById ('todolist');
       const section = document.getElementById ('mainSection');

       section.style.display = 'block';
       li.id = `${n}`;
       arr[i]['id'] = li.id;
       n += 1;
       

       ul.append(li);
       li.append(div);
       div.append(checkbox);
       div.append(label);
       div.append(button);

       button.className = 'destroy';
       div.className = 'view';
       checkbox.className = 'toggle';
       checkbox.type = 'checkbox';
       label.innerHTML = arr[i]['title'];

       if (arr[i]['checkbox'] === true) {
        li.className = 'completed';
        checkbox.checked = 'checked';
       }


       checkbox.addEventListener ('change', () => {

        let getVal = localStorage.getItem ('value');
        let data2 = JSON.parse (getVal);
        if(checkbox.checked) {
            li.className = 'completed';

            for (let i=0; i<data2.length; i+=1) {
                if (data2[i]["id"] == li.id) {
                    data2[i]["checkbox"] = true;
                  
                }
            }
        } else {
            li.className = '';

            for (let i=0; i<data2.length; i+=1) {
                if (data2[i]["id"] === li.id) {
                    data2[i]['checkbox'] = false;
                }
            }
        }
        
        result = JSON.stringify(data2);
        localStorage.setItem('value', result);
       });

      button.addEventListener ('click', function del () {
        li.remove();
        
        let newData = localStorage.getItem('value');
        let data2 = JSON.parse (newData);

        for (let i=0; i<data2.length; i+=1) {
            if (data2[i]["id"] === li.id) {
                data2.splice(i, 1);
                i-=1;
            }
        }
   
        result = JSON.stringify(data2);
        localStorage.setItem('value', result);
        console.log(localStorage);
        button.removeEventListener ('click', del);
    });

    }
    result = JSON.stringify(arr);
    localStorage.setItem('value', result);
}

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        if (input.value !== '' && input.value !== ' ') {
       //console.log(input.value);
       let li = document.createElement('li');
       let div = document.createElement ('div');
       let checkbox = document.createElement ('input');
       let label = document.createElement ('label');
       let button = document.createElement ('button');

       const ul = document.getElementById ('todolist');
       const section = document.getElementById ('mainSection');

       section.style.display = 'block';
       li.id = `${n}`;
       n+=1;

       ul.append(li);
       li.append(div);
       div.append(checkbox);
       div.append(label);
       div.append(button);

       button.className = 'destroy';
       div.className = 'view';
       checkbox.className = 'toggle';
       checkbox.type = 'checkbox';

       label.innerHTML = input.value;
       
       
       let initVal = localStorage.getItem('value');

       if (initVal !== null && initVal !== '') {
            data = JSON.parse (initVal);
       }
      

       let obj = {};
       obj.title = input.value;
       obj.checkbox = false;
       obj.id = li.id;
       data.push(obj);

       result = JSON.stringify(data);


       localStorage.setItem('value', result);
       console.log (localStorage);
       
       checkbox.addEventListener ('change', () => {

        let getVal = localStorage.getItem ('value');
        let data2 = JSON.parse (getVal);
        if(checkbox.checked) {
            li.className = 'completed';

            for (let i=0; i<data2.length; i+=1) {
                if (data2[i]["id"] == li.id) {
                    data2[i]["checkbox"] = true;
                  
                }
            }
        } else {
            li.className = '';

            for (let i=0; i<data2.length; i+=1) {
                if (data2[i]["id"] === li.id) {
                    data2[i]['checkbox'] = false;
                }
            }
        }
        
        result = JSON.stringify(data2);
        localStorage.setItem('value', result);
       });

      button.addEventListener ('click', function del () {
        li.remove();
        
        let newData = localStorage.getItem('value');
        let data2 = JSON.parse (newData);

        for (let i=0; i<data2.length; i+=1) {
            if (data2[i]["id"] === li.id) {
                data2.splice(i, 1);
                i-=1;
            }
        }
   

        result = JSON.stringify(data2);
        localStorage.setItem('value', result);
        console.log(localStorage);
        button.removeEventListener ('click', del);
    });

    input.value = '';
    }
}
})

const checkboxAll = document.getElementById ('toggle-all');

checkboxAll.addEventListener ("change", () => {
    let ul = document.getElementById ('todolist');
    let list = ul.getElementsByTagName ('li');
    let checkbox = ul.getElementsByClassName ('toggle');
    let label = ul.getElementsByTagName ('label');

    if(checkboxAll.checked) {
        for (let i=0; i<list.length; i+=1) {
        list[i].className = 'completed';
        checkbox[i].checked = 'checked';
        }
        
    } else {
        for (let i=0; i<list.length; i+=1) {
            list[i].className = '';
            checkbox[i].checked = '';
            }
           }
});

const filtr = document.getElementById ('filtr');
const selAll = document.getElementById ('selAll');
const active = document.getElementById ('act');
const completed = document.getElementById ('compl');
const clear = document.getElementById ('clearCompl');

selAll.addEventListener ('click', () => {
    const ul = document.getElementById ('todolist');
    const li = ul.getElementsByTagName ('li');
    for (let i=0; i<li.length; i+=1) {
        li[i].style.display = 'block';
    }
});

active.addEventListener ('click', () => {
    const ul = document.getElementById ('todolist');
    const notActLi = ul.getElementsByClassName ('completed');
    const li = ul.getElementsByTagName ('li');

    for (let i=0; i<li.length; i+=1) {
        li[i].style.display = 'block';
    }

    for (let i=0; i<notActLi.length; i+=1) {
        notActLi[i].style.display = 'none';
    }
});

completed.addEventListener ('click', () => {
    const ul = document.getElementById ('todolist');
    const li = ul.getElementsByTagName ('li');
    const notActLi = ul.getElementsByClassName ('completed');
    for (let i=0; i<li.length; i+=1) {
        li[i].style.display = 'none';
    }
    for (let i=0; i<notActLi.length; i+=1) {
        notActLi[i].style.display = 'block';
    }
});

clear.addEventListener ('click', () => {
    const ul = document.getElementById ('todolist');
    const notActLi = ul.getElementsByClassName ('completed');

         
        let newData = localStorage.getItem('value');
       let data2 = JSON.parse(newData);
       let arrRes = [];
    //    console.log(notActLi);
        for (let i=0; i<data2.length; i+=1) {
            if (data2[i]['checkbox'] === false) {
                    
                arrRes.push(data2[i]);
                } 
         }

         for (let i=0; i<notActLi.length; i+=1) {
            notActLi[i].remove();
            i -=1;
        
    }
         newData = JSON.stringify(arrRes);
        localStorage.setItem('value', newData);
        
});
