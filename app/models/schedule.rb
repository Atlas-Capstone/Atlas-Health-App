
class Schedule < ApplicationRecord

  belongs_to :user
  
  has_many :exercise_routines

  # Begin validations
  validates :days_per_week, numericality: { greater_than_or_equal_to: 0 }

  validates :name, presence: true

end
