// import { findSurveyResultByUserName } from "./modules/MockProfileApi.js";
// import { MUTATION_OBSERVE_CONFIG } from "../utils/constants.js";
// import { profileTemplate } from "../utils/templates.js";

/* modules area */

const profileTemplate = profile => 
`
<div class="v-card v-sheet theme--light">
    <div class="v-card__title headline">
        <button type="button" class="absolute top-30 v-btn v-btn--flat v-btn--text theme--light v-size--default">
            <span class="v-btn__content">
                <i aria-hidden="true" class="v-icon notranslate font-size-14 v-icon--left mdi mdi-arrow-left theme--light"></i> 뒤로
            </span>
        </button>
        <span class="text-center width-100 mt-4">${profile["login"]}</span> 
    </div>
    <div class="mx-auto my-3"></div>
    <div class="v-card__text text-center">
        <div class="row">
            <div class="col col-12">

            <div class="v-card__title">개발자 타입</div>
            <div class="v-card__text">
                <div class="text-left">
                    <div class="tui-editor-contents">
                        <p>${profile["devType"]}</p>
                    </div>
                </div>
            </div>

            <div class="v-card__title">운영체제</div>
            <div class="v-card__text">
                <div class="text-left">
                    <div class="tui-editor-contents">
                        <p>${profile["osStyle"]}</p>
                    </div>
                </div>
            </div>

            <div class="v-card__title">노트북 사용 선호</div>
            <div class="v-card__text">
                <div class="text-left">
                    <div class="tui-editor-contents">
                        <p>${profile["computerPrefer"]}</p>
                    </div>
                </div>
            </div>

            <div class="v-card__title">휴식시간</div>
            <div class="v-card__text">
                <div class="text-left">
                    <div class="tui-editor-contents">
                        <p>${profile["breaktime"]}</p>
                    </div>
                </div>
            </div>

            <div class="v-card__title">페어 교체주기</div>
            <div class="v-card__text">
                <div class="text-left">
                    <div class="tui-editor-contents">
                        <p>${profile["pairTurn"]}</p>
                    </div>
                </div>
            </div>

            <div class="v-card__title">일과 시간 이후</div>
            <div class="v-card__text">
                <div class="text-left">
                    <div class="tui-editor-contents">
                        <p>${profile["afterStudy"]}</p>
                    </div>
                </div>
            </div>

            <div class="v-card__title">테스트 메소드 </div>
            <div class="v-card__text">
                <div class="text-left">
                    <div class="tui-editor-contents">
                        <p>${profile["testName"]}</p>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </div>
    <!---->
</div>
`;

const MUTATION_OBSERVE_CONFIG = {
    attributes: true,
    childList: true,
    characterData: true
};

const profiles = {
    "ks-kim": generateProfileData("ks-kim", "닌자", "MAC OS", "아무거나", "빈백조아", "기능단위로 진행", "6시 이후에는 페어 진행하지 않기", "테스트 명명법"),
    "toneyparky": generateProfileData("toneyparky", "아키텍트", "MAC OS", "아무거나", "빈백매우조아", "5분 간격으로 진행", "6시 이후에도 쌉가능", "테스트 명명법"),
    "lalize": generateProfileData("lalize", "아키텍트", "MAC OS", "아무거나", "빈백매우조아", "5분 간격으로 진행", "6시 이후에도 쌉가능", "테스트 명명법")
}

function generateProfileData(name, devType, osStyle, computerPrefer, breaktime, pairTurn, afterStudy, testName) {
    return {
        "login": name,
        "devType": devType,
        "osStyle": osStyle,
        "computerPrefer": computerPrefer,
        "breaktime": breaktime,
        "pairTurn": pairTurn,
        "afterStudy": afterStudy,
        "testName": testName
    }
}

async function findSurveyResultByUserName(crewGithubId) {
    return await profiles[crewGithubId];
}

/* application area */

const profileExtension = new ProfileExtension();
profileExtension.init();

function ProfileExtension() {
    const $observeTarget = document.querySelector("#app.v-application");

    const init = () => {
        initMutationObserver();
    };

    function initMutationObserver() {
        const observer = new MutationObserver(onMutationEventHandler);
        observer.observe($observeTarget, MUTATION_OBSERVE_CONFIG);
    }

    function onMutationEventHandler(mutations) {
        try {
            addEventListenerToCrews(mutations[0]);
        } catch(e) {
            console.log(e);
        }
    }

    function addEventListenerToCrews(mutation) {
        if (mutation.removedNodes.length === 1 && "v-overlay theme--dark" === mutation.removedNodes[0].className) {
            console.log("removeNodes event called");
            console.log(mutation.removedNodes[0]);
            return;
        }
        if (mutation.addedNodes.length === 1 && "v-dialog__content v-dialog__content--active dialog-transition-enter dialog-transition-enter-active" === mutation.addedNodes[0].className) {
            const $userCard = mutation.target.querySelector("div.v-card__text.text-center");
            $userCard.addEventListener("click", crewsHandler);
        }
    }

    const crewsHandler = event => {
        const $parent = event.target.parentNode;
        if ($parent.className === "v-list-item__content") {
            onClickCrewHandler($parent);
        }
    }

    const onClickCrewHandler = $parent => {
        const crewName = $parent.querySelector("div.v-list-item__subtitle.caption.text-left").innerText;
        console.log(crewName);

        findSurveyResultByUserName(crewName).then(profile => {
            if (typeof profile === "undefined") {
                alert("프로필이 존재하지 않습니다.");
                throw Error("Profile is not exist");
            }

            let $target = document.querySelector("div.v-dialog.v-dialog--active");
            const backup = $target.innerHTML;
            $target.innerHTML = profileTemplate(profile);

            $target.querySelector("button.absolute.top-30.v-btn.v-btn--flat.v-btn--text.theme--light.v-size--default").addEventListener("click", () => {
                console.log(backup);
                $target.innerHTML = backup;
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    return {
        init
    };
}
