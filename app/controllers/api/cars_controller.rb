class Api::UsersController < ApplicationController

  def show
    @car = Car.find(params[:id])
  end

  def create
    @car = Car.new(car_params)

    if @car.save
      render :show
    else
      render json: @car.errors.full_messages, status: 422
    end
  end

  def index
    @car = Car.all
  end

  private
  def car_params
    params.require(:car).permit(
      :owner_id, :year, :make, :model, :price, :description, :mpg, :fuel_type, :num_doors, :num_seats,:bluetooth, :auxiliary_input, :heated_seats, :gps, :automatic_trans, :usb_ports, :backup_camera, :mods, :address, :city, :state, :zipcode, :longitude, :latitude
    )
  end
end