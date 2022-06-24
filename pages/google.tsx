import React, { Component, useEffect } from "react";

function Google() {
    const url = "https://google.com/about"
    useEffect(() => {
        window.location.href = url;
    }, []);

    return (
        <div>
            <h1>This page is not available</h1>
            <p>You are redirecting to google.com/about</p>
        </div>
    );
}

export default Google;