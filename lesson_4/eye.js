let leftEyeBall = document.getElementById('leftEyeBall');
let rightEyeBall = document.getElementById('rightEyeBall');
let x1 = leftEyeBall.getBoundingClientRect().left;
let x2 = rightEyeBall.getBoundingClientRect().left;
let y1 = leftEyeBall.getBoundingClientRect().top;
let y2 = rightEyeBall.getBoundingClientRect().top;


window.addEventListener('mousemove', (e) => {

     let x3 = `${e.x}`;
     let y3 = `${e.y}`;

     let a1 = Math.sqrt(Math.pow((x3 - x1 + 16), 2) + Math.pow((y3 - y1), 2));
     let b1 = Math.sqrt(Math.pow((x3 - x1 + 16), 2) + Math.pow((y3 - y1 + 16), 2));
     

     let a2 = Math.sqrt(Math.pow((x3 - x2 + 16), 2) + Math.pow((y3 - y2), 2));
     let b2 = Math.sqrt(Math.pow((x3 - x2 + 16), 2) + Math.pow((y3 - y2 + 16), 2));

     let cosA1 = (256 + Math.pow(b1, 2) - Math.pow(a1, 2)) / (32 * b1);
     let cosA2 = (256 + Math.pow(b2, 2) - Math.pow(a2, 2)) / (32 * b1);

    //  let sinA1 = Math.sin(Math.acos(cosA1));
    //  let sinA2 = Math.sin(Math.acos(cosA2));
     let sinA1 = Math.sqrt(1 - Math.pow(cosA1, 2));
     let sinA2 = Math.sqrt(1 - Math.pow(cosA2, 2));

     let resX1 = 10 * cosA1 + (x1 + 16);
     let resX2 = 10 * cosA2 + (x2 + 16);
     let resY1 = 10 * sinA1 + (y1 + 16);
     let resY2 = 10 * sinA2 + (y2 + 16);

    leftEyeBall.style.top = `${resY1 - y1}px`;
    leftEyeBall.style.left = `${resX1 - x1}px`;

    rightEyeBall.style.top = `${resY2 - y2}px`;
    rightEyeBall.style.left = `${resX2 - x2}px`;
    console.log (resX1 + ' ' + resY1);
    console.log (a1 + ' ' + b1);
    console.log (x1+" "+y1);
    console.log (sinA1);

});



