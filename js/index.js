const script = document.createElement('script');
script.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"
const head = document.querySelector('head');
head.appendChild(script);

const all = document.querySelectorAll('*');
all.forEach(element => {
    const elStyle = {
        display : 'flex',
        flexDirection : 'column'
    }
    Object.assign(element.style, elStyle);

    element.addEventListener('click', (e) =>{
        e.stopPropagation();
        gsap.to(
            element, {transform: 'scale(1.2)' && 'translate(-10px, 20px)', transition: '2s'}
    )
  }
)
    element.addEventListener('mouseleave', (e) => {
        e.stopPropagation();
        gsap.to(
            element, {transform: 'scale(1)' && 'translate(0px, 0px)', transition: '2s'}
            )
    }
  )
})



const keydownError = document.createElement('p');
keydownError.textContent= 'Sorry, key not a trigger';
const clickError = document.createElement('p');
clickError.textContent = 'Sorry, click did not a trigger';
const pars = document.querySelectorAll('p');
Array.from(pars).forEach(
    par => {
        par.addEventListener('dblClick', (e) =>
        {const keyTern = (e.key === 'r')  
            ? gsap.from(
              par, {color: 'red'}
            ) 
        : (e.key === 'o') 
            ? gsap.from(
                par, {color: 'orange'}
            )
        : (e.key === 'y')  
            ? gsap.from(
              par, {color: 'yellow'}
            ) 
        : (e.key === 'g') 
            ? gsap.from(
                par, {color: 'green'}
            )
        : (e.key === 'b')  
            ? gsap.from(
              par, {color: 'blue'}
            ) 
        : (e.key === 'i' )
            ? gsap.from(
                par, {color: 'indigo'}
            )
        : (e.key === 'v') 
            ? gsap.from(
                    par, {color: 'violet'}
                )
        : par.appendChild(keydownError)
            
            e.stopPropagation()
            e.type === 'click' ? 
            par.addEventListener('keydown', (e) => {keyTern})
                : par.appendChild(clickError)
            }
        )
    }
)

const header = document.querySelector('header');
const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    zIndex: 20,
}
Object.assign(header.style, headerStyle)

const color = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
]

const colorRand = () => {color[Math.random() + 7]}

const navContainer = document.querySelector('header div');
const navContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colorRand()
}
Object.assign(navContainer.style, navContainerStyle)

const nav = document.querySelector('nav');
const navStyle = {
    display: 'flex',
    flexDirection: 'row',
    color: 'violet',
    backgroundColor: 'skyblue',
    zIndex: 1,
}
Object.assign(nav.style, navStyle)

const anchors = document.querySelectorAll('.nav-link')
anchors.forEach(a => {
    console.log(a)
    Object.assign(a.style, navStyle)
    window.addEventListener('keyup', () => {
        e.stopPropagation();
        anchor.style.transform = 'scale(1.5)';
        anchor.style.backgroundColor = 'white';
        anchor.style.color = '#212529';
    });
})

header.addEventListener('mouseover', (e) => {
    Object.assign(e.target.style.color, colorRand())        
})

header.addEventListener('contextmenu', 
   (e) => 
   {
       e.preventDefault();
        gsap.fromTo(
           header, {rotation: 90, duration: 5}, {rotation: 0, duration: 10}
       )
    }
)
const input = document.createElement('input');
input.setAttribute('name', 'input');
input.setAttribute('type', 'radio');
input.setAttribute('placeholder', 'Double click to back out');

const introImg = document.querySelector('.intro img');

function affectIntroImg(){
    introImg.style.transform = 'scale(.25)';
}

const text = document.createElement('input');
text.setAttribute('name', 'inputText');
text.setAttribute('type', 'textarea');
text.style.height = '8rem';
text.style.backgroundColor = 'lavender';
text.setAttribute('placeholder', 'Enter a number, then press enter');
const height = text.style['height']

const textStyle = {
    backgroundColor: 'red',
    height: `${height / 2}`,
    width: `${height * 2}`,
    backgroundColor: 'blue'
}

Object.assign(text.style, textStyle)

const inputText = document.createElement('form');
inputText.setAttribute('submit', '{() => onEnter()}')
inputText.appendChild(input);

header.prepend(text);
header.prepend(inputText);

input.addEventListener('keydown', e => {
    e.stopPropagation();
    header.style.backgroundColor = colorRand();
    header.style.color = 'white';
})

function onEnter(e){
    let element = document.createElement('p');
    element.textContent = input[e.target.value]
    e.target.appendChild(element)
}

input.addEventListener('keyup', e => {
    e.stopPropagation();
    e.key === 'enter' 
      ? (onEnter(e) && (header.style.backgroundColor = 'white') && (header.style.color = '#212529')) 
    : ((header.style.backgroundColor = 'white') && (header.style.color = '#212529')) 
})

text.addEventListener('drag', () => {
    
    rotation(welcome, '25', '5')
});

const height = ['style']['height'];

const pars = document.querySelectorAll('p');
function zoomPar(e){
    e.preventDefault();
    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(.0625, scale), 8);
    e.target.style.transform = `scale(${scale})`;
}

let scale = 1;

pars.forEach(par => par.addEventListener('wheel', e => zoomPar(e)));

// some features do not work as expected but can't add, commit or push for some reason...
// Is not recognizing the changes...