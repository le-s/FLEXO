# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

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

nav = User.create!(
  email: 'nav@email.com',
  password: 'password',
  first_name: 'nav',
  last_name: 'spot'
  )
  
#Cars
miata = Car.create!(
  owner_id: steven.id,
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

tl = Car.create!(
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

prelude = Car.create!(
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
  latitude: 37.7601
)

gc8 = Car.create!(
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
  address: '746 Natoma St',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94103,
  longitude: -122.4129,
  latitude: 37.7761
)

e90 = Car.create!(
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

e325 = Car.create!(
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
  address: '3705 17th St',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94114,
  longitude: -122.4287,
  latitude: 37.7627
)

e30 = Car.create!(
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

rs = Car.create!(
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

charger = Car.create!(
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

mustang = Car.create!(
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

challenger = Car.create!(
  owner_id: theo.id,
  year: 2013,
  make: 'Dodge',
  model: 'Challenger',
  price: 130,
  description: "Loud n fast ",
  mpg: 16,
  fuel_type: 'Gas',
  num_doors: 2,
  num_seats: 5,
  bluetooth: false,
  auxiliary_input: true,
  heated_seats: false,
  gps: false,
  automatic_trans: false,
  usb_ports: true,
  backup_camera: true,
  mods: 'Brembo, 89mm throttle body, ported intake manifold, Corsa catbck, mopar short throw short shifter, Eibach lowering springs, oem red leather interior, Michelin Pilot Super Sports',
  address: '401 Harrison St',
  city: 'San Francisco',
  state: 'CA',
  zipcode: 94105,
  longitude: -122.3921,
  latitude: 37.7860
)

is300 = Car.create!(
  owner_id: nav.id,
  year: 2005,
  make: 'Lexus',
  model: 'IS300',
  price: 90,
  description: "It's manual yo",
  mpg: 20,
  fuel_type: 'Gas',
  num_doors: 4,
  num_seats: 5,
  bluetooth: false,
  auxiliary_input: true,
  heated_seats: false,
  gps: false,
  automatic_trans: false,
  usb_ports: false,
  backup_camera: false,
  mods: 'Enkei wheels',
  address: '56 Spring St',
  city: 'New York',
  state: 'NY',
  zipcode: 10012,
  longitude: -73.9967,
  latitude: 40.7219
)

#pictures
rs.photos.attach(io: open("https://s3-us-west-1.amazonaws.com/flexo-prod/joseph1.jpg"), filename: "joseph1.jpg")

# rs.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/joseph2.jpg"), filename: "joseph2.jpg")

# tl.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/dillon1.jpg"), filename: "dillon1.jpg")

# tl.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/dillon2.jpg"), filename: "dillon2.jpg")

# tl.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/dillon3.jpg"), filename: "dillon3.jpg")

# tl.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/dillon4.jpg"), filename: "dillon4.jpg")

# miata.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/miata1.jpg"), filename: "miata1.jpg")

# miata.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/miata2.jpg"), filename: "miata2.jpg")

# miata.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/miata3.jpg"), filename: "miata3.jpg")

# miata.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/miata4.jpg"), filename: "miata4.jpg")

# prelude.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/prelude1.jpg"), filename: "prelude1.jpg")

# prelude.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/prelude2.jpg"), filename: "prelude2.jpg")

# prelude.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/prelude3.jpg"), filename: "prelude3.jpg")

# prelude.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/prelude4.jpg"), filename: "prelude4.jpg")

# gc8.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/gc81.jpg"), filename: "gc81.jpg")

# gc8.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/gc82.jpg"), filename: "gc82.jpg")

# gc8.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/gc83.jpg"), filename: "gc83.jpg")

# gc8.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/gc84.jpg"), filename: "gc84.jpg")

# e90.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/e901.jpg"), filename: "e901.jpg")

# e90.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/e902.jpg"), filename: "e902.jpg")

# e90.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/e903.jpg"), filename: "e903.jpg")

# e90.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/e904.jpg"), filename: "e904.jpg")

# e325.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/e301.jpg"), filename: "e301.jpg")

# e325.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/e302.jpg"), filename: "e302.jpg")

# e325.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/e303.jpg"), filename: "e303.jpg")

# e325.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/e304.jpg"), filename: "e304.jpg")

# e30.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/dylan1.jpg"), filename: "dylan1.jpg")

# e30.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/dylan2.jpg"), filename: "dylan2.jpg")

# e30.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/dylan3.jpg"), filename: "dylan3.jpg")

# e30.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/dylan4.jpg"), filename: "dylan4.jpg")

# charger.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/theo1.jpg"), filename: "theo1.jpg")

# charger.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/theo2.jpg"), filename: "theo2.jpg")

# charger.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/theo3.jpg"), filename: "theo3.jpg")

# charger.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/theo4.jpg"), filename: "theo4.jpg")

# mustang.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/mustang1.jpg"), filename: "mustang1.jpg")

# mustang.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/mustang2.jpg"), filename: "mustang2.jpg")

# mustang.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/mustang3.jpg"), filename: "mustang3.jpg")

# mustang.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/mustang4.jpg"), filename: "mustang4.jpg")

# challenger.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/challenger1.jpg"), filename: "challenger1.jpg")

# challenger.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/challenger2.jpg"), filename: "challenger2.jpg")

# challenger.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/challenger3.jpg"), filename: "challenger3.jpg")

# challenger.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/challenger4.jpg"), filename: "challenger4.jpg")

# is300.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/nav1.jpg"), filename: "nav1.jpg")

# is300.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/nav2.jpg"), filename: "nav2.jpg")

# is300.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/nav3.jpg"), filename: "nav3.jpg")

# is300.photos.attach(io: File.open("#{Rails.root}/assets/images/pictures/nav4.jpg"), filename: "nav4.jpg")

