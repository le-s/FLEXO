# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

Jbuilder.key_format camelize: :lower

ActionMailer::Base.smtp_settings = {
  :user_name => 'apikey',
  :password => Rails.application.credentials.sendgrid[:secret_access_key],
  :domain => 'Flexo.com',
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}
