// Write js2xml.xml file with javascript
var xmlFile = "js2xml.xml";
var xmlTags = [];

function readXMLFile(xmlString){
  console.log(xmlString);
  var xmlDoc = $.parseXML( xmlString ),
  $xmlString = $( xmlDoc ),
  $title = $xmlString.find( "title" );
  console.log( "First Title: " + $title.text() );
  // Change the title to "XML Title"
  $title.text( "XML Title Read" );
  console.log( "Second Title after change: " + $title.text() );
}

function writeXMLBlock(tag,classe,className,xmltags){
   var v = new  XMLWriter();
   v.writeStartDocument(true);
   var size=xmltags.length;
   var i=0;
   v.writeElementString('item','BEGIN');
   v.writeAttributeString('character','characterJSON');
   while (i<size) {
     v.writeElementString(tag,xmltags[i]);
     v.writeAttributeString(classe,className);
     i++;
   }
   v.writeEndDocument();
   return (v.flush());
}

$(document).ready(function(){
  //Getting JSON file locally content
  var request = new XMLHttpRequest();
  request.open("GET", "js/json/google.json", false);
  request.send(null)
  var my_JSON_object = JSON.parse(request.responseText);

  //With JSON data
  var charactersSize=Object.keys(my_JSON_object.characters).length;
  for(var i=0; i<charactersSize;i++){
    xmlTags.push(my_JSON_object.characters[i].name);
  }
  var xml=writeXMLBlock("character","Name","CharacterName",xmlTags);
  console.log(xml);

  //Write xml variable to a file local storage!!!
  //downloads automatically
  //var blob = new Blob([xml], {type: "text/plain;charset=utf-8"});
  //saveAs(blob, xmlFile);

  //Only downloads after clicking on the save-btn
  $("#save-btn").click(function() {
    var blob = new Blob([xml], {type: "text/plain;charset=utf-8"});
    saveAs(blob, xmlFile);
  });

  var xmlread = "<rss version='2.0'><channel><title>RSS Title</title></channel></rss>";
  readXMLFile(xmlread);

  //Updates html page with handlebars content
  $(".character-list-container").html(Handlebars.templates['caracter-template'](my_JSON_object));

});
