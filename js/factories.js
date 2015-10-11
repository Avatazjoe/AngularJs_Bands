//factories

//setters for metas. Used in controllers
bandsApp.factory('Page', function(){

    var title = '';
    var keywords = '';
    var description = '';
    return {
        title: function() { return title; },
        keywords: function() { return keywords;},
        description: function() { return description;},
        setTitle: function(newTitle) { title = newTitle; },
        setKeywords: function(newKeywords) { keywords = newKeywords; },
        setDescription: function(newDescription) { description = newDescription; }
    }

});
