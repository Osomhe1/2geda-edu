

// Attendance history
export const tableData = [
  {
    _id: 1,
    date: "2024-02-04T23:00:00.000Z",
    punch_in: "10 AM",
    punch_out: "7 PM",
    production: "9hr",
    break: "1 hr",
    overtime: 1,
  },
  {
    _id: 2,
    date: "2024-02-04T23:00:00.000Z",
    punch_in: "10 AM",
    punch_out: "7 PM",
    production: "9hr",
    break: "1 hr",
    overtime: 1,
  },
  {
    _id: 3,
    date: "2024-02-04T23:00:00.000Z",
    punch_in: "10 AM",
    punch_out: "7 PM",
    production: "9hr",
    break: "1 hr",
    overtime: 1,
  },
  {
    _id: 4,
    date: "2024-02-04T23:00:00.000Z",
    punch_in: "10 AM",
    punch_out: "7 PM",
    production: "9hr",
    break: "1 hr",
    overtime: 1,
  },
  {
    _id: 5,
    date: "2024-02-04T23:00:00.000Z",
    punch_in: "10 AM",
    punch_out: "7 PM",
    production: "9hr",
    break: "1 hr",
    overtime: 1,
  },
 
];

export const columns = [
  { name: "ID", uid: "_id", sortable: true },
  { name: "S/N", uid: "s_n", sortable: true },
  { name: "DATE", uid: "date", sortable: true },
  { name: "PUNCH IN", uid: "punch_in", sortable: true },
  { name: "PUNCH OUT", uid: "punch_out", sortable: true },
  { name: "PRODUCTION", uid: "production", sortable: true },
  { name: "BREAK", uid: "Break", sortable: true },
  { name: "OVERTIME", uid: "overtime" },
];


export const tableHeader = [
  "s_n",
  "date",
  "punch_in",
  "punch_out",
  "production",
  "break",
  "overtime",
];
