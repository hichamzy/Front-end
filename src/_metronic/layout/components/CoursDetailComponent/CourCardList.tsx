import React from 'react';

const CourCardList = () => {
    const coursCards = [
        {
            icon: "ki-book-open",
            statusText: "Terminé",
            statusColor: "success", // Green color for "Terminé"
            cardTitle: "Rappel"
        },
        {
            icon: "ki-briefcase",
            statusText: "Terminé",
            statusColor: "success", // Green color for "Terminé"
            cardTitle: "Bilan"
        },
        {
            icon: "ki-medal-star",
            statusText: "En cours",
            statusColor: "primary", // Primary color for "En cours"
            cardTitle: "Fiches des activités"
        },
        {
            icon: "ki-screen",
            statusText: "En attente",
            statusColor: "#ffffff", // White color for "En attente"
            cardTitle: "Média: Organisation de l'appareil digestif chez l'Homme"
        },
        {
            icon: "ki-screen",
            statusText: "En attente",
            statusColor: "#ffffff", // White color for "En attente"
            cardTitle: "Média: Dissection du lapin"
        },
        {
            icon: "ki-crown-2",
            statusText: "En attente",
            statusColor: "#ffffff", // White color for "En attente"
            cardTitle: "Activités d'apprentissage - Partie 1"
        },
        {
            icon: "ki-crown-2",
            statusText: "En attente",
            statusColor: "#ffffff", // White color for "En attente"
            cardTitle: "Activités d'apprentissage - Partie 2"
        },
        {
            icon: "ki-information",
            statusText: "En attente",
            statusColor: "#ffffff", // White color for "En attente"
            cardTitle: "Pour aller plus loin"
        },
        {
            icon: "ki-questionnaire-tablet",
            statusText: "En attente",
            statusColor: "#ffffff", // White color for "En attente"
            cardTitle: "Testez vos acquis"
        },
        {
            icon: "ki-verify",
            statusText: "En attente",
            statusColor: "#ffffff", // White color for "En attente"
            cardTitle: "Test final"
        }
    ];
    

    return (
        <div className="row gx-5 gx-xl-8 mb-5 mb-xl-8 justify-content-center">
            {coursCards.map((card, index) => (
                <div key={index} className="col-xl-3 mb-8 position-relative">
                 
                    <a href="#" className="card hover-elevate-up card-contents shadow-sm card-xxl-stretch parent-hover"
                       data-bs-toggle="modal" data-bs-target={`#kt_modal_${card.cardTitle.replace(/\s+/g, '')}`}>
                        <div className="card-header" style={{backgroundColor:"#f3f6ff" }}>
                            <h3 className="card-title">
                            <div className="card-toolbar">
								<h3 className="card-title">
									<i className={`ki-duotone text-primary ${card.icon} fs-3x`}><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
									</h3>
													
								</div>
                            </h3>
                            
                            <div className="card-toolbar">
                          
                                <span className={`badge badge-light-${card.statusColor} fw-bold me-10 px-4 py-3`}>{card.statusText}</span>
                                <input className="form-check-input btn-telecharger" type="checkbox" value="" id={`flexCheckDefault${index + 1}`} />
                            </div>
                        </div>
                        <div className="card-body text-center text-white d-flex align-items-center">
                            <h4 className="w-100">{card.cardTitle}</h4>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default CourCardList;
