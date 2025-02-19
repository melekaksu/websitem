import React from "react";
import "./Home.css"; 
import myProfileImage from "../assets/images/profil.jpg"

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Merhaba! Ben Melek Aksu </h1>
          <p>
            Veri tabanı yönetimi, yazılım geliştirme ve yeni teknolojilere olan tutkum bu alanlarda kendimi sürekli geliştirmeme olanak sağlıyor.
            Kendimi özellikle Front-End geliştirme alanında geliştiriyorum ve bu alandaki modern teknolojilere hâkimim. HTML, CSS, JavaScript ve React.js ile dinamik ve kullanıcı dostu arayüzler tasarlayabiliyorum. 
            Bootstrap 5 ile responsive tasarımlar oluşturuyor, WordPress ile içerik yönetim sistemleri geliştiriyorum. Ayrıca, C# ile Algoritma Programlama, Asp .Net Core konusunda bilgi sahibiyim ve 
            Microsoft SQL Server kullanarak veritabanı yönetimi yapabiliyorum.
            Kod yazmayı, kullanıcı dostu ve modern arayüzler oluşturmayı seviyorum. Front-End ve Back-End teknolojilerini birleştirerek güçlü ve ölçeklenebilir projeler üretmeyi hedefliyorum.
          </p>
        </div>
        <div className="hero-image">
          <img src={myProfileImage} alt="Profil Resmi" />
        </div>
      </section>
    </div>
  );
};

export default Home;
