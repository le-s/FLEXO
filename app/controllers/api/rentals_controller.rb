class Api::RentalsController < ApplicationController
  def index
    if params[:userId]
      @rentals = User.find(params[:userId]).rentals
    else
      render status: 422
    end

    render :index
  end

  def show
    @rental = Rental.find(params[:id])
  end

  def create
    @rental = Rental.new(rental_params)

    if @rental.save
      render 'api/rentals/show'
      send_message(
        "Thank you for using Flexo. We hope you enjoy your sweet ride!"
      )
    else
      render json: @rental.errors.full_messages, status: 422
    end
  end

  def destroy
    @rental = Rental.find(params[:id])

    if @rental.delete
      render :show
      send_message(
        "Sorry this rental didn't work out. Feel free to check our catalog for other cars!"
      )
    else
      render json: @rental.errors.full_messages, status: 422
    end
  end

  def update
    @rental = Rental.find(params[:id])

    if @rental.update(rental_params)
      render 'api/rentals/show'
    else
      render json: @rental.errors.full_messages, status: 422
    end
  end

  private
  def rental_params
    params.require(:rental).permit(
      :car_id, :renter_id, :reserve_date, :return_date
    )
  end
  
  def send_message(alert_message)
    @twilio_number = Rails.application.credentials.twilio[:number]
    @client = Twilio::REST::Client.new(Rails.application.credentials.twilio[:access_key_id], Rails.application.credentials.twilio[:secret_access_key])
    
    message = @client.api.account.messages.create(
      :from => @twilio_number,
      :to => '+14086058817',
      :body => alert_message,
    )
    puts message.to
  end
end
