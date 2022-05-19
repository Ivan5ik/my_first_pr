import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "antd";

import { Select } from "../../components/Select";
import { arrayCard, arraySelect } from "../../utils";

import useStyles from "./style";
import { Button } from "../../components/Button";

const Item = () => {
  const classes = useStyles();

  const history = useLocation();

  const [selectValue, setSelectValue] = useState("1");

  const [, , itemId] = history.pathname.split("/");

  const { description, name, price, purchaseType, imgUrl } = arrayCard.find(
    (item) => item.id === itemId
  )!;

  return (
    <div>
      <div className={classes.root}>
        <h1 className={classes.name}>- {name} -</h1>
        <div className={classes.underName}>
          <span className={classes.symbol}> {"<"}</span>
          <a href="mailto:tparandii@gmail.com" className={classes.toCataloge}>
            До каталогу{" "}
          </a>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.img}>
            <Carousel>
              {imgUrl.map((item, index) => (
                <div className={classes.contentStyle}>
                  <img src={item} alt="carousel" className={classes.photo} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className={classes.content}>
            <p className={classes.description}>{description}</p>
            <div>
              <div className={classes.pricePlusSelect}>
                <div className={classes.cover}>
                  <p className={classes.price}>{price}</p>
                  <span className={classes.price}>грн /</span>
                  <p className={classes.purchaseType}>{purchaseType}</p>
                </div>
                <p>
                  <Select
                    selectValue={selectValue}
                    setValue={setSelectValue}
                    optionArray={arraySelect}
                  />
                </p>
              </div>
              <Button />
              {/* <div className={classes.shareBox}>
                <p className={classes.shareFriends}>Розповісти друзям</p>
                <div style={{ display: "flex" }}>
                  <img src="../assets/fb.png" alt="fb" className={classes.fb} />
                  <img
                    src="../assets/inst.png"
                    alt="fb"
                    className={classes.fb}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Item };
