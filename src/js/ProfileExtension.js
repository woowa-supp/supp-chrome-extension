import { MUTATION_OBSERVE_CONFIG, PROFILE_IMAGE_MAP, EVENT_TYPE } from "../utils/constants.js";
import { findSurveyResultByUserName } from "./modules/MockProfileApi.js";
import { profileTemplate } from "../utils/templates.js";

function ProfileExtension() {
    const $observeTarget = document.querySelector("#app.v-application");

    const showProfile = profile => {        
        const $target = document.querySelector("div.v-dialog.v-dialog--active");
        $target.style.display = "none";

        profile.osStyle = chrome.runtime.getURL(PROFILE_IMAGE_MAP[profile["osStyle"]]);
        profile.developerType = chrome.runtime.getURL(PROFILE_IMAGE_MAP[profile["developerType"]]);
        const $cardBody = document.querySelector("div.v-dialog__content.v-dialog__content--active");
        $cardBody.insertAdjacentHTML("beforeend", profileTemplate(profile));
        $cardBody.querySelector("#back-button").addEventListener(EVENT_TYPE.CLICK, () => {
            $target.style.display = "";
            $cardBody.removeChild($cardBody.lastElementChild);
        });
    }

    const onClickUser = event => {
        const $parent = event.target.parentNode;
        if ($parent.className !== "v-list-item__content") {
            return;
        }
        const crewName = $parent.querySelector("div.v-list-item__subtitle.caption.text-left").innerText;
        findSurveyResultByUserName(crewName).then(profile => {
            if (typeof profile === "undefined") {
                alert("프로필이 존재하지 않습니다.");
                return;
            }
            showProfile(profile);
        });
    }

    const addEventListenerToCrews = mutation => {
        if (mutation.removedNodes.length === 1 && "v-overlay theme--dark" === mutation.removedNodes[0].className) {
            return;
        }
        if (mutation.addedNodes.length === 1 && "v-dialog__content v-dialog__content--active dialog-transition-enter dialog-transition-enter-active" === mutation.addedNodes[0].className) {
            const $userCard = mutation.target.querySelector("div.v-card__text.text-center");
            $userCard.addEventListener(EVENT_TYPE.CLICK, onClickUser);
        }
    }

    const onMutationEventHandler = mutations => {
        try {
            addEventListenerToCrews(mutations[0]);
        } catch (e) {
            console.log(e);
        }
    }

    const onClickBackground = event => {
        event.preventDefault();
        if (event.target.className !== "v-overlay__scrim" || event.target.childList !== undefined) {
            return;
        }
        let $cardBody = document.querySelector("div.v-dialog__content.v-dialog__content--active");
        if ($cardBody.childElementCount === 2) {
            $cardBody.removeChild($cardBody.lastElementChild);
        }
    }

    const initMutationObserver = () => {
        const observer = new MutationObserver(onMutationEventHandler);
        observer.observe($observeTarget, MUTATION_OBSERVE_CONFIG);
    }

    const initEventListener = () => {
        $observeTarget.addEventListener(EVENT_TYPE.CLICK, onClickBackground);
    };

    const init = () => {
        initMutationObserver();
        initEventListener();
    };

    return {
        init
    };
}

const profileExtension = new ProfileExtension();
profileExtension.init();