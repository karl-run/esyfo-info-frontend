import { LenkepanelBase } from 'nav-frontend-lenkepanel'
import { Undertittel } from 'nav-frontend-typografi'
import React from 'react'

import { sykmeldingUrl } from '../../utils/environment'
import { tekst } from '../../utils/tekster'

const SykmeldingLenkepanel = () => {
    return (
        <LenkepanelBase href={sykmeldingUrl()} border={true}>
            <div className="lenkeikon sykmelding">
                <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.26 16.6183L37.0717 23.4316C38.96 25.32 40 27.83 40 30.5016C40 33.1733 38.96 35.685 37.0717 37.5716C35.1817 39.46 32.67 40.5 29.9983 40.5C27.3267 40.5 24.8167 39.4616 22.93 37.5733L2.93 17.5733C1.04167 15.685 0 13.1766 0 10.505C0 7.83165 1.04 5.32165 2.93 3.42998C4.82 1.54165 7.33 0.501648 10.0017 0.501648C12.6733 0.501648 15.1833 1.54165 17.0717 3.42831L22.9383 9.29498C22.94 9.29664 22.9421 9.29789 22.9442 9.29914L22.9442 9.29915L22.9479 9.30151L22.95 9.30331L30.26 16.6183ZM17.645 29.9316L29.4283 18.145L28.565 17.2816L22.3583 11.0733L10.5733 22.8583L17.645 29.9316ZM1.66667 10.5033C1.66667 8.27665 2.53333 6.18331 4.10833 4.60831C5.68333 3.03498 7.775 2.16831 10.0017 2.16831C12.2267 2.16831 14.32 3.03498 15.8933 4.60831L21.18 9.89498L9.39333 21.6817L4.10833 16.395C2.535 14.8216 1.66667 12.73 1.66667 10.5033ZM29.9983 38.8333C32.2233 38.8333 34.3183 37.9666 35.8933 36.3933C37.4667 34.8216 38.3333 32.73 38.3333 30.5016C38.3333 28.275 37.4667 26.1816 35.8933 24.61L30.6067 19.3233L18.8233 31.11L24.1083 36.395C25.6817 37.9666 27.7733 38.8333 29.9983 38.8333ZM7.03833 13.7766C6.825 13.7766 6.61167 13.8583 6.44833 14.02C6.12333 14.345 6.12333 14.8733 6.44833 15.1983C6.61167 15.3616 6.825 15.4416 7.03833 15.4416C7.25167 15.4416 7.465 15.36 7.62833 15.1983C7.955 14.8733 7.955 14.345 7.62833 14.02C7.465 13.8583 7.25167 13.7766 7.03833 13.7766ZM9.98333 11.6633C9.65833 11.3383 9.65833 10.8066 9.98333 10.485C10.1467 10.3216 10.36 10.24 10.5733 10.24C10.7867 10.24 11 10.3216 11.1617 10.485C11.4867 10.8066 11.4867 11.3383 11.1617 11.6633C11 11.8266 10.7867 11.9066 10.5733 11.9066C10.36 11.9066 10.1467 11.8266 9.98333 11.6633ZM7.03833 11.075C7.365 10.7466 7.365 10.2183 7.03833 9.89331C6.875 9.72998 6.66167 9.64998 6.44833 9.64998C6.235 9.64998 6.02167 9.72998 5.86 9.89331C5.535 10.2183 5.535 10.7466 5.86 11.075C6.02333 11.2383 6.23667 11.3183 6.45 11.3183C6.66333 11.3183 6.875 11.2366 7.03833 11.075ZM10.5733 7.53665C10.41 7.70165 10.1967 7.78331 9.98333 7.78331C9.77 7.78331 9.55667 7.70165 9.395 7.53665C9.07 7.21331 9.07 6.68498 9.395 6.35998C9.55667 6.19831 9.77 6.11665 9.98333 6.11665C10.1967 6.11665 10.41 6.19831 10.5733 6.35998C10.8983 6.68498 10.8983 7.21331 10.5733 7.53665ZM10.5733 14.61C10.2483 14.935 10.2483 15.4633 10.5733 15.7883C10.7367 15.9516 10.95 16.0316 11.1633 16.0316C11.3767 16.0316 11.59 15.95 11.7533 15.7883C12.0783 15.4633 12.0783 14.935 11.7533 14.61C11.5883 14.4466 11.375 14.3616 11.1617 14.3616C10.9483 14.3616 10.735 14.4466 10.5733 14.61ZM14.1083 12.25C13.7833 11.925 13.7833 11.4 14.1083 11.075C14.2717 10.9116 14.4833 10.83 14.6967 10.83C14.91 10.83 15.1233 10.9116 15.2867 11.075C15.6133 11.4 15.6133 11.9266 15.2867 12.25C15.1233 12.415 14.9117 12.4966 14.6983 12.4966C14.485 12.4966 14.2717 12.4166 14.1083 12.25ZM14.1083 8.37331C14.3217 8.37331 14.535 8.29165 14.6983 8.12998C15.0233 7.80498 15.0233 7.27665 14.6983 6.94831C14.535 6.78498 14.3217 6.70331 14.1083 6.70331C13.895 6.70331 13.6817 6.78498 13.5183 6.94665C13.1933 7.27498 13.1933 7.80331 13.5183 8.12831C13.6817 8.29165 13.895 8.37331 14.1083 8.37331ZM25.3033 32.8766C25.4667 32.7133 25.68 32.6333 25.8933 32.6333C26.1067 32.6333 26.32 32.7133 26.4833 32.8766C26.8083 33.2 26.8083 33.7283 26.4833 34.0566C26.32 34.22 26.1067 34.2983 25.8933 34.2983C25.68 34.2983 25.4667 34.22 25.3033 34.0566C24.9783 33.7283 24.9783 33.2 25.3033 32.8766ZM30.0183 30.52C30.3433 30.1933 30.3433 29.665 30.0183 29.34C29.855 29.1783 29.6417 29.0966 29.4283 29.0966C29.215 29.0966 29.0017 29.18 28.8383 29.34C28.5117 29.665 28.5117 30.1933 28.8383 30.52C29.0017 30.6833 29.215 30.7633 29.4283 30.7633C29.6417 30.7633 29.855 30.6816 30.0183 30.52ZM29.4283 33.4633C29.5917 33.3016 29.805 33.22 30.0183 33.22C30.2317 33.22 30.445 33.3016 30.6083 33.4633C30.935 33.7916 30.935 34.32 30.6083 34.6416C30.445 34.8033 30.2317 34.885 30.0183 34.885C29.805 34.885 29.5917 34.805 29.4283 34.6416C29.1033 34.32 29.1033 33.7916 29.4283 33.4633ZM33.555 29.6866C33.3417 29.6866 33.1283 29.7683 32.965 29.93C32.64 30.2533 32.64 30.7816 32.965 31.11C33.1283 31.2716 33.3417 31.3533 33.555 31.3533C33.7683 31.3533 33.9817 31.2716 34.145 31.11C34.47 30.7816 34.47 30.2533 34.145 29.93C33.9817 29.7683 33.7683 29.6866 33.555 29.6866ZM25.8933 28.75C26.2183 29.075 26.2183 29.605 25.8933 29.93C25.73 30.0916 25.5167 30.1733 25.3033 30.1733C25.09 30.1733 24.8767 30.0916 24.7133 29.93C24.3883 29.605 24.3883 29.075 24.7133 28.75C24.8767 28.5883 25.09 28.5066 25.3033 28.5066C25.5167 28.5066 25.73 28.5866 25.8933 28.75ZM29.4283 26.3933C29.755 26.0683 29.755 25.5416 29.4283 25.215C29.265 25.0516 29.0517 24.9716 28.8383 24.9716C28.625 24.9716 28.4117 25.0533 28.2483 25.215C27.9233 25.5416 27.9233 26.0683 28.2483 26.3933C28.4117 26.5567 28.625 26.6367 28.8383 26.6367C29.0517 26.6367 29.2667 26.5567 29.4283 26.3933ZM33.5533 25.805C33.88 26.13 33.88 26.6583 33.5533 26.9833C33.39 27.145 33.1783 27.2267 32.965 27.2267C32.7517 27.2267 32.5383 27.1467 32.375 26.9833C32.05 26.6583 32.05 26.13 32.375 25.805C32.5383 25.6433 32.7517 25.5616 32.965 25.5616C33.1783 25.5616 33.39 25.6416 33.5533 25.805Z"
                        fill="#3E3832"
                    />
                </svg>
            </div>
            <Undertittel tag="h3">{tekst('lenker.sykmelding')}</Undertittel>
        </LenkepanelBase>
    )
}

export default SykmeldingLenkepanel
