class Challenge < ApplicationRecord
  has_many :user_challenges
  has_many :users, through: :user_challenges

  has_many :goals, inverse_of: :challenge, dependent: :destroy
  accepts_nested_attributes_for :goals, reject_if: :all_blank, allow_destroy: true

  def completed_by?(user)
    user_challenges.where(user_id: user.id, challenge_id: id).any?
  end

  def locked_for?(user)
    user_challenges.where(user_id: user.id, challenge_id: id).empty?
  end
end
