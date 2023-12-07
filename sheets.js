var spreadsheet_id_wa = '1aeqdT_yjrt-bh3qSmzQ11rxUHHQybUOhKwrDxLROrh4';
var spreadsheet_id_tx = '1oOimwf3PAe_S1pe7O0nFsMi2qx2400F5ovp9AUR9skg';
var tab_name = 'In';
var url_wa = "https://opensheet.elk.sh/" + spreadsheet_id_wa + "/" + tab_name;
var url_tx = "https://opensheet.elk.sh/" + spreadsheet_id_tx + "/" + tab_name;
var sheetDataWA = "";
var sheetDataTX = "";


function searchItemsWA(){
  fetch(url_wa)
  .then(response => response.text())
  .then(data => sheetDataWA = data)
  .catch(error => {  console.log(error); });

  console.log(sheetDataWA);
  
  json = JSON.parse(sheetDataWA);
  console.log(json[json.length-1])
  var key = json.length - 1;
  JsBarcode("#code128", json[key]["Id"]);
  document.getElementById('item').innerHTML = json[key]["Item"];
  document.getElementById('qty').innerHTML = json[key]["Qty"];
  document.getElementById('weight').innerHTML = json[key]["Weight"];
  document.getElementById('tare').innerHTML = json[key]["Tare"];
  document.getElementById('inDate').innerHTML = json[key]["InDate"];
  document.getElementById('status').innerHTML = json[key]["Status"];
  document.getElementById('notes').innerHTML = "Notes: " + json[key]["Notes"];

  return
}

function searchItemsTX(){

  fetch(url_tx)
  .then(response => response.text())
  .then(data => sheetDataTX = data)
  .catch(error => {  console.log(error); });

  console.log(sheetDataTX);
  
  json = JSON.parse(sheetDataTX);
  console.log(json[json.length-1])
  var key = json.length - 1;
  JsBarcode("#code128", json[key]["Id"]);
  document.getElementById('item').innerHTML = json[key]["Item"];
  document.getElementById('qty').innerHTML = json[key]["Qty"];
  document.getElementById('weight').innerHTML = json[key]["Weight"];
  document.getElementById('tare').innerHTML = json[key]["Tare"];
  document.getElementById('inDate').innerHTML = json[key]["InDate"];
  document.getElementById('status').innerHTML = json[key]["Status"];
  document.getElementById('notes').innerHTML = "Notes: " + json[key]["Notes"];

  return
}