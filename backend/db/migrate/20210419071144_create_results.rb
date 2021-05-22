class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.references :user, null: false, foreign_key: true
      t.references :test, null: false, foreign_key: true
      t.references :word, null: false, foreign_key: true
      t.boolean :is_correct

      t.timestamps
    end
  end
end
