({
    doInit : function(component, event, helper)
    {
                  
                var pageSize = component.get("v.pageSize");
    
                component.set("v.totalSize", component.get("v.recordList").length);
                component.set("v.start",0);
     
                component.set("v.end",pageSize-1);
                var paginationList = [];
                if( component.get("v.recordList").length < pageSize){
                    paginationList= component.get("v.recordList");
                }
                else{
                    for(var i=0; i< pageSize; i++){
                        paginationList.push( component.get("v.recordList")[i]); 
                    } 
                }
                component.set('v.paginationList', paginationList);
                helper.helperMethodPagination(component, event, helper,'1');
    },
    
    next : function(component, event, helper)
    {
        var recordList = component.get("v.recordList");
        var end = component.get("v.end");
        var start = component.get("v.start");
        var pageSize = component.get("v.pageSize");
        var paginationList = [];
        var paginationList = recordList.slice(end+1,end+pageSize+1);
        start = start + pageSize;
        end = end + pageSize;
        component.set("v.start",start);
        component.set("v.end",end);
        component.set('v.paginationList', paginationList);
        var currentPageNumber= component.get('v.currentPageNumber')+1;
        component.set('v.currentPageNumber',currentPageNumber);
        helper.helperMethodPagination(component, event, helper,parseInt(currentPageNumber));
    },
    previous : function(component, event, helper)
    {
        
        var recordList = component.get("v.recordList");
        var end = component.get("v.end");
        var start = component.get("v.start");
        var pageSize = component.get("v.pageSize");
        var paginationList = [];
        var paginationList = recordList.slice(start-pageSize,start);
        start = start - pageSize;
        end = end - pageSize;
        component.set("v.start",start);
        component.set("v.end",end);
        component.set('v.paginationList', paginationList);
        var currentPageNumber= component.get('v.currentPageNumber')-1;
        component.set('v.currentPageNumber',currentPageNumber);
        helper.helperMethodPagination(component, event, helper,parseInt(currentPageNumber));
    },
    currentPage: function(component, event, helper) {
         
        var selectedItem = event.currentTarget;
        var pagenum = selectedItem.dataset.record;
        var pageSize = component.get("v.pageSize");
        var recordList = component.get("v.recordList");
        var start =(pagenum-1)*pageSize;
        var end = ((pagenum-1)*pageSize)+pageSize-1;
        var paginationList = recordList.slice(start,end+1);
        component.set("v.start",start);
        component.set("v.end",end);
        component.set('v.paginationList', paginationList);
        component.set('v.currentPageNumber', parseInt(pagenum));
        helper.helperMethodPagination(component, event, helper,parseInt(pagenum));
    },
    first : function(component,event,helper)
    {
        var selectedItem = event.currentTarget;
        var pagenum = selectedItem.dataset.record;
        var pageSize = component.get("v.pageSize");
         var start =(pagenum-1)*pageSize;
          component.set('v.currentPageNumber',start);
          helper.helperMethodPagination(component, event, helper,parseInt(pagenum));
    }
    
})
