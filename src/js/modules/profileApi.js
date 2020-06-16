const BASE_URL = 'https://d10qlfpm4ciz64.cloudfront.net';
const API_BASE_URL = BASE_URL + '/api/v1';

const api = (() => {
    const request = (url) =>
        fetch(API_BASE_URL + url).then((response) => {
            if (!response.ok) {
                throw Error('프로필을 찾지 못했습니다.');
            }
            return response.json();
        });
    const profile = {
        get(crewId) {
            return request(`/survey-result/${crewId}`);
        },
    };

    return {
        profile,
        BASE_URL,
    };
})();

export default api;
