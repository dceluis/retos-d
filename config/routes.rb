Rails.application.routes.draw do

  resources :challenges
  root to: 'sessions#new'


  resources :users

  resource :sessions, only: [:new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
