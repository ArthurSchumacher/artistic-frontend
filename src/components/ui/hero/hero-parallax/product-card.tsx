"use client";
import { Product } from "@/types/product/get-product";
import {
    motion,
    MotionValue,
  } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({
    product,
    translate,
  }: {
    product: Product;
    translate: MotionValue<number>;
  }) => {
    return (
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={product.uuid}
        className="group/product h-96 w-[30rem] relative shrink-0"
      >
        <Link
          href={product.href}
          className="block group-hover/product:shadow-2xl "
        >
          <Image
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={product.label}
          />
        </Link>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {product.label}
        </h2>
      </motion.div>
    );
  };