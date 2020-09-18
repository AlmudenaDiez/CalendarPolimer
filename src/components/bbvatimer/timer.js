import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import PubSub from '../../services/pubsub.js';
import {CHANNEL} from '../../services/channel.js';
class TimerComponent extends PolymerElement {
constructor(){
    super();
    PubSub.suscribe(CHANNEL.CHANNELTIMER, (date) =>this.date = date);
}

    static get template() {
        return html`
          <div>
          {{date}}
          </div>
        `
      }
}

customElements.define("bbva-timer", TimerComponent);