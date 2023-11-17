const simulador = () => {
    // ocultar la imagen y mostrar los datos con la simulacion.
    const preCont = document.querySelector(".pre-simulation");
    const postCont = document.querySelector(".post-simulation");
    postCont.classList.remove("disabled");
    preCont.classList.add("disabled");

    // Datos a mostrar
    let nombres = document.getElementById("nombres").value;
    let email = document.getElementById("email").value;
    let montoAInvertir = parseFloat(document.getElementById("inversion").value); // Convertir el monto a un número
    let tiempoDeInversion = document.getElementById("tiempo").value;
    let ganancia = 0;
    let interes  = 0;
    
    // Lugares donde se muestran los datos.
    let showTiempoInversion = document.getElementById("tiempo-show");
    let  showInteres = document.getElementById("interes-show");
    let showTotal = document.getElementById("total-show");
    let showGanancias = document.getElementById("ganancia-show");
    let showNombres = document.getElementById("nombres-show");
    let showEmail = document.getElementById("email-show");

    console.log("total a invertir " + montoAInvertir);
    
    showNombres.textContent = nombres;
    showEmail.textContent = email;
    showTiempoInversion.textContent = `${tiempoDeInversion * 12} meses`;

    // console.log(typeof(tiempoDeInversion));
    switch(tiempoDeInversion){
        case ("1"):
            interes = 0.8;
            break;
        case ("2"):
            interes = 1.3;
            break;
        case ("3"):
            interes = 1.7;
            break;
        default:
            ganancia = 0;
            break;
        }
        
        /**
         * 
        teniendo en cuenta que la entidad bancaria pagará tasas de interés mensual del 0.8 % para 1 año, 1.3 % para 2 años y 1.7 % para 3 años.
        */
    // console.log("total a invertir " + montoAInvertir);
    ganancia = parseFloat( (montoAInvertir * interes) / 100 * (tiempoDeInversion * 12));
    // console.log("ganancia " + montoAInvertir * interes);

    showInteres.textContent = `${interes}%`;

    showTotal.textContent = montoAInvertir + ganancia;
    console.log("total a invertir " + montoAInvertir);
    console.log("total " +( montoAInvertir + ganancia));
    showGanancias.textContent = ganancia;
    



}

