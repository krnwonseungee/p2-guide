get '/' do
  @trips=Trip.all
  erb :index
end

post '/trips' do
  # p "IN /trips "
  if request.xhr?
    # @trip =
     Trip.create(params)
    # "#{params[:location]}"
    #@trip.to_json
    500
  else
    Trip.create(params)
    redirect '/'
   end
end

put '/trips/:id' do
  trip = Trip.find(params[:id])
  trip.update_attributes(params[:trip])
  trip.save
  redirect '/'
end

get '/cool_trips' do
  if request.xhr?
  content_type :json
  {:location => "Corsica", :price=> 2200}.to_json
  else
    @trip=Trip.new(location:"Corsica", price: 2200)
    erb :index
  end
end

