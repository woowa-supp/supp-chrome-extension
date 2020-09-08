export const BASE_URL = 'https://d10qlfpm4ciz64.cloudfront.net';

export const EVENT_TYPE = {
  CLICK: 'click',
};

const BASE_RESOURCE_PATH = 'src/assets/images';
const BASE_LINK_PATH = `developer`;

export const OS_STYLE_IMAGE_MAP = {
  APPLE: `${BASE_RESOURCE_PATH}/os/apple.png`,
  LINUX: `${BASE_RESOURCE_PATH}/os/linux.png`,
  WINDOWS: `${BASE_RESOURCE_PATH}/os/windows.png`,
}

export const PROFILE_IMAGE_MAP = {
  CODE_GUARDIAN: {
    resourcePath: `${BASE_RESOURCE_PATH}/type/CODE_GUARDIAN.png`,
    linkPath: `${BASE_LINK_PATH}/code_guardian`,
  },
  MACGYVER: {
    resourcePath: `${BASE_RESOURCE_PATH}/type/MACGYVER.png`,
    linkPath: `${BASE_LINK_PATH}/macgyver`,
  },
  MAD_SCIENTIST: {
    resourcePath: `${BASE_RESOURCE_PATH}/type/MAD_SCIENTIST.png`,
    linkPath: `${BASE_LINK_PATH}/mad_scientist`,
  },
  NINJA: {
    resourcePath: `${BASE_RESOURCE_PATH}/type/NINJA.png`,
    linkPath: `${BASE_LINK_PATH}/ninja`,
  },
  THE_ARCHITECT: {
    resourcePath: `${BASE_RESOURCE_PATH}/type/THE_ARCHITECT.png`,
    linkPath: `${BASE_LINK_PATH}/the_architect`,
  },
};

export const COMPUTER_SELECT_RULE = {
  MY_COMPUTER: '제꺼... 쓰고... 싶어요...!',
  PAIR_COMPUTER: '그거... 쓰면... 안될까요...?',
  DONT_CARE: '그런것엔 신경쓰지 않아요.',
  IN_TURN: '각자 컴퓨터로 push & pull 합시다!',
};

export const BREAK_TIME = {
  NO_BREAK: '쭉 달려도 괜찮아요. 🏃‍♀🏃‍♂ 페어가 쉬고 싶을때 쉴게요!',
  SCHEDULED_BREAK: '저는 일정 시간마다 쉬어야 합니다.',
  DONT_CARE: '저는 뭐... 상관 없습니다.',
};

export const AFTER_STUDY_STYLE = {
  MORE_PAIR: '밥먹고 더할까요?',
  WRAP_UP: '내일 마무리 해보죠.',
  WAIT_PAIR_SUGGESTION: '상대방의 말을 기다린다.',
};

export const PAIR_CHANGE_PERIOD = {
  TURN_BY_TIME: '시간을 정해서 돌아간다.',
  TURN_BY_FUNCTION: '기능을 정해서 돌아간다.',
  DONT_CARE: '상관 없다.',
};
