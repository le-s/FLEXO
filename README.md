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
- User's can view different cars in an organized manner
- Each car displays a detailed specs and information about the car
- User's are able to create their own cars for rent

## Highlights

### Car Index page
This page displays an assortment of cars for user's to rent. Each car directs to that specific car's show page with all the details.

<a href="https://imgur.com/G3C534C"><img src="https://i.imgur.com/G3C534C.png" title="source: imgur.com" /></a>

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
  formData.append('car[make]', this.state.make);
  formData.append('car[model]', this.state.model);
  formData.append('car[year]', this.state.year);

  for (let i = 0; i < this.state.photos.length; i++) {
    formData.append('car[photos][]', this.state.photos[i]);
  }

  this.props.createCar(formData)
```
HTML
```html
<input type="file" onChange={e => this.setState({ photos: e.target.files })} multiple/>
```

## Future features
- Rentals
- Car search & Google Maps API
- Reviews
