// Lista de cursos: para adicionar um novo, basta incluir um objeto aqui.
const courses = [
    {
        name: "Programadores do Amanhã",
        logo: "../img/courses/programadoresdoamanha_logo.jpg",
        description: "Nossa formação é totalmente baseada em projetos, com as turmas colocando a mão na massa desde o primeiro dia! Com essa abordagem, simulamos dinâmicas reais do mercado de trabalho, promovendo a aprendizagem entre pares e em squads. Tudo isso garante uma experiência prática, interativa e gamificada.",
        link: "https://programadoresdoamanha.org.br/pt"
    },
    {
        name: "Sebrae",
        logo: "../img/courses/sabrae.png",
        description: "O SEBRAE oferece uma série de cursos online gratuitos voltados para o empreendedorismo, especialmente focados em jovens, negros e em regiões periféricas.",
        link: "https://sebrae.com.br/sites/PortalSebrae"
    },
    {
        name: "Enap",
        logo: "../img/courses/enapLogo.png",
        description: "Transformar a administração pública em competência, conhecimento, inovação, atitude, resultado e valor: esse é o papel que a Enap assumiu desde a sua criação, em 1986.",
        link: "https://www.enap.gov.br/pt/"
    },
    {
        name: "Escola Virtual.Gov",
        logo: "../img/courses/evgLogo.png",
        description: "O projeto consiste em um conjunto de serviços disponibilizados em um Portal Único de Governo. Para o servidor ou cidadão que busca capacitação no serviço público, o Portal oferece um catálogo de cursos unificado das principais escolas de governo e centros de capacitação da Administração Pública.",
        link: "https://www.escolavirtual.gov.br/"
    },
    {
        name: "FIAP",
        logo: "../img/courses/fiapLogo.png",
        description: "A FIAP oferece os Nano Courses: cursos gratuitos e de curta duração nas áreas de tecnologia, inovação e negócios, com certificado de conclusão e sem pré-requisitos para começar.",
        link: "https://on.fiap.com.br/nano-courses/"
    }
];

function createCourseCard(course) {
    const card = document.createElement("article");
    card.className = "card-infor";

    const img = document.createElement("img");
    img.className = "img-course";
    img.src = course.logo;
    img.alt = `Logo ${course.name}`;
    img.loading = "lazy";

    const description = document.createElement("p");
    description.className = "description-destaque";
    description.textContent = course.description;

    const link = document.createElement("a");
    link.className = "link-course";
    link.href = course.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `Saiba mais sobre ${course.name}`);
    link.innerHTML = 'Saiba mais <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';

    card.append(img, description, link);
    return card;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("card-courses");
    container.append(...courses.map(createCourseCard));
});
