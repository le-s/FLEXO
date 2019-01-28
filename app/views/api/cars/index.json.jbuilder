@cars.each do |car|
  json.set! car.id do 
    json.extract! car, :id, :year, :make, :model, :price, :longitude, :latitude
    json.photoUrl url_for(car.photos[0])
  end

end
