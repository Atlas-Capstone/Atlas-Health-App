
require 'rails_helper'

RSpec.describe "Schedules", type: :request do

  # Please model test after model below

  # belongs_to :user
  
  # has_many :exercise_routines

  # validates :days_per_week, numericality: { greater_than_or_equal_to: 0 }

  # validates :name, presence: true

  current_user = User.first_or_create!(
    email: 'dean@example.com', 
    password: 'password', 
    password_confirmation: 'password', 
    user_name: "dean", 
    age: 27, 
    height: 71, 
    weight: 295, 
    gender: 'male'
  )

  let(:valid_schedule) do {
    "name" => "big muscles",
    "days_per_week" => 6
  }
  end

  let(:invalid_schedule) do {
    "name" => "",
    "days_per_week" => ""
  }
  end

  describe "GET /index" do

    it "gets a list of schedules " do

      # Create a schedule entry
      schedules = Schedule.new(valid_schedule)

      # Assign it a user
      schedules.user = current_user

      # "Save" it in mock DB ENV
      schedules.save

      # Send get request to mock url
      get '/schedules'

      # Parse json response from index method in schedule controller
      schedules = JSON.parse(response.body)

      expect(response).to have_http_status(200)

      expect(schedules.length).to eq 1
    end # End it block
  end # End describe block
end
