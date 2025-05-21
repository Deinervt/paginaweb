function validarEntradas(...entradas) {
    return entradas.every(entrada => {
        if (entrada === '' || isNaN(entrada) || entrada < 0) {
            alert('Por favor, ingrese valores numéricos válidos y no negativos.');
            return false;
        }
        return true;
    });
}

function calcularVelocidad() {
    const distancia = document.getElementById('distancia').value;
    const tiempo = document.getElementById('tiempo').value;
    const resultado = document.getElementById('resultado-velocidad');

    if (!validarEntradas(distancia, tiempo)) return;
    if (tiempo == 0) {
        resultado.textContent = 'Error: El tiempo no puede ser cero.';
        return;
    }

    const velocidad = distancia / tiempo;
    resultado.textContent = `Velocidad: ${velocidad.toFixed(2)} m/s`;
}

function calcularAceleracion() {
    const deltaV = document.getElementById('deltaV').value;
    const tiempo = document.getElementById('tiempoA').value;
    const resultado = document.getElementById('resultado-aceleracion');

    if (!validarEntradas(deltaV, tiempo)) return;
    if (tiempo == 0) {
        resultado.textContent = 'Error: El tiempo no puede ser cero.';
        return;
    }

    const aceleracion = deltaV / tiempo;
    resultado.textContent = `Aceleración: ${aceleracion.toFixed(2)} m/s²`;
}

function calcularFuerza() {
    const masa = document.getElementById('masa').value;
    const aceleracion = document.getElementById('aceleracion').value;
    const resultado = document.getElementById('resultado-fuerza');

    if (!validarEntradas(masa, aceleracion)) return;

    const fuerza = masa * aceleracion;
    resultado.textContent = `Fuerza: ${fuerza.toFixed(2)} N`;
}

function calcularTrabajo() {
    const fuerza = document.getElementById('fuerzaW').value;
    const distancia = document.getElementById('distanciaW').value;
    const resultado = document.getElementById('resultado-trabajo');

    if (!validarEntradas(fuerza, distancia)) return;

    const trabajo = fuerza * distancia;
    resultado.textContent = `Trabajo: ${trabajo.toFixed(2)} J`;
}

function calcularPotencia() {
    const trabajo = document.getElementById('trabajo').value;
    const tiempo = document.getElementById('tiempoP').value;
    const resultado = document.getElementById('resultado-potencia');

    if (!validarEntradas(trabajo, tiempo)) return;
    if (tiempo == 0) {
        resultado.textContent = 'Error: El tiempo no puede ser cero.';
        return;
    }

    const potencia = trabajo / tiempo;
    resultado.textContent = `Potencia: ${potencia.toFixed(2)} W`;
}

function calcularEnergiaCinetica() {
    const masa = document.getElementById('masaEc').value;
    const velocidad = document.getElementById('velocidadEc').value;
    const resultado = document.getElementById('resultado-energia-cinetica');

    if (!validarEntradas(masa, velocidad)) return;

    const energiaCinetica = 0.5 * masa * velocidad * velocidad;
    resultado.textContent = `Energía Cinética: ${energiaCinetica.toFixed(2)} J`;
}

function calcularEnergiaPotencial() {
    const masa = document.getElementById('masaEp').value;
    const altura = document.getElementById('altura').value;
    const g = 9.81; // Aceleración de la gravedad
    const resultado = document.getElementById('resultado-energia-potencial');

    if (!validarEntradas(masa, altura)) return;

    const energiaPotencial = masa * g * altura;
    resultado.textContent = `Energía Potencial: ${energiaPotencial.toFixed(2)} J`;
}

function calcularPresion() {
    const fuerza = document.getElementById('fuerzaP').value;
    const area = document.getElementById('area').value;
    const resultado = document.getElementById('resultado-presion');

    if (!validarEntradas(fuerza, area)) return;
    if (area == 0) {
        resultado.textContent = 'Error: El área no puede ser cero.';
        return;
    }

    const presion = fuerza / area;
    resultado.textContent = `Presión: ${presion.toFixed(2)} Pa`;
}

function calcularDensidad() {
    const masa = document.getElementById('masaD').value;
    const volumen = document.getElementById('volumen').value;
    const resultado = document.getElementById('resultado-densidad');

    if (!validarEntradas(masa, volumen)) return;
    if (volumen == 0) {
        resultado.textContent = 'Error: El volumen no puede ser cero.';
        return;
    }

    const densidad = masa / volumen;
    resultado.textContent = `Densidad: ${densidad.toFixed(2)} kg/m³`;
}

function calcularFrecuencia() {
    const periodo = document.getElementById('periodo').value;
    const resultado = document.getElementById('resultado-frecuencia');

    if (!validarEntradas(periodo)) return;
    if (periodo == 0) {
        resultado.textContent = 'Error: El período no puede ser cero.';
        return;
    }

    const frecuencia = 1 / periodo;
    resultado.textContent = `Frecuencia: ${frecuencia.toFixed(2)} Hz`;
}
