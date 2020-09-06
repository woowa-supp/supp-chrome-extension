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

export const findSurveyResultByUserName = async crewGithubId => await profiles[crewGithubId] == undefined ? undefined : JSON.parse(JSON.stringify(profiles[crewGithubId]));
