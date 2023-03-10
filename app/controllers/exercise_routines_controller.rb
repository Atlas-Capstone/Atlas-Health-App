class ExerciseRoutinesController < ApplicationController

    def index
        exercise_routines = ExerciseRoutine.all
        render json: exercise_routines
    end


    def create
        exercise_routine = ExerciseRoutine.create(exercise_routine_params)
        if exercise_routine.valid?
            render json: exercise_routine
        else
            render json: exercise_routine.errors, status: 422
        end
    end


    def update
         exercise_routine =  ExerciseRoutine.find(params[:id])
         exercise_routine.update( exercise_routine_params)

        if  exercise_routine.valid?
         render json:  exercise_routine
        else

        render json:  exercise_routine.errors, status: 422
        end
    end


    def destroy
         exercise_routine =  ExerciseRoutine.find(params[:id])
         
        if  exercise_routine.destroy
            render json:  exercise_routine
        else
        render json:  exercise_routine.errors, status: unproccessable_entity
        end
    end

    private

    def exercise_routine_params
        params.require(:exercise_routine).permit(:exercise_id, :schedule_id, :weight, :sets, :reps, :day)
    end
end