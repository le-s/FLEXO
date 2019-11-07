@rentals.each do |rental|
  json.set! rental.id do 
    json.extract! rental, :id, :car_id, :renter_id, :reserve_date, :return_date
  end
end