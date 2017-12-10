class SessionsController < ApplicationController
  def new; end

  def create
    set_user

    session[:user_id] = @user.id if @user

    redirect_to dashboard_show_path
  end

  def destroy
    session[:user_id] = nil

    reset_session

    redirect_to root_path
  end

  private

  def set_user
    @user = User.find_by(session_params)
  end

  def session_params
    params.require(:session).permit(:dni, :supply_code)
  end
end
