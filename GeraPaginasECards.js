const container = document.querySelector("#container");

especies.forEach((item) => {
    const linkdocard = document.createElement("a");
    linkdocard.href = "paginaAnimal.html?nome=" + item.slug;
    linkdocard.className = "block";

    const card = document.createElement("div");
    card.className = "bg-[#1e5631] text-[#F0F0F0] max-h-[300px] rounded-xl overflow-hidden";

    const titulo = document.createElement("h2");
    titulo.className = "text-center font-bold";
    titulo.textContent = item.nome;

    const imagem = document.createElement("img");
    imagem.src = item.Foto1;
    imagem.className = "w-full h-full object-cover";

    card.appendChild(titulo);
    card.appendChild(imagem);
    linkdocard.appendChild(card);
    container.appendChild(linkdocard);
});

