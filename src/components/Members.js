import React, { PureComponent } from "react";
import { css } from "glamor";

import Text from "./Text";

import PedroNauckImg from "../assets/images/speakers/pedroNauck.jpg";
import LarissaImg from "../assets/images/speakers/Larissa.jpg";
import NicholasImg from "../assets/images/speakers/Nicholas.jpg";
import MariaImg from "../assets/images/speakers/Maria.jpeg";
import MarceloImg from "../assets/images/speakers/Marcelo.jpeg";
import BrunoDahoraImg from "../assets/images/speakers/brunoDahora.jpg";
import RaphaelPortoImg from "../assets/images/speakers/raphaelPorto.jpg";
import RaphaelAmorimImg from "../assets/images/speakers/raphaelAmorim.jpg";
import ytIcon from "../assets/images/ytIcon.png";

const styles = {
  container: css({
    background: "white",
    width: "100vw",
    paddingTop: "15vh",
    paddingBottom: "15vh",
    alignItems: "center",
    "@media(max-width: 720px)": {
      alignSelf: "auto"
    }
  }),
  link: css({
    color: "#666666"
  }),
  name: css({
    fontSize: "1.7em",
    color: "#222",
    fontWeight: "light",
    margin: "0.66em 0 0.15em 0",
    lineHeight: 1,
    "> a": {
      textDecoration: "none",
      color: "#222"
    },
    "@media(max-width: 720px)": {
      fontSize: "1.9em"
    }
  }),
  locale: css({
    fontSize: "1em",
    fontWeight: "lighter",
    margin: "0 0 0.33em 0",
    "> a": {
      textDecoration: "none",
      color: "#555",
      fontWeight: "bold"
    },
    "> a::after": {
      fontWeight: "lighter",
      content: " / "
    }
  }),
  theme: css({
    fontSize: "1.2em",
    color: "#555555",
    margin: "0 0 0.33em 0",
    fontWeight: "lighter",
    "@media(max-width: 720px)": {
      fontSize: "1.4em"
    },
    "> a": {
      color: "#555555",
      textDecoration: "none"
    },
    "> a:hover": {
      color: "#555555",
      textDecoration: "underline"
    }
  }),
  card: css({
    width: 230,
    maxWidth: "100%",
    padding: "0",
    backgroundColor: "white",
    borderRadius: 0,
    margin: "10px 10px 4em",
    "@media(min-width: 720px)": {
      margin: "10px 10px 1em"
    },
    "@media(max-width: 720px)": {
      width: 300
    },
    "> a": {
      overflow: "hidden",
      textDecoration: "none"
    },
    "> img": {
      opacity: 0.5
    }
  }),
  cards: css({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "100%",
    margin: "0 auto",
    maxWidth: 1000
  })
};

