// Step 1 : open sent invitation 
// https://www.linkedin.com/mynetwork/invitation-manager/sent/
// Open console in web browser and copy paste the script and run

var button1 = document.getElementsByClassName("invitation-card__action-btn artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary ember-view")
var button2 = document.getElementsByClassName("artdeco-modal__confirm-dialog-btn artdeco-button artdeco-button--2 artdeco-button--primary ember-view")
setInterval(()=>{
    for(var i=0;i<button1.length;i++){
        button1[i].click()
        button2[0].click()}},1000)