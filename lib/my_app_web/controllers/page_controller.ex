defmodule MyAppWeb.PageController do
  use MyAppWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html", 
    	footer_scripts: [
    		"/js/tinymce.js"
    		])
  end
end
