class User < ApplicationRecord
  has_many :user_challenges
  has_many :challenges, through: :user_challenges

  def completed_challenges
    user_challenges.where(completed: true)
  end
end
