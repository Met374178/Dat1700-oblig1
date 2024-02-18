const billeter = [];
}
const blankt = () => {
    document.getElementById('filmer').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('forNavn').value = '';
    document.getElementById('etterNavn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('epost').value = '';
}, kinoBilleter = (event) => {

    const film = document.getElementById('filmer').value;
    const antall = document.getElementById('antall').value;
    const forNavn = document.getElementById('forNavn').value;
    const etterNavn = document.getElementById('etterNavn').value;
    const telefon = document.getElementById('telefon').value;
    const epost = document.getElementById('epost').value;

    const billett = {
        film: film,
        antall: antall,
        forNavn: forNavn,
        etterNavn: etterNavn,
        telefon: telefon,
        epost: epost,
    };
    billeter.push(billett);

    if (film === "Velg film") {
        document.getElementById("feilFilm").textContent = " Velg en film igjen";
    } else {
        document.getElementById("feilFilm").textContent = "";
    }

    if (!antallBilletter || isNaN(antallBilletter) || antallBilletter <= 0) {
        document.getElementById("feilAntallBilletter").textContent = "Skriv inn antall billettter";
    } else {
        document.getElementById("feilAntallBilletter").textContent = "";
    }

    if (!fornavn) {
        document.getElementById("feilFornavn").textContent = "Skriv inn fornavn";
    } else {
        document.getElementById("feilFornavn").textContent = "";
    }

    if (!etternavn) {
        document.getElementById("feilEtternavn").textContent = " Skriv inn etternavn";
    } else {
        document.getElementById("feilEtternavn").textContent = "";
    }
    if (!telefonnr || !/^[0-9]{8}$/.test(telefonnr)) {
        document.getElementById("feilTelefonNr").textContent = "Skriv inn ditt telefonummer";
    } else {
        document.getElementById("feilTelefonNr").textContent = "";

    }
    if (!epost || !/^[^\s*]+@[^\s@]+\.[^\s@]+$/.test(epost)) {
        document.getElementById("feilEpost").textContent = "Skriv inn din epost-adresse";
    } else {
        document.getElementById("feilEpost").textContent = "";
    }

    const billett = {
        Film: film,
        AntallBilletter: antallBilletter,
        Fornavn: fornavn,
        Etternavn: etternavn,
        Telefonnr: telefonnr,
        Epost: epost
    };
    billeter.push(ticket);


    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th>" +
        "</tr>";
    for (let t of billeter) {
        ut += "<tr>";
        ut += "<td>" + t.film + "</td><td>" + t.antall + "</td><td>" + t.forNavn + "</td><td>" + t.etterNavn + "</td><td>" + t.telefon + "</td><td>" + t.epost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("ut").innerHTML = ut;

    blankt();
};

}
function slett() {
    billetter.length = 0;
    output();

    document.getElementById("film").value = "Velg film her";
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonNr").value = "";
    document.getElementById("epost").value = "";
    document.getElementById("feilFornavn").value = "";
    document.getElementById("output").innerHTML = ""
}