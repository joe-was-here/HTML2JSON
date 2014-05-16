(function () {

var elements = document.querySelector('html');
var loopElements = function (el, index, array) {
    console.log(el, index);
};
elements.childNodes.forEach(loopElements)

}());