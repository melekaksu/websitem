import React from "react";
import "./Projects.css";
import yetkiImage from "../assets/images/yetki.png";
import havaImage from "../assets/images/havadurumu.png";
import yemekImage from "../assets/images/yemeksitesi.png";
import cizimImage from "../assets/images/cizim.png";
import quizImage from "../assets/images/quiz.png";
import menuImage from "../assets/images/menu.png";

const projects = [
  {
    id: 1,
    title: "Yetki Sayfası",
    description: "Kullanıcıya istediğim yetkileri vermek için yaptığım bir tasarım.",
    image: yetkiImage, 
    link: "https://github.com/melekaksu/Yetki-Sayfasi"
  },
  {
    id: 2,
    title: "Hava Durumu Uygulaması",
    description: "React Native ile ilk yaptığım uygulama. Aynı ekranda 6 farkli bölgeye ait şehirlerin güncel olarak hava durumu gösteren bir uygulama.",
    image: havaImage,
    link: "https://github.com/melekaksu/WeatherApp-"
  },
  {
    id: 3,
    title: "Yemek Sitesi",
    description: "Restoranlar için geliştirdiğim menü web sitesi.",
    image: yemekImage, 
    link: "https://github.com/melekaksu/Yemek-Sitesi"
  },
  {
    id: 4,
    title: "Çizim Uygulaması",
    description: "HTML CSS JS ile basit bir çizim uygulaması",
    image: cizimImage, 
    link: "https://github.com/melekaksu/Cizim-Uygulamasi"
  },
  {
    id: 5,
    title: "Quiz",
    description: "HTML CSS JS ile basit bir yarışma",
    image: quizImage, 
    link: "https://github.com/melekaksu/Quizz-App/tree/main"
  },
  {
    id: 6,
    title: "Menü",
    description: "HTML CSS JS ile açılan menü",
    image: menuImage, 
    link: "https://github.com/melekaksu/Acilan-Menu-"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>PROJELERİM</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn">Detaylar</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
