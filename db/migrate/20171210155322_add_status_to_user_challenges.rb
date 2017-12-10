class AddStatusToUserChallenges < ActiveRecord::Migration[5.1]
  def change
    add_column :user_challenges, :status, :integer, default: 0, null: false
  end
end
