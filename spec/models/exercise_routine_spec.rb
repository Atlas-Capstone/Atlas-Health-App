require 'rails_helper'

# weight
# sets
# reps
# day

RSpec.describe ExerciseRoutine, type: :model do

  it "Throws error if ExerciseRoutine does not contain weight" do
    thePushPull = ExerciseRoutine.create weight: nil
    expect(thePushPull.errors[:weight]).to_not be_empty
  end

  it "Throws error if ExerciseRoutine does not contain sets" do
    thePushPull = ExerciseRoutine.create sets: nil
    expect(thePushPull.errors[:sets]).to_not be_empty
  end

  it "Throws error if ExerciseRoutine does not contain reps" do
    thePushPull = ExerciseRoutine.create reps: nil
    expect(thePushPull.errors[:reps]).to_not be_empty
  end

  it "Throws error if ExerciseRoutine does not contain day" do
    thePushPull = ExerciseRoutine.create day: nil
    expect(thePushPull.errors[:day]).to_not be_empty
  end

end
