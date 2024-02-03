"use client"

import { useState } from "react";
import React from "react";

export default function Home() {
  const [essay, setText] = useState(""); 
  // world count that represents the cound of essay
  const wordCount = essay.split(/\s+/).filter(Boolean).length; 
  const handleEssayChange = (e: { target: { value: React.SetStateAction<string>; }; }) => { 
    setText(e.target.value); 
  };

  // Require fields check
  const handleSubmit = (e: {
    target: any; preventDefault: () => void; 
    }) => {
    e.preventDefault();

    // Check if essay is within the character limit
    if (essay.length > 1000) {
      alert("Essay must be 1000 characters or less");
      return;
    } else if (essay.length === 0) {
      alert("Essay must not be empty");
      return;
    }

    const fullName = e.target.elements.namedItem("fullName") as HTMLInputElement;
    const university = e.target.elements.namedItem("university") as HTMLInputElement; 
    const major = e.target.elements.namedItem("major") as HTMLInputElement; 
    const graduationDate = e.target.elements.namedItem("graduationDate") as HTMLInputElement;
    const gender = e.target.elements.namedItem("gender") as HTMLInputElement;
    const country = e.target.elements.namedItem("country") as HTMLInputElement;


    if (fullName.value.trim() === "") {
      alert("Please fill out your full name");
      return;
    }
    if (university.value.trim() === "") {
      alert("Please fill out your university");
      return;
    }
    if (major.value.trim() === "") {
      alert("Please fill out your major");
      return;
    }
    if (graduationDate.value.trim() === "") {
      alert("Please fill out your graduation date");
      return;
    }
    if (gender.value === "") {
      alert("Please fill out your gender");
      return;
    }
    if (country.value.trim() === "") {
      alert("Please fill out your country");
      return;
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Cal Hacks 11.0 Registration</h1>
        <form onSubmit={handleSubmit}>
          {/* full name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input type="text" id="fullName" name="fullName" className="mt-1 p-2 w-full border rounded" required/>
          </div>
          {/* University */}
          <div className="mb-4">
            <label htmlFor="university" className="block text-sm font-medium text-gray-600">
              University
            </label>
            <input type="text" id="university" name="university" className="mt-1 p-2 w-full border rounded" required/>
          </div>
          {/* major */}
          <div className="mb-4">
            <label htmlFor="major" className="block text-sm font-medium text-gray-600">
              Major
            </label>
            <input type="text" id="major" name="major" className="mt-1 p-2 w-full border rounded" required/>
          </div>
          {/* graduation date */}
          <div className="mb-4">
            <label htmlFor="graduationDate" className="block text-sm font-medium text-gray-600">
              Graduation Date
            </label>
            <input type="date" id="graduationDate" name="graduationDate" className="mt-1 p-2 w-full border rounded" required/>
          </div>
          {/* gender */}
          <div className="mb-4">
            <label htmlFor="graduationDate" className="block text-sm font-medium text-gray-600">
              Gender
              <select id="gender" name="gender" className="mt-1 p-2 w-full border rounded" defaultValue="" required>
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="dontWantToSay">Don't want to say</option>
              </select>
            </label>
          </div>
          {/* Country of Residence */}
          <div className="mb-4">
            <label htmlFor="Country of Residence" className="block text-sm font-medium text-gray-600">
            Country of Residence
            </label>
            <input type="text" id="Country" name="Country" className="mt-1 p-2 w-full border rounded" required />
          </div>
          {/* Essay */}
          <div className="mb-4">
            <label htmlFor="essay" className="block text-sm font-medium text-gray-600">
            Why are you interested in attending Cal Hacks 11.0? What are you interested in
            building? (1000 character maximum)
            </label>
            <textarea
              id="essay"
              name="essay"
              className="mt-1 p-2 w-full border rounded"
              rows={5}
              maxLength={1000}
              onChange={handleEssayChange} 
              required
            ></textarea>
          </div>

          {/* Display the word count */}
          <div className="text-sm text-gray-600 mb-4">
            Word Count: {wordCount}/1000
          </div>
          
          {/* Checkbox for checking if the participant is 18+ years of age */}
          <div className="mb-4">
            <label>
              <input type="checkbox" className="mr-2" required />
              Are you 18 years old or older?
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
