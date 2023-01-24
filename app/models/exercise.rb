class Exercise < ApplicationRecord
    has_many :exercise_routines

    validates :name, presence: true
    validates :description, presence: true
    validates :category, presence: true
    validates :difficulty, presence: true
    validates :image, presence: true
end
