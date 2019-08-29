class Api::CarsController < ApplicationController

  def show
    @car = Car.with_attached_photos.find(params[:id])
  end

  def create
    @car = Car.new(car_params)

    if @car.save
      render 'api/cars/show'
      send_message(
        car_params[:phone_number], 
        "Thank you for listing your car! 🚗💨 From the only worker here, enjoy a virtual high five! 🖐 Yeah, that's all I can afford 😅"
      )
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
      :owner_id, :year, :make, :model, :price, :description, :mpg, :fuel_type, :num_doors, :num_seats,:bluetooth, :auxiliary_input, :heated_seats, :gps, :automatic_trans, :usb_ports, :backup_camera, :mods, :address, :city, :state, :zipcode, :longitude, :latitude, :phone_number, photos: []
    )
  end

  def send_message(phone_number, alert_message)
    @twilio_number = ENV['twilio_number']
    @client = Twilio::REST::Client.new(ENV['twilio_sid'], ENV['twilio_api_key'])
    
    message = @client.api.account.messages.create(
      # NoMethodError - undefined method `account' for 
      # <Twilio::REST::Client:0x00007fbf69e33de0> 
      # Did you mean? accounts:
      :from => @twilio_number,
      :to => phone_number,
      :body => alert_message,
      :media_url => "https://media2.giphy.com/media/QchsHzrPovJ3G/source.gif" 
    )
    puts message.to
  end
end