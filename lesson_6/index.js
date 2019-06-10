import randomEmail from 'random-email';
import validator from "email-validator";


const div = document.getElementById('random');
const button1 = document.getElementById('generate');
const button2 = document.getElementById('close');

button1.addEventListener('click', () => {
    div.style.display = 'block';
    button2.style.display = 'block';
  
    function animate(draw, duration) {
        var start = performance.now();
      
        requestAnimationFrame(function animate(time) {
          var timePassed = time - start;
      
          if (timePassed > duration) timePassed = duration;
      
          draw(timePassed);
      
          if (timePassed < duration) {
            requestAnimationFrame(animate);
          }
      
        });
      }

      animate(function(timePassed) {
        div.style.width = timePassed / 4.5 + 'px';
      }, 2000);
 
   div.innerHTML = randomEmail();
});

button2.addEventListener('click', () => {
    div.style.display = 'none';
    button2.style.display = 'none'

});





const input = document.getElementById('inp');
input.style.borderColor = 'gray';

input.addEventListener ('change', () => {
  let res = validator.validate(input.value);
  if (res == true) {
    input.style.borderColor = 'green';
  } else {
input.style.borderColor = "red";
  }
  if (input.value == '') {
    input.style.borderColor = 'gray';
  }
});



const input2 = document.getElementById('inpCheck');
const div2 = document.getElementById('last2');
const button3 = document.getElementById('close2');
const butCheck = document.getElementById('butCheck');
import validators from "format-validator";

butCheck.addEventListener ('click', () =>{
 
  div2.style.display = 'block';
  button3.style.display = 'block'
  for (let key in validators) {
          if(key.substring(0, 2) == 'is'){
              if(validators[key](input2.value) ) {
                      let div = document.createElement('div');
                      div.append(key);
                      checkBox.append(div);
                  };
                


      }
    }
       } );

button3.addEventListener('click', () => {
  div2.style.display = 'none';
  button3.style.display = 'none'

});

