document.getElementById('buttonFeedBack').addEventListener('click',dataAuditFeedback);

function dataAuditFeedback(){
    let name = document.getElementById('feedBackName').value;
    let email = document.getElementById('feedBackEmail').value;
    let number = document.getElementById('feedBackNumber').value;
    console.log(name,email,number)

    sendUserFeedback(name,email,number);
    document.getElementById('feedBackName').value;
    if(name ==="" || name ==null){
        alert("Введіть будьласка ім'я!!!");
        return;
    }
    document.getElementById('feedBackNumber').value;
    if(number ==="" || number == null){
        alert("Введіть будьласка свій номер!!!");
        return;
    }
    document.getElementById('feedBackName').value = '';
    document.getElementById('feedBackEmail').value = '';
    document.getElementById('feedBackNumber').value = '';
}

function sendUserFeedback(name,email,number){
    db.collection('feedBack').add({
        name: name,
        email:email,
        number:number
    }).then(function(docRef){
        console.log("Doc written with ID:",docRef.id);
    }).catch(function(error){
        console.error('Error adding document: ',error)
    });

}


