class SessionsController < ApplicationController

  def create
    user = user.find_by_email(params[:email],downcase)

    if user && user.authenticate(params[:password])
      if user.email_confirmed
        sign_in user
      else
        #error_confirmation
      end
    else
      #error_wrong_pass/email
    end

  end

end
