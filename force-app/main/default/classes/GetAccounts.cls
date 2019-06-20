@RestResource(urlMapping='/showAccounts/*')
global class GetAccounts{

  /*@HttpGet
  global static List<Account> getAccountList(){
       return [Select name, type FROM Account];
  }*/
  /*@HttpGet
  global static Account getAccount(){
       RestResponse res = RestContext.response;
       RestRequest req = RestContext.request;
       
       String accountId = req.requestURI.subString(req.requestURI.lastIndexOf('/')+1);
       Account acc = [Select name, type FROM Account where Id =: accountId];
       return acc;
  }*/
  @HttpGet
  global static Account getAccount(){
      
      String accId = RestContext.request.params.get('id');
      String name= RestContext.request.params.get('name');
      System.debug('AccountId !!@@ '+accId);
      System.debug('name !!@@ '+name);
      return [Select Id, type FROM Account where id =: accId];
  }
  
  @HttpPost
  global static String createAccount(String name, String phone){
     Account acc = new Account(name = name, phone = phone);
     insert acc;
     return acc.Id;
  }
  
  @HttpDelete
  global static void deleteAcc(){
       RestResponse res = RestContext.response;
       RestRequest req = RestContext.request;
       
       String accountId = req.requestURI.subString(req.requestURI.lastIndexOf('/')+1);
       Account acc = [Select Id FROM Account where Id =: accountId];
       delete acc;
  }
}