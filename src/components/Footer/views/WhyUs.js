import React from "react";
import { TiChevronRight } from "react-icons/ti";
import { withNamespaces } from 'react-i18next';

const WhyUs = ({contact, t, footerLink}) => {
  return (
    <div className='footer-col'>
      <div className="why-us">
        <div className="footer-title">{t('whyus',{compName:window.compName})}?</div>
        <div className="footer-content">
        {t('whyusdesc',{compName:window.compName})}
        </div>
      </div>
      <div className="contact-us">
        <div className="footer-title">{t('contactus')}</div>
        <div className="footer-content">
          {
            contact.map(contact => {
              return(
                <div key={contact.id} className='footer-contact' onClick={() =>footerLink(contact.method)}>
                  <TiChevronRight className='right-icon'/> {contact.method} {contact.phoneNo}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(WhyUs);
