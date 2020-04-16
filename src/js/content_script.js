const observeTarget = document.querySelector("#app.v-application");

const config = {
    attributes: true,
    childList: true,
    characterData: true,
};

const observer = new MutationObserver((mutations) => {
    try {
        mutations.forEach((mutation) => {
            addEventListenerToCrews(mutation);
        });
    } catch (e) {
        console.log("Error: mutation target is not element");
    }
});

function addEventListenerToCrews(mutation) {
    if (mutation.removedNodes.length > 0) {
        return;
    }
    try {
        let target = mutation.target;
        let crews = target.querySelectorAll("div.px-0.cursor-pointer.v-list-item.theme--light");
        crews.forEach((crew) => addEventListenerToCrew(crew));
    } catch (e) {
        console.log(e);
    }
}

function addEventListenerToCrew(crew) {
    let crewName = crew.querySelector("div.v-list-item__subtitle.caption.text-left");
    console.log(crewName.innerText);
}

observer.observe(observeTarget, config);
