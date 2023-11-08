function buildMenu()





{
    var links = [
        ["Startsidan", "index.html"], 
        ["Tjänster", "varatjanster.html"],
        ["Boka tid", "bokatid.html"], 
        ["Tidigare uppdrag", "tidigareprojekt.html"],
        ["Kontakta oss", "kontaktaoss.html"],   
        ["Om oss", "omoss.html"]
    
    
    ]

    var menyHtml = ""
    for (var i = 0; i < links.length; i= i+1 )
    {
        menyHtml += "<div class='menuitem' ><a href='" + links[i][1] + "'>" + links[i][0] + "</a> </div>"

//<div class="menuitem"><a href="index.html">Hem</a></div>


        document.getElementById("meny").innerHTML = menyHtml


    }
}
