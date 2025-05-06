const startButton = document.getElementById('start-button');
const gameArea = document.getElementById('game-area');
const audioPoesia = document.getElementById('audio-poesia');
const poesiaText = document.getElementById('poesia-text');
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-button');
const inputArea = document.getElementById('input-area');
const nextArea = document.getElementById('next-area');
const nextButton = document.getElementById('next-button');
const imageArea = document.getElementById('image-area');
const locationImage = document.getElementById('location-image');
const passwordScreen = document.getElementById('password-screen');
const passwordInput = document.getElementById('password-input');
const submitPasswordButton = document.getElementById('submit-password');

const tappe = [
    {
        audio: 'audio/tappa1.mp3',
        poesia: `Lì dormono poeti e pensatori,
        tra lapidi, pace e memoria eterna.
        Ascolta l’eco di mille cuori
        tra chi la gloria seppe governar.`,
        soluzione: ['Piazza Santa Croce', 'Santa Croce', 'Basilica di santa croce'],
        immagine: 'immagini/piazza-santa-croce.jpg'
    },
    {
        audio: 'audio/tappa2.mp3',
        poesia: `Sotto il cielo che il tempo ha inciso,
        tra statue mute e storia in posa,
        cerca lo sguardo del potere deciso,
        dove il David non riposa.`,
        soluzione: ['piazza della signoria', 'Piazzale della signoria','Palazzo Vecchio'],
        immagine: 'immagini/piazza-signoria.jpg'
    },
    {
        audio: 'audio/tappa3.mp3',
        poesia: `Il cuore batte tra marmo e cielo,
        gigante bianco dal volto fiorito,
        alza lo sguardo, segui il velo
        che Brunelleschi ha scolpito.`,
        soluzione: ['Duomo di Firenze', 'Duomo', 'Basilica di Santa Maria del Fiore'],
        immagine: 'immagini/duomo.jpg'
    },
    {
        audio: 'audio/tappa4.mp3',
        poesia: `Lucido il muso, da mille carezze,
        porta fortuna a chi lo accarezza.
        Ma solo chi l’oro nella bocca farà scivolare,
        potrà l’indizio segreto trovare.`,
        soluzione: ['il porcellino','Statua del Porcellino', 'Porcellino'], 
        immagine: 'immagini/il-porcellino.jpg'
    },
    {
        audio: 'audio/tappa5.mp3',
        poesia: `Dove l’Arno abbraccia l’oro,
        e i bottegai sussurrano al vento,
        cammina lento, senza decoro,
        tra archi antichi e il firmamento.`,
        soluzione: ['ponte vecchio'],
        immagine: 'immagini/ponte-vecchio.jpg'
    },
    {
        audio: 'audio/tappa6.mp3',
        poesia: `Oltre il ponte, dove il sole si piega,
        vive un palazzo dal passo regale.
        Tra mura dense di seta e di lega,
        cerca il silenzio che nulla vale.`,
        soluzione: ['palazzo pitti','Piazzale Pitti'],
        immagine: 'immagini/palazzo-pitti.jpg'
    },
    {
        audio: 'audio/tappa7.mp3',
        poesia: `Dal colle dove Firenze si svela,
        abbraccia il giorno con occhi nuovi.
        Ultima prova, la mente rivela
        ciò che il viaggio davvero muovi.`,
        soluzione: ['piazzale michelangelo'],
        immagine: 'immagini/piazzale-michelangelo.jpg'
    }
];

let tappaCorrente = 0;

submitPasswordButton.addEventListener('click', () => {
    const password = passwordInput.value.trim().toLowerCase();
    if (password === 'dante') {
        passwordScreen.classList.add('hidden');
        startButton.classList.remove('hidden');
    } else {
        alert('Password errata! Riprova.');
    }
});

startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    gameArea.classList.remove('hidden');
    caricaTappa(tappaCorrente);
    inputArea.classList.remove('hidden');
    playSound('start-game.mp3');
});

submitButton.addEventListener('click', verificaRisposta);

// Permetti invio con ENTER
guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        verificaRisposta();
    }
});

function verificaRisposta() {
    const risposta = guessInput.value.trim().toLowerCase();
    if (tappe[tappaCorrente].soluzione.some(sol => risposta.includes(sol.toLowerCase()))) {
        alert('Bravo! Hai indovinato!');
        effettoRisposta('correct');
        mostraImmagine();
        nextArea.classList.remove('hidden');
        inputArea.classList.add('hidden');
    } else {
        alert('Ops! Riprova...');
        effettoRisposta('incorrect');
    }
}

function caricaTappa(index) {
    audioPoesia.src = tappe[index].audio;
    audioPoesia.load();
    audioPoesia.play();
    poesiaText.textContent = tappe[index].poesia;
    poesiaText.classList.remove('hidden');
    poesiaText.classList.add('fade-in');
    inputArea.classList.remove('hidden');
    guessInput.value = '';
    guessInput.focus();
}

function mostraImmagine() {
    locationImage.src = tappe[tappaCorrente].immagine;
    imageArea.classList.remove('hidden');
    imageArea.classList.add('fade-in');
}

function effettoRisposta(tipo) {
    document.body.style.backgroundColor = tipo === 'correct' ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)';
    playSound(tipo === 'correct' ? 'correct-answer.mp3' : 'incorrect-answer.mp3');
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, 500);
}

function playSound(sound) {
    const audio = new Audio(`audio/${sound}`);
    audio.play();
}

nextButton.addEventListener('click', () => {
    tappaCorrente++;
    if (tappaCorrente < tappe.length) {
        caricaTappa(tappaCorrente);
        nextArea.classList.add('hidden');
        inputArea.classList.remove('hidden');
        imageArea.classList.add('hidden');
        imageArea.classList.remove('fade-in');
    } else {
        celebratioFinale();
    }
});

function celebratioFinale() {
    document.body.innerHTML = `
        <div class="stars"></div>
        <div style="text-align: center; color: #c084fc; font-size: 2rem; margin-top: 100px;">
            🎉 Congratulazioni! 🎉<br>Complimenti! Hai completato tutte le tappe di Trova il Luogo. Ora conosci alcuni dei luoghi più magici e affascinanti di Firenze. Grazie per aver viaggiato con noi tra storia, arte e meraviglia! Se il gioco ti è piaciuto, fai una foto sul Piazzale Michelangelo e tagga la nostra pagina Instagram di Trova il Luogo!
            <br><br>
            <button id="restart-button" style="margin-top: 20px; padding: 10px 20px; font-size: 1.2rem; background-color: #6b21a8; color: white; border: none; border-radius: 10px; cursor: pointer;">
                🔄 Ricomincia il gioco
            </button>
        </div>
    `;

    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
    }

    const restartButton = document.getElementById('restart-button');
    restartButton.addEventListener('click', () => {
        window.location.reload();
    });
}
