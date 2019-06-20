public with sharing class NotesAndAttachmentController {
   
    @AuraEnabled(Cacheable=true)
    public static List<String> getObjects(String selectedRadio){
        List<String> objList = new List<String>();
        String query = 'Select Parent.Type FROM ';
        query += (selectedRadio =='Note' ? 'Note' : 'Attachment');

        List<sObject> sobjList = Database.query(query);
        if(selectedRadio =='Note'){
            for(sObject sObj : sobjList){
                Note noteObj = (Note) sobj;
                objList.add(noteObj.Parent.Type);
            }
        }else{
            for(sObject sObj : sobjList){
                Attachment attachmentObj = (Attachment) sObj;
                objList.add(attachmentObj.Parent.Type);
            }
        }
        return objList;
    }
    @AuraEnabled(Cacheable=true)
    public static List<sObject> getNoteAttachmentList(String selectedRadio, String parentType, String searchTxt){
        String reqField = (selectedRadio == 'Note' ? 'Title' : 'Name');
        String query ='Select Id, ParentId, Parent.Type, ' +reqField+ ' FROM '+selectedRadio+' where parent.Type = \'' +parentType+'\' AND '+reqField+' = \'' +searchTxt+'\''; 
        System.debug('Query = '+query);
        List<sObject> sObjList = Database.query(query);
        System.debug('sObjList !!@@ '+sObjList);
        return sObjList;
    }
}