"use client";

import Image from "next/image";

interface ShareButtonProps {
  content: string;
  id: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ content, id }) => {
  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this thread!",
          text: content,
          url: `/thread/${id}`,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard
        .writeText(`/thread/${id}`)
        .then(() => alert("Link copied to clipboard"))
        .catch((err) => console.error("Error copying link to clipboard", err));
    }
  };

  return (
    <button
      className="flex items-center text-subtle-medium text-gray-1"
      onClick={share}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <p className="mr-2">Share </p>
      <Image
        src="/assets/share.svg"
        alt="share icon"
        width={24}
        height={24}
        className="object-contain"
      />
    </button>
  );
};

export default ShareButton;
