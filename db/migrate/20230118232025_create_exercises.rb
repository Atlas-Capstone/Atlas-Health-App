class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :description
      t.string :category
      t.string :difficulty
      t.string :image

      t.timestamps
    end
  end
end
