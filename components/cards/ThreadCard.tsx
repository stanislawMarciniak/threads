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
    <article className="flex flex-col w-full rounded-xl bg-dark-2 p-7">
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
            <div className="flex flex-col gap-3 mt-5">
              <div className="flex gap-3.5">
                <Link href={`/thread/${id}`}>
                  <Image
                    src="/assets/heart-gray.svg"
                    alt="heart icon"
                    width={24}
                    height={24}
                    className="object-contain cursor-pointer"
                  />
                </Link>
                <Image
                  src="/assets/reply.svg"
                  alt="reply icon"
                  width={24}
                  height={24}
                  className="object-contain cursor-pointer"
                />
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
      </div>
    </article>
  );
};

export default ThreadCard;
