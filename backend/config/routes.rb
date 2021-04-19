Rails.application.routes.draw do
  namespace :api do
    namespace :v1, format: 'json' do
      resources :wordbooks, only: [:index]
      resources :words, only: [] do
        collection do
          get :start
        end
      end
      post 'signup', to: 'registrations#signup'
      post 'signin', to: 'sessions#signin'
      delete 'signout', to: 'sessions#signout'
      get 'logged_in', to: 'sessions#logged_in'
    end
  end
end
