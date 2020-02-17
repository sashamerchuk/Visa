let admin = prompt("Enter the name login",'');
let password = prompt("Enter the password",);
if(admin === 'igorok1892@gmail.com'&& password === 'qwerty12'){
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


document.getElementById('sendJobButton').addEventListener('click',sendJob);
var val = 0;


function sendJob(){
    let imgSrc = document.getElementById('jobImage').value.trim();
    let jobTitle = document.getElementById('jobTitle').value.trim();
    let jobBody = document.getElementById('jobBody').value.trim();

    if(jobTitle ==="" || jobTitle ==null){
        alert("Add the title to Job!!!");
        return;
    }
    if(jobBody ==="" || jobBody == null){
        alert("Add the body to jobBody!!!");
        return;
    }
    if(sendJobToServer(imgSrc,jobTitle,jobBody)){
        alert("Successfully send to server");
    };
    document.getElementById('jobImage').value='';
   document.getElementById('jobTitle').value = "";
   document.getElementById('jobBody').value = "";
}

function sendJobToServer(imgSrc,jobTitle,jobBody) {
    db.collection('jobs').add({
        imgSrc: imgSrc,
        jobTitle: jobTitle,
        jobBody: jobBody,
    }).then(function(docRef){
        console.log("Doc written with ID:",docRef.id);
    }).catch(function(error){
        console.error('Error adding document: ',error)
    });
}}else{
    alert("Ви не маєте доступу до цієї сторінки!");
    window.location = "https://visa-64426.firebaseapp.com/index.html";
}

async function getUser() {
    const markers = [];
    await firebase.firestore().collection('users').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
        markers.push(doc.data());
      });
    });
    return getData(markers);
  }
getUser();
    

function getData(data){
    data.forEach(key => {
        val+=1;
        showUsersData(val,key.name,key.email,key.number)
    })
}

function showUsersData(val,name,email,number){
    let tr = document.createElement('tr');
    let tdNumVal = document.createElement('td');
    let tdName = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdNumber = document.createElement('td');
    tdNumVal.innerHTML = val;
    tdName.innerHTML=name;
    tdEmail.innerHTML = email;
    tdNumber.innerHTML = number;
    tr.append(tdNumVal);
    tr.append(tdName);
    tr.append(tdEmail);
    tr.append(tdNumber);

    let tBody = document.getElementById('users');
    tBody.append(tr);

}


async function getUserFeedBack() {
    const markers = [];
    await firebase.firestore().collection('feedBack').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
        markers.push(doc.data());
      });
    });
    return getDataFeedBack(markers);
  }
getUserFeedBack();
    

function getDataFeedBack(data){
    data.forEach(key => {
        val+=1;
        showUsersFeedBackData(val,key.name,key.email,key.number)
    })
}

function showUsersFeedBackData(val,name,email,number){
    let tr = document.createElement('tr');
    let tdNumVal = document.createElement('td');
    let tdName = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdNumber = document.createElement('td');
    tdNumVal.innerHTML = val;
    tdName.innerHTML=name;
    tdEmail.innerHTML = email;
    tdNumber.innerHTML = number;
    tr.append(tdNumVal);
    tr.append(tdName);
    tr.append(tdEmail);
    tr.append(tdNumber);

    let tBody = document.getElementById('users');
    tBody.append(tr);

}
