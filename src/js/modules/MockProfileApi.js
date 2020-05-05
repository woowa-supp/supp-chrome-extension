const profiles = {
    "KS-KIM": profileTemplate("KS-KIM", "닌자", "MAC OS", "아무거나", "빈백조아", "기능단위로 진행", "6시 이후에는 페어 진행하지 않기", "테스트 명명법"),
    "toneyparky": profileTemplate("toneyparky", "아키텍트", "MAC OS", "아무거나", "빈백매우조아", "5분 간격으로 진행", "6시 이후에도 쌉가능", "테스트 명명법"),
    "lalize": profileTemplate("lalize", "아키텍트", "MAC OS", "아무거나", "빈백매우조아", "5분 간격으로 진행", "6시 이후에도 쌉가능", "테스트 명명법")
}

function profileTemplate(name, devType, osStyle, computerPrefer, breaktime, pairTurn, afterStudy, testName) {
    return {
        "login": name,
        "devType": devType,
        "computerPrefer": computerPrefer,
        "breaktime": breaktime,
        "pairTurn": pairTurn,
        "afterStudy": afterStudy,
        "testName": testName
    }
}

export const findSurveyResultByUserName = async crewGithubId => await profiles[crewGithubId];