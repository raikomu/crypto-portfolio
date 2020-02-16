require 'rest-client'

class Currency < ApplicationRecord
  belongs_to :user

  validates :name, inclusion: { in: %w(Bitcoin Ethereum Ripple) }
  validates :amount, numericality: { only_integer: true, :greater_than => 0 }
  validates :wallet, presence: true, length: { maximum: 320 }

  def market_value
    crypto_abbr = case name
                  when 'Bitcoin'  then 'BTC'
                  when 'Ethereum' then 'ETH'
                  when 'Ripple'   then 'XRP'
                  end

    response = RestClient::Request.new({
      method: :post,
      url: "https://api-pub.bitfinex.com/v2/calc/fx?ccy1=#{crypto_abbr}&ccy2=EUR",
      headers: {},
      payload: {}
    }).execute do |response, request, result|
      (JSON.parse(response)[0] * amount).round(2)
    end
    
  end
end
