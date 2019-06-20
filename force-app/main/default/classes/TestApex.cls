public with sharing class TestApex {
    public TestApex() {
      List<Contact> conList = [SELECT Id, lastName FROM Contact LIMIT 100];
      System.debug("Changed");
    }
}