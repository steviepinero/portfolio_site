require "sinatra"

get "/" do
  erb :index
end

get "/about" do
  erb :about
end

get "/contact" do
  erb :contact
end

get "/car-api" do
 File.read(File.join('public', 'carapi.erb'))
end
