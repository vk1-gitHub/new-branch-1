@RestResource(urlMapping='/getDataFromServer/*')
global class ServerClass{
  @HttpPost
  global static List<SObject> getData(String queryString){
    List<SObject> sObjList = Database.query(queryString);
    return sObjList;
  } 
}