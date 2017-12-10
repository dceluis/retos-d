require 'rails_helper'

RSpec.describe "goals/index", type: :view do
  before(:each) do
    assign(:goals, [
      Goal.create!(
        :challenge => nil
      ),
      Goal.create!(
        :challenge => nil
      )
    ])
  end

  it "renders a list of goals" do
    render
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
