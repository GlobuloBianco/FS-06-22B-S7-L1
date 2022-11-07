var btn = document.getElementById('btn');
var info = [];

function Persona(_nome, _cognome, _eta) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.eta = _eta;
}

btn.addEventListener('click', () => {
    let newNome = document.getElementById('nome').value;
    let newCognome = document.getElementById('cognome').value;
    //calcolo età
    let newEta = document.getElementById('data').value;
    let dataNascita = new Date(newEta);
    let annoNascita = dataNascita.getFullYear();
    let annoAttuale = new Date().getFullYear();
    let eta = annoAttuale - annoNascita;
    //creazione array
    let newPersona = new Persona(newNome, newCognome, eta);
    info.push(newPersona);

    stampaForm();
    resetInput();
})

function stampaForm() {
    let tabella = document.getElementById('tabella');
    let stringa = '';

    tabella.innerHTML = '';
    info.forEach((element) => {
        stringa += `<tr><td>${element.nome} ${element.cognome}</td><td>${element.eta}</td></tr>`;
    });
    tabella.innerHTML = stringa;
}

function resetInput() {
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('data').value = '';
}