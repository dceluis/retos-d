class AddPositionToUserChallenge < ActiveRecord::Migration[5.1]
  def change
    add_column :user_challenges, :position, :integer
  end
end
