// BASE DE DATOS EMOCIONAL (INFORMACIÓN DINÁMICA)
const emotionData = {
    alegria: {
        title: "Alegría",
        color: "#10b981",
        glow: "rgba(16,185,129,0.15)",
        purpose: "Su función biológica es la de generar energía, motivar la repetición de conductas saludables y fortalecer los vínculos sociales a través de la liberación de dopamina y endorfinas.",
        challenge: "En los adolescentes, la búsqueda extrema de esta recompensa química puede nublar la percepción del riesgo, empujando temporalmente a conductas impulsivas o temerarias."
    },
    tristeza: {
        title: "Tristeza",
        color: "#3b82f6",
        glow: "rgba(59,130,246,0.15)",
        purpose: "es actuar como un sistema de alarma emocional que te empuja a la acción y protege tus límites. No son emociones malas o destructivas por naturaleza; evolutivamente son herramientas de supervivencia diseñadas para indicarte que algo en tu entorno necesita cambiar de inmediato.",
        challenge: "Debido a la intensidad de los cambios biológicos, la tristeza adolescente puede sentirse como un estado permanente o absoluto. Es vital validarla sin juzgarla como debilidad."
    },
    ira: {
        title: "Ira / Frustración",
        color: "#ef4444",
        glow: "rgba(239,68,68,0.15)",
        purpose: "no son errores del sistema ni emociones son señales de supervivencia altamente evolucionadas. Su verdadero propósito es actuar como alarmas y catalizadores de cambio cuando tus límites, necesidades o metas se ven amenazados.",
        challenge: "La brecha de desarrollo de la corteza prefrontal dificltada detener la explosión verbal o física. Aprender a canalizar esa energía sin destruirse es el gran reto."
    },
    miedo: {
        title: "Miedo",
        color: "#8b5cf6",
        glow: "rgba(139,92,246,0.15)",
        purpose: "Es el sistema de alarma de nuestro instinto de supervivencia. Activa la respuesta de lucha, huida o parálisis ante peligros inminentes reales o percibidos.",
        challenge: "En la adolescencia el miedo migra fuertemente hacia el terreno social: miedo al rechazo del grupo, a no encajar o al fracaso académico, manifestándose con timidez extrema."
    },
    ansiedad: {
        title: "Ansiedad",
        color: "#f59e0b",
        glow: "rgba(245,158,11,0.15)",
        purpose: "Es una respuesta de anticipación del cerebro que intenta prever escenarios futuros problemáticos para que podamos prepararnos o ensayar soluciones con antelación.",
        challenge: "Cuando el cerebro sobreestima las amenazas futuras (exámenes, interacciones sociales) y subestima las propias capacidades, la ansiedad se vuelve paralizante."
    }
};


const buttons = document.querySelectorAll('.emo-btn');
const container = document.getElementById('displayContainer');
const titleEl = document.getElementById('emoTitle');
const purposeEl = document.getElementById('emoPurpose');
const challengeEl = document.getElementById('emoChallenge');


function updateEmotionDisplay(emotionKey) {

    // Si esta página no tiene estos elementos,
    // simplemente no hace nada.
    if (!container || !titleEl || !purposeEl || !challengeEl) {
        return;
    }

    const data = emotionData[emotionKey];

    // Evita errores si no existe la emoción
    if (!data) {
        return;
    }

    titleEl.textContent = data.title;
    purposeEl.textContent = data.purpose;
    challengeEl.textContent = data.challenge;

    // Cambia los colores del CSS
    container.style.setProperty('--emo-color', data.color);
    container.style.setProperty('--emo-glow', data.glow);
}



if (buttons.length > 0) {

    // Inicialización con la primera emoción
    updateEmotionDisplay('alegria');

    // Manejo de los botones
    buttons.forEach(button => {

        button.addEventListener('click', () => {

            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            const emotion = button.getAttribute('data-emotion');

            updateEmotionDisplay(emotion);
        });

    });
}



const emotionsForm = document.getElementById("emotionsForm");

if (emotionsForm) {

    emotionsForm.addEventListener("submit", function(e) {

        // Evita que la página se vaya hacia arriba
        e.preventDefault();

        let nombre = document.getElementById("name").value.trim();
        let estado = document.getElementById("mood").value;
        let resultado = document.getElementById("resultCard");


        // Si no escribió nombre
        if (nombre === "") {
            nombre = "amigo/a";
        }


        // RESPUESTA SEGÚN EL ESTADO DE ÁNIMO

        if (estado === "excelente" || estado === "bien") {

            resultado.innerHTML =
                "¡Qué bueno saber que estás bien, " +
                nombre +
                "! 💗";

            resultado.className =
                "result-card result-good";


        } else if (estado === "cansado") {

            resultado.innerHTML =
                "Recuerda descansar y darte tiempo para ti, " +
                nombre +
                ". 🌷 ";

            resultado.className =
                "result-card result-neutral";


        } else {

            resultado.innerHTML =
                "Gracias por compartir cómo te sientes, " +
                nombre +
                ". No tienes que enfrentar los momentos difíciles en soledad. Habla con alguien de confianza. 💗";

            resultado.className =
                "result-card result-bad";
        }


        // Hace visible la respuesta
        resultado.style.display = "block";

    });

}
