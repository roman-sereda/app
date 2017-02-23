class User < ActiveRecord::Base

  before_create :confirmation_token

private

  def confirmation_token
    if self.confrim_token.blank?
      self.confirm_token = SecureRandom.urlsafe_base64(32).to_s
    end
  end

  def email_activate
    self.email_confirmed = true
    self.confirmed_token = nil
    save!(:validate => false)
  end

end
