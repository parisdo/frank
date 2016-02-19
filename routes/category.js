/*
 * GET Category Page
 */


var categories = require('./placeholders/categories.json');
var posts = require('./placeholders/posts.json');


// Render the page
exports.view = function(req, res) {
  var categoryName = req.params.category;

  var category = {}
  for (var i = 0; i < categories.length; i++) {
    var cat = categories[i];
    if (cat.short && (cat.short == categoryName)) {
      category = cat;
    }
  }

  res.render('category', {
    'categories' : categories,
    'category' : category,
    'posts' : posts
  });
};
