Function.prototype.myThrottle = function(interval) {
    let tooSoon = false
    return (...args) => {
        if (tooSoon === false) {
            tooSoon = true
            setTimeout(() => tooSoon = false, interval)
            this(...args)
        }
    }
}

class Neuron {
    fire() {
      console.log("Firing!");
    }
  }
  
  const neuron = new Neuron();
  // When you create a new Neuron,
  // you can call #fire as frequently as you want
  
  // The following code will try to #fire the neuron every 10ms. Try it in the console:
  const interval = setInterval(() => {
    neuron.fire();
  }, 10);

//   clearInterval(interval)

neuron.fire = neuron.fire.myThrottle(500)


