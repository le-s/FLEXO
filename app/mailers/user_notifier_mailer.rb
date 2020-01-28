class UserNotifierMailer < ApplicationMailer
  
  def send_signup_email(user)
    @user = user
    mail( 
      :from => 'welcome@flexo.com',
      :to => @user.email,
      :bcc => 'steven.an.le@gmail.com',
      :subject => "Welcome to Flexo!",
    )
  end
end
