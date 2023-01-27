require 'rails_helper'

RSpec.describe "Exercises", type: :request do

  describe "GET /index" do

    it "gets a list of exercises " do

      exercises = Exercise.first_or_create()
      exercises.save
      get '/exercises'
      expect(response).to have_http_status(200)
      exercises = JSON.parse(response.body)
      expect(exercises.length).to eq 1
    end
  end
end
