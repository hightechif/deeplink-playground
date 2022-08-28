import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import { isMobile, isIOS } from "react-device-detect";

const Deeplink = () => {
    const router = useRouter()

    const utm_page = (router.query.utm_page !== undefined) ? `${router.query.utm_page}` : undefined
    const utm_source_query = (router.query.utm_source !== undefined) ? `utm_source=${router.query.utm_source}&` : ''
    const utm_medium_query = (router.query.utm_medium !== undefined) ? `utm_medium=${router.query.utm_medium}&` : ''
    const utm_campaign_query = (router.query.utm_campaign !== undefined) ? `utm_campaign=${router.query.utm_campaign}` : ''
    const with_install = (router.query.with_install !== undefined) ? router.query.with_install : ''

    const scheme = `indomaretpoinku://`
    const install_url = { android: "https://play.google.com/store/apps/details?id=mypoin.indomaret.android", ios: "https://apps.apple.com/id/app/mypoin/id1280783271?l=id" }
    const web_url = `${process.env.NEXT_PUBLIC_BASE}/${utm_page}?${utm_source_query}${utm_medium_query}${utm_campaign_query}`
    const deeplink = `${scheme}web?url=${web_url}`
    const data = {
        install_url: install_url,
        utm_page: router.query.utm_page,
        utm_source: router.query.utm_source,
        utm_medium: router.query.utm_medium,
        utm_campaign: router.query.utm_campaign,
        web_url: web_url,
        deeplink: deeplink
    };

    const redirectToNativeApp = () => {
        document.location = deeplink
    };

    const redirectToPlayStore = () => {
        document.location = install_url["android"]
    }

    const redirecToAppStore = () => {
        document.location = install_url["ios"]
    }

    const redirectToWeb = () => {
        window.location.href = web_url
    }

    useEffect(() => {
        if (utm_page) {
            console.log(data)
            if (isMobile) {
                console.log("run on mobile")
                console.log("open app with deeplink")
                redirectToNativeApp()
                if (with_install === 'yes') {
                    setTimeout(() => {
                        if (isIOS) {
                            console.log("go to ios app store")
                            redirecToAppStore()
                        } else {
                            console.log("go to android play store")
                            redirectToPlayStore()
                        }
                    }, 2500)
                } else {
                    console.log("go to website on mobile")
                    redirectToWeb()
                }

            } else {
                console.log("run on desktop web")
                console.log("go to website on desktop")
                redirectToWeb()
            }
        }
    });

    return <></>
};

export default Deeplink;