"use client";
import React, { useState } from "react";
import updatePythonReview from "./updatePythonReview";
import updateTypeScriptReview from "./updateTypeScriptReview";
import Messages from "@/app/login/messages";

function ReviewForm({ employeeLists = [{}] }: any) {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [pythonReview, setPythonReview] = useState("");
  const [typescriptReview, setTypescriptReview] = useState("");

  const handleUserChange = (event: any) => {
    const userId = event.target.value;
    const selectedUserTemp = employeeLists.find(
      (user: any) => user.id === userId
    );
    setSelectedUser(selectedUserTemp);
    setPythonReview(selectedUserTemp.python_review);
    setTypescriptReview(selectedUserTemp.typescript_review);
  };

  const handlePythonReviewChange = (event: any) => {
    setPythonReview(event.target.value);
  };

  const handleTypescriptReviewChange = (event: any) => {
    setTypescriptReview(event.target.value);
  };

  const handleSubmit = async () => {
    // Seçilen kullanıcı, Python ve TypeScript incelemelerini kullanarak istediğiniz işlemi gerçekleştirin
    console.log("Selected User:", selectedUser);
    console.log("Python Review:", pythonReview);
    console.log("TypeScript Review:", typescriptReview);
    let pyResult = await updatePythonReview(selectedUser.email, pythonReview);
    let tsResult = await updateTypeScriptReview(
      selectedUser.email,
      typescriptReview
    );
    if (pyResult && tsResult) alert("Update is Successful!");
    else alert("Error in update!");
  };
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-center mb-4">Entry Review</h2>

      <div className="bg-white p-8 border border-gray-300 rounded-md shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Select User:
          </label>
          <select
            className="w-full border border-gray-300 p-2 rounded-md"
            onChange={handleUserChange}
          >
            <option value="">Select a User</option>
            {employeeLists.map((user: any) => (
              <option key={user.id} value={user.id}>
                {user.first_name + " " + user.last_name}
              </option>
            ))}
          </select>
        </div>

        {selectedUser && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Python Review
              <br /> Current: {selectedUser.python_review}
            </label>
            <select
              className="w-full border border-gray-300 p-2 rounded-md"
              onChange={handlePythonReviewChange}
            >
              <option value="">Select Python Review</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
            </select>
          </div>
        )}

        {selectedUser && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              TypeScript Review:
              <br /> Current: {selectedUser.typescript_review}
            </label>
            <select
              className="w-full border border-gray-300 p-2 rounded-md"
              onChange={handleTypescriptReviewChange}
            >
              <option value="">Select TypeScript Review</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
            </select>
          </div>
        )}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
          onClick={handleSubmit}
          disabled={!selectedUser || !pythonReview || !typescriptReview}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;
