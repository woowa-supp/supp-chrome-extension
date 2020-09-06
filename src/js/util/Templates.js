export const profileTemplate = (profile) => `
<div class="v-dialog v-dialog--active" style="width: 600px;">
  <div class="v-card v-sheet theme--light">
    <div class="v-card__title headline">
      <button type="button" id="back-button"
              class="absolute top-30 v-btn v-btn--flat v-btn--text theme--light v-size--default">
        <span class="v-btn__content">
            <i aria-hidden="true"
               class="v-icon notranslate font-size-14 v-icon--left mdi mdi-arrow-left theme--light"></i> 뒤로
        </span>
      </button>
      <span class="text-center width-100 mt-4">${profile.login}</span>
      <button type="button"
              class="absolute top-30 right-60 v-btn--flat v-btn--text theme--light v-size--default">
        <span class="v-btn__content">
            <img src="${profile.osStyle}" alt="">
        </span>
      </button>
      <button type="button" onClick="window.open('${profile.developerTypeLink}')"
              class="absolute top-30 right-20 v-btn--flat v-btn--text theme--light v-size--default">
        <span class="v-btn__content">
            <img src="${profile.developerTypeImage}" alt="">
        </span>
      </button>
    </div>
    <div class="mx-auto my-3"></div>
    <div class="v-card__text text-center">
      <div>
        <img src="${profile.avatar}"
             alt="">
      </div>
      <br>
      <div class="v-card__title">${profile.messageToCrew}</div>
      <hr>

      <div class="row">
        <div class="col col-12">

          <div class="v-card__title">노트북 사용 선호</div>
          <div class="v-card__text">
            <div class="text-left">
              <div class="tui-editor-contents">
                <p>${profile.computerPrefer}</p>
              </div>
            </div>
          </div>

          <div class="v-card__title">휴식시간</div>
          <div class="v-card__text">
            <div class="text-left">
              <div class="tui-editor-contents">
                <p>${profile.breaktime}</p>
              </div>
            </div>
          </div>

          <div class="v-card__title">페어 교체주기</div>
          <div class="v-card__text">
            <div class="text-left">
              <div class="tui-editor-contents">
                <p>${profile.pairTurn}</p>
              </div>
            </div>
          </div>

          <div class="v-card__title">일과 시간 이후</div>
          <div class="v-card__text">
            <div class="text-left">
              <div class="tui-editor-contents">
                <p>${profile.afterStudy}</p>
              </div>
            </div>
          </div>

          <!--테스트메소드 시작-->
          <div class="v-card__title">테스트 메소드 </div>
          <div class="v-card__text">
            <div class="text-left">
              <div class="tui-editor-contents">
                <div class="input-answer" style="background-color: rgb(63, 68, 71); padding: 2rem;">
                  <p>
                              <span style="font-size: 1.0rem; color: orange">
                                  @DisplayName(<span style="font-size: 1.0rem; color: #fffafa">${profile.testNameFirstAnswer}</span>)<br>
                              </span>
                    <span style="font-size: 1.0rem; color: orange">@Test</span>
                  </p>
                  <p>
                              <span style="font-size: 1.0rem; color: snow">void <span
                                  class="method-name-container">${profile.testNameSecondAnswer}</span> <span
                                  style="color: #fffafa">() {</span> </span><br>
                    <span style="font-size: 1.0rem; color: darkgrey">…</span><br>
                    <span style="font-size: 1.0rem; color: snow">}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--테스트 메소드 끝-->
          <!--깃 커밋 메시지 시작-->
          <div class="v-card__title">깃 커밋 메시지 </div>
          <div class="v-card__text">
            <div class="text-left">
              <div class="tui-editor-contents">
                <div class="input-answer" style="background-color: rgb(63, 68, 71); padding: 2rem;">
                  <span style="font-size: 1.0rem; color: darkgrey">// 기능 구현 커밋 메시지</span><br>
                  <span class="display-name-container" style="font-size: 1.0rem; color: snow">${profile.gitConventionSecondAnswer}</span><br><br>
                  <span style="font-size: 1.0rem; color: darkgrey">// 기능 수정 커밋 메시지</span><br>
                  <span class="display-name-container" style="font-size: 1.0rem; color: snow">${profile.gitConventionFirstAnswer}</span>
                </div>
              </div>
            </div>
          </div>
          <!--깃 커밋 메시지 끝-->
        </div>
      </div>
    </div>
  </div>
</div>
`;
