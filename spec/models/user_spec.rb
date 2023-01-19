require 'rails_helper'

RSpec.describe User, type: :model do
  it "Throws error if User does not contain user_name" do
      shack = User.create user_name:nil, gender:'male', password:'hellomate', age:50,  height:6, weight:180
      expect(shack.errors[:user_name]).to_not be_empty
  end
  it "Throws error if User does not contain gender" do
      shack = User.create user_name:'howdy st', gender:nil, password:'hellomate', age:50,  height:6, weight:180 
      expect(shack.errors[:gender]).to_not be_empty
  end
  it "Throws error if User does not contain password" do
      shack = User.create user_name:'howdy st', gender:'male', password:'hellomate', age:50,  height:nil, weight:180 
      expect(shack.errors[:height]).to_not be_empty
  end
  it "Throws error if User does not contain age" do
      shack = User.create user_name:'howdy st', gender:'male', password:'hellomate', age:nil,  height:6, weight:180 
      expect(shack.errors[:age]).to_not be_empty
  end
end