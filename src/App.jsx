import "./index.css";

const PAGES = ["Page 1", "Page 2", "Page 3", "Page 4"];

function App() {
  return (
    <div className="app-root">
      <div className="pages-card">
        {/* Top row: All pages */}
        <div className="pages-card__row pages-card__row--all">
          <span className="pages-card__label">All pages</span>
          <span className="checkbox checkbox--empty" />
        </div>

        <div className="pages-card__divider" />

        {/* Page list */}
        <ul className="pages-list">
          {PAGES.map((label, index) => (
            <li key={label} className="pages-card__row">
              <span className="pages-card__label">{label}</span>
              <span
                className={
                  "checkbox " +
                  (index === 2 ? "checkbox--checked" : "checkbox--empty")
                }
              />
            </li>
          ))}
        </ul>

        <div className="pages-card__divider" />

        {/* Done button */}
        <button className="pages-card__done-btn">Done</button>
      </div>
    </div>
  );
}

export default App;
