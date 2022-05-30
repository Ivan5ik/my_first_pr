import React from "react";
import { useTranslation, Trans } from "react-i18next";
import useStyles from "./style";

// const lngs: any = {
//   ua: { nativeName: "Українська" },
//   en: { nativeName: "English" },
// };

const Phone = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  console.log(i18n);

  return (
    <div className={classes.root}>
      {/* <div>
        {Object.keys(lngs).map((item: any) => (
          <button
            key={item}
            style={{
              fontWeight: i18n.resolvedLanguage === item ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(item)}
          >
            {lngs[item].nativeName}
          </button>
        ))}
      </div> */}
      {/* <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p> */}
      {/* <p>{t("description.part1")}</p>
      <p>{t("description.part2")}</p> */}
    </div>
  );
};
export { Phone };
