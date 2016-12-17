(function(){
  function autoPlayVideos(){
    var videos = Object.create(null);

    //autoplay videos
    var steps = document.querySelectorAll('.step');
     [].forEach.call(steps, function(step){
      var video = step.querySelector('video');
      if(!video) return;

      videos[step.id] = video;
      video.pause();
      video.currentTime = 0;
     })

    document.addEventListener('impress:stepenter', function(e){
      if(videos[e.srcElement.id]){
        videos[e.srcElement.id].play()
      }
    });
    document.addEventListener('impress:stepleave', function(e){
      if(videos[e.srcElement.id]){
        videos[e.srcElement.id].pause();
        videos[e.srcElement.id].currentTime = 0;
      }
    });
  }

  function removeVideos(){
    var videos = document.querySelectorAll('video');
    [].forEach.call(videos, function(video){
      try{
        video.parentNode.removeChild(video);
      }catch(err){
        console.log(err);
      }
    });
  }

  try {
    // autoplay or remove videos
    if(document.body.dataset.asqRole === 'presenter') {
     autoPlayVideos();
    }else if(document.body.dataset.asqRole === 'viewer'
      || document.body.dataset.asqRole === 'ghost') {
      removeVideos();
    }

    impress().init();
  } catch (err) {
    // noop
  }
})();


