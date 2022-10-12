# frozen_string_literal: true

class CreateNameStatistics < ActiveRecord::Migration[7.0]
  def change
    create_table :name_statistics do |t|
      t.string :state
      t.integer :year
      t.string :name
      t.integer :number
      t.string :sex

      t.timestamps
    end

    add_index :name_statistics, :name
  end
end
