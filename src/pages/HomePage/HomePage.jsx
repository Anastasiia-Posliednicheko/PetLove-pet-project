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
        <picture className={css.imageWrapper}>
          <source media="(min-width: 1440px)" srcset=" " />
          <source
            media="(min-width: 768px)"
            srcSet="/images/home-tab.jpg 1x,
                      /images/home-tab@2x.jpg 2x"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/images/home-mobile.jpg 1x,
                      /images/home-mobile@2x.jpg 2x"
          />
          <img
            src="/images/home-mobile.jpg"
            alt="Girl with dog"
            loading="lazy"
          />
        </picture>
      </Container>
    </section>
  );
}

export default HomePage;
