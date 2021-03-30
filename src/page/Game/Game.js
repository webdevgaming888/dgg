import React, { useState } from "react";
import "./Game.scss";
import {
  kiss,
  kaya,
  kissplus,
  evo,
  joker,
  live22,
  lpe,
  mega888,
  newtown,
  pussy888,
  xe888,
  greatwall,
  scr888
} from "./GameImageData";
import { withNamespaces } from "react-i18next";
import { Helmet } from "react-helmet";

import logo from "../../assests/navigationbar/logo.jpg"

const Game = ({ t }) => {
  const [gameList] = useState([
    {
      id: 0,
      gameName: "SCR888",
      androidURL: "https://m.hola888.com/",
      iosURL: "https://m.hola888.com/",
      agentURL: "",
      gameLogo: scr888,
    },
    {
      id: 1,
      gameName: "918KISSPLUS",
      androidURL: "http://app.m-918kiss.online/",
      iosURL: "http://app.m-918kiss.online/",
      agentURL: "",
      gameLogo: kissplus,
    },
    {
      id: 2,
      gameName: "918KAYA",
      androidURL: "http://d.88ifun.com/",
      iosURL: "http://d.88ifun.com/",
      agentURL: "",
      gameLogo: kaya,
    },
    {
      id: 3,
      gameName: "918KISS",
      androidURL: "http://c1.d.918kiss.com/",
      iosURL: "http://c1.d.918kiss.com/",
      agentURL: "",
      gameLogo: kiss,
    },
    {
      id: 4,
      gameName: "MEGA888",
      androidURL: "http://mega888download.com/",
      iosURL: "http://mega888download.com/",
      agentURL: "",
      gameLogo: mega888,
    },
    {
      id: 5,
      gameName: "PUSSY888",
      androidURL: "http://dm21.pussy888.com/",
      iosURL: "http://dm21.pussy888.com/",
      agentURL: "",
      gameLogo: pussy888,
    },
    {
      id: 6,
      gameName: "EVO888",
      androidURL: "http://d.evo888.io/",
      iosURL: "http://d.evo888.io/",
      agentURL: "",
      gameLogo: evo,
    },
    {
      id: 7,
      gameName: "XE88",
      androidURL: "https://d1.playalotgames.com/",
      iosURL: "https://d1.playalotgames.com/",
      agentURL: "",
      gameLogo: xe888,
    },
    {
      id: 8,
      gameName: "LUCKY PALACE",
      androidURL: "http://m.ld176988.com/download.html",
      iosURL: "http://m.ld176988.com/download.html",
      agentURL: "",
      gameLogo: lpe,
    },
    {
      id: 9,
      gameName: "LIVE22",
      androidURL: "https://yerba22.com/Login",
      iosURL: "https://yerba22.com/Login",
      agentURL: "",
      gameLogo: live22,
    },
    {
      id: 10,
      gameName: "JOKER",
      androidURL: "http://www.joker123b.net/",
      iosURL: "http://www.joker123b.net/",
      agentURL: "",
      gameLogo: joker,
    },
    {
      id: 11,
      gameName: "NEWTOWN",
      androidURL: "http://cdn.newplay66.com/m.html",
      iosURL: "http://cdn.newplay66.com/m.html",
      agentURL: "",
      gameLogo: newtown,
    },
    {
      id: 12,
      gameName: "GreatWall",
      androidURL: "https://gw.goshrimp888.com/APP/GW99/",
      iosURL: "https://gw.goshrimp888.com/APP/GW99/",
      agentURL: "",
      gameLogo: greatwall,
    }
  ]);
  function gameLinkRedirect(link) {
    window.location.href = link;
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{window.compName} - Games</title>
        <meta
          name="description"
          content="DigiGo88 Best Slots Machine, and games to win"
        />
        <link rel="canonical" href="https://digigo88.net/games" />
        <meta property="og:title" content={window.compName} />
        <meta property="og:description" content="DigiGo88 Best Slots Machine, and games to win"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://digigo88.net/games"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="DigiGo88" />
      </Helmet>
      <section className="game-page">
        <h2 className="page-title"> {t("game")}</h2>
        <div className="game-content">
          {gameList.map((game, i) => {
            return (
              <div key={game.id} className="game-card">
                <div className="game-card-inner">
                  <h2>{game.gameName}</h2>
                  <img src={game.gameLogo} alt={game.gameName} />
                  <div className="game-button-group">
                    <button onClick={() => gameLinkRedirect(game.androidURL)}>
                      {t("androidDL")}
                    </button>
                    <button onClick={() => gameLinkRedirect(game.iosURL)}>
                      {t("iosDL")}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default withNamespaces()(Game);
