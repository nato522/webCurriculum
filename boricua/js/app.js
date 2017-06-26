window.onload = function(){
  for (var i = 0; i < localStorage.length; i++){
    var name = localStorage.getItem(localStorage.key(i));
    document.getElementById(name).checked = true;
  }
};

function checkList(checkbox){
  if (checkbox.checked){
    localStorage.setItem(checkbox.name, checkbox.name)
  }
  else {
    localStorage.removeItem(checkbox.name)
  }
}
