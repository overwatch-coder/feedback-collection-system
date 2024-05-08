import React, { useState } from "react";
import StartRatingComponent from "./StarRating";
import EmojiRatingComponent from "./EmojiRating";
import NumberRating from "./NumberRating";
import { Link } from "react-router-dom";

const NewFormPage = () => {
  const [fields, setFields] = useState([
    { label: "", placeholder: "", type: "text" },
  ]);
  const [ratingType, setRatingType] = useState("star");
  const [showCommentField, setShowCommentField] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
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
      <div key={index} className="field flex flex-col gap-3">
        <label>{field.label}</label>
        <input
          type={field.type}
          placeholder={field.placeholder}
          className="bg-primary text-light w-full px-4 py-2 border rounded"
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
      <div className="field mt-3">
        <textarea
          name="comment"
          rows={10}
          placeholder="Additional comments..."
          className="bg-primary text-light w-full px-4 py-2 border rounded"
        ></textarea>
      </div>
    ) : null;

    // Combining all generated JSX into a single JSX for the form
    const formJSX = (
      <div className="bg-secondary flex flex-col w-full">
        <h2 className="text-xl font-bold text-white">{formTitle}</h2>
        <h3 className="text-sm font-normal text-white">{formDescription}</h3>
        <form method="POST" className="flex flex-col gap-3">
          {formFields}
          <h3 className="font-bold">Rate Your Experience</h3>
          {ratingField}
          <div className="">{commentField}</div>
          <button
            type="submit"
            className="bg-primary text-light hover:scale-105 px-5 py-2 mt-5 font-medium text-center transition rounded"
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
        <div className="flex items-center justify-between">
          <h2 className="md:text-4xl text-3xl font-bold">Create New Form</h2>

          <Link
            className="bg-secondary text-light hover:scale-105 w-fit px-5 py-2 font-medium transition rounded"
            to={`/dashboard/create`}
          >
            Go Back
          </Link>
        </div>

        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          placeholder="Title of the Form"
          className="bg-primary text-light w-full px-4 py-2 border rounded"
        />

        <input
          type="text"
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          placeholder="Description of the form"
          className="bg-primary text-light w-full px-4 py-2 border rounded"
        />

        <div className="md:grid-cols-2 bg-secondary grid w-full grid-cols-1 gap-10 p-5">
          <div className="md:flex-row md:justify-around md:p-5 flex flex-col w-full gap-5 mx-auto">
            <div className="flex flex-col w-full max-w-sm gap-5">
              <div>
                {fields.map((field, index) => (
                  <div key={index} className="field flex flex-col gap-3">
                    <div>
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) =>
                          handleFieldChange(index, "label", e.target.value)
                        }
                        placeholder="Label Name"
                        className="bg-primary text-light w-full px-4 py-2 mt-2 mr-2 border border-gray-100 rounded"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        value={field.placeholder}
                        onChange={(e) =>
                          handleFieldChange(
                            index,
                            "placeholder",
                            e.target.value
                          )
                        }
                        placeholder="Placeholder Name"
                        className="bg-primary text-light w-full px-4 py-2 mt-2 mr-2 border border-gray-100 rounded"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveField(index)}
                      className="bg-primary hover:scale-105 px-4 py-2 mt-2 mr-2 text-white transition rounded"
                    >
                      Remove Input Field
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-bold">
                  Rate Your Experience (Select one type)
                </h3>
                <label className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    value="star"
                    checked={ratingType === "star"}
                    onChange={() => handleRatingTypeChange("star")}
                  />
                  <StartRatingComponent />
                </label>
                <label className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    value="emoji"
                    checked={ratingType === "emoji"}
                    onChange={() => handleRatingTypeChange("emoji")}
                  />
                  <EmojiRatingComponent />
                </label>
                <label className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    value="number"
                    checked={ratingType === "number"}
                    onChange={() => handleRatingTypeChange("number")}
                  />
                  <NumberRating />
                </label>
              </div>

              <div className="flex flex-col w-full gap-3">
                <button
                  type="button"
                  onClick={handleAddField}
                  className="bg-primary text-light hover:scale-105 w-full px-5 py-2 font-medium text-center transition rounded"
                >
                  Add Input Field
                </button>

                <button
                  type="button"
                  onClick={handleToggleCommentField}
                  className="bg-primary text-light hover:scale-105 w-full px-5 py-2 font-medium text-center transition rounded"
                >
                  {showCommentField
                    ? "Exclude Comment Field"
                    : "Include Comment Field"}
                </button>
              </div>

              <button
                type="button"
                onClick={handleCreateForm}
                className="bg-primary text-light hover:scale-105 px-5 py-2 font-medium text-center transition rounded"
              >
                Click to preview
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="pt-3 text-sm font-bold">
              Preview Form Before Publishing
            </h2>

            <div>{formJSX}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFormPage;
