global class TestFuture
{
    @future
    public static void processRecords(Set<String> emailSet)
    {   
        System.debug('Called');
        List<Contact> conListToUpdate = new List<Contact>();
        List<Contact> conList = [Select Id, description FROM Contact Where email IN : emailSet];
        for(Contact con : conList){
            con.description = 'Updated';
            conListToUpdate.add(con);
        }
        if(conListToUpdate.size() > 0){
            database.update(conListToUpdate,false); 
        }
            //update conListToUpdate;
    }
}