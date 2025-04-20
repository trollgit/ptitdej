window.addEventListener("DOMContentLoaded", () => {
    const formulaire = document.getElementById("formulaire");
    const confirmation = document.getElementById("confirmation");
    const liste = document.getElementById("liste-inscrits");
    const boutonVoir = document.getElementById("voir-inscrits");

    formulaire.addEventListener("submit", function(event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const personnes = document.getElementById("personnes").value;

        const inscrit = { nom, email, personnes };
        const anciens = JSON.parse(localStorage.getItem("inscrits")) || [];
        anciens.push(inscrit);
        localStorage.setItem("inscrits", JSON.stringify(anciens));

        confirmation.innerText = "Merci pour votre inscription, " + nom + " !";
        formulaire.reset();
    });

    boutonVoir.addEventListener("click", function() {
        liste.innerHTML = "";
        const inscrits = JSON.parse(localStorage.getItem("inscrits")) || [];

        if (inscrits.length === 0) {
            liste.innerHTML = "<li>Aucun inscrit pour le moment.</li>";
            return;
        }

        inscrits.forEach((inscrit, index) => {
            const item = document.createElement("li");
            item.textContent = `${index + 1}. ${inscrit.nom} (${inscrit.email}) - ${inscrit.personnes} personne(s)`;
            liste.appendChild(item);
        });
    });
});
