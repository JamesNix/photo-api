/* jshint camelcase:false, loopfunc: true */

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#getPhotos').click(getPhotos);
    $('.frame').hide();
  }

  function getPhotos(){
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      cache: false,
      url: 'https://api.instagram.com/v1/tags/nashvillefood/media/recent?client_id=bc1a82e4c61a4ecbb3be6f354b2aba8f',
      success: function(data) {
        console.log(data);
        for (var i = 0; i < 18; i++) {
          var $div = $('<div>').css('background-image', 'url('+data.data[i].images.thumbnail.url+')').addClass('frame');
          //var $link = $('<a href=' + data.data[i].link + '></a>');
          $('#target').append($div);
          //$('#target').append('<img src=' + data.data[i].images.thumbnail.url+ ' />');
        }
      }
    });
    imgFade();
  }

  function imgFade() {
    $('#target .frame').first().appendTo('#target').fadeOut(10000);
    $('#target .frame').first().fadeIn(10000);
    setTimeout(imgFade, 14000);
  }
  imgFade();
})();
