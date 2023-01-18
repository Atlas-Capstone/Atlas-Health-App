class AddAgeHeightWeightUsernameGenderToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :age, :integer
    add_column :users, :height, :integer
    add_column :users, :weight, :integer
    add_column :users, :user_name, :string
    add_column :users, :gender, :string
  end
end
