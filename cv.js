"use strict";

window.addEventListener("DOMContentLoaded", init);

async function init() {

    let response = await fetch("imgs/logo.svg");
    let svgData = await response.text();
    document.querySelector(".logo").innerHTML = svgData;

    /* let responseTl = await fetch("imgs/timeline.svg");
    let tlData = await responseTl.text();
    document.querySelector(".vertical-line").innerHTML = tlData; */


    /* let response2 = await fetch("imgs/two_girls.svg");
    let svgData2 = await response2.text();
    document.querySelector(".illustration-me").innerHTML = svgData2; */

    /* let response3 = await fetch("imgs/scroll_lines.svg");
    let svgData3 = await response3.text();
    document.querySelector(".hello").innerHTML = svgData3; */
}