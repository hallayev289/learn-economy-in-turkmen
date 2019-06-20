function openSubject(evn, subjectName){
    // Declaring variables
    let i,tabcontent,tablinks;

    //Get all elements tabcontent and hide them
    tabcontent=document.getElementsByClassName("tabcontents");
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }

    //Get all element with class="tablinks" and remove the class "active"
    tablinks=document.getElementsByClassName("tablinks");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].className=tablinks[i].className.replace(" active","");
    }

    //show the current tab , and add "active" class to the link that opened the tab
    document.getElementById(subjectName).style.display = "block";
    evn.currentTarget.className+=" active";
}
document.getElementById("default-content").click();