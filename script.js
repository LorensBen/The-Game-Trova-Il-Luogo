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
const locationText = document.getElementById('location-text');
const passwordScreen = document.getElementById('password-screen');
const passwordInput = document.getElementById('password-input');
const submitPasswordButton = document.getElementById('submit-password');

const messageBox = document.createElement('div');
messageBox.style.position = 'fixed';
messageBox.style.top = '10px';
messageBox.style.left = '50%';
messageBox.style.transform = 'translateX(-50%)';
messageBox.style.padding = '10px 20px';
messageBox.style.backgroundColor = '#444';
messageBox.style.color = 'white';
messageBox.style.borderRadius = '8px';
messageBox.style.zIndex = '1000';
messageBox.style.display = 'none';
document.body.appendChild(messageBox);

const tappe = [
    {
        audio: 'audio/tappa1.mp3',
        poesia: `Lì dormono poeti e pensatori,
tra lapidi, pace e memoria eterna.
Ascolta l’eco di mille cuori
tra chi la gloria seppe governar.`,
        soluzione: ['piazza santa croce', 'santa croce', 'basilica di santa croce'],
        immagine: 'immagini/piazza-santa-croce.jpg',
        descrizione: `Prendi una delle vie principali del centro e segui la direzione verso est.
                     Cammina dritto lungo Via del Proconsolo o strade vicine,
                     finché non sentirai l’aria aprirsi intorno a te.
                     Quando raggiungi una grande piazza con una facciata bianca e imponente,
                     e un monumento con un poeta in piedi davanti a una chiesa,
                     allora sei arrivato. Questo è il luogo che cercavi: Santa Croce,
                     dove la storia riposa e il viaggio ha inizio.Descrizione del Luogo.

                     🏛️DESCRIZIONE DEL LUOGO🏛️
                     La Piazza Santa Croce nacque nel XIII secolo come spazio aperto davanti alla chiesa 
                     francescana voluta dai frati minori, in una zona un tempo paludosa. La Basilica di Santa Croce,
                     iniziata nel 1294,
                     fu probabilmente progettata da Arnolfo di Cambio,
                     lo stesso architetto del Duomo e di Palazzo Vecchio.`
    },
    
    {
        audio: 'audio/tappa2.mp3',
        poesia: `Sotto il cielo che il tempo ha inciso,
tra statue mute e storia in posa,
cerca lo sguardo del potere deciso,
dove il David non riposa.`,
        soluzione: ['piazza della signoria', 'piazzale della signoria', 'palazzo vecchio'],
        immagine: 'immagini/piazza-signoria.jpg',
        descrizione: `Lasciati alle spalle la Basilica di Santa Croce
e incamminati verso ovest lungo Via dei Benci.
Attraversa l’incrocio con Corso dei Tintori e prendi Via dei Neri,
una via stretta e viva di profumi e voci.
Quando giungerai in fondo, una grande piazza si aprirà davanti a te,
con statue che sembrano vegliare sul tempo
e il maestoso Palazzo Vecchio che domina la scena.
Lì sei arrivato: Piazza della Signoria.

🏛️Descrizione del Luogo🏛️
Piazza della Signoria è il cuore politico e simbolico di Firenze.
Nata nel Medioevo come luogo di assemblea e giustizia,
divenne sede del potere cittadino con la costruzione di Palazzo Vecchio nel 1299.
Qui si trovano capolavori scultorei come la copia del David di Michelangelo
e la Loggia dei Lanzi, vero museo a cielo aperto.
Luogo di rivoluzioni, condanne, celebrazioni,
questa piazza è il teatro vivente della storia fiorentina.`
    },
    {
        audio: 'audio/tappa3.mp3',
        poesia: `Il cuore batte tra marmo e cielo,
gigante bianco dal volto fiorito,
alza lo sguardo, segui il velo
che Brunelleschi ha scolpito.`,
        soluzione: ['duomo di firenze', 'duomo', 'basilica di santa maria del fiore'],
        immagine: 'immagini/duomo.jpg',
        descrizione: `Da Piazza della Signoria, imbocca Via dei Calzaiuoli,
una via dritta e affollata che pulsa di vita fiorentina.
Cammina con lo sguardo alto, tra insegne e botteghe,
e lasciati guidare dalla luce che cresce in fondo alla strada.
Quando vedrai aprirsi una vasta piazza e ti troverai di fronte
alla maestosa facciata di marmo bianco, verde e rosa,
saprai di essere giunto al cuore spirituale di Firenze: il Duomo.

🏛️Descrizione del Luogo🏛️
Il Duomo di Firenze, ufficialmente Cattedrale di Santa Maria del Fiore,
fu iniziato nel 1296 su progetto di Arnolfo di Cambio
e completato con l’incredibile cupola di Filippo Brunelleschi nel XV secolo.
È uno dei più grandi edifici cristiani del mondo,
simbolo della grandezza artistica e architettonica del Rinascimento.
La sua facciata neogotica fu completata nel XIX secolo,
mentre il Campanile di Giotto e il Battistero di San Giovanni
completano il complesso monumentale che domina il centro cittadino..`,
    },
    {
        audio: 'audio/tappa4.mp3',
        poesia: `Lucido il muso, da mille carezze,
porta fortuna a chi lo accarezza.
Ma solo chi l’oro nella bocca farà scivolare,
potrà l’indizio segreto trovare.`,
        soluzione: ['il porcellino', 'statua del porcellino', 'porcellino'],
        immagine: 'immagini/il-porcellino.jpg',
        descrizione: `Dalla Cattedrale, imbocca di nuovo Via dei Calzaiuoli,
ma questa volta scendi verso sud, seguendo il flusso dei passanti.
Prosegui fino a incrociare Via Porta Rossa,
quindi gira a destra e cerca un piccolo spazio coperto da un loggiato.
Lì, tra mercatini e voci di venditori,
troverai una fontana lucente e familiare: il Porcellino.

🏛️Descrizione del Luogo🏛️
La Fontana del Porcellino si trova sotto la Loggia del Mercato Nuovo,
ed è una copia moderna di una scultura in bronzo realizzata da Pietro Tacca nel 1634,
ispirata a un originale ellenistico conservato agli Uffizi.
Raffigura un cinghiale, ma i fiorentini lo chiamano affettuosamente “Il Porcellino”.
Secondo la tradizione, toccare il suo muso porta fortuna —
non a caso è lucido per le infinite carezze dei visitatori.
Inserire una moneta nella sua bocca e lasciarla cadere nella grata sottostante
è considerato un rito propiziatorio da secoli..`,
    },
    {
        audio: 'audio/tappa5.mp3',
        poesia: `Dove l’Arno abbraccia l’oro,
e i bottegai sussurrano al vento,
cammina lento, senza decoro,
tra archi antichi e il firmamento.`,
        soluzione: ['ponte vecchio'],
        immagine: 'immagini/ponte-vecchio.jpg',
        descrizione: `Dalla loggia del Porcellino, riprendi il cammino verso sud,  
oltrepassa via Calimala e scendi lungo via Porta Santa Maria.  
Lascia alle spalle il brusio del mercato  
e segui il richiamo dell’Arno che scintilla in lontananza.  
Pochi passi ancora, e ti troverai su un ponte antico,  
coperto di botteghe e di tempo: il Ponte Vecchio.

🏛️Descrizione del Luogo🏛️
Il Ponte Vecchio è il più antico ponte di Firenze, costruito nel 1345,  
probabilmente su progetto di Taddeo Gaddi o Neri di Fioravante.  
Sopravvissuto a guerre e alluvioni, è celebre per le sue caratteristiche botteghe orafe,  
che hanno preso il posto delle antiche macellerie nel XVI secolo,  
per ordine di Cosimo I de’ Medici, desideroso di rendere il ponte più decoroso.  
Sopra le botteghe scorre il Corridoio Vasariano, costruito da Giorgio Vasari nel 1565,  
per collegare Palazzo Vecchio a Palazzo Pitti.  
Simbolo di Firenze e del suo ingegno artigiano,  
è oggi uno dei luoghi più iconici e romantici della città.`
    },
    {
        audio: 'audio/tappa6.mp3',
        poesia: `Oltre il ponte, dove il sole si piega,
vive un palazzo dal passo regale.
Tra mura dense di seta e di lega,
cerca il silenzio che nulla vale.`,
        soluzione: ['palazzo pitti', 'piazzale pitti'],
        immagine: 'immagini/palazzo-pitti.jpg',
        descrizione:`Dal Ponte Vecchio, percorri via de’ Guicciardini,  
lasciandoti alle spalle il fiume e le sue botteghe.  
Cammina tra palazzi e vetrine, seguendo il flusso dei passanti,  
finché davanti a te non apparirà la mole imponente del Palazzo Pitti.

🏛️Descrizione del Luogo🏛️
Il Palazzo Pitti è una delle più imponenti residenze rinascimentali di Firenze.  
Costruito nel 1458 da Luca Pitti, fu acquistato nel 1549 da Eleonora di Toledo,  
moglie di Cosimo I de’ Medici, che lo trasformò nella residenza della corte.  
Nel tempo fu ampliato fino a contenere importanti musei,  
tra cui la Galleria Palatina con opere di Raffaello e Tiziano,  
e il Museo della Moda e del Costume.  
Alle sue spalle si estendono i Giardini di Boboli,  
esempio emblematico di giardino all’italiana.  
Simbolo della magnificenza medicea, il Palazzo Pitti racconta  
secoli di potere, arte e bellezza.`
        
    },
    {
        audio: 'audio/tappa7.mp3',
        poesia: `Dal colle dove Firenze si svela,
abbraccia il giorno con occhi nuovi.
Ultima prova, la mente rivela
ciò che il viaggio davvero muovi.`,
        soluzione: ['piazzale michelangelo'],
        immagine: 'immagini/piazzale-michelangelo.jpg',
        descrizione:`Dal Palazzo Pitti, dirigiti verso Porta Romana  
e imbocca Viale Machiavelli, salendo dolcemente il colle.  
Attraversa i Giardini delle Rose, profumati e silenziosi,  
finché la città non si distenderà sotto di te in tutta la sua bellezza.

🏛️Descrizione del Luogo🏛️
Il Piazzale Michelangelo è uno dei punti panoramici più celebri di Firenze.  
Fu progettato nel 1869 dall’architetto Giuseppe Poggi,  
nell’ambito delle grandi trasformazioni urbanistiche per Firenze capitale.  
Al centro si erge una copia in bronzo del David di Michelangelo,  
circondata da altre statue simbolo dell’artista.  
Da qui si gode una vista mozzafiato sulla città:  
dal Duomo a Santa Croce, dall’Arno fino alle colline fiorentine.  
È luogo d’incontro, di contemplazione e di fotografie,  
un epilogo perfetto per chi ha percorso Firenze con occhi curiosi e cuore aperto.`
    }
];

