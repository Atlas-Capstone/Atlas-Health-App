class ExerciseRoutine < ApplicationRecord
  belongs_to :exercise
  belongs_to :schedule
  has_many :completed_routines
end
