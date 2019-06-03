var gallToLiters = function (gallons) {
    return gallons * 3.785;
};

var inputGallons = parseInt(prompt("Volume in gallons"));

alert(gallToLiters(inputGallons));
