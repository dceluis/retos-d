require 'rails_helper'

RSpec.describe "user_challenges/index", type: :view do
  before(:each) do
    assign(:user_challenges, [
      UserChallenge.create!(
        :user => nil,
        :challenge => nil
      ),
      UserChallenge.create!(
        :user => nil,
        :challenge => nil
      )
    ])
  end

  it "renders a list of user_challenges" do
    render
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
