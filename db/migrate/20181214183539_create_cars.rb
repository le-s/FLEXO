class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.integer :owner_id,  null: false
      t.integer :year, null: false
      t.string :make, null: false
      t.string :model, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.integer :mpg, null: false
      t.string :fuel_type, null: false
      t.integer :num_doors, null: false
      t.integer :num_seats, null: false
      t.boolean :bluetooth, null: false
      t.boolean :auxiliary_input, null: false
      t.boolean :heated_seats, null: false
      t.boolean :gps, null: false
      t.boolean :automatic_trans, null: false
      t.boolean :usb_ports, null: false
      t.boolean :backup_camera, null: false
      t.text :mods
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false

      t.timestamps
    end

    add_index :cars, :owner_id
    add_index :cars, :city
  end
end
