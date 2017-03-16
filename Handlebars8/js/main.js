// Write js2xml.xml file with javascript
var xmlFile = "medtronic.xml";

//regionDefs Object
var xmlCoords = [];
var xmlShapes = [];
var xmlClasses= [];

//widgetMaps Object
var xmlIDs = [];
var xmlTypes = [];
var xmlEvents = [];
var xmlFunctionText = [];
var xmlVisible = [];
var xmlRecallRate = [];
var xmlBoundFunctions = [];


function readXMLFile(xmlString){
  //console.log(xmlString);
  var xmlDoc = $.parseXML( xmlString ),
  $xmlString = $( xmlDoc ),
  $title = $xmlString.find( "title" );
  //console.log( "First Title: " + $title.text() );
  // Change the title to "XML Title"
  $title.text( "XML Title Read" );
  //console.log( "Second Title after change: " + $title.text() );
}

function writeXMLBlock(){
   var v = new  XMLWriter();
   v.writeStartDocument(true);
   var size=xmlCoords.length;
   var i=0;
   v.writeStartElement('device');

     v.writeStartElement('regionDefs');
     while (i<size) {
       v.writeComment('regionDefs Object');
       v.writeStartElement('item');
        v.writeElementString('coords',xmlCoords[i]);
        v.writeAttributeString('shape',xmlShapes[i]);
        v.writeAttributeString('class',xmlClasses[i]);
       v.writeEndElement();
       i++;
     }
     v.writeEndElement();
     i=0;
     v.writeStartElement('widgetMaps');
     while (i<size) {
       v.writeComment('widgetMaps Object');
       v.writeStartElement('item');
        v.writeAttributeString('id',xmlIDs[i]);
        v.writeAttributeString('type',xmlTypes[i]);
        v.writeAttributeString('event',xmlEvents[i]);
        v.writeAttributeString('functionText',xmlFunctionText[i]);
        v.writeAttributeString('visible',xmlVisible[i]);
        v.writeAttributeString('recallRate',xmlRecallRate[i]);
        v.writeAttributeString('boundFunctions',xmlBoundFunctions[i]);
       v.writeEndElement();
       i++;
     }
     v.writeEndElement();
   v.writeEndElement();
   v.writeEndDocument();
   return (v.flush());
}

$(document).ready(function(){
  //Getting JSON file locally content
  var request = new XMLHttpRequest();
  request.open("GET", "js/json/med.json", false);
  request.send(null)
  var my_JSON_object = JSON.parse(request.responseText);

  //With JSON data
  var regionDefsSize=Object.keys(my_JSON_object.regionDefs).length;
  for(var i=0; i<regionDefsSize;i++){
    xmlClasses.push(my_JSON_object.regionDefs[i].class);
    xmlShapes.push(my_JSON_object.regionDefs[i].shape);
    xmlCoords.push(my_JSON_object.regionDefs[i].coords);
  }

  var widgetMapsSize=Object.keys(my_JSON_object.widgetMaps).length;
  for(var i=0; i<widgetMapsSize;i++){
    xmlIDs.push(my_JSON_object.widgetMaps[i].id);
    xmlTypes.push(my_JSON_object.widgetMaps[i].type);
    xmlFunctionText.push(my_JSON_object.widgetMaps[i].functionText);
    xmlVisible.push(my_JSON_object.widgetMaps[i].visibleWhen);
    xmlRecallRate.push(my_JSON_object.widgetMaps[i].recallRate);
    xmlBoundFunctions.push(my_JSON_object.widgetMaps[i].boundFunctions);
    xmlEvents.push(my_JSON_object.widgetMaps[i].evts);//It only has 1 event
  }

  var xml=writeXMLBlock();

  // var xml=writeXMLBlock("coords","shape","class","id","type","event","functionText","visible","recallRate","boundFunctions",
  // xmlShapes,xmlCoords,xmlClasses,xmlIDs,xmlTypes,xmlEvents,xmlFunctionText,xmlVisible,xmlRecallRate,xmlBoundFunctions);
  // //console.log(xml);

  //Write xml variable to a file local storage!!!
  //downloads automatically
  // var blob = new Blob([xml], {type: "text/plain;charset=utf-8"});
  // saveAs(blob, xmlFile);

  //Only downloads after clicking on the save-btn
  // $("#save-btn").click(function() {
  //   var blob = new Blob([xml], {type: "text/plain;charset=utf-8"});
  //   saveAs(blob, xmlFile);
  // });

  var xmlread = "<rss version='2.0'><channel><title>RSS Title</title></channel></rss>";
  readXMLFile(xmlread);

  //write .java file
  // var javaExample = xmlCoords[1]+" olá " + xmlCoords[2];
  // var blob2=new Blob([javaExample],{type:"text/plain;charset=utf-8"});
  // saveAs(blob2,"helloworld.java");


  // var zip = new JSZip();
  // zip.file("filename.txt", "file content\n");
  // zip.generateAsync({type:"blob"})
  // .then(function(content) {
  //     // see FileSaver.js
  //     saveAs(content, "zipFolderName.zip");
  // });

  var zip = new JSZip();
  var pvsioweb = zip.folder("PVSio-Web App");
  var src = pvsioweb.folder("src");
  var java1 = src.folder("java");
  var xml1 = src.folder("xml");
  xml1.file(xmlFile, xml);
  java1.file("helloworld.java", xmlCoords[1]+" olá " + xmlCoords[2]);
  zip.generateAsync({type:"blob"})
  .then(function(content) {
      // see FileSaver.js
      saveAs(content, "zipFolderName.zip");
  });

  //Separate this and create .handlebars(create template separately)
  var template = $("#device-template").html();
  var compiledTemplate = Handlebars.compile(template);
  //Updates html page with handlebars content
  $(".device-container").html(compiledTemplate(my_JSON_object));

});
