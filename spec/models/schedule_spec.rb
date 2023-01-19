require 'rails_helper'

RSpec.describe Schedule, type: :model do
  it "Throws error if User does not contain name" do
    shack = Schedule.create name: nil, days_per_week: 3, user_id: 1
    expect(shack.errors[:name]).to_not be_empty
end
it "Throws error if User does not days_per_week" do
    shack = Schedule.create name: "strength", days_per_week: "", user_id: 1
    expect(shack.errors[:days_per_week]).to_not be_empty
end
end
