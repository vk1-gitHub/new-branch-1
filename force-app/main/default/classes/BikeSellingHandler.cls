public with sharing class BikeSellingHandler {
    @AuraEnabled(cacheable=true)
    public static List<Cycle__c> getCycles(String conId){
      List<Cycle__c> cycleList =  [Select id, Name, Discount__c, Model_Number__c, Owner__c, Price__c, Selling_Price__c, url__c FROM Cycle__c where Owner__c =:conId];
       return cycleList;
      //return [Select id, Name, Discount__c, Model_Number__c, Owner__c, Price__c, Selling_Price__c, url__c FROM Cycle__c where Owner__c =:conId];
    }
}