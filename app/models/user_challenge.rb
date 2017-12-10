class UserChallenge < ApplicationRecord
  belongs_to :user
  acts_as_list scope: :user

  belongs_to :challenge

  delegate :description, :title, to: :challenge

  enum status: [:locked, :unlocked, :active, :complete]

end
