import { BASE_URL } from '../../utils/constants.js';

const api = (() => {

    const request = async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error('프로필을 찾지 못했습니다.');
        }
        return response.json();
    }

    const profile = {
        get(crewName) {
            return request(`${BASE_URL}/api/v1/survey-result/${crewName}`);
        },
    };

    return {
        profile,
    };
})();

export default api;
