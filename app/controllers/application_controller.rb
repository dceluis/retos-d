class ApplicationController < ActionController::Base
  include Pundit
  add_flash_types :success, :error
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  def require_user!
    if current_user
      true
    else
      redirect_to new_sessions_path, alert: "You need to sign in or sign up before continuing."
    end
  end
end
