import React from 'react'
import { withNamespaces } from "react-i18next";
import "./FreeCredit.scss"

const FreeCredit = ({t}) => {
    const freeCreditLink = () => {
        window.location.href = 'https://wa.link/gcij3b';
    }
    return (
        <div className='free-credit' onClick={freeCreditLink}>
            <div className='free-credit-inner'>
                <span className='free-credit-title'>{t('freeCreditTitle')}</span>
                <span className='free-credit-desc'>{t('freeCreditDesc')}</span>
            </div>
        </div>
    )
}

export default withNamespaces()(FreeCredit);
