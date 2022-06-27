import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import Device from "../components/Device";
import useMobileDetect from "../utils/useMobileDetect";

const Deeplink = () => {

    const router = useRouter()
    const { utm_source, utm_medium, utm_campaign } = router.query
    let currentDevice = useMobileDetect()
    let install_url: string
    
    const protocol = "indomaretpoinku://"
    const url = `https://indomaretpoinku.com/Tukar-Hadiah-Scandic?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`
    const deeplink = `${protocol}web?url=${url}`
    const data = { protocol: protocol, url: url, utm_source: utm_source, utm_medium: utm_medium, utm_campaign: utm_campaign, deeplink: deeplink };
    console.log(data)
    
    const install = {
        android: "https://play.google.com/store/apps/details?id=mypoin.indomaret.android&hl=en&gl=ID",
        ios: "https://apps.apple.com/us/app/indomaret-poinku/id1280783271"
    }
    
    if (currentDevice.isIos()) {
        install_url = install['ios']
    } else {
        install_url = install['android']
    }

    const redirecttoNativeApp = () => {
        document.location = deeplink;
    };

    const redirecttoInstallUrl = () => {
        window.location.href = install_url
    }

    useEffect(() => {
        redirecttoNativeApp()
        setTimeout(() => {
            redirecttoInstallUrl()
        }, 1000)
    });

    return (
        <div>
            <button onClick={redirecttoNativeApp}>
                <a>Click here to open</a>
            </button>
        </div>
    )
};

export default Deeplink;