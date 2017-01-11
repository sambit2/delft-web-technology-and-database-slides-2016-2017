function init() {
  var role = document.querySelector("body").dataset.asqRole;
  var role = role || 'viewer' 
  setRole(role);
}

function setRole(role) {
  var allAsqElements = getASQElements();
  allAsqElements.forEach(function(elem, index) {
  elem.role = role;
  });
}

function getASQElements() {
  var allAsqElements = document.querySelectorAll('html /deep/ *');

  allAsqElements = Array.prototype.slice.call(allAsqElements).filter(function(el) {
    return isASQEl(el);
  });

  return allAsqElements;
} 

function isASQEl(el) {
  return (el.isASQElement === true)
} 