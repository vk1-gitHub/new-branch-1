import { LightningElement, track, wire} from 'lwc';
import getWrapData from '@salesforce/apex/TestWrapperInLWC.getWrapData';
import getWrapData2 from '@salesforce/apex/TestWrapperInLWC.getWrapData2';
import getWrapData3 from '@salesforce/apex/TestWrapperInLWC.getWrapData3';
import { loadScript} from 'lightning/platformResourceLoader';
import JQuery from '@salesforce/resourceUrl/JQuery';


export default class TabLwcComp extends LightningElement {
    @wire(getWrapData) wrapRecord;
    @wire(getWrapData2) getWrapData2;
    @wire(getWrapData3) getWrapData3;
    @track boolVar = false;
    @track myData;
    @track myData2;
    jq = JQuery + '/jquery.min.js';  

   /* renderedCallback() {

        Promise.all([
            loadScript(this, JQuery + '/jquery.min.js'),
        ])
            .then(() => {
                // eslint-disable-next-line no-alert
                alert('Files loaded.');
            })
            .catch(error => {
                // eslint-disable-next-line no-alert
                alert(error.body.message);
            });
    }*/
    connectedCallback(){
       /* this.jq(document).ready(function(){
              // eslint-disable-next-line no-alert
              alert('Called');
        });*/
        Promise.all([

            loadScript(this, JQuery + '/jquery.min.js'),
            //loadScript(this, JQuery + '/jqFile.js'),
        ]).then(() => {
               //('h1').css({"color":"green"});
              //('h1').style = 'border : 5px solid blue';
               //this.template.querySelector('h1').style = 'border : 5px solid red';
                //('h1').css('border','5px solid green');
                // eslint-disable-next-line no-alert
                alert('Files loaded.');
            })
            .catch(error => {
                // eslint-disable-next-line no-alert
                alert(error.body.message);
            });
    }
    
    handleClick(){
        this.boolVar = true;
        //********************************************************************* */
                    // eslint-disable-next-line no-console
                    console.log(this.getWrapData2.data);
                    const data = JSON.parse(this.getWrapData2.data);
                    // eslint-disable-next-line no-console
                    console.log('JSON Parse : '+data);
                    this.myData = data;
                    // eslint-disable-next-line no-console
                    console.log('Account Id : '+data.acc.Id); 
         //********************************************************************* */
    }
}