import MaskInput from 'mask-input';

export default class MaskedInput {
    constructor (){
       let input = document.createElement('input');
       input.id = 'mask';
       input.setAttribute = ('type', 'text');
       document.body.append(input);
       const maskInput = new MaskInput(document.querySelector('.js-input-selector'), {
    mask: '0000-0000-0000-0000',
    alwaysShowMask: true,
    maskChar: '_',
  });
  input.addEventListener('keydown', el => {
if (input.value!== '____-____-____-____') {
input.style.animationName = 'none';
}
else{
    input.style.borderColor = 'red';
}
  });
  document.body.append(input);
    }
}



