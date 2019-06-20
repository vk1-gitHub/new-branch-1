import { LightningElement, track } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Type_FIELD from '@salesforce/schema/Account.Type';
import Phone_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
import Industry_FIELD from '@salesforce/schema/Account.Industry';
import Rating_FIELD from '@salesforce/schema/Account.Rating';

import Contact_OBJECT from '@salesforce/schema/Contact';
import FirstName_FIELD from '@salesforce/schema/Contact.FirstName';
import LastName_FIELD from '@salesforce/schema/Contact.LastName';
import Email_FIELD from '@salesforce/schema/Contact.Email';
import ContactPhone_FIELD from '@salesforce/schema/Contact.Phone';
import AccountId_FIELD from '@salesforce/schema/Contact.AccountId';
import Birthdate_FIELD from '@salesforce/schema/Contact.Birthdate';



export default class CreateRecordComp extends LightningElement {
    @track accountid = '';
    @track renderYNButton = false;
    @track isCreateContact = false;
    accountObject = ACCOUNT_OBJECT;
    nameField = NAME_FIELD;
    typeField = Type_FIELD;
    PhoneField = Phone_FIELD;
    websiteField = WEBSITE_FIELD;
    IndustryField = Industry_FIELD;
    RatingField = Rating_FIELD;

    contactObjName = Contact_OBJECT;
    firstName = FirstName_FIELD;
    lastName = LastName_FIELD;
    emailField = Email_FIELD;
    contactPhone = ContactPhone_FIELD;
    parent = AccountId_FIELD;
    dobField = Birthdate_FIELD;

    handleAccountCreated(event){
        this.accountid = event.detail.id;
        this.renderYNButton = true;
       // eslint-disable-next-line no-alert
       //alert('Account Created With Id : '+this.accountid);  
    }
    handleActionYes(){
           this.renderYNButton = false;
           this.isCreateContact = true;
    }
    handleActionNo(){
        // eslint-disable-next-line no-alert
        alert('Thanks For Creating Account');  
        this.renderYNButton = false;
    }
    handleContactCreated(event){
        const conId = event.detail.id;
        // eslint-disable-next-line no-alert
        alert('Contact Created With Id : '+conId);  
        this.isCreateContact = false;
    }
}