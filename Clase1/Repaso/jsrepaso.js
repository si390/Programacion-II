///DOM
let titulo = document.querySelector(".mainTitle");
let listas= document.querySelectorAll("li");
titulo.style.color = "cyan";
titulo.style.fontSize = "22px";
titulo.style.backgroundColor = "#dddddd";
document.querySelector("h3").innerText = "Modifico el texto";
document.querySelector("li.dom").innerHTML = "<strong>DOM</strong>";

///Bucles
//for (inicio; condición; modificador) {
    //código que se ejecutará en cada repetición
//   }
for (let i=0; i<5; i++) {
    console.log("Dando la vuelta numero " + i);
};
let misHobbies = ["Polo", "Tenis", "Pileta"];
for (let i=0; i<3; i++){
    console.log(misHobbies[i]);
};
let comidas = ["Milanesa", "Ravioles", "Hamburguesa", "Pure", "Fideos", "Spaghetti", "Asado", "Bife", "Morcilla"];
for (let i=0; i<comidas.length; i++) {
    console.log(comidas[i]);
};

///Eventos
let texto = document.querySelector("p");
texto.addEventListener('click', function() {
    alert("Hiciste click")
});
let boton = document.querySelector('button');				
boton.addEventListener('click', function() {     			
	alert('¡Clickeaste el botón!');						
});
boton.addEventListener('mouseover', function() { 			
	alert('Ahora pasaste el mouse por encima del botón');	
});
window.addEventListener('keypress', function(e){
    console.log(e);
    console.log(e.key);
});
let link = document.querySelector("a");
link.addEventListener('click', function(e){
    e.preventDefault();
});

///WebStorage
//localStorage
localStorage.setItem('userName', 'alejandro');
localStorage.getItem('userName');
localStorage.removeItem('userName');
localStorage.clear();
//sessionStorage
sessionStorage.setItem('username', 'juan');
sessionStorage.getItem('userName');
sessionStorage.removeItem('userName');
sessionStorage.clear();
//JSON.stringify()
let miAutito = {
    marca: "Fiat", 
    modelo: 1985, 
    color: "Verde",
    };
    
let miAutitotostr = JSON.stringify(miAutito); // '{"marca": "Fiat", "modelo": 1985, "color": "Verde"}'
localStorage.setItem('miAutito', miAutitotostr);
let recuperoStorage = localStorage.getItem('miAutito');
let datorecuperado = JSON.parse(recuperoStorage);
//JSON.parse()
let autoJson = '{"marca": "Toyota", "modelo": 2006, "color": "plata"}';
JSON.parse(autoJson);
// { 
//marca: "Toyota",
//modelo: 2006,
//color: "plata"
//}

    

