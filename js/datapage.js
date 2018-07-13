// start of datapage.js

var URL_pre = ""
if (DEVELOPMENT) URL_pre = SERVER_URL;

$.ajaxSetup({
  cache: false
});

function doAjax(dataType) {
  $.ajax({url: URL_pre + dataType + ".html",
  success: function(result){
    $("#sorttable").html(result);
    $('#table').tablesorter( {sortList: [[0,0]]} );
  }
});
};

$(document).ready(function() {

  //	var datatype = window.location.hash.substring(1);
  var datatype = window.location.search.substring(1);

  console.log(datatype);

  if (datatype == "fd") {
    doAjax('fd');
  } else if (datatype == "rq") {
    doAjax('rq');
  } else {
    doAjax('fd');
  }

  console.log(datatype);

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if ($(window).width() < 768) {
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - $('.navbar-header').outerHeight(true) + 1
          }, 1000);
          return false;
        }
      }
      else {
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - $('.navbar').outerHeight(true) + 1
          }, 1000);
          return false;
        }
      }

    }
  });

  $('#toTop').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });

  var timer;
  $(window).bind('scroll',function () {
    clearTimeout(timer);
    timer = setTimeout( refresh , 50 );
  });
  var refresh = function () {
    if ($(window).scrollTop()>100) {
      $(".tagline").fadeTo( "slow", 0 );
    }
    else {
      $(".tagline").fadeTo( "slow", 1 );
    }
  };
});
