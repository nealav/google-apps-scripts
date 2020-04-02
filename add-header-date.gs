function onOpen() {
  insertDate();
  console.log('I CHANGED THE DATE')
}

function insertDate() {  
  var doc = DocumentApp.getActiveDocument();
  var headerSection = doc.getHeader();
  
  try {
    headerSection.clear();
    headerSection.setText('');
  } catch (e) {
    headerSection.appendParagraph("");
    headerSection.clear();
    headerSection.setText('');
  }
  var d = new Date();  
  var element = headerSection.setText('\n\n' + d.toDateString());
  element.setBold(true);
}
