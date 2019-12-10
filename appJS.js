/*
        PROYECTO PIANO EN JAVA SCRIPT PURO
*/
document.querySelector(".botones").addEventListener("click", function (e) {
    // eligo mi opcion
    var mi_opcion = e.target.dataset.img;
    //url para cambiar de imagenes al hacer click
    var url_mi = `./imagenes/${mi_opcion}.png`;
    document.querySelector('#yo').setAttribute('src', url_mi);
    // sacar numero aleatorio para la computadora
    // la computadora elige una opcion segun el numero aleatorio arojado
    var num_aleatorio = Math.round(Math.random() * 2);
    var opciones_computadora = ['papel', 'piedra', 'tijera'];
    var computadora_elige = opciones_computadora[num_aleatorio];
    //la computadora sambia de imagen segun la opcion que saque
    var url_comp = `./imagenes/${computadora_elige}.png`;
    document.querySelector('#comp').setAttribute('src', url_comp);
    //las opciones en las que gano empato y pierdo
    if (mi_opcion === computadora_elige) {
        var empate = "EMPATE  <br>" + mi_opcion.toUpperCase() + " - " + computadora_elige.toUpperCase();
        document.querySelector("#respuesta").innerHTML=(empate);

    } else if (mi_opcion == "papel" && computadora_elige == "piedra" ||
        mi_opcion == "piedra" && computadora_elige == "tijera" ||
        mi_opcion == "tijera" && computadora_elige == "papel") {
        var ganar = "YO GANO CON <br>" + mi_opcion.toUpperCase();
        document.querySelector("#respuesta").innerHTML=(ganar);

    } else {
        var pierdo = "COMPUTADORA GANA CON <br>" + computadora_elige.toUpperCase();
        document.querySelector("#respuesta").innerHTML=(pierdo);
        
    }



});