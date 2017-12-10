class CreateUserChallenges < ActiveRecord::Migration[5.1]
  def change
    create_table :user_challenges do |t|
      t.references :user, foreign_key: true
      t.references :challenge, foreign_key: true

      t.timestamps
    end
  end
end
