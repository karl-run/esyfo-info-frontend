import { LenkepanelBase } from 'nav-frontend-lenkepanel'
import { Normaltekst, Undertittel } from 'nav-frontend-typografi'
import React from 'react'

import { sykepengesoknadUrl } from '../../utils/environment'
import { tekst } from '../../utils/tekster'

const SoknadLenkepanel = () => {
    return (
        <LenkepanelBase href={sykepengesoknadUrl()} border={true}>
            <div className="lenkeikon soknader">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M0.729167 35H34.2708C34.6733 35 35 34.6733 35 34.2708V0.729167C35 0.326667 34.6733 0 34.2708 0H0.729167C0.326667 0 0 0.326667 0 0.729167V34.2708C0 34.6733 0.326667 35 0.729167 35ZM33.5417 33.5417H1.45833V1.45833H33.5417V33.5417ZM8.02083 14.5833C7.83417 14.5833 7.6475 14.5119 7.50458 14.3704L4.58792 11.4537C4.30354 11.1694 4.30354 10.7071 4.58792 10.4227C4.87229 10.1383 5.33458 10.1383 5.61896 10.4227L8.02083 12.8231L14.7963 6.04771C15.0806 5.76333 15.5429 5.76333 15.8273 6.04771C16.1117 6.33208 16.1117 6.79437 15.8273 7.07875L8.53562 14.3704C8.39417 14.5119 8.2075 14.5833 8.02083 14.5833ZM7.50458 27.4954C7.6475 27.6369 7.83417 27.7083 8.02083 27.7083C8.2075 27.7083 8.39417 27.6369 8.53562 27.4954L15.8273 20.2038C16.1117 19.9194 16.1117 19.4571 15.8273 19.1727C15.5429 18.8883 15.0806 18.8883 14.7963 19.1727L8.02083 25.9481L5.61896 23.5477C5.33458 23.2633 4.87229 23.2633 4.58792 23.5477C4.30354 23.8321 4.30354 24.2944 4.58792 24.5787L7.50458 27.4954ZM29.8958 13.125H18.2292C17.8267 13.125 17.5 12.7983 17.5 12.3958C17.5 11.9933 17.8267 11.6667 18.2292 11.6667H29.8958C30.2983 11.6667 30.625 11.9933 30.625 12.3958C30.625 12.7983 30.2983 13.125 29.8958 13.125ZM18.2292 26.25H29.8958C30.2983 26.25 30.625 25.9233 30.625 25.5208C30.625 25.1183 30.2983 24.7917 29.8958 24.7917H18.2292C17.8267 24.7917 17.5 25.1183 17.5 25.5208C17.5 25.9233 17.8267 26.25 18.2292 26.25Z"
                        fill="#3E3832" />
                </svg>
            </div>
            <div>
                <Undertittel tag="h3">
                    {tekst('lenker.soknader')}
                </Undertittel>
                <Normaltekst>fra deg</Normaltekst>
            </div>
        </LenkepanelBase>
    )
}

export default SoknadLenkepanel
