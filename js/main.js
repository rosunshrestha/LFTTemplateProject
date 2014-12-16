// JavaScript Document
function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
}
var ul = document.getElementById('tabs');
ul.onclick = function(event) {
		console.log(event);
        var target = getEventTarget(event);
		var parent = target.parentNode;
		if(parent.id == "tabs"){
			var child = parent.getElementsByTagName("li");
			for(var i = 0; i< child.length ; ++i){
				child[i].className = "inactive";
			}
        	target.className = "active";	
		}
};


// JavaScript Document

    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
    }

    var ul = document.getElementById('tabs');

	
    ul.onclick = function(event) {
        var target = getEventTarget(event);
		var parent = target.parentNode;
		if(parent.id == "tabs"){
			var child = parent.getElementsByTagName("li");
			for(var i = 0; i< child.length ; ++i){
				child[i].className = "inactive";
				}
        	target.className = "active";	
		}
    };
    
    function changeFlag()
{
	var img=document.getElementById("flagImage");
	var currentCountry=document.getElementById("flag");
	img.setAttribute("src",currentCountry[currentCountry.selectedIndex].getAttribute("src"));
	img.setAttribute("alt",currentCountry[currentCountry.selectedIndex].getAttribute("alt"));
}


    