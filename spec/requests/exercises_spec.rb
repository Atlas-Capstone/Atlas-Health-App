require 'rails_helper'


RSpec.describe "Exercises", type: :request do

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

  let(:valid_exercise) do {
    
    "name" => "the push pull",
    "description" => "a",
    "category" => "b",
    "difficulty" => "c",
    "image" => "d"

  } end

  let(:invalid_exercise) do {

    "description" => nil,
    "category" => "",
    "difficulty" => "",
    "image" => ""

  } end

  describe "GET /index" do

    it "gets a list of exercises " do

      exercises = Exercise.new(valid_exercise)

      exercises.save

      get '/exercises'

      exercises = JSON.parse(response.body)

      expect(response).to have_http_status(200)

      expect(exercises.length).to eq 1
    end # End it
  end # End describe GET/index
end # End describe Exercises
