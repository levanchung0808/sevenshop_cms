import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { axiosInstance } from "@/services/api";
import { authAPI } from "@/modules/api";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [products, setProducts] = useState([]);
  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID" },
    {
      field: "name",
      headerName: "name",
      width: 300,
      editable: true,
    },
    {
      field: "price",
      headerName: "price",
      width: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "description",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "images",
      headerName: "images",
      width: 160,
    },
    {
      field: "active",
      headerName: "active",
      width: 160,
    },
    {
      field: "storage_quantity",
      headerName: "storage_quantity",
      width: 160,
    },
    {
      field: "properties_type",
      headerName: "properties_type",
      width: 160,
    },
    {
      field: "categories_type",
      headerName: "categories_type",
      width: 160,
    },
    {
      field: "create_at",
      headerName: "create_at",
      width: 160,
    },
    {
      field: "create_by",
      headerName: "create_by",
      width: 160,
    },
  ];

  // const getProducts = async () => {
  //   try {
  //     const token = window.sessionStorage.getItem("token");

  //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //     console.log(token);
  //     const response = await axiosInstance.get("/product");
  //     setProducts(response.data.result);
  //     console.log(response.data.result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   try {
  //     const response = await authAPI.getProducts();
  //     console.log(response);
  //     setProducts(response.data.result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const Login = dynamic(() => import("./login"), { ssr: false });

  return (
    // <>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <main className={styles.main}>
    //     <div className={styles.description}>
    //       <p>
    //         Get started by editing&nbsp;
    //         <code className={styles.code}>src/pages/index.tsx</code>
    //       </p>
    //       <div>
    //         <a
    //           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           By{" "}
    //           <Image
    //             src="/vercel.svg"
    //             alt="Vercel Logo"
    //             className={styles.vercelLogo}
    //             width={100}
    //             height={24}
    //             priority
    //           />
    //         </a>
    //       </div>
    //     </div>

    //     <Box sx={{ height: 400, width: "100%" }}>
    //       <DataGrid
    //         rows={products}
    //         columns={columns}
    //         getRowId={(row) => row._id}
    //         pageSize={5}
    //         rowsPerPageOptions={[5]}
    //         checkboxSelection
    //         disableSelectionOnClick
    //         experimentalFeatures={{ newEditingApi: true }}
    //       />
    //     </Box>

    //     <div className={styles.grid}>
    //       <a
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2 className={inter.className}>
    //           Docs <span>-&gt;</span>
    //         </h2>
    //         <p className={inter.className}>
    //           Find in-depth information about Next.js features and&nbsp;API.
    //         </p>
    //       </a>

    //       <a
    //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2 className={inter.className}>
    //           Learn <span>-&gt;</span>
    //         </h2>
    //         <p className={inter.className}>
    //           Learn about Next.js in an interactive course with&nbsp;quizzes!
    //         </p>
    //       </a>

    //       <a
    //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2 className={inter.className}>
    //           Templates <span>-&gt;</span>
    //         </h2>
    //         <p className={inter.className}>
    //           Discover and deploy boilerplate example Next.js&nbsp;projects.
    //         </p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2 className={inter.className}>
    //           Deploy <span>-&gt;</span>
    //         </h2>
    //         <p className={inter.className}>
    //           Instantly deploy your Next.js site to a shareable URL
    //           with&nbsp;Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>
    // </>

    <Login />
  );
}