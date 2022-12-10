import { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <div className="lost-figure-title">
        <p>{title}</p>
      </div>
      <div className="lost-figure-wrapper">
        {figures.map((figure) => (
          <div key={figure.id} className="figure-name" >
            {figure.name}
            {figure.logo && <img src={figure.logo} width={20} height={20} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostFigures;
