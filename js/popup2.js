window.onload = function() {
    var modal = document.querySelector('.popup2');
    var modal2 = document.querySelector('.popup4');
    var modal3 = document.querySelector('.popup6');
    var modal4 = document.querySelector('.popup7');
    var modal5 = document.querySelector('.popup8');
    var modal6 = document.querySelector('.popup9');

    var essai = document.getElementById('img001');
    var essai2 = document.getElementById('img002');
    var essai3 = document.getElementById('img003');
    var essai4 = document.getElementById('img004');
    var essai5 = document.getElementById('img005');
    var essai6 = document.getElementById('img006');
    
    
    var span2 = document.getElementsByClassName("close2")[0];
    var span3 = document.getElementsByClassName("close3")[0];
    var span4 = document.getElementsByClassName("close4")[0];
    var span5 = document.getElementsByClassName("close5")[0];
    var span6 = document.getElementsByClassName("close6")[0];
    var span7 = document.getElementsByClassName("close7")[0];
    //console.log(modal)

    essai.addEventListener("click", function () {

        modal.style.display = "block";
        console.log(modal)

    })
    
    essai2.addEventListener("click", function () {

        modal2.style.display = "block";
        console.log(modal)

    })
    
    essai3.addEventListener("click", function () {

        modal3.style.display = "block";
        console.log(modal)

    })
    essai4.addEventListener("click", function () {

        modal4.style.display = "block";
        console.log(modal)

    })
    essai5.addEventListener("click", function () {

        modal5.style.display = "block";
        console.log(modal)

    })
    essai6.addEventListener("click", function () {

        modal6.style.display = "block";
        console.log(modal)

    })

    

    // When the user clicks on <span> (x), close the modal
    span2.addEventListener("click", function () {
        modal.style.display = "none";
    })
    span3.addEventListener("click", function () {
        modal2.style.display = "none";
    })
    span4.addEventListener("click", function () {
        modal3.style.display = "none";
    })
    span5.addEventListener("click", function () {
        modal4.style.display = "none";
    })
    span6.addEventListener("click", function () {
        modal5.style.display = "none";
    })
    span7.addEventListener("click", function () {
        modal6.style.display = "none";
    })
    
    
    

}
