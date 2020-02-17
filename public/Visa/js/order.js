
document.getElementById('userInformation').addEventListener('click',dataAudit);

function dataAudit() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    sendUserInfo(name,email,number)
    

    document.getElementById('name').value;
    if(name ==="" || name ==null){
        alert("Введіть будьласка ім'я!!!");
        return;
    }
    document.getElementById('number').value;
    if(number ==="" || number == null){
        alert("Введіть будьласка свій номер!!!");
        return;
    }
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
}


function sendUserInfo(name,email,number){
    db.collection('users').add({
        name: name,
        email:email,
        number:number
    }).then(function(docRef){
        console.log("Doc written with ID:",docRef.id);
    }).catch(function(error){
        console.error('Error adding document: ',error)
    });

}
