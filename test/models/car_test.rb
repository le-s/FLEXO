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

require 'test_helper'

class CarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
