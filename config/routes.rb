Rails.application.routes.draw do

  get 'dashboard/show'

  resources :user_challenges
  resources :challenges
  root to: 'users#new'


  resources :users

  resource :sessions, only: [:new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
