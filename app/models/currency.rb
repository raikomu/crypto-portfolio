class Currency < ApplicationRecord
  belongs_to :user

  validates :name, inclusion: { in: %w(Bitcoin Ethereum Ripple) }
  validates :amount, numericality: { only_integer: true, :greater_than => 0 }
  validates :wallet, presence: true, length: { maximum: 320 }

  def market_value(currency = name)
    client = Bitfinex::RESTv2.new({
      :api_key => 'APuOTD6nNWv12JuVe3gBZW0yEnCdhmE7PqBSxFUvpKr',
      :api_secret => 'cuq2NJIrskU1IkLr1VKfrw0qQm71pOsWZYFFDnafg89',
    })
    sym = 
    case name
      when "Bitcoin" then "BTC"
      when "Ethereum" then "ETH"
      when "Ripple" then "XRP"
    end
    client.ticker("t#{sym}USD")[-4] * amount.round(4)
  end
end
