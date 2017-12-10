require 'rails_helper'

RSpec.describe "user_challenges/edit", type: :view do
  before(:each) do
    @user_challenge = assign(:user_challenge, UserChallenge.create!(
      :user => nil,
      :challenge => nil
    ))
  end

  it "renders the edit user_challenge form" do
    render

    assert_select "form[action=?][method=?]", user_challenge_path(@user_challenge), "post" do

      assert_select "input[name=?]", "user_challenge[user_id]"

      assert_select "input[name=?]", "user_challenge[challenge_id]"
    end
  end
end
