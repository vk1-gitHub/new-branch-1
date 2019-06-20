public with sharing class LWC_Handler {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, Type, Phone FROM Account LIMIT 5];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String accId) {
        return [SELECT Id, FirstName, LAstName, AccountId, Email, Phone FROM Contact WHERE AccountId =: accId];
    }
}