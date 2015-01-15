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
    //Implemented Individually
    var myTable = '<tr>';
    for(var i = 0; i < arrayOfText.length; i++)
    {
        myTable += "<td>" + arrayOfText[i] + "</td>";
    }
    myTable += "</tr>";
return myTable
}
lib.generateTable = function(twoDimensionalArrayOfText) {
    //Implemented Individually
    var myTable = ""
    for (var i = 0; i < twoDimensionalArrayOfText[1].length; i++)
    {
        myTable += "<td>" + twoDimensionalArrayOfText[1][i] + "</td>"
    }
    return myTable
}
lib.generateHyperLink = function(url, text) {
return "<a href'" + url + "'>" + text + "</a>"
}
lib.generateFormTextField = function(name) {
    //Implemented Individually
 return '<input type="text" name="' + name + '">'
}
lib.generateFormTextFieldWithLabel = function(name, label) {
return '<label>' + label + '</label> <input type="text" name="' + name + '">'
}
lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
var myDropdown = "<select>";
for(var i = 0; i < arrayOfText.length; i++)
{
myDropdown += "<option value='" + arrayOfValues[i] + "'>" + arrayOfText[i] + "</option>";
}
myDropdown += "</select>";
return myDropdown
}
lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    //Implemented Individually
    myVideo = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + videoId + '"'
    if(allowfullscreen)
    {
        myVideo += " allowfullscreen"
    }
    myVideo += "></iframe>"
return myVideo
}
module.exports = lib