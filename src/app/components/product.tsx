import ProductCard from "@/components/ProductCard";

type Props = {};
async function getData() {
  const options = {
    headers: {
      Authorization: `Bearer KpfU3GIxioRFdLgmZWhW8VcspiYWV38GUk6m83Ugt4kXxu5oHOn9Erd1sFsNKrMY`,
    },
  };

  const res = await fetch(
    "https://dev.sellix.io/v1/products/66b261762816f",
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function Product({}: Props) {
  const { data } = await getData();
  return (
    <div className="container py-12 lg:py-24">
      <h2 className="text-2xl font-bold text-center md:text-5xl  font-title uppercase mb-6 md:mb-10">
        <span className="">OUR </span>
        <span className="text-stroke text-stroke-accent text-stroke-fill-transparent">
          Products
        </span>
      </h2>
      <div className="grid lg:grid-cols-3 gap-8">
        <ProductCard data={data}></ProductCard>
        <ProductCard data={data}></ProductCard>
        <ProductCard data={data}></ProductCard>
      </div>
    </div>
  );
}

export default Product;
