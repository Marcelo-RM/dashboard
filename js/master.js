
// Função geral para remover classe de um determinado conjunto de itens
function alteraClasseItens(itensCollection, className) {
    Array.from(itensCollection).forEach(item => {
        if (item.className.includes(className)) {
            item.className = item.className.split(className).join(" ");
        }
    });
}

//Altera o status dos itens do menu principal
function changeClassStatus(item, nomeClasse, selector) {
    if (item.className.includes(nomeClasse)) { return; }
    alteraClasseItens(document.querySelectorAll(selector), nomeClasse);
    item.className = item.className.trim() + " " + nomeClasse;
}

window.onload = function () {
    //cria metodo para itens de menu principal
    this.document.querySelectorAll(".iconContainer img").forEach(icon => {
        icon.addEventListener("click", function () {
            changeClassStatus(icon, "iconSelected", ".iconContainer img");
        });
    });

    //cria metodo para tile dias da semana
    this.document.querySelectorAll(".day").forEach(dia => {
        dia.addEventListener("click", function () {
            changeClassStatus(dia, "daySelected", ".day");
        });
    });

    //cria metodo para barra dias da semana
    this.document.querySelectorAll(".statisticBars .bar").forEach(bar => {
        bar.addEventListener("click", function () {
            changeClassStatus(bar, "selected", ".statisticBars .bar");
        });
    })

    //cria metodo para alteracao botao estatistica
    this.document.querySelectorAll(".statisticButton").forEach(btn => {
        btn.addEventListener("click", function() {
            changeClassStatus(btn, "sbSelected", ".statisticButton");
        });
    });

    //cria método para ativação ou não das tiles de funções
    this.document.querySelectorAll(".checkbox").forEach(check => {
        check.addEventListener("change", function (event) {
            //Vou fazer tudo aqui, pois não imagino reutilizacao nisso, é algo muito especifico
            var head = event.target.parentElement.parentElement.
                parentElement.parentElement.parentElement.
                children[0];

            if (event.target.checked) {
                head.style.backgroundColor = "var(--gray-medium)"
            } else {
                head.style.backgroundColor = "";
            }
        })
    });
}