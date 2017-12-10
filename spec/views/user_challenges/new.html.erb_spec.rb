require 'rails_helper'

RSpec.describe "user_challenges/new", type: :view do
  before(:each) do
    assign(:user_challenge, UserChallenge.new(
      :user => nil,
      :challenge => nil
    ))
  end

  it "renders new user_challenge form" do
    render

    assert_select "form[action=?][method=?]", user_challenges_path, "post" do

      assert_select "input[name=?]", "user_challenge[user_id]"

      assert_select "input[name=?]", "user_challenge[challenge_id]"
    end
  end
end
