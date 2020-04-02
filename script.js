"use strict";

window.addEventListener("DOMContentLoaded", init);

async function init() {

    let response = await fetch("imgs/logo.svg");
    let svgData = await response.text();
    document.querySelector(".logo").innerHTML = svgData;

    /* let response2 = await fetch("imgs/two_girls.svg");
    let svgData2 = await response2.text();
    document.querySelector(".illustration-me").innerHTML = svgData2; */

    /* let response3 = await fetch("imgs/scroll_lines.svg");
    let svgData3 = await response3.text();
    document.querySelector(".hello").innerHTML = svgData3; */

    fetchJson();
}

function fetchJson() {
    fetch("projects.json")
        .then(res => res.json())
        .then(fetchList);
}

function fetchList(project) {
    project.forEach(showProjects);
}

function showProjects(project) {
    // clone html template
    const template = document.querySelector("#template").content;
    const copy = template.cloneNode(true);

    // populate elements in template 
    copy.querySelector(".number").textContent = project.number;
    copy.querySelector(".title").textContent = project.title;
    copy.querySelector(".description").textContent = project.description;
    copy.querySelector(".theme").textContent = project.theme;
    // TO ADD:
    copy.querySelector(".video").textContent = project.video;

    // append template copy
    document.querySelector("#projects").appendChild(copy);
}