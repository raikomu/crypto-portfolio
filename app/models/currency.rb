class Currency < ApplicationRecord
  belongs_to :user

  validates :name, inclusion: { in: %w(Bitcoin Ethereum Ripple) }
  validates :amount, numericality: { only_integer: true, :greater_than => 0 }
  validates :wallet, presence: true, length: { maximum: 320 }
end
