var btn=$("button");
var p=$("p");
var header=$("header");
var section=$("section");
var nav=$("nav");
var article=$("article");
var footer=$("footer");
var ul=$("ul");
var div=$("div");
var menubtn=$("#menubtn");
var fllft=$("#fllft");
var showmenu=$("#showmenu");
var hidemenu=$("#hidemenu");
var dcmt=$("document");
$(document).ready(function(){
    $("#hidemenu").click(function(){
        $("#showmenu").show();
        $("#fllft").hide();
        $("#hidemenu").hide();
    });
});

$(document).ready(function(){
    $("#showmenu").click(function(){
        $("#hidemenu").show();
        $("#fllft").show();
        $("#showmenu").hide();
    });
});
$(document).ready(function(){
    $(".border-radius").click(function(){
    $("#hidenav").toggle("slow");
    $("#navtop").toggle("slow");
});    
});







