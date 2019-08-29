class UserNotifierMailer < ApplicationMailer
  
  def send_signup_email(user)
    @user = user
    mail( 
      :from => ENV['FROM_EMAIL'],
      # :to => @user.email, # to make it dynamic
      :to => ENV['TO_EMAIL'], # for demonstrational purposes
      :subject => "Welcome to Flexo!",
    )
  end
end
