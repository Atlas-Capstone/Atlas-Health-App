class ExerciseRoutinesController < ApplicationController

    def index
        exercise_routines = Exercise_Routine.all
        render json: exercise_routines
    end
    
end
