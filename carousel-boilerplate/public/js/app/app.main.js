var app = app || {};

app.main = (function(window,document) {
  var self = {
    init: function() {
      console.log("hello world!");
    }
  };

  return self;
})(this,this.document);

$(document).ready(function() {
  app.main.init();
});