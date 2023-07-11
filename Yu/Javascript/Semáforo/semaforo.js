const img = $("img")
const buttons = $("#buttons")
let colorIndex = 0;
let intevalId = null;

const semaforo = (event) => {
    let cores = event.target.id
    stopLoop()
    turnOn[cores]()
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;


const changecolor = () =>{
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopLoop = () =>{
    clearInterval(intevalId)
}

const turnOn = {
    'red':      () => img.attr("src", "./img/vermelho.png"),
    'yellow':   () => img.attr("src", "./img/amarelo.png"),
    'green':    () => img.attr("src", "./img/verde.png"),
    'automatic':() => intevalId =  setInterval(changecolor, 500)
}

buttons.click(semaforo);

