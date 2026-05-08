// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const inputButton = document.querySelector("button");
  const inputTxt = document.querySelector("textarea");
  const voiceSelect = document.querySelector("select");
  const imageSelect = document.querySelector("img");
  
  let voices = [];
  
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
  
      if (voice.default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  inputButton.onclick = (event) => {
    event.preventDefault();
  
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }

    utterThis.onstart = (event) => {
      imageSelect.src = "assets/images/smiling-open.png";
    };

    utterThis.onend = (event) => {
      imageSelect.src = "assets/images/smiling.png";
    };
    
    synth.speak(utterThis);
  };
}
