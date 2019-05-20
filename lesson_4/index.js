function makeImages () {
    for (let i = 0; i<arguments.length; i+=1) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = arguments[i];
        document.body.append(div);
        div.append(img);
   }
}

class FormBuilder {
   constructor () {
       this.form = form;
       form = document.createElement('form');
   }

   appendTo(target) {
       target = document.createElement(target);
       target.append(this.form);
       document.body.append(target);
   }

   addInput(name) {
       let input = document.createElement('input');
       input.setAttribute('name', name);
       input.setAttribute('type', 'text');
       this.form.append(input);
   }

   addCheckbox(name) {
       let input1 = document.createElement('input');
       input1.setAttribute('name', name);
       input1.setAttribute('type', 'checkbox');
       this.form.append(input1);
   }

   addButton(name) {
       let button = document.createElement ('button');
       button.innerHTML = name;
       this.form.append(button);
   }

   destroy() {
       let node = document.getElementsByTagName('form');
       if (node.parentNode) {
           node.parentNode.removeChild(node);
         }
   }

}

function initBall () {
   let div = document.createElement('div');
   document.body.append(div);
   div.style.height = '20px';
   div.style.width = '20px';
   div.style.borderRadius = '10px';
   div.style.backgroundColor = 'blue';

  function random () {
       let x = Math.floor(Math.random() * document.documentElement.clientWidth);
       let y = Math.floor(Math.random() * document.documentElement.clientHeight);
       div.style.position = 'absolute';
       div.style.top = `${x}px`;
       div.style.left = `${y}px`;
   
   }
   random();
   
   div.addEventListener('click', random, false);
      
       
   document.body.addEventListener('click', function rem(event) {
             if (!div.is(e.target)){
             document.body.removeChild('div');
             div.removeEventListener('click', random1);
           event.stopImmediatePropagation();
       
       
       }
   },false);
   document.body.removeEventListener('click', rem);

}