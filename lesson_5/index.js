const button = document.createElement('button');
const div = document.createElement('div');
const img = document.createElement('img');
img.src = "https://img.icons8.com/cool-color/64/000000/delete-sign.png";
const p = document.createElement('p');

document.body.append(button);
document.body.append(div);
div.appendChild(img);
div.appendChild(p);

button.innerHTML = "Показать";
p.innerHTML = "Привет, я div!";

div.style.cssText = "display: none;\
height: 150px;\
width: 300px;\
background: -webkit-radial-gradient(center, ellipse cover, lightblue 0%, blue 100%);\
background: -moz-radial-gradient(center, ellipse cover, lightblue 0%, blue 100%);\
position: absolute;\
left: 35vw;\
";

button.style.cssText = "position: relative;\
z-index: 1;\
color: black;\
font-size: 135%;\
font-weight: 700;\
text-decoration: none;\
padding: .25em .5em;\
border-radius: 5px;\
border: 2px solid #c61e40;\
top: 20vh;\
left: 40vw;\
";

p.style.cssText = "color: white;\
text-align: center;\
line-height: 1.5;\
font-size: 30px;\
";

img.style.cssText = "height: 20px;\
width: 20px;\
position: relative;\
left: 280px;\
";

button.addEventListener ('click', () =>{
     div.style.display = 'block';

     function animate(draw, duration) {
        let start = performance.now();
      
        requestAnimationFrame(function animate(time) {
          let timePassed = time - start;
          if (timePassed > duration) timePassed = duration;
          draw(timePassed);
          if (timePassed < duration) {
            requestAnimationFrame(animate);
          }
      
        });
      }
     animate(function(timePassed) {
        div.style.top = timePassed / 5 + 'px';
      }, 2000);
    });
img.addEventListener ('click', () => div.style.display = 'none');


