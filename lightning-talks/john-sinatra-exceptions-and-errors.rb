# Sinatra makes dealing with errors very easy. The following methods can be treated
# like any other Sinatra route:

# 404 errors can be handled with #not_found:
not_found do
  puts "404 error!"
  erb :not_found
end

# 500 (server errors) can be handled with #error:
error do
  puts "500 error!"
  erb :server_trouble
end

# You can get the details of a 500 error by poking around the request env:
error do
  puts "500 error – this is what happened:" + request.env['sinatra.error'].message
end

# You can also assign error handlers to specific status codes:
error 403 do
  puts "403 error! You're not allowed here!"
  erb :forbidden
end