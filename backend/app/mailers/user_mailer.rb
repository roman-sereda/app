class UserMailer < ActionMailer::Base
  default :from => "roman.sereda@outloo.com"

  def registration_confirmation(user)
    @user = user
    mail(:to => "#{user.name} <#{user.email}>",
         :subject => "Registration confirmation")
  end
end
