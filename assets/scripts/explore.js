// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // voice generation within the dropdown
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();
    let index  = 0;
    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      option.value = index;
      index++;
      voiceSelect.appendChild(option);
    }
  }

  // Some browsers load voices async
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList();
  }

  // Press to talk function
  const clickToPlay = document.querySelector("button");
  clickToPlay.addEventListener("click", ()=>{
    const textToSpeak = document.querySelector("select[name='text-to-speak']");
    const smilingImage = document.querySelector("img");

    const messageObject = new SpeechSynthesisUtterance(textToSpeak.value);

    //Finding the index the new value is from, since it would mtach the voices list given
    let index1 = voiceSelect.value; 
    messageObject.voice = voices[index1];

    //creating the before and after changes of when the voice speaks
    messageObject.onstart = () => {
      smilingImage.src = "./assets/images/smiling-open.png";
    };

    messageObject.onend = () => {
      smilingImage.src = "./assets/images/smiling.png";
    };

    //Speaking it
    speechSynthesis.speak(messageObject);

  })
}
