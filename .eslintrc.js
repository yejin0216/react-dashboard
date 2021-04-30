module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    'react/jsx-filename-extension': [0],
    'react/jsx-props-no-spreading': 0,
    'prettier/prettier': 0,
    'no-return-await': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,

    'react/prop-types': 0
  },
  extends: ['airbnb', 'plugin:prettier/recommended']
  // 다른 config를 사용하더라도 prettier를 맨 마지막에 넣어야 모든 중복 규칙을 비활성화 시킬 수 있다.
};
