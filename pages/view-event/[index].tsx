import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import Header from "../../components/header";
import axios from "axios";
import { NextPage } from "next";
import ViewEventComponent from "../../components/page-ui-components/view-event/view-event";
import Pagination from "../../components/common/pagination";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
interface Props {
  query?: any;
}

const GalleryStyles = styled.div`
  .gallery__grid {
    display: grid;
    gap: 2rem;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
    justify-content: center;
  }
  .gallery__title {
    font-size: 2rem;
    padding: 1rem;
    text-align: center;
  }
  .item {
    min-width: 200px;
    width: 260px;
    margin: auto;
    border: 3px solid var(--gray-1);
    padding: 1rem;
  }
  .item__btns {
    display: flex;
    justify-content: space-between;
    button {
      font-size: 1.125rem;
      background-color: var(--gray-1);
      padding: 0.2rem 0.5rem;
      height: 3rem;
      border-radius: 8px;
      font-weight: bolder;
    }
  }
  .item-img {
    width: 140px;
    height: 140px;
    margin: auto;
    margin-bottom: 1rem;
    img {
      object-fit: contain;
    }
  }
  .item-title {
    font-size: 1rem;
    height: 82px;
    text-align: center;
    margin-bottom: 1rem;
  }
  .item-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .item-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    width: 60px;
  }
  .item__btnadd {
    border: 2px solid var(--red-1);
    color: var(--red-1);
  }
  .item-price {
    font-size: 2.5rem;
    color: var(--blue-1);
    text-align: center;
    margin-bottom: 1rem;
  }
  .item__btnbuy {
    border: 2px solid var(--red-1);
    background-color: var(--red-1) !important;
    color: var(--gray-1);
  }
  .item-start {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid yellow;
    svg {
      font-size: 1rem;
    }
  }
  .skeleton {
    margin-bottom: 1rem;
  }
`;

const ViewEvent: NextPage<Props> = ({ query }) => {
  const [data, setData] = useState<any | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const rowSkeletons = 1;

  const getEventDetails = () => {
    setLoading(true);
    axios
      .get(`https://portal.wisercount.com/api/event/${query.index}`)
      .then((res) => {
        setData(res.data.persons);
        setLoading(false);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getEventDetails();
  }, [query]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  if (loading) {
    let rows = [];
    for (let index = 0; index < rowSkeletons; index++) {
      rows.push(
        <section>
          <div>
            <ViewEventComponent
              data={data}
              getEventDetails={getEventDetails}
              loading={loading}
              paginatedData={currentPosts}
            />
            <Stack sx={{ mx: 3 }} direction="row" spacing={1}>
              <Skeleton
                height={180}
                width={120}
                count={3}
                className="skeleton"
              />
              <Skeleton
                height={180}
                width={120}
                count={3}
                className="skeleton"
              />
              <Skeleton
                height={180}
                width={120}
                count={3}
                className="skeleton"
              />
            </Stack>
          </div>
        </section>
      );
    }

    return (
      // <SkeletonTheme color="#F5F5F5" highlightColor="#ffffff">
      <GalleryStyles className="gallery__grid">
        <div className="gallery__grid">{rows}</div>
      </GalleryStyles>
      // </SkeletonTheme>
    );
  }

  return (
    <>
      <Box mb={10}>
        <Header text="Event Name" backIcon editIcon />
      </Box>
      <ViewEventComponent
        paginatedData={currentPosts}
        data={data}
        getEventDetails={getEventDetails}
        loading={loading}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </Box>
    </>
  );
};

export default ViewEvent;

ViewEvent.getInitialProps = async ({ query }) => {
  return { query };
};
