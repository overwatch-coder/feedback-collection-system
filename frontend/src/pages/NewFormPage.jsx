import React, { useState } from "react";
import StartRatingComponent from "./StarRating";
import EmojiRatingComponent from "./EmojiRating";
import NumberRating from "./NumberRating";

const NewFormPage = () => {
  const [fields, setFields] = useState([
    { label: "", placeholder: "", type: "text" },
  ]);
  const [ratingType, setRatingType] = useState("star");
  const [showCommentField, setShowCommentField] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formJSX, setFormJSX] = useState(null);

  const handleAddField = () => {
    setFields([...fields, { label: "", placeholder: "", type: "text" }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleFieldChange = (index, property, value) => {
    const updatedFields = [...fields];
    updatedFields[index][property] = value;
    setFields(updatedFields);
  };

  const handleRatingTypeChange = (type) => {
    setRatingType(type);
  };

  const handleToggleCommentField = () => {
    setShowCommentField(!showCommentField);
  };

  const handleCreateForm = () => {
    // Generating JSX for form fields based on the current state
    const formFields = fields.map((field, index) => (
      <div key={index} className="field">
        <label>{field.label}</label>
        <br />
        <input
          type={field.type}
          placeholder={field.placeholder}
          className="bg-primary border border-gray-100 mt-2 px-4 py-2 mr-2 text-light"
        />
      </div>
    ));

    // Generating JSX for rating field based on the selected rating type
    let ratingField;
    if (ratingType === "star") {
      ratingField = <StartRatingComponent />;
    } else if (ratingType === "emoji") {
      ratingField = <EmojiRatingComponent />;
    } else if (ratingType === "number") {
      ratingField = <NumberRating />;
    }

    // Generating JSX for comment field based on the showCommentField state
    const commentField = showCommentField ? (
      <div className="field">
        <input
          type="textarea"
          placeholder="Additional comments..."
          className="bg-primary border border-gray-100 mt-2 px-4 py-2 mr-2 text-light"
        />
      </div>
    ) : null;

    // Combining all generated JSX into a single JSX for the form
    const formJSX = (
      <div className="flex flex-col pl-10 pt-2 pb-10 mt-5 mb-5 bg-secondary">
        <h2 className="font-bold text-xl pt-5 pb-3 text-white ">{formTitle}</h2>
        <form>
          {formFields}
          <h3 className="font-bold pt-5 pb-3">Rate Your Experience</h3>
          {ratingField}
          <div className="pt-5">{commentField}</div>
          <button
            type="submit"
            className="bg-primary text-light hover:scale-105 px-5 py-2 font-medium text-center transition rounded mt-10"
          >
            Publish Form
          </button>
        </form>
      </div>
    );

    // Setting the generated form JSX to the state
    setFormJSX(formJSX);
  };

  return (
    <>
      <div className="md:py-10 md:px-20 flex flex-col flex-grow w-full gap-6 px-5 py-5">
        <h2 className="md:text-4xl text-3xl font-bold">Create New Form</h2>
        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          placeholder="Title of the Form"
          className="bg-primary w-full px-4 py-2 text-light"
        />

        <div className="md:flex-row md:justify-around bg-secondary md:p-5 flex flex-col w-full gap-5 p-5 mx-auto">
          <div className="flex flex-col gap-5">
            <div>
              {fields.map((field, index) => (
                <div key={index} className="field">
                  <div>
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) =>
                        handleFieldChange(index, "label", e.target.value)
                      }
                      placeholder="Label Name"
                      className="bg-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={field.placeholder}
                      onChange={(e) =>
                        handleFieldChange(index, "placeholder", e.target.value)
                      }
                      placeholder="Placeholder Name"
                      className="bg-primary border border-gray-100 mt-2 px-4 py-2 mr-2 text-light"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveField(index)}
                    className="bg-primary px-4 py-2 mr-2 mt-2 text-white"
                  >
                    Remove Input Field
                  </button>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-bold">
                Rate Your Experience (Select one type)
              </h3>
              <label>
                <input
                  type="radio"
                  value="star"
                  checked={ratingType === "star"}
                  onChange={() => handleRatingTypeChange("star")}
                />
                <StartRatingComponent />
              </label>
              <label>
                <input
                  type="radio"
                  value="emoji"
                  checked={ratingType === "emoji"}
                  onChange={() => handleRatingTypeChange("emoji")}
                />
                <EmojiRatingComponent />
              </label>
              <label>
                <input
                  type="radio"
                  value="number"
                  checked={ratingType === "number"}
                  onChange={() => handleRatingTypeChange("number")}
                />
                <NumberRating />
              </label>
            </div>

            <div>
              <button
                type="button"
                onClick={handleAddField}
                className="bg-primary text-light hover:scale-105 px-5 py-2 font-medium text-center transition rounded"
              >
                Add Input Field
              </button>
              <button
                type="button"
                onClick={handleToggleCommentField}
                className="bg-primary text-light hover:scale-105 px-5 py-2 font-medium text-center transition rounded ml-5"
              >
                {showCommentField ? "Hide Comment Field" : "Add Comment Field"}
              </button>
            </div>

            <button
              type="button"
              onClick={handleCreateForm}
              className="bg-primary text-light hover:scale-105 px-5 py-2 font-medium text-center transition rounded"
            >
              Create Form
            </button>
          </div>
        </div>
        {formJSX}
      </div>
    </>
  );
};

export default NewFormPage;
