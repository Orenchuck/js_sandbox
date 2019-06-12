import mask from 'mask';
import cat from './1.jpg';

function matrixDiff (arr1, arr2) {
    let result = 0;
for (let i=0; i<arr1.length; i +=1) {
    if (Array.isArray(arr1[i])){
       if (arr1[i].length != arr2[i].length){
           return NaN;
       }
       else {
           for (let j=0; j<arr1[i].length; j+=1){
               result += Math.abs(arr1[i][j] - arr2[i][j]);
               
           }
       }
    }
}
return result;
}


function strangeSearch (arr) {
    let input; let count = 0;
for (let i=0; i<arr.length; i+=1) {
    let div = document.createElement ('div');
    document.body.append(div);
    div.innerHTML = arr[i];
    input = document.createElement ('input');
    div.appendChild(input);
    input.setAttribute('type', 'number');
    input.setAttribute('value', 0);
    count +=1;
}
let button = document.createElement ('button');
document.body.append(button);
button.id = 'go';
button.innerHTML = 'Search';
let res = '';


for (let j=0; j<count; j+=1){
    if (input.value > 0) {
    res =res + '+' + arr[j];
      
}
}

button.addEventListener('click', () => {
   
    let way = 'https://www.youtube.com/results?search_query=';
    window.location.href = way;
    res = way+res;
    //window.location.href += res;
   // inputElement.value = res;
   

   
});
}
strangeSearch (['cat','asd','ghfg']);

const task3 = new MaskedInput();

function stickyСat () {
    let img = document.createElement('img');
    img.src = cat;
    img.id = 'cat';
    document.body.appendChild(img);
window.addEventListener('mousemove', function mouse (event) {
    let x = event.x;
    let y = event.y;
    img.style.position = 'absolute';
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;
})
}




function unstickTheСat () {
    let img = document.getElementById('cat');
   if (img.parentNode) {
     img.parentNode.removeChild(img);
     
   }
window.removeEventListener('mousemove', mouse);


}



   