/* $(document).ready(function () {
    $('.botones').on('click', function (e) {
        var mi_opcion = (e.target.dataset.img);
        //codigo para que cada vez q haga un click cambie la imagen del usuario
        var url_mi = `./imagenes/${mi_opcion}.png`;
        $('#yo').attr('src', url_mi);
        // numero aleatorio del 0 al 2 Match.round redondea al mayor sercano
        var aleatorio = Math.round(Math.random() * 2);
        var opciones_computadora = ['papel', 'piedra', 'tijera'];
        var computadora = opciones_computadora[aleatorio];
        //las comillas invertidas salen con ALTGr+(tecla indicada)
        //codigo para que cada vez q haga un click cambie la imagen de la computadora
        var url_comp = `./imagenes/${computadora}.png`;
        $('#comp').attr('src', url_comp);



        if (mi_opcion === computadora) {
            $('#respuesta').html("EMPATE  <br>" + mi_opcion.toUpperCase() + " - " + computadora.toUpperCase());
            
        } else if (mi_opcion == "papel"  && computadora == "piedra" ||
                   mi_opcion == "piedra" && computadora == "tijera" || 
                   mi_opcion == "tijera" && computadora == "papel" ) {
            $('#respuesta').html("YO GANO CON <br>" + mi_opcion.toUpperCase());
           
        } else {
            $('#respuesta').html("COMPUTADORA GANA CON <br>" + computadora.toUpperCase());
        }


    });
}); */