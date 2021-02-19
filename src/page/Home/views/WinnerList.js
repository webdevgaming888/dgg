import React from "react";
import "./WinnerList.scss";
import Trophy from "../../../assests/common/trophy.png";
import { withNamespaces } from "react-i18next";

const WinnerList = ({ list, depositList, t }) => {
  return (
    <>
      <div className="winner-list">
        <div className="title">
          <img src={Trophy} alt="Trohpy" className="title-icon" />
          {t("topwinner")}
          <img src={Trophy} alt="Trohpy" className="title-icon" />
        </div>
        <div className="list-header">
          <span className="list-date">{t("date")}</span>
          <span className="list-phone">{t("phone")}</span>
          <span className="list-amount">{t("amount")}</span>
        </div>
        <div className="list-body">
          <div className="list-body-inner">
            {list.arr !== undefined &&
              list.arr.map((item) => {
                return (
                  <div key={item.id} className="list-row">
                    <span className="list-date">{item.date}-{item.month}-{item.year} {item.hour}:{item.seconds}</span>
                    <span className="list-phone">{item.phone}</span>
                    <span className="list-amount">{item.amount}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="deposit-list">
        <div className="title">
          <img src={Trophy} alt="Trohpy" className="title-icon" />
          {t("topdeposit")}
          <img src={Trophy} alt="Trohpy" className="title-icon" />
        </div>
        <div className="list-header">
          <span className="list-date">{t("date")}</span>
          <span className="list-phone">{t("phone")}</span>
          <span className="list-amount">{t("amount")}</span>
        </div>
        <div className="list-body">
          <div className="list-body-inner">
            {depositList.depositArr !== undefined &&
              depositList.depositArr.map((item) => {
                return (
                  <div key={item.id} className="list-row">
                    <span className="list-date">{item.date}-{item.month}-{item.year} {item.hour}:{item.seconds}</span>
                    <span className="list-phone">{item.phone}</span>
                    <span className="list-amount">{item.amount}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default withNamespaces()(WinnerList);
