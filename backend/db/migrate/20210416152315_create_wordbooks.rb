class CreateWordbooks < ActiveRecord::Migration[6.0]
  def change
    create_table :wordbooks do |t|
      t.string :name

      t.timestamps
    end
  end
end
