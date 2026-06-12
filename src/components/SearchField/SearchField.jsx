import { useState } from "react";
import css from "./SearchField.module.css";

export default function SearchField({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(value.trim());
  };

  const handleClear = () => {
    setValue("");
    onSubmit("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search"
      />

      {value && (
        <button className={css.clearBtn} type="button" onClick={handleClear}>
          ✕
        </button>
      )}

      <button className={css.searchBtn} type="submit">
        🔍
      </button>
    </form>
  );
}
