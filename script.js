function showInfo(Image) {
    
 const article = Image.parentElement;
 alert(article.outerHTML.substring(0, 100));
 const Info = article.querySelectorAll(".dragon-info");

 Info.forEach(element  => {
    element.style.display = "block";

 });

}





