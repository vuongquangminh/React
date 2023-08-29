import { useEffect, useState } from "react";

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


import Card from "../Card/Card";
import Card2 from "../Card2/Card2";
import styles from "./ContentRight.module.scss";
import clsx from "clsx";


function ContentRight({stringApi}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sumPage, setSumPage] = useState(364)

  useEffect(() => {
    const listItem = async () => {
      const respons = await fetch(
        `http://wlp.howizbiz.com/api/loaicongbo?paginate=true&page=${page}&perpage=18${stringApi}`
      );
      const data = await respons.json();
      setData(data.list);
      setSumPage(data.pagination.total)
    };
     listItem();
  }, [page]);

  useEffect(() => {
    const listItem = async () => {
      const respons = await fetch(
        `http://wlp.howizbiz.com/api/loaicongbo?paginate=true&page=${page}&perpage=18${stringApi}`
      );
      const data = await respons.json();
      setData(data.list);
      setSumPage(data.pagination.total)
    };
     listItem();
  }, [stringApi]);

  const changePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className={clsx("col p-0", styles.right)}>
        <div className={clsx("row justify-content-center")}>
          <h3 className={clsx(styles.ket_qua)}>Kết quả({sumPage})</h3>
          <div className={clsx(styles.listCard)}>
            {data.map((item, index) =>
              item.attachments.length > 0 ? (
                <Card index={index} data={item} />
              ) : (
                <Card2 index={index} data={item} />
              )
            )}
          </div>
        </div>
        <div className={clsx(styles.pagination)}>
          <Stack spacing={2}>
            <Pagination count={Math.ceil(sumPage/18)} shape="rounded" onChange={changePage}  />
          </Stack>

        </div>
      </div>
    </>
  );
}

export default ContentRight;
