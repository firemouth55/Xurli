console.log('hubflex copyright footer loaded');
var company = "Copyright by " + document.title;
var hyphen = " - ";
var copy = "&copy;";
var copyright = document.getElementsByClassName('extendedfooter');
var year = (new Date()).getFullYear() + " ";

var xurli = "Provided by <a href='http://xurli.com/'>Xurli</a>";
var hubflex = "Powered by <a href='http://hubflx.com/'>Hubflx</a> ";

var _comp = copy + year + company + hyphen;
var _xurli = copy + year + xurli + hyphen;
var _hubflex = copy + year + hubflex;


copyright[0].innerHTML = _comp + _xurli + _hubflex;
console.log('footer processed', _comp + _xurli + _hubflex);
