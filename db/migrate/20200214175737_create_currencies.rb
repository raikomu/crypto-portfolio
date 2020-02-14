class CreateCurrencies < ActiveRecord::Migration[6.0]
  def change
    create_table :currencies do |t|
      t.string :name
      t.integer :amount
      t.string :wallet
      t.date :purchased_at
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
