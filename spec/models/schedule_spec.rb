require 'rails_helper'

RSpec.describe Schedule, type: :model do

  #class,  inheritance
  it "is a child of the class ApplicationRecord" do
    expect(Schedule).to be < ApplicationRecord
  end

  # name, presence
  it "Throws error if schedule does not contain name" do
    mockSchedule = Schedule.create name: nil
    expect(mockSchedule.errors[:name]).to_not be_empty
  end

  #days, presence
  it "throws an error if schedule does not contain days_per_week" do
      mockSchedule = Schedule.create name: "strength", days_per_week: ""
      expect(mockSchedule.errors[:days_per_week]).to_not be_empty
  end

  #days, numericality
  it "throws an error if days per week is less than 0" do
    mockSchedule = Schedule.create days_per_week: -1
    expect(mockSchedule.errors[:days_per_week]).to_not be_empty
  end
end
