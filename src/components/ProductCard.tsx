import { ReactNode } from "react";
import SellixEmbed from "./SellexEmbed";
import Image from "next/image";
import { Button } from "./ui/button";
import Paypal from "./icon/Paypal";

type props = {
  data: any;
};
const ProductCard: React.FC<props> = ({ data }: props) => {
  return (
    <div className=" text-center bg-[#161616]  rounded-md">
      <Image
        height={350}
        width={350}
        className="w-full rounded-t-md  "
        alt="123"
        src={`https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${data.product.cloudflare_image_id}/shopitem`}
      ></Image>
      <SellixEmbed productId={data.product?.uniqid}>
        <Paypal fill="#fff" /> &nbsp;PayPal
      </SellixEmbed>
    </div>
  );
};

export default ProductCard;
