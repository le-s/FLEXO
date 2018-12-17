json.partial! "api/cars/car", car: @car

json.firstName "#{@car.user.first_name}"