import {
    MUTATION_OBSERVE_CONFIG,
    PROFILE_IMAGE_MAP,
    EVENT_TYPE,
    COMPUTER_SELECT_RULE,
    BREAK_TIME,
    AFTER_STUDY_STYLE,
    PAIR_CHANGE_PERIOD,
} from '../utils/Constants.js';
import { profileTemplate } from '../utils/Templates.js';
import api from './modules/ProfileApi.js';

function ProfileExtension() {
    const $observeTarget = document.querySelector('#app.v-application');

    const showProfile = (profile) => {
        const $target = document.querySelector('div.v-dialog.v-dialog--active');
        $target.style.display = 'none';

        profile.afterStudy = AFTER_STUDY_STYLE[profile.afterStudy];
        profile.breaktime = BREAK_TIME[profile.breaktime];
        profile.computerPrefer = COMPUTER_SELECT_RULE[profile.computerPrefer];
        profile.pairTurn = PAIR_CHANGE_PERIOD[profile.pairTurn];

        profile.osStyle = chrome.runtime.getURL(PROFILE_IMAGE_MAP[profile.osStyle]);
        profile.developerTypeLink = api.BASE_URL + PROFILE_IMAGE_MAP[profile.developerType].linkPath;
        profile.developerTypeImage = chrome.runtime.getURL(PROFILE_IMAGE_MAP[profile.developerType].resourcePath);

        const $cardBody = document.querySelector('div.v-dialog__content.v-dialog__content--active');
        $cardBody.insertAdjacentHTML('beforeend', profileTemplate(profile));

        $cardBody.querySelector('#back-button').addEventListener(EVENT_TYPE.CLICK, () => {
            $target.style.display = '';
            $cardBody.removeChild($cardBody.lastElementChild);
        });
    };

    const onClickUser = (event) => {
        const $parent = event.target.parentNode;
        if (!$parent.classList.contains('v-list-item__content')) {
            return;
        }
        const crewName = $parent.querySelector('div.v-list-item__subtitle.caption.text-left').innerText;
        api.profile
            .get(crewName)
            .then((profile) => {
                showProfile(profile);
            })
            .catch((e) => {
                alert('프로필이 존재하지 않습니다.');
            });
    };

    const addEventListenerToCrews = (mutation) => {
        if (mutation.removedNodes.length === 1 && 'v-overlay theme--dark' === mutation.removedNodes[0].className) {
            return;
        }
        if (
            mutation.addedNodes.length === 1 &&
            'v-dialog__content v-dialog__content--active dialog-transition-enter dialog-transition-enter-active' ===
                mutation.addedNodes[0].className
        ) {
            const $userCard = mutation.target.querySelector('div.v-card__text');
            $userCard.addEventListener(EVENT_TYPE.CLICK, onClickUser);
        }
    };

    const onMutationEventHandler = (mutations) => {
        try {
            addEventListenerToCrews(mutations[0]);
        } catch (e) {
            console.log(e);
        }
    };

    const onClickBackground = (event) => {
        event.preventDefault();
        if (!event.target.classList.contains('v-overlay__scrim') || event.target.childList !== undefined) {
            return;
        }
        let $cardBody = document.querySelector('div.v-dialog__content.v-dialog__content--active');
        if ($cardBody.childElementCount === 2) {
            $cardBody.removeChild($cardBody.lastElementChild);
        }
    };

    const initMutationObserver = () => {
        const observer = new MutationObserver(onMutationEventHandler);
        observer.observe($observeTarget, MUTATION_OBSERVE_CONFIG);
    };

    const initEventListener = () => {
        $observeTarget.addEventListener(EVENT_TYPE.CLICK, onClickBackground);
    };

    const init = () => {
        initMutationObserver();
        initEventListener();
    };

    return {
        init,
    };
}

const profileExtension = new ProfileExtension();
profileExtension.init();
