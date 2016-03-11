// jQuery ready ()
$(function(){
  $("#category-nav-toggle").click( doExpandCategoryContainer );
  $("#search-nav-toggle").click( doExpandSearchContainer );
  $("#search-button").click( doSearch );
  $("#search-button-b").click( doSearchB );
  colorNavigation();
});

function colorNavigation() {
  var url = window.location.href;
  if (url.indexOf('search') > -1) {
      $('.glyphicon-search').css('color', 'purple');
      console.log('on the search page');
  }
  else if (url.indexOf('submit') > -1) {
      $('.glyphicon-plus').css('color', 'purple');
      console.log('on the search page');
  }
  else if (url.indexOf('profile') > -1) {
      $('.glyphicon-user').css('color', 'purple');
      console.log('on the search page');
  }
  else {
      $('.glyphicon-home').css('color', 'purple');
      console.log('on the search page');
  }
}



// Expand Category container
var categoryExpanded = false;
function doExpandCategoryContainer () {
  var inner = $("#category-nav-inner");
  var outer = $("#category-nav-outer");

  if (categoryExpanded) {
    outer.animate( {height: 0} );
  }
  else {
    if (searchExpanded) {
      var searchInner = $("#search-nav-inner");
      var searchOuter = $("#search-nav-outer");
      searchOuter.animate( {height: 0} );
      searchExpanded = !searchExpanded;
    }
    outer.animate( {height: inner.innerHeight() + "px"} );
  }
  categoryExpanded = !categoryExpanded;
}

// Expand Search container
var searchExpanded = false;
function doExpandSearchContainer () {
  var inner = $("#search-nav-inner");
  var outer = $("#search-nav-outer");

  if (searchExpanded) {
    outer.animate( {height: 0} );
  }
  else {
    if (categoryExpanded) {
      var categoryInner = $("#category-nav-inner");
      var categoryOuter = $("#category-nav-outer");
      categoryOuter.animate( {height: 0} );
      categoryExpanded = !categoryExpanded;
    }
    outer.animate( {height: inner.innerHeight() + "px"} );
  }
  searchExpanded = !searchExpanded;
}


function doSearch (e) {
  e.preventDefault();

  var searchVal = $('#search-field').val().replace(/\s+/g, ' ').toLowerCase();

  // Redirect
  $(location).attr('href', '/pages/' + searchVal);
}

function doSearchB (e) {
  e.preventDefault();

  var searchVal = $('#search-field').val().replace(/\s+/g, ' ').toLowerCase();

  // Redirect
  $(location).attr('href', '/pagesb/' + searchVal);
}
