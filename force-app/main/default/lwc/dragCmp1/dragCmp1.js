import { LightningElement, track, api} from 'lwc';

export default class DrapCmp1 extends LightningElement {
   @track firstList = [];
   @track attrToAdd;

   connectedCallback(){
       var obj1 = {value : 'First Heading', Id : 0};
       var obj2 = {value : 'Second Heading', Id : 1};
       var obj3 = {value : 'Third Heading', Id : 2};
       this.firstList.push(obj1);
       this.firstList.push(obj2);
       this.firstList.push(obj3);
   }
   allowDrop(event){
    event.preventDefault();
   }
   drag(event){
     
    const mtEvent = new CustomEvent('mydrag', {detail : {'value' : event.target.value, Id : event.target.Id},});
    this.dispatchEvent(mtEvent);

      // eslint-disable-next-line no-console
      console.log('event !!@@ '+event.target.value);
   }
   drop1(){
       // eslint-disable-next-line no-console
       console.log('this.attrToAdd In Drop !!@@ '+this.attrToAdd.value);
       if(this.attrToAdd !== null){
            this.firstList.push(this.attrToAdd);
      
        const mtEvent = new CustomEvent('dragcompleteinfirst', {detail : {'value' : this.attrToAdd.value, Id : this.attrToAdd.Id},});
        this.dispatchEvent(mtEvent);
    }
        // eslint-disable-next-line no-alert
        //alert('Drop Called');
        // eslint-disable-next-line no-alert
        //alert('Drop Called'+event.target.value);
   }
   @api 
   addAttrInFirst(attrToAdd){
      this.attrToAdd = attrToAdd;
      // eslint-disable-next-line no-console
      console.log('this.attrToAdd !!@@ '+this.attrToAdd.value);
      //this.firstList.push(attrToAdd);
   }
   @api
   handleCallInFirst(myAttr){
       var resultedArray = [];
       var i = 0;
       this.firstList.forEach(function(item){
           if(item.value !== myAttr.value){
               const newItem = {value : item.value, Id : i};
                resultedArray.push(newItem);
           }
           i++;
       });
       this.firstList = resultedArray;
        // eslint-disable-next-line no-console
        console.log('firstList !!@@ '+JSON.stringify(this.firstList));
       // eslint-disable-next-line no-console
       console.log('resultedArray !!@@ '+JSON.stringify(resultedArray));
        // eslint-disable-next-line no-console
        console.log("myAttr In First "+JSON.stringify(myAttr));
   }
}