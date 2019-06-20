import { LightningElement, track, api } from 'lwc';

export default class DragCmp2 extends LightningElement {
    @track draggedValue;
    @api OptionToRemove;
    @track secondList = [];
       connectedCallback(){
           var a = {value : 'Hello', Id : '5'}
           this.secondList.push(a);
       }   

       allowDrop(event){
        event.preventDefault();
       }
      /* @api
       handleOption(attrToRemove){
           this.template.querySelector('c-drag-cmp1').handleCallInFirst(attrToRemove);
           // eslint-disable-next-line no-console
           console.log('attrToRemove !!@@ '+JSON.stringify(attrToRemove)); 
       }*/
       
       dragAttr(event){
          this.template.querySelector('c-drag-cmp1').addAttrInFirst(event.target);
           // eslint-disable-next-line no-console
           console.log('dragAttr In Second !!@@'+JSON.stringify(event.target));
       }
       /*handleDrop(event){
          var resultedArray = [];
          const result = event.target;
           this.template.querySelector('c-drag-cmp1').addAttrInFirst(result);

            this.secondList.forEach(function(item){
            if(item.value !== result.value){
                resultedArray.push(item);
               }
            });
            this.secondList = resultedArray;
       }*/
       drop(){
           this.secondList.push(this.draggedValue);
           this.template.querySelector('c-drag-cmp1').handleCallInFirst(this.draggedValue);
           // const mtEvent = new CustomEvent('dragcomplete', {detail : {'value' : this.draggedValue.value, Id : this.draggedValue.Id},});
            //this.dispatchEvent(mtEvent);
       }
       handleDrag(event){
             var myData = event.detail;
             this.draggedValue = myData;
             // eslint-disable-next-line no-console
             console.log('myData !!@@ '+JSON.stringify(myData));
       }
       removeAttrInSecond(event){
        var resultedArray = [];
        const result = event.detail;
        // eslint-disable-next-line no-console
        console.log('Attr To remove in Second !!@@ '+JSON.stringify(result));
        this.secondList.forEach(function(item){
          if(item.value !== result.value){
              resultedArray.push(item);
             }
          });
        this.secondList = resultedArray;
       }
}