class User < ApplicationRecord
  has_many :user_challenges, -> { order(position: :asc) }

  has_many :locked_user_challenges, ->() { locked }, class_name: "UserChallenge"
  has_many :unlocked_user_challenges, ->() { unlocked }, class_name: "UserChallenge"
  has_many :active_user_challenges, ->() { active }, class_name: "UserChallenge"
  has_many :complete_user_challenges, ->() { complete }, class_name: "UserChallenge"

  has_many :challenges, through: :user_challenges

  has_many :locked_challenges, through: :locked_user_challenges, source: :challenge
  has_many :unlocked_challenges, through: :unlocked_user_challenges, source: :challenge
  has_many :active_challenges, through: :active_user_challenges, source: :challenge
  has_many :complete_challenges, through: :complete_user_challenges, source: :challenge
end
