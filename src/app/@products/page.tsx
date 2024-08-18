// async function getData() {
//     const options = {
//       headers: {
//         Authorization: `Bearer KpfU3GIxioRFdLgmZWhW8VcspiYWV38GUk6m83Ugt4kXxu5oHOn9Erd1sFsNKrMY`,
//       },
//       cache: "force-cache",
//       next: { revalidate: 0 },
//     };

import Layout from "./layout";

//     const res = await fetch("https://dev.sellix.io/v1/categories", options);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.json();
//   }

async function ProductList() {
  // const { data } = await getData();

  // const sidebarNavItems = data.categories.map((item: any) => {
  //   return {
  //     title: item?.title,
  //     href: ("/" + item?.title + "").toLowerCase(),
  //   };
  // });
  return (
    <Layout>
      <div className="border rounded-md border-accent p-4 w-full">123123</div>
    </Layout>
  );
}

export default ProductList;
