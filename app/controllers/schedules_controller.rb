class SchedulesController < ApplicationController

    def index
        schedule = Schedule.all
        render json: schedule  
    end
    def create
        schedule = Schedule.create(schedule_params)
        if schedule.valid?
        render json: schedule
        else
        render json: schedule.errors, status: 422
        end
    end
    def update
        schedule = Schedule.find(params[:id])
        schedule.update(schedule_params)
        if schedule.valid?
        render json: schedule
        else
        render json: schedule.errors, status: 422
        end
    end

    def destroy
        schedule = Schedule.find(params[:id])
        if schedule.destroy
        render json: schedule
        else
        render json: schedule.errors, status: unproccessable_entity
        end
    end


    private
    def schedule_params
        params.require(:schedule).permit(:user_id, :name, :days_per_week)
    end
    
end
