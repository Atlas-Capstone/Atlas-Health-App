require 'rails_helper'

RSpec.describe "exercise_routines", type: :request do

  current_exercise = Exercise.first_or_create!(
    "name" => "the push pull",
    "description" => "a",
    "category" => "b",
    "difficulty" => "c",
    "image" => "d"
  )

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

  current_schedule = Schedule.first_or_create!(
    "name" => "interesting schedule",
    "days_per_week" => 3,
    "user_id" => 1
  )

  let(:valid_exercise_routine) do {
    "exercise_id" => 4,
    "schedule_id" => 9,
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
      get '/exercise_routines'
      exercise_routines = JSON.parse(response.body)
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /create" do

    it "creates a exercise_routines" do
      post exercise_routines_url, params: {exercise_routine: valid_exercise_routine}
      puts current_exercise.id
      puts current_schedule.id
      puts JSON.parse(response.body)
      expect(response).to have_http_status(200)
      exercise_routines = ExerciseRoutine.first
      expect(exercise_routines.day).to eq "Monday"
    end

    it "gives a 422 error" do
      post exercise_routines_url, params: {exercise_routine: invalid_exercise_routine}
      expect(response).to have_http_status(422)
    end
  end



  describe "PATCH /update" do
    context "with valid parameters" do 

      let(:updated_exercise_routine) do {
        "exercise_id" => 4,
        "schedule_id" => 9,
        "weight" => 1,
        "sets" => 1,
        "reps" => 1,
        "day" => "Tuesday"
      }
      end

      it "updates a exercise routine" do
        exercise_routine = ExerciseRoutine .new(valid_exercise_routine )

        exercise_routine .save

        patch exercise_routine_url(exercise_routine ), params: {exercise_routine: updated_exercise_routine}

        exercise_routine .reload 

        expect(response).to have_http_status(200)

        expect(exercise_routine.day).to eq "Tuesday"
      end
    end

    context "with invalid parameters" do
      it "expecting a 422 error" do
        exercise_routine  = ExerciseRoutine.new(valid_exercise_routine )
        exercise_routine .save
        patch exercise_routine_url(exercise_routine ), params: {exercise_routine: invalid_exercise_routine }
        exercise_routine .reload 
        expect(response).to have_http_status(422)
      end
    end

    describe "DESTROY /delete" do
      it "deletes an exercise routine" do
        exercise_routine = ExerciseRoutine.new(valid_exercise_routine)
          exercise_routine.save
          exercise_routine.reload
        expect do 
          delete exercise_routine_url(exercise_routine)
        end.to change(ExerciseRoutine, :count).by(-1)
      end
    end
  end
end# End outer describe