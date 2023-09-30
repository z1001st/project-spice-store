import React from 'react';

const ViewMode = ({ viewMode, toggleViewMode }) => {
  return (
    <div className="view-mode">
      <a
        className={`view-grid${viewMode === 'grid' ? ' active' : ''}`}
        onClick={toggleViewMode}
      >
        <i className="fa fa-th" />
      </a>
      <a
        className={`view-list hover-effects${viewMode === 'list' ? ' active' : ''}`}
        onClick={toggleViewMode}
      >
        <i className="fa fa-list-ul" />
      </a>
    </div>
  );
};

export default ViewMode;
