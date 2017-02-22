class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |user|
      user.string :name
      user.string :surname
      user.string :email
      user.string :pasword
      user.string :password_d
      user.string :remember_token
      user.string :avatar
      user.datetime :created_at
      user.datetime :uploadet_at
    end
  end
end
