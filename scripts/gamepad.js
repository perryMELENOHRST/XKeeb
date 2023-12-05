const keys = {
  KEY_W: "W",
  KEY_A: "A",
  KEY_S: "S",
  KEY_D: "D",
  KEY_SPACE: "space",
  KEY_ENTER: "enter",
}
const  Keymap = {
  FORWARD: keys.KEY_W,
  BACKWARDS: keys.KEY_S,
  LEFT: keys.KEY_A,
  RIGHT: keys.KEY_D,
  SPACE: keys.KEY_SPACE,
}
window.addEventListener("keydown", (e)=>{
  console.log(e.key)
})  


window.addEventListener("gamepadconnected", (e) => {
    console.log(
      "Gamepad connected at index %d: %s. %d buttons, %d axes.",
      e.gamepad.index,
      e.gamepad.id,
      e.gamepad.buttons.length,
      e.gamepad.axes.length,
    );
  });