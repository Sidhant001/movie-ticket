import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../features/movieSlice";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    duration: "",
    description: "",
    poster: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.genre.trim()) newErrors.genre = "Genre is required";
    if (!formData.duration || isNaN(formData.duration))
      newErrors.duration = "Valid duration required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.poster.trim())
      newErrors.poster = "Poster URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    dispatch(addMovie(formData));
    navigate("/movies");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-300 dark:bg-gray-700 p-8 rounded-lg w-96 space-y-4"
      >
        <h2 className="text-black dark:text-white text-2xl text-center">Add New Movie</h2>

        {["title", "genre", "duration", "description", "poster"].map(
          (field) => (
            <div key={field}>
              <input
                type="text"
                name={field}
                placeholder={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 text-black dark:text-white border border-gray-600 dark:border-gray-400 rounded"
              />
              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]}</p>
              )}
            </div>
          )
        )}

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;