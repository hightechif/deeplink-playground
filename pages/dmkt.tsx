import Link from 'next/link';
import React, { Component, useEffect } from "react";
import { useRouter } from 'next/router'

const Dmkt = () => {

    const router = useRouter()
    const {utm_source, utm_medium, utm_campaign, method} = router.query

    const protocol = "indomaretpoinku://web"
    const url = "https://indomaretpoinku.com/Tukar-Hadiah-Scandic"
    const deeplink = `${protocol}?url=${url}?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`
    const data = { protocol: protocol, url: url, utm_source: utm_source, utm_medium: utm_medium, utm_campaign: utm_campaign, deeplink: deeplink };

    const install = "https://play.google.com/store/apps/details?id=mypoin.indomaret.android&hl=en&gl=ID"

    const redirecttoNativeApp = (/*potential params */) => {
        document.location = deeplink;
    };

    useEffect(() => {
        redirecttoNativeApp()
        router.push(install, deeplink, {shallow: true})
    }, []);

    return (
        <div>
            <button onClick={redirecttoNativeApp}>
                <a>Click here to open</a>
            </button>
        </div>
    )
};

export default Dmkt;