import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import PropertyCard from "./PropertyCard";

const Items = ({ currentItems, layout }) => {
  return currentItems ? (
    currentItems.map((property) => (
      <div
        className={`col-xl-${layout === "grid" ? 4 : 12} col-md-${
          layout === "grid" ? 6 : 12
        }`}
        key={property.id}
      >
        <PropertyCard
          property={property}
          featureCount={2}
          image={`https://admin.dpmhomes.com/property-images/${property.images[0]}`}
          className={layout === "grid" ? "grid-view" : "list-view"}
        />
      </div>
    ))
  ) : (
    <div>No Properties Found</div>
  );
};

function PaginatedItems({ itemsPerPage, items, layout }) {
    console.log(itemsPerPage, items, layout);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} layout={layout} />
      <ReactPaginate
        breakLabel="..."
        containerClassName="pagination"
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
