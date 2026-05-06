// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  import JSConfetti from 'js-confetti';
  // Select dropdown change audio plus photo event
  const input = document.getElementsByName("horn");
  input.addEventListener("input", () => {
    const value = input.value;
    const photo = "./assets/images/" + value + ".svg";
    const audio = "./assets/audio/" + value + ".mp3"

    const imageSelect = document.querySelector('img');
    const audioSelect = document.querySelector('audio');
    
    imageSelect.src = photo;
    imageSelect.alt = "Image of " + value;
    audioSelect.src = audio;
  });

  //play music when press button, confetti in special cases
  const button =  document.querySelector("button");
  button.addEventListener("click", ()=>{
    input = document.getElementsByName("horn").value;
    if(input == "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    document.querySelector("audio").play();
  });

  //adding the right images, chnaging volume
  const volumeInput = document.querySelector("input");
  volumeInput.addEventListener("change", ()=>{
    const audioSelect = document.querySelector('audio');
    const volume = volumeInput.value;
    audioSelect.volume = volume/100;

    const volumeImage = document.querySelector("#volume-controls img");
    if(volume == 0){
      volumeImage.src = "./assets/icons/volume-level-0.svg";
      volumeImage.alt = "Volume level 0";
    }
    else if(volume < 33){
      volumeImage.src = "./assets/icons/volume-level-1.svg";
      volumeImage.alt = "Volume level 1";
    }
    else if(volume < 67){
      volumeImage.src = "./assets/icons/volume-level-2.svg";
      volumeImage.alt = "Volume level 2";
    }
    else{
      volumeImage.src = "./assets/icons/volume-level-3.svg";
      volumeImage.alt = "Volume level 3";
    }
  });
}