var email   = require("emailjs/email");

exports.home = function(req, res) {
  return res.render('home');
};

exports.request = function(req, res) {
  var from = 'auto-mailer@wwstay.com',
      server  = email.server.connect({
        user: from,
        password: process.env.MAILER_PASS,
        host: "smtp.gmail.com", 
        ssl: true
      });

  server.send({
    text: require('util').inspect(req.body),
    from: from,
    to: 'business@wwstay.com, travel@wwstay.com',
    subject: "Online request"
  }, function(err, message) { 
    if (err) {
      console.log(err);
      return res.render('request-error');
    }
    return res.render('request-received');
  });
}

exports.deals = function(req, res) {
  res.render('deals');
};

exports.terms = function(req, res) {
  res.render('terms');
};

exports.privacy = function(req, res) {
  res.render('privacy');
};

exports.about = function(req,res) {
  res.render('about');
};

exports.careers = function(req,res) {
  res.render('careers');
};

exports.leisure = function(req,res) {
  res.render('leisure');
};

exports.business = function(req,res) {
  res.render('business');
};

exports.contact = function(req,res) {
  res.render('contact');
};

exports.terms= function(req,res) {
  res.render('terms');
};

exports.privacy = function(req,res) {
  res.render('privacy');
};

exports.credits = function(req,res) {
  res.render('credits');
};
