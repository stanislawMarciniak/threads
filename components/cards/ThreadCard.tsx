import { formatDateString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    id: string;
    image: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
}: Props) => {
  return (
    <article
      className={`flex flex-col w-full rounded-xl  ${
        isComment ? "px-0 xs:px-7" : "bg-dark-2 p-7"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-row flex-1 w-full gap-4">
          <div className="flex flex-col items-center">
            <Link
              href={`/profile/${author.id}`}
              className="relative h-11 w-11 "
            >
              <Image
                src={author.image}
                fill
                alt="Profile image"
                className="rounded-full cursor-pointer"
              />
            </Link>
            <div className="thread-card_bar" />
          </div>
          <div className="flex flex-col w-full">
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="cursor-pointer text-base-semibold text-light-1">
                {author.name}
              </h4>
            </Link>
            <p className="mt-2 text-small-regular text-light-2">{content}</p>
            <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
              <div className="flex gap-3.5">
                <Image
                  src="/assets/heart-gray.svg"
                  alt="heart icon"
                  width={24}
                  height={24}
                  className="object-contain cursor-pointer"
                />
                <Link href={`/thread/${id}`}>
                  <Image
                    src="/assets/reply.svg"
                    alt="reply icon"
                    width={24}
                    height={24}
                    className="object-contain cursor-pointer"
                  />
                </Link>

                <Image
                  src="/assets/repost.svg"
                  alt="repost icon"
                  width={24}
                  height={24}
                  className="object-contain cursor-pointer"
                />
                <Image
                  src="/assets/share.svg"
                  alt="share icon"
                  width={24}
                  height={24}
                  className="object-contain cursor-pointer"
                />
              </div>
              {isComment && comments.length > 0 && (
                <Link href={`/thread/${id}`}>
                  <p>{comments.length} replies</p>
                </Link>
              )}
            </div>
          </div>
        </div>

        {!isComment && community && (
          <Link
            href={`/communities/${community.id}`}
            className="flex items-center mt-5"
          >
            <p className="text-subtle-medium text-gray-1">
              {formatDateString(createdAt)} - {community.name} Community
            </p>
            <Image
              src={community.image}
              alt={community.name}
              width={14}
              height={14}
              className="object-cover ml-1 rounded-full"
            />
          </Link>
        )}
      </div>
    </article>
  );
};

export default ThreadCard;
