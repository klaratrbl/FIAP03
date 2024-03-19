// Espera até que o DOM esteja completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o elemento de alternância de tema
    const inputAlternancia = document.getElementById('alternancia');
    // Seleciona o rótulo do botão de alternância
    const rotuloAlternancia = document.querySelector('.switch-label');

    // Função para aplicar o tema ao carregar a página
    function aplicarTema() {
        // Verifica se o tema escuro está armazenado no armazenamento local
        const temaEscuro = localStorage.getItem('temaEscuro');
        // Se o tema escuro estiver armazenado, aplica-o
        if (temaEscuro === 'true') {
            document.body.classList.add('tema-escuro'); // Adiciona a classe 'tema-escuro' ao corpo do documento
            rotuloAlternancia.style.backgroundColor = '#fff'; // Define a cor de fundo do rótulo do botão de alternância
            inputAlternancia.checked = true; // Marca o botão de alternância
        }
    }

    // Adiciona um ouvinte de evento para o input de alternância de tema
    inputAlternancia.addEventListener('change', function() {
        // Alterna a classe de tema escuro no corpo do documento
        document.body.classList.toggle('tema-escuro');
        // Salva o estado do tema no armazenamento local
        localStorage.setItem('temaEscuro', document.body.classList.contains('tema-escuro'));
        // Verifica se o corpo do documento tem a classe de tema escuro
        if (document.body.classList.contains('tema-escuro')) {
            // Altera a cor de fundo do rótulo do botão de alternância no modo escuro
            rotuloAlternancia.style.backgroundColor = '#fff';
        } else {
            // Altera a cor de fundo do rótulo do botão de alternância no modo claro
            rotuloAlternancia.style.backgroundColor = '#333';
        }
    });

    // Aplica o tema ao carregar a página
    aplicarTema();

    // Função para carregar o vídeo do YouTube
    function loadYouTubeVideo(videoId, containerId) {
        const container = document.getElementById(containerId); // Seleciona o contêiner do vídeo pelo ID
        // Insere o iframe do vídeo do YouTube no contêiner
        container.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <button class="close-button" onclick="closeMiniPlayer('${containerId}')">&times;</button>
        `;
    }

    // Função para fechar o miniplayer do YouTube
    window.closeMiniPlayer = function(containerId) {
        const container = document.getElementById(containerId); // Seleciona o contêiner do vídeo pelo ID
        container.innerHTML = ''; // Remove o conteúdo do contêiner
    }

    // Adiciona eventos de clique aos títulos dos jogos para abrir o miniplayer do YouTube
    document.getElementById('no-place-for-bravery').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        loadYouTubeVideo('ju3H1cQuOx4', 'video-no-place-for-bravery'); // Carrega o vídeo do YouTube para o jogo 'No Place for Bravery'
    });

    document.getElementById('horizon-chase-2').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        loadYouTubeVideo('Fnklq_CCDfQ', 'video-horizon-chase-2'); // Carrega o vídeo do YouTube para o jogo 'Horizon Chase 2'
    });

    document.getElementById('hazel-sky').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        loadYouTubeVideo('fwHocVxDKv0', 'video-hazel-sky'); // Carrega o vídeo do YouTube para o jogo 'Hazel Sky'
    });

    document.getElementById('fobia-st-dinfna-hotel').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        loadYouTubeVideo('AAP16NU871E', 'video-fobia-st-dinfna-hotel'); // Carrega o vídeo do YouTube para o jogo 'Fobia – St. Dinfna Hotel'
    });

    document.getElementById('paozito').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        loadYouTubeVideo('fS_wVuvNHo4', 'video-paozito'); // Carrega o vídeo do YouTube para o jogo 'Pãozito'
    });
});
