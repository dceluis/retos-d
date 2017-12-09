require 'rails_helper'

RSpec.describe "users/index", type: :view do
  before(:each) do
    assign(:users, [
      User.create!(
        :supply_code => "Supply Code",
        :first_name => "First Name",
        :last_name => "Last Name",
        :dni => "Dni"
      ),
      User.create!(
        :supply_code => "Supply Code",
        :first_name => "First Name",
        :last_name => "Last Name",
        :dni => "Dni"
      )
    ])
  end

  it "renders a list of users" do
    render
    assert_select "tr>td", :text => "Supply Code".to_s, :count => 2
    assert_select "tr>td", :text => "First Name".to_s, :count => 2
    assert_select "tr>td", :text => "Last Name".to_s, :count => 2
    assert_select "tr>td", :text => "Dni".to_s, :count => 2
  end
end
