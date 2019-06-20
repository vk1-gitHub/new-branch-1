import { LightningElement,track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { fireEvent } from 'c/pubsub';

export default class SearchComponent extends LightningElement {
    @track selectedData = [];
    @wire(CurrentPageReference) pageRef;
    getInputValues(){
      var inputValue = this.template.querySelector('lightning-input').value;
      fireEvent(this.pageRef, 'getobjectsname', {detail :
               {selectedRadio : this.selectedData.selectedRadio, selectedObj : this.selectedData.selectedObj,
                searchTxt : inputValue},
      });
    }
    connectedCallback() {
      // subscribe to getobjectsname event
          registerListener('getobjectsname', this.handleSelect, this);
    }
    disconnectedCallback() {
      // unsubscribe from getobjectsname event
      unregisterAllListeners(this);
    }
    handleSelect(event){
      this.selectedData = event.detail;
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(this.selectedData)); 
    }
}