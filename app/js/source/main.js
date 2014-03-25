/* jshint camelcase:false, loopfunc: true */

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#getPhotos').click(getPhotos);
    $('.frame').hide();

  }

  // var imgArray = [];
  // var linkArray = [];
  // var tagArray = [];

  function getPhotos(){
    if($('.frame').length === 0){
      var tags = $('#tags').val();
      $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        url: 'https://api.instagram.com/v1/tags/' + tags + '/media/recent?client_id=bc1a82e4c61a4ecbb3be6f354b2aba8f',
        success: function(data){
          for(var i = 0; i < 9; i++){
            var $div = $('<div>').css('background-image', 'url('+data.data[i].images.thumbnail.url+')').addClass('frame').attr('id', 'frame' + [i]);
            $div.wrap('<a target="blank" href="' + data.data[i].link + '"></a>');
            $('#target').append($div);

          // imgArray.push(data.data[i].images.thumbnail.url);
          // linkArray.push(data.data[i].link);
          // tagArray.push(data.data[i].tags);

          // console.log(imgArray);
          // console.log(linkArray);
          // console.log(tagArray);
          }
        }
      });
      randomizer();
    }
  }

  function randomizer() {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // var counter = 0;
    (function numShuffle(){
      // counter++;
      var random = _.shuffle(nums);
      var random1 = random[3];
      var random2 = random[6];
      var random3 = random[8];
      var $ranFrame1 = $('#frame' + random1);
      var $ranFrame2 = $('#frame' + random2);
      var $ranFrame3 = $('#frame' + random3);
      //var $Frames = $ranFrame1.add($ranFrame2).add($ranFrame3);
      setTimeout(function(){
        $ranFrame1.fadeIn(8000).fadeOut(10000);
        $ranFrame2.fadeIn(8000).fadeOut(10000);
        $ranFrame3.fadeIn(8000).fadeOut(10000);
      }, 4000);
      setTimeout(numShuffle, 3000);
    })();
  }
})();

  // function getTweets(){
  //
  //   $.ajax({
  //     url : "",
  //     dataType : "json",
  //     timeout : 15000,
  //   });
  // }
