import React from "react";
import { IconButton, Typography } from "@material-ui/core";
type Props = {
  open: boolean;
  lang: number;
  setOpen: (open: boolean) => void;
  setLang: (open: number) => void;
};
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import styles from "../styles/nav.module.css";

function NavBar({ setOpen, open, lang, setLang }: Props): JSX.Element {
  const [icon, showIcon] = React.useState(false);
  const handleMenu = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setOpen(!open);
  };
  const handleScroll = (): void => {
    if (window.scrollY >= 100) {
      showIcon(true);
    } else {
      showIcon(false);
    }
  };
  const handleLang = (num: number) => {
    console.log(num);
    if (num >= 2) {
      setLang(0);
    } else {
      setLang(num + 1);
    }
  };
  React.useEffect(() => {
    addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {icon ? (
        <div>
          <h5 className={styles.ohover}>o</h5>
        </div>
      ) : (
        <Typography className={styles.inc} variant="h3">
          Incentr<span className={styles.ohover}>o</span>
        </Typography>
      )}
      <div className={styles.appBar}>
        <div
          onClick={() => handleLang(lang)}
          style={{ color: "white" }}
          className={`${open || !icon ? styles.lin : styles.lout} ${
            styles.lang
          }`}
        >
          {lang < 1 ? "Kiswahili" : lang < 2 ? "Nederlands" : "English"}
        </div>
        <div>
          <IconButton size="medium" onClick={handleMenu}>
            {open ? (
              <Close fontSize="large" style={{ color: "white" }} />
            ) : (
              <Menu fontSize="large" style={{ color: "white" }} />
            )}
          </IconButton>
        </div>
      </div>
    </>
  );
}
export default NavBar;
