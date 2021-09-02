//DETECTAR SI ES MOBIL O TABLET
const photoskill = document.querySelectorAll('.img_skill');

function detectar () {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
  }
  return "desktop";
};
let dispositivo = detectar();
if (dispositivo == "mobile" || dispositivo == "tablet") {
  let longitud = photoskill.length;
  for (let i=0; i < longitud; i++) {
    var dataURL = photoskill[i].src;
    dataURL = dataURL.slice(-25);
    dataURL = dataURL.replace("white.svg",".svg");
    photoskill[i].src = dataURL;
  }
}
//FIN DETECTAR SI ES MOBIL O TABLET

//EFECTO SCROLL
const animacion = document.querySelectorAll('.animado');
const animacionheader = document.querySelectorAll('.content-border0')
const animaciontop1 = document.getElementById('PERFIL');
const animaciontop3 = document.getElementById('FRASE');
const animaciontop2 = document.getElementById('SOY_YO');
// var scrolltop = document.documentElement.scrollTop;
// var scrolldown = document.documentElement.offsetHeight;
// var scrollaltura = document.documentElement.clientHeight;
var i = 0;

function mostrartop(){
  var m = animacionheader.length;
  for (var j = 0; j < m; j++) {
    animacionheader[j].style.opacity = 1;
    animacionheader[j].classList.add('mostrarabajo');
  }
  var scrolltop = document.documentElement.scrollTop;
  var scrollaltura = document.documentElement.clientHeight;
  carga70 = scrolltop + (scrollaltura*0.7);
  for (var k = 0; animacion[k].offsetTop <= carga70 ; k++) { 
    animacion[k].style.opacity = 1;
    animacion[k].classList.add('mostrararriba');
  }
  i = k;
}

function mostrarscroll() {
  var scrolltop = document.documentElement.scrollTop;
  var scrolldown = document.documentElement.offsetHeight;
  var scrollaltura = document.documentElement.clientHeight;
  var n = animacion.length;
  var alturaanimado;
  scroll70 = scrolltop + (scrollaltura*0.7);  
  scrolltopcercapie = scrollaltura + scrolltop;
  scrolldown = scrolldown*0.98;
  alturaanimado = animacion[i].offsetTop;
  if (alturaanimado <= scroll70) {
    animacion[i].style.opacity = 1;
    animacion[i].classList.add('mostrararriba');
    i++;
  }
  if (scrolltopcercapie > scrolldown) {
    for (var j = i; j < n; j++) {
      animacion[j].style.opacity = 1;
      animacion[j].classList.add('mostrararriba'); 
    } 
  }
}

window.addEventListener('load', mostrartop);
window.addEventListener('scroll',mostrarscroll);
//FIN SCROLL

// Codigo para las particulas
particlesJS (
  {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#00d4ff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#090979"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.3,
          "opacity_min": 0,
          "sync": true
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
// Fin Particulas

// Look for .hamburger
var hamburger = document.querySelector('.hamburger');
var containerhamburger = document.querySelector('.columna-hamburguesa');
var cuerpo = document.querySelector('body');
var opacidad = document.querySelectorAll('section');
var opacidadpie = document.querySelector('footer');
var hamburgerlink = document.querySelectorAll('.button-hamburguesa');
var truehamburger = false;
var llave = false;
var bandera = false;
var truepresentacion = false;
// On click hamburger
hamburger.addEventListener('click', function() {
  // Toggle class "is-active"
    hamburger.classList.toggle('is-active');
  // Do something else, like open/close menu
    if (containerhamburger.classList.contains('columna-invisible')) {
      containerhamburger.classList.remove('columna-invisible');
      containerhamburger.classList.add('columna-visible'); 
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function(){ window.scrollTo(x, y) };
      cuerpo.classList.toggle('blur');
      opacidad.forEach((section) => {
        section.classList.toggle('overlay')
      })
      opacidadpie.classList.toggle('overlay');
      truehamburger = true;
    } 
    else {
      containerhamburger.classList.remove('columna-visible');
      containerhamburger.classList.add('columna-invisible');
      window.onscroll = null;
      cuerpo.classList.toggle('blur');
      opacidad.forEach((section) => {
        section.classList.toggle('overlay')
      });
      opacidadpie.classList.toggle('overlay');
      truehamburger = false;
      llave = false; 
    }
})

hamburgerlink.forEach((a) => {
  a.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    containerhamburger.classList.remove('columna-visible');
    containerhamburger.classList.add('columna-invisible');
    window.onscroll = null;
    cuerpo.classList.toggle('blur');
    opacidad.forEach((section) => {
      section.classList.toggle('overlay')
    });
    opacidadpie.classList.toggle('overlay');
    truehamburger = false;
    llave = false;
  })
})

document.onclick = function (e) {
  if (truehamburger == true) {
    if (llave == false) {
      llave = true;
    } else {
      e = e
      var target = e.target;
      if (target != containerhamburger) {
        containerhamburger.classList.remove('columna-visible');
        containerhamburger.classList.add('columna-invisible');
        window.onscroll = null;
        cuerpo.classList.toggle('blur');
        opacidad.forEach((section) => {
        section.classList.toggle('overlay');
        })
        opacidadpie.classList.toggle('overlay');
        hamburger.classList.toggle('is-active');
        truehamburger = false;
        llave = false; 
      }
    }    
  }
}
// Fin Hamburguesa

// Sobre Mi

// Fin Sobre Mi

// TOUCH CELULAR
// document.addEventListener('touchstart', (e) => {
//   var target = e.target;
//   console.log("touch: " + target); 
// })

// FIN GALERIA

// PORTAFOLIO

// FIN PORTAFOLIO
const urlproyecto = document.getElementById('linkproyecto1');
urlproyecto.addEventListener('click', () => {
  alert("This project is in the process of remodeling.\nEste proyecto esta en proceso de remodelación. ")
})
//HABILIDADES

photoskill.forEach((img_skill) =>{
  img_skill.addEventListener('mouseenter', (e) => {
    if (dispositivo != "mobile" && dispositivo != "tablet") {
      var sorry2 = e.currentTarget;
      var dataURL3 = sorry2.src;
      // alert(photoskill); Es un [object NodeList]
      // alert(img_skill); Es un [object HTMLImageElement]
      dataURL3 = dataURL3.slice(-25);
      dataURL3 = dataURL3.replace("white.svg",".svg");
      img_skill.src = dataURL3;
    }   
  })
});

photoskill.forEach((img_skill) =>{
  img_skill.addEventListener('mouseleave', (e) => {
    if (dispositivo != "mobile" && dispositivo != "tablet") {
      var sorry3 = e.currentTarget;
      var dataURL4 = sorry3.src;
      dataURL4 = dataURL4.slice(-20);
      dataURL4 = dataURL4.replace(".svg","white.svg")
      img_skill.src = dataURL4;
    }
    
  })    
});
// FIN HABILIDADES

