({
	doInit : function(component, event, helper) {
        
        var myEvent = component.getEvent("compEvent");
        myEvent.fire();
		
	},
    handleCompEvent : function(component, event, helper){
        alert('Event Handled In Source Component');
        //console.log('Event Handled In Source Component');
    }
})