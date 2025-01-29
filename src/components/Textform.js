import React, { useState } from "react";
import "./Textform.css";

const Textform = (Props) => {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    Props.showAlert("Converted to uppercase", "success");
  };
  const handleSentClick = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
    Props.showAlert("Converted to sentence case", "success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    Props.showAlert("Converted to lowercase", "success");
  };
  const handleAlterClick = () => {
    let newText = text
      .split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join("");
    setText(newText);
    Props.showAlert("Converted to alternating case", "success");
  };
  const handleInClick = () => {
    setText(text.charAt(0).toLowerCase() + text.slice(1).toUpperCase());
    Props.showAlert("Converted to inverted case", "success");
  };
  const handleRemoveExtraSoacesClick = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    Props.showAlert("Removed extra spaces from the text", "success");
  };
  const handleCapEachWordClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    Props.showAlert("Capitallized Each Word", "success");
  };

  const [state, setState] = useState(false);
  const [PrevText, setPrevText] = useState("");
  const handleSortAlphaClick = () => {
    if (!state) {
      setPrevText(text);
      let newText = text
        .split(/\s+/)
        .filter((word) => word.trim() !== "")
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .join(" ");
      setText(newText);
      setState(true);
      Props.showAlert("Text sorted alphabetically", "success");
    } else {
      setText(PrevText);
      setState(false);
      Props.showAlert("Text unsorted", "success");
    }
  };
  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    Props.showAlert("Text reversed", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        Props.showAlert("Text copied to clipboard", "success");
      })
      .catch((err) => {
        Props.showAlert("Failed to copy text", "danger");
      });
  };
  const handleFindReplaceClick = () => {
    const findWord = prompt("Enter the word to find: ");
    const replaceWord = prompt("Enter the word to replace it with:");

    if (findWord && replaceWord) {
      const updateText = text.split(findWord).join(replaceWord);
      setText(updateText);
      Props.showAlert(
        `Replaced "${findWord}" with "${replaceWord}"`,
        "success"
      );
    } else {
      Props.showAlert("Please provide both find and replace words", "danger");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    setText("");
    Props.showAlert("Text has been cleared", "success");
  };

  // below functions are for analyse section
  const countVowel = (text) => {
    const vowels = "aeiouAEIOU";
    let vowelCounter = 0;
    for (let i = 0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
        vowelCounter++;
      }
    }
    return vowelCounter;
  };
  const countConsonat = (text) => {
    const consonats = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let consonantCounter = 0;
    for (let i = 0; i < text.length; i++) {
      if (consonats.includes(text[i])) {
        consonantCounter++;
      }
    }
    return consonantCounter;
  };
  const countSentence = (text) => {
    const sentenceEndings = /[.!?]/;
    return text.split(sentenceEndings).filter(Boolean).length;
  };
  const countPara = (text) => {
    const paras = text.split(/\n+/);
    return paras.filter(Boolean).length;
  };

  return (
    <div className="form-group container">
      <div>
        <h1 style={{ textAlign: "center" }}>{Props.heading}</h1>
        {/* <label htmlFor="exampleFormControlTextarea1">Text Here</label> */}
        <textarea
          className="form-control"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: Props.mode === "dark" ? "#1e304a" : "white",
            color: Props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <div className="btns">
          <button
            disabled={text.length === 0}
            className="btn"
            onClick={handleSentClick}
            id="my-box"
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            Convert to Sectence case
          </button>
          <button
            disabled={text.length === 0}
            className="btn"
            onClick={handleLoClick}
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            Convert to lower case
          </button>
          <button
            className="btn"
            disabled={text.length === 0}
            onClick={handleUpClick}
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            Convert to UPPER case
          </button>
          <button
            className="btn"
            disabled={text.length === 0}
            onClick={handleAlterClick}
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            Convert to AlTeRnAtInG case
          </button>
          <button
            className="btn"
            disabled={text.length === 0}
            onClick={handleInClick}
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            Convert to iNVERSE case
          </button>
          <button
            className="btn"
            disabled={text.length === 0}
            onClick={handleRemoveExtraSoacesClick}
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn"
            disabled={text.length === 0}
            onClick={handleCapEachWordClick}
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            Capitalize Each Word
          </button>
          <button
            className="btn"
            disabled={text.length === 0}
            onClick={handleSortAlphaClick}
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            {`${state === false ? "Sort Word Alphabetically" : "Undo Sorting"}`}
          </button>
          <button
            className="btn"
            disabled={text.length === 0}
            onClick={handleReverseClick}
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            Reverse Text
          </button>
          <button
            className="btn"
            disabled={text.length === 0}
            onClick={handleCopyClick}
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            Copy to Clipboard
          </button>
          <button
            className="btn"
            disabled={text.length === 0}
            onClick={handleFindReplaceClick}
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            Find & Replace
          </button>
          <button
            className="btn"
            disabled={text.length === 0}
            onClick={handleClearClick}
            style={{
              fontSize: "12px",
              backgroundColor: Props.mode === "light" ? "#c9c9c9" : "#13324a",
              color: Props.mode === "light" ? "black" : "white",
            }}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className="container">
        <hr />
        <h1 className="mt-4">Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} charcters
        </p>
      </div>
      <div className="container">
        <h1>Analysis of your Data</h1>
        <ul className="analyse-list">
          <li>
            <strong>{countVowel(text)}</strong> vowels and{" "}
            <strong>{countConsonat(text)}</strong> consonats are used.
          </li>
          <li>
            <strong>{countSentence(text)}</strong> sentences and{" "}
            <strong>{countPara(text)}</strong> paragraphs are used
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Textform;
