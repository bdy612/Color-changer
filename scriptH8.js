function color(){
    var ans=document.getElementById("color").value
    document.getElementById("bo").style.backgroundColor=ans
    document.getElementById("show").style.color=ans
    document.getElementById("show").innerHTML=ans
}