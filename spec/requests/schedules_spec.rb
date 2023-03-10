
require 'rails_helper'

RSpec.describe "Schedules", type: :request do

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
    "days_per_week" => 6,
    "user_id" => 1
  }
  end

  let(:invalid_schedule) do {
    "name" => "",
    "days_per_week" => "",
    "user_id" => ""
  }
  end

  let (:updated_schedule) do 
    {
      "name" => "small muscles",
      "days_per_week" => 6,
      "user_id" => 1
    }
  end

  describe "GET /index" do
    it "gets a list of schedules " do
      schedules = Schedule.first_or_create(valid_schedule)
      schedules.save
      get '/schedules'
      schedules = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(schedules.length).to eq 1
    end
  end 

  describe "POST /create" do

    it "creates a schedule" do
      post schedules_url, params: {schedule: valid_schedule}
      expect(response).to have_http_status(200)
      schedule = Schedule.last
      expect(schedule.name).to eq "big muscles"
  end

    it "gives a 422 error" do
      post schedules_url, params: {schedule: invalid_schedule}
      expect(response).to have_http_status(422)
    end
  end

  describe "PATCH /update" do

    context "with valid parameters" do 

      it "updates a schedule" do
        schedule = Schedule.first_or_create(valid_schedule)
        schedule.save
        patch schedule_url(schedule), params: {schedule: updated_schedule}
        schedule.reload 
        expect(response).to have_http_status(200)
        expect(schedule.name).to eq "small muscles"
      end
    end

    context "with invalid parameters" do

      it "expecting a 422 error" do
        schedule = Schedule.new(valid_schedule)
        schedule.save
        patch schedule_url(schedule), params: {schedule: invalid_schedule}
        schedule.reload 
        expect(response).to have_http_status(422)
      end
    end
  end

  describe "DESTROY /delete" do
    it "deletes a schedule" do
      schedule = Schedule.new(valid_schedule)
        schedule.save
        schedule.reload
      expect do 
        delete schedule_url(schedule)
      end.to change(Schedule, :count).by(-1)
    end
  end
end

