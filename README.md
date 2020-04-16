# supp-chrome-extension

## 기능목록

* techcourse.woowahan.com 미션 페이지에 접속하면 지정된 script를 실행한다.
* '나의 팀' 버튼을 클릭했을 때 DOM 변화를 감지하여 페어의 아이디를 parsing한다.
    * 다른 미션을 눌렀을 때 client rendering이 이루어져 기존에 지정한 element가 더이상 존재하지 않을 수 있다.
    * `MutationObserver`를 통해 DOM 변화를 감지하도록 한다.