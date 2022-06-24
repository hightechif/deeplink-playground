import React, { Component, useEffect } from "react";

function Google() {
  useEffect(() => {
    window.location.href = "https://google.com/about";
  }, []);

  return (
    <div>
      <h1>This page is not available</h1>
      <p>You are redirecting to google.com/about</p>
    </div>
  );
}

export default Google;