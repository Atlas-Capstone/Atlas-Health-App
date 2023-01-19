[Clone the repo](#cloning-setup)

[Create the app](#create-app)

[File Changes](#file-changes)

[Generate Models](#generate-model)

[React Routing](#react-routing)

[Modify App.js](#app.js)

# Cloning Setup

``` console
 $ git clone code
 $ cd code
 $ bundle
 $ yarn
 $ rails db:setup
 $ bin/dev
- code it up
```

# Create the app
``` console
 $ rails new app-name -d postgresql --css tailwind -T
 $ cd app-name
 $ rails db:create
```

## Adding RSpec
``` console
 $ bundle add rspec-rails
 $ rails generate rspec:install
```
## Adding React
``` console
 $ bundle add webpacker
 $ bundle add react-rails
 $ rails webpacker:install
 $ rails webpacker:install:react
 $ yarn add @babel/preset-react
 $ yarn add @rails/activestorage
 $ yarn add @rails/ujs
 $ rails generate react:install
 $ rails generate react:component App
```
## Adding Devise
```console
 $ bundle add devise
 $ rails generate devise:install
 $ rails generate devise User
 $ rails db:migrate
```
# File changes

### config/environments/development.rb

``` ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

### config/initializers/devise.rb

``` ruby
# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get
```

### type this in terminal

rails generate controller Home index

### app/views/home/index.html.erb

``` ruby
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path, sign_in_route: new_user_session_path, sign_out_route: destroy_user_session_path
} %>
```

### app/views/layouts/application.html.erb

``` ruby
// Find this line:
<%= javascript_importmap_tags %>

// And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

### config/routes.rb

``` ruby
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
```

# React Routing
``` console
 $ yarn add react-router-dom
```
## remove default styling

### views/layouts/application.html.erb

remove

``` html
class="container mx-auto mt-28 px-5 flex"
```

from

``` html
<body>
    <main class="container mx-auto mt-28 px-5 flex">
      <%= yield %>
    </main>
  </body>
</html>
```

# Generate Model

### create database

``` ruby
rails generate resource Exercise name:string description:string category:string difficulty:string
rails generate resource Routine name:string user:references
rails generate resource ExerciseRoutine exercise:references routine:references sets:integer reps:integer day:string
rails generate resource CompletedRoutine exercise_routine:references user:references completed_at:datetime
rails generate migration AddAgeHeightWeightToUsers age:integer height:integer weight:integer
rails db:migrate
```

### add validation for user

``` ruby
  validates :age, numericality: { greater_than_or_equal_to: 0 }
  validates :height, numericality: { greater_than_or_equal_to: 0 }
  validates :weight, numericality: { greater_than_or_equal_to: 0 }
```

### add associations in models

``` ruby
class User < ApplicationRecord
  has_many :routines
end

class Routine < ApplicationRecord
  belongs_to :user
  has_many :exercise_routines
end

class Exercise < ApplicationRecord
  has_many :exercise_routines
end

class ExerciseRoutine < ApplicationRecord
  belongs_to :exercise
  belongs_to :routine
  has_many :completed_routines
end

class CompletedRoutine < ApplicationRecord
  belongs_to :exercise_routine
  belongs_to :user
end
```

### seeds.rb

``` ruby
# Create users
user1 = User.create(email: "user1@example.com", password: "password", age: 25, height: 180, weight: 75)
user2 = User.create(email: "user2@example.com", password: "password", age: 30, height: 170, weight: 80)

# Create exercises
exercise1 = Exercise.create(name: "Squats", description: "A compound, full body exercise that primarily targets the quadriceps.", category: "Strength", difficulty: "Intermediate")
exercise2 = Exercise.create(name: "Push-ups", description: "A compound exercise that primarily targets the chest, triceps, and shoulders.", category: "Strength", difficulty: "Beginner")
exercise3 = Exercise.create(name: "Running", description: "A cardio exercise that improves cardiovascular fitness and endurance.", category: "Cardio", difficulty: "Intermediate")

# Create routines
routine1 = Routine.create(name: "Full Body Workout", user: user1)
routine2 = Routine.create(name: "Upper Body Workout", user: user2)

# Create exercise_routines
er1 = ExerciseRoutine.create(exercise: exercise1, routine: routine1, sets: 3, reps: 12, day: "Monday")
er2 = ExerciseRoutine.create(exercise: exercise2, routine: routine1, sets: 3, reps: 10, day: "Monday")
er3 = ExerciseRoutine.create(exercise: exercise3, routine: routine2, sets: 3, reps: 30, day: "Tuesday")

# Create completed_routines
CompletedRoutine.create(exercise_routine: er1, user: user1, completed_at: Date.today)
CompletedRoutine.create(exercise_routine: er2, user: user2, completed_at: Date.today)
```

## App.js

``` jsx
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
const App = (props) => {

    return (
      <BrowserRouter>
      <Header  {...props}/>
      <Routes>
      <Route exact path="/" element={<Home {...props} />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    );

}

export default App
```

## package.json should look like this

``` json
{
  "dependencies": {
    "@babel/preset-react": "^7.18.6",
    "@rails/activestorage": "^7.0.4-1",
    "@rails/ujs": "^7.0.4-1",
    "@rails/webpacker": "5.4.3",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.2.1",
    "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
    "jest": "^29.3.1",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.6.2",
    "react_ujs": "^2.6.2",
    "webpack": "^4.46.0",
    "webpack-cli": "^3.3.12"
  },
  "devDependencies": {
    "@testing-library/react": "^13.4.0",
    "jest": "^29.0.3",
    "jest-environment-jsdom": "^29.0.3",
    "webpack-dev-server": "^3"
  },
  "scripts": {
    "test": "jest",
    "test-watch": "jest --watch"
  },
  "jest": {
    "testEnvironment": "jsdom",
    "roots": [
      "app/javascript/components"
    ],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/javascript/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/test/javascript/__mocks__/styleMock.js"
    },
    "setupFilesAfterEnv": [
      "@testing-library/jest-dom/extend-expect"
    ]
  }
}
```
