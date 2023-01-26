class AddVideoLinkToExercises < ActiveRecord::Migration[7.0]
  def change
    add_column :exercises, :video, :string
  end
end
