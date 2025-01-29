import React from "react";

export default function About(props) {
  let mystyle = {
    backgroundColor: props.mode === "light" ? "white" : "#011f4a",
    color: props.mode === "light" ? "black" : "white",
  };
  let mystyle2 = {
    backgroundColor: props.mode === "light" ? "white" : "#002F72",
    color: props.mode === "light" ? "black" : "black",
  };

  return (
    <div
      className="accordion"
      id="accordionExample"
      style={{ padding: "14px" }}
    >
      <h1 className="mb-3" style={{ textAlign: "center" }}>
        About Us
      </h1>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={mystyle}
          >
            📝 TextUtils
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={mystyle2}>
            TextUtils is a powerful and user-friendly text manipulation tool
            designed to help you process and analyze text efficiently. ✨
            Whether you need to format text, change case styles, remove extra
            spaces, or analyze word and character counts, TextUtils provides a
            simple and interactive interface to enhance your productivity. 🚀
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            style={mystyle}
          >
            🌐 Browser Features
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={mystyle2}>
            Our web-based tool is fully responsive and compatible with modern
            browsers, ensuring a seamless experience across devices. 📱💻 With
            real-time text transformation, accessibility features, and a clean
            UI, TextUtils simplifies your text editing needs without requiring
            any installations. 🛠️ It also supports both light ☀️ and dark 🌙
            modes for comfortable usage in different lighting conditions.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={mystyle}
          >
            ℹ️ About Us
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={mystyle2}>
            At TextUtils, we aim to provide an intuitive and efficient platform
            for users who frequently work with text. 🏆 Whether you are a
            student 🎓, writer ✍️, developer 💻, or casual user, our tool is
            designed to save time and effort by offering quick text
            modifications. ⏳ We continuously strive to improve and add more
            features based on user feedback. 💡
          </div>
        </div>
      </div>
    </div>
  );
}
