document.addEventListener("DOMContentLoaded", function() {
    // Attendre le chargement du DOM avant de manipuler les éléments

    // Récupérer l'élément d'introduction
    const intro = document.getElementById("intro");
    // Récupérer l'élément de contenu
    const content = document.getElementById("content");

    // Fonction pour cacher l'introduction et afficher le contenu
    function hideIntroShowContent() {
        intro.style.display = "none";
        content.classList.remove("hidden");
    }

    // Attendre la fin de l'animation d'introduction pour afficher le contenu
    intro.addEventListener("tracking-out-expand-fwd", hideIntroShowContent);
});
