"use client";
import React, { useEffect, useState } from "react";
// import "./css/SellixEmbed.css";
import Image from "next/image";
import { Button } from "./ui/button";

interface SellixEmbedProps {
  productId?: string;
  groupId?: string;
  children: React.ReactNode;
}

const SellixEmbed: React.FC<SellixEmbedProps> = ({
  productId,
  groupId,
  children,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalCloseHandler = (event: MessageEvent) => {
      if (event.data === "close-embed") {
        setShowModal(false);
      }
    };

    window.addEventListener("message", modalCloseHandler);

    return () => {
      window.removeEventListener("message", modalCloseHandler);
    };
  }, []);

  const handleEmbedButtonClick = () => {
    setShowModal(true);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  let iframeUrl;

  if (productId) {
    iframeUrl = `https://embed.sellix.io/product/${productId}`;
  } else if (groupId) {
    iframeUrl = `https://embed.sellix.io/group/${groupId}`;
  }

  return (
    <>
     <Button className="bg-accent my-4" onClick={handleEmbedButtonClick}>{children}</Button>
      {showModal && (
        <div className="sellix-modal">
          <div className="sellix-backdrop" onClick={modalClose}></div>
          <div className="sellix-iframe-wrapper">
            <div className="sellix-iframe-content">
              <iframe
                src={iframeUrl}
                className="sellix-iframe"
                title="Sellix Embed"
                onLoad={() => {
                  const loader = document.querySelector(
                    ".sellix-iframe-loader-container"
                  );
                  if (loader) {
                    loader.remove();
                  }
                }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SellixEmbed;
