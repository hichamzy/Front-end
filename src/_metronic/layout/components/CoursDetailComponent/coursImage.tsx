const CoursImage = ({ photo }: { photo: string }) => {
	return (
		<>
			<div className="col-xl-3">
				<div className="card mb-8 h-200px card-xl-stretch">
					<div className="card-body align-items-center">
						<div className="text-center d-flex justify-content-center align-items-center">
							<img src={photo} width="240px" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursImage;
