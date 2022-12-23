import { Box } from "@mui/material";
import React from "react";

interface Props {
  postsPerPage: any;
  totalPosts: any;
  paginate: any;
}

const Pagination: React.FC<Props> = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
        ml: 2,
      }}
    >
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Box>
  );
};

export default Pagination;
