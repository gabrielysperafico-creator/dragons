function showInfo(Image) {
    
 const article = Image.parentElement;

 const Info = article.querySelectorAll(".dragon-info");
 

 Info.forEach(element  => {
    element.style.display = "block";

 });

}





