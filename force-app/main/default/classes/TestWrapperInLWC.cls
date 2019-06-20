public with sharing class TestWrapperInLWC {

    @AuraEnabled(cacheable=true)
    public static List<WrapClass> getWrapData() {
        List<Contact> conList = [SELECT Id, LastName, Phone FROM Contact  LIMIT 2];
        List<Account> accList = [SELECT Id, Name, Phone, Type FROM Account  LIMIT 2];
        List<String> strList = new List<String>();
        List<WrapClass> wrapClassList = new List<WrapClass>();
        wrapClassList.add(new WrapClass(accList[0] ,conList[0]));
        wrapClassList.add(new WrapClass(accList[1] ,conList[1]));
        return wrapClassList;
    }

    @AuraEnabled(cacheable=true)
    public static String getWrapData2() {
        Contact cont = [SELECT Id, LastName, Phone FROM Contact  LIMIT 1];
        Account acct = [SELECT Id, Name, Phone FROM Account  LIMIT 1];
        WrapClass wrap = new WrapClass(acct, cont);
        return JSON.serialize(wrap);
    }
     @AuraEnabled(cacheable=true)
    public static WrapClass getWrapData3() {
        Contact cont = [SELECT Id, LastName, Phone FROM Contact  LIMIT 1];
        Account acct = [SELECT Id, Name, Phone FROM Account  LIMIT 1];
        WrapClass wrap = new WrapClass(acct, cont);
        return wrap;
    }

    public class WrapClass{
        @AuraEnabled public Account acc {get;set;}
        @AuraEnabled public Contact con {get;set;}
        public WrapClass(Account acct, Contact cont){
             acc = acct;
             con = cont;
        }
    }
}