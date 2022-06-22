  $( document ).ready(function() {
      console.log( "ready!" );
      // $( "#loading-img" ).hide();
      var searchTerm= null;
        $( "#search-box" ).keypress(function() {
             $("#search-box").attr("placeholder", "Please enter the search word ");
             $('#search-box').css('border','1px solid #ccc'); //border: 1px solid #555;
             $('#search-results-default').empty();

        });

        $( "#searchButton" ).click(function() {
                $('#search-results-default').empty();
                searchTerm = $("#search-box").val();
                        if (searchTerm) {
                            $( "#search-results-default").empty();
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
                             displaySearchResults(results, window.store, searchTerm);
                          }else{
                             $("#search-box").attr("placeholder", "Please enter the search word ");
                             $('#search-box').css('border','1px solid #FF0000');
                             $('#search-box').append('<style>.search::placeholder{color:black}</style>');
                              var searchResults = document.getElementById('search-results-default');
                              $('#section-block').hide();
                              $('#nav-block').hide();
                              searchResults.innerHTML = '<section id="section-block-search-results" style="width: 990px;"> <ul>'
                                                         +'<li style="font-weight: bold; font-size: 20px; color:#FF0000;">Please enter the search word</li> </ul></section>';;

                          }
        });
  });

  function displaySearchResults(results, store, searchTerm) {
      var searchResults = document.getElementById('search-results-default');
      $('#section-block').hide();
      $('#nav-block').hide();
      if (results.length) {
        var appendString = '<section id="section-block-search-results" style="width: 990px;"> <ul>';
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
        appendString += '</ul></section>';
        searchResults.innerHTML = appendString;
      } else {
         var appendString = '<section id="section-block-search-results" style="width: 990px;"> <ul>'
                            +'<li style="font-weight: bold; font-size: 20px;">No results found for "'+searchTerm+'" </li> </ul></section>';
        searchResults.innerHTML = appendString;
      }
      var newHeight = $("#search-results-default").val();
      $('section').css('height','auto');
    }

