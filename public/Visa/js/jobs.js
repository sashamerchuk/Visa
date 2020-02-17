
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
    div.className = 'childFlex';
    let image = document.createElement('img');
    image.src = img;
    image.className = 'fotoJob'
    let h6 = document.createElement('h6');
    h6.innerHTML = title;
    let details = document.createElement('details');
    details.innerHTML = body;
    let summary = document.createElement('summary');
    summary.innerHTML = "Детальніше";
    details.append(summary);
    div.append(image);
    div.append(h6);
    div.append(details);

    let parent = document.getElementsByClassName("flexParent")[0];
    parent.append(div);
    
}
