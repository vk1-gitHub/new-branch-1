trigger TestSOSLInTrigger on Account (before insert) {
    
    List<List<SObject>> searchList = [FIND 'Test*' IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead];
    List<account> myAcc = ((List<Account>)searchList[0]);
    
    system.debug(myAcc[0].name);

}