import React, { useState } from "react"

const FoodCalories = ({ current_user }) => {
  const [search, setSearch] = useState()
  const [data, setData] = useState()

  const apiKey = process.env.REACT_APP_NINJA_API
  async function fetchCalories(search) {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/nutrition?query=${search}`,
        {
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        }
      )
      const data = await response.json()

      setData(data)
    } catch (error) {
      console.error(error)
    }
  }
  function handleSubmit() {
    fetchCalories(search)
  }
  return (
    <div className="bg-gradient-to-br from-[#7DAFC7] min-h-screen to-white p-10 text-white">
      <h1 className="text-center text-3xl font-mono font-bold pt-10">
        Calorie Calculator
      </h1>
      <p className="text-center font-mono">
        Input all of the foods eaten to get a read out of calories and
        macro-nutrients.
      </p>
      <div className="flex flex-col items-center mt-5  gap-3">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="search">Input all ingredients</label>
            <textarea
              rows="4"
              cols="30"
              name="search"
              onChange={(e) => {
                setSearch(e.target.value)
              }}
              type="text"
              className="rounded-lg leading-5 text-black"
            />
          </div>
          <button
            className="bg-teal-800 text-white p-3 rounded-full mt-3 hover:shadow-xl hover:bg-teal-600"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        {data && (
          <div className="bg-gray-400 bg-opacity-60 rounded-2xl p-8 mt-8">
            <h3 className="font-mono underline font-bold text-xl ">Calories</h3>
            {data?.map((item, index) => (
              <div
                key={index}
                className="text-white  flex flex-col text-left justify-center mt-2 lg:flex-row lg:flex-wrap lg:gap-4"
              >
                <p className="font-bold text-lg underline">
                  {item.name}
                  {": "}
                  <span>{item.calories} kcal</span>
                </p>
                <p>fat(g): {item.fat_total_g}</p>
                <p>carbohydrates(g): {item.carbohydrates_total_g}</p>
                <p>protein(g): {item.protein_g}</p>
              </div>
            ))}
            <div className="mt-6">
              <p className="font-bold text-2xl underline">
                Total Calories:{" "}
                {data?.reduce((acc, item) => acc + item.calories, 0).toFixed(1)}
              </p>
              <p className="">
                Total Fat:{" "}
                {data
                  ?.reduce((acc, item) => acc + item.fat_total_g, 0)
                  .toFixed(1)}
              </p>
              <p className="">
                Total Carbohydrates:{" "}
                {data
                  ?.reduce((acc, item) => acc + item.carbohydrates_total_g, 0)
                  .toFixed(1)}
              </p>
              <p className="">
                Total Protein:{" "}
                {data
                  ?.reduce((acc, item) => acc + item.protein_g, 0)
                  .toFixed(1)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FoodCalories
