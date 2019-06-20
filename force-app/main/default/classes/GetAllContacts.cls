public class GetAllContacts{

   public static String contactsRecord{get;set;}
   
    public GetAllContacts(){
       List<Contact> conList = [Select Id, FirstName, LastName, Email, Phone FROM Contact];
       contactsRecord = JSON.serialize(conList);
      
    }
}