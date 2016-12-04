function CountDownTimer(duration, granularity) {
  this.duration = duration;
  this.granularity = granularity || 1000;
  this.tickFtns = [];
  this.running = false;
  this.destroyed = false;
}

CountDownTimer.prototype.start = function() {
  if (this.running) {
    return;
  }
  this.running = true;
  var start = Date.now(),
      that = this,
      diff, obj;

  (function timer() {
    if(that.destroyed) return;

    diff = that.duration - (((Date.now() - start) / 1000) | 0);

    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
      diff = 0;
      that.running = false;
    }

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
  }());
};

CountDownTimer.prototype.onTick = function(ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};


CountDownTimer.prototype.destroy = function() {
   this.tickFtns = [];
   this.destroyed = true;
};

CountDownTimer.parse = function(seconds) {
  return {
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};



document.addEventListener("DOMContentLoaded", function() {
  var timers = Object.create(null);
  var steps = document.querySelectorAll('.step[data-timer]')

  if(steps.length == 0) return;

  steps = [].slice.call(steps, 0)

  //add timer markup
  steps.forEach(function(step){
    var div = document.createElement("div");
    div.classList.add('step-timer');
    step.appendChild(div);
  })


  //start timer on stepenter
  document.addEventListener("impress:stepenter", function(event){
    var time;
    if((time= parseInt(event.target.dataset.timer))> 0){

      var timerEl = event.target.querySelector('.step-timer');

      if(!timerEl) return;

      var format =  function (minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerEl.textContent = minutes + ':' + seconds;
      }

      var timer = new CountDownTimer(time)
      timer.onTick(format).start();
      timers[event.target.id] = timer;
    }
  })


   //destroy timer on stepenter
  document.addEventListener("impress:stepleave", function(event){
    if(timers[event.target.id]){
      timers[event.target.id].destroy();
    }
  })

});