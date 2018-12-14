@cars.each do |car|
  json.set! car.id do 
    json.partial! 'car', car: car
  end
end