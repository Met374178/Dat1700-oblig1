
let billetter = []; //Start array for objekter

// const billeter = [];     Erstattet med nytt array
// }
// const blankt = () => {
//     document.getElementById('filmer').value = '';
//     document.getElementById('antall').value = '';
//     document.getElementById('forNavn').value = '';
//     document.getElementById('etterNavn').value = '';
//     document.getElementById('telefon').value = '';
//     document.getElementById('epost').value = '';
// }, kinoBilleter = (event) => {

function kjopbillett () { //funksjon for validering

//Oprette funksjon for validering ved input
    if (validerInputs()) {
        //Opretter input verdier
        let fornavn = document.getElementById("fornavn").value;
        let etternavn = document.getElementById("etternavn").value
        let telefonnr = document.getElementById("telefonnr").value
        let epost = document.getElementById("e-post").value;
        let film = document.getElementById("film").value;
        let antall = document.getElementById("antall").value;


        // const billett = { Erstatte med ny metode for objekt i array
        //     film: film,
        //     antall: antall,
        //     forNavn: forNavn,
        //     etterNavn: etterNavn,
        //     telefon: telefon,
        //     epost: epost,
        // };
        // billeter.push(billett);

        //Ny metode for objekt til array
        const billett = {film, antall, fornavn, etternavn,telefonnr,epost}
        billetter.push(billett);

        let ut= "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>E-post</th>" +
            "</tr>"; //løkke for tabell template

        for (let b of billetter){
            ut+="<tr>";
            ut+="<td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td><td>"+b.epost+"</td>";
            ut+="</tr>";

        // }
        // document.getElementById("ut").innerHTML = ut;
        //
        // blankt();
        //

    }
        document.getElementById("billettvisning").innerHTML=ut;
        document.getElementById("film").value="";
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("telefonnr").value="";
        document.getElementById("e-post").value="";
    }
}

function validerInputs() {
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("e-post").value;


    document.getElementById("antall-feil").textContent = "";
    document.getElementById("fornavn-feil").textContent = "";
    document.getElementById("etternavn-feil").textContent = "";
    document.getElementById("telefonnr-feil").textContent = "";
    document.getElementById("epost-feil").textContent = "";
//tilbakestille feilmeldinger
//


    // if (film === "Velg film") {
    //     document.getElementById("feilFilm").textContent = " Velg en film igjen";
    // } else {
    //     document.getElementById("feilFilm").textContent = "";
    // }

    if (antall <= 0 || !Number.isInteger(parseInt(antall))) { //sjekker at antall er mer enn 1
        document.getElementById("antall-feil").innerHTML="Skriv inn antall billetter";
        return false;
    }


    if (fornavn === "") { //Sjekker at input for navn
        document.getElementById("fornavn-feil").innerHTML="Skriv inn fornavn";
        return false;
    }


    if (etternavn === "") { //Sjekker at input for etternavn
        document.getElementById("etternavn-feil").innerHTML="Skriv inn etternavn";
        return false;
    }

    // if (!telefonnr || !/^[0-9]{8}$/.test(telefonnr)) {
    //     document.getElementById("feilTelefonNr").textContent = "Skriv inn ditt telefonummer";
    // } else {
    //     document.getElementById("feilTelefonNr").textContent = "";
    //ny metode sjekker at nummer ikke er tomt og mellom 7 og 10 sifre
    let tlfRegex = /^\d{7,10}$/;
    if (telefonnr === "" || !tlfRegex.test(telefonnr)) {
        document.getElementById("telefonnr-feil").innerHTML="Skriv inn telefonnummer på 8 siffer";
        return false;
    }

    //Sjekker at e-post er skrevet inn og har gyldig format ved hjelp av Regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (epost === "" || !emailRegex.test(epost)) {
        document.getElementById("epost-feil").innerHTML="Vennligst skriv inn en gyldig e-post";
        return false;
    }

    return true; // Returnerer true hvis alle valideringer er bestått
}



// function slett() {
//     billetter.length = 0;
//     output();
//Slett billett/tøm array
function slettbilletter () {
    billetter = [];
    document.getElementById("billettvisning").innerHTML="Billettene er slettet";
}