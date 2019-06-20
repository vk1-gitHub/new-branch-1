@RestResource(urlMapping='/v1/getContacts/*')
global with sharing class getContact {
    @Httpget
    global static list<contact> fetchAccount(){
        RestRequest req = RestContext.request;
        RestResponse res = Restcontext.response;
        Id accId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        list<contact> lstcontact =[Select id , name,Phone,Fax,Email from contact where Accountid=:accId ];
        System.debug('Called');
        return lstcontact ;
    }
    
    @HttpPost
    global static String doPost(String name, String phone, String website) {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        System.debug('req !!@@ '+req);
        System.debug('name !!@@ '+name);
        System.debug('phone !!@@ '+phone);
        System.debug('website !!@@ '+website);
        Account acct = new Account();
        acct.Name = name;
        acct.Phone = phone;
        acct.Website = website;
        insert acct;
        System.debug('Account !!@@'+acct);
        return acct.Id;
    }
    @HttpPut
    global static String upsertRecord(String name, String phone, String website, String id) {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        System.debug('req !!@@ '+req);
        System.debug('name !!@@ '+name);
        System.debug('phone !!@@ '+phone);
        System.debug('website !!@@ '+website);
        System.debug('Id !!@@ '+id);
        Account acct = new Account(Name = name, phone = phone, website = website);
        if(id != null){
           acct.Id = id;
        }
        upsert acct;
        System.debug('Account !!@@'+acct);
        return acct.Id;
    }
    @HttpDelete
    global static void deleteRecord(){
       RestRequest req = RestContext.request;
       RestResponse res = RestContext.response;
      
       Id objId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
       Account acc = [Select Id from Account Where Id = : objId ];
       delete acc;
       System.debug('Record Delete');
    }
}