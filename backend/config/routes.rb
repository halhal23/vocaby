Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :wordbooks, only: [:index]
      post 'signup', to: 'registrations#signup'
      post 'signin', to: 'sessions#signin'
      delete 'signout', to: 'sessions#signout'
      get 'logged_in', to: 'sessions#logged_in'
    end
  end
end
