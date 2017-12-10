class CreateGoals < ActiveRecord::Migration[5.1]
  def change
    create_table :goals do |t|
      t.references :challenge, foreign_key: true, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
