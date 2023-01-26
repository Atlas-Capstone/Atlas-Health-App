class ChangeExerciseIdToNotAllowNull < ActiveRecord::Migration[7.0]
  def change
      change_column_null :exercise_routines, :exercise_id, false
  end
end
