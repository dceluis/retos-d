class User < ApplicationRecord
  has_many :user_challenges
  has_many :challenges, through: :user_challenges
end
