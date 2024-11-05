function abreSidebar() {
    const menu = document.getElementById('aside');
    
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
function formAdicionar() {
    const adicionar = document.getElementById('form');
    const tabela = document.getElementById('tabela');
    const menu = document.getElementById('aside');

    if (adicionar.style.display === 'none' || adicionar.style.display === '') {
        adicionar.style.display = 'block';
        tabela.style.display = 'none';
        menu.style.display="none";
    } else {
        adicionar.style.display = 'none';
        tabela.style.display = 'block';
    }
}
function fechar() {
    const fechar = document.getElementById('form');
    const tabela = document.getElementById('tabela');

    fechar.style.display = 'none';
    tabela.style.display = "block";
}

function tituloTabela(mudarTitulo){
    const tabela = document.getElementById('tabela');
    const menu = document.getElementById('aside');

    document.getElementById('tabela-titulo').textContent = mudarTitulo;
    tabela.style.display = 'block';
    menu.style.display="none";
}
