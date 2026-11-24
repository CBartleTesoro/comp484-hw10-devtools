$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.pet-button').click(clickedPetButton);
    $('.feed-button').click(clickedfeedButton);

     $('.button-404').click(clicked404Button);

    // Unique 2: Toggleclass() and hover().
    //Toggleclass and hover are used here so when the mouse hovers over the cat image, it triggers a change. Toggle is what makes that change possible, toggling it on/off depending if the mouse is still over the image.
    $('.pet-image').hover(function() {
      $(this).toggleClass('pet-hover'); 
    });

    //Easter egg for when one clicks the image
    $('.pet-image').click(clickedImage);
    
})
  
  // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
  var pet_info = {name:"Stuart", weight: 12, happiness: 80 }; //Using values of 0 to 100 for happiness, 0 to 20 for weight.

  var petCommentTimeout; //So the comment reaction to buttons are timed, not permanent.

  var petSound = new Audio(); //So we can play cat sounds.
  
  function clickedTreatButton() {
    // Increase pet happiness
    pet_info.happiness += 10;
    // Increase pet weight
    pet_info.weight += 4; 
    checkAndUpdatePetInfoInHtml();
    updatePetComment("Meow!, Nom Nom Nom", "images/stuart8.webp", "sounds/stuartPurring.mp4");
  }
    
  function clickedPlayButton() {  
    // Increase pet happiness
    pet_info.happiness += 10;
    // Decrease pet weight
    pet_info.weight -= 2; 
    checkAndUpdatePetInfoInHtml();
    updatePetComment("Meow! The mouse must die!", "images/stuart6.webp", "sounds/meow2s.mp4");
  }
    
  function clickedExerciseButton() {
    // Decrease pet weight
    pet_info.weight -= 2; //decrease weight by 1 when exersising.
    // Decrease pet happiness
    pet_info.happiness -= 10;
    checkAndUpdatePetInfoInHtml();
    updatePetComment("Meow meow...mrrrrroooowww!", "images/stuart3.webp", "sounds/meow3.mp4");
  }

  function clickedPetButton(){ //new
    pet_info.happiness += 10;
    checkAndUpdatePetInfoInHtml();
    updatePetComment("Purr...purr", "images/pets2.webp", "sounds/stuartPurring.mp4");
  }
  
    
  function clickedfeedButton(){ //new
    pet_info.weight += 4;
    checkAndUpdatePetInfoInHtml();
    updatePetComment("Nom nom nom", "images/stuart.webp", "sounds/meow2s.mp4");
  }

  //For the little easter egg of clicking on stuart.
  function clickedImage(){
    updatePetComment("STARE INTO THE VOID!", "images/stuartPOSSESED.webp", "sounds/meow3.mp4");
  }
  

  function updatePetComment(comment, image, sound) { //Shows the comment, plays the sound, and changes the immage, for 3 seconds, before reverting to the default state.
    $('.pet-comment').text(comment);
    $('.pet-comment').toggleClass('is-visible', true);  // show comment
    $('.pet-image').attr('src', image);//Change stuart image when button is pressed, for the duration of the comment.

    clearTimeout(petCommentTimeout); //if a button is pressed before the current comment/sound ends, it clears its timeout(cancels it)

    petCommentTimeout = setTimeout(function() {
     $('.pet-comment').toggleClass('is-visible', false); 
     $('.pet-image').attr('src', 'images/stuart.webp');
    }, 3000); // Hide the comment after 3000 ms, or 3 seconds, and then change the image back to the original.


    //Sound effect.
    petSound.pause(); //to stop any ongoing sound.(from a previous button press)
    petSound.currentTime = 0; //reset timer
    petSound.src = sound; //assign new sound
    petSound.play(); //Play sound (the sound bits are at most 3s long, so they do not go beyond the regular 3 second comment. Should the comment timer be changed, so must the sounds.)

  }

  

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
    
  function checkWeightAndHappinessBeforeUpdating() {
    // Add conditional so if weight is lower than zero.
    if(pet_info.weight < 0){
      pet_info.weight = 0;
    }
    else if(pet_info.weight > 20){
      pet_info.weight = 20;
    }

    if(pet_info.happiness < 0){
      pet_info.happiness = 0;
    }
    else if(pet_info.happiness > 100){
      pet_info.happiness = 100;
    }

  }
    
  // Updates your HTML with the current values in your pet_info object
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
  }
  
document.querySelector('.treat-button').addEventListener('click', () => {
  console.log('delicious treat, now in Console!');
  console.info('Treat for the developer!')
});


document.querySelector('.play-button').addEventListener('click', logWarning);

function logWarning() {
  quoteStuart();
}

function quoteStuart() {
  console.warn('Meow, this is a warning!');
}


document.querySelector('.pet-image').addEventListener('click', () => {
  console.error(`STARE INTO THE VOID, DEVELOPER!.`);
});



document.querySelector('.exercise-button').addEventListener('click', () => {
  console.table(pet_info);
});


document.querySelector('.group').addEventListener('click', () => {
  const label = 'Group of logs';
  console.group(label);
});

document.querySelector('.groupEnd').addEventListener('click', () => {
  const label = 'Group of logs end';
   console.groupEnd(label);
});


document.querySelector('.pet-button').addEventListener('click', () => {
  const label = 'Cat timeline';
  console.group(label);
  console.info('Michelin');
  console.info('Turbo');
  console.info('Mimi');
  console.info('Stuart');
  console.groupEnd(label);
});

document.querySelector('.custom').addEventListener('click', () => {
  const spacing = '5px';
  const styles = 
        `padding: ${spacing}; background-color: darkblue; color: white; font-style: 
         italic; border: ${spacing} solid crimson; font-size: 2em;`;
  console.log('%c Black is the new orange, meow!', styles);
}); //Applied same color scheme as example, but changed the contents.


//For the part 2 2 typeerror
document.querySelector('.feed-button').addEventListener('click', () => {
  document.querySelector('#date').textContent = new Date();
});

document.querySelector('.violation').addEventListener('click', (e) => {
  const duration = 5000;
  const start = new Date().getTime();
  while (new Date().getTime() < start + duration) {
    // Block the main thread for 5 seconds.
  }
}); //same code as guide but different timing, linked to a new button.

/////////////////////////////////
function clicked404Button(){
  //Do nothing
}


document.querySelector('.button-404').addEventListener('click', (e) => {
  fetch('./images/cat-file-that-does-not-exist.webp');
});


