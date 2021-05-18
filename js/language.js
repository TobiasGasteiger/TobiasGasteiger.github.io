import Translator from "./fw/translator.js";

var translator = new Translator({
  persist: false,
  languages: ["de", "it"],
  defaultLanguage: "it",
  detectLanguage: true,
  filesLocation: "/i18n"
});

translator.load(translator._detectLanguage());

document.getElementById('lang_DE').addEventListener('click', () => {
    translator.load("de");
});

document.getElementById('lang_IT').addEventListener('click', () => {
    translator.load("it");
});