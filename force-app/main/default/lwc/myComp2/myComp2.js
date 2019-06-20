import { LightningElement,track,  wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';


export default class MyComp2 extends LightningElement {
    @track firstName;
    @track lastName;
    @wire(CurrentPageReference) pageRef; // Required by pubsub
	connectedCallback() {
		// subscribe to bearListUpdate event
		registerListener('bearListUpdate', this.handleBearListUpdate, this);
	}
	disconnectedCallback() {
		// unsubscribe from bearListUpdate event
		unregisterAllListeners(this);
    }
    handleBearListUpdate(event){
       this.firstName = event.detail.firstName;
       this.lastName = event.detail.lastName;
       // eslint-disable-next-line no-console
       console.log('Event '+JSON.stringify(event));
       // eslint-disable-next-line no-console
       console.log('Event Detail : '+JSON.stringify(event.detail));
    }
}