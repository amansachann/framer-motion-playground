import BouncingLoader from "@/components/3-Keyframes/BouncingLoader";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center flex-col gap-8">
        <BouncingLoader />
      </div>
    </>
  );
}
