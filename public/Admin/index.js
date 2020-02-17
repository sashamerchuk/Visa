var firebase = require('firebase');
var firebaseui = require('firebaseui');
// or using ES6 imports:
import * as firebaseui from 'firebaseui'
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
  var firestore;

  async function getMarkers() {
    let firestore = firebase.firestore();
    const markers = [];
    await firestore.collection('jobs').get()
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


console.log(firestore);

async function getMarkers() {
    let firestore = firebase.firestore();
    const markers = [];
    await firestore.collection('jobs').get()
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
    div.append(image);
    div.append(h6);
    div.append(p)
    // div.append(details);

    let parent = document.getElementsByClassName("flexParentJob")[0];
    parent.append(div);
    
}



function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  console.log('statusChangeCallback');
  console.log(response);                   // The current login status of the person.
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    testAPI();  
  } else {                                 // Not logged into your webpage or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this webpage.';
  }
}


function checkLoginState() {               // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function(response) {   // See the onlogin handler
    statusChangeCallback(response);
  });
}


window.fbAsyncInit = function() {
  FB.init({
    appId      : '{app-id}',
    cookie     : true,                     // Enable cookies to allow the server to access the session.
    xfbml      : true,                     // Parse social plugins on this webpage.
    version    : '{api-version}'           // Use this Graph API version for this call.
  });


  FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
    statusChangeCallback(response);        // Returns the login status.
  });
};


(function(d, s, id) {                      // Load the SDK asynchronously
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var responceApi;
function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    console.log('Successful login for: ' + response.id);
    responceApi = response.id;
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}
// document.addEventListener("DOMContentLoaded", function(){
//   var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
//   console.log(scrollbar);
//   document.querySelector('[href="#openModal"]').addEventListener('click',function(){
//     document.body.style.overflow = 'hidden';
//     document.querySelector('#openModal').style.marginLeft = scrollbar;
//   });
//   document.querySelector('[href="#close"]').addEventListener('click',function(){
//     document.body.style.overflow = 'visible';
//     document.querySelector('#openModal').style.marginLeft = '0px';
//   });
// });
// console.log(responceApi);
// var delay_popup = 5000;
    setTimeout(document.querySelector('[href="#openModal"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;}), 300);

document.getElementsByClassName('close')[0].addEventListener('click',referToMainSite);

function referToMainSite(){
    if(responceApi == 552097222065349){
      console.log(responceApi);
      document.querySelector('[href="#close"]').addEventListener('click',function(){
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
      });
    }else{
      console.log(responceApi);
      window.location = "https://visa-64426.firebaseapp.com/index.html";
    }
  }

  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().languageCode = 'fr_FR';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
provider.setCustomParameters({
  'display': 'popup'
});

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  console.log(token)
  // The signed-in user info.
  var user = result.user;
  console.log(user);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  console.log(errorCode);
  var errorMessage = error.message;
  console.log(errorMessage);
  // The email of the user's account used.
  var email = error.email;
  console.log(email)
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(credential);
  // ...
});

firebase.auth().signInWithRedirect(provider);
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
