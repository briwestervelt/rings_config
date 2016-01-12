(function(){
  loadOptions();
  submitHandler();
})();

function submitHandler(){
  $("#submitButton").on("click", function(){
      var return_to = getQueryParam('return_to', 'pebblejs://close#');
      document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigureData()));
  });
}

function loadOptions() {
  if (localStorage.backgroundColor) {
    $("#randomColorCheckbox")[0].checked = localStorage.randomColor === "true";
    $("#backgroundColorPicker")[0].value = localStorage.backgroundColor;
    $("#foregroundColorPicker")[0].value = localStorage.foregroundColor;
    $("#batteryLineCheckbox")[0].checked = localStorage.batteryLine === "true";
    $("#staticLineCheckbox")[0].checked = localStorage.staticLine === "true";
    $("#noLineCheckbox")[0].checked = localStorage.noLine === "true";
    $("#showDateCheckbox")[0].checked = localStorage.showDate === "true";
    $("#bluetoothVibesCheckbox")[0].checked = localStorage.bluetoothVibes === "true";
  }
}

function getAndStoreConfigureData(){

  var options = {
    randomColor: $("#randomColorCheckbox")[0].checked,
    backgroundColor: $("#backgroundColorPicker").val(),
    foregroundColor: $("#foregroundColorPicker").val(),
    batteryLine: $("#batteryLineCheckbox")[0].checked,
    staticLine: $("#staticLineCheckbox")[0].checked,
    noLine: $("#noLineCheckbox")[0].checked,
    showDate: $("#showDateCheckbox")[0].checked,
    bluetoothVibes: $("#bluetoothVibesCheckbox")[0].checked
  }

  localStorage.randomColor = options.randomColor;
  localStorage.backgroundColor = options.backgroundColor;
  localStorage.foregroundColor = options.foregroundColor;
  localStorage.batteryLine = options.batteryLine;
  localStorage.staticLine = options.staticLine;
  localStorage.noLine = options.noLine;
  localStorage.showDate = options.showDate;
  localStorage.bluetoothVibes = options.bluetoothVibes


  console.log("Got options " + JSON.stringify(options));
  return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}