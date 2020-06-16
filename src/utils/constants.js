export const MUTATION_OBSERVE_CONFIG = {
    attributes: true,
    childList: true,
    characterData: true,
};

export const EVENT_TYPE = {
    CLICK: 'click',
};

export const PROFILE_IMAGE_MAP = {
    APPLE: 'src/assets/images/os/apple.png',
    LINUX: 'src/assets/images/os/linux.png',
    WINDOWS: 'src/assets/images/os/windows.png',
    CODE_GUARDIAN: {
        resourcePath: 'src/assets/images/type/CODE_GUARDIAN.png',
        linkPath: '/developer/code_guardian',
    },
    MACGYVER: {
        resourcePath: 'src/assets/images/MACGYVER.png',
        linkPath: '/developer/macgyver',
    },
    MAD_SCIENTIST: {
        resourcePath: 'src/assets/images/type/MAD_SCIENTIST.png',
        linkPath: '/developer/mad_scientist',
    },
    NINJA: {
        resourcePath: 'src/assets/images/type/NINJA.png',
        linkPath: '/developer/ninja',
    },
    THE_ARCHITECT: {
        resourcePath: 'src/assets/images/type/THE_ARCHITECT.png',
        linkPath: '/developer/the_architect',
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
