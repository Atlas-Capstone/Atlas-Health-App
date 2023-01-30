
# users
User.create(email: "user1@example.com", user_name: 'user1', password: "password", age: 25, height: 180, weight: 75, gender: "female")

user1 = User.first

User.create(email: "user2@example.com", user_name: 'user2', password: "password", age: 30, height: 170, weight: 80, gender: "male")

user2 = User.second

# exercises
squat = Exercise.find_or_create_by(name: "Squats", description: "A compound, full body exercise that primarily targets the quadriceps.", category: "Strength", difficulty: "Intermediate", image: "https://images.unsplash.com/photo-1612957824445-f0c090ff1af0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", video: "https://www.youtube.com/embed/kRX2NfqM90g" )

push_ups = Exercise.find_or_create_by(name: "Push-ups", description: "A compound exercise that primarily targets the chest, triceps, and shoulders.", category: "Strength", difficulty: "Beginner", image: "https://www.fitnesseducation.edu.au/wp-content/uploads/2017/03/Pushups.jpg", video: "https://www.youtube.com/embed/bt5b9x9N0KU" )

running = Exercise.find_or_create_by(name: "Running", description: "A cardio exercise that improves cardiovascular fitness and endurance.", category: "Cardio", difficulty: "Intermediate", image: "https://res.cloudinary.com/im2015/image/upload/w_1200,h_1200,c_fill,g_center//blog/running_cover_1.jpg", video:"https://www.youtube.com/embed/_kGESn8ArrU")

bench_press = Exercise.find_or_create_by(name: "Bench Press", description: "A compound exercise that primarily targets the chest, shoulders, and triceps.", category: "Strength", difficulty: "Intermediate", image: "https://plus.unsplash.com/premium_photo-1669305012477-480bc1f237ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", video:"https://www.youtube.com/embed/rxD321l2svE")

deadlift = Exercise.find_or_create_by(name: "Deadlift", description: "A compound exercise that primarily targets the glutes, hamstrings, back, and core.", category: "Strength", difficulty: "Advanced", image: "https://images.unsplash.com/photo-1534368270820-9de3d8053204?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", video:"https://www.youtube.com/embed/r4MzxtBKyNE")

military_press = Exercise.find_or_create_by(name: "Military Press", description: "A compound exercise that primarily targets the shoulders and triceps.", category: "Strength", difficulty: "Intermediate", image: "https://e7.pngegg.com/pngimages/226/694/png-clipart-barbell-shoulder-physical-fitness-overhead-press-gwasg-milwrol-barbell-sports-equipment-arm.png", video:"https://www.youtube.com/embed/waeCyaAQRn8")

bend_over_row = Exercise.find_or_create_by(name: "Bend Over Row", description: "A compound exercise that primarily targets the muscles of the back and lower back.", category: "Strength", difficulty: "Intermediate", image: "https://thumbs.dreamstime.com/b/art-illustration-199936553.jpg", video:"https://www.youtube.com/embed/UL8ZcK64KxA")


# Create schedules
routine1 = Schedule.find_or_create_by(name: "Full Body Workout", days_per_week: 3, user_id: user1.id)

routine2 = Schedule.find_or_create_by(name: "Upper Body Workout", days_per_week: 1, user_id: user2.id)

strength_routine = Schedule.find_or_create_by(name: "Three Day Strength", days_per_week: 3, user_id: user1.id)


# find_or_create_by exercise_routines
er1 = ExerciseRoutine.find_or_create_by(exercise_id: squat.id, schedule_id: routine1, sets: 3, reps: 12, weight: 100, day: "Monday")

er2 = ExerciseRoutine.find_or_create_by(exercise_id: push_ups.id, schedule_id: routine1.id, sets: 3, reps: 10, weight: 150,day: "Monday")

er3 = ExerciseRoutine.find_or_create_by(exercise_id: running.id, schedule_id: routine2.id, sets: 3, reps: 30, weight: 200,day: "Tuesday")

squat_routine = ExerciseRoutine.find_or_create_by(exercise_id: squat.id, schedule_id: strength_routine.id, sets: 5, reps: 5, weight: 100, day: "Monday")

bench_press_routine = ExerciseRoutine.find_or_create_by(exercise_id: bench_press.id, schedule_id: strength_routine.id, sets: 5, reps: 5, weight: 100, day: "Monday")

bent_over_row_routine = ExerciseRoutine.find_or_create_by(exercise_id: bend_over_row.id, schedule_id: strength_routine.id, sets: 5, reps: 5, weight: 100, day: "Monday")

squat_routine2 = ExerciseRoutine.find_or_create_by(exercise_id: squat.id, schedule_id: strength_routine.id, sets: 5, reps: 5, weight: 100, day: "Friday")

bench_press_routine2 = ExerciseRoutine.find_or_create_by(exercise_id: bench_press.id, schedule_id: strength_routine.id, sets: 5, reps: 5, weight: 100, day: "Friday")

military_press_routine = ExerciseRoutine.find_or_create_by(exercise_id: military_press.id, schedule_id: strength_routine.id, sets: 5, reps: 5, weight: 100, day: "Wednesday")

deadlift_routine = ExerciseRoutine.find_or_create_by(exercise_id: deadlift.id, schedule_id: strength_routine.id, sets: 5, reps: 5, weight: 100, day: "Wednesday")


# find_or_create_by completed_routines
CompletedRoutine.find_or_create_by(exercise_routine: er1, user_id: user1.id, completed_at: Date.today)

CompletedRoutine.find_or_create_by(exercise_routine: er2, user_id: user2.id, completed_at: Date.today)
