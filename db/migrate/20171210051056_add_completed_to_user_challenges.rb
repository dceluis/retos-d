class AddCompletedToUserChallenges < ActiveRecord::Migration[5.1]
  def change
    add_column :user_challenges, :completed, :boolean, default: false
  end
end
