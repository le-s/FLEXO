# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users
demo = User.create!(
  email: 'demo@email.com',
  password: 'password',
  first_name: 'demo',
  last_name: 'login'
)

steven = User.create!(
  email: 'steven@email.com',
  password: 'password',
  first_name: 'steven',
  last_name: 'le'
)

tommy = User.create!(
  email: 'tommy@email.com',
  password: 'password',
  first_name: 'tommy',
  last_name: 'nguyen'
)

nathan = User.create!(
  email: 'nathan@email.com',
  password: 'password',
  first_name: 'nathan',
  last_name: 'saw'
)

dylan = User.create!(
  email: 'dylan@email.com',
  password: 'password',
  first_name: 'dylan',
  last_name: 'delapaz'
)

dillon = User.create!(
  email: 'dillon@email.com',
  password: 'password',
  first_name: 'dillon',
  last_name: 'lam'
)

theo = User.create!(
  email: 'theo@email.com',
  password: 'password',
  first_name: 'theo',
  last_name: 'chen'
)

joseph = User.create!(
  email: 'joseph@email.com',
  password: 'password',
  first_name: 'joseph',
  last_name: 'obbard'
)

rikey = User.create!(
  email: 'rikey@email.com',
  password: 'password',
  first_name: 'rikey',
  last_name: 'kung'
)

miso = User.create!(
  email: 'miso@email.com',
  password: 'password',
  first_name: 'miso',
  last_name: 'sora'
)

#Cars
Car.create!(
  owner_id: dillon.id,
  year: 2007,
  make: 'Acura',
  model: 'TL',
  price: 60,
  description: 'Mean clean stance machine',
  mpg: 24,
  fuel_type: 'Gas',
  num_doors: 4,
  num_seats: 5,
  bluetooth: false,
  auxiliary_input: true,
  heated_seats: true,
  gps: true,
  automatic_trans: true,
  usb_ports: true,
  backup_camera: false,
  mods: 'coilovers, body work',
  address: '3005 20th St',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94110,
  longitude: -122.4168,
  latitude: 37.7587
)

Car.create!(
  owner_id: miata.id,
  year: 2000,
  make: 'Mazda',
  model: 'Miata',
  price: 50,
  description: 'Like a go kart',
  mpg: 20,
  fuel_type: 'Gas',
  num_doors: 2,
  num_seats: 2,
  bluetooth: false,
  auxiliary_input: true,
  heated_seats: false,
  gps: false,
  automatic_trans: false,
  usb_ports: true,
  backup_camera: false,
  mods: 'coilovers, roll bar, flares',
  address: '825 Battery st',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94101,
  longitude: -122.4012,
  latitude: 37.7989
)

Car.create!(
  owner_id: tommy.id,
  year: 1998,
  make: 'Honda',
  model: 'Prelude',
  price: 68,
  description: 'VTACH JUST KICKED IN YO',
  mpg: 18,
  fuel_type: 'Gas',
  num_doors: 2,
  num_seats: 4,
  bluetooth: false,
  auxiliary_input: true,
  heated_seats: false,
  gps: false,
  automatic_trans: false,
  usb_ports: true,
  backup_camera: false,
  mods: 'coilovers, projectors, body kit',
  address: '1616 20th St',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94107,
  longitude: -122.3976,
  latitude: 37.76014
)

Car.create!(
  owner_id: tommy.id,
  year: 1997,
  make: 'Subaru',
  model: 'Impreza',
  price: 75,
  description: 'Slow track monster',
  mpg: 22,
  fuel_type: 'Gas',
  num_doors: 4,
  num_seats: 2,
  bluetooth: false,
  auxiliary_input: true,
  heated_seats: false,
  gps: false,
  automatic_trans: false,
  usb_ports: true,
  backup_camera: false,
  mods: 'coilovers, roll cage, flares, projectors',
  address: '1616 20th St',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94107,
  longitude: -122.3976,
  latitude: 37.76014
)

