class AddPhoneNumberToCars < ActiveRecord::Migration[5.2]
  def change
    add_column :cars, :phone_number, :string
  end
end
