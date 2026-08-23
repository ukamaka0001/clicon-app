import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

interface Blog {
  tags: string[];
}

interface ShareSocialProps {
  blog: Blog;
}

export default function ShareSocial({
  blog,
}: ShareSocialProps) {
  return (
    <section className="flex flex-col gap-6 border-b border-gray-200 py-8 md:flex-row md:items-center md:justify-between">
      {/* Tags */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-semibold text-gray-900">
          Tags:
        </span>

        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-gray-200 px-3 py-1 text-sm text-gray-600 transition hover:border-orange-500 hover:text-orange-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <span className="font-semibold text-gray-900">
          Share:
        </span>

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:scale-105">
          <FaFacebookF />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white transition hover:scale-105">
          <FaTwitter />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:scale-105">
          <FaLinkedinIn />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white transition hover:scale-105">
          <FaInstagram />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E60023] text-white transition hover:scale-105">
          <FaPinterestP />
        </button>
      </div>
    </section>
  );
}