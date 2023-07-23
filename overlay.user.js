// ==UserScript==
// @name         r/sprachkanal3 Template
// @namespace    http://tampermonkey.net/
// @version      8.2
// @description  try to take over the canvas!
// @author       placeDE-revolution Devs
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// ==/UserScript==

var overlayImage = null;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
        overlayImage = document.createElement("img");
        updateImage();
        overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;pointerEvents: 'none';`;
        canvasContainer.appendChild(overlayImage);
    }, false);
}

function updateImage() {
    overlayImage.src = "https://cdn.discordapp.com/attachments/1132408210314252408/1132590575800033350/Overlay_von_VC3_aktuell.png?" + Date.now()
}

setInterval(function () {overlayImage.src = "https://cdn.discordapp.com/attachments/1132408210314252408/1132590575800033350/Overlay_von_VC3_aktuell.png?" + Date.now()}, 30000);
