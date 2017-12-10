require "rails_helper"

RSpec.describe UserChallengesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/user_challenges").to route_to("user_challenges#index")
    end

    it "routes to #new" do
      expect(:get => "/user_challenges/new").to route_to("user_challenges#new")
    end

    it "routes to #show" do
      expect(:get => "/user_challenges/1").to route_to("user_challenges#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/user_challenges/1/edit").to route_to("user_challenges#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/user_challenges").to route_to("user_challenges#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/user_challenges/1").to route_to("user_challenges#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/user_challenges/1").to route_to("user_challenges#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/user_challenges/1").to route_to("user_challenges#destroy", :id => "1")
    end

  end
end
