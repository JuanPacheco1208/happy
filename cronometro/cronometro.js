window.onload = init;
function init(){
    document.querySelector(".start").addEventListener("click",cronometrar);
    document.querySelector(".stop").addEventListener("click",parar);
    document.querySelector(".reiniciar").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    document.querySelector(".start").removeEventListener("click",cronometrar);
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(id);
    document.querySelector(".start").addEventListener("click",cronometrar);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector(".start").addEventListener("click",cronometrar);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const $tiempoTranscurrido = document.querySelector("#tiempoTranscurrido"),
            $btnIniciar = document.querySelector("#btnIniciar"),
            $btnPausar = document.querySelector("#btnPausar"),
            $btnMarca = document.querySelector("#btnMarca"),
            $btnDetener = document.querySelector("#btnDetener"),
            $contenedorMarcas = document.querySelector("#contenedorMarcas");
        let marcas = [],
            idInterval,
            tiempoInicio = null;
        let diferenciaTemporal = 0;
    
        const ocultarElemento = elemento => {
            elemento.style.display = "none";
        }
    
        const mostrarElemento = elemento => {
            elemento.style.display = "";
        }
    
        const agregarCeroSiEsNecesario = valor => {
            if (valor < 10) {
                return "0" + valor;
            } else {
                return "" + valor;
            }
        }
    
        const milisegundosAMinutosYSegundos = (milisegundos) => {
            const minutos = parseInt(milisegundos / 1000 / 60);
            milisegundos -= minutos * 60 * 1000;
            segundos = (milisegundos / 1000);
            return `${agregarCeroSiEsNecesario(minutos)}:${agregarCeroSiEsNecesario(segundos.toFixed(1))}`;
        };
    
    
        const iniciar = () => {
            const ahora = new Date();
            tiempoInicio = new Date(ahora.getTime() - diferenciaTemporal);
            clearInterval(idInterval);
            idInterval = setInterval(refrescarTiempo, 100);
            ocultarElemento($btnIniciar);
            ocultarElemento($btnDetener);
            mostrarElemento($btnMarca);
            mostrarElemento($btnPausar);
        };
        const pausar = () => {
            diferenciaTemporal = new Date() - tiempoInicio.getTime();
            clearInterval(idInterval);
            mostrarElemento($btnIniciar);
            ocultarElemento($btnMarca);
            ocultarElemento($btnPausar);
            mostrarElemento($btnDetener);
        };
        const refrescarTiempo = () => {
            const ahora = new Date();
            const diferencia = ahora.getTime() - tiempoInicio.getTime();
            $tiempoTranscurrido.textContent = milisegundosAMinutosYSegundos(diferencia);
        };
        const ponerMarca = () => {
            marcas.unshift(new Date() - tiempoInicio.getTime());
            dibujarMarcas();
        };
        const dibujarMarcas = () => {
            $contenedorMarcas.innerHTML = "";
            for (const [indice, marca] of marcas.entries()) {
                const $li = document.createElement("p");
                $li.innerHTML = `<strong class="is-size-4">${marcas.length - indice}.</strong> ${milisegundosAMinutosYSegundos(marca)}`;
                $li.classList.add("is-size-3");
                $contenedorMarcas.append($li);
            }
        };
    
        const detener = () => {
            if (!confirm("¿Detener?")) {
                return;
            }
            clearInterval(idInterval);
            init();
            marcas = [];
            dibujarMarcas();
            diferenciaTemporal = 0;
        }
    
        const init = () => {
            $tiempoTranscurrido.textContent = "00:00.0";
            ocultarElemento($btnPausar);
            ocultarElemento($btnMarca);
            ocultarElemento($btnDetener);
        };
        init();
    
        $btnIniciar.onclick = iniciar;
        $btnMarca.onclick = ponerMarca;
        $btnPausar.onclick = pausar;
        $btnDetener.onclick = detener;
    });
