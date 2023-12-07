
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
        console.log(eventConnect)
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