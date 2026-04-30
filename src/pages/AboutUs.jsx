import ImageTextSection from '../components/shared/ImageTextSection'

function AboutUs() {
  return (
    <>
      <section className="menu-header">
        <h1>Sobre Nosotros</h1>
      </section>
      <ImageTextSection
        img="/assets/team-hands.avif"
        imgAlt="Nuestra cocina"
        title="Nuestra Misión"
        imgRight
      >
        <p>En Foodie Diw&amp;Co nos dedicamos a ofrecer experiencias gastronómicas únicas que combinan sabores auténticos con ingredientes frescos de la más alta calidad. Nuestra pasión es llevar a tu mesa platos que no solo alimenten el cuerpo, sino también el alma.</p>
        <p>Creemos en la cocina como una forma de arte y expresión cultural, donde cada plato cuenta una historia y cada ingrediente tiene un propósito especial.</p>
      </ImageTextSection>

      <ImageTextSection
        img="/assets/chef.avif"
        imgAlt="Lo que nos hace especiales"
        title="Lo que nos hace especiales"
        bg="#f9f9f9"
      >
        <p>Nos distinguimos por nuestro compromiso con la excelencia y la innovación. Cada receta es cuidadosamente elaborada por nuestro equipo de chefs expertos que combinan técnicas tradicionales con toques modernos.</p>
        <p>Utilizamos únicamente ingredientes locales y de temporada, apoyando a productores de la región y garantizando la frescura en cada bocado. Nuestra dedicación va más allá de la comida: creamos momentos memorables.</p>
      </ImageTextSection>
    </>
  )
}

export default AboutUs
