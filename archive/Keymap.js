
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