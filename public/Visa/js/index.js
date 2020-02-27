var firebaseConfig = {
    apiKey: "AIzaSyDE_mkRwlu44t2pUnHheDsFZOz-JnckQNs",
    authDomain: "visa-64426.firebaseapp.com",
    databaseURL: "https://visa-64426.firebaseio.com",
    projectId: "visa-64426",
    storageBucket: "visa-64426.appspot.com",
    messagingSenderId: "371081822992",
    appId: "1:371081822992:web:0030bfc1ec5e5d7c8adb95",
    measurementId: "G-NSMZJK3W3T"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  var db = firebase.firestore();


function dataAudit() {
    let name = document.getElementById('name').value;
    let middleName = document.getElementById('middleName').value;
    let age = document.getElementById('age').value;
    let number = document.getElementById('number').value;
    sendUserInfo(name,middleName,age,number)
    

    document.getElementById('name').value;
    if(name ==="" || name ==null){
        alert("Введіть будьласка ім'я!!!");
        return;
    }
    document.getElementById('middleName').value;
    if(middleName ==="" || middleName == null){
        alert("Введіть будьласка прізвище!!!");
        return;
    }
    document.getElementById('age').value;
    if(age ==="" || age ==null){
        alert("Введіть будьласка свою дату народження!!!");
        return;
    }
    document.getElementById('number').value;
    if(number ==="" || number == null){
        alert("Add the body to jobBody!!!");
        return;
    }
    document.getElementById('name').value = '';
    document.getElementById('middleName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('number').value = '';
}


function sendUserInfo(name,middleName,age,number){
    db.collection('users').add({
        name: name,
        middleName: middleName,
        age: age,
        number:number
    }).then(function(docRef){
        console.log("Doc written with ID:",docRef.id);
    }).catch(function(error){
        console.error('Error adding document: ',error)
    });

}

async function getMarkers() {
    const markers = [];
    await firebase.firestore().collection('jobs').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
        markers.push(doc.data());
      });
    });
    return getData(markers);
  }
getMarkers();
function getData(data){
    data.forEach(key => {
        showUsersData(key.imgSrc,key.jobTitle,key.jobBody);
    })
}

function showUsersData(img,title,body){
    let div = document.createElement('div');
    div.className = 'childFlexJob';
    let divImg = document.createElement('div');
    divImg.className = 'divImg';
    let divInfo = document.createElement('div');
    divInfo.className = 'divInfo';
    let image = document.createElement('img');
    image.src = img;
    image.className='fotoJob'
    let h6 = document.createElement('h6');
    h6.innerHTML = title;
    let details = document.createElement('details');
    details.innerHTML = body;
    let summary = document.createElement('summary');
    summary.innerHTML = "Детальніше";
    let p  = document.createElement('p');
    p.innerHTML  = body + `<br>` + `<a href='https://www.facebook.com/profile.php?id=100017952281760&epa=SEARCH_BOX'>Напишіть нам!<i class='material-icons'>message</i></a>`;
    p.className='textJob';
    details.append(p);
    details.append(summary);
    divImg.append(image);
    divInfo.append(h6)
    divInfo.append(details)
    div.append(divImg);
    div.append(divInfo);
    let parent = document.getElementsByClassName("flexParentJob")[0];
    parent.append(div);
    
}

