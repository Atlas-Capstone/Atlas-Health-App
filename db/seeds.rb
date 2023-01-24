# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# Create users
user1 = User.create(email: "user1@example.com", user_name: 'user1', password: "password", age: 25, height: 180, weight: 75, gender: "female")
user2 = User.create(email: "user2@example.com", user_name: 'user2', password: "password", age: 30, height: 170, weight: 80, gender: "male")

# Create exercises
squat = Exercise.create(name: "Squats", description: "A compound, full body exercise that primarily targets the quadriceps.", category: "Strength", difficulty: "Intermediate", image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.svg" )
push_ups = Exercise.create(name: "Push-ups", description: "A compound exercise that primarily targets the chest, triceps, and shoulders.", category: "Strength", difficulty: "Beginner", image: "https://www.fitnesseducation.edu.au/wp-content/uploads/2017/03/Pushups.jpg")
running = Exercise.create(name: "Running", description: "A cardio exercise that improves cardiovascular fitness and endurance.", category: "Cardio", difficulty: "Intermediate", image: "https://res.cloudinary.com/im2015/image/upload/w_1200,h_1200,c_fill,g_center//blog/running_cover_1.jpg")
bench_press = Exercise.create(name: "Bench Press", description: "A compound exercise that primarily targets the chest, shoulders, and triceps.", category: "Strength", difficulty: "Intermediate", image: "https://plus.unsplash.com/premium_photo-1669305012477-480bc1f237ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")
deadlift = Exercise.create(name: "Deadlift", description: "A compound exercise that primarily targets the glutes, hamstrings, back, and core.", category: "Strength", difficulty: "Advanced", image: "https://images.unsplash.com/photo-1534368270820-9de3d8053204?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")
military_press = Exercise.create(name: "Military Press", description: "A compound exercise that primarily targets the shoulders and triceps.", category: "Strength", difficulty: "Intermediate", image: "https://e7.pngegg.com/pngimages/226/694/png-clipart-barbell-shoulder-physical-fitness-overhead-press-gwasg-milwrol-barbell-sports-equipment-arm.png")
bend_over_row = Exercise.create(name: "Bend Over Row", description: "A compound exercise that primarily targets the muscles of the back and lower back.", category: "Strength", difficulty: "Intermediate", image: "https://thumbs.dreamstime.com/b/art-illustration-199936553.jpg")

# Create schedules
routine1 = Schedule.create(name: "Full Body Workout", days_per_week: 3, user: user1)
routine2 = Schedule.create(name: "Upper Body Workout", days_per_week: 1, user: user2)
strength_routine = Schedule.create(name: "Three Day Strength", days_per_week: 3, user: user1)

# Create exercise_routines
er1 = ExerciseRoutine.create(exercise: squat, schedule: routine1, sets: 3, reps: 12, weight: 100, day: "Monday")
er2 = ExerciseRoutine.create(exercise: push_ups, schedule: routine1, sets: 3, reps: 10, weight: 150,day: "Monday")
er3 = ExerciseRoutine.create(exercise: running, schedule: routine2, sets: 3, reps: 30, weight: 200,day: "Tuesday")
squat_routine = ExerciseRoutine.create(exercise: squat, schedule: strength_routine, sets: 5, reps: 5, weight: 100, day: "Monday")
bench_press_routine = ExerciseRoutine.create(exercise: bench_press, schedule: strength_routine, sets: 5, reps: 5, weight: 100, day: "Monday")
bent_over_row_routine = ExerciseRoutine.create(exercise: bend_over_row, schedule: strength_routine, sets: 5, reps: 5, weight: 100, day: "Monday")
squat_routine2 = ExerciseRoutine.create(exercise: squat, schedule: strength_routine, sets: 5, reps: 5, weight: 100, day: "Friday")
bench_press_routine2 = ExerciseRoutine.create(exercise: bench_press, schedule: strength_routine, sets: 5, reps: 5, weight: 100, day: "Friday")
military_press_routine = ExerciseRoutine.create(exercise: military_press, schedule: strength_routine, sets: 5, reps: 5, weight: 100, day: "Wednesday")
deadlift_routine = ExerciseRoutine.create(exercise: deadlift, schedule: strength_routine, sets: 5, reps: 5, weight: 100, day: "Wednesday")



# Create completed_routines
CompletedRoutine.create(exercise_routine: er1, user: user1, completed_at: Date.today)
CompletedRoutine.create(exercise_routine: er2, user: user2, completed_at: Date.today)
