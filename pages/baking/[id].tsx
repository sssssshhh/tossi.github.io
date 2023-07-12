import Image from "next/image";

export default function Detail() {
    return (
      <div className="w-full h-3/4 px-14 pt-28 flex flex-col justify-center items-center space-y-10">
        <div>
          <div>title</div>
          <div>mini title</div>
          <div>description</div>
          <Image
                src="/victoriaCake.jpg"
                width={800}
                height={100}
                alt="This is detaled image."
          />
          <div>recipes</div>
        </div>
      </div>
    )
}