const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result')



buttons.forEach((button) =>{
    button.addEventListener('click', (e) =>{
        result.textContent +=  e.target.id ;
    })
})

equal.addEventListener('click', () =>{
    result.textContent = eval(result.textContent) ; /*la methode eval calcul ce que l'on lui passe en parametre*/
})

clear.addEventListener('click', () =>{
    result.textContent = "";
})