Car.create!(
  owner_id: nathan.id,
  year: 201,
  make: 'BMW',
  model: '335i',
  price: 90,
  description: 'My car can go really low in the front',
  mpg: 18,
  fuel_type: 'Gas',
  num_doors: 4,
  num_seats: 5,
  bluetooth: true,
  auxiliary_input: false,
  heated_seats: true,
  gps: false,
  automatic_trans: true,
  usb_ports: true,
  backup_camera: false,
  mods: 'air suspension',
  address: '2616 Ocean Ave',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94132,
  longitude: -122.4889,
  latitude: 37.7321
)

Car.create!(
  owner_id: nathan.id,
  year: 1985,
  make: 'BMW',
  model: '325e',
  price: 45,
  description: 'BMW classic, clean condition',
  mpg: 23,
  fuel_type: 'Gas',
  num_doors: 2,
  num_seats: 5,
  bluetooth: false,
  auxiliary_input: false,
  heated_seats: false,
  gps: false,
  automatic_trans: false,
  usb_ports: true,
  backup_camera: false,
  mods: 'coilovers, paint job',
  address: '2616 Ocean Ave',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94132,
  longitude: -122.4889,
  latitude: 37.7321
)

Car.create!(
  owner_id: dylan.id,
  year: 1984,
  make: 'BMW',
  model: '325e',
  price: 45,
  description: 'Old and Wise',
  mpg: 23,
  fuel_type: 'Gas',
  num_doors: 2,
  num_seats: 5,
  bluetooth: false,
  auxiliary_input: false,
  heated_seats: false,
  gps: false,
  automatic_trans: false,
  usb_ports: true,
  backup_camera: false,
  mods: 'body kit, wheels, recaro seats',
  address: '2636 Judah St',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94122,
  longitude: -122.4904,
  latitude: 37.7612
)

Car.create!(
  owner_id: joseph.id,
  year: 2001,
  make: 'Subaru',
  model: 'Impreza',
  price: 70,
  description: 'Slowbaru rice rocket 2001',
  mpg: 20,
  fuel_type: 'Gas',
  num_doors: 2,
  num_seats: 5,
  bluetooth: false,
  auxiliary_input: false,
  heated_seats: false,
  gps: false,
  automatic_trans: false,
  usb_ports: false,
  backup_camera: false,
  mods: 'sti genome exhaust, jdm tail lights',
  address: '2640 Steiner St',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94115,
  longitude: -122.4363,
  latitude: 37.7939
)

Car.create!(
  owner_id: theo.id,
  year: 1973,
  make: 'Dodge',
  model: 'Charger',
  price: 100,
  description: "You'll hear me before you see me",
  mpg: 7,
  fuel_type: 'Airplane Fuel',
  num_doors: 2,
  num_seats: 4,
  bluetooth: false,
  auxiliary_input: true,
  heated_seats: false,
  gps: false,
  automatic_trans: false,
  usb_ports: false,
  backup_camera: false,
  mods: 'custom body work, 440 big block, 3in side exhaust',
  address: '401 Harrison St',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94105,
  longitude: -122.3921,
  latitude: 37.7860
)

Car.create!(
  owner_id: miso.id,
  year: 2017,
  make: 'Ford',
  model: 'Mustang GT',
  price: 110,
  description: "It's clean, don't get it dirty",
  mpg: 13,
  fuel_type: 'Gas',
  num_doors: 2,
  num_seats: 4,
  bluetooth: true,
  auxiliary_input: true,
  heated_seats: true,
  gps: false,
  automatic_trans: true,
  usb_ports: true,
  backup_camera: true,
  mods: 'brembo bbk, track tires, exhaust',
  address: '149 Mulberry St New York, NY 10013',
  city: 'New York',
  state: 'NY',
  zipcode: 10013,
  longitude: -73.9976,
  latitude: 40.7191
)
