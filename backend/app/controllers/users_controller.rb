class UsersController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    render
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
