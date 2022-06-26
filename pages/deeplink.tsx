import React, { useEffect } from "react";
import { useRouter } from 'next/router'

const Deeplink = () => {

    const router = useRouter()
    const { utm_source, utm_medium, utm_campaign } = router.query

    const protocol = "indomaretpoinku://"
    const url = `https://indomaretpoinku.com/Tukar-Hadiah-Scandic?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`
    const deeplink = `${protocol}web?url=${url}`
    const data = { protocol: protocol, url: url, utm_source: utm_source, utm_medium: utm_medium, utm_campaign: utm_campaign, deeplink: deeplink };
    console.log(data)

    const install = {
        android: "https://play.google.com/store/apps/details?id=mypoin.indomaret.android&hl=en&gl=ID",
        ios: "https://apps.apple.com/us/app/indomaret-poinku/id1280783271"
    }

    const install_url = install['android']

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
        }, 3000)
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