// Função para abrir o modal

const text1 = document.getElementById("text1");
const name = document.getElementById("name");
const photo = document.getElementById("img");
const link = document.getElementById("link");

const number = 2;
function openModal(number) {
    const modal = document.getElementById('kxModal');
    modal.classList.add('kx-modal-active');
    modal.style.display = 'flex';
    link.style.display = '';

    if (number === 1){
        
        name.innerText = "Célia Xakriaba - Deputada & Ativista"
        text1.innerText = "Representante do povo Xakriabá e deputada federal por Minas Gerais, Célia é uma das vozes mais fortes na defesa dos direitos indígenas no Brasil. Além de lutar pela demarcação de terras, ela atua pela preservação da biodiversidade e pelo reconhecimento das culturas originárias, conectando suas raízes à política nacional.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/celia.jpg" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/celia.xakriaba/";
    }
    else if (number === 2){
        text1.innerText = "Saiba mais sobre WD";
        name.innerText = "WD - Cantor"
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/wd-modal.png" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/wdooficial/";

    }

    else if (number === 3){
        name.innerText = "Sonia Guajajara - Ministra dos povos indigenas"
        text1.innerText = "Sonia Guajajara, do povo Guajajara, é uma ativista indígena e ambiental de destaque no Brasil. Atualmente, ela ocupa o cargo de Ministra dos Povos Indígenas, sendo a primeira pessoa a liderar essa pasta. Sonia é conhecida por sua atuação em movimentos sociais, por seu trabalho internacional em defesa da Amazônia e por sua luta pela valorização das culturas indígenas.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/sonia.png" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/guajajarasonia/";
    }
    else if (number === 4){
        name.innerText = "Djamilla Ribeiro"
        text1.innerText = "Djamila Ribeiro é uma das principais vozes do feminismo negro no Brasil. Autora de livros como Pequeno Manual Antirracista, ela usa sua produção intelectual para promover debates sobre desigualdade racial e de gênero. Sua atuação vai além das redes sociais, impactando diretamente a educação e a cultura no país.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/djamila.jpg" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/djamilaribeiro1/";
    }
    else if (number === 5){
        name.innerText = "Gilberto Gil"
        text1.innerText = "Gilberto Gil é um dos maiores nomes da música brasileira e um símbolo da resistência cultural. Além de sua carreira artística, foi Ministro da Cultura, defendendo políticas públicas para a inclusão e valorização das artes. Seu legado une inovação musical, ativismo e defesa dos direitos humanos.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/gilberto.jpg" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/gilbertogil/";
    }
    else if (number === 6){
        name.innerText = "Tukumã Pataxó"
        text1.innerText = "Tukumã Pataxó é um jovem ativista e estudante de Direito, que se destaca por sua atuação nas redes sociais, trazendo visibilidade às lutas dos povos indígenas. Ele aborda temas como demarcação de terras, preservação da cultura ancestral e proteção ambiental, sempre de maneira educativa e acessível. Sua comunicação criativa e engajada inspira o público a valorizar e apoiar as causas indígenas.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/tukuma.png" alt="Imagem do Modal" class="kx-modal-image">'
        link.href = "https://www.instagram.com/tukuma_pataxo/";
    }
    else if (number === 7){
        name.innerText = "Kae Guajajara - Ativista indígena"
        text1.innerText = "Kae Guajajara, do povo Guajajara, é ativista e comunicadora indígena. Usa as redes sociais e a comunicação para levar ao grande público as lutas dos povos originários, os direitos territoriais e a valorização das culturas indígenas.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/kae-guajajara.jpg" alt="Foto de Kae Guajajara" class="kx-modal-image">'
        link.style.display = "none";
    }
    else if (number === 8){
        name.innerText = "Ailton Krenak - Líder indígena e escritor"
        text1.innerText = "Ailton Krenak, do povo Krenak, é líder indígena, filósofo, escritor e ambientalista. Foi uma das vozes mais importantes na defesa dos direitos indígenas durante a Constituinte de 1988 e é autor de obras como Ideias para adiar o fim do mundo, A vida não é útil e Futuro ancestral.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/ailton-krenak.jpg" alt="Foto de Ailton Krenak" class="kx-modal-image">'
        link.style.display = "none";
    }
    else if (number === 9){
        name.innerText = "Sônia Guimarães - Física e professora"
        text1.innerText = "Sônia Guimarães é física e professora do Instituto Tecnológico de Aeronáutica (ITA). Foi a primeira mulher negra brasileira a se doutorar em Física e dedica sua carreira à pesquisa em materiais semicondutores e ao incentivo de jovens negros e mulheres na ciência.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/sonia-guimaraes.jpg" alt="Foto de Sônia Guimarães" class="kx-modal-image">'
        link.style.display = "none";
    }
    else if (number === 10){
        name.innerText = "Marian Croak - Engenheira e inventora"
        text1.innerText = "Marian Croak é engenheira e inventora norte-americana, pioneira da tecnologia de voz sobre IP (VoIP), que permite chamadas pela internet. Detentora de mais de 200 patentes, é vice-presidente de engenharia no Google.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/marian-croak.jpg" alt="Foto de Marian Croak" class="kx-modal-image">'
        link.style.display = "none";
    }
    else if (number === 11){
        name.innerText = "Mark Dean - Engenheiro e inventor"
        text1.innerText = "Mark Dean é engenheiro e inventor norte-americano. Pesquisador da IBM, foi um dos criadores do computador pessoal da empresa e coinventor do barramento ISA, além de liderar o desenvolvimento do primeiro chip de 1 gigahertz. É detentor de diversas patentes.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/mark-dean.jpg" alt="Foto de Mark Dean" class="kx-modal-image">'
        link.style.display = "none";
    }
    else if (number === 12){
        name.innerText = "Kizzy Terra"
        text1.innerText = "Saiba mais sobre essa grande voz.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/kizzy-terra.jpg" alt="Foto de Kizzy Terra" class="kx-modal-image">'
        link.style.display = "none";
    }
    else if (number === 13){
        name.innerText = "Nego Bispo - Escritor e pensador quilombola"
        text1.innerText = "Antônio Bispo dos Santos, o Nego Bispo (1959-2023), foi lavrador, escritor e pensador quilombola do Piauí. Em obras como Colonização, Quilombos: modos e significações e A terra dá, a terra quer, defende a contracolonização e os saberes dos povos quilombolas e indígenas.";
        photo.innerHTML = ' <img src="../img/profiles/modalprofile/nego-bispo.jpg" alt="Foto de Nego Bispo" class="kx-modal-image">'
        link.style.display = "none";
    }
    }
    


// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('kxModal');
    modal.classList.remove('kx-modal-active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 400);
}


function openModal1(artist) {
    document.getElementById(`${artist}-modal`).style.display = 'flex';
}

// Função para fechar o modal
function closeModal1(artist) {
    document.getElementById(`${artist}-modal`).style.display = 'none';
}




const menuHTML = `

<nav>
    <ul>
    <ol class="nav-bar">
            <a href="../index.html"><li class="nav">Home</li></a>
          <a href="https://www.vakinha.com.br/buscar-vaquinha?page=1&term=Vaquinhas%20para%20pessoas%20negras" target="_blank" rel="noopener noreferrer">  <li class="nav">Apoio</li></a>
            <a href="about.html"><li class="nav">Sobre</li></a>
        </ol>
    </ul>
</nav>
`;

//Inserir o menu na página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-container").innerHTML = menuHTML;
});

 