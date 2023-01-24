class ExerciseRoutinesController < ApplicationController

    def index
        exercise_routines = ExerciseRoutine.all
        render json: exercise_routines
    end
    
end
