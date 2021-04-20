import React, { useState, useEffect } from "react";
import "./Home.scss";
import Banner from "./views/Banner";
import banner1 from "../../assests/banner/01.jpg";
import banner2 from "../../assests/banner/02.jpg";
import banner3 from "../../assests/banner/03.jpg";
import banner0 from "../../assests/banner/04.jpeg";
import ModalImg from "../../assests/common/modal1.jpeg";
import GuideStep from "./views/GuideStep";
import WinnerList from "./views/WinnerList";
import ModalComponent from "../../components/Modal/Modal";
import { withNamespaces } from "react-i18next";
import { Helmet } from "react-helmet";
import logo from "../../assests/navigationbar/logo.jpg";
// import FreeCredit from "./views/FreeCredit";
// import { IoClose } from "react-icons/io5";

const Home = ({ t }) => {
  const [banner] = useState([
    { id: 0, src: banner0, title: null, content: null },
    { id: 1, src: banner1, title: "bonusWelcome", content: "bonusWelcomeDesc" },
    {
      id: 2,
      src: banner2,
      title: "bonusUnlimited",
      content: "bonusUnlimitedDesc",
    },
    {
      id: 3,
      src: banner3,
      title: "bonusRecommend",
      content: "bonusRecommendDesc",
    },
  ]);
  const [guide] = useState([
    { id: 1, title: "register", content: "registerdesc" },
    { id: 2, title: "deposit", content: "depositdesc" },
    { id: 3, title: "playwin", content: "playwindesc" },
    { id: 4, title: "withdraw", content: "withdrawdesc" },
  ]);
  const [winnerList, setWinnerList] = useState([]);
  const [depositList, setDepositList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  // const [showFreeCredit, setShowFreeCredit] = useState(true);
  // const closeFreeCredit = () => {
  //   setShowFreeCredit(false)
  // }
  useEffect(() => {
    let arr = [];
    let depositArr = [];
    for (let index = 0; index < 100; index++) {
      let obj = {};
      let m = Math.floor(Math.random() * 10) + 1;
      let d = Math.floor(Math.random() * 28) + 1;
      let h = Math.floor(Math.random() * 23) + 1;
      let s = Math.floor(Math.random() * 59) + 1;

      obj["id"] = index;
      obj["year"] = "2020";
      obj["month"] = m < 10 ? "0" + m : m;
      obj["date"] = d < 10 ? "0" + d : d;
      obj["hour"] = h < 10 ? "0" + h : h;
      obj["seconds"] = s < 10 ? "0" + s : s;
      obj["phone"] = "******" + Math.floor(1000 + Math.random() * 9000);
      obj["amount"] = Math.floor(100 + Math.random() * 5000).toFixed(2);
      arr.push(obj);
    }

    for (let index = 0; index < 100; index++) {
      let newObj = {};
      let m = Math.floor(Math.random() * 10) + 1;
      let d = Math.floor(Math.random() * 28) + 1;
      let h = Math.floor(Math.random() * 23) + 1;
      let s = Math.floor(Math.random() * 59) + 1;

      newObj["id"] = index;
      newObj["year"] = "2020";
      newObj["month"] = m < 10 ? "0" + m : m;
      newObj["date"] = d < 10 ? "0" + d : d;
      newObj["hour"] = h < 10 ? "0" + h : h;
      newObj["seconds"] = s < 10 ? "0" + s : s;
      newObj["phone"] = "******" + Math.floor(1000 + Math.random() * 9000);
      newObj["amount"] = Math.floor(100 + Math.random() * 500).toFixed(2);
      depositArr.push(newObj);
    }
    setWinnerList({ arr });
    setDepositList({ depositArr });
    setModalShow(true)
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{window.compName} | Best Online Casino Malaysia | 918KISS</title>
        <meta
          name="description"
          content="DigiGo88 is the best online casino Malaysia! Welcome Bonus 50%! Trusted Company! Support Digi/Maxis! 24HOUR SUPPORT!"
        />
        <link rel="canonical" href="https://digigo88.net/" />
        <meta property="og:title" content={window.compName} />
        <meta
          property="og:description"
          content="DigiGo88 is the best online casino Malaysia! Welcome Bonus 50%! Trusted Company! Support Digi/Maxis! 24HOUR SUPPORT!"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://digigo88.net/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="DigiGo88" />
      </Helmet>

     {modalShow && <ModalComponent onHide={() => setModalShow(false)} imgSrc={ModalImg}/>} 
      <section className="homepage">
        <Banner banner={banner} />
        <GuideStep guide={guide} />
        <div className="home-list">
          {winnerList !== undefined && depositList !== undefined && (
            <WinnerList list={winnerList} depositList={depositList} />
          )}
        </div>
        {/* {showFreeCredit &&  <>
        <IoClose className='free-credit-close' onClick={closeFreeCredit}/>
        <FreeCredit closeFunction={closeFreeCredit}/>
        </>
        } */}
       
      </section>
    </>
  );
};

export default withNamespaces()(Home);
