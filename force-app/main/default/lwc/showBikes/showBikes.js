import { LightningElement,wire, track, api } from 'lwc';
import getCycles from '@salesforce/apex/BikeSellingHandler.getCycles';

export default class ShowBikes extends LightningElement {
    @api contactId = '003B000000EvWCR';
    @track cls = 'slds-text-align_center ';
    @track selectedCycle;
    @track showDetail;
    @track cycleList;
    @track isRender;
    @wire(getCycles, { conId: '$contactId'})
    cycleList;
    
    handleClick(){
        getCycles({conId: this.contactId})
        .then(result => {
          this.isRender = true;
          this.cycleList = result;
          // eslint-disable-next-line no-console
          console.log('cycleList !!@@ '+JSON.stringify(this.cycleList));
        })
        .catch(error => {
            // eslint-disable-next-line no-console
            console.log(error);
        }); 
    }
    handleImageClick(event){
        this.cls += 'slds-theme_shade';
      const title = event.target.title;
      // eslint-disable-next-line no-alert
      //alert(title);
      this.showDetail = true;
      const selectedCycle = this.cycleList.data.find(cycle => cycle.Id === title);
      this.selectedCycle = selectedCycle;
      // eslint-disable-next-line no-alert
      //alert('selectedCycle !!@@ '+JSON.stringify(selectedCycle));
    }
}