import { useState } from "react";
import "./index.css";

const PAGES = ["Page 1", "Page 2", "Page 3", "Page 4"];

// Small reusable checkbox component with SVG icon
function Checkbox({ checked, indeterminate }) {
  const stateClass = checked
    ? "checkbox--checked"
    : indeterminate
    ? "checkbox--indeterminate"
    : "";

  return (
    <span className={`checkbox ${stateClass}`}>
      {checked && (
        <svg viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 12.5L10 17L19 7"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}

function App() {
  
  const [selectedPages, setSelectedPages] = useState(() =>
    Array(PAGES.length).fill(false)
  );

  const allChecked = selectedPages.every(Boolean);
  const someChecked = !allChecked && selectedPages.some(Boolean);

  const togglePage = (index) => {
    setSelectedPages((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const toggleAll = () => {
    setSelectedPages((prev) => {
      const shouldCheckAll = !prev.every(Boolean);
      return prev.map(() => shouldCheckAll);
    });
  };

  const handleDone = () => {
    const chosen = PAGES.filter((_, i) => selectedPages[i]);
    if (chosen.length === 0) {
      alert("No pages selected");
    } else {
      alert(`Selected: ${chosen.join(", ")}`);
    }
  };

  return (
    <div className="app-root">
      <div className="pages-card">
        {/* Top row: All pages */}
        <button
          type="button"
          className="pages-card__row pages-card__row--all pages-card__row--clickable"
          onClick={toggleAll}
        >
          <span className="pages-card__label">All pages</span>
          <Checkbox checked={allChecked} indeterminate={someChecked} />
        </button>

        <div className="pages-card__divider" />

        {/* Page list */}
        <ul className="pages-list">
          {PAGES.map((label, index) => (
            <li key={label}>
              <button
                type="button"
                className="pages-card__row pages-card__row--clickable"
                onClick={() => togglePage(index)}
              >
                <span className="pages-card__label">{label}</span>
                <Checkbox
                  checked={selectedPages[index]}
                  indeterminate={false}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="pages-card__divider" />

        {/* Done button */}
        <button
          type="button"
          className="pages-card__done-btn"
          onClick={handleDone}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default App;
