Rails.application.routes.draw do
  root to: 'users#new'

  get 'dashboard/show'

  resources :users
  resources :challenges
  resources :user_challenges do
    post "/activate/", to: 'user_challenges#activate', as: :activate
    post "/complete/", to: 'user_challenges#complete', as: :complete
  end
  resources :goals, only: [:show, :edit, :update]
  resource :sessions, only: [:new, :create, :destroy]

end
