require 'rails_helper'

RSpec.describe ExerciseRoutine, type: :model do

  # inheritance
  it "is a child of ApplicationRecord" do
    expect(ExerciseRoutine).to be < ApplicationRecord
  end

  #numericality and presence
  # weight
  it "Throws error if ExerciseRoutine does not contain weight" do
    thePushPull = ExerciseRoutine.create weight: nil
    expect(thePushPull.errors[:weight]).to_not be_empty
  end

  it "Throws error if ExerciseRoutine weight is less than 1" do
    thePushPull = ExerciseRoutine.create weight: -1
    expect(thePushPull.errors[:weight]).to_not be_empty
  end

  # sets
  it "Throws error if ExerciseRoutine does not contain sets" do
    thePushPull = ExerciseRoutine.create sets: nil
    expect(thePushPull.errors[:sets]).to_not be_empty
  end

  it "Throws error if ExerciseRoutine sets is less than 1" do
    thePushPull = ExerciseRoutine.create sets: -1
    expect(thePushPull.errors[:sets]).to_not be_empty
  end

  # reps
  it "Throws error if ExerciseRoutine does not contain reps" do
    thePushPull = ExerciseRoutine.create reps: nil
    expect(thePushPull.errors[:reps]).to_not be_empty
  end

  it "Throws error if ExerciseRoutine reps is less than 1" do
    thePushPull = ExerciseRoutine.create reps: -1
    expect(thePushPull.errors[:reps]).to_not be_empty
  end

  # day
  it "Throws error if ExerciseRoutine does not contain day" do
    thePushPull = ExerciseRoutine.create day: nil
    expect(thePushPull.errors[:day]).to_not be_empty
  end
end
