Rails.application.routes.draw do
  root to: 'currencies#index'

  resources :currencies, only: [:index, :new, :create, :destroy]

  post   'refresh', controller: :refresh, action: :create
  post   'signin',  controller: :signin,  action: :create
  post   'signup',  controller: :signup,  action: :create
  delete 'signin',  controller: :signin,  action: :destroy
end
