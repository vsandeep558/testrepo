---
permalink: "/"
---

### this is home page in docs folder and testing without index page chages with time ago filter
[test-hyperlink-working](test.html)<br>

[test-hyperlink-3](test)<br>
[another-sub-folder-test](/testrepo/subdocs/subd.html)

- <b>[T home page](t#what-is-the-tardis)</b>:



{% assign date = '2022-02-13T10:20:00Z' %}

- Original date - {{ date }}
- With timeago filter - {{ date | timeago }}
