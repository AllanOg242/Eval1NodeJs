const Eventemitter = require('events');
const emitter = new Eventemitter();

emitter.on('Buzz', function() {
    if(emitter == 5*0 || emitter == 5*1){
        console.log('Buzz');
    }
})

emitter.emit('Buzz');