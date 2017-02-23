class UsersController < ApplicationController
  protect_from_forgery with: :exception

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def new

  end

  def create
    user = User.new(params)

    if user.save
      UserMailer.registration_confirmation(user).deliver
    end

  end

  def confirm_email
    user = User.find_by_confirm_token(params[:id])
    if user
      user.email_activate
    else
      #error
    end
  end

end
