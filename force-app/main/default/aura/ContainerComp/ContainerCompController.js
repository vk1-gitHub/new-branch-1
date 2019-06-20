({
	handleCompEvent : function(component, event, helper){
        alert('Event Handled In Container Component');
        event.stopPropagation();
        //console.log('Event Handled In Container Component');
    }
})