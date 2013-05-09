
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: "OMG COLORS"
  });
};

exports.pleasant = function(req, res){
	res.render('index', {
    title: "How Calming",
    width: 25,
    center: 235
  });
}