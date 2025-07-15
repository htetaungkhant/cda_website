import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="overflow-hidden font-[family-name:var(--font-poppins)]">
      <Header />
      <Banner />
      <section className="px-4 py-8 flex flex-col gap-4 text-black">
        <h1 className="text-4xl">
          Your Road to <strong>Driving Success</strong>
        </h1>
        <p>
          Start your journey with ease at Cambridge Driving Academy. Whether
          it&apos;s getting your provisional licence, enrolling in lessons, or
          acing your driving test, we&apos;re here to support you with expert
          training and a clear path to becoming a confident driver.
        </p>
      </section>
      <footer></footer>
    </main>
  );
}
