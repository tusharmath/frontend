exports.home = function(req, res){
  res.render('home');
};
exports.deals = function(req, res){
  res.send('deals');
};
exports.terms = function(req, res){
  res.send('terms');
};
exports.privacy = function(req, res){
  res.send('privacy');
};
