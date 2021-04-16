class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.references :level, null: false, foreign_key: true
      t.string :japanese
      t.string :english
      t.string :part

      t.timestamps
    end
  end
end
