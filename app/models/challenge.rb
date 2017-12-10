class Challenge < ApplicationRecord
  has_many :user_challenges
  has_many :users, through: :user_challenges

  has_many :goals, inverse_of: :challenge
  accepts_nested_attributes_for :goals, reject_if: :all_blank, allow_destroy: true
end
