class CompletedRoutine < ApplicationRecord
  belongs_to :exercise_routine
  belongs_to :user
end
