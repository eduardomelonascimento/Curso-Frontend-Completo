(function () {
    'use strict'

    var $display = document.querySelector('#display');

    var $playPause = document.querySelector('.play-pause');
    var $stop = document.querySelector('.stop');

    var tsClickIniciar = 0;
    var tsClickPausar = 0;
    var tsTempoDecorrido = 0;
    var rodando = false;
    var intervalo = 0;


    $playPause.addEventListener('click', playPause);
    $stop.addEventListener('click', stop);


    function playPause() {
        $playPause.innerHTML = '<i class="fa-solid fa-play"></i>'
        if (rodando) {
            clearInterval(intervalo);
            tsClickPausar = Date.now();
            tsTempoDecorrido += (tsClickPausar - tsClickIniciar);
            rodando = false;
        } else {

            tsClickIniciar = Date.now();
            iniciarCronometro(tsTempoDecorrido);
            rodando = true;
        }

    }

    function iniciarCronometro(tempoDecorrido) {
        $playPause.innerHTML = '<i class="fa-solid fa-pause"></i>'
        if (!rodando) {
            var ms = tempoDecorrido || 0;
            intervalo = setInterval(function () {
                var tsClickAgora = Date.now();
                var diff = (tsClickAgora - tsClickIniciar);
                $display.textContent = formataTempo(diff + ms);
            }, 100)
            rodando = true;
        } else {

            rodando = false;
            pausar;
        }
    }

    function stop() {
        tsClickIniciar = 0;
        tsClickPausar = 0;
        tsTempoDecorrido = 0;
        $playPause.innerHTML = '<i class="fa-solid fa-play"></i>'
        $display.textContent = '00:00s'     
        rodando = false;
        clearInterval(intervalo);
    }
    function formataTempo(ms) {
        if (ms < 1000) {
            return `${ms}s`;
        } else if (ms < 60000) {
            var s = parseInt(ms / 1000);
            var c = ms - (s * 1000);
            if (s < 10) {
                return `0${s}:${c}s`
            }
            return `${s}:${c}s`;
        } else {
            var m = parseInt(ms / (60000));
            var s = parseInt(ms / 1000 - (m * 60));
            var c = ms - (s * 1000) - (m * 60 * 1000);
            var h = parseInt(m / 60);
            if (s < 10 && m < 10) {
                return `0${m}:0${s}:${c}s`
            }
            if (m < 10) {
                console.log(s, m)
                return `0${m}:${s}:${c}s`
            }
            return `${h}:${m}:${s}s`
        }
    }
    
})()