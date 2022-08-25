import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import useMobileDetect from "../utils/useMobileDetect";

const Deeplink = () => {
    const router = useRouter()
    const { query } = router
    let currentDevice = useMobileDetect()

    const utm_page = (query.utm_page != undefined) ? `${query.utm_page}` : ''
    const utm_source = (query.utm_source != undefined) ? `utm_source=${query.utm_source}&` : ''
    const utm_medium = (query.utm_medium != undefined) ?`utm_medium=${query.utm_medium}&` : ''
    const utm_campaign = (query.utm_campaign != undefined) ? `utm_campaign=${query.utm_campaign}` : ''
    const with_install = (query.need_install != undefined) ? `need_install=${query.need_install}` : 'no'
    
    const protocol = `indomaretpoinku://`
    const install_url = {android: "https://play.google.com/store/apps/details?id=mypoin.indomaret.android", ios: "https://apps.apple.com/id/app/mypoin/id1280783271?l=id" }
    const url = `${process.env.NEXT_PUBLIC_BASE}/${utm_page}?${utm_source}${utm_medium}${utm_campaign}`
    const deeplink = `${protocol}web?url=${url}`   
    const data = { 
        install: install_url,
        protocol: protocol,
        utm_page: query.utm_page, 
        utm_source: query.utm_source, 
        utm_medium: query.utm_medium, 
        utm_campaign: query.utm_campaign, 
        url: url,
        deeplink: deeplink
    };

    const redirectToNativeApp = () => {
        document.location = deeplink;
    };

    const redirectToPlayStore = () => {
        document.location = install_url["android"]
    }

    const redirecToAppStore = () => {
        document.location = install_url["ios"]
    }

    const redirectToWeb = () => {
        window.location.href = url
    }

    useEffect(() => {
        console.log(data)
        if (currentDevice.isMobile()) {
            if (utm_page !== '') {
                redirectToNativeApp()
                setTimeout(() => {
                    if (with_install === "yes") {
                        if (currentDevice.isIos()) {
                            redirecToAppStore()
                        } else {
                            redirectToPlayStore()
                        }
                    } else {
                        redirectToWeb()
                    }
                }, 2500)
            }
        } else {
            if (utm_page !== '') {
                redirectToWeb()
            }
        }
    }, [query]);

    return <></>
};

export default Deeplink;