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

  def createDomain

  end
end
