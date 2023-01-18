class CreateCompletedRoutines < ActiveRecord::Migration[7.0]
  def change
    create_table :completed_routines do |t|
      t.references :exercise_routine, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.datetime :completed_at

      t.timestamps
    end
  end
end
