(function(){
  var tbuttons = document.querySelectorAll('.h-stat-toggle');
  if(document.body.dataset.asqRole === "presenter"){
    [].forEach.call(tbuttons, function(tb){
      tb.addEventListener('change', function(e){
        var cont = document.getElementById(e.target.dataset.for);
        try{
          cont.style.display = e.target.checked ? 'block': 'none';
          setTimeout(function(){
            var stats = cont.querySelector('asq-text-input-q-stats');
            var statsPres = Polymer.dom(stats.root).querySelector('asq-text-input-q-stats-presenter')
            statsPres.$.leList.notifyResize();
          },1)
        }catch(err){
          console.log(err)
        }
      })
    })
  }else{
    [].forEach.call(tbuttons, function(tb){
      // remove stats container
      var cont = document.getElementById(tb.dataset.for);
      cont.parentNode.removeChild(cont);

      // remove button
      tb.parentNode.removeChild(tb)
    })
  }
  
})()