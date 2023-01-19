require 'rails_helper'

RSpec.describe "Schedules", type: :request do
  current_user = User.first_or_create!(email: 'dean@example.com', password: 'password', password_confirmation: 'password', user_name: "dean", age: 27, height: 71, weight: 295, gender: 'male')
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
    schedules = Schedule.new(valid_schedule)
    schedules.user = current_user
    schedules.save
    get '/schedules'
    schedules = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(schedules.length).to eq 1
  end
end
end
