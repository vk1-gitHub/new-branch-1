@RestResource(urlMapping='/accounts/*')

global with sharing class REST_AccountService_V4 {

@HttpPost
    global static String getPostMethod(){
        System.debug('Called');
        //Returns the RestRequest object for our Apex REST method.  
         RestRequest request = RestContext.request;  
         //Returns the RestResponse for our Apex REST method.  
         RestResponse response = RestContext.response;  
         //Access the request body with input data coming in the JSON format  
         String jSONRequestBody=request.requestBody.toString().trim();   
        return jSONRequestBody;
    }
}