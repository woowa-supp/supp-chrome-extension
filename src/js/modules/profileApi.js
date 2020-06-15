const BASE_URL = 'https://d10qlfpm4ciz64.cloudfront.net/api/v1';
const DEV_TYPE_IMAGE_URL = 'http://52.78.188.23:8080/';

const api = (() => {
    const request = (url) =>
        fetch(url).then((response) => {
            console.log(url, response);
            if (!response.ok) {
                throw Error('프로필을 찾지 못했습니다.');
            }
            return response.json();
        });
    const profile = {
        get(crewId) {
            return request(`${BASE_URL}/survey-result/${crewId}`);
        },
    };

    return {
        profile,
        DEV_TYPE_IMAGE_URL,
    };
})();

export default api;
