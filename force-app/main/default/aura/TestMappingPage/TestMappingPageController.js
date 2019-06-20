({
    handledragcomplete : function(component, event, helper) {
        var result = event.getParams('detail');
        component.set("v.removedAttr", result);
        //component.find("dragCmp2").handleOption(result);
          //alert(JSON.stringify(result));
    }
})