class ApplicationController < ActionController::Base
  before_action :underscore_params!
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout!
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  def require_login
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

  private
  def underscore_params!
    if params[:user]
      params[:user] = params[:user].transform_keys!(&:underscore)
    end
  end
end
