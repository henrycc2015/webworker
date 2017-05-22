console.log('main.js start');
for(var i = 0;i<500;i++){
    var worker = new Worker('worker.js');
}


worker.onmessage = function (event) {
    console.log('receive result: ' + event.data);
}
var num = 5;
worker.postMessage(num);