/* modules area */
// import { findSurveyResultByUserName } from "./modules/MockProfileApi.js";
// import { MUTATION_OBSERVE_CONFIG } from "../utils/constants.js";
// import { profileTemplate } from "../utils/templates.js";

const profileImageMap = {
  "apple": "src/images/os/apple.png",
  "linux": "src/images/os/linux.png",
  "windows": "src/images/os/windows.png",
  "code_guardian": "src/images/type/CODE_GUARDIAN.png",
  "macgyver": "src/images/MACGYVER.png",
  "mad_scientist": "src/images/type/MAD_SCIENTIST.png",
  "ninja": "src/images/type/NINJA.png",
  "the_architect": "src/images/type/THE_ARCHITECT.png"
};

const profileTemplate = profile =>
  `
<div class="v-dialog v-dialog--active" style="width: 600px;">
    <div class="v-card v-sheet theme--light">
        <div class="v-card__title headline">
            <button type="button" id="back-button" class="absolute top-30 v-btn v-btn--flat v-btn--text theme--light v-size--default">
                <span class="v-btn__content">
                    <i aria-hidden="true" class="v-icon notranslate font-size-14 v-icon--left mdi mdi-arrow-left theme--light"></i> 뒤로
                </span>
            </button>
            <span class="text-center width-100 mt-4">${profile["login"]}</span> 
            <button type="button" id="back-button" class="absolute top-30 right-60 v-btn--flat v-btn--text theme--light v-size--default">
                <span class="v-btn__content">
                        <img src="${chrome.runtime.getURL(profileImageMap[profile["osStyle"]])}" alt="">
                </span>
            </button>
            <button type="button" id="back-button" class="absolute top-30 right-20 v-btn--flat v-btn--text theme--light v-size--default">
                <span class="v-btn__content">
                        <img src="${chrome.runtime.getURL(profileImageMap[profile["developerType"]])}" alt="">
                </span>
            </button>
        </div>
        <div class="mx-auto my-3"></div>
        <div class="v-card__text text-center">
            <div>
                <img src="https://avatars1.githubusercontent.com/u/20358042?s=400&u=cf1c0ad6fabec31beea9f2d5a64700e0d2f81203&v=4" alt="">            
            </div>
            <br>
            <div class="v-card__title">${profile["messageToCrew"]}</div>
            <hr>
            
            <div class="row">
                <div class="col col-12">

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
<!--테스트메소드 시작-->
                         <div class="input-answer" style="background-color: rgb(63, 68, 71); padding: 2rem;">
                          <p>
                          <span style="font-size: 1.25rem; color: orange" >
                            @DisplayName(
                            <span style="font-size: 1.25rem; color: #fffafa">
                                "DisplayName을 사용하지 않는다면 작성하지 않아도 됩니다."
                            </span>
                            )<br>
                         </span> 
                         <span style="font-size: 1.25rem; color: orange">@Test</span>
                         </p>
                         <p>
                         <span style="font-size: 1.25rem; color: snow">void <span class="method-name-container">${profile["testName"]}</span> <span style="color: #fffafa">() {</span> </span><br>
                         <span style="font-size: 1.25rem; color: darkgrey">…</span><br>
                         <span style="font-size: 1.25rem; color: snow">}</span>
                         </p>
                        </div>                        
                            </div>
                </div>
<!--테스트 메소드 끝-->
<!--깃헙 커밋 메시지 시작-->
                <div class="v-card__title">깃헙 커밋 메시지 </div>
                <div class="v-card__text">
                    <div class="text-left">
                        <div class="tui-editor-contents">
                            <div class="input-answer" style="background-color: rgb(63, 68, 71); padding: 2rem;">
                               <p style="color: orange; font-size: 1.25rem">
                               public void printCars(Cars cars) { <br>
                               ...
                               <br>
                               <span class="display-name-container" style="font-size: 1.25rem; color: snow">${profile["gitConvention"]}</span>
                               </p>
                               
                               
                               <p style="color: orange; font-size: 1.25rem">
                               public Cars create() { <br>
                               ...
                               <br>
                               <span class="method-name-container" style="font-size: 1.25rem; color: snow">${profile["gitConvention"]}</span> 
                               </p>
                              </div>
                        </div>
                    </div>
                </div>
<!--깃헙 커밋 메시지 끝-->                
                </div>
            </div>
        </div>
    </div>
</div>
`;

