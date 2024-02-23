import Header from "./src/pages/Header";

export default function Home() {
  return (
    <div className="flex min-h-full bg-white dark:bg-slate-900">
      <div className="flex w-full flex-col">
        <Header />
        This is Body
      </div>
    </div>
  );
}
