var app = app || {};

app.main = (function(window,document) {
  var _$carousel,
    _currentCarouselPosition,
    _clickSound;

  var _cacheSelectors = function() {
    _$carousel = $('#carousel');
    _$carouselItems = _$carousel.children();
    _$body = $('body');
  };

  var _initSounds = function() {
    _clickSound = new buzz.sound('/sounds/thunder', { formats: ['mp3'] });
  };
  
  var _buildCarouselNavigation = function() {
    _currentCarouselPosition = _$carousel.find('.active').index();

    var $previousButton = $('<a class="carouselBtn" href="#">Previous Image</a>').on('click', function(e) {
      e.preventDefault();

      if(_currentCarouselPosition == 0) {
        _transitionTo(_$carouselItems.length - 1)
      } else {
        _transitionTo(_currentCarouselPosition - 1)
      }
    });
    
    var $nextButton = $('<a class="carouselBtn" href="#">Next Image</a>').on('click', function(e) {
      e.preventDefault();

      if(_currentCarouselPosition == _$carouselItems.length - 1) {
        _transitionTo(0);
      } else {
        _transitionTo(_currentCarouselPosition + 1);
      }
    });

    _$body.append($previousButton);
    _$body.append($nextButton);
  };

  var _transitionTo = function(index) {
    _clickSound.stop();
    _clickSound.play();

    _$carousel.find('.active').removeClass('active');
    _$carouselItems.eq(index).addClass('active');

    _currentCarouselPosition = index;
  };
  
  var self = {
    init: function() {
      _cacheSelectors();
      _initSounds();
      _buildCarouselNavigation();
    }
  };

  return self;
})(this,this.document);

$(document).ready(function() {
  app.main.init();
});