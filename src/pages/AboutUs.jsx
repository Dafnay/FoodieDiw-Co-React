function AboutUs() {
  return (
    <>
      <section className="about-mission">
        <div className="about-text">
          <h2>Nuestra Misión</h2>
          <p>En Foodie Diw&amp;Co nos dedicamos a ofrecer experiencias gastronómicas únicas que combinan sabores auténticos con ingredientes frescos de la más alta calidad. Nuestra pasión es llevar a tu mesa platos que no solo alimenten el cuerpo, sino también el alma.</p>
          <p>Creemos en la cocina como una forma de arte y expresión cultural, donde cada plato cuenta una historia y cada ingrediente tiene un propósito especial.</p>
        </div>
        <div className="about-image">
          <img src="/assets/team-hands.jpg" alt="Nuestra cocina" />
        </div>
      </section>

      <section className="about-special">
        <div className="about-image">
          <img src="/assets/chef.jpg" alt="Lo que nos hace especiales" />
        </div>
        <div className="about-text">
          <h2>Lo que nos hace especiales</h2>
          <p>Nos distinguimos por nuestro compromiso con la excelencia y la innovación. Cada receta es cuidadosamente elaborada por nuestro equipo de chefs expertos que combinan técnicas tradicionales con toques modernos.</p>
          <p>Utilizamos únicamente ingredientes locales y de temporada, apoyando a productores de la región y garantizando la frescura en cada bocado. Nuestra dedicación va más allá de la comida: creamos momentos memorables.</p>
        </div>
      </section>
    </>
  )
}

export default AboutUs
