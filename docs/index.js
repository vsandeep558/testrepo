---
layout: none
---
 window.store = {
    {% for page in site.pages %}
            {% if page.name != "search.html"  and page.name != "index.js" %}
                  "{{ page.url | slugify }}": {
                    "title": "{{ page.name | xml_escape }}",
                    "content": {{ page.content | strip_html | strip_newlines | jsonify }},
                    "url": "{{ page.url | xml_escape }}"
                  }
                   {% unless forloop.last %},{% endunless %}
              {% endif %}
    {% endfor %}

  };
