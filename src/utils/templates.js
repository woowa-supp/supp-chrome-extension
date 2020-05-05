export const profileTemplate = profile => 
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
