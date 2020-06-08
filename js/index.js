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
        par.addEventListener('click', (e) =>
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
    header.addEventListener('mouseover', (e) => {
        Object.assign(e.target.style.color, colorRand())        
    })
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