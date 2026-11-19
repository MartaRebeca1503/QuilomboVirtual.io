// Componente reutilizável: botão "Voltar ao menu" (usado nas páginas sem a barra de menu)
document.addEventListener("DOMContentLoaded", function () {
    const link = document.createElement("a");
    link.className = "back-to-menu";
    link.href = "/src/index.html";
    link.textContent = "← Voltar ao menu";
    document.body.prepend(link);
});
