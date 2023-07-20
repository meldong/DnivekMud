import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";

export const widgetInputs = [
  {
    id: "users",
    title: "USERS",
    amount: 200,
    isMoney: false,
    link: "See all users",
    diff: 20,
    icon: (
      <PersonOutlineIcon
        className="icon"
        style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
      />
    ),
  },
  {
    id: "tasks",
    title: "TASKS",
    amount: 100,
    isMoney: false,
    link: "View all tasks",
    diff: 50,
    icon: (
      <FormatListBulletedOutlinedIcon
        className="icon"
        style={{
          color: "goldenrod",
          backgroundColor: "rgba(218,165,32,0.2)",
        }}
      />
    ),
  },
  {
    id: "modules",
    title: "MODULES",
    amount: 60,
    isMoney: false,
    link: "View all modules",
    diff: -25,
    icon: (
      <AccountTreeOutlinedIcon
        className="icon"
        style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
      />
    ),
  },
  {
    id: "projects",
    title: "PROJECTS",
    amount: 20,
    isMoney: false,
    link: "See details",
    diff: 30,
    icon: (
      <GradeOutlinedIcon
        className="icon"
        style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
      />
    ),
  },
];
