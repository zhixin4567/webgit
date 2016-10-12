// var obj = {
//     init: function bm_init() {
//         console.log('init');
//         var qie = document.getElementById("qie");
//         qie.addEventListener('click', this);
//     },
//     handleEvent: function bm_handleEvent(evt) {
//     	  console.log('111');
//         switch (evt.type) {
//             case 'click':
//               console.log('222');
//                 break;

//         }
//     }
// }

// obj.init();
// var qie = document.getElementById("qie");
// qie.addEventListener('click', this);
// function handleEvent(evt) {
// 	console.log('222');
// }

var PowerSaveHandler = (
	function PowerSaveHandler() {

  var _powerSaveResume = {};
  var _powerSaveEnabled = false;
  var _states = {
    'wifi.enabled' : true,
    'ril.data.enabled' : false,
    'bluetooth.enabled' : false,
    'geolocation.enabled' : false
  };

    for (var j in _states) {
      _powerSaveResume[j] = _states[j];
        console.log(_powerSaveResume[j]);
    };


})()
  


 