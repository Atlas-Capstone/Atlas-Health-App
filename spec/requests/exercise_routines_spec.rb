
require 'rails_helper'

# weight
# sets
# reps
# day

RSpec.describe "exercise_routines", type: :request do

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

  let(:valid_exercise_routine) do {
    "exercise_id" => 1,
    "schedule_id" => 1,
    "weight" => 1,
    "sets" => 1,
    "reps" => 1,
    "day" => "Monday"
  }
  end

  let(:invalid_exercise_routine) do {
    "exercise_id" => "",
    "schedule_id" => "",
    "weight" => "",
    "sets" => "",
    "reps" => "",
    "day" => ""
    } 
  end

  describe "GET /index" do

    it "gets a list of exercise_routines " do
      
      exercise_routines = ExerciseRoutine.new(valid_exercise_routine)

      exercise_routines.save

      get exercise_routines_url

      exercise_routines = JSON.parse(response.body)

      expect(response).to have_http_status(200)
    end
  end
end

