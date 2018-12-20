class Api::CarsController < ApplicationController
  def show
    @car = Car.with_attached_photos.find(params[:id])
  end

  def create
    @car = Car.new(car_params)
    debugger
    if @car.save
      render 'api/cars/show'
    else
      render json: @car.errors.full_messages, status: 422
    end
  end

  def index
    @cars = Car.all
  end

  def destroy
    @car = Car.find(params[:id])
    if @car.delete
      @cars = Car.all
      render 'api/cars/show'
    else
      render json @car.errors.full_messages, status: 422
    end
  end

  def update
    @car = Car.find(params[:id])
    if @car.update(car_params)
      render 'api/cars/show'
    else
      render json: @car.errors.full_messages, status: 422
    end
  end

  private
  def car_params
    params.require(:car).permit(
      :owner_id, :year, :make, :model, :price, :description, :mpg, :fuel_type, :num_doors, :num_seats,:bluetooth, :auxiliary_input, :heated_seats, :gps, :automatic_trans, :usb_ports, :backup_camera, :mods, :address, :city, :state, :zipcode, :longitude, :latitude, photos: []
    )
    
  end
end