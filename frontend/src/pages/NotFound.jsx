import "../styles/notFound.scss";

export const NotFound = () => {
  return (
    <main className="notfound">
      <div className="notfound__card">
        <div className="notfound__icon-wrapper">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="notfound__icon"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <h1 className="notfound__code">404</h1>
        <p className="notfound__title">Page Not Found</p>
        <p className="notfound__desc">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <div className="notfound__actions">
          <a href="/" className="notfound__btn notfound__btn--primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Go back to Home
          </a>
        </div>
      </div>
    </main>
  );
};