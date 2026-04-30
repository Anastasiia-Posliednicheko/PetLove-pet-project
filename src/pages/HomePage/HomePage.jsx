import Header from "../../components/Header/Header.jsx";
import Container from "../../components/Container/Container.jsx";
import css from "./HomePage.module.css";

function HomePage() {
  return (
    <section className={css.home}>
      <Container>
        <div className={css.hero}>
          <Header variant="home" />

          <div className={css.content}>
            <h1 className={css.title}>
              Take good <span className={css.accent}>care</span> of your small
              pets
            </h1>

            <p className={css.text}>
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
        </div>

        <div className={css.imageWrapper}>
          <img
            className={css.image}
            src="/images/home-pet.jpg"
            alt="Girl with dog"
          />
        </div>
      </Container>
    </section>
  );
}

export default HomePage;
