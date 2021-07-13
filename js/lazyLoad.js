//
// Lazy Load
//

function activeScroll() {
  // ________
  //
  // sections
  // ________
  const about = document.getElementById("about");
  const skills = document.getElementById("skills");
  const resume = document.getElementById("resume");
  const portfolio = document.getElementById("portfolio");
  const services = document.getElementById("services");
  const contacto = document.getElementById("contacto");

  //
  // about
  //

  if (about.getBoundingClientRect().top < window.innerHeight) {
    [(about.style.transform = "translateY(0%)"), (about.style.opacity = "1")];
  }

  //
  // skills
  //

  if (skills.getBoundingClientRect().top < window.innerHeight) {
    [(skills.style.transform = "translateY(0%)"), (skills.style.opacity = "1")];
  }

  //
  // resume
  //

  if (resume.getBoundingClientRect().top < window.innerHeight) {
    [(resume.style.transform = "translateY(0%)"), (resume.style.opacity = "1")];
  }

  //
  // portfolio
  //

  if (resume.getBoundingClientRect().top < window.innerHeight) {
    [
      (portfolio.style.transform = "translateY(0%)"),
      (portfolio.style.opacity = "1"),
    ];
  }

  //
  // services
  //

  if (services.getBoundingClientRect().top < window.innerHeight) {
    [
      (services.style.transform = "translateY(0%)"),
      (services.style.opacity = "1"),
    ];
  }

  //
  // contacto
  //

  if (contacto.getBoundingClientRect().top < window.innerHeight) {
    [
      (contacto.style.transform = "translateY(0%)"),
      (contacto.style.opacity = "1"),
    ];
  }
}

window.addEventListener("scroll", activeScroll);

//__________________________________________________________________
//
// links

function linksActive() {
  const link_about = document.getElementById("link_about");
  const link_skills = document.getElementById("link_skills");
  const link_resume = document.getElementById("link_resume");
  const link_portfolio = document.getElementById("link_portfolio");
  const link_services = document.getElementById("link_services");
  const link_contacto = document.getElementById("link_contacto");

  // every links

  const links = document.querySelectorAll(".navbar_list--link");

  //-------------

  // link about

  if (about.getBoundingClientRect().bottom < window.innerHeight) {
    [
      links.forEach((element) => {
        element.style.color = "#a8a9b4";
        element.style.border = "none";
      }),
      (link_about.style.color = "#fff"),
      (link_about.style.paddingBottom = "5px"),
      (link_about.style.borderBottom = "1px solid #149ddd"),
    ];
  } else {
    [
      (links[0].style.color = "#fff"),
      (links[0].style.paddingBottom = "5px"),
      (links[0].style.borderBottom = "1px solid #149ddd"),
      (link_about.style.color = "#a8a9b4"),
      (link_about.style.border = "none"),
    ];
  }

  // link skills

  if (skills.getBoundingClientRect().bottom < window.innerHeight) {
    [
      links.forEach((element) => {
        element.style.color = "#a8a9b4";
        element.style.border = "none";
      }),
      (link_skills.style.color = "#fff"),
      (link_skills.style.paddingBottom = "5px"),
      (link_skills.style.borderBottom = "1px solid #149ddd"),
    ];
  }

  // link resume

  if (resume.getBoundingClientRect().bottom < window.innerHeight) {
    [
      links.forEach((element) => {
        element.style.color = "#a8a9b4";
        element.style.border = "none";
      }),
      (link_resume.style.color = "#fff"),
      (link_resume.style.paddingBottom = "5px"),
      (link_resume.style.borderBottom = "1px solid #149ddd"),
    ];
  }

  // link portfolio

  if (portfolio.getBoundingClientRect().bottom < window.innerHeight) {
    [
      links.forEach((element) => {
        element.style.color = "#a8a9b4";
        element.style.border = "none";
      }),
      (link_portfolio.style.color = "#fff"),
      (link_portfolio.style.paddingBottom = "5px"),
      (link_portfolio.style.borderBottom = "1px solid #149ddd"),
    ];
  }

  // link services

  if (services.getBoundingClientRect().bottom < window.innerHeight) {
    [
      links.forEach((element) => {
        element.style.color = "#a8a9b4";
        element.style.border = "none";
      }),
      (link_services.style.color = "#fff"),
      (link_services.style.paddingBottom = "5px"),
      (link_services.style.borderBottom = "1px solid #149ddd"),
    ];
  }

  // link contacto

  if (contacto.getBoundingClientRect().bottom < window.innerHeight) {
    [
      links.forEach((element) => {
        element.style.color = "#a8a9b4";
        element.style.border = "none";
      }),
      (link_contacto.style.color = "#fff"),
      (link_contacto.style.paddingBottom = "5px"),
      (link_contacto.style.borderBottom = "1px solid #149ddd"),
    ];
  }
}

window.addEventListener("scroll", linksActive);
