document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("nome");

    const animal = especies.find(x => x.slug === slug);
    if (!animal) {
        document.querySelector("#title").textContent = "Animal não encontrado";
        return;
    }

    document.querySelector("#title").textContent = animal.nome;
    document.querySelector("#text2").textContent = animal.descricao || "Sem descrição disponível.";

    const img = document.querySelector("#img2 img");
    if (img) {
        img.src = animal.Foto1;
        img.alt = animal.nome;
    }
});
