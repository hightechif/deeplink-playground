import React from 'react'
import useMobileDetect from "../utils/useMobileDetect";

const Test = () => {

    const currentDevice = useMobileDetect()
    console.log(currentDevice.isAndroid())
    console.log(currentDevice.isIos())

    return (
        <div>test</div>
    )
}

export default Test;