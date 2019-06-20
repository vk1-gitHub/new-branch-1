public with sharing class MappingPageController {
    public MappingPageController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<String> getObjFieldsValue(String objectName){
        List<String> objFieldsNameList = new List<String>();
        SObjectType objectType = Schema.getGlobalDescribe().get(objectName);
        Map<String,Schema.SObjectField> mfields = objectType.getDescribe().fields.getMap();

        for(Schema.SObjectField obj : mfields.values()){
            objFieldsNameList.add(String.valueOf(obj));
            //objApiNameList.add('{label : '+obj+' : value : '+obj+'}');
        }
        System.debug('objFieldsNameList !!@@ '+objFieldsNameList);
        return objFieldsNameList;
    }
}