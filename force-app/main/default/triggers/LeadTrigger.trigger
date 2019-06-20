trigger LeadTrigger on Lead (before insert){
    Set<String> emailIdSet = new Set<String>();
    for(Lead leadObj : Trigger.New){
        if(leadObj.email != null){
            emailIdSet.add(leadObj.email);
        }
        TestFuture.processRecords(emailIdSet);
        List<Contact> conList = [Select Id FROM Contact Where email IN : emailIdSet];
        if(conList.size() > 0){
            leadObj.email.addError('Email Found In Contact');
        }
        
    }
}