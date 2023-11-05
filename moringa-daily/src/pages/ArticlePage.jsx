import React, { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const ArticlePage = () => {
  // Fake data for the article
  const articleData = {
    author: "John Doe",
    date: "1st Nov 2023",
    title: "How is AI changing the modern office?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit placeat quo quasi eaque saepe! Dolorum, harum voluptate quisquam nostrum repellendus magnam alias sunt illum possimus corrupti laudantium dolore officia.",
  };

  // Function to handle editing the article
  const handleEditArticle = () => {
    // Implement the edit article logic here
    alert("Edit button clicked!");
  };

  // Function to handle adding comments
  const handleAddComment = () => {
    // Implement the add comment logic here
    alert("Add comment button clicked!");
  };

  // State to manage radio checklist
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{articleData.title}</h1>
      <div className="text-slate-300 text-md mb-4">
        <div className="flex items-center">
          <AccountCircleOutlinedIcon style={{ fontSize: "24px" }} />
          <h6 className="ml-2">{articleData.author}</h6>
        </div>
        <div className="flex items-center mb-2">
          <div>{articleData.date}</div>
          <div className="ml-4">
            <span className="text-lg pr-2">Rate this:</span>
            <span role="img" aria-label="Star Rating" className="cursor-pointer">
              ⭐️
            </span>
            <span role="img" aria-label="Star Rating" className="cursor-pointer">
              ⭐️
            </span>
            <span role="img" aria-label="Star Rating" className="cursor-pointer">
              ⭐️
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-600">{articleData.content}</p>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={handleEditArticle}
      >
        Edit Article
      </button>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Comments</h2>
        {/* Render comments here */}
        {/* You can map over an array of comments and display them */}
      </div>
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="Add a comment"
        ></textarea>
        <button
          className="mt-2 p-2 bg-green-500 text-white rounded hover:bg-green-700"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
      <div className="mt-8 p-4 border border-yellow-400 rounded">
        <h2 className="text-lg font-semibold mb-2">Administrator Controls</h2>
        <div>
          <label>
            <input
              type="radio"
              value="addToWishlist"
              checked={selectedOption === "addToWishlist"}
              onChange={handleRadioChange}
              className="mr-2 text-yellow-500"
            />
            Add to Wishlist
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="flag"
              checked={selectedOption === "flag"}
              onChange={handleRadioChange}
              className="mr-2 text-yellow-500"
            />
            Flag
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="remove"
              checked={selectedOption === "remove"}
              onChange={handleRadioChange}
              className="mr-2 text-yellow-500"
            />
            Remove
          </label>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
