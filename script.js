function showInfo(Image) {
    
 const article = Image.parentElement;

 const Info = article.querySelectorAll(".dragon-info");
 alert("encontrei" + Info.length + "elementos");

 Info.forEach(element  => {
    element.style.display = "block";

 });

}