let tappaCorrente = 0;

// Funzione per mostrare messaggi temporanei
function showMessage(text, duration = 1500) {
    messageBox.textContent = text;
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, duration);
}

// Controllo password iniziale
submitPasswordButton.addEventListener('click', () => {
    const password = passwordInput.value.trim().toLowerCase();
    if (password === 'dante') {
        passwordScreen.classList.add('hidden');
        startButton.classList.remove('hidden');
        showMessage('Password corretta! Benvenuto!', 2000);
    } else {
        showMessage('Password errata! Riprova.', 2000);
    }
});

// Avvio gioco
startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    gameArea.classList.remove('hidden');
    caricaTappa(tappaCorrente);
    inputArea.classList.remove('hidden');
    playSound('start-game.mp3');
});

// Controllo risposta
submitButton.addEventListener('click', verificaRisposta);
guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') verificaRisposta();
});

function verificaRisposta() {
    const risposta = guessInput.value.trim().toLowerCase();
    if (tappe[tappaCorrente].soluzione.some(sol => risposta.includes(sol.toLowerCase()))) {
        showMessage('Bravo! Hai indovinato!', 1500);
        effettoRisposta('correct');
        mostraImmagine();
        locationText.textContent = tappe[tappaCorrente].descrizione;
        locationText.classList.remove('hidden');
        nextArea.classList.remove('hidden');
        inputArea.classList.add('hidden');
    } else {
        showMessage('Ops! Riprova...', 1500);
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
    imageArea.classList.add('hidden');
    imageArea.classList.remove('fade-in');
    nextArea.classList.add('hidden');

    locationText.classList.add('hidden');
locationText.textContent = '';
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

function playSound(fileName) {
    const audio = new Audio(`audio/${fileName}`);
    audio.play();
}

// Passa alla tappa successiva
nextButton.addEventListener('click', () => {
    tappaCorrente++;
    if (tappaCorrente < tappe.length) {
        caricaTappa(tappaCorrente);
    } else {
        celebratioFinale();
    }
});

// Messaggio finale e restart
function celebratioFinale() {
    document.body.innerHTML = `
        <div class="stars"></div>
        <div style="text-align: center; color: #c084fc; font-size: 2rem; margin-top: 100px;">
            🎉 Congratulazioni! 🎉<br>
            Complimenti! Hai completato tutte le tappe di Trova il Luogo.<br>
            Ora conosci alcuni dei luoghi più magici e affascinanti di Firenze.<br>
            Grazie per aver viaggiato con noi tra storia, arte e meraviglia!<br>
            Se il gioco ti è piaciuto, fai una foto sul Piazzale Michelangelo e tagga la nostra pagina Instagram di Trova il Luogo!
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
