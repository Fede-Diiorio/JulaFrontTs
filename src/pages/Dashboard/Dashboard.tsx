import { Sidebar, StudentNavigation, Header } from "../../components";
import { BrowserRouter } from "react-router-dom";

export const Dashboard = () => {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Sidebar navbar={<StudentNavigation />} />
      </BrowserRouter>
    </main>
  );
};
