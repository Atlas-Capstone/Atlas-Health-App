class CreateSchedules < ActiveRecord::Migration[7.0]
  def change
    create_table :schedules do |t|
      t.string :name
      t.integer :days_per_week
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
