import { Sidebar, StudentNavigation, Header } from "../../components";

export const Dashboard = () => {
  return (
    <main>
      <Header />
      <Sidebar navbar={<StudentNavigation />} />
    </main>
  );
};
