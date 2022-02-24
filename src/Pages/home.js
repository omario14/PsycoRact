import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import cookies from 'js-cookie'





const languages = [
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr',
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    },
    {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        country_code: 'sa',
    },
]





export default function Home() {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    
    
    useEffect(() => {
        console.log('Setting page stuff')
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('app_title')
    }, [currentLanguage, t])
    
    return (
        <div>

            <section className="home" id="home">

                <div className="container">

                    <div className="row min-vh-100 align-items-center text-center text-md-left">

                        <div className="col-md-6 pr-md-5" data-aos="zoom-in">
                            <img src="../../assets/images/Finding brilliant ideas-bro.svg" width="100%" alt="" />
                        </div>

                        <div className="col-md-6 pl-md-5 content" data-aos="fade-left">


                            <h1><span>{t('restez_1')}</span> {t('en_securite')} <span>{t('restez_2')}</span> {t('santer')}</h1>
                            <h3>{t('soin')}</h3>
                            <a href="/"><button className="button">{t('plus')}</button></a>
                        </div>

                    </div>

                </div>

            </section>


        </div>
    );
}
