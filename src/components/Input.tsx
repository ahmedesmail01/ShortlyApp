import React from "react";
import { useState } from "react";
import swal from "sweetalert";
const Input = () => {
  const [input, SetInput] = useState<string>("");
  const [shorted, setShorted] = useState({
    ok: "",
    result: { original_link: "", short_link: "" },
  });
  const [copy, setCopy] = useState("copy!");
  //handle submit and //fetshing the api and settimg the short link

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (input) {
      const shorten = async () => {
        const res = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${input}`
        );
        const data = await res.json();
        console.log(data);
        if (data.ok === false) {
          swal("Oops!", "sorry invalid url", "error");
        } else {
          setShorted(data);
          SetInput("");
        }
      };
      shorten();
    }
  };
  const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(shorted.result.short_link);
    event.currentTarget.style.backgroundColor = "hsl(257, 27%, 26%)";
    setCopy("copied");
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="container input">
          <input
            type="text"
            placeholder="shorten a link here...."
            onChange={(e) => SetInput(e.target.value)}
            value={input}
          />
          <button className="btn" type="submit" onClick={handleSubmit}>
            Shorten it!
          </button>
        </div>
        {shorted.result.original_link.length > 0 && (
          <div className="shorted-div container">
            <span className="original-link">
              {shorted.result.original_link}
            </span>
            <span className="short-link">{shorted.result.short_link}</span>
            <button className="btn btn-primary" onClick={handleCopy}>
              {copy}
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default Input;
