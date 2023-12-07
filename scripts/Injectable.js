// Have to set event listens first due to order of add event lister
const mappings = {
  JOY: {
      NONE: "joy_none",
      LEFT: {
          FORWARD: "joy_left_FORWARD_DOWN",
          BACK: "joy_left_BACKWARD_DOWN",
          LEFT: "joy_left_LEFT_DOWN",
          RIGHT: "joy_left_RIGHT_DOWN",
          FORWARDUP: "joy_left_FORWARD_UP",
          BACKUP: "joy_left_BACKWARD_UP",
          LEFTUP: "joy_left_LEFT_UP",
          RIGHTUP: "joy_left_RIGHT_UP",
      },
      RIGHT: {
          FORWARD: "joy_right_FORWARD_DOWN",
          BACK: "joy_right_BACKWARD_DOWN",
          LEFT: "joy_right_LEFT_DOWN",
          RIGHT: "joy_right_RIGHT_DOWN",
          FORWARDUP: "joy_right_FORWARD_UP",
          BACKUP: "joy_right_BACKWARD_UP",
          LEFTUP: "joy_right_LEFT_UP",
          RIGHTUP: "joy_right_RIGHT_UP",
      }
  }
}
class Keymap{
    keymap = {LEFTJOY_FORWARD: '', LEFTJOY_BACKWARD: '', LEFTJOY_LEFT: '', LEFTJOY_RIGHT: ''}
    constructor(forward, backward, left, right){
        this.keymap = {LEFTJOY_FORWARD: forward, LEFTJOY_BACKWARD: backward, LEFTJOY_LEFT: left, LEFTJOY_RIGHT: right}
    }
    remap(forward, backward, left, right){
        this.keymap = {LEFTJOY_FORWARD: forward, LEFTJOY_BACKWARD: backward, LEFTJOY_LEFT: left, LEFTJOY_RIGHT: right}
    }
    handelButtonPress(e){
        switch (e) {
            case this.keymap.LEFTJOY_FORWARD:
                return mappings.JOY.LEFT.FORWARD    
            break;
            case this.keymap.LEFTJOY_BACKWARD:
                return mappings.JOY.LEFT.BACK
            break;
            case this.keymap.LEFTJOY_LEFT:
                return mappings.JOY.LEFT.LEFT
            break;
            case this.keymap.LEFTJOY_RIGHT:
                return mappings.JOY.LEFT.RIGHT
            break;
        
            default:
                return 'none' 
                break;
        }
    }
    handelButtonUP(e){
        switch (e) {
            case this.keymap.LEFTJOY_FORWARD:
                return mappings.JOY.LEFT.FORWARDUP   
            break;
            case this.keymap.LEFTJOY_BACKWARD:
                return mappings.JOY.LEFT.BACKUP
            break;
            case this.keymap.LEFTJOY_LEFT:
                return mappings.JOY.LEFT.LEFTUP
            break;
            case this.keymap.LEFTJOY_RIGHT:
                return mappings.JOY.LEFT.RIGHTUP
            break;
        
            default:
                return mappings.JOY.NONE
            break;
        }
    }
}
const Vgamepad = {
    axes: [0, 0, 0, 0],
    buttons: [
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      },
      {
        pressed: false,
        touched: false,
        value: 0
      }
    ],
    connected: false,
    id: "Xkeeb VControler",
    index: 0,
    mapping: "standard",
    timestamp: Math.floor(Date.now() / 1000)
  }

class GamepadEmu {
    constructor(){
        const eventConnect = new Event("gamepadconnected")
        eventConnect.gamepad = Vgamepad
        window.dispatchEvent(eventConnect)
        navigator.getGamepads = ()=>{
            return {
                0: Vgamepad,
            }
        }
        
    }
    handelInput(event){
        switch (event) {
            case mappings.JOY.LEFT.FORWARD:
                Vgamepad.axes[0] = 1
                Vgamepad.timestamp = Math.floor(Date.now() / 1000);    
            break;
            case mappings.JOY.LEFT.BACK:
                Vgamepad.axes[0] = -1
                Vgamepad.timestamp = Math.floor(Date.now() / 1000);    
            break;
            case mappings.JOY.LEFT.LEFT:
                Vgamepad.axes[1] = 1
                Vgamepad.timestamp = Math.floor(Date.now() / 1000);    
            break;
            case mappings.JOY.LEFT.RIGHT:
                Vgamepad.axes[1] = -1
                Vgamepad.timestamp = Math.floor(Date.now() / 1000);    
            break;
            case mappings.JOY.LEFT.FORWARDUP:
                Vgamepad.axes[0] = 0
                Vgamepad.timestamp = Math.floor(Date.now() / 1000);    
            break;
            case mappings.JOY.LEFT.BACKUP:
                Vgamepad.axes[0] = 0
                Vgamepad.timestamp = Math.floor(Date.now() / 1000);    
            break;
            case mappings.JOY.LEFT.LEFTUP:
                Vgamepad.axes[1] = 0
                Vgamepad.timestamp = Math.floor(Date.now() / 1000);    
            break;
            case mappings.JOY.LEFT.RIGHTUP:
                Vgamepad.axes[1] = 0
                Vgamepad.timestamp = Math.floor(Date.now() / 1000);    
            break;
        
            default:
                break;
        }
    }
}

let p;
window.addEventListener("gamepadconnected", (e)=>{
    p = e.gamepad
    console.log(navigator.getGamepads())
})

const gamepad = new GamepadEmu()
const keymap = new Keymap("W", "S", "A", "D")

window.addEventListener("keydown", (e)=>{
  const key = e.key.toUpperCase()
  gamepad.handelInput(keymap.handelButtonPress(key))
  //console.log(p.axes[0])
  console.log(`X: ${p.axes[0]}, Y: ${p.axes[1]}`)
  
  
})
window.addEventListener("keyup", (e)=> {
  const key = e.key.toUpperCase()
  gamepad.handelInput(keymap.handelButtonUP(key))
})