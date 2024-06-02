// eslint.config.js
module.exports = {
  files: ["**/*.js"], 
  languageOptions: {
    ecmaVersion: 2021, 
    sourceType: "module", 
    globals: { 
      window: "readonly",
      document: "readonly",
      process: "readonly"
    }
  },
  plugins: {
    sonarjs: {} 
  },
  rules: {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
        
  }
};
