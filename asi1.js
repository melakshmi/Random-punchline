let next = document.querySelector('.nextBtnClass');
let parent = document.querySelector('.parentClass');

next.addEventListener('click',function getdata(){
    displayjoke();
})
    async function displayjoke(){

        let data = await fetch('https://official-joke-api.appspot.com/random_joke'); 
        let output = await data.json();
        console.log(output);
    let child = document.createElement('div');
    let setup = document.createElement('div');
    let punchline = document.createElement('div');
    setup.innerHTML = 'setup: ' + output.setup;
    punchline.innerHTML = 'punchline: ' +  output.punchline;
    setup.style.color = 'black';
    punchline.style.color = 'black';
    child.appendChild(setup);
    child.appendChild(punchline);
    parent.innerHTML=" ";
    parent.appendChild(child);
    }
    


