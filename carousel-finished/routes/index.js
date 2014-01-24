
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '5 in 5: Client-Side JS' });
};