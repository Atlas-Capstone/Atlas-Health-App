
require 'rails_helper'

# Every "it" block instantiation of the Exercise table should have the validation condition result in failure

RSpec.describe Exercise, type: :model do


  # :name, presence: true
  it "Throws error if Exercise does not contain name" do
    thePushPull = Exercise.create name: nil
    expect(thePushPull.errors[:name]).to_not be_empty
  end

  # :description, presence: true
  it "Throws error if Exercise does not contain description" do
    thePushPull = Exercise.create description: nil
    expect(thePushPull.errors[:description]).to_not be_empty
  end

    # :category, presence: true
  it "Throws error if Exercise does not contain category" do
    thePushPull = Exercise.create category: nil
    expect(thePushPull.errors[:category]).to_not be_empty
  end

  # :difficulty, presence: true
  it "Throws error if Exercise does not contain difficulty" do
    thePushPull = Exercise.create difficulty: nil
    expect(thePushPull.errors[:difficulty]).to_not be_empty
  end

  # :image, presence: true
  it "Throws error if Exercise does not contain image" do
    thePushPull = Exercise.create image: nil
    expect(thePushPull.errors[:image]).to_not be_empty
  end

end
