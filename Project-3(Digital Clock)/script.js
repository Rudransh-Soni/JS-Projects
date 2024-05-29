const clock = document.getElementById('clock')              // here we select 'clock'

// SYNTAX of setInterval(function(){}, 1000)
// here we have to pass 2 values inside the setInterval. One is 'function(){}' and another is time duration. '1000' represents 1 sec so that on each second the clock will display the time

setInterval(function(){                             // setInterval() is a function which defines that at what interval it will do some task.
    let date = new Date()                          // here we declare one variable.
    clock.innerHTML = date.toLocaleTimeString()    // with the help of '.toLocalTimeString()' it will display the time.
}, 1000)                                            // this '1000' means that on every second it will display the time.