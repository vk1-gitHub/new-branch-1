({
    handleEvent : function(component, event, helper) {
       var param = event.getParam("Message");
       component.set("v.mgsFromLwc", param);
    }
})