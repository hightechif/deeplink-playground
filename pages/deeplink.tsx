import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import Device from "../components/Device";
import useMobileDetect from "../utils/useMobileDetect";

const Deeplink = () => {

    const router = useRouter()
    const { utm_source, utm_medium, utm_campaign } = router.query
    let currentDevice = useMobileDetect()
    
    const protocol = "indomaretpoinku://"
    const url = `https://indomaretpoinku.com/Tukar-Hadiah-Scandic?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`
    const deeplink = `${protocol}web?url=${url}`
    const data = { protocol: protocol, url: url, utm_source: utm_source, utm_medium: utm_medium, utm_campaign: utm_campaign, deeplink: deeplink };
    console.log(data)
    
    const install_url = "https://indomaretpoinku.com/get-the-app"

    const redirecttoNativeApp = () => {
        document.location = deeplink;
    };

    const redirecttoPlayStoreOrAppStore = () => {
        document.location = install_url
    }

    const redirecttoWeb = () => {
        window.location.href = url
    }

    useEffect(() => {
        if (currentDevice.isDesktop()) {
            redirecttoWeb()
        } else if (currentDevice.isIos() || currentDevice.isAndroid()) {
            redirecttoNativeApp()
            setTimeout(() => {
                // redirecttoPlayStoreOrAppStore()
                redirecttoWeb()
            }, 2000)
        } else {
            redirecttoWeb()
        }
    }, []);

    return (
        <div>
        </div>
    )
};

export default Deeplink;