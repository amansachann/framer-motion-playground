import DraggableBox from "@/components/DraggableBox";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center flex-col gap-8">
        <DraggableBox />
      </div>
    </>
  );
}
