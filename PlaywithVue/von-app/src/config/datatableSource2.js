import avatar from "../images/user-icon.png";

export const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 240,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={avatar} alt="avatar" />
          {params.row.firstName.toLowerCase() || ""}
          {params.row.lastName.toLowerCase() || ""}
        </div>
      );
    },
  },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 260,
    valueGetter: (params) =>
      `${params.row.firstName.toLowerCase() || ""}.${
        params.row.lastName.toLowerCase() || ""
      }@gamil.com`,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
];

export const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: "Noah", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Dong", firstName: "Kevin", age: 35 },
  { id: 11, lastName: "Washington", firstName: "George", age: 135 },
  { id: 12, lastName: "Franklin", firstName: "Benjamin", age: 125 },
  { id: 13, lastName: "Lincoln", firstName: "Abraham", age: 105 },
];
