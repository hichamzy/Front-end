import React from 'react';

interface CoursCardProps {
   id: number;
  icon: string;
  statusText: string;
  statusColor: string;
  cardTitle: string;
}

const CoursCard: React.FC<CoursCardProps> = ({ id,icon, statusText, statusColor, cardTitle }) => {
  return (
	<>
	
    <div  className=" col-lg-4 mb-8 position-relative">
      <a href="#" className="card hover-elevate-up card-contents shadow-sm card-xxl-stretch parent-hover">
        <div  className="card-header">
          <h3 className="card-title">
            <i className={`ki-duotone text-primary ${icon} fs-3x`}></i>
          </h3>
          <div className="card-toolbar">
            <span className={`badge badge-light-${statusColor} fw-bold me-10 px-4 py-3`}>{statusText}</span>
			<label htmlFor={`input-${id}`}>
            <input
						className="form-check-input"
						type="checkbox"
						id={`input-${id}`}
						onClick={(e) => e.stopPropagation()}
					/>
			</label>
          </div>
        </div>
        <div className="card-body text-center text-white d-flex align-items-center">
          <h4 className="w-100">{cardTitle}</h4>
        </div>
      </a>
    </div></>
  );
};

export default CoursCard;
