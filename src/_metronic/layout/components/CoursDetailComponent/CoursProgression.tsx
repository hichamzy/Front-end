import React from 'react'
import { useEffect, useRef } from 'react'

const CoursProgression = () => {
	interface RadialProgressBarProps {
		percent: number;
		duration: number;
		backgroundColor: string;
		progressColor: string;
	  }
	  
	  const RadialProgressBar: React.FC<RadialProgressBarProps> = ({ percent, duration, backgroundColor, progressColor }) => {
		const progressBarRef = useRef<HTMLDivElement>(null);
	  
		useEffect(() => {
		  const progressBar = progressBarRef.current;
		  if (progressBar) {
			const left = progressBar.querySelector<HTMLDivElement>('.left');
			const right = progressBar.querySelector<HTMLDivElement>('.right');
			const rotate = progressBar.querySelector<HTMLDivElement>('.rotate');
	  
			if (rotate) {
			  const rotateDegree = percent * 3.6;
			  rotate.style.transform = `rotate(${rotateDegree}deg)`;
			}
	  
			if (percent > 50) {
			  if (right) right.style.opacity = '1';
			  if (left) left.style.opacity = '0';
			} else {
			  if (right) right.style.opacity = '0';
			  if (left) left.style.opacity = '1';
			}
	  
			if (rotate) rotate.style.transition = `transform ${duration}ms`;
			if (right) right.style.transition = `opacity ${duration}ms`;
			if (left) left.style.transition = `opacity ${duration}ms`;
		  }
		}, [percent, duration]);
	  
		return (
		  <div className="progress-bar position-relative" ref={progressBarRef} style={{ height: '100px', width: '100px' }}>
			<div className="background position-absolute rounded-circle" style={{ height: '100px', width: '100px', backgroundColor }}></div>
			<div className="rotate position-absolute rounded-circle" style={{ height: '100px', width: '100px', clip: 'rect(0 50px 100px 0)', backgroundColor: progressColor }}></div>
			<div className="left position-absolute rounded-circle" style={{ height: '100px', width: '100px', clip: 'rect(0 50px 100px 0)', opacity: '1', backgroundColor }}></div>
			<div className="right position-absolute rounded-circle" style={{ height: '100px', width: '100px', clip: 'rect(0 50px 100px 0)', transform: 'rotate(180deg)', opacity: '0', backgroundColor: progressColor }}></div>
			<div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100">
			  <span   className="bg-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '75px', height: '75px' }}>
				<h3 className="text-dark">{percent}%</h3>
			  </span>
			</div>
		  </div>
		);
	  };
  return (
    <>
      				<div className="col-xl-3">
										{/*begin::Tiles Widget 4*/}
										<div className="card mb-8 h-200px card-xl-stretch">
											{/*begin::Body*/}
											<div className="card-body align-items-center">
													<div className="flex-grow-1">
														<div className="mixed-widget-4-chart text-center d-flex flex-row align-items-center justify-content-center " data-kt-chart-color="primary" style={{height: "155px"}}>
															
															
															<RadialProgressBar
                 											 percent={68}
                  											duration={2000}
                  											backgroundColor="#b3cef6"
                  											progressColor="#4b86db"
                											/>
														</div>
													</div>
											</div>
											{/*end::Body*/}
										</div>
										{/*end::Tiles Widget 4*/}
									</div>
    </>
  )
}

export default CoursProgression
