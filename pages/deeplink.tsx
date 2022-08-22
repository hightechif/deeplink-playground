import React, { useEffect, useRef } from "react";
import { useRouter } from 'next/router'
import useMobileDetect from "../utils/useMobileDetect";

const Deeplink = () => {

    const router = useRouter()
    const { utm_source, utm_medium, utm_campaign, utm_page } = router.query
    let currentDevice = useMobileDetect()
    
    const protocol = `indomaretpoinku://`
    const url = `${process.env.NEXT_PUBLIC_BASE}/${utm_page}?utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_source=${utm_source}`
    const deeplink = `${protocol}web?url=${url}`   
    const install_url = "https://indomaretpoinku.com/get-the-app"
    const data = { 
        install: install_url,
        protocol: protocol,
        utm_page: utm_page, 
        utm_source: utm_source, 
        utm_medium: utm_medium, 
        utm_campaign: utm_campaign, 
        url: url,
        deeplink: deeplink
    };
    console.log(data)

    const redirecttoNativeApp = () => {
        document.location = deeplink;
    };

    const redirecttoPlayStoreOrAppStore = () => {
        document.location = install_url
    }

    const redirecttoWeb = () => {
        window.location.href = url
    }

    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount;
            
            mounted.current = true;
        }

        // do componentDidUpdate;
        if (currentDevice.isIos() || currentDevice.isAndroid()) {
            console.log("Open on Mobile")
            try {
                if (utm_page != undefined) {
                    redirecttoNativeApp()
                }
            } catch (error) {
                redirecttoPlayStoreOrAppStore()
            }
        } else {
            console.log("Open on Desktop")
            if (utm_page != undefined) {
                redirecttoWeb()
            }
        }
    });

    return <></>
};

export default Deeplink;