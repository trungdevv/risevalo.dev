import { SidebarNav } from "@/components/ui/sidebar-nav";
import React from "react";

async function getData() {
  const options = {
    headers: {
      Authorization: `Bearer KpfU3GIxioRFdLgmZWhW8VcspiYWV38GUk6m83Ugt4kXxu5oHOn9Erd1sFsNKrMY`,
    },
    cache: "force-cache",
    next: { revalidate: 0 },
  };

  const res = await fetch("https://dev.sellix.io/v1/categories", options);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type props = {
  children: React.ReactNode;
};
export default async function Layout({ children }: props) {
  const { data } = await getData();

  const sidebarNavItems = data.categories.map((item: any) => {
    return {
      title: item?.title,
      href: ("/" + item?.title + "").toLowerCase(),
    };
  });
  return (
    <div id="product" className="container py-12 lg:py-24">
      <h2 className="text-2xl font-bold text-center md:text-5xl  font-title uppercase mb-6 md:mb-10">
        <span className="">OUR </span>
        <span className="text-stroke text-stroke-accent text-stroke-fill-transparent">
          Products
        </span>
      </h2>
      <div className="flex gap-8">
        <div className="w-full">{children}</div>
        <aside>
          <SidebarNav
            className="border rounded-md border-accent p-4"
            items={sidebarNavItems}
          />
        </aside>
      </div>
    </div>
  );
}
