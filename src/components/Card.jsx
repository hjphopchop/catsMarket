import React, { useState } from "react";
import cat from "assets/img/Cat.png";
import classNames from "classnames";

const Card = ({
  pretitle,
  title,
  taste,
  points,
  weight,
  activeDescription,
  isStock,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isDisableCard, setIsDisableCard] = useState(false);
  const clickCard = () => {
    if (isStock) {
      setIsActive(!isActive);
      setIsDisableCard(true);
    }
  };

  const buyBtn = () => {
    setIsActive(!isActive);
    setIsDisableCard(false);
  };
  const leave = () => isActive && setIsDisableCard(false);
  return (
    <>
      <div
        onClick={clickCard}
        onKeyDown={clickCard}
        disabled={isDisableCard}
        onMouseLeave={leave}
        className={classNames("card__item", {
          "card__item-active": isActive,
          "card__item-disabled": !isStock,
        })}
      >
        <div className="card__content">
          <p className="card__header">{pretitle}</p>
          <p className="card__header-hover">Котэ не одобряет?</p>
          <h2 className="card__title">{title}</h2>
          <p className="card__taste">{taste}</p>
          {points &&
            points.map((point) => (
              <p key={point} className="card__points">
                {point}
              </p>
            ))}
          <div
            className={classNames("card__weight", {
              "card__weight-active": isActive,
              "card__weight-disabled": !isStock,
            })}
          >
            <span>{weight}</span>
            <span className="card__weight-kg">кг</span>
          </div>
          <div className="card__img">
            <img src={cat} alt="cat" />
          </div>
        </div>
      </div>
      {!isActive && isStock && (
        <div className="card__description">
          Чего сидишь? Порадуй, котэ, <span onClick={buyBtn}>купи.</span>
        </div>
      )}
      {isActive && <div className="card__description">{activeDescription}</div>}

      {!isStock && (
        <div className="card__description-none">
          Печалька, {taste} закончился.
        </div>
      )}
    </>
  );
};

export default Card;
