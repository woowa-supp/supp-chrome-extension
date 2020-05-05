export const findSurveyResultByUserName = async crewGithubId => {
    const response = await fetch(`http://localhost:8080/api/v1/survey-result/${crewGithubId}`);
    return await response.json();
}
