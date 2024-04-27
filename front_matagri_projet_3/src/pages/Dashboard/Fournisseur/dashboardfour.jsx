import Navigation from "./navbar";
function Dashboard() {
  return (
    <>
      <div className="breadcrumb-section container">
        <h4 class="text-uppercase">Fournisseur</h4>
      </div>


      <section className="dashboard-section section-b-space">
        <div className="container">
          <Navigation/>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
