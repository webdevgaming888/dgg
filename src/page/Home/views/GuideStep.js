import React from "react";
import "./GuideStep.scss";
import {withNamespaces} from "react-i18next";
const GuideStep = ({ guide, t }) => {
  return (
    <div className="guide-container">
      <div className='guide-inner'>
      {guide.map((step) => {
        return (
          <div key={step.id} className="guide-card">
            <span className="guide-step">{step.id}</span>
            <div className="guide-wrapper">
              <span className="guide-title">{t(step.title)}</span>
              <span  className="guide-content">{t(step.content,{compName:window.compName})}</span>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
export default withNamespaces()(GuideStep);
