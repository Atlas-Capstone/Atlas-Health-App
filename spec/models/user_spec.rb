require 'rails_helper'

RSpec.describe User, type: :model do

    # class, inheritance
    it "is an instance of the class ApplicationRecord" do
        expect(User).to be < ApplicationRecord
    end

    # name, presence
    it "Throws error if User does not contain user_name" do
        shack = User.create user_name:nil
        expect(shack.errors[:user_name]).to_not be_empty
    end

    # gender, presence
    it "Throws error if User does not contain gender" do
        shack = User.create gender:nil
        expect(shack.errors[:gender]).to_not be_empty
    end

    # password, presence
    it "Throws error if User does not contain password" do
        shack = User.create password:'hellomate'
        expect(shack.errors[:height]).to_not be_empty
    end

    # age, presence
    it "Throws error if User does not contain age" do
        shack = User.create age: nil
        expect(shack.errors[:age]).to_not be_empty
    end

    # age, numericality
    it "Throws error if age is less than 0" do
        shack = User.create age: -1
        expect(shack.errors[:age]).to_not be_empty
    end

    # height, numericality
    it "Throws error if height is less than 0" do
        shack = User.create height: -1
        expect(shack.errors[:height]).to_not be_empty
    end

    # weight numericality
    it "Throws error if weight is less than 0" do
        shack = User.create weight: -1
        expect(shack.errors[:weight]).to_not be_empty
    end
end