class CreateRentals < ActiveRecord::Migration[5.2]
  def change
    create_table :rentals do |t|
      t.integer :car_id, null: false
      t.integer :renter_id,  null: false
      t.datetime :reserve_date,  null: false
      t.datetime :return_date,  null: false

      t.timestamps
    end

    add_index :rentals, :car_id
    add_index :rentals, :renter_id
  end
end
