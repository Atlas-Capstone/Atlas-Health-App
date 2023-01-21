
class ExercisesController < ApplicationController
    
    def index
        exercise = Exercise.all
        render json: exercise
    end

end
