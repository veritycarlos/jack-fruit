Rails.application.routes.draw do

  resources :plants, only: [:index, :show, :create, :update, :destroy] do
    resources :tips, only: [:show, :index, :create]
  end 

  resources :tips, only: [:show, :index, :create]

  # get '/plants', to: 'plants#index'
  # get '/plants/:id', to: 'plants#show'
  # post '/plants', to: 'plants#create'

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  #nancy did '/me' for users show

  post '/signup', to: 'users#create'
  get '/current-user', to: 'users#get_current_user'
  

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


  

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
