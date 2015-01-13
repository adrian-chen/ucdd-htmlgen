var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h" + level + ">" + text + "</h" + level + ">"
}

lib.generateOrderedList = function(arrayOfText) {
 	var myString = "<ol>";
 	for(var i = 0; i < arrayOfText.length; i++)
 	{
 		myString += "<li>" + arrayOfText[i] + "</li>";
 	}
 	myString += "</ol>";
 	return myString
}

lib.generateUnorderedList = function(arrayOfText) {
    var list = "<ul>"
    for (var i = 0; i < arrayOfText.length; i++) {
    	list += "<li>" + arrayOfText[i] + "</li>"
    }
    list += "</ul>"
    return list
}

lib.generateTableRow = function (arrayOfText) {
    //Adrian Chen
    var list = "<tr>"
    for (var i = 0; i < arrayOfText.length; i++) {
        list += "<td>" + arrayOfText[i] + "</td>"
    }
    list += "</tr>"
    return list
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    //Adrian Chen
    var list = ""
    for (var i = 0; i < twoDimensionalArrayOfText[1].length; i++) {
        list += "<td>" + twoDimensionalArrayOfText[1][i] + "</td>"
    }
    return list
}

lib.generateHyperLink = function(url, text) {
    return "<a href'" + url + "'>" + text + "</a>"
}

lib.generateFormTextField = function(name) {
    //Adrian Chen
    return '<input type="text" name="'+name+'">'
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    //Adrian Chen
    return '<label>' + label + '</label> <input type="text" name="'+name+'">'
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    //Adrian Chen
    var accumulator = "<select>\n"
    for (var i = 0; i < arrayOfValues.length; i++) {
        accumulator +='  <option value="'+arrayOfValues[i]+'">'+arrayOfText[i]+'</option>\n'
    };
    accumulator += "</select>"
    return accumulator
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    //Adrian Chen
    accumulator = '<iframe width="'+width+'" height="'+height+'" src="//www.youtube.com/embed/'+videoId+'"'
    if(allowfullscreen)
        accumulator += " allowfullscreen"
    accumulator += "></iframe>"
    return accumulator
}

module.exports = lib