/* template, constant area */
const MUTATION_OBSERVE_CONFIG = {
  attributes: true,
  childList: true,
  characterData: true
};

const profiles = {
  "ks-kim": generateProfileData("ks-kim", "ninja", "apple", "아무거나", "빈백조아", "기능단위로 진행", "6시 이후에는 페어 진행하지 않기", "들어갈 값들이 있다.", "들어갈 값들이 있다.", "나는 멋쟁이"),
  "toneyparky": generateProfileData("toneyparky", "the_architect", "windows", "아무거나", "빈백매우조아", "5분 간격으로 진행", "6시 이후에도 쌉가능", "들어갈 값들이 있다.", "들어갈 값들이 있다.", "코딩이 행복한 남자 코행남"),
  "lalize": generateProfileData("lalize", "the_architect", "linux", "아무거나", "빈백매우조아", "5분 간격으로 진행", "6시 이후에도 쌉가능", "들어갈 값들이 있다.", "feature: ", "헬스보이")
}

function generateProfileData(name, developerType, osStyle, computerPrefer, breaktime, pairTurn, afterStudy, testName, gitConvention, messageToCrew) {
  return {
    "login": name,
    "developerType": developerType,
    "osStyle": osStyle,
    "computerPrefer": computerPrefer,
    "breaktime": breaktime,
    "pairTurn": pairTurn,
    "afterStudy": afterStudy,
    "testName": testName,
    "gitConvention": gitConvention,
    "messageToCrew": messageToCrew
  }
}

// @TODO Replace to fetch api call
async function findSurveyResultByUserName(crewGithubId) {
  return await profiles[crewGithubId];
}

/* application area */
function ProfileExtension() {
  const $observeTarget = document.querySelector("#app.v-application");

  const onClickCrewHandler = $parent => {
    const crewName = $parent.querySelector("div.v-list-item__subtitle.caption.text-left").innerText;
    findSurveyResultByUserName(crewName).then(profile => {
      if (typeof profile === "undefined") {
        alert("프로필이 존재하지 않습니다.");
        throw Error("Profile is not exist");
      }

      let $cardBody = document.querySelector("div.v-dialog__content.v-dialog__content--active");
      let $target = document.querySelector("div.v-dialog.v-dialog--active");

      $target.style.display = "none";
      $cardBody.insertAdjacentHTML("beforeend", profileTemplate(profile));

      $cardBody.querySelector("#back-button").addEventListener("click", () => {
        $target.style.display = "";
        $cardBody.removeChild($cardBody.lastElementChild);
      });
    })
      .catch((e) => {
        console.log(e);
      });
  }

  const crewsHandler = event => {
    const $parent = event.target.parentNode;
    if ($parent.className === "v-list-item__content") {
      onClickCrewHandler($parent);
    }
  }

  function addEventListenerToCrews(mutation) {
    if (mutation.removedNodes.length === 1 && "v-overlay theme--dark" === mutation.removedNodes[0].className) {
      return;
    }
    if (mutation.addedNodes.length === 1 && "v-dialog__content v-dialog__content--active dialog-transition-enter dialog-transition-enter-active" === mutation.addedNodes[0].className) {
      const $userCard = mutation.target.querySelector("div.v-card__text.text-center");
      $userCard.addEventListener("click", crewsHandler);
    }
  }

  function onMutationEventHandler(mutations) {
    try {
      addEventListenerToCrews(mutations[0]);
      // todo 추가 기능
    } catch (e) {
      console.log(e);
    }
  }

  function initMutationObserver() {
    const observer = new MutationObserver(onMutationEventHandler);
    observer.observe($observeTarget, MUTATION_OBSERVE_CONFIG);
  }

  const init = () => {
    initMutationObserver();
    $observeTarget.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.className !== "v-overlay__scrim") {
        return;
      }
      if (event.target.childList !== undefined) {
        return;
      }
      let $cardBody = document.querySelector("div.v-dialog__content.v-dialog__content--active");
      if ($cardBody.childElementCount === 2) {
        $cardBody.removeChild($cardBody.lastElementChild);
      }
    });
  };

  return {
    init
  };
}

const profileExtension = new ProfileExtension();
profileExtension.init();