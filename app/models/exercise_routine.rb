class ExerciseRoutine < ApplicationRecord

  belongs_to :exercise
  belongs_to :schedule
  
  has_many :completed_routines

  validates :weight, presence: true, numericality: { greater_than_or_equal_to: 0 }

  validates :sets, presence: true, numericality: { greater_than_or_equal_to: 0 }

  validates :reps, presence: true, numericality: { greater_than_or_equal_to: 0 }

  validates :day, presence: true, numericality: { greater_than_or_equal_to: 0 }

end
