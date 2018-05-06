// $( ".btn-Next" ).click(function() {
//     $(".text-field" ).animate({width:'toggle'},350);
//     $(".priv-box p").text("PRIVALUMAS NR. 2"),350;
//   });

  $(function() {
  
    var $left = $('.btn-Prev'),
        $right = $('.btn-Next'),
        $count = $('.brown-field .text-field').length,
        count = 1;
    
        $( ".btn-Next" ).on('click', function() {
      if (count == $count) {
        return false;
      } else {
        $(".text-field img").animate({marginBottom: '-=500px'},350);
        count++;
        if (count != 1 && count < $count) {
          $left.removeClass('x');
          $right.removeClass('x');
        } else if (count == $count) {
          $right.addClass('x');
        }
      }
    });
    
    $left.on('click', function() {
      if (count != 1) {
        $(".text-field img").animate({marginBottom: '+=500px'
          }, 'slow');
        count--;
        if (count != 1 && count < $count) {
          $left.removeClass('x');
          $right.removeClass('x');
        } else if (count == 1) {
          $left.addClass('x');
        }
      }
    });
    
  });