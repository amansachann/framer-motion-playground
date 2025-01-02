import BasicAnimatedButton from "@/components/BasicAnimatedButton";
import BasicFadeInAnimation from "@/components/BasicFadeInAnimation";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center flex-col gap-8">
        <BasicFadeInAnimation />
        <BasicAnimatedButton/>
      </div>
    </>
  );
}
