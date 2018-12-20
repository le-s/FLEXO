# == Schema Information
#
# Table name: cars
#
#  id              :bigint(8)        not null, primary key
#  owner_id        :integer          not null
#  year            :integer          not null
#  make            :string           not null
#  model           :string           not null
#  price           :integer          not null
#  description     :text             not null
#  mpg             :integer          not null
#  fuel_type       :string           not null
#  num_doors       :integer          not null
#  num_seats       :integer          not null
#  bluetooth       :boolean          not null
#  auxiliary_input :boolean          not null
#  heated_seats    :boolean          not null
#  gps             :boolean          not null
#  automatic_trans :boolean          not null
#  usb_ports       :boolean          not null
#  backup_camera   :boolean          not null
#  mods            :text
#  address         :string           not null
#  city            :string           not null
#  state           :string           not null
#  zipcode         :integer          not null
#  longitude       :float            not null
#  latitude        :float            not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Car < ApplicationRecord
  validates :owner_id, :year, :make, :model, :price, :description, :mpg, :fuel_type, :num_doors, :num_seats, :address, :city, :state, :zipcode, :longitude, :latitude, presence: true

  validates :bluetooth, :auxiliary_input, :heated_seats, :gps, :automatic_trans, :usb_ports, :backup_camera, inclusion: ["true", "false"]

  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

  has_many_attached :photos

  # def self.in_bounds(bounds)
  # self.where("lat < ?", bounds[:northEast][:lat])
  #   .where("lat > ?", bounds[:southWest][:lat])
  #   .where("lng > ?", bounds[:southWest][:lng])
  #   .where("lng < ?", bounds[:northEast][:lng])
  # end
end
