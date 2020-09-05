import api from './api/ProfileApi.js';
import { profileTemplate } from './util/Templates.js';
import {
    BASE_URL,
    OS_STYLE_IMAGE_MAP,
    PROFILE_IMAGE_MAP,
    EVENT_TYPE,
    COMPUTER_SELECT_RULE,
    BREAK_TIME,
    AFTER_STUDY_STYLE,
    PAIR_CHANGE_PERIOD,
} from './util/constants.js';

(() => {
    const $application = document.querySelector('.v-application');

    const convertProfile = (profile) => {
        return {
            ...profile,
            afterStudy: AFTER_STUDY_STYLE[profile.afterStudy],
            breaktime: BREAK_TIME[profile.breaktime],
            computerPrefer: COMPUTER_SELECT_RULE[profile.computerPrefer],
            pairTurn: PAIR_CHANGE_PERIOD[profile.pairTurn],
            osStyle: chrome.runtime.getURL(OS_STYLE_IMAGE_MAP[profile.osStyle]),
            developerTypeLink: `${BASE_URL}/${PROFILE_IMAGE_MAP[profile.developerType].linkPath}`,
            developerTypeImage: chrome.runtime.getURL(PROFILE_IMAGE_MAP[profile.developerType].resourcePath),
        }
    }

    const showProfile = (profile) => {
        profile = convertProfile(profile);

        const $dialog = $application.querySelector('.v-dialog--active');
        $dialog.style.display = 'none';

        const $cardBody = $application.querySelector('.v-dialog__content--active');
        $cardBody.insertAdjacentHTML('beforeend', profileTemplate(profile));
        $cardBody.querySelector('#back-button').addEventListener(EVENT_TYPE.CLICK, () => {
            $dialog.style.display = '';
            $cardBody.removeChild($cardBody.lastElementChild);
        });
    };

    const onClickUser = async (event) => {
        const $user = event.target.closest('.v-list-item__content');
        if (!$user || !$user.closest('.v-dialog__content')) {
            return;
        }

        try {
            const crewName = $user.querySelector('.v-list-item__subtitle').innerText;
            const profile = await api.profile.get(crewName);
            showProfile(profile);
        } catch (e) {
            alert('프로필이 존재하지 않습니다.');
        }
    };

    const onClickBackground = (event) => {
        event.preventDefault();
        if (!event.target.classList.contains('v-overlay__scrim')) {
            return;
        }

        let $cardBody = $application.querySelector('.v-dialog__content--active');
        while ($cardBody.childElementCount > 1) {
            $cardBody.removeChild($cardBody.lastElementChild);
        }
    };

    const initEventListener = () => {
        $application.addEventListener(EVENT_TYPE.CLICK,  (event) => {
            onClickUser(event);
            onClickBackground(event);
        });
    };

    const init = () => {
        initEventListener();
    };

    init();
})();
