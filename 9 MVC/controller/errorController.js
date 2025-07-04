

exports.get404 = (req, res, next) => {
  res.statusCode = 404; //for user side error this is page not found error
  res.render('404.ejs',{pageTitle:'Page Not Found'});
}