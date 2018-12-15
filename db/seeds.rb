# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Car.delete_all

Car.create!(
  owner_id: 1,
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
  owner_id: 2,
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
  owner_id: 3,
  year: 1973,
  make: 'Dodge',
  model: 'Charger',
  price: 100,
  description: 'Loud af',
  mpg: 7,
  fuel_type: 'airplane fuel',
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
