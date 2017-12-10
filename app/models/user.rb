class User < ApplicationRecord
  has_many :user_challenges
  has_many :completed_user_challenges, ->() { where(completed: true) }, class_name: "UserChallenge"
  has_many :active_user_challenges, ->() { where(completed: false) }, class_name: "UserChallenge"
  has_many :challenges, through: :user_challenges

  has_many :completed_challenges, through: :completed_user_challenges, source: :challenge
  has_many :active_challenges, through: :completed_user_challenges, source: :challenge
end
