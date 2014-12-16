// JavaScript Document
var zoombtn=document.getElementById("zoombtn");
var lightbox=new Lightbox();
zoombtn.onclick=function(){
	lightbox.init();
	
	return false;
}


function Lightbox(){
	var that=this;
	this.parent=document.getElementsByClassName("main-left")[0];
	this.closebtn;
	this.element;
	this.image;
	this.init=function(){
	that.element=document.createElement("div");
	that.element.className="lightbox";
	that.parent.appendChild(that.element);
	that.closebtn=document.createElement("div");
	that.closebtn.className="closebtn";
	that.element.appendChild(that.closebtn);
	console.log(that.closebtn);
	that.closebtn.onclick=function(){
		that.parent.removeChild(that.element);
	}
	that.image=document.createElement("img");
	var imgadd=document.getElementsByClassName("main-right")[0].children[0].getAttribute("src");
	that.image.setAttribute("src",imgadd);
	that.element.appendChild(that.image);
	
	}
}
