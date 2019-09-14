# Production Readme

[FLEXO Live](https://flex-o.herokuapp.com/#/)

[Design docs](https://github.com/le-s/FLEXO/wiki)

FLEXO is a full-stack, one page application that utilizes Ruby on Rails for the backend, PostgreSQL for the database, and React/Redux for the frontend. This website features extraordinary cars available to rent to experience the road from a different window. Find the car that will fit the experience for you by viewing the different details each car has.

## Technologies used
- Javascript
- Ruby on Rails
- React/Redux
- PostgreSQL
- HTML/CSS

## Features

- Frontend to backend user authentication
- Users can view different cars in an organized manner
- Each car displays a detailed specs and information about the car
- Users are able to create their own cars for rent
- Users receive a text message/email upon signing up for an account or listing their cars
- Users can search for a car in any location with the Google Maps API

## Highlights

### Twilio SMS API
A text message is sent to the user whenever they list one of their cars. (SMS will only be sent to my personal phone due to Twilio trial account)

<a href="https://imgur.com/a/AkuNe3g"><img src="./app/assets/images/sms.gif" width="400" height="auto" title="source: imgur.com"/></a>

```rb
# ./app/controllers/api/cars_controller.rb
def create
  @car = Car.new(car_params)

  if @car.save
    render 'api/cars/show'
    send_message(
      car_params[:phone_number], 
      "Thank you for listing your car! 🚗💨 From the only worker here, enjoy a virtual high five! 🖐 Yeah, that's all I can afford 😅"
    )
  else
    render json: @car.errors.full_messages, status: 422
  end
end
  
def send_message(phone_number, alert_message)
  @twilio_number = ENV['twilio_number']
  @client = Twilio::REST::Client.new(ENV['twilio_sid'], ENV['twilio_api_key'])

  message = @client.api.account.messages.create(
    :from => @twilio_number,
    :to => phone_number,
    :body => alert_message,
    :media_url => "https://media2.giphy.com/media/QchsHzrPovJ3G/source.gif" 
  )
  puts message.to
end
```

### SendGrid Email API
An email is sent to the user when they create an account.

<a href="https://imgur.com/a/iRXdQ7r"><img src="https://i.imgur.com/c5IbKoV.png" title="source: imgur.com"/></a>

```rb
# ./app/controllers/api/users_controller.rb
def create
  @user = User.new(user_params)
  
  if @user.save
    login(@user)
    render 'api/users/show'
    UserNotifierMailer.send_signup_email(@user).deliver
  else
    render json: @user.errors.messages, status: 422
  end
end
  
# ./app/mailer/user_notifier_mailer.rb
def send_signup_email(user)
  @user = user
  
  mail( 
    :from => ENV['FROM_EMAIL'],
    :to => @user.email, 
    :subject => "Welcome to Flexo!",
  )
end

# ./config/environment.rb
ActionMailer::Base.smtp_settings = {
  :user_name => 'apikey',
  :password => ENV['SENDGRID_API_KEY'],
  :domain => 'Flexo.com',
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}
```
### Search Feature
This page displays an assortment of cars for user's to rent. Each car directs to that specific car's show page with all the details.

<a href="https://imgur.com/a/bney8kE"><img src="./app/assets/images/search.gif" title="source: imgur.com" /></a>

### Car Show page
User's can view the details about a given car. If this car belongs to the current user signed in, they can choose to edit or remove their rental listing.

<a href="https://imgur.com/UcCSqzv"><img src="https://i.imgur.com/UcCSqzv.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/KTGmCRj"><img src="https://i.imgur.com/KTGmCRj.png" title="source: imgur.com" /></a>

JavaScript
```js
let deleteButton;
let editButton;

if (details.ownerId === currentUser) {
  deleteButton = 
  <div>
    <button className="remove-car-btn" onClick={remove}>
      Remove Car
    </button>
  </div>
}

if (details.ownerId === currentUser) {
  editButton = 
  <div>
    <Link to={`/cars/${details.id}/edit`}>
      <button className="edit-car-btn">
        Edit Car
      </button>
    </Link>
  </div>
}
```

### Create Car form
Share the experience by listing your car available to rent. User's fill out the details about their car's and upload multiple images at once.

<a href="https://imgur.com/5WMCl4I"><img src="https://i.imgur.com/5WMCl4I.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/ES5ywsq"><img src="https://i.imgur.com/ES5ywsq.png" title="source: imgur.com" /></a>

JavaScript
```js
handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData();

  for (let key in this.state) {
    if (key != 'photos') {
      if (key === "phoneNumber") { 
        let phone = parsePhoneNumberFromString(this.state[`${key}`], 'US').number; 
        formData.append(`car[${key}]`, phone)
      } else {
        formData.append(`car[${key}]`, this.state[`${key}`])
      }
    }
  }

  for (let i = 0; i < this.state.photos.length; i++) {
    formData.append('car[photos][]', this.state.photos[i]);
  }

  this.props.createCar(formData)
    .then((data) => this.props.history.push(`/cars/${data.car.id}`));
```
HTML
```html
<input type="file" onChange={e => this.setState({ photos: e.target.files })} multiple/>
```

## Future features
- Rentals
- Reviews
