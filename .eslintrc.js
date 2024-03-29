module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/no-v-model-argument": "off",
    'no-useless-return':'off',
    'no-unused-vars':'off',
    'no-underscore-dangle':0,
    'prefer-destructuring':'off',
    'camelcase':'off',
    'no-unused-expressions':'off',
    'no-script-url':'off',
    "import/first":'off',
    "no-param-reassign":"off",
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'no-plusplus': 'off',
    'vue/comment-directive': 0,
    "consistent-return":"off"
  },
  settings: {},
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineComponent: 'readonly',
    defineExpose: 'readonly'
  },
}
