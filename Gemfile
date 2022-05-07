source "https://rubygems.org"

gem "jekyll", "~> 4.2"
# This is the default theme for new Jekyll sites. You may change this to anything you wish
# gem "github-pages", group: :jekyll_plugins
gem 'jekyll-theme-leap-day', '~> 0.2.0'

group :jekyll_plugins do
  gem "jekyll-timeago", "~> 0.13.1"
  gem 'jekyll-optional-front-matter'
  gem 'jekyll-relative-links'
  gem 'jekyll-commonmark-ghpages'
  gem "jekyll-remote-theme"
  gem 'jekyll-default-layout'
  gem 'jekyll-pre-commit'
  gem 'jemoji'
end
# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "webrick", "~> 1.7"
