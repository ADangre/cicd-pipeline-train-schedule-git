function populateTrains() {
    var trainsContent = '';
  
    $.getJSON( '/trains', function( data ) {
  
        trains = data
  
      $.each(data, function(index){
        trainsContent += '<div class="p-2"><a href="#" class="linkshowtrain" rel="' + index + '">' + this.name + '</a></div>';
      });
      $('#trains').html(trainsContent);
      $('#trains').on('click', 'div a.linkshowtrain', showTrainInfo);
      
      print("hello India!");
      print("Are you sure you're doing it right.")
    });
  };