export const members = [
  {
    id: 1,
    name: "Marcelo Camargo",
    theme: "ReasonML levado a sério",
    origin: "Joinville, SC",
    ytURL: "https://www.youtube.com/watch?v=8fUVjPiwMIA",
    avatar: MarceloImg,
    worksIn: "Rung",
    worksLink: "https://app.rung.com.br/",
    github: "https://github.com/haskellcamargo"
  },
  {
    id: 2,
    name: "Pedro Nauck",
    theme: "Docz: de 0 a 5.000 ⭐️ em 2 semanas",
    talk: "https://speakerdeck.com/pedronauck/reactconf-2018-presenting-docz",
    origin: "Florianópolis, SC",
    github: "https://github.com/pedronauck",
    avatar: PedroNauckImg,
    worksIn: "Docz",
    worksLink: "https://www.docz.site/",
    ytURL: "https://www.youtube.com/watch?v=NqcEZZqZ7xQ"
  },
  {
    id: 3,
    name: "Bruno da Hora",
    theme: "Otimize seu bundle com Webpack 4 e Create React App",
    talk: "http://bit.ly/react_conf_brunodahora",
    origin: "Curitiba, PR",
    github: "https://github.com/brunodahora",
    avatar: BrunoDahoraImg,
    worksIn: "Pipefy",
    worksLink: "https://www.pipefy.com/",
    ytURL: "https://www.youtube.com/watch?v=Hg_e7LX3VZo"
  },
  {
    id: 4,
    name: "Maria Clara",
    theme: "React nas trincheiras: Erros cometidos e lições aprendidas",
    origin: "Maceió, AL",
    ytURL: "https://www.youtube.com/watch?v=Ywmah8gMtYE",
    avatar: MariaImg,
    worksIn: "Picter",
    worksLink: "https://www.picter.com/",
    github: "https://github.com/olarclara/"
  },
  {
    id: 5,
    name: "Nicholas Eduardo",
    theme: "Como escalar projetos React com Monorepo",
    talk:
      "https://docs.google.com/presentation/d/1jzNwlew9qy9czg34PCOy3z4lKw4KofLZSnbHulXe9E0/edit?usp=sharing",
    origin: "Florianópolis, SC",
    ytURL: "https://www.youtube.com/watch?v=fzvmz0aUw14",
    avatar: NicholasImg,
    worksIn: "Dooile",
    worksLink: "http://www.dooile.com/",
    github: "https://github.com/nicholasess"
  },
  {
    id: 6,
    name: "Larissa Farias",
    theme: "TypeScript vs Flow no segundo semestre de 2018",
    talk: "https://slides.com/larissathaisdefarias/typescript-vs-flow/",
    origin: "Joinville, SC",
    ytURL: "https://www.youtube.com/watch?v=8fUVjPiwMIA",
    avatar: LarissaImg,
    worksIn: "VanHack",
    worksLink: "http://www.vanhack.com/",
    github: "https://github.com/larissathasdefar/"
  },
  {
    id: 7,
    name: "Raphael Amorim",
    theme: "Escrevendo seu próprio React Render",
    origin: "Rio de Janeiro, RJ",
    github: "https://github.com/raphamorim",
    avatar: RaphaelAmorimImg,
    worksIn: "GoDaddy",
    worksLink: "https://www.godaddy.com/",
    ytURL: "https://youtu.be/ADFHQ-I9Scg"
  },
  {
    id: 8,
    name: "Raphael Porto",
    theme: "A Jornada do React Native na Globo.com",
    talk:
      "https://speakerdeck.com/raphaelpor/a-jornada-do-react-native-na-globo-dot-com",
    origin: "Rio de Janeiro, RJ",
    github: "https://github.com/raphaelpor",
    avatar: RaphaelPortoImg,
    worksIn: "Globo.com",
    worksLink: "https://www.globo.com/",
    ytURL: "https://www.youtube.com/watch?v=L16Wp-dS-HY"
  }
];

class Members extends PureComponent {
  render() {
    return (
      <section id="members">
        <div {...styles.container}>
          <Text title="ML4U Members" reverse />
          <div {...styles.cards}>
            {members.map(speaker => {
              return (
                <div key={speaker.id} {...styles.card}>
                  <a
                    href={speaker.ytURL}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="notranslate"
                    {...css({
                      backgroundImage: `url('${speaker.avatar}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: 230,
                      display: "block",
                      borderRadius: 4,
                      filter: "grayscale(100%)",
                      "&:hover": {
                        filter: "grayscale(0%)",
                        "> img": {
                          opacity: 1
                        }
                      },
                      "@media(max-width: 720px)": {
                        height: 300
                      }
                    })}
                  >
                    <img
                      alt="youtube"
                      src={ytIcon}
                      height="80px"
                      {...css({ opacity: 0.5 })}
                    />
                  </a>
                  <h3 {...styles.name}>
                    <a
                      href={speaker.github}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="notranslate"
                    >
                      {speaker.name}
                    </a>
                  </h3>
                  <p {...styles.locale}>
                    {speaker.worksIn && speaker.worksIn.length && (
                      <a
                        href={speaker.worksLink}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="notranslate"
                      >
                        @{speaker.worksIn}
                      </a>
                    )}
                    {speaker.origin}
                  </p>
                  {speaker.talk && (
                    <h4 {...styles.theme} className="notranslate">
                      <a href={speaker.talk}>{speaker.theme}</a>
                    </h4>
                  )}
                  {!speaker.talk && (
                    <h4 {...styles.theme} className="notranslate">
                      {speaker.theme}
                    </h4>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Members;
