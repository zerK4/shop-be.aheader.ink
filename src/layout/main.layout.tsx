import Header from "@/components/Header";

function MainLayout({ children }: any) {

  return (
    <div className="relative">
      <div className="flex gap-2">
        <Header />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
