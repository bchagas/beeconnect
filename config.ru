require "rack"
require "middleman/rack"
require "rack/contrib/try_static"
require "rack-zippy"
require "zippy_static_cache"

use ZippyStaticCache, :urls => ["/images", "/stylesheets", "/javascripts", "/fonts"]
use Rack::Zippy::AssetServer, "build"
use Rack::TryStatic,
  root: "build",
  urls: %w[/],
  try: [".html", "index.html", "/index.html"]

use Rack::TryStatic, :root => "build", :urls => %w[/], :try => [".html"]
run lambda {|env| [404, {"Content-type" => "text/plain"}, ["Not found"]]}
