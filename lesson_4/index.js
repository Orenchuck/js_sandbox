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
   document.body.prepend(div);
   div.style.height = '20px';
   div.style.width = '20px';
   div.style.borderRadius = '10px';
   div.style.backgroundColor = 'blue';

    let x = Math.floor(Math.random() * (document.documentElement.clientWidth-20));
    let y = Math.floor(Math.random() * (document.documentElement.clientHeight-20));
    div.style.position = 'absolute';
    div.style.top = `${x}px`;
    div.style.left = `${y}px`;

   
   div.addEventListener('click', (event) => {
       let x = Math.floor(Math.random() * (document.documentElement.clientWidth-20));
       let y = Math.floor(Math.random() * (document.documentElement.clientHeight-20));
       div.style.position = 'absolute';
       div.style.top = `${x}px`;
       div.style.left = `${y}px`;
       event.stopPropagation();
   });
      
       
   window.addEventListener('click', function rem(event) {
    document.body.removeChild(div);

    this.removeEventListener('click', rem); 
   });

}

