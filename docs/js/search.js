  $( document ).ready(function() {
      console.log( "ready!" );
      // $( "#loading-img" ).hide();
      var searchTerm= null;
        $( "#search-box" ).keypress(function() {
             $("#search-box").attr("placeholder", "Please enter the search word ");
             $('#search-box').css('border','1px solid #ccc'); //border: 1px solid #555;
             $('#search-results').empty();
        });

        $( "#searchButton" ).click(function() {
                $('#search-results').empty();
                searchTerm = $("#search-box").val();
                        if (searchTerm) {
                            $( "#search-results" ).empty();
                            document.getElementById('search-box').setAttribute("value", searchTerm);
                            // Initalize lunr with the fields it will be searching on. I've given title
                            // a boost of 10 to indicate matches on this field are more important.
                            var idx = lunr(function () {
                              this.field('id');
                              this.field('title', { boost: 10 });
                              this.field('content');
                                for (var key in window.store) { // Add the data to lunr
                                      this.add({
                                       'id': key,
                                       'title': window.store[key].title,
                                       'content': window.store[key].content
                                      });
                                  }
                            });
                             var results = idx.search(searchTerm);
                             displaySearchResults(results, window.store);
                          }else{
                             $("#search-box").attr("placeholder", "Please enter the search word ");
                             $('#search-box').css('border','1px solid #FF0000');
                             $('#search-box').append('<style>.search::placeholder{color:black}</style>');
                             var searchResults = document.getElementById('search-results');
                             searchResults.innerHTML = '<h2 style="font-weight: bold; font-size: 20px; color:red;">Please enter search word</h2>';
                          }
        });
  });

  function displaySearchResults(results, store) {
      var searchResults = document.getElementById('search-results');
      if (results.length) {
        var appendString = '';
        for (var i = 0; i < results.length; i++) {  // Iterate over the results
          var item = store[results[i].ref];
          var pageName = item.title.replaceAll('-',' ').replace('.md','');
          const words = pageName.split(" ")
         var updatedName=  words.map((word) => {
              return word[0].toUpperCase() + word.substring(1);
          }).join(" ");
          var finalUrl = "/testrepo"+item.url;
          appendString += '<li><a href="' + finalUrl + '"><h3 style="color:#4276b6;">' + updatedName + '</h3></a>';
          appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
        }
        searchResults.innerHTML = appendString;
      } else {
        searchResults.innerHTML = '<li style="font-weight: bold; font-size: 20px;">No results found</li>';
      }
      var newHeight = $("#search-results").val();
      $('section').css('height','auto');
    }

