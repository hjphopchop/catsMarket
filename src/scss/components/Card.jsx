import React, { useState } from "react";
import cat from "assets/img/Cat.png";
import classNames from "classnames";

const Card = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDisableCard, setIsDisableCard] = useState(false);
  const clickCard = () => {
    setIsActive(!isActive);
    setIsDisableCard(true);
  };
  const leave = () => isActive && setIsDisableCard(false);

  return (
    <div>
      <div
        onClick={clickCard}
        disabled={isDisableCard}
        onMouseLeave={leave}
        className={classNames("card__item", {
          "card__item-active :hover": isActive,
        })}
      >
        <p className="card__header">Сказачное заморское яство</p>
        <p className="card__header-hover">Котэ не одобряет?</p>
        <h2>Нямушка с фуа-гра</h2>
        <p>10 порций мышь в подарок</p>
        <div
          className={classNames("card__weight", {
            "card__weight-active": isActive,
          })}
        >
          <span>0,5</span>
          <span>кг</span>
        </div>
        <div className="card__img">
          <img src={cat} alt="cat" />
        </div>
      </div>
      {isActive ? (
        <div>Печень утки разварная с артишоками.</div>
      ) : (
        <div> Чего сидишь? Порадуй, котэ, купи</div>
      )}
    </div>
  );
};

export default Card;
