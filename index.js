let winnerTextAudio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg')
let clickBlockAudio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatedible.ogg')

let mainBlock = document.createElement('div')
mainBlock.className = 'mainBlock'
document.body.append(mainBlock)

let line = document.createElement('hr')
line.className = 'line'
line.style.width = '800px'
line.style.visibility = 'hidden'
mainBlock.append(line)

let winnerText = document.createElement('h1')
winnerText.className = 'winnerText'
mainBlock.append(winnerText)

let title = document.createElement('h1')
title.className = 'title'
title.innerHTML = 'tic-tac-toe game'
document.body.append(title)

let blocks = [1,2,3,4,5,6,7,8,9]
let playerOne = {data:[], player: 1}
let playerTwo = {data:[], player: 2}
let blockValue = 'x'

const reloadPage =()=> {
    document.location.reload();
}

const winnerHandler =(player,deg,top, width,left,right)=> {
    line.style.transform = 'rotate(' + deg + 'deg)';
    line.style.marginTop =  `${top}px`
    line.style.width = `${width}px`
    line.style.visibility = 'visible'
    line.style.marginLeft = `${left}px`
    line.style.marginRight = `${right}px`
    
    winnerText.style.visibility = 'visible'
    winnerText.addEventListener('click', reloadPage)
    winnerTextAudio.play()
    if(player === 1) {
        line.style.borderColor = 'red'
        line.style.backgroundColor = 'red'
        winnerText.innerHTML = 'player one winner!'
        winnerText.style.color = 'red'
        return console.log('player one winner!')
    }
    if(player === 2) {
        line.style.borderColor = 'blue'
        line.style.backgroundColor = 'blue'
        winnerText.innerHTML = 'player two winner!'
        winnerText.style.color = 'blue'
        return console.log('player two winner!')
    }
}

const checkPlayerValues =(info)=> {
    if(info.data.includes(1) && info.data.includes(2) && info.data.includes(3)) {
        return winnerHandler(info.player,0,120,720)
    }
    if(info.data.includes(4) && info.data.includes(5) && info.data.includes(6)) {
        return winnerHandler(info.player,0,370,720)
    }
    if(info.data.includes(7) && info.data.includes(8) && info.data.includes(9)) {
        return winnerHandler(info.player,0,640,720)
    }
    if(info.data.includes(1) && info.data.includes(4) && info.data.includes(7)) {
        return winnerHandler(info.player,90,370,720,0,530)
    }
    if(info.data.includes(2) && info.data.includes(5) && info.data.includes(8)) {
        return winnerHandler(info.player,90,370,720)
    }
    if(info.data.includes(3) && info.data.includes(6) && info.data.includes(9)) {
        return winnerHandler(info.player,90,370,720,530,0)
    }
    if(info.data.includes(1) && info.data.includes(5) && info.data.includes(9)) {
        return winnerHandler(info.player,45,370,1000)
    }
    if(info.data.includes(3) && info.data.includes(5) && info.data.includes(7)) {
        return winnerHandler(info.player,-45,370,1000)
    }
    if(playerOne.data.length === 5 && playerTwo.data.length === 4) {
        alert('Well draw, and it will be back to start again!!')
        reloadPage()
    }
}

const clickBlockHandler=(element,block)=> {
    clickBlockAudio.play()
    if(blockValue === 'x' && block.innerHTML !== 'x') {
        blockValue = 'o'
        block.innerHTML = blockValue
        block.style.color = 'red'
        playerOne.data.push(element)
        checkPlayerValues(playerOne)
    } else if(blockValue === 'o' && block.innerHTML !== 'o') {
        blockValue = 'x'
        block.innerHTML = blockValue
        block.style.color = 'blue'
        playerTwo.data.push(element)
        checkPlayerValues(playerTwo)
    }
}

const renderBlocks =()=> {
    blocks.map((element)=> {
        let block = document.createElement('div')
        block.className = 'block'
        block.addEventListener('click', ()=> clickBlockHandler(element,block))
        return mainBlock.append(block)
    })
}

renderBlocks()

