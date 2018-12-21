json.partial! "api/cars/car", car: @car

json.firstName "#{@car.user.first_name}"

json.photoUrls @car.photos.map { |file| url_for(file) }