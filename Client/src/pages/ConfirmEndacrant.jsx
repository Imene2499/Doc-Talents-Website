import React from "react";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import SideBar from "../components/Menu/SideBar";
import EncadrantCard from "../components/EncadrantCard/EncadrantCard";
import { useHistory } from "react-router-dom";

import { CardsData } from "../Data/Data";

function ConfirmEndacrant({ username1, username2 }) {
  const history = useHistory();

  const handlePrevious = (event) => {
    event.preventDefault();
    history.push("/Inscription/Step3");
  };

  const PopUp = (event) => {
    //oumbe3d
  };
  return (
    <div className={`bg-white-bluish w-full flex `}>
      <SideBar />
      <div className={`grow flex flex-col justify-between`}>
        <div className="flex justify-end">
          <ProfileIcon />
        </div>

        <div className="flex flex-col justify-center items-center m-2">
          <h1 className="text-3xl text-purple">Confirmation de l'identité</h1>
          <h2 className="text-2xl text-light-purple">Des Encadrants</h2>
        </div>

        <div className="flex items-center justify-center">
          <EncadrantCard
            type="Encadreur"
            username={username1}
            color={CardsData[0].color}
          />
          <EncadrantCard
            type="Co Encadreur"
            username={username2}
            color={CardsData[1].color}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="submit-form suivant m-5 px-8 py-4 w-fit bg-dark-purple rounded-md text-white"
            type="button"
            onClick={handlePrevious}
          >
            Précédant
          </button>

          <button
            className="submit-form suivant m-5 px-8 py-4 w-fit bg-dark-purple rounded-md text-white"
            type="button"
            onClick={PopUp}
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmEndacrant;
