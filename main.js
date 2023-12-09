let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #75E6E4;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #1F8ACB;">Futura matemática y hábil tejedora xD.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
