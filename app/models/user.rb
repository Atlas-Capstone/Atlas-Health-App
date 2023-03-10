class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         has_many :routines
         validates :age, numericality: { greater_than_or_equal_to: 0 }
         validates :height, numericality: { greater_than_or_equal_to: 0 }
         validates :weight, numericality: { greater_than_or_equal_to: 0 }
         validates :gender, presence: true
         validates :user_name, presence: true
end
