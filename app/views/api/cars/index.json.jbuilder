@cars.each do |car|
  json.set! car.id do 
    json.partial! 'car', car: car
    json.photoUrl url_for(car.photos[0])
  end

end
