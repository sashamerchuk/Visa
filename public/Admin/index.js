
const firebaseConfiguration = {
    apiKey: "AIzaSyDE_mkRwlu44t2pUnHheDsFZOz-JnckQNs",
    authDomain: "visa-64426.firebaseapp.com",
    databaseURL: "https://visa-64426.firebaseio.com",
    projectId: "visa-64426",
    storageBucket: "visa-64426.appspot.com",
    messagingSenderId: "371081822992",
    appId: "1:371081822992:web:1efb08cf17f28eea8adb95",
    measurementId: "G-CSXZ5GEXBN"
  };



document.getElementsByClassName('addJob')[0].style.display = 'none';
let provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().useDeviceLanguage();

provider.setCustomParameters({
  'display': 'popup'
})

firebase.auth().signInWithPopup(provider).then(function(result) {
  var token = result.credential.accessToken;
  var user = result.user;
  getDataUser(user.uid);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
});

function getDataUser(data){
  let key;
  let db = firebase.firestore();
  db.collection("roles").get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      key = doc.data().key;
  });

  if(data == key){
    document.getElementsByClassName('addJob')[0].style.display = 'block';
    async function getMarkers() {
      let firestore = firebase.firestore();
      const markers = [];
      let idJob = [];
      await firestore.collection('jobs').get()
        .then(querySnapshot => {
          querySnapshot.docs.forEach(doc => {
            idJob.push(doc.id);
            doc.data()['id'] = doc.id;
          markers.push(doc.data());
        });
      });
      return getData(markers,idJob);
    }
  getMarkers();
  function getData(data,id){
    for(let i =0;i<data.length;i++){
      data['id'] = id[i];
      showUsersData(data[i].imgSrc,data[i].jobTitle,data[i].jobBody,data.id);
    }
  }
  
  function showUsersData(img,title,body,id){
      let div = document.createElement('div');
      div.className = 'childFlexJob';
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
      p.innerHTML  = body + `<br>` + `<a href='https://www.facebook.com/profile.php?id=100017952281760&epa=SEARCH_BOX'>Напишіть нам!</a>` + `<button value=${id} onclick='deleteJob()' class='button'>X</button>`;
      p.className='textJob';
      details.append(p);
      details.append(summary);
      div.append(image);
      div.append(h6);
      div.append(p)
      let parent = document.getElementsByClassName("flexParentJob")[0];
      parent.append(div);
      
  }
  
  }else{
    window.location = 'https://visa-64426.firebaseapp.com';
  }
});
}



function deleteJob() {
    let db = firebase.firestore();
    event.target.remove();
    db.collection('jobs').doc(event.target.value).delete().then(function(){
      console.log("Document succesfully deleted");
    }).catch(function(error){
      console.error("Error removing document: ",error);
    });
    console.log('hello')
}