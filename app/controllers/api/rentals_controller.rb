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
    else
      render json: @rental.errors.full_messages, status: 422
    end
  end

  def destroy
    @rental = Rental.find(params[:id])

    if @rental.delete
      render 'api/rentals/show'
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
  
end
