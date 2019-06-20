({
    getMessage : function(component, event, helper) {
       var mgs = event.getParam("message");
       console.log('In Lightning Comp !!@@ '+mgs);
      // alert('In Lightning Comp !!@@ '+mgs);
       component.set("v.getMessage", mgs);
       component.find("secondLwcComp").callMethod('Hi LWC');
    }
})