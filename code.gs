function doGet(e) {
return HtmlService.createHtmlOutputFromFile('index')
}

function userClicked(link){
  var searchstring = link;
  var reg = new RegExp("(?=.{10})[1|0][a-zA-Z0-9\-\_]+");
  var docID = reg.exec(searchstring)
  try {
  var result = docID.join()
  } catch (error) {
    var result = "No"
  }
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("destination"); 
  var textFinder = sheet.createTextFinder(result)
  var search_row = textFinder.findNext().getRow()
  var newurl = sheet.getRange(search_row,3).getValue();
  var owner = sheet.getRange(search_row,2).getValue();
  var results = [newurl, owner];
  return (results)
}