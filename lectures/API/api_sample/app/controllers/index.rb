get '/' do
  erb :index
end

get '/strava' do
  content_type :json


  # data.to_json

  begin
     data =  JSON.parse(open("https://www.strava.com/api/v3/athlete", "Authorization" => "Bearer #{ENV['STRAVA_TOKEN']}").read)

  rescue ZeroDivisionError => e
     p "Zero #{e.inspect}"



  rescue StandardError => e
     p e.inspect


  ensure

  end

  data.to_json
end



