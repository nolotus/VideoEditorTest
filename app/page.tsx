// import VideoEditor from "@/components/VideoEditor";
import dynamic from "next/dynamic";

const VideoEditor = dynamic(() => import("../components/VideoEditor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <VideoEditor />
    </>
  );
}
