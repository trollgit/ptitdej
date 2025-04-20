document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const personnes = document.getElementById("personnes").value;

    console.log("Nouvelle inscription :", { nom, email, personnes });

    document.getElementById("confirmation").innerText = "Merci pour votre inscription, " + nom + " !";

    // Optionnel : vider le formulaire
    document.getElementById("formulaire").reset();
});
