class Api::CarsController < ApplicationController
  # rescue_from StandardError do |exception|
  #   trigger_sms_alerts(exception)
  # end

  # def trigger_sms_alerts(e)
  #   @alert_message = "
  #     [This is a test] ALERT! 
  #     It appears the server is having issues. 
  #     Exception: #{e}. 
  #     Go to: http://newrelic.com for more details."
  #   @image_url = "http://howtodocs.s3.amazonaws.com/new-relic-monitor.png"

  #   @admin_list = YAML.load_file('config/administrators.yml')
  #   @admin_list.each do |admin|

  #     begin
  #       phone_number = admin['phone_number']
  #       send_message(phone_number, @alert_message, @image_url)
  #       flash[:success] = "Exception: #{e}. Administrators will be notified."
  #     rescue
  #       flash[:alert] = "Something went wrong."
  #     end

  #   end

  #   redirect_to '/'
  # end

  def show
    @car = Car.with_attached_photos.find(params[:id])
  end

  def create
    @car = Car.new(car_params)

    if @car.save
      render 'api/cars/show'
      send_message(car_params[:phone_number], 'Thank you for signing up')
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
        :from => @twilio_number,
        :to => phone_number,
        :body => alert_message,
        # US phone numbers can make use of an image as well.
        # :media_url => image_url 
      )
      puts message.to
    end
end