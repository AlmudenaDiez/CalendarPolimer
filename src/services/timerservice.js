import {timerInterval} from './timerinterface.js';
import {CHANNEL} from './channel.js';
import PubSub from './pubsub.js';
class TimerService{
    constructor(pubsub, timerinterval, channel){
       this.timerinterval = timerinterval;
        this.handlerinterval = this.timerinterval.setInterval(() => {
            pubsub.pub(channel.CHANNELTIMER, new Date())    
        }, 1000);
        

    }
    dispose(){

        this.timerinterval.clearInterval(this.handlerinterval);
    }
}

export default new TimerService( PubSub, timerInterval(self), CHANNEL);