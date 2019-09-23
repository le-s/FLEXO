# == Schema Information
#
# Table name: rentals
#
#  id           :bigint(8)        not null, primary key
#  car_id       :integer          not null
#  renter_id    :integer          not null
#  reserve_date :datetime         not null
#  return_date  :datetime         not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Rental < ApplicationRecord
  validates :car_id, :renter_id, :reserve_date, :return_date, presence: true

  belongs_to :car,
    foreign_key: :car_id,
    class_name: :Car

  belongs_to :user,
    foreign_key: :renter_id,
    class_name: :User
end
