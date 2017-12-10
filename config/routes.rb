Rails.application.routes.draw do
  root to: 'users#new'

  get 'dashboard/show'

  resources :users
  resources :challenges
  resources :user_challenges
  resources :goals, only: [:show, :edit, :update]
  resource :sessions, only: [:new, :create, :destroy]

end
