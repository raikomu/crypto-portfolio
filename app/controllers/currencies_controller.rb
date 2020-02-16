class CurrenciesController < ApplicationController
  before_action :authorize_access_request!
  before_action :set_currency, only: [:show, :update, :destroy]

  # GET /currencies
  def index
    @currencies = current_user.currencies.all

    render json: @currencies, methods: :market_value
  end

  # POST /currencies
  def create
    @currency = current_user.currencies.build(currency_params)

    if @currency.save
      render json: @currency, status: :created, methods: :market_value
    else
      render json: @currency.errors, status: :unprocessable_entity
    end
  end

  # DELETE /currencies/1
  def destroy
    @currency.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_currency
      @currency = current_user.currencies.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def currency_params
      params.require(:currency).permit(:name, :amount, :wallet, :purchased_at)
    end
end
