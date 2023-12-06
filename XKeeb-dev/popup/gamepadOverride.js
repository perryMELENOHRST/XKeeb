// gamepadOverride.js
Object.defineProperty(navigator, 'getGamepads', {
  value: function() {
      return [Vgamepad]; // Vgamepad is your custom gamepad object
  }
});
console.log("TEMP")
