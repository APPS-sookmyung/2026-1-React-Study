import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },

    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
      "no-unused-vars": "off", // 코드상에 실제로 사용하지 않는 변수의 오류를 알려줌
      "react/prop-types": "off", // prop-types는 컴포넌트의 props에 대한 타입 검사를 해주는 라이브러리인데, React 15.5 이후로는 별도의 패키지로 분리되어서 사용되고 있음. 이 규칙을 끄면 prop-types를 사용하지 않아도 오류가 발생하지 않음
    },

  },
])
