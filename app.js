document.addEventListener('DOMContentLoaded', () => {
    const campoPesquisa = document.getElementById("campo-pesquisa");
    const section = document.getElementById("resultados-pesquisa");

    campoPesquisa.addEventListener('input', () => {
        const valorPesquisa = campoPesquisa.value.toLowerCase(); // Converter para minúsculas
        const resultados = document.createDocumentFragment();


        for (let dado of dados) {
            if (dado.titulo.toLowerCase().includes(valorPesquisa)) {
                const div = document.createElement('div');
                div.classList.add('item-resultado');
                div.innerHTML = `
                    <h2>
                        <a href="${dado.link}" target="_blank">
                            ${dado.titulo}
                        </a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}<br>
                    Quer saber mais? Clique no nome do time para ver mais informações.</p>
                `;
                resultados.appendChild(div);
            }
        }

        section.innerHTML = ''; // Limpar a seção antes de adicionar os novos resultados
        section.appendChild(resultados);
    });
});
