class SchedulesController < ApplicationController

    def index
        schedule = Schedule.all
        render json: schedule
    end
end
