import Header from "@/components/landing/Header";
import EventList from "@/components/landing/EventList";

export default function Home() {
  return (
    <section className="container max-w-7xl mx-auto px-4">
      <Header />
      <EventList />
    </section>
  );
}
