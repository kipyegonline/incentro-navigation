import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import bd from "../styles/backdrop.module.css";

type Props = { open: boolean; lang: number };
type Op = { id: number; title: string };
const oppo = [
  { id: 0, title: "Vacancies" },
  { id: 0, title: "Technology" },
  { id: 0, title: "Culture" },
  { id: 0, title: " YPA:Traineeship" },
  { id: 1, title: "Nafasi za kazi" },
  { id: 1, title: "Teknolojia" },
  { id: 1, title: "Utamaduni" },
  { id: 1, title: "Mafunzo ya YPA" },
  { id: 2, title: "Vacatures" },
  { id: 2, title: "Technologie" },
  { id: 2, title: "Cultuur" },
  { id: 2, title: "YPA:Traineeship" },
];

function BackDrop({ open, lang }: Props): JSX.Element {
  let [opportunities, setOp] = React.useState<Op[]>([]);
  const [lid, setlid] = React.useState(+lang);
  React.useEffect(() => {
    if (open) {
      setTimeout(() => setOp(oppo), 500);
    } else {
      setOp([]);
    }
  }, [open]);
  React.useEffect(() => {
    setlid(+lang);
  }, [lang]);
  return (
    <Grid
      className={
        open
          ? `${bd.backdrop} ${bd.backdropIn}`
          : `${bd.backdrop} ${bd.backdropOut}`
      }
    >
      <div className={bd.backdropContent}>
        <List>
          {opportunities
            .filter((opp) => opp.id === lid)
            .map((item: Op, i: number) => (
              <OppsList item={item.title} key={i} i={i} />
            ))}
        </List>
      </div>
    </Grid>
  );
}
export default BackDrop;

type ListProps = {
  item: string;
  i: number;
};

const OppsList = ({ item, i }: ListProps): JSX.Element => {
  let h = globalThis.window && document.documentElement.clientWidth;
  return (
    <ListItem alignItems="center" className={bd.backItem}>
      <Typography
        variant={h <= 600 ? "h5" : "h3"}
        className={bd.backdropList}
        align="center"
      >
        0{i + 1}. {item}
      </Typography>
    </ListItem>
  );
};
