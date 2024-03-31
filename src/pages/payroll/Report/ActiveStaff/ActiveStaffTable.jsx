/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from 'prop-types'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
} from "@nextui-org/react";
import { PlusIcon } from "../../../tables/components/PlusIcon";
import { VerticalDotsIcon } from "../../../tables/components/VerticalDotsIcon";
import { SearchIcon } from "../../../tables/components/SearchIcon";
import { ChevronDownIcon } from "../../../tables/components/ChevronDownIcon";
import { statusOptions } from "../../Setting/Bank/data";
import { capitalize } from "../../../tables/components/utils";
import { PencilIcon } from "lucide-react";
import { HiOutlinePencil } from "react-icons/hi2";
import { useClassNames } from "../../../../utils/tableClassNames";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  {name: "S/N", uid: "_id", sortable: true},
  {name: "Emp. Type", uid: "empType", sortable: true},
  {name: "Emp. No", uid: "empNo", sortable: true},
  {name: "Title", uid: "title", sortable: true},
  {name: "Staff Name", uid: "staffName", sortable: true},
  {name: "Address 1", uid: "address1", sortable: true},
  {name: "Gender", uid: "gender", sortable: true},
  {name: "DOB", uid: "dob", sortable: true},
  {name: "Marital Status", uid: "maritalStatus", sortable: true},
  {name: "state", uid: "state", sortable: true},
  {name: "lga", uid: "lga", sortable: true},
  {name: "date Employed", uid: "dateEmployed", sortable: true},
  {name: "division Name", uid: "divisionName", sortable: true},
  {name: "grade", uid: "grade", sortable: true},
  {name: "step", uid: "step", sortable: true},
  {name: "bank", uid: "bank", sortable: true},
  {name: "account Number", uid: "accountNo", sortable: true},
  {name: "rank Name", uid: "rankName", sortable: true},
  {name: "nhf No", uid: "nhfNo", sortable: true},
  {name: "pfa Code", uid: "pfaCode", sortable: true},
  {name: "pfa Account Number", uid: "pfaAccNumber", sortable: true},
  {name: "tin No", uid: "tinNo", sortable: true},
  {name: "Action", uid: "actions"},

];

const INITIAL_VISIBLE_COLUMNS = [
  "_id",
    "empType",
      "empNo",
      "title",
      "staffName",
      "address1",
      "gender",
      "dob",
      "maritalStatus",
      "state",
      "lga",
      "dateEmployed",
      "divisionName",
      "grade",
      "step",
      "bank",
      "accountNo",
      "rankName",
      "nhfNo",
      "pfaCode",
      "pfaAccNumber",
      "tinNo",
      "actions"
];

const ActiveStaffTable = ({handleOpenDrawer, rows}) => {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "name",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredrows = [...rows];

    if (hasSearchFilter) {
      filteredrows = filteredrows.filter((staff) =>
        staff.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredrows = filteredrows.filter((staff) =>
        Array.from(statusFilter).includes(staff.status)
      );
    }

    return filteredrows;
  }, [rows, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((staff, columnKey) => {
    const cellValue = staff[columnKey];
    switch (columnKey) {
      case "_id":
        return (
          <p className="text-bold text-small whitespace-wrap">{cellValue}</p>
        );
      case "empType":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small">{cellValue}</p>
          </div>
        );
      case "empNo":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "title":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "staffName":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "address1":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "gender":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "dob":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "maritalStatus":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "state":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "lga":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "dateEmployed":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "divisionName":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "grade":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "step":
        return <p className="text-bold text-small">{cellValue}</p>;
      case "bank":
        return <p className="text-bold text-small">{cellValue}</p>;
      
      case "actions":
        return (
          <div className="relative flex justify-en items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="md" variant="">
                  <VerticalDotsIcon className="text-slate-600" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>
                  <Button className=" bg-lime-500 w-full text-white">
                    <HiOutlinePencil /> Preview
                  </Button>
                </DropdownItem>
                
                <DropdownItem>
                  <Button
                    className=" bg-red-500 w-full text-white"
                    startContent={<PencilIcon size={"2.5vh"} />}
                    onClick={()=>handleOpenDrawer(staff)}
                  > Edit Staff
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between flex-wrap items-center">
          <Input
            isClearable
            className="w-full py-3 sm:max-w-[44%]"
            placeholder="Search here..."
            startContent={<SearchIcon />}
            value={filterValue}
            variant="bordered"
            onClear={() => onClear()}
            size="sm"
            onValueChange={onSearchChange}
          />
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
              value={rowsPerPage}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    rows.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {
          selectedKeys.size===0?
          (<span className="text-default-400 text-small">
          Total {rows.length} Staff
        </span>) : (
          selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`
          ) 
            }
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          classNames={{
            wrapper:
              "gap-0 overflow-visible h-full rounded-xl bg-transparent  shadow",
            item: "w-10 h-10 text-small rounded-none bg-transparent",
            active: "bg-red-500",
            cursor:
              "bg-btnColor shadow from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
          }}
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  //className styles
  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[650px] lg:max-w-[55rem] max-w-[60rem] 2xl:max-w-[80rem]"],
      th: [
        // "bg-transparent",
        "text-default-500",
        "font-medium",
        "border-b",
        "font-Roboto",
      ]
    }),
    []
  );

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isStriped
      showSelectionCheckboxes={true}
      // isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={useClassNames}
      // selectedKeys={selectedKeys}
      // selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
            className="uppercase"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No Staff found"} items={sortedItems}>
        {(item, index) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              <TableCell className="">{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default ActiveStaffTable;

ActiveStaffTable.propTypes = {
  handleOpenDrawer: PropTypes.func,
  rows: PropTypes.array
}