import { useEffect, useState } from "react";


const buttonStyles = {
  margin: "10px",
  width: "100px",
  height: "50px",
  borderRadius: "10px",
  backgroundColor: "antiquewhite",
};

/**
 * <Pagination/> provides a visual
 * reference and control over pagination
 * settings for collection-based components.
 *
 * Provides interface to recollect current
 * limit and offset calculated by the page
 * and the limit defined.
 *
 * @param { Number } limit
 * @param { Boolean } isNextDisabled
 * @param { function } onGetPagination
  * */
const Pagination = ({ pageLimit, isNextDisabled, collectPaginationCallback }) => {
  const [limit, setLimit] = useState(100);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);

  // Dynamically set pagination limit
  useEffect(() => setLimit(pageLimit && pageLimit || limit), [pageLimit]);

  // Calculate pagination offset
  useEffect(() => {
    const calcOffset = (limit * page) + page;
    setOffset(calcOffset);
  }, [page]);

  // debug hook
  useEffect(() => collectPaginationCallback
    && collectPaginationCallback({ limit, offset })
    || console.log({ limit, offset }) ,[offset]);

  /**
   * Event Handlers
   *
   * @onNextPage
   * @onPreviousPage
   * */
  const onNextPage = () => setPage(page + 1);
  const onPreviousPage = () => setPage(page - 1);

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "80px",
      width: "350px",
      backgroundColor: "cornsilk",
      borderRadius: "10px",
      alignItems: "center"}}>

      {/* Previous Page reference */}
      <button
        disabled={!page}
        style={buttonStyles}
        onClick={onPreviousPage}>{`Page: ${page}`}</button>

      {/* Current Page reference */}
      <p style={{
        color: "black",
        fontSize: "small" }}>
        {`Current page: ${page + 1}`}
      </p>

      {/* Next Page reference */}
      <button
        disabled={isNextDisabled}
        style={buttonStyles}
        onClick={onNextPage}>{`Page: ${page + 2}`}</button>
    </div>
  );
};


export default Pagination;
