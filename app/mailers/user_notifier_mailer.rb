class UserNotifierMailer < ApplicationMailer
  
  def send_signup_email(user)
    @user = user
    mail( 
      :from => 'welcome@flexo.com',
      # :to => @user.email, # to make it dynamic
      :to => 'steven.an.le@gmail.com', # for demonstrational purposes
      :subject => "Welcome to Flexo!",
    )
  end
end
