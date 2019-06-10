// import Color from './color.js';

const id = document.getElementById ('one');


class MiniSlider {
    constructor (id) {
        this.id = id;

        this.hideAll();
        this.show(0);
        this.createButtons();
        this.next();
        this.prev();
    }

    hideAll() {
        this.id.style.display = 'none';
    }

    show(n) {
        this.id.style.display = 'block';

        this.id.imgs = id.getElementsByTagName ('img');
        let arr = this.id.imgs;
        for (let i=0; i<arr.length; i +=1){
            if (i == n) {
              this.id.imgs[i].style.display = 'block';
            }
            else {
              this.id.imgs[i].style.display = 'none';

            }
        }
        return n;
    }

    createButtons() {
        let buttonPrev = document.createElement ('button');
        let buttonNext = document.createElement ('button');
        document.body.append(buttonPrev);
        document.body.append(buttonNext);
        buttonPrev.innerHTML = 'Prev';
        buttonNext.innerHTML = 'Next';
        buttonPrev.id = 'prev';
        buttonNext.id = 'next';
        buttonPrev.style.cssText = "position: absolute;\
            z-index: 1;\
            color: black;\
            font-size: 135%;\
            font-weight: 700;\
            text-decoration: none;\
            padding: .25em .5em;\
            border-radius: 5px;\
            border: 2px solid #c61e40;\
            top: 25vh;\
            left: 15vw;\
            ";

        buttonNext.style.cssText = "position: absolute;\
            z-index: 1;\
            color: black;\
            font-size: 135%;\
            font-weight: 700;\
            text-decoration: none;\
            padding: .25em .5em;\
            border-radius: 5px;\
            border: 2px solid #c61e40;\
            top: 25vh;\
            left: 70vw;\
            ";
    }

    next() {
        const buttonNext = document.getElementById('next');
        
        buttonNext.addEventListener('click', () => {
            let num;
            for (let i=0; i<this.id.imgs.length; i+=1) {
                if (this.id.imgs[i].style.display == 'block') {
                    num = i;
                    break;
                }
            };

            this.id.imgs[num].style.display = 'none';
            num +=1;
            if (num > this.id.imgs.length-1){
                num = 0;
                this.id.imgs[num].style.display = 'block';  
                this.id.imgs[num].style.transition = 'opasity 2s ease 0s';

            }
            else this.id.imgs[num].style.display = 'block'; 
            
            
            

            // let bord = new Color();
            // let str = bord.random();
            // buttonNext.style.borderColor = color.toString(str);
            });
    }

    prev () {
        const buttonPrev = document.getElementById('prev');
        
        buttonPrev.addEventListener('click', () => {
            let num;
            for (let i=0; i<this.id.imgs.length; i+=1) {
                if (this.id.imgs[i].style.display == 'block') {
                    num = i;
                    break;
                }
            };

            this.id.imgs[num].style.display = 'none';
            num -=1;
            if (num < 0){
                num = this.id.imgs.length-1;
                this.id.imgs[num].style.display = 'block';
                
            }
            else this.id.imgs[num].style.display = 'block';
            });
    }

    destroy() {
        const buttonNext = document.getElementById('next');
        const buttonPrev = document.getElementById('prev');
        document.body.removeChild(buttonNext);
        document.body.removeChild(buttonPrev);

        for (let i=0; i<this.id.imgs.length; i+=1) {
            this.id.imgs[i].style.display = 'block';
            this.id.imgs[i].style.position = 'relative';
            this.id.imgs[i].style.top = '0px';
        }

    }
}

