import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Head from "./components/Head"
import { useState } from "react";
import ReportTable from "./components/ReportTable";

export default function Home() {
  const [report, setReport] = useState([]);
  const [counter, setCounter] = useState(0);
  function formHandle(event) {
    event.preventDefault();

    setCounter(counter + 1);

    const addedLocation = {
      location: event.target.location.value,
      minCustomers: event.target.minimum_customers_per_hour.value,
      maxCustomers: event.target.maximum_customers_per_hour.value,
      avgCustomers: event.target.average_cookies_per_sale.value,
    };
  }
  return (
    <div className="bg-[#87439c] h-screen">
      <Head />
      <Header />
      <Main formHandle={formHandle} />
    
      { counter > 0 ? <ReportTable report={report} /> : <h2  className="text-center text-black">No Cookie Stands Available</h2>}

      <Footer counter={counter}/>
    </div>
  );
}