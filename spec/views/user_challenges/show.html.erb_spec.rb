require 'rails_helper'

RSpec.describe "user_challenges/show", type: :view do
  before(:each) do
    @user_challenge = assign(:user_challenge, UserChallenge.create!(
      :user => nil,
      :challenge => nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(//)
  end
